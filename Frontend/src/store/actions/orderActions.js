
import { ChangeOrderStatus, GetOrder, createNewOrder } from '../../services/orderService';

import actionTypes from './actionTypes';

export const saveOrderInfo = (info) => {

    return {
        type: actionTypes.SAVE_ORDER,
        payload: info,
    };
}
export const CreateNewOrder = (data) => {
    return async (dispatch, getState) => {
        try {
            await createNewOrder(data)



        } catch (error) {
            console.log(error)
        }
    };
}
export const getOrder = (CustomerID) => {
    return async (dispatch, getState) => {
        try {
            let response = await GetOrder(CustomerID)
            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ORDER_SUCCESS,
                    payload: response.groupedOrderItems,
                    payload2: response.orders,
                })
            }


        } catch (error) {
            console.log(error)
        }
    };
}
export let cancelOrder = (data) => {

    return async (dispatch, getState) => {
        try {
            console.log(data)
            let response = await ChangeOrderStatus(data)
            if (response.errCode === 0) {
                dispatch({
                    dispatch: actionTypes.CANCEL_ORDER,
                    payload: response.orders
                })
            }
        } catch (error) {

        }
    }

}
