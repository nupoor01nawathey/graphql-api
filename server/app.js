const express     = require("express"),
      mongoose    = require("mongoose"),
      app         = express();


const graphqlHTTP = require("express-graphql"),
      schema      = require("./graphql/schema");



mongoose.connect("mongodb://root:root123@ds113442.mlab.com:13442/graphql-api", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
    console.log("Connected to the database");
})


// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started at port', PORT);
});