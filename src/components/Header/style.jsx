import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.nav`
  widh: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 1000px) {
    width: 20%;
  }
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0px 0px 0px 45px;
  background-color: var(--purple-300);

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const Image = styled.img`
  width: 2rem;
  margin: 1rem;
`;
export const Item = styled(Link)`
  height: 100%;
  width: 25%;
  text-decoration: none;
  color: ${({ active }) => (active ? "var(--purple-100)" : "var(--white)")};
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ active }) => (active ? "bold" : "regular")};

   @media (max-width: 700px) {
    font-size: 15px;
  }
`;
