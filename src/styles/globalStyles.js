import { createGlobalStyle } from "styled-components";

import startwars from "../fonts/starwars.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'StarJedi';
    src: url(${startwars});
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'StarJedi', sans-serif !important ;
        background-color: #000000;
        color: #FFFFFF;
    }

    * {
        box-sizing: border-box;
    }
    
`;
