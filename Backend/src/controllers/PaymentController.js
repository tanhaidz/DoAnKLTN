import { processpayment, checkpayment } from "../services/PaymentService"

export let ProcessPayment = async (req, res) => {
    try {
        if (req.query.id) {
            console.log(req.query)
            let response = await processpayment(req.query.id)
            return res.status(200).json(response)
        }

    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        })
    }
}
export let CheckPayment = async (req, res) => {
    try {
        if (req.query.id) {
            let response = await checkpayment(req.query.id)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        })
    }
}