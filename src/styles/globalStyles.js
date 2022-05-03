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
        background-color: var(--black);
        color: var(--white-800);

        --primary:  #ffe81f;
        --black: #000000;
        --gray-900: #0F0F0F;
        --gray-500: #303030;
        --gray-200: #606060; 
        --white:#FFFFFF;
        --white-800: #FAFAFA;
    }

    * {
        box-sizing: border-box;
    }
    
`;
