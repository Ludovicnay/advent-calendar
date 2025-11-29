/**
 * Advent Calendar App
 * A romantic, interactive advent calendar with gift pool system
 *
 * Flow: User picks category → Random gift from pool assigned to next available day
 */

class AdventCalendar {
    constructor() {
        // State
        this.isAdmin = false;
        this.userName = '';
        this.currentDay = null;
        this.currentCategory = null;
        this.editingGiftIndex = null;
        this.editingCategory = null;
        this.currentImageData = null; // For image upload
        this.isAccessGranted = false;
        this.pendingDay = null; // Day waiting for category selection

        // IMPORTANT: Change this password to your own!
        // This is the global access password for the calendar
        this.globalAccessPassword = 'patapouf';

        // Load saved data
        this.theme = localStorage.getItem('adventTheme') || 'light';
        this.adminPassword = localStorage.getItem('adventAdminPassword') || null;
        this.giftPools = this.loadGiftPools();
        this.openedDays = this.loadOpenedDays(); // { dayNumber: { category, giftData, note } }
        this.notes = this.loadNotes();
        this.lastOpenDate = localStorage.getItem('adventLastOpenDate') || null;

        // DOM Elements
        this.accessScreen = document.getElementById('accessScreen');
        this.loginScreen = document.getElementById('loginScreen');
        this.appContainer = document.getElementById('appContainer');
        this.calendarGrid = document.getElementById('calendarGrid');
        this.surpriseModal = document.getElementById('surpriseModal');
        this.noteModal = document.getElementById('noteModal');
        this.giftPoolModal = document.getElementById('giftPoolModal');
        this.editGiftModal = document.getElementById('editGiftModal');
        this.importModal = document.getElementById('importModal');
        this.passwordModal = document.getElementById('passwordModal');
        this.celebrationOverlay = document.getElementById('celebrationOverlay');

        // Initialize
        this.init();
    }

    init() {
        this.applyTheme();
        this.bindEvents();
        this.checkAccess();
    }

    // ============================================
    // GLOBAL ACCESS
    // ============================================

    checkAccess() {
        const accessGranted = sessionStorage.getItem('adventAccessGranted');
        if (accessGranted === 'true') {
            this.isAccessGranted = true;
            this.showLoginScreen();
            this.checkAutoLogin();
        } else {
            this.showAccessScreen();
        }
    }

    showAccessScreen() {
        this.accessScreen.classList.remove('hidden');
        this.loginScreen.classList.add('hidden');
        this.appContainer.classList.add('hidden');
    }

    showLoginScreen() {
        this.accessScreen.classList.add('hidden');
        this.loginScreen.classList.remove('hidden');
        this.appContainer.classList.add('hidden');
    }

    verifyAccess() {
        const password = document.getElementById('accessPassword').value;

        if (password === this.globalAccessPassword) {
            this.isAccessGranted = true;
            sessionStorage.setItem('adventAccessGranted', 'true');
            this.showLoginScreen();
            this.checkAutoLogin();
        } else {
            alert('Mot de passe incorrect ! 🔒');
            document.getElementById('accessPassword').value = '';
            document.getElementById('accessPassword').focus();
        }
    }

    // ============================================
    // DATE-BASED ADVENT CALENDAR SYSTEM
    // ============================================

    // Get current advent day (1-25 based on December date)
    getCurrentAdventDay() {
        const now = new Date();
        const month = now.getMonth(); // 0-11
        const day = now.getDate(); // 1-31

        // December = month 11
        if (month === 11 && day >= 1 && day <= 25) {
            return day;
        }

        // Before December 1st
        if (month < 11 || (month === 11 && day < 1)) {
            return 0; // Not yet started
        }

        // After December 25th
        return 25; // Calendar is over
    }

    // Check if a specific day can be opened
    canOpenDay(day) {
        // Admin can always open any day
        if (this.isAdmin) return true;

        const currentAdventDay = this.getCurrentAdventDay();

        // Can only open days up to and including today's date
        return day <= currentAdventDay;
    }

    // Check if today's day is available to open (not yet opened)
    getTodayOpenableDay() {
        const currentAdventDay = this.getCurrentAdventDay();

        if (currentAdventDay === 0) return null; // Not December yet
        if (currentAdventDay > 25) return null; // Past Christmas

        // Return today if not opened, otherwise null
        if (!this.openedDays[currentAdventDay]) {
            return currentAdventDay;
        }

        return null; // Already opened today
    }

