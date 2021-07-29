import {createGlobalStyle} from 'styled-components';

const mainBg = "#F5F5F5";
const widthOptimal = "482px";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        color: black;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle;
export {mainBg,widthOptimal};