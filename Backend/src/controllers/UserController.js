import { register, login, saveUserData, checkPassword, resetPassword, deleteUser } from "../services/UserService";
export let CreateUser = async (req, res) => {
    try {
        if (req.body) {
            let response = await register(req.body);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
};
export let handleLogin = async (req, res) => {
    try {

        if (req.body) {
            let response = await login(req.body);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let SaveUserData = async (req, res) => {
    try {

        if (req.body) {

            let response = await saveUserData(req.body);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let CheckPassword = async (req, res) => {
    try {
        if (req.body) {
            
            let response = await checkPassword(req.body);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let ResetPassword = async (req, res) => {
    try {
        if (req.body) {
            let response = await resetPassword(req.body)
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let DeleteUser = async (req, res) => {
    try {
        if (req.body.id) {
            console.log(req.body);
            let response = await deleteUser(req.body.id)
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}