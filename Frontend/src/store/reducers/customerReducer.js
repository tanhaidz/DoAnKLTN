import actionTypes from '../actions/actionTypes';

const initialState = {
    customerInfo: {
        Name: "", Email: "", Phone: "", Address: "",
    }
}
const customerReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                customerInfo: action.payload,
            }

        default:
            return state;
    }
}

export default customerReducer;