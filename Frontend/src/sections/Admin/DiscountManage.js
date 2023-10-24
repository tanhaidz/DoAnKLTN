import React, { Component } from 'react'
import Table from '../../components/table/Table';
const customerTableHead = [
    '',
    'Tên sản phẩm',
    'Giảm giá',
    'Ngày bắt đầu',
    'Ngày kết thúc',

]
export default class DiscountManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDiscounts: this.props.productDiscounts,
            filteredProductDiscounts: this.props.productDiscounts,
            productDiscount: {},
            selectedValue: null,
            filterValue: {
                fromDate: '2000-01-01',
                toDate: '3000-01-01',
                searchValue: ''
            },
        }
    }
    async componentDidMount() {
        this.handleFilterProductDicounts()

    }
    handleFilterProductDicounts = () => {
        let { productDiscounts, filterValue } = this.state
        const filteredProductDiscounts = productDiscounts.filter(productDiscount => {
            const fromDate = new Date(filterValue.fromDate);
            const toDate = new Date(filterValue.toDate);
            const startDate = new Date(productDiscount.StartDate);
            const endDate = new Date(productDiscount.EndDate);

            const isWithinDateRange = startDate >= fromDate && endDate <= toDate;
            const isSearchMatched = Object.values(productDiscount).some(value => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(filterValue.searchValue.toLowerCase());
                }
            });

            return isWithinDateRange && isSearchMatched;
        });

        this.setState({
            filteredProductDiscounts: filteredProductDiscounts
        })
    }



    componentDidUpdate(prevProps, prevState) {

        if (prevState.filterValue !== this.state.filterValue) {
            this.handleFilterProductDicounts();
        }
    }

    renderHead = (item, index) => <th key={index}>{item}</th>
    renderBody = (item, index) => (
        <tr key={index} >
            <td>{index + 1}</td>
            <td>{item.ProductName}</td>
            <td>{item.Discount}</td>
            <td>{item.StartDate}</td>
            <td>{item.EndDate}</td>

            <td>
                <div className="action-icons">
                    <i className="bx bx-edit" onClick={() => this.handleEdit(item)}></i>
                </div>
            </td>

        </tr>
    )

    handleEdit = async (item) => {
        let form = document.querySelector('.form');
        if (form) {
            form.classList.add('active')
        }

        this.setState({
            productDiscount: item,
            action: 'edit',
        })
    }
    handleSave = async () => {
        let { productDiscount, action } = this.state
        await this.props.updateProductDiscount({ productDiscount, action })
        window.location.reload()
    }
    handleClickCancel = () => {
        let form = document.querySelector('.form');
        if (form) {
            form.classList.remove('active')
        }
    }
    handleChangeInput = (event) => {
        let { name, value } = event.target
        let copy = this.state.productDiscount
        this.setState({
            productDiscount: {
                ...copy,
                [name]: value
            }
        })
    }
    handleSelectChange = (event) => {
        this.setState({ selectedValue: event.target.value });
    };
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
        let { EndDate, StartDate, Discount, ProductName } = this.state.productDiscount

        return (
            <>
                {this.state.filteredProductDiscounts &&
                    <>
                        <div className='product-manage-page'>
                            <div className="table">
                                <h2 className="page-header">
                                    Quản lý giảm giá
                                </h2>
                                <div className="row" >

                                    <div className="col-12">
                                        <div className="filterbox">
                                            <div className="filter__body" onChange={(event) => this.handleChangeInput3(event)}>
                                                <div className='form-group'>
                                                    <label>Thời gian đặt hàng</label>
                                                    <div className='filter-date'>
                                                        <input type='date' name='fromDate' className='form-control' />
                                                        -
                                                        <input type='date' name='toDate' className='form-control' />
                                                    </div>

                                                </div>
                                                <div className="form-group">
                                                    <div className="topnav__search">
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
                                                    headData={customerTableHead}
                                                    renderHead={(item, index) => this.renderHead(item, index)}
                                                    bodyData={this.state.filteredProductDiscounts}
                                                    renderBody={(item, index) => this.renderBody(item, index)}
                                                />

                                            </div>
                                            <div className="form" >
                                                <form id="productForm" onChange={(event) => this.handleChangeInput(event)}>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <label htmlFor="ProductName">Tên sản phẩm</label>

                                                            <input type="text" id="name" name="ProductName" value={ProductName} />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="Discount">Giảm giá %</label>
                                                            <input type="number" id="brand" name="Discount" value={Discount} />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="StartDate">Ngày bắt đầu</label>
                                                            <input type="date" id="name" name="StartDate" value={StartDate} />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="EndDate">Ngày kết thúc</label>
                                                            <input type="date" id="brand" name="EndDate" value={EndDate} />
                                                        </div>
                                                        <div className="col-6">
                                                            <button type='button' onClick={() => this.handleSave()}>Lưu thay đổi</button>
                                                        </div>
                                                        <div className="col-6">
                                                            <button type='button' onClick={() => this.handleClickCancel()}>Hủy bỏ</button>
                                                        </div>
                                                    </div>
                                                </form>




                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>


                    </>


                }

            </>
        )
    }
}
