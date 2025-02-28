import styled from "styled-components";

export const CvContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  align-items: center;
  color: white;
  background-color: var(--purple);
  border-radius: 45px 0px 0px 45px;
  padding: 5% 10%;
`;

export const Title = styled.h1``;

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  width: 217px;
  height: 47px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &: hover {
    background-color: white;
    color: black;
  }
`;

export const EducationContent = styled.div`
  width: 100%;
  display: flex;
`;

export const IconContainer = styled.div`
  height: 60px;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
`;

export const Icon = styled.div`
  font-size: 38px;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Subtitle = styled.h2`
  margin-top: 20px;
  font-size: 25px;
`;
export const Column = styled.div`
  padding: 20px 0;
`;

export const Name = styled.h3`
  font-size: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
`;
