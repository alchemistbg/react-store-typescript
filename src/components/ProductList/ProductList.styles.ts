import styled from 'styled-components';
import { CONTENT_WIDTHS, COLORS, SHADOWS } from './../../utils/styles/Constants';

export const ProductListWrapper = styled.div`
    position: relative;

    .sort-select-container{
        background-color: ${COLORS.main_Background_Main};
        width: ${CONTENT_WIDTHS.componentWidth_Default};
        position: absolute;
        z-index: 200;
        cursor: pointer;

        .sort-select-header, .sort-select-list{
            box-shadow: ${SHADOWS.shadowShapeMain} ${SHADOWS.shadowColorLight};
        }

        .sort-select-header{
            margin: 0;
            padding: 0.5em 0.5em;

            &:after{
                font-family: 'Font Awesome 5 Free';
                content: '\f078';
                font-weight: bold;
                position: absolute;
                right: 0.5em;
            }

            &.opened:after{
                content: '\f077';
            }
        }

        .sort-select-list{
            list-style: none;
            list-style-position: outside;
            border-top: 1px solid ${COLORS.borderMain};
        }

        .sort-select-item{
            padding: 0.5em 0.5em;
            
            &:before{
                font-family: 'Font Awesome 5 Free';
                content: '\f111';
                padding-right: 0.5em;
            }
        }

        .sort-select-item:hover{
            color: ${COLORS.main_Text_Highlighted};
            background-color: ${COLORS.main_Background_Reversed_Alpha50};
        }

        .sort-select-item:hover:before{
            content: '\f192';
        }

        .sort-select-item.selected{
            color: ${COLORS.main_Text_Highlighted};
            background-color: ${COLORS.main_Background_Reversed_Alpha25};
            
            &:before{
                content: '\f192';
            }

            &:hover{
                background-color: ${COLORS.main_Background_Reversed_Alpha50};
            }
        }
    }

    .product-list {
        flex-basis: 100%;
        margin-top: 6em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        &::after {
            content: "";
            width: 32%;
        }

        .list-title {
            width: 100%;
            font-weight: bold;
            margin-bottom: 0.5em;
        }   
    }
`;