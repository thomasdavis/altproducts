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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  font-size: 18px;\n  background: ", ";\n  user-select: none;\n  transition: 0.3s background;\n  cursor: ", ";\n  text-align: center;\n  font-weight: semi-bold;\n  :hover {\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      disabled = _ref.disabled;

  if (disabled) {
    return theme.color.yellow.grayscale().toString();
  } else {
    return theme.color.yellow.toString();
  }
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? "default" : "pointer";
}, function (_ref3) {
  var theme = _ref3.theme,
      disabled = _ref3.disabled;
  return disabled ? theme.color.yellow.grayscale().toString() : theme.color.yellow.darken(0.2).toString();
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var children = props.children,
      disabled = props.disabled,
      onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, _extends({
    onClick: disabled ? function () {} : onClick
  }, props), children);
});

/***/ }),

/***/ "./components/Icon/Svgs.js":
/*!*********************************!*\
  !*** ./components/Icon/Svgs.js ***!
  \*********************************/
/*! exports provided: Facebook, Github, Hamburger, Linkedin, Pdf, Print, Share, Twitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Github", function() { return Github; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hamburger", function() { return Hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pdf", function() { return Pdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return Print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Facebook = function Facebook(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#252525",
    d: "M15.2 4.913h-1.6c-1.3 0-1.5.603-1.5 1.507v2.01h3l-.4 3.114h-2.6v7.836H8.9v-7.936H6.3V8.329h2.6V6.02C8.9 3.406 10.5 2 12.8 2c1.1 0 2.1.1 2.4.1v2.813z"
  }));
};
var Github = function Github(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#252525",
    d: "M12.319 15.915S11.302 16 10.286 16c-1.017 0-2.118-.085-2.118-.085C5.626 15.572 3 14.632 3 10.187c0-1.282.424-2.308 1.186-3.077-.17-.257-.508-1.453.085-3.078 0 0 .932-.342 3.134 1.197.932-.256 1.864-.342 2.88-.427.933 0 1.95.17 2.881.427 2.203-1.453 3.135-1.197 3.135-1.197.593 1.625.254 2.736.084 3.078.763.77 1.186 1.795 1.186 3.077 0 4.445-2.626 5.386-5.252 5.728z"
  }));
};
var Hamburger = function Hamburger(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 18 18"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#252525",
    d: "M0 0h18v2H0zM0 8h18v2H0zM0 16h18v2H0z"
  }));
};
var Linkedin = function Linkedin(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#252525",
    d: "M6 18.28H2.4V6.726H6V18.28zM4.3 5.22c-1.1 0-2.1-.905-2.1-2.11C2.2 2.005 3.1 1 4.3 1c1.1 0 2.1.904 2.1 2.11-.1 1.105-1 2.11-2.1 2.11zm15.1 13.06h-3.6v-5.626c0-1.306 0-3.014-1.9-3.014s-2.1 1.507-2.1 2.913v5.727H8.2V6.726h3.4v1.608c.5-.904 1.6-1.909 3.4-1.909 3.6 0 4.3 2.411 4.3 5.526v6.329h.1z"
  }));
};
var Pdf = function Pdf(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "M17.3 2H7.1c-.935 0-1.7.765-1.7 1.7v10.2c0 .935.765 1.7 1.7 1.7h10.2c.935 0 1.7-.765 1.7-1.7V3.7c0-.935-.765-1.7-1.7-1.7zm-7.225 6.375c0 .706-.57 1.275-1.275 1.275h-.85v1.7H6.675v-5.1H8.8c.705 0 1.275.57 1.275 1.275v.85zm4.25 1.7c0 .706-.57 1.275-1.275 1.275h-2.125v-5.1h2.125c.705 0 1.275.57 1.275 1.275v2.55zm3.4-2.55H16.45v.85h1.275V9.65H16.45v1.7h-1.275v-5.1h2.55v1.275zm-9.775.85h.85v-.85h-.85v.85zM3.7 5.4H2v11.9c0 .935.765 1.7 1.7 1.7h11.9v-1.7H3.7V5.4zm8.5 4.675h.85v-2.55h-.85v2.55z"
  }));
};
var Print = function Print(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "M17.15 6.722H3.85A2.838 2.838 0 0 0 1 9.556v5.666h3.8V19h11.4v-3.778H20V9.556a2.838 2.838 0 0 0-2.85-2.834zm-2.85 10.39H6.7v-4.723h7.6v4.722zm2.85-6.612a.95.95 0 0 1-.95-.944.95.95 0 0 1 1.9 0 .95.95 0 0 1-.95.944zM16.2 2H4.8v3.778h11.4V2z"
  }));
};
var Share = function Share(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "M15.5 14.016c-.633 0-1.2.256-1.633.657l-5.942-3.541c.042-.197.075-.393.075-.598 0-.205-.033-.401-.075-.597L13.8 6.429c.45.427 1.042.691 1.7.691 1.383 0 2.5-1.143 2.5-2.56C18 3.144 16.883 2 15.5 2S13 3.144 13 4.56c0 .205.033.401.075.598L7.2 8.665a2.458 2.458 0 0 0-1.7-.691c-1.383 0-2.5 1.143-2.5 2.56s1.117 2.56 2.5 2.56c.658 0 1.25-.264 1.7-.69l5.933 3.55c-.041.178-.066.366-.066.554 0 1.374 1.091 2.492 2.433 2.492 1.342 0 2.433-1.118 2.433-2.492 0-1.374-1.091-2.492-2.433-2.492z"
  }));
};
var Twitter = function Twitter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#252525",
    d: "M17.6 6.516v.503c0 4.721-3.6 10.046-10 10.046-2 0-3.8-.603-5.4-1.608H3c1.7 0 3.2-.602 4.4-1.506-1.5 0-2.8-1.005-3.3-2.512.2 0 .4.1.7.1.3 0 .6 0 .9-.1-1.6-.301-2.8-1.808-2.8-3.516.5.301 1 .402 1.6.402-.9-.603-1.6-1.708-1.6-2.914 0-.603.2-1.306.5-1.808 1.7 2.11 4.3 3.516 7.3 3.717-.1-.301-.1-.502-.1-.804C10.6 4.607 12.2 3 14.1 3c1 0 1.9.402 2.6 1.105.8-.2 1.6-.502 2.2-.904-.3.804-.8 1.507-1.6 2.01.7-.101 1.4-.302 2-.604-.4.804-1 1.407-1.7 1.91z"
  }));
};

/***/ }),

