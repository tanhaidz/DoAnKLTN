import axios from "../axios";
export let sendOTP = (data) => {
    return axios.post('/nodemailler/api/sendOTP', data)
}