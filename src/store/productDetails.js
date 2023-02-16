import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { put, take, takeEvery, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { 
    getProductDetails
} from "../services/api";

export const actionTypes = {
    productDetailsRequest: "PRODUCT_DETAILS_REQUEST",
    productDetailsSuccess: "PRODUCT_DETAILS_SUCCESS",
    productDetailsFail: "PRODUCT_DETAILS_FAIL",
    clearErrors: "CLEAR_ERRORS"
};

const initialState = {}

const productDetailsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.productDetailsRequest:
            return {
                ...state,
                loading: true,
                productDetails: []
            }
        case actionTypes.productDetailsSuccess:
            return {
                ...state,
                loading: false,
                productDetails: action.payload
            }
        case actionTypes.productDetailsFail:
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
    productDetailsRequest: (id) => ({
        type: actionTypes.productDetailsRequest,
        payload: {
            id
        }
    }),
    productDetailsSuccess: (productDetails) => ({
        type: actionTypes.productDetailsSuccess,
        payload: {
            productDetails
        }
    }),
    productDetailsFail: (error) => ({
        type: actionTypes.productDetailsFail,
        payload: {
            error
        }
    })
}


export function* productDetailsSaga (id) {
    try {
        const product = yield call(getProductDetails, id);
        yield put(actions.productDetailsSuccess(product));
        // toast.success( "Successfully fetched product details" );
    }catch(err) {
        yield put(actions.productDetailsFail(err));
        // toast.success( "Fetching product details failed" );
    }
}

export function* watchProductDetails() {
    while (true) {
        const action = yield take(actionTypes.productDetailsRequest);
        yield call(productDetailsSaga, action.payload.id);
    }
}

const persistConfig = {
    keyPrefix: "ndeals-",
    key: "productDetail",
    storage
}

export default persistReducer( persistConfig, productDetailsReducer );