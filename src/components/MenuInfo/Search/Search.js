import React, { Component } from 'react';
import Book from '../../Layout/Book/Book';
import Input from '../../Layout/Input/Input';
import Button from '../../Layout/Button/Button';

class Search extends Component {
    state = {
        books: [],
        searching: '',
        searchForm: {
            search: {
                inputtype: 'input',
                elementConfig: {
                    type: 'text'
                },
                label: 'szukaj',
            }
        }
    };

    handleSearchHandle = e => {
        this.setState({ searching: e.target.value })
    }

    handleSubmitForm = e => {
        e.preventDefault();
        let response;
        fetch(`http://localhost:8000/api/items/search`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ searching: this.state.searching })
        })
            .then(response => response.json())
            .then(json => response = json.search)
            .then(data => {
                const newList = data
                this.setState({
                    books: newList,
                });
            });
    }

    render() {
        return (<>
            <p className="headerStyle">Szukaj</p>
            <form className="tableContainer" onSubmit={this.handleSubmitForm}>
                <Input className="input" inputtype="text" name="search" value={this.state.searching} label="search" placeholder="tytuł książki lub autor" changed={this.handleSearchHandle} />
                <Button>Szukaj</Button>
            </form>
            <Book data={this.state.books} addBook={this.props.addBook} />
        </>)
    }
}

export default Search;