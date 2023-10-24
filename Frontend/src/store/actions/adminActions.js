import { GetAllData, UpdateProductDiscount, UpdateProductType } from "../../services/adminService";
import { ChangeOrderStatus } from "../../services/orderService";
import { DeleteProduct, UpdateProduct } from "../../services/productService";
import actionTypes from "./actionTypes";

export const getAllData = () => {

    return async (dispatch, getState) => {
        try {

            let response = await GetAllData();

            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ALL_DATA,
                    payload: response.data,

                })
            }

        } catch (error) {
            console.log(error)
        }
    };
}
export const changeOrderStatus = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log(data)
            let response = await ChangeOrderStatus(data)
            if (response.errCode === 0) {
                dispatch({
                    dispatch: actionTypes.CHANGE_ORDER_STATUS,
                    payload: response.orders
                })
            }
        } catch (error) {

        }
    }
}
export const updateProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let response = await UpdateProduct(data);
            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
                    payload: response.products
                })
            }

        } catch (error) {
            console.log(error)

        }
    };
}
export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        try {
            let response = await DeleteProduct(id);
            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_PRODUCT_SUCCESS,
                    payload: response.products
                })
            }
        } catch (error) {

        }
    }
}
export const updateProductType = (data) => {
    return async (dispatch, getState) => {
        try {
            let response = await UpdateProductType(data)
            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.UPDATE_PRODUCT_TYPE_SUCCESS,
                    payload: response.productTypes
                })
            }
        } catch (error) {

        }
    }
}
export const updateProductDiscount = (data) => {
    return async (dispatch, getState) => {
        try {
            let response = await UpdateProductDiscount(data)
            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.UPDATE_PRODUCT_DISCOUNT_SUCCESS,
                    payload: response.productDiscounts
                })
            }
        } catch (error) {

        }
    }
}
