import { FaHome } from "react-icons/fa";
import { Fa42Group } from "react-icons/fa6";
import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  padding: 3% 13%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 5%;

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px; 

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    text-align: start;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin: 5% 0;

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const LangageContent = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--purple-300);
  padding: 5%;
  border-radius: 40px;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 10%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr)); 
    gap: 15px; 
    place-items: center; 
  }
`;

export const Icon = styled.div`
  font-size: 4rem; 
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
`;
