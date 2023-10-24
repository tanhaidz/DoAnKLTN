import db from "../models"

export let processpayment = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let payment = await db.Payment.findOne({ where: { OrderID: +id } });
                if (payment) {
                    payment.PaymentStatus = 'Thanh toán thành công'
                    await payment.save();
                    resolve({
                        errCode: 0,
                        errMsg: "Success",
                    })
                }


            }
        } catch (error) {
            reject(error)
        }

    })
}
export let checkpayment = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let payment = await db.Payment.findOne({ where: { OrderID: +id } });
                if (payment) {
                    if (payment.PaymentStatus === 'Thanh toán thành công') {
                        resolve({
                            errCode: 0,
                            errMsg: "Thanh toán thành công",
                        })
                    } else {
                        resolve({
                            errCode: 0,
                            errMsg: "Bạn chưa thanh toán, Vui lòng thanh toán để hoàn tất đơn hàng!",
                        })
                    }
                }
            }
        } catch (error) {
            reject(error)
        }
    })
}