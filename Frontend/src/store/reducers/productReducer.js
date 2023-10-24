// reducers.js
import actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    filteredProducts: [],
    product: {},
    searchproducts: []
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_SUCCESS:

            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload,
            };
        case actionTypes.RELOAD_PRODUCT:

            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload,
            };
        case actionTypes.GET_PRODUCT_INFO:
            const ProductID = action.payload;
            console.log(ProductID);
            console.log('Get Product', state.products)
            // Tìm kiếm sản phẩm trong danh sách products dựa trên productID
            const productInfo = state.products.find(
                (product) => +product.id === +ProductID
            );
            console.log('Get Product', productInfo)

            // Nếu tìm thấy sản phẩm, cập nhật state với thông tin sản phẩm
            if (productInfo) {
                return {
                    ...state,
                    product: productInfo,
                    error: null,
                };
            } else {
                // Nếu không tìm thấy sản phẩm, cập nhật state với thông báo lỗi
                return {
                    ...state,
                    product: {},
                    error: 'Không tìm thấy thông tin sản phẩm',
                };
            }
        case actionTypes.SEARCH_PRODUCTS:

            const searchTerm = action.payload.toLowerCase();
            let searchProducts = state.products.filter((product) =>
                product.ProductName.toLowerCase().includes(searchTerm)
            );
            return {
                ...state,
                filteredProducts: searchProducts,
                searchproducts: searchProducts
            };
        case actionTypes.SORT_PRODUCTS:
            const sortOption = action.payload;

            let sortedProducts = [...state.filteredProducts];


            switch (sortOption.sort) {
                case "name":
                    if (sortOption.order === 'asc') {
                        sortedProducts.sort((a, b) => a.ProductName.localeCompare(b.ProductName));
                    } else if (sortOption.order === 'desc') {
                        sortedProducts.sort((a, b) => b.ProductName.localeCompare(a.ProductName));
                    }
                    return {
                        ...state,
                        filteredProducts: sortedProducts,
                    };
                case "price":
                    if (sortOption.order === 'asc') {
                        sortedProducts.sort((a, b) => a.DiscountedPrice - b.DiscountedPrice);
                    } else if (sortOption.order === 'desc') {
                        console.log(123);
                        sortedProducts.sort((a, b) => b.DiscountedPrice - a.DiscountedPrice);
                    }
                    return {
                        ...state,
                        filteredProducts: sortedProducts,
                    };
                default:
                    break;
            }
            break;
        case actionTypes.FILTER_PRODUCTS:
            const filterOption = action.payload;
            console.log(filterOption)
            const priceRanges = [
                null,
                { maxPrice: 5000000 },
                { minPrice: 5000000, maxPrice: 10000000 },
                { minPrice: 10000000, maxPrice: 15000000 },
                { minPrice: 15000000 },
            ];

            let filteredProducts = state.products;

            // Lọc theo giá
            const priceFilter = filterOption.find((option) => option.name === 'price');
            if (priceFilter) {
                const selectedPriceRange = priceRanges[parseInt(priceFilter.value)];
                if (selectedPriceRange) {
                    filteredProducts = filteredProducts.filter((product) => {
                        const { minPrice, maxPrice } = selectedPriceRange;
                        return (
                            (!minPrice || product.DiscountedPrice >= minPrice) &&
                            (!maxPrice || product.DiscountedPrice <= maxPrice)
                        );
                    });
                }
            }

            // Lọc theo nhà sản xuất
            const manufacturerFilters = filterOption.filter(
                (option) => option.name === 'manufacturer[]'
            );
            if (manufacturerFilters.length > 0) {
                const selectedManufacturers = manufacturerFilters.map(
                    (filter) => filter.value
                );
                filteredProducts = filteredProducts.filter((product) =>
                    selectedManufacturers.includes(product.BrandName)
                );
            }

            return {
                ...state,
                filteredProducts,
            };
        default:
            return state;
    }
};

export default productReducer;