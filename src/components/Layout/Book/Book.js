import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Book = props => {

    const handleClick = book => {
        props.addBook(book)
    };

    let newReleases = null;
    let newRel = <div className='new'><strong>Nowość</strong></div>;
    props.newBook ? newReleases = newRel : null

    return (
        <>
            <div className="books" >{
                props.data.map(b =>
                    <div className="book" key={b._id}>
                        <Link to={'/description/' + b._id} image={b.image}><img className="cover" src={b.image} height="180px" width="180px"></img></Link>
                        {newReleases}
                        <Link className="title" to={'/description/' + b._id}>{b.title}</Link>
                        <p className="author">{b.author}</p>
                        <p className="author">Cena: <strong>{b.price}</strong> zł</p>
                        <Button clicked={() => handleClick(b)}>DO KOSZYKA</Button>
                    </div>)
            }</div>
        </>
    );
};

export default Book;