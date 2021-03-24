import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    //Resets browser's default styles
    * {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
    }
`;