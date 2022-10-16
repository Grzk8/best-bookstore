import React, { Component } from 'react';
import Book from "../Layout/Book/Book";

class Main extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        const category = this.props.category;
        let response;
        fetch(`http://localhost:8000/api/items/newest`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => response = json.newest)
            .then(data => {
                const newList = data
                this.setState({
                    books: newList,
                });
                console.log(this.state.books)
            });
    };
    render() {
        return <>
            <h1 className="headerStyle">Nowości</h1>
            <Book data={this.state.books} addBook={this.props.addBook} newBook={true} />
        </>;
    };
}

export default Main;


// componentDidMount() {

//     fetch(`https://best-bookstore-default-rtdb.firebaseio.com//books.json`)
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data, "from API");

//             const newList = data.slice(-10).reverse();

//             this.setState({
//                 books: newList,
//             })
//         })
// };
// render() {
//     return <div>
//         <h1 className="headerStyle">Nowości</h1>
//         <Book data={this.state.books} addBook={this.props.addBook} newBook={true} />
//     </div>;
// };
// }