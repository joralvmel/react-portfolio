"use client";
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