/***/ "./components/Icon/index.js":
/*!**********************************!*\
  !*** ./components/Icon/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Svgs */ "./components/Icon/Svgs.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // ## Usage
// const AccountIcon = styled(Icon).attrs({ width: '44px' })`
//   fill: green;
// `;
//
// <AccountIcon icon="CaretUp" />

var Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          icon = _this$props.icon,
          width = _this$props.width,
          color = _this$props.color;
      var size = width || "32px";
      var defaultKey = "Hamburger";
      var IconComponent = _Svgs__WEBPACK_IMPORTED_MODULE_1__[icon] || _Svgs__WEBPACK_IMPORTED_MODULE_1__[defaultKey];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconComponent, {
        className: className,
        fill: color,
        width: size,
        height: size,
        preserveAspectRatio: "none"
      });
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/Input/index.js":
/*!***********************************!*\
  !*** ./components/Input/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 22px;\n  margin-bottom: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  font-size: 16px;\n  font-size: 20px;\n  border-radius: 2px;\n  border: 1px solid ", ";\n  outline: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  height: 120px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.grey.darken(0.05).toString();
});
var InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.black.toString();
});
var InputSubLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.red.toString();
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var label = props.label,
      subLabel = props.subLabel;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer, null, label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputLabel, null, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, props), subLabel && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputSubLabel, null, subLabel));
});

/***/ }),

/***/ "./components/Layout/TouchLayout.js":
/*!******************************************!*\
  !*** ./components/Layout/TouchLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Text */ "./components/Text/index.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Link */ "./components/Link/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Menu_TouchMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Menu/TouchMenu */ "./components/Menu/TouchMenu.js");


function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 50px;\n  height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  background: ", ";\n  padding-left: 10px;\n  padding-right: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 50px;\n  font-size: 20px;\n  line-height: 50px;\n  display: flex;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 1000000;\n\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  width: 100vw;\n  height: 100vh;\n  transition: background 1s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var TouchContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      auth = _ref.auth;
  return !auth ? theme.color.white.toString() : theme.color.yellow.toString();
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme,
      auth = _ref2.auth;
  return theme.color.yellow.toString();
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.black.toString();
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
/* harmony default export */ __webpack_exports__["default"] = (function (_ref4) {
  var children = _ref4.children,
      auth = _ref4.auth,
      user = _ref4.user,
      background = _ref4.background;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TouchContainer, {
    auth: auth
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    auth: auth
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: auth ? "dashboard" : "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, "JARESUME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu_TouchMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    auth: auth
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, children));
});

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Text */ "./components/Text/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TouchLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TouchLayout */ "./components/Layout/TouchLayout.js");


