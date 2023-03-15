"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLoginSaga = userLoginSaga;
exports.userRegisterSaga = userRegisterSaga;
exports.userLoadSaga = userLoadSaga;
exports.userLogoutSaga = userLogoutSaga;
exports.watchUserLogin = watchUserLogin;
exports.watchUserRegister = watchUserRegister;
exports.watchUserLoad = watchUserLoad;
exports.watchUserLogout = watchUserLogout;
exports["default"] = exports.actions = exports.actionTypes = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _effects = require("redux-saga/effects");

var _reactToastify = require("react-toastify");

var _api = require("../services/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(userLoginSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(userRegisterSaga),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(userLoadSaga),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(userLogoutSaga),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUserLogin),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUserRegister),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUserLoad),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUserLogout);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionTypes = {
  getLoginRequest: "LOGIN_REQUEST",
  getLoginSuccess: "LOGIN_SUCCESS",
  getLoginFail: "LOGIN_FAIL",
  getLogoutRequest: "LOGOUT_REQUEST",
  getLogoutSuccess: "LOGOUT_SUCCESS",
  getLogoutFail: "LOGOUT_FAIL",
  getRegisterUserRequest: "REGISTER_USER_REQUEST",
  getRegisterUserSuccess: "REGISTER_USER_SUCCESS",
  getRegisterUserFail: "REGISTER_USER_FAIL",
  getLoadUserRequest: "LOAD_USER_REQUEST",
  getLoadUserSuccess: "LOAD_USER_SUCCESS",
  getLoadUserFail: "LOAD_USER_FAIL",
  clearErrors: "CLEAR_ERRORS"
};
exports.actionTypes = actionTypes;
var initialState = {
  user: {}
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.getLoginRequest:
    case actionTypes.getRegisterUserRequest:
    case actionTypes.getLoadUserRequest:
      return {
        loading: true,
        isAuthenticated: false
      };

    case actionTypes.getLoginSuccess:
    case actionTypes.getRegisterUserSuccess:
    case actionTypes.getLoadUserSuccess:
      return _objectSpread({}, state, {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null
      });

    case actionTypes.getLoginFail:
    case actionTypes.getRegisterUserFail:
      return _objectSpread({}, state, {
        loading: false,
        user: null,
        error: action.payload.error
      });

    case actionTypes.getLogoutRequest:
      return {
        loading: true
      };

    case actionTypes.getLogoutSuccess:
      return _objectSpread({}, state, {
        loading: false,
        isAuthenticated: false,
        user: null
      });

    case actionTypes.getLogoutFail:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case actionTypes.getLoadUserFail:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload
      };

    case actionTypes.clearErrors:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
};

var actions = {
  getLoginRequest: function getLoginRequest(email, password) {
    return {
      type: actionTypes.getLoginRequest,
      payload: {
        email: email,
        password: password
      }
    };
  },
  getLoginSuccess: function getLoginSuccess(user) {
    return {
      type: actionTypes.getLoginSuccess,
      payload: {
        user: user
      }
    };
  },
  getLoginFail: function getLoginFail(error) {
    return {
      type: actionTypes.getLoginFail,
      payload: {
        error: error
      }
    };
  },
  getRegisterUserRequest: function getRegisterUserRequest(userData) {
    return {
      type: actionTypes.getRegisterUserRequest,
      payload: {
        userData: userData
      }
    };
  },
  getRegisterUserSuccess: function getRegisterUserSuccess(user) {
    return {
      type: actionTypes.getRegisterUserSuccess,
      payload: {
        user: user
      }
    };
  },
  getRegisterUserFail: function getRegisterUserFail(error) {
    return {
      type: actionTypes.getRegisterUserFail,
      payload: {
        error: error
      }
    };
  },
  getLoadUserRequest: function getLoadUserRequest() {
    return {
      type: actionTypes.getLoadUserRequest,
      payload: {}
    };
  },
  getLoadUserSuccess: function getLoadUserSuccess(user) {
    return {
      type: actionTypes.getLoadUserSuccess,
      payload: {
        user: user
      }
    };
  },
  getLoadUserFail: function getLoadUserFail(error) {
    return {
      type: actionTypes.getLoadUserFail,
      payload: {
        error: error
      }
    };
  },
  getLogoutRequest: function getLogoutRequest() {
    return {
      type: actionTypes.getLogoutRequest
    };
  },
  getLogoutSuccess: function getLogoutSuccess() {
    return {
      type: actionTypes.getLogoutSuccess
    };
  },
  getLogoutFail: function getLogoutFail(error) {
    return {
      type: actionTypes.getLogoutFail,
      payload: {
        error: error
      }
    };
  }
};
exports.actions = actions;

