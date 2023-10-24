import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderCardCompoment from '../components/OrderCardCompoment';
import * as actions from "../store/actions";
import OrderCard from '../components/OrderCard/OrderCard';
function mapStateToProps(state) {
 return {
  groupedOrderItems: state.order.groupedOrderItems,
  listOrders: state.order.listOrders,
  products: state.product.products,
  guestID: state.user.guestID
 };
}

function mapDispatchToProps(dispatch) {
 return {
  getOrder: (customerID) => dispatch(actions.getOrder(customerID)),
 };
}

class GuestManage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   groupedOrderItems: this.props.groupedOrderItems,
   filteredOrders: this.props.listOrders,
   indexNav: 0,
   activeKey1: "0",
   listOrders: this.props.listOrders
  }
 }
 async componentDidMount() {
  const body = document.querySelector('body');
  body.className = 'accountpage';
  console.log(this.props.customerInfo)
  await this.props.getOrder(this.props.guestID)
 }
 componentDidUpdate(prevProps, prevState) {
  if (prevProps.groupedOrderItems !== this.props.groupedOrderItems) {
   let { groupedOrderItems, products } = this.props
   this.setState({
    groupedOrderItems: this.props.groupedOrderItems
   })
  }
  if (prevProps.listOrders !== this.props.listOrders) {
   this.setState({ listOrders: this.props.listOrders })
  }
  if (prevState.activeKey1 !== this.state.activeKey1) {
   let filteredOrders = this.filterOrders(this.state.activeKey1)
   this.setState({
    filteredOrders: filteredOrders
   })
  }
 }
 componentWillUnmount() {
  console.log(12345)
 }
 handleClickNav(event) {
  const subNavs = document.getElementsByClassName('sub-nav');
  for (let i = 0; i < subNavs.length; i++) {
   subNavs[i].classList.remove('active');
  }
  event.target.classList.add('active');
  this.setState({
   activeKey1: event.target.getAttribute('data-key')
  })


 }
 filterOrders = (keyword) => {
  if (this.props.listOrders && this.props.listOrders.length > 0) {
   console.log("check", this.props.listOrders)
   let filteredOrders = this.props.listOrders.filter(order => order.Status === keyword);
   if (keyword === "") {
    filteredOrders = this.props.listOrders
   }
   return filteredOrders
  }
  return []

 }
 render() {
  const { filteredOrders, groupedOrderItems } = this.state;
  return (
   <>
    {groupedOrderItems && filteredOrders &&
     <div className="main-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="main-content-container" role="main">
       <div style={{ display: 'contents' }}>
        <div className="groups">
         <section className="header-nav" aria-role="tablist" onClick={(event) => this.handleClickNav(event)}>
          <a className="sub-nav active" data-key={""}>
           <span className="sub-name">Tất cả</span>
          </a>
          <a className="sub-nav" data-key={"Đang chờ xác nhận"}>
           <span className="sub-name">Đang chờ xác nhận</span>
          </a>
          <a className="sub-nav" data-key={"Đang chờ thanh toán"}>
           <span className="sub-name">Đang chờ thanh toán</span>
          </a>
          <a className="sub-nav" data-key={"Đang xử lý"}>
           <span className="sub-name">Đang xử lý</span>
          </a>
          <a className="sub-nav" data-key={"Hoàn thành"}>
           <span className="sub-name">Hoàn thành</span>
          </a>
          <a className="sub-nav" title="Đã hủy" data-key={"Đã hủy"}>
           <span className="sub-name">Đã hủy</span>
          </a>
         </section>

         <main>

          <OrderCard groupedOrderItems={groupedOrderItems} products={this.props.products} listOrders={filteredOrders} />
         </main>


        </div>
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
)(GuestManage);