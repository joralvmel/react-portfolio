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
