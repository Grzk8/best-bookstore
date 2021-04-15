import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";

class Book extends Component {

    handleClick = book=>{
        this.props.addBook(book)
    };

    render(){
        return(
            <>
            <div className="books" >{
                this.props.data.map(b=>
                    <div className="book" key={b.id}>
                        <img className="cover" src={b.image} height="120px" width="120px"></img>
                        <p className="title"><strong>{b.title}</strong></p>
                        <p className="author">{b.author}</p>
                        <p className="author">{b.price}</p>
                        <Button><Link to={'/description/'+b.id}>WIĘCEJ</Link></Button>
                        <Button clicked={()=>this.handleClick(b)}>DO KOSZYKA</Button>
                    </div>)
            }</div>
            </>
        )
    };
};

export default Book;