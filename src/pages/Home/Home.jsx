import React from "react";
import {
  HomeContainer,
  Hole,
  Image,
  Name,
  SocialContainer,
  SocialIcons,
  Text,
  TextIcons,
} from "./style";
import Me from "../../assets/me.jpg";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const Home = () => {
  return (
    <HomeContainer>
      <Image src={Me} alt="" />
      <Name>Yasmine Belmiro</Name>
      <Hole>Desenvolvedora Front-end</Hole>
      <Text>
        <TextIcons as={MdOutlineLocationOn} />
        Pires do Rio - GO
      </Text>
      <Text>
        <TextIcons as={MdOutlineMailOutline} />
        devyasminebelmiro@gmail.com
      </Text>
      <SocialContainer>
        <SocialIcons as={FaLinkedin} />
        <SocialIcons as={FaGithubSquare} />
        <SocialIcons as={FaInstagramSquare} />
        <SocialIcons as={FaSquareXTwitter} />
      </SocialContainer>
    </HomeContainer>
  );
};

export default Home;
