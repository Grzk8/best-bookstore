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
        const books = props.basket.map(b => boo = [b.title, b.author, b.price]);
        let currentDate = new Date().toJSON().slice(0, 10);

        const order = {
            date: currentDate,
            books: books,
            price: totalPrice
        };
        console.log(order);
        setOrderCompleted(true);
    };

    const handleRemove = (id) => {
        props.removeBook(id)
    };

    return <>
        <h1 className="headerStyle">KOSZYK</h1>
        {props.basket.map(b =>
            <table className="tableContainer" key={b._id}>
                <tbody>
                    <tr>
                        <td>{b.title}</td>
                        <td>{b.author}</td>
                        <td>{b.price}<Button clicked={() => handleRemove(b._id)}>USUŃ Z LISTY</Button></td>
                    </tr>
                </tbody>

            </table>
        )}
        <p className="totalprice">Łącznie do zapłaty :<span> {totalPrice} zł</span></p>
        <Button clicked={sendOrderHandler} disabled={!auth.isLoggedIn}>KUPUJĘ</Button>
    </>
};

export default Basket;