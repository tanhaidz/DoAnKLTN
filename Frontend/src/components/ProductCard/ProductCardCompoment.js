import React, { Component } from 'react';
import { connect } from 'react-redux';
import SalePromotionCompoment from '../SalePromotionCompoment';
import { CommonUtils } from '../../utils';
import { Link } from 'react-router-dom';
// import "./ProductCard.scss"
function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class ProductCardCompoment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        let { product } = this.props;

        return (
            <>
                {product === null ? <>
                </> :
                    <>

                        <div className="item_product_main">
                            <div className="product-block-item">
                                <SalePromotionCompoment discount={product.Discount} />
                                <div className="product-transition" style={{ "height": "227px" }}>
                                    <Link
                                        to={`/product-detail/${product.id}`}
                                        className="product-thumb">

                                        <img className="product-thumbnail lazy loaded" src={product.ImageURL} alt="image error" style={{ height: "100%" }} />
                                    </Link>

                                    <div className="product-action">

                                        <a className="action btn-compare setWishlist " tabindex="0" title="Thêm vào yêu thích">
                                            <svg enable-background="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                            </svg>
                                        </a>
                                        <a onClick={() => this.props.handleAddtoCart(product)} className="action add_to_cart cart-button" rel="nofollow" title="Thêm vào giỏ hàng">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -31 512.00026 512" width="25px">
                                                <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0">
                                                </path>
                                                <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0">
                                                </path>
                                                <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="product-info">

                                    <Link to={`/product-detail/${product.ProductID}`} >{product.ProductName}</Link>
                                    <div className="product__price">
                                        {product.Discount !== "0" ?

                                            <>
                                                <span className="price">{CommonUtils.formatCurrency(product.DiscountedPrice)}</span>
                                                <span className="old-price">{CommonUtils.formatCurrency(product.UnitPrice)}</span>
                                            </> :

                                            <>
                                                <span className="price">{CommonUtils.formatCurrency(product.UnitPrice)}</span>
                                            </>
                                        }

                                    </div>
                                </div>


                            </div>
                        </div>
                    </>

                }
            </>
        );
    }
    // handleAddtoCart(product) {
    //     let { cookies } = this.props;
    //     //         let cartList = []
    //     // let cartListCapy=null
    //     //         const cartItems = cookies.get('cart');
    //     //         if (cartItems) {
    //     //             cartList = JSON.parse(cartItems)
    //     //             console.log(1)
    //     //         } else {
    //     //             cartList.push(product)
    //     //             cartListCapy = JSON.stringify(cartList)
    //     //             console.log(cartListCapy)

    //     //         }
    //     //         console.log(cartList)

    //     //iả sử bạn có một mảng chứa các đối tượng
    //     // const cartItems = [
    //     //     { id:3, name: 'Product 1', price: 10 },

    //     // ];

    //     // // Chuyển đổi mảng thành chuỗi JSON
    //     // const cartItemsJSON = JSON.stringify(cartItems);

    //     // // Ghi giá trị chuỗi JSON vào cookie

    //     // cookies.set('ShoppingCarts', encodeURIComponent(cartItemsJSON), { path: '/' });
    //     // let cartItems = []
    //     // let cartItemsJSON = ""
    //     const formatProduct = { ProductID: product.ProductID, ProductName: product.ProductName, Price: product.UnitPrice, Quantity: 1, ImageURL: product.ImageURL };
    //     // let a = cookies.get('ShoppingCarts');

    //     // if (!a) {
    //     //     cartItems.push(formatProduct)
    //     //     cartItemsJSON = JSON.stringify(cartItems);
    //     // } else {
    //     //     const decodedCookieValue = decodeURIComponent(a);
    //     //     cartItems = JSON.parse(decodedCookieValue);
    //     //     const existingProduct = cartItems.find(item => item.ProductID === formatProduct.ProductID);
    //     //     if (existingProduct) {
    //     //         existingProduct.Quantity += 1; // Tăng số lượng nếu sản phẩm đã tồn tại trong giỏ hàng
    //     //     } else {
    //     //         cartItems.push(formatProduct); // Thêm mới vào giỏ hàng nếu sản phẩm chưa tồn tại
    //     //     }
    //     // }
    //     // cartItemsJSON = JSON.stringify(cartItems);

    //     // // Ghi giá trị chuỗi JSON vào cookie
    //     // cookies.set('ShoppingCarts', encodeURIComponent(cartItemsJSON), { path: '/' });





    // }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProductCardCompoment);