import React from 'react';
import {StyledStatusText} from "./styles";

interface IStatusText {
    children: React.ReactNode
    show?: boolean
    success?: boolean
}

const StatusText: React.FC<IStatusText> = (props) => {
    return (
        <StyledStatusText success={props.success} show={props.show} {...props}>
            {props.children}
        </StyledStatusText>
    );
}

export default StatusText;