"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartSaga = cartSaga;
exports["default"] = exports.actions = exports.actionTypes = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _effects = require("redux-saga/effects");

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(cartSaga);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var actionTypes = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  refreshStore: "REFRESH_STORE",
  updateCart: "UPDATE_CART"
};
exports.actionTypes = actionTypes;
var initialState = {
  data: []
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.addToCart:
      var findIndex = state.data.findIndex(function (item) {
        return item.id == action.payload.product.id;
      });
      var qty = action.payload.qty ? action.payload.qty : 1;

      if (findIndex !== -1 && action.payload.product.variants.length > 0) {
        findIndex = state.data.findIndex(function (item) {
          return item.name == action.payload.product.name;
        });
      }

      if (findIndex !== -1) {
        return {
          data: _toConsumableArray(state.data.reduce(function (acc, product, index) {
            if (findIndex == index) {
              acc.push(_objectSpread({}, product, {
                qty: product.qty + qty,
                sum: (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price) * (product.qty + qty)
              }));
            } else {
              acc.push(product);
            }

            return acc;
          }, []))
        };
      } else {
        return {
          data: [].concat(_toConsumableArray(state.data), [_objectSpread({}, action.payload.product, {
            qty: qty,
            price: action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price,
            sum: qty * (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price)
          })])
        };
      }

    case actionTypes.removeFromCart:
      return {
        data: _toConsumableArray(state.data.filter(function (item) {
          if (item.id !== action.payload.product.id) return true;
          if (item.name !== action.payload.product.name) return true;
          return false;
        }))
      };

    case actionTypes.updateCart:
      return {
        data: _toConsumableArray(action.payload.cartItems)
      };

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

var actions = {
  addToCart: function addToCart(product) {
    var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return {
      type: actionTypes.addToCart,
      payload: {
        product: product,
        qty: qty
      }
    };
  },
  removeFromCart: function removeFromCart(product) {
    return {
      type: actionTypes.removeFromCart,
      payload: {
        product: product
      }
    };
  },
  updateCart: function updateCart(cartItems) {
    return {
      type: actionTypes.updateCart,
      payload: {
        cartItems: cartItems
      }
    };
  }
};
exports.actions = actions;

function cartSaga() {
  return regeneratorRuntime.wrap(function cartSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeEvery)(actionTypes.addToCart,
          /*#__PURE__*/
          regeneratorRuntime.mark(function saga(e) {
            return regeneratorRuntime.wrap(function saga$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _reactToastify.toast.success("Product added to Cart");

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, saga);
          }));

        case 2:
          _context4.next = 4;
          return (0, _effects.takeEvery)(actionTypes.removeFromCart,
          /*#__PURE__*/
          regeneratorRuntime.mark(function saga(e) {
            return regeneratorRuntime.wrap(function saga$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _reactToastify.toast.success("Product removed from Cart");

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, saga);
          }));

        case 4:
          _context4.next = 6;
          return (0, _effects.takeEvery)(actionTypes.updateCart,
          /*#__PURE__*/
          regeneratorRuntime.mark(function saga(e) {
            return regeneratorRuntime.wrap(function saga$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _reactToastify.toast.success("Cart updated successfully");

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, saga);
          }));

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked);
}

var persistConfig = {
  keyPrefix: "molla-",
  key: "cart",
  storage: _storage["default"]
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, cartReducer);

exports["default"] = _default;