function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  background: ", ";\n  color: ", ";\n  height: 30px;\n  line-height: 30px;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  background: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  min-height: 100%;\n  background: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  flex: 0 0 auto;\n  line-height: 50px;\n  display: block;\n  font-weight: bold;\n  padding: 0 20px;\n  text-decoration: none;\n  border-right: 10px solid ", ";\n  color: ", ";\n  font-family: ", ";\n  letter-spacing: 1px;\n  font-weight: 600;\n  :visited {\n    color: ", ";\n  }\n  :active {\n    color: ", ";\n  }\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.grey.toString();
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.black.toString();
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.yellow.toString();
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.white.toString();
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontFamily.heading;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.white.toString();
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.white.toString();
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.yellow.toString();
});
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (p) {
  return p.background;
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), function (p) {
  return p.background;
});
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.grey.toString();
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.grey.darken(0.5).toString();
});
var FooterLinks = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
/* harmony default export */ __webpack_exports__["default"] = (function (_ref11) {
  var children = _ref11.children,
      auth = _ref11.auth,
      user = _ref11.user,
      background = _ref11.background,
      isTouch = _ref11.isTouch;

  if (auth === null) {}

  console.log(isTouch);

  if (isTouch) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TouchLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: children,
      auth: auth,
      user: user,
      background: background
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "/",
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, "JARESUME ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    auth: auth,
    user: user
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentContainer, {
    background: background || "#fff"
  }, children));
});

/***/ }),

/***/ "./components/Link/index.js":
/*!**********************************!*\
  !*** ./components/Link/index.js ***!
  \**********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-decoration: none;\n  font-weight: 600;\n  position: relative;\n  z-index: 1;\n  :after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    bottom: -1px;\n    width: 100%;\n    border-bottom: 5px solid ", ";\n    z-index: -1;\n    transition: border-width 0.15s;\n  }\n  :hover {\n    :after {\n      border-bottom: 16px solid ", ";\n    }\n  }\n  :visited {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var AppLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.black.toString();
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.yellow.toString();
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.yellow.toString();
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.black.toString();
});
var LinkSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject2());
var Link = function Link(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    passHref: true
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppLink, null, props.children));
};

/***/ }),

/***/ "./components/Login/index.js":
/*!***********************************!*\
  !*** ./components/Login/index.js ***!
  \***********************************/
/*! exports provided: TouchLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchLogin", function() { return TouchLogin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Text */ "./components/Text/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./components/Input/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: Source Sans Pro;\n  line-height: 21px;\n  font-size: 13px;\n  text-align: center;\n  background: #252525;\n  opacity: 0.2;\n  border-radius: 30px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 360px;\n  height: 60px;\n  border: none;\n  border-radius: 4px;\n  text-align: center;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 0px;\n  text-align: center;\n  flex: 1 1 auto;\n  text-align: left;\n  width: 90%;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var SearchImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject());
var LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input(_templateObject3());
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var TipContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var TouchLogin =
/*#__PURE__*/
function (_Component) {
  _inherits(TouchLogin, _Component);

  function TouchLogin() {
    _classCallCheck(this, TouchLogin);

    return _possibleConstructorReturn(this, _getPrototypeOf(TouchLogin).apply(this, arguments));
  }

  _createClass(TouchLogin, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          auth = _this$props.auth,
          email = _this$props.email,
          password = _this$props.password,
          submitting = _this$props.submitting,
          tips = _this$props.tips,
          onChangeEmail = _this$props.onChangeEmail,
          onChangePassword = _this$props.onChangePassword,
          login = _this$props.login,
          onKeyDown = _this$props.onKeyDown;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginContainer, {
        onKeyDown: onKeyDown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_3__["Title"], null, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "Email",
        subLabel: tips.email,
        type: "email",
        onChange: onChangeEmail,
        value: email
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "password",
        label: "Password",
        subLabel: tips.password,
        onChange: onChangePassword,
        value: password
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disabled: submitting,
        onClick: login
      }, "Login"))));
    }
  }]);

  return TouchLogin;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./components/Menu/TouchMenu.js":
/*!**************************************!*\
  !*** ./components/Menu/TouchMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TouchMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Icon */ "./components/Icon/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 20px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  :visited {\n    color: #fff;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  position: fixed;\n  left: 0;\n  top: 50px;\n  width: 100vw;\n  height: calc(100vh - 50px);\n  z-index: 10000;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  margin-right: 10px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.black.toString();
});
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.black.toString();
});

var TouchMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(TouchMenu, _Component);

  function TouchMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TouchMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TouchMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleMenu", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    return _this;
  }

  _createClass(TouchMenu, [{
    key: "render",
    value: function render() {
      var open = this.state.open;
      var auth = this.props.auth;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconContainer, {
        onClick: this.toggleMenu
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        width: "18px",
        icon: "Hamburger"
      })), open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, null, auth && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "logout",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Logout")), !auth && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Home")), !auth && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "login",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Login")), !auth && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "signup",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Signup"))));
    }
  }]);

  return TouchMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: blue;\n  font-size: 18px;\n  flex: 0 0 auto;\n  text-decoration: none;\n  justify-content: space-around;\n  margin: 0 10px;\n  color: ", ";\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  line-height: 50px;\n  width: 600px;\n  align-content: flex-start;\n  margin-right: 20px;\n  justify-content: flex-end;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Menu = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.black.toString();
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.black.toString();
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var auth = props.auth,
      user = props.user;

  if (auth) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "dashboard",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "chat",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Chat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "browse",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Browse")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "profile",
      params: {
        username: user.username || "na"
      },
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "connections",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Connections")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "settings",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "logout",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Logout")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "browse",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Browse")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "chat",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Chat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "login",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      prefetch: true,
      route: "signup",
      passHref: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, null, "Signup")));
  }
});

