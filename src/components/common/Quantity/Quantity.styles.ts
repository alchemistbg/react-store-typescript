import styled from 'styled-components';

// import { COLORS } from './../../../utils/styles/Constants';

const QuantityWrapper = styled.span.attrs((props) => ({
    className: props.className
}))`
    display: flex;
    justify-content: space-around;
    align-items: center;

    .qty-number {
        /* width: 1.5em; */
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
        user-select: none;
    }
`;

export default QuantityWrapper;