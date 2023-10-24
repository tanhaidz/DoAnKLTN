import { GetCustomerInfo } from "../../services/customerService";
import actionTypes from "./actionTypes";

export let getCustomerInfo = (CustomerID) => {
    return async (dispatch, getState) => {
        try {

            const response = await GetCustomerInfo(CustomerID);
            console.log("response:", response);

            const { errCode, customerInfo } = response;

            if (errCode === 0) {
                dispatch({
                    type: actionTypes.GET_CUSTOMER_SUCCESS,
                    payload: customerInfo
                });
            }
        } catch (error) {
            console.log('', error);
            dispatch({
                type: actionTypes.GET_CUSTOMER_FAIL
            });
        }
    };
}