import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    cartItems: [],
    errMsg: '',
    guestID: ""
}

const userReducer = (state = initialState, action) => {
    let updatedCartItems = null
    switch (action.type) {

        case actionTypes.LOGIN_SUCCESS:
            console.log("aaaaaaaaaa")
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.payload.user,
                errMsg: action.payload.errMsg

            }
        case actionTypes.LOGIN_FAILURE:

            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
                errMsg: action.payload.errMsg
            }
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                errMsg: action.payload,
                userInfo: action.payload2,
                isLoggedIn: true,
            };
        case actionTypes.REGISTER_USER_FAIL:
            return {
                ...state,
                // Cập nhật trạng thái khi đăng ký thất bại
            };
        case actionTypes.CREATE_NEW_GUEST_SUCCESS:
            return {
                ...state,
                guestID: action.payload
            }
        case actionTypes.SAVE_CHANGE_USER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload
            }
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
                errMsg: action.payload
            }
        case actionTypes.DELETE_USER_FAIL:
            return {
                ...state,
                errMsg: action.payload
            }
        case actionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
                errMsg: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;