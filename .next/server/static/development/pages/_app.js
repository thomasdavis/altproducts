module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  api: {
    host: "https://remittance-server.herokuapp.com"
  }
});

/***/ }),

/***/ "./libs/device.js":
/*!************************!*\
  !*** ./libs/device.js ***!
  \************************/
/*! exports provided: platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return platform; });
// When building a cross platform hybrid app, there are a lot of permutations
// of potential device/platforms
// e.g. The user is running the app in Safari on an Android Tablet
// e.g. The user is running the app in an App on an an android Tablet
// e.g. The user is GoogleBot
// Potential flags are listed below, initially we will have Touch/Desktop
// isTouch
// isDesktop
// isIOS
// isAndroid
// isBrowser
// isApp
// isSpider
// isGoogleBot
// isIpod
// isIpad
// isIphone
// Note from TD - Seems like overkill, but in my experience of building consumer
// apps, fixing bugs for these individual platforms will popup quickly
// In the future, a lot of these flags will be parsed from the User Agent
var isTouch = isMobileDevice();
var platform = {
  isTouch: isTouch
}; // https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript

function isMobileDevice() {
  if (typeof window === "undefined") {
    return null; // TODO We should use user agents to detect this
  }

  return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/merge */ "lodash/merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _libs_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../libs/device */ "./libs/device.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_9__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var getTheme = function getTheme(_ref) {
  var touch = _ref.touch;
  return {
    color: {
      yellow: color__WEBPACK_IMPORTED_MODULE_6___default()("#F7D051"),
      black: color__WEBPACK_IMPORTED_MODULE_6___default()("#252525"),
      grey: color__WEBPACK_IMPORTED_MODULE_6___default()("#EFEFEF"),
      white: color__WEBPACK_IMPORTED_MODULE_6___default()("#FFFFFF"),
      red: color__WEBPACK_IMPORTED_MODULE_6___default()("#D36135"),
      green: color__WEBPACK_IMPORTED_MODULE_6___default()("#7FB069")
    },
    fontFamily: {
      heading: "EB Garamond, serif",
      body: "Source Sans Pro, sans-serif"
    },
    fontSize: {
      title: touch ? "34px" : "63px",
      subTitle: "24px",
      body: "18px"
    },
    lineHeight: {
      title: touch ? "34px" : "61px",
      subTitle: "24px",
      body: "26px"
    }
  };
};

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      auth: null,
      user: {
        username: ""
      },
      showTemper: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkAuth",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                url: _config__WEBPACK_IMPORTED_MODULE_7__["default"].api.host + "/auth",
                withCredentials: true
              });

            case 2:
              response = _context.sent;
              setTimeout(function () {
                if (window.FS) {
                  if (response.data.username) {
                    window.FS.identify(response.data.username);
                    FS.identify(md5__WEBPACK_IMPORTED_MODULE_9___default()(response.data.username), {
                      displayName: response.data.username
                    });
                  }
                }
              }, 10000);

              _this.setState({
                auth: response.data.auth,
                user: {
                  username: response.data.username || null
                }
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAuth", function (auth) {
      _this.setState({
        auth: auth
      });
    });

    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.checkAuth();
      setTimeout(function () {
        if (typeof window !== "undefined" && typeof $ !== "undefined") {
          var viewheight = $(window).height();
          var viewwidth = $(window).width();
          var viewport = document.querySelector("meta[name=viewport]");
          viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
        }
      }, 300);
      setTimeout(function () {
        _this2.setState({
          showTemper: true
        });
      }, 30000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var _this$state = this.state,
          auth = _this$state.auth,
          user = _this$state.user,
          showTemper = _this$state.showTemper; // This ain't as easy as it sounds - TD

      var isReallyTouch = pageProps.pMobile ? true : _libs_device__WEBPACK_IMPORTED_MODULE_8__["platform"].isTouch;
      var appProps = lodash_merge__WEBPACK_IMPORTED_MODULE_5___default()({}, pageProps, {
        auth: auth,
        checkAuth: this.checkAuth,
        user: user,
        isTouch: isReallyTouch
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
        theme: getTheme({
          touch: isReallyTouch
        })
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, appProps)), showTemper && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        "data-id": "doqfoueb",
        src: "https://temper.io/d.js",
        class: "temper",
        async: true
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
        var Component, router, ctx, query, pMobile, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Component = _ref3.Component, router = _ref3.router, ctx = _ref3.ctx, query = _ref3.query;
                pMobile = typeof router.query.p_mobile !== "undefined";
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return Component.getInitialProps(ctx);

              case 6:
                pageProps = _context2.sent;

              case 7:
                // when developing mobile
                // add varnish and hit m.dev.jaresume.com etc
                // pageProps.pMobile = true;
                pageProps.pMobile = pMobile;
                return _context2.abrupt("return", {
                  pageProps: pageProps
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map