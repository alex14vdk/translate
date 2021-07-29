import React, {useEffect, useState} from "react";
import Sortable from "sortablejs";
import Handler from "../../../utils/handler";
import {useRef} from "react";
import {ItemType} from "../../../interfaces";
import useOnclickOutside from "react-cool-onclickoutside";
import {phraseQuery} from "./queries";
import {useQuery} from "react-apollo";
import { lineSize } from "../../molecules/block-for-sort/styles";

const offlineRu = "Он ездит в Латвию и Россию каждое лето";
const offlineEn = "He travels to Latvia and Russia every summer";

const containerBlockTranslation = (Wrapped: Function) => (props: Object) => {
    const [phraseRu, setPhraseRu] = useState("");
    const [phraseEn, setPhraseEn] = useState("");
    const [showStatus, setShowStatus] = useState(false);
    const [result, setResult] = useState(false);
    const [listUnsorted, setListUnsorted] = useState<ItemType[]>([]);
    const refSorted = useRef<any | null>(null);
    const refUnsorted = useRef<any | null>(null);
    const refShadow = useRef<any | null>(null);

    const {loading, data, error} = useQuery(phraseQuery);

    useEffect(() => {
        if (!loading) {
            if (error !== undefined) {
                setPhraseRu(offlineRu);
                setPhraseEn(offlineEn);
            } else {
                Handler.shuffleArray(data.sentenceAll)
                setPhraseRu(data.sentenceAll[0].ru);
                setPhraseEn(data.sentenceAll[0].en);
            }
        }
    }, [loading]);

    useEffect(() => {
        if (phraseEn) {
            const phraseArr = Handler.splitPhrase(phraseEn, true);
            setListUnsorted(phraseArr);
        }
    }, [phraseEn])

    useEffect(() => {
        new Sortable(refSorted.current, {
            animation: 250,
            swapThreshold: 1,
            group: "shared",
            dragoverBubble: false,
        });
        new Sortable(refUnsorted.current, {
            animation: 250,
            swapThreshold: 1,
            group: "shared",
            dragoverBubble: false,
            store: {
                get: function (sortable: any) {
                    let order = sortable.toArray();
                    localStorage.setItem(sortable.options.group.name, order.join('|'));
                    return order;
                },
                set: function (sortable: any) {
                    let order = sortable.toArray();
                    const initialOrder = localStorage.getItem(sortable.options.group.name);
                    if (initialOrder) {
                        setTimeout(() => {
                            order = Handler.sortArrayByArray(order, initialOrder.split('|'));
                            sortable.sort(order, true);
                        }, 1500);
                    }
                }
            }
        });

        if (listUnsorted.length) {
            Handler.setSameWordWidth(
                refUnsorted.current.children,
                refShadow.current.children
            );
            Handler.setSameBlockHeight(
                lineSize,
                refSorted.current.parentNode,
                refUnsorted.current,
            );
        }
    }, [listUnsorted])

    const checkPhrase = () => {
        const check = Handler.checkWordsOrder(refSorted.current, phraseEn);

        setResult(check);
        setShowStatus(true);
        if (check) {
            Handler.reproducePhrase(phraseEn);
        }
    }

    const refOutLink = useOnclickOutside(() => {
        setShowStatus(false);
    });

    const allProp = {
        ...props,
        refSorted,
        refUnsorted,
        refShadow,
        phraseRu,
        listUnsorted,
        result,
        showStatus,
        checkPhrase,
        refOutLink
    }

    return <Wrapped {...allProp} />;
}

export default containerBlockTranslation;