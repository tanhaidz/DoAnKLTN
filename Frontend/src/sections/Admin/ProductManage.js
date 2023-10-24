import React, { Component } from 'react'
import { CommonUtils } from '../../utils'
import Table from '../../components/table/Table'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import './form.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteProduct, getProductDetail } from '../../services/productService'
import { Link } from 'react-router-dom'
import FilterBoxCompoment from '../../components/FilterBox/FilterBoxCompoment'
const customerTableHead = [
    '',
    'Tên sản phẩm',
    'Thương hiệu',
    'Giá',
    "Hàng tồn kho",
    "Đã bán",
    "Đánh giá"

]

export default class ProductManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            filteredProducts: this.props.products,
            product: {},
            productDetail: {},
            filterValue: {
                BrandName: 'Tất cả',
                searchValue: ''
            },
            modal: false
        }
    }
    async componentDidMount() {

        this.handleFilterProducts()

    }
    handleFilterProducts = () => {
        let { products, filterValue } = this.state
        const filteredProducts = products.filter(product => {
            const isBrandMatched = filterValue.BrandName === 'Tất cả' || product.BrandName === filterValue.BrandName;
            const isSearchMatched = Object.values(product).some(value => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(filterValue.searchValue.toLowerCase());
                }
            });

            return isBrandMatched && isSearchMatched;
        });

        this.setState({
            filteredProducts: filteredProducts
        })
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.filterValue !== this.state.filterValue) {
            this.handleFilterProducts();
        }

    }

    renderHead = (item, index) => <th key={index}>{item}</th>
    renderBody = (item, index) => (
        <tr key={index} >
            <td>{index + 1}</td>
            <td>{item.ProductName}</td>
            <td>{item.BrandName}</td>
            <td>{item.UnitPrice}</td>
            <td>{item.QuantityInStock}</td>
            <td>{item.Sold}</td>
            <td>{item.Rate}</td>
            <td>
                <div className="action-icons">
                    <i className="bx bx-edit" onClick={() => this.handleEdit(item)}></i>
                    <i className="bx bx-trash" onClick={() => this.handleDelete(item)}></i>
                </div>
            </td>

        </tr>
    )
    handleEdit = async (item) => {
        let response = await getProductDetail(item.id)

        if (response.errCode === 0 && response.productDetail) {
            this.setState({
                productDetail: response.productDetail,
            })
        }
        this.setState({
            product: item,
            action: 'edit',
            modal: true
        })
    }
    handleDelete = async (item) => {
        await DeleteProduct(item.id)
        window.location.reload()
    }
    handleSave = async () => {
        let { product, productDetail, action } = this.state
        await this.props.updateProduct({ product, productDetail, action })
        console.log(product, productDetail)
        window.location.reload()
    }
    handleClickCancel = () => {
        this.setState({
            modal: false
        })
    }
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
    handleClickAdd = () => {
        let form = document.querySelector('.form');
        if (form) {
            form.classList.add('active')

        }

        this.setState({
            product: {},
            productDetail: {},
            action: 'add',
            modal: true

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

        let { ProductName, BrandName, TypeID, UnitPrice, QuantityInStock, Description } = this.state.product
        let { OperatingSystem, Display, Processor, Memory, Camera, Battery, Connectivity, Weight_Dimensions } = this.state.productDetail
        console.log(this.state.filterValue)


        return (
            <>
                {this.state.filteredProducts && this.props.types &&
                    <>

                        <div className='product-manage-page'>
                            <div className="table">
                                <h2 className="page-header">
                                    Quản lý sản phẩm
                                </h2>
                                <button style={{ marginBottom: '20px' }} onClick={() => this.handleClickAdd()}>Thêm sản phẩm</button>

                                <div className="row" >

                                    <div className="col-12">
                                        <div className="filterbox">
                                            <div className="filter__body" onChange={(event) => this.handleChangeInput3(event)}>
                                                <div className='form-group '>

                                                    <label>Thương hiệu</label>
                                                    <select name='BrandName' >
                                                        <option value='Tất cả'>Tất cả</option>
                                                        <option value='Samsung'>Samsung</option>
                                                        <option value='Google'>Google</option>
                                                        <option value='Apple'>Apple</option>

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
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card__body">
                                                <Table
                                                    limit='10'
                                                    headData={customerTableHead}
                                                    renderHead={(item, index) => this.renderHead(item, index)}
                                                    bodyData={this.state.filteredProducts}
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
                                            <div className="col-12">
                                                <label htmlFor="ProductName">Tên sản phẩm:</label>
                                                <input type="text" id="name" name="ProductName" value={ProductName} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="BrandName">Thương hiệu:</label>
                                                <input type="text" id="brand" name="BrandName" value={BrandName} />
                                            </div>

                                            <div className="col-6">
                                                <label htmlFor="TypeID">Loại sản phẩm:</label>
                                                <select id="category" name="TypeID" style={{ height: '40px' }} value={TypeID} >
                                                    <option value={null}>---*---</option>
                                                    {this.props.types.map((type) => (
                                                        <option value={type.TypeID}>{type.TypeName}</option>
                                                    ))}

                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="UnitPrice">Giá:</label>
                                                <input type="number" id="price" name="UnitPrice" value={UnitPrice} />
                                            </div>

                                            <div className="col-6">
                                                <label htmlFor="QuantityInStock">Hàng tồn kho:</label>
                                                <input type="number" id="stock" name="QuantityInStock" value={QuantityInStock} />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="Description">Mô tả:</label>
                                                <textarea rows={5} id="description" name="Description" value={Description} style={{ width: '100%', padding: '8px' }}></textarea>
                                            </div>
                                        </div>
                                    </form>

                                    <form id="productdeltailForm" onChange={(event) => this.handleChangeInput2(event)}>
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="OperatingSystem">Hệ điều hành</label>
                                                <input type="text" id="name" name="OperatingSystem" value={OperatingSystem} />
                                            </div>

                                            <div className="col-6">
                                                <label htmlFor="Display">Màn hình</label>
                                                <input type="text" id="brand" name="Display" value={Display} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="Processor">CPU</label>
                                                <input type="text" id="category" name="Processor" value={Processor} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="Memory">Bộ nhớ</label>
                                                <input type="text" id="price" name="Memory" value={Memory} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="Camera">Máy ảnh</label>
                                                <input type="text" id="stock" name="Camera" value={Camera} />
                                            </div>

                                            <div className="col-6">
                                                <label htmlFor="Battery">Pin</label>
                                                <input type="text" id="category" name="Battery" value={Battery} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="Connectivity">Kết nối</label>
                                                <input type="text" id="price" name="Connectivity" value={Connectivity} />
                                            </div>

                                            <div className="col-6">
                                                <label htmlFor="Weight_Dimensions">Trọng lượng và kích thước</label>
                                                <input type="text" id="stock" name="Weight_Dimensions" value={Weight_Dimensions} />
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
