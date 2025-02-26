import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  AboutContainer,
  Description,
  LangageContent,
  Subtitle,
  Title,
  Icon,
} from "./style";

const About = () => {
  return (
    <AboutContainer>
      <Title>Sobre mim</Title>
      <Description>
        Meu interesse pelo desenvolvimento front-end começou quando cursei
        Programação para Web I. Foi nesse momento que percebi o quanto eu
        gostava de transformar código em interfaces interativas. Sempre tive uma
        inclinação para o design, e essa afinidade me levou a explorar cada vez
        mais a criação de experiências visuais e funcionais para os usuários.
        Atualmente, me dedico totalmente aos estudos e sigo em busca da minha
        primeira oportunidade na área, onde poderei aplicar meus conhecimentos e
        continuar evoluindo.
      </Description>
      <Subtitle>Minha habilidades</Subtitle>
      <LangageContent>
        <Icon as={FaGitAlt} />
        <Icon as={FaHtml5} />
        <Icon as={FaCss3Alt} />
        <Icon as={FaJs} />
        <Icon as={FaReact} />
        <Icon as={FaJava} />
      </LangageContent>
      <Icon />
    </AboutContainer>
  );
};

export default About;
