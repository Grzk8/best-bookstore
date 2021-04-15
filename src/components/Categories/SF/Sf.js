import React, {Component} from 'react';
import Nav from '../../Navigation/Navigation';
import {
    Link,
} from 'react-router-dom';
import Button from '../../Layout/Button/Button';

class Sf extends Component {
    state = {
        books: [],
    };

    componentDidMount() {

        fetch(`https://api.npoint.io/f350e77249ffe02ebd33/books`)
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
    handleClick = book=>{
        this.props.addBook(book)
    }
    render(

    ) {
        console.log(this.state.books)
        return <>
            <div className="books">
                {
                    this.state.books.map(b=>
                                <div className="book" key={b.id}>
                                    <img className="cover"  src={b.image} height="120px" width="120px"></img>
                                    <p className="title"><strong>{b.title}</strong></p>
                                    <p className="author">{b.author}</p>
                                    <p className="author">{b.price}</p>
                                    <button className="btn"><Link to={'/description/'+b.id}>WIĘCEJ</Link></button>
                                    <Button clicked={()=>this.handleClick(b)}>DO KOSZYKA</Button>
                                    
                                </div>)
                }
            </div>
        </>;
    }
}

export default Sf;