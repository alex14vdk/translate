import styled from "styled-components";
import {mainBg, widthOptimal} from "../../../styles";
import {blockOriginalHeight} from "../../molecules/block-with-original/styles";

const trianglePosTop = "58px";
const borderColor = "#252525";

const StyledTooltip = styled.div`
    min-height: 91px;
    max-height: 100%;
    width: 286px;
    position: relative;
    background: ${mainBg};
    border: 2px solid ${borderColor};
    border-radius: 18px;
    border-bottom-left-radius: 8px;
    
    //triangle
    &:after {
        content: '';
        display: block;  
        position: absolute;
        width: 0;
        height: 0;
        top: ${trianglePosTop};
        right: calc(100% - 2px);
        border: 10px solid transparent;
        border-right-color: ${mainBg};
        border-bottom-color: ${mainBg};
    }
    
    //border triangle
    &:before {
        content: '';
        display: block;  
        position: absolute;
        width: 0;
        height: 0;
        top: ${trianglePosTop};
        right: 100%;
        border: 11px solid transparent;
        border-right-color: ${borderColor};
        border-bottom-color: ${borderColor};
        border-bottom-left-radius:3px;
    }
    
    @media (max-width: ${widthOptimal}) {
        width: 100%;
        border-bottom-left-radius: 18px;
        
        &:before, &:after{
            display: none;
        }
    }
`

const StyledTooltipInsert = styled.div`
    width: 100%;
    max-height: ${blockOriginalHeight};
    padding: 17px 13px 5px;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow: auto;
    border-radius: 18px;
    ::-webkit-scrollbar{
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background: linear-gradient(180deg, transparent 10%, ${borderColor} 10% 90%, transparent 90%);
        border-radius: 0;
    }
    ::-webkit-scrollbar-track{
        background: transparent;
        border-radius: 0;
        box-shadow: inset 0 0 0 0 #F0F0F0;
    }
`


export {StyledTooltip, StyledTooltipInsert};