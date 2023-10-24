import express from "express";
import { CreateUser, handleLogin, CreateProduct, GetAllProducts, GetAllcodeByType, GetAllProductInventory, GetProductInventoryByID, GetProductDetailByID, GetTopSellingProducts, GetSaleProducts, GetShoppingCart, SaveChangeToDB, CreateNewOrder, SaveUserData, SendOTP, CheckPassword, ResetPassword, DeleteUser, GetCustomerByID, GetOrder, AdminGetAllData, UpdateProduct, DeleteProduct, ChangeOrderStatus, UpdateProductType, UpdateProductDiscount, SaveRatingProduct, ProcessPayment, CheckPayment, GetNotifications  } from '../controllers/Controller.js'

let router = express.Router();

export let initWebRoutes = (app) => {

    //users
    router.post('/api/register', CreateUser);
    router.post('/api/login', handleLogin);
    router.post('/api/saveUserData', SaveUserData);
    router.post('/api/checkpassword', CheckPassword);
    router.post('/api/resetpassword', ResetPassword);
    router.post('/api/deleteuser', DeleteUser);

    //Customers
    router.get('/api/getCustomerbyID', GetCustomerByID)


    router.post('/nodemailler/api/sendOTP', SendOTP)

    //products
    router.post('/api/createProduct', CreateProduct);
    router.get('/api/getAllProducts', GetAllProducts);
    router.get('/api/top-selling-products', GetTopSellingProducts);
    router.get('/api/getSaleProducts', GetSaleProducts)
    router.post('/api/updateProduct', UpdateProduct)
    router.get('/api/deleteProduct', DeleteProduct)
    router.post('/api/ratingProduct', SaveRatingProduct)


    //Allcode
    router.get('/api/getAllcodeByType', GetAllcodeByType);

    //ProductInventory
    router.get('/api/getAllProductInventory', GetAllProductInventory);
    router.get('/api/getProductInventoryByID', GetProductInventoryByID)

    //ProductDetails
    router.get('/api/getProductDetail', GetProductDetailByID)

    //ShoppingCart
    router.get('/api/getShoppingCart', GetShoppingCart)
    router.post('/api/saveChangeToDB', SaveChangeToDB)

    //Order
    router.post('/api/createOrder', CreateNewOrder);
    router.get('/api/getOrder', GetOrder);
    router.post('/api/changeOrderStatus', ChangeOrderStatus)
    // router.post('/api/changeOrderStatusCustomer', ChangeOrderStatusCustomer)
    // admin
    router.get('/api/admin/getAllData', AdminGetAllData)
    router.post('/api/admin/updateProductType', UpdateProductType)
    router.post('/api/admin/updateProductDiscount', UpdateProductDiscount)

    //payment
    router.get('/api/processpayment', ProcessPayment)
    router.get('/api/checkpayment', CheckPayment)

    //notify
    router.get('/api/notifications', GetNotifications)

    return app.use("/", router);


}
