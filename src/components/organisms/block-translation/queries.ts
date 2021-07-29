import {gql} from 'apollo-boost';

export const phraseQuery = gql`
    query{
        sentenceAll{
            en
            ru
        }
    }
`;