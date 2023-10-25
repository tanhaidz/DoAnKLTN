import React, { Component } from 'react'

import "../styles/checkout.min.scss"
import "../styles/checkout_v2.scss"
import { connect } from 'react-redux';
import * as actions from "../store/actions";
import { CommonUtils } from '../utils';
import { Link, Redirect } from 'react-router-dom';
import { createNewOrder } from '../services/orderService';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
// import "../styles/chosen.scss"
let TotalPrice = 0;
let fee = 50000
class Orderpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "", Email: "", Phone: "", Address: "", Note: "",
            animationActive: false,
            ShippingMethod: "",
            customerInfo: {
                Name: "", Email: "", Phone: "", Address: "", UserID: this.props.guestID
            }
        }
    }

    async componentDidMount() {

        const body = document.querySelector('body');
        body.className = 'orderpage';

        //
        if (!this.props.isLoggedIn) {
            await this.props.getCustomerInfo(this.props.guestID)
        } else {
            await this.props.getCustomerInfo(this.props.userInfo.id)
        }



        //
        const urlSearchParams = new URLSearchParams(window.location.search);
        const type = urlSearchParams.get("type");
        if (type === 'buynow') {
            let { orderProductInfo } = this.props.orderInfo

            console.log(orderProductInfo)
            let listItem = orderProductInfo
            console.log(listItem)
            this.setState({
                listItem
            })
        } else {
            //
            let cartItems = this.props.cartItems
            let products = this.props.products
            let mergedArray = cartItems.map(cartItem => {
                let matchingProduct = products.find(product => product.id === cartItem.ProductID);
                if (matchingProduct) {
                    return {
                        ...cartItem,
                        ...matchingProduct
                    };
                }
            });
            this.setState({
                listItem: mergedArray
            })
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.customerInfo !== this.props.customerInfo) {
            console.log(prevProps.customerInfo)
            console.log(this.props.customerInfo)
            this.setState({ customerInfo: this.props.customerInfo })
        }

    }

    calcPrice = () => {
        let { listItem } = this.state

        const a = listItem && listItem.length > 0 && listItem.map((item) => {
            return +item.DiscountedPrice * +item.Quantity;
        });
        if (Array.isArray(a)) {
            return a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        }
    }
    render() {

        let { listItem, ShippingMethod, customerInfo } = this.state
        let { isLoggedIn, userInfo, } = this.props

        return (
            <>
                {listItem &&
                    <>
                        <button className="order-summary-toggle order-summary-toggle-hide" onClick={() => this.handleOrderSummaryToggle()} >
                            <div className="wrap">
                                <div className="order-summary-toggle-inner">
                                    <div className="order-summary-toggle-icon-wrapper">
                                        <svg width={20} height={19} xmlns="http://www.w3.org/2000/svg" className="order-summary-toggle-icon">
                                            <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z" />
                                        </svg>
                                    </div>
                                    <div className="order-summary-toggle-text order-summary-toggle-text-show">
                                        <span>Hiển thị thông tin đơn hàng</span>
                                        <svg width={11} height={6} xmlns="http://www.w3.org/2000/svg" className="order-summary-toggle-dropdown" fill="#000">
                                            <path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z" />
                                        </svg>
                                    </div>
                                    <div className="order-summary-toggle-text order-summary-toggle-text-hide">
                                        <span>Ẩn thông tin đơn hàng</span>
                                        <svg width={11} height={7} xmlns="http://www.w3.org/2000/svg" className="order-summary-toggle-dropdown" fill="#000">
                                            <path d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z" />
                                        </svg>
                                    </div>
                                    <div className="order-summary-toggle-total-recap">
                                        <span className="total-recap-final-price">128,000đ</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div className="content">
                            <div className="wrap">
                                <div className="sidebar">
                                    <div className="sidebar-content">
                                        <div className="order-summary order-summary-is-collapsed">
                                            <h2 className="visually-hidden">Thông tin đơn hàng</h2>
                                            <div className="order-summary-sections">
                                                <div className="order-summary-section order-summary-section-product-list" data-order-summary-section="line-items">
                                                    <table className="product-table">
                                                        <tbody>
                                                            {listItem && listItem.length > 0 && listItem.map((item, index) => {

                                                                return (
                                                                    <tr className="product" key={index}>
                                                                        <td className="product-image">
                                                                            <div className="product-thumbnail">
                                                                                <div className="product-thumbnail-wrapper">
                                                                                    <img className="product-thumbnail-image" alt="product icon" src={item.ImageURL} />
                                                                                </div>
                                                                                <span className="product-thumbnail-quantity" aria-hidden="true">{item.Quantity}</span>
                                                                            </div>
                                                                        </td>
                                                                        <td className="product-description">
                                                                            <span className="product-description-name order-summary-emphasis">{item.ProductName}</span>
                                                                            {/* <span className="product-description-option"> {item.Quantity} </span> */}
                                                                            <span className="order-summary-emphasis">{CommonUtils.formatCurrency(+item.DiscountedPrice)}</span>
                                                                        </td>
                                                                        <td className="product-quantity visually-hidden">1</td>
                                                                        <td className="product-price">

                                                                            <span className="order-summary-emphasis d-flex justify-content-end pt-3">Tổng: {CommonUtils.formatCurrency(+item.DiscountedPrice * +item.Quantity)}</span>
                                                                        </td>
                                                                    </tr>

                                                                )
                                                            })}

                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="order-summary-section order-summary-section-discount clearfix">
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading">
                                                            <h3 className="panel-title">
                                                                <a href="javascript:void(0)" className="accordion-toggle" data-toggle="collapse" data-target="#collapse-coupon">
                                                                    <i className="fa fa-tag" /> Sử dụng Mã giảm giá <i className="fa fa-caret-down" />
                                                                </a>
                                                            </h3>
                                                        </div>
                                                        <div id="collapse-coupon" className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="form-group">
                                                                    <div className="col-sm-12">
                                                                        <span id="show_notice_coupon" />
                                                                        <div className="input-group">
                                                                            <input type="text" name="coupon" placeholder="Nhập mã Giảm giá" id="input-coupon" className="form-control" />
                                                                            <span className="input-group-btn">
                                                                                <input className="btn btn-primary" type="button" defaultValue="Áp dụng" id="button-coupon" data-loading-text="Đang áp dụng" />
                                                                            </span>
                                                                        </div>
                                                                        <span id="load-input-hidden" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-summary-section order-summary-section-total-lines payment-lines" data-order-summary-section="payment-lines">
                                                    <div className="panel panel-default" id="ajax-load-total">
                                                        <table className="table">
                                                            <tbody>
                                                                <tr className="total-line clearfix">
                                                                    <td className="total-line-name">Thành tiền</td>
                                                                    <td className="total-line-price">
                                                                        <span className="order-summary-emphasis">
                                                                            {CommonUtils.formatCurrency(this.calcPrice())}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="total-line clearfix">
                                                                    <td className="total-line-name">Phí vận chuyển toàn quốc</td>
                                                                    <td className="total-line-price">
                                                                        <span className="order-summary-emphasis">
                                                                            {CommonUtils.formatCurrency(+fee)}


                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="total-line clearfix total-line-table-footer">
                                                                    <td className="total-line-name payment-due-label">Tổng số</td>
                                                                    <td className="total-line-name payment-due">
                                                                        <span className="payment-due-price">{CommonUtils.formatCurrency(this.calcPrice() + fee)}</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main">

                                    <div className="main-content">
                                        <div className="step">
                                            <form method="post" name="checkout_form" id="checkout_form" encType="multipart/form-data" className="form-horizontal">

                                                <div className="step-sections" >
                                                    <div >
                                                        <div className="section-header">
                                                            <h2 className="section-title">Địa chỉ nhận hàng</h2>
                                                        </div>

                                                        <div className="section-content section-customer-information no-mb">
                                                            {!isLoggedIn && <>
                                                                <p className="section-content-text"> Bạn đã có tài khoản? <Link to='/account/login' >Đăng nhập</Link> </p>

                                                            </>}
                                                            {/* {isLoggedIn && userInfo && <>
                                                                <div className="fieldset" onChange={(event) => this.handleChangeInput(event)}>
                                                                    <div className="field required">
                                                                        <div className="field-input-wrapper">
                                                                            <label className="control-label field-label">Tên đầy đủ</label>
                                                                            <input type="text" name="Name" placeholder="Ví dụ: Nguyễn Văn A" className="field-input form-control" value={userInfo.Name} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="field required field-two-thirds ">
                                                                        <div className="field-input-wrapper">
                                                                            <label className="control-label field-label">Email</label>
                                                                            <input type="email" name="Email" placeholder="contact@yourdomain.com" className="field-input form-control" value={userInfo.Email} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="field required field-third ">
                                                                        <div className="field-input-wrapper">
                                                                            <label className="control-label field-label" >Điện thoại</label>
                                                                            <input type="text" name="Phone" placeholder="Ví dụ: 01234567890" className="field-input form-control" value={'12345677654'} />
                                                                        </div>
                                                                    </div>



                                                                    <div className="field required">
                                                                        <div className="field-input-wrapper">
                                                                            <label className="control-label field-label">Địa chỉ chi tiết</label>
                                                                            <input type="text" name="Address" placeholder="Ví dụ: Số 247, Cầu Giấy, Q. Cầu Giấy" className="field-input form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="field ">
                                                                        <div className="field-input-wrapper">
                                                                            <label className="control-label field-label">Lời nhắn</label>
                                                                            <textarea name="Note" rows={3} className="field-input form-control" placeholder="Ví dụ: Chuyển hàng ngoài giờ hành chính" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>} */}
                                                            <div className="fieldset" onChange={(event) => this.handleChangeInput(event)}>
                                                                <div className="field required">
                                                                    <div className="field-input-wrapper">
                                                                        <label className="control-label field-label">Tên đầy đủ</label>
                                                                        <input type="text" name="Name" placeholder="Ví dụ: Nguyễn Văn A" className="field-input form-control" value={customerInfo.Name} />
                                                                    </div>
                                                                </div>
                                                                <div className="field required field-two-thirds ">
                                                                    <div className="field-input-wrapper">
                                                                        <label className="control-label field-label">Email</label>
                                                                        <input type="email" name="Email" placeholder="contact@yourdomain.com" className="field-input form-control" value={customerInfo.Email} />
                                                                    </div>
                                                                </div>
                                                                <div className="field required field-third ">
                                                                    <div className="field-input-wrapper">
                                                                        <label className="control-label field-label" >Điện thoại</label>
                                                                        <input type="text" name="Phone" placeholder="Ví dụ: 01234567890" className="field-input form-control" value={customerInfo.Phone} />
                                                                    </div>
                                                                </div>



                                                                <div className="field required">
                                                                    <div className="field-input-wrapper">
                                                                        <label className="control-label field-label">Địa chỉ chi tiết</label>
                                                                        <input type="text" name="Address" placeholder="Ví dụ: Số 247, Cầu Giấy, Q. Cầu Giấy" className="field-input form-control" value={customerInfo.Address} />
                                                                    </div>
                                                                </div>
                                                                <div className="field ">
                                                                    <div className="field-input-wrapper">
                                                                        <label className="control-label field-label">Lời nhắn</label>
                                                                        <textarea name="Note" rows={3} className="field-input form-control" placeholder="Ví dụ: Chuyển hàng ngoài giờ hành chính" />
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="step-footer__by-step step-sections-footer" >
                                                            <div className="step-footer__by-step__flex">
                                                                <button type="button" className="step-footer-continue-btn btn btn-step" onClick={() => this.setState({ animationActive: true })} >
                                                                    <span className="btn-content">Tiếp tục đến phương thức thanh toán</span>
                                                                    <i className="btn-spinner icon icon-button-spinner" />
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`step-sections ${this.state.animationActive && "active"}`} onChange={(event) => this.handleChangeInput(event)} >
                                                    <div id="section-payment-method" className="section">
                                                        <div className="section-header">
                                                            <h2 className="section-title">Phương thức thanh toán</h2>
                                                        </div>
                                                        <div className="section-content" >
                                                            <div className="content-box" >
                                                                <div className="content-box-row">
                                                                    <div className="radio-wrapper">
                                                                        <label className="radio-label" >
                                                                            <div className="radio-input">
                                                                                <input className="input-radio" type="radio" name="PaymentMethod" value="COD" />
                                                                            </div>
                                                                            <span className="radio-label-primary">
                                                                                <strong>Thu tiền tại nhà (COD)</strong>
                                                                                <br />Khách hàng thanh toán bằng tiền mặt cho nhân viên giao hàng khi sản phẩm được chuyển tới địa chỉ nhận hàng</span>

                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="content-box" >
                                                                <div className="content-box-row">
                                                                    <div className="radio-wrapper">
                                                                        <label className="radio-label" >
                                                                            <div className="radio-input">
                                                                                <input className="input-radio" type="radio" name="PaymentMethod" value="Online Transfer" />
                                                                            </div>
                                                                            <span className="radio-label-primary">
                                                                                <strong>Phương thức quét mã QR</strong>
                                                                                <br />Khách hàng có thể thanh toán bằng cách chuyển tiền qua mã QR do chúng tôi cung cấp</span>

                                                                        </label>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="step-footer__by-step step-sections-footer" >
                                                        <div className="step-footer__by-step__flex">
                                                            <button id="submit_form_button" type="button" className="step-footer-continue-btn btn" onClick={() => this.handleOrder()}> Đặt hàng </button>
                                                            <a onClick={() => this.setState({ animationActive: false })} className="step-footer-previous-link btn-step-back"> Quay lại thông tin giao hàng </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                }


            </>
        )
    }
    async handleOrder() {
        //tt
        // đang chờ thanh toán, đagn xử lý, hoàn thành,đã hủy
        // đang xử lý, hoàn thành,đã hủy



        let { listItem } = this.state
        let { Name, Email, Phone, Address } = this.state.customerInfo;
        let { PaymentMethod, Note } = this.state;
        // Kiểm tra giá trị rỗng
        let isAnyValueEmpty = [Name, Email, Phone, Address, PaymentMethod].some(value => value === "");
        if (isAnyValueEmpty) {
            alert("Vui lòng điền đầy đủ thông tin");
        }

        else {
            let Customer = this.state.customerInfo
            if (!this.props.isLoggedIn) {
                Customer = { Name, Email, Phone, Address, UserID: this.props.guestID }
            }

            let status = 'Đang Chờ Xác Nhận'
            if (PaymentMethod !== 'COD') {
                status = "Đang Chờ Thanh Toán"
            }
            let Order = {
                Date: new Date(Date.now()).toLocaleDateString(),
                Status: status,
                TotalAmount: this.calcPrice() + fee,
                PaymentMethod: PaymentMethod,
                Note: Note
            };
            let Payment = {
                Amount: this.calcPrice() + fee,
                Date: new Date(Date.now()).toLocaleDateString(),
                Method: PaymentMethod,
                PaymentStatus: status
            }
            let OrderItems = listItem
            let data = { Customer, Order, OrderItems }
            if (PaymentMethod !== 'COD') {
                data = { Customer, Order, Payment, OrderItems }
            }
            console.log(data)

            let response = await createNewOrder(data)

            if (response.errCode === 0) {

                if (PaymentMethod !== "COD") {
                    alert(" Đang chuyển hướng đến trang thanh toán");
                    this.props.history.push({
                        pathname: "/processpayment",
                        state: response.OrderID
                    });
                } else {
                    toast.success(response.errMsg);
                    this.props.history.push("/");
                }
            } else {
                toast.warn(response.errMsg);
            }


        }





    }
    handleChangeInput(event) {
        let { name, value } = event.target;
        let copy = this.state.customerInfo
        if (name === 'Note' || name === 'PaymentMethod') {
            this.setState({
                [name]: value
            })
        } else {
            this.setState((prevState) => ({
                customerInfo: {
                    ...copy,
                    [name]: value
                }

            }));
        }

    }
    handleOrderSummaryToggle() {
        let element = document.getElementsByClassName("order-summary-toggle")[0];
        let element2 = document.getElementsByClassName("order-summary")[0]
        if (element.classList.contains("order-summary-toggle-hide")) {
            element.classList.remove("order-summary-toggle-hide");
            element.classList.add("order-summary-toggle-show");

            element2.classList.remove("order-summary-is-collapsed")
            element2.classList.add("order-summary-is-expanded")
        } else {
            element.classList.add("order-summary-toggle-hide");
            element.classList.remove("order-summary-toggle-show");
            element2.classList.remove("order-summary-is-expanded")
            element2.classList.add("order-summary-is-collapsed")
        }
    }




}
function mapStateToProps(state) {
    return {
        orderInfo: state.order.orderInfo,
        cartItems: state.cart.cartItems,
        products: state.product.products,
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        guestID: state.user.guestID,
        customerInfo: state.customer.customerInfo,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveOrderInfo: (info) => dispatch(actions.saveOrderInfo(info)),
        CreateNewOrder: (data) => dispatch(actions.CreateNewOrder(data)),
        getCustomerInfo: (CustomerID) => dispatch(actions.getCustomerInfo(CustomerID)),
        getNewNotification: (data) => dispatch(actions.getNewNotification(data)),
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(Orderpage));