import React, { Component } from 'react'
import { withCookies } from 'react-cookie';

import { connect } from 'react-redux';
import * as actions from "../store/actions";
import CartProductCompoment from './CartProductCompoment';
import c from '../pages/ProductDetailspage';
import { CommonUtils } from '../utils';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function mapStateToProps(state) {
    return {
        cartItems: state.cart.cartItems,
        products: state.product.products,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeItemCart: (item) => dispatch(actions.removeItemCart(item)),
        updateItemCart: (item) => dispatch(actions.updateItemCart(item)),
        saveChanges: (item) => dispatch(actions.saveChange(item)),
    };
}

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: this.props.cartItems,
            isShowCart: false,

        }

    }
    componentDidMount() {
        const updatedCartItems = this.props.cartItems.map((cartItem) => {
            const matchingProduct = this.props.products.filter((product) => product.id === +cartItem.ProductID)

            if (matchingProduct) {
                let copy = matchingProduct[0]

                return {
                    ...cartItem, ...copy, TotalPrice: copy.DiscountedPrice * cartItem.Quantity
                }
            }
            return cartItem;
        });

        console.log(updatedCartItems)

        this.setState({ cartItems: updatedCartItems });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.cartItems !== this.props.cartItems) {
            const updatedCartItems = this.props.cartItems.map((cartItem) => {
                const matchingProduct = this.props.products.filter((product) => product.id === +cartItem.ProductID)
                if (matchingProduct) {
                    let copy = matchingProduct[0]

                    return {
                        ...cartItem, ...copy, TotalPrice: copy.DiscountedPrice * cartItem.Quantity
                    }
                }
                return cartItem;
            });

            this.props.saveChanges(this.props.cartItems)
            this.setState({ cartItems: updatedCartItems });
        }
    }
    toggleCart = () => {
        this.setState({
            isShowCart: false
        })
    };


    calcTotalPrice = () => {
        let { cartItems } = this.state
        let totalPrice = 0;
        if (cartItems && cartItems.length > 0) {
            cartItems.map((cartItem) => {
                totalPrice += +cartItem.TotalPrice
            })
        }

        return totalPrice
    }

    render() {
        let { cartItems } = this.state
        return (
            <>

                <li className="cart-drop" onClick={() => this.setState({ isShowCart: true })}>
                    <div className="icon">
                        <a className="nd-header-cart" title="Giỏ hàng">
                            <svg enableBackground="new 0 0 407.453 407.453" version="1.1" viewBox="0 0 407.45 407.45" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                <g fill="#010002">
                                    <path d="m255.1 116.52c4.487 0 8.129-3.633 8.129-8.129 0-4.495-3.642-8.129-8.129-8.129h-111.61c-4.487 0-8.129 3.633-8.129 8.129 0 4.495 3.642 8.129 8.129 8.129h111.61z" />
                                    <path d="m367.06 100.26h-55.372c-4.487 0-8.129 3.633-8.129 8.129 0 4.495 3.642 8.129 8.129 8.129h47.243v274.68h-310.41v-274.68h44.536c4.487 0 8.129-3.633 8.129-8.129 0-4.495-3.642-8.129-8.129-8.129h-52.664c-4.487 0-8.129 3.633-8.129 8.129v290.94c0 4.495 3.642 8.129 8.129 8.129h326.67c4.487 0 8.129-3.633 8.129-8.129v-290.94c0-4.495-3.634-8.128-8.129-8.128z" />
                                    <path d="m282.59 134.8c4.487 0 8.129-3.633 8.129-8.129v-59.273c-1e-3 -37.156-40.115-67.394-89.618-67.394-49.308 0-89.414 30.238-89.414 67.394v59.274c0 4.495 3.642 8.129 8.129 8.129s8.129-3.633 8.129-8.129v-59.274c0-28.198 32.823-51.137 73.36-51.137 40.334 0 73.157 22.939 73.157 51.137v59.274c-1e-3 4.495 3.633 8.128 8.128 8.128z" />
                                    <path d="m98.892 147.57c0 11.526 9.389 20.907 20.923 20.907s20.923-9.38 20.923-20.907c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65-2.569 0-4.666-2.089-4.666-4.65 0-4.495-3.642-8.129-8.129-8.129s-8.127 3.634-8.127 8.129z" />
                                    <path d="m282.59 168.47c11.534 0 20.923-9.38 20.923-20.907 0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65s-4.666-2.089-4.666-4.65c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c2e-3 11.526 9.39 20.907 20.925 20.907z" />
                                </g>
                            </svg>
                            <span className="count_item_pr">{this.props.cartItems && this.props.cartItems.length > 0 ? this.props.cartItems.length : 0}</span>
                        </a>
                    </div>
                </li>
                <div className={`cart_sidebar ${this.state.isShowCart && 'active'}`} id="cart-sidebars">
                    <div className="cart-content">
                        <div className="clearfix cart_heading">
                            <h4 className="cart_title">Giỏ hàng</h4>
                            <div className="cart_btn-close" onClick={() => this.toggleCart()} title="close">
                                <svg className="Icon Icon--close" viewBox="0 0 16 14">
                                    <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <form id="cartformpage">
                            <div className="cart_body">
                                {cartItems && cartItems.length > 0 ?
                                    cartItems.map((item, i) => {
                                        return (
                                            <>
                                                <CartProductCompoment item={item} removeItemCart={this.props.removeItemCart} updateItemCart={this.props.updateItemCart} />

                                            </>
                                        )
                                    })
                                    : <>
                                        <div className="cart-empty">
                                            <span className="empty-icon">
                                                <i className="ico ico-cart" />
                                            </span>
                                            <div className="btn-cart-empty">
                                                <a className="btn btn-default" href="/" title="Tiếp tục mua hàng">Tiếp tục mua hàng</a>
                                            </div>
                                        </div>
                                    </>}

                            </div>
                        </form>
                        <div className="cart-footer" style={{ display: cartItems && cartItems.length > 0 ? 'block' : 'none' }}>
                            <hr />
                            <div className="clearfix">
                                <div className="cart__subtotal">
                                    <div className="cart__col-6">Tổng tiền:</div>
                                    <div className="text-right cart__totle">
                                        <span className="total-price">{CommonUtils.formatCurrency(this.calcTotalPrice())}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cart__btn-proceed-checkout-dt"><Link to='/order?type=buyfromcart'>
                                <button type="button" className="button btn btn-default cart__btn-proceed-checkout" id="btn-proceed-checkout" title="Thanh toán">Thanh toán</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
