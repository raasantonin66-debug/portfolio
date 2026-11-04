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
  media?: string;
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
      "Étudiant ingénieur en robotique et systèmes embarqués à SeaTech Toulon. Champion de France de gymnastique artistique, je mets la même exigence dans le contrôle d'un robot que dans celui d'un mouvement.",
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
      title: "Chauffage asservi à inertie thermique",
      meta: "TIPE · binôme avec Léo NAJAR · 2024",
      blocks: [
        {
          label: "L'idée",
          text: "Une combustion par pyrolyse chauffe une masse de béton, qui stocke l'énergie et la restitue sur une longue durée.",
        },
        {
          label: "Le principe",
          text: "Un second réseau fait circuler de l'air propre dans le béton. L'air se charge en chaleur puis la diffuse dans la pièce.",
        },
        {
          label: "Mon rôle et le résultat",
          text: "Modélisation des pièces et du système, comparaison avec un état de l'art. Asservissement efficace, avec une température maximale de 60 °C qui garantissait un confort thermique sur une large plage pour l'utilisateur.",
        },
      ],
    },
    {
      slug: "littobs",
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
    "Avant l'ingénierie, il y a eu la gymnastique artistique masculine. J'en ai fait pendant 18 ans, jusqu'au titre de champion de France. La gym m'a appris la précision, la patience et la répétition jusqu'au geste juste. C'est exactement ce que je cherche dans un système asservi.",
    "Récemment, j'ai découvert le rugby. Après un sport individuel, j'y apprends à jouer pour un collectif.",
    "Enfin, l'entrepreneuriat me motive : à terme, j'aimerais construire des projets avec d'autres, pas seulement y contribuer.",
  ],
  stats: [
    { value: "18 ans", label: "de gymnastique artistique" },
    { value: "Champion", label: "de France" },
    { value: "4", label: "projets d'ingénierie" },
    { value: "3", label: "langues" },
  ],
  contactTitle: "Contact",
  contactText: "Un stage, un projet, une idée à construire ensemble ? Écrivez-moi.",
  // À compléter : laisser vide masque le lien.
  links: {
    email: "",
    linkedin: "",
    github: "",
  },
  footer: "Site conçu et développé par Antonin RAAS.",
};

export type Dict = typeof fr;
