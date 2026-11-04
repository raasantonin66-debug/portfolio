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
    intro: "Ingeniero en formación, gimnasta de corazón.",
    projectsIntro: "Cuatro proyectos, del modelado a la implementación.",
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
    tagline: "De los molinos en la barra fija a los sistemas de control.",
    subtitle:
      "Estudiante de ingeniería en robótica y sistemas embebidos en SeaTech Toulon. Campeón de Francia de gimnasia artística, pongo la misma exigencia en controlar un robot que en controlar un movimiento.",
    ctaProjects: "Ver mis proyectos",
    ctaContact: "Contactarme",
    ctaCv: "Descargar mi CV",
    story:
      "Durante 18 años hice girar mi cuerpo alrededor de una barra. En mi proyecto de investigación aprendí a hacer girar un robot de la misma manera. Empuja el péndulo: el control lo devuelve a su trayectoria.",
    banner:
      "Busco unas prácticas de ingeniería de 2.º año en el extranjero, de mayo a agosto de 2027, en España.",
  },
  sim: {
    controlOn: "Control: activado",
    controlOff: "Control: desactivado",
    hint: "Haz clic o toca el péndulo para perturbarlo.",
    reset: "Reiniciar",
    aria: "Simulación de un péndulo doble realizando un molino en la barra fija",
    caption:
      "Simulación ilustrativa de un péndulo doble (brazos + cuerpo): un par en la barra aporta la energía del molino y un controlador en la cadera mantiene el cuerpo alineado. Desactiva el control para ver el caos.",
  },
  projectsTitle: "Proyectos",
  projects: [
    {
      slug: "double-pendule",
      title: "El molino robotizado: control de un péndulo doble",
      meta: "Proyecto de investigación (TIPE) · proyecto estrella · individual · 2023",
      featured: true,
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
      title: "Calefacción controlada por inercia térmica",
      meta: "Proyecto de investigación (TIPE) · con Léo NAJAR · 2024",
      blocks: [
        {
          label: "La idea",
          text: "Una combustión por pirólisis calienta una masa de hormigón, que almacena la energía y la libera durante mucho tiempo.",
        },
        {
          label: "El principio",
          text: "Una segunda red hace circular aire limpio por el hormigón. El aire se carga de calor y lo reparte por la habitación.",
        },
        {
          label: "Mi papel y el resultado",
          text: "Modelado de las piezas y del sistema, comparado con el estado del arte. Control eficaz, con una temperatura máxima de 60 °C que garantizaba el confort térmico del usuario en un amplio rango.",
        },
      ],
    },
    {
      slug: "littobs",
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
