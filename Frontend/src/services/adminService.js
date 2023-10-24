import axios from "../axios";
export let GetAllData = () => {
    return axios.get('/api/admin/getAllData')
}
export let UpdateProductType = (data) => {
    return axios.post('/api/admin/updateProductType', data)
}
export let UpdateProductDiscount=(data)=>{
    return axios.post('/api/admin/updateProductDiscount', data)
}