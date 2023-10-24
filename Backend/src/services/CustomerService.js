import db from "../models";
export let getCustomerInfo = (CustomerID) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (CustomerID) {
                let customer = await db.Customer.findOne({
                    where: {
                        UserID: CustomerID
                    }
                })
                if (customer) {
                    resolve({
                        errCode: 0,
                        errMsg: "Success",
                        customerInfo: customer
                    })
                } else {
                    // try {
                    //     let newCustomer = await db.Customer.create({
                    //         UserID: CustomerID,

                    //     })
                    //     resolve({
                    //         errCode: 0,
                    //         errMsg: "Success",
                    //         customerInfo: newCustomer
                    //     })
                    // } catch (error) {
                    //     console.log(error)
                    // }
                    resolve({
                        errCode: 0,
                        errMsg: "Success",

                        customerInfo: {
                            Name: "", Email: "", Phone: "", Address: "",
                        }

                    })

                }



            }
        } catch (error) {
            reject(error);
        }
    })
}