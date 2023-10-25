import React, { Component } from 'react'
import { CommonUtils } from '../../utils'
import Table from '../../components/table/Table'
import FilterBoxCompoment from '../../components/FilterBox/FilterBoxCompoment'
import { GetOrderDetails } from '../../services/orderService'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import OrderCard from '../../components/OrderCard/OrderCard'

const customerTableHead = [
    '',
    'Mã đơn hàng',
    'Tên khách hàng',
    'Thời gian',
    'Tổng tiền',
    'Phương thức thanh toán',
    'Trạng thái',


]

const customerOrderStatus = ['Đang Xử Lý', 'Hoàn Thành', 'Đã Hủy']


export default class OrderManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            indexSelected: null,
            filterValue: {
                fromDate: '2000-01-01',
                toDate: '3000-01-01',
                Status: 'Tất cả',
                searchValue: ""
            },
            orders: this.props.orders,
            filteredOrders: this.props.orders,
            modal: false
        }
    }
    componentDidMount() {

        if (this.props.CustomerID) {
            const filteredOrders = this.props.orders.filter((order) => order.CustomerID === this.props.CustomerID);
            this.setState({
                filteredOrders: filteredOrders,
                orders: filteredOrders
            })
        }
    }

    handleFilterOrder = () => {
        let { orders, filterValue } = this.state;
        console.log(`Filter order1`, filterValue);

        const filteredOrders = orders.filter(order => {
            const fromDate = new Date(filterValue.fromDate);
            const toDate = new Date(filterValue.toDate);
            const orderDate = new Date(order.Date);

            const isWithinDateRange = orderDate >= fromDate && orderDate <= toDate;

            const isStatusMatched = filterValue.Status === 'Tất cả' || order.Status.toLowerCase() === filterValue.Status.toLowerCase();
            const isSearchMatched = Object.values(order).some(value => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(filterValue.searchValue.toString().toLowerCase());
                }
            });

            return isWithinDateRange && isStatusMatched && isSearchMatched;
        });

        this.setState({
            filteredOrders: filteredOrders
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.filterValue !== this.state.filterValue) {
            this.handleFilterOrder()

        }

    }
    renderHead = (item, index) => <th key={index}>{item}</th>
    renderBody = (item, index) => (
        <tr key={index} >
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.CustomerName}</td>
            <td>{item.Date}</td>
            <td>{CommonUtils.formatCurrency(+item.TotalAmount)}</td>
            <td>{item.PaymentMethod}</td>
            {this.state.isEditing && this.state.indexSelected === index ?

                <td>
                    <select value={this.state.selectedValue} onChange={(event) => this.handleSelectChange(event)} >
                        <option value=''>Chọn</option>
                        {
                            customerOrderStatus.map((status) => (
                                <>
                                    <option value={status}>{status}</option>
                                </>
                            ))

                        }

                    </select>
                    <button onClick={() => this.handleSaveClick(item)}>Save</button>
                </td>
                :
                <td>{item.Status}</td>
            }

            <td>
                <div className="action-icons">
                    <i className='bx bx-show' onClick={() => this.handleShowOrderDetail(item)}></i>
                    {item.Status !== "Đã Hủy" &&
                        <i className="bx bx-edit" onClick={() => this.handleEdit(index)}></i>}

                </div>
            </td>

        </tr>
    )
    handleShowOrderDetail = async (item) => {
        let response = await GetOrderDetails(item.id)
        if (response.errCode === 0) {
            this.setState({
                Order: item,
                OrderDetail: {
                    [item.id]: response.OrderDetail
                },
                modal: true
            })
        } else {
            alert('Lỗi trong quá trình lấy thông tin đơn hàng')
        }
    }
    handleEdit = (index) => {

        this.setState({ isEditing: true, indexSelected: index });

    }
    handleSelectChange = (event) => {
        this.setState({ selectedValue: event.target.value });
    };
    handleSaveClick = async (item) => {
        item.Status = this.state.selectedValue
        console.log(item)
        await this.props.changeOrderStatus(item)
        this.setState({ isEditing: false });
    };
    handleChangeInput = (event) => {
        let { name, value } = event.target
        let copy = this.state.product
        this.setState({
            product: {
                ...copy,
                [name]: value
            }
        })
    }
    handleChangeInput2 = (event) => {
        let { name, value } = event.target
        let copy = this.state.productDetail
        this.setState({
            productDetail: {
                ...copy,
                [name]: value
            }
        })
    }
    handleChangeInput3 = (event) => {
        let { name, value } = event.target
        this.setState({
            filterValue: {
                ...this.state.filterValue,
                [name]: value
            }

        })
    }
    toggle = () => {
        this.setState({ modal: false })
    }
    render() {
        let { filteredOrders } = this.state
        let totalAmount = 0;

        for (let i = 0; i < filteredOrders.length; i++) {

            const item = filteredOrders[i];

            const amount = parseFloat(item.TotalAmount); // Chuyển đổi giá trị TotalAmount từ chuỗi sang số

            totalAmount += amount;
        }
        console.log(this.props.location)
        return (
            <>
                {filteredOrders &&
                    <>
                        <div>
                            <h2 className="page-header">
                                Quản lý đơn hàng
                            </h2>
                            <div className="row">
                                <FilterBoxCompoment handleChangeInput3={this.handleChangeInput3} />
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card__body">
                                            <Table
                                                limit='10'
                                                headData={customerTableHead}
                                                renderHead={(item, index) => this.renderHead(item, index)}
                                                bodyData={filteredOrders}
                                                renderBody={(item, index) => this.renderBody(item, index)}

                                            />

                                        </div>
                                        <div className="total-income position-absolute bottom-0 me-4" style={{ right: '0' }}>
                                            <span style={{ fontWeight: '600' }}> Tổng giá trị: {CommonUtils.formatCurrency(totalAmount)}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    <Modal isOpen={this.state.modal} size='lg' centered toggle={() => this.toggle()}>

                            <ModalBody>
                                <OrderCard groupedOrderItems={this.state.OrderDetail} products={this.props.products} listOrders={[this.state.Order]} admin={true}/>
                            </ModalBody>
                        </Modal>
                    </>
                }

            </>
        )
    }
}
