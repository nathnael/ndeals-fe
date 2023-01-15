"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearErrors = exports.getPriceRange = exports.getUniqueBrands = exports.getUniqueColors = exports.getUniqueSizes = exports.getUniqueCategories = exports.getProductDetails = exports.getProducts = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _productConstants = require("../constants/productConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getProducts = function getProducts() {
  var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  var searchTerm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var priceRange = arguments.length > 3 ? arguments[3] : undefined;
  var categoryState = arguments.length > 4 ? arguments[4] : undefined;
  var sizeState = arguments.length > 5 ? arguments[5] : undefined;
  var colorState = arguments.length > 6 ? arguments[6] : undefined;
  var brandState = arguments.length > 7 ? arguments[7] : undefined;
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

            if (categoryState) {
              link += "&category=".concat(categoryState);
            }

            if (sizeState) {
              link += "&size[in]=".concat(new Array(sizeState));
            }

            if (colorState) {
              link += "&color[in]=".concat(new Array(colorState.map(function (c) {
                return c.substring(1);
              })));
            }

            if (brandState) {
              link += "&brand[in]=".concat(new Array(brandState));
            }

            _context.next = 11;
            return regeneratorRuntime.awrap(_axios["default"].get(link));

          case 11:
            _ref = _context.sent;
            data = _ref.data;
            // console.log("*********************** data: " + JSON.stringify(data))
            // console.log(`Page: ${currentPage}`);
            console.log("Link: ".concat(link));
            dispatch({
              type: _productConstants.ALL_PRODUCTS_SUCCESS,
              payload: data
            });
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _productConstants.ALL_PRODUCTS_FAIL,
              payload: _context.t0.message
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 17]]);
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
};

exports.getUniqueSizes = getUniqueSizes;

var getUniqueColors = function getUniqueColors() {
  return function _callee5(dispatch) {
    var _ref5, data;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            dispatch({
              type: _productConstants.UNIQUE_COLORS_REQUEST
            });
            _context5.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getUniqueColors"));

          case 4:
            _ref5 = _context5.sent;
            data = _ref5.data;
            dispatch({
              type: _productConstants.UNIQUE_COLORS_SUCCESS,
              payload: data
            });
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            dispatch({
              type: _productConstants.UNIQUE_COLORS_FAIL,
              payload: _context5.t0.message
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.getUniqueColors = getUniqueColors;

var getUniqueBrands = function getUniqueBrands() {
  return function _callee6(dispatch) {
    var _ref6, data;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            dispatch({
              type: _productConstants.UNIQUE_BRANDS_REQUEST
            });
            _context6.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getUniqueBrands"));

          case 4:
            _ref6 = _context6.sent;
            data = _ref6.data;
            dispatch({
              type: _productConstants.UNIQUE_BRANDS_SUCCESS,
              payload: data
            });
            _context6.next = 12;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            dispatch({
              type: _productConstants.UNIQUE_BRANDS_FAIL,
              payload: _context6.t0.message
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.getUniqueBrands = getUniqueBrands;

var getPriceRange = function getPriceRange() {
  return function _callee7(dispatch) {
    var _ref7, data;

    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            dispatch({
              type: _productConstants.PRICE_RANGE_REQUEST
            });
            _context7.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getPriceRange"));

          case 4:
            _ref7 = _context7.sent;
            data = _ref7.data;
            dispatch({
              type: _productConstants.PRICE_RANGE_SUCCESS,
              payload: data
            });
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            dispatch({
              type: _productConstants.PRICE_RANGE_FAIL,
              payload: _context7.t0.message
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
}; // Clear Errors


exports.getPriceRange = getPriceRange;

var clearErrors = function clearErrors() {
  return function _callee8(dispatch) {
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            dispatch({
              type: _productConstants.CLEAR_ERRORS
            });

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    });
  };
};

exports.clearErrors = clearErrors;