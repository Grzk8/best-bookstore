import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Layout/Auth/auth-context';
import Order from './Order';

const Orders = () => {
    const auth = useContext(AuthContext);
    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            const id = auth.userId;
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/api/users/order/${id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const responseData = await response.json();
                setOrders(responseData.orders);
                setIsLoading(false);
            } catch {
                (err) => console.log(err);
            }
        }
        fetchOrders();
    }, []);

    return <>
        <h1 className="headerStyle"> moje zamówienia </h1>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && orders && <Order orders={orders} />}
    </>
};

export default Orders;