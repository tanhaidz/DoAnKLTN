import axios from "../axios";
export let createNewOrder = (data) => {
    return axios.post('/api/createOrder', data)
}
export let createNewOrderItems = (OrderItems) => {
    return axios.post('/api/createOrderItems', OrderItems)
}
export let GetOrder = (CustomerID) => {
    return axios.get('/api/getOrder', {
        params: { CustomerID }
    })
}
export let ChangeOrderStatus = (data) => {
    return axios.post('/api/changeOrderStatus', data)
}
export let ChangeOrderStatusCustomer= (data) => {
    return axios.post('/api/changeOrderStatusCustomer', data)
}