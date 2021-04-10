import styled from 'styled-components';

import { COLORS, SHADOWS } from './../../utils/styles/Constants';

const ProductItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .manufacturer {
        flex-basis: 100%;
        margin-bottom: 1em;
    }

    .images{
        flex: 0 0 30%;

        img{
            width: 100%;
            height: auto;
        }
    }

    .image-main img{
        box-shadow: ${SHADOWS.shadowShapeMain} ${SHADOWS.shadowColorLight}
    }

    .image-thumbs{
        display: flex;
        flex-wrap: wrap;

        .image-label{
            width: 23.5%;
            margin: 1em 0;
            margin-right: 2%;

            &:nth-child(4n){
                margin-right: 0;
            }
        }

        .image-radio{
            display: none;
        }

        .image-placeholder{
            padding-top: 0.2em;
            overflow: hidden;

            &:hover{
                outline: 2px solid ${COLORS.outlineAlternative}
            }
        }

        .image-radio:checked+.image-placeholder{
            outline: 2px solid ${COLORS.outlineBorderMain}
        }
    }

    .image-thumb{
        img{
            width: 100%;
            transition: transform .2s ease;
        }

        &:hover img{
            transform: scale(1.1);
        }
    }

    .wrapper{
        flex: 0 0 65%;
        display: flex;
        flex-direction: column;
    }

    .info-wrapper{
        h4 {
            width: fit-content;
            padding: 0.5em 1em;
            color: ${COLORS.main_Text_Reversed};
            background-color: ${COLORS.main_Background_Highlighted};
        }
    }

    .qty-wrapper {
        /* margin-left: auto; */
        display: flex;
        align-items: center;

        /* .form-button{
            margin: 0 auto;
        }

        .cart {
            margin-top: 1em;
        } */
    }
`;

export default ProductItemWrapper;