    // Get status message for the daily status banner
    getDailyStatusInfo() {
        const currentAdventDay = this.getCurrentAdventDay();
        const now = new Date();

        if (currentAdventDay === 0) {
            // Calculate days until December 1st
            const dec1 = new Date(now.getFullYear(), 11, 1);
            if (now > dec1) {
                dec1.setFullYear(dec1.getFullYear() + 1);
            }
            const daysUntil = Math.ceil((dec1 - now) / (1000 * 60 * 60 * 24));
            return {
                type: 'waiting',
                message: `⏰ Le calendrier commence dans ${daysUntil} jour${daysUntil > 1 ? 's' : ''} !`
            };
        }

        if (currentAdventDay > 25) {
            return {
                type: 'finished',
                message: '🎄 Le calendrier de l\'Avent est terminé ! Joyeux Noël !'
            };
        }

        // Check if today's day is already opened
        if (this.openedDays[currentAdventDay]) {
            if (currentAdventDay === 25) {
                return {
                    type: 'finished',
                    message: '🎄 Tu as ouvert toutes les surprises ! Joyeux Noël !'
                };
            }
            return {
                type: 'waiting',
                message: `✅ Jour ${currentAdventDay} ouvert ! Reviens demain pour le jour ${currentAdventDay + 1}`
            };
        }

        return {
            type: 'available',
            message: `✨ Jour ${currentAdventDay} disponible ! Ouvre ta surprise du jour !`
        };
    }

    updateDailyStatus() {
        const statusEl = document.getElementById('dailyStatus');
        if (!statusEl || this.isAdmin) return;

        const status = this.getDailyStatusInfo();
        statusEl.innerHTML = `<span class="status-${status.type}">${status.message}</span>`;
        statusEl.className = `daily-status ${status.type}`;
    }

    startStatusTimer() {
        // Clear existing timer
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }

