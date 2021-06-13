import React, {Component}  from 'react';
import Book from '../../Layout/Book/Book';

class Search extends Component {
    state = {
        books: [],
        searching: ''
    };

    componentDidUpdate() {

        fetch(`https://api.npoint.io/f350e77249ffe02ebd33/books`)
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
            <h1 className="headerStyle">Wpisz tytuł ksiązki lub nazwisko autora</h1>
            <form className="tableContainer" onSubmit={this.handleSubmitForm}>
                    <input className="input" type="text" name="s" value={this.state.searching} onChange={this.handleSearchHandle}></input>
            </form>
            <Book data={this.state.books} addBook={this.props.addBook}/>
        </>)
    }
}


export default Search;