"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productDetailsSaga = productDetailsSaga;
exports.watchProductDetails = watchProductDetails;
exports["default"] = exports.actions = exports.actionTypes = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _effects = require("redux-saga/effects");

var _reactToastify = require("react-toastify");

var _api = require("../services/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(productDetailsSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(watchProductDetails);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionTypes = {
  productDetailsRequest: "PRODUCT_DETAILS_REQUEST",
  productDetailsSuccess: "PRODUCT_DETAILS_SUCCESS",
  productDetailsFail: "PRODUCT_DETAILS_FAIL",
  clearErrors: "CLEAR_ERRORS"
};
exports.actionTypes = actionTypes;
var initialState = {};

var productDetailsReducer = function productDetailsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.productDetailsRequest:
      return _objectSpread({}, state, {
        loading: true,
        productDetails: []
      });

    case actionTypes.productDetailsSuccess:
      return _objectSpread({}, state, {
        loading: false,
        productDetails: action.payload
      });

    case actionTypes.productDetailsFail:
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
  productDetailsRequest: function productDetailsRequest(id) {
    return {
      type: actionTypes.productDetailsRequest,
      payload: {
        id: id
      }
    };
  },
  productDetailsSuccess: function productDetailsSuccess(productDetails) {
    return {
      type: actionTypes.productDetailsSuccess,
      payload: {
        productDetails: productDetails
      }
    };
  },
  productDetailsFail: function productDetailsFail(error) {
    return {
      type: actionTypes.productDetailsFail,
      payload: {
        error: error
      }
    };
  }
};
exports.actions = actions;

function productDetailsSaga(id) {
  var product;
  return regeneratorRuntime.wrap(function productDetailsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_api.getProductDetails, id);

        case 3:
          product = _context.sent;
          _context.next = 6;
          return (0, _effects.put)(actions.productDetailsSuccess(product));

        case 6:
          _reactToastify.toast.success("Successfully fetched product details");

          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          _context.next = 13;
          return (0, _effects.put)(actions.productDetailsFail(_context.t0));

        case 13:
          _reactToastify.toast.success("Fetching product details failed");

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function watchProductDetails() {
  var action;
  return regeneratorRuntime.wrap(function watchProductDetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!true) {
            _context2.next = 8;
            break;
          }

          _context2.next = 3;
          return (0, _effects.take)(actionTypes.productDetailsRequest);

        case 3:
          action = _context2.sent;
          _context2.next = 6;
          return (0, _effects.call)(productDetailsSaga, action.payload.id);

        case 6:
          _context2.next = 0;
          break;

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

var persistConfig = {
  keyPrefix: "ndeals-",
  key: "productDetail",
  storage: _storage["default"]
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, productDetailReducer);

exports["default"] = _default;