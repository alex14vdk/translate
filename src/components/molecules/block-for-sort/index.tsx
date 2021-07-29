import React, {RefObject} from 'react'
import {ItemType} from '../../../interfaces';
import {StyledBlockForSortWrapper, StyledBlockForSort} from './styles';
import Word from "../../atoms/word";

interface IT {
    link: RefObject<HTMLDivElement>,
    linkShadow?: RefObject<HTMLDivElement>,
    unsorted?: boolean,
    list?: ItemType[]
}

const BlockForSort: React.FC<IT> = ({list, link, unsorted, linkShadow}) => {

    return (
        <StyledBlockForSortWrapper unsorted={unsorted}>
            <StyledBlockForSort ref={link}>
                {
                    list?.map((item) => (
                        <Word data-id={item.name} key={item.id}>{item.name}</Word>
                    ))
                }
            </StyledBlockForSort>
            {
                unsorted
                &&
                <StyledBlockForSort ref={linkShadow} shadow>
                    {
                        list?.map((item, i) => (
                            <Word key={i}>&nbsp;</Word>
                        ))
                    }
                </StyledBlockForSort>
            }
        </StyledBlockForSortWrapper>
    );
}

export default BlockForSort;