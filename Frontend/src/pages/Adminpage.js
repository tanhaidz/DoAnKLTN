import React, { Component } from 'react';
import { connect } from 'react-redux';
import Siderbar from '../components/Sidebar/SiderbarCompoment';
import './Adminpage.scss'
import TopNav from '../components/TopNav/TopNavCompoment';
import { Route, Switch } from 'react-router-dom';
import * as actions from "../store/actions";
import 'boxicons/css/boxicons.min.css';
import CustomerManage from '../sections/Admin/CustomerManage';
import ProductManage from '../sections/Admin/ProductManage';
import OrderManage from '../sections/Admin/OrderManage';
import CategoryMangage from '../sections/Admin/CategoryMangage';
import DiscountManage from '../sections/Admin/DiscountManage';
import DashbardManage from '../sections/Admin/DashbardManage';
function mapStateToProps(state) {
    return {
        userInfo: state.user.userInfo,
        customers: state.admin.customers,
        products: state.admin.products,
        orders: state.admin.orders,
        productTypes: state.admin.productTypes,
        productDiscounts: state.admin.productDiscounts,
        notifyArr: state.notification.notifyArr,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllData: () => dispatch(actions.getAllData()),
        updateProduct: (data) => dispatch(actions.updateProduct(data)),
        changeOrderStatus: (data) => dispatch(actions.changeOrderStatus(data)),
        updateProductType: (data) => dispatch(actions.updateProductType(data)),
        updateProductDiscount: (data) => dispatch(actions.updateProductDiscount(data)),
        signout: () => dispatch(actions.signout()),

    };
}

class Adminpage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

        const body = document.querySelector('body');
        body.className = 'adminpage';
        await this.props.getAllData()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.customers !== this.props.customers) {
            this.setState({ customers: this.props.customers });
        }
        if (prevProps.products !== this.props.products) {

            this.setState({ products: this.props.products });
        }
        if (prevProps.orders !== this.props.orders) {
            this.setState({ orders: this.props.orders });
        }
        if (prevProps.productTypes !== this.props.productTypes) {
            this.setState({ productTypes: this.props.productTypes });
        }
        if (prevProps.productDiscounts !== this.props.productDiscounts) {
            this.setState({ productDiscounts: this.props.productDiscounts });
        }

    }
    render() {
        let { userInfo, updateProduct, changeOrderStatus, updateProductType, updateProductDiscount, signout, notifyArr } = this.props;
        let { customers, products, orders, productTypes, productDiscounts } = this.state;
        console.log(this.props.location.state)
        let CustomerID = ''
        if (this.props.location.state && this.props.location.state.CustomerID) {
            CustomerID = this.props.location.state.CustomerID
        }
        console.log("check customer", CustomerID)
        return (
            <>
                {customers && products && orders && productDiscounts && productTypes &&
                    <div className={`layout `}>

                        <Siderbar {...this.props} />
                        <div className="layout__content">
                            <TopNav
                                adminInfo={userInfo.Name}
                                signout={signout}
                                notifyArr={notifyArr}
                            />
                            <div className="layout__content-main">
                                <Switch>
                                    <Route exact path='/' render={() => (<DashbardManage products={products} customers={customers} orders={orders} />)} />
                                    <Route path='/customers' render={() => (<CustomerManage customers={customers} />)} />
                                    <Route path='/products' render={() => (<ProductManage products={products} types={productTypes} updateProduct={updateProduct} />)} />
                                    <Route path='/orders' render={() => (<OrderManage orders={orders} changeOrderStatus={changeOrderStatus} CustomerID={CustomerID} products={this.props.products} />)} />
                                    <Route path='/categories' render={() => (<CategoryMangage productTypes={productTypes} updateProductType={updateProductType} />)} />
                                    <Route path='/discounts' render={() => (<DiscountManage productDiscounts={productDiscounts} updateProductDiscount={updateProductDiscount} products={products} />)} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                }

            </>

        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Adminpage);