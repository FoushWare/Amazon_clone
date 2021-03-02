import React from 'react';
import "./Product.css";
import { useStateValue } from '../DataLayer/StateProvider';

import { store } from 'react-notifications-component';

import CheckoutProductNotification from '../Checkout/CheckoutProductNotification/CheckoutProductNotification';

export default function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the dataLayer 
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

        store.addNotification({
            content:
                <CheckoutProductNotification
                    key={`anim  ${id}`}
                    title={title}
                    id={id}
                    rating={rating}
                    price={price}
                    image={image}
                />
            ,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 1000,
            }
        });
    }
    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}
