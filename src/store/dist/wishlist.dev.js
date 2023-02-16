"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wishlistSaga = wishlistSaga;
exports["default"] = exports.actions = exports.actionTypes = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _effects = require("redux-saga/effects");

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(wishlistSaga);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var actionTypes = {
  addToWishlist: 'ADD_TO_WISHLIST',
  removeFromWishlist: 'REMOVE_FROM_WISHLIST',
  refreshStore: 'REFRESH_STORE'
};
exports.actionTypes = actionTypes;
var initialState = {
  data: []
};

var wishlistReducer = function wishlistReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.addToWishlist:
      var findIndex = state.data.findIndex(function (item) {
        return item.id === action.payload.product.id;
      });

      if (findIndex == -1) {
        return {
          data: [].concat(_toConsumableArray(state.data), [action.payload.product])
        };
      }

    case actionTypes.removeFromWishlist:
      return {
        data: state.data.filter(function (item) {
          return item.id !== action.payload.product.id;
        })
      };

    case actionTypes.updateWishlist:
      return {
        data: _toConsumableArray(action.payload.wishlistItems)
      };

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

var actions = {
  addToWishlist: function addToWishlist(product) {
    return {
      type: actionTypes.addToWishlist,
      payload: {
        product: product
      }
    };
  },
  removeFromWishlist: function removeFromWishlist(product) {
    return {
      type: actionTypes.removeFromWishlist,
      payload: {
        product: product
      }
    };
  }
};
exports.actions = actions;

function wishlistSaga() {
  return regeneratorRuntime.wrap(function wishlistSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(actionTypes.addToWishlist,
          /*#__PURE__*/
          regeneratorRuntime.mark(function saga(e) {
            return regeneratorRuntime.wrap(function saga$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _reactToastify.toast.success("Product added to Wishlist");

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, saga);
          }));

        case 2:
          _context3.next = 4;
          return (0, _effects.takeEvery)(actionTypes.removeFromWishlist,
          /*#__PURE__*/
          regeneratorRuntime.mark(function saga(e) {
            return regeneratorRuntime.wrap(function saga$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _reactToastify.toast.success("Product removed from Wishlist");

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, saga);
          }));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked);
}

var persistConfig = {
  keyPrefix: "ndeals-",
  key: 'wishlist',
  storage: _storage["default"]
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, wishlistReducer);

exports["default"] = _default;