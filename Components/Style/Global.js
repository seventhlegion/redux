import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const Global = createGlobalStyle`
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    }

    * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background-color: ${(background) => background.theme.bg};
    }
`;

export default Global;
