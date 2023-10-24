import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomToast from '../components/CustomToast';
import * as actions from "../store/actions";
import { Redirect } from 'react-router-dom';
import './Login.scss';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isSignup: false,
            passwordMismatch: false,

        }
    }

    componentDidMount() {
        const body = document.querySelector('body');
        body.className = 'loginpage';
    }
    handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            await this.handleLogin()
        }
    }

    render() {
        let { isSignup } = this.state
        let { isLoggedIn, curURL } = this.props
        console.log(curURL)
        return (
            <>

                {isLoggedIn ?

                    <Redirect to={curURL} />
                    :
                    <div className="container">
                        <div className="form-container">
                            {isSignup ?

                                <form id="register-form" className="register-form" onSubmit={(event) => this.handleRegistry(event)}>
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
                                    <button type="submit" >Đăng nhập</button>
                                    <a href="#" id="forgot-password-link">Quên mật khẩu?</a>
                                    <button type="button" id="show-form-button" onClick={() => this.setState({ isSignup: true })}>Đăng ký</button>
                                </form>
                            }


                        </div>
                    </div>
                }

            </>



        )
    }

    handleRegistry = async (event) => {
        event.preventDefault();
        let { Name, Email, Password, RePassword } = event.target.elements;
        if (Password.value !== RePassword.value) {
            this.setState({ passwordMismatch: true });
        } else {
            this.setState({ passwordMismatch: false });
        }
        try {
            let userData = { Name: Name.value, Email: Email.value, Password: Password.value }
            console.log(userData);
            await this.props.registry(userData);
        } catch (error) {
            console.log(error);
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
        curURL: state.app.curURL
    };
};

const mapDispatchToProps = dispatch => {
    return {

        startLogin: (userData) => dispatch(actions.startLogin(userData)),
        registry: (userData) => dispatch(actions.registry(userData))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
