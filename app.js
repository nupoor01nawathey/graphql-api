const express = require("express"),
      app     = express(),
      graphqlHttp = require("express-graphql"); 



const graphqlSchema = require("./graphql/schema"),
      graphqlResolver = require("./graphql/resolver");

app.use("/graphql", graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver
}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started at port', PORT);
});