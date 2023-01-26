"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _rootSaga = _interopRequireDefault(require("./root-saga"));

var _cart = _interopRequireDefault(require("./cart"));

var _wishlist = _interopRequireDefault(require("./wishlist"));

var _compare = _interopRequireDefault(require("./compare"));

var _product = _interopRequireDefault(require("./product"));

var _productDetails = _interopRequireDefault(require("./productDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import Reducers
// Create a root reducer by combining the individual reducers
var rootReducers = (0, _toolkit.combineReducers)({
  cartlist: _cart["default"],
  wishlist: _wishlist["default"],
  comparelist: _compare["default"],
  productList: _product["default"],
  productDetails: _productDetails["default"]
}); // Create a persist config for the root reducer

var persistConfig = {
  key: 'root',
  storage: _storage["default"]
}; // Apply the react-persist to the root reducer

var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducers); // Create the saga middleware

var sagaMiddleware = (0, _reduxSaga["default"])(); // Create the store with the persisted reducer and saga middleware

var store = (0, _toolkit.configureStore)({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [sagaMiddleware]
}); // Create a persistor to save the state in the browser

exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store); // Run the sagas

exports.persistor = persistor;
sagaMiddleware.run(_rootSaga["default"]);