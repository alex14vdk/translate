import styled, {css} from "styled-components";

const StyledStatusText = styled.span<{ success?: boolean }>`
    width: 100%;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 27px;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    height: 0;
    color: #FF0000;
    text-shadow: -1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5);
    ${({success}) => success && css`
        color: green;
        text-shadow: -1px -2px 2px #FFFFFF, 1px 2px 2px green;
    `}
`


export {StyledStatusText};