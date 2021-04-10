import styled from 'styled-components';

import { COLORS } from './../../../utils/styles/Constants';

const ProductTableWrapper = styled.ul`
    list-style: none;
    padding: 0;
    padding-bottom: 2em;

    .cart-item{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding-bottom: 1em;
        margin-bottom: 1em;
        border-bottom: 2px solid ${COLORS.outlineAlternative};

        &.header{
            font-weight: bold;
            padding: 0;
            margin: 0;
            color: green;
        }

        .cart-image img{
            width: 6em;
            height: auto;
        }

    }

    .cart-item-sprice,
    .cart-item-qty,
    .cart-item-tprice {
        width: 15%;
        border-right: 2px solid red;
        border-left: 2px solid red;
    }

    .cart-item-title {
        width: 50%;
        text-align: left;

        a{
            display: flex;
            align-items: center;
            color: ${COLORS.main_Text_Default};

            &:hover{
                text-decoration: none;
                color: ${COLORS.main_Background_Highlighted}
            }
        }

        .title-info{
            display: flex;
            flex-direction: column;

            .manufacturer,
            .name,
            .size{
                font-weight: bold;
            }

            .name{
                font-size: 1.2em;
            }
        }
    }

    .cart-item-sprice{
        text-align: center;
    }

    .cart-item-qty{
        /* display: inline; */
    }

    .cart-item-tprice{
        font-weight: bold;
        font-size: 1.2em;
    }
`;

export default ProductTableWrapper;