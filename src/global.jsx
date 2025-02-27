import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --white: #FFFFFF;
    --purple: #6A4D90;
    --purple-100: #1E0C25;
    --purple-200: #6A1E55;
    --purple-300: #967A8E;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
background-color:black;
font-family: "Courier Prime", serif;

}
`;

export const GlobalContainer = styled.div`
 display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
`