import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../DataLayer/StateProvider';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../DataLayer/reducer";
import axios from 'axios';



function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [successed, setSuccessed] = useState(false);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const history = useHistory();


    useEffect(() => {
        // generate the special stripe secret which alllows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket]);

    console.log('THE SECRET IS >>>', clientSecret);
    console.log('👱', user);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        //confirm the payment
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation 

            //save the user orders [firebase]
            console.log("the confirmation intent :" + paymentIntent);
            setSuccessed(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders');
        })



    }


    const handleChange = (e) => {
        // Listen for change in the cardElement
        //and display any erros as the customer types their card details 
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="Payment">
            <div className="payment__container">
                <h1>
                    Checkout(
                        <Link to="/checkout"> {basket?.length} items</Link>
                    )
                </h1>



                {/* Payment section - Delivery Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>


                {/* Payment section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        ))}
                    </div>
                </div>





                {/* Payment section - Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || successed}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
