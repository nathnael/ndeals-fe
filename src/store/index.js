import { combineReducers, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

// Import Reducers
import cartReducer from "./cart";
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import productReducer from './product';
import productDetailsReducer from './productDetails';
import userReducer from './user';

// Create a root reducer by combining the individual reducers
const rootReducers = combineReducers({
    cartlist: cartReducer,
    wishlist: wishlistReducer,
    comparelist: compareReducer,
    productList: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
});

// Create a persist config for the root reducer
const persistConfig = {
    key: 'root',
    storage,
};

// Apply the react-persist to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store with the persisted reducer and saga middleware
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [sagaMiddleware],
});

// Create a persistor to save the state in the browser
const persistor = persistStore(store);

// Run the sagas
sagaMiddleware.run(rootSaga);

export { store, persistor };