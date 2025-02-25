import React, { useState } from "react";
import Logo from "../../assets/bunny-solid.svg";
import { Link } from "react-router-dom";
import { HeaderContainer, Image, Item, Left, Right } from "./style";

const Header = ({ title }) => {
  const [active, setActive] = useState("Home");

  const itemsMenu = [
    { id: 1, title: "Sobre", path: "/sobre" },
    { id: 2, title: "Currículo", path: "/curriculo" },
    { id: 3, title: "Projetos", path: "/projetos" },
    { id: 4, title: "Contato", path: "/contato" },
  ];

  return (
    <HeaderContainer>
      <Left>
        <Link to={'/'}>
          <Image src={Logo} alt="Logo" />
        </Link>
      </Left>

      <Right>
        {itemsMenu.map((item) => (
          <Item
            key={item.id}
            onClick={() => setActive(item.title)}
            active={active === item.title}
            to={item.path}
          >
            {item.title}
          </Item>
        ))}
      </Right>
    </HeaderContainer>
  );
};

export default Header;
