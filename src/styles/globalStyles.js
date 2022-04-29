import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'StarJedi';
    src: url("../fonts/starwars.ttf");
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'StarJedi', sans-serif !important ;
        background-color: #000000;
        color: #FFFFFF;
    }
    h2 {
        font-family: "StarJedi" !important;
    }
    
`;
