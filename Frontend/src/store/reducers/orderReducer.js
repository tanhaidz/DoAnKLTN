import actionTypes from '../actions/actionTypes';

const initialState = {
    orderInfo: {},
    groupedOrderItems: {},
    listOrders: {}
};
const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SAVE_ORDER:

            return {
                ...state,
                orderInfo: action.payload,
            };
        case actionTypes.GET_ORDER_SUCCESS:

            return {
                ...state,
                groupedOrderItems: action.payload,
                listOrders: action.payload2
            };
        case actionTypes.CANCEL_ORDER:
            return {
                ...state,
                listOrders: action.payload
            }
        default:
            return state;
    }

}
export default orderReducer;