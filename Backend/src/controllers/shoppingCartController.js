import { getShoppingCart, saveChangeToDB } from "../services/shoppingCartService";

export let GetShoppingCart = async (req, res) => {
    try {

        if (req.query.userID) {
            let response = await getShoppingCart(req.query);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let SaveChangeToDB = async (req, res) => {
    try {

        if (req.body) {
            let response = await saveChangeToDB(req.body);
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}