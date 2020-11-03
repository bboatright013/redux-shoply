import React from 'react';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';


const CartDetails = () => {
const cart = useSelector(store => store.cart.cart)

    return (
        <>
            <div className="Cart-Header">
                <h3>Shopping Cart</h3>
            </div>
        <div className="CartDetails">
            {cart.map(item => (
               <CartItem 
                    quantity={item.quantity}
                    name={item.name}
                    image={item.image_url}
                    price={item.price}
                />
            ))}
        </div>
        </>
    )
}

export default CartDetails;