import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
    render() {
        return (
            <div id="bool-detail">
                <p>Output book details goes here</p>
            </div>
        );
    }
}

export default graphql(getBookQuery)(BookDetails);