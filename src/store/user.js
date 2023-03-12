import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { put, take, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
    userLogin,
    userRegister,
    userLogout,
} from "../services/api";

export const actionTypes = {
    getLoginRequest: "LOGIN_REQUEST",
    getLoginSuccess: "LOGIN_SUCCESS",
    getLoginFail: "LOGIN_FAIL",
    getLogoutRequest: "LOGOUT_REQUEST",
    getLogoutSuccess: "LOGOUT_SUCCESS",
    getLogoutFail: "LOGOUT_FAIL",
    getRegisterUserRequest: "REGISTER_USER_REQUEST",
    getRegisterUserSuccess: "REGISTER_USER_SUCCESS",
    getRegisterUserFail: "REGISTER_USER_FAIL",
    getLoadUserRequest: "LOAD_USER_REQUEST",
    getLoadUserSuccess: "LOAD_USER_SUCCESS",
    getLoadUserFail: "LOAD_USER_FAIL",
    clearErrors: "CLEAR_ERRORS",
};


const initialState = { user: {} }

const userReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.getLoginRequest:
        case actionTypes.getRegisterUserRequest:
        // case actionTypes.getLoadUserRequest:
            return {
                loading: true,
                isAuthenticated: false
            }
        case actionTypes.getLoginSuccess:
        case actionTypes.getRegisterUserSuccess:
        // case actionTypes.getLoadUserSuccess:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            }
        // case actionTypes.getLoadUserFail:
        //     return {
        //         loading: false,
        //         isAuthenticated: false,
        //         user: null,
        //         error: action.payload
        //     }
        case actionTypes.getLoginFail:
        case actionTypes.getRegisterUserFail:        
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload.error,
            }
        case actionTypes.getLogoutRequest:
            return {
                loading: true,
            }
        case actionTypes.getLogoutSuccess:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
            }
        case actionTypes.getLogoutFail:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case actionTypes.clearErrors: 
            return {
                ...state,
                error: null,
            }
        default: 
            return state;
    }
}

export const actions = {
    getLoginRequest: (email, password) => ({
        type: actionTypes.getLoginRequest,
        payload: {
            email,
            password,
        }
    }),
    getLoginSuccess: (user) => ({
        type: actionTypes.getLoginSuccess,
        payload: {
            user
        }
    }),
    getLoginFail: (error) => ({
        type: actionTypes.getLoginFail,
        payload: {
            error
        }
    }),
    getRegisterUserRequest: (userData) => ({
        type: actionTypes.getRegisterUserRequest,
        payload: {
            userData
        }
    }),
    getRegisterUserSuccess: (user) => ({
        type: actionTypes.getRegisterUserSuccess,
        payload: {
            user
        }
    }),
    getRegisterUserFail: (error) => ({
        type: actionTypes.getRegisterUserFail,
        payload: {
            error
        }
    }),
    getLogoutRequest: () => ({
        type: actionTypes.getLogoutRequest
    }),
    getLogoutSuccess: () => ({
        type: actionTypes.getLogoutSuccess
    }),
    getLogoutFail: (error) => ({
        type: actionTypes.getLogoutFail,
        payload: {
            error
        }
    }),
}


export function* userLoginSaga (email, password) {
    try {
        const user = yield call(userLogin, email, password);
        if (user) {
            yield put(actions.getLoginSuccess(user))
        }            
        else {
            yield put(actions.getLoginFail('Wrong Email and Password combination.'));
        } 
    }catch(err) {
        yield put(actions.getLoginFail(err));
    }
}

export function* userRegisterSaga (userData) {
    try {
        const user = yield call(userRegister, userData);
        if (user) {
            yield put(actions.getRegisterUserSuccess(user))
        }            
        else {
            yield put(actions.getRegisterUserFail('User registration failed.'));
        }
    }catch(err) {
        yield put(actions.getRegisterUserFail(err));
    }
}

export function* userLogoutSaga () {
    try {
        yield call(userLogout);
        yield put(actions.getLogoutSuccess());
    }catch(err) {
        yield put(actions.getLogoutFail(err));
    }
}

export function* watchUserLogin() {
    while (true) {
        const action = yield take(actionTypes.getLoginRequest);
        yield call(userLoginSaga, action.payload.email, action.payload.password);
    }
}

export function* watchUserRegister() {
    while (true) {
        const action = yield take(actionTypes.getRegisterUserRequest);
        yield call(userRegisterSaga, action.payload.userData);
    }
}

export function* watchUserLogout() {
    while (true) {
        yield take(actionTypes.getLogoutRequest);
        yield call(userLogoutSaga);
    }
}

const persistConfig = {
    keyPrefix: "ndeals-",
    key: "user",
    storage
}

export default persistReducer( persistConfig, userReducer );