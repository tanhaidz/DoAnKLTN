import { adminGetAllData, updateProductDiscount, updateProductType } from "../services/AdminService";

export let AdminGetAllData = async (req, res) => {
    try {

        let response = await adminGetAllData();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server",
        });
    }
}
export let UpdateProductType = async (req, res) => {
    try {
        if (req.body) {
            let response = await updateProductType(req.body);
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server",
        });
    }
}
export let UpdateProductDiscount = async (req, res) => {
    try {
        if (req.body) {
            let response = await updateProductDiscount(req.body);
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server",
        });
    }
}