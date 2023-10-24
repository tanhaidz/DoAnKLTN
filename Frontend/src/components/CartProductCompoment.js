import React, { Component } from 'react';
import { CommonUtils } from '../utils';

export default class CartProductCompoment extends Component {
    handleDeleteProduct = () => {
        const { item, removeItemCart } = this.props;
        removeItemCart(item);
    };

    handleChangeQuantity = (change) => {
        const { item, updateItemCart } = this.props;
        const { Quantity } = item;
        if (Quantity + change > 0) {
            const updatedItem = {
                ...item,
                Quantity: Quantity + change,
                TotalPrice: item.TotalPrice + item.DiscountedPrice * change
            };
            updateItemCart(updatedItem);
        }
    };
    render() {
        const { item } = this.props;

        return (
            <div className="clearfix cart_product">
                <a className="cart_image">
                    <img src={item.ImageURL} alt={item.ProductName} />
                </a>
                <div className="cart_info">
                    <div className="cart_name">
                        <a href="https://sfresh.w2.exdomain.net/trai-cam-m-7853-t" title="Trái cam mật">{item.ProductName}</a>
                    </div>
                    <div className="row-cart-left">
                        <div className="cart_item_name">
                            <label className="cart_size variant-title-popup" />
                            <div>
                                <label className="cart_quantity">Số lượng</label>
                                <div className="cart_select">
                                    <div className="input-group-btn quantity-partent">
                                        <button className="btn-minus" type="button" onClick={() => this.handleChangeQuantity(-1)}>–</button>
                                        <input type="text" maxLength={3} min={0} className="input-text number-sidebar item-quantity" name="quantity" size={1} value={item.Quantity} readOnly />
                                        <button className="btn-plus" type="button" onClick={() => this.handleChangeQuantity(1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right cart_prices">
                            <div className="cart__price">
                                <span className="cart__sale-price">{CommonUtils.formatCurrency(+item.DiscountedPrice * +item.Quantity)}</span>
                            </div>
                            <a className="cart__btn-remove remove-item-cart" onClick={this.handleDeleteProduct} title="Bỏ sản phẩm">Bỏ sản phẩm</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}