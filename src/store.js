import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import { productReducers, productDetailsReducer, uniqueCategoriesReducer } from './reducers/productReducers';

const reducer = {
    products: productReducers,
    productDetails: productDetailsReducer,
    uniqueCategories: uniqueCategoriesReducer
}

let initialState = {};

const middleware = [thunk];


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools: process.env.NODE_ENV !== 'production',
    initialState
})


export default store;