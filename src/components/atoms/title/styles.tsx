import styled from "styled-components";
import {widthOptimal} from "../../../styles";

const StyledTitle = styled.h1`
    font-size: 36px;
    line-height: 42px;
    color: #252525;
    text-shadow: -2px -4px 3px #FFFFFF, 2px 4px 3px rgba(0, 0, 0, 0.25);
    margin-bottom: 56px;
    letter-spacing: -0.3px;
    @media (max-width: ${widthOptimal}) {
        text-align: center;
        font-size: 24px;
        margin-bottom: 30px;
    }
`

export {StyledTitle};