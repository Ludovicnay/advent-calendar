/**
 * Données personnalisées des cadeaux pour notre Calendrier de l'Avent
 *
 * Catégories :
 * A: "Ensemble en Personne" - Cadeaux et moments quand on est ensemble
 * B: "À Distance" - Petits mots doux et souvenirs quand on est séparés
 * C: "Soirée Ensemble" - Activités et cadeaux pour nos soirées à deux
 */

const DEFAULT_GIFT_POOL = {
    // ============================================
    // CATÉGORIE A : ENSEMBLE EN PERSONNE
    // Cadeaux physiques et moments partagés
    // ============================================
    A: [
        {
            emoji: "🔮",
            title: "L'avenir appartient à ceux qui se lèvent tôt et ceux qui savent le lire",
            description: "Le cadeau du jour se trouve entre Miss Ynov et le couple de l'année !",
            gift: "À déballer ensemble !"
        },
        {
            emoji: "🎨",
            title: "Boubou <3",
            description: "Attrape un bon verre de vin et prenons un moment pour mettre des couleurs dans nos vies ! Ton cadeau se trouve au même endroit que ce qui cache tes jolies fesses.",
            task: "Prépare les crayons de couleur et une bonne bouteille !"
        },
        {
            emoji: "📰",
            title: "La connaissance c'est le pouvoir",
            description: "Aujourd'hui ton cadeau est là où tu pourrais décompresser ou juste t'enivrer. Tu travailles beaucoup alors il faut quand même garder un pied dans l'actualité !",
            gift: "Pour tes pauses bien méritées !"
        },
        {
            emoji: "🌿",
            title: "Pas de cadeau utile",
            description: "Ton cadeau du jour est là où tu ranges tes boules de bain ! Tu veux pas de cadeau utile à Noël alors arrangeons ça !",
            gift: "Enfin !"
        },
        {
            emoji: "✨",
            title: "Un esprit sain dans un corps sain",
            description: "On travaille beaucoup tous les deux et toi particulièrement alors pour ton prochain cadeau rendez-vous là où tu ranges le poulet et le poisson !",
            task: "À utiliser ensemble pour une session détente !"
        }
    ],

    // ============================================
    // CATÉGORIE B : À DISTANCE
    // Petits mots doux et souvenirs
    // ============================================
    B: [
        {
            emoji: "📸",
            title: "Album Photo de Nous",
            description: "Quand on est loin l'un de l'autre, j'aime repenser à tous nos moments ensemble. Voici un lien vers notre album photo pour te rappeler combien on est beaux et heureux ensemble. Regarde-le quand je te manque trop !",
            link: "https://share.icloud.com/photos/04e0pbZ0Me3_xAwABBN-Js8_Q",
            linkText: "Voir notre album photo"
        },
        {
            emoji: "🌍",
            title: "Souvenirs de Voyage",
            description: "Te souviens-tu de ce voyage incroyable qu'on a fait ensemble ? J'ai rassemblé nos plus belles photos pour qu'on puisse se remémorer ces moments magiques. Chaque image me rappelle pourquoi je t'aime tant.",
            link: "#",
            linkText: "Revivre notre voyage"
        },
        {
            emoji: "💌",
            title: "Mon Cœur en Mots",
            description: "Même quand on est loin, tu es toujours dans mes pensées. Tu es la personne la plus incroyable que je connaisse, et chaque jour je me sens chanceux de t'avoir dans ma vie. Tu me manques, mais savoir qu'on va se retrouver rend l'attente plus douce. Je t'aime.",
            task: "Lis ce message quand je te manque trop ❤️"
        },
        {
            emoji: "🌟",
            title: "Ce Que J'aime Chez Toi",
            description: "J'aime ta façon de rire, ta détermination dans tout ce que tu fais, ta créativité sans limites, ta gentillesse envers les autres, et la lumière que tu apportes dans ma vie chaque jour. Tu es extraordinaire et je voulais que tu le saches.",
            task: "Garde ce message précieusement ✨"
        },
        {
            emoji: "💕",
            title: "Promesse d'Amour",
            description: "Je te promets d'être toujours là pour toi, de te soutenir dans tes projets, de te faire rire quand tu es triste, et de t'aimer un peu plus chaque jour. Notre amour est ma plus grande force. Vivement qu'on se retrouve !",
            task: "On se fait un câlin virtuel ? 🤗"
        },
        {
            emoji: "🌙",
            title: "Bonne Nuit Mon Amour",
            description: "Même si on ne peut pas s'endormir ensemble ce soir, sache que tu es ma dernière pensée avant de dormir et ma première au réveil. Fais de beaux rêves, je serai dedans. Je t'aime plus que les mots ne peuvent le dire.",
            task: "Pense à moi avant de t'endormir 💤"
        },
        {
            emoji: "☀️",
            title: "Bonjour Sunshine",
            description: "Hello sunshine j'espère que tu as bien dormi ! Je voulais juste te dire que tu es incroyable et que cette journée va être géniale. Tu vas tout déchirer comme d'habitude. Je suis tellement fier de toi. Bonne journée mon cœur ! Explose cette journée !",
            link: "https://www.instagram.com/reel/DBX3MjsMy1a/",
            linkText: "Regarde cette vidéo pour toi 🎬"
        },
        {
            emoji: "💝",
            title: "Countdown Mariage",
            description: "Chaque jour qui passe nous rapproche de notre grand jour. Je n'arrive toujours pas à croire qu'on va se marier ! Tu es l'amour de ma vie et j'ai tellement hâte de commencer cette nouvelle aventure avec toi. Future Madame je t'aime !",
            task: "On compte les jours ensemble !"
        }
    ],

    // ============================================
    // CATÉGORIE C : SOIRÉE ENSEMBLE
    // Activités et moments romantiques
    // ============================================
    C: [
        {
            emoji: "🎄",
            title: "Boule de Noël au Marché",
            description: "Ce soir, on s'emmitouffle et on va au marché de Noël ensemble ! Mission : trouver LA boule de Noël parfaite pour nous. On pourra en profiter pour boire un vin chaud et admirer les lumières. Notre première décoration de couple !",
            task: "Chacun propose 3 boules et on vote pour notre préférée !"
        },
        {
            emoji: "🍿",
            title: "Soirée Ciné Cocooning",
            description: "Ce soir, c'est soirée cinéma à la maison ! On se fait des popcorns, on se blottit sous un plaid, et on regarde un bon film ensemble. Pas de téléphone, juste nous deux devant l'écran.",
            task: "Chacun propose un film et on tire au sort !",
            gift: "Popcorns et boissons au programme 🍿"
        },
        {
            emoji: "🍞",
            title: "On met la main à la pâte",
            description: "Ce soir c'est concours ! Le cadeau du jour est caché à côté du nutella ! Gratouille ou papouille pour le plus beau des deux !",
            task: "Le plus beau pain d'épices gagne !",
            gift: "Kit pain d'épices inclus !"
        },
        {
            emoji: "🔥",
            title: "Cadeau Coquin",
            description: "Ce soir, j'ai une surprise un peu spéciale pour nous deux... 😏 Un cadeau à ouvrir ensemble quand on sera rien que tous les deux. Prépare-toi à une soirée mémorable !",
            task: "À ouvrir dans l'intimité uniquement... 💋"
        },
        {
            emoji: "💆",
            title: "Huile de Massage Rituelle",
            description: "Ce soir, on prend soin l'un de l'autre. J'ai une huile de massage rituelle pour nous. On tamise les lumières, on met de la musique douce, et on se détend avec un massage en duo. Tu mérites ce moment de relaxation.",
            task: "Minimum 20 minutes de massage chacun !",
            gift: "Huile de massage prête à l'emploi"
        }
    ]
};

// Rendre disponible globalement
window.DEFAULT_GIFT_POOL = DEFAULT_GIFT_POOL;
