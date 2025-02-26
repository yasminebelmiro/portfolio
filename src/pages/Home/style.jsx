import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100wv;
  max-height: 100hv;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
`;

export const ImageContainer = styled.div`
  padding: 5% 41% 1%;

  @media (max-width: 600px) {
    padding: 20% 20% 10%;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 100%;
  border: 6px solid var(--white);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  margin: 0 10%;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  margin: 0 10%;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    font-size: 1rem;
  }

    @media (max-width: 600px) {
    text-align: end;
  }
`;

export const SocialContent = styled.div`
  display: flex;
  gap: 1rem;
  text-decoration: none;
`;

export const LinkItem = styled(Link)`
  color: var(--white);
`;
