
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { sendOTP } from '../services/EmailService';

import './resetPassword.scss';
import { CheckPassword, ResetPassword } from '../services/userService';

let OTP = ""
class ResetPasswordCompoment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            OTPinput: ''

        }
    }
    render() {
   
        return (
            <>
                <div className="password-change">
                    <h2 className="password-change__title">Đổi mật khẩu</h2>
                    <form className="password-change__form" onChange={(event) => this.handleChangeInput(event)}>
                        <div className="password-change__form-group">
                            <label htmlFor="current-password" className="password-change__label">Mật khẩu hiện tại:</label>
                            <input type="password" name="Password" className="password-change__input" required />
                        </div>
                        <div className="password-change__form-group">
                            <label htmlFor="new-password" className="password-change__label">Mật khẩu mới:</label>
                            <input type="password" name="NPassword" className="password-change__input" required />
                        </div>
                        <div className="password-change__form-group">
                            <label htmlFor="confirm-password" className="password-change__label">Xác nhận mật khẩu mới:</label>
                            <input type="password" name="CPassword" className="password-change__input" required />
                        </div>
                        <button type="button" className="password-change__submit" onClick={() => this.handleAuth()} >Đổi mật khẩu</button>
                    </form>
                </div>
                <div>

                    <Modal isOpen={this.state.modal} toggle={() => this.toggle()} >
                        <ModalHeader>
                            <span>Vui lòng kiểm tra email và nhập mã xác thực vào dưới đây để hoàn tất việc thay đổi</span>
                        </ModalHeader>
                        <ModalBody>
                            <div className="form-control" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <input type="text" style={{ border: 'none', outline: 'none' }} onChange={(event) => this.setState({ OTPinput: event.target.value })} />
                                <Button onClick={() => this.handleSubmit()}>Xác nhận</Button>
                            </div>

                        </ModalBody>

                    </Modal>
                </div>

            </>
        )
    }
    generateOTP() {
        const digits = '0123456789';
        let OTP = '';

        for (let i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }

        return OTP;
    }
    handleChangeInput(event) {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    toggle = async () => {

        this.setState({
            modal: !this.state.modal
        })
    }
    async handleSubmit() {
        let { OTPinput } = this.state
        if (OTP === OTPinput) {
            let { NPassword } = this.state
            let { id } = this.props.userInfo
            let userData = { id, NPassword }
            await ResetPassword(userData)
            this.setState({
                isShowForm: false,
                modal: false
            })
        } else {
            alert('Mã xác thực sai')
        }
    }
    async handleAuth() {
        let { id, Email } = this.props.userInfo
        let { Password, NPassword, CPassword } = this.state
        OTP = this.generateOTP();
        if (NPassword === CPassword) {
            let response = await CheckPassword({ id, Password })

            if (response.errCode === 0) {
                await sendOTP({ OTP, Email })
                this.setState({
                    modal: !this.state.modal
                })
            } else {
                alert('Mật khẩu sai')
            }

        } else {
            alert('Mật khẩu mới không trùng khớp')
        }

    }
}
function mapStateToProps(state) {
    return {
        userInfo: state.user.userInfo,

    };
}
function mapDispatchToProps(dispatch) {
    return {

    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(ResetPasswordCompoment);