

import {combineReducers} from 'redux';
import inventoryReducer from './inventoryReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({cart : cartReducer, products : inventoryReducer })

export default rootReducer;