import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
    displayBooks() {
        console.log(this.props);
        const data = this.props.data;
        if(data.loading) {
            // data not available
            return (<div>Loading Books</div>);
        } else {
            return (
                data.books.map(book => {
                    return (
                        <li key={ book.id }>{ book.name }</li>
                    )
                })
            )
        }
    }

    render(){
        return(
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
                <BookDetails />
            </div>
        );
    }
}

export default graphql(getBookQuery)(BookList);