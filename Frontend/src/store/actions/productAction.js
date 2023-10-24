
import { DeleteProduct, UpdateProduct } from '../../services/productService';
import actionTypes from './actionTypes';

export const fetchProductsSuccess = (products) => {

    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
};
export const reloadProduct = () => {

    return {
        type: actionTypes.RELOAD_PRODUCT,

    };
};
export const searchProducts = (searchTerm) => {
    return {
        type: actionTypes.SEARCH_PRODUCTS,
        payload: searchTerm,
    };
};

export const sortProducts = (sortOption) => {
    return {
        type: actionTypes.SORT_PRODUCTS,
        payload: sortOption,
    };
};

export const filterProducts = (filterOption) => {
    return {
        type: actionTypes.FILTER_PRODUCTS,
        payload: filterOption,
    };
};
export const getProductInfo = (ProductID) => {
    return {
        type: actionTypes.GET_PRODUCT_INFO,
        payload: ProductID,
    };
};
