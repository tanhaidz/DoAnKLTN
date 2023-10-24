import React, { Component } from 'react'
import { CommonUtils } from '../utils';
import { connect } from 'react-redux';
import * as actions from "../store/actions";
class OrderCardCompoment extends Component {
 constructor(props) {
  super(props);
  this.state = {
   groupedOrderItems: this.props.groupedOrderItems,
   listOrders: this.props.listOrders,
   modal: false,

  }
 }

 componentDidUpdate(prevProps) {
  if (prevProps.listOrders !== this.props.listOrders) {
   this.setState({ listOrders: this.props.listOrders })
  }
 }
 findProductById(productId) {

  const product = this.props.products.find((product) => product.id === productId);

  if (product) {

   return {
    ProductName: product.ProductName,
    DiscountedPrice: product.DiscountedPrice,
    ImageURL: product.ImageURL,
    Discount: product.Discount,
   }
  }
  return '';
 }
 toggle = () => {
  this.setState({ modal: !this.state.modal })
 }
 handleCancelOrder = async (order) => {
  let { groupedOrderItems } = this.props
  const updatedOrder = {
   ...order,
   Status: "Đã hủy"
  };
  const orderID = order.id;
  const orderItems = groupedOrderItems[orderID] || [];
  console.log(updatedOrder, orderItems)
  await this.props.cancelOrder({ updatedOrder })
  window.location.reload();

 };
 render() {
  const { groupedOrderItems, listOrders } = this.state;
  console.log(groupedOrderItems, listOrders)

  return (
   <>
    {listOrders.length > 0 ? (
     listOrders.map(order => (
      <div className="order-container" key={order.id}>
       {groupedOrderItems[order.id] && groupedOrderItems[order.id].map((item, j) => {
        const product = this.findProductById(item.ProductID); // Tìm tên sản phẩm

        return (
         <div className="order-item" key={j}>
          <div className="line" />
          <section>
           <div className="item">
            <div className="item-info">
             <img
              src={product.ImageURL}
              className="image"
              alt=""
              tabIndex={0}
             />
             <div className="item-detail">
              <div className="info">
               <span tabIndex={0}>{product.ProductName}</span>
              </div>
              <div className="quantity" tabIndex={0}>
               {item.Quantity}
              </div>
             </div>
            </div>
            <div className="item-price" tabIndex={0}>
             {product.Discount > 0 ?
              <div className="product__price">
               <span className="old-price">
                {CommonUtils.formatCurrency(+item.UnitPrice)}
               </span>
               <span className="unit-price">
                {CommonUtils.formatCurrency(+product.DiscountedPrice)}
               </span>
              </div> : <span className="unit-price">
               {CommonUtils.formatCurrency(+product.DiscountedPrice)}
              </span>
             }

            </div>
           </div>
          </section>
         </div>
        );
       })}
       <div className="order-total-price">
        <div className="total-price-container">
         <label className="total-price">Thành tiền:</label>
         <div className="price">
          {CommonUtils.formatCurrency(+order.TotalAmount)}
         </div>
        </div>
       </div>

       {order.Status === "Đang xử lý" || order.Status === "Đang chờ thanh toán" ?



        <div className="order-option">
         <div className="buy-again">
          <button className="stardust-button stardust-button--primary WgYvse btn-cancel-order" onClick={() => this.handleCancelOrder(order)}>
           Hủy đơn
          </button>
         </div>
        </div>
        :
        <div className="order-option">
         <div className="buy-again">
          <button className="stardust-button stardust-button--primary WgYvse btn-buy-again" onClick={() => this.setState({ modal: true })}>
           Mua lại
          </button>
         </div>
        </div>

       }

      </div>

     ))
    ) : (
     <div>Không có đơn hàng nào</div>
    )}
   </>
  );
 }
}
function mapStateToProps(state) {
 return {

 };
}

function mapDispatchToProps(dispatch) {
 return {
  cancelOrder: (data) => dispatch(actions.cancelOrder(data))
 };
}

export default connect(
 mapStateToProps, mapDispatchToProps
)(OrderCardCompoment);
