"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rootSaga;

var _effects = require("redux-saga/effects");

var _cart = require("./cart");

var _wishlist = require("./wishlist");

var _compare = require("./compare");

var _product = require("./product");

var _user = require("./user");

var _productDetails = require("./productDetails");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _cart.cartSaga)(), (0, _wishlist.wishlistSaga)(), (0, _compare.compareSaga)(), (0, _product.getProductsSaga)(), (0, _product.watchGetProducts)(), (0, _productDetails.productDetailsSaga)(), (0, _productDetails.watchProductDetails)(), (0, _product.uniqueCategoriesSaga)(), (0, _user.userLoginSaga)(), (0, _user.userRegisterSaga)(), (0, _user.userLoadSaga)(), (0, _user.userLogoutSaga)(), (0, _product.watchUniqueCategories)(), (0, _product.uniqueSizesSaga)(), (0, _product.watchUniqueSizes)(), (0, _product.uniqueColorsSaga)(), (0, _product.watchUniqueColors)(), (0, _product.uniqueBrandsSaga)(), (0, _product.watchUniqueBrands)(), (0, _product.priceRangeSaga)(), (0, _product.watchPriceRange)(), (0, _user.watchUserLogin)(), (0, _user.watchUserRegister)(), (0, _user.watchUserLoad)(), (0, _user.watchUserLogout)()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}