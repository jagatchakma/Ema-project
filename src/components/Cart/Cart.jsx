import React, { Children } from 'react';
import './Cart.css'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart;
    // const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){

        // product.quantity = product.quantity || 1;
        // // or
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity
    }

    const text = totalPrice*7/100;
    const grandTotal = totalPrice+text;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <h4>Selected items: {quantity}</h4>
            <p>Total price: ${totalPrice}</p>
            <p>Total shippine: {totalShipping}</p>
            <p>Text: ${text.toFixed(2)}</p>
            <h6>Grand total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart}>Clear cart</button>
            {children}
        </div>
    );
};

export default Cart;