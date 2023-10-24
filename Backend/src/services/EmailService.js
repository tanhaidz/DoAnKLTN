
import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "hai830273@gmail.com",
        pass: "twtj dwgs knhl xfeh",
    },
});
let AuthEmail = (data) => {
    const message = `Mã xác thực của bạn là ${data.OTP}`
    const options = {
        from: "BiTnHi Shop <sender@gmail.com>", // sender address
        to: data.Email, // receiver email
        subject: "Xác thực email", // Subject line
        text: message
    }
    SENDMAIL(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    });
}

const SENDMAIL = async (mailDetails, callback) => {
    try {
        const info = await transporter.sendMail(mailDetails)
        callback(info);
    } catch (error) {
        console.log(error);
    }
};
export default AuthEmail;