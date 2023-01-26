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
} from "../__constants/productConstants";

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

export const uniqueColorsReducer = (state = {uniqueColors : []}, action) => {
    switch (action.type) {
        case UNIQUE_COLORS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UNIQUE_COLORS_SUCCESS:
            return {
                loading: false,
                uniqueColors: action.payload
            }
        case UNIQUE_COLORS_FAIL:
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

export const uniqueBrandsReducer = (state = {uniqueBrands : []}, action) => {
    switch (action.type) {
        case UNIQUE_BRANDS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UNIQUE_BRANDS_SUCCESS:
            return {
                loading: false,
                uniqueBrands: action.payload
            }
        case UNIQUE_BRANDS_FAIL:
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

export const priceRangeReducer = (state = {priceRange : []}, action) => {
    switch (action.type) {
        case PRICE_RANGE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRICE_RANGE_SUCCESS:
            return {
                loading: false,
                priceRange: action.payload
            }
        case PRICE_RANGE_FAIL:
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