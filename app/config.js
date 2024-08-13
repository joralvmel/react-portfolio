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
    section: <h2 className="numbered-heading">About Me</h2>,
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
      content: "Work",
      url: "/#projects",
    },
    {
      content: "Contact",
      url: "/#contact",
    },
  ],
};
