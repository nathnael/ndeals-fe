import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { put, take, takeEvery, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { 
    getAllProducts, 
    getPriceRange, 
    getUniqueBrands, 
    getUniqueCategories, 
    getUniqueColors, 
    getUniqueSizes 
} from "../services/api";

export const actionTypes = {
    getProductsRequest: "ALL_PRODUCTS_REQUEST",
    getProductsSuccess: "ALL_PRODUCTS_SUCCESS",
    getProductsFail: "ALL_PRODUCTS_FAIL",
    uniqueCategoriesRequest: "UNIQUE_CATEGORIES_REQUEST",
    uniqueCategoriesSuccess: "UNIQUE_CATEGORIES_SUCCESS",
    uniqueCategoriesFail: "UNIQUE_CATEGORIES_FAIL",
    uniqueSizesRequest: "UNIQUE_SIZES_REQUEST",
    uniqueSizesSuccess: "UNIQUE_SIZES_SUCCESS",
    uniqueSizesFail: "UNIQUE_SIZES_FAIL",
    uniqueColorsRequest: "UNIQUE_COLORS_REQUEST",
    uniqueColorsSuccess: "UNIQUE_COLORS_SUCCESS",
    uniqueColorsFail: "UNIQUE_COLORS_FAIL",
    uniqueBrandsRequest: "UNIQUE_BRANDS_REQUEST",
    uniqueBrandsSuccess: "UNIQUE_BRANDS_SUCCESS",
    uniqueBrandsFail: "UNIQUE_BRANDS_FAIL",
    priceRangeRequest: "PRICE_RANGE_REQUEST",
    priceRangeSuccess: "PRICE_RANGE_SUCCESS",
    priceRangeFail: "PRICE_RANGE_FAIL",
    clearErrors: "CLEAR_ERRORS"
};

const initialState = {}

const productReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.getProductsRequest:
            return {
                ...state,
                loading: true,
                products: []
            }
        case actionTypes.getProductsSuccess:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case actionTypes.getProductsFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.uniqueCategoriesRequest:
            return {
                ...state,
                loading: true
            }
        case actionTypes.uniqueCategoriesSuccess:
            return {
                ...state,
                loading: false,
                uniqueCategories: action.payload
            }
        case actionTypes.uniqueCategoriesFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.uniqueSizesRequest:
            return {
                ...state,
                loading: true
            }
        case actionTypes.uniqueSizesSuccess:
            return {
                ...state,
                loading: false,
                uniqueSizes: action.payload
            }
        case actionTypes.uniqueSizesFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.uniqueColorsRequest:
            return {
                ...state,
                loading: true
            }
        case actionTypes.uniqueColorsSuccess:
            return {
                ...state,
                loading: false,
                uniqueColors: action.payload
            }
        case actionTypes.uniqueColorsFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.uniqueBrandsRequest:
            return {
                ...state,
                loading: true
            }
        case actionTypes.uniqueBrandsSuccess:
            return {
                ...state,
                loading: false,
                uniqueBrands: action.payload
            }
        case actionTypes.uniqueBrandsFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.priceRangeRequest:
            return {
                ...state,
                loading: true
            }
        case actionTypes.priceRangeSuccess:
            return {
                ...state,
                loading: false,
                priceRange: action.payload
            }
        case actionTypes.priceRangeFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.clearErrors: 
            return {
                ...state,
                error: null
            }
        default: 
            return state;
    }
}

export const actions = {
    getProductsRequest: (currentPage=1, perPage=12, searchTerm="", priceRange, categoryState, sizeState, colorState, brandState) => ({
        type: actionTypes.getProductsRequest,
        payload: {
            currentPage,
            perPage,
            searchTerm, 
            priceRange, 
            categoryState, 
            sizeState, 
            colorState, 
            brandState
        }
    }),
    getProductsSuccess: (products) => ({
        type: actionTypes.getProductsSuccess,
        payload: {
            products
        }
    }),
    getProductsFail: (error) => ({
        type: actionTypes.getProductsFail,
        payload: {
            error
        }
    }),
    uniqueCategoriesRequest: () => ({
        type: actionTypes.uniqueCategoriesRequest,
        payload: {}
    }),
    uniqueCategoriesSuccess: (uniqueCategories) => ({
        type: actionTypes.uniqueCategoriesSuccess,
        payload: {
            uniqueCategories
        }
    }),
    uniqueCategoriesFail: (error) => ({
        type: actionTypes.uniqueCategoriesFail,
        payload: {
            error
        }
    }),
    uniqueSizesRequest: () => ({
        type: actionTypes.uniqueSizesRequest,
        payload: {}
    }),
    uniqueSizesSuccess: (uniqueSizes) => ({
        type: actionTypes.uniqueSizesSuccess,
        payload: {
            uniqueSizes
        }
    }),
    uniqueSizesFail: (error) => ({
        type: actionTypes.uniqueSizesFail,
        payload: {
            error
        }
    }),
    uniqueColorsRequest: () => ({
        type: actionTypes.uniqueColorsRequest,
        payload: {}
    }),
    uniqueColorsSuccess: (uniqueColors) => ({
        type: actionTypes.uniqueColorsSuccess,
        payload: {
            uniqueColors
        }
    }),
    uniqueColorsFail: (error) => ({
        type: actionTypes.uniqueColorsFail,
        payload: {
            error
        }
    }),
    uniqueBrandsRequest: () => ({
        type: actionTypes.uniqueBrandsRequest,
        payload: {}
    }),
    uniqueBrandsSuccess: (uniqueBrands) => ({
        type: actionTypes.uniqueBrandsSuccess,
        payload: {
            uniqueBrands
        }
    }),
    uniqueBrandsFail: (error) => ({
        type: actionTypes.uniqueBrandsFail,
        payload: {
            error
        }
    }),
    priceRangeRequest: () => ({
        type: actionTypes.priceRangeRequest,
        payload: {}
    }),
    priceRangeSuccess: (priceRange) => ({
        type: actionTypes.priceRangeSuccess,
        payload: {
            priceRange
        }
    }),
    priceRangeFail: (error) => ({
        type: actionTypes.priceRangeFail,
        payload: {
            error
        }
    })
}

