import styled from 'styled-components';
import { COLORS, TIMES } from '../../../utils/styles/Constants';

const ButtonWrapper = styled.span`
    .form-button{
        display: block;
        padding: 0.5em;
        outline: none;
        color: ${COLORS.main_Text_Default};
        background-color: ${COLORS.main_Background_Main};
        border: 2px solid ${COLORS.borderMain};
        font-size: 1em;
        font-weight: bold;
        transition: color ${TIMES.timeTransitionMain}, background-color ${TIMES.timeTransitionMain}; 

        &:hover{
            color: ${COLORS.main_Text_Reversed};
            background-color: ${COLORS.main_Background_Reversed};
            cursor: pointer;
        }
    }
`;

export default ButtonWrapper;