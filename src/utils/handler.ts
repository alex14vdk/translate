const Handler = {
    shuffleArray: <T>(array: T[]): void => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    },
    sortArrayByArray: <T>(newArr: T[], originalArr: T[]): Array<T> => {
        newArr.sort((a: any, b: any): number => originalArr.indexOf(a) - originalArr.indexOf(b));
        return newArr;
    },
    splitPhrase: (initialEn: string, reSort = false) => {
        let phraseArr: any[] = [];
        if (!initialEn) {
            return phraseArr;
        }
        phraseArr = initialEn.split(" ");
        if (reSort) Handler.shuffleArray(phraseArr);
        phraseArr = phraseArr.map((item, i) => {
            return {
                id: i + 1,
                name: item
            }
        })
        return phraseArr;
    },
    checkWordsOrder: (block: HTMLElement, phraseOriginal: string): boolean => {
        let phrase = [].map.call(block.children, (e: HTMLElement) => {
            return e.getAttribute("data-id");
        })
        return phrase.join(' ') === phraseOriginal.trim();
    },
    reproducePhrase: (phrase: string): void => {
        let utterance = new SpeechSynthesisUtterance(phrase);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    },
    setSameWordWidth: (...args: HTMLElement[]) => {
        const getElements = (items: Array<HTMLElement>) => {
            return [].map.call(items, ((e: HTMLElement) => {
                return e.children[0]
            }))
        }
        const concatAll = (args: HTMLElement[]) => {
            let newArr: any[] = [];
            [].map.call(args, e => {
                newArr.push(...e)
            });
            return newArr;
        }

        let elements: Array<any>;

        elements = concatAll(args);
        elements = getElements(elements)

        let maxWidth = 0;
        for (let i = 0; i < elements.length; ++i) {
            maxWidth = Math.max(maxWidth, elements[i].offsetWidth)
        }
        for (let i = 0; i < elements.length; ++i) {
            elements[i].style.width = maxWidth + "px";
        }
    },
    setSameBlockHeight: (extra: number, ...args: HTMLElement[]) => {
        Handler.runByEvent(() => {
            let maxHeight = 0;

            [].map.call(args, (element: any) => {
                element.removeAttribute("style")
                maxHeight = Math.max(maxHeight, Handler.getHeight(element));
            });

            maxHeight += extra;
            [].map.call(args, (element: any) => {
                element.style.height = maxHeight + "px";
            })
        }, ['resize'])
    },
    runByEvent: (callback: () => void, events: Array<string>) => {
        (callback)();
        events.map(e => {
            window.addEventListener(e, () => {
                callback();
            })
        })
    },
    getHeight: (el: HTMLElement) => {
        const styles = window.getComputedStyle(el);
        const height = el.offsetHeight;
        const paddingTop = parseFloat(styles.paddingTop);
        const paddingBottom = parseFloat(styles.paddingBottom);
        const marginBottom = parseFloat(styles.marginBottom);
        return height - paddingTop - paddingBottom - marginBottom;
    }
}

export default Handler;