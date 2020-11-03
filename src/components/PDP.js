import React from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {add, remove} from '../reducers/actionCreators';

const PDP = () => {
    const products = useSelector(store => store.products.products);
    const name = useParams();
    const tmpItem = products.filter(prod => prod.name === name.name );
    const item = tmpItem[0];

    const dispatch = useDispatch();
    const addToCart = () => dispatch(add({name: item.name, price: item.price, image_url: item.image_url, quantity : 1}));
    const removeFromCart = () => dispatch(remove({name: item.name, price: item.price, image_url: item.image_url, quantity : 1}));


    console.log(products);
    console.log(name);
    console.log(item.name);
    return (
        <div className="PDP">
            <h3>{item.name}</h3>
            <img src={item.image_url}></img>
            <h4>{item.price}</h4>
            <p>{item.description}</p>
            <div className="button">
                <button onClick={addToCart}>+</button><button onClick={removeFromCart}>-</button>
            </div>
        </div>
    )
        
}

export default PDP;