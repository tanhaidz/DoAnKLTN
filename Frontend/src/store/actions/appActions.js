import actionTypes from './actionTypes';

export const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});
export const changeLanguageApp = (language) => ({
    type: actionTypes.CHANGE_LANGUAGE,
    language: language
})
export const updateCurrentURL = (url) => {
    return {
        type: actionTypes.UPDATE_CURRENT_URL,
        payload: url
    }
}