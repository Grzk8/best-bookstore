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


    return <>
        <div className="books_container" >{
            props.data.map(b =>
                <div className="books_container_book" key={b._id}>
                    <Link to={'/description/' + b._id} image={b.image}><img className="books_container_book-cover" src={b.image} height="180px" width="180px"></img></Link>
                    {newReleases}
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

                </div>)
        }</div>
    </>
};

export default Book;