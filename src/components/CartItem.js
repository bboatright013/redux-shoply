import React, {useState} from 'react';
import {add, remove, edit} from '../reducers/actionCreators';
import {useDispatch} from "react-redux";

const CartItem = ({name, price, image, quantity}) => {
    const dispatch = useDispatch();
    const addToCart = () => dispatch(add({name: name, price: price, image_url: image, quantity : 1}));
    const removeFromCart = () => dispatch(remove({name: name, price: price, image_url: image, quantity : 1}));
    // const editCart = () => dispatch(edit({name: name, price: price, image_url: image, quantity: formData.quantity}))

    // const [formData, setFormData] = useState({
    //     quantity: quantity
    // })

    // const handleChange = evt => {
    //     const {name, value} = evt.target;
    //     setFormData(data => ({
    //         ...data,
    //         [name] : value
    //     }));
    //     let interval = setTimeout(editCart(), 3000);
    // }

    return (
        <div className="CartItem">
            <div>{name}</div>
            <img src={image}/>
            <div>
                <span>${price}</span> <br/>
                {/* <label htmlFor="quantity">Qty:</label>
                <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} /> */}
                <span>Qty: {quantity}</span>
            </div>

            <div className="button">
                <button onClick={addToCart}>+</button><button onClick={removeFromCart}>-</button>
            </div>
        </div>
    )
}

export default CartItem;