import React from 'react';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';


const Cart = () => {
const cart = useSelector(store => store.cart.cart)

    return (
        <div className="Cart">
            <div className="Cart-Header">
                <h3>Shopping Cart</h3>
            </div>
            {cart.map(item => (
               <CartItem 
                    quantity={item.quantity}
                    name={item.name}
                    image={item.image_url}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default Cart;