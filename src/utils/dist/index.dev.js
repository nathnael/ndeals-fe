"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeContent = safeContent;
exports.countTo = exports.parallax = exports.scrollToPageContent = exports.attrFilter = exports.catFilter = exports.getIndex = exports.isEdgeBrowser = exports.isSafariBrowser = exports.isInCompare = exports.isInWishlist = exports.canAddToCart = exports.isInCart = exports.cartQtyTotal = exports.cartPriceTotal = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * get total Price of products in cart.
 * @param { Array } cartItems 
 * @return { Float } totalPrice
 */
var cartPriceTotal = function cartPriceTotal(cartItems) {
  return cartItems.reduce(function (acc, cur) {
    return acc + cur.sum;
  }, 0);
};
/**
 * get number of products in cart
 * @param { Array } cartItems 
 * @return { Integer } numbers of cart items in cartlist
 */


exports.cartPriceTotal = cartPriceTotal;

var cartQtyTotal = function cartQtyTotal(cartItems) {
  return cartItems.reduce(function (acc, cur) {
    return acc + parseInt(cur.qty, 10);
  }, 0);
};
/**
 * Decide where product is in cart.
 * @param { Array } cartItems 
 * @param { Object } product 
 */


exports.cartQtyTotal = cartQtyTotal;

var isInCart = function isInCart(cartItems, product) {
  return cartItems.find(function (item) {
    return item.id === product.id;
  }) ? true : false;
};
/**
 * Confirm if product could be added to cart.
 * @param { Array } cartItems 
 * @param { Object } product 
 * @param { Number } qty 
 */


exports.isInCart = isInCart;

var canAddToCart = function canAddToCart(cartItems, product, qty) {
  var find = cartItems.find(function (item) {
    return item._id === product._id;
  });

  if (find) {
    if (product.stock === 0 || product.stock < find.qty + qty) return false;else return true;
  } else {
    if (product.stock === 0 || product.stock < qty) return false;else return true;
  }
};
/**
 * 
 * @param {Array} wishlist 
 * @param {Object} product 
 */


exports.canAddToCart = canAddToCart;

var isInWishlist = function isInWishlist(wishlist, product) {
  return product && wishlist.findIndex(function (item) {
    return item.slug === product.slug;
  }) > -1;
};
/**
 * 
 * @param {Array} compare 
 * @param {Object} product 
 */


exports.isInWishlist = isInWishlist;

var isInCompare = function isInCompare(compare, product) {
  return product && compare.findIndex(function (item) {
    return item.slug === product.slug;
  }) > -1;
};
/**
 * utils to detect safari browser
 * @return {bool}
 */


exports.isInCompare = isInCompare;

var isSafariBrowser = function isSafariBrowser() {
  var sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1) return true;
  return false;
};
/**
 * utils to detect Edge browser
 * @return {bool}
 */


exports.isSafariBrowser = isSafariBrowser;

var isEdgeBrowser = function isEdgeBrowser() {
  var sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Edge") > -1) return true;
  return false;
};
/**
 * get index of the element
 * @param {Element} element 
 */


exports.isEdgeBrowser = isEdgeBrowser;

var getIndex = function getIndex(element) {
  var children = element.parentElement.children;

  for (var i = 0; i < children.length; i++) {
    if (element === children[i]) return i;
  }

  return 0;
};
/**
 * filter products by category.
 * @param {Array} products 
 * @param {Array} category 
 * @param {Boolean} flag 
 */


exports.getIndex = getIndex;

var catFilter = function catFilter() {
  var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var category = arguments.length > 1 ? arguments[1] : undefined;
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (category[0] === 'All') return products;
  return products.filter(function (item) {
    var _loop = function _loop(i) {
      if (item.category.find(function (cat) {
        return cat.slug === category[i];
      })) {
        if (!flag) return {
          v: true
        };
      } else {
        if (flag) return {
          v: false
        };
      }
    };

    for (var i = 0; i < category.length; i++) {
      var _ret = _loop(i);

      if (_typeof(_ret) === "object") return _ret.v;
    }

    if (flag) return true;else return false;
  });
};
/**
 * filter products by attribute
 * @param {Array} products 
 * @param {String} attr 
 */


exports.catFilter = catFilter;

var attrFilter = function attrFilter() {
  var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var attr = arguments.length > 1 ? arguments[1] : undefined;
  // if(products)
  return products.filter(function (item) {
    if (attr === 'all') {
      return true;
    }

    if (attr === 'sale' && item.sale_price) {
      return true;
    }

    if (attr === 'rated' && item.ratings > 3) {
      return true;
    }

    if (attr === 'until' && item.until) {
      return true;
    }

    return item[attr] === true;
  });
};
/**
 * Scrolling to Page content section
 */


exports.attrFilter = attrFilter;

var scrollToPageContent = function scrollToPageContent() {
  var to = document.querySelector('.page-content').offsetTop - 74;

  if (isSafariBrowser() || isEdgeBrowser()) {
    var pos = window.pageYOffset;
    var timerId = setInterval(function () {
      if (pos <= to) clearInterval(timerId);else {
        window.scrollBy(0, -120);
        pos -= 120;
      }
    }, 1);
  } else {
    window.scrollTo({
      top: to,
      behavior: 'smooth'
    });
  }
};
/**
 * utils to make background parallax
 */


exports.scrollToPageContent = scrollToPageContent;

var parallax = function parallax() {
  var parallax = document.querySelectorAll('.bg-parallax');

  for (var i = 0; i < parallax.length; i++) {
    var y = 0;

    if (parallax[i].classList.contains('header-parallax')) {
      y = (10 - window.pageYOffset) * 47 / 900 + 50;
    } else {
      y = (parallax[i].offsetTop - window.pageYOffset) * 47 / parallax[i].offsetTop + 50;
    }

    parallax[i].style.backgroundPositionY = y + '%';
  }
};
/**
 * utils to set count to in about-2
 */


exports.parallax = parallax;

var countTo = function countTo() {
  var items = document.querySelectorAll('.count');

  if (items) {
    var _loop2 = function _loop2(i) {
      var item = items[i];
      var amount = parseInt(item.getAttribute('data-to'), 10) - parseInt(item.getAttribute('data-from'), 10);
      var time = parseInt(item.getAttribute('data-speed'), 10);
      var interval = parseInt(item.getAttribute('data-refresh-interval'), 10);
      var pt = 0;
      var height = item.parentElement.parentElement.parentElement.offsetTop;
      var flag = 0;
      document.addEventListener("scroll", countToScrollHandler, true);

      function countToScrollHandler() {
        if (pt <= time && height >= window.pageYOffset) {
          if (0 === flag) {
            var timerId = setInterval(function () {
              if (pt >= time) {
                clearInterval(timerId);
              }

              item.innerHTML = parseInt(pt * amount / time);
              pt = pt + interval;
            }, interval);
          }

          flag = 1;
        }
      }
    };

    for (var i = 0; i < items.length; i++) {
      _loop2(i);
    }
  }
};
/**
 * Prevent Xss Attack
 * @param {Node} html 
 */


exports.countTo = countTo;

function safeContent(html) {
  var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Removing the <script> tags

  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, "");
  } // Removing all events from tags...


  html = html.replace(/ on\w+="[^"]*"/g, "");
  return {
    __html: html
  };
}