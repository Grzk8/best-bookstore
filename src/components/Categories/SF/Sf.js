import React, {Component} from 'react';
import Book from "../../Layout/Book/Book";

class Sf extends Component {
    state = {
        books: [],
    };

    componentDidMount() {

        fetch(`https://best-bookstore-default-rtdb.firebaseio.com//books.json`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data, "from API");

                const newList = data.filter(item => {
                    return item.category === "s-f" ;
                });

                this.setState({
                    books: newList,
                })
            })
    };
    render() {
        return <>
            <Book data={this.state.books} addBook={this.props.addBook}/>
        </>;
    };
};

export default Sf;