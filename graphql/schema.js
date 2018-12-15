const { graphql, buildSchema } = require('graphql');


// query name = hello
// query type = String
// hello: String! = String is compulsory
module.exports = buildSchema(`
    type TestData {
        text: String!
        views: Int!
    }

    type RootQuery {
        hello: TestData!
    }

    schema {
        query: RootQuery
    }
`);