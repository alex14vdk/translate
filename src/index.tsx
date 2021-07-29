import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import GlobalStyle from "./styles";
import Main from "./components/pages/main";

const client = new ApolloClient({
    uri: process.env.REACT_APP_DB_URL
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <GlobalStyle/>
        <Main/>
    </ApolloProvider>,
  document.getElementById('root')
);