function userLoginSaga(email, password) {
  var user;
  return regeneratorRuntime.wrap(function userLoginSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_api.userLogin, email, password);

        case 3:
          user = _context.sent;

          if (!user) {
            _context.next = 9;
            break;
          }

          _context.next = 7;
          return (0, _effects.put)(actions.getLoginSuccess(user));

        case 7:
          _context.next = 11;
          break;

        case 9:
          _context.next = 11;
          return (0, _effects.put)(actions.getLoginFail('Wrong Email and Password combination.'));

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          _context.next = 17;
          return (0, _effects.put)(actions.getLoginFail(_context.t0));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 13]]);
}

function userRegisterSaga(userData) {
  var user;
  return regeneratorRuntime.wrap(function userRegisterSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(_api.userRegister, userData);

        case 3:
          user = _context2.sent;

          if (!user) {
            _context2.next = 9;
            break;
          }

          _context2.next = 7;
          return (0, _effects.put)(actions.getRegisterUserSuccess(user));

        case 7:
          _context2.next = 11;
          break;

        case 9:
          _context2.next = 11;
          return (0, _effects.put)(actions.getRegisterUserFail('User registration failed.'));

        case 11:
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 17;
          return (0, _effects.put)(actions.getRegisterUserFail(_context2.t0));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 13]]);
}

function userLoadSaga() {
  var user;
  return regeneratorRuntime.wrap(function userLoadSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(_api.loadUser);

        case 3:
          user = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)(actions.getLoadUserSuccess(user));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return (0, _effects.put)(actions.getLoadUserFail(_context3.t0));

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function userLogoutSaga() {
  return regeneratorRuntime.wrap(function userLogoutSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)(_api.userLogout);

        case 3:
          _context4.next = 5;
          return (0, _effects.put)(actions.getLogoutSuccess());

        case 5:
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 11;
          return (0, _effects.put)(actions.getLogoutFail(_context4.t0));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function watchUserLogin() {
  var action;
  return regeneratorRuntime.wrap(function watchUserLogin$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (!true) {
            _context5.next = 8;
            break;
          }

          _context5.next = 3;
          return (0, _effects.take)(actionTypes.getLoginRequest);

        case 3:
          action = _context5.sent;
          _context5.next = 6;
          return (0, _effects.call)(userLoginSaga, action.payload.email, action.payload.password);

        case 6:
          _context5.next = 0;
          break;

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchUserRegister() {
  var action;
  return regeneratorRuntime.wrap(function watchUserRegister$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!true) {
            _context6.next = 8;
            break;
          }

          _context6.next = 3;
          return (0, _effects.take)(actionTypes.getRegisterUserRequest);

        case 3:
          action = _context6.sent;
          _context6.next = 6;
          return (0, _effects.call)(userRegisterSaga, action.payload.userData);

        case 6:
          _context6.next = 0;
          break;

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchUserLoad() {
  return regeneratorRuntime.wrap(function watchUserLoad$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (!true) {
            _context7.next = 7;
            break;
          }

          _context7.next = 3;
          return (0, _effects.take)(actionTypes.getLoadUserRequest);

        case 3:
          _context7.next = 5;
          return (0, _effects.call)(userLoadSaga);

        case 5:
          _context7.next = 0;
          break;

        case 7:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchUserLogout() {
  return regeneratorRuntime.wrap(function watchUserLogout$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (!true) {
            _context8.next = 7;
            break;
          }

          _context8.next = 3;
          return (0, _effects.take)(actionTypes.getLogoutRequest);

        case 3:
          _context8.next = 5;
          return (0, _effects.call)(userLogoutSaga);

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

var persistConfig = {
  keyPrefix: "ndeals-",
  key: "user",
  storage: _storage["default"]
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, userReducer);

exports["default"] = _default;