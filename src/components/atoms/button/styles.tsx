import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 21px;
    background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
    box-shadow: -2px -4px 8px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 88px;
    border: 0;
    position: relative;
    z-index: 1;
    cursor: pointer;
    max-width: 470px;
    width: calc(100% - 12px);
    height: 68px;
    transition: linear all .1s;
    &:active{
        box-shadow: inset -2px -4px 12px #FFFFFF, inset 2px 4px 8px rgba(0, 0, 0, 0.2);
    }
`

export {StyledButton};