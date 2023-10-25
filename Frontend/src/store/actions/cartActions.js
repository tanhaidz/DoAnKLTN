import { getShoppingCart, saveChangeToDB } from '../../services/cartService'
import actionTypes from './actionTypes';
export const fetchShoppingCart = (userID, productArr) => {
    return async (dispatch, getState) => {
        try {
   
            let response = await getShoppingCart(userID);
            if (response.errCode === 0) {

                dispatch({
                    type: actionTypes.FETCH_SHOPPING_CART_SUCCESS,
                    payload: response.cartItems,
                    payload2: response.shoppingCart
                })
            }

        } catch (error) {
            console.log("Failed to fetch shopping cart", error);
        }
    };
}

export const addItemToCart = (item) => {

    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }

}
export const removeItemCart = (item) => {

    return {
        type: actionTypes.REMOVE_ITEM_CART,
        payload: item
    }

}
export const updateItemCart = (item) => {

    return {
        type: actionTypes.UPDATE_ITEM_CART,
        payload: item
    }

}
export const saveChange = (item) => {

    return async (dispatch, getState) => {
        try {

            let response = await saveChangeToDB(item);

            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.SAVE_CHANGE,
                    payload: response.cartItems,
                    payload2: response.shoppingCart
                })
            }

        } catch (error) {
            console.log(error)
        }
    };
}