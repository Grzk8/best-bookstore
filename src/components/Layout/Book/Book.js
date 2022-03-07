import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";

class Book extends Component {

    handleClick = book=>{
        this.props.addBook(book)
    };

    render(){

        var newReleases = null;
        var newRel = <div className='new'><strong>Nowość</strong></div>;
        this.props.newBook ? newReleases = newRel : null
        
        return(
            <>
            <div className="books" >{
                this.props.data.map(b=>
                    <div className="book" key={b.id}>
                        <img className="cover" src={b.image} height="180px" width="180px"></img>
                        {newReleases}
                        <p className="title"><strong>{b.title}</strong></p>
                        <p className="author">{b.author}</p>
                        <p className="author">Cena: <strong>{b.price}</strong></p>
                        <Button><Link to={'/description/'+b.id}>WIĘCEJ</Link></Button>
                        <Button clicked={()=>this.handleClick(b)}>DO KOSZYKA</Button>
                    </div>)
            }</div>
            </>
        )
    };
};

export default Book;