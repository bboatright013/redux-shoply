import { LOAD } from './actionTypes';
import * as products from "../data.json";


const INITIAL_STATE =  { products : GetData(products.default.products)} ;
function inventoryReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case LOAD:

        default:
            return state;
    }
}

function GetData(jsonObj){
    const tmpArr = [];
    for(let thing in jsonObj){
        tmpArr.push(jsonObj[thing]);
    }
    return tmpArr;
}

export default inventoryReducer;