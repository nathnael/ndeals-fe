import { all } from 'redux-saga/effects';
import { cartSaga } from './cart';
import { wishlistSaga } from './wishlist';
import { compareSaga } from './compare';
import { 
    getProductsSaga, 
    priceRangeSaga, 
    uniqueBrandsSaga, 
    uniqueCategoriesSaga, 
    uniqueColorsSaga, 
    uniqueSizesSaga,
    watchGetProducts,
    watchPriceRange,    
    watchUniqueBrands,
    watchUniqueCategories,
    watchUniqueColors,
    watchUniqueSizes,
} from './product';
import {
    userLoginSaga,
    userGoogleLoginSaga,
    userFacebookLoginSaga,
    userRegisterSaga,
    userLogoutSaga,
    watchUserLogin,
    watchUserGoogleLogin,
    watchUserFacebookLogin,
    watchUserRegister,
    watchUserLogout,
    userLoadSaga,
    watchUserLoad,
} from './user';

import {
    productDetailsSaga,
    watchProductDetails 
} from './productDetails';

export default function* rootSaga () {
    yield all( [
        cartSaga(),
        wishlistSaga(),
        compareSaga(),
        getProductsSaga(),
        watchGetProducts(),
        productDetailsSaga(),
        watchProductDetails(),
        uniqueCategoriesSaga(),
        userLoginSaga(),
        userGoogleLoginSaga(),
        watchUserGoogleLogin(),
        userFacebookLoginSaga(),
        watchUserFacebookLogin(),
        userRegisterSaga(),
        userLoadSaga(),
        userLogoutSaga(),
        watchUniqueCategories(),
        uniqueSizesSaga(),
        watchUniqueSizes(),
        uniqueColorsSaga(),
        watchUniqueColors(),
        uniqueBrandsSaga(),
        watchUniqueBrands(),
        priceRangeSaga(),
        watchPriceRange(),
        watchUserLogin(),
        watchUserRegister(),
        watchUserLoad(),
        watchUserLogout(),
    ] );
}