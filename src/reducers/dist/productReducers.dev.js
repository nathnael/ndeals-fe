"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.priceRangeReducer = exports.uniqueBrandsReducer = exports.uniqueColorsReducer = exports.uniqueSizesReducer = exports.uniqueCategoriesReducer = exports.productDetailsReducer = exports.productReducers = void 0;

var _productConstants = require("../constants/productConstants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productReducers = function productReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    products: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: []
      };

    case _productConstants.ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount
      };

    case _productConstants.ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    case _productConstants.CLEAR_ERRORS:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

exports.productReducers = productReducers;

var productDetailsReducer = function productDetailsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    product: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_DETAILS_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _productConstants.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      };

    case _productConstants.PRODUCT_DETAILS_FAIL:
      return _objectSpread({}, state, {
        error: null
      });

    case _productConstants.CLEAR_ERRORS:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

exports.productDetailsReducer = productDetailsReducer;

var uniqueCategoriesReducer = function uniqueCategoriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    uniqueCategories: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.UNIQUE_CATEGORIES_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _productConstants.UNIQUE_CATEGORIES_SUCCESS:
      return {
        loading: false,
        uniqueCategories: action.payload
      };

    case _productConstants.UNIQUE_CATEGORIES_FAIL:
      return _objectSpread({}, state, {
        error: null
      });

    case _productConstants.CLEAR_ERRORS:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

exports.uniqueCategoriesReducer = uniqueCategoriesReducer;

var uniqueSizesReducer = function uniqueSizesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    uniqueSizes: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.UNIQUE_SIZES_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _productConstants.UNIQUE_SIZES_SUCCESS:
      return {
        loading: false,
        uniqueSizes: action.payload
      };

    case _productConstants.UNIQUE_SIZES_FAIL:
      return _objectSpread({}, state, {
        error: null
      });

    case _productConstants.CLEAR_ERRORS:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

exports.uniqueSizesReducer = uniqueSizesReducer;

var uniqueColorsReducer = function uniqueColorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    uniqueColors: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.UNIQUE_COLORS_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _productConstants.UNIQUE_COLORS_SUCCESS:
      return {
        loading: false,
        uniqueColors: action.payload
      };

    case _productConstants.UNIQUE_COLORS_FAIL:
      return _objectSpread({}, state, {
        error: null
      });

    case _productConstants.CLEAR_ERRORS:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

exports.uniqueColorsReducer = uniqueColorsReducer;

var uniqueBrandsReducer = function uniqueBrandsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    uniqueBrands: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.UNIQUE_BRANDS_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _productConstants.UNIQUE_BRANDS_SUCCESS:
      return {
        loading: false,
        uniqueBrands: action.payload
      };

    case _productConstants.UNIQUE_BRANDS_FAIL:
      return _objectSpread({}, state, {
        error: null
      });

    case _productConstants.CLEAR_ERRORS:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

exports.uniqueBrandsReducer = uniqueBrandsReducer;

var priceRangeReducer = function priceRangeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    priceRange: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRICE_RANGE_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _productConstants.PRICE_RANGE_SUCCESS:
      return {
        loading: false,
        priceRange: action.payload
      };

    case _productConstants.PRICE_RANGE_FAIL:
      return _objectSpread({}, state, {
        error: null
      });

    case _productConstants.CLEAR_ERRORS:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

exports.priceRangeReducer = priceRangeReducer;