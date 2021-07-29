import React from 'react';
import {StyledCheckPanel} from "./styles";
import ButtonS from "../../atoms/button";
import StatusText from "../../atoms/status-text";
import {RefObject} from 'react';

interface IStatusText {
    show?: boolean
    success?: boolean
    check: (e: React.MouseEvent) => void
    linkOut: RefObject<HTMLButtonElement>
}

const CheckPanel: React.FC<IStatusText> = (props) => {
    return (
        <StyledCheckPanel show={props.show} {...props}>
            {
                <StatusText success={props.success}>
                    {props.success ? "Success!" : "Something wrong!"}
                </StatusText>
            }
            <ButtonS {...props}>
                Check
            </ButtonS>
        </StyledCheckPanel>
    );
}

export default CheckPanel;