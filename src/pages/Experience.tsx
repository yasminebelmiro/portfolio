import React from "react";
import company1 from "../assets/company-images/compass_uol_logo.jpeg";
import company2 from "../assets/company-images/dd-logo.png";
import company3 from "../assets/company-images/if-goiano-logo.png";
import company4 from "../assets/company-images/udemy_logo.jpeg";
import company5 from "../assets/company-images/dio-logo.jpg";

const Experience = () => {
  const experiences = [
    {
      logo: company2,
      company: "Desconto Direto",
      position: "Dev Front-end",
      duration: "Fev 2023 - Atual",
      description:
        "Lidero o projeto Desconto Direto, coordenando a equipe e conduzindo decisões de arquitetura e design. Desenvolvo interfaces front-end responsivas e otimizadas, garantindo experiência do usuário eficiente e promovendo acesso fácil a promoções locais.",
    },
    {
      logo: company1,
      company: "Compass Uol",
      position: "Estagiaria em Desenvolvimento Front-end",
      duration: "Abr 2025 - Set 2025",
      description:
        "Desenvolvi aplicações escaláveis em React com TypeScript, integrando Redux e React Router. Trabalhei com metodologias ágeis (Scrum), boas práticas de segurança web, documentação de componentes com Storybook e exploração de serviços AWS, preparando-me para certificação.",
    },
    {
      logo: company3,
      company: "IF Goiano - Campus Urutaí",
      position: "Monitoria POO",
      duration: "Mar 2024 - Jul 2024",
      description:
        "Ofereci suporte técnico e acadêmico a calouros, auxiliando na resolução de exercícios e projetos de Programação Orientada a Objetos. Contribuí para o desenvolvimento de habilidades práticas e consolidação de conceitos fundamentais em programação.",
    },
  ];

  const course = [
    {
      logo: company5,
      course: "Formação React Developer",
      institution: "DIO",
      year: "2024",
    },
    {
      logo: company4,
      course: "Git & GitHub - The Practical Guide",
      institution: "Udemy",
      year: "2025",
    },
    {
      logo: company4,
      course: "Tailwind CSS do básico ao avançado",
      institution: "Udemy",
      year: "2025",
    },
    {
      logo: company4,
      course: "React JS com TypeScript ",
      institution: "Udemy",
      year: "2025",
    },
    {
      logo: company4,
      course: "JavaScript do básico ao avançado",
      institution: "Udemy",
      year: "2025",
    },
  ];
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-5 justify-start items-center py-10 ">
      <h1 className="text-2xl">
        Minhas <b>Experiências</b>
      </h1>
      {experiences.map((exp, index) => (
        <div
          className="w-full flex flex-col hover:bg-black hover:text-white p-5 gap-5"
          key={index}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
            <div className="md:w-2/3 flex items-center gap-5">
              <img
                className="w-20"
                src={exp.logo}
                alt={`Logo de ${exp.company}`}
              />
              <h1 className="text-md md:text-lg font-bold">
                {exp.position} em {exp.company}
              </h1>
            </div>
            <p className="text-gray-500 md:text-md ">{exp.duration}</p>
          </div>

          <p>{exp.description}</p>
        </div>
      ))}
      <h1 className="text-2xl">
        Minha <b>Educação</b>
      </h1>
      <div className="w-full flex hover:bg-black hover:text-white p-5 ">
        <div className="w-full flex items-center justify-between gap-5">
          <img
            className="w-20"
            src={company3}
            alt={`Logo de IF Goiano - Campus Urutaí`}
          />

          <div className="w-2/3 flex flex-col ">
            <h1 className="text-md md:text-lg font-bold">
              Bacharelado em Sistemas de Informação
            </h1>
            <p>IF Goiano - Campus Urutaí</p>
          </div>
          <p className="text-gray-500 md:text-md ">2022-2026</p>
        </div>
      </div>
      <h1 className="text-2xl">
        Meus <b>Cursos</b>
      </h1>
      {course.map((c, index) => (
        <div
          className="w-full flex hover:bg-black hover:text-white  p-5"
          key={index}
        >
          <div className="w-full flex items-center justify-between gap-5">
            <img
              className="w-20"
              src={c.logo}
              alt={`Logo de ${c.institution}`}
            />

            <div className="w-2/3 flex flex-col  ">
              <h1 className="text-md md:text-lg font-bold">{c.course}</h1>
              <p>{c.institution}</p>
            </div>
            <p className="text-gray-500 md:text-md ">{c.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
