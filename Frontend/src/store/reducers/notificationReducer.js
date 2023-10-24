import actionTypes from '../actions/actionTypes';

const initialState = {
    notifyArr: []
};
const notificationReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_NEW_NOTIFICATION:
            let copy = state.notifyArr
            copy.push(action.payload)
            return {
                ...state,
                notifyArr: copy
            };

        default:
            return state;
    }

}
export default notificationReducer;