import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResetPasswordCompoment from '../components/ResetPasswordCompoment';
import * as actions from "../store/actions";
import './profile.scss'
import './userOrder.scss'


import Header from '../components/Header/Header';
import UserProfileCompoment from '../components/UserProfile/UserProfileCompoment';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import OrderCard from '../components/OrderCard/OrderCard';
import { toast } from 'react-toastify';
function mapStateToProps(state) {
  return {
    userInfo: state.user.userInfo,
    errMsg: state.user.errMsg,
    customerInfo: state.customer.customerInfo,
    groupedOrderItems: state.order.groupedOrderItems,
    products: state.product.products,
    listOrders: state.order.listOrders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: (id) => dispatch(actions.deleteUser(id)),
    signout: () => dispatch(actions.signout()),
    getOrder: (customerID) => dispatch(actions.getOrder(customerID)),
  };
}

class Userpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexNav: 0,
      activeKey1: "0",
      activeKey2: "5",
      isShowSubNav: false,
      userInfo: this.props.userInfo,
      modal: false,
      groupedOrderItems: this.props.groupedOrderItems,
      filteredOrders: this.props.listOrders,
    }
  }

  async componentDidMount() {
    const body = document.querySelector('body');
    body.className = 'accountpage';
    console.log(this.props.userInfo)
    await this.props.getOrder(this.props.userInfo.id)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userInfo !== this.props.userInfo) {

      this.setState({
        userInfo: this.props.userInfo
      })

    }
    if(prevProps.errMsg!==this.props.errMsg) {
      toast.success(this.props.errMsg)
    }
    if (prevProps.groupedOrderItems !== this.props.groupedOrderItems) {
      let { groupedOrderItems, products } = this.props
      this.setState({
        groupedOrderItems: this.props.groupedOrderItems
      })
    }
    if (prevProps.listOrders !== this.props.listOrders) {
      // window.location.reload()
      this.forceUpdate()
    }
    if (prevState.activeKey1 !== this.state.activeKey1) {
      let filteredOrders = this.filterOrders(this.state.activeKey1)
      this.setState({
        filteredOrders: filteredOrders
      })
    }
  }

  filterOrders = (keyword) => {
    if (this.props.listOrders) {
      console.log(`Filter`, this.props.listOrders)
      let filteredOrders = this.props.listOrders.filter(order => order.Status === keyword);
      if (keyword === "") {
        filteredOrders = this.props.listOrders
      }
      return filteredOrders
    }
    return []

  }
  render() {
    const { filteredOrders, activeKey2, userInfo, groupedOrderItems } = this.state;
    console.log(groupedOrderItems)

    let content2;
    switch (activeKey2) {
      case "5":
        content2 = <UserProfileCompoment />;
        break;
      case "6":
        content2 = <ResetPasswordCompoment />;
        break;

      default:
        content2 = <UserProfileCompoment />;
    }
    console.log(content2)
    return (
      <>
        <Header />
        {userInfo ?

          <div className="container account-page" style={{ marginTop: '100px' }}>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
            <div className="left-content">
              <div className="top-left-content">
                <a className="user-avatar">
                  <div className="shopee-avatar">
                    <div className="shopee-avatar__placeholder">
                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                        <g>
                          <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                          <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="user-info">
                  <div className="name">{userInfo.Name}</div>
                  <div>
                    <a className="edit-info" onClick={() => this.setState({ activeKey2: '5', leftActiveKey: 0 })}>
                      <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
                        <path d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48" fill="#9B9B9B" fillRule="evenodd" />
                      </svg>Sửa hồ sơ</a>
                  </div>
                </div>
              </div>
              <div className="bottom-left-content">

                <div className={`stardust-dropdown ${this.state.isShowSubNav && 'stardust-dropdown--open'} `} onClick={() => this.setState({ leftActiveKey: 0 })}>
                  <div className="stardust-dropdown__item-header" onClick={() => this.setState({ isShowSubNav: !this.state.isShowSubNav })}>
                    <div className="group-item-header">
                      <div className="icon">
                        <img src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4" />
                      </div>
                      <div className="title">
                        <span className="title">Tài khoản của tôi</span>
                      </div>
                    </div>
                  </div>
                  <div className={`stardust-dropdown__item-body ${this.state.isShowSubNav && 'stardust-dropdown__item-body--open'}`} >
                    <div className="group-item-body" onClick={(event) => this.hanleChangeSub(event)} >
                      <a className="option" >
                        <span className="option-title" data-key={5}>Hồ sơ</span>
                      </a>
                      <a className="option">
                        <span className="option-title" data-key={6}>Đổi mật khẩu</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="stardust-dropdown" onClick={() => this.setState({ leftActiveKey: 1, activeKey1: "0", isShowSubNav: false })}>
                  <div className="stardust-dropdown__item-header">
                    <a className="group-item-header" data-key={7}>
                      <div className="icon">
                        <img src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078" />
                      </div>
                      <div className="title">
                        <span className="title">Đơn hàng</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="stardust-dropdown" onClick={() => this.setState({ leftActiveKey: 2, modal: true })}>
                  <div className="stardust-dropdown__item-header">
                    <a className="group-item-header">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path style={{ fill: '#4274c1' }} d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                      </div>
                      <div className="title">
                        <span className="title">Xóa tài khoản</span>
                      </div>
                    </a>
                  </div>

                </div>
                <div className="stardust-dropdown" onClick={() => this.setState({ leftActiveKey: 3, modal: true })}>
                  <div className="stardust-dropdown__item-header">
                    <a className="group-item-header">
                      <div className="icon">
                        <i class="fas fa-sign-out-alt" style={{ color: "#4274c1" }}></i>
                      </div>
                      <div className="title">
                        <span className="title">Đăng xuất</span>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="main-content">
              <div className="main-content-container" role="main">
                <div style={{ display: 'contents' }}>
                  <div className="groups">

                    {this.state.leftActiveKey === 1 && <>
                      <section className="header-nav" aria-role="tablist" onClick={(event) => this.handleClickNav(event)}>
                        <a className="sub-nav active" data-key={""}>
                          <span className="sub-name">Tất cả</span>
                        </a>
                        <a className="sub-nav" data-key={"Đang Chờ Xác Nhận"}>
                          <span className="sub-name">Đang chờ xác nhận</span>
                        </a>
                        <a className="sub-nav" data-key={"Đang Chờ Thanh Toán"}>
                          <span className="sub-name">Đang chờ thanh toán</span>
                        </a>
                        <a className="sub-nav" data-key={"Đang Xử Lý"}>
                          <span className="sub-name">Đang xử lý</span>
                        </a>
                        <a className="sub-nav" data-key={"Hoàn Thành"}>
                          <span className="sub-name">Hoàn thành</span>
                        </a>
                        <a className="sub-nav" data-key={"Đã Hủy"}>
                          <span className="sub-name">Đã hủy</span>
                        </a>
                      </section>

                      <main>

                        {groupedOrderItems && filteredOrders ?
                          <OrderCard groupedOrderItems={groupedOrderItems} products={this.props.products} listOrders={filteredOrders} /> : <div style={{ textAlign: 'center' }}>Không có đơn hàng nào</div>
                        }
                      </main>
                    </>}
                    {this.state.leftActiveKey === 0 && content2}
                    {this.state.leftActiveKey === 2 && <Modal isOpen={this.state.modal} toggle={() => this.toggle()} centered>
                      <ModalBody>
                        <p>Bạn chắc chắn muốn xóa tài khoản này?</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={() => this.handleDeleteAcc()}>
                          Xác nhận
                        </Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>
                          Hủy bỏ
                        </Button>
                      </ModalFooter>
                    </Modal>}
                    {this.state.leftActiveKey === 3 && <Modal isOpen={this.state.modal} toggle={() => this.toggle()} centered>
                      <ModalBody>
                        <p>Đăng xuất tài khoản khỏi thiết bị?</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={() => this.handleSignout()}>
                          Xác nhận
                        </Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>
                          Hủy bỏ
                        </Button>
                      </ModalFooter>
                    </Modal>}
                  </div>
                </div>
              </div>
            </div>

          </div>
          : <Redirect to={'/'} />}


      </>
    );
  }
  async handleSignout() {
    await this.props.signout()
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  async handleDeleteAcc() {
    let { id } = this.state.userInfo
    console.log(id)
    try {
      await this.props.deleteUser(id)
    } catch (error) {
      console.log(error)
    }

    this.setState({
      modal: !this.state.modal
    })
  }
  hanleChangeSub(event) {
    const subNavs = document.getElementsByClassName('option-title');
    for (let i = 0; i < subNavs.length; i++) {
      subNavs[i].classList.remove('active');
    }
    event.target.classList.add('active');
    this.setState({
      activeKey2: event.target.getAttribute('data-key')
    })
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
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Userpage);