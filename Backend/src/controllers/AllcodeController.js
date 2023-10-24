import { getAllcodeByType } from "../services/AllcodeService"
export let GetAllcodeByType = async (req, res) => {
    try {
        if (req.query) {
            let response = await getAllcodeByType(req.query.type)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: 1,
            errMsg: "Error from server"
        })
    }
}