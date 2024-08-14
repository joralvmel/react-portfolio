"use client";

import profile from "@/public/profile.jpg";
import Image from "next/image";

import {
  FaReact,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

export const config = {
  email: "joralvmel@gmail.com",
  logo: <FaReact />,
  buttons: ["Resume", "CV"],

  hero: (
    <>
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Jorge Álvarez.</h2>
      <h3 className="medium-heading">I build web applications.</h3>
      <p>
        As a Software Engineer, I see coding as both an art and a science. My
        passion lies in crafting beautiful, intuitive interfaces using React,
        where creativity meets functionality. Every project is an opportunity to
        push boundaries, innovate, and bring ideas to life in a way that
        resonates with users.
      </p>
    </>
  ),

  about: {
    header: <h2 className="numbered-heading">About Me</h2>,
    text: (
      <div>
        <p>
          Hello! My name is Jorge and I am a Software Developer proficient in
          debugging, error correction, introducing new functionalities, and
          skilled in full stack development mainly focused on React Web
          Applications.
        </p>

        <p>
          My consultancy background equips me with strong client management
          skills, adaptable to various industries and countries. I excel at
          working under pressure in collaborative teams with great time
          management.
        </p>

        <p>
          In summary, I bring extensive process improvement, client management,
          teamwork skills, automation, and full stack development expertise to
          the table, all supported by a commitment to lifelong learning.
        </p>

        <p>Here are a few technologies I’ve been working with recently:</p>
      </div>
    ),

    skills: [
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "HTML & CSS",
      "Node.js",
      "Java",
    ],

    image: (
      <Image src={profile} fill quality={80} alt={`Profile picture of me`} />
    ),
  },

  experience: {
    header: <h2 className="numbered-heading">Experience</h2>,
    jobs: [
      {
        company: "Solera",
        position: "Software Developer Engineer",
        startDate: "June 2021",
        endDate: "Present",
        description: (
          <ul>
            <li>
              Modernizing Omnitracs applications utilizing contemporary React,
              JavaScript, and styling techniques.
            </li>
            <li>
              Collaborated on the development, maintenance, and continuous
              improvement of Qapter Claims Application.
            </li>
            <li>
              Identified and rectified errors promptly to ensure smooth and
              efficient operation.
            </li>
            <li>
              Worked closely with the team following Agile practices to
              understand project requirements and ensure timely delivery of
              high-quality solutions.
            </li>
            <li>
              Participated in code review sessions to enforce best development
              practices and maintain clean and efficient code.
            </li>
          </ul>
        ),
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
        description: (
          <ul>
            <li>
              Worked with clients from diverse industries, including
              pharmaceuticals, manufacturing, distribution, agricultural, and
              fishery, to identify areas of opportunity and drive cost-saving
              initiatives.
            </li>
            <li>
              Utilized statistical analysis and applied consulting methodologies
              to analyze client data and develop data-driven insights for
              process optimization and efficiency improvements.
            </li>
            <li>
              Designed and implemented interactive dashboards using Power BI to
              visually represent complex data sets, facilitating better
              decision-making for clients&apos; management teams.
            </li>
            <li>
              Collaborated closely with cross-functional teams, executives, and
              stakeholders to understand business challenges, communicate
              project updates, and ensure seamless project execution.
            </li>
          </ul>
        ),
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
        description: (
          <ul>
            <li>
              Designed and facilitated an engaging online robotics course for
              teenagers
            </li>
            <li>
              Created interactive learning materials, including video tutorials,
              quizzes, and hands-on exercises, to promote a comprehensive
              understanding of robotics concepts
            </li>
            <li>
              Demonstrated effective communication skills to ensure clear and
              concise delivery of technical information to students of varying
              skill levels.
            </li>
          </ul>
        ),
        technologies: ["VEXcode VR", "C++", "Google Forms"],
      },
      {
        company: "Self-Employment",
        position: "Owner and 3D Designer",
        startDate: "February 2021",
        endDate: "Present",
        description: (
          <ul>
            <li>
              Specialized in the design, 3D modeling, and manufacturing of aroma
              diffuser devices using SolidWorks and 3D printing technology as
              well as the design of custom printed circuit boards (PCBs).
            </li>
            <li>
              Conducted material testing to select the most suitable materials
              for manufacturing, balancing quality and cost-effectiveness.
            </li>
            <li>
              Maintained and troubleshooted the 3D printer to ensure continuous
              and efficient production of parts.
            </li>
            <li>
              Managed inventory and supply chain, overseeing the procurement of
              raw materials and maintaining optimal stock levels to meet
              customer demand.
            </li>
          </ul>
        ),
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
        description: (
          <ul>
            <li>
              Collaborated with other team members on data analysis, database
              integration, and system testing.
            </li>
            <li>
              Designed and implemented the user interface using Python, creating
              a user-friendly application that guided participants through the
              expression recording process.
            </li>
            <li>
              Worked closely with teammates to integrate the user interface with
              the backend system, allowing the recorded videos and data to be
              analyzed using artificial intelligence techniques.
            </li>
          </ul>
        ),
        technologies: ["Python", "AI", "Tkinter"],
      },
    ],
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
