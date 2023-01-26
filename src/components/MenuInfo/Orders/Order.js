import React from 'react';

const Order = props => {
    return <div >
        {props.orders.map(order =>
            <div key={order._id}>
                <p><strong>Numer zamówienia: </strong>{order._id}</p>
                <p><strong>Data: </strong>{order.date}</p>
                <p><strong>Zamówienie: </strong>{order.books}</p>
                <p><strong>Cena: </strong>{order.price}</p>
            </div>
        )}
    </div>
};

export default Order;