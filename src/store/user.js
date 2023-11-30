import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { put, take, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
    userLogin,
    userGoogleLogin,
    userFacebookLogin,
    userRegister,
    userLogout,
    loadUser,
} from "../services/api";

export const actionTypes = {
    getLoginRequest: "LOGIN_REQUEST",
    getLoginSuccess: "LOGIN_SUCCESS",
    getLoginFail: "LOGIN_FAIL",
    getGoogleLoginRequest: "GOOGLE_LOGIN_REQUEST",
    getGoogleLoginSuccess: "GOOGLE_LOGIN_SUCCESS",
    getGoogleLoginFail: "GOOGLE_LOGIN_FAIL",
    getFacebookLoginRequest: "FACEBOOK_LOGIN_REQUEST",
    getFacebookLoginSuccess: "FACEBOOK_LOGIN_SUCCESS",
    getFacebookLoginFail: "FACEBOOK_LOGIN_FAIL",
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
        case actionTypes.getGoogleLoginRequest:
        case actionTypes.getFacebookLoginRequest:
        case actionTypes.getRegisterUserRequest:
        case actionTypes.getLoadUserRequest:
            return {
                loading: true,
                isAuthenticated: false
            }
        case actionTypes.getLoginSuccess:
        case actionTypes.getGoogleLoginSuccess:
        case actionTypes.getFacebookLoginSuccess:
        case actionTypes.getRegisterUserSuccess:
        case actionTypes.getLoadUserSuccess:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            }
        case actionTypes.getLoginFail:
        case actionTypes.getGoogleLoginFail:
        case actionTypes.getFacebookLoginFail:
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
        case actionTypes.getLoadUserFail:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
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
    getGoogleLoginRequest: (userData) => ({
        type: actionTypes.getGoogleLoginRequest,
        payload: {
            userData
        }
    }),
    getGoogleLoginSuccess: (user) => ({
        type: actionTypes.getGoogleLoginSuccess,
        payload: {
            user
        }
    }),
    getGoogleLoginFail: (error) => ({
        type: actionTypes.getGoogleLoginFail,
        payload: {
            error
        }
    }),
    getFacebookLoginRequest: (userData) => ({
        type: actionTypes.getFacebookLoginRequest,
        payload: {
            userData
        }
    }),
    getFacebookLoginSuccess: (user) => ({
        type: actionTypes.getFacebookLoginSuccess,
        payload: {
            user
        }
    }),
    getFacebookLoginFail: (error) => ({
        type: actionTypes.getFacebookLoginFail,
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
    getLoadUserRequest: () => ({
        type: actionTypes.getLoadUserRequest,
        payload: {}
    }),
    getLoadUserSuccess: (user) => ({
        type: actionTypes.getLoadUserSuccess,
        payload: {
            user
        }
    }),
    getLoadUserFail: (error) => ({
        type: actionTypes.getLoadUserFail,
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

export function* userGoogleLoginSaga (userData) {
    try {
        const user = yield call(userGoogleLogin, userData);
        if (user) {
            yield put(actions.getGoogleLoginSuccess(user))
        }            
        else {
            yield put(actions.getGoogleLoginFail('Signing with Google SSO failed.'));
        } 
    }catch(err) {
        yield put(actions.getGoogleLoginFail(err));
    }
}

export function* userFacebookLoginSaga (userData) {
    try {
        const user = yield call(userFacebookLogin, userData);
        if (user) {
            yield put(actions.getFacebookLoginSuccess(user))
        }            
        else {
            yield put(actions.getFacebookLoginFail('Signing with Facebook SSO failed.'));
        } 
    }catch(err) {
        yield put(actions.getFacebookLoginFail(err));
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

export function* userLoadSaga () {
    try {
        const user = yield call(loadUser);
        yield put(actions.getLoadUserSuccess(user));
        // toast.success( "Successfully fetched unique categories list" );
    }catch(err) {
        yield put(actions.getLoadUserFail(err));
        // toast.success( "Fetching unique categories list failed" );
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

export function* watchUserGoogleLogin() {
    while (true) {
        const action = yield take(actionTypes.getGoogleLoginRequest);
        yield call(userGoogleLoginSaga, action.payload.userData);
    }
}

export function* watchUserFacebookLogin() {
    while (true) {
        const action = yield take(actionTypes.getFacebookLoginRequest);
        yield call(userFacebookLoginSaga, action.payload.userData);
    }
}

export function* watchUserRegister() {
    while (true) {
        const action = yield take(actionTypes.getRegisterUserRequest);
        yield call(userRegisterSaga, action.payload.userData);
    }
}

export function* watchUserLoad() {
    while (true) {
        yield take(actionTypes.getLoadUserRequest);
        yield call(userLoadSaga);
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