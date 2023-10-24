import React, { Component } from 'react'

import Table from '../../components/table/Table'

import './form.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteProduct, getProductDetail } from '../../services/productService'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const customerTableHead = [
    '',
    'Mã loại',
    'Tên loại',
]

export default class CategoryMangage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productTypes: this.props.productTypes,
            type: {}
        }

    }
    async componentDidMount() {

        this.setState({
            productTypes: this.props.productTypes
        })

    }
    componentDidUpdate(prevProps, prevState) {


    }
    renderHead = (item, index) => <th key={index}>{item}</th>
    renderBody = (item, index) => (
        <tr key={index} >
            <td>{index + 1}</td>
            <td>{item.TypeID}</td>
            <td>{item.TypeName}</td>
            <td>
                <div className="action-icons" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <i className="bx bx-edit" onClick={() => this.handleEdit(item)}></i>
                    <i className="bx bx-trash" onClick={() => this.handleDelete(item)}></i>
                </div>
            </td>

        </tr>
    )
    handleClickAdd = () => {

        this.setState({
            action: 'add',
            modal: true
        })
    }
    handleEdit = async (item) => {

        this.setState({
            type: item,
            action: 'edit',
            modal: true
        })
    }
    handleDelete = async (item) => {
        this.setState({
            type: item,
            action: 'delete',
        }, async () => { await this.handleSave() })

    }
    handleSave = async () => {
        let { type, action } = this.state
        console.log(type, action)
        await this.props.updateProductType({ type, action })
        window.location.reload()

    }
    handleClickCancel = () => {
        this.setState({ modal: false })
    }
    handleChangeInput = (event) => {
        let { name, value } = event.target
        let copy = this.state.type
        console.log(copy)
        this.setState({
            type: {
                ...copy,
                [name]: value
            }
        })
    }

    render() {

        let { TypeID, TypeName } = this.state.type

        return (
            <>
                {this.state.productTypes &&
                    <>
                        <div className='product-manage-page'>
                            <div className="table">
                                <h2 className="page-header">
                                    Quản lý sản phẩm
                                </h2>
                                <button style={{ marginBottom: '20px' }} onClick={() => this.handleClickAdd()}>Thêm sản phẩm</button>
                                <div className="row" >
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card__body">
                                                <Table
                                                    limit='10'
                                                    headData={customerTableHead}
                                                    renderHead={(item, index) => this.renderHead(item, index)}
                                                    bodyData={this.state.productTypes}
                                                    renderBody={(item, index) => this.renderBody(item, index)}
                                                />

                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <Modal isOpen={this.state.modal} fullscreen centered>
                            <ModalHeader toggle={() => this.handleClickCancel()}>Thông tin sản phẩm</ModalHeader>
                            <ModalBody>
                                <div className="form" >
                                    <form id="productForm" onChange={(event) => this.handleChangeInput(event)}>
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="TypeID">Mã loại:</label>
                                                <input type="text" id="name" name="TypeID" value={TypeID} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="TypeName">Tên loại:</label>
                                                <input type="text" id="brand" name="TypeName" value={TypeName} />
                                            </div>
                                            
                                        </div>
                                    </form>




                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => this.handleSave()}>Lưu</Button>
                                <Button color="secondary" onClick={() => this.handleClickCancel()}>Hủy</Button>
                            </ModalFooter>
                        </Modal>

                    </>


                }

            </>
        )
    }
}