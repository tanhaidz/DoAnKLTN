import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import * as actions from "../store/actions";
import "../styles/bootstrap.scss"
import "../styles/bread-crumb.scss"
import "../styles/index.scss"
import "../styles/main.scss"
import "../styles/product_option.scss"
import "../styles/products.scss";
import "../styles/swiper.scss";
import Header from '../components/Header/Header';
import { getProductDetail } from '../services/productService';
import { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import { CommonUtils } from '../utils';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
const aboutFields = ["id", "ProductName", "BrandName", "UnitPrice"]
const aboutFields1 = ["Mã sản phẩm", "Tên sản phẩm", "Thương hiệu", "Giá"]

const detailFields = ["Display", "Processor", "Memory", "OperatingSystem", "Camera", "Connectivity", "Battery", "Weight_Dimensions"]
const detailFields1 = ["Màn hình", "Bộ vi xử lý", "Bộ nhớ", "Hệ điều hành", "Máy ảnh", "Kết nối", "Pin", "Trọng lượng - Kích thước"]
function mapStateToProps(state) {
    return {
        product: state.product.product,
        orderInfo: state.order.orderInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getProductInfo: (ProductID) => dispatch(actions.getProductInfo(ProductID)),
        saveOrderInfo: (info) => dispatch(actions.saveOrderInfo(info)),
        addItemToCart: (item) => dispatch(actions.addItemToCart(item))
    };
}
class ProductDetailspage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: "description",
            thumbsSwiper: null,
            isShowDetail: false,
            product: this.props.product,
            selectedOption: "",
            quantity: 0 // Lưu trữ giá trị của input
        }
    }
    async componentDidMount() {
        const body = document.querySelector('body');
        body.className = 'productpage-detail';

        const { id } = this.props.match.params;
        console.log(this.props)
        await this.props.getProductInfo(id)
        let response = await getProductDetail(id)
        if (response.errCode === 0 && response.productDetail) {
            this.setState({
                productDetail: response.productDetail,
            })
        }


    }
    componentDidUpdate(prevProps) {
        if (prevProps.product !== this.props.product) {
            this.setState({
                product: this.props.product
            })
        }
    }
    handleTabClick = (tabName) => {
        this.setState({
            activeTab: tabName,
        });
    };
    render() {
        let { product, productDetail, activeTab, isShowDetail, selectedOption, quantity } = this.state;

        return (
            <>
                {productDetail && product &&
                    <>
                        <Header />

                        <section className="container nd-product-page product product-margin" itemScope itemType="http://schema.org/Product" style={{ marginTop: '200px' }}>

                            <div className="row nd-image-and-info-product">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-12 nd-mobile-padding">
                                    <div className="product-image-block relative">
                                        <img src={product.ImageURL} alt={product.ProductName} />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-12 details-pro">
                                    <div className="nd-info-product">
                                        <h1 className="title-head">{product.ProductName}</h1>
                                        <div className="price-box clearfix zw-price-box">
                                            {product.Discount ?
                                                <>
                                                    <span className="special-price">
                                                        <span className="price product-price zw-price">{CommonUtils.formatCurrency(product.DiscountedPrice)}</span>
                                                    </span>
                                                    <span className="old-price">
                                                        <del className="price product-price-old zw-old-price">{CommonUtils.formatCurrency(product.UnitPrice)}</del> </span> {/* Giá gốca */} <span className="save-price">Tiết kiệm: <span className="price product-price-save">-{product.Discount}%</span> <span> so với giá thị trường</span> </span>
                                                </> : <>
                                                    <span className="special-price">
                                                        <span className="price product-price zw-price">{CommonUtils.formatCurrency(product.UnitPrice)}</span>
                                                    </span>
                                                </>
                                            }
                                        </div>

                                        <div className="summary">

                                        </div>
                                        <div
                                            className="form-product nd-form-product ins-Drop"
                                            id='form-product'

                                        >
                                            <div id="product">
                                                <form className="form-product" id="add-to-cart-form">
                                                    <input
                                                        type="hidden"
                                                        defaultValue=""
                                                        className="product-option-id"
                                                        name="product_option_id" />
                                                    <div className="form-groups clearfix ">
                                                        <div className="qty-nd clearfix custom-btn-number ">
                                                            <label>Số lượng:</label>
                                                            <div className="custom custom-btn-numbers clearfix">
                                                                <button onClick={() => this.handleDecrease()} className="btn-minus btn-cts" type="button">
                                                                    <svg
                                                                        x="0px"
                                                                        y="0px"
                                                                        width="121.805px"
                                                                        height="121.804px"
                                                                        viewBox="0 0 121.805 121.804"
                                                                        xmlSpace="preserve">
                                                                        <path d="M7.308,68.211h107.188c4.037,0,7.309-3.272,7.309-7.31c0-4.037-3.271-7.309-7.309-7.309H7.308 C3.272,53.593,0,56.865,0,60.902C0,64.939,3.272,68.211,7.308,68.211z" />
                                                                    </svg>
                                                                </button>
                                                                <input

                                                                    type="text"
                                                                    name="quantity"
                                                                    value={quantity}
                                                                    size={2}
                                                                    id="input-quantity"
                                                                    className="form-control" />
                                                                <input type="hidden" name="product_id" defaultValue="" />
                                                                <button
                                                                    onClick={() => this.handleIncrease()}
                                                                    className="btn-plus btn-cts"
                                                                    type="button">
                                                                    <svg
                                                                        height="426.66667pt"
                                                                        viewBox="0 0 426.66667 426.66667"
                                                                        width="426.66667pt"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="btn-muangay" onClick={() => this.handleBuyNow()}>
                                                            <Link to="/order?type=buynow" >
                                                                <button id="button-buy" type="button" className="btn btn-buy-now" >Mua ngay</button>
                                                            </Link>



                                                        </div>
                                                        <div className="btn-mua" >
                                                            <button
                                                                id="button-cart"
                                                                className="btn btn-lg btn-gray btn-cart btn_buy"
                                                                onClick={(event) => this.handleAddToCart(event)}
                                                            >Thêm vào giỏ</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="clearfix" />
                            <div className="nd-product-tab">
                                <div className="row">
                                    <div className="details-product col-sm-12 col-xs-12 col-md-12">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                                                    onClick={() => this.handleTabClick('description')}>Mô tả</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className={`nav-link ${activeTab === 'attributes' ? 'active' : ''}`}
                                                    onClick={() => this.handleTabClick('attributes')}>Thuộc tính</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className={`tab-pane fade show ${activeTab === 'description' ? 'active' : ''}`}>
                                                <p>{product && product.Description ? product.Description : ""}</p>
                                            </div>
                                            <div
                                                className={`tab-pane fade show ${activeTab === 'attributes' ? 'active' : ''}`}>
                                                <div style={{ overflowX: "auto" }}>
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <strong>Khuyễn mãi-Ưu đãi</strong>
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Khuyễn mãi-Ưu đãi</td>
                                                                <td>{product.Discount}%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <strong>Thông tin cơ bản</strong>
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>{aboutFields.map((field, i) => {
                                                            console.log(field)
                                                            return (<>
                                                                <tr key={i}>
                                                                    <td>{aboutFields1[i]}</td>{field === "UnitPrice" ? <td>{CommonUtils.formatCurrency(product.DiscountedPrice)}</td> : <td>{product[field]}</td>}</tr>
                                                            </>)
                                                        })}</tbody>
                                                    </table>

                                                    {isShowDetail &&
                                                        <>
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <td colSpan={2}>
                                                                            <strong>Thông tin cơ bản</strong>
                                                                        </td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>{detailFields.map((field, i) => {
                                                                    console.log(field)
                                                                    return (<>
                                                                        <tr key={i}>
                                                                            <td>{detailFields1[i]}</td>
                                                                            <td>{productDetail[field]}</td>
                                                                        </tr>
                                                                    </>)
                                                                })}</tbody>
                                                            </table>
                                                        </>

                                                    }
                                                    <span onClick={() => this.setState({ isShowDetail: !isShowDetail })}>{!isShowDetail ? "Xem thêm" : "Ẩn chi tiết"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <Footer />


                    </>
                }
            </>
        );
    }
    handleAddToCart = (event) => {
        let { product, quantity } = this.state
        event.preventDefault();
        this.props.addItemToCart({ ProductID: product.id, Quantity: quantity, TotalPrice: product.DiscountedPrice * quantity })
    }

    handleChangeProductOption = (value) => {
        this.setState({
            selectedOption: value
        })
    }
    handleBuyNow = () => {
        let { DiscountedPrice, UnitPrice, ImageURL, id, ProductName } = this.props.product
        let { quantity } = this.state
        let orderProductInfo = []
        orderProductInfo.push({
            DiscountedPrice,
            UnitPrice,
            ImageURL,
            ProductID: id,
            ProductName,
            Quantity: quantity
        })

        this.props.saveOrderInfo({ orderProductInfo: orderProductInfo })
    }
    handleDecrease = () => {


        this.setState((prevState) => ({
            quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0 // Giảm giá trị của input
        }));
    };
    handleIncrease = () => {
        let { QuantityInStock } = this.props.product
        this.setState((prevState) => {
            if (QuantityInStock >= prevState.quantity + 1) {
                this.setState({
                    quantity: prevState.quantity + 1 // Tăng giá trị của input
                })
            } else {
                alert("Số lượng hàng tồn kho không đủ")
            }


        });
    };

}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProductDetailspage);
