/**
 * Données par défaut des cadeaux
 * 25 surprises uniques pour chacune des 3 catégories
 *
 * Catégories :
 * A: "Ensemble en Personne" - Expériences partagées physiquement
 * B: "À Distance" - Moments de connexion à distance
 * C: "Soirée Ensemble" - Moments romantiques en soirée
 */

const DEFAULT_GIFT_POOL = {
    // ============================================
    // CATÉGORIE A : ENSEMBLE EN PERSONNE (25 cadeaux)
    // ============================================
    A: [
        {
            emoji: "☕",
            title: "Rendez-vous Café Cosy",
            description: "Trouvons le café le plus cosy de la ville et passons une heure à parler, main dans la main, en savourant nos boissons préférées. Pas de téléphones – juste nous. 💕",
            task: "Commande la boisson de l'autre sans demander ! Essaie de deviner ce qui lui ferait plaisir aujourd'hui."
        },
        {
            emoji: "🎄",
            title: "Aventure au Marché de Noël",
            description: "Emmitouflons-nous et explorons un marché de Noël ensemble ! Prenons un chocolat chaud, admirons les lumières, et peut-être trouver une décoration spéciale pour nous.",
            task: "Chacun choisit un petit cadeau surprise pour l'autre à moins de 10€ – échange à la fin !",
            gift: "Budget : 10-20€ pour les gourmandises et trouvailles"
        },
        {
            emoji: "🍳",
            title: "Petit-déjeuner au Lit",
            description: "Aujourd'hui, l'un de nous fait la grasse matinée pendant que l'autre prépare un petit-déjeuner spécial au lit. Avec café frais, gourmandises préférées, et bisous du matin.",
            task: "Le chef doit inclure au moins un élément en forme de cœur sur le plateau !"
        },
        {
            emoji: "📸",
            title: "Balade Photo",
            description: "Faisons une promenade dans notre quartier préféré et prenons 25 photos ensemble – une pour chaque jour du calendrier de l'avent !",
            task: "Défi : Prends au moins 5 photos de nous en train de s'embrasser à différents endroits !"
        },
        {
            emoji: "🎬",
            title: "Marathon Films de Noël",
            description: "Choisis 2-3 films de Noël qu'on n'a jamais vus. Construisons un fort de couvertures, préparons du popcorn, et blottissons-nous pour un marathon !",
        },
        {
            emoji: "🍪",
            title: "Atelier Pâtisserie",
            description: "Faisons des biscuits de Noël ensemble ! Soyons créatifs avec la décoration et partageons-en avec la famille ou les voisins.",
            task: "Décore au moins un biscuit qui ressemble à ton/ta partenaire (sois créatif !)"
        },
        {
            emoji: "🎁",
            title: "Cadeau Fait Main",
            description: "Passons l'après-midi à créer des cadeaux faits main l'un pour l'autre. Ça peut être une lettre, un dessin, une playlist, ou n'importe quoi venant du cœur.",
            task: "Mets un minuteur d'1 heure – interdit de regarder ce que l'autre fait !"
        },
        {
            emoji: "🌲",
            title: "Décoration du Sapin",
            description: "Que ce soit notre sapin principal ou un petit sapin de table, décorons-le ensemble avec du chocolat chaud et de la musique de Noël.",
            task: "Partage un souvenir de Noël préféré de ton enfance pendant qu'on décore."
        },
        {
            emoji: "💆",
            title: "Journée Spa Maison",
            description: "Créons une expérience spa à la maison ! Masques, massages, musique apaisante, et détente totale ensemble.",
            task: "Donne-toi un massage de 15 minutes chacun – mets un minuteur pour que ce soit équitable !"
        },
        {
            emoji: "🎲",
            title: "Soirée Jeux à Deux",
            description: "Sors les jeux de société, jeux de cartes ou jeux vidéo ! Le gagnant choisit ce qu'on fait demain soir.",
            task: "Joue à au moins 3 jeux différents. Note les scores pour le droit de se vanter !"
        },
        {
            emoji: "🚗",
            title: "Tour des Illuminations",
            description: "Prépare des boissons chaudes et des snacks, et partons voir les plus belles décorations de Noël du quartier !",
            task: "Note chaque maison de 1 à 10 et trouve le grand gagnant !"
        },
        {
            emoji: "📖",
            title: "Lecture Ensemble",
            description: "Choisis une courte histoire ou des poèmes de Noël et lisons-les à voix haute. Bonus : sous une couverture près de la cheminée !",
        },
        {
            emoji: "🎨",
            title: "Rendez-vous Artistique",
            description: "Prends du matériel d'art et créons quelque chose ensemble ! Peinture, dessin, ou une œuvre collaborative.",
            task: "Fais un portrait de l'autre en 10 minutes – pas de jugement sur le talent artistique !"
        },
        {
            emoji: "🍽️",
            title: "Dîner Chic à la Maison",
            description: "Cuisinons un dîner raffiné ensemble ! Mettons la table avec des bougies, habillons-nous bien, et faisons comme si on était au restaurant.",
            task: "Interdit de manger debout au comptoir – expérience gastronomique complète obligatoire !"
        },
        {
            emoji: "🎵",
            title: "Playlist & Danse",
            description: "Créons une playlist partagée de chansons qui nous rappellent l'un l'autre et notre histoire. Puis dansons un slow sur au moins 3 d'entre elles.",
            task: "Chacun ajoute 10 chansons. Interdit de skip – même les plus clichées !"
        },
        {
            emoji: "🧩",
            title: "Session Puzzle",
            description: "Commençons un puzzle sur le thème de Noël ensemble. Mets de la musique, prépare des boissons chaudes, et travaillons côte à côte.",
            gift: "Pense à acheter un puzzle de 500 pièces sur le thème de Noël pour nous !"
        },
        {
            emoji: "🎤",
            title: "Soirée Karaoké",
            description: "Organisons une session karaoké à la maison ! Chante tes chansons préférées (même faux) et encourage l'autre.",
        },
        {
            emoji: "📝",
            title: "Écriture de Lettres",
            description: "Écrivons-nous des lettres sincères sur ce qu'on aime dans notre relation. Échangeons-les et lisons-les à voix haute.",
            task: "Les lettres doivent inclure au moins 10 choses spécifiques que tu aimes chez l'autre."
        },
        {
            emoji: "🏃",
            title: "Balade Hivernale",
            description: "Emmitouflons-nous et faisons une longue promenade ensemble. Main dans la main, parlons de nos rêves et projets pour la nouvelle année.",
            task: "Partage 3 objectifs que tu as pour l'année prochaine et comment on peut se soutenir."
        },
        {
            emoji: "🎯",
            title: "Journée Nouvelle Expérience",
            description: "Essayons quelque chose qu'aucun de nous n'a jamais fait ! Un nouveau restaurant, une activité, ou une nouvelle compétence.",
            task: "Recherche et trouve quelque chose de complètement nouveau pour nous deux !"
        },
        {
            emoji: "💝",
            title: "Échange de Bons d'Amour",
            description: "Crée 5 bons d'amour chacun pour l'autre – comme 'petit-déjeuner au lit', 'choix du film', 'massage complet', etc.",
            task: "Fais de vrais bons en papier, aussi jolis que possible !"
        },
        {
            emoji: "🌟",
            title: "Soirée Observation des Étoiles",
            description: "Trouve un endroit cosy (même près d'une fenêtre), blottissons-nous, et regardons les étoiles ensemble. Faisons des vœux !",
        },
        {
            emoji: "🎅",
            title: "Séance Photo de Noël",
            description: "Prenons des photos de Noël rigolotes ensemble ! Utilise des accessoires, des filtres, ou un vrai photomaton – créons des souvenirs !",
            task: "Prends au moins 10 photos différentes avec des poses et expressions différentes !"
        },
        {
            emoji: "🕯️",
            title: "Magie du Réveillon",
            description: "Passons le réveillon de Noël ensemble en faisant ce qui nous rend le plus heureux – traditions anciennes et nouvelles.",
            task: "Partage ton souvenir préféré de réveillon de Noël de ton enfance."
        },
        {
            emoji: "🎄",
            title: "Amour de Noël",
            description: "Joyeux Noël, mon amour ! Aujourd'hui est pour nous, notre amour, et notre gratitude pour tout ce qu'on partage.",
            task: "Dis-toi l'un à l'autre : 'Une raison pour laquelle je suis reconnaissant(e) de t'avoir...' – continue jusqu'à épuisement !"
        }
    ],

    // ============================================
    // CATÉGORIE B : À DISTANCE (25 cadeaux)
    // ============================================
    B: [
        {
            emoji: "💌",
            title: "Lettre Vidéo d'Amour",
            description: "Enregistre un message vidéo de 2 minutes pour ton/ta partenaire. Partage ce que tu aimes chez lui/elle et ce que tu attends avec impatience.",
            task: "Regardez vos vidéos en même temps pendant un appel vidéo !"
        },
        {
            emoji: "🎬",
            title: "Soirée Film Synchronisée",
            description: "Choisis un film, lancez-le en même temps, et échangez par messages/appel tout au long ! C'est comme regarder ensemble, à des kilomètres de distance.",
        },
        {
            emoji: "🎵",
            title: "Journée Playlist Partagée",
            description: "Chacun ajoute 5 chansons à une playlist partagée qui vous rappellent l'un l'autre. Écoutez-la ensemble pendant un appel.",
        },
        {
            emoji: "📸",
            title: "Défi Partage de Photos",
            description: "Tout au long de la journée, envoyez-vous 10 photos de ce qui vous entoure – ce que vous voyez, ce que vous faites, ce qui vous fait penser à l'autre.",
            task: "Inclus au moins un selfie avec un bisou pour la caméra !"
        },
        {
            emoji: "🎮",
            title: "Rendez-vous Jeu en Ligne",
            description: "Jouez à un jeu en ligne ensemble ! Ça peut être un jeu mobile, PC, ou même des jeux de société en ligne.",
        },
        {
            emoji: "🍳",
            title: "Cuisine Virtuelle Ensemble",
            description: "Choisis une recette que vous pouvez tous les deux faire. Appel vidéo pendant la cuisine et mangez 'ensemble' à l'écran !",
            task: "Ça doit être la même recette ! Coordonnez les ingrédients à l'avance."
        },
        {
            emoji: "📖",
            title: "Histoire du Soir",
            description: "Lis une courte histoire ou un poème à l'autre en appel vidéo avant de dormir. Beaux rêves garantis !",
        },
        {
            emoji: "❓",
            title: "Soirée 36 Questions",
            description: "Essaie les fameuses '36 Questions pour Tomber Amoureux' en appel vidéo. Même si vous êtes déjà amoureux, vous apprendrez de nouvelles choses !",
        },
        {
            emoji: "🎁",
            title: "Livraison Surprise",
            description: "Commande quelque chose de petit à faire livrer à ton/ta partenaire aujourd'hui ! Des fleurs, de la nourriture, ou un petit cadeau.",
            task: "Ne dis pas ce qui arrive – laisse ça être une surprise totale !",
            gift: "Budget suggéré : 15-30€ pour la livraison"
        },
        {
            emoji: "💭",
            title: "Appel Planification de Rêves",
            description: "Fais un appel dédié à planifier quelque chose que vous voulez faire ensemble dans le futur – un voyage, une expérience, un objectif.",
            task: "Crée un document ou tableau partagé avec vos plans et idées !"
        },
        {
            emoji: "🎨",
            title: "Rendez-vous Art Virtuel",
            description: "Prends du matériel d'art et crée quelque chose pendant un appel vidéo ensemble. Montrez vos créations à la fin !",
            task: "Dessine ou peins le même sujet – compare les résultats !"
        },
        {
            emoji: "⭐",
            title: "Pluie de Compliments",
            description: "Mets un minuteur de 5 minutes chacun. Pendant ce temps, donne à ton/ta partenaire autant de compliments sincères que possible !",
            task: "Interdit de répéter le même compliment – sois créatif et précis !"
        },
        {
            emoji: "📱",
            title: "Voyage dans les Souvenirs",
            description: "Parcourez vos photos et captures d'écran ensemble en appel. Revivez les beaux souvenirs et moments drôles !",
            task: "Trouve et partage la plus vieille photo que tu as de/avec l'autre !"
        },
        {
            emoji: "🎤",
            title: "Chanter Ensemble",
            description: "Trouve une version karaoké d'une chanson que vous aimez tous les deux et chantez-la ensemble en appel vidéo. Assume le côté gênant !",
        },
        {
            emoji: "📝",
            title: "Lettres du Futur",
            description: "Écrivez des lettres à ouvrir à une date future précise – peut-être Noël prochain, ou quand vous serez réunis.",
            task: "Scelle les lettres et promets de ne pas regarder avant la date !"
        },
        {
            emoji: "🧘",
            title: "Méditation Ensemble",
            description: "Trouve une méditation guidée et faites-la ensemble en appel vidéo. Commence ou termine la journée dans une connexion paisible.",
        },
        {
            emoji: "🌅",
            title: "Lever/Coucher de Soleil Synchronisé",
            description: "Si les fuseaux horaires le permettent, regardez le lever ou coucher de soleil 'ensemble' en appel. Sinon, envoyez-vous des photos !",
            task: "Envoie une photo avec un message sur ce pour quoi tu es reconnaissant(e) aujourd'hui."
        },
        {
            emoji: "🎲",
            title: "Appel Action ou Vérité",
            description: "Jouez à action ou vérité en appel vidéo ! Gardez ça amusant, flirteur, et adapté à la distance. 😉",
            task: "Au moins 5 tours chacun – interdit de se dégonfler !"
        },
        {
            emoji: "👔",
            title: "Soirée Rendez-vous Virtuel",
            description: "Habille-toi bien, prépare ton espace de façon romantique, et aie un vrai 'rendez-vous' en appel vidéo. Allume des bougies !",
            task: "Commande la même nourriture en livraison pour manger le même repas !"
        },
        {
            emoji: "🗺️",
            title: "Visite Virtuelle Ensemble",
            description: "Fais une visite virtuelle d'un musée, monument, ou lieu que vous voulez tous les deux visiter un jour !",
        },
        {
            emoji: "💝",
            title: "Journée Langages d'Amour",
            description: "Fais le quiz des 5 Langages d'Amour ensemble et discute des résultats. Apprends à mieux aimer l'autre !",
        },
        {
            emoji: "📚",
            title: "Écriture d'Histoire Ensemble",
            description: "Commence une histoire collaborative ! Tour à tour, ajoutez des phrases ou paragraphes. Voyez où votre imagination vous mène !",
            task: "Écrivez au moins 500 mots ensemble – ça peut être aussi bête ou romantique que vous voulez !"
        },
        {
            emoji: "🌟",
            title: "Partage de Liste de Souhaits",
            description: "Partagez vos listes de souhaits – pas seulement pour les cadeaux, mais pour la vie ! Rêves, objectifs, bucket list.",
            task: "Trouve au moins 3 souhaits que tu peux aider à réaliser pour l'autre."
        },
        {
            emoji: "🕯️",
            title: "Connexion du Réveillon",
            description: "Passe une partie du réveillon de Noël en appel vidéo. Partage les traditions, ouvre un cadeau ensemble, sois simplement présent(e).",
            task: "Allume une bougie en même temps et fais un vœu partagé pour l'année prochaine."
        },
        {
            emoji: "💕",
            title: "Noël Ensemble",
            description: "Joyeux Noël, mon amour ! Même séparés, nous sommes ensemble par le cœur. Fais un long appel et célèbre notre amour.",
            task: "Raconte-toi ton souvenir préféré de cette année ensemble."
        }
    ],

    // ============================================
    // CATÉGORIE C : SOIRÉE ENSEMBLE (25 cadeaux)
    // ============================================
    C: [
        {
            emoji: "🕯️",
            title: "Conversation aux Chandelles",
            description: "Éteins toutes les lumières sauf les bougies. Aie une conversation profonde sur la vie, l'amour et les rêves.",
            task: "Pas de téléphones ! Juste une vraie conversation pendant au moins une heure."
        },
        {
            emoji: "💑",
            title: "Soirée Quiz de Couple",
            description: "Teste à quel point vous vous connaissez ! Tour à tour, posez des questions sur les préférences, souvenirs et rêves de l'autre.",
            task: "Prépare 10 questions chacun sur l'autre. Note les points !",
        },
        {
            emoji: "🛁",
            title: "Soirée Bain Moussant",
            description: "Prépare un bain moussant chaud pour deux ! Ajoute des bougies, de la musique, peut-être du champagne. Pure détente ensemble.",
            task: "Tour à tour, faites-vous un massage de la tête ou des pieds dans le bain."
        },
        {
            emoji: "🍷",
            title: "Dégustation Vin & Fromage",
            description: "Organise une petite dégustation vin et fromage à la maison. Essaie différents accords et notez-les ensemble !",
            task: "Essaie au moins 3 combinaisons différentes et crée tes propres fiches de notation.",
            gift: "Prends 2-3 vins et différents fromages pour la dégustation"
        },
        {
            emoji: "📺",
            title: "Soirée Série Nostalgique",
            description: "Regarde une série de ton enfance que ton/ta partenaire n'a jamais vue. Partage la nostalgie !",
            task: "Explique pourquoi cette série était importante pour toi enfant."
        },
        {
            emoji: "🎭",
            title: "Soirée Jeu de Rôle",
            description: "Fais comme si vous vous rencontriez pour la première fois ! Revivez l'expérience du 'premier rendez-vous' – présentez-vous, posez des questions.",
            task: "Reste dans le personnage pendant au moins 30 minutes. Essaie d'impressionner ton rendez-vous !"
        },
        {
            emoji: "📱",
            title: "Soirée Détox Digital",
            description: "Range tous les appareils pour toute la soirée. Sois simplement présent(e) avec l'autre – parlez, jouez, connectez-vous.",
            task: "Les appareils vont dans un tiroir de 19h jusqu'au coucher. Pas d'exceptions !"
        },
        {
            emoji: "🌶️",
            title: "Défi Cuisine",
            description: "Chacun choisit secrètement 3 ingrédients. Vous devez créer un plat ensemble en utilisant les 6 !",
            task: "Pas de recettes autorisées – pure créativité seulement !"
        },
        {
            emoji: "💃",
            title: "Fête Dansante au Salon",
            description: "Libère de l'espace, mets ta musique préférée, et organise une fête dansante privée ! Pas de jugement, juste du fun.",
            task: "Inclus au moins un slow et une danse ridicule !"
        },
        {
            emoji: "🎯",
            title: "Soirée Bucket List",
            description: "Crée une bucket list commune de choses à faire ensemble. Rêvez grand et petit !",
            task: "Écrivez au moins 25 items ensemble. Mettez-la quelque part où vous la verrez !"
        },
        {
            emoji: "📿",
            title: "Soirée Massage",
            description: "Tour à tour, faites-vous des massages relaxants complets. Crée l'ambiance avec musique douce et lumières tamisées.",
            task: "Au moins 20 minutes chacun – pas de précipitation !",
        },
        {
            emoji: "🎲",
            title: "Soirée Jeux Coquins",
            description: "Jouez à votre jeu préféré avec une touche coquine... les règles du gagnant ! 😉",
            task: "Les règles, c'est à vous deux de décider !"
        },
        {
            emoji: "📸",
            title: "Soirée Shooting Photo",
            description: "Organise une mini séance photo ensemble ! Habille-toi bien, installe un bel éclairage, capture de belles photos de couple.",
            task: "Obtiens au moins une photo digne d'être encadrée !"
        },
        {
            emoji: "🎵",
            title: "Voyage Musical dans les Souvenirs",
            description: "Tour à tour, jouez des chansons de moments importants de votre relation. Partagez les souvenirs que chaque chanson évoque.",
            task: "Crée une playlist 'bande-son de nous' avec au moins 15 chansons."
        },
        {
            emoji: "✍️",
            title: "Échange de Lettres d'Amour",
            description: "Prends le temps d'écrire des lettres sincères l'un à l'autre. Puis lis-les à voix haute à la lueur des bougies.",
            task: "Inclus des moments spécifiques et des qualités que tu aimes. Sois vulnérable."
        },
        {
            emoji: "🍫",
            title: "Dégustation de Chocolat",
            description: "Prends différents chocolats et organise une séance de dégustation ! Note les saveurs, textures, et vos préférés.",
            task: "Donne-toi à manger les yeux bandés et devine les chocolats !",
            gift: "Prends 5-6 variétés de chocolat différentes"
        },
        {
            emoji: "🎬",
            title: "Soirée Vidéos Souvenirs",
            description: "Parcourez ensemble vos vieilles photos et vidéos. Revivez les beaux souvenirs de votre relation.",
            task: "Choisis tes 10 photos préférées à imprimer et afficher."
        },
        {
            emoji: "🌌",
            title: "Soirée Fort de Coussins",
            description: "Construis un fort de coussins épique ensemble et passe la soirée dedans ! Films, snacks, câlins.",
            task: "Le fort doit pouvoir vous accueillir tous les deux allongés confortablement !"
        },
        {
            emoji: "🎤",
            title: "Soirée Duo",
            description: "Trouve des chansons en duo et chantez-les ensemble ! Assume le romantisme et le ridicule.",
            task: "Enregistre au moins un duo à garder (juste pour vous deux !)",
        },
        {
            emoji: "🔮",
            title: "Vision du Futur",
            description: "Passe la soirée à parler de votre futur ensemble. Où vous voyez-vous ? Que voulez-vous construire ?",
            task: "Crée une vision 'dans 5 ans' ensemble et écris-la."
        },
        {
            emoji: "🎁",
            title: "Soirée Emballage Cadeaux",
            description: "Si vous faites des cadeaux, passez cette soirée à les emballer ensemble (en gardant le contenu secret !).",
            task: "Écris des petits mots sincères pour accompagner chaque cadeau."
        },
        {
            emoji: "☕",
            title: "Soirée au Coin du Feu",
            description: "Que ce soit un vrai feu, une bougie, ou même une vidéo de cheminée – installez-vous confortablement et parlez, câlinez.",
            task: "Pas d'agenda, pas de tâches – juste être ensemble dans la chaleur."
        },
        {
            emoji: "⭐",
            title: "Bilan de l'Année",
            description: "Parcourez l'année ensemble. Les meilleurs moments, les défis surmontés, la croissance observée chez l'autre.",
            task: "Chacun partage ses 3 souvenirs préférés de cette année ensemble."
        },
        {
            emoji: "🌟",
            title: "Romance du Réveillon",
            description: "Rends le réveillon de Noël magique ! Dîner spécial, cadeaux ouverts à minuit, tout le romantisme.",
            task: "Chacun dit à l'autre une chose pour laquelle il/elle est le plus reconnaissant(e) cette saison."
        },
        {
            emoji: "💖",
            title: "Amour du Soir de Noël",
            description: "Termine le jour de Noël ensemble, plein d'amour et de gratitude. Tu as traversé 25 jours de surprises !",
            task: "Regarde les lumières de Noël, serre-toi fort, et fais des plans pour toutes les aventures à venir."
        }
    ]
};

// Rendre disponible globalement
window.DEFAULT_GIFT_POOL = DEFAULT_GIFT_POOL;
