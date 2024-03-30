import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb'
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

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //stap one get id
        for (const id in storedCart) {
            //stap two get product by id
            const addedProduct = products.find(product => product.id === id)
            // console.log(saveProduct);
            // stap 3 get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;

                // stap 4 add the product in the saved cart
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCard = (product) => {
        // const newCart = [...cart, product];

        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);

        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        }else{
            exists.quantity = exists.quantity+1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;