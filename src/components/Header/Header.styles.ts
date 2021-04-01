import styled from 'styled-components';

import { COLORS } from '../../utils/styles/Constants';

export const HeaderWrapper = styled.header`
    .site-header {
        padding: 1em 0;
        display: flex;
        justify-content: space-between;

        a{
            color: ${COLORS.navigation_Text_Default}
        }

        .site-logo {
            display: flex;
            align-items: center;
            height: 6em;

            .logo-image {
                height: 100%;
                margin: 1em 1em 1em 0;
            }

            .logo-text {
                margin: 0;
                line-height: 1;
            }
        }

        .nav-header {
            .nav-list {
                list-style: none;
                list-style-position: outside;
                display: flex;
            }

            .nav-item {
                line-height: 6em;
                margin: 0;
                padding: 0;
            }

            .fas {
                font-size: 2em;
            }

            .fa-shopping-cart {
                position: relative;
                font-size: 2em;

            }

            .cart-size {
                position: absolute;
                padding: 0.2em 0.5em;
                border-radius: 50%;
                background: var(--color-text-highlight);
                font-size: 0.5em;
                font-family: var(--font-family-headers);
                top: -0.5em;
                right: -0.5em;
            }
        }
    }
`;
