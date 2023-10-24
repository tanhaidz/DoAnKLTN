import React, { Component } from 'react'
import { connect } from 'react-redux';
import './OrderCard.scss'
import { CommonUtils } from '../../utils'
import * as actions from "../../store/actions";
class OrderCard extends Component {
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
    if (order.Status === 'Hoàn thành' || order.Status === 'Đã hủy') {
      let { groupedOrderItems } = this.state
      let listItem = groupedOrderItems[order.id].map((item, j) => {
        const product = this.findProductById(item.ProductID);
        return {
          ...item,
          ...product
        }
      })
      // let { DiscountedPrice, UnitPrice, ImageURL, id, ProductName } = this.props.product
      // let { quantity } = this.state
      // let orderProductInfo = {
      //   DiscountedPrice,
      //   UnitPrice,
      //   ImageURL,
      //   ProductID: id,
      //   ProductName,
      //   Quantity: quantity
      // };
      await this.props.saveOrderInfo({ orderProductInfo: listItem })
      window.location.href = '/order?type=buynow';
    } else {
      let { groupedOrderItems } = this.props
      const updatedOrder = {
        ...order,
        Status: "Đã hủy"
      };
      const orderID = order.id;
      const orderItems = groupedOrderItems[orderID] || [];
      console.log(updatedOrder, orderItems)
      await this.props.cancelOrder(updatedOrder)
      window.location.reload();
    }


  };
  render() {
    const { groupedOrderItems, listOrders } = this.state;

    return (
      <>
        {listOrders && listOrders.length > 0 && listOrders.map((order) => (
          <div className="col-12 pb-5">
            <div className="card" style={{ borderRadius: '10px' }}>
              <div className="card-body p-4">
                <div className="order-detail ">


                  <p className="text-muted mb-0">Ngày đặt : {order.Date}</p>
                  <p className="text-muted mb-0 status ">{order.Status}</p>
                </div>
                {groupedOrderItems[order.id] && groupedOrderItems[order.id].map((item, j) => {
                  const product = this.findProductById(item.ProductID); // Tìm tên sản phẩm

                  return (
                    <div className="card shadow-0 border mb-4">
                      <div className="card-body">
                        <div className="row" style={{ justifyContent: 'space-between' }}>
                          <div className="col-5 align-items-center" style={{ display: 'flex' }}>
                            <div className="col-2 p-2">
                              <img src={product.ImageURL}
                                className="img-fluid" alt="Phone" />
                            </div>
                            <div className="col-10 " style={{ display: 'flex', flexDirection: 'column' }}>
                              <div className="col-12">
                                <p className="text-muted mb-0">{product.ProductName}</p>
                              </div>
                              <div className="col-12">
                                <p className="text-muted mb-0 small">Số lượng: {item.Quantity}</p>
                              </div>
                            </div>

                          </div>


                          <div className="product__price col-2 d-flex align-items-center">
                            {product.Discount > 0 ? <>
                              <span className="old-price">
                                {CommonUtils.formatCurrency(+item.UnitPrice * +item.Quantity)}
                              </span>
                              <span className="unit-price">
                                {CommonUtils.formatCurrency(+product.DiscountedPrice * +item.Quantity)}
                              </span>
                            </>

                              : <span className="unit-price">
                                {CommonUtils.formatCurrency(+product.DiscountedPrice)}
                              </span>
                            }
                          </div>

                        </div>


                      </div>
                    </div>
                  )

                })}

                <div className="order-total-price">
                  <div className="total-price-container">
                    <label className="total-price">Thành tiền:</label>
                    <div className="price">
                      {CommonUtils.formatCurrency(+order.TotalAmount)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-0 px-4 py-3 d-flex justify-content-center" style={{ backgroundColor: '#a8729a', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }} onClick={() => this.handleCancelOrder(order)}>
                {order.Status === 'Hoàn thành' || order.Status === 'Đã hủy' ?
                  <h5 className='text-white text-uppercase mb-0 text-align-center'>Mua lại</h5> :
                  <h5 className='text-white text-uppercase mb-0 text-align-center' >Hủy đơn</h5>
                }

              </div>
            </div>
          </div>
        ))}
        {listOrders && listOrders.length === 0 && <div className='d-flex justify-content-center'>Không có đơn hàng nào!</div>}
      </>


    )
  }
}
function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    cancelOrder: (data) => dispatch(actions.cancelOrder(data)),
    saveOrderInfo: (info) => dispatch(actions.saveOrderInfo(info)),
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(OrderCard);