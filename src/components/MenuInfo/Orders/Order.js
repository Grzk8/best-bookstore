import React from 'react';

const Order = props => {
    return <div className='orders'>
        {props.orders.map(order =>
            <div className='orders_order' key={order._id}>
                <p className='orders_order-i'><strong>Numer zamówienia: </strong>{order._id}</p>
                <p className='orders_order-i'><strong>Data: </strong>{order.date}</p>
                <p className='orders_order-i'><strong>Zamówienie: </strong>{order.books}</p>
                <p className='orders_order-i'><strong>Cena: </strong>{order.price}</p>
            </div>
        )}
    </div>
};

export default Order;