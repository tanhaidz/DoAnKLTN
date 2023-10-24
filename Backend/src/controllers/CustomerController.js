import { getCustomerInfo } from "../services/CustomerService"

export let GetCustomerByID = async (req, res) => {
    try {
        console.log(req.query.CustomerID)
        let response = await getCustomerInfo(req.query.CustomerID)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        })
    }
}