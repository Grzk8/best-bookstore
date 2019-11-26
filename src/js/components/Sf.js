import React, {Component} from 'react';
import Nav from './Nav';

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
                        <>
                            <div className="books">
                                <div className="book">
                            <img className="cover" src={b.image} height="120px" width="120px"></img>
                            <p className="title"><strong>{b.title}</strong></p>
                            <p className="author">{b.author}</p>
                                    <button className="btn">kup</button>
                                </div>
                            </div>
                        </>
                    )
                }
            </Nav>
        </>;
    }
}

export default Sf;