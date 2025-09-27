import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bunny from "../assets/bunny.svg"
const Menu = () => {
  const [currentSection, setCurrentSection] = useState<
    "about" | "experience" | "projects" | "contact"
  >("about");

  return (
    <menu className="w-full flex justify-between fixed bottom-0 md:top-0 md:bottom-auto items-center z-10 ">
      <img
        className="hidden md:block top-0 w-8 ml-5"
        src={bunny}
        alt="Logo"
      />
      <div className="w-full md:w-[80%] h-16 md:h-18 bg-white flex justify-around items-center text-gray-500 text-md md:rounded-bl-3xl inset-shadow-sm inset-shadow-gray-400">
        <Link
          className={`hover:text-black ${
            currentSection === "about" && "font-bold text-black"
          }`}
          onClick={() => setCurrentSection("about")}
          to={"/"}
        >
          Sobre
        </Link>
        <Link
          className={`hover:text-black ${
            currentSection === "experience" && "font-bold text-black"
          }`}
          onClick={() => setCurrentSection("experience")}
          to={"/experience"}
        >
          Experiência
        </Link>
        <Link
          className={`hover:text-black ${
            currentSection === "projects" && "font-bold text-black"
          }`}
          onClick={() => setCurrentSection("projects")}
          to={"/projects"}
        >
          Projetos
        </Link>
        <Link
          className={`hover:text-black ${
            currentSection === "contact" && "font-bold text-black"
          }`}
          onClick={() => setCurrentSection("contact")}
          to={"/contact"}
        >
          Contato
        </Link>
      </div>
    </menu>
  );
};

export default Menu;
