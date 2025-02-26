import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import MePhoto from "../../assets/me.jpg";
import {
  HomeContainer,
  Image,
  SocialContent,
  Text,
  Title,
  ImageContainer,
  LinkItem,
} from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <ImageContainer>
        <Image src={MePhoto} alt="Foto Yasmine" />
      </ImageContainer>
      <Title>Olá, meu nome é Yasmine...</Title>
      <Text>
        ...apaixonada por desenvolvimento front-end. Transformo ideias em
        interfaces interativas e acessíveis."
      </Text>
      <SocialContent>
        <LinkItem to="https://www.linkedin.com/in/yasmine-oliveira-belmiro-471612282/">
          <FaLinkedin size={50} />
        </LinkItem>
        <LinkItem to="https://www.instagram.com/thatskymine/">
          <FaSquareInstagram size={50} />
        </LinkItem>
        <LinkItem to="https://x.com/thatsky_mine">
          <FaSquareXTwitter size={50} />
        </LinkItem>
        <LinkItem to="https://github.com/yasminebelmiro">
          <FaGithubSquare size={50} />
        </LinkItem>
      </SocialContent>
    </HomeContainer>
  );
};

export default Home;
