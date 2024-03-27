import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart} from '../../utilities/fakedb'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        // console.log(storedCart);
    },[])

    const handleAddToCard =(product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className="shop-container">
            <div>
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCard={handleAddToCard}></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;