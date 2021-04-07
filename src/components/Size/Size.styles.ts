import styled from 'styled-components';
import { COLORS } from '../../utils/styles/Constants';

const SizeWrapper = styled.div`
    padding: 1em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .size-list-title{
        flex-basis: 100%;
        margin-top: 1em;
    }

    .label-list{
        display: flex;
        width: 100%;
    }

    .size-label {
        flex-basis: 10%;
        padding: 1em;
        margin-right: 2%;
        outline: 2px solid ${COLORS.outlineBorderMain};
        text-align: center;

        &:last-child {
            margin-right: auto;
        }

        .size-radio {
            display: none;
        }

        .size-item {
            font-weight: bold;
        }

        &:hover {
            color: #f0f0f0;
            background: ${COLORS.main_Text_Default_Alpha};
            cursor: pointer;
        }

        &.selected {
            color: #f0f0f0;
            background: ${COLORS.main_Text_Default}
        }
    }

    #size-warning {
        visibility: hidden;
        padding: 0.5em 1em;
        user-select: none;

        &.visible {
            visibility: visible;
            font-weight: bold;
            color: ${COLORS.main_Text_Reversed};
            background: ${COLORS.main_Background_Highlighted};
        }
    }
`;

export default SizeWrapper;