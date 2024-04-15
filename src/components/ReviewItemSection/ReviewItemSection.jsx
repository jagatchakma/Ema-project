import React from 'react';
import './ReviewItemSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItemSection = ({ product }) => {
    const { id, img, price, name, quantity } = product;
    // console.log(product);
    return (
        <div className='review-item'>
            <img className='reviewcartimage' src={img} alt="" />
            <div className='reviewData'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: {quantity} </p>
            </div>
            <button className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                </button>
        </div>
    );
};

export default ReviewItemSection;