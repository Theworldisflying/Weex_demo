// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eventModule = 'WXEventModule';
var testDomainName = 'http://192.168.5.100:8082/';
// const mainDomainName = 'http://www.cai33356.com/storage/ios/'
var domainName = testDomainName;
var test = 'http://www.cai33356.com/';
// const main = 'https://www.c33372.com/'
var domain = test;
// // 图片路径
// const imgPath = testDomainName + 'dist/Asset/'
// // 二级文件下图片路径
// const nextLevelImgPath = imgPath
// 图片路径
var imgPath = domain + 'storage/ios/dist/Asset/';
// 二级文件下图片路径
var nextLevelImgPath = imgPath;
// 图片
var imgStorageUrl = domain + 'storage/';
// 活动首页
var activityHomeUrl = domain + 'api/activity/activityListNew';
// 活动详情
var activityListUrl = domain + 'api/activity/activityList';
// 奖励领取
var postClickReceiveUrl = domain + 'api/activity/clickReceive';
// 幸运抽奖
var postWheelLuckUrl = domain + 'api/lucky/clickLucky';
// 幸运抽奖中奖列表
var theWinnersUrl = domain + 'api/lucky/theWinners';
// 幸运抽奖中奖记录
var theWinnersOneUrl = domain + 'api/lucky/theWinnersOne';
// 签到数据获取
var userSignWebList = domain + 'api/userSign/userSignWebList';
// 签到
var postUserSighAdd = domain + 'api/userSign/userSighAdd';
// 签到领取
var postApplyForMoney = domain + 'api/userSign/applyForMoney';
// 签到宝箱领取记录
var userSignHas = domain + 'api/userSign/userSignHas';
// 长龙助手获取数据
var longDragon = domain + 'api/longDragon';
// 投注
var postDoubleBet = domain + 'api/lottery/doubleBet';
// 余额
var latestWithdraw = domain + 'api/latestWithdraw';
// 最近投注
var recentlyBet = domain + 'api/recentlyBet';
module.exports = {
  eventModule: eventModule,
  imgPath: imgPath,
  nextLevelImgPath: nextLevelImgPath,
  domainName: domainName,
  imgStorageUrl: imgStorageUrl,
  activityHomeUrl: activityHomeUrl,
  activityListUrl: activityListUrl,
  postClickReceiveUrl: postClickReceiveUrl,
  postWheelLuckUrl: postWheelLuckUrl,
  theWinnersUrl: theWinnersUrl,
  theWinnersOneUrl: theWinnersOneUrl,
  userSignWebList: userSignWebList,
  postUserSighAdd: postUserSighAdd,
  postApplyForMoney: postApplyForMoney,
  userSignHas: userSignHas,
  longDragon: longDragon,
  postDoubleBet: postDoubleBet,
  latestWithdraw: latestWithdraw,
  recentlyBet: recentlyBet
};

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  "loading-container": {
    "position": "relative"
  },
  "loading-need-mask": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "wxc-loading": {
    "position": "absolute",
    "left": "287",
    "top": "500",
    "zIndex": 9999
  },
  "loading-box": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "20",
    "width": "175",
    "height": "175",
    "backgroundColor": "rgba(0,0,0,0.8)"
  },
  "trip-loading": {
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "loading-trip-image": {
    "height": "75",
    "width": "75"
  },
  "loading-text": {
    "color": "#ffffff",
    "fontSize": "24",
    "lineHeight": "30",
    "height": "30",
    "marginTop": "8",
    "textOverflow": "ellipsis",
    "width": "140",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(7);

var _utils = __webpack_require__(12);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    interval: {
      type: [Number, String],
      default: 0
    },
    needMask: {
      type: Boolean,
      default: false
    },
    maskStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showLoading: false,
      tid: 0
    };
  },
  watch: {
    show: function show() {
      this.setShow();
    }
  },
  computed: {
    loading: function loading() {
      var loading = {};
      switch (this.type) {
        case 'trip':
          loading = {
            url: _type.GIF,
            class: 'trip-loading'
          };
          break;
        default:
          loading = {
            url: _type.BLACK_GIF,
            class: 'default-loading'
          };
      }
      return loading;
    },
    topPosition: function topPosition() {
      return (_utils2.default.env.getPageHeight() - 200) / 2;
    }
  },
  created: function created() {
    this.setShow();
  },

  methods: {
    maskClicked: function maskClicked() {
      this.needMask && this.$emit('wxcLoadingMaskClicked', {});
    },
    setShow: function setShow() {
      var _this = this;

      var interval = this.interval,
          show = this.show,
          showLoading = this.showLoading;

      var stInterval = parseInt(interval);
      clearTimeout(this.tid);
      if (show) {
        if (showLoading) {
          return;
        }
        if (stInterval === 0) {
          this.showLoading = true;
        } else {
          this.tid = setTimeout(function () {
            _this.showLoading = true;
          }, stInterval);
        }
      } else {
        this.showLoading = false;
      }
    }
  }
};

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(68)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/assistant/assistantbet.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a487b2c6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(13);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812 || parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896);
      }
      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight == 1792);
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(15),
    qs = __webpack_require__(16),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [],
      value,
      key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['loading-container', _vm.showLoading && _vm.needMask && 'loading-need-mask'],
    style: _vm.maskStyle,
    on: {
      "click": _vm.maskClicked
    }
  }, [(_vm.showLoading) ? _c('div', {
    staticClass: ["wxc-loading"],
    style: {
      top: _vm.topPosition + 'px'
    }
  }, [_c('div', {
    class: ['loading-box', _vm.loading.class],
    attrs: {
      "ariaHidden": true
    }
  }, [_c('image', {
    staticClass: ["loading-trip-image"],
    attrs: {
      "src": _vm.loading.url,
      "resize": "contain",
      "quality": "original"
    }
  }), (_vm.loadingText) ? _c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v(_vm._s(_vm.loadingText))]) : _vm._e()])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(19);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/node_modules/weex-ui/packages/wxc-overlay/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b925d9c8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = {
  "assMainStyle": {
    "marginBottom": "300"
  },
  "cellStyle": {
    "flexDirection": "row",
    "height": "140",
    "borderBottomWidth": "2",
    "borderBottomColor": "#f5f5f5",
    "borderBottomStyle": "solid"
  },
  "cellImgDiv": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "10"
  },
  "cellImgStyle": {
    "width": "70",
    "height": "70",
    "borderRadius": "35"
  },
  "cellLotteryStyle": {
    "width": "120",
    "lineHeight": "50",
    "textAlign": "center",
    "fontSize": "23",
    "color": "#333333"
  },
  "termDiv": {
    "height": "140",
    "flexDirection": "column",
    "marginLeft": "10"
  },
  "termTextStyle": {
    "color": "#333333",
    "textAlign": "center",
    "lineHeight": "60",
    "fontSize": "24"
  },
  "playKindsStyle": {
    "color": "#ffffff",
    "fontSize": "24",
    "lineHeight": "45",
    "textAlign": "center",
    "paddingLeft": "10",
    "paddingRight": "10",
    "backgroundColor": "#c6c6c6",
    "borderRadius": "5"
  },
  "bigSmalllStyle": {
    "color": "#ffffff",
    "fontSize": "24",
    "lineHeight": "45",
    "textAlign": "center",
    "paddingLeft": "12",
    "paddingRight": "12",
    "backgroundColor": "#ff9726",
    "marginLeft": "20",
    "borderRadius": "5"
  },
  "termStyle": {
    "color": "#ffffff",
    "fontSize": "24",
    "lineHeight": "45",
    "textAlign": "center",
    "paddingLeft": "12",
    "paddingRight": "12",
    "backgroundColor": "#dc3b40",
    "marginLeft": "20",
    "borderRadius": "5"
  },
  "selectItemDiv": {
    "width": "140",
    "height": "110",
    "borderRadius": "10",
    "borderWidth": "1",
    "borderColor": "#dddddd",
    "borderStyle": "solid",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "selectItemTextStyle": {
    "width": "140",
    "lineHeight": "60",
    "fontSize": "40",
    "color": "#dc3b40",
    "textAlign": "center"
  },
  "selectItemNormalTextRewardStyle": {
    "width": "140",
    "lineHeight": "40",
    "fontSize": "25",
    "color": "#666666",
    "textAlign": "center"
  },
  "selectItemSTextRewardStyle": {
    "width": "140",
    "lineHeight": "40",
    "fontSize": "25",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "selectedRedDiv": {
    "width": "140",
    "height": "110",
    "borderRadius": "10",
    "borderWidth": "1",
    "borderColor": "#c92020",
    "backgroundColor": "#dc3b40",
    "borderStyle": "solid",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "selectGrayStyle": {
    "width": "140",
    "lineHeight": "40",
    "fontSize": "25",
    "color": "#eeeeee",
    "textAlign": "center"
  },
  "selectedItemSTextGrayStyle": {
    "width": "140",
    "lineHeight": "60",
    "fontSize": "40",
    "color": "#eeeeee",
    "textAlign": "center"
  },
  "selectedItemSTextStyle": {
    "width": "140",
    "lineHeight": "60",
    "fontSize": "40",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "selectedItemSTextRewardStyle": {
    "width": "140",
    "lineHeight": "40",
    "fontSize": "25",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "timerTextStyles": {
    "fontSize": "25",
    "color": "#e4161c",
    "marginTop": "15",
    "marginLeft": "5",
    "width": "130"
  },
  "bottomstyle": {
    "height": "200",
    "width": "750",
    "backgroundColor": "#333333",
    "position": "fixed",
    "bottom": "0",
    "borderTopColor": "#f6f6f6",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "flexDirection": "column"
  },
  "bottomTopStyle": {
    "height": "90",
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row"
  },
  "bottomFooterStyle": {
    "height": "110",
    "width": "750",
    "flexDirection": "row"
  },
  "inputTitleStyle": {
    "lineHeight": "90",
    "textAlign": "center",
    "marginLeft": "20"
  },
  "inputStyle": {
    "width": "150",
    "height": "60",
    "borderWidth": "2",
    "borderColor": "#d2d2d2",
    "borderStyle": "solid",
    "borderRadius": "5",
    "marginLeft": "20",
    "marginTop": "15",
    "textAlign": "center",
    "lineHeight": "60"
  },
  "winHeighDiv": {
    "width": "300",
    "lineHeight": "90",
    "textAlign": "center",
    "fontSize": "25",
    "marginLeft": "40",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "winHeighTextStyles": {
    "lineHeight": "90",
    "textAlign": "center",
    "fontSize": "25",
    "color": "#777777"
  },
  "winHeighNumStyles": {
    "lineHeight": "90",
    "textAlign": "center",
    "fontSize": "25",
    "color": "#d24c4e"
  },
  "clearBtnStyles": {
    "lineHeight": "110",
    "width": "240",
    "textAlign": "center",
    "fontWeight": "bold",
    "color": "#FFFFFF",
    "borderRightWidth": "1",
    "borderRightColor": "#222222",
    "borderRightStyle": "solid"
  },
  "totalTextDiv": {
    "width": "270",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "totalTextStyle": {
    "color": "#FFFFFF",
    "lineHeight": "110",
    "fontWeight": "bold"
  },
  "totalNumStyle": {
    "color": "rgb(255,163,25)",
    "lineHeight": "110",
    "fontWeight": "bold"
  },
  "betBtnStyle": {
    "width": "240",
    "lineHeight": "110",
    "color": "#FFFFFF",
    "textAlign": "center",
    "fontWeight": "bold",
    "backgroundColor": "#e54042"
  },
  "maskDiv": {
    "width": "520",
    "marginLeft": "115",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10",
    "position": "fixed",
    "top": "400"
  },
  "alertTotalDiv": {
    "width": "520",
    "height": "60",
    "borderRadius": "5",
    "borderBottomWidth": "1",
    "borderBottomColor": "#f5f5f5",
    "borderBottomStyle": "solid",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "alertContentDiv": {
    "width": "520",
    "height": "200",
    "borderRadius": "5",
    "borderBottomWidth": "1",
    "borderBottomColor": "#f5f5f5",
    "borderBottomStyle": "solid",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "alertBottomDiv": {
    "width": "520",
    "height": "80",
    "borderRadius": "5",
    "flexDirection": "row"
  },
  "alertCancelStyle": {
    "width": "260",
    "lineHeight": "80",
    "borderBottomLeftRadius": "5",
    "borderTopWidth": "1",
    "borderTopColor": "#f1f1f1",
    "borderTopStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#f1f1f1",
    "borderRightStyle": "solid",
    "color": "#999999",
    "textAlign": "center"
  },
  "alertSureStyle": {
    "width": "260",
    "lineHeight": "80",
    "borderBottomRightRadius": "5",
    "borderTopWidth": "1",
    "borderTopColor": "#f1f1f1",
    "borderTopStyle": "solid",
    "color": "#4a95e4",
    "textAlign": "center"
  },
  "alertContentTextStyle": {
    "color": "#666666",
    "lineHeight": "40",
    "fontSize": "25"
  },
  "alertContentTextNumStyle": {
    "color": "#FF0000",
    "lineHeight": "40",
    "fontSize": "25"
  },
  "rowCenterStyle": {
    "flexDirection": "row"
  },
  "maskBgStyle": {
    "width": "750",
    "height": "3000",
    "position": "fixed",
    "top": "0",
    "backgroundColor": "#000000",
    "opacity": 0.6
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxcOverlay = __webpack_require__(18);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

var _wxcLoading = __webpack_require__(8);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _Global = __webpack_require__(0);

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var device = weex.config.env;
var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');
module.exports = {
  props: {},
  components: { WxcLoading: _wxcLoading2.default, WxcOverlay: _wxcOverlay2.default },
  data: function data() {
    return {
      token: '',
      SITEID: '',
      imgPath: '',
      getHeight: device.height,
      TIME: new Date().getTime(),
      itemSelected: true,
      itemNormal: true,
      isShow: false,
      intervalLoading: 0,
      mainStyle: {
        // backgroundColor: '#dff',
        // height: device.deviceHeight - 200 + 'px'
      },
      maskbgStyle: {
        opacity: 0.6,
        height: device.deviceHeight + 'px',
        width: device.dependenciesWarnings + 'px',
        background: '#000'
      },
      interval: null,
      dataList: [],
      callbackText: '',
      longDataList: {},
      selectedG: { playId: Number, type: Number, payName: '' },
      selectedI: Number,
      isRequest: false,
      winHeighMoney: 0,
      inputValue: 0,
      betNum: 0,
      betMoney: 0,
      getItemData: {},
      show: false,
      isLoadingShow: false,
      overlayCanClose: true,
      isFalse: false
    };
  },
  created: function created() {
    var self = this;
    self.imgPath = _Global2.default.imgStorageUrl;
    // 获取token
    var eventModule = weex.requireModule(_Global2.default.eventModule);
    eventModule.getToken('token', function (res) {
      self.token = res.token;
      self.SITEID = res.SITEID;
      self.get_lotteryList();
    });
  },

  computed: {
    comDealData: function comDealData() {}
  },
  filters: {
    countdownFilter: function countdownFilter(time) {
      var getTime = '开奖中';
      var hh = 0;
      var mm = 0;
      var ss = 0;
      if (time > 0) {
        // let dd = Math.floor(time / 60 / 60 / 24)
        hh = Math.floor(time / 60 / 60 % 24);
        mm = Math.floor(time / 60 % 60);
        ss = Math.floor(time % 60);
        // if (dd <= 9) dd = '0' + dd;
        if (hh <= 9) hh = '0' + hh;
        if (mm <= 9) mm = '0' + mm;
        if (ss <= 9) ss = '0' + ss;
        getTime = hh + ':' + mm + ':' + ss;
      } else {
        getTime = '开奖中';
      }
      return getTime;
    },
    termFilters: function termFilters(e) {
      // 期号处理
      var term = e;
      if (e.length > 8) {
        term = term.slice(4);
      }
      return term;
    }
  },
  methods: {
    get_lotteryList: function get_lotteryList() {
      var self = this;
      // self.isLoadingShow = true
      if (self.isRequest === false) {
        self.isRequest = true;
        stream.fetch({
          method: 'GET',
          url: _Global2.default.longDragon,
          headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
          type: 'json'
        }, function (ret) {
          self.isRequest = false;
          self.isLoadingShow = false;
          if (ret.ok) {
            if (ret.data.code === 0) {
              self.longDataList = ret.data.data;
              self.dealList(self.longDataList);
              if (self.interval) {
                clearInterval(self.interval);
              }
              self.countdown();
            } else if (ret.data.code === 109) {
              modal.toast({ message: ret.data.message });
            } else {
              modal.toast({ message: ret.data.message });
            }
          } else {
            // modal.toast({message: ret.statusText})
          }
        }, function (ret) {});
      }
    },
    imgeClick: function imgeClick(e) {},

    // 数据处理
    dealList: function dealList(e) {
      var self = this;
      self.dataList.splice(0, self.dataList.length);
      for (var i = 0; i < e.list.length; i++) {
        // self.dealWithPlay(e.list[i], i)
        var isNormal = true;
        var isSelected = true;
        if (e.list[i].openData.itTerm.countSealTime === 0) {
          isNormal = false;
          isSelected = false;
        }
        if (e.list[i].playId === self.selectedG.playId && e.list[i].payName === self.selectedG.payName && e.list[i].type === self.selectedG.type && e.list[i].openData.itTerm.countSealTime > 0) {
          isNormal = false;
        }
        if (e.list[i].data === '小' || e.list[i].data === '大') {
          var itemArr = [];
          var contentArr = ['大', '小'];
          for (var j = 0; j < 2; j++) {
            if (j === self.selectedI && isNormal === false) {
              // isNormal = false
              isSelected = true;
            } else {
              isNormal = true;
            }
            itemArr.push({ itemData: contentArr[j], odds: e.list[i].odds, itemNormal: isNormal, itemSelected: isSelected });
          }
          var obj = { item: itemArr };
          self.dataList.push(obj);
        } else if (e.list[i].data === '单' || e.list[i].data === '双') {
          var _itemArr = [];
          var _contentArr = ['单', '双'];
          for (var _j = 0; _j < 2; _j++) {
            if (_j === self.selectedI && isNormal === false) {
              // isNormal = false
              isSelected = true;
            } else {
              isNormal = true;
              // self.clearSelected()
            }
            _itemArr.push({ itemData: _contentArr[_j], odds: e.list[i].odds, itemNormal: isNormal, itemSelected: isSelected });
          }
          var _obj = { item: _itemArr };
          self.dataList.push(_obj);
        }
        // // 期号处理
        // let term = self.longDataList.list[i].openData.itTerm.term
        // // self.longDataList.list[i].termlast = term
        // self.longDataList.list[i].termlast = term.slice(4)
      }
    },
    countdown: function countdown() {
      var self = this;
      self.interval = setInterval(function () {
        for (var i = 0; i < self.longDataList.list.length; i++) {
          if (self.longDataList.list[i].openData.itTerm.countSealTime > 0) {
            self.longDataList.list[i].openData.itTerm.countSealTime--;
          } else {
            for (var j = 0; j < self.dataList[i].item.length; j++) {
              self.dataList[i].item[j].itemNormal = false;
              self.dataList[i].item[j].itemSelected = false;
            }
            var item = self.longDataList.list[i];
            if (self.selectedG.payName === item.payName && self.selectedG.playId === item.playId && self.selectedG.type === item.type) {
              self.clearBtnClick();
              self.alertHidden();
            }
            setTimeout(function () {
              self.get_lotteryList();
            }, 2000);
          }
        }
      }, 1000);
    },
    itemSelectClick: function itemSelectClick(e, g, k) {
      var self = this;
      if (e.openData.itTerm.countSealTime > 0) {
        for (var i = 0; i < self.dataList.length; i++) {
          for (var j = 0; j < self.dataList[i].item.length; j++) {
            if (i === g && j === k && self.dataList[g].item[k].itemNormal === false) {
              // self.dataList[i].item[j].itemNormal = false
              // self.dataList[i].item[j].itemSelected = true
            } else {
              self.dataList[i].item[j].itemNormal = true;
              self.dataList[i].item[j].itemSelected = true;
            }
          }
        }

        if (self.dataList[g].item[k].itemNormal === false) {
          self.dataList[g].item[k].itemNormal = true;
          // 清除点击的按钮
          self.clearSelected();
        } else {
          self.dataList[g].item[k].itemNormal = false;
          self.dataList[g].item[k].itemSelected = true;
          // 记录点击的按钮
          self.selectedG.payName = e.payName;
          self.selectedG.playId = e.playId;
          self.selectedG.type = e.type;
          self.selectedG.betData = self.dealBetData(e, self.dataList[g].item[k].itemData);
          self.selectedI = k;
          self.getItemData = e;
          // 设置数据
          if (self.inputValue > 0) {
            var value = self.inputValue * self.getItemData.odds;
            self.winHeighMoney = value.toFixed(2); // 保留两位小数，四舍五入
            self.betNum = 1;
            self.betMoney = self.inputValue;
          }
        }
      }
    },
    clearSelected: function clearSelected() {
      var self = this;
      // 清除点击的按钮
      self.selectedG.payName = null;
      self.selectedG.playId = null;
      self.selectedG.type = null;
      self.selectedG.betData = '';
      // self.selectedG = null
      self.selectedI = null;
      self.getItemData = {};

      // self.inputValue = 0
      self.winHeighMoney = 0;
      self.betNum = 0;
      self.betMoney = 0;
      // self.$el('input').event.input({value: ''})
      // self.oninput(self.$refs['input'])
      self.$refs['input'].value = '';
    },
    oninput: function oninput(e) {
      var self = this;
      if (self.getItemData) {
        if (e.value > 0) {
          self.inputValue = e.value;
          var value = e.value * self.getItemData.odds;
          self.winHeighMoney = value.toFixed(2); // 保留两位小数，四舍五入
          self.betNum = 1;
          self.betMoney = e.value;
        } else {
          self.inputValue = 0;
          self.winHeighMoney = 0;
          self.betNum = 0;
          self.betMoney = 0;
        }
      } else {
        self.inputValue = e.value;
        self.betMoney = e.value;
      }
    },
    clearBtnClick: function clearBtnClick(e) {
      var self = this;
      self.clearSelected();
      for (var i = 0; i < self.dataList.length; i++) {
        for (var j = 0; j < self.dataList[i].item.length; j++) {
          self.dataList[i].item[j].itemNormal = true;
          self.dataList[i].item[j].itemSelected = true;
        }
      }
    },
    betBtnClick: function betBtnClick(e) {
      var self = this;
      if (self.getItemData === null || self.getItemData.length === 0 || self.selectedG.betData.length === 0) {
        modal.toast({ message: '请选择号码' });
      } else if (self.inputValue === null || self.inputValue === 0) {
        modal.toast({ message: '请输入投注金额倍数' });
      } else {
        this.show = true;
      }
    },
    sureBetBtnClick: function sureBetBtnClick() {
      var self = this;
      self.show = false;
      self.isLoadingShow = true;
      var data = { 0: { term: self.getItemData.openData.itTerm.term,
          money: self.betMoney,
          Amultiple: '1',
          number: self.betNum,
          data: self.selectedG.betData,
          lotterySitePlayId: self.getItemData.playId,
          selectOdds: 0,
          odds: 0 } };
      var body = 'data=' + JSON.stringify(data) + '&term=' + self.getItemData.openData.itTerm.term + '&lotterySiteId=' + self.getItemData.lotterySiteId + '&equipment=' + 'WEEX_iOS' + '&stopTrack=' + '1' + '&termNumber=' + self.betNum;
      stream.fetch({
        method: 'POST',
        url: _Global2.default.postDoubleBet,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json',
        body: body
      }, function (ret) {
        self.isLoadingShow = false;
        if (ret.ok) {
          modal.alert({ message: '投注成功', okTitle: '确定' });
        } else {
          modal.toast({ message: ret.statusText });
        }
        self.clearBtnClick();
      }, function (ret) {});
    },
    dealBetData: function dealBetData(item, betData) {
      if (item && betData) {
        var data = '';
        if (item.lotterySpecieId === 1) {
          // 时时彩 6
          var sscDigits = item.sscDigits;
          if (sscDigits > 0) {
            for (var i = 0; i < 6; i++) {
              if (sscDigits === i) {
                if (i === 5) {
                  data = data + betData;
                } else {
                  data = data + betData + '|';
                }
              } else {
                if (i === 5) {
                  data = data + '-';
                } else {
                  data = data + '-|';
                }
              }
            }
          }
        } else if (item.lotterySpecieId === 4) {
          // pk10
          var pksDigits = item.pksDigits;
          if (pksDigits > 0) {
            for (var _i = 1; _i <= 10; _i++) {
              if (pksDigits === _i) {
                if (_i === 10) {
                  data = data + betData;
                } else {
                  data = data + betData + '|';
                }
              } else {
                if (_i === 10) {
                  data = data + '-';
                } else {
                  data = data + '-|';
                }
              }
            }
          }
        } else if (item.lotterySpecieId === 2) {
          // 快3
          data = betData;
        } else {
          data = betData;
        }
        return data;
      }
    },
    alertHidden: function alertHidden() {
      this.show = false;
    }
  },
  beforedestroy: function beforedestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  destroyed: function destroyed() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
};

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "white"
    }
  }, [_c('div', {
    staticClass: ["assMainStyle"],
    style: _vm.mainStyle
  }, _vm._l((_vm.longDataList.list), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["cellStyle"]
    }, [_c('div', {
      staticClass: ["cellImgDiv"],
      on: {
        "click": function($event) {
          _vm.imgeClick(item)
        }
      }
    }, [_c('image', {
      staticClass: ["cellImgStyle"],
      attrs: {
        "src": _vm.imgPath + item.iconUrl
      }
    }), _c('text', {
      staticClass: ["cellLotteryStyle"]
    }, [_vm._v(_vm._s(item.name))])]), _c('div', {
      staticClass: ["termDiv"]
    }, [_c('div', {
      staticStyle: {
        flexDirection: "row",
        marginTop: "10px"
      }
    }, [_c('text', {
      staticClass: ["termTextStyle"]
    }, [_vm._v(_vm._s(_vm._f("termFilters")(item.openData.itTerm.term)) + "期")]), _c('text', {
      staticClass: ["timerTextStyles"]
    }, [_vm._v(_vm._s(_vm._f("countdownFilter")(item.openData.itTerm.countSealTime)))])]), _c('div', {
      staticStyle: {
        flexDirection: "row",
        position: "absolute"
      }
    }, [_c('text', {
      staticClass: ["playKindsStyle"]
    }, [_vm._v(_vm._s(item.payName))]), _c('text', {
      staticClass: ["bigSmalllStyle"]
    }, [_vm._v(_vm._s(item.data))]), _c('text', {
      staticClass: ["termStyle"]
    }, [_vm._v(_vm._s(item.number))])])]), _c('div', {
      staticStyle: {
        flexDirection: "row",
        position: "absolute",
        right: "10px",
        marginTop: "15px"
      }
    }, _vm._l((_vm.dataList[i].item), function(selItem, j) {
      return _c('div', {
        key: j,
        class: [selItem.itemNormal ? 'selectItemDiv' : [selItem.itemSelected ? 'selectedRedDiv' : 'selectItemDiv']],
        staticStyle: {
          marginRight: "15px"
        },
        on: {
          "click": function($event) {
            _vm.itemSelectClick(item, i, j)
          }
        }
      }, [_c('text', {
        class: [selItem.itemNormal ? 'selectItemTextStyle' : [selItem.itemSelected ? 'selectedItemSTextStyle' : 'selectedItemSTextGrayStyle']]
      }, [_vm._v(_vm._s(selItem.itemData))]), _c('text', {
        class: [selItem.itemNormal ? 'selectItemNormalTextRewardStyle' : [selItem.itemSelected ? 'selectedItemSTextRewardStyle' : 'selectGrayStyle']]
      }, [_vm._v("奖" + _vm._s(selItem.odds))])])
    }))])
  })), _c('div', {
    staticClass: ["bottomstyle"]
  }, [_c('div', {
    staticClass: ["bottomTopStyle"]
  }, [_c('text', {
    staticClass: ["inputTitleStyle"]
  }, [_vm._v("每注")]), _c('input', {
    ref: "input",
    staticClass: ["inputStyle"],
    attrs: {
      "type": "number",
      "maxlength": "10",
      "returnKeyType": "done"
    },
    on: {
      "input": _vm.oninput
    }
  }), _c('div', {
    staticClass: ["winHeighDiv"]
  }, [_c('text', {
    staticClass: ["winHeighTextStyles"]
  }, [_vm._v("最高可中元")]), _c('text', {
    staticClass: ["winHeighNumStyles"]
  }, [_vm._v(" " + _vm._s(_vm.winHeighMoney))]), _c('text', {
    staticClass: ["winHeighTextStyles"]
  }, [_vm._v(" 元")])])]), _c('div', {
    staticClass: ["bottomFooterStyle"]
  }, [_c('text', {
    staticClass: ["clearBtnStyles"],
    on: {
      "click": _vm.clearBtnClick
    }
  }, [_vm._v("清空")]), _c('div', {
    staticClass: ["totalTextDiv"]
  }, [_c('text', {
    staticClass: ["totalTextStyle"]
  }, [_vm._v("共")]), _c('text', {
    staticClass: ["totalNumStyle"]
  }, [_vm._v(_vm._s(_vm.betNum))]), _c('text', {
    staticClass: ["totalTextStyle"]
  }, [_vm._v("注，")]), _c('text', {
    staticClass: ["totalNumStyle"]
  }, [_vm._v(_vm._s(_vm.betMoney))]), _c('text', {
    staticClass: ["totalTextStyle"]
  }, [_vm._v("元")])]), _c('div', [_c('text', {
    staticClass: ["betBtnStyle"],
    on: {
      "click": _vm.betBtnClick
    }
  }, [_vm._v("确认投注")])])])]), _c('wxc-loading', {
    attrs: {
      "show": _vm.isLoadingShow,
      "type": "default",
      "needMask": "false",
      "interval": _vm.intervalLoading
    }
  }), (_vm.show) ? _c('div', {
    staticStyle: {
      width: "750px",
      height: "2000px",
      position: "fixed",
      top: "0px"
    },
    on: {
      "click": _vm.alertHidden
    }
  }) : _vm._e(), (_vm.show) ? _c('div', {
    staticClass: ["maskBgStyle"],
    on: {
      "click": _vm.alertHidden
    }
  }, [(_vm.show) ? _c('div', {
    staticClass: ["maskDiv"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["alertContentDiv"]
  }, [_c('div', {
    staticClass: ["rowCenterStyle"]
  }, [_c('text', {
    staticClass: ["alertContentTextStyle"],
    staticStyle: {
      marginLeft: "30px"
    }
  }, [_vm._v(_vm._s(_vm.getItemData.name) + ": ")]), _c('text', {
    staticClass: ["alertContentTextStyle"]
  }, [_vm._v(_vm._s(_vm.getItemData.openData.itTerm.term) + "期")])]), _c('div', {
    staticClass: ["rowCenterStyle"]
  }, [_c('text', {
    staticClass: ["alertContentTextStyle"],
    staticStyle: {
      marginLeft: "30px"
    }
  }, [_vm._v("投注金额: ")]), _c('text', {
    staticClass: ["alertContentTextNumStyle"]
  }, [_vm._v(_vm._s(_vm.betMoney) + "元")])]), _c('div', {
    staticClass: ["rowCenterStyle"]
  }, [_c('text', {
    staticClass: ["alertContentTextStyle"],
    staticStyle: {
      marginLeft: "30px"
    }
  }, [_vm._v("投注内容: ")]), _c('text', {
    staticClass: ["alertContentTextStyle"]
  }, [_vm._v(_vm._s(_vm.selectedG.betData))])])]), _c('div', {
    staticClass: ["alertBottomDiv"]
  }, [_c('text', {
    staticClass: ["alertCancelStyle"],
    on: {
      "click": _vm.alertHidden
    }
  }, [_vm._v("取消")]), _c('text', {
    staticClass: ["alertSureStyle"],
    on: {
      "click": _vm.sureBetBtnClick
    }
  }, [_vm._v("确定")])])]) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["alertTotalDiv"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "40px"
    }
  }, [_vm._v("温馨提示")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Tw93 on 2016/10/29.
 */

var GIF = exports.GIF = 'https://img.alicdn.com/tfs/TB1aks3PpXXXXcXXFXXXXXXXXXX-150-150.gif';
var BLACK_GIF = exports.BLACK_GIF = 'https://img.alicdn.com/tfs/TB1Ep_9NVXXXXb8XVXXXXXXXXXX-74-74.gif';
var PART = exports.PART = 'https://gtms02.alicdn.com/tfs/TB1y4QbSXXXXXbgapXXXXXXXXXX-50-50.gif';

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(9);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/node_modules/weex-ui/packages/wxc-loading/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-35690df0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ })

/******/ });