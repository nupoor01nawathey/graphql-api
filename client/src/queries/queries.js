import { gql } from 'apollo-boost';

const getBookList = gql`
{
    books {
        name
        id
    }
}
`;

const getAuthorsQuery = gql`
    {
        authors {
            name
            age
            id
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

export { getBookList, getAuthorsQuery, addBookMutation };