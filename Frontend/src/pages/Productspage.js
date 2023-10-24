import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCardCompoment from '../components/ProductCard/ProductCardCompoment';
import * as actions from "../store/actions";

import "../styles/bootstrap.scss"
import "../styles/bread-crumb.scss"
import "../styles/collections.scss"
import "../styles/index.scss"
import "../styles/main.scss"
import "../styles/swiper.scss"
import Header from '../components/Header/Header';
import { getAllProducts } from '../services/productService';
import { CommonUtils } from '../utils';
import Footer from '../components/Footer/Footer';

const priceArr = ["Tất cả", "Giá dưới 5.000.000đ", "5.000.000đ - 10.000.000đ", "10.000.000đ - 15.000.000đ", "Giá trên 15.000.000đ"]

const manufactureArr = ["Samsung", "Apple", "Google"]
class Productspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      filteredProducts: this.props.products,
      isChoose: false,
      selected: {
        sort: "", order: ""
      },
      selectedRadio: 0,
      selectedCheckboxes: [{ name: "price", value: 0 }],
    }
  }
  async componentDidMount() {

    const body = document.querySelector('body');
    body.className = 'productpage';

    this.setState({
      products: this.props.filteredProducts,

    })



  }

  handleSortProduct = (sort, order) => {
    let sortOption = {
      sort, order
    }
    this.props.sortProducts(sortOption)
    this.setState({
      selected: sortOption
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filteredProducts !== this.props.filteredProducts) {
      console.log('Filtered Products')
      this.setState({
        products: this.props.filteredProducts
      })
    }
    if (prevState.selectedCheckboxes !== this.state.selectedCheckboxes) {
      this.props.filterProducts(this.state.selectedCheckboxes)
      this.setState({
        selected: 0
      })
    }
  }

  handleOnchange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "price") {
      this.setState((prevState) => ({
        selectedRadio: value,
        selectedCheckboxes: prevState.selectedCheckboxes.map((checkbox) => {
          if (checkbox.name === name) {
            return { ...checkbox, value: value }; // Sửa giá trị thành "2"
          }
          return checkbox;
        })
      }));

    } else if (name === "manufacturer[]") {
      this.setState((prevState) => {
        if (checked) {
          return {
            selectedCheckboxes: [
              ...prevState.selectedCheckboxes,
              { name, value }
            ]
          };
        } else {
          return {
            selectedCheckboxes: prevState.selectedCheckboxes.filter(
              (checkbox) =>
                checkbox.name !== name || checkbox.value !== value
            )
          };
        }
      });
    }
  };
  handleAddtoCart = (item) => {
    console.log(item);
    this.props.addItemToCart({ ProductID: item.id, Quantity: 1, TotalPrice: item.DiscountedPrice })

    this.setState({ item: item })


  }
  render() {
    let { products, selected, selectedCheckboxes } = this.state
    console.log(selected)
    return (

      <>
        {products &&
          <>


            <Header />

            <section className="section" >
              <h1 className="title" style={{ textAlign: "center" }}>Danh mục sản phẩm</h1>
              <div className="container ant-cate-content">
                <div className="row">
                  <aside className="left left-content col-lg-3 col-md-3 ">
                    <div id="column-left" className="left-column compliance">

                      <div className="aside-filter clearfix hidden-xs">
                        <div className="aside-titles">Lọc</div>
                        <div className="aside-hidden-mobile">
                          <div className="filter-container" onChange={(event) => this.handleOnchange(event)}>
                            <aside className="aside-item filter-price">
                              <div className="aside-title">Giá <span className="ant-svg collapsible-plus" />
                              </div>
                              <div className="aside-content filter-group">
                                <ul>
                                  {priceArr.map((item, i) => {

                                    return (
                                      <li className="filter-item filter-item--check-box filter-item--green" >
                                        <span>
                                          <label >
                                            <input type="radio" name="price" value={i}
                                              checked={+this.state.selectedRadio === i}

                                            />
                                            <i className="fa"></i>{item}</label>
                                        </span>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            </aside>
                            <aside className="aside-item filter-manufacturer">
                              <div className="aside-title">Thương hiệu <span className="ant-svg collapsible-plus" />
                              </div>
                              <div className="aside-content filter-group" >
                                <ul>
                                  {manufactureArr.map((item, i) => {
                                    return (
                                      <li className="filter-item filter-item--check-box filter-item--green ">
                                        <span>
                                          <label >
                                            <input type="checkbox" name="manufacturer[]" value={item}

                                              checked={selectedCheckboxes.some(
                                                checkbox =>
                                                  checkbox.name === "manufacturer[]" && checkbox.value === item
                                              )}
                                            />
                                            <i className="fa"></i>{item}</label>
                                        </span>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            </aside>

                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                  <section className="main_container collection col-sm-12 col-xs-12 col-md-9 col-md-push-3">
                    <h1 className="d-none" style={{ display: 'none' }}>Sản phẩm</h1>
                    <div className="category-products products category-products-grids clearfix">
                      <div className="sort-cate clearfix">
                        <div className="sort-cate-left" id="sort-by">
                          <h3 className="nd-titles">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12px" height="12px" viewBox="0 0 97.761 97.762" style={{ enableBackground: 'new 0 0 97.761 97.762' }} xmlSpace="preserve">
                              <path d="M42.761,65.596H34.75V2c0-1.105-0.896-2-2-2H16.62c-1.104,0-2,0.895-2,2v63.596H6.609c-0.77,0-1.472,0.443-1.804,1.137 c-0.333,0.695-0.237,1.519,0.246,2.117l18.076,26.955c0.38,0.473,0.953,0.746,1.558,0.746s1.178-0.273,1.558-0.746L44.319,68.85 c0.482-0.6,0.578-1.422,0.246-2.117C44.233,66.039,43.531,65.596,42.761,65.596z" />
                              <path d="M93.04,95.098L79.71,57.324c-0.282-0.799-1.038-1.334-1.887-1.334h-3.86c-0.107,0-0.213,0.008-0.318,0.024 c-0.104-0.018-0.21-0.024-0.318-0.024h-3.76c-0.849,0-1.604,0.535-1.887,1.336L54.403,95.1c-0.215,0.611-0.12,1.289,0.255,1.818 s0.983,0.844,1.633,0.844h5.773c0.88,0,1.657-0.574,1.913-1.416l2.536-8.324h14.419l2.536,8.324 c0.256,0.842,1.033,1.416,1.913,1.416h5.771c0.649,0,1.258-0.314,1.633-0.844C93.16,96.387,93.255,95.709,93.04,95.098z M68.905,80.066c2.398-7.77,4.021-13.166,4.82-16.041l4.928,16.041H68.905z" />
                              <path d="M87.297,34.053H69.479L88.407,6.848c0.233-0.336,0.358-0.734,0.358-1.143V2.289c0-1.104-0.896-2-2-2H60.694 c-1.104,0-2,0.896-2,2v3.844c0,1.105,0.896,2,2,2h16.782L58.522,35.309c-0.233,0.336-0.358,0.734-0.358,1.146v3.441 c0,1.105,0.896,2,2,2h27.135c1.104,0,2-0.895,2-2v-3.842C89.297,34.947,88.402,34.053,87.297,34.053z" />
                            </svg> Sắp xếp theo </h3>
                          <ul>
                            <li className={selected.sort === "name" && selected.order === "asc" ? "btn-quick-sort active" : "btn-quick-sort "}>
                              <a onClick={() => this.handleSortProduct("name", "asc")}><i></i>Tên (A - Z)</a>
                            </li>
                            <li className={selected.sort === "name" && selected.order === "desc" ? "btn-quick-sort active" : "btn-quick-sort "}>
                              <a onClick={() => this.handleSortProduct("name", "desc")}><i></i>Tên (Z - A)</a>
                            </li>
                            <li className={selected.sort === "price" && selected.order === "asc" ? "btn-quick-sort active" : "btn-quick-sort "}><a onClick={() => this.handleSortProduct("price", "asc")}><i></i>Giá (Thấp &gt; Cao)</a></li>
                            <li className={selected.sort === "price" && selected.order === "desc" ? "btn-quick-sort active" : "btn-quick-sort "}><a onClick={() => this.handleSortProduct("price", "desc")}><i></i>Giá (Cao &gt; Thấp)</a></li>
                          </ul>
                        </div>
                      </div>
                      <section className="products-view products-view-grid">
                        <div className="row" style={{ height: "65vh", overflow: "auto" }}>
                          {products.length > 0 ? products.map((item) => {

                            return (
                              <>
                                <div className="col-6 col-md-3 col-lg-3 product-col">
                                  <ProductCardCompoment product={item} handleAddtoCart={this.handleAddtoCart} />
                                </div>


                              </>
                            )


                          }) : <>
                            <div className="title">
                              Không tìm thấy sản phẩm
                            </div>
                          </>}
                        </div>

                      </section>
                    </div>
                  </section>
                </div>
              </div>
            </section>
            <Footer />
          </>
        }


      </>
    )
  }


}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    filteredProducts: state.product.filteredProducts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    sortProducts: (sortOption) => dispatch(actions.sortProducts(sortOption)),
    filterProducts: (filterOption) => dispatch(actions.filterProducts(filterOption)),
    reloadProduct: () => dispatch(actions.reloadProduct()),
    addItemToCart: (item) => dispatch(actions.addItemToCart(item)),
    searchProducts: (searchTerm) => dispatch(actions.searchProducts(searchTerm)),
  }



}

export default connect(mapStateToProps, mapDispatchToProps)(Productspage)
