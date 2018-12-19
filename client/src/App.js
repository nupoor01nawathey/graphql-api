import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


// componenets
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>React On Front End</h1>
          <BookList/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