        this.updateDailyStatus();
        // Update every minute
        this.countdownInterval = setInterval(() => this.updateDailyStatus(), 60000);
    }

    // ============================================
    // DATA MANAGEMENT
    // ============================================

    loadGiftPools() {
        const saved = localStorage.getItem('adventGiftPools');
        if (saved) {
            return JSON.parse(saved);
        }
        // Initialize with default data
        return {
            A: [...DEFAULT_GIFT_POOL.A],
            B: [...DEFAULT_GIFT_POOL.B],
            C: [...DEFAULT_GIFT_POOL.C]
        };
    }

    saveGiftPools() {
        localStorage.setItem('adventGiftPools', JSON.stringify(this.giftPools));
    }

    loadOpenedDays() {
        const saved = localStorage.getItem('adventOpenedDays');
        return saved ? JSON.parse(saved) : {};
    }

    saveOpenedDays() {
        localStorage.setItem('adventOpenedDays', JSON.stringify(this.openedDays));
    }

    loadNotes() {
        const saved = localStorage.getItem('adventNotes');
        return saved ? JSON.parse(saved) : {};
    }

    saveNotes() {
        localStorage.setItem('adventNotes', JSON.stringify(this.notes));
    }

    getNextAvailableDay() {
        for (let day = 1; day <= 25; day++) {
            if (!this.openedDays[day]) {
                return day;
            }
        }
        return null; // All days opened
    }

    getRemainingGifts(category) {
        return this.giftPools[category] ? this.giftPools[category].length : 0;
    }

    getRandomGift(category) {
        const pool = this.giftPools[category];
        if (!pool || pool.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * pool.length);
        const gift = pool[randomIndex];

        // Remove from pool
        pool.splice(randomIndex, 1);
        this.saveGiftPools();

        return gift;
    }

    // ============================================
    // AUTHENTICATION
    // ============================================

    checkAutoLogin() {
        const savedSession = localStorage.getItem('adventSession');
        if (savedSession) {
            const session = JSON.parse(savedSession);
            this.userName = session.userName;
            this.isAdmin = session.isAdmin;
            this.showApp();
        }
    }

    login(isAdmin) {
        const name = document.getElementById('loginName').value.trim();

        if (!name) {
            alert('Entre ton prénom !');
            return;
        }

        if (isAdmin) {
            const password = document.getElementById('adminPassword').value;

            // First time setup
            if (!this.adminPassword) {
                this.openModal(this.passwordModal);
                return;
            }

            // Check password
            if (password !== this.adminPassword) {
                alert('Mot de passe incorrect !');
                return;
            }
        }

        this.userName = name;
        this.isAdmin = isAdmin;

        // Save session
        localStorage.setItem('adventSession', JSON.stringify({
            userName: name,
            isAdmin: isAdmin
        }));

        this.showApp();
    }

    logout() {
        localStorage.removeItem('adventSession');
        this.userName = '';
        this.isAdmin = false;
        this.loginScreen.classList.remove('hidden');
        this.appContainer.classList.add('hidden');
        document.getElementById('loginName').value = '';
        document.getElementById('adminPassword').value = '';
    }

    setPassword() {
        const newPass = document.getElementById('newPassword').value;
        const confirmPass = document.getElementById('confirmPassword').value;

        if (!newPass || newPass.length < 4) {
            alert('Le mot de passe doit contenir au moins 4 caractères !');
            return;
        }

        if (newPass !== confirmPass) {
            alert('Les mots de passe ne correspondent pas !');
            return;
        }

        this.adminPassword = newPass;
        localStorage.setItem('adventAdminPassword', newPass);
        this.closeModal(this.passwordModal);

        // Now complete the login
        document.getElementById('adminPassword').value = newPass;
        this.login(true);
    }

    showApp() {
        this.loginScreen.classList.add('hidden');
        this.appContainer.classList.remove('hidden');

        // Update welcome message
        document.getElementById('welcomeTitle').textContent =
            this.isAdmin ? 'Mode Configuration' : `Calendrier de ${this.userName}`;
        document.getElementById('welcomeSubtitle').textContent =
            this.isAdmin ? 'Ajoute et gère les surprises' : '25 Jours d\'Amour et de Surprises';

        // Show/hide admin controls
        document.querySelectorAll('.admin-only-btn').forEach(btn => {
            btn.classList.toggle('hidden', !this.isAdmin);
        });
        document.getElementById('adminNotice').classList.toggle('hidden', !this.isAdmin);

        // Hide category selection by default (show when clicking on an available day)
        // For admin, always show it
        document.getElementById('categorySection').classList.toggle('hidden', !this.isAdmin);

        // Reset category section titles
        this.resetCategorySectionTitles();

        // Show/hide daily status (only for user mode)
        const dailyStatusEl = document.getElementById('dailyStatus');
        if (dailyStatusEl) {
            dailyStatusEl.classList.toggle('hidden', this.isAdmin);
        }

        // Start status timer for user mode
        if (!this.isAdmin) {
            this.startStatusTimer();
        }

        this.updateUI();
    }

    // ============================================
    // THEME MANAGEMENT
    // ============================================

    applyTheme() {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${this.theme}-theme`);

        const themeIcon = document.querySelector('#themeToggle .theme-icon');
        if (themeIcon) {
            themeIcon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('adventTheme', this.theme);
        this.applyTheme();
    }

    // ============================================
    // UI UPDATES
    // ============================================

    updateUI() {
        this.updateRemainingCounts();
        this.updateProgress();
        this.renderCalendar();
    }

    updateRemainingCounts() {
        document.getElementById('remainingA').textContent = this.getRemainingGifts('A');
        document.getElementById('remainingB').textContent = this.getRemainingGifts('B');
        document.getElementById('remainingC').textContent = this.getRemainingGifts('C');

        // Disable empty categories
        document.querySelectorAll('.category-card').forEach(card => {
            const category = card.dataset.category;
            const remaining = this.getRemainingGifts(category);
            card.classList.toggle('disabled', remaining === 0);
            card.disabled = remaining === 0;
        });
    }

    updateProgress() {
        const opened = Object.keys(this.openedDays).length;
        const remaining = 25 - opened;

        document.getElementById('totalOpened').textContent = opened;
        document.getElementById('totalRemaining').textContent = remaining;
    }

    renderCalendar() {
        this.calendarGrid.innerHTML = '';
        const currentAdventDay = this.getCurrentAdventDay();

        // Show all 25 days with different states
        for (let day = 1; day <= 25; day++) {
            const dayEl = document.createElement('div');
            dayEl.dataset.day = day;

            const isOpened = this.openedDays[day];
            const canOpen = this.canOpenDay(day);
            const isToday = day === currentAdventDay;
            const hasNote = this.notes[day];

            if (isOpened) {
                // Day has been opened - show the gift
                const dayData = this.openedDays[day];
                dayEl.className = `calendar-day opened category-${dayData.category.toLowerCase()}-opened`;
                dayEl.innerHTML = `
                    <span class="day-number">${day}</span>
                    <span class="day-icon">${dayData.giftData.emoji || '🎁'}</span>
                    ${hasNote ? '<span class="day-note-indicator">📝</span>' : ''}
                `;
                dayEl.addEventListener('click', () => this.showSurprise(day));
            } else if (canOpen || this.isAdmin) {
                // Day can be opened (today or past, or admin mode)
                dayEl.className = `calendar-day available${isToday ? ' today' : ''}`;
                dayEl.innerHTML = `
                    <span class="day-number">${day}</span>
                    <span class="day-icon">${isToday ? '🎁' : '🎄'}</span>
                    ${isToday ? '<span class="day-today-badge">Aujourd\'hui!</span>' : ''}
                `;
                dayEl.addEventListener('click', () => this.handleDayClick(day));
            } else {
                // Day is locked (future day)
                dayEl.className = 'calendar-day locked';
                dayEl.innerHTML = `
                    <span class="day-number">${day}</span>
                    <span class="day-icon">🔒</span>
                `;
                dayEl.addEventListener('click', () => {
                    alert(`Le jour ${day} sera disponible le ${day} décembre ! 📅`);
                });
            }

            this.calendarGrid.appendChild(dayEl);
        }
    }

    handleDayClick(day) {
        const currentAdventDay = this.getCurrentAdventDay();

        // Admin can always open any day
        if (!this.isAdmin) {
            // Check if this day is in the future
            if (day > currentAdventDay) {
                alert(`Le jour ${day} sera disponible le ${day} décembre ! 📅`);
                return;
            }

            // Check if trying to open a past day that wasn't opened
            if (day < currentAdventDay && !this.openedDays[day]) {
                alert(`Tu as manqué le jour ${day} ! Tu ne peux ouvrir que le jour actuel. 😢`);
                return;
            }
        }

        // Show category selection for this day
        this.pendingDay = day;
        this.showCategorySelectionForDay(day);
    }

    showCategorySelectionForDay(day) {
        // Show the category section
        const categorySection = document.getElementById('categorySection');
        categorySection.classList.remove('hidden');

        // Update the category section title for this specific day
        const sectionTitle = document.querySelector('#categorySection .section-title');
        const sectionSubtitle = document.querySelector('#categorySection .section-subtitle');

        if (sectionTitle) {
            sectionTitle.textContent = `✨ Jour ${day} - Choisis ta Catégorie ✨`;
        }
        if (sectionSubtitle) {
            sectionSubtitle.textContent = 'Sélectionne une catégorie pour découvrir ta surprise !';
        }

        // Scroll to category selection
        categorySection.scrollIntoView({ behavior: 'smooth' });
    }

    resetCategorySectionTitles() {
        const sectionTitle = document.querySelector('#categorySection .section-title');
        const sectionSubtitle = document.querySelector('#categorySection .section-subtitle');

        if (sectionTitle) {
            sectionTitle.textContent = '✨ Choisis l\'Aventure du Jour ✨';
        }
        if (sectionSubtitle) {
            sectionSubtitle.textContent = 'Sélectionne une catégorie pour découvrir une surprise aléatoire !';
        }
    }

    getCategoryName(category) {
        const names = {
            A: 'Ensemble en Personne',
            B: 'À Distance',
            C: 'Soirée Ensemble'
        };
        return names[category] || '';
    }

    // ============================================
    // EVENT HANDLERS
    // ============================================

    bindEvents() {
        // Access screen
        document.getElementById('accessBtn').addEventListener('click', () => this.verifyAccess());
        document.getElementById('accessPassword').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.verifyAccess();
        });

        // Login tabs
        document.querySelectorAll('.login-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');

                const isAdmin = e.target.dataset.tab === 'admin';
                document.querySelector('.admin-only').classList.toggle('hidden', !isAdmin);
                document.querySelector('.user-login-text').classList.toggle('hidden', isAdmin);
                document.querySelector('.admin-login-text').classList.toggle('hidden', !isAdmin);
            });
        });

        // Login button
        document.getElementById('loginBtn').addEventListener('click', () => {
            const isAdmin = document.querySelector('.login-tab.active').dataset.tab === 'admin';
            this.login(isAdmin);
        });

        // Enter key on login
        document.getElementById('loginName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') document.getElementById('loginBtn').click();
        });
        document.getElementById('adminPassword').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') document.getElementById('loginBtn').click();
        });

        // Password setup
        document.getElementById('savePassword').addEventListener('click', () => this.setPassword());

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());

        // Category selection
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!card.disabled) {
                    this.handleCategorySelect(card.dataset.category);
                }
            });
        });

        // Admin buttons
        document.getElementById('manageGiftsBtn').addEventListener('click', () => this.showGiftPoolModal());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportCalendar());
        document.getElementById('importBtn').addEventListener('click', () => this.showImportModal());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetProgress());

        // Surprise modal
        document.getElementById('closeSurpriseModal').addEventListener('click', () => this.closeModal(this.surpriseModal));
        document.getElementById('closeSurpriseX').addEventListener('click', () => this.closeModal(this.surpriseModal));
        document.getElementById('addNoteBtn').addEventListener('click', () => this.showNoteModal());

        // Note modal
        document.getElementById('closeNoteModal').addEventListener('click', () => this.closeModal(this.noteModal));
        document.getElementById('cancelNote').addEventListener('click', () => this.closeModal(this.noteModal));
        document.getElementById('saveNote').addEventListener('click', () => this.saveNote());

        // Gift pool modal
        document.getElementById('closeGiftPoolModal').addEventListener('click', () => this.closeModal(this.giftPoolModal));
        document.getElementById('closeGiftPoolX').addEventListener('click', () => this.closeModal(this.giftPoolModal));
        document.querySelectorAll('.gift-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.gift-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.renderGiftPoolList(e.target.dataset.category);
            });
        });
        document.getElementById('addGiftBtn').addEventListener('click', () => this.showAddGiftModal());

        // Edit gift modal
        document.getElementById('closeEditGiftModal').addEventListener('click', () => this.closeModal(this.editGiftModal));
        document.getElementById('cancelEditGift').addEventListener('click', () => this.closeModal(this.editGiftModal));
        document.getElementById('saveEditGift').addEventListener('click', () => this.saveGift());
        document.getElementById('deleteGift').addEventListener('click', () => this.deleteGift());

        // Image upload handling
        const imagePreview = document.getElementById('imagePreview');
        const imageInput = document.getElementById('editImage');
        const removeImageBtn = document.getElementById('removeImageBtn');

        imagePreview.addEventListener('click', () => imageInput.click());
        imageInput.addEventListener('change', (e) => this.handleImageUpload(e));
        removeImageBtn.addEventListener('click', () => this.removeImage());

        // Import modal
        document.getElementById('closeImportModal').addEventListener('click', () => this.closeModal(this.importModal));
        document.getElementById('cancelImport').addEventListener('click', () => this.closeModal(this.importModal));
        document.getElementById('confirmImport').addEventListener('click', () => this.importCalendar());

        // Close modals on overlay click
        [this.surpriseModal, this.noteModal, this.giftPoolModal, this.editGiftModal, this.importModal].forEach(modal => {
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) this.closeModal(modal);
                });
            }
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    // ============================================
    // CATEGORY SELECTION & GIFT REVEAL
    // ============================================

    handleCategorySelect(category) {
        // Determine which day to open
        let dayToOpen;

        if (this.isAdmin) {
            // Admin mode: use pendingDay or next available
            dayToOpen = this.pendingDay || this.getNextAvailableDay();
        } else {
            // User mode: must be the current advent day
            const currentAdventDay = this.getCurrentAdventDay();

            if (currentAdventDay === 0) {
                alert('Le calendrier de l\'Avent commence le 1er décembre ! 📅');
                return;
            }

            if (currentAdventDay > 25) {
                alert('Le calendrier de l\'Avent est terminé ! Joyeux Noël ! 🎄');
                return;
            }

            // Check if today's day is already opened
            if (this.openedDays[currentAdventDay]) {
                alert(`Tu as déjà ouvert la surprise du jour ${currentAdventDay} ! 🎁\n\nReviens demain pour la prochaine surprise !`);
                return;
            }

            dayToOpen = currentAdventDay;
        }

        if (!dayToOpen) {
            alert('Les 25 jours ont été ouverts ! 🎉');
            return;
        }

        const gift = this.getRandomGift(category);
        if (!gift) {
            alert(`Plus de surprises dans "${this.getCategoryName(category)}" !`);
            return;
        }

        // Assign gift to day
        this.openedDays[dayToOpen] = {
            category: category,
            giftData: gift,
            openedAt: new Date().toISOString()
        };
        this.saveOpenedDays();

        // Clear pending day
        this.pendingDay = null;

        // Hide category section and reset titles (only for user mode)
        if (!this.isAdmin) {
            document.getElementById('categorySection').classList.add('hidden');
            this.resetCategorySectionTitles();
        }

        // Update status display
        this.updateDailyStatus();

        // Celebration!
        this.celebrate();

        // Show the surprise
        setTimeout(() => {
            this.currentDay = dayToOpen;
            this.showSurprise(dayToOpen);
            this.updateUI();
        }, 500);
    }

    showSurprise(day) {
        const dayData = this.openedDays[day];
        if (!dayData) return;

        const gift = dayData.giftData;
        this.currentDay = day;

        document.getElementById('surpriseDayNumber').textContent = day;
        document.getElementById('surpriseCategoryBadge').textContent = this.getCategoryName(dayData.category);

        // Update header color based on category
        const header = document.querySelector('.surprise-header');
        header.style.background = `linear-gradient(135deg, var(--category-${dayData.category.toLowerCase()}), var(--accent-secondary))`;

        // Build surprise content HTML
        let html = `
            <div class="surprise-title">
                <span class="surprise-emoji">${gift.emoji || '🎁'}</span>
                <h3>${gift.title}</h3>
            </div>
        `;

        if (gift.description) {
            html += `<div class="surprise-description">${gift.description}</div>`;
        }

        if (gift.link) {
            html += `
                <a href="${gift.link}" target="_blank" rel="noopener noreferrer" class="surprise-link">
                    <span>🔗</span>
                    <span>${gift.linkText || 'Click here'}</span>
                </a>
            `;
        }

        if (gift.task) {
            html += `
                <div class="surprise-task">
                    <h4>✨ Ton Défi</h4>
                    <p>${gift.task}</p>
                </div>
            `;
        }

        if (gift.gift) {
            html += `
                <div class="surprise-gift">
                    <h4>🎁 Indice Cadeau</h4>
                    <p>${gift.gift}</p>
                </div>
            `;
        }

        // Show image if exists
        if (gift.image) {
            html += `
                <div class="surprise-image">
                    <img src="${gift.image}" alt="Image surprise" onclick="window.adventCalendar.openImageFullscreen('${gift.image.replace(/'/g, "\\'")}')">
                    <p class="image-hint">📷 Clique pour agrandir</p>
                </div>
            `;
        }

        // Show note if exists
        if (this.notes[day]) {
            html += `
                <div class="surprise-note">
                    <h4>📝 Ta Note</h4>
                    <p>${this.notes[day]}</p>
                </div>
            `;
        }

        document.getElementById('surpriseContent').innerHTML = html;
        this.openModal(this.surpriseModal);
    }

    // ============================================
    // NOTES
    // ============================================

    showNoteModal() {
        document.getElementById('noteDayNumber').textContent = this.currentDay;
        document.getElementById('noteTextarea').value = this.notes[this.currentDay] || '';
        this.openModal(this.noteModal);
    }

    saveNote() {
        const note = document.getElementById('noteTextarea').value.trim();

        if (note) {
            this.notes[this.currentDay] = note;
        } else {
            delete this.notes[this.currentDay];
        }

        this.saveNotes();
        this.closeModal(this.noteModal);
        this.renderCalendar();

        // Refresh surprise modal
        if (this.surpriseModal.classList.contains('active')) {
            this.showSurprise(this.currentDay);
        }
    }

    // ============================================
    // GIFT POOL MANAGEMENT (ADMIN)
    // ============================================

    showGiftPoolModal() {
        this.currentCategory = 'A';
        document.querySelectorAll('.gift-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('.gift-tab[data-category="A"]').classList.add('active');
        this.renderGiftPoolList('A');
        this.openModal(this.giftPoolModal);
    }

    renderGiftPoolList(category) {
        this.currentCategory = category;
        const list = document.getElementById('giftPoolList');
        const pool = this.giftPools[category] || [];

        if (pool.length === 0) {
            list.innerHTML = `
                <div class="empty-pool">
                    <p>Pas encore de cadeaux dans cette catégorie !</p>
                    <p>Ajoutes-en ci-dessous.</p>
                </div>
            `;
            return;
        }

        list.innerHTML = pool.map((gift, index) => `
            <div class="gift-pool-item" data-index="${index}">
                <span class="gift-emoji">${gift.emoji || '🎁'}</span>
                <div class="gift-info">
                    <strong>${gift.title}</strong>
                    <p>${gift.description ? gift.description.substring(0, 50) + '...' : 'Pas de description'}</p>
                </div>
                <button class="edit-gift-btn" data-index="${index}">✏️</button>
            </div>
        `).join('');

        // Bind edit buttons
        list.querySelectorAll('.edit-gift-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showEditGiftModal(parseInt(btn.dataset.index));
            });
        });

        // Bind item click
        list.querySelectorAll('.gift-pool-item').forEach(item => {
            item.addEventListener('click', () => {
                this.showEditGiftModal(parseInt(item.dataset.index));
            });
        });
    }

    showAddGiftModal() {
        this.editingGiftIndex = null;
        this.editingCategory = this.currentCategory;
        this.currentImageData = null;

        document.getElementById('editGiftTitle').textContent = 'Ajouter un Cadeau';
        document.getElementById('editGiftCategory').textContent = this.getCategoryName(this.currentCategory);

        // Clear form
        document.getElementById('editTitle').value = '';
        document.getElementById('editEmoji').value = '🎁';
        document.getElementById('editDescription').value = '';
        document.getElementById('editLink').value = '';
        document.getElementById('editLinkText').value = '';
        document.getElementById('editTask').value = '';
        document.getElementById('editGift').value = '';
        this.clearImagePreview();

        document.getElementById('deleteGift').classList.add('hidden');
        this.openModal(this.editGiftModal);
    }

    showEditGiftModal(index) {
        this.editingGiftIndex = index;
        this.editingCategory = this.currentCategory;

        const gift = this.giftPools[this.currentCategory][index];
        this.currentImageData = gift.image || null;

        document.getElementById('editGiftTitle').textContent = 'Modifier le Cadeau';
        document.getElementById('editGiftCategory').textContent = this.getCategoryName(this.currentCategory);

        document.getElementById('editTitle').value = gift.title || '';
        document.getElementById('editEmoji').value = gift.emoji || '🎁';
        document.getElementById('editDescription').value = gift.description || '';
        document.getElementById('editLink').value = gift.link || '';
        document.getElementById('editLinkText').value = gift.linkText || '';
        document.getElementById('editTask').value = gift.task || '';
        document.getElementById('editGift').value = gift.gift || '';

        // Show image if exists
        if (gift.image) {
            this.showImagePreview(gift.image);
        } else {
            this.clearImagePreview();
        }

        document.getElementById('deleteGift').classList.remove('hidden');
        this.openModal(this.editGiftModal);
    }

    saveGift() {
        const title = document.getElementById('editTitle').value.trim();
        const description = document.getElementById('editDescription').value.trim();

        if (!title) {
            alert('Entre un titre !');
            return;
        }

        const giftData = {
            title: title,
            emoji: document.getElementById('editEmoji').value || '🎁',
            description: description,
            link: document.getElementById('editLink').value.trim(),
            linkText: document.getElementById('editLinkText').value.trim(),
            task: document.getElementById('editTask').value.trim(),
            gift: document.getElementById('editGift').value.trim(),
            image: this.currentImageData || null
        };

        if (this.editingGiftIndex !== null) {
            // Update existing
            this.giftPools[this.editingCategory][this.editingGiftIndex] = giftData;
        } else {
            // Add new
            if (!this.giftPools[this.editingCategory]) {
                this.giftPools[this.editingCategory] = [];
            }
            this.giftPools[this.editingCategory].push(giftData);
        }

        this.saveGiftPools();
        this.closeModal(this.editGiftModal);
        this.renderGiftPoolList(this.editingCategory);
        this.updateRemainingCounts();
    }

    deleteGift() {
        if (this.editingGiftIndex === null) return;

        if (confirm('Es-tu sûr de vouloir supprimer ce cadeau ?')) {
            this.giftPools[this.editingCategory].splice(this.editingGiftIndex, 1);
            this.saveGiftPools();
            this.closeModal(this.editGiftModal);
            this.renderGiftPoolList(this.editingCategory);
            this.updateRemainingCounts();
        }
    }

    // ============================================
    // IMAGE HANDLING
    // ============================================

    handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Check file size (max 5MB for localStorage)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image trop grande ! Maximum 5MB.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            this.currentImageData = e.target.result;
            this.showImagePreview(this.currentImageData);
        };
        reader.readAsDataURL(file);
    }

    showImagePreview(imageData) {
        const preview = document.getElementById('imagePreview');
        preview.innerHTML = `<img src="${imageData}" alt="Preview">`;
        document.getElementById('removeImageBtn').style.display = 'block';
    }

    clearImagePreview() {
        const preview = document.getElementById('imagePreview');
        preview.innerHTML = '<span class="upload-placeholder">📷 Cliquez pour ajouter une image</span>';
        document.getElementById('removeImageBtn').style.display = 'none';
        document.getElementById('editImage').value = '';
        this.currentImageData = null;
    }

    removeImage() {
        this.clearImagePreview();
    }

    openImageFullscreen(imageData) {
        // Create fullscreen overlay
        const overlay = document.createElement('div');
        overlay.className = 'image-fullscreen-overlay';
        overlay.innerHTML = `
            <div class="image-fullscreen-container">
                <img src="${imageData}" alt="Full size image">
                <button class="image-fullscreen-close">×</button>
            </div>
        `;

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.classList.contains('image-fullscreen-close')) {
                overlay.remove();
            }
        });

        document.body.appendChild(overlay);
    }

    // ============================================
    // EXPORT / IMPORT
    // ============================================

    exportCalendar() {
        const exportData = {
            version: 2,
            giftPools: this.giftPools,
            openedDays: this.openedDays,
            notes: this.notes,
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `advent-calendar-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    showImportModal() {
        document.getElementById('importTextarea').value = '';
        this.openModal(this.importModal);
    }

    importCalendar() {
        const jsonText = document.getElementById('importTextarea').value.trim();

        try {
            const data = JSON.parse(jsonText);

            if (data.giftPools) {
                this.giftPools = data.giftPools;
                this.saveGiftPools();
            }

            if (data.openedDays) {
                this.openedDays = data.openedDays;
                this.saveOpenedDays();
            }

            if (data.notes) {
                this.notes = data.notes;
                this.saveNotes();
            }

            this.closeModal(this.importModal);
            this.updateUI();
            alert('Calendrier importé avec succès ! 🎉');
        } catch (e) {
            alert('Données JSON invalides. Vérifie tes données.');
        }
    }

    // ============================================
    // RESET
    // ============================================

    resetProgress() {
        if (confirm('Es-tu sûr de vouloir réinitialiser ? Cela va :\n\n• Effacer tous les jours ouverts\n• Restaurer les cadeaux par défaut\n• Garder tes notes\n\nCette action est irréversible !')) {
            this.openedDays = {};
            this.saveOpenedDays();

            // Restore gift pools
            this.giftPools = {
                A: [...DEFAULT_GIFT_POOL.A],
                B: [...DEFAULT_GIFT_POOL.B],
                C: [...DEFAULT_GIFT_POOL.C]
            };
            this.saveGiftPools();

            this.updateUI();
            alert('Calendrier réinitialisé ! 🔄');
        }
    }

    // ============================================
    // MODALS
    // ============================================

    openModal(modal) {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    closeAllModals() {
        [this.surpriseModal, this.noteModal, this.giftPoolModal, this.editGiftModal, this.importModal, this.passwordModal].forEach(modal => {
            if (modal) this.closeModal(modal);
        });
    }

    // ============================================
    // CELEBRATION EFFECTS
    // ============================================

    celebrate() {
        const container = document.getElementById('confettiContainer');
        container.innerHTML = '';
        this.celebrationOverlay.classList.add('active');

        const colors = ['#e8758f', '#f4a5b8', '#7eb8da', '#b59fdb', '#ffd700', '#ff6b6b', '#4ecdc4'];
        const shapes = ['❤️', '💕', '✨', '⭐', '🎁', '💝', '🌟'];

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

            if (Math.random() > 0.5) {
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            } else {
                confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
                confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
            }

            container.appendChild(confetti);
        }

        setTimeout(() => {
            this.celebrationOverlay.classList.remove('active');
        }, 3000);
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.adventCalendar = new AdventCalendar();
});
