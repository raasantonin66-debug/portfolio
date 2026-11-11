// Versión en español del sitio. Mantener sincronizada con content/fr.ts.
import type { Dict, Project } from "./fr";

export const es: Dict = {
  lang: "es",
  meta: {
    title: "Antonin RAAS · Robótica y sistemas de control",
    description:
      "Portafolio de Antonin RAAS, estudiante de ingeniería en robótica y sistemas embebidos en SeaTech Toulon y campeón de Francia de gimnasia artística.",
  },
  eyebrow: "SeaTech Toulon · Robótica y sistemas embebidos",
  a11y: { nav: "Navegación principal", lang: "Idioma" },
  ui: {
    home: "Inicio",
    allProjects: "Ver todos los proyectos",
    backToProjects: "Todos los proyectos",
    nextProject: "Siguiente proyecto",
    localTime: "Hora local",
    letsWork: "Trabajemos juntos",
    scroll: "Desplazar",
    menu: "Menú",
    close: "Cerrar",
    featured: "Proyecto estrella",
    intro: "Ingeniero en formación, gimnasta de corazón",
    projectsIntro: "Cuatro proyectos, del modelado a la implementación",
    viewProject: "Ver el proyecto",
    year: "Año",
    role: "Contexto",
  },
  nav: {
    projects: "Proyectos",
    skills: "Competencias",
    about: "Sobre mí",
    contact: "Contacto",
  },
  hero: {
    name: "Antonin RAAS",
    tagline: "De los molinos en la barra fija a los sistemas de control",
    subtitle:
      "Estudiante de ingeniería en robótica en SeaTech Toulon y campeón de Francia de gimnasia. Busco la misma precisión en un robot que en un movimiento.",
    ctaProjects: "Ver mis proyectos",
    ctaContact: "Contactarme",
    ctaCv: "Descargar mi CV",
    banner:
      "Busco unas prácticas de ingeniería de 2.º año en el extranjero, de mayo a agosto de 2027, en España.",
  },
  projectsTitle: "Proyectos",
  projects: [
    {
      slug: "double-pendule",
      title: "El molino robotizado: control de un péndulo doble",
      meta: "Proyecto de investigación (TIPE) · proyecto estrella · individual · 2023",
      featured: true,
      cover: "/media/double-pendule-poster.webp",
      feature: {
        kicker: "El contexto gimnástico",
        title: "El molino, el gran giro de la barra fija",
        text: [
          "El molino (gigante, \"soleil\" en francés) es el elemento base de la barra fija: el gimnasta gira 360° alrededor de la barra, con los brazos estirados y el cuerpo firme, vuelta tras vuelta. Es el que da impulso a casi todas las sueltas y salidas.",
          "Dejarse caer no basta: en cada vuelta, el roce de las manos con la barra y la resistencia del aire hacen perder energía. Para compensarla, el gimnasta actúa al pasar bajo la barra. Se arquea un poco en la bajada y luego da un \"latigazo\" cerrando hombros y caderas en la subida. Su centro de masa se acerca a la barra, la rotación se acelera y vuelve a pasar por el pino sin brusquedad.",
          "Los trabajos de biomecánica de Yeadon y Hiley (Loughborough University) modelan al gimnasta como una cadena de segmentos articulados y muestran que son esas acciones de hombros y caderas, bien sincronizadas, las que mantienen el molino.",
          "Mi prototipo sigue el mismo esquema: un primer segmento hace de brazos, un segundo de cuerpo, y un motor sustituye a los músculos. El control debe aplicar el par adecuado en el momento justo, igual que el gimnasta coloca su latigazo.",
        ],
        video: {
          src: "/media/double-pendule.mp4",
          poster: "/media/double-pendule-poster.webp",
          w: 720,
          h: 1280,
          caption: "El prototipo en prueba: doble péndulo montado en un pórtico, controlado por una placa Arduino y codificadores rotativos.",
        },
        source: { label: "Fuente: Yeadon y Hiley (2000), The mechanics of the backward giant circle on the high bar", url: "https://www.lboro.ac.uk/microsites/ssehs/biomechanics/research-biomech/papers/hibarmech00.pdf" },
      },
      blocks: [
        {
          label: "La idea",
          text: "Reproducir con un péndulo doble el molino en la barra fija, un movimiento que repetí miles de veces en gimnasia.",
        },
        {
          label: "El reto",
          text: "Un péndulo doble es un sistema caótico. La menor desviación crece rápido, así que hay que corregirla casi al instante.",
        },
        {
          label: "Lo que hice",
          text: "Modelado, diseño del control e implementación con un motor brushless, encoders rotativos y un controlador PID.",
        },
        {
          label: "Resultado",
          text: "Imperfecto pero convincente. La resolución de los encoders limitó la rapidez del control: es la primera mejora pendiente.",
        },
        {
          label: "Lo que me llevo",
          text: "Mi primer proyecto real de ingeniería, en el que encontré mi lugar.",
        },
      ],
    },
    {
      slug: "chauffage-inertie",
      title: "Estufa de vórtice: calefacción controlada por inercia térmica",
      meta: "Proyecto de investigación (TIPE) · con Léo NAJAR · 2024",
      cover: "/media/chauffage-poele.webp",
      blocks: [
        {
          label: "La pregunta",
          text: "¿Cómo diseñar una calefacción que regule el caudal y la difusión del calor, para optimizar el confort térmico y reducir las pérdidas de energía?",
        },
        {
          label: "El estado del arte",
          text: "Comparamos cinco familias de estufas: de leña, de pellets, de acumulación, canalizable y rocket. La de acumulación difunde un calor suave durante 12 a 24 h, la rocket quema poca leña con un rendimiento excelente. Combinamos las dos.",
        },
        {
          label: "El diseño",
          text: "En un hogar de acero en forma de L, la leña sufre una pirólisis: se descompone en carbón y gases (CH₄, CO, H₂) que arden a su vez. El hogar está embebido en mortero refractario, que aguanta hasta 1800 °C (frente a 400–500 °C de un mortero clásico) y almacena el calor. Un conducto que atraviesa esa masa calienta el aire de la habitación.",
        },
        {
          label: "El modelo",
          text: "Un balance térmico sobre un tramo de conducto da la temperatura del aire a la salida: tiende exponencialmente a la del hormigón a medida que el conducto se alarga. Este modelo nos sirvió para dimensionar el intercambiador.",
        },
        {
          label: "El control",
          text: "Una placa Arduino Mega lee las temperaturas del intercambiador y de la habitación con termistores calibrados y las compara con la consigna. A través de un chopper, acciona un ventilador de 12 V cuya velocidad es proporcional a la diferencia entre consigna y habitación. Diseñado en Simulink, el programa se corrigió para un caso límite en el que la habitación ya superaba la consigna, y se completó con un filtro paso bajo contra el ruido de las medidas.",
        },
        {
          label: "Mi papel y el resultado",
          text: "En pareja, modelé las piezas y el sistema y llevé la comparación con el estado del arte. Una primera prueba en exterior nunca alcanzó la consigna; la segunda sí. Se cumplieron todos los requisitos, con una temperatura máxima de 60 °C que garantiza el confort térmico en un amplio rango.",
        },
      ],
      gallery: [
        { src: "/media/chauffage-poele.webp", w: 768, h: 1024, caption: "La estufa terminada: hogar de acero embebido en mortero refractario" },
        { src: "/media/chauffage-cao.webp", w: 768, h: 1304, caption: "Modelo 3D: hogar de acero en L y masa de mortero refractario" },
        { src: "/media/chauffage-chaines.webp", w: 1237, h: 646, caption: "Cadena de información y cadena de energía del control" },
        { src: "/media/chauffage-banc.webp", w: 1600, h: 1200, caption: "Banco de pruebas: Arduino, chopper, ventilador y fuente de alimentación" },
        { src: "/media/chauffage-essai.webp", w: 1797, h: 977, caption: "Prueba real: evolución de las temperaturas durante el calentamiento" },
      ],
    },
    {
      slug: "littobs",
      cover: "/media/littobs-prototype.webp",
      title: "Littobs: ciencia ciudadana en SeaTech",
      meta: "Jefe de proyecto · 2025 · equipo de una docena de personas",
      blocks: [
        {
          label: "La idea",
          text: "Diseñar, modelar, fabricar y verificar un sistema de medición en una columna de agua, para apoyar una iniciativa ciudadana y científica.",
        },
        {
          label: "Mi papel",
          text: "Me encargaba del buen desarrollo de las operaciones y del cumplimiento de los plazos.",
        },
        {
          label: "Resultado",
          text: "El jurado quedó muy satisfecho con nuestra motivación, nuestra eficacia y sobre todo con los resultados.",
        },
      ],
      gallery: [
        { src: "/media/littobs-prototype.webp", w: 1200, h: 2133, caption: "Prototipo del sistema de descenso, impreso en 3D" },
        { src: "/media/littobs-schema.webp", w: 1800, h: 1267, caption: "Principio de la sonda: flotador, sistema de descenso, instrumentos de medida, ancla" },
        { src: "/media/littobs-gantt.svg", w: 1844, h: 1296, caption: "Planificación del proyecto (diagrama de Gantt) que yo dirigía" },
        { src: "/media/littobs-raci.webp", w: 2400, h: 1430, caption: "Matriz RACI: quién realiza, aprueba, es consultado o informado" },
      ],
    },
    {
      slug: "simulateur-vehicule",
      title: "Simulador de dinámica de vehículos",
      meta: "Proyecto en curso",
      status: "En curso",
      blocks: [
        {
          label: "La idea",
          text: "Simular el comportamiento dinámico de un vehículo, empezando por un modelo simple de bicicleta antes de abordar el proyecto completo.",
        },
        {
          label: "Dónde estoy",
          text: "El simulador de bicicleta. Esta ficha se actualizará a medida que avance.",
        },
      ],
    },
  ] as Project[],
  skillsTitle: "Competencias",
  skillsHead: { domain: "Ámbito", skills: "Competencias", proof: "Demostrado en" },
  skills: [
    { domain: "Programación", skills: "Python, C, MATLAB, Simulink · aprendiendo ROS", proof: "Simulador de vehículos, proyectos de investigación" },
    { domain: "Automática", skills: "Modelado, control realimentado, PID", proof: "Péndulo doble, calefacción por inercia" },
    { domain: "Hardware", skills: "Arduino, motores brushless, encoders rotativos", proof: "Péndulo doble" },
    { domain: "Gestión de proyectos", skills: "Planificación, seguimiento de plazos, coordinación", proof: "Littobs" },
    { domain: "Idiomas", skills: "Francés (nativo) · Español (certificación europea) · Inglés B2", proof: "" },
  ],
  softSkillsLabel: "Habilidades personales",
  softSkills:
    "Sé escuchar, soy mediador, riguroso, organizado y, sobre todo, resiliente. Dieciocho años de gimnasia me enseñaron a repetir un movimiento hasta que sale bien.",
  aboutTitle: "Sobre mí",
  about: [
    "Estoy en segundo año de ingeniería en SeaTech Toulon, especialidad robótica y sistemas embebidos. Lo que me apasiona: el control realimentado y hacer más eficientes las operaciones automatizadas.",
    "Antes de la ingeniería estuvo la gimnasia artística masculina. La practiqué durante 18 años, hasta los títulos de campeón de Francia individual y por equipos. La gimnasia me enseñó precisión, paciencia y repetición hasta el gesto justo. Es exactamente lo que busco en un sistema de control.",
    "Hace poco descubrí el rugby. Después de un deporte individual, aprendo a jugar para un equipo.",
    "Por último, me motiva el emprendimiento: a largo plazo quiero construir proyectos con otros, no solo contribuir a ellos.",
  ],
  aboutPortrait: { src: "/media/portrait.webp", w: 1000, h: 1499, alt: "Retrato de Antonin RAAS" },
  aboutPhoto: { src: "/media/gym-equipe.webp", w: 2000, h: 1123, caption: "Con mi equipo de gimnasia artística" },
  stats: [
    { value: "18 años", label: "de gimnasia artística" },
    { value: "Campeón", label: "de Francia, individual y por equipos" },
    { value: "4", label: "proyectos de ingeniería" },
    { value: "3", label: "idiomas" },
  ],
  contactTitle: "Contacto",
  contactText: "¿Unas prácticas, un proyecto, una idea para construir juntos? Escríbeme.",
  links: {
    email: "raas.antonin66@gmail.com",
    linkedin: "https://www.linkedin.com/in/antonin-raas-05b731386",
    github: "",
  },
  footer: "Sitio diseñado y desarrollado por Antonin RAAS.",
};
