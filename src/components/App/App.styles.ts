import styled from 'styled-components';

import { COLORS } from './../../utils/styles/stylesConstants';

export const Wrapper = styled.div`
    color: var(--color-test1);

    & .App{
        color: ${COLORS.textInNavigation};
    }
`;
