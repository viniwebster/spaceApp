import { createGlobalStyle, styled } from "styled-components";
import { bgDark, bgLight, bgMd, txtColor } from "./variaveis";

import GandhiSansRegular from './fonts/GandhiSans-Regular.otf';
import GandhiSansBold from './fonts/GandhiSans-Bold.otf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GandhiSansRegular';
    src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
}

@font-face {
    font-family: 'GandhiSansBold';
    src: local('Gandhi Sans Bold'), local('GandhiSansBold'), url(${GandhiSansBold});
}

* {
   box-sizing: border-box;  
   font-family: GandhiSansRegular;
}

body {
    background: linear-gradient(175deg, ${bgDark} 4.16%, ${bgMd} 48%, ${bgLight} 96.76%);
    min-height: 100vh;
    color: ${txtColor};
}
`;

export const Container = styled.section`
    width: 1440px;
    max-width: 100%;
    margin: auto;
    padding: 0 28px;
    box-sizing: border-box;
`
