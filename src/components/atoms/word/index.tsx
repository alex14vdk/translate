import React from 'react';
import {IChildren} from '../../../interfaces';
import {StyledWord, StyledWordWrapper} from "./styles";

const Word: React.FC<IChildren> = (props) => {
    return (
        <StyledWordWrapper {...props}>
            <StyledWord>{props.children}</StyledWord>
        </StyledWordWrapper>
    );
}

export default Word;