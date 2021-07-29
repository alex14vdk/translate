import styled from "styled-components";
import {widthOptimal} from "../../../styles";
import img1 from './src/Ellipse1.svg';
import img2 from './src/Ellipse2.svg';

const StyledImgFigure = styled.div`
    height: 200px;
    width: 185.65px;
    background-image: url(${img1}), url(${img2});
    background-position: top, bottom;
    background-repeat: no-repeat;
    background-size: auto;
    @media (max-width: ${widthOptimal}) {
        display: none;
    }
`

export {StyledImgFigure};