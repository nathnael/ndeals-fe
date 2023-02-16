"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsSaga = getProductsSaga;
exports.uniqueCategoriesSaga = uniqueCategoriesSaga;
exports.uniqueSizesSaga = uniqueSizesSaga;
exports.uniqueColorsSaga = uniqueColorsSaga;
exports.uniqueBrandsSaga = uniqueBrandsSaga;
exports.priceRangeSaga = priceRangeSaga;
exports.watchGetProducts = watchGetProducts;
exports.watchUniqueCategories = watchUniqueCategories;
exports.watchUniqueSizes = watchUniqueSizes;
exports.watchUniqueColors = watchUniqueColors;
exports.watchUniqueBrands = watchUniqueBrands;
exports.watchPriceRange = watchPriceRange;
exports["default"] = exports.actions = exports.actionTypes = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _effects = require("redux-saga/effects");

var _reactToastify = require("react-toastify");

var _api = require("../services/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(getProductsSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(uniqueCategoriesSaga),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(uniqueSizesSaga),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(uniqueColorsSaga),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(uniqueBrandsSaga),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(priceRangeSaga),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(watchGetProducts),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUniqueCategories),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUniqueSizes),
    _marked10 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUniqueColors),
    _marked11 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUniqueBrands),
    _marked12 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPriceRange);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionTypes = {
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
exports.actionTypes = actionTypes;
var initialState = {};

var productReducer = function productReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.getProductsRequest:
      return _objectSpread({}, state, {
        loading: true,
        products: []
      });

    case actionTypes.getProductsSuccess:
      return _objectSpread({}, state, {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount
      });

    case actionTypes.getProductsFail:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case actionTypes.uniqueCategoriesRequest:
      return _objectSpread({}, state, {
        loading: true
      });

    case actionTypes.uniqueCategoriesSuccess:
      return _objectSpread({}, state, {
        loading: false,
        uniqueCategories: action.payload
      });

    case actionTypes.uniqueCategoriesFail:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case actionTypes.uniqueSizesRequest:
      return _objectSpread({}, state, {
        loading: true
      });

    case actionTypes.uniqueSizesSuccess:
      return _objectSpread({}, state, {
        loading: false,
        uniqueSizes: action.payload
      });

    case actionTypes.uniqueSizesFail:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case actionTypes.uniqueColorsRequest:
      return _objectSpread({}, state, {
        loading: true
      });

    case actionTypes.uniqueColorsSuccess:
      return _objectSpread({}, state, {
        loading: false,
        uniqueColors: action.payload
      });

    case actionTypes.uniqueColorsFail:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case actionTypes.uniqueBrandsRequest:
      return _objectSpread({}, state, {
        loading: true
      });

    case actionTypes.uniqueBrandsSuccess:
      return _objectSpread({}, state, {
        loading: false,
        uniqueBrands: action.payload
      });

    case actionTypes.uniqueBrandsFail:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case actionTypes.priceRangeRequest:
      return _objectSpread({}, state, {
        loading: true
      });

    case actionTypes.priceRangeSuccess:
      return _objectSpread({}, state, {
        loading: false,
        priceRange: action.payload
      });

    case actionTypes.priceRangeFail:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case actionTypes.clearErrors:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

var actions = {
  getProductsRequest: function getProductsRequest() {
    var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
    var searchTerm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var priceRange = arguments.length > 3 ? arguments[3] : undefined;
    var categoryState = arguments.length > 4 ? arguments[4] : undefined;
    var sizeState = arguments.length > 5 ? arguments[5] : undefined;
    var colorState = arguments.length > 6 ? arguments[6] : undefined;
    var brandState = arguments.length > 7 ? arguments[7] : undefined;
    return {
      type: actionTypes.getProductsRequest,
      payload: {
        currentPage: currentPage,
        perPage: perPage,
        searchTerm: searchTerm,
        priceRange: priceRange,
        categoryState: categoryState,
        sizeState: sizeState,
        colorState: colorState,
        brandState: brandState
      }
    };
  },
  getProductsSuccess: function getProductsSuccess(products) {
    return {
      type: actionTypes.getProductsSuccess,
      payload: {
        products: products
      }
    };
  },
  getProductsFail: function getProductsFail(error) {
    return {
      type: actionTypes.getProductsFail,
      payload: {
        error: error
      }
    };
  },
  uniqueCategoriesRequest: function uniqueCategoriesRequest() {
    return {
      type: actionTypes.uniqueCategoriesRequest,
      payload: {}
    };
  },
  uniqueCategoriesSuccess: function uniqueCategoriesSuccess(uniqueCategories) {
    return {
      type: actionTypes.uniqueCategoriesSuccess,
      payload: {
        uniqueCategories: uniqueCategories
      }
    };
  },
  uniqueCategoriesFail: function uniqueCategoriesFail(error) {
    return {
      type: actionTypes.uniqueCategoriesFail,
      payload: {
        error: error
      }
    };
  },
  uniqueSizesRequest: function uniqueSizesRequest() {
    return {
      type: actionTypes.uniqueSizesRequest,
      payload: {}
    };
  },
  uniqueSizesSuccess: function uniqueSizesSuccess(uniqueSizes) {
    return {
      type: actionTypes.uniqueSizesSuccess,
      payload: {
        uniqueSizes: uniqueSizes
      }
    };
  },
  uniqueSizesFail: function uniqueSizesFail(error) {
    return {
      type: actionTypes.uniqueSizesFail,
      payload: {
        error: error
      }
    };
  },
  uniqueColorsRequest: function uniqueColorsRequest() {
    return {
      type: actionTypes.uniqueColorsRequest,
      payload: {}
    };
  },
  uniqueColorsSuccess: function uniqueColorsSuccess(uniqueColors) {
    return {
      type: actionTypes.uniqueColorsSuccess,
      payload: {
        uniqueColors: uniqueColors
      }
    };
  },
  uniqueColorsFail: function uniqueColorsFail(error) {
    return {
      type: actionTypes.uniqueColorsFail,
      payload: {
        error: error
      }
    };
  },
  uniqueBrandsRequest: function uniqueBrandsRequest() {
    return {
      type: actionTypes.uniqueBrandsRequest,
      payload: {}
    };
  },
  uniqueBrandsSuccess: function uniqueBrandsSuccess(uniqueBrands) {
    return {
      type: actionTypes.uniqueBrandsSuccess,
      payload: {
        uniqueBrands: uniqueBrands
      }
    };
  },
  uniqueBrandsFail: function uniqueBrandsFail(error) {
    return {
      type: actionTypes.uniqueBrandsFail,
      payload: {
        error: error
      }
    };
  },
  priceRangeRequest: function priceRangeRequest() {
    return {
      type: actionTypes.priceRangeRequest,
      payload: {}
    };
  },
  priceRangeSuccess: function priceRangeSuccess(priceRange) {
    return {
      type: actionTypes.priceRangeSuccess,
      payload: {
        priceRange: priceRange
      }
    };
  },
  priceRangeFail: function priceRangeFail(error) {
    return {
      type: actionTypes.priceRangeFail,
      payload: {
        error: error
      }
    };
  }
};
exports.actions = actions;

function getProductsSaga() {
  var currentPage,
      perPage,
      searchTerm,
      priceRange,
      categoryState,
      sizeState,
      colorState,
      brandState,
      products,
      _args = arguments;
  return regeneratorRuntime.wrap(function getProductsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          currentPage = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
          perPage = _args.length > 1 && _args[1] !== undefined ? _args[1] : 12;
          searchTerm = _args.length > 2 && _args[2] !== undefined ? _args[2] : "";
          priceRange = _args.length > 3 ? _args[3] : undefined;
          categoryState = _args.length > 4 ? _args[4] : undefined;
          sizeState = _args.length > 5 ? _args[5] : undefined;
          colorState = _args.length > 6 ? _args[6] : undefined;
          brandState = _args.length > 7 ? _args[7] : undefined;
          _context.prev = 8;
          _context.next = 11;
          return (0, _effects.call)(_api.getAllProducts, currentPage, perPage, searchTerm, priceRange, categoryState, sizeState, colorState, brandState);

        case 11:
          products = _context.sent;
          _context.next = 14;
          return (0, _effects.put)(actions.getProductsSuccess(products));

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](8);
          _context.next = 20;
          return (0, _effects.put)(actions.getAllProductsFail(_context.t0));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[8, 16]]);
}

