import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings, quantity } = props.product;

    const handleAddToCard = props.handleAddToCard;
   
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={()=> handleAddToCard(props.product)} className='btn-cart'>
                Add to Cart 
                {/* <FontAwesomeIcon icon={byPrefixAndName.fas['house']} /> */}
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;