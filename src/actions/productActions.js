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
    UNIQUE_COLORS_REQUEST,
    UNIQUE_COLORS_SUCCESS,
    UNIQUE_COLORS_FAIL,
    UNIQUE_BRANDS_REQUEST,
    UNIQUE_BRANDS_SUCCESS,
    UNIQUE_BRANDS_FAIL,
    PRICE_RANGE_REQUEST,
    PRICE_RANGE_SUCCESS,
    PRICE_RANGE_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const getProducts = (currentPage=1, perPage=12, searchTerm="", priceRange, categoryState, sizeState, colorState, brandState) => async (dispatch) => {
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
        if (colorState) {
            link += `&color[in]=${new Array(colorState.map((c) => c.substring(1)))}`;
        }
        if (brandState) {
            link += `&brand[in]=${new Array(brandState)}`;
        }

        let { data } = await axios.get(link);        

        // console.log("*********************** data: " + JSON.stringify(data))
        // console.log(`Page: ${currentPage}`);
        console.log(`Link: ${link}`);

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
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
        dispatch({
            type: UNIQUE_SIZES_FAIL,
            payload: error.message
        })
    }
};

export const getUniqueColors = () => async (dispatch) => {
    try {
        dispatch({ type: UNIQUE_COLORS_REQUEST });

        const { data } = await axios.get(`/api/v1/getUniqueColors`);

        dispatch({
            type: UNIQUE_COLORS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UNIQUE_COLORS_FAIL,
            payload: error.message
        })
    }
};

export const getUniqueBrands = () => async (dispatch) => {
    try {
        dispatch({ type: UNIQUE_BRANDS_REQUEST });

        const { data } = await axios.get(`/api/v1/getUniqueBrands`);

        dispatch({
            type: UNIQUE_BRANDS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UNIQUE_BRANDS_FAIL,
            payload: error.message
        })
    }
};

export const getPriceRange = () => async (dispatch) => {
    try {
        dispatch({ type: PRICE_RANGE_REQUEST });

        const { data } = await axios.get(`/api/v1/getPriceRange`);

        dispatch({
            type: PRICE_RANGE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRICE_RANGE_FAIL,
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