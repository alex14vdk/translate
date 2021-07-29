import React from 'react';
import {StyledBlockWithOriginal} from "./styles";
import ImgFigure from "../../atoms/img-figure";
import OriginalWord from "../../atoms/original-word";
import Tooltip from "../../atoms/tooltip";


const BlockWithOriginal: React.FC<{ children: string }> = (props) => {
    return (
        <StyledBlockWithOriginal {...props}>
            <ImgFigure/>
            <Tooltip>
                {props.children.split(" ").map(((word, i) =>
                        <OriginalWord key={i}>{word}</OriginalWord>
                ))}
            </Tooltip>
        </StyledBlockWithOriginal>
    );
}

export default BlockWithOriginal;