import React from 'react';
import {add, remove} from '../reducers/actionCreators';
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';

const Product = ({name, price, image_url}) => {
    const dispatch = useDispatch();
    const addToCart = () => dispatch(add({name: name, price: price, image_url: image_url, quantity : 1}));
    const removeFromCart = () => dispatch(remove({name: name, price: price, image_url: image_url, quantity : 1}));

    const link = `/products/${name}`;

    return (
        <div className="Product">
            <Link to={link}>
            <h4>{name}</h4>
            <img src={image_url} alt={name}/>
            </Link>
            <h5>${price}</h5>

            <div className="button">
                <button onClick={addToCart}>+</button><button onClick={removeFromCart}>-</button>
            </div>
        </div>
    )
}

export default Product;