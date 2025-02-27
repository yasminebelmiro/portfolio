import { FaHome } from "react-icons/fa";
import { Fa42Group } from "react-icons/fa6";
import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--purple);
  border-radius: 45px 0px 0px 0px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 5%;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 5% 0;
`;

export const LangageContent = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 4rem;
  color: white;
`;
