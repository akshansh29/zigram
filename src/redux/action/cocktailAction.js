import { actionType } from '../contants/actionType'

export const setDrinkList = (drinkList) => {
    return {
        type: actionType.SET_DRINK_LIST,
        payload: drinkList
    }
}
