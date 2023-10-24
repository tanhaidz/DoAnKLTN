import { getProductDetailByID } from "../services/ProductDetailService"

export let GetProductDetailByID = async (req, res) => {
    try {

        if (req.query.id) {
            let response = await getProductDetailByID(req.query.id)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(400).json({
            errCode: -1,
            errMsg: error.message
        })
    }
}