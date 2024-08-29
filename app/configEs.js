"use client";

import profilePic from "@/public/profile.jpg";
import watchlist from "@/public/watchlist-api.png";
import connectFour from "@/public/react-connect-four.png";
import theWildOasis from "@/public/the-wild-oasis.png";
import theWildOasisWebsite from "@/public/the-wild-oasis-website.png";

import {
  FaReact,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaRegFolder,
  FaMoon,
  FaSun,
  FaBars,
} from "react-icons/fa6";

import { FaExternalLinkAlt, FaLanguage } from "react-icons/fa";

export const configEs = {
  email: "joralvmel@gmail.com",
  githubTitle: "Repositorio de GitHub",
  externalTitle: "Visitar Sitio Web",
  cv: "JorgeAlvarezCV.pdf",
  numProjects: 3,

  buttons: { resume: "CV", more: "Mostrar Más", less: "Mostrar Menos" },

  icons: {
    logo: <FaReact />,
    github: <FaGithub />,
    external: <FaExternalLinkAlt />,
    folder: <FaRegFolder />,
    moon: <FaMoon />,
    sun: <FaSun />,
    language: <FaLanguage />,
    menu: <FaBars />,
  },

  hero: {
    title: "Hola, soy",
    name: "Jorge Álvarez",
    header: "Hago cosas en la web.",
    text: " Como Ingeniero de Software, veo la programación tanto como un arte y una ciencia. Mi pasión reside en crear interfaces hermosas e intuitivas usando React, donde la creatividad se encuentra con la funcionalidad. Cada proyecto es una oportunidad para superar límites, innovar y dar vida a ideas de una manera que resuene con los usuarios.",
  },

  about: {
    header: "Acerca de mí",
    text: [
      "¡Hola! Mi nombre es Jorge y soy un Desarrollador de Software competente en depuración, corrección de errores, introducción de nuevas funcionalidades y especializado en desarrollo full stack, principalmente enfocado en aplicaciones web con React.",
      "Mi experiencia en consultoría me proporciona fuertes habilidades de gestión de clientes, adaptable a diversas industrias y países. Destaco en trabajar bajo presión en equipos colaborativos con una excelente gestión del tiempo.",
      "En resumen, aporto amplias habilidades en mejora de procesos, gestión de clientes, trabajo en equipo, automatización y experiencia en desarrollo full stack, todo respaldado por un compromiso con el aprendizaje continuo.",
      "Aquí hay algunas tecnologías con las que he estado trabajando recientemente:",
    ],
    skills: [
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "HTML & CSS",
      "Node.js",
      "Java",
    ],
    profilePic: {
      src: profilePic,
      alt: `Mi foto de perfil`,
    },
  },

  experience: {
    header: "Experiencia",
    jobs: [
      {
        company: "Solera",
        position: "Software Developer Engineer",
        startDate: "Junio 2021",
        endDate: "Presente",
        description: [
          "Modernización de aplicaciones Omnitracs utilizando técnicas contemporáneas de React, JavaScript y estilos.",
          "Colaboración en el desarrollo, mantenimiento y mejora continua de la aplicación Qapter Claims.",
          "Identificación y corrección de errores de manera oportuna para asegurar una operación fluida y eficiente.",
          "Trabajo cercano con el equipo siguiendo prácticas Ágiles para entender los requisitos del proyecto y asegurar la entrega oportuna de soluciones de alta calidad.",
          "Participación en sesiones de revisión de código para aplicar las mejores prácticas de desarrollo y mantener un código limpio y eficiente.",
        ],

        technologies: [
          "Javascript",
          "React",
          "Redux",
          "HTML / CSS",
          "Java",
          "Node.js",
          "SoapUI",
          "Jira",
          "Bitbubket",
          "Figma",
        ],
      },
      {
        company: "London Consulting Group",
        position: "Business Consultant",
        startDate: "Septiembre 2021",
        endDate: "Octubre 2022",
        description: [
          "Trabajé con clientes de diversas industrias, incluyendo farmacéutica, manufactura, distribución, agricultura y pesca, para identificar áreas de oportunidad e impulsar iniciativas de ahorro de costos.",
          "Utilicé análisis estadístico y metodologías de consultoría aplicadas para analizar datos de clientes y desarrollar conocimientos basados en datos para la optimización de procesos y mejoras en la eficiencia.",
          "Diseñé e implementé paneles interactivos utilizando Power BI para representar visualmente conjuntos de datos complejos, facilitando una mejor toma de decisiones para los equipos de gestión de los clientes.",
          "Colaboré estrechamente con equipos multifuncionales, ejecutivos y partes interesadas para entender los desafíos empresariales, comunicar actualizaciones de proyectos y asegurar una ejecución sin problemas de los proyectos.",
        ],

        technologies: [
          "Microsoft PowerBI",
          "Microsoft Excel",
          "Power Query",
          "Miro",
        ],
      },
      {
        company: "Codeyssey",
        position: "Profesor de Robótica",
        startDate: "Mayo 2021",
        endDate: "Mayo 2021",
        description: [
          "Diseñé y facilité un curso en línea de robótica atractivo para adolescentes.",
          "Creé materiales de aprendizaje interactivos, incluyendo tutoriales en video, cuestionarios y ejercicios prácticos, para promover una comprensión integral de los conceptos de robótica.",
          "Demostré habilidades de comunicación efectivas para asegurar una entrega clara y concisa de la información técnica a estudiantes de diferentes niveles de habilidad.",
        ],

        technologies: ["VEXcode VR", "C++", "Google Forms"],
      },
      {
        company: "Auto Empleo",
        position: "Dueño y Diseñador 3D",
        startDate: "Febrero 2021",
        endDate: "Present",
        description: [
          "Especializado en el diseño, modelado 3D y fabricación de dispositivos difusores de aroma utilizando SolidWorks y tecnología de impresión 3D, así como en el diseño de placas de circuitos impresos (PCBs) personalizadas.",
          "Realicé pruebas de materiales para seleccionar los más adecuados para la fabricación, equilibrando calidad y rentabilidad.",
          "Mantuve y solucioné problemas de la impresora 3D para asegurar una producción continua y eficiente de piezas.",
          "Gestioné el inventario y la cadena de suministro, supervisando la adquisición de materias primas y manteniendo niveles óptimos de stock para satisfacer la demanda de los clientes.",
        ],

        technologies: [
          "Solidworks",
          "UltiMaker Cura",
          "3D Printing",
          "Microsoft Excel",
        ],
      },
      {
        company: "Tecnológico de Monterrey",
        position: "Sistema de Grabación y Análisis de Expresiones",
        startDate: "Agosto 2020",
        endDate: "Diciembre 2020",
        description: [
          "Colaboré con otros miembros del equipo en el análisis de datos, la integración de bases de datos y las pruebas del sistema.",
          "Diseñé e implementé la interfaz de usuario utilizando Python, creando una aplicación fácil de usar que guiaba a los participantes a través del proceso de grabación de expresiones.",
          "Trabajé estrechamente con los compañeros de equipo para integrar la interfaz de usuario con el sistema backend, permitiendo que los videos y datos grabados fueran analizados utilizando técnicas de inteligencia artificial.",
        ],
        technologies: ["Python", "AI", "Tkinter"],
      },
    ],
  },

  projects: {
    header: "Proyectos",

    content: [
      {
        title: "The Wild Oasis",
        image: {
          src: theWildOasis,
          alt: `Dashboard de The Wild Oasis`,
        },
        description:
          "Una aplicación diseñada para gestionar check-ins y check-outs en un hotel boutique, incluyendo un panel de control para administradores y otras opciones de configuración para el personal del hotel.",
        technologies: [
          "React",
          "Node.js",
          "Styled Components",
          "React-query",
          "Supabase",
          "Recharts",
        ],
        github: "https://github.com/joralvmel/react-the-wild-oasis",
        external: "https://react-the-wild-oasis-nine.vercel.app/",
      },
      {
        title: "The Wild Oasis Website",
        image: {
          src: theWildOasisWebsite,
          alt: `Pantalla principal de The Wild Oasis`,
        },
        description:
          "Un sitio web diseñado para un hotel boutique, que incluye un sistema de reservas, funcionalidad de inicio de sesión con gestión de reservas y usuarios.",
        technologies: [
          "React",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
          "Supabase",
          "NextAuth",
        ],
        github: "https://github.com/joralvmel/the-wild-oasis-website",
        external: "https://the-wild-oasis-website-eta-eight.vercel.app/",
      },
      {
        title: "React Connect Four",
        image: {
          src: connectFour,
          alt: `Juego de Conecta 4`,
        },
        description:
          "Un sencillo juego de Conecta Cuatro construido con React, donde dos jugadores pueden jugar entre sí.",
        technologies: ["React", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/react-connect-four",
        external: "https://react-conncect-four-joralvmel.netlify.app/",
      },
      {
        title: "Watchlist API",
        image: {
          src: watchlist,
          alt: `Dashboard de la Watchlist API`,
        },
        description:
          "Una aplicación para llevar un registro de tus películas y programas de TV favoritos con la funcionalidad de crear listas de seguimiento y proporcionar información sobre películas o programas de TV.",
        technologies: ["EJS", "CSS", "Node.js", "jQuery", "API"],
        github: "https://github.com/joralvmel/watchlist-api",
        external: "https://joralvmel-watchlist-api.onrender.com/",
      },
    ],
  },

  otherProjects: {
    header: "Otros Proyectos",
    numProjects: 4,

    content: [
      {
        title: "Simon",
        description:
          "Juego de Simón dice construido con HTML, CSS y JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/joralvmel/simon",
        external: "https://joralvmel.github.io/simon/",
      },
      {
        title: "Watchlist App",
        description:
          "Una aplicación para llevar un registro de tus listas de seguimiento de programas de TV y películas",
        technologies: ["EJS", "Javascript", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/watchlist-app",
        external: "https://joralvmel-watchlist-app.onrender.com/",
      },
      {
        title: "Forkify",
        description:
          "Una aplicación para buscar recetas, agregar las tuyas propias y marcarlas como favoritas.",
        technologies: ["JavaScript", "HTML", "SCSS", "API"],
        github: "https://github.com/joralvmel/forkify",
        external: "https://forkify-joralvmel.netlify.app/",
      },
      {
        title: "React Tic-Tac-Toe",
        description: "Un sencillo juego de Tic Tac Toe construido con React.",
        technologies: ["React", "JavaScript", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/react-tic-tac-toe",
        external: "https://react-tic-tac-toe-joralvmel.netlify.app/",
      },
      {
        title: "Worldwise",
        description:
          "Una aplicación para llevar un registro de las ciudades que has visitado en todo el mundo",
        technologies: ["React", "JavaScript", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/worldwise",
        external: "https://react-worldwise-joralvmel.netlify.app/",
      },
      {
        title: "React Quiz",
        description:
          "Una sencilla aplicación de cuestionarios construida con React.",
        technologies: ["React", "JavaScript", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/react-quiz?tab=readme-ov-file",
        external: "https://react-quiz-joralvmel.netlify.app/",
      },
      {
        title: "Fast React Pizza",
        description:
          "A simple pizza ordering application built with React and Tailwind CSS.",
        technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
        github: "https://github.com/joralvmel/fast-react-pizza-tailwind",
        external: "https://fast-react-pizza-tailwind-joralvmel.netlify.app/",
      },
    ],
  },

  contact: {
    header: "Contacto",
    title: "Ponte en contacto",
    text: "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré lo mejor que pueda para responderte!",
    email: "joralvmel@gmail.com",
  },

  footer: {
    text: "Construido por Jorge Alvarez",
    url: "https://github.com/joralvmel/react-portfolio",
  },

  socialMedia: [
    {
      content: "GitHub",
      url: "https://github.com/joralvmel",
      icon: <FaGithub />,
    },
    {
      content: "Linkedin",
      url: "https://www.linkedin.com/in/joralvmel",
      icon: <FaLinkedinIn />,
    },
    {
      content: "Instagram",
      url: "https://www.instagram.com/joralvmel",
      icon: <FaInstagram />,
    },
    {
      content: "Twitter",
      url: "https://twitter.com/joralvmel",
      icon: <FaXTwitter />,
    },
  ],

  navLinks: [
    {
      content: "Acerca de",
      url: "/#about",
    },
    {
      content: "Experiencia",
      url: "/#experience",
    },
    {
      content: "Proyectos",
      url: "/#projects",
    },
    {
      content: "Contacto",
      url: "/#contact",
    },
  ],
};
