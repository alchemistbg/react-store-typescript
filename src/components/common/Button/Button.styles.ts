import styled from 'styled-components';
import { COLORS, TIMES } from '../../../utils/styles/Constants';

const ButtonWrapper = styled.button.attrs((props) => ({
    className: props.className,
    onClick: props.onClick,
    disabled: props.disabled
}))`
    &.form-button{
        display: block;
        padding: 0.5em;
        outline: none   ;
        border: 2px solid ${COLORS.borderMain};
        color: ${COLORS.main_Text_Default};
        background-color: ${COLORS.main_Background_Main};
        font-size: 1em;
        font-weight: bold;
        transition: color ${TIMES.timeTransitionMain}, background-color ${TIMES.timeTransitionMain}; 

        &:hover{
            color: ${COLORS.main_Text_Reversed};
            background-color: ${COLORS.main_Background_Reversed};
            cursor: pointer;
        }

        &.increment, &.decrement{
            /* border: none; */
            padding: 0.3em;
            margin: 0;
            font-size: 0.8em;
            background: none;
            color: ${COLORS.ButtonDefault};

                &:hover{
                    background: ${COLORS.ButtonDefault};
                    color: white;
                }

                &:disabled{
                    color: ${COLORS.ButtonDisabled_Alpha50};
                    border-color: ${COLORS.ButtonDisabled_Alpha50};

                    &:hover{
                        cursor: default;
                        background: none;
                    }
                }
        }

        &.increment:before, &.decrement:before{
            font-family: 'Font Awesome 5 Free';
            display: block;
        }

        &.increment:before:hover, &.decrement:before:hover{
            color: purple;
        }

        &.increment:before{
            content: '\f067';
        }

        &.decrement:before{
            content: '\f068';
        }
    
        &.btn-delete{
            margin-top: 0.5em;
            margin-left: 6em;
            &:before{
                padding-right: 0.5em;
                content: '\f2ed';
                font-family: 'Font Awesome 5 Free';
                font-weight: normal;
            }
        }

        &.btn-cart{
            width: 100%;
            &:before{
                padding-right: 0.5em;
                content: '\f788';
                font-family: 'Font Awesome 5 Free';
            }            
        }
    }
`;

export default ButtonWrapper;