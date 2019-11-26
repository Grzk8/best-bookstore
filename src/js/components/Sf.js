import React, {Component} from 'react';
import Nav from './Nav';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Sf extends Component {
    state = {
        books: [],
    };

    componentDidMount() {

        fetch(`http://localhost:3000/books`)
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
    }
    render(

    ) {
        console.log(this.state.books)
        return <>
            <Nav>
                {
                    this.state.books.map(b=>
                        <div className="book">
                            <div className="cover"></div>
                            <img src={b.image} height="120px" width="120px"></img>
                            <p>{b.title}</p>
                            <p>{b.author}</p>
                        </div>
                    )
                }
            </Nav>
        </>;
    }
}

export default Sf;