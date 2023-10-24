import React, { Component } from 'react'
import './FilterBox.scss'

export default class FilterBoxCompoment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChangeInput = (event) => {
        this.props.handleChangeInput3(event)
    }
    render() {
        console.log(this.state)
        return (
            <>
                <div className="col-12">
                    <div className="filterbox">
                        <div className="filter__body" onChange={(event) => this.handleChangeInput(event)}>
                            <div className='form-group'>
                                <label>Thời gian đặt hàng</label>
                                <div className='filter-date'>
                                    <input type='date' name='fromDate' className='form-control' />
                                    -
                                    <input type='date' name='toDate' className='form-control' />
                                </div>

                            </div>
                            <div className='form-group '>

                                <label> Trạng thái đơn hàng</label>
                                <select name='Status' >
                                    <option value='Tất cả'>Tất cả</option>
                                    <option value='Đang chờ xác nhận'>Đang chờ xác nhận</option>
                                    <option value='Đang xử lý'>Đang xử lý</option>
                                    <option value='Đang chờ thanh toán'>Đang chờ thanh toán</option>
                                    <option value='Hoàn thành'>Hoàn thành</option>
                                    <option value='Đã hủy'>Đã hủy</option>
                                </select>

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


            </>
        )
    }
}
