import React, { Component } from 'react'
import Table from '../../components/table/Table'
import { CommonUtils } from '../../utils'
import { withRouter } from 'react-router-dom';

class CustomerManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: {
                searchValue: ''
            },
            customers: this.props.customers,
            filteredCustomers: this.props.customers
        };
    }
    componentDidMount() {
        this.handleFilterCustomer()
    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.filterValue !== this.state.filterValue) {
            this.handleFilterCustomer();
        }
    }
    customerTableHead = [
        '',
        'Tên',
        'Email',
        'Số điện thoại',
        'Địa chỉ',
        'Tổng đơn',
        'Tổng chi tiêu'
    ]

    renderHead = (item, index) => <th key={index}>{item}</th>

    renderBody = (item, index) => (
        <tr key={index} onClick={() => this.handleSelectCustomer(item)}>
            <td>{index + 1}</td>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.Phone}</td>
            <td>{item.Address}</td>
            <td>{item.TotalOrders}</td>
            <td> {CommonUtils.formatCurrency(+item.TotalSpend)}</td>
        </tr>
    )
    handleSelectCustomer = (item) => {
        console.log(item)
        this.props.history.push({
            pathname: "/orders",
            state: {
                CustomerID: item.id,
            }
        });
    }
    
    handleFilterCustomer = () => {
        let { customers, filterValue } = this.state
        const filteredCustomers = customers.filter(customer => {
            const isSearchMatched = Object.values(customer).some(value => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(filterValue.searchValue.toLowerCase());
                }
            });

            return isSearchMatched;
        });

        this.setState({
            filteredCustomers: filteredCustomers
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

    render() {
        let { filteredCustomers } = this.state
        return (

            <>
                {filteredCustomers &&
                    <div>
                        <h2 className="page-header">
                            Quản lý khách hàng
                        </h2>
                        <div className="row">
                            <div className="col-12">
                                <div className="filterbox">
                                    <div className="filter__body" >
                                        <div className="form-group">
                                            <div className="topnav__search" onChange={(event) => this.handleChangeInput3(event)}>
                                                <input type="text" name='searchValue' placeholder='Search here...' />
                                                <i className='bx bx-search'></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">
                                        <Table
                                            limit='10'
                                            headData={this.customerTableHead}
                                            renderHead={(item, index) => this.renderHead(item, index)}
                                            bodyData={filteredCustomers}
                                            renderBody={(item, index) => this.renderBody(item, index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </>
        )
    }
}
export default withRouter(CustomerManage)