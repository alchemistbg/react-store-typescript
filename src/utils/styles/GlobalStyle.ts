import { createGlobalStyle } from 'styled-components';

import { FONTS } from './../styles/stylesConstants';

import { DEVICE } from './stylesConstants';

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
    

    //Typography
    html {
        font-family: ${FONTS.fontFamilyBody};
        font-size: ${FONTS.fontSizeBodyNormal};
    }

    @media (${DEVICE.tablet}) {
        html {
            font-size: ${FONTS.fontSizeBodyLarge};
        }
    }

    @media (${DEVICE.laptopS}) {
        html {
            font-size: ${FONTS.fontSizeBodyLARGE};
        }
    }

    @media (${DEVICE.desktopS}) {
        html {
            font-size: ${FONTS.fontSizeBodyHuge};
        }
    }

    body,
    select,
    option {
        font: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${FONTS.fontFamilyHeaders};
        font-weight: 500;
        font-size: 1em;
        margin-bottom: 0.5em;
    }

    h1 {
    font-size: 2.8em;
    }

    h2 {
        font-size: 2.4em;
    }

    h3 {
        font-size: 2.0em;
    }

    h4 {
        font-size: 1.7em;
    }

    h5 {
        font-size: 1.4em;
    }

    h6 {
        font-size: 1.2em;
    }

    //Media queries

`;