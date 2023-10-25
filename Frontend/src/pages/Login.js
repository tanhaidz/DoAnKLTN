import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomToast from '../components/CustomToast';
import * as actions from "../store/actions";
import { Redirect } from 'react-router-dom';
import './Login.scss';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { sendOTP } from '../services/EmailService';
import { toast } from 'react-toastify';
let OTP = ""
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            isSignup: false,
            passwordMismatch: false,
            OTPinput: '',
        }
    }

    componentDidMount() {
        const body = document.querySelector('body');
        body.className = 'loginpage';
    }
    componentDidUpdate(prevProps) {
        if (prevProps.errMsg !== this.props.errMsg) {
            toast.success(this.props.errMsg)
        }
    }
    handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            await this.handleLogin()
        }
    }

    render() {
        let { isSignup } = this.state
        let { isLoggedIn, curURL } = this.props
        console.log(this.state.newUser)
        return (
            <>

                {isLoggedIn ?

                    <Redirect to={curURL} />
                    :
                    <div className="container">
                        <div className="form-container">
                            {isSignup ?

                                <form id="register-form" className="register-form" onChange={(event) => this.handleChangeInput(event)} onSubmit={(event) => this.handleRegistry(event)}>
                                    <h2>Đăng ký</h2>
                                    <input type="text" name="Name" placeholder="Tên người dùng" required />
                                    <input type="text" name="Email" placeholder="Email" required />
                                    <input type="password" name="Password" placeholder="Mật khẩu" required />
                                    <input type="password" name="RePassword" placeholder="Nhập lại mật khẩu" required />
                                    {this.state.passwordMismatch && <p className="error-message">Mật khẩu không khớp</p>}
                                    <button type="submit">Đăng ký</button>
                                    <button type="button" id="show-form-button" onClick={() => this.setState({ isSignup: false })}>Đăng nhập</button>
                                </form>
                                :
                                <form id="login-form" className="login-form" onSubmit={(event) => this.handleLogin(event)}>
                                    <h2>Đăng nhập</h2>
                                    <input type="text" name='Email' placeholder="Email" required />
                                    <input type="password" name='Password' placeholder="Mật khẩu" required />

                                    <div className="other-option d-flex">
                                        <a href="#" id="forgot-password-link">Quên mật khẩu?</a>
                                        <a onClick={() => this.setState({ isSignup: true })}>Đăng ký</a>
                                    </div>
                                    <button type="submit" >Đăng nhập</button>
                                </form>
                            }
                            <Modal isOpen={this.state.modal} toggle={() => this.toggle()} >
                                <ModalHeader>
                                    <span>Chúng tôi đã gửi một mã xác thực qua email này. Vui lòng kiểm tra và nhập mã để hoàn tất quá trình đăng kí</span>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-control" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <input type="text" style={{ border: 'none', outline: 'none' }} onChange={(event) => this.setState({ OTPinput: event.target.value })} />
                                        <Button onClick={() => this.handleSubmit()}>Xác nhận</Button>
                                    </div>

                                </ModalBody>

                            </Modal>

                        </div>
                    </div>
                }

            </>



        )
    }
    handleChangeInput = (event) => {
        let { name, value } = event.target
        this.setState({
            newUser: {
                ...this.state.newUser,
                [name]: value
            }
        })
    }
    toggle = async () => {

        this.setState({
            modal: !this.state.modal
        })
    }
    generateOTP() {
        const digits = '0123456789';
        let OTP = '';

        for (let i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }

        return OTP;
    }
    async handleSubmit() {
        let { OTPinput, newUser } = this.state
        if (OTP === OTPinput) {
            // let { NPassword } = this.state
            // let { id } = this.props.userInfo
            // let userData = { id, NPassword }
            // await ResetPassword(userData)
            // this.setState({
            //     isShowForm: false,
            //     modal: false
            // })

            await this.props.registry(newUser);
            console.log('User')
            toast.success(this.props.errMsg)
        } else {
            alert('Mã xác thực sai')
        }
    }
    async handleAuth() {
        // let { id, Email } = this.props.userInfo
        // let { Password, NPassword, CPassword } = this.state
        // OTP = this.generateOTP();
        // if (NPassword === CPassword) {
        //     let response = await CheckPassword({ id, Password })

        //     if (response.errCode === 0) {
        //         await sendOTP({ OTP, Email })
        //         this.setState({
        //             modal: !this.state.modal
        //         })
        //     } else {
        //         alert('Mật khẩu sai')
        //     }

        // } else {
        //     alert('Mật khẩu mới không trùng khớp')
        // }

    }
    handleRegistry = async (event) => {
        event.preventDefault();
        let { Email, Password, RePassword } = this.state.newUser


        if (Password !== RePassword) {
            this.setState({ passwordMismatch: true });
        } else {
            OTP = this.generateOTP();
            console.log({ OTP, Email })
            try {
                await sendOTP({ OTP, Email })
            } catch (error) {
                console.log(error)
            }

            this.setState({ passwordMismatch: false, modal: true });
        }





    }
    handleLogin = async (event) => {
        event.preventDefault();
        let { Email, Password } = event.target.elements;
        let userData = { Email: Email.value, Password: Password.value }
        try {
            let response = await this.props.startLogin(userData);
            if (response.error !== 0) {
                alert('Xem lại thông tin đăng nhập')
            }
        } catch (error) {
            console.log(error);
        }

    }
    // handleOnchange = (event) => {
    //     let { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        curURL: state.app.curURL,
        errMsg: state.user.errMsg,
    };
};

const mapDispatchToProps = dispatch => {
    return {

        startLogin: (userData) => dispatch(actions.startLogin(userData)),
        registry: (userData) => dispatch(actions.registry(userData))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
