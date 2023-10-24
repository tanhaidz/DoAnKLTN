import axios from "../axios";

export let getSaleProducts = () => {
    return axios.get('/api/getSaleProducts')
}
export let getAllProducts = () => {
    return axios.get('/api/getAllProducts')
}
export let getProductDetail = (id) => {
    return axios.get('/api/getProductDetail', {
        params: { id }
    });
};
export let UpdateProduct = (data) => {
    return axios.post('/api/updateProduct', data)
}
export let DeleteProduct = (id) => {
    return axios.get('/api/deleteProduct', {
        params: { id }
    })
}
export let RatingProduct = (data) => {
    return axios.post('/api/ratingProduct', data)
}