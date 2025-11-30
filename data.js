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
            title: "Livre de Tarot",
            description: "Un magnifique livre avec des cartes de tarot rien que pour toi ! Je sais combien tu adores lire les cartes. Tu pourras les utiliser chez nous, tranquillement, quand tu veux te faire une petite séance divinatoire sans avoir à attendre d'être chez tes parents.",
            gift: "À déballer ensemble !"
        },
        {
            emoji: "🎨",
            title: "Livre Boubou à Colorier",
            description: "Tu te souviens de nos petits bonhommes Boubou qu'on s'envoie sur Instagram ? J'ai trouvé un livre entier à colorier ! Ça nous fera des soirées coloriage rigolotes avec un bon verre de vin. On pourra comparer nos œuvres d'art !",
            task: "Prépare les crayons de couleur et une bonne bouteille !"
        },
        {
            emoji: "📰",
            title: "BD Hugo Décrypte",
            description: "Je sais que tu travailles tellement que tu n'as jamais le temps de regarder les infos. Ce livre d'Hugo Décrypte résume l'actualité en BD ! Comme ça tu peux te tenir informée sans y passer des heures, et en plus c'est illustré et fun à lire.",
            gift: "Pour tes pauses bien méritées !"
        },
        {
            emoji: "🌿",
            title: "Déo Naturel",
            description: "Le fameux déo que tu attends depuis un moment ! Je sais que tu le voulais, alors voilà, c'est chose faite. Un petit cadeau pratique mais qui te fera plaisir au quotidien.",
            gift: "Enfin !"
        },
        {
            emoji: "✨",
            title: "Patchs Aloe Vera Anti-Cernes",
            description: "On travaille beaucoup tous les deux et il faut qu'on prenne soin de nous pour préparer notre mariage ! Ces patchs à l'aloe vera vont nous aider à avoir une mine resplendissante. On pourra se faire des petites sessions soin ensemble.",
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
            link: "#",
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
            description: "J'espère que tu as bien dormi ! Je voulais juste te dire que tu es incroyable et que cette journée va être géniale. Tu vas tout déchirer comme d'habitude. Je suis tellement fier/fière de toi. Bonne journée mon cœur !",
            task: "Attaque cette journée avec le sourire !"
        },
        {
            emoji: "💝",
            title: "Countdown Mariage",
            description: "Chaque jour qui passe nous rapproche de notre grand jour. Je n'arrive toujours pas à croire qu'on va se marier ! Tu es l'amour de ma vie et j'ai tellement hâte de commencer cette nouvelle aventure avec toi. Future Madame (ou Monsieur) je t'aime !",
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
            title: "Atelier Pain d'Épices",
            description: "Ce soir on devient pâtissiers ! J'ai un kit pour faire un pain d'épices ensemble. On va pouvoir le décorer, mettre de la musique de Noël, et passer une soirée gourmande et créative. Et après... dégustation !",
            task: "Le plus beau pain d'épices gagne un bisou !",
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
