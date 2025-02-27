import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const MobileRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    padding: 2%;
    gap: 20px;
  }
`;
export const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileColumnVariant = styled(MobileColumn)`
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    padding: 5%
  }`


export const Image = styled.img`
  max-width: 100%;
  width: 200px;
  border-radius: 100%;
  border: 5px solid white;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    width: 103px;
    border: 4px solid white;
  }
`;

export const Name = styled.h1`
  font-size: 25px;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Hole = styled.h2`
  font-size: 18px;
  background-color: var(--purple);
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const TextIcons = styled.div`
  font-size: 24px;
  margin-right: 5px;
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  @media (max-width: 600px) {
    gap: 14px;
  }
`;

export const SocialIcons = styled.div`
  font-size: 35px;
  @media (max-width: 600px) {
    font-size: 33px;
    color: var(--purple);
  }
`;
