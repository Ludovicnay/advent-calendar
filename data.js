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
            gift: "En espérant que le tirage soit bon ! !"
        },
        {
            emoji: "🎨",
            title: "Boubou 🤗",
            description: "Attrape un bon verre de vin et prenons un moment pour mettre des couleurs dans nos vies ! Ton cadeau se trouve au même endroit que ce qui cache tes jolies fesses.",
            task: "Prépare les crayons de couleur et une bonne bouteille !"
        },
        {
            emoji: "📰",
            title: "La connaissance c'est le pouvoir",
            description: "Aujourd'hui ton cadeau est là où tu pourrais décompresser (ou juste t'enivrer). Tu travailles beaucoup alors il faut quand même garder un pied dans l'actualité !",
            gift: "Pour tes pauses bien méritées !"
        },
        {
            emoji: "🌿",
            title: "Pas de cadeau utile",
            description: "Ton cadeau du jour est là où tu ranges tes boules de bain ! Tu veux pas de cadeau utile à Noël alors arrangeons ça !",
            gift: "Enfin !"
        },
        {
            emoji: "🍹",
            title: "Drink'up",
            description: "Ce soir, cocktail (ou chocolat chaud) de Noël ! On invente un cocktail ou on fait un chocolat chaud maison !",
            task: "Du temps de qualité ensemble avec du chocolat sur le bout du nez!"
        },
        {
            emoji: "🫂",
            title: "Gaté bébou",
            description: "On est souvent éloigné toi et moi mais aujourd'hui on est ensemble alors fait moi un gros calin qui dure longtemps ! chi-coração !",
            task: ""
        },
        {
            emoji: "🍫",
            title: "Un petit chocolat pour rester au chaud",
            description: "On chasse les oeuf à Noël ? Je vais gacher 30 oeufs en chocolat dans le salon et si tu les retrouves tous tu gagnes. Sinon c'est moi qui gagne !",
            task: "Le gagnant fait le repas vétu uniquement d'un tablier."
        },
        {
            emoji: "✨",
            title: "Un esprit sain dans un corps sain",
            description: "On travaille beaucoup tous les deux et toi particulièrement alors pour ton prochain cadeau rendez-vous là où on range le poulet et le poisson !",
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
            title: "Garde la pèche, on est beaux ensemble !",
            description: "Quand on est loin l'un de l'autre, je sais que tu aimes te remémorer nos moments ensemble. Voici un lien vers notre album photo pour te rappeler combien on est beaux et heureux ensemble. Regarde-le quand je te manque trop !",
            link: "https://share.icloud.com/photos/04e0pbZ0Me3_xAwABBN-Js8_Q",
            linkText: "Voir notre album photo"
        },
        {
            emoji: "💌",
            title: "Mon cœur en site",
            description: "Dans une autre époque on s'enverrai des lettres, aujourd'hui je te fais un site Calendrier de l'avant ! Tu es la personne la plus incroyable que je connaisse, et chaque jour je me sens chanceux de t'avoir dans ma vie. Tu me manques, mais savoir qu'on va se retrouver rend l'attente plus douce. Je t'aime.",
            task: "Lis ce message quand je te manque trop ❤️"
        },
        {
            emoji: "🌟",
            title: "Ce que j'aime chez toi",
            description: "J'aime ta façon de rire, ta détermination dans tout ce que tu fais, ta créativité sans limites, ta gentillesse envers les autres, et la lumière que tu apportes dans ma vie chaque jour. Tu es extraordinaire et je voulais que tu le saches.",
            task: "Garde ce message précieusement ✨"
        },
        {
            emoji: "💕",
            title: "Promesse de Noël",
            description: "Je te promets d'être toujours là, de te soutenir dans tes projets, de te faire rire quand tu es triste, et de t'aimer un peu plus chaque jour. Notre amour est ma plus grande force !",
            task: ""
        },
        {
            emoji: "📸",
            title: "Finalement l'italie c'est un incontournable de notre vie !",
            description: "Un condensé de nos aventures italienne !",
            link: "https://share.icloud.com/photos/0879ot38-FEmu4WK8BHzwOkjg",
            linkText: "Voir notre album photo"
        },
        {
            emoji: "☀️",
            title: "Bonne journée !",
            description: "Même si on ne peut pas se lever ensemble ce matin, sache que tu es ma première pensée de la journée et la dernière avant de dormir. Eclate cette journée comme tu sais le faire. Je t'aime !",
            task: "Pense à moi avant de t'endormir 💤"
        },
        {
            emoji: "☀️",
            title: "Hello Sunshine",
            description: "Hello sunshine j'espère que tu as bien dormi ! Je voulais juste te dire que tu es incroyable et que cette journée va être géniale. Tu vas tout déchirer comme d'habitude. Je suis tellement fier de toi. Explose cette journée !",
            link: "https://www.instagram.com/reel/DBX3MjsMy1a/",
            linkText: "Regarde cette vidéo pour toi 🎬"
        },
        {
            emoji: "💝",
            title: "Countdown",
            description: "Chaque jour qui passe nous rapproche de notre grand jour. Je n'arrive toujours pas à croire qu'on va se marier ! J'ai tellement hâte de passer journée avec toi. Future Madame (peut importe le nom),je t'aime !",
            task: ""
        },
        {
            emoji: "💪",
            title: "Warrior",
            description: "Ce matin regarde toi dans un miroir et vois toi comme moi je te vois ! Une femme fort, avec un corps de rève et surtout une force intérieur de malade ! Sois fier de toi pendant 3 minutes et surtout de tout ce que tu accomplies !",
            task: ""
        },
        {
            emoji: "🛏️",
            title: "Reverse calendrier de l'avant",
            description: "Aujourd'hui est un piège, c'est un reverse calendrier ! Pas de chocolats, de cadeaux ou autre juste un gage ! Ce soir prend un snap le plus sexy possible ! Plus c'est inédit et sexy mieux c'est !",
            task: "J'arrivais à cours d'inspirations ! Au moins là je sais que je te surprend !"
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
            description: "Ce soir, on se couvre (avec ou sans body) et on va au marché de Noël ensemble ! Notre seul et unique mission : trouver LA boule de Noël 2025. On pourra en profiter pour boire un vin chaud et manger une crèpe (MêMe si elle sera moins bonne que celle au beurre-sucre-canelle de Strasbourg).",
            task: ""
        },
        {
            emoji: "🍿",
            title: "Soirée ciné cocooning",
            description: "Ce soir, c'est soirée cinéma à la maison ! On se fait des popcorns, on se blottit sous un plaid, et on regarde un bon film ensemble. Pas de téléphone, juste nous deux devant l'écran.",
            task: "Chi-fou-mi, celui qui gagne choisit le thème du film ! Alors on sera plus action ou film de Noël ?",
            gift: "Popcorns et boissons au programme 🍿"
        },
        {
            emoji: "🍞",
            title: "On met la main à la pâte",
            description: "Ce soir c'est concours ! Le cadeau du jour est caché à côté du nutella !",
            task: "Le plus beau des deux gagne des gratouilles ou papouille !",
            gift: "Kit inclus !"
        },
        {
            emoji: "🔥",
            title: 'Hiver rude, foyer réchauffé',
            description: "Pour réchauffer nos soirées, ton cadeau se trouve a coté de ta cravache pour rester dans le même thème ! Il n'est pas obligatoire de tout essayer ce soir, choisis tes armes et ta tenu.",
            task: "À ouvrir dans l'intimité uniquement... 💋"
        },
        {
            emoji: "💆",
            title: "Un noël détendu !",
            description: "Tamise les lumières, met de la musique douce, et on se détend ce soir. Tu mérites ce moment de relaxation ma championne.",
            task: "Récupère ton cadeau entre mèches à bougies et feutres de couleur !",
            gift: "Inclus le masseur."
        },
        {
            emoji: "🕹️",
            title: "Game on !",
            description: "Choisi ton jeux et prépare toi ! On se la met ! Choisi le jeux et les règles, je vais t'écraser ! Celui qui perd doit un jocker à l'autre",
            task: "",
            gift: ""
        }



    ]
};

// Rendre disponible globalement
window.DEFAULT_GIFT_POOL = DEFAULT_GIFT_POOL;
