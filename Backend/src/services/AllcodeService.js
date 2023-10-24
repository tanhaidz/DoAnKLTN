import db from "../models";
export let getAllcodeByType = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (typeInput) {
                let data = await db.Allcode.findAll({
                    where: {
                        Type: typeInput
                    }
                }).catch(err =>{console.log("error:",err)})
                console.log(data)

                resolve({
                    errCode: 0,
                    errMsg: "Success",
                    data: data
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}