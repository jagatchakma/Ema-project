import React from 'react';
import './OrderPage.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItemSection from '../ReviewItemSection/ReviewItemSection';

const OrderPage = () => {
    const cart = useLoaderData();
    // console.log(cart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItemSection
                    key={product.id}
                    product={product}
                    ></ReviewItemSection>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default OrderPage;