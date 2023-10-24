import axios from "../axios";
export let getNotifications = () => {
    return axios.get('/api/notifications')
}