export function* getProductsSaga (currentPage=1, perPage=12, searchTerm="", priceRange, categoryState, sizeState, colorState, brandState) {
    try {
        const products = yield call(getAllProducts, currentPage, perPage, searchTerm, priceRange, categoryState, sizeState, colorState, brandState);
        yield put(actions.getProductsSuccess(products));
        // toast.success( "Successfully fetched Filtered products list" );
    }catch(err) {
        yield put(actions.getAllProductsFail(err));
        // toast.success( "Fetching filtered products list failed" );
    }
}

export function* uniqueCategoriesSaga () {
    try {
        const uniqueCategories = yield call(getUniqueCategories);
        yield put(actions.uniqueCategoriesSuccess(uniqueCategories));
        // toast.success( "Successfully fetched unique categories list" );
    }catch(err) {
        yield put(actions.uniqueCategoriesFail(err));
        // toast.success( "Fetching unique categories list failed" );
    }
}

export function* uniqueSizesSaga () {
    try {
        const uniqueSizes = yield call(getUniqueSizes);
        yield put(actions.uniqueSizesSuccess(uniqueSizes));
        // toast.success( "Successfully fetched unique sizes list" );
    }catch(err) {
        yield put(actions.uniqueSizesFail(err));
        // toast.success( "Fetching unique sizes list failed" );
    }
}

export function* uniqueColorsSaga () {
    try {
        const uniqueColors = yield call(getUniqueColors);
        yield put(actions.uniqueColorsSuccess(uniqueColors));
        // toast.success( "Successfully fetched unique colors list" );
    }catch(err) {
        yield put(actions.uniqueColorsFail(err));
        // toast.success( "Fetching unique colors list failed" );
    }
}

export function* uniqueBrandsSaga () {
    try {
        const uniqueBrands = yield call(getUniqueBrands);
        yield put(actions.uniqueBrandsSuccess(uniqueBrands));
        // toast.success( "Successfully fetched unique brands list" );
    }catch(err) {
        yield put(actions.uniqueBrandsFail(err));
        // toast.success( "Fetching unique brands list failed" );
    }
}

export function* priceRangeSaga () {
    try {
        const priceRange = yield call(getPriceRange);
        yield put(actions.priceRangeSuccess(priceRange));
        // toast.success( "Successfully fetched price range" );
    }catch(err) {
        yield put(actions.priceRangeFail(err));
        // toast.success( "Fetching price range failed" );
    }
}

export function* watchGetProducts() {
    while (true) {
        const action = yield take(actionTypes.getProductsRequest);
        yield call(getProductsSaga, action.payload.currentPage, action.payload.perPage, action.payload.searchTerm, action.payload.priceRange, action.payload.categoryState, action.payload.sizeState, action.payload.colorState, action.payload.brandState);
    }
}

export function* watchUniqueCategories() {
    while (true) {
        yield take(actionTypes.uniqueCategoriesRequest);
        yield call(uniqueCategoriesSaga);
    }
}

export function* watchUniqueSizes() {
    while (true) {
        yield take(actionTypes.uniqueSizesRequest);
        yield call(uniqueSizesSaga);
    }
}

export function* watchUniqueColors() {
    while (true) {
        yield take(actionTypes.uniqueColorsRequest);
        yield call(uniqueColorsSaga);
    }
}

export function* watchUniqueBrands() {
    while (true) {
        yield take(actionTypes.uniqueBrandsRequest);
        yield call(uniqueBrandsSaga);
    }
}

export function* watchPriceRange() {
    while (true) {
        yield take(actionTypes.priceRangeRequest);
        yield call(priceRangeSaga);
    }
}

const persistConfig = {
    keyPrefix: "ndeals-",
    key: "product",
    storage
}

export default persistReducer( persistConfig, productReducer );