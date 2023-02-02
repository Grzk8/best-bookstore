import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Book = props => {

    const handleClick = book => {
        props.addBook(book)
    };

    let mark = null;
    let newRel = <div className='mark'><strong>Nowość</strong></div>
    let saleBook = <div className='mark'><strong>Promocja</strong></div>
    props.newBook ? mark = newRel : null;
    props.sale ? mark = saleBook : null;

    return <>
        <div className="books_container" >{
            props.data.map(b =>
                <div className="books_container_book" key={b._id}>
                    <Link to={'/description/' + b._id} image={b.image}><img className="books_container_book-cover" src={b.image} height="180px" width="180px"></img></Link>
                    {mark}
                    <Link className="books_container_book-title" to={'/description/' + b._id}>{b.title}</Link>
                    <p className="books_container_book-author">{b.author}</p>
                    {b.salePrice ?
                        <>
                            <p className="books_container_book-price canceled_price">Cena: <strong>{b.price}</strong> zł</p>
                            <p className='books_container_book-saleprice'>Cena: <strong>{b.salePrice}</strong> zł</p>
                        </> :
                        <p className="books_container_book-price">Cena: <strong>{b.price}</strong> zł</p>}
                    <div className='centered'>
                        <Button clicked={() => handleClick(b)}>DO KOSZYKA</Button>
                    </div>

                </div>
            )
        }</div>
    </>
};

export default Book;