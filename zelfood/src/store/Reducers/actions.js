import {types} from '../types';

export function loadFood(data) {
    return{
        type: types.LOADING_FOOD,
        payload: data
    }
}

export function showFood(data){
    return{
        type: types.SHOW_FOOD,
        payload: data
    }
}

export function addFood(name) {
    return{
        type: types.INSERT_FOOD,
        payload: name
    }
}