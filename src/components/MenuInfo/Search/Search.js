import React, {Component}  from 'react';
import SearchBar from './SearchBar/SearchBar';
import Book from '../../Layout/Book/Book';

class Search extends Component {
    state = {
        books: [],
        searched: ''
    };

    componentDidMount() {

        fetch(`https://api.npoint.io/f350e77249ffe02ebd33/books`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data, "from API");

                const newList = data.filter(item => {
                    return this.state.books.title.filter(title => title.toLowerCase().includes(this.state.searched.toLocaleLowerCase())) ;
                });

                this.setState({
                    books: newList,
                })
            })     
    };

    editSearch = e => {
        this.setState({searched: e.target.value})
    }

    // searching = () => {
    //     return this.state.books.title.filter(title => title.toLowerCase().includes(this.state.searched.toLocaleLowerCase()))
    // }
    render(){
        return(<>
            <SearchBar search={this.state.searched}/>
           
           {}
        </>)
    }
}


export default Search;