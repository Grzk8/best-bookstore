import React, { useState } from 'react';
import Form from './Form/Form';
import Button from '../Layout/Button/Button';

const Basket = props => {

    const [basket, setBasket] = useState();
    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {

        // this.setState({
        //     showform: this.state.showform ? false : true
        // }
        // )
        setShowForm(showform ? false : true)
    };

    
    const handleRemove = (id) => {
        props.removeBook(id)
        //console.log(this.state)
    }

    console.log(props);
    return <>
        <h1 className="headerStyle">KOSZYK</h1>
        {
            props.basket.map(b =>
                <table className="tableContainer" key={b._id}>
                    <tbody>
                        <tr>
                            <td>{b.title}</td>
                            <td>{b.author}</td>
                            <td>{b.price}<Button clicked={() => handleRemove(b.id)}>USUŃ Z LISTY</Button></td>
                        </tr>
                    </tbody>

                </table>
            )
        }
        <p className="totalprice">Łącznie do zapłaty :<span> {props.basket ? props.basket.reduce((x, y) => x + parseFloat(y.price), 0).toFixed(2) : 0} zł</span></p>

        <Button clicked={showFormHandler}>KUPUJĘ</Button>

        {showForm && <Form basket={props.basket} />}

    </>;

}


export default Basket;