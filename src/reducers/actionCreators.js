import { ADD, REMOVE, EMPTY, LOAD, EDIT } from './actionTypes';

export function add(payload){
    return {
        type: ADD,
        payload: payload
    };
}
export function remove(payload){
    return {
        type: REMOVE,
        payload: payload
    };
}
export function edit(payload){
    return {
        type: EDIT,
        payload: payload
    }
}
export function empty(){
    return {
        type: EMPTY
    };
}
export function load(){
    return {
        type: LOAD
    }
}