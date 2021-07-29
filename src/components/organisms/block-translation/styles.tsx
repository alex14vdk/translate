import styled from "styled-components";
import {widthOptimal} from "../../../styles";


const BlockTranslationStyled = styled.div`
    min-width: 320px;
    max-width: ${widthOptimal};
    flex-basis: ${widthOptimal};
    @media (max-width: ${widthOptimal}) {
        padding: 20px;
    }
`

export {BlockTranslationStyled};