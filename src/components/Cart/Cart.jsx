import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const text = totalPrice*7/100;
    const grandTotal = totalPrice+text;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <h4>Selected items: {cart.length}</h4>
            <p>Total price: ${totalPrice}</p>
            <p>Total shippine: {totalShipping}</p>
            <p>Text: ${text.toFixed(2)}</p>
            <h6>Grand total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;