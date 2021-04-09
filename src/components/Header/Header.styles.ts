import styled from 'styled-components';

import { COLORS } from '../../utils/styles/Constants';

const HeaderWrapper = styled.header`
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
                margin-bottom: 0.1em;
                line-height: 1;
            }
        }
    }
`;

export default HeaderWrapper;