import React, { Component, useEffect } from 'react';
import Book from "../../Layout/Book/Book";

class Comic extends Component {
    state = {
        books: [],
    };

    componentDidMount() {

        let response
        fetch('http://localhost:8000/api/items/category', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "category": "komiksy"
            })
        })
            .then(response => response.json())
            .then(json => response = json.category)
            .then(data => {
                console.log(data, "from API");
                const newList = data
                console.log(response);
                this.setState({
                    books: newList,
                });
            });
    };


    render() {
        return <>
            <Book data={this.state.books} addBook={this.props.addBook} />
        </>;
    };
};

export default Comic;