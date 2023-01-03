"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearErrors = exports.getUniqueSizes = exports.getUniqueCategories = exports.getProductDetails = exports.getProducts = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _productConstants = require("../constants/productConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getProducts = function getProducts() {
  var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  var searchTerm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var priceRange = arguments.length > 3 ? arguments[3] : undefined;
  var category = arguments.length > 4 ? arguments[4] : undefined;
  return function _callee(dispatch) {
    var link, _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: _productConstants.ALL_PRODUCTS_REQUEST
            });
            link = "/api/v1/products?page=".concat(currentPage, "&perPage=").concat(perPage);

            if (searchTerm !== "" && searchTerm !== null) {
              link += "&keyword=".concat(searchTerm);
            }

            if (priceRange !== undefined && priceRange !== "" && priceRange !== null) {
              if (priceRange.min !== "" && priceRange.min !== null && priceRange.max !== "" && priceRange.max !== null) link += "&price[gte]=".concat(priceRange.min, "&price[lte]=").concat(priceRange.max);
            }

            if (category) {
              link += "&category=".concat(category);
            }

            _context.next = 8;
            return regeneratorRuntime.awrap(_axios["default"].get(link));

          case 8:
            _ref = _context.sent;
            data = _ref.data;
            console.log("*********************** data: " + JSON.stringify(data));
            console.log("Page: ".concat(currentPage));
            console.log("Link: ".concat(link));
            dispatch({
              type: _productConstants.ALL_PRODUCTS_SUCCESS,
              payload: data
            });
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            // console.log("***************** Axios Error Thrown - " + error.message);
            dispatch({
              type: _productConstants.ALL_PRODUCTS_FAIL,
              payload: _context.t0.message
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 16]]);
  };
};

exports.getProducts = getProducts;

var getProductDetails = function getProductDetails(id) {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_REQUEST
            });
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/product/".concat(id)));

          case 4:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_SUCCESS,
              payload: data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            // console.log("***************** Axios Error Thrown - " + error.message);
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_FAIL,
              payload: _context2.t0.message
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.getProductDetails = getProductDetails;

var getUniqueCategories = function getUniqueCategories() {
  return function _callee3(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            dispatch({
              type: _productConstants.UNIQUE_CATEGORIES_REQUEST
            });
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getUniqueCategories"));

          case 4:
            _ref3 = _context3.sent;
            data = _ref3.data;
            dispatch({
              type: _productConstants.UNIQUE_CATEGORIES_SUCCESS,
              payload: data
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            // console.log("***************** Axios Error Thrown - " + error.message);
            dispatch({
              type: _productConstants.UNIQUE_CATEGORIES_FAIL,
              payload: _context3.t0.message
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.getUniqueCategories = getUniqueCategories;

var getUniqueSizes = function getUniqueSizes() {
  return function _callee4(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            dispatch({
              type: _productConstants.UNIQUE_SIZES_REQUEST
            });
            _context4.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getUniqueSizes"));

          case 4:
            _ref4 = _context4.sent;
            data = _ref4.data;
            dispatch({
              type: _productConstants.UNIQUE_SIZES_SUCCESS,
              payload: data
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            // console.log("***************** Axios Error Thrown - " + error.message);
            dispatch({
              type: _productConstants.UNIQUE_SIZES_FAIL,
              payload: _context4.t0.message
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
}; // Clear Errors


exports.getUniqueSizes = getUniqueSizes;

var clearErrors = function clearErrors() {
  return function _callee5(dispatch) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dispatch({
              type: _productConstants.CLEAR_ERRORS
            });

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.clearErrors = clearErrors;