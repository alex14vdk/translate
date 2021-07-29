import React, {RefObject} from 'react';
import {StyledButton} from "./styles";

interface IButton {
    children: React.ReactNode
    check?: (e: React.MouseEvent) => void
    linkOut: RefObject<HTMLButtonElement>
}

const Button: React.FC<IButton> = (props) => {
    return <StyledButton ref={props.linkOut} onClick={props.check}>{props.children}</StyledButton>;
}

export default Button;  