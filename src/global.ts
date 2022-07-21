import { createGlobalStyle, DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
    colors: {
        "dark-gray": "#1C1C1C",
        grey: "#323232",
        black: "#000",
        white: "#FFF"
    },
    fontSize: {
        xLarge: "3rem",
        large: "2rem",
        medium: "1rem",
        small: ".75rem"
    },
    fontWeight: {
        bold: 700,
        default: 400,
        light: 300
    }
};

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
    }

    body, html {
        background: #FAFAFA;
        overflow-x: hidden;
    }

    button {
        outline: 0;
        border: 0;
        cursor: pointer;
    }
`;

export { GlobalStyle, Theme };