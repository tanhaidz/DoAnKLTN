import { getSaleProducts } from "../services/SalesProductsService";
export let GetSaleProducts = async (req, res) => {
    try {
        const saleProducts = await getSaleProducts();
        return res.status(200).json({
            errCode: 0,
            saleProducts: saleProducts
        })
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errorMsg: "Error from server"
        });
    }
}