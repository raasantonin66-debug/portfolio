// Textes du site en français.
// Source : document "Portfolio Antonin : textes du site (FR)".
// Pour modifier un texte du site, il suffit de modifier ce fichier.

export type Project = {
  slug: string;
  title: string;
  meta: string;
  featured?: boolean;
  status?: string;
  blocks: { label: string; text: string }[];
  gallery?: { src: string; w: number; h: number; caption: string }[];
  // Image affichée dans l'aperçu de la liste (survol sur ordinateur, vignette sur mobile).
  cover?: string;
  // Section mise en avant : texte + vidéo (ex. le soleil pour le double pendule).
  feature?: {
    kicker: string;
    title: string;
    text: string[];
    video: { src: string; poster: string; w: number; h: number; caption: string };
    source?: { label: string; url: string };
  };
};

export const fr = {
  lang: "fr",
  meta: {
    title: "Antonin RAAS · Robotique et systèmes asservis",
    description:
      "Portfolio d'Antonin RAAS, étudiant ingénieur en robotique et systèmes embarqués à SeaTech Toulon, champion de France de gymnastique artistique.",
  },
  eyebrow: "SeaTech Toulon · Robotique & systèmes embarqués",
  a11y: { nav: "Navigation principale", lang: "Langue" },
  ui: {
    home: "Accueil",
    allProjects: "Voir tous les projets",
    backToProjects: "Tous les projets",
    nextProject: "Projet suivant",
    localTime: "Heure locale",
    letsWork: "Travaillons ensemble",
    scroll: "Défiler",
    menu: "Menu",
    close: "Fermer",
    featured: "Projet phare",
    intro: "Ingénieur en devenir, gymnaste depuis toujours.",
    projectsIntro: "Quatre projets, de la modélisation à la mise en œuvre.",
    viewProject: "Voir le projet",
    year: "Année",
    role: "Cadre",
  },
  nav: {
    projects: "Projets",
    skills: "Compétences",
    about: "À propos",
    contact: "Contact",
  },
  hero: {
    name: "Antonin RAAS",
    tagline: "Du soleil à la barre fixe aux systèmes asservis.",
    subtitle:
      "Élève-ingénieur en robotique à SeaTech Toulon et champion de France de gymnastique. Je cherche la même précision dans un robot que dans un mouvement.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    ctaCv: "Télécharger mon CV",
    story:
      "Pendant 18 ans, j'ai fait tourner mon corps autour d'une barre. En TIPE, j'ai appris à faire tourner un robot de la même façon. Poussez le pendule : l'asservissement le ramène sur sa trajectoire.",
    banner:
      "En recherche d'un stage ingénieur de 2e année à l'étranger, de mai à août 2027, en Espagne.",
  },
  sim: {
    controlOn: "Asservissement : activé",
    controlOff: "Asservissement : coupé",
    hint: "Cliquez ou touchez le pendule pour le perturber.",
    reset: "Relancer",
    aria: "Simulation d'un double pendule réalisant un soleil à la barre fixe",
    caption:
      "Simulation illustrative d'un double pendule (bras + corps) : un couple au niveau de la barre injecte l'énergie du soleil, un correcteur à la hanche garde le corps aligné. Coupez l'asservissement pour voir le chaos.",
  },
  projectsTitle: "Projets",
  projects: [
    {
      slug: "double-pendule",
      title: "Le soleil robotisé : asservissement d'un double pendule",
      meta: "TIPE · projet phare · seul · 2023",
      featured: true,
      cover: "/media/double-pendule-poster.webp",
      feature: {
        kicker: "Le contexte gymnique",
        title: "Le soleil, le grand tour de la barre fixe",
        text: [
          "Le soleil est l'élément fondateur de la barre fixe : le gymnaste tourne à 360° autour de la barre, bras tendus et corps gainé, tour après tour. C'est lui qui donne l'élan de presque tous les lâchers et de toutes les sorties.",
          "Se laisser tomber ne suffit pas : à chaque tour, le frottement des mains sur la barre et la résistance de l'air font perdre de l'énergie. Pour la compenser, le gymnaste agit au passage sous la barre. Il se cambre légèrement dans la descente, puis « fouette » en fermant les épaules et les hanches dans la montée. Son centre de masse se rapproche de la barre, sa rotation accélère et il repasse à l'appui renversé sans à-coup.",
          "Les travaux de biomécanique de Yeadon et Hiley (Loughborough University) modélisent le gymnaste comme une chaîne de segments articulés et montrent que ce sont ces actions d'épaules et de hanches, bien synchronisées, qui entretiennent le soleil.",
          "Mon prototype reprend ce schéma : un premier segment joue les bras, un second le corps, et un moteur remplace les muscles. L'asservissement doit appliquer le bon couple au bon moment, exactement comme le gymnaste place son fouetté.",
        ],
        video: {
          src: "/media/double-pendule.mp4",
          poster: "/media/double-pendule-poster.webp",
          w: 720,
          h: 1280,
          caption: "Le prototype en essai : double pendule monté sur portique, piloté par une carte Arduino et des encodeurs rotatifs.",
        },
        source: { label: "Source : Yeadon et Hiley (2000), The mechanics of the backward giant circle on the high bar", url: "https://www.lboro.ac.uk/microsites/ssehs/biomechanics/research-biomech/papers/hibarmech00.pdf" },
      },
      blocks: [
        {
          label: "L'idée",
          text: "Reproduire avec un double pendule le soleil à la barre fixe, un mouvement que j'ai répété des milliers de fois en gymnastique.",
        },
        {
          label: "Le défi",
          text: "Un double pendule est un système chaotique. Le moindre écart grandit vite, il faut donc le corriger presque instantanément.",
        },
        {
          label: "Ce que j'ai fait",
          text: "Modélisation, commande, mise en œuvre avec un moteur brushless, des encodeurs rotatifs et un correcteur PID.",
        },
        {
          label: "Résultat",
          text: "Imparfait mais probant. La résolution des encodeurs a limité la réactivité de l'asservissement : c'est la première piste d'amélioration.",
        },
        {
          label: "Ce que j'en retiens",
          text: "Mon premier vrai projet d'ingénieur, celui où j'ai pris mes marques.",
        },
      ],
    },
    {
      slug: "chauffage-inertie",
      title: "Poêle à vortex : chauffage asservi à inertie thermique",
      meta: "TIPE · binôme avec Léo NAJAR · 2024",
      cover: "/media/chauffage-poele.webp",
      blocks: [
        {
          label: "La problématique",
          text: "Comment concevoir un chauffage qui régule le débit et la diffusion de la chaleur, pour optimiser le confort thermique tout en limitant les pertes d'énergie ?",
        },
        {
          label: "L'état de l'art",
          text: "Nous avons comparé cinq familles de poêles : à bûches, à granulés, de masse, canalisable et rocket. Le poêle de masse diffuse une chaleur douce pendant 12 à 24 h, le rocket brûle peu de bois avec un excellent rendement. Nous avons combiné les deux.",
        },
        {
          label: "La conception",
          text: "Dans un foyer en acier en forme de L, le bois subit une pyrolyse : il se décompose en charbon et en gaz (CH₄, CO, H₂) qui brûlent à leur tour. Le foyer est noyé dans du mortier réfractaire, qui tient jusqu'à 1800 °C (contre 400 à 500 °C pour un mortier classique) et stocke la chaleur. Une conduite qui traverse cette masse réchauffe l'air de la pièce.",
        },
        {
          label: "La modélisation",
          text: "Un bilan thermique sur une tranche de conduite donne la température de l'air en sortie : elle tend exponentiellement vers celle du béton à mesure que la conduite s'allonge. Ce modèle nous a servi à dimensionner l'échangeur.",
        },
        {
          label: "L'asservissement",
          text: "Une carte Arduino Mega lit les températures de l'échangeur et de la pièce avec des thermistances étalonnées, et les compare à la consigne. Elle pilote, via un hacheur, un ventilateur 12 V dont la vitesse est proportionnelle à l'écart entre la consigne et la pièce. Conçu sous Simulink, le programme a été corrigé pour un cas limite où la pièce dépassait déjà la consigne, puis complété d'un filtre passe-bas contre le bruit des mesures.",
        },
        {
          label: "Mon rôle et le résultat",
          text: "En binôme, j'ai modélisé les pièces et le système et mené la comparaison avec l'état de l'art. Un premier essai en extérieur n'a jamais atteint la consigne, le second l'a atteinte. Tous les points du cahier des charges sont validés, avec une température maximale de 60 °C qui garantit un confort thermique sur une large plage.",
        },
      ],
      gallery: [
        { src: "/media/chauffage-poele.webp", w: 768, h: 1024, caption: "Le poêle terminé : foyer en acier noyé dans le mortier réfractaire" },
        { src: "/media/chauffage-cao.webp", w: 768, h: 1304, caption: "Modèle 3D : foyer en L en acier et masse de mortier réfractaire" },
        { src: "/media/chauffage-chaines.webp", w: 1237, h: 646, caption: "Chaîne d'information et chaîne d'énergie de l'asservissement" },
        { src: "/media/chauffage-banc.webp", w: 1600, h: 1200, caption: "Banc de test : Arduino, hacheur, ventilateur et alimentation" },
        { src: "/media/chauffage-essai.webp", w: 1797, h: 977, caption: "Essai réel : évolution des températures pendant la chauffe" },
      ],
    },
    {
      slug: "littobs",
      cover: "/media/littobs-prototype.webp",
      title: "Littobs : sciences participatives à SeaTech",
      meta: "Gestionnaire de projet · 2025 · équipe d'une douzaine de personnes",
      blocks: [
        {
          label: "L'idée",
          text: "Concevoir, modéliser, fabriquer et vérifier un système de prise de mesure dans une colonne d'eau, pour appuyer une mobilisation citoyenne et scientifique.",
        },
        {
          label: "Mon rôle",
          text: "J'assurais le bon déroulé des opérations et le respect des échéances.",
        },
        {
          label: "Résultat",
          text: "Jury très satisfait de notre motivation, de notre efficacité et surtout des résultats.",
        },
      ],
      gallery: [
        { src: "/media/littobs-prototype.webp", w: 1200, h: 2133, caption: "Prototype du système de descente, imprimé en 3D" },
        { src: "/media/littobs-schema.webp", w: 1800, h: 1267, caption: "Principe de la sonde : flotteur, système de descente, instruments de mesure, ancre" },
        { src: "/media/littobs-gantt.svg", w: 1844, h: 1296, caption: "Planning du projet (diagramme de Gantt) que je pilotais" },
        { src: "/media/littobs-raci.webp", w: 2400, h: 1430, caption: "Matrice RACI : qui réalise, approuve, est consulté ou informé" },
      ],
    },
    {
      slug: "simulateur-vehicule",
      title: "Simulateur de dynamique de véhicule",
      meta: "Projet en cours",
      status: "En cours",
      blocks: [
        {
          label: "L'idée",
          text: "Simuler le comportement dynamique d'un véhicule, en commençant par un modèle simple de bicyclette avant de reprendre le projet complet.",
        },
        {
          label: "Où j'en suis",
          text: "Le simulateur de bicyclette. Cette fiche sera mise à jour au fil de l'avancement.",
        },
      ],
    },
  ] as Project[],
  skillsTitle: "Compétences",
  skillsHead: { domain: "Domaine", skills: "Compétences", proof: "Prouvé par" },
  skills: [
    { domain: "Programmation", skills: "Python, C, MATLAB, Simulink · ROS en cours d'apprentissage", proof: "Simulateur de véhicule, TIPE" },
    { domain: "Automatique", skills: "Modélisation, asservissement, PID", proof: "Double pendule, chauffage à inertie" },
    { domain: "Matériel", skills: "Arduino, moteurs brushless, encodeurs rotatifs", proof: "Double pendule" },
    { domain: "Gestion de projet", skills: "Planification, suivi des échéances, coordination", proof: "Littobs" },
    { domain: "Langues", skills: "Français (natif) · Espagnol (certification européenne) · Anglais B2", proof: "" },
  ],
  softSkillsLabel: "Savoir-être",
  softSkills:
    "À l'écoute, médiateur, rigoureux, organisé, et surtout résilient. Dix-huit ans de gymnastique m'ont appris à recommencer un mouvement jusqu'à ce qu'il soit juste.",
  aboutTitle: "À propos",
  about: [
    "Je suis en deuxième année d'école d'ingénieur à SeaTech Toulon, spécialité robotique et systèmes embarqués. Ce qui me passionne : l'asservissement, et rendre les opérations automatisées plus efficaces.",
    "Avant l'ingénierie, il y a eu la gymnastique artistique masculine. J'en ai fait pendant 18 ans, jusqu'aux titres de champion de France en individuel et par équipe. La gym m'a appris la précision, la patience et la répétition jusqu'au geste juste. C'est exactement ce que je cherche dans un système asservi.",
    "Récemment, j'ai découvert le rugby. Après un sport individuel, j'y apprends à jouer pour un collectif.",
    "Enfin, l'entrepreneuriat me motive : à terme, j'aimerais construire des projets avec d'autres, pas seulement y contribuer.",
  ],
  aboutPortrait: { src: "/media/portrait.webp", w: 1000, h: 1499, alt: "Portrait d'Antonin RAAS" },
  aboutPhoto: { src: "/media/gym-equipe.webp", w: 2000, h: 1123, caption: "Avec mon équipe de gymnastique artistique" },
  stats: [
    { value: "18 ans", label: "de gymnastique artistique" },
    { value: "Champion", label: "de France, en individuel et par équipe" },
    { value: "4", label: "projets d'ingénierie" },
    { value: "3", label: "langues" },
  ],
  contactTitle: "Contact",
  contactText: "Un stage, un projet, une idée à construire ensemble ? Écrivez-moi.",
  // À compléter : laisser vide masque le lien.
  links: {
    email: "raas.antonin66@gmail.com",
    linkedin: "https://www.linkedin.com/in/antonin-raas-05b731386",
    github: "",
  },
  footer: "Site conçu et développé par Antonin RAAS.",
};

export type Dict = typeof fr;
