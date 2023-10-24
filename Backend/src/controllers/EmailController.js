import AuthEmail from "../services/EmailService";



export let SendOTP = async (req, res) => {
    try {
        if (req.body) {

            let response = await AuthEmail(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}