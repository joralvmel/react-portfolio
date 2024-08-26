"use client";

import profilePic from "@/public/profile.jpg";
import watchlist from "@/public/watchlist-api.png";
import connectFour from "@/public/react-connect-four.png";
import theWildOasis from "@/public/the-wild-oasis.png";
import theWildOasisWebsite from "@/public/the-wild-oasis-website.png";
import Image from "next/image";

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

export const configEn = {
  email: "joralvmel@gmail.com",
  githubTitle: "GitHub Repository",
  externalTitle: "Live View",

  buttons: { resume: "CV", more: "Show More", less: "Show Less" },

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
    title: "Hi, my name is",
    name: "Jorge Álvarez",
    header: "I build web applications.",
    text: " As a Software Engineer, I see coding as both an art and a science. My passion lies in crafting beautiful, intuitive interfaces using React, where creativity meets functionality. Every project is an opportunity to push boundaries, innovate, and bring ideas to life in a way that resonates with users.",
  },

  about: {
    header: "About",
    text: [
      "Hello! My name is Jorge and I am a Software Developer proficient in debugging, error correction, introducing new functionalities, and skilled in full stack development mainly focused on React Web Applications.",
      "My consultancy background equips me with strong client management skills, adaptable to various industries and countries. I excel at working under pressure in collaborative teams with great time management.",
      "In summary, I bring extensive process improvement, client management, teamwork skills, automation, and full stack development expertise to the table, all supported by a commitment to lifelong learning.",
      "Here are a few technologies I've been working with recently:",
    ],
    skills: [
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "HTML & CSS",
      "Node.js",
      "Java",
    ],
    profilePic: (
      <Image
        src={profilePic}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        alt={`Profile picture of me`}
      />
    ),
  },

  experience: {
    header: "Experience",
    jobs: [
      {
        company: "Solera",
        position: "Software Developer Engineer",
        startDate: "June 2021",
        endDate: "Present",
        description: [
          "Modernizing Omnitracs applications utilizing contemporary React, JavaScript, and styling techniques.",
          "Collaborated on the development, maintenance, and continuous improvement of Qapter Claims Application.",
          "Identified and rectified errors promptly to ensure smooth and efficient operation.",
          "Worked closely with the team following Agile practices to understand project requirements and ensure timely delivery of    high-quality solutions.",
          "Participated in code review sessions to enforce best development practices and maintain clean and efficient code.",
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
        startDate: "September 2021",
        endDate: "October 2022",
        description: [
          "Worked with clients from diverse industries, including pharmaceuticals, manufacturing, distribution, agricultural, and fishery, to identify areas of opportunity and drive cost-saving initiatives.",
          "Utilized statistical analysis and applied consulting methodologies to analyze client data and develop data-driven insights for process optimization and efficiency improvements.",
          "Designed and implemented interactive dashboards using Power BI to visually represent complex data sets, facilitating better decision-making for clients' management teams.",
          "Collaborated closely with cross-functional teams, executives, and stakeholders to understand business challenges, communicate project updates, and ensure seamless project execution.",
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
        position: "Online Robotics Instructor",
        startDate: "May 2021",
        endDate: "May 2021",
        description: [
          "Designed and facilitated an engaging online robotics course for teenagers.",
          "Created interactive learning materials, including video tutorials, quizzes, and hands-on exercises, to promote a comprehensive understanding of robotics concepts.",
          "Demonstrated effective communication skills to ensure clear and concise delivery of technical information to students of varying skill levels.",
        ],

        technologies: ["VEXcode VR", "C++", "Google Forms"],
      },
      {
        company: "Self-Employment",
        position: "Owner and 3D Designer",
        startDate: "February 2021",
        endDate: "Present",
        description: [
          "Specialized in the design, 3D modeling, and manufacturing of aroma diffuser devices using SolidWorks and 3D printing technology as well as the design of custom printed circuit boards (PCBs).",
          "Conducted material testing to select the most suitable materials for manufacturing, balancing quality and cost-effectiveness.",
          "Maintained and troubleshooted the 3D printer to ensure continuous and efficient production of parts.",
          "Managed inventory and supply chain, overseeing the procurement of raw materials and maintaining optimal stock levels to meet customer demand.",
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
        position: "Expression Recording and Analysis System",
        startDate: "August 2020",
        endDate: "December 2020",
        description: [
          "Collaborated with other team members on data analysis, database integration, and system testing.",
          "Designed and implemented the user interface using Python, creating a user-friendly application that guided participants through the expression recording process.",
          "Worked closely with teammates to integrate the user interface with the backend system, allowing the recorded videos and data to be analyzed using artificial intelligence techniques.",
        ],
        technologies: ["Python", "AI", "Tkinter"],
      },
    ],
  },

  projects: {
    header: "Projects",

    content: [
      {
        title: "The Wild Oasis",
        description:
          "An application designed for managing check-ins and check-outs in a boutique hotel, including a dashboard for administrators and other configuration options for the hotel staff.",
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
        image: (
          <Image
            src={theWildOasis}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            alt={`The Wild Oasis Dashboard`}
          />
        ),
      },
      {
        title: "The Wild Oasis Website",
        description:
          "A website designed for a boutique hotel, including a booking system, login functionality with reservation and user management.",
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
        image: (
          <Image
            src={theWildOasisWebsite}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            alt={`The Wild Oasis main screen`}
          />
        ),
      },
      {
        title: "React Connect Four",
        description:
          "A simple Connect Four game built with React, where two players can play against each other.",
        technologies: ["React", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/react-connect-four",
        external: "https://react-conncect-four-joralvmel.netlify.app/",
        image: (
          <Image
            src={connectFour}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            alt={`Connect Four Game`}
          />
        ),
      },
      {
        title: "Watchlist API",
        description:
          "An application for keeping track of your favorite Movies and TV Shows with the functionality of creating Watchlists, and providing Movie or TV Show information.",
        technologies: ["EJS", "CSS", "Node.js", "jQuery", "API"],
        github: "https://github.com/joralvmel/watchlist-api",
        external: "https://joralvmel-watchlist-api.onrender.com/",
        image: (
          <Image
            src={watchlist}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            alt={`Watchlist API Dashboard`}
          />
        ),
      },
    ],
  },

  otherProjects: {
    header: "Other Projects",

    content: [
      {
        title: "Simon",
        description: "Simon says game built with HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/joralvmel/simon",
        external: "https://joralvmel.github.io/simon/",
      },
      {
        title: "Watchlist App",
        description:
          "An application to keek track of your TV Shows and Movies watchlists",
        technologies: ["EJS", "Javascript", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/watchlist-app",
        external: "https://joralvmel-watchlist-app.onrender.com/",
      },
      {
        title: "Forkify",
        description:
          "An application to search for recipes, add your own and bookmark them.",
        technologies: ["JavaScript", "HTML", "SCSS", "API"],
        github: "https://github.com/joralvmel/forkify",
        external: "https://forkify-joralvmel.netlify.app/",
      },
      {
        title: "React Tic-Tac-Toe",
        description: "A simple Tic Tac Toe game built with React.",
        technologies: ["React", "JavaScript", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/react-tic-tac-toe",
        external: "https://react-tic-tac-toe-joralvmel.netlify.app/",
      },
      {
        title: "Worldwise",
        description:
          "An application for keeping track of you visited cities all arround the wolrd",
        technologies: ["React", "JavaScript", "CSS", "Node.js"],
        github: "https://github.com/joralvmel/worldwise",
        external: "https://react-worldwise-joralvmel.netlify.app/",
      },
      {
        title: "React Quiz",
        description: "A simple quiz application built with React.",
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
    header: "Contact",
    title: "Get in touch",
    text: " I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: "joralvmel@gmail.com",
  },

  footer: {
    text: "Built by Jorge Alvarez",
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
      content: "About",
      url: "/#about",
    },
    {
      content: "Experience",
      url: "/#experience",
    },
    {
      content: "Projects",
      url: "/#projects",
    },
    {
      content: "Contact",
      url: "/#contact",
    },
  ],
};
