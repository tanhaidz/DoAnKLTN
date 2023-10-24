import axios from "../axios";
export let checkpayment = (id) => {
    return axios.get('/api/checkpayment', { params: { id: id } });
}