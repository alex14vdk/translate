import styled, {css} from "styled-components";
import {StyledButton} from "../../atoms/button/styles";
import {StyledStatusText} from "../../atoms/status-text/styles";

const StyledCheckPanel = styled.div<{ show?: boolean }>`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & *{
        transition: linear all .1s;
    }
    ${({show}) => show && css`
        &>${StyledStatusText}{
            height: 100%;
            visibility: visible;
            opacity: 1;
        }
        &>${StyledButton}{
            transform: translateY(80%);
        }
    `};
`

export {StyledCheckPanel};