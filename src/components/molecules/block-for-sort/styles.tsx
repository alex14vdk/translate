import styled, {css} from "styled-components";
import {widthOptimal} from "../../../styles";
import {StyledWord} from "../../atoms/word/styles";

const rowSize = 45;
const lineSize = 1;

const StyledBlockForSortWrapper = styled.div<{ unsorted?: boolean }>`
    min-height: 90px;
    align-items:  center;
    margin-bottom: 40px;
    position: relative;
    background: repeating-linear-gradient( 180deg, transparent ${lineSize}px ${rowSize}px, #4B4B4B ${rowSize}px ${rowSize + lineSize}px);
    ${({unsorted}) => unsorted && css`
        background:transparent;
        margin-bottom: 30px;
        min-height: 135px;
        @media (max-width: ${widthOptimal}) {
            min-height: ${rowSize}px;
        }
    `};
`

const StyledBlockForSort = styled.div<{ unsorted?: boolean, shadow?: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    min-height: 100%;
    z-index: 1;
    position: relative;
    ${props => props.unsorted && css`
        background:transparent;
    `};
    ${props => props.shadow && css`
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        & ${StyledWord}{
            border: 0;
            background: #E6E6E6;
            box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.25);
        }
    `};
`

export {StyledBlockForSort, StyledBlockForSortWrapper, lineSize};