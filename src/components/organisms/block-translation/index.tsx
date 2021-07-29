import React from "react";
import {BlockTranslationStyled} from "./styles";
import BlockWithOriginal from "../../molecules/block-with-original";
import BlockForSort from '../../molecules/block-for-sort';
import CheckPanel from "../../molecules/check-panel";
import Title from "../../atoms/title";
import {ItemType} from "../../../interfaces";
import {RefObject} from "react";
import containerBlockTranslation from "./container";

interface IBlockTranslation {
    phraseRu: string
    refSorted: RefObject<HTMLDivElement>
    refUnsorted: RefObject<HTMLDivElement>
    refShadow: RefObject<HTMLDivElement>
    listUnsorted: ItemType[]
    checkPhrase: (e: React.MouseEvent) => void
    result: boolean
    showStatus: boolean
    refOutLink: RefObject<HTMLButtonElement>
}

const BlockTranslation: React.FC<IBlockTranslation> = ({
   phraseRu,
   refSorted,
   refUnsorted,
   refShadow,
   listUnsorted,
   checkPhrase,
   result,
   showStatus,
   refOutLink
}) => {

    return (
        <BlockTranslationStyled>
            <Title>Translate this sentence</Title>
            <BlockWithOriginal>{phraseRu}</BlockWithOriginal>
            <BlockForSort link={refSorted}/>
            <BlockForSort linkShadow={refShadow} link={refUnsorted} list={listUnsorted} unsorted/>
            <CheckPanel linkOut={refOutLink} check={checkPhrase} success={result} show={showStatus}/>
        </BlockTranslationStyled>
    );
}


export default containerBlockTranslation(BlockTranslation);