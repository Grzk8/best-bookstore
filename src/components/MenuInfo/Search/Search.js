import React, {Component}  from 'react';
import Book from '../../Layout/Book/Book';
import Input from '../../Layout/Input/Input';

class Search extends Component {
    state = {
        books: [],
        searching: ''
    };

    componentDidUpdate() {

        fetch(`https://best-bookstore-default-rtdb.firebaseio.com//books.json`)
            .then(resp => resp.json())
            .then(data => {
                const newList = data.filter(item => {
                    return this.state.searching === '' ? null : item.title.toLowerCase().includes(this.state.searching.toLowerCase()) || item.author.toLowerCase().includes(this.state.searching.toLowerCase()) ;
                });

                this.setState({
                    books: newList,
                })
            })
    };

    handleSearchHandle = e => {
        this.setState({searching: e.target.value})
    }

    handleSubmitForm = e => {
        e.preventDefault();
        console.log(this.state.searching)
    }

    render(){
        return(<>
            <form className="tableContainer" onSubmit={this.handleSubmitForm}>
                <Input className="input" inputtype="text" name="s" value={this.state.searching} changed={this.handleSearchHandle}/>
            </form>
            <Book data={this.state.books} addBook={this.props.addBook}/>
        </>)
    }
}


export default Search;