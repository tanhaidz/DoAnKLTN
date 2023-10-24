import axios from "../axios";

export let handleLogin = (userData) => {
    return axios.post('/api/login', userData);
}
export let handleRegister = (userData) => {
    return axios.post('/api/register', userData);
}
export let SaveUserData = (userData) => {
    return axios.post('/api/saveUserData', userData);
}
export let CheckPassword = (userData) => {
    return axios.post('/api/checkpassword', userData);
}
export let ResetPassword = (userData) => {
    return axios.post('/api/resetpassword', userData);
}
export let DeleteUser = (id) => {
    return axios.post('/api/deleteuser', { id: id });
}