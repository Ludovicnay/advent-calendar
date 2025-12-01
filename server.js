/**
 * Express server for Advent Calendar with PostgreSQL sync
 */

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

// Initialize database table
async function initDatabase() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS opened_days (
                id SERIAL PRIMARY KEY,
                day_number INTEGER NOT NULL UNIQUE,
                category VARCHAR(1) NOT NULL,
                gift_data JSONB NOT NULL,
                opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Database initialized');
    } catch (err) {
        console.error('Database init error:', err);
    }
}

// Security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "blob:"],
            connectSrc: ["'self'"],
        },
    },
    crossOriginEmbedderPolicy: false,
}));

// Parse JSON bodies
app.use(express.json());

// Disable caching for HTML
app.use((req, res, next) => {
    if (req.path.endsWith('.html') || req.path === '/') {
        res.set('Cache-Control', 'no-store');
    }
    next();
});

// API Routes

// Get all opened days
app.get('/api/history', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT day_number, category, gift_data, opened_at FROM opened_days ORDER BY day_number'
        );

        // Convert to object format { dayNumber: { category, giftData, openedAt } }
        const history = {};
        result.rows.forEach(row => {
            history[row.day_number] = {
                category: row.category,
                giftData: row.gift_data,
                openedAt: row.opened_at
            };
        });

        res.json(history);
    } catch (err) {
        console.error('Error fetching history:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Save opened day
app.post('/api/history', async (req, res) => {
    const { dayNumber, category, giftData } = req.body;

    if (!dayNumber || !category || !giftData) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await pool.query(
            `INSERT INTO opened_days (day_number, category, gift_data)
             VALUES ($1, $2, $3)
             ON CONFLICT (day_number) DO UPDATE SET
                category = EXCLUDED.category,
                gift_data = EXCLUDED.gift_data,
                opened_at = CURRENT_TIMESTAMP`,
            [dayNumber, category, JSON.stringify(giftData)]
        );

        res.json({ success: true });
    } catch (err) {
        console.error('Error saving day:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Reset all opened days (admin only)
app.post('/api/reset', async (req, res) => {
    const { adminPassword } = req.body;

    // Verify admin password
    if (adminPassword !== 'admin!') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        await pool.query('DELETE FROM opened_days');
        res.json({ success: true, message: 'All history cleared' });
    } catch (err) {
        console.error('Error resetting:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Delete a specific day (admin only)
app.delete('/api/history/:day', async (req, res) => {
    const { adminPassword } = req.body;
    const dayNumber = parseInt(req.params.day);

    // Verify admin password
    if (adminPassword !== 'admin!') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        await pool.query('DELETE FROM opened_days WHERE day_number = $1', [dayNumber]);
        res.json({ success: true, message: `Day ${dayNumber} deleted` });
    } catch (err) {
        console.error('Error deleting day:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Serve static files
app.use(express.static(path.join(__dirname), {
    extensions: ['html'],
    index: 'index.html'
}));

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Advent Calendar running on port ${PORT}`);
    });
});
