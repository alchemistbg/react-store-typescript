import styled from 'styled-components';

import { FONTS, COLORS } from './../../../utils/styles/Constants';

const NavigationWrapper = styled.nav`
    .nav-list{
        list-style: none;
        list-style-position: outside;
        display: flex;
    }

    .nav-item{
        line-height: 6em;
        margin: 0;
        padding: 0;

    &.cart{
        position: relative;
    }
    }

    .cart-icon{
        font-size: 2em;
    }

    .cart-icon:before{
        display: block;
        font-weight: bold;
        font-family: "Font Awesome 5 Free";
        content: "\f07a";
    }

    .cart-items{
        position: absolute;
        top: 1.2em;
        left: 1.2em;
        padding: 0.2em 0.5em 0.4em 0.5em;
        border-radius: 50%;
        line-height: 1;
        font-size: 0.5em;
        font-family: ${FONTS.fontFamilyHeaders};
        font-weight: bold;
        background-color: ${COLORS.main_Background_Highlighted};
    }
`;

export default NavigationWrapper;