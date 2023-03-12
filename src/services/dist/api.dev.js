"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchImages = fetchImages;
exports.userLogout = exports.userRegister = exports.userLogin = exports.getPriceRange = exports.getUniqueBrands = exports.getUniqueColors = exports.getUniqueSizes = exports.getUniqueCategories = exports.getProductDetails = exports.getAllProducts = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function fetchImages(_ref) {
  var count = _ref.count;
  return _axios["default"].get('/images', {
    params: {
      count: count
    }
  });
}

var getAllProducts = function getAllProducts() {
  var currentPage,
      perPage,
      searchTerm,
      priceRange,
      categoryState,
      sizeState,
      colorState,
      brandState,
      link,
      _ref2,
      data,
      _args = arguments;

  return regeneratorRuntime.async(function getAllProducts$(_context) {
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
          } // console.log(`************************************Link: ${link}`)


          _context.next = 18;
          return regeneratorRuntime.awrap(_axios["default"].get(link));

        case 18:
          _ref2 = _context.sent;
          data = _ref2.data;
          return _context.abrupt("return", data);

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](8);
          console.log("Error: ".concat(_context.t0));

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 23]]);
};

exports.getAllProducts = getAllProducts;

var getProductDetails = function getProductDetails(id) {
  var _ref3, data;

  return regeneratorRuntime.async(function getProductDetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (!id) {
            _context2.next = 8;
            break;
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/product/".concat(id)));

        case 4:
          _ref3 = _context2.sent;
          data = _ref3.data;
          console.log("id: ".concat(id));
          return _context2.abrupt("return", data);

        case 8:
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.log("Error: ".concat(_context2.t0));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getProductDetails = getProductDetails;

var getUniqueCategories = function getUniqueCategories() {
  var _ref4, data;

  return regeneratorRuntime.async(function getUniqueCategories$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getUniqueCategories"));

        case 3:
          _ref4 = _context3.sent;
          data = _ref4.data;
          return _context3.abrupt("return", data);

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log("Error: ".concat(_context3.t0));

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getUniqueCategories = getUniqueCategories;

var getUniqueSizes = function getUniqueSizes() {
  var _ref5, data;

  return regeneratorRuntime.async(function getUniqueSizes$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getUniqueSizes"));

        case 3:
          _ref5 = _context4.sent;
          data = _ref5.data;
          return _context4.abrupt("return", data);

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log("Error: ".concat(_context4.t0));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getUniqueSizes = getUniqueSizes;

var getUniqueColors = function getUniqueColors() {
  var _ref6, data;

  return regeneratorRuntime.async(function getUniqueColors$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getUniqueColors"));

        case 3:
          _ref6 = _context5.sent;
          data = _ref6.data;
          return _context5.abrupt("return", data);

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.log("Error: ".concat(_context5.t0));

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getUniqueColors = getUniqueColors;

var getUniqueBrands = function getUniqueBrands() {
  var _ref7, data;

  return regeneratorRuntime.async(function getUniqueBrands$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getUniqueBrands"));

        case 3:
          _ref7 = _context6.sent;
          data = _ref7.data;
          return _context6.abrupt("return", data);

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.log("Error: ".concat(_context6.t0));

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getUniqueBrands = getUniqueBrands;

var getPriceRange = function getPriceRange() {
  var _ref8, data;

  return regeneratorRuntime.async(function getPriceRange$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/getPriceRange"));

        case 3:
          _ref8 = _context7.sent;
          data = _ref8.data;
          return _context7.abrupt("return", data);

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.log("Error: ".concat(_context7.t0));

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getPriceRange = getPriceRange;

var userLogin = function userLogin(email, password) {
  var config, _ref9, data;

  return regeneratorRuntime.async(function userLogin$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;

          if (!(email && password)) {
            _context8.next = 8;
            break;
          }

          config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context8.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].post("/api/v1/login", {
            email: email,
            password: password
          }, config));

        case 5:
          _ref9 = _context8.sent;
          data = _ref9.data;
          return _context8.abrupt("return", data);

        case 8:
          _context8.next = 12;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.userLogin = userLogin;

var userRegister = function userRegister(userData) {
  var config, _ref10, data;

  return regeneratorRuntime.async(function userRegister$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;

          if (!userData) {
            _context9.next = 8;
            break;
          }

          config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }; // console.log(`userData: ${JSON.stringify(userData)}`)

          _context9.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].post("/api/v1/register", userData, config));

        case 5:
          _ref10 = _context9.sent;
          data = _ref10.data;
          return _context9.abrupt("return", data);

        case 8:
          _context9.next = 12;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);

        case 12:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 10]]);
}; // export const loadUser = async () => {
//     try {
//         // console.log(`userData: ${JSON.stringify(userData)}`)
//         const { data } = await axios.get(`/api/v1/me`);
//         // console.log(`password: ${password}`)
//         return data;
//     } catch (error) {
//         // console.log(`Error: ${error}`);
//     }
// };


exports.userRegister = userRegister;

var userLogout = function userLogout() {
  var _ref11, data;

  return regeneratorRuntime.async(function userLogout$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("/api/v1/logout"));

        case 3:
          _ref11 = _context10.sent;
          data = _ref11.data;
          return _context10.abrupt("return", data);

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          console.log("Error: ".concat(_context10.t0));

        case 11:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.userLogout = userLogout;