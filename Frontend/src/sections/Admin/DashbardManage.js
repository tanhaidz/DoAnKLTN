import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import Table from '../../components/table/Table';
import { CommonUtils } from '../../utils';
import { Link } from 'react-router-dom';

const topCustomersHeader = [

    'Tên khách hàng',
    'Tổng đơn',
    'Tổng chi tiêu'
]
const latestOrdersHeader = [

    'OrderID',
    'Tên khách hàng',
    'Thời gian',
    'Tổng tiền',
    'Trạng thái'
]
const renderHead = (item, index) => <th key={index}>{item}</th>

const renderLatestOrdersBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.CustomerName}</td>
        <td>{item.Date}</td>
        <td>{CommonUtils.formatCurrency(+item.TotalAmount)}</td>
        <td>{item.Status}</td>
    </tr>
)
const renderTopCustomersBody = (item, index) => (
    <tr key={index}>
        <td>{item.Name}</td>
        <td>{item.TotalOrders}</td>
        <td> {CommonUtils.formatCurrency(+item.TotalSpend)}</td>
    </tr>
)
export default class DashbardManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {

            },
            series: []

        }
    }
    componentDidMount() {
        this.Top10product()
    }
    Top10product = () => {
        const { products } = this.props;

        if (!products || products.length === 0) {
            // Handle the case when products is undefined or empty
            return null;
        }
        const sortedProducts = [...products].sort((a, b) => b.Sold - a.Sold);
        const top10 = sortedProducts.slice(0, 10);
        this.setState({
            series: [{
                name: 'series-1',
                data: top10.map(product => product.Sold)
            }],
            options: {
                ...this.state.options,
                xaxis: {
                    categories: top10.map(product => product.ProductName)
                }
            }
        });
    }
    getRecentOrders = () => {
        const { orders } = this.props;
        orders.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
        const recentOrders = orders.slice(0, 5);
        return recentOrders;
    }
    getTopCustomers = () => {
        const { customers } = this.props;
        customers.sort((a, b) => b.TotalSpend - a.TotalSpend);
        const topCustomers = customers.slice(0, 5);
        console.log("check", topCustomers)
        return topCustomers;
    }
    render() {
        let temp = this.getRecentOrders()
        console.log("temp", temp)
        console.log("orders", this.props.orders)
        return (
            <div>
                <h2 className="page-header">Dashboard</h2>
                <div className="row">
                    {/* <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div> */}
                    <div className="col-12">
                        <div className="card full-height" style={{ minHeight: "340px" }} >

                            <Chart options={this.state.options} series={this.state.series} type="line" width="100%" height={340} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card__header">
                                <h3>top customers</h3>
                            </div>
                            <div className="card__body">
                                <Table
                                    limit='5'
                                    headData={topCustomersHeader}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={this.getTopCustomers()}
                                    renderBody={(item, index) => renderTopCustomersBody(item, index)}
                                />
                            </div>
                            <div className="card__footer">
                                <Link to='/customers'>view all</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card__header">
                                <h3>latest orders</h3>
                            </div>
                            <div className="card__body">
                                <Table
                                    limit='5'
                                    headData={latestOrdersHeader}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={temp}
                                    renderBody={(item, index) => renderLatestOrdersBody(item, index)}
                                />
                            </div>
                            <div className="card__footer">
                                <Link to='/orders'>view all</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
