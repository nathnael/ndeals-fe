import axios from 'axios';

import { 
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    UNIQUE_CATEGORIES_REQUEST,
    UNIQUE_CATEGORIES_SUCCESS,
    UNIQUE_CATEGORIES_FAIL,
    UNIQUE_SIZES_REQUEST,
    UNIQUE_SIZES_SUCCESS,
    UNIQUE_SIZES_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const getProducts = (currentPage=1, perPage=12, searchTerm="", priceRange, categoryState, sizeState) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        let link = `/api/v1/products?page=${currentPage}&perPage=${perPage}`;
        
        if (searchTerm!=="" && searchTerm!==null) {
            link += `&keyword=${searchTerm}`;
        } 
        if (priceRange!==undefined&&priceRange!=="" && priceRange!==null) {
            if (priceRange.min!=="" && priceRange.min!==null&&priceRange.max!=="" && priceRange.max!==null)
                link += `&price[gte]=${priceRange.min}&price[lte]=${priceRange.max}`;
        }
        if (categoryState) {
            link += `&category=${categoryState}`;
        }
        if (sizeState) {
            link += `&size[in]=${new Array(sizeState)}`;
        }

        let { data } = await axios.get(link);        

        console.log("*********************** data: " + JSON.stringify(data))
        console.log(`Page: ${currentPage}`);
        console.log(`Link: ${link}`);

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("***************** Axios Error Thrown - " + error.message);
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.message
        })
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("***************** Axios Error Thrown - " + error.message);
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.message
        })
    }
};

export const getUniqueCategories = () => async (dispatch) => {
    try {
        dispatch({ type: UNIQUE_CATEGORIES_REQUEST });

        const { data } = await axios.get(`/api/v1/getUniqueCategories`);

        dispatch({
            type: UNIQUE_CATEGORIES_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("***************** Axios Error Thrown - " + error.message);
        dispatch({
            type: UNIQUE_CATEGORIES_FAIL,
            payload: error.message
        })
    }
};

export const getUniqueSizes = () => async (dispatch) => {
    try {
        dispatch({ type: UNIQUE_SIZES_REQUEST });

        const { data } = await axios.get(`/api/v1/getUniqueSizes`);

        dispatch({
            type: UNIQUE_SIZES_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("***************** Axios Error Thrown - " + error.message);
        dispatch({
            type: UNIQUE_SIZES_FAIL,
            payload: error.message
        })
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}