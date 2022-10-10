import React, { Component, useEffect } from 'react';
import Book from "../../Layout/Book/Book";

class Category extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        const category = this.props.category;
        let response;
        fetch('http://localhost:8000/api/items/category', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "category": category
            })
        })
            .then(response => response.json())
            .then(json => response = json.category)
            .then(data => {
                const newList = data
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

export default Category;