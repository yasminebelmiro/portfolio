import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    right: 0;
  }
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

  @media (max-width: 600px) {
    width: 100%;
    border-radius: 40px 40px 0px 0px;
  }
`;

export const Image = styled.img`
  width: 2rem;
  margin: 1rem;
`;
export const Item = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? "var(--purple-100)" : "var(--white)")};
  font-size: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ active }) => (active ? -"bold" : "regular")};

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
