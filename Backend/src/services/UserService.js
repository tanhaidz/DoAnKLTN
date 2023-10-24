
import db from "../models";
import bcrypt from "bcryptjs";



const salt = bcrypt.genSaltSync(10);

const checkEmail = async (UserEmail) => {
    const user = await db.User.findOne({
        where: { Email: UserEmail },
        raw: true,
    });
    console.log(user);
    return !!user;
};

const hashUserPassword = async (password) => {
    const hashPassword = await bcrypt.hashSync(password, salt);
    return hashPassword;
};

export const register = async (data) => {
    try {
        if (!data) {
            return {
                errCode: 1,
                errMsg: "Invalid data",
            };
        }

        const emailExists = await checkEmail(data.Email);
        if (emailExists) {
            return {
                errCode: 1,
                errMsg: "Email already exists",
            };
        }
        const hashedPassword = await hashUserPassword(data.Password);
        const newUser = await db.User.create({
            Name: data.Name,
            Email: data.Email,
            Password: hashedPassword,
            RoleKeyMap: "USER",
        });

        return {
            errCode: 0,
            errMsg: "Create user successful",
            userInfo: newUser
        };
    } catch (error) {
        throw error;
    }
};
export let login = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {}


            if (data) {
                let user = await db.User.findOne({
                    // where: { Email: data.Email }
                    where: {
                        Email: data.Email
                    },

                })

                if (user) {
                    if (await bcrypt.compareSync(data.Password, user.Password)) {
                        response = {
                            errCode: 0,
                            errMsg: "Login successful",
                            user: user
                        }
                    } else {
                        response = {
                            errCode: 1,
                            errMsg: "Invalid password"
                        }
                    }
                } else {
                    response = {
                        errCode: 1,
                        errMsg: "Invalid email"
                    }
                }


            }
            resolve(response)
        }
        catch (error) {
            console.log(error)
            reject(error);
        }
    })
}

let checkAuth = () => {

}
export let saveUserData = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {}


            if (userData) {
                let user = await db.User.findByPk(userData.id)

                if (user) {
                    // AuthEmail(user.Email)
                    await user.update(userData)
                    response = {
                        errCode: 0,
                        errMsg: "Edit user data successfully",
                        userInfo: user
                    }
                } else {
                    response = {
                        errCode: 1,
                        errMsg: "Edit user data fail",
                        userInfo: {}
                    }
                }
            }
            resolve(response)

        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}
export let checkPassword = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {}
            if (userData) {

                let user = await db.User.findByPk(userData.id)

                if (user) {
                    if (await bcrypt.compareSync(userData.Password, user.Password)) {
                        response = {
                            errCode: 0,
                            errMsg: "OK"
                        }
                    } else {
                        response = {
                            errCode: 1,
                            errMsg: "Invalid password"
                        }
                    }

                } else {
                    response = {
                        errCode: 2,
                        errMsg: "Not Found"
                    }
                }
                resolve(response)
            }
        } catch (error) {
            reject(error)
        }
    })
}
export let resetPassword = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (userData) {
                let hashedPassword = await hashUserPassword(userData.NPassword);
                let user = await db.User.findByPk(userData.id);
                if (user) {
                    user.Password = hashedPassword;
                    await user.save();
                    resolve({
                        errCode: 0,
                        errMsg: 'Success'
                    });
                } else {
                    reject(new Error('User not found'));
                }
            } else {
                reject(new Error('No user data provided'));
            }
        } catch (error) {
            reject(error);
        }
    });
};
export let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                console.log('deleteUser', id);
                try {
                    let user = await db.User.findByPk(id);
                    if (user) {
                        await user.destroy();
                        resolve({
                            errCode: 0,
                            errMsg: 'Success'
                        });
                    } else {
                        reject(new Error('User not found'));
                    }
                } catch (error) {
                    console.log(error);
                }

            } else {
                reject(new Error('No user ID provided'));
            }
        } catch (error) {
            reject(error);
        }
    });
};