import axios from "../axios";
export let GetCustomerInfo = (CustomerID) => {
    try {
        return axios.get('/api/getCustomerbyID', {
            params: {
                CustomerID: CustomerID
            }
        })
    } catch (error) {
        console.log(error);
    }

}