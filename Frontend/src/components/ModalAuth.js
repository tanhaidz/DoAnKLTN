import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalAuth extends Component {
    render() {
        let { isOpen, toggle, } = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
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
        );
    }
    async handleSubmit() {
        let { OTPinput } = this.state
        let { OTP } = this.props
        if (OTP === OTPinput) {
            let { Name } = this.state
            let { id } = this.props
            console.log(id)
            let userData = { Name, id }
            await this.props.saveUserData(userData)
            this.setState({
                isShowForm: false,
                modal: false
            })
        } else {
            alert('Mã xác thực sai')
        }
    }
};

export default ModalAuth;