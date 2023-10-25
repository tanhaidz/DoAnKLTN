import { changeOrderStatus, createNewOrder, getOrder, getOrderDetails } from '../services/OrderService'
export let CreateNewOrder = async (req, res) => {
    try {
        if (req.body) {

            let response = await createNewOrder(req.body);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
};
export let GetOrder = async (req, res) => {
    try {
        if (req.query.CustomerID) {

            let response = await getOrder(req.query.CustomerID);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let GetOrderDetails=async(req,res)=>{
    try {
        if (req.query.OrderID) {

            let response = await getOrderDetails(req.query.OrderID);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let ChangeOrderStatus = async (req, res) => {
    try {
        if (req.body) {
            console.log("check", req.body);
            let response = await changeOrderStatus(req.body)
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
// export let ChangeOrderStatusCustomer = async (req, res) => {
//     try {
//         if (req.body) {
//             console.log("check", req.body);
//             let response = await changeOrderStatusCustomer(req.body)
//             return res.status(200).json(response);
//         }
//     } catch (error) {
//         return res.status(200).json({
//             errCode: -1,
//             errMsg: "Error from server"
//         });
//     }
// }