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
      "Robotics and embedded systems engineering student at SeaTech Toulon. As a French champion in artistic gymnastics, I bring the same precision to controlling a robot as to controlling a movement.",
    ctaProjects: "See my projects",
    ctaContact: "Contact me",
    ctaCv: "Download my CV",
    story:
      "For 18 years, I swung my body around a bar. For my research project, I learned to make a robot do the same. Push the pendulum: the controller brings it back on track.",
    banner:
      "Looking for a 2nd-year engineering internship abroad, May to August 2027, in Spain.",
  },
  sim: {
    controlOn: "Control: on",
    controlOff: "Control: off",
    hint: "Click or tap the pendulum to disturb it.",
    reset: "Restart",
    aria: "Simulation of a double pendulum performing a giant swing on the high bar",
    caption:
      "Illustrative simulation of a double pendulum (arms + body): a torque at the bar pumps in the energy of the giant swing, and a hip controller keeps the body straight. Turn the control off to watch chaos take over.",
  },
  projectsTitle: "Projects",
  projects: [
    {
      slug: "double-pendule",
      title: "The robotic giant swing: controlling a double pendulum",
      meta: "Research project (TIPE) · flagship · solo · 2023",
      featured: true,
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
      title: "Controlled heating using thermal inertia",
      meta: "Research project (TIPE) · with Léo NAJAR · 2024",
      blocks: [
        {
          label: "The idea",
          text: "Pyrolysis combustion heats a mass of concrete, which stores the energy and releases it over a long period.",
        },
        {
          label: "How it works",
          text: "A second network runs clean air through the concrete. The air picks up heat and then spreads it through the room.",
        },
        {
          label: "My role and the result",
          text: "Modelling of the parts and the system, compared against the state of the art. Effective control, with a maximum temperature of 60 °C that kept the user thermally comfortable over a wide range.",
        },
      ],
    },
    {
      slug: "littobs",
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
    "Before engineering, there was men's artistic gymnastics. I trained for 18 years, all the way to a French championship title. Gymnastics taught me precision, patience and repetition until the move is right. That is exactly what I look for in a control system.",
    "Recently, I discovered rugby. After an individual sport, I am learning to play for a team.",
    "Finally, entrepreneurship motivates me: in the long run, I want to build projects with others, not just contribute to them.",
  ],
  stats: [
    { value: "18 years", label: "of artistic gymnastics" },
    { value: "Champion", label: "of France" },
    { value: "4", label: "engineering projects" },
    { value: "3", label: "languages" },
  ],
  contactTitle: "Contact",
  contactText: "An internship, a project, an idea to build together? Get in touch.",
  links: {
    email: "",
    linkedin: "",
    github: "",
  },
  footer: "Site designed and built by Antonin RAAS.",
};
