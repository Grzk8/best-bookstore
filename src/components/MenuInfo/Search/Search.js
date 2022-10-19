import React, { Component } from 'react';
import Book from '../../Layout/Book/Book';
import Input from '../../Layout/Input/Input';
import Button from '../../Layout/Button/Button';

class Search extends Component {
    state = {
        books: [],
        searching: ' ',
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
        console.log(this.state.searching);
        fetch(`https://best-bookstore-default-rtdb.firebaseio.com//books.json`)
            .then(resp => resp.json())
            .then(data => {
                const newList = data.filter(item => {
                    return this.state.searching 
                });

                this.setState({
                    books: newList,
                })
            })
    }

    render() {
        return (<>
            <p className="headerStyle">Szukaj</p>
            <form className="tableContainer" onSubmit={this.handleSubmitForm}>
            <Input className="input" inputtype="text" name="search" value={this.state.searching} label="search" placeholder="tytuł książki lub autor" changed={this.handleSearchHandle} />
                {/* <input className="input" type="text" name="search" value={this.state.searchForm.value} label="search" placeholder="tytuł książki lub autor" onChange={this.handleSearchHandle}></input> */}
                <Button>Szukaj</Button>
            </form>
            <Book data={this.state.books} addBook={this.props.addBook} />
        </>)
    }
}


export default Search;

// <Input className="input" inputtype="text" name="s" value={this.state.searching} changed={this.handleSearchHandle} />
// <Input className="input" type="text" name="search" value="" label="search" placeholder="tytuł"></Input>