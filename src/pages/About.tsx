import React from "react";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiDart,
  SiFlutter,
  SiJest,
  SiMysql,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const skills = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
  },
  { name: "React Hook Form", icon: <FaReact /> },
  { name: "Jest", icon: <SiJest /> },
  {
    name: "React Testing Library",
    icon: <SiTestinglibrary />,
  },
  { name: "Vite", icon: <SiVite /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Dart", icon: <SiDart /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "MySQL", icon: <SiMysql /> },
];

const About = () => {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-5 justify-start items-center pt-10 pb-20 ">
      <h1 className="text-2xl">
        Sobre <b>Mim</b>
      </h1>
      <p className="text-justify md:text-lg ">
        Meu interesse pelo desenvolvimento front-end começou quando cursei
        Programação para Web I. Foi nesse momento que percebi o quanto eu
        gostava de transformar código em interfaces interativas. Sempre tive uma
        inclinação para o design, e essa afinidade me levou a explorar cada vez
        mais a criação de experiências visuais e funcionais para os usuários.
        Atualmente, me dedico totalmente aos estudos e sigo em busca da minha
        primeira oportunidade na área, onde poderei aplicar meus conhecimentos e
        continuar evoluindo.
      </p>
      <h1 className="text-2xl">
        Minhas <b>Skills</b>
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-6 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex w-28 h-28 md:w-35 md:h-35 flex-col justify-center items-center outline text-center rounded hover:bg-black hover:text-white "
          >
            <div className="text-2xl md:text-4xl">{skill.icon}</div>
            <span className="text-sm md:text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
