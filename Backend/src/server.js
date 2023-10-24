import express from "express";
import bodyParser from "body-parser";
import {configViewEngine} from "./config/viewEngine";
import {initWebRoutes} from "../src/route/web"
import connectDB from "./config/connectDB";
require('dotenv').config();
var cors = require('cors')
let app = express();
app.use(cors({
    origin: process.env.URL_REACT, // Đặt nguồn gốc cho các yêu cầu được phép
    credentials: true // Cho phép chứng thực (cookies) trong yêu cầu
}));
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB()
configViewEngine(app);
initWebRoutes(app)


let port = process.env.PORT || 6969;
app.listen(port, () => {
    //callback
    console.log("Backend NodeJs is running on the port: " + port)
});
