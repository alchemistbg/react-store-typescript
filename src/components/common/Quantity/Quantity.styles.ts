import styled from 'styled-components';

import { COLORS } from './../../../utils/styles/Constants';

const QuantityWrapper = styled.span.attrs((props) => ({
    className: props.className
}))`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    /* margin: 0 auto; */

    
`;

export default QuantityWrapper;