import styled from 'styled-components';

// import { CONTENT_WIDTHS, COLORS, DEVICE_MAX_WIDTH, DEVICE_MIN_WIDTH } from '../../utils/styles/Constants';
import { CONTENT_WIDTHS, COLORS, DEVICE_MAX_WIDTH } from '../../utils/styles/Constants';

export const AppWrapper = styled.div`
    min-height: 100vh;

    header, footer{
        color: ${COLORS.navigation_Text_Default};
        background-color: ${COLORS.navigation_Background};
    }

    main{
        min-height: calc(100vh - 14.5em);
        color: ${COLORS.main_Text_Default};
    }

    .site-header,
    .site-main,
    .site-footer {
        max-width: ${CONTENT_WIDTHS.mainContent_Width_Default};
        margin: 0 auto;
    }

    @media ${DEVICE_MAX_WIDTH.laptopS}{        
        .site-header,
        .site-main,
        .site-footer {
            max-width: ${CONTENT_WIDTHS.mainContent_Width_Medium};
        }
    }

    @media ${DEVICE_MAX_WIDTH.mobileL}{
        .site-header,
        .site-main,
        .site-footer {
            max-width: ${CONTENT_WIDTHS.mainContent_Width_Small};
        }
    }

    header {
        margin-bottom: 1em;
    }

    footer {
        margin-top: 0.5em;
    }
`;
