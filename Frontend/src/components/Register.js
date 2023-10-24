// import React, { Component } from "react";

// class Register extends Component {

//     handleSubmit = () => {
//         // Submit form
//         this.props.history.push('/login');
//     }
//     handleChangeText = (event) => {
//         let { name, value } = event.target
//         this.setState({
//             [name]: value
//         })

//     }
//     // async handleRegister = () => {
//     //     let { FullName, Email, PhoneNumber, Password, RePassword, Address } = this.state;
//     //     if (Email === "" || PhoneNumber === "" || Password === "" || RePassword === "" || Address === "") {

//     //         this.setState({
//     //             errMsg: "Vui lòng nhập đầy đủ thông tin"
//     //         })
//     //     }
//     //     else {
//     //         if (!Email.includes("@gmail.com")) {
//     //             this.setState({
//     //                 errMsg: "Vui lòng dùng gmail để đăng kí tài khoản"
//     //             })
//     //         }
//     //         else if (Password !== RePassword) {
//     //             this.setState({
//     //                 errMsg: "Mật khẩu không trùng khớp"
//     //             })
//     //         }
//     //         else {
//     //             this.setState({
//     //                 errMsg: ""
//     //             })
//     //             try {
//     //                 let response = await handleRegister(FullName, Email, PhoneNumber, Password, Address)
//     //                 console.log(response)
//     //                 let { errCode, errMsg } = response
//     //                 if (errCode === 0) {
//     //                     toast.success(errMsg)

//     //                     this.props.userLoginSuccess({ FullName, Email, PhoneNumber, Password, Address })
//     //                 }
//     //             } catch (error) {

//     //             }

//     //         }
//     //     }

//     // }
//     render() {
//         return (
//             <div className="form-register row" onChange={(event) => this.handleChangeText(event)}>
//                 <div className="col-12 text-center title">Register</div>
//                 <div className="col-6 form-group">
//                     <label>FullName:</label>
//                     <input type='text' className='form-control' name='FullName' placeholder='Enter your FullName' />
//                 </div>
//                 <div className="col-6 form-group">
//                     <label>Number phone:</label>
//                     <input type='text' className='form-control' name='PhoneNumber' placeholder='Enter your phone' />
//                 </div>
//                 <div className="col-12 form-group">
//                     <label>Email:</label>
//                     <input type='text' className='form-control' name='Email' placeholder='Enter your email' />
//                 </div>
//                 <div className="col-6 form-group">
//                     <label>Password:</label>

//                     <input type='password' className='form-control' name='Password' placeholder='Enter your password' />
//                     {/* placeholder='Enter your password'
//                                 // onKeyDown={(event) => this.handleKeyDown(event)}
//                                 ></input> */}
//                 </div>
//                 <div className="col-6 form-group">
//                     <label>RePassword:</label>

//                     <input type='password' className='form-control' name='RePassword' placeholder='Enter your RePassword' />

//                 </div>
//                 <div className="col-12 form-group">
//                     <label>Address:</label>
//                     <input type='text' className='form-control' name='Address' placeholder='Enter your address' />
//                 </div>
//                 {/* <div className="col-12">
//                     <div className="errMsg">{this.state.errMsg}</div>
//                     <button className="btn-login"
//                     // onClick={() => this.handleRegister()}
//                     >Register</button>
//                 </div> */}

//             </div>
//         );
//     }
// }

// export default Register;