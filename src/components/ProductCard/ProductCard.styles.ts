import styled from 'styled-components';

import { CONTENT_WIDTHS, SHADOWS, DEVICE_MAX_WIDTH, COLORS } from '../../utils/styles/Constants';
import { fadeIn } from './../../utils/styles/Animations';

const ProductCardWrapper = styled.div`
    width: ${CONTENT_WIDTHS.componentWidth_Default};
    margin-bottom: 2%;
    box-shadow: ${SHADOWS.shadowShapeMain} ${SHADOWS.shadowColorLight};

    @media ${DEVICE_MAX_WIDTH.tablet}{
        width: ${CONTENT_WIDTHS.componentWidth_Medium};
    }

    @media ${DEVICE_MAX_WIDTH.mobileL}{
        width: ${CONTENT_WIDTHS.componentWidth_Small};
    }

    .card-inner {
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        
        & .details {
            display: none;
            padding: 0;
            margin: 0;
            position: absolute;
            font-weight: bold;
            font-size: 2em;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            /* opacity: 0; */
            /* transition: opacity 0.2s linear; */
        }

        &:hover .details {
            animation: ${fadeIn} 0.2s;
            /* animation-direction: alternate; */
            /* animation-fill-mode: both; */
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: rgba(15, 76, 129, 0.50);
            z-index: 500;
            /* opacity: 1; */
        }        
    }

    .card-media {
        position: relative;
        overflow: hidden;
    }

    .card-media:after {
        display: block;
        content: '';
        padding-top: 100%;
    }

    .card-media img {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
    }

    .card-meta,
    .card-footer {
        padding: 0 2em;
    }

    .card-meta {
        color: ${COLORS.main_Text_Default};
    }

    .card-footer {
        margin-top: auto;
        padding-bottom: 1em;
        color: ${COLORS.main_Background_Highlighted};
    }

    a {
        color: ${COLORS.main_Text_Default};
    }
`;

export default ProductCardWrapper;