import React, { useState } from 'react';
import './OrderPage.css'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItemSection from '../ReviewItemSection/ReviewItemSection';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const OrderPage = () => {
    const cart = useLoaderData();
    // console.log(cart)
    const [newdCart, setNewdCart] = useState(cart);

    const handleRemoveFromCart = (id)=> {
        const remaining = cart.filter(product => product.id != id)
        setNewdCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = ()=>{
     setNewdCart([]);
     deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    newdCart.map(product => <ReviewItemSection
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItemSection>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={newdCart} handleClearCart={handleClearCart}>

                    <Link to='/proceedcheckout'><button className='btn-proceed'>Proceed Checkout</button></Link>
                </Cart>

            </div>
            
        </div>
    );
};

export default OrderPage;