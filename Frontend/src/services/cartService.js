import axios from "../axios";

export let getShoppingCart = (userID) => {
    return axios.get(`/api/getShoppingCart?userID=${userID}`);
}
export let saveChangeToDB = (item) => {
    return axios.post(`/api/saveChangeToDB`, item);
}