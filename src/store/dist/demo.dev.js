"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.actions = exports.actionTypes = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionTypes = {
  showQuick: 'SHOW_QUICKVIEW',
  hideQuick: 'HIDE_QUICKVIEW',
  showVideo: 'SHOW_VIDEO',
  hideVideo: 'HIDE_VIDEO',
  refreshStore: 'REFRESH_STORE'
};
exports.actionTypes = actionTypes;
var initialState = {
  current: process.env.NEXT_PUBLIC_DEMO,
  single: null,
  quickShow: false,
  videoShow: false
};

var demoReducer = function demoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.showQuick:
      return _objectSpread({}, state, {
        single: action.payload.slug,
        quickShow: true
      });

    case actionTypes.hideQuick:
      return _objectSpread({}, state, {
        quickShow: false,
        single: null
      });

    case actionTypes.showVideo:
      return _objectSpread({}, state, {
        videoShow: true
      });

    case actionTypes.hideVideo:
      return _objectSpread({}, state, {
        videoShow: false
      });

    case actionTypes.refreshStore:
      return {
        current: action.payload.current,
        single: null,
        quickShow: false,
        videoShow: false
      };

    default:
      return state;
  }
};

var actions = {
  refreshStore: function refreshStore(current) {
    return {
      type: actionTypes.refreshStore,
      payload: {
        current: current
      }
    };
  },
  showQuickView: function showQuickView(slug) {
    return {
      type: actionTypes.showQuick,
      payload: {
        slug: slug
      }
    };
  },
  hideQuick: function hideQuick() {
    return {
      type: actionTypes.hideQuick
    };
  },
  showVideo: function showVideo() {
    return {
      type: actionTypes.showVideo
    };
  },
  hideVideo: function hideVideo() {
    return {
      type: actionTypes.hideVideo
    };
  }
};
exports.actions = actions;
var persistConfig = {
  keyPrefix: "ndeals-",
  key: "demo",
  storage: _storage["default"]
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, demoReducer);

exports["default"] = _default;