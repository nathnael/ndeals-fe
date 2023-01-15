"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _productReducers = require("./reducers/productReducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducer = {
  products: _productReducers.productReducers,
  productDetails: _productReducers.productDetailsReducer,
  uniqueCategories: _productReducers.uniqueCategoriesReducer,
  uniqueSizes: _productReducers.uniqueSizesReducer,
  uniqueColors: _productReducers.uniqueColorsReducer,
  uniqueBrands: _productReducers.uniqueBrandsReducer,
  priceRange: _productReducers.priceRangeReducer
};
var initialState = {};
var _middleware = [_reduxThunk["default"]];
var store = (0, _toolkit.configureStore)({
  reducer: reducer,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_middleware);
  },
  devTools: process.env.NODE_ENV !== 'production',
  initialState: initialState
});
var _default = store;
exports["default"] = _default;