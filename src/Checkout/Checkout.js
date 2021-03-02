import React from 'react';
import Subtotal from './Subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import { useStateValue } from "../DataLayer/StateProvider";
import "./Checkout.css";
import FlipMove from 'react-flip-move';


export default function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    const AnimatedCheckOut = React.forwardRef(({ item, index }, ref) => (
        <div ref={ref}>
            <CheckoutProduct
                key={`anim ${index} ${item.id}`}
                title={item.title}
                id={item.id}
                rating={item.rating}
                price={item.price}
                image={item.image}
            />
        </div>
    ));


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {basket.length === 0 ? (
                    <div>
                        <h2>YourShoping Basket is empty</h2>
                        <p>
                            you have no item in your basket, to buy one or more items, click "Add to basket" next
                            to the item
            </p>
                    </div>
                ) : (
                        <div>
                            {user && <h2 className='checkout__title'>Hello {user?.displayName}</h2>}
                            <h2 className='checkout__title'>Your Shoping Basket</h2>
                            <FlipMove
                                staggerDelayBy={150}
                                enterAnimation="accordionVertical"
                                leaveAnimation="accordionVertical"
                            >
                                {basket?.map((item, i) => (
                                    <AnimatedCheckOut
                                        key={`an ${i} ${item.id}`}
                                        item={item}
                                        index={i}
                                    />
                                ))}
                            </FlipMove>
                        </div>
                    )}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>


        </div>
    )
}
