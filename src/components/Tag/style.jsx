import styled from "styled-components";

const languageColors = {
  html: "#E44D26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  reactjs: "#61DAFB",
  mongodb: "#4DB33D",
  express: "#68A063",
};


export const LanguageTag = styled.span`
  background-color: ${({ lang }) => languageColors[lang] || "#ccc"};
  color: white;
  padding: 6px;
  border-radius: 8px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 40px;
  margin-right: 10px;
`;
