
import { getAllProductInventory, getProductInventoryByID } from "../services/ProductInventoryService"

export let GetAllProductInventory = async (req, res) => {
    try {
        let response = await getAllProductInventory()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMessage: error.message
        })
    }
}
export let GetProductInventoryByID = async (req, res) => {
    try {
        if (req.query.id) {
            let response = await getProductInventoryByID(req.query.id)
            return res.status(200).json(response)
        }
        else {
            return res.status(200).json({
                errCode: 1,
                errMsg: "Missing params requied"
            })
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: error.message
        })
    }
}