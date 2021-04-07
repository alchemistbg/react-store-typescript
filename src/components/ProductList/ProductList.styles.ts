import styled from 'styled-components';

export const ProductListWrapper = styled.div`
    .product-list {
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