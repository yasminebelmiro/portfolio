import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  FaArrowRight,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Link } from "react-router-dom";
import furniro from "../assets/projects-images/furniro.jpeg";
import calculadora from "../assets/projects-images/calculadora.jpeg";
import spotify from "../assets/projects-images/spotify.jpeg";
import dd from "../assets/projects-images/dd.png";
import gitFinder from "../assets/projects-images/git-finder.png";
import digitrend from "../assets/projects-images/digitrend.png";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Desconto Direto",
      image: dd,
      description: "Aplicação de retenção de ofertas locais.",
      link: "https://github.com/yasminebelmiro/Desconto-Direto",
      technologies: [<FaReact />, <SiTypescript />, <SiTailwindcss />],
    },
    {
      id: "02",
      title: "Furniro",
      image: furniro,
      description: "Ecommerce de uma loja de móveis.",
      link: "https://github.com/yasminebelmiro/furniro-web",
      technologies: [<FaReact />, <SiTypescript />, <SiTailwindcss />],
    },
    {
      id: "03",
      title: "Digitrend",
      image: digitrend,
      description: "Landing page de uma empresa de marketing digital.",
      link: "https://github.com/yasminebelmiro/digitrend-web",
      technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    },
    {
      id: "04",
      title: "GitHub Finder",
      image: gitFinder,
      description: "Aplicação para buscar usuários e repositórios do GitHub.",
      link: "https://github.com/yasminebelmiro/github-finder-2.0",
      technologies: [<FaReact />, <SiTypescript />, <FaCss3Alt />],
    },
    {
      id: "05",
      title: "Spotify Clone",
      image: spotify,
      description: "Um clone da interface do Spotify.",
      link: "https://github.com/yasminebelmiro/spotify-clone",
      technologies: [
        <FaReact />,
        <FaCss3Alt />,
        <FaNodeJs />,
        <SiExpress />,
        <SiMongodb />,
      ],
    },
    {
      id: "06",
      title: "Calculadora",
      image: calculadora,
      description: "Uma calculadora simples feita com React.",
      link: "https://github.com/yasminebelmiro/Calculadora",
      technologies: [<FaReact />, <FaJs />, <SiStyledcomponents />],
    },
  ];
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-5 justify-start items-center py-10 ">
      <h1 className="text-2xl">
        Meus <b>Projetos</b>
      </h1>
      {projects.map((project, index) => (
        <div
          className=" w-full flex flex-col justify-start items-center md:flex-row gap-5  hover:bg-black hover:text-white p-5"
          key={index}
        >
          <div className="w-full  h-auto md:w-[250px] relative overflow-hidden cursor-pointer">
            <img
              className="w-full object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="w-full absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 hover:opacity-100">
              <Link
                className="w-full h-full  flex justify-center items-center"
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-6xl lg:text-4xl" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">{project.id}</h1>
              <h1 className="text-xl font-bold">{project.title}</h1>
              <p className="text-gray-500">{project.description}</p>
            </div>
            <div className="flex gap-5 text-3xl items-center">
              {project.technologies.map((tech, techIndex) => (
                <span className="text-3xl" key={techIndex}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Link
        className="hover:font-bold hover:underline hover:text-black flex items-center gap-2"
        target="_blank"
        to="https://github.com/yasminebelmiro"
      >
        Ver mais projetos <FaArrowRight />
      </Link>
    </div>
  );
};

export default Projects;
