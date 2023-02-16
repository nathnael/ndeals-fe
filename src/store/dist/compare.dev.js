"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareSaga = compareSaga;
exports["default"] = exports.actions = exports.actionTypes = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _effects = require("redux-saga/effects");

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(compareSaga);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var actionTypes = {
  addToCompare: 'ADD_TO_COMPARE',
  removeFromCompare: 'REMOVE_FROM_COMPARE',
  clearAllFromCompare: 'CLEAR_ALL_FROM_COMPARE',
  refreshStore: 'REFRESH_STORE'
};
exports.actionTypes = actionTypes;
var initialState = {
  data: []
};

var compareReducer = function compareReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.addToCompare:
      var findIndex = state.data.findIndex(function (item) {
        return item.id == action.payload.product.id;
      });

      if (findIndex == -1) {
        return {
          data: [].concat(_toConsumableArray(state.data), [action.payload.product])
        };
      }

    case actionTypes.removeFromCompare:
      return {
        data: state.data.filter(function (item) {
          return item.id != action.payload.product.id;
        })
      };

    case actionTypes.clearAllFromCompare:
      return initialState;

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

var actions = {
  addToCompare: function addToCompare(product) {
    return {
      type: actionTypes.addToCompare,
      payload: {
        product: product
      }
    };
  },
  removeFromCompare: function removeFromCompare(product) {
    return {
      type: actionTypes.removeFromCompare,
      payload: {
        product: product
      }
    };
  },
  clearAllFromCompare: function clearAllFromCompare() {
    return {
      type: actionTypes.clearAllFromCompare,
      payload: {}
    };
  },
  refreshStore: function refreshStore() {
    return {
      type: actionTypes.refreshStore,
      payload: {}
    };
  }
};
exports.actions = actions;

function compareSaga() {
  return regeneratorRuntime.wrap(function compareSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(actionTypes.addToCompare,
          /*#__PURE__*/
          regeneratorRuntime.mark(function saga(e) {
            return regeneratorRuntime.wrap(function saga$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _reactToastify.toast.success("Product added to Compare");

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, saga);
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

var persistConfig = {
  keyPrefix: 'ndeals-',
  key: 'compare',
  storage: _storage["default"]
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, compareReducer);

exports["default"] = _default;