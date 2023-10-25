// App.js
import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as actions from "./store/actions";
import { connect } from 'react-redux'
import { getAllProducts } from './services/productService';
import { CommonUtils } from './utils';
import Homepage from './pages/Homepage';
import Productspage from './pages/Productspage';
import ProductDetailspage from './pages/ProductDetailspage';
import Orderpage from './pages/Orderpage';
import Userpage from './pages/Userpage';
import Login from './pages/Login';
import Adminpage from './pages/Adminpage';
import './App.css'
import Aboutpage from './pages/Aboutpage';
import Newspage from './pages/Newspage';
import GuestManage from './pages/GuestManage';
import Payment from './pages/Payment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changedLogin: false
    }
  }
  async componentDidMount() {



    const fetchedProducts = await getAllProducts();
    if (fetchedProducts.errCode === 0 && fetchedProducts.products && fetchedProducts.products.length > 0) {
      let products = fetchedProducts.products.map(product => {
        let DiscountedPrice = CommonUtils.discountPrice(
          product.UnitPrice,
          product.Discount
        );

        return {
          ...product,
          DiscountedPrice
        }
      })

      this.props.fetchProductsSuccess(products);
    }
    if (this.props.isLoggedIn) {
      await this.props.fetchShoppingCart(this.props.userInfo.id)
    } else {
      this.props.createNewGUEST()
      await this.props.fetchShoppingCart(this.props.guestID)
    }

  }
  async componentDidUpdate(prevProps) {
    if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
      if (this.props.isLoggedIn) {
        await this.props.fetchShoppingCart(this.props.userInfo.id)
      } else {
        this.props.createNewGUEST()
        await this.props.fetchShoppingCart(this.props.guestID)
      }
      this.setState({
        changedLogin: !this.state.changedLogin
      })

    }
  }
  render() {

    return (
      <>
        <Router>
          <ToastContainer style={{ "position": "fixed", zIndex: "9999", top: "0" }} />
          <Switch>
            {this.props.isLoggedIn && this.props.userInfo && this.props.userInfo.RoleKeyMap === "ADMIN" ?
              <Route path="/" render={(props) => {

                return (
                  <Adminpage {...props} />
                )

              }} /> : <>
                <Route exact path="/" component={Homepage} />

                <Route exact path="/products" component={Productspage} />
                <Route exact path="/user" component={Userpage} />
                <Route path="/product-detail/:id" component={ProductDetailspage} />
                <Route path="/order" component={Orderpage} />
                <Route path="/account/login" component={Login} />
                <Route path='/about' component={Aboutpage} />
                <Route path='/news' component={Newspage} />
                <Route path='/guest-manage' component={GuestManage} />
                <Route path='/processpayment' component={Payment} />
              </>
            }






          </Switch>

        </Router>



      </>




    );
  }


};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsSuccess: (products) => dispatch(actions.fetchProductsSuccess(products)),
    fetchShoppingCart: (userID) => dispatch(actions.fetchShoppingCart(userID)),
    createNewGUEST: () => dispatch(actions.createNewGUEST()),
  }



}
const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
    isLoggedIn: state.user.isLoggedIn,
    guestID: state.user.guestID,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);