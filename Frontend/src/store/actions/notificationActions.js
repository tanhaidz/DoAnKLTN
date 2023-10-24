import actionTypes from './actionTypes';

export const getNewNotification = (newNotify) => {

    return {
        type: actionTypes.GET_NEW_NOTIFICATION,
        payload: newNotify,
    };
}