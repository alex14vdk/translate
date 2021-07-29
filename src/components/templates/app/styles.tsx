import styled from "styled-components";
import {mainBg, widthOptimal} from "../../../styles";

const StyledApp = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background: ${mainBg};
    @media (max-width: ${widthOptimal}) {
        align-items: flex-start;
    }
`

export {StyledApp};