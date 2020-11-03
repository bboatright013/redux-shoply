import { ADD, REMOVE, EMPTY, EDIT } from './actionTypes';

const INITIAL_STATE = { cart : [] };

function cartReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case ADD:
            // console.log(state.cart, action.payload);
            if(checkForInCart(state.cart, action.payload.name)){
                let editedCart = state.cart.map(item => { 
                    if(item.name === action.payload.name){
                        item.quantity += 1;
                        return item;
                    } else {
                        return item;
                    }
                });
                // console.log(editedCart);
                // console.log(state.cart);
                return {...state, cart : [ ...editedCart ]}
            }
            // console.log(state.cart);
            return {...state, cart: [...state.cart, action.payload] }
        case REMOVE:
            if(checkForInCart(state.cart, action.payload.name)){
                let editedCart = state.cart.map(item => {
                    if(item.name === action.payload.name){
                        item.quantity -= 1;
                        return item;
                    }else {
                        return item;
                    }
                });
                editedCart = editedCart.filter(item => item.quantity > 0);
                return { ...state, cart : [...editedCart] }
            }
            return { ...state, cart : [...state.cart] };
        case EMPTY:
            return INITIAL_STATE;
        case EDIT:
                        // console.log(state.cart, action.payload);
                        if(checkForInCart(state.cart, action.payload.name)){
                            let editedCart = state.cart.map(item => { 
                                if(item.name === action.payload.name){
                                    item.quantity = action.payload.quantity - item.quantity;
                                    return item;
                                } else {
                                    return item;
                                }
                            });
                            // console.log(editedCart);
                            // console.log(state.cart);
                            editedCart = editedCart.filter(item => item.quantity > 0);
                            return {...state, cart : [ ...editedCart ]}
                        }
                        // console.log(state.cart);
                        return {...state, cart: [...state.cart, action.payload] }
        default:
            return state;
    }

    function checkForInCart(list, newItem){
        for(const item of list){
            // console.log(item.name, newItem)
            if(item.name === newItem){
                return true;
            }
        }
        return false;
    }
}



export default cartReducer;