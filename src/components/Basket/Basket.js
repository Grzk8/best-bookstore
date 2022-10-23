import React, { useState } from 'react';
import Form from './Form/Form';
import Button from '../Layout/Button/Button';

const Basket = props => {
    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(current => !current)
    };

    const handleRemove = (id) => {
        props.removeBook(id)
    };

    const totalPrice = props.basket ? props.basket.reduce((x, y) => x + parseFloat(y.price), 0).toFixed(2) : 0;

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
        )};
        <p className="totalprice">Łącznie do zapłaty :<span> {totalPrice} zł</span></p>
        <Button clicked={showFormHandler}>KUPUJĘ</Button>
        {showForm && totalPrice && <Form basket={props.basket} />}
    </>
};

export default Basket;