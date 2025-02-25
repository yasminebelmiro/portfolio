import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --white: #FFFFFF;
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
background-color:var(--purple-100);
font-family: "Courier Prime", serif;
}
`;
