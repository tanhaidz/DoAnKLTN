import { createProduct, deleteProduct, getAllProducts, getTopSellingProducts, updateProduct, saveRatingProduct } from "../services/productService"
export let CreateProduct = async (req, res) => {
    try {
        if (req.body) {
            let response = await createProduct(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        })
    }
}
export let GetAllProducts = async (req, res) => {
    try {

        let response = await getAllProducts()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        })
    }
}
export let GetTopSellingProducts = async (req, res) => {
    try {
        console.log(1)
        const products = await getTopSellingProducts();
        return res.status(200).json(products)
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let UpdateProduct = async (req, res) => {
    try {
        if (req.body) {
            let response = await updateProduct(req.body);
            return res.status(200).json(response)
        }

    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        });
    }
}
export let DeleteProduct = async (req, res) => {
    try {
        if (req.query.id) {
            let response = await deleteProduct(req.query.id)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        })
    }
}
export let SaveRatingProduct = async (req, res) => {
    try {
        if (req.body) {
            let response = await saveRatingProduct(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMsg: "Error from server"
        })
    }
}