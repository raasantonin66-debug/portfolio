// English version of the site. Keep it in sync with content/fr.ts.
import type { Dict, Project } from "./fr";

export const en: Dict = {
  lang: "en",
  meta: {
    title: "Antonin RAAS · Robotics and control systems",
    description:
      "Portfolio of Antonin RAAS, robotics and embedded systems engineering student at SeaTech Toulon and French champion in artistic gymnastics.",
  },
  eyebrow: "SeaTech Toulon · Robotics & embedded systems",
  a11y: { nav: "Main navigation", lang: "Language" },
  ui: {
    home: "Home",
    allProjects: "See all projects",
    backToProjects: "All projects",
    nextProject: "Next project",
    localTime: "Local time",
    letsWork: "Let's work together",
    scroll: "Scroll",
    menu: "Menu",
    close: "Close",
    featured: "Flagship project",
    intro: "An engineer in the making, a gymnast at heart.",
    projectsIntro: "Four projects, from modelling to implementation.",
    viewProject: "View project",
    year: "Year",
    role: "Context",
  },
  nav: {
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",
  },
  hero: {
    name: "Antonin RAAS",
    tagline: "From giant swings on the high bar to control systems.",
    subtitle:
      "Robotics engineering student at SeaTech Toulon and French gymnastics champion. I look for the same precision in a robot as in a movement.",
    ctaProjects: "See my projects",
    ctaContact: "Contact me",
    ctaCv: "Download my CV",
    banner:
      "Looking for a 2nd-year engineering internship abroad, May to August 2027, in Spain.",
  },
  projectsTitle: "Projects",
  projects: [
    {
      slug: "double-pendule",
      title: "The robotic giant swing: controlling a double pendulum",
      meta: "Research project (TIPE) · flagship · solo · 2023",
      featured: true,
      cover: "/media/double-pendule-poster.webp",
      feature: {
        kicker: "The gymnastics behind it",
        title: "The giant swing, the core move of the high bar",
        text: [
          "The giant swing (\"soleil\" in French, the sun) is the foundation of the high bar: the gymnast rotates a full 360° around the bar, arms straight and body tight, circle after circle. It builds the momentum for almost every release and dismount.",
          "Simply falling is not enough: on each circle, the friction of the hands on the bar and air resistance drain energy. To make up for it, the gymnast acts as they pass under the bar. They arch slightly on the way down, then \"kick\" by closing the shoulders and hips on the way up. Their centre of mass moves closer to the bar, the rotation speeds up and they pass over the top in a smooth handstand.",
          "Biomechanics research by Yeadon and Hiley (Loughborough University) models the gymnast as a chain of linked segments and shows that these well-timed shoulder and hip actions are what keep the giant swing going.",
          "My prototype follows the same idea: one segment plays the arms, a second one the body, and a motor replaces the muscles. The controller has to apply the right torque at the right moment, exactly like a gymnast timing the kick.",
        ],
        video: {
          src: "/media/double-pendule.mp4",
          poster: "/media/double-pendule-poster.webp",
          w: 720,
          h: 1280,
          caption: "The prototype under test: a double pendulum on a frame, driven by an Arduino board and rotary encoders.",
        },
        source: { label: "Source: Yeadon & Hiley (2000), The mechanics of the backward giant circle on the high bar", url: "https://www.lboro.ac.uk/microsites/ssehs/biomechanics/research-biomech/papers/hibarmech00.pdf" },
      },
      blocks: [
        {
          label: "The idea",
          text: "Reproduce the giant swing on the high bar with a double pendulum, a move I repeated thousands of times in gymnastics.",
        },
        {
          label: "The challenge",
          text: "A double pendulum is a chaotic system. The smallest deviation grows fast, so it has to be corrected almost instantly.",
        },
        {
          label: "What I did",
          text: "Modelling, control design, and implementation with a brushless motor, rotary encoders and a PID controller.",
        },
        {
          label: "Result",
          text: "Imperfect but convincing. Encoder resolution limited how fast the controller could react: that is the first area to improve.",
        },
        {
          label: "What I took from it",
          text: "My first real engineering project, the one where I found my footing.",
        },
      ],
    },
    {
      slug: "chauffage-inertie",
      title: "Vortex stove: controlled heating using thermal inertia",
      meta: "Research project (TIPE) · with Léo NAJAR · 2024",
      cover: "/media/chauffage-poele.webp",
      blocks: [
        {
          label: "The question",
          text: "How do you design a heater that regulates the flow and spread of heat, to maximise thermal comfort while cutting energy losses?",
        },
        {
          label: "State of the art",
          text: "We compared five families of stoves: log, pellet, masonry, ducted and rocket. A masonry stove releases gentle heat for 12 to 24 hours, a rocket stove burns little wood with excellent efficiency. We combined the two.",
        },
        {
          label: "The design",
          text: "In an L-shaped steel firebox, the wood undergoes pyrolysis: it breaks down into charcoal and gases (CH₄, CO, H₂) that burn in turn. The firebox is cast in refractory mortar, which withstands up to 1800 °C (versus 400 to 500 °C for standard mortar) and stores the heat. A duct running through this mass warms the room air.",
        },
        {
          label: "The model",
          text: "A heat balance on a slice of duct gives the outlet air temperature: it approaches the concrete temperature exponentially as the duct gets longer. We used this model to size the heat exchanger.",
        },
        {
          label: "The control loop",
          text: "An Arduino Mega reads the exchanger and room temperatures with calibrated thermistors and compares them with the setpoint. Through a motor driver, it runs a 12 V fan whose speed is proportional to the gap between setpoint and room. Designed in Simulink, the program was fixed for an edge case where the room was already above the setpoint, then given a low-pass filter against sensor noise.",
        },
        {
          label: "My role and the result",
          text: "Working in a pair, I modelled the parts and the system and led the comparison with existing stoves. A first outdoor test never reached the setpoint; the second one did. Every requirement was met, with a maximum temperature of 60 °C that keeps the user comfortable over a wide range.",
        },
      ],
      gallery: [
        { src: "/media/chauffage-poele.webp", w: 768, h: 1024, caption: "The finished stove: steel firebox cast in refractory mortar" },
        { src: "/media/chauffage-cao.webp", w: 768, h: 1304, caption: "3D model: L-shaped steel firebox and refractory mortar mass" },
        { src: "/media/chauffage-chaines.webp", w: 1237, h: 646, caption: "Information and energy chains of the control system" },
        { src: "/media/chauffage-banc.webp", w: 1600, h: 1200, caption: "Test bench: Arduino, motor driver, fan and power supply" },
        { src: "/media/chauffage-essai.webp", w: 1797, h: 977, caption: "Real test: temperatures over the heating run" },
      ],
    },
    {
      slug: "littobs",
      cover: "/media/littobs-prototype.webp",
      title: "Littobs: citizen science at SeaTech",
      meta: "Project manager · 2025 · team of about twelve",
      blocks: [
        {
          label: "The idea",
          text: "Design, model, build and test a system that takes measurements through a water column, to support a citizen and scientific initiative.",
        },
        {
          label: "My role",
          text: "I kept operations running smoothly and the team on schedule.",
        },
        {
          label: "Result",
          text: "The jury was very pleased with our motivation, our efficiency and above all our results.",
        },
      ],
      gallery: [
        { src: "/media/littobs-prototype.webp", w: 1200, h: 2133, caption: "3D-printed prototype of the descent system" },
        { src: "/media/littobs-schema.webp", w: 1800, h: 1267, caption: "How the probe works: float, descent system, measuring instruments, anchor" },
        { src: "/media/littobs-gantt.svg", w: 1844, h: 1296, caption: "Project schedule (Gantt chart) that I managed" },
        { src: "/media/littobs-raci.webp", w: 2400, h: 1430, caption: "RACI matrix: who is responsible, accountable, consulted or informed" },
      ],
    },
    {
      slug: "simulateur-vehicule",
      title: "Vehicle dynamics simulator",
      meta: "Ongoing project",
      status: "Ongoing",
      blocks: [
        {
          label: "The idea",
          text: "Simulate the dynamic behaviour of a vehicle, starting with a simple bicycle model before taking on the full project.",
        },
        {
          label: "Where I am",
          text: "The bicycle simulator. This page will be updated as the project progresses.",
        },
      ],
    },
  ] as Project[],
  skillsTitle: "Skills",
  skillsHead: { domain: "Area", skills: "Skills", proof: "Shown in" },
  skills: [
    { domain: "Programming", skills: "Python, C, MATLAB, Simulink · currently learning ROS", proof: "Vehicle simulator, research projects" },
    { domain: "Control engineering", skills: "Modelling, feedback control, PID", proof: "Double pendulum, thermal-inertia heating" },
    { domain: "Hardware", skills: "Arduino, brushless motors, rotary encoders", proof: "Double pendulum" },
    { domain: "Project management", skills: "Planning, deadline tracking, coordination", proof: "Littobs" },
    { domain: "Languages", skills: "French (native) · Spanish (European certification) · English B2", proof: "" },
  ],
  softSkillsLabel: "Soft skills",
  softSkills:
    "A good listener, a mediator, rigorous, organised, and above all resilient. Eighteen years of gymnastics taught me to repeat a move until it is right.",
  aboutTitle: "About",
  about: [
    "I am a second-year engineering student at SeaTech Toulon, specialising in robotics and embedded systems. What drives me: feedback control, and making automated operations more efficient.",
    "Before engineering, there was men's artistic gymnastics. I trained for 18 years, all the way to French champion titles, both individual and team. Gymnastics taught me precision, patience and repetition until the move is right. That is exactly what I look for in a control system.",
    "Recently, I discovered rugby. After an individual sport, I am learning to play for a team.",
    "Finally, entrepreneurship motivates me: in the long run, I want to build projects with others, not just contribute to them.",
  ],
  aboutPortrait: { src: "/media/portrait.webp", w: 1000, h: 1499, alt: "Portrait of Antonin RAAS" },
  aboutPhoto: { src: "/media/gym-equipe.webp", w: 2000, h: 1123, caption: "With my artistic gymnastics team" },
  stats: [
    { value: "18 years", label: "of artistic gymnastics" },
    { value: "Champion", label: "of France, individual and team" },
    { value: "4", label: "engineering projects" },
    { value: "3", label: "languages" },
  ],
  contactTitle: "Contact",
  contactText: "An internship, a project, an idea to build together? Get in touch.",
  links: {
    email: "raas.antonin66@gmail.com",
    linkedin: "https://www.linkedin.com/in/antonin-raas-05b731386",
    github: "",
  },
  footer: "Site designed and built by Antonin RAAS.",
};
