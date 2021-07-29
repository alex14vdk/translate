import React from 'react';
import {StyledTitle} from "./styles";
import {IChildren} from "../../../interfaces";

const Title: React.FC<IChildren> = (props) => {
    return <StyledTitle {...props}>{props.children}</StyledTitle>;
}

export default Title;