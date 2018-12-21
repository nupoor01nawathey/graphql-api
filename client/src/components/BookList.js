import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBookList } from '../queries/queries';

class BookList extends Component {
    displayBooks() {
        const data = this.props.data;
        if(data.loading) {
            // data not available
            return (<div>
                Loading Books
            </div>);
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
            </div>
        );
    }
}

export default graphql(getBookList)(BookList);