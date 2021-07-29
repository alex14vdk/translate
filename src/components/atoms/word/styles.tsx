import styled from "styled-components";

const StyledWordWrapper = styled.div`
    display: flex;
    padding: 7px 5px 8px;
    box-sizing: border-box;
    outline: none;
    text-align: center;
`

const StyledWord = styled.span`
    font-size: 18px;
    height: 30px;
    line-height: 21px;
    padding: 4px 11px 5px;
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    box-sizing: border-box;
    box-shadow: 0 8px 4px -6px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    cursor: pointer;
    outline: none;
    user-select: none;
`


export {StyledWord, StyledWordWrapper};