import { actionType } from '../contants/actionType'

const initialState = {
    drinkesList: [],
}

export const drinkReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_DRINK_LIST:
            return { ...state, drinkesList: payload };
        default:
            return state;
    }
}