import actionTypes from './actionTypes';
import { handleLogin, handleRegister, SaveUserData, DeleteUser } from '../../services/userService';
import { ChangeOrderStatus } from '../../services/orderService';

// export const addUserSuccess = () => ({
//     type: actionTypes.ADD_USER_SUCCESS
// })
// export const userLoginSuccess = (userInfo) => ({
//     type: actionTypes.USER_LOGIN_SUCCESS,
//     userInfo: userInfo
// }
// )
// export const userLoginFail = () => ({
//     type: actionTypes.USER_LOGIN_FAIL
// })

// export const processLogout = () => ({
//     type: actionTypes.PROCESS_LOGOUT
// })

export const startLogin = (userData) => {
    return async (dispatch, getState) => {
        try {

            const response = await handleLogin(userData);
            console.log("response:", response);

            const { errCode } = response;

            if (errCode === 0) {
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    payload: response
                });
            } else {
                console.log(2);
                dispatch({
                    type: actionTypes.LOGIN_FAILURE,
                    payload: response
                });
            }
        } catch (error) {
            console.log('LOGIN_FAILURE', error);
            dispatch({
                type: actionTypes.LOGIN_FAILURE
            });
        }
    };
};
export const registry = (userData) => {
    return async (dispatch, getState) => {
        try {
            let response = await handleRegister(userData);
            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.REGISTER_USER_SUCCESS,
                    payload: response.errMsg,
                    payload2: response.userInfo
                })
            } else {
                dispatch({
                    type: actionTypes.REGISTER_USER_FAIL,
                    payload: response.errMsg,

                })
            }

        } catch (error) {
            console.log(error)
            dispatch({
                type: actionTypes.REGISTER_USER_FAIL
            })
        }
    };
}
export const createNewGUEST = () => {
    let guestID = localStorage.getItem('guestID');

    if (!guestID) {
        guestID = Date.now().toString();
        localStorage.setItem('guestID', guestID);
    }
    return {
        type: actionTypes.CREATE_NEW_GUEST_SUCCESS,
        payload: guestID
    }
}
export const saveUserData = (userData) => {
    return async (dispatch, getState) => {
        try {
            let response = await SaveUserData(userData);
            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.SAVE_CHANGE_USER_SUCCESS,
                    payload: response.userInfo
                })
            }

        } catch (error) {
            console.log(error)

        }
    };
}
export const deleteUser = (id) => {
    return async (dispatch, getState) => {
        try {
            console.log('check', id)
            let response = await DeleteUser(id)
            if (response.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_USER_SUCCESS,
                    payload: "Thành công"
                })
            } else {
                dispatch({
                    type: actionTypes.DELETE_USER_FAIL,
                    payload: "Lỗi hệ thống"
                })
            }
        } catch (error) {

        }
    }

}
export let signout = () => {
    return {
        type: actionTypes.SIGN_OUT_SUCCESS,
        payload: "Thành công"
    }
}
