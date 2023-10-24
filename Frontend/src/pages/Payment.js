import React, { Component } from 'react'
import QRCode from 'qrcode';
import './payment.scss'
import { checkpayment } from '../services/paymentService';

function generateQRCode(text, imageId) {
    const qrImage = document.getElementById(imageId);

    QRCode.toDataURL(text)
        .then((url) => {
            qrImage.src = url;
        })
        .catch((error) => {
            console.error('Lỗi tạo mã QR:', error);
        });
}
export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

        this.fetchIpAddress();

    }
    handclick = async () => {
        let response = await checkpayment(this.props.location.state)
        if (response.errCode === 0) {
            alert(response.errMsg)
        }
    }
    fetchIpAddress = async () => {
        try {
            const response = await fetch('https://api.ipify.org/?format=json');
            const data = await response.json();
            const textToEncode = `http://${data.ip}:8080/api/processpayment?id=${this.props.location.state}`;
            console.log(textToEncode)
            const qrImageId = 'qr-image';
            generateQRCode(textToEncode, qrImageId);
        } catch (error) {
            console.log('Error fetching IP address:', error);
        }
    };
    render() {
        console.log(this.props)
        return (
            <>
                <div id="qr-container">
                    <img id="qr-image" src="" alt="QR Code" />
                    <div>Thanh toán cho đơn hàng có id: {this.props.location.state}</div>
                    <button onClick={() => this.handclick()}>Xác nhận thanh toán</button>
                </div>

            </>
        )
    }
}
