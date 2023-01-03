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

export const productReducers = (state = { products: []}, action) => {
    switch(action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }
        default: 
            return state;
    }
};

export const productDetailsReducer = (state = {product : {}}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: null
            }
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const uniqueCategoriesReducer = (state = {uniqueCategories : []}, action) => {
    switch (action.type) {
        case UNIQUE_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UNIQUE_CATEGORIES_SUCCESS:
            return {
                loading: false,
                uniqueCategories: action.payload
            }
        case UNIQUE_CATEGORIES_FAIL:
            return {
                ...state,
                error: null
            }
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const uniqueSizesReducer = (state = {uniqueSizes : []}, action) => {
    switch (action.type) {
        case UNIQUE_SIZES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UNIQUE_SIZES_SUCCESS:
            return {
                loading: false,
                uniqueSizes: action.payload
            }
        case UNIQUE_SIZES_FAIL:
            return {
                ...state,
                error: null
            }
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}