/***/ }),

/***/ "./components/Text/index.js":
/*!**********************************!*\
  !*** ./components/Text/index.js ***!
  \**********************************/
/*! exports provided: Title, SubTitle, Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTitle", function() { return SubTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  letter-spacing: -0.009em;\n  text-rendering: optimizeLegibility;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: 600;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  letter-spacing: -0.01em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var TitleText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontFamily.heading;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSize.title;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeight.title;
});
var Title = function Title(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleText, props, children);
};
var SubTitleText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontFamily.heading;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontSize.subTitle;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.lineHeight.subTitle;
});
var SubTitle = function SubTitle(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitleText, props, children);
};
var BodyText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontFamily.body;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSize.body;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.lineHeight.body;
});
var Body = function Body(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyText, props, children);
};

/***/ }),

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
    host: "https://api.jaresume.com"
  }
});

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Link */ "./components/Link/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Input */ "./components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Text */ "./components/Text/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Login */ "./components/Login/index.js");



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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 500px;\n  padding-top: 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var Signup =
/*#__PURE__*/
function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: "",
      password: "",
      passwordVerification: "",
      submitting: false,
      tips: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "login",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$props, checkAuth, submitting, _this$state, email, password, tips, response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, checkAuth = _this$props.checkAuth, submitting = _this$props.submitting;
              _this$state = _this.state, email = _this$state.email, password = _this$state.password;

              if (!submitting) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", false);

            case 4:
              if (!(email.length === 0 && password.length === 0)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", false);

            case 6:
              _this.setState({
                submitting: true
              });

              tips = {};
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                url: _config__WEBPACK_IMPORTED_MODULE_11__["default"].api.host + "/auth",
                method: "POST",
                data: {
                  email: email,
                  password: password
                },
                withCredentials: true
              });

            case 10:
              response = _context.sent;

              _this.setState({
                submitting: false
              });

              if (response.data.error) {
                _context.next = 18;
                break;
              }

              _context.next = 15;
              return checkAuth();

            case 15:
              _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("dashboard");
              _context.next = 21;
              break;

            case 18:
              if (response.data.error === "not_registered") {
                tips.email = "Seems like you have the wrong email?";
              }

              if (response.data.error === "incorrect_password") {
                tips.password = "You've got the password wrong";
              }

              if (response.data.error === "not_verified") {
                tips.email = "Looks like you haven't confirmed your email...";
              }

            case 21:
              _this.setState({
                tips: tips
              });

              console.log(response);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeEmail", function (ev) {
      _this.setState({
        email: ev.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangePassword", function (ev) {
      _this.setState({
        password: ev.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event && event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();

        _this.login();
      }
    });

    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          auth = _this$props2.auth,
          user = _this$props2.user,
          isTouch = _this$props2.isTouch;

      if (auth) {
        _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("dashboard");
      }

      var _this$state2 = this.state,
          email = _this$state2.email,
          password = _this$state2.password,
          submitting = _this$state2.submitting,
          tips = _this$state2.tips;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        auth: auth,
        user: user,
        isTouch: isTouch
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Login - Jaresume")), isTouch && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_12__["TouchLogin"], {
        email: email,
        password: password,
        submitting: submitting,
        tips: tips,
        onChangeEmail: this.onChangeEmail,
        onChangePassword: this.onChangePassword,
        login: this.login,
        onKeyDown: this.onKeyDown
      }), !isTouch && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginContainer, {
        onKeyDown: this.onKeyDown
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_10__["Title"], null, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Email",
        subLabel: tips.email,
        type: "email",
        onChange: this.onChangeEmail,
        value: email
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "password",
        label: "Password",
        subLabel: tips.password,
        onChange: this.onChangePassword,
        value: password
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        disabled: submitting,
        onClick: this.login
      }, "Login")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Don't have an account? ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        href: "/signup"
      }, "signup")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Forgot your password? ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "forgot_password"
      }, "reset"))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add("signup").add("login").add("chat").add("forgot_password").add("reset_password").add("browse").add("all").add("new_contact").add("logout").add("dashboard").add("settings").add("connections").add("profile", "/:username", "profile").add("pdf", "/pdf/:username", "pdf");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/login.js */"./pages/login.js");


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

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=login.js.map