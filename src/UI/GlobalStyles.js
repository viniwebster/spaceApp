import { createGlobalStyle, styled } from "styled-components";
import { bgDark, bgLight, bgMd, txtColor } from "./variaveis";

export const GlobalStyle = createGlobalStyle`

* {
   box-sizing: border-box;  
}

body {
    background: linear-gradient(175deg, ${bgDark} 4.16%, ${bgMd} 48%, ${bgLight} 96.76%);
    min-height: 100vh;
    color: ${txtColor};
}
`;

export const Container = styled.section`
    max-width: 1800px;
    margin: auto;
    padding: 0 2rem;
    box-sizing: border-box;
`
