const express     = require("express"),
      app         = express(),
      graphqlHTTP = require("express-graphql");


app.use("/graphql", graphqlHTTP({
    
}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started at port', PORT);
});