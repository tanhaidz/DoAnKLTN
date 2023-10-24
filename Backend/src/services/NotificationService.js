import db from "../models";
export let getNotifications = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Notification.findAll()
            resolve({
                errCode: 0,
                data: data
            })
        } catch (error) {

        }
    })
}