import React, { useState } from "react"
import Checkout from "../../components/Checkout/Checkout"

const CartPage = () => {
    const [checkout, setCheckOut] = useState(false)

    return ( 
        <div className="cart">
            {checkout ? (
                <Checkout />
            ) : (
                <button onClick={() => {
                    setCheckOut(true);
                }}
                >
                    Checkout
                </button>
            )}
        </div>
     );
}
 
export default CartPage;