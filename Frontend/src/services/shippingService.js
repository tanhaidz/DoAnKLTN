import axios from "../axios";
export let createNewShippingOrder = (ShippingOrder) => {
    return axios.post('/api/createShippingOrder', ShippingOrder)
}