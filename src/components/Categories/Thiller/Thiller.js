import React, {Component} from 'react';
import Book from "../../Layout/Book/Book";

class Thiller extends Component {
    state = {
        books: [],
    };

    componentDidMount() {

        fetch(`https://api.npoint.io/f350e77249ffe02ebd33/books`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data, "from API");


                const newList = data.filter(item => {
                    return item.category === "thiller" ;
                });

                this.setState({
                    books: newList,
                })
            })
    }

    render(
    ) {
        return <>
            <Book data={this.state.books} addBook={this.props.addBook}/>
        </>;
    }
}

export default Thiller;