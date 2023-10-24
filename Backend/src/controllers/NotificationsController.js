import { getNotifications } from "../services/NotificationService";

export let GetNotifications = async (req, res) => {
    try {
        let response = await getNotifications()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}