function uniqueCategoriesSaga() {
  var uniqueCategories;
  return regeneratorRuntime.wrap(function uniqueCategoriesSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(_api.getUniqueCategories);

        case 3:
          uniqueCategories = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)(actions.uniqueCategoriesSuccess(uniqueCategories));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return (0, _effects.put)(actions.uniqueCategoriesFail(_context2.t0));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function uniqueSizesSaga() {
  var uniqueSizes;
  return regeneratorRuntime.wrap(function uniqueSizesSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(_api.getUniqueSizes);

        case 3:
          uniqueSizes = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)(actions.uniqueSizesSuccess(uniqueSizes));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return (0, _effects.put)(actions.uniqueSizesFail(_context3.t0));

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function uniqueColorsSaga() {
  var uniqueColors;
  return regeneratorRuntime.wrap(function uniqueColorsSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)(_api.getUniqueColors);

        case 3:
          uniqueColors = _context4.sent;
          _context4.next = 6;
          return (0, _effects.put)(actions.uniqueColorsSuccess(uniqueColors));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return (0, _effects.put)(actions.uniqueColorsFail(_context4.t0));

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function uniqueBrandsSaga() {
  var uniqueBrands;
  return regeneratorRuntime.wrap(function uniqueBrandsSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _effects.call)(_api.getUniqueBrands);

        case 3:
          uniqueBrands = _context5.sent;
          _context5.next = 6;
          return (0, _effects.put)(actions.uniqueBrandsSuccess(uniqueBrands));

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 12;
          return (0, _effects.put)(actions.uniqueBrandsFail(_context5.t0));

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function priceRangeSaga() {
  var priceRange;
  return regeneratorRuntime.wrap(function priceRangeSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _effects.call)(_api.getPriceRange);

        case 3:
          priceRange = _context6.sent;
          _context6.next = 6;
          return (0, _effects.put)(actions.priceRangeSuccess(priceRange));

        case 6:
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 12;
          return (0, _effects.put)(actions.priceRangeFail(_context6.t0));

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

function watchGetProducts() {
  var action;
  return regeneratorRuntime.wrap(function watchGetProducts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (!true) {
            _context7.next = 8;
            break;
          }

          _context7.next = 3;
          return (0, _effects.take)(actionTypes.getProductsRequest);

        case 3:
          action = _context7.sent;
          _context7.next = 6;
          return (0, _effects.call)(getProductsSaga, action.payload.currentPage, action.payload.perPage, action.payload.searchTerm, action.payload.priceRange, action.payload.categoryState, action.payload.sizeState, action.payload.colorState, action.payload.brandState);

        case 6:
          _context7.next = 0;
          break;

        case 8:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchUniqueCategories() {
  return regeneratorRuntime.wrap(function watchUniqueCategories$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (!true) {
            _context8.next = 7;
            break;
          }

          _context8.next = 3;
          return (0, _effects.take)(actionTypes.uniqueCategoriesRequest);

        case 3:
          _context8.next = 5;
          return (0, _effects.call)(uniqueCategoriesSaga);

        case 5:
          _context8.next = 0;
          break;

        case 7:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchUniqueSizes() {
  return regeneratorRuntime.wrap(function watchUniqueSizes$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          if (!true) {
            _context9.next = 7;
            break;
          }

          _context9.next = 3;
          return (0, _effects.take)(actionTypes.uniqueSizesRequest);

        case 3:
          _context9.next = 5;
          return (0, _effects.call)(uniqueSizesSaga);

        case 5:
          _context9.next = 0;
          break;

        case 7:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchUniqueColors() {
  return regeneratorRuntime.wrap(function watchUniqueColors$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          if (!true) {
            _context10.next = 7;
            break;
          }

          _context10.next = 3;
          return (0, _effects.take)(actionTypes.uniqueColorsRequest);

        case 3:
          _context10.next = 5;
          return (0, _effects.call)(uniqueColorsSaga);

        case 5:
          _context10.next = 0;
          break;

        case 7:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchUniqueBrands() {
  return regeneratorRuntime.wrap(function watchUniqueBrands$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          if (!true) {
            _context11.next = 7;
            break;
          }

          _context11.next = 3;
          return (0, _effects.take)(actionTypes.uniqueBrandsRequest);

        case 3:
          _context11.next = 5;
          return (0, _effects.call)(uniqueBrandsSaga);

        case 5:
          _context11.next = 0;
          break;

        case 7:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchPriceRange() {
  return regeneratorRuntime.wrap(function watchPriceRange$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          if (!true) {
            _context12.next = 7;
            break;
          }

          _context12.next = 3;
          return (0, _effects.take)(actionTypes.priceRangeRequest);

        case 3:
          _context12.next = 5;
          return (0, _effects.call)(priceRangeSaga);

        case 5:
          _context12.next = 0;
          break;

        case 7:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

var persistConfig = {
  keyPrefix: "ndeals-",
  key: "product",
  storage: _storage["default"]
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, productReducer);

exports["default"] = _default;