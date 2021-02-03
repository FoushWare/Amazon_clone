import React from 'react'
import { useStateValue } from "../../DataLayer/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../DataLayer/reducer";
import './Subtotal.css'


export default function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
            </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>

        </div>
    )
}
