import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../Layout/Button/Button';
import { AuthContext } from '../Layout/Auth/auth-context';

const Basket = props => {
    const auth = useContext(AuthContext);
    const [orderCompleted, setOrderCompleted] = useState(false);

    const totalPrice = props.basket ? props.basket.reduce((x, y) => x + parseFloat(y.price), 0).toFixed(2) : 0;

    if (orderCompleted) {
        return <Redirect to="/orderCompleted" />
    }

    const sendOrderHandler = () => {
        let boo = [];
        const books = props.basket.map(b => boo = [b.title]);
        let currentDate = new Date().toJSON().slice(0, 10);

        const order = {
            date: currentDate,
            books: books.toString(),
            price: totalPrice,
            creator: auth.userId
        };

        const sendOrder = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/users/order`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        date: order.date,
                        books: order.books,
                        price: order.price,
                        creator: auth.userId
                    })
                })
                if (!response.ok) {
                    setShowError(true);
                    throw new Error('Błąd podczas wysyłania zamówienia');
                }
                const responseData = await response.json();
            } catch (err) {
                console.log(err)
            }
        }
        sendOrder();
        setOrderCompleted(true);
        props.clearBasket();
    };

    const handleRemove = (id) => {
        props.removeBook(id)
    };

    let notlogged;
    if (!auth.token) {
        notlogged = <p className="totalprice basket-warning"> Aby złożyć zamówienie muszisz się zalogować</p>
    }

    let price = <p className="totalprice">koszyk jest pusty</p>
    if (props.basket.length > 0) {
        price = <div>
            <p className="totalprice">Łącznie do zapłaty :<strong> {totalPrice} zł</strong></p>
            <div className='right'>
                {notlogged}
                <Button clicked={sendOrderHandler} disabled={!auth.isLoggedIn} >KUPUJĘ</Button>
            </div>
        </div>
    }

    return <>
        <h1 className="headerStyle">koszyk</h1>
        {props.basket.map(b =>
            <div className="basket_" key={b._id}>
                <div className="basket_container">
                    <div className="basket_container_book">
                        <div className="basket_container_book_cover">
                            <img className="basket_container_book_cover-cover" src={b.image}></img>
                        </div>
                        <div className="basket_container_book_desc">
                            <p className="basket_container_book_desc-title">{b.title}</p>
                            <p className="basket_container_book_desc-author">{b.author}</p>
                        </div>
                    </div>
                    <div className="basket_container_price">
                        <p className="basket_container_price-price">Cena:</p>
                        <p className="basket_container_price-value"><strong>{b.price}</strong> zł</p>
                    </div>
                    <div className="basket_container_remove" onClick={() => handleRemove(b._id)}>

                    </div>
                </div>
            </div>
        )}
        <div className="basket_container basket_container_totalprice">
            {price}
        </div>
    </>
};

export default Basket;