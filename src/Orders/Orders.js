import React, { useEffect, useState } from 'react';
import { useStateValue } from "../DataLayer/StateProvider";
import Order from './Order/Order'
import './Orders.css';
import { db } from '../firebase';

function Orders() {
    const [{ user, basket }] = useStateValue();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            console.log("👧" + user.uid);
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))

        } else {
            setOrders([]);
        }
    }, [user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {
                    orders?.map(order => (
                        <Order order={order} />
                    )

                    )
                }
            </div>
        </div>
    )
}

export default Orders
