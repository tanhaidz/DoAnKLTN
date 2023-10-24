
import { actions } from 'react-table';
import actionTypes from '../actions/actionTypes';

const initialState = {
    customers: [],
    products: [],
    orders: [],
    productDiscounts: [],
    productTypes: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_ALL_DATA:
            let { customers, products, orders, productDiscounts, productTypes } = action.payload
            return {
                ...state,
                customers: customers,
                products: products,
                orders: orders,
                productDiscounts: productDiscounts,
                productTypes: productTypes
            }
        case actionTypes.CHANGE_ORDER_STATUS:
            return {
                ...state,
                orders: action.payload
            }
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: actions.payload
            }
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: actions.payload
            }
        case actionTypes.UPDATE_PRODUCT_TYPE_SUCCESS:
            return {
                ...state,
                productTypes: actions.payload
            }
        case actionTypes.UPDATE_PRODUCT_DISCOUNT_SUCCESS:
            return {
                ...state,
                productDiscounts: actions.payload
            }
        default:
            return state;
    }
}

export default adminReducer;