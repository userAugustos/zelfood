import { types } from '../types';

export const initialState = {
    loading: false,
    data: [],
    food: {}
}

export default function (state = initialState, action ) {
    switch (action.type) {
        case types.LOADING_FOOD:
            return {
                data: action.payload,
                loading: true,
            }
        case types.SHOW_FOOD:
            return {
                data: action.payload,
                loading: false
            }
        case types.INSERT_FOOD:
            return {
                food: action.payload,
                loading: true
            }
        default:
            return state;
    }
}