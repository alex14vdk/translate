import React from 'react';
import {StyledTooltip, StyledTooltipInsert} from "./styles";
import {IChildren} from "../../../interfaces";

const Tooltip: React.FC<IChildren> = (props) => {
    return (
        <StyledTooltip {...props}>
            <StyledTooltipInsert>
                {props.children}
            </StyledTooltipInsert>
        </StyledTooltip>
    );
}

export default Tooltip;