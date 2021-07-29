import styled from "styled-components";
import {widthOptimal} from "../../../styles";
import {StyledImgFigure} from "../../atoms/img-figure/styles";


export const blockOriginalHeight = "207.5px;";

const StyledBlockWithOriginal = styled.div`
    margin-bottom: 49.5px;
    height: ${blockOriginalHeight};
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
        & ${StyledImgFigure} {
            position: absolute;
            bottom: 0;
            left: 0;
        }
    @media (max-width: ${widthOptimal}) {
        height: auto;
        max-height: ${blockOriginalHeight};
    }
`

export {StyledBlockWithOriginal};