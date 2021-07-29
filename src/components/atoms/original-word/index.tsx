import React from 'react';
import { IChildren } from '../../../interfaces';
import {StyledOriginalWord} from "./styles";


const OriginalWord: React.FC<IChildren> = ({children}) => {
    return <StyledOriginalWord>{children}</StyledOriginalWord>;
}

export default OriginalWord;