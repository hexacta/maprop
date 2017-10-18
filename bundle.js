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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  if (typeof HTMLElement.prototype.appendChildren !== 'function') {
    HTMLElement.prototype.appendChildren = function (children) {
      return __webpack_require__(3)(this, children)
    }
  }
})()


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  if (typeof HTMLElement.prototype.setAttributes !== 'function') {
    HTMLElement.prototype.setAttributes = function (attributes) {
      return __webpack_require__(4)(this, attributes)
    }
  }
})()


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  if (typeof HTMLElement.prototype.setStyles !== 'function') {
    HTMLElement.prototype.setStyles = function (styles) {
      return __webpack_require__(5)(this, styles)
    }
  }
})()


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function appendChildren (element, children) {
  children = Array.isArray(children) ? children : [children]
  children.forEach(function (child) {
    if (child instanceof HTMLElement) {
      element.appendChild(child)
    } else if (child || typeof child === 'string') {
      element.appendChild(document.createTextNode(child.toString()))
    }
  })
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function setAttributes (element, attributes) {
  var isPlainObject = Object.prototype.toString.call(attributes) === '[object Object]' &&
    typeof attributes.constructor === 'function' &&
    Object.prototype.toString.call(attributes.constructor.prototype) === '[object Object]' &&
    attributes.constructor.prototype.hasOwnProperty('isPrototypeOf')

  if (isPlainObject) {
    for (var key in attributes) {
      element.setAttribute(key, attributes[key])
    }
  } else {
    throw new DOMException('Failed to execute \'setAttributes\' on \'Element\': ' + Object.prototype.toString.call(attributes) + ' is not a plain object.')
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function setStyles (element, styles) {
  for (var style in styles) element.style[style] = styles[style]
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
__webpack_require__(2)
__webpack_require__(0)


/***/ })
/******/ ]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;

var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
exports.speedy = speedy;
exports.simulations = simulations;
exports.simulate = simulate;
exports.cssLabels = cssLabels;
exports.isLikeRule = isLikeRule;
exports.idFor = idFor;
exports.css = css;
exports.rehydrate = rehydrate;
exports.flush = flush;
exports.select = select;
exports.parent = parent;
exports.media = media;
exports.pseudo = pseudo;
exports.active = active;
exports.any = any;
exports.checked = checked;
exports.disabled = disabled;
exports.empty = empty;
exports.enabled = enabled;
exports._default = _default;
exports.first = first;
exports.firstChild = firstChild;
exports.firstOfType = firstOfType;
exports.fullscreen = fullscreen;
exports.focus = focus;
exports.hover = hover;
exports.indeterminate = indeterminate;
exports.inRange = inRange;
exports.invalid = invalid;
exports.lastChild = lastChild;
exports.lastOfType = lastOfType;
exports.left = left;
exports.link = link;
exports.onlyChild = onlyChild;
exports.onlyOfType = onlyOfType;
exports.optional = optional;
exports.outOfRange = outOfRange;
exports.readOnly = readOnly;
exports.readWrite = readWrite;
exports.required = required;
exports.right = right;
exports.root = root;
exports.scope = scope;
exports.target = target;
exports.valid = valid;
exports.visited = visited;
exports.dir = dir;
exports.lang = lang;
exports.not = not;
exports.nthChild = nthChild;
exports.nthLastChild = nthLastChild;
exports.nthLastOfType = nthLastOfType;
exports.nthOfType = nthOfType;
exports.after = after;
exports.before = before;
exports.firstLetter = firstLetter;
exports.firstLine = firstLine;
exports.selection = selection;
exports.backdrop = backdrop;
exports.placeholder = placeholder;
exports.cssFor = cssFor;
exports.attribsFor = attribsFor;

var _objectAssign = __webpack_require__(4);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _sheet = __webpack_require__(11);

var _CSSPropertyOperations = __webpack_require__(5);

var _clean = __webpack_require__(20);

var _clean2 = _interopRequireDefault(_clean);

var _plugins = __webpack_require__(21);

var _hash = __webpack_require__(38);

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/* stylesheet */


var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
// an isomorphic StyleSheet shim. hides all the nitty gritty.

// /**************** LIFTOFF IN 3... 2... 1... ****************/
styleSheet.inject(); //eslint-disable-line indent
// /****************      TO THE MOOOOOOON     ****************/

// convenience function to toggle speedy
function speedy(bool) {
  return styleSheet.speedy(bool);
}

// plugins
// we include these by default
var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet([_plugins.prefixes, _plugins.contentWrap, _plugins.fallbacks]);
plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
plugins.fontFace = new _plugins.PluginSet();
plugins.keyframes = new _plugins.PluginSet([_plugins.prefixes, _plugins.fallbacks]);

// define some constants

var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
var isTest = process.env.NODE_ENV === 'test';
var isBrowser = typeof window !== 'undefined';

/**** simulations  ****/

// a flag to enable simulation meta tags on dom nodes
// defaults to true in dev mode. recommend *not* to
// toggle often.
var canSimulate = isDev;

// we use these flags for issuing warnings when simulate is called
// in prod / in incorrect order
var warned1 = false,
    warned2 = false;

// toggles simulation activity. shouldn't be needed in most cases
function simulations() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  canSimulate = !!bool;
}

// use this on dom nodes to 'simulate' pseudoclasses
// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
// you can even send in some weird ones, as long as it's in simple format
// and matches an existing rule on the element
// eg simulate('nthChild2', ':hover:active') etc
function simulate() {
  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
    pseudos[_key] = arguments[_key];
  }

  pseudos = (0, _clean2.default)(pseudos);
  if (!pseudos) return {};
  if (!canSimulate) {
    if (!warned1) {
      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
      warned1 = true;
    }
    if (!isDev && !isTest && !warned2) {
      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
      warned2 = true;
    }
    return {};
  }
  return pseudos.reduce(function (o, p) {
    return o['data-simulate-' + simple(p)] = '', o;
  }, {});
}

/**** labels ****/
// toggle for debug labels.
// *shouldn't* have to mess with this manually
var hasLabels = isDev;

function cssLabels(bool) {
  hasLabels = !!bool;
}

// takes a string, converts to lowercase, strips out nonalphanumeric.
function simple(str) {
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return str.toLowerCase().replace(/[^a-z0-9]/g, char);
}

// hashes a string to something 'unique'
// we use this to generate ids for styles


function hashify(obj) {
  var str = JSON.stringify(obj);
  var toRet = (0, _hash2.default)(str).toString(36);
  if (obj.label && obj.label.length > 0 && isDev) {
    return simple(obj.label.join('.'), '-') + '-' + toRet;
  }
  return toRet;
}

// of shape { 'data-css-<id>': '' }
function isLikeRule(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) {
    return false;
  }
  return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(keys[0]);
}

// extracts id from a { 'data-css-<id>': ''} like object
function idFor(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) throw new Error('not a rule');
  var regex = /data\-css\-([a-zA-Z0-9\-_]+)/;
  var match = regex.exec(keys[0]);
  if (!match) throw new Error('not a rule');
  return match[1];
}

// from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  if (selector.indexOf(',') === -1) {
    return [selector];
  }

  var indices = [],
      res = [],
      inParen = 0,
      o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    switch (o[0]) {
      case '(':
        inParen++;break;
      case ')':
        inParen--;break;
      case ',':
        if (inParen) break;indices.push(o.index);
    }
  }
  for (o = indices.length; o--;) {
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res;
}

function selector(id, path) {
  if (!id) {
    return path.replace(/\&/g, '');
  }
  if (!path) return '.css-' + id + ',[data-css-' + id + ']';

  var x = splitSelector(path).map(function (x) {
    return x.indexOf('&') >= 0 ? [x.replace(/\&/mg, '.css-' + id), x.replace(/\&/mg, '[data-css-' + id + ']')].join(',') // todo - make sure each sub selector has an &
    : '.css-' + id + x + ',[data-css-' + id + ']' + x;
  }).join(',');

  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
    x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
  }
  return x;
}

// end https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61


function toCSS(_ref) {
  var selector = _ref.selector,
      style = _ref.style;

  var result = plugins.transform({ selector: selector, style: style });
  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
}

function deconstruct(style) {
  // we can be sure it's not infinitely nested here
  var plain = void 0,
      selects = void 0,
      medias = void 0,
      supports = void 0;
  Object.keys(style).forEach(function (key) {
    if (key.indexOf('&') >= 0) {
      selects = selects || {};
      selects[key] = style[key];
    } else if (key.indexOf('@media') === 0) {
      medias = medias || {};
      medias[key] = deconstruct(style[key]);
    } else if (key.indexOf('@supports') === 0) {
      supports = supports || {};
      supports[key] = deconstruct(style[key]);
    } else if (key === 'label') {
      if (style.label.length > 0) {
        plain = plain || {};
        plain.label = hasLabels ? style.label.join('.') : '';
      }
    } else {
      plain = plain || {};
      plain[key] = style[key];
    }
  });
  return { plain: plain, selects: selects, medias: medias, supports: supports };
}

function deconstructedStyleToCSS(id, style) {
  var css = [];

  // plugins here
  var plain = style.plain,
      selects = style.selects,
      medias = style.medias,
      supports = style.supports;

  if (plain) {
    css.push(toCSS({ style: plain, selector: selector(id) }));
  }
  if (selects) {
    Object.keys(selects).forEach(function (key) {
      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
    });
  }
  if (medias) {
    Object.keys(medias).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
    });
  }
  if (supports) {
    Object.keys(supports).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
    });
  }
  return css;
}

// this cache to track which rules have
// been inserted into the stylesheet
var inserted = styleSheet.inserted = {};

// and helpers to insert rules into said styleSheet
function insert(spec) {
  if (!inserted[spec.id]) {
    inserted[spec.id] = true;
    var deconstructed = deconstruct(spec.style);
    var rules = deconstructedStyleToCSS(spec.id, deconstructed);
    inserted[spec.id] = isBrowser ? true : rules;
    rules.forEach(function (cssRule) {
      return styleSheet.insert(cssRule);
    });
  }
}

// a simple cache to store generated rules
var registered = styleSheet.registered = {};
function register(spec) {
  if (!registered[spec.id]) {
    registered[spec.id] = spec;
  }
}

function _getRegistered(rule) {
  if (isLikeRule(rule)) {
    var ret = registered[idFor(rule)];
    if (ret == null) {
      throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
    }
    return ret;
  }
  return rule;
}

// todo - perf
var ruleCache = {};
function toRule(spec) {
  register(spec);
  insert(spec);

  if (ruleCache[spec.id]) {
    return ruleCache[spec.id];
  }

  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
  Object.defineProperty(ret, 'toString', {
    enumerable: false, value: function value() {
      return 'css-' + spec.id;
    }
  });
  ruleCache[spec.id] = ret;
  return ret;
}

function log() {
  //eslint-disable-line no-unused-vars
  console.log(this); //eslint-disable-line no-console
  return this;
}

function isSelector(key) {
  var possibles = [':', '.', '[', '>', ' '],
      found = false,
      ch = key.charAt(0);
  for (var i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true;
      break;
    }
  }
  return found || key.indexOf('&') >= 0;
}

function joinSelectors(a, b) {
  var as = splitSelector(a).map(function (a) {
    return !(a.indexOf('&') >= 0) ? '&' + a : a;
  });
  var bs = splitSelector(b).map(function (b) {
    return !(b.indexOf('&') >= 0) ? '&' + b : b;
  });

  return bs.reduce(function (arr, b) {
    return arr.concat(as.map(function (a) {
      return b.replace(/\&/g, a);
    }));
  }, []).join(',');
}

function joinMediaQueries(a, b) {
  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
}

function isMediaQuery(key) {
  return key.indexOf('@media') === 0;
}

function isSupports(key) {
  return key.indexOf('@supports') === 0;
}

function joinSupports(a, b) {
  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
}

// flatten a nested array
function flatten(inArr) {
  var arr = [];
  for (var i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
  }
  return arr;
}

var prefixedPseudoSelectors = {
  '::placeholder': ['::-webkit-input-placeholder', '::-moz-placeholder', '::-ms-input-placeholder'],
  ':fullscreen': [':-webkit-full-screen', ':-moz-full-screen', ':-ms-fullscreen']

  // mutable! modifies dest.
};function build(dest, _ref2) {
  var _ref2$selector = _ref2.selector,
      selector = _ref2$selector === undefined ? '' : _ref2$selector,
      _ref2$mq = _ref2.mq,
      mq = _ref2$mq === undefined ? '' : _ref2$mq,
      _ref2$supp = _ref2.supp,
      supp = _ref2$supp === undefined ? '' : _ref2$supp,
      _ref2$src = _ref2.src,
      src = _ref2$src === undefined ? {} : _ref2$src;


  if (!Array.isArray(src)) {
    src = [src];
  }
  src = flatten(src);

  src.forEach(function (_src) {
    if (isLikeRule(_src)) {
      var reg = _getRegistered(_src);
      if (reg.type !== 'css') {
        throw new Error('cannot merge this rule');
      }
      _src = reg.style;
    }
    _src = (0, _clean2.default)(_src);
    if (_src && _src.composes) {
      build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
    }
    Object.keys(_src || {}).forEach(function (key) {
      if (isSelector(key)) {

        if (prefixedPseudoSelectors[key]) {
          prefixedPseudoSelectors[key].forEach(function (p) {
            return build(dest, { selector: joinSelectors(selector, p), mq: mq, supp: supp, src: _src[key] });
          });
        }

        build(dest, { selector: joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
      } else if (isMediaQuery(key)) {
        build(dest, { selector: selector, mq: joinMediaQueries(mq, key), supp: supp, src: _src[key] });
      } else if (isSupports(key)) {
        build(dest, { selector: selector, mq: mq, supp: joinSupports(supp, key), src: _src[key] });
      } else if (key === 'composes') {
        // ignore, we already dealth with it
      } else {
        var _dest = dest;
        if (supp) {
          _dest[supp] = _dest[supp] || {};
          _dest = _dest[supp];
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {};
          _dest = _dest[mq];
        }
        if (selector) {
          _dest[selector] = _dest[selector] || {};
          _dest = _dest[selector];
        }

        if (key === 'label') {
          if (hasLabels) {
            dest.label = dest.label.concat(_src.label);
          }
        } else {
          _dest[key] = _src[key];
        }
      }
    });
  });
}

function _css(rules) {
  var style = { label: [] };
  build(style, { src: rules }); // mutative! but worth it.

  var spec = {
    id: hashify(style),
    style: style, label: hasLabels ? style.label.join('.') : '',
    type: 'css'
  };
  return toRule(spec);
}

var nullrule = {
  // 'data-css-nil': ''
};
Object.defineProperty(nullrule, 'toString', {
  enumerable: false, value: function value() {
    return 'css-nil';
  }
});

var inputCaches = typeof WeakMap !== 'undefined' ? [nullrule, new WeakMap(), new WeakMap(), new WeakMap()] : [nullrule];

var warnedWeakMapError = false;
function multiIndexCache(fn) {
  return function (args) {
    if (inputCaches[args.length]) {
      var coi = inputCaches[args.length];
      var ctr = 0;
      while (ctr < args.length - 1) {
        if (!coi.has(args[ctr])) {
          coi.set(args[ctr], new WeakMap());
        }
        coi = coi.get(args[ctr]);
        ctr++;
      }
      if (coi.has(args[args.length - 1])) {
        var ret = coi.get(args[ctr]);

        if (registered[ret.toString().substring(4)]) {
          // make sure it hasn't been flushed
          return ret;
        }
      }
    }
    var value = fn(args);
    if (inputCaches[args.length]) {
      var _ctr = 0,
          _coi = inputCaches[args.length];
      while (_ctr < args.length - 1) {
        _coi = _coi.get(args[_ctr]);
        _ctr++;
      }
      try {
        _coi.set(args[_ctr], value);
      } catch (err) {
        if (isDev && !warnedWeakMapError) {
          var _console;

          warnedWeakMapError = true;
          (_console = console).warn.apply(_console, ['failed setting the WeakMap cache for args:'].concat(_toConsumableArray(args))); // eslint-disable-line no-console
          console.warn('this should NOT happen, please file a bug on the github repo.'); // eslint-disable-line no-console
        }
      }
    }
    return value;
  };
}

var cachedCss = typeof WeakMap !== 'undefined' ? multiIndexCache(_css) : _css;

function css() {
  for (var _len2 = arguments.length, rules = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rules[_key2] = arguments[_key2];
  }

  if (rules[0] && rules[0].length && rules[0].raw) {
    throw new Error('you forgot to include glamor/babel in your babel plugins.');
  }

  rules = (0, _clean2.default)(rules);
  if (!rules) {
    return nullrule;
  }

  return cachedCss(rules);
}

css.insert = function (css) {
  var spec = {
    id: hashify(css),
    css: css,
    type: 'raw'
  };
  register(spec);
  if (!inserted[spec.id]) {
    styleSheet.insert(spec.css);
    inserted[spec.id] = isBrowser ? true : [spec.css];
  }
};

var insertRule = exports.insertRule = css.insert;

css.global = function (selector, style) {
  style = (0, _clean2.default)(style);
  if (style) {
    return css.insert(toCSS({ selector: selector, style: style }));
  }
};

var insertGlobal = exports.insertGlobal = css.global;

function insertKeyframe(spec) {
  if (!inserted[spec.id]) {
    var inner = Object.keys(spec.keyframes).map(function (kf) {
      var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
      return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
    }).join('');

    var rules = ['-webkit-', '-moz-', '-o-', ''].map(function (prefix) {
      return '@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}';
    });
    rules.forEach(function (rule) {
      return styleSheet.insert(rule);
    });

    inserted[spec.id] = isBrowser ? true : rules;
  }
}
css.keyframes = function (name, kfs) {
  if (!kfs) {
    kfs = name, name = 'animation';
  }

  // do not ignore empty keyframe definitions for now.
  kfs = (0, _clean2.default)(kfs) || {};
  var spec = {
    id: hashify({ name: name, kfs: kfs }),
    type: 'keyframes',
    name: name,
    keyframes: kfs
  };
  register(spec);
  insertKeyframe(spec);
  return name + '_' + spec.id;
};

// we don't go all out for fonts as much, giving a simple font loading strategy
// use a fancier lib if you need moar power
css.fontFace = function (font) {
  font = (0, _clean2.default)(font);
  var spec = {
    id: hashify(font),
    type: 'font-face',
    font: font
  };
  register(spec);
  insertFontFace(spec);

  return font.fontFamily;
};

var fontFace = exports.fontFace = css.fontFace;
var keyframes = exports.keyframes = css.keyframes;

function insertFontFace(spec) {
  if (!inserted[spec.id]) {
    var rule = '@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}';
    styleSheet.insert(rule);
    inserted[spec.id] = isBrowser ? true : [rule];
  }
}

// rehydrate the insertion cache with ids sent from
// renderStatic / renderStaticOptimized
function rehydrate(ids) {
  // load up ids
  (0, _objectAssign2.default)(inserted, ids.reduce(function (o, i) {
    return o[i] = true, o;
  }, {}));
  // assume css loaded separately
}

// clears out the cache and empties the stylesheet
// best for tests, though there might be some value for SSR.

function flush() {
  inserted = styleSheet.inserted = {};
  registered = styleSheet.registered = {};
  ruleCache = {};
  styleSheet.flush();
  styleSheet.inject();
}

var presets = exports.presets = {
  mobile: '(min-width: 400px)',
  Mobile: '@media (min-width: 400px)',
  phablet: '(min-width: 550px)',
  Phablet: '@media (min-width: 550px)',
  tablet: '(min-width: 750px)',
  Tablet: '@media (min-width: 750px)',
  desktop: '(min-width: 1000px)',
  Desktop: '@media (min-width: 1000px)',
  hd: '(min-width: 1200px)',
  Hd: '@media (min-width: 1200px)'
};

var style = exports.style = css;

function select(selector) {
  for (var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    styles[_key3 - 1] = arguments[_key3];
  }

  if (!selector) {
    return style(styles);
  }
  return css(_defineProperty({}, selector, styles));
}
var $ = exports.$ = select;

function parent(selector) {
  for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    styles[_key4 - 1] = arguments[_key4];
  }

  return css(_defineProperty({}, selector + ' &', styles));
}

var merge = exports.merge = css;
var compose = exports.compose = css;

function media(query) {
  for (var _len5 = arguments.length, rules = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    rules[_key5 - 1] = arguments[_key5];
  }

  return css(_defineProperty({}, '@media ' + query, rules));
}

function pseudo(selector) {
  for (var _len6 = arguments.length, styles = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    styles[_key6 - 1] = arguments[_key6];
  }

  return css(_defineProperty({}, selector, styles));
}

// allllll the pseudoclasses

function active(x) {
  return pseudo(':active', x);
}

function any(x) {
  return pseudo(':any', x);
}

function checked(x) {
  return pseudo(':checked', x);
}

function disabled(x) {
  return pseudo(':disabled', x);
}

function empty(x) {
  return pseudo(':empty', x);
}

function enabled(x) {
  return pseudo(':enabled', x);
}

function _default(x) {
  return pseudo(':default', x); // note '_default' name
}

function first(x) {
  return pseudo(':first', x);
}

function firstChild(x) {
  return pseudo(':first-child', x);
}

function firstOfType(x) {
  return pseudo(':first-of-type', x);
}

function fullscreen(x) {
  return pseudo(':fullscreen', x);
}

function focus(x) {
  return pseudo(':focus', x);
}

function hover(x) {
  return pseudo(':hover', x);
}

function indeterminate(x) {
  return pseudo(':indeterminate', x);
}

function inRange(x) {
  return pseudo(':in-range', x);
}

function invalid(x) {
  return pseudo(':invalid', x);
}

function lastChild(x) {
  return pseudo(':last-child', x);
}

function lastOfType(x) {
  return pseudo(':last-of-type', x);
}

function left(x) {
  return pseudo(':left', x);
}

function link(x) {
  return pseudo(':link', x);
}

function onlyChild(x) {
  return pseudo(':only-child', x);
}

function onlyOfType(x) {
  return pseudo(':only-of-type', x);
}

function optional(x) {
  return pseudo(':optional', x);
}

function outOfRange(x) {
  return pseudo(':out-of-range', x);
}

function readOnly(x) {
  return pseudo(':read-only', x);
}

function readWrite(x) {
  return pseudo(':read-write', x);
}

function required(x) {
  return pseudo(':required', x);
}

function right(x) {
  return pseudo(':right', x);
}

function root(x) {
  return pseudo(':root', x);
}

function scope(x) {
  return pseudo(':scope', x);
}

function target(x) {
  return pseudo(':target', x);
}

function valid(x) {
  return pseudo(':valid', x);
}

function visited(x) {
  return pseudo(':visited', x);
}

// parameterized pseudoclasses
function dir(p, x) {
  return pseudo(':dir(' + p + ')', x);
}
function lang(p, x) {
  return pseudo(':lang(' + p + ')', x);
}
function not(p, x) {
  // should this be a plugin?
  var selector = p.split(',').map(function (x) {
    return x.trim();
  }).map(function (x) {
    return ':not(' + x + ')';
  });
  if (selector.length === 1) {
    return pseudo(':not(' + p + ')', x);
  }
  return select(selector.join(''), x);
}
function nthChild(p, x) {
  return pseudo(':nth-child(' + p + ')', x);
}
function nthLastChild(p, x) {
  return pseudo(':nth-last-child(' + p + ')', x);
}
function nthLastOfType(p, x) {
  return pseudo(':nth-last-of-type(' + p + ')', x);
}
function nthOfType(p, x) {
  return pseudo(':nth-of-type(' + p + ')', x);
}

// pseudoelements
function after(x) {
  return pseudo('::after', x);
}
function before(x) {
  return pseudo('::before', x);
}
function firstLetter(x) {
  return pseudo('::first-letter', x);
}
function firstLine(x) {
  return pseudo('::first-line', x);
}
function selection(x) {
  return pseudo('::selection', x);
}
function backdrop(x) {
  return pseudo('::backdrop', x);
}
function placeholder(x) {
  // https://github.com/threepointone/glamor/issues/14
  return css({ '::placeholder': x });
}

/*** helpers for web components ***/
// https://github.com/threepointone/glamor/issues/16

function cssFor() {
  for (var _len7 = arguments.length, rules = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    rules[_key7] = arguments[_key7];
  }

  rules = (0, _clean2.default)(rules);
  return rules ? rules.map(function (r) {
    var style = { label: [] };
    build(style, { src: r }); // mutative! but worth it.
    return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
  }).join('') : '';
}

function attribsFor() {
  for (var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    rules[_key8] = arguments[_key8];
  }

  rules = (0, _clean2.default)(rules);
  var htmlAttributes = rules ? rules.map(function (rule) {
    idFor(rule); // throwaway check for rule
    var key = Object.keys(rule)[0],
        value = rule[key];
    return key + '="' + (value || '') + '"';
  }).join(' ') : '';

  return htmlAttributes;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStyleName = undefined;
exports.createMarkupForStyles = createMarkupForStyles;

var _camelizeStyleName = __webpack_require__(12);

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _dangerousStyleValue = __webpack_require__(14);

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _hyphenateStyleName = __webpack_require__(17);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _memoizeStringOnly = __webpack_require__(19);

var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);

var _warning = __webpack_require__(6);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                   * Copyright 2013-present, Facebook, Inc.
                                                                                                                   * All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the BSD-style license found in the
                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                   *
                                                                                                                   * @providesModule CSSPropertyOperations
                                                                                                                   */

if (process.env.NODE_ENV !== 'production') {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;

  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : void 0;
  };

  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
  };

  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
  };

  var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
  };

  var checkRenderMessage = function checkRenderMessage(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var warnValidStyle = function warnValidStyle(name, value, component) {
    //eslint-disable-line no-var
    var owner = void 0;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */

function createMarkupForStyles(styles, component) {
  var serialized = '';
  for (var styleName in styles) {
    var isCustomProp = styleName.indexOf('--') === 0;
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    if (styleName === 'label') {
      continue;
    }
    var styleValue = styles[styleName];
    if (process.env.NODE_ENV !== 'production' && !isCustomProp) {
      warnValidStyle(styleName, styleValue, component);
    }
    if (styleValue != null) {
      if (isCustomProp) {
        serialized += styleName + ':' + styleValue + ';';
      } else {
        serialized += processStyleName(styleName) + ':';
        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
      }
    }
  }
  return serialized || null;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(16);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_load_google_maps_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_load_google_maps_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_load_google_maps_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colors__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_component__ = __webpack_require__(9);
__webpack_require__(0);




const style = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["css"])({ height: '100%' });
let $map;
let $container = function () {
    var $$a = document.createElement('div');
    $$a.setAttributes(style);
    $$a.appendChildren(__WEBPACK_IMPORTED_MODULE_3__details_component__["a" /* default */].element);
    var $$c = document.createElement('div');
    $$c.setAttributes(style);
    (e => $map = e)($$c);
    $$a.appendChild($$c);
    return $$a;
}.call(this);
const state = {
    areas: null,
    map: null,
    gmaps: null,
    mode: null,
    polygons: [],
    clearPolygons: () => {
        state.polygons.forEach(polygon => polygon.setMap(null));
        state.polygons = [];
    }
};
__WEBPACK_IMPORTED_MODULE_1_load_google_maps_api___default()({ key: 'AIzaSyB6cuVrCJvwyNos7SsUWZ0D1UjiwwvmiZM' }).then(gmaps => {
    state.gmaps = gmaps;
    state.map = new gmaps.Map($map, {
        zoom: 12,
        center: {
            lng: -58.4537674321647,
            lat: -34.5966342484152
        },
        mapTypeId: 'terrain'
    });
    setState({ mode: 'ratio' });
});
function setState(partialState) {
    Object.assign(state, partialState);
    const {areas, mode, map, gmaps} = state;
    const minRatio = Math.min(...areas.map(a => a[mode]));
    const maxRatio = Math.max(...areas.map(a => a[mode]));
    if (!gmaps) {
        return;
    }
    state.clearPolygons();
    areas.forEach(area => {
        const polygonOpts = getPolygon(area, area[mode], minRatio, maxRatio);
        const polygon = new gmaps.Polygon(polygonOpts);
        polygon.setMap(map);
        state.polygons.push(polygon);
        gmaps.event.addListener(polygon, 'mouseover', e => {
            __WEBPACK_IMPORTED_MODULE_3__details_component__["a" /* default */].setState({
                show: true,
                name: area.name,
                rent: area.rent,
                price: area.price,
                ratio: area.ratio,
                count: area.count
            });
            polygon.setOptions({ fillOpacity: 0.8 });
        });
        gmaps.event.addListener(polygon, 'mouseout', e => {
            __WEBPACK_IMPORTED_MODULE_3__details_component__["a" /* default */].setState({ show: false });
            polygon.setOptions({ fillOpacity: 0.5 });
        });
    });
}
/* harmony default export */ __webpack_exports__["a"] = ({
    element: $container,
    setState
});
function getPolygon({name, coords}, ratio, minRatio, maxRatio) {
    const x = (ratio - minRatio) / (maxRatio - minRatio);
    const color = __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */][Math.round(x * (__WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].length - 1))];
    return {
        paths: coords,
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.5,
        clickable: true
    };
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);
__webpack_require__(0);

const containerStyle = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["css"])({
    width: 300,
    zIndex: 10,
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'fixed',
    display: 'none'
});
let $container, $name, $rent, $price, $ratio, $count;
$container = function () {
    var $$a = document.createElement('div');
    $$a.setAttributes(containerStyle);
    var $$b = document.createElement('table');
    $$a.appendChild($$b);
    var $$c = document.createElement('tr');
    $$b.appendChild($$c);
    var $$d = document.createElement('th');
    $$c.appendChild($$d);
    var $$e = document.createTextNode('Barrio');
    $$d.appendChild($$e);
    var $$f = document.createElement('td');
    (e => $name = e)($$f);
    $$c.appendChild($$f);
    var $$g = document.createElement('tr');
    $$b.appendChild($$g);
    var $$h = document.createElement('th');
    $$g.appendChild($$h);
    var $$i = document.createTextNode('Alquiler');
    $$h.appendChild($$i);
    var $$j = document.createElement('td');
    $$j.setAttribute('id', 'rent');
    (e => $rent = e)($$j);
    $$g.appendChild($$j);
    var $$k = document.createElement('tr');
    $$b.appendChild($$k);
    var $$l = document.createElement('th');
    $$k.appendChild($$l);
    var $$m = document.createTextNode('Venta');
    $$l.appendChild($$m);
    var $$n = document.createElement('td');
    $$n.setAttribute('id', 'price');
    (e => $price = e)($$n);
    $$k.appendChild($$n);
    var $$o = document.createElement('tr');
    $$b.appendChild($$o);
    var $$p = document.createElement('th');
    $$o.appendChild($$p);
    var $$q = document.createTextNode('Venta/Alquiler');
    $$p.appendChild($$q);
    var $$r = document.createElement('td');
    $$r.setAttribute('id', 'ratio');
    (e => $ratio = e)($$r);
    $$o.appendChild($$r);
    var $$s = document.createElement('tr');
    $$b.appendChild($$s);
    var $$t = document.createElement('th');
    $$s.appendChild($$t);
    var $$u = document.createTextNode('Cantidad');
    $$t.appendChild($$u);
    var $$v = document.createElement('td');
    (e => $count = e)($$v);
    $$s.appendChild($$v);
    return $$a;
}.call(this);
const state = {
    show: false,
    name: null,
    rent: null,
    price: null,
    ratio: null,
    count: null,
    mode: null
};
function appendTo(parent) {
    parent.appendChild($container);
}
function setState(partialState) {
    Object.assign(state, partialState);
    const {show, name, mode, count} = state;
    const display = state.show ? 'block' : 'none';
    $container.style.display = display;
    $name.innerText = name;
    let $modes = [
        $rent,
        $price,
        $ratio
    ];
    $modes.forEach($mode => {
        let value = state[mode];
        $mode.innerText = (mode === 'ratio' ? '' : '$') + (value ? Math.round(value).toLocaleString() : '');
        $mode.parentNode.style.display = mode === $mode.id ? '' : 'none';
    });
    $count.innerText = count;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    element: $container,
    setState
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mode_component__ = __webpack_require__(44);
__webpack_require__(0);





__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global("html, body", { padding: 0, margin: 0, height: "100%" });

document.body.appendChild(__WEBPACK_IMPORTED_MODULE_3__mode_component__["a" /* default */].element);
document.body.appendChild(__WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* default */].element);

__WEBPACK_IMPORTED_MODULE_3__mode_component__["a" /* default */].setState({});
__WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* default */].setState({
  areas: __WEBPACK_IMPORTED_MODULE_1__info__["a" /* default */]
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheet = StyleSheet;

var _objectAssign = __webpack_require__(4);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* 

high performance StyleSheet for css-in-js systems 

- uses multiple style tags behind the scenes for millions of rules 
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side 


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject() 
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }') 
- appends a css rule into the stylesheet 

styleSheet.flush() 
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }

  // this weirdness brought to you by firefox 
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isBrowser = typeof window !== 'undefined';
var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
var isTest = process.env.NODE_ENV === 'test';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-glamor', '');
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

function StyleSheet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$speedy = _ref.speedy,
      speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

  this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
  this.sheet = undefined;
  this.tags = [];
  this.maxLength = maxLength;
  this.ctr = 0;
}

(0, _objectAssign2.default)(StyleSheet.prototype, {
  getSheet: function getSheet() {
    return sheetForTag(last(this.tags));
  },
  inject: function inject() {
    var _this = this;

    if (this.injected) {
      throw new Error('already injected stylesheet!');
    }
    if (isBrowser) {
      this.tags[0] = makeStyleTag();
    } else {
      // server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: function insertRule(rule) {
          // enough 'spec compliance' to be able to extract the rules later  
          // in other words, just the cssText field 
          _this.sheet.cssRules.push({ cssText: rule });
        }
      };
    }
    this.injected = true;
  },
  speedy: function speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
    }
    this.isSpeedy = !!bool;
  },
  _insert: function _insert(rule) {
    // this weirdness for perf, and chrome's weird bug 
    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    try {
      var sheet = this.getSheet();
      sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
    } catch (e) {
      if (isDev) {
        // might need beter dx for this 
        console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
      }
    }
  },
  insert: function insert(rule) {

    if (isBrowser) {
      // this is the ultrafast version, works across browsers 
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule);
      }
      // more browser weirdness. I don't even know    
      // else if(this.tags.length > 0 && this.tags::last().styleSheet) {      
      //   this.tags::last().styleSheet.cssText+= rule
      // }
      else {
          if (rule.indexOf('@import') !== -1) {
            var tag = last(this.tags);
            tag.insertBefore(document.createTextNode(rule), tag.firstChild);
          } else {
            last(this.tags).appendChild(document.createTextNode(rule));
          }
        }
    } else {
      // server side is pretty simple         
      this.sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : this.sheet.cssRules.length);
    }

    this.ctr++;
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag());
    }
    return this.ctr - 1;
  },

  // commenting this out till we decide on v3's decision 
  // _replace(index, rule) {
  //   // this weirdness for perf, and chrome's weird bug 
  //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
  //   try {  
  //     let sheet = this.getSheet()        
  //     sheet.deleteRule(index) // todo - correct index here     
  //     sheet.insertRule(rule, index)
  //   }
  //   catch(e) {
  //     if(isDev) {
  //       // might need beter dx for this 
  //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
  //     }          
  //   }          

  // }
  // replace(index, rule) {
  //   if(isBrowser) {
  //     if(this.isSpeedy && this.getSheet().insertRule) {
  //       this._replace(index, rule)
  //     }
  //     else {
  //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
  //       let _index = (index % this.maxLength) + 1
  //       let tag = this.tags[_slot]
  //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
  //     }
  //   }
  //   else {
  //     let rules = this.sheet.cssRules
  //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
  //   }
  // }
  delete: function _delete(index) {
    // we insert a blank rule when 'deleting' so previously returned indexes remain stable
    return this.replace(index, '');
  },
  flush: function flush() {
    if (isBrowser) {
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.sheet = null;
      this.ctr = 0;
      // todo - look for remnants in document.styleSheets
    } else {
      // simpler on server 
      this.sheet.cssRules = [];
    }
    this.injected = false;
  },
  rules: function rules() {
    if (!isBrowser) {
      return this.sheet.cssRules;
    }
    var arr = [];
    this.tags.forEach(function (tag) {
      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
    });
    return arr;
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var camelize = __webpack_require__(13);

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSProperty = __webpack_require__(15);

var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

var _warning = __webpack_require__(6);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (process.env.NODE_ENV !== 'production') {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

exports.default = dangerousStyleValue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true

  /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */
};function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

exports.default = CSSProperty;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(18);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clean;
// Returns true for null, false, undefined and {}
function isFalsy(value) {
  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
}

function cleanObject(object) {
  if (isFalsy(object)) return null;
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;

  var acc = {},
      keys = Object.keys(object),
      hasFalsy = false;
  for (var i = 0; i < keys.length; i++) {
    var value = object[keys[i]];
    var filteredValue = clean(value);
    if (filteredValue === null || filteredValue !== value) {
      hasFalsy = true;
    }
    if (filteredValue !== null) {
      acc[keys[i]] = filteredValue;
    }
  }
  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
}

function cleanArray(rules) {
  var hasFalsy = false;
  var filtered = [];
  rules.forEach(function (rule) {
    var filteredRule = clean(rule);
    if (filteredRule === null || filteredRule !== rule) {
      hasFalsy = true;
    }
    if (filteredRule !== null) {
      filtered.push(filteredRule);
    }
  });
  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
}

// Takes style array or object provided by user and clears all the falsy data 
// If there is no styles left after filtration returns null
function clean(input) {
  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PluginSet = PluginSet;
exports.fallbacks = fallbacks;
exports.contentWrap = contentWrap;
exports.prefixes = prefixes;

var _objectAssign = __webpack_require__(4);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _CSSPropertyOperations = __webpack_require__(5);

var _prefixer = __webpack_require__(22);

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = function (x) {
  return x === 'development' || !x;
}(process.env.NODE_ENV);

function PluginSet(initial) {
  this.fns = initial || [];
}

(0, _objectAssign2.default)(PluginSet.prototype, {
  add: function add() {
    var _this = this;

    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    fns.forEach(function (fn) {
      if (_this.fns.indexOf(fn) >= 0) {
        if (isDev) {
          console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
        }
      } else {
        _this.fns = [fn].concat(_this.fns);
      }
    });
  },
  remove: function remove(fn) {
    this.fns = this.fns.filter(function (x) {
      return x !== fn;
    });
  },
  clear: function clear() {
    this.fns = [];
  },
  transform: function transform(o) {
    return this.fns.reduce(function (o, fn) {
      return fn(o);
    }, o);
  }
});

function fallbacks(node) {
  var hasArray = Object.keys(node.style).map(function (x) {
    return Array.isArray(node.style[x]);
  }).indexOf(true) >= 0;
  if (hasArray) {
    var style = node.style;

    var flattened = Object.keys(style).reduce(function (o, key) {
      o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
      return o;
    }, {});
    // todo - 
    // flatten arrays which haven't been flattened yet 
    return (0, _objectAssign2.default)({}, node, { style: flattened });
  }
  return node;
}

var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit'];

function contentWrap(node) {
  if (node.style.content) {
    var cont = node.style.content;
    if (contentValues.indexOf(cont) >= 0) {
      return node;
    }
    if (/^(attr|calc|counters?|url)\(/.test(cont)) {
      return node;
    }
    if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
      return node;
    }
    return _extends({}, node, { style: _extends({}, node.style, { content: '"' + cont + '"' }) });
  }
  return node;
}

function prefixes(node) {
  return (0, _objectAssign2.default)({}, node, { style: (0, _prefixer2.default)(_extends({}, node.style)) });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixer;

var _staticData = __webpack_require__(23);

var _staticData2 = _interopRequireDefault(_staticData);

var _prefixProperty = __webpack_require__(24);

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(25);

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _cursor = __webpack_require__(26);

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__(27);

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__(28);

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__(29);

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__(30);

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(31);

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__(32);

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__(33);

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__(34);

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(35);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default]; // custom facade for inline-style-prefixer

var prefixMap = _staticData2.default.prefixMap;

function prefixer(style) {
  for (var property in style) {
    var value = style[property];

    var processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

    // only modify the value if it was touched
    // by any plugin to prevent unnecessary mutations
    if (processedValue) {
      style[property] = processedValue;
    }

    (0, _prefixProperty2.default)(prefixMap, property, style);
  }
  return style;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(7);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    );if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(2);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(2);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(2);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(2);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(36);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(2);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(7);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap
    // if the property is already prefixed
    );var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(37);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__areas_json__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__areas_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__areas_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_json__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stats_json__);
__webpack_require__(0);
 //Comes from "../data/tojson.js"
 //Comes from "../data/tosql.js"

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__areas_json___default.a.map(({ name, coords }) => {
  const { rent, price, count } = __WEBPACK_IMPORTED_MODULE_1__stats_json___default.a.find(s => s.name == name);
  return {
    name,
    rent,
    price,
    coords,
    count,
    ratio: price / rent
  };
}));


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = [{"name":"Chacarita","coords":[[{"lat":-34.5959886570639,"lng":-58.4528200492791},{"lat":-34.5978347610252,"lng":-58.4554840815948},{"lat":-34.5966774864904,"lng":-58.4592753814056},{"lat":-34.5967043067336,"lng":-58.4656201094845},{"lat":-34.5925515163591,"lng":-58.4643817851099},{"lat":-34.5905930920952,"lng":-58.4668281722696},{"lat":-34.5860421891544,"lng":-58.4618702043843},{"lat":-34.5855276845223,"lng":-58.4603788016938},{"lat":-34.5782946601008,"lng":-58.4605276992685},{"lat":-34.579070479135,"lng":-58.4553992793144},{"lat":-34.5831918210746,"lng":-58.4443997765097},{"lat":-34.5845135514129,"lng":-58.4447856534},{"lat":-34.5886677008384,"lng":-58.4385357500838},{"lat":-34.5943537370358,"lng":-58.4505488949718},{"lat":-34.5959886570639,"lng":-58.4528200492791}]]},{"name":"Paternal","coords":[[{"lat":-34.5965577078058,"lng":-58.4655768128541},{"lat":-34.5966774864904,"lng":-58.4592753814056},{"lat":-34.5975900748435,"lng":-58.4562363723257},{"lat":-34.6038291328157,"lng":-58.4581629096411},{"lat":-34.6043736870838,"lng":-58.4589348007685},{"lat":-34.6018603931331,"lng":-58.4689122599929},{"lat":-34.6053111422447,"lng":-58.4740166366363},{"lat":-34.6008251076105,"lng":-58.4774987633725},{"lat":-34.6001995767955,"lng":-58.4763923124358},{"lat":-34.5996709502012,"lng":-58.4788312666633},{"lat":-34.5913075439713,"lng":-58.4757241422155},{"lat":-34.58744531424,"lng":-58.4708152687488},{"lat":-34.5924672868431,"lng":-58.4644091198271},{"lat":-34.5965577078058,"lng":-58.4655768128541}]]},{"name":"Villa Crespo","coords":[[{"lat":-34.5978273383243,"lng":-58.4237529813037},{"lat":-34.5983289364703,"lng":-58.4277732175759},{"lat":-34.5991261910455,"lng":-58.4294288790204},{"lat":-34.6021338007058,"lng":-58.432240603845},{"lat":-34.6055828639918,"lng":-58.4392016360998},{"lat":-34.6076156442747,"lng":-58.4462474253216},{"lat":-34.6043736870838,"lng":-58.4589348007685},{"lat":-34.6038291328157,"lng":-58.4581629096411},{"lat":-34.5975900748435,"lng":-58.4562363723257},{"lat":-34.5978347610252,"lng":-58.4554840815948},{"lat":-34.5943537370358,"lng":-58.4505488949718},{"lat":-34.5886677008384,"lng":-58.4385357500838},{"lat":-34.5962105180767,"lng":-58.4269502240697},{"lat":-34.5977478956967,"lng":-58.4233672222353},{"lat":-34.5978273383243,"lng":-58.4237529813037}]]},{"name":"Villa del Parque","coords":[[{"lat":-34.6148652395239,"lng":-58.4946097568899},{"lat":-34.6143910936437,"lng":-58.4955729951466},{"lat":-34.6023785329234,"lng":-58.5061676697618},{"lat":-34.5967885277424,"lng":-58.4971282395771},{"lat":-34.5977580801127,"lng":-58.4834561575031},{"lat":-34.6001995767955,"lng":-58.4763923124358},{"lat":-34.6008251076105,"lng":-58.4774987633725},{"lat":-34.6053111422447,"lng":-58.4740166366363},{"lat":-34.6073597049054,"lng":-58.4776184023206},{"lat":-34.6101360573524,"lng":-58.4886543020126},{"lat":-34.6148652395239,"lng":-58.4946097568899}]]},{"name":"Almagro","coords":[[{"lat":-34.6141162515854,"lng":-58.4128700313089},{"lat":-34.6206423349386,"lng":-58.4125438594995},{"lat":-34.6220745322699,"lng":-58.4277953059251},{"lat":-34.6151056808615,"lng":-58.4292524794516},{"lat":-34.6154492138688,"lng":-58.4300285387507},{"lat":-34.6059413604021,"lng":-58.4306691121634},{"lat":-34.6026734568799,"lng":-58.4333340897606},{"lat":-34.6021338007058,"lng":-58.432240603845},{"lat":-34.5991261910455,"lng":-58.4294288790204},{"lat":-34.5979442688696,"lng":-58.4267851958388},{"lat":-34.5980030767748,"lng":-58.4119188098038},{"lat":-34.607246350613,"lng":-58.4139082529045},{"lat":-34.6081900636069,"lng":-58.4146599808851},{"lat":-34.6107364191075,"lng":-58.4144670312593},{"lat":-34.6141162515854,"lng":-58.4128700313089}]]},{"name":"Caballito","coords":[[{"lat":-34.6070470885963,"lng":-58.4306058283309},{"lat":-34.6154492138688,"lng":-58.4300285387507},{"lat":-34.6151056808615,"lng":-58.4292524794516},{"lat":-34.6269984842493,"lng":-58.4267558142259},{"lat":-34.6306390990819,"lng":-58.4515763751329},{"lat":-34.6073730117801,"lng":-58.4627046323134},{"lat":-34.604491844775,"lng":-58.4584739254559},{"lat":-34.6076156442747,"lng":-58.4462474253216},{"lat":-34.6055828639918,"lng":-58.4392016360998},{"lat":-34.6026734568799,"lng":-58.4333340897606},{"lat":-34.6059413604021,"lng":-58.4306691121634},{"lat":-34.6070470885963,"lng":-58.4306058283309}]]},{"name":"Villa Santa Rita","coords":[[{"lat":-34.6242871724757,"lng":-58.4819203599833},{"lat":-34.6246298692564,"lng":-58.4827426404615},{"lat":-34.6150160431958,"lng":-58.4947856335725},{"lat":-34.6101360573524,"lng":-58.4886543020126},{"lat":-34.6081267542887,"lng":-58.4804102870483},{"lat":-34.6191552945294,"lng":-58.4716211588348},{"lat":-34.6242871724757,"lng":-58.4819203599833}]]},{"name":"Monte Castro","coords":[[{"lat":-34.6240324216321,"lng":-58.5034920611534},{"lat":-34.6275943807029,"lng":-58.5072937377628},{"lat":-34.6242786537063,"lng":-58.5116515481881},{"lat":-34.628450326008,"lng":-58.5163822806213},{"lat":-34.6244050873326,"lng":-58.521636691421},{"lat":-34.6167316964764,"lng":-58.5130467127704},{"lat":-34.6091257666556,"lng":-58.5001924853705},{"lat":-34.6143910936437,"lng":-58.4955729951466},{"lat":-34.6167283414358,"lng":-58.4926363840486},{"lat":-34.6213705332025,"lng":-58.4982008801955},{"lat":-34.6240324216321,"lng":-58.5034920611534}]]},{"name":"Villa Real","coords":[[{"lat":-34.613999981063,"lng":-58.525116079791},{"lat":-34.6202152151591,"lng":-58.51695012847},{"lat":-34.6244050873326,"lng":-58.521636691421},{"lat":-34.6234862329553,"lng":-58.5228320559649},{"lat":-34.6275228005227,"lng":-58.5308028789606},{"lat":-34.6154936535585,"lng":-58.531518740591},{"lat":-34.6108956395926,"lng":-58.5294689967804},{"lat":-34.613999981063,"lng":-58.525116079791}]]},{"name":"Flores","coords":[[{"lat":-34.6420397134706,"lng":-58.4452515823782},{"lat":-34.6428068428585,"lng":-58.4442440448718},{"lat":-34.6417777546089,"lng":-58.4430779901734},{"lat":-34.6473523797435,"lng":-58.4374222950825},{"lat":-34.6462368723605,"lng":-58.4349230922177},{"lat":-34.6498743272452,"lng":-58.4304298868698},{"lat":-34.6558034890748,"lng":-58.4380054918067},{"lat":-34.6511899138583,"lng":-58.4433239350118},{"lat":-34.6508230773584,"lng":-58.4546362388594},{"lat":-34.6522993458277,"lng":-58.4550617780742},{"lat":-34.6568063613378,"lng":-58.4604017770485},{"lat":-34.6514682566608,"lng":-58.4670336289651},{"lat":-34.6461701975917,"lng":-58.462999008231},{"lat":-34.6413968925516,"lng":-58.4692423304431},{"lat":-34.6223843057071,"lng":-58.4778072341569},{"lat":-34.6175616884276,"lng":-58.4686352117012},{"lat":-34.6138856719602,"lng":-58.4594483620377},{"lat":-34.6306390990819,"lng":-58.4515763751329},{"lat":-34.6315005476642,"lng":-58.4543780777636},{"lat":-34.6374669159246,"lng":-58.4514410079411},{"lat":-34.6420397134706,"lng":-58.4452515823782}]]},{"name":"Floresta","coords":[[{"lat":-34.6241108718058,"lng":-58.4833907036583},{"lat":-34.6246298692564,"lng":-58.4827426404615},{"lat":-34.6223843057071,"lng":-58.4778072341569},{"lat":-34.6366552047109,"lng":-58.471302914919},{"lat":-34.6373083610103,"lng":-58.473492274813},{"lat":-34.6389347067828,"lng":-58.4760723304552},{"lat":-34.6213705332025,"lng":-58.4982008801955},{"lat":-34.6167283414358,"lng":-58.4926363840486},{"lat":-34.6241108718058,"lng":-58.4833907036583}]]},{"name":"Constitución","coords":[[{"lat":-34.6305149902026,"lng":-58.3786300781753},{"lat":-34.6330317470022,"lng":-58.3801432818507},{"lat":-34.6330700975028,"lng":-58.3812503588454},{"lat":-34.6308451529637,"lng":-58.3813327057591},{"lat":-34.6322205656219,"lng":-58.3833915276225},{"lat":-34.6341243913884,"lng":-58.3903525995973},{"lat":-34.6181592200746,"lng":-58.391696989062},{"lat":-34.6174523306285,"lng":-58.3773579627707},{"lat":-34.6236005071346,"lng":-58.3770652524455},{"lat":-34.6273016183744,"lng":-58.3755729030828},{"lat":-34.6293334822524,"lng":-58.3790443098809},{"lat":-34.6305149902026,"lng":-58.3786300781753}]]},{"name":"San Cristóbal","coords":[[{"lat":-34.6215599589853,"lng":-58.3915536991875},{"lat":-34.6272530267853,"lng":-58.3911698015239},{"lat":-34.6295159878879,"lng":-58.4083644787236},{"lat":-34.6303558693605,"lng":-58.411779314803},{"lat":-34.6229748135856,"lng":-58.4120418689701},{"lat":-34.6206423349386,"lng":-58.4125438594995},{"lat":-34.6188402664301,"lng":-58.4035128519242},{"lat":-34.6181592200746,"lng":-58.391696989062},{"lat":-34.6215599589853,"lng":-58.3915536991875}]]},{"name":"Boedo","coords":[[{"lat":-34.6206423349386,"lng":-58.4125438594995},{"lat":-34.6229748135856,"lng":-58.4120418689701},{"lat":-34.6328567590231,"lng":-58.41152056161},{"lat":-34.6352375264852,"lng":-58.4104885535212},{"lat":-34.638099355027,"lng":-58.4112604414934},{"lat":-34.6402003756307,"lng":-58.4234918835546},{"lat":-34.6220745322699,"lng":-58.4277953059251},{"lat":-34.6206423349386,"lng":-58.4125438594995}]]},{"name":"Vélez Sársfield","coords":[[{"lat":-34.6314024168004,"lng":-58.4855735176658},{"lat":-34.6369942783834,"lng":-58.4785455517697},{"lat":-34.6412999736917,"lng":-58.4878055974795},{"lat":-34.636963575377,"lng":-58.4933197628638},{"lat":-34.6365134006272,"lng":-58.4931162121033},{"lat":-34.6366467538286,"lng":-58.4937991847717},{"lat":-34.6317765533735,"lng":-58.4999773167952},{"lat":-34.6322077868481,"lng":-58.5010420985705},{"lat":-34.6275943807029,"lng":-58.5072937377628},{"lat":-34.6240324216321,"lng":-58.5034920611534},{"lat":-34.6213705332025,"lng":-58.4982008801955},{"lat":-34.6314024168004,"lng":-58.4855735176658}]]},{"name":"Villa Luro","coords":[[{"lat":-34.6318345193872,"lng":-58.5015376247954},{"lat":-34.6322077868481,"lng":-58.5010420985705},{"lat":-34.6319506893273,"lng":-58.4997058881329},{"lat":-34.6366467538286,"lng":-58.4937991847717},{"lat":-34.6365134006272,"lng":-58.4931162121033},{"lat":-34.636963575377,"lng":-58.4933197628638},{"lat":-34.6412999736917,"lng":-58.4878055974795},{"lat":-34.6448479591076,"lng":-58.4953021850052},{"lat":-34.6434094516649,"lng":-58.497137613172},{"lat":-34.6458181705157,"lng":-58.5022994907457},{"lat":-34.6400083430956,"lng":-58.5098222312771},{"lat":-34.6373709084626,"lng":-58.5105096254193},{"lat":-34.6367178847993,"lng":-58.5056722645244},{"lat":-34.635812430125,"lng":-58.5068193688073},{"lat":-34.634817493545,"lng":-58.5106707373973},{"lat":-34.6345994187548,"lng":-58.5083883479252},{"lat":-34.628450326008,"lng":-58.5163822806213},{"lat":-34.6242786537063,"lng":-58.5116515481881},{"lat":-34.6318345193872,"lng":-58.5015376247954}]]},{"name":"Parque Patricios","coords":[[{"lat":-34.648302987509,"lng":-58.4103697298525},{"lat":-34.648582880896,"lng":-58.4121005396964},{"lat":-34.6434552111571,"lng":-58.4134364486185},{"lat":-34.6357094526213,"lng":-58.4105119449969},{"lat":-34.6328567590231,"lng":-58.41152056161},{"lat":-34.6303558693605,"lng":-58.411779314803},{"lat":-34.6295159878879,"lng":-58.4083644787236},{"lat":-34.6272530267853,"lng":-58.3911698015239},{"lat":-34.640205502459,"lng":-58.3898814798986},{"lat":-34.6408265315406,"lng":-58.3914712109694},{"lat":-34.6420862477315,"lng":-58.3914001749859},{"lat":-34.6459184553943,"lng":-58.4004924229297},{"lat":-34.6463587423835,"lng":-58.4003326140345},{"lat":-34.6467310611915,"lng":-58.4010837327626},{"lat":-34.648302987509,"lng":-58.4103697298525}]]},{"name":"Mataderos","coords":[[{"lat":-34.6745050265102,"lng":-58.5025197162337},{"lat":-34.6568918088619,"lng":-58.5257736298117},{"lat":-34.6434094516649,"lng":-58.497137613172},{"lat":-34.6578444571751,"lng":-58.4788178144946},{"lat":-34.6624481556404,"lng":-58.4859453051063},{"lat":-34.6633484155153,"lng":-58.4889524082073},{"lat":-34.6711803517821,"lng":-58.497039908648},{"lat":-34.6745050265102,"lng":-58.5025197162337}]]},{"name":"Villa Lugano","coords":[[{"lat":-34.659025022031,"lng":-58.4657134919338},{"lat":-34.6600493899553,"lng":-58.4644302838092},{"lat":-34.6636558845097,"lng":-58.4684522640303},{"lat":-34.6636094931345,"lng":-58.4701944854535},{"lat":-34.6644386444789,"lng":-58.4703660376155},{"lat":-34.6688793871641,"lng":-58.4647685538527},{"lat":-34.6693885688721,"lng":-58.4632267908613},{"lat":-34.6735347876453,"lng":-58.4595465354443},{"lat":-34.674382143465,"lng":-58.457727133012},{"lat":-34.6800384129116,"lng":-58.4506411431689},{"lat":-34.6917921802477,"lng":-58.4633960274781},{"lat":-34.6821378656906,"lng":-58.4757972583293},{"lat":-34.6889546082405,"lng":-58.483355289321},{"lat":-34.6745085923533,"lng":-58.5025259133722},{"lat":-34.6711803517821,"lng":-58.497039908648},{"lat":-34.6633484155153,"lng":-58.4889524082073},{"lat":-34.6624481556404,"lng":-58.4859453051063},{"lat":-34.6578444571751,"lng":-58.4788178144946},{"lat":-34.6627728024494,"lng":-58.4725153175406},{"lat":-34.6584268649248,"lng":-58.4705705668529},{"lat":-34.6591053979505,"lng":-58.4695559648637},{"lat":-34.6575154679171,"lng":-58.4676553033829},{"lat":-34.659025022031,"lng":-58.4657134919338}]]},{"name":"San Telmo","coords":[[{"lat":-34.6156251471493,"lng":-58.3667344665838},{"lat":-34.6239873627789,"lng":-58.365785846027},{"lat":-34.6251213720055,"lng":-58.363454985638},{"lat":-34.6251954580434,"lng":-58.3679712009248},{"lat":-34.6271424047803,"lng":-58.3679451333274},{"lat":-34.6294937856849,"lng":-58.3706581576618},{"lat":-34.6266471605175,"lng":-58.370963660355},{"lat":-34.6267993946018,"lng":-58.3745605374647},{"lat":-34.6273016183744,"lng":-58.3755729030828},{"lat":-34.6236005071346,"lng":-58.3770652524455},{"lat":-34.6162934637292,"lng":-58.3774253374129},{"lat":-34.6156251471493,"lng":-58.3667344665838}]]},{"name":"Saavedra","coords":[[{"lat":-34.5612869279226,"lng":-58.4881310699952},{"lat":-34.5626506555011,"lng":-58.4909912633507},{"lat":-34.5613016418566,"lng":-58.4919301176211},{"lat":-34.5693920775479,"lng":-58.508604827106},{"lat":-34.5699971762164,"lng":-58.5090406318798},{"lat":-34.5692650785628,"lng":-58.5098754818572},{"lat":-34.5494892458445,"lng":-58.500551323831},{"lat":-34.5386305921147,"lng":-58.4759530989691},{"lat":-34.5489400157911,"lng":-58.468189262655},{"lat":-34.5524209338867,"lng":-58.4744359204902},{"lat":-34.5535338102215,"lng":-58.4735861446691},{"lat":-34.5612869279226,"lng":-58.4881310699952}]]},{"name":"Coghlan","coords":[[{"lat":-34.5660977127668,"lng":-58.4724205132861},{"lat":-34.5668106521891,"lng":-58.4745944778956},{"lat":-34.5662186699921,"lng":-58.4751236116257},{"lat":-34.5668491475797,"lng":-58.4761901850181},{"lat":-34.5639320493153,"lng":-58.4790548996063},{"lat":-34.5624996652309,"lng":-58.4811577239302},{"lat":-34.5591043168231,"lng":-58.4835597040772},{"lat":-34.5535338102215,"lng":-58.4735861446691},{"lat":-34.5613151350192,"lng":-58.4670371756465},{"lat":-34.5616873807018,"lng":-58.4676839219849},{"lat":-34.5621902624702,"lng":-58.4664901777516},{"lat":-34.5660977127668,"lng":-58.4724205132861}]]},{"name":"Villa Urquiza","coords":[[{"lat":-34.5626425900864,"lng":-58.4809767085347},{"lat":-34.5639320493153,"lng":-58.4790548996063},{"lat":-34.5668491475797,"lng":-58.4761901850181},{"lat":-34.5662186699921,"lng":-58.4751236116257},{"lat":-34.5668106521891,"lng":-58.4745944778956},{"lat":-34.5664355244244,"lng":-58.4729884743343},{"lat":-34.5666615316863,"lng":-58.4733684642162},{"lat":-34.5729088400037,"lng":-58.4680812613894},{"lat":-34.5848182165973,"lng":-58.4887935721301},{"lat":-34.5735492524376,"lng":-58.5029467489922},{"lat":-34.5699971762164,"lng":-58.5090406318798},{"lat":-34.5693920775479,"lng":-58.508604827106},{"lat":-34.5613016418566,"lng":-58.4919301176211},{"lat":-34.5626506555011,"lng":-58.4909912633507},{"lat":-34.5591043168231,"lng":-58.4835597040772},{"lat":-34.5626425900864,"lng":-58.4809767085347}]]},{"name":"Colegiales","coords":[[{"lat":-34.569065630363,"lng":-58.4466910921417},{"lat":-34.5721062457974,"lng":-58.4407445138848},{"lat":-34.5753643160567,"lng":-58.4439716893686},{"lat":-34.5785469344828,"lng":-58.4399388685523},{"lat":-34.5831708409276,"lng":-58.4444485731026},{"lat":-34.579070479135,"lng":-58.4553992793144},{"lat":-34.5782952880515,"lng":-58.4602248340306},{"lat":-34.575008412194,"lng":-58.4633555464406},{"lat":-34.5695264569663,"lng":-58.457709545512},{"lat":-34.5689980502858,"lng":-58.457628015889},{"lat":-34.5661082900862,"lng":-58.4522874976288},{"lat":-34.569065630363,"lng":-58.4466910921417}]]},{"name":"Balvanera","coords":[[{"lat":-34.5980030767748,"lng":-58.4119188098038},{"lat":-34.5980359654307,"lng":-58.4045066845614},{"lat":-34.599369729579,"lng":-58.4020082144739},{"lat":-34.5997603196348,"lng":-58.3987230001114},{"lat":-34.5996371407189,"lng":-58.3929308254775},{"lat":-34.6112799533936,"lng":-58.3918065100655},{"lat":-34.6181592200746,"lng":-58.391696989062},{"lat":-34.6188402664301,"lng":-58.4035128519242},{"lat":-34.6206423349386,"lng":-58.4125438594995},{"lat":-34.6141162515854,"lng":-58.4128700313089},{"lat":-34.6107364191075,"lng":-58.4144670312593},{"lat":-34.6081900636068,"lng":-58.4146599808851},{"lat":-34.607246350613,"lng":-58.4139082529045},{"lat":-34.5980030767748,"lng":-58.4119188098038}]]},{"name":"Villa Gral. Mitre","coords":[[{"lat":-34.6190380529955,"lng":-58.4713995731534},{"lat":-34.6081267542887,"lng":-58.4804102870483},{"lat":-34.6067494069775,"lng":-58.4763646858003},{"lat":-34.6018603931331,"lng":-58.4689122599929},{"lat":-34.604491844775,"lng":-58.4584739254559},{"lat":-34.6073730117801,"lng":-58.4627046323134},{"lat":-34.6138856719602,"lng":-58.4594483620377},{"lat":-34.6190380529955,"lng":-58.4713995731534}]]},{"name":"Parque Chas","coords":[[{"lat":-34.58744531424,"lng":-58.4708152687488},{"lat":-34.5917235680243,"lng":-58.4758890918379},{"lat":-34.5891189838591,"lng":-58.4847104372661},{"lat":-34.5848182165973,"lng":-58.4887935721301},{"lat":-34.5791249657802,"lng":-58.4789880538035},{"lat":-34.5799583110629,"lng":-58.4754240986496},{"lat":-34.5817649732474,"lng":-58.4735707508275},{"lat":-34.58744531424,"lng":-58.4708152687488}]]},{"name":"Agronomía","coords":[[{"lat":-34.5951149914833,"lng":-58.4771156675186},{"lat":-34.5996709502012,"lng":-58.4788312666633},{"lat":-34.5977580801127,"lng":-58.4834561575031},{"lat":-34.5968173886491,"lng":-58.4971750925229},{"lat":-34.5944501199565,"lng":-58.503543766591},{"lat":-34.5943822420751,"lng":-58.5030835155438},{"lat":-34.5939535746883,"lng":-58.5034718173482},{"lat":-34.5848182165973,"lng":-58.4887935721301},{"lat":-34.5891189838591,"lng":-58.4847104372661},{"lat":-34.5917235680243,"lng":-58.4758890918379},{"lat":-34.5951149914833,"lng":-58.4771156675186}]]},{"name":"Villa Ortúzar","coords":[[{"lat":-34.5779429557773,"lng":-58.4605469510917},{"lat":-34.5782952880515,"lng":-58.4602248340306},{"lat":-34.5782946601008,"lng":-58.4605276992685},{"lat":-34.5855276845223,"lng":-58.4603788016938},{"lat":-34.5860421891544,"lng":-58.4618702043843},{"lat":-34.5905930920952,"lng":-58.4668281722696},{"lat":-34.5874599535149,"lng":-58.4708045599282},{"lat":-34.5817649732474,"lng":-58.4735707508275},{"lat":-34.5799583110629,"lng":-58.4754240986496},{"lat":-34.5791249657802,"lng":-58.4789880538035},{"lat":-34.5724961753266,"lng":-58.4673642696436},{"lat":-34.5751051165793,"lng":-58.4631871043298},{"lat":-34.5779429557773,"lng":-58.4605469510917}]]},{"name":"Barracas","coords":[[{"lat":-34.6329258371189,"lng":-58.3703353711449},{"lat":-34.6501366170196,"lng":-58.3676488363194},{"lat":-34.651334240158,"lng":-58.3696567298576},{"lat":-34.652102758711,"lng":-58.3700120746499},{"lat":-34.6535787021643,"lng":-58.3697869603662},{"lat":-34.6549915394607,"lng":-58.3725354484958},{"lat":-34.6568877713594,"lng":-58.3740584811186},{"lat":-34.6575903062597,"lng":-58.3850550787494},{"lat":-34.6602778478115,"lng":-58.3879615941247},{"lat":-34.6611220802904,"lng":-58.3905125742793},{"lat":-34.6624167007357,"lng":-58.3925392133696},{"lat":-34.6618472972465,"lng":-58.3958877706287},{"lat":-34.6620621129766,"lng":-58.396988355539},{"lat":-34.6612572545029,"lng":-58.3977946679911},{"lat":-34.6607893188678,"lng":-58.4004137670655},{"lat":-34.649798275526,"lng":-58.4050450004191},{"lat":-34.6470603306162,"lng":-58.402745967907},{"lat":-34.6465529340343,"lng":-58.400602502211},{"lat":-34.6459184553943,"lng":-58.4004924229297},{"lat":-34.6420862477315,"lng":-58.3914001749859},{"lat":-34.6408265315406,"lng":-58.3914712109694},{"lat":-34.640205502459,"lng":-58.3898814798986},{"lat":-34.6341243913884,"lng":-58.3903525995973},{"lat":-34.6322205656219,"lng":-58.3833915276225},{"lat":-34.6308451529637,"lng":-58.3813327057591},{"lat":-34.6330700975028,"lng":-58.3812503588454},{"lat":-34.6330317470022,"lng":-58.3801432818507},{"lat":-34.6304990043112,"lng":-58.3786212324729},{"lat":-34.6293334822524,"lng":-58.3790443098809},{"lat":-34.6267993946018,"lng":-58.3745605374647},{"lat":-34.6266471605175,"lng":-58.370963660355},{"lat":-34.6329258371189,"lng":-58.3703353711449}]]},{"name":"Parque Avellaneda","coords":[[{"lat":-34.6387869543278,"lng":-58.4703750499015},{"lat":-34.6413968925516,"lng":-58.4692423304431},{"lat":-34.6461701975917,"lng":-58.462999008231},{"lat":-34.6514682566608,"lng":-58.4670336289651},{"lat":-34.6568063613378,"lng":-58.4604017770485},{"lat":-34.6600493899553,"lng":-58.4644302838092},{"lat":-34.6575154679171,"lng":-58.4676553033829},{"lat":-34.6591053979505,"lng":-58.4695559648637},{"lat":-34.6584268649248,"lng":-58.4705705668529},{"lat":-34.6627728024494,"lng":-58.4725153175406},{"lat":-34.6448479591076,"lng":-58.4953021850052},{"lat":-34.6369942783834,"lng":-58.4785455517697},{"lat":-34.6389347067828,"lng":-58.4760723304552},{"lat":-34.6373083610103,"lng":-58.473492274813},{"lat":-34.6366552047109,"lng":-58.471302914919},{"lat":-34.6387869543278,"lng":-58.4703750499015}]]},{"name":"Parque Chacabuco","coords":[[{"lat":-34.641741258315,"lng":-58.4323444043321},{"lat":-34.6451637003841,"lng":-58.4321075387748},{"lat":-34.6473523797435,"lng":-58.4374222950825},{"lat":-34.6417777546089,"lng":-58.4430779901734},{"lat":-34.6428068428585,"lng":-58.4442440448718},{"lat":-34.6374669159246,"lng":-58.4514410079411},{"lat":-34.6315005476642,"lng":-58.4543780777636},{"lat":-34.6306390990819,"lng":-58.4515763751329},{"lat":-34.6269984842493,"lng":-58.4267558142259},{"lat":-34.6402003756307,"lng":-58.4234918835546},{"lat":-34.641741258315,"lng":-58.4323444043321}]]},{"name":"Nueva Pompeya","coords":[[{"lat":-34.6481348798167,"lng":-58.4122089488942},{"lat":-34.648582880896,"lng":-58.4121005396964},{"lat":-34.6470603306162,"lng":-58.402745967907},{"lat":-34.649798275526,"lng":-58.4050450004191},{"lat":-34.6601974970287,"lng":-58.4008336801664},{"lat":-34.6594169022206,"lng":-58.4026441250986},{"lat":-34.6600953350371,"lng":-58.4063687098714},{"lat":-34.6598825342503,"lng":-58.4082554512346},{"lat":-34.6589386955184,"lng":-58.4101281133804},{"lat":-34.6585129077874,"lng":-58.4129625933163},{"lat":-34.6604928140012,"lng":-58.4208779380847},{"lat":-34.6620553235193,"lng":-58.4240353261196},{"lat":-34.658674118472,"lng":-58.426745637652},{"lat":-34.6531131163782,"lng":-58.4344334989568},{"lat":-34.6498743272452,"lng":-58.4304298868698},{"lat":-34.6462368723605,"lng":-58.4349230922177},{"lat":-34.6451637003841,"lng":-58.4321075387748},{"lat":-34.641741258315,"lng":-58.4323444043321},{"lat":-34.638099355027,"lng":-58.4112604414934},{"lat":-34.6434552111571,"lng":-58.4134364486185},{"lat":-34.6481348798167,"lng":-58.4122089488942}]]},{"name":"Palermo","coords":[[{"lat":-34.5520233734028,"lng":-58.4267593172764},{"lat":-34.5549000946268,"lng":-58.4156792583825},{"lat":-34.5573524531986,"lng":-58.4111392583276},{"lat":-34.5565918638971,"lng":-58.4095074463204},{"lat":-34.5580718186381,"lng":-58.4101770579703},{"lat":-34.5638498191215,"lng":-58.404587658582},{"lat":-34.5612399274407,"lng":-58.4001349226555},{"lat":-34.5641347976348,"lng":-58.4045556753185},{"lat":-34.5648567539683,"lng":-58.4040320233536},{"lat":-34.5637157676976,"lng":-58.4014012492595},{"lat":-34.5641123480248,"lng":-58.399276406517},{"lat":-34.5652271991185,"lng":-58.3980385318392},{"lat":-34.5663247899726,"lng":-58.3979069492779},{"lat":-34.5690235581029,"lng":-58.4002222373443},{"lat":-34.5692236289813,"lng":-58.3999621840354},{"lat":-34.5666962272986,"lng":-58.3975045112989},{"lat":-34.5666689902995,"lng":-58.3969787694811},{"lat":-34.5692288867237,"lng":-58.3945617974376},{"lat":-34.5722357271606,"lng":-58.3927899180477},{"lat":-34.5721906912083,"lng":-58.3952057970513},{"lat":-34.5693489037078,"lng":-58.4001266601711},{"lat":-34.5708069482731,"lng":-58.3997157523517},{"lat":-34.5741403731302,"lng":-58.4026464000829},{"lat":-34.5757367466789,"lng":-58.401144552075},{"lat":-34.5785067263343,"lng":-58.3965596897453},{"lat":-34.5844718546457,"lng":-58.4005436962829},{"lat":-34.5834263897724,"lng":-58.4019430855051},{"lat":-34.5834592684237,"lng":-58.4061723612826},{"lat":-34.5890571582422,"lng":-58.4100810282764},{"lat":-34.5940540688911,"lng":-58.4143936419837},{"lat":-34.5978547718645,"lng":-58.4160004849245},{"lat":-34.5977478956967,"lng":-58.4233672222353},{"lat":-34.5962105180767,"lng":-58.4269502240697},{"lat":-34.5845135514129,"lng":-58.4447856534},{"lat":-34.5817970365918,"lng":-58.4434316752966},{"lat":-34.5785469344828,"lng":-58.4399388685523},{"lat":-34.5753643160567,"lng":-58.4439716893686},{"lat":-34.5721062457974,"lng":-58.4407445138848},{"lat":-34.5678538216449,"lng":-58.4490443843996},{"lat":-34.5667128581227,"lng":-58.4478544785237},{"lat":-34.5636890745944,"lng":-58.4425352483325},{"lat":-34.5621339190165,"lng":-58.4411624258167},{"lat":-34.5625777394832,"lng":-58.4364272235274},{"lat":-34.5620891843942,"lng":-58.4348584761988},{"lat":-34.5616838356982,"lng":-58.4382481156204},{"lat":-34.5604199118064,"lng":-58.4404892222306},{"lat":-34.5588159151968,"lng":-58.441385517031},{"lat":-34.5573030728595,"lng":-58.4404428057592},{"lat":-34.5539573025881,"lng":-58.4341106260791},{"lat":-34.5535936123733,"lng":-58.4346535253175},{"lat":-34.553049939876,"lng":-58.4344231019985},{"lat":-34.5511187189825,"lng":-58.4309838895436},{"lat":-34.5509501529081,"lng":-58.4293982412987},{"lat":-34.5520233734028,"lng":-58.4267593172764}]]},{"name":"Villa Riachuelo","coords":[[{"lat":-34.6806103119189,"lng":-58.4497832682116},{"lat":-34.6849321782368,"lng":-58.4442953183736},{"lat":-34.7052931351596,"lng":-58.4617154836684},{"lat":-34.6889546082405,"lng":-58.483355289321},{"lat":-34.6821378656906,"lng":-58.4757972583293},{"lat":-34.6917921802477,"lng":-58.4633960274781},{"lat":-34.6805378146004,"lng":-58.4511418350466},{"lat":-34.6808637444315,"lng":-58.4509657182244},{"lat":-34.6806103119189,"lng":-58.4497832682116}]]},{"name":"Villa Soldati","coords":[[{"lat":-34.6511657755509,"lng":-58.4491320831847},{"lat":-34.6511899138583,"lng":-58.4433239350118},{"lat":-34.6558034890748,"lng":-58.4380054918067},{"lat":-34.6531131163782,"lng":-58.4344334989568},{"lat":-34.658674118472,"lng":-58.426745637652},{"lat":-34.6620553235193,"lng":-58.4240353261196},{"lat":-34.6648788304442,"lng":-58.4273954231565},{"lat":-34.6795769828005,"lng":-58.43977349669},{"lat":-34.6801169880939,"lng":-58.4416435037358},{"lat":-34.6808891477739,"lng":-58.4422746426571},{"lat":-34.6823259827763,"lng":-58.442050441068},{"lat":-34.6849321782368,"lng":-58.4442953183736},{"lat":-34.6805012403214,"lng":-58.4499350307073},{"lat":-34.6808182113935,"lng":-58.4510980483008},{"lat":-34.6798384211131,"lng":-58.4507757825002},{"lat":-34.674382143465,"lng":-58.457727133012},{"lat":-34.6736524631697,"lng":-58.4594052824701},{"lat":-34.6693885688721,"lng":-58.4632267908613},{"lat":-34.6688793871641,"lng":-58.4647685538527},{"lat":-34.6642104057268,"lng":-58.4704562527346},{"lat":-34.6636094931345,"lng":-58.4701944854535},{"lat":-34.6636558845097,"lng":-58.4684522640303},{"lat":-34.6578785467962,"lng":-58.461580314615},{"lat":-34.6522993458277,"lng":-58.4550617780742},{"lat":-34.6508230773584,"lng":-58.4546362388594},{"lat":-34.6511657755509,"lng":-58.4491320831847}]]},{"name":"Villa Pueyrredon","coords":[[{"lat":-34.5938561595895,"lng":-58.5033113250844},{"lat":-34.5817442716468,"lng":-58.5145167816089},{"lat":-34.5812681200754,"lng":-58.5155362814466},{"lat":-34.5692650785628,"lng":-58.5098754818572},{"lat":-34.5735492524376,"lng":-58.5029467489922},{"lat":-34.5848182165973,"lng":-58.4887935721301},{"lat":-34.5938561595895,"lng":-58.5033113250844}]]},{"name":"Villa Devoto","coords":[[{"lat":-34.6139197264499,"lng":-58.5083084424563},{"lat":-34.6167316964764,"lng":-58.5130467127704},{"lat":-34.6202152151591,"lng":-58.51695012847},{"lat":-34.6108956395926,"lng":-58.5294689967804},{"lat":-34.5812681200754,"lng":-58.5155362814466},{"lat":-34.5817442716468,"lng":-58.5145167816089},{"lat":-34.5943822420751,"lng":-58.5030835155438},{"lat":-34.5944501199565,"lng":-58.503543766591},{"lat":-34.5968173886491,"lng":-58.4971750925229},{"lat":-34.6023785329234,"lng":-58.5061676697618},{"lat":-34.6091257666556,"lng":-58.5001924853705},{"lat":-34.6139197264499,"lng":-58.5083084424563}]]},{"name":"Liniers","coords":[[{"lat":-34.6330100952683,"lng":-58.5192540532325},{"lat":-34.6332030845351,"lng":-58.5148640537188},{"lat":-34.6355534385852,"lng":-58.5088304866027},{"lat":-34.635812430125,"lng":-58.5068193688073},{"lat":-34.6367178847993,"lng":-58.5056722645244},{"lat":-34.6373709084626,"lng":-58.5105096254193},{"lat":-34.6400083430956,"lng":-58.5098222312771},{"lat":-34.6458181705157,"lng":-58.5022994907457},{"lat":-34.6568918088619,"lng":-58.5257736298117},{"lat":-34.6542990415457,"lng":-58.5292086646045},{"lat":-34.6347953441841,"lng":-58.5303590477146},{"lat":-34.6344707261094,"lng":-58.5243003689784},{"lat":-34.633821070473,"lng":-58.5206877177954},{"lat":-34.6327972323397,"lng":-58.5202409722697},{"lat":-34.6330100952683,"lng":-58.5192540532325}]]},{"name":"Versalles","coords":[[{"lat":-34.6325601604467,"lng":-58.5110429614335},{"lat":-34.6345994187548,"lng":-58.5083883479252},{"lat":-34.634817493545,"lng":-58.5106707373973},{"lat":-34.6332030845351,"lng":-58.5148640537188},{"lat":-34.6327972323397,"lng":-58.5202409722697},{"lat":-34.633821070473,"lng":-58.5206877177954},{"lat":-34.6347953441841,"lng":-58.5303590477146},{"lat":-34.6275228005227,"lng":-58.5308028789606},{"lat":-34.6234862329553,"lng":-58.5228320559649},{"lat":-34.6325601604467,"lng":-58.5110429614335}]]},{"name":"Puerto Madero","coords":[[{"lat":-34.5950920711815,"lng":-58.3573208786149},{"lat":-34.5966920965277,"lng":-58.3534361953991},{"lat":-34.6001089159107,"lng":-58.3497310697798},{"lat":-34.6016472442801,"lng":-58.3471387718941},{"lat":-34.6067047723038,"lng":-58.3458740789696},{"lat":-34.6106638502637,"lng":-58.3408606278791},{"lat":-34.6161118369957,"lng":-58.3398553797087},{"lat":-34.6169008953935,"lng":-58.3407197702892},{"lat":-34.6174546668936,"lng":-58.3445845320267},{"lat":-34.6175153364873,"lng":-58.3466963811104},{"lat":-34.6168282824533,"lng":-58.349065881638},{"lat":-34.6172306364236,"lng":-58.3502653438831},{"lat":-34.6181719461161,"lng":-58.3508096352105},{"lat":-34.618215836811,"lng":-58.3497936303099},{"lat":-34.6187173756407,"lng":-58.3499674976681},{"lat":-34.6185517604431,"lng":-58.3507221173672},{"lat":-34.6189354180379,"lng":-58.3503695487444},{"lat":-34.6191704923281,"lng":-58.3506769091041},{"lat":-34.6197709409727,"lng":-58.3526924458975},{"lat":-34.619550451567,"lng":-58.3551397746524},{"lat":-34.6176387636499,"lng":-58.3559976557415},{"lat":-34.6251213720055,"lng":-58.363454985638},{"lat":-34.6237947933745,"lng":-58.3658398265419},{"lat":-34.6010295674968,"lng":-58.3683894892107},{"lat":-34.598321279561,"lng":-58.3695123478015},{"lat":-34.5980614176257,"lng":-58.3632336427926},{"lat":-34.5971255666786,"lng":-58.3634459577139},{"lat":-34.5952442785373,"lng":-58.3592514963297},{"lat":-34.5950920711815,"lng":-58.3573208786149}],[{"lat":-34.5992427530553,"lng":-58.366889549473},{"lat":-34.6048810478415,"lng":-58.3663397119266},{"lat":-34.6050880712826,"lng":-58.3653315426388},{"lat":-34.6047388929561,"lng":-58.3646097239569},{"lat":-34.5991592897134,"lng":-58.3652462566281},{"lat":-34.5987245857169,"lng":-58.366172345001},{"lat":-34.5991858097007,"lng":-58.3662759941785},{"lat":-34.5992427530553,"lng":-58.366889549473}],[{"lat":-34.6055655524033,"lng":-58.3661961866141},{"lat":-34.6117326022363,"lng":-58.3655597901048},{"lat":-34.6119986979417,"lng":-58.3645431430757},{"lat":-34.611594897272,"lng":-58.3638161025341},{"lat":-34.6054619440804,"lng":-58.3645258574592},{"lat":-34.6051829456324,"lng":-58.3653206299855},{"lat":-34.6055655524033,"lng":-58.3661961866141}],[{"lat":-34.6175927628727,"lng":-58.3648597334125},{"lat":-34.617842075347,"lng":-58.3638826746576},{"lat":-34.6174427971674,"lng":-58.363157784703},{"lat":-34.6123795640349,"lng":-58.3637321511725},{"lat":-34.6120937467292,"lng":-58.3645341451642},{"lat":-34.6125240345563,"lng":-58.3654701196827},{"lat":-34.6175927628727,"lng":-58.3648597334125}],[{"lat":-34.6234209105258,"lng":-58.364228447123},{"lat":-34.6235815284733,"lng":-58.3619101309563},{"lat":-34.6231615412484,"lng":-58.3625300844071},{"lat":-34.6182138473058,"lng":-58.3630726554062},{"lat":-34.6179363706441,"lng":-58.3638706525935},{"lat":-34.6183477641447,"lng":-58.3648027914107},{"lat":-34.6234209105258,"lng":-58.364228447123}]]},{"name":"Monserrat","coords":[[{"lat":-34.6068264253902,"lng":-58.3687995836552},{"lat":-34.6069011198967,"lng":-58.367725984598},{"lat":-34.6156251471493,"lng":-58.3667344665838},{"lat":-34.6162934637292,"lng":-58.3774253374129},{"lat":-34.6174523306285,"lng":-58.3773579627707},{"lat":-34.6181592200746,"lng":-58.391696989062},{"lat":-34.6092921487416,"lng":-58.3919516385201},{"lat":-34.6078537126088,"lng":-58.371252647157},{"lat":-34.6071908383889,"lng":-58.3703036593221},{"lat":-34.6065738988467,"lng":-58.3701904639348},{"lat":-34.6068264253902,"lng":-58.3687995836552}]]},{"name":"San Nicolás","coords":[[{"lat":-34.6051742887552,"lng":-58.3679211193596},{"lat":-34.6069011198967,"lng":-58.367725984598},{"lat":-34.6065738988467,"lng":-58.3701904639348},{"lat":-34.6071908383889,"lng":-58.3703036593221},{"lat":-34.6078537126088,"lng":-58.371252647157},{"lat":-34.6092921487416,"lng":-58.3919516385201},{"lat":-34.5996371407189,"lng":-58.3929308254775},{"lat":-34.598321279561,"lng":-58.3695123478015},{"lat":-34.6010295674968,"lng":-58.3683894892107},{"lat":-34.6051742887552,"lng":-58.3679211193596}]]},{"name":"Belgrano","coords":[[{"lat":-34.5315273335599,"lng":-58.4515941108325},{"lat":-34.5325930956192,"lng":-58.4507653798336},{"lat":-34.5351420934086,"lng":-58.4500084569065},{"lat":-34.5355446244225,"lng":-58.4504767383903},{"lat":-34.5357423827814,"lng":-58.4531742310643},{"lat":-34.5365176091419,"lng":-58.4541198584194},{"lat":-34.5381276022592,"lng":-58.4549033007019},{"lat":-34.538805809977,"lng":-58.4540880987874},{"lat":-34.539565908556,"lng":-58.4521740019821},{"lat":-34.5381422171777,"lng":-58.451192419187},{"lat":-34.5373557485288,"lng":-58.4498775203901},{"lat":-34.5361334009367,"lng":-58.4500173140689},{"lat":-34.5355556416716,"lng":-58.4489320916088},{"lat":-34.5363122167407,"lng":-58.4493913128475},{"lat":-34.5372203630505,"lng":-58.4487116923647},{"lat":-34.537907229861,"lng":-58.4492154230073},{"lat":-34.5373369731034,"lng":-58.4485940397684},{"lat":-34.5411460351001,"lng":-58.4417594820345},{"lat":-34.5387410081019,"lng":-58.4442030691445},{"lat":-34.5371204708365,"lng":-58.4472920828851},{"lat":-34.5372933435445,"lng":-58.4481394334734},{"lat":-34.5360837550318,"lng":-58.4464264767624},{"lat":-34.5366066924513,"lng":-58.4433623040897},{"lat":-34.5380495231334,"lng":-58.441642620082},{"lat":-34.5402953388827,"lng":-58.4407393733525},{"lat":-34.5397108982919,"lng":-58.4402851190115},{"lat":-34.5403052733857,"lng":-58.4394989504609},{"lat":-34.5399482887463,"lng":-58.4371946245777},{"lat":-34.5407516707531,"lng":-58.4357714050735},{"lat":-34.5425208532995,"lng":-58.4350490310699},{"lat":-34.5439813000046,"lng":-58.4318749367974},{"lat":-34.545541133017,"lng":-58.4307899047318},{"lat":-34.5471140255196,"lng":-58.4305679993941},{"lat":-34.5467344915757,"lng":-58.4299548877725},{"lat":-34.5471158410449,"lng":-58.4297026920272},{"lat":-34.5477484478431,"lng":-58.4299782018785},{"lat":-34.5473327598746,"lng":-58.4304791695436},{"lat":-34.5477857384084,"lng":-58.4306349747428},{"lat":-34.5491066792459,"lng":-58.4293436339992},{"lat":-34.549093713456,"lng":-58.4278421677571},{"lat":-34.5497900037705,"lng":-58.4272941776888},{"lat":-34.5495320546558,"lng":-58.4260778174679},{"lat":-34.5500614231903,"lng":-58.4256740143058},{"lat":-34.5520237796411,"lng":-58.4267582450064},{"lat":-34.5509501529081,"lng":-58.4293982412987},{"lat":-34.5514141841313,"lng":-58.4316803336417},{"lat":-34.553049939876,"lng":-58.4344231019985},{"lat":-34.5535936123733,"lng":-58.4346535253175},{"lat":-34.5539573025881,"lng":-58.4341106260791},{"lat":-34.5578963092245,"lng":-58.4410585303095},{"lat":-34.5588159151968,"lng":-58.441385517031},{"lat":-34.5605558749164,"lng":-58.4403278682893},{"lat":-34.561756813506,"lng":-58.437980191745},{"lat":-34.5617922220649,"lng":-58.4349578351151},{"lat":-34.5625370350985,"lng":-58.435402445693},{"lat":-34.5621339190165,"lng":-58.4411624258167},{"lat":-34.5636890745944,"lng":-58.4425352483325},{"lat":-34.5667128581227,"lng":-58.4478544785237},{"lat":-34.5678538216449,"lng":-58.4490443843996},{"lat":-34.5661082900862,"lng":-58.4522874976288},{"lat":-34.5689980502858,"lng":-58.457628015889},{"lat":-34.5695264569663,"lng":-58.457709545512},{"lat":-34.575008412194,"lng":-58.4633555464406},{"lat":-34.5724961753266,"lng":-58.4673642696436},{"lat":-34.5729088400037,"lng":-58.4680812613894},{"lat":-34.5666615316863,"lng":-58.4733684642162},{"lat":-34.5621902624702,"lng":-58.4664901777516},{"lat":-34.5616873807018,"lng":-58.4676839219849},{"lat":-34.5613151350192,"lng":-58.4670371756465},{"lat":-34.558928524183,"lng":-58.4691841950682},{"lat":-34.5505040530708,"lng":-58.4530063043606},{"lat":-34.5489847697112,"lng":-58.4541211632346},{"lat":-34.5426523436413,"lng":-58.4492746382907},{"lat":-34.5377987902741,"lng":-58.4594426423642},{"lat":-34.5349224254094,"lng":-58.4536399740443},{"lat":-34.534316876145,"lng":-58.4536611992374},{"lat":-34.5315273335599,"lng":-58.4515941108325}]]},{"name":"Recoleta","coords":[[{"lat":-34.5721906912083,"lng":-58.3952057970513},{"lat":-34.5722357271606,"lng":-58.3927899180477},{"lat":-34.5764929152422,"lng":-58.3849625800299},{"lat":-34.5764047832219,"lng":-58.3834148558284},{"lat":-34.5754475051314,"lng":-58.3829708523445},{"lat":-34.5706434547979,"lng":-58.3913016196442},{"lat":-34.5700713973828,"lng":-58.3910447763775},{"lat":-34.5709430587355,"lng":-58.3877597714167},{"lat":-34.5704305745227,"lng":-58.380875423003},{"lat":-34.5706559223835,"lng":-58.3813563707824},{"lat":-34.570988048405,"lng":-58.3807573370336},{"lat":-34.5704141038936,"lng":-58.3806145117896},{"lat":-34.5703246758169,"lng":-58.3788675715961},{"lat":-34.5720659236704,"lng":-58.3757078555864},{"lat":-34.5729072647716,"lng":-58.3754050197075},{"lat":-34.5729581668738,"lng":-58.3743539465971},{"lat":-34.5747396492448,"lng":-58.3712169695293},{"lat":-34.5755546764402,"lng":-58.3708710504125},{"lat":-34.5747978447701,"lng":-58.3712963234646},{"lat":-34.5730429247224,"lng":-58.3743717046191},{"lat":-34.5729973584441,"lng":-58.3755001556176},{"lat":-34.572071731433,"lng":-58.3758543444098},{"lat":-34.5703917171694,"lng":-58.3789513782266},{"lat":-34.5704862785351,"lng":-58.3805157917672},{"lat":-34.5710195948898,"lng":-58.3807095259796},{"lat":-34.5722963274373,"lng":-58.3783124676678},{"lat":-34.572747684994,"lng":-58.3782870792231},{"lat":-34.5734117181581,"lng":-58.3835805950943},{"lat":-34.574410258481,"lng":-58.381811661111},{"lat":-34.5739252274169,"lng":-58.3754384929476},{"lat":-34.5766005819584,"lng":-58.3707560013641},{"lat":-34.577023795171,"lng":-58.3706956893502},{"lat":-34.5775452603952,"lng":-58.3767109137284},{"lat":-34.5791023036155,"lng":-58.3739717230009},{"lat":-34.5805200713283,"lng":-58.3751214877465},{"lat":-34.5799504792293,"lng":-58.3761600512028},{"lat":-34.5801619115881,"lng":-58.3798362674721},{"lat":-34.5782352961729,"lng":-58.3835712371255},{"lat":-34.5782016523951,"lng":-58.389864551892},{"lat":-34.5808309894752,"lng":-58.3916446426145},{"lat":-34.5835513995301,"lng":-58.3869635729226},{"lat":-34.5875003435414,"lng":-58.3836858955457},{"lat":-34.5916482473693,"lng":-58.3879499543075},{"lat":-34.5992928735805,"lng":-58.3868634379837},{"lat":-34.5997603196348,"lng":-58.3987230001114},{"lat":-34.599369729579,"lng":-58.4020082144739},{"lat":-34.5980359654307,"lng":-58.4045066845614},{"lat":-34.5978547718644,"lng":-58.4160004849245},{"lat":-34.5940540688911,"lng":-58.4143936419837},{"lat":-34.5890571582422,"lng":-58.4100810282764},{"lat":-34.5834592684237,"lng":-58.4061723612826},{"lat":-34.5834263897724,"lng":-58.4019430855051},{"lat":-34.5844718546457,"lng":-58.4005436962829},{"lat":-34.5785067263343,"lng":-58.3965596897453},{"lat":-34.5757367466789,"lng":-58.401144552075},{"lat":-34.5741403731302,"lng":-58.4026464000829},{"lat":-34.5708069482731,"lng":-58.3997157523517},{"lat":-34.5693489037078,"lng":-58.4001266601711},{"lat":-34.5721906912083,"lng":-58.3952057970513}]]},{"name":"Retiro","coords":[[{"lat":-34.5787043103248,"lng":-58.3742728981345},{"lat":-34.5782106787894,"lng":-58.3679284958736},{"lat":-34.5797048655816,"lng":-58.3653152245902},{"lat":-34.5801507722698,"lng":-58.365245643362},{"lat":-34.5808300747436,"lng":-58.3705580715031},{"lat":-34.5817286249004,"lng":-58.3689696460942},{"lat":-34.5812273154272,"lng":-58.3626322331095},{"lat":-34.5824233795893,"lng":-58.3605253631374},{"lat":-34.5828695601576,"lng":-58.3604763381045},{"lat":-34.5835660432785,"lng":-58.3661401151341},{"lat":-34.5844993315595,"lng":-58.3649407304481},{"lat":-34.5841450577936,"lng":-58.3598967036561},{"lat":-34.5859313453833,"lng":-58.3597417369954},{"lat":-34.5862668424668,"lng":-58.3636567169966},{"lat":-34.5874910086758,"lng":-58.3634970230128},{"lat":-34.5871906186234,"lng":-58.3595841512016},{"lat":-34.588296270335,"lng":-58.3597182157167},{"lat":-34.5885522051086,"lng":-58.3608324441504},{"lat":-34.588936020727,"lng":-58.3607402351315},{"lat":-34.5885638625568,"lng":-58.36088858366},{"lat":-34.5900082744266,"lng":-58.3679912957437},{"lat":-34.5904434992359,"lng":-58.3679314596311},{"lat":-34.5909712317189,"lng":-58.3665190169642},{"lat":-34.594273385455,"lng":-58.3643573602582},{"lat":-34.5944654129146,"lng":-58.364833021963},{"lat":-34.5928245998606,"lng":-58.3659451327298},{"lat":-34.5941505179534,"lng":-58.3690536114633},{"lat":-34.5975208921517,"lng":-58.3678871102317},{"lat":-34.5974312639569,"lng":-58.366499858982},{"lat":-34.5980395042448,"lng":-58.366109349811},{"lat":-34.5973982605621,"lng":-58.366138363271},{"lat":-34.5972100033554,"lng":-58.3638252569407},{"lat":-34.5955045617149,"lng":-58.3644047575726},{"lat":-34.5953112465266,"lng":-58.3640988623279},{"lat":-34.596659359029,"lng":-58.3634159790862},{"lat":-34.5955167863613,"lng":-58.3603802601795},{"lat":-34.5949935862931,"lng":-58.3600553480135},{"lat":-34.5946881997761,"lng":-58.3542612504891},{"lat":-34.5953566479576,"lng":-58.3511383195086},{"lat":-34.5948573510851,"lng":-58.3542795087346},{"lat":-34.5952442785373,"lng":-58.3592514963297},{"lat":-34.5971255666786,"lng":-58.3634459577139},{"lat":-34.5980614176257,"lng":-58.3632336427926},{"lat":-34.5981362266419,"lng":-58.3638616554643},{"lat":-34.5992928735805,"lng":-58.3868634379837},{"lat":-34.5916482473693,"lng":-58.3879499543075},{"lat":-34.5875003435414,"lng":-58.3836858955457},{"lat":-34.5835513995301,"lng":-58.3869635729226},{"lat":-34.5808309894752,"lng":-58.3916446426145},{"lat":-34.5782016523951,"lng":-58.389864551892},{"lat":-34.5782352961729,"lng":-58.3835712371255},{"lat":-34.5801619115881,"lng":-58.3798362674721},{"lat":-34.5799504792293,"lng":-58.3761600512028},{"lat":-34.5805200713283,"lng":-58.3751214877465},{"lat":-34.5791023036155,"lng":-58.3739717230009},{"lat":-34.5775452603952,"lng":-58.3767109137284},{"lat":-34.5774840705932,"lng":-58.3760409692424},{"lat":-34.5787043103248,"lng":-58.3742728981345}]]},{"name":"Núñez","coords":[[{"lat":-34.5275529914205,"lng":-58.4566549786532},{"lat":-34.5279131056002,"lng":-58.4559431274602},{"lat":-34.5286691819932,"lng":-58.4559142466251},{"lat":-34.5298839698608,"lng":-58.454071282383},{"lat":-34.5313403396775,"lng":-58.4535623166767},{"lat":-34.5330768334737,"lng":-58.455697734314},{"lat":-34.5352138304699,"lng":-58.4549164980779},{"lat":-34.5377987902741,"lng":-58.4594426423642},{"lat":-34.5426523436413,"lng":-58.4492746382907},{"lat":-34.5489847697112,"lng":-58.4541211632346},{"lat":-34.5505040530708,"lng":-58.4530063043606},{"lat":-34.558928524183,"lng":-58.4691841950682},{"lat":-34.5524209338867,"lng":-58.4744359204902},{"lat":-34.5489400157911,"lng":-58.468189262655},{"lat":-34.5386305921147,"lng":-58.4759530989691},{"lat":-34.5332608869246,"lng":-58.4637955967509},{"lat":-34.5276200759232,"lng":-58.4588930868133},{"lat":-34.5275529914205,"lng":-58.4566549786532}]]},{"name":"La Boca","coords":[[{"lat":-34.6194307028365,"lng":-58.3552004576535},{"lat":-34.6197709409727,"lng":-58.3526924458975},{"lat":-34.6191674154407,"lng":-58.3515200778185},{"lat":-34.6197903347382,"lng":-58.3495720908321},{"lat":-34.6189652424629,"lng":-58.3478479591372},{"lat":-34.6189999297413,"lng":-58.3445916669237},{"lat":-34.619629943859,"lng":-58.3446669733515},{"lat":-34.6198362253202,"lng":-58.3451848409669},{"lat":-34.6192115747039,"lng":-58.3463236325019},{"lat":-34.6199892889332,"lng":-58.3471505880733},{"lat":-34.6229555756402,"lng":-58.345932347317},{"lat":-34.6220084024104,"lng":-58.3460919253581},{"lat":-34.6215186055199,"lng":-58.3454815647658},{"lat":-34.621340985043,"lng":-58.344703633036},{"lat":-34.6217586862411,"lng":-58.3440572366706},{"lat":-34.6194896055236,"lng":-58.3440467277246},{"lat":-34.6185678614715,"lng":-58.3428547516694},{"lat":-34.6186646163189,"lng":-58.3388651537555},{"lat":-34.6191238325347,"lng":-58.3381969094655},{"lat":-34.6216352521155,"lng":-58.3371615945022},{"lat":-34.6227637351371,"lng":-58.3373250427619},{"lat":-34.622852448013,"lng":-58.3416721854743},{"lat":-34.6222385019308,"lng":-58.3420786575974},{"lat":-34.6226810019947,"lng":-58.3430644075687},{"lat":-34.6237087714346,"lng":-58.3422429740729},{"lat":-34.6231435665641,"lng":-58.3418820048572},{"lat":-34.6231366533583,"lng":-58.3406675330179},{"lat":-34.6246630377835,"lng":-58.3384873199659},{"lat":-34.6248470149282,"lng":-58.3370402367563},{"lat":-34.6264528532951,"lng":-58.3351440325011},{"lat":-34.6271231364708,"lng":-58.3351430067125},{"lat":-34.6281969140175,"lng":-58.3361927168213},{"lat":-34.6289213562468,"lng":-58.3388637688002},{"lat":-34.6278425687505,"lng":-58.3397320263934},{"lat":-34.6278282431047,"lng":-58.3406448004275},{"lat":-34.6261838466743,"lng":-58.342432726863},{"lat":-34.6263914188413,"lng":-58.344273269061},{"lat":-34.6285811173435,"lng":-58.3415656794305},{"lat":-34.6289594601415,"lng":-58.3413899519558},{"lat":-34.6294889469442,"lng":-58.3424863504593},{"lat":-34.6280150178492,"lng":-58.3445721407013},{"lat":-34.628373631715,"lng":-58.3450049620233},{"lat":-34.6271921872537,"lng":-58.3464491476757},{"lat":-34.6274057802957,"lng":-58.3467009498596},{"lat":-34.6286697366002,"lng":-58.3453666384515},{"lat":-34.6272820677151,"lng":-58.347049260788},{"lat":-34.6290838322825,"lng":-58.3487836817},{"lat":-34.6299375168546,"lng":-58.3479606945131},{"lat":-34.6302868425371,"lng":-58.3482980330144},{"lat":-34.6311665900514,"lng":-58.3479210322604},{"lat":-34.6309017359166,"lng":-58.3476569510739},{"lat":-34.6313934740337,"lng":-58.3475692823332},{"lat":-34.6316595572898,"lng":-58.3460970492321},{"lat":-34.6321183153882,"lng":-58.3477459113047},{"lat":-34.6326155692265,"lng":-58.347696329214},{"lat":-34.6325734820828,"lng":-58.3490379087601},{"lat":-34.6323485736997,"lng":-58.3501161040274},{"lat":-34.6313557842819,"lng":-58.3511383259319},{"lat":-34.6292818647747,"lng":-58.3518509790422},{"lat":-34.629161718883,"lng":-58.3529881280329},{"lat":-34.6239134427259,"lng":-58.3605134042249},{"lat":-34.6242537235382,"lng":-58.3608920836947},{"lat":-34.6236887378709,"lng":-58.3617339711407},{"lat":-34.6243937126303,"lng":-58.3610186943033},{"lat":-34.6246846438861,"lng":-58.3612622680202},{"lat":-34.6291112900379,"lng":-58.3547708335693},{"lat":-34.6335819181831,"lng":-58.3527538873144},{"lat":-34.6365300376758,"lng":-58.3541310741834},{"lat":-34.6385879069135,"lng":-58.3569385928756},{"lat":-34.6392269421011,"lng":-58.3580225540775},{"lat":-34.639419295966,"lng":-58.3611105807672},{"lat":-34.639893055841,"lng":-58.3614226418163},{"lat":-34.6407228515301,"lng":-58.3609028220366},{"lat":-34.6418688232983,"lng":-58.3581253269021},{"lat":-34.6440442838123,"lng":-58.3573173309192},{"lat":-34.6449824366478,"lng":-58.3575905964166},{"lat":-34.6459828754798,"lng":-58.3597966640049},{"lat":-34.6479447916213,"lng":-58.3617087246169},{"lat":-34.6483201404589,"lng":-58.3643480882644},{"lat":-34.6501366170196,"lng":-58.3676488363194},{"lat":-34.6294937856849,"lng":-58.3706581576618},{"lat":-34.6271424047803,"lng":-58.3679451333274},{"lat":-34.6251954580434,"lng":-58.3679712009248},{"lat":-34.6251395732768,"lng":-58.3631158163979},{"lat":-34.6176387636499,"lng":-58.3559976557415},{"lat":-34.6194307028365,"lng":-58.3552004576535}]]}]

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = [{"name":"Chacarita","rent":27101.6304,"price":3384167.1414,"count":1642},{"name":"Paternal","rent":23225,"price":2761604.1708,"count":312},{"name":"Villa Crespo","rent":30105.3571,"price":3593815.3232,"count":2913},{"name":"Villa del Parque","rent":33052.0548,"price":3393043.5455,"count":673},{"name":"Almagro","rent":23270.2717,"price":3300663.12,"count":2428},{"name":"Caballito","rent":28640.3669,"price":3237042.542,"count":3232},{"name":"Villa Santa Rita","rent":17144,"price":3477338.0199,"count":446},{"name":"Monte Castro","rent":14844.4444,"price":3090618.003,"count":426},{"name":"Villa Real","rent":12336.3636,"price":3226772,"count":109},{"name":"Flores","rent":28330.0846,"price":3208738.3809,"count":3477},{"name":"Floresta","rent":17087.6623,"price":3033411.3904,"count":843},{"name":"Constitución","rent":47512,"price":2777420.9075,"count":662},{"name":"San Cristóbal","rent":27629.0323,"price":3249400.9081,"count":703},{"name":"Boedo","rent":25381.8182,"price":4871633.7387,"count":525},{"name":"Vélez Sársfield","rent":23122.9167,"price":3023509.0642,"count":820},{"name":"Villa Luro","rent":29287.963,"price":3051831.6991,"count":732},{"name":"Parque Patricios","rent":45061.6136,"price":2564519.1667,"count":396},{"name":"Mataderos","rent":13687.3239,"price":3145371.2443,"count":934},{"name":"Villa Lugano","rent":14176.3158,"price":2702928.1385,"count":337},{"name":"San Telmo","rent":30100,"price":4999922.7546,"count":753},{"name":"Saavedra","rent":20792.5234,"price":3550333.0667,"count":1459},{"name":"Coghlan","rent":13113.3333,"price":3476481.7678,"count":625},{"name":"Villa Urquiza","rent":20858.9286,"price":3637377.1192,"count":1882},{"name":"Colegiales","rent":36898,"price":5608379.0995,"count":1144},{"name":"Balvanera","rent":35368.8966,"price":3097794.867,"count":2324},{"name":"Villa Gral. Mitre","rent":18828.2051,"price":2730046.9372,"count":694},{"name":"Parque Chas","rent":13970,"price":3306466.487,"count":264},{"name":"Agronomía","rent":10163.4615,"price":3103712.8898,"count":319},{"name":"Villa Ortúzar","rent":32275.4386,"price":3865638.7069,"count":569},{"name":"Barracas","rent":35260.8125,"price":3692849.7684,"count":957},{"name":"Parque Avellaneda","rent":21421.875,"price":3412934.0699,"count":500},{"name":"Parque Chacabuco","rent":16177.7778,"price":3404296.0921,"count":744},{"name":"Nueva Pompeya","rent":72512,"price":3185802.5374,"count":247},{"name":"Palermo","rent":40289.8132,"price":6732293.5308,"count":9650},{"name":"Villa Riachuelo","rent":6946.1538,"price":2177000,"count":94},{"name":"Villa Soldati","rent":5800,"price":2279106.383,"count":63},{"name":"Villa Pueyrredon","rent":39901.1628,"price":3432145.5562,"count":621},{"name":"Villa Devoto","rent":13631.3953,"price":3932240.6057,"count":902},{"name":"Liniers","rent":20237.5,"price":2870397.2129,"count":798},{"name":"Versalles","rent":12353.3333,"price":4010610.6383,"count":119},{"name":"Puerto Madero","rent":56194.6618,"price":16473898.7439,"count":1530},{"name":"Monserrat","rent":45626.7742,"price":3408128.8838,"count":1293},{"name":"San Nicolás","rent":68894.8886,"price":4331970.3349,"count":1887},{"name":"Belgrano","rent":39299.8861,"price":6675027.2148,"count":4822},{"name":"Recoleta","rent":42621.4919,"price":7873802.9507,"count":5534},{"name":"Retiro","rent":46418.8976,"price":9204926.5371,"count":1835},{"name":"Núñez","rent":30850,"price":5151215.4622,"count":1514},{"name":"La Boca","rent":42748.2429,"price":8695406.6017,"count":974}]

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

var OPTIONS_KEYS = ['client', 'key', 'language', 'region', 'v']

module.exports = function(options) {
  options = options || {}

  return new Promise(function(resolve, reject) {
    // Exit if not running inside a browser.
    if (typeof window === 'undefined') {
      return reject(
        new Error('Can only load the Google Maps API in the browser')
      )
    }

    // Reject the promise after a timeout.
    var timeoutId = setTimeout(function() {
      window[CALLBACK_NAME] = function() {} // Set the on load callback to a no-op.
      reject(new Error('Could not load the Google Maps API'))
    }, options.timeout || 10000)

    // Hook up the on load callback.
    window[CALLBACK_NAME] = function() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      resolve(window.google.maps)
      delete window[CALLBACK_NAME]
    }

    // Prepare the `script` tag to be inserted into the page.
    var scriptElement = document.createElement('script')
    var params = ['callback=' + CALLBACK_NAME]
    OPTIONS_KEYS.forEach(function(key) {
      if (options[key]) {
        params.push(key + '=' + options[key])
      }
    })
    if (options.libraries && options.libraries.length) {
      params.push('libraries=' + options.libraries.join(','))
    }
    scriptElement.src =
      'https://maps.googleapis.com/maps/api/js?' + params.join('&')

    // Insert the `script` tag.
    document.body.appendChild(scriptElement)
  })
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__(0);
/* harmony default export */ __webpack_exports__["a"] = ([
  "#008000",
  "#247c00",
  "#337700",
  "#3e7300",
  "#467000",
  "#4e6c00",
  "#556700",
  "#5c6100",
  "#615e00",
  "#665900",
  "#6b5300",
  "#6f4e00",
  "#744900",
  "#784300",
  "#7b3c00",
  "#7f3400",
  "#822d00",
  "#852400",
  "#881800",
  "#8b0000"
]);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_component__ = __webpack_require__(8);
__webpack_require__(0);



const containerStyle = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["css"])({
    width: 150,
    zIndex: 10,
    top: 5,
    left: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'fixed'
});
let $container, $ratio, $rent, $price;
$container = function () {
    var $$a = document.createElement('form');
    $$a.setAttributes(containerStyle);
    var $$b = document.createElement('input');
    $$b.setAttribute('type', 'radio');
    $$b.setAttribute('name', 'mode');
    $$b.setAttribute('value', 'ratio');
    (e => $ratio = e)($$b);
    $$a.appendChild($$b);
    var $$c = document.createTextNode(' Venta/Alquiler');
    $$a.appendChild($$c);
    var $$d = document.createElement('br');
    $$a.appendChild($$d);
    var $$e = document.createElement('input');
    $$e.setAttribute('type', 'radio');
    $$e.setAttribute('name', 'mode');
    $$e.setAttribute('value', 'rent');
    (e => $rent = e)($$e);
    $$a.appendChild($$e);
    var $$f = document.createTextNode(' Alquiler');
    $$a.appendChild($$f);
    var $$g = document.createElement('br');
    $$a.appendChild($$g);
    var $$h = document.createElement('input');
    $$h.setAttribute('type', 'radio');
    $$h.setAttribute('name', 'mode');
    $$h.setAttribute('value', 'price');
    (e => $price = e)($$h);
    $$a.appendChild($$h);
    var $$i = document.createTextNode(' Venta\n  ');
    $$a.appendChild($$i);
    return $$a;
}.call(this);
const state = { mode: 'ratio' };
function appendTo(parent) {
    parent.appendChild($container);
}
let $modes = [
    $ratio,
    $rent,
    $price
];
$modes.forEach($mode => {
    $mode.checked = state.mode === $mode.value;
    $mode.onclick = () => {
        let newState = { mode: $mode.value };
        setState(newState);
        __WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* default */].setState(newState);
        __WEBPACK_IMPORTED_MODULE_1__details_component__["a" /* default */].setState(newState);
    };
});
__WEBPACK_IMPORTED_MODULE_1__details_component__["a" /* default */].setState(state);
function setState(partialState) {
    Object.assign(state, partialState);
}
/* harmony default export */ __webpack_exports__["a"] = ({
    element: $container,
    setState
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzYwMGU2ODZkMTBmMmJlN2NhZTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25hdGl2ZWpzeC9kaXN0L25hdGl2ZWpzeC1wcm90b3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldGFpbHMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xhbW9yL2xpYi9zaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2NhbWVsaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9kYW5nZXJvdXNTdHlsZVZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9DU1NQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9oeXBoZW5hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL2NsZWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL3BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsYW1vci9saWIvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvc3RhdGljRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL3ByZWZpeFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvcHJlZml4VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jcm9zc0ZhZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2dyYWRpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvaW1hZ2VTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3NpemluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1pbi1qcy11dGlscy9saWIvaHlwaGVuYXRlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL2hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FyZWFzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtZ29vZ2xlLW1hcHMtYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGUuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQLFk7Ozs7OztBQ2xLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNyRUE7QUFDaUM7QUFDQTs7QUFFakMsbUhBQTJCLGVBQWU7QUFDMUMsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUNkRCxtQkFBbUIsK0JBQStCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLDZDQUE2QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsOEJBQThCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsa0NBQWtDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsc0NBQXNDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsNkJBQTZCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsK0JBQStCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsc0NBQXNDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsa0NBQWtDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsZ0NBQWdDLDhDQUE4QyxFQUFFLDhDQUE4QyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxHQUFHLEVBQUUsNEJBQTRCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsOEJBQThCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsa0NBQWtDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsbUNBQW1DLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsMkJBQTJCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUscUNBQXFDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsZ0NBQWdDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsc0NBQXNDLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxHQUFHLEVBQUUsK0JBQStCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsa0NBQWtDLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxHQUFHLEVBQUUsK0JBQStCLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsOEJBQThCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsNkJBQTZCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsbUNBQW1DLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsZ0NBQWdDLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxHQUFHLEVBQUUsK0JBQStCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsdUNBQXVDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsaUNBQWlDLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxHQUFHLEVBQUUsK0JBQStCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsbUNBQW1DLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsOEJBQThCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsdUNBQXVDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsc0NBQXNDLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxHQUFHLEVBQUUsbUNBQW1DLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsNkJBQTZCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDZDQUE2QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUscUNBQXFDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsbUNBQW1DLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsc0NBQXNDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsa0NBQWtDLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsNkJBQTZCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsK0JBQStCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsbUNBQW1DLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxJQUFJLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxJQUFJLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxJQUFJLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxJQUFJLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxHQUFHLEVBQUUsK0JBQStCLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsaUNBQWlDLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsOEJBQThCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsOEJBQThCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsNEJBQTRCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsMkJBQTJCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEVBQUUsNkJBQTZCLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLDhDQUE4QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLDZDQUE2QyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLCtDQUErQyxFQUFFLCtDQUErQyxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxFQUFFLGdEQUFnRCxHQUFHLEM7Ozs7OztBQ0F0Ly9DLG1CQUFtQix1RUFBdUUsRUFBRSxnRUFBZ0UsRUFBRSwwRUFBMEUsRUFBRSw2RUFBNkUsRUFBRSxtRUFBbUUsRUFBRSxzRUFBc0UsRUFBRSx3RUFBd0UsRUFBRSx3RUFBd0UsRUFBRSxrRUFBa0UsRUFBRSxvRUFBb0UsRUFBRSxxRUFBcUUsRUFBRSxvRUFBb0UsRUFBRSwwRUFBMEUsRUFBRSxrRUFBa0UsRUFBRSw0RUFBNEUsRUFBRSxzRUFBc0UsRUFBRSw2RUFBNkUsRUFBRSxzRUFBc0UsRUFBRSx5RUFBeUUsRUFBRSxpRUFBaUUsRUFBRSxzRUFBc0UsRUFBRSxvRUFBb0UsRUFBRSwyRUFBMkUsRUFBRSxtRUFBbUUsRUFBRSxzRUFBc0UsRUFBRSw4RUFBOEUsRUFBRSxrRUFBa0UsRUFBRSxzRUFBc0UsRUFBRSwwRUFBMEUsRUFBRSxxRUFBcUUsRUFBRSw2RUFBNkUsRUFBRSw2RUFBNkUsRUFBRSxxRUFBcUUsRUFBRSxxRUFBcUUsRUFBRSxxRUFBcUUsRUFBRSxrRUFBa0UsRUFBRSw2RUFBNkUsRUFBRSx5RUFBeUUsRUFBRSxpRUFBaUUsRUFBRSxzRUFBc0UsRUFBRSw0RUFBNEUsRUFBRSx1RUFBdUUsRUFBRSx5RUFBeUUsRUFBRSxzRUFBc0UsRUFBRSxzRUFBc0UsRUFBRSxvRUFBb0UsRUFBRSw4REFBOEQsRUFBRSxvRUFBb0UsQzs7Ozs7O0FDQTM2Rzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFDYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNjAwZTY4NmQxMGYyYmU3Y2FlNCIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGRyZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKHRoaXMsIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxufSkoKVxuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4oZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIEhUTUxFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oNCkodGhpcywgYXR0cmlidXRlcylcbiAgICB9XG4gIH1cbn0pKClcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudC5wcm90b3R5cGUuc2V0U3R5bGVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLnNldFN0eWxlcyA9IGZ1bmN0aW9uIChzdHlsZXMpIHtcbiAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKHRoaXMsIHN0eWxlcylcbiAgICB9XG4gIH1cbn0pKClcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbiAoZWxlbWVudCwgY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXVxuICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuICAgIH0gZWxzZSBpZiAoY2hpbGQgfHwgdHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZC50b1N0cmluZygpKSlcbiAgICB9XG4gIH0pXG59XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0QXR0cmlidXRlcyAoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICB2YXIgaXNQbGFpbk9iamVjdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhdHRyaWJ1dGVzKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICB0eXBlb2YgYXR0cmlidXRlcy5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhdHRyaWJ1dGVzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmXG4gICAgYXR0cmlidXRlcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKVxuXG4gIGlmIChpc1BsYWluT2JqZWN0KSB7XG4gICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdGYWlsZWQgdG8gZXhlY3V0ZSBcXCdzZXRBdHRyaWJ1dGVzXFwnIG9uIFxcJ0VsZW1lbnRcXCc6ICcgKyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXR0cmlidXRlcykgKyAnIGlzIG5vdCBhIHBsYWluIG9iamVjdC4nKVxuICB9XG59XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0U3R5bGVzIChlbGVtZW50LCBzdHlsZXMpIHtcbiAgZm9yICh2YXIgc3R5bGUgaW4gc3R5bGVzKSBlbGVtZW50LnN0eWxlW3N0eWxlXSA9IHN0eWxlc1tzdHlsZV1cbn1cblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXygxKVxuX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuX193ZWJwYWNrX3JlcXVpcmVfXygwKVxuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9uYXRpdmVqc3gvZGlzdC9uYXRpdmVqc3gtcHJvdG90eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUHJlZml4ZWRWYWx1ZTtcblxudmFyIHJlZ2V4ID0gLy13ZWJraXQtfC1tb3otfC1tcy0vO1xuXG5mdW5jdGlvbiBpc1ByZWZpeGVkVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVnZXgudGVzdCh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbXBvc2UgPSBleHBvcnRzLm1lcmdlID0gZXhwb3J0cy4kID0gZXhwb3J0cy5zdHlsZSA9IGV4cG9ydHMucHJlc2V0cyA9IGV4cG9ydHMua2V5ZnJhbWVzID0gZXhwb3J0cy5mb250RmFjZSA9IGV4cG9ydHMuaW5zZXJ0R2xvYmFsID0gZXhwb3J0cy5pbnNlcnRSdWxlID0gZXhwb3J0cy5wbHVnaW5zID0gZXhwb3J0cy5zdHlsZVNoZWV0ID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5zcGVlZHkgPSBzcGVlZHk7XG5leHBvcnRzLnNpbXVsYXRpb25zID0gc2ltdWxhdGlvbnM7XG5leHBvcnRzLnNpbXVsYXRlID0gc2ltdWxhdGU7XG5leHBvcnRzLmNzc0xhYmVscyA9IGNzc0xhYmVscztcbmV4cG9ydHMuaXNMaWtlUnVsZSA9IGlzTGlrZVJ1bGU7XG5leHBvcnRzLmlkRm9yID0gaWRGb3I7XG5leHBvcnRzLmNzcyA9IGNzcztcbmV4cG9ydHMucmVoeWRyYXRlID0gcmVoeWRyYXRlO1xuZXhwb3J0cy5mbHVzaCA9IGZsdXNoO1xuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG5leHBvcnRzLnBhcmVudCA9IHBhcmVudDtcbmV4cG9ydHMubWVkaWEgPSBtZWRpYTtcbmV4cG9ydHMucHNldWRvID0gcHNldWRvO1xuZXhwb3J0cy5hY3RpdmUgPSBhY3RpdmU7XG5leHBvcnRzLmFueSA9IGFueTtcbmV4cG9ydHMuY2hlY2tlZCA9IGNoZWNrZWQ7XG5leHBvcnRzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5fZGVmYXVsdCA9IF9kZWZhdWx0O1xuZXhwb3J0cy5maXJzdCA9IGZpcnN0O1xuZXhwb3J0cy5maXJzdENoaWxkID0gZmlyc3RDaGlsZDtcbmV4cG9ydHMuZmlyc3RPZlR5cGUgPSBmaXJzdE9mVHlwZTtcbmV4cG9ydHMuZnVsbHNjcmVlbiA9IGZ1bGxzY3JlZW47XG5leHBvcnRzLmZvY3VzID0gZm9jdXM7XG5leHBvcnRzLmhvdmVyID0gaG92ZXI7XG5leHBvcnRzLmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuZXhwb3J0cy5pblJhbmdlID0gaW5SYW5nZTtcbmV4cG9ydHMuaW52YWxpZCA9IGludmFsaWQ7XG5leHBvcnRzLmxhc3RDaGlsZCA9IGxhc3RDaGlsZDtcbmV4cG9ydHMubGFzdE9mVHlwZSA9IGxhc3RPZlR5cGU7XG5leHBvcnRzLmxlZnQgPSBsZWZ0O1xuZXhwb3J0cy5saW5rID0gbGluaztcbmV4cG9ydHMub25seUNoaWxkID0gb25seUNoaWxkO1xuZXhwb3J0cy5vbmx5T2ZUeXBlID0gb25seU9mVHlwZTtcbmV4cG9ydHMub3B0aW9uYWwgPSBvcHRpb25hbDtcbmV4cG9ydHMub3V0T2ZSYW5nZSA9IG91dE9mUmFuZ2U7XG5leHBvcnRzLnJlYWRPbmx5ID0gcmVhZE9ubHk7XG5leHBvcnRzLnJlYWRXcml0ZSA9IHJlYWRXcml0ZTtcbmV4cG9ydHMucmVxdWlyZWQgPSByZXF1aXJlZDtcbmV4cG9ydHMucmlnaHQgPSByaWdodDtcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XG5leHBvcnRzLnNjb3BlID0gc2NvcGU7XG5leHBvcnRzLnRhcmdldCA9IHRhcmdldDtcbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmV4cG9ydHMudmlzaXRlZCA9IHZpc2l0ZWQ7XG5leHBvcnRzLmRpciA9IGRpcjtcbmV4cG9ydHMubGFuZyA9IGxhbmc7XG5leHBvcnRzLm5vdCA9IG5vdDtcbmV4cG9ydHMubnRoQ2hpbGQgPSBudGhDaGlsZDtcbmV4cG9ydHMubnRoTGFzdENoaWxkID0gbnRoTGFzdENoaWxkO1xuZXhwb3J0cy5udGhMYXN0T2ZUeXBlID0gbnRoTGFzdE9mVHlwZTtcbmV4cG9ydHMubnRoT2ZUeXBlID0gbnRoT2ZUeXBlO1xuZXhwb3J0cy5hZnRlciA9IGFmdGVyO1xuZXhwb3J0cy5iZWZvcmUgPSBiZWZvcmU7XG5leHBvcnRzLmZpcnN0TGV0dGVyID0gZmlyc3RMZXR0ZXI7XG5leHBvcnRzLmZpcnN0TGluZSA9IGZpcnN0TGluZTtcbmV4cG9ydHMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuZXhwb3J0cy5iYWNrZHJvcCA9IGJhY2tkcm9wO1xuZXhwb3J0cy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuZXhwb3J0cy5jc3NGb3IgPSBjc3NGb3I7XG5leHBvcnRzLmF0dHJpYnNGb3IgPSBhdHRyaWJzRm9yO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxudmFyIF9zaGVldCA9IHJlcXVpcmUoJy4vc2hlZXQuanMnKTtcblxudmFyIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL0NTU1Byb3BlcnR5T3BlcmF0aW9ucycpO1xuXG52YXIgX2NsZWFuID0gcmVxdWlyZSgnLi9jbGVhbi5qcycpO1xuXG52YXIgX2NsZWFuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsZWFuKTtcblxudmFyIF9wbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zJyk7XG5cbnZhciBfaGFzaCA9IHJlcXVpcmUoJy4vaGFzaCcpO1xuXG52YXIgX2hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuLyogc3R5bGVzaGVldCAqL1xuXG5cbnZhciBzdHlsZVNoZWV0ID0gZXhwb3J0cy5zdHlsZVNoZWV0ID0gbmV3IF9zaGVldC5TdHlsZVNoZWV0KCk7XG4vLyBhbiBpc29tb3JwaGljIFN0eWxlU2hlZXQgc2hpbS4gaGlkZXMgYWxsIHRoZSBuaXR0eSBncml0dHkuXG5cbi8vIC8qKioqKioqKioqKioqKioqIExJRlRPRkYgSU4gMy4uLiAyLi4uIDEuLi4gKioqKioqKioqKioqKioqKi9cbnN0eWxlU2hlZXQuaW5qZWN0KCk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbi8vIC8qKioqKioqKioqKioqKioqICAgICAgVE8gVEhFIE1PT09PT09PTiAgICAgKioqKioqKioqKioqKioqKi9cblxuLy8gY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gdG9nZ2xlIHNwZWVkeVxuZnVuY3Rpb24gc3BlZWR5KGJvb2wpIHtcbiAgcmV0dXJuIHN0eWxlU2hlZXQuc3BlZWR5KGJvb2wpO1xufVxuXG4vLyBwbHVnaW5zXG4vLyB3ZSBpbmNsdWRlIHRoZXNlIGJ5IGRlZmF1bHRcbnZhciBwbHVnaW5zID0gZXhwb3J0cy5wbHVnaW5zID0gc3R5bGVTaGVldC5wbHVnaW5zID0gbmV3IF9wbHVnaW5zLlBsdWdpblNldChbX3BsdWdpbnMucHJlZml4ZXMsIF9wbHVnaW5zLmNvbnRlbnRXcmFwLCBfcGx1Z2lucy5mYWxsYmFja3NdKTtcbnBsdWdpbnMubWVkaWEgPSBuZXcgX3BsdWdpbnMuUGx1Z2luU2V0KCk7IC8vIG5lYXQhIG1lZGlhLCBmb250LWZhY2UsIGtleWZyYW1lc1xucGx1Z2lucy5mb250RmFjZSA9IG5ldyBfcGx1Z2lucy5QbHVnaW5TZXQoKTtcbnBsdWdpbnMua2V5ZnJhbWVzID0gbmV3IF9wbHVnaW5zLlBsdWdpblNldChbX3BsdWdpbnMucHJlZml4ZXMsIF9wbHVnaW5zLmZhbGxiYWNrc10pO1xuXG4vLyBkZWZpbmUgc29tZSBjb25zdGFudHNcblxudmFyIGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgIXByb2Nlc3MuZW52Lk5PREVfRU5WO1xudmFyIGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7XG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qKioqIHNpbXVsYXRpb25zICAqKioqL1xuXG4vLyBhIGZsYWcgdG8gZW5hYmxlIHNpbXVsYXRpb24gbWV0YSB0YWdzIG9uIGRvbSBub2Rlc1xuLy8gZGVmYXVsdHMgdG8gdHJ1ZSBpbiBkZXYgbW9kZS4gcmVjb21tZW5kICpub3QqIHRvXG4vLyB0b2dnbGUgb2Z0ZW4uXG52YXIgY2FuU2ltdWxhdGUgPSBpc0RldjtcblxuLy8gd2UgdXNlIHRoZXNlIGZsYWdzIGZvciBpc3N1aW5nIHdhcm5pbmdzIHdoZW4gc2ltdWxhdGUgaXMgY2FsbGVkXG4vLyBpbiBwcm9kIC8gaW4gaW5jb3JyZWN0IG9yZGVyXG52YXIgd2FybmVkMSA9IGZhbHNlLFxuICAgIHdhcm5lZDIgPSBmYWxzZTtcblxuLy8gdG9nZ2xlcyBzaW11bGF0aW9uIGFjdGl2aXR5LiBzaG91bGRuJ3QgYmUgbmVlZGVkIGluIG1vc3QgY2FzZXNcbmZ1bmN0aW9uIHNpbXVsYXRpb25zKCkge1xuICB2YXIgYm9vbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcblxuICBjYW5TaW11bGF0ZSA9ICEhYm9vbDtcbn1cblxuLy8gdXNlIHRoaXMgb24gZG9tIG5vZGVzIHRvICdzaW11bGF0ZScgcHNldWRvY2xhc3Nlc1xuLy8gPGRpdiB7Li4uaG92ZXIoeyBjb2xvcjogJ3JlZCcgfSl9IHsuLi5zaW11bGF0ZSgnaG92ZXInLCAndmlzaXRlZCcpfT4uLi48L2Rpdj5cbi8vIHlvdSBjYW4gZXZlbiBzZW5kIGluIHNvbWUgd2VpcmQgb25lcywgYXMgbG9uZyBhcyBpdCdzIGluIHNpbXBsZSBmb3JtYXRcbi8vIGFuZCBtYXRjaGVzIGFuIGV4aXN0aW5nIHJ1bGUgb24gdGhlIGVsZW1lbnRcbi8vIGVnIHNpbXVsYXRlKCdudGhDaGlsZDInLCAnOmhvdmVyOmFjdGl2ZScpIGV0Y1xuZnVuY3Rpb24gc2ltdWxhdGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwc2V1ZG9zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHNldWRvc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHBzZXVkb3MgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShwc2V1ZG9zKTtcbiAgaWYgKCFwc2V1ZG9zKSByZXR1cm4ge307XG4gIGlmICghY2FuU2ltdWxhdGUpIHtcbiAgICBpZiAoIXdhcm5lZDEpIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FuXFwndCBzaW11bGF0ZSB3aXRob3V0IG9uY2UgY2FsbGluZyBzaW11bGF0aW9ucyh0cnVlKScpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgd2FybmVkMSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghaXNEZXYgJiYgIWlzVGVzdCAmJiAhd2FybmVkMikge1xuICAgICAgY29uc29sZS53YXJuKCdkb25cXCd0IHVzZSBzaW11bGF0aW9uIG91dHNpZGUgZGV2Jyk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB3YXJuZWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBwc2V1ZG9zLnJlZHVjZShmdW5jdGlvbiAobywgcCkge1xuICAgIHJldHVybiBvWydkYXRhLXNpbXVsYXRlLScgKyBzaW1wbGUocCldID0gJycsIG87XG4gIH0sIHt9KTtcbn1cblxuLyoqKiogbGFiZWxzICoqKiovXG4vLyB0b2dnbGUgZm9yIGRlYnVnIGxhYmVscy5cbi8vICpzaG91bGRuJ3QqIGhhdmUgdG8gbWVzcyB3aXRoIHRoaXMgbWFudWFsbHlcbnZhciBoYXNMYWJlbHMgPSBpc0RldjtcblxuZnVuY3Rpb24gY3NzTGFiZWxzKGJvb2wpIHtcbiAgaGFzTGFiZWxzID0gISFib29sO1xufVxuXG4vLyB0YWtlcyBhIHN0cmluZywgY29udmVydHMgdG8gbG93ZXJjYXNlLCBzdHJpcHMgb3V0IG5vbmFscGhhbnVtZXJpYy5cbmZ1bmN0aW9uIHNpbXBsZShzdHIpIHtcbiAgdmFyIGNoYXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgY2hhcik7XG59XG5cbi8vIGhhc2hlcyBhIHN0cmluZyB0byBzb21ldGhpbmcgJ3VuaXF1ZSdcbi8vIHdlIHVzZSB0aGlzIHRvIGdlbmVyYXRlIGlkcyBmb3Igc3R5bGVzXG5cblxuZnVuY3Rpb24gaGFzaGlmeShvYmopIHtcbiAgdmFyIHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIHZhciB0b1JldCA9ICgwLCBfaGFzaDIuZGVmYXVsdCkoc3RyKS50b1N0cmluZygzNik7XG4gIGlmIChvYmoubGFiZWwgJiYgb2JqLmxhYmVsLmxlbmd0aCA+IDAgJiYgaXNEZXYpIHtcbiAgICByZXR1cm4gc2ltcGxlKG9iai5sYWJlbC5qb2luKCcuJyksICctJykgKyAnLScgKyB0b1JldDtcbiAgfVxuICByZXR1cm4gdG9SZXQ7XG59XG5cbi8vIG9mIHNoYXBlIHsgJ2RhdGEtY3NzLTxpZD4nOiAnJyB9XG5mdW5jdGlvbiBpc0xpa2VSdWxlKHJ1bGUpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhydWxlKS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geCAhPT0gJ3RvU3RyaW5nJztcbiAgfSk7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gISEvZGF0YVxcLWNzc1xcLShbYS16QS1aMC05XFwtX10rKS8uZXhlYyhrZXlzWzBdKTtcbn1cblxuLy8gZXh0cmFjdHMgaWQgZnJvbSBhIHsgJ2RhdGEtY3NzLTxpZD4nOiAnJ30gbGlrZSBvYmplY3RcbmZ1bmN0aW9uIGlkRm9yKHJ1bGUpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhydWxlKS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geCAhPT0gJ3RvU3RyaW5nJztcbiAgfSk7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBydWxlJyk7XG4gIHZhciByZWdleCA9IC9kYXRhXFwtY3NzXFwtKFthLXpBLVowLTlcXC1fXSspLztcbiAgdmFyIG1hdGNoID0gcmVnZXguZXhlYyhrZXlzWzBdKTtcbiAgaWYgKCFtYXRjaCkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBydWxlJyk7XG4gIHJldHVybiBtYXRjaFsxXTtcbn1cblxuLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vajJjc3MvajJjL2Jsb2IvNWQzODFjMmQ3MjFkMDRiNTRmYWJlNmExNjVkNTg3MjQ3YzMwODdjYi9zcmMvaGVscGVycy5qcyNMMjgtTDYxXG5cbi8vIFwiVG9rZW5pemVzXCIgdGhlIHNlbGVjdG9ycyBpbnRvIHBhcnRzIHJlbGV2YW50IGZvciB0aGUgbmV4dCBmdW5jdGlvbi5cbi8vIFN0cmluZ3MgYW5kIGNvbW1lbnRzIGFyZSBtYXRjaGVkLCBidXQgaWdub3JlZCBhZnRlcndhcmRzLlxuLy8gVGhpcyBpcyBub3QgYSBmdWxsIHRva2VuaXplcnMuIEl0IG9ubHkgcmVjb2duaXplcyBjb21hcywgcGFyZW50aGVzZXMsXG4vLyBzdHJpbmdzIGFuZCBjb21tZW50cy5cbi8vIHJlZ2V4cCBnZW5lcmF0ZWQgYnkgc2NyaXB0cy9yZWdleHBzLmpzIHRoZW4gdHJpbW1lZCBieSBoYW5kXG52YXIgc2VsZWN0b3JUb2tlbml6ZXIgPSAvWygpLF18XCIoPzpcXFxcLnxbXlwiXFxuXSkqXCJ8Jyg/OlxcXFwufFteJ1xcbl0pKid8XFwvXFwqW1xcc1xcU10qP1xcKlxcLy9nO1xuXG4vKipcbiAqIFRoaXMgd2lsbCBzcGxpdCBhIGNvbWEtc2VwYXJhdGVkIHNlbGVjdG9yIGxpc3QgaW50byBpbmRpdmlkdWFsIHNlbGVjdG9ycyxcbiAqIGlnbm9yaW5nIGNvbWFzIGluIHN0cmluZ3MsIGNvbW1lbnRzIGFuZCBpbiA6cHNldWRvLXNlbGVjdG9ycyhwYXJhbWV0ZXIsIGxpc3RzKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG5cbmZ1bmN0aW9uIHNwbGl0U2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yLmluZGV4T2YoJywnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gW3NlbGVjdG9yXTtcbiAgfVxuXG4gIHZhciBpbmRpY2VzID0gW10sXG4gICAgICByZXMgPSBbXSxcbiAgICAgIGluUGFyZW4gPSAwLFxuICAgICAgbztcbiAgLyplc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiovXG4gIHdoaWxlIChvID0gc2VsZWN0b3JUb2tlbml6ZXIuZXhlYyhzZWxlY3RvcikpIHtcbiAgICAvKmVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24qL1xuICAgIHN3aXRjaCAob1swXSkge1xuICAgICAgY2FzZSAnKCc6XG4gICAgICAgIGluUGFyZW4rKzticmVhaztcbiAgICAgIGNhc2UgJyknOlxuICAgICAgICBpblBhcmVuLS07YnJlYWs7XG4gICAgICBjYXNlICcsJzpcbiAgICAgICAgaWYgKGluUGFyZW4pIGJyZWFrO2luZGljZXMucHVzaChvLmluZGV4KTtcbiAgICB9XG4gIH1cbiAgZm9yIChvID0gaW5kaWNlcy5sZW5ndGg7IG8tLTspIHtcbiAgICByZXMudW5zaGlmdChzZWxlY3Rvci5zbGljZShpbmRpY2VzW29dICsgMSkpO1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc2xpY2UoMCwgaW5kaWNlc1tvXSk7XG4gIH1cbiAgcmVzLnVuc2hpZnQoc2VsZWN0b3IpO1xuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RvcihpZCwgcGF0aCkge1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwmL2csICcnKTtcbiAgfVxuICBpZiAoIXBhdGgpIHJldHVybiAnLmNzcy0nICsgaWQgKyAnLFtkYXRhLWNzcy0nICsgaWQgKyAnXSc7XG5cbiAgdmFyIHggPSBzcGxpdFNlbGVjdG9yKHBhdGgpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4LmluZGV4T2YoJyYnKSA+PSAwID8gW3gucmVwbGFjZSgvXFwmL21nLCAnLmNzcy0nICsgaWQpLCB4LnJlcGxhY2UoL1xcJi9tZywgJ1tkYXRhLWNzcy0nICsgaWQgKyAnXScpXS5qb2luKCcsJykgLy8gdG9kbyAtIG1ha2Ugc3VyZSBlYWNoIHN1YiBzZWxlY3RvciBoYXMgYW4gJlxuICAgIDogJy5jc3MtJyArIGlkICsgeCArICcsW2RhdGEtY3NzLScgKyBpZCArICddJyArIHg7XG4gIH0pLmpvaW4oJywnKTtcblxuICBpZiAoY2FuU2ltdWxhdGUgJiYgL15cXCZcXDovLmV4ZWMocGF0aCkgJiYgIS9cXHMvLmV4ZWMocGF0aCkpIHtcbiAgICB4ICs9ICcsLmNzcy0nICsgaWQgKyAnW2RhdGEtc2ltdWxhdGUtJyArIHNpbXBsZShwYXRoKSArICddLFtkYXRhLWNzcy0nICsgaWQgKyAnXVtkYXRhLXNpbXVsYXRlLScgKyBzaW1wbGUocGF0aCkgKyAnXSc7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5cbi8vIGVuZCBodHRwczovL2dpdGh1Yi5jb20vajJjc3MvajJjL2Jsb2IvNWQzODFjMmQ3MjFkMDRiNTRmYWJlNmExNjVkNTg3MjQ3YzMwODdjYi9zcmMvaGVscGVycy5qcyNMMjgtTDYxXG5cblxuZnVuY3Rpb24gdG9DU1MoX3JlZikge1xuICB2YXIgc2VsZWN0b3IgPSBfcmVmLnNlbGVjdG9yLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIHZhciByZXN1bHQgPSBwbHVnaW5zLnRyYW5zZm9ybSh7IHNlbGVjdG9yOiBzZWxlY3Rvciwgc3R5bGU6IHN0eWxlIH0pO1xuICByZXR1cm4gcmVzdWx0LnNlbGVjdG9yICsgJ3snICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9yU3R5bGVzKShyZXN1bHQuc3R5bGUpICsgJ30nO1xufVxuXG5mdW5jdGlvbiBkZWNvbnN0cnVjdChzdHlsZSkge1xuICAvLyB3ZSBjYW4gYmUgc3VyZSBpdCdzIG5vdCBpbmZpbml0ZWx5IG5lc3RlZCBoZXJlXG4gIHZhciBwbGFpbiA9IHZvaWQgMCxcbiAgICAgIHNlbGVjdHMgPSB2b2lkIDAsXG4gICAgICBtZWRpYXMgPSB2b2lkIDAsXG4gICAgICBzdXBwb3J0cyA9IHZvaWQgMDtcbiAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkuaW5kZXhPZignJicpID49IDApIHtcbiAgICAgIHNlbGVjdHMgPSBzZWxlY3RzIHx8IHt9O1xuICAgICAgc2VsZWN0c1trZXldID0gc3R5bGVba2V5XTtcbiAgICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgbWVkaWFzID0gbWVkaWFzIHx8IHt9O1xuICAgICAgbWVkaWFzW2tleV0gPSBkZWNvbnN0cnVjdChzdHlsZVtrZXldKTtcbiAgICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKCdAc3VwcG9ydHMnKSA9PT0gMCkge1xuICAgICAgc3VwcG9ydHMgPSBzdXBwb3J0cyB8fCB7fTtcbiAgICAgIHN1cHBvcnRzW2tleV0gPSBkZWNvbnN0cnVjdChzdHlsZVtrZXldKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xhYmVsJykge1xuICAgICAgaWYgKHN0eWxlLmxhYmVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGxhaW4gPSBwbGFpbiB8fCB7fTtcbiAgICAgICAgcGxhaW4ubGFiZWwgPSBoYXNMYWJlbHMgPyBzdHlsZS5sYWJlbC5qb2luKCcuJykgOiAnJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGxhaW4gPSBwbGFpbiB8fCB7fTtcbiAgICAgIHBsYWluW2tleV0gPSBzdHlsZVtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7IHBsYWluOiBwbGFpbiwgc2VsZWN0czogc2VsZWN0cywgbWVkaWFzOiBtZWRpYXMsIHN1cHBvcnRzOiBzdXBwb3J0cyB9O1xufVxuXG5mdW5jdGlvbiBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhpZCwgc3R5bGUpIHtcbiAgdmFyIGNzcyA9IFtdO1xuXG4gIC8vIHBsdWdpbnMgaGVyZVxuICB2YXIgcGxhaW4gPSBzdHlsZS5wbGFpbixcbiAgICAgIHNlbGVjdHMgPSBzdHlsZS5zZWxlY3RzLFxuICAgICAgbWVkaWFzID0gc3R5bGUubWVkaWFzLFxuICAgICAgc3VwcG9ydHMgPSBzdHlsZS5zdXBwb3J0cztcblxuICBpZiAocGxhaW4pIHtcbiAgICBjc3MucHVzaCh0b0NTUyh7IHN0eWxlOiBwbGFpbiwgc2VsZWN0b3I6IHNlbGVjdG9yKGlkKSB9KSk7XG4gIH1cbiAgaWYgKHNlbGVjdHMpIHtcbiAgICBPYmplY3Qua2V5cyhzZWxlY3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjc3MucHVzaCh0b0NTUyh7IHN0eWxlOiBzZWxlY3RzW2tleV0sIHNlbGVjdG9yOiBzZWxlY3RvcihpZCwga2V5KSB9KSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG1lZGlhcykge1xuICAgIE9iamVjdC5rZXlzKG1lZGlhcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gY3NzLnB1c2goa2V5ICsgJ3snICsgZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1MoaWQsIG1lZGlhc1trZXldKS5qb2luKCcnKSArICd9Jyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHN1cHBvcnRzKSB7XG4gICAgT2JqZWN0LmtleXMoc3VwcG9ydHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGNzcy5wdXNoKGtleSArICd7JyArIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGlkLCBzdXBwb3J0c1trZXldKS5qb2luKCcnKSArICd9Jyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNzcztcbn1cblxuLy8gdGhpcyBjYWNoZSB0byB0cmFjayB3aGljaCBydWxlcyBoYXZlXG4vLyBiZWVuIGluc2VydGVkIGludG8gdGhlIHN0eWxlc2hlZXRcbnZhciBpbnNlcnRlZCA9IHN0eWxlU2hlZXQuaW5zZXJ0ZWQgPSB7fTtcblxuLy8gYW5kIGhlbHBlcnMgdG8gaW5zZXJ0IHJ1bGVzIGludG8gc2FpZCBzdHlsZVNoZWV0XG5mdW5jdGlvbiBpbnNlcnQoc3BlYykge1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSB0cnVlO1xuICAgIHZhciBkZWNvbnN0cnVjdGVkID0gZGVjb25zdHJ1Y3Qoc3BlYy5zdHlsZSk7XG4gICAgdmFyIHJ1bGVzID0gZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1Moc3BlYy5pZCwgZGVjb25zdHJ1Y3RlZCk7XG4gICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSBpc0Jyb3dzZXIgPyB0cnVlIDogcnVsZXM7XG4gICAgcnVsZXMuZm9yRWFjaChmdW5jdGlvbiAoY3NzUnVsZSkge1xuICAgICAgcmV0dXJuIHN0eWxlU2hlZXQuaW5zZXJ0KGNzc1J1bGUpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGEgc2ltcGxlIGNhY2hlIHRvIHN0b3JlIGdlbmVyYXRlZCBydWxlc1xudmFyIHJlZ2lzdGVyZWQgPSBzdHlsZVNoZWV0LnJlZ2lzdGVyZWQgPSB7fTtcbmZ1bmN0aW9uIHJlZ2lzdGVyKHNwZWMpIHtcbiAgaWYgKCFyZWdpc3RlcmVkW3NwZWMuaWRdKSB7XG4gICAgcmVnaXN0ZXJlZFtzcGVjLmlkXSA9IHNwZWM7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2dldFJlZ2lzdGVyZWQocnVsZSkge1xuICBpZiAoaXNMaWtlUnVsZShydWxlKSkge1xuICAgIHZhciByZXQgPSByZWdpc3RlcmVkW2lkRm9yKHJ1bGUpXTtcbiAgICBpZiAocmV0ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2dsYW1vcl0gYW4gdW5leHBlY3RlZCBydWxlIGNhY2hlIG1pc3Mgb2NjdXJyZWQuIFRoaXMgaXMgcHJvYmFibHkgYSBzaWduIG9mIG11bHRpcGxlIGdsYW1vciBpbnN0YW5jZXMgaW4geW91ciBhcHAuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvaXNzdWVzLzc5Jyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbi8vIHRvZG8gLSBwZXJmXG52YXIgcnVsZUNhY2hlID0ge307XG5mdW5jdGlvbiB0b1J1bGUoc3BlYykge1xuICByZWdpc3RlcihzcGVjKTtcbiAgaW5zZXJ0KHNwZWMpO1xuXG4gIGlmIChydWxlQ2FjaGVbc3BlYy5pZF0pIHtcbiAgICByZXR1cm4gcnVsZUNhY2hlW3NwZWMuaWRdO1xuICB9XG5cbiAgdmFyIHJldCA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgJ2RhdGEtY3NzLScgKyBzcGVjLmlkLCBoYXNMYWJlbHMgPyBzcGVjLmxhYmVsIHx8ICcnIDogJycpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0LCAndG9TdHJpbmcnLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiAnY3NzLScgKyBzcGVjLmlkO1xuICAgIH1cbiAgfSk7XG4gIHJ1bGVDYWNoZVtzcGVjLmlkXSA9IHJldDtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29uc29sZS5sb2codGhpcyk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yKGtleSkge1xuICB2YXIgcG9zc2libGVzID0gWyc6JywgJy4nLCAnWycsICc+JywgJyAnXSxcbiAgICAgIGZvdW5kID0gZmFsc2UsXG4gICAgICBjaCA9IGtleS5jaGFyQXQoMCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zc2libGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNoID09PSBwb3NzaWJsZXNbaV0pIHtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm91bmQgfHwga2V5LmluZGV4T2YoJyYnKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBqb2luU2VsZWN0b3JzKGEsIGIpIHtcbiAgdmFyIGFzID0gc3BsaXRTZWxlY3RvcihhKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gIShhLmluZGV4T2YoJyYnKSA+PSAwKSA/ICcmJyArIGEgOiBhO1xuICB9KTtcbiAgdmFyIGJzID0gc3BsaXRTZWxlY3RvcihiKS5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gIShiLmluZGV4T2YoJyYnKSA+PSAwKSA/ICcmJyArIGIgOiBiO1xuICB9KTtcblxuICByZXR1cm4gYnMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIGIpIHtcbiAgICByZXR1cm4gYXJyLmNvbmNhdChhcy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBiLnJlcGxhY2UoL1xcJi9nLCBhKTtcbiAgICB9KSk7XG4gIH0sIFtdKS5qb2luKCcsJyk7XG59XG5cbmZ1bmN0aW9uIGpvaW5NZWRpYVF1ZXJpZXMoYSwgYikge1xuICByZXR1cm4gYSA/ICdAbWVkaWEgJyArIGEuc3Vic3RyaW5nKDYpICsgJyBhbmQgJyArIGIuc3Vic3RyaW5nKDYpIDogYjtcbn1cblxuZnVuY3Rpb24gaXNNZWRpYVF1ZXJ5KGtleSkge1xuICByZXR1cm4ga2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc1N1cHBvcnRzKGtleSkge1xuICByZXR1cm4ga2V5LmluZGV4T2YoJ0BzdXBwb3J0cycpID09PSAwO1xufVxuXG5mdW5jdGlvbiBqb2luU3VwcG9ydHMoYSwgYikge1xuICByZXR1cm4gYSA/ICdAc3VwcG9ydHMgJyArIGEuc3Vic3RyaW5nKDkpICsgJyBhbmQgJyArIGIuc3Vic3RyaW5nKDkpIDogYjtcbn1cblxuLy8gZmxhdHRlbiBhIG5lc3RlZCBhcnJheVxuZnVuY3Rpb24gZmxhdHRlbihpbkFycikge1xuICB2YXIgYXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5BcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbkFycltpXSkpIGFyciA9IGFyci5jb25jYXQoZmxhdHRlbihpbkFycltpXSkpO2Vsc2UgYXJyID0gYXJyLmNvbmNhdChpbkFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxudmFyIHByZWZpeGVkUHNldWRvU2VsZWN0b3JzID0ge1xuICAnOjpwbGFjZWhvbGRlcic6IFsnOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJywgJzo6LW1vei1wbGFjZWhvbGRlcicsICc6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciddLFxuICAnOmZ1bGxzY3JlZW4nOiBbJzotd2Via2l0LWZ1bGwtc2NyZWVuJywgJzotbW96LWZ1bGwtc2NyZWVuJywgJzotbXMtZnVsbHNjcmVlbiddXG5cbiAgLy8gbXV0YWJsZSEgbW9kaWZpZXMgZGVzdC5cbn07ZnVuY3Rpb24gYnVpbGQoZGVzdCwgX3JlZjIpIHtcbiAgdmFyIF9yZWYyJHNlbGVjdG9yID0gX3JlZjIuc2VsZWN0b3IsXG4gICAgICBzZWxlY3RvciA9IF9yZWYyJHNlbGVjdG9yID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYyJHNlbGVjdG9yLFxuICAgICAgX3JlZjIkbXEgPSBfcmVmMi5tcSxcbiAgICAgIG1xID0gX3JlZjIkbXEgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjIkbXEsXG4gICAgICBfcmVmMiRzdXBwID0gX3JlZjIuc3VwcCxcbiAgICAgIHN1cHAgPSBfcmVmMiRzdXBwID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYyJHN1cHAsXG4gICAgICBfcmVmMiRzcmMgPSBfcmVmMi5zcmMsXG4gICAgICBzcmMgPSBfcmVmMiRzcmMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZjIkc3JjO1xuXG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICBzcmMgPSBbc3JjXTtcbiAgfVxuICBzcmMgPSBmbGF0dGVuKHNyYyk7XG5cbiAgc3JjLmZvckVhY2goZnVuY3Rpb24gKF9zcmMpIHtcbiAgICBpZiAoaXNMaWtlUnVsZShfc3JjKSkge1xuICAgICAgdmFyIHJlZyA9IF9nZXRSZWdpc3RlcmVkKF9zcmMpO1xuICAgICAgaWYgKHJlZy50eXBlICE9PSAnY3NzJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBtZXJnZSB0aGlzIHJ1bGUnKTtcbiAgICAgIH1cbiAgICAgIF9zcmMgPSByZWcuc3R5bGU7XG4gICAgfVxuICAgIF9zcmMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShfc3JjKTtcbiAgICBpZiAoX3NyYyAmJiBfc3JjLmNvbXBvc2VzKSB7XG4gICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgbXE6IG1xLCBzdXBwOiBzdXBwLCBzcmM6IF9zcmMuY29tcG9zZXMgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKF9zcmMgfHwge30pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGlzU2VsZWN0b3Ioa2V5KSkge1xuXG4gICAgICAgIGlmIChwcmVmaXhlZFBzZXVkb1NlbGVjdG9yc1trZXldKSB7XG4gICAgICAgICAgcHJlZml4ZWRQc2V1ZG9TZWxlY3RvcnNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICByZXR1cm4gYnVpbGQoZGVzdCwgeyBzZWxlY3Rvcjogam9pblNlbGVjdG9ycyhzZWxlY3RvciwgcCksIG1xOiBtcSwgc3VwcDogc3VwcCwgc3JjOiBfc3JjW2tleV0gfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBqb2luU2VsZWN0b3JzKHNlbGVjdG9yLCBrZXkpLCBtcTogbXEsIHN1cHA6IHN1cHAsIHNyYzogX3NyY1trZXldIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc01lZGlhUXVlcnkoa2V5KSkge1xuICAgICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgbXE6IGpvaW5NZWRpYVF1ZXJpZXMobXEsIGtleSksIHN1cHA6IHN1cHAsIHNyYzogX3NyY1trZXldIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc1N1cHBvcnRzKGtleSkpIHtcbiAgICAgICAgYnVpbGQoZGVzdCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIG1xOiBtcSwgc3VwcDogam9pblN1cHBvcnRzKHN1cHAsIGtleSksIHNyYzogX3NyY1trZXldIH0pO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdjb21wb3NlcycpIHtcbiAgICAgICAgLy8gaWdub3JlLCB3ZSBhbHJlYWR5IGRlYWx0aCB3aXRoIGl0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX2Rlc3QgPSBkZXN0O1xuICAgICAgICBpZiAoc3VwcCkge1xuICAgICAgICAgIF9kZXN0W3N1cHBdID0gX2Rlc3Rbc3VwcF0gfHwge307XG4gICAgICAgICAgX2Rlc3QgPSBfZGVzdFtzdXBwXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXEpIHtcbiAgICAgICAgICBfZGVzdFttcV0gPSBfZGVzdFttcV0gfHwge307XG4gICAgICAgICAgX2Rlc3QgPSBfZGVzdFttcV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgX2Rlc3Rbc2VsZWN0b3JdID0gX2Rlc3Rbc2VsZWN0b3JdIHx8IHt9O1xuICAgICAgICAgIF9kZXN0ID0gX2Rlc3Rbc2VsZWN0b3JdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2xhYmVsJykge1xuICAgICAgICAgIGlmIChoYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIGRlc3QubGFiZWwgPSBkZXN0LmxhYmVsLmNvbmNhdChfc3JjLmxhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2Rlc3Rba2V5XSA9IF9zcmNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX2NzcyhydWxlcykge1xuICB2YXIgc3R5bGUgPSB7IGxhYmVsOiBbXSB9O1xuICBidWlsZChzdHlsZSwgeyBzcmM6IHJ1bGVzIH0pOyAvLyBtdXRhdGl2ZSEgYnV0IHdvcnRoIGl0LlxuXG4gIHZhciBzcGVjID0ge1xuICAgIGlkOiBoYXNoaWZ5KHN0eWxlKSxcbiAgICBzdHlsZTogc3R5bGUsIGxhYmVsOiBoYXNMYWJlbHMgPyBzdHlsZS5sYWJlbC5qb2luKCcuJykgOiAnJyxcbiAgICB0eXBlOiAnY3NzJ1xuICB9O1xuICByZXR1cm4gdG9SdWxlKHNwZWMpO1xufVxuXG52YXIgbnVsbHJ1bGUgPSB7XG4gIC8vICdkYXRhLWNzcy1uaWwnOiAnJ1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShudWxscnVsZSwgJ3RvU3RyaW5nJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgIHJldHVybiAnY3NzLW5pbCc7XG4gIH1cbn0pO1xuXG52YXIgaW5wdXRDYWNoZXMgPSB0eXBlb2YgV2Vha01hcCAhPT0gJ3VuZGVmaW5lZCcgPyBbbnVsbHJ1bGUsIG5ldyBXZWFrTWFwKCksIG5ldyBXZWFrTWFwKCksIG5ldyBXZWFrTWFwKCldIDogW251bGxydWxlXTtcblxudmFyIHdhcm5lZFdlYWtNYXBFcnJvciA9IGZhbHNlO1xuZnVuY3Rpb24gbXVsdGlJbmRleENhY2hlKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmIChpbnB1dENhY2hlc1thcmdzLmxlbmd0aF0pIHtcbiAgICAgIHZhciBjb2kgPSBpbnB1dENhY2hlc1thcmdzLmxlbmd0aF07XG4gICAgICB2YXIgY3RyID0gMDtcbiAgICAgIHdoaWxlIChjdHIgPCBhcmdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKCFjb2kuaGFzKGFyZ3NbY3RyXSkpIHtcbiAgICAgICAgICBjb2kuc2V0KGFyZ3NbY3RyXSwgbmV3IFdlYWtNYXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29pID0gY29pLmdldChhcmdzW2N0cl0pO1xuICAgICAgICBjdHIrKztcbiAgICAgIH1cbiAgICAgIGlmIChjb2kuaGFzKGFyZ3NbYXJncy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgdmFyIHJldCA9IGNvaS5nZXQoYXJnc1tjdHJdKTtcblxuICAgICAgICBpZiAocmVnaXN0ZXJlZFtyZXQudG9TdHJpbmcoKS5zdWJzdHJpbmcoNCldKSB7XG4gICAgICAgICAgLy8gbWFrZSBzdXJlIGl0IGhhc24ndCBiZWVuIGZsdXNoZWRcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IGZuKGFyZ3MpO1xuICAgIGlmIChpbnB1dENhY2hlc1thcmdzLmxlbmd0aF0pIHtcbiAgICAgIHZhciBfY3RyID0gMCxcbiAgICAgICAgICBfY29pID0gaW5wdXRDYWNoZXNbYXJncy5sZW5ndGhdO1xuICAgICAgd2hpbGUgKF9jdHIgPCBhcmdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgX2NvaSA9IF9jb2kuZ2V0KGFyZ3NbX2N0cl0pO1xuICAgICAgICBfY3RyKys7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBfY29pLnNldChhcmdzW19jdHJdLCB2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGlzRGV2ICYmICF3YXJuZWRXZWFrTWFwRXJyb3IpIHtcbiAgICAgICAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICAgICAgICB3YXJuZWRXZWFrTWFwRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLndhcm4uYXBwbHkoX2NvbnNvbGUsIFsnZmFpbGVkIHNldHRpbmcgdGhlIFdlYWtNYXAgY2FjaGUgZm9yIGFyZ3M6J10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzKSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3RoaXMgc2hvdWxkIE5PVCBoYXBwZW4sIHBsZWFzZSBmaWxlIGEgYnVnIG9uIHRoZSBnaXRodWIgcmVwby4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG52YXIgY2FjaGVkQ3NzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbXVsdGlJbmRleENhY2hlKF9jc3MpIDogX2NzcztcblxuZnVuY3Rpb24gY3NzKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBydWxlc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgaWYgKHJ1bGVzWzBdICYmIHJ1bGVzWzBdLmxlbmd0aCAmJiBydWxlc1swXS5yYXcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBmb3Jnb3QgdG8gaW5jbHVkZSBnbGFtb3IvYmFiZWwgaW4geW91ciBiYWJlbCBwbHVnaW5zLicpO1xuICB9XG5cbiAgcnVsZXMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShydWxlcyk7XG4gIGlmICghcnVsZXMpIHtcbiAgICByZXR1cm4gbnVsbHJ1bGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkQ3NzKHJ1bGVzKTtcbn1cblxuY3NzLmluc2VydCA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkoY3NzKSxcbiAgICBjc3M6IGNzcyxcbiAgICB0eXBlOiAncmF3J1xuICB9O1xuICByZWdpc3RlcihzcGVjKTtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0KHNwZWMuY3NzKTtcbiAgICBpbnNlcnRlZFtzcGVjLmlkXSA9IGlzQnJvd3NlciA/IHRydWUgOiBbc3BlYy5jc3NdO1xuICB9XG59O1xuXG52YXIgaW5zZXJ0UnVsZSA9IGV4cG9ydHMuaW5zZXJ0UnVsZSA9IGNzcy5pbnNlcnQ7XG5cbmNzcy5nbG9iYWwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHN0eWxlKSB7XG4gIHN0eWxlID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkoc3R5bGUpO1xuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gY3NzLmluc2VydCh0b0NTUyh7IHNlbGVjdG9yOiBzZWxlY3Rvciwgc3R5bGU6IHN0eWxlIH0pKTtcbiAgfVxufTtcblxudmFyIGluc2VydEdsb2JhbCA9IGV4cG9ydHMuaW5zZXJ0R2xvYmFsID0gY3NzLmdsb2JhbDtcblxuZnVuY3Rpb24gaW5zZXJ0S2V5ZnJhbWUoc3BlYykge1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgdmFyIGlubmVyID0gT2JqZWN0LmtleXMoc3BlYy5rZXlmcmFtZXMpLm1hcChmdW5jdGlvbiAoa2YpIHtcbiAgICAgIHZhciByZXN1bHQgPSBwbHVnaW5zLmtleWZyYW1lcy50cmFuc2Zvcm0oeyBpZDogc3BlYy5pZCwgbmFtZToga2YsIHN0eWxlOiBzcGVjLmtleWZyYW1lc1trZl0gfSk7XG4gICAgICByZXR1cm4gcmVzdWx0Lm5hbWUgKyAneycgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMpKHJlc3VsdC5zdHlsZSkgKyAnfSc7XG4gICAgfSkuam9pbignJyk7XG5cbiAgICB2YXIgcnVsZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICcnXS5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuICdAJyArIHByZWZpeCArICdrZXlmcmFtZXMgJyArIChzcGVjLm5hbWUgKyAnXycgKyBzcGVjLmlkKSArICd7JyArIGlubmVyICsgJ30nO1xuICAgIH0pO1xuICAgIHJ1bGVzLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiBzdHlsZVNoZWV0Lmluc2VydChydWxlKTtcbiAgICB9KTtcblxuICAgIGluc2VydGVkW3NwZWMuaWRdID0gaXNCcm93c2VyID8gdHJ1ZSA6IHJ1bGVzO1xuICB9XG59XG5jc3Mua2V5ZnJhbWVzID0gZnVuY3Rpb24gKG5hbWUsIGtmcykge1xuICBpZiAoIWtmcykge1xuICAgIGtmcyA9IG5hbWUsIG5hbWUgPSAnYW5pbWF0aW9uJztcbiAgfVxuXG4gIC8vIGRvIG5vdCBpZ25vcmUgZW1wdHkga2V5ZnJhbWUgZGVmaW5pdGlvbnMgZm9yIG5vdy5cbiAga2ZzID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkoa2ZzKSB8fCB7fTtcbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkoeyBuYW1lOiBuYW1lLCBrZnM6IGtmcyB9KSxcbiAgICB0eXBlOiAna2V5ZnJhbWVzJyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIGtleWZyYW1lczoga2ZzXG4gIH07XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpbnNlcnRLZXlmcmFtZShzcGVjKTtcbiAgcmV0dXJuIG5hbWUgKyAnXycgKyBzcGVjLmlkO1xufTtcblxuLy8gd2UgZG9uJ3QgZ28gYWxsIG91dCBmb3IgZm9udHMgYXMgbXVjaCwgZ2l2aW5nIGEgc2ltcGxlIGZvbnQgbG9hZGluZyBzdHJhdGVneVxuLy8gdXNlIGEgZmFuY2llciBsaWIgaWYgeW91IG5lZWQgbW9hciBwb3dlclxuY3NzLmZvbnRGYWNlID0gZnVuY3Rpb24gKGZvbnQpIHtcbiAgZm9udCA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKGZvbnQpO1xuICB2YXIgc3BlYyA9IHtcbiAgICBpZDogaGFzaGlmeShmb250KSxcbiAgICB0eXBlOiAnZm9udC1mYWNlJyxcbiAgICBmb250OiBmb250XG4gIH07XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpbnNlcnRGb250RmFjZShzcGVjKTtcblxuICByZXR1cm4gZm9udC5mb250RmFtaWx5O1xufTtcblxudmFyIGZvbnRGYWNlID0gZXhwb3J0cy5mb250RmFjZSA9IGNzcy5mb250RmFjZTtcbnZhciBrZXlmcmFtZXMgPSBleHBvcnRzLmtleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXM7XG5cbmZ1bmN0aW9uIGluc2VydEZvbnRGYWNlKHNwZWMpIHtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIHZhciBydWxlID0gJ0Bmb250LWZhY2V7JyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvclN0eWxlcykoc3BlYy5mb250KSArICd9JztcbiAgICBzdHlsZVNoZWV0Lmluc2VydChydWxlKTtcbiAgICBpbnNlcnRlZFtzcGVjLmlkXSA9IGlzQnJvd3NlciA/IHRydWUgOiBbcnVsZV07XG4gIH1cbn1cblxuLy8gcmVoeWRyYXRlIHRoZSBpbnNlcnRpb24gY2FjaGUgd2l0aCBpZHMgc2VudCBmcm9tXG4vLyByZW5kZXJTdGF0aWMgLyByZW5kZXJTdGF0aWNPcHRpbWl6ZWRcbmZ1bmN0aW9uIHJlaHlkcmF0ZShpZHMpIHtcbiAgLy8gbG9hZCB1cCBpZHNcbiAgKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKGluc2VydGVkLCBpZHMucmVkdWNlKGZ1bmN0aW9uIChvLCBpKSB7XG4gICAgcmV0dXJuIG9baV0gPSB0cnVlLCBvO1xuICB9LCB7fSkpO1xuICAvLyBhc3N1bWUgY3NzIGxvYWRlZCBzZXBhcmF0ZWx5XG59XG5cbi8vIGNsZWFycyBvdXQgdGhlIGNhY2hlIGFuZCBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0XG4vLyBiZXN0IGZvciB0ZXN0cywgdGhvdWdoIHRoZXJlIG1pZ2h0IGJlIHNvbWUgdmFsdWUgZm9yIFNTUi5cblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIGluc2VydGVkID0gc3R5bGVTaGVldC5pbnNlcnRlZCA9IHt9O1xuICByZWdpc3RlcmVkID0gc3R5bGVTaGVldC5yZWdpc3RlcmVkID0ge307XG4gIHJ1bGVDYWNoZSA9IHt9O1xuICBzdHlsZVNoZWV0LmZsdXNoKCk7XG4gIHN0eWxlU2hlZXQuaW5qZWN0KCk7XG59XG5cbnZhciBwcmVzZXRzID0gZXhwb3J0cy5wcmVzZXRzID0ge1xuICBtb2JpbGU6ICcobWluLXdpZHRoOiA0MDBweCknLFxuICBNb2JpbGU6ICdAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpJyxcbiAgcGhhYmxldDogJyhtaW4td2lkdGg6IDU1MHB4KScsXG4gIFBoYWJsZXQ6ICdAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpJyxcbiAgdGFibGV0OiAnKG1pbi13aWR0aDogNzUwcHgpJyxcbiAgVGFibGV0OiAnQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KScsXG4gIGRlc2t0b3A6ICcobWluLXdpZHRoOiAxMDAwcHgpJyxcbiAgRGVza3RvcDogJ0BtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpJyxcbiAgaGQ6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgSGQ6ICdAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSdcbn07XG5cbnZhciBzdHlsZSA9IGV4cG9ydHMuc3R5bGUgPSBjc3M7XG5cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBzdHlsZXNbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHN0eWxlKHN0eWxlcyk7XG4gIH1cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdG9yLCBzdHlsZXMpKTtcbn1cbnZhciAkID0gZXhwb3J0cy4kID0gc2VsZWN0O1xuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgc3R5bGVzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdG9yICsgJyAmJywgc3R5bGVzKSk7XG59XG5cbnZhciBtZXJnZSA9IGV4cG9ydHMubWVyZ2UgPSBjc3M7XG52YXIgY29tcG9zZSA9IGV4cG9ydHMuY29tcG9zZSA9IGNzcztcblxuZnVuY3Rpb24gbWVkaWEocXVlcnkpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBydWxlcyA9IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBydWxlc1tfa2V5NSAtIDFdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIHJldHVybiBjc3MoX2RlZmluZVByb3BlcnR5KHt9LCAnQG1lZGlhICcgKyBxdWVyeSwgcnVsZXMpKTtcbn1cblxuZnVuY3Rpb24gcHNldWRvKHNlbGVjdG9yKSB7XG4gIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbjYgPiAxID8gX2xlbjYgLSAxIDogMCksIF9rZXk2ID0gMTsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIHN0eWxlc1tfa2V5NiAtIDFdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgfVxuXG4gIHJldHVybiBjc3MoX2RlZmluZVByb3BlcnR5KHt9LCBzZWxlY3Rvciwgc3R5bGVzKSk7XG59XG5cbi8vIGFsbGxsbGwgdGhlIHBzZXVkb2NsYXNzZXNcblxuZnVuY3Rpb24gYWN0aXZlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmFjdGl2ZScsIHgpO1xufVxuXG5mdW5jdGlvbiBhbnkoeCkge1xuICByZXR1cm4gcHNldWRvKCc6YW55JywgeCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Y2hlY2tlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpkaXNhYmxlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBlbXB0eSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzplbXB0eScsIHgpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmVuYWJsZWQnLCB4KTtcbn1cblxuZnVuY3Rpb24gX2RlZmF1bHQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZGVmYXVsdCcsIHgpOyAvLyBub3RlICdfZGVmYXVsdCcgbmFtZVxufVxuXG5mdW5jdGlvbiBmaXJzdCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmaXJzdCcsIHgpO1xufVxuXG5mdW5jdGlvbiBmaXJzdENoaWxkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZpcnN0LWNoaWxkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0T2ZUeXBlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZpcnN0LW9mLXR5cGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gZnVsbHNjcmVlbih4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmdWxsc2NyZWVuJywgeCk7XG59XG5cbmZ1bmN0aW9uIGZvY3VzKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZvY3VzJywgeCk7XG59XG5cbmZ1bmN0aW9uIGhvdmVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmhvdmVyJywgeCk7XG59XG5cbmZ1bmN0aW9uIGluZGV0ZXJtaW5hdGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aW5kZXRlcm1pbmF0ZScsIHgpO1xufVxuXG5mdW5jdGlvbiBpblJhbmdlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmluLXJhbmdlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGludmFsaWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aW52YWxpZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBsYXN0Q2hpbGQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGFzdC1jaGlsZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBsYXN0T2ZUeXBlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxhc3Qtb2YtdHlwZScsIHgpO1xufVxuXG5mdW5jdGlvbiBsZWZ0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxlZnQnLCB4KTtcbn1cblxuZnVuY3Rpb24gbGluayh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsaW5rJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpvbmx5LWNoaWxkJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9ubHlPZlR5cGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b25seS1vZi10eXBlJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm9wdGlvbmFsJywgeCk7XG59XG5cbmZ1bmN0aW9uIG91dE9mUmFuZ2UoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b3V0LW9mLXJhbmdlJywgeCk7XG59XG5cbmZ1bmN0aW9uIHJlYWRPbmx5KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJlYWQtb25seScsIHgpO1xufVxuXG5mdW5jdGlvbiByZWFkV3JpdGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cmVhZC13cml0ZScsIHgpO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyZXF1aXJlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiByaWdodCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyaWdodCcsIHgpO1xufVxuXG5mdW5jdGlvbiByb290KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJvb3QnLCB4KTtcbn1cblxuZnVuY3Rpb24gc2NvcGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6c2NvcGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnRhcmdldCcsIHgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzp2YWxpZCcsIHgpO1xufVxuXG5mdW5jdGlvbiB2aXNpdGVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnZpc2l0ZWQnLCB4KTtcbn1cblxuLy8gcGFyYW1ldGVyaXplZCBwc2V1ZG9jbGFzc2VzXG5mdW5jdGlvbiBkaXIocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZGlyKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIGxhbmcocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGFuZygnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBub3QocCwgeCkge1xuICAvLyBzaG91bGQgdGhpcyBiZSBhIHBsdWdpbj9cbiAgdmFyIHNlbGVjdG9yID0gcC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4LnRyaW0oKTtcbiAgfSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuICc6bm90KCcgKyB4ICsgJyknO1xuICB9KTtcbiAgaWYgKHNlbGVjdG9yLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBwc2V1ZG8oJzpub3QoJyArIHAgKyAnKScsIHgpO1xuICB9XG4gIHJldHVybiBzZWxlY3Qoc2VsZWN0b3Iuam9pbignJyksIHgpO1xufVxuZnVuY3Rpb24gbnRoQ2hpbGQocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bnRoLWNoaWxkKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIG50aExhc3RDaGlsZChwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpudGgtbGFzdC1jaGlsZCgnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBudGhMYXN0T2ZUeXBlKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1sYXN0LW9mLXR5cGUoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbnRoT2ZUeXBlKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1vZi10eXBlKCcgKyBwICsgJyknLCB4KTtcbn1cblxuLy8gcHNldWRvZWxlbWVudHNcbmZ1bmN0aW9uIGFmdGVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjphZnRlcicsIHgpO1xufVxuZnVuY3Rpb24gYmVmb3JlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpiZWZvcmUnLCB4KTtcbn1cbmZ1bmN0aW9uIGZpcnN0TGV0dGVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpmaXJzdC1sZXR0ZXInLCB4KTtcbn1cbmZ1bmN0aW9uIGZpcnN0TGluZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzo6Zmlyc3QtbGluZScsIHgpO1xufVxuZnVuY3Rpb24gc2VsZWN0aW9uKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpzZWxlY3Rpb24nLCB4KTtcbn1cbmZ1bmN0aW9uIGJhY2tkcm9wKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpiYWNrZHJvcCcsIHgpO1xufVxuZnVuY3Rpb24gcGxhY2Vob2xkZXIoeCkge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvaXNzdWVzLzE0XG4gIHJldHVybiBjc3MoeyAnOjpwbGFjZWhvbGRlcic6IHggfSk7XG59XG5cbi8qKiogaGVscGVycyBmb3Igd2ViIGNvbXBvbmVudHMgKioqL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2lzc3Vlcy8xNlxuXG5mdW5jdGlvbiBjc3NGb3IoKSB7XG4gIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgcnVsZXMgPSBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgIHJ1bGVzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gIH1cblxuICBydWxlcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKHJ1bGVzKTtcbiAgcmV0dXJuIHJ1bGVzID8gcnVsZXMubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgdmFyIHN0eWxlID0geyBsYWJlbDogW10gfTtcbiAgICBidWlsZChzdHlsZSwgeyBzcmM6IHIgfSk7IC8vIG11dGF0aXZlISBidXQgd29ydGggaXQuXG4gICAgcmV0dXJuIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGhhc2hpZnkoc3R5bGUpLCBkZWNvbnN0cnVjdChzdHlsZSkpLmpvaW4oJycpO1xuICB9KS5qb2luKCcnKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJzRm9yKCkge1xuICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjgpLCBfa2V5OCA9IDA7IF9rZXk4IDwgX2xlbjg7IF9rZXk4KyspIHtcbiAgICBydWxlc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICB9XG5cbiAgcnVsZXMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShydWxlcyk7XG4gIHZhciBodG1sQXR0cmlidXRlcyA9IHJ1bGVzID8gcnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgaWRGb3IocnVsZSk7IC8vIHRocm93YXdheSBjaGVjayBmb3IgcnVsZVxuICAgIHZhciBrZXkgPSBPYmplY3Qua2V5cyhydWxlKVswXSxcbiAgICAgICAgdmFsdWUgPSBydWxlW2tleV07XG4gICAgcmV0dXJuIGtleSArICc9XCInICsgKHZhbHVlIHx8ICcnKSArICdcIic7XG4gIH0pLmpvaW4oJyAnKSA6ICcnO1xuXG4gIHJldHVybiBodG1sQXR0cmlidXRlcztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvY2Vzc1N0eWxlTmFtZSA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuY3JlYXRlTWFya3VwRm9yU3R5bGVzID0gY3JlYXRlTWFya3VwRm9yU3R5bGVzO1xuXG52YXIgX2NhbWVsaXplU3R5bGVOYW1lID0gcmVxdWlyZSgnZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUnKTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZVN0eWxlTmFtZSk7XG5cbnZhciBfZGFuZ2Vyb3VzU3R5bGVWYWx1ZSA9IHJlcXVpcmUoJy4vZGFuZ2Vyb3VzU3R5bGVWYWx1ZScpO1xuXG52YXIgX2Rhbmdlcm91c1N0eWxlVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGFuZ2Vyb3VzU3R5bGVWYWx1ZSk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lID0gcmVxdWlyZSgnZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbnZhciBfbWVtb2l6ZVN0cmluZ09ubHkgPSByZXF1aXJlKCdmYmpzL2xpYi9tZW1vaXplU3RyaW5nT25seScpO1xuXG52YXIgX21lbW9pemVTdHJpbmdPbmx5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lbW9pemVTdHJpbmdPbmx5KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gZXhwb3J0cy5wcm9jZXNzU3R5bGVOYW1lID0gKDAsIF9tZW1vaXplU3RyaW5nT25seTIuZGVmYXVsdCkoX2h5cGhlbmF0ZVN0eWxlTmFtZTIuZGVmYXVsdCk7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwcm92aWRlc01vZHVsZSBDU1NQcm9wZXJ0eU9wZXJhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvLyAnbXNUcmFuc2Zvcm0nIGlzIGNvcnJlY3QsIGJ1dCB0aGUgb3RoZXIgcHJlZml4ZXMgc2hvdWxkIGJlIGNhcGl0YWxpemVkXG4gIHZhciBiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4gPSAvXig/OndlYmtpdHxtb3p8bylbQS1aXS87XG5cbiAgLy8gc3R5bGUgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uXG4gIHZhciBiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4gPSAvO1xccyokLztcblxuICB2YXIgd2FybmVkU3R5bGVOYW1lcyA9IHt9O1xuICB2YXIgd2FybmVkU3R5bGVWYWx1ZXMgPSB7fTtcbiAgdmFyIHdhcm5lZEZvck5hTlZhbHVlID0gZmFsc2U7XG5cbiAgdmFyIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lID0gZnVuY3Rpb24gd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpIHtcbiAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdVbnN1cHBvcnRlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPyVzJywgbmFtZSwgKDAsIF9jYW1lbGl6ZVN0eWxlTmFtZTIuZGVmYXVsdCkobmFtZSksIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikpIDogdm9pZCAwO1xuICB9O1xuXG4gIHZhciB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpIHtcbiAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdVbnN1cHBvcnRlZCB2ZW5kb3ItcHJlZml4ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8lcycsIG5hbWUsIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpKSA6IHZvaWQgMDtcbiAgfTtcblxuICB2YXIgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uID0gZnVuY3Rpb24gd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uKG5hbWUsIHZhbHVlLCBvd25lcikge1xuICAgIGlmICh3YXJuZWRTdHlsZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgJiYgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1N0eWxlIHByb3BlcnR5IHZhbHVlcyBzaG91bGRuXFwndCBjb250YWluIGEgc2VtaWNvbG9uLiVzICcgKyAnVHJ5IFwiJXM6ICVzXCIgaW5zdGVhZC4nLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpLCBuYW1lLCB2YWx1ZS5yZXBsYWNlKGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiwgJycpKSA6IHZvaWQgMDtcbiAgfTtcblxuICB2YXIgd2FyblN0eWxlVmFsdWVJc05hTiA9IGZ1bmN0aW9uIHdhcm5TdHlsZVZhbHVlSXNOYU4obmFtZSwgdmFsdWUsIG93bmVyKSB7XG4gICAgaWYgKHdhcm5lZEZvck5hTlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkRm9yTmFOVmFsdWUgPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnYE5hTmAgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIGAlc2AgY3NzIHN0eWxlIHByb3BlcnR5LiVzJywgbmFtZSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gIH07XG5cbiAgdmFyIGNoZWNrUmVuZGVyTWVzc2FnZSA9IGZ1bmN0aW9uIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikge1xuICAgIGlmIChvd25lcikge1xuICAgICAgdmFyIG5hbWUgPSBvd25lci5nZXROYW1lKCk7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAqL1xuICB2YXIgd2FyblZhbGlkU3R5bGUgPSBmdW5jdGlvbiB3YXJuVmFsaWRTdHlsZShuYW1lLCB2YWx1ZSwgY29tcG9uZW50KSB7XG4gICAgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLXZhclxuICAgIHZhciBvd25lciA9IHZvaWQgMDtcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICBvd25lciA9IGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuICAgIH1cbiAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpO1xuICAgIH0gZWxzZSBpZiAoYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZShuYW1lLCBvd25lcik7XG4gICAgfSBlbHNlIGlmIChiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSwgb3duZXIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSkge1xuICAgICAgd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSwgb3duZXIpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtYXBwaW5nIG9mIHN0eWxlIHByb3BlcnRpZXMgZm9yIHVzZSBhcyBpbmxpbmUgc3R5bGVzOlxuICAgKlxuICAgKiAgID4gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHt3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAwfSlcbiAgICogICBcIndpZHRoOjIwMHB4O2hlaWdodDowO1wiXG4gICAqXG4gICAqIFVuZGVmaW5lZCB2YWx1ZXMgYXJlIGlnbm9yZWQgc28gdGhhdCBkZWNsYXJhdGl2ZSBwcm9ncmFtbWluZyBpcyBlYXNpZXIuXG4gICAqIFRoZSByZXN1bHQgc2hvdWxkIGJlIEhUTUwtZXNjYXBlZCBiZWZvcmUgaW5zZXJ0aW9uIGludG8gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0eWxlc1xuICAgKiBAcGFyYW0ge1JlYWN0RE9NQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICogQHJldHVybiB7P3N0cmluZ31cbiAgICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhzdHlsZXMsIGNvbXBvbmVudCkge1xuICB2YXIgc2VyaWFsaXplZCA9ICcnO1xuICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgdmFyIGlzQ3VzdG9tUHJvcCA9IHN0eWxlTmFtZS5pbmRleE9mKCctLScpID09PSAwO1xuICAgIGlmICghc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoc3R5bGVOYW1lID09PSAnbGFiZWwnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIHN0eWxlVmFsdWUgPSBzdHlsZXNbc3R5bGVOYW1lXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNDdXN0b21Qcm9wKSB7XG4gICAgICB3YXJuVmFsaWRTdHlsZShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGlmIChzdHlsZVZhbHVlICE9IG51bGwpIHtcbiAgICAgIGlmIChpc0N1c3RvbVByb3ApIHtcbiAgICAgICAgc2VyaWFsaXplZCArPSBzdHlsZU5hbWUgKyAnOicgKyBzdHlsZVZhbHVlICsgJzsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZCArPSBwcm9jZXNzU3R5bGVOYW1lKHN0eWxlTmFtZSkgKyAnOic7XG4gICAgICAgIHNlcmlhbGl6ZWQgKz0gKDAsIF9kYW5nZXJvdXNTdHlsZVZhbHVlMi5kZWZhdWx0KShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGNvbXBvbmVudCkgKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzZXJpYWxpemVkIHx8IG51bGw7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhcGl0YWxpemVTdHJpbmc7XG5mdW5jdGlvbiBjYXBpdGFsaXplU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvY2FwaXRhbGl6ZVN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCduYXRpdmVqc3gvZGlzdC9uYXRpdmVqc3gtcHJvdG90eXBlcy5qcycpO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBsb2FkR29vZ2xlTWFwcyBmcm9tICdsb2FkLWdvb2dsZS1tYXBzLWFwaSc7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IGRldGFpbHMgZnJvbSAnLi9kZXRhaWxzLmNvbXBvbmVudCc7XG5jb25zdCBzdHlsZSA9IGNzcyh7IGhlaWdodDogJzEwMCUnIH0pO1xubGV0ICRtYXA7XG5sZXQgJGNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJCRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJCRhLnNldEF0dHJpYnV0ZXMoc3R5bGUpO1xuICAgICQkYS5hcHBlbmRDaGlsZHJlbihkZXRhaWxzLmVsZW1lbnQpO1xuICAgIHZhciAkJGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAkJGMuc2V0QXR0cmlidXRlcyhzdHlsZSk7XG4gICAgKGUgPT4gJG1hcCA9IGUpKCQkYyk7XG4gICAgJCRhLmFwcGVuZENoaWxkKCQkYyk7XG4gICAgcmV0dXJuICQkYTtcbn0uY2FsbCh0aGlzKTtcbmNvbnN0IHN0YXRlID0ge1xuICAgIGFyZWFzOiBudWxsLFxuICAgIG1hcDogbnVsbCxcbiAgICBnbWFwczogbnVsbCxcbiAgICBtb2RlOiBudWxsLFxuICAgIHBvbHlnb25zOiBbXSxcbiAgICBjbGVhclBvbHlnb25zOiAoKSA9PiB7XG4gICAgICAgIHN0YXRlLnBvbHlnb25zLmZvckVhY2gocG9seWdvbiA9PiBwb2x5Z29uLnNldE1hcChudWxsKSk7XG4gICAgICAgIHN0YXRlLnBvbHlnb25zID0gW107XG4gICAgfVxufTtcbmxvYWRHb29nbGVNYXBzKHsga2V5OiAnQUl6YVN5QjZjdVZyQ0p2d3lOb3M3U3NVV1owRDFVaml3d3ZtaVpNJyB9KS50aGVuKGdtYXBzID0+IHtcbiAgICBzdGF0ZS5nbWFwcyA9IGdtYXBzO1xuICAgIHN0YXRlLm1hcCA9IG5ldyBnbWFwcy5NYXAoJG1hcCwge1xuICAgICAgICB6b29tOiAxMixcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICBsbmc6IC01OC40NTM3Njc0MzIxNjQ3LFxuICAgICAgICAgICAgbGF0OiAtMzQuNTk2NjM0MjQ4NDE1MlxuICAgICAgICB9LFxuICAgICAgICBtYXBUeXBlSWQ6ICd0ZXJyYWluJ1xuICAgIH0pO1xuICAgIHNldFN0YXRlKHsgbW9kZTogJ3JhdGlvJyB9KTtcbn0pO1xuZnVuY3Rpb24gc2V0U3RhdGUocGFydGlhbFN0YXRlKSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgcGFydGlhbFN0YXRlKTtcbiAgICBjb25zdCB7YXJlYXMsIG1vZGUsIG1hcCwgZ21hcHN9ID0gc3RhdGU7XG4gICAgY29uc3QgbWluUmF0aW8gPSBNYXRoLm1pbiguLi5hcmVhcy5tYXAoYSA9PiBhW21vZGVdKSk7XG4gICAgY29uc3QgbWF4UmF0aW8gPSBNYXRoLm1heCguLi5hcmVhcy5tYXAoYSA9PiBhW21vZGVdKSk7XG4gICAgaWYgKCFnbWFwcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXRlLmNsZWFyUG9seWdvbnMoKTtcbiAgICBhcmVhcy5mb3JFYWNoKGFyZWEgPT4ge1xuICAgICAgICBjb25zdCBwb2x5Z29uT3B0cyA9IGdldFBvbHlnb24oYXJlYSwgYXJlYVttb2RlXSwgbWluUmF0aW8sIG1heFJhdGlvKTtcbiAgICAgICAgY29uc3QgcG9seWdvbiA9IG5ldyBnbWFwcy5Qb2x5Z29uKHBvbHlnb25PcHRzKTtcbiAgICAgICAgcG9seWdvbi5zZXRNYXAobWFwKTtcbiAgICAgICAgc3RhdGUucG9seWdvbnMucHVzaChwb2x5Z29uKTtcbiAgICAgICAgZ21hcHMuZXZlbnQuYWRkTGlzdGVuZXIocG9seWdvbiwgJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgICAgICAgZGV0YWlscy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBhcmVhLm5hbWUsXG4gICAgICAgICAgICAgICAgcmVudDogYXJlYS5yZW50LFxuICAgICAgICAgICAgICAgIHByaWNlOiBhcmVhLnByaWNlLFxuICAgICAgICAgICAgICAgIHJhdGlvOiBhcmVhLnJhdGlvLFxuICAgICAgICAgICAgICAgIGNvdW50OiBhcmVhLmNvdW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvbHlnb24uc2V0T3B0aW9ucyh7IGZpbGxPcGFjaXR5OiAwLjggfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBnbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihwb2x5Z29uLCAnbW91c2VvdXQnLCBlID0+IHtcbiAgICAgICAgICAgIGRldGFpbHMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHBvbHlnb24uc2V0T3B0aW9ucyh7IGZpbGxPcGFjaXR5OiAwLjUgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVsZW1lbnQ6ICRjb250YWluZXIsXG4gICAgc2V0U3RhdGVcbn07XG5mdW5jdGlvbiBnZXRQb2x5Z29uKHtuYW1lLCBjb29yZHN9LCByYXRpbywgbWluUmF0aW8sIG1heFJhdGlvKSB7XG4gICAgY29uc3QgeCA9IChyYXRpbyAtIG1pblJhdGlvKSAvIChtYXhSYXRpbyAtIG1pblJhdGlvKTtcbiAgICBjb25zdCBjb2xvciA9IHNjYWxlW01hdGgucm91bmQoeCAqIChzY2FsZS5sZW5ndGggLSAxKSldO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBjb29yZHMsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBjb2xvcixcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgICAgICBzdHJva2VXZWlnaHQ6IDIsXG4gICAgICAgIGZpbGxDb2xvcjogY29sb3IsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjUsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCduYXRpdmVqc3gvZGlzdC9uYXRpdmVqc3gtcHJvdG90eXBlcy5qcycpO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmNvbnN0IGNvbnRhaW5lclN0eWxlID0gY3NzKHtcbiAgICB3aWR0aDogMzAwLFxuICAgIHpJbmRleDogMTAsXG4gICAgdG9wOiA1LFxuICAgIHJpZ2h0OiA1LFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgZGlzcGxheTogJ25vbmUnXG59KTtcbmxldCAkY29udGFpbmVyLCAkbmFtZSwgJHJlbnQsICRwcmljZSwgJHJhdGlvLCAkY291bnQ7XG4kY29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkJGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAkJGEuc2V0QXR0cmlidXRlcyhjb250YWluZXJTdHlsZSk7XG4gICAgdmFyICQkYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgJCRhLmFwcGVuZENoaWxkKCQkYik7XG4gICAgdmFyICQkYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgJCRiLmFwcGVuZENoaWxkKCQkYyk7XG4gICAgdmFyICQkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgJCRjLmFwcGVuZENoaWxkKCQkZCk7XG4gICAgdmFyICQkZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdCYXJyaW8nKTtcbiAgICAkJGQuYXBwZW5kQ2hpbGQoJCRlKTtcbiAgICB2YXIgJCRmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAoZSA9PiAkbmFtZSA9IGUpKCQkZik7XG4gICAgJCRjLmFwcGVuZENoaWxkKCQkZik7XG4gICAgdmFyICQkZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgJCRiLmFwcGVuZENoaWxkKCQkZyk7XG4gICAgdmFyICQkaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgJCRnLmFwcGVuZENoaWxkKCQkaCk7XG4gICAgdmFyICQkaSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBbHF1aWxlcicpO1xuICAgICQkaC5hcHBlbmRDaGlsZCgkJGkpO1xuICAgIHZhciAkJGogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICQkai5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbnQnKTtcbiAgICAoZSA9PiAkcmVudCA9IGUpKCQkaik7XG4gICAgJCRnLmFwcGVuZENoaWxkKCQkaik7XG4gICAgdmFyICQkayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgJCRiLmFwcGVuZENoaWxkKCQkayk7XG4gICAgdmFyICQkbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgJCRrLmFwcGVuZENoaWxkKCQkbCk7XG4gICAgdmFyICQkbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdWZW50YScpO1xuICAgICQkbC5hcHBlbmRDaGlsZCgkJG0pO1xuICAgIHZhciAkJG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICQkbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaWNlJyk7XG4gICAgKGUgPT4gJHByaWNlID0gZSkoJCRuKTtcbiAgICAkJGsuYXBwZW5kQ2hpbGQoJCRuKTtcbiAgICB2YXIgJCRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAkJGIuYXBwZW5kQ2hpbGQoJCRvKTtcbiAgICB2YXIgJCRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAkJG8uYXBwZW5kQ2hpbGQoJCRwKTtcbiAgICB2YXIgJCRxID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1ZlbnRhL0FscXVpbGVyJyk7XG4gICAgJCRwLmFwcGVuZENoaWxkKCQkcSk7XG4gICAgdmFyICQkciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgJCRyLnNldEF0dHJpYnV0ZSgnaWQnLCAncmF0aW8nKTtcbiAgICAoZSA9PiAkcmF0aW8gPSBlKSgkJHIpO1xuICAgICQkby5hcHBlbmRDaGlsZCgkJHIpO1xuICAgIHZhciAkJHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICQkYi5hcHBlbmRDaGlsZCgkJHMpO1xuICAgIHZhciAkJHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICQkcy5hcHBlbmRDaGlsZCgkJHQpO1xuICAgIHZhciAkJHUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ2FudGlkYWQnKTtcbiAgICAkJHQuYXBwZW5kQ2hpbGQoJCR1KTtcbiAgICB2YXIgJCR2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAoZSA9PiAkY291bnQgPSBlKSgkJHYpO1xuICAgICQkcy5hcHBlbmRDaGlsZCgkJHYpO1xuICAgIHJldHVybiAkJGE7XG59LmNhbGwodGhpcyk7XG5jb25zdCBzdGF0ZSA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBuYW1lOiBudWxsLFxuICAgIHJlbnQ6IG51bGwsXG4gICAgcHJpY2U6IG51bGwsXG4gICAgcmF0aW86IG51bGwsXG4gICAgY291bnQ6IG51bGwsXG4gICAgbW9kZTogbnVsbFxufTtcbmZ1bmN0aW9uIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCgkY29udGFpbmVyKTtcbn1cbmZ1bmN0aW9uIHNldFN0YXRlKHBhcnRpYWxTdGF0ZSkge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBhcnRpYWxTdGF0ZSk7XG4gICAgY29uc3Qge3Nob3csIG5hbWUsIG1vZGUsIGNvdW50fSA9IHN0YXRlO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBzdGF0ZS5zaG93ID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAkY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgICRuYW1lLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgbGV0ICRtb2RlcyA9IFtcbiAgICAgICAgJHJlbnQsXG4gICAgICAgICRwcmljZSxcbiAgICAgICAgJHJhdGlvXG4gICAgXTtcbiAgICAkbW9kZXMuZm9yRWFjaCgkbW9kZSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHN0YXRlW21vZGVdO1xuICAgICAgICAkbW9kZS5pbm5lclRleHQgPSAobW9kZSA9PT0gJ3JhdGlvJyA/ICcnIDogJyQnKSArICh2YWx1ZSA/IE1hdGgucm91bmQodmFsdWUpLnRvTG9jYWxlU3RyaW5nKCkgOiAnJyk7XG4gICAgICAgICRtb2RlLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9IG1vZGUgPT09ICRtb2RlLmlkID8gJycgOiAnbm9uZSc7XG4gICAgfSk7XG4gICAgJGNvdW50LmlubmVyVGV4dCA9IGNvdW50O1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVsZW1lbnQ6ICRjb250YWluZXIsXG4gICAgc2V0U3RhdGVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGV0YWlscy5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnbmF0aXZlanN4L2Rpc3QvbmF0aXZlanN4LXByb3RvdHlwZXMuanMnKTtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJnbGFtb3JcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2luZm9cIjtcbmltcG9ydCBtYXAgZnJvbSBcIi4vbWFwLmNvbXBvbmVudFwiO1xuaW1wb3J0IG1vZGUgZnJvbSBcIi4vbW9kZS5jb21wb25lbnRcIlxuXG5jc3MuZ2xvYmFsKFwiaHRtbCwgYm9keVwiLCB7IHBhZGRpbmc6IDAsIG1hcmdpbjogMCwgaGVpZ2h0OiBcIjEwMCVcIiB9KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RlLmVsZW1lbnQpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXAuZWxlbWVudCk7XG5cbm1vZGUuc2V0U3RhdGUoe30pO1xubWFwLnNldFN0YXRlKHtcbiAgYXJlYXM6IGRhdGFcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU3R5bGVTaGVldCA9IFN0eWxlU2hlZXQ7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuLyogXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXMgXG5cbi0gdXNlcyBtdWx0aXBsZSBzdHlsZSB0YWdzIGJlaGluZCB0aGUgc2NlbmVzIGZvciBtaWxsaW9ucyBvZiBydWxlcyBcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG4tICdwb2x5ZmlsbHMnIG9uIHNlcnZlciBzaWRlIFxuXG5cbi8vIHVzYWdlXG5cbmltcG9ydCBTdHlsZVNoZWV0IGZyb20gJ2dsYW1vci9saWIvc2hlZXQnXG5sZXQgc3R5bGVTaGVldCA9IG5ldyBTdHlsZVNoZWV0KClcblxuc3R5bGVTaGVldC5pbmplY3QoKSBcbi0gJ2luamVjdHMnIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlIHBhZ2UgKG9yIGludG8gbWVtb3J5IGlmIG9uIHNlcnZlcilcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKSBcbi0gYXBwZW5kcyBhIGNzcyBydWxlIGludG8gdGhlIHN0eWxlc2hlZXQgXG5cbnN0eWxlU2hlZXQuZmx1c2goKSBcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cblxuKi9cblxuZnVuY3Rpb24gbGFzdChhcnIpIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfVxuXG4gIC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3ggXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgIXByb2Nlc3MuZW52Lk5PREVfRU5WOyAvLyh4ID0+ICh4ID09PSAnZGV2ZWxvcG1lbnQnKSB8fCAheCkocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXG52YXIgaXNUZXN0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JztcblxudmFyIG9sZElFID0gZnVuY3Rpb24gKCkge1xuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSAnPCEtLVtpZiBsdCBJRSAxMF0+PGk+PC9pPjwhW2VuZGlmXS0tPic7XG4gICAgcmV0dXJuIGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaScpLmxlbmd0aCA9PT0gMTtcbiAgfVxufSgpO1xuXG5mdW5jdGlvbiBtYWtlU3R5bGVUYWcoKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ2xhbW9yJywgJycpO1xuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSkuYXBwZW5kQ2hpbGQodGFnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxuZnVuY3Rpb24gU3R5bGVTaGVldCgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgX3JlZiRzcGVlZHkgPSBfcmVmLnNwZWVkeSxcbiAgICAgIHNwZWVkeSA9IF9yZWYkc3BlZWR5ID09PSB1bmRlZmluZWQgPyAhaXNEZXYgJiYgIWlzVGVzdCA6IF9yZWYkc3BlZWR5LFxuICAgICAgX3JlZiRtYXhMZW5ndGggPSBfcmVmLm1heExlbmd0aCxcbiAgICAgIG1heExlbmd0aCA9IF9yZWYkbWF4TGVuZ3RoID09PSB1bmRlZmluZWQgPyBpc0Jyb3dzZXIgJiYgb2xkSUUgPyA0MDAwIDogNjUwMDAgOiBfcmVmJG1heExlbmd0aDtcblxuICB0aGlzLmlzU3BlZWR5ID0gc3BlZWR5OyAvLyB0aGUgYmlnIGRyYXdiYWNrIGhlcmUgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG4gIHRoaXMuc2hlZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMudGFncyA9IFtdO1xuICB0aGlzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgdGhpcy5jdHIgPSAwO1xufVxuXG4oMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoU3R5bGVTaGVldC5wcm90b3R5cGUsIHtcbiAgZ2V0U2hlZXQ6IGZ1bmN0aW9uIGdldFNoZWV0KCkge1xuICAgIHJldHVybiBzaGVldEZvclRhZyhsYXN0KHRoaXMudGFncykpO1xuICB9LFxuICBpbmplY3Q6IGZ1bmN0aW9uIGluamVjdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuaW5qZWN0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBpbmplY3RlZCBzdHlsZXNoZWV0IScpO1xuICAgIH1cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnRhZ3NbMF0gPSBtYWtlU3R5bGVUYWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2VydmVyIHNpZGUgJ3BvbHlmaWxsJy4ganVzdCBlbm91Z2ggYmVoYXZpb3IgdG8gYmUgdXNlZnVsLlxuICAgICAgdGhpcy5zaGVldCA9IHtcbiAgICAgICAgY3NzUnVsZXM6IFtdLFxuICAgICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUpIHtcbiAgICAgICAgICAvLyBlbm91Z2ggJ3NwZWMgY29tcGxpYW5jZScgdG8gYmUgYWJsZSB0byBleHRyYWN0IHRoZSBydWxlcyBsYXRlciAgXG4gICAgICAgICAgLy8gaW4gb3RoZXIgd29yZHMsIGp1c3QgdGhlIGNzc1RleHQgZmllbGQgXG4gICAgICAgICAgX3RoaXMuc2hlZXQuY3NzUnVsZXMucHVzaCh7IGNzc1RleHQ6IHJ1bGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0ZWQgPSB0cnVlO1xuICB9LFxuICBzcGVlZHk6IGZ1bmN0aW9uIHNwZWVkeShib29sKSB7XG4gICAgaWYgKHRoaXMuY3RyICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjaGFuZ2Ugc3BlZWR5IG1vZGUgYWZ0ZXIgaW5zZXJ0aW5nIGFueSBydWxlIHRvIHNoZWV0LiBFaXRoZXIgY2FsbCBzcGVlZHkoJyArIGJvb2wgKyAnKSBlYXJsaWVyIGluIHlvdXIgYXBwLCBvciBjYWxsIGZsdXNoKCkgYmVmb3JlIHNwZWVkeSgnICsgYm9vbCArICcpJyk7XG4gICAgfVxuICAgIHRoaXMuaXNTcGVlZHkgPSAhIWJvb2w7XG4gIH0sXG4gIF9pbnNlcnQ6IGZ1bmN0aW9uIF9pbnNlcnQocnVsZSkge1xuICAgIC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnIFxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMDA3OTkyL2Nocm9tZS1zdWRkZW5seS1zdG9wcGVkLWFjY2VwdGluZy1pbnNlcnRydWxlXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcbiAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgcnVsZS5pbmRleE9mKCdAaW1wb3J0JykgIT09IC0xID8gMCA6IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGlzRGV2KSB7XG4gICAgICAgIC8vIG1pZ2h0IG5lZWQgYmV0ZXIgZHggZm9yIHRoaXMgXG4gICAgICAgIGNvbnNvbGUud2Fybignd2hvb3BzLCBpbGxlZ2FsIHJ1bGUgaW5zZXJ0ZWQnLCBydWxlKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnMgXG4gICAgICBpZiAodGhpcy5pc1NwZWVkeSAmJiB0aGlzLmdldFNoZWV0KCkuaW5zZXJ0UnVsZSkge1xuICAgICAgICB0aGlzLl9pbnNlcnQocnVsZSk7XG4gICAgICB9XG4gICAgICAvLyBtb3JlIGJyb3dzZXIgd2VpcmRuZXNzLiBJIGRvbid0IGV2ZW4ga25vdyAgICBcbiAgICAgIC8vIGVsc2UgaWYodGhpcy50YWdzLmxlbmd0aCA+IDAgJiYgdGhpcy50YWdzOjpsYXN0KCkuc3R5bGVTaGVldCkgeyAgICAgIFxuICAgICAgLy8gICB0aGlzLnRhZ3M6Omxhc3QoKS5zdHlsZVNoZWV0LmNzc1RleHQrPSBydWxlXG4gICAgICAvLyB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAocnVsZS5pbmRleE9mKCdAaW1wb3J0JykgIT09IC0xKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gbGFzdCh0aGlzLnRhZ3MpO1xuICAgICAgICAgICAgdGFnLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSwgdGFnLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0KHRoaXMudGFncykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXJ2ZXIgc2lkZSBpcyBwcmV0dHkgc2ltcGxlICAgICAgICAgXG4gICAgICB0aGlzLnNoZWV0Lmluc2VydFJ1bGUocnVsZSwgcnVsZS5pbmRleE9mKCdAaW1wb3J0JykgIT09IC0xID8gMCA6IHRoaXMuc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgdGhpcy5jdHIgJSB0aGlzLm1heExlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy50YWdzLnB1c2gobWFrZVN0eWxlVGFnKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdHIgLSAxO1xuICB9LFxuXG4gIC8vIGNvbW1lbnRpbmcgdGhpcyBvdXQgdGlsbCB3ZSBkZWNpZGUgb24gdjMncyBkZWNpc2lvbiBcbiAgLy8gX3JlcGxhY2UoaW5kZXgsIHJ1bGUpIHtcbiAgLy8gICAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1ZyBcbiAgLy8gICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuICAvLyAgIHRyeSB7ICBcbiAgLy8gICAgIGxldCBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKSAgICAgICAgXG4gIC8vICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KSAvLyB0b2RvIC0gY29ycmVjdCBpbmRleCBoZXJlICAgICBcbiAgLy8gICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpXG4gIC8vICAgfVxuICAvLyAgIGNhdGNoKGUpIHtcbiAgLy8gICAgIGlmKGlzRGV2KSB7XG4gIC8vICAgICAgIC8vIG1pZ2h0IG5lZWQgYmV0ZXIgZHggZm9yIHRoaXMgXG4gIC8vICAgICAgIGNvbnNvbGUud2Fybignd2hvb3BzLCBwcm9ibGVtIHJlcGxhY2luZyBydWxlJywgcnVsZSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgLy8gICAgIH0gICAgICAgICAgXG4gIC8vICAgfSAgICAgICAgICBcblxuICAvLyB9XG4gIC8vIHJlcGxhY2UoaW5kZXgsIHJ1bGUpIHtcbiAgLy8gICBpZihpc0Jyb3dzZXIpIHtcbiAgLy8gICAgIGlmKHRoaXMuaXNTcGVlZHkgJiYgdGhpcy5nZXRTaGVldCgpLmluc2VydFJ1bGUpIHtcbiAgLy8gICAgICAgdGhpcy5fcmVwbGFjZShpbmRleCwgcnVsZSlcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsc2Uge1xuICAvLyAgICAgICBsZXQgX3Nsb3QgPSBNYXRoLmZsb29yKChpbmRleCAgKyB0aGlzLm1heExlbmd0aCkgLyB0aGlzLm1heExlbmd0aCkgLSAxICAgICAgICBcbiAgLy8gICAgICAgbGV0IF9pbmRleCA9IChpbmRleCAlIHRoaXMubWF4TGVuZ3RoKSArIDFcbiAgLy8gICAgICAgbGV0IHRhZyA9IHRoaXMudGFnc1tfc2xvdF1cbiAgLy8gICAgICAgdGFnLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSwgdGFnLmNoaWxkTm9kZXNbX2luZGV4XSlcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgZWxzZSB7XG4gIC8vICAgICBsZXQgcnVsZXMgPSB0aGlzLnNoZWV0LmNzc1J1bGVzXG4gIC8vICAgICB0aGlzLnNoZWV0LmNzc1J1bGVzID0gWyAuLi5ydWxlcy5zbGljZSgwLCBpbmRleCksIHsgY3NzVGV4dDogcnVsZSB9LCAuLi5ydWxlcy5zbGljZShpbmRleCArIDEpIF1cbiAgLy8gICB9XG4gIC8vIH1cbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKGluZGV4KSB7XG4gICAgLy8gd2UgaW5zZXJ0IGEgYmxhbmsgcnVsZSB3aGVuICdkZWxldGluZycgc28gcHJldmlvdXNseSByZXR1cm5lZCBpbmRleGVzIHJlbWFpbiBzdGFibGVcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGluZGV4LCAnJyk7XG4gIH0sXG4gIGZsdXNoOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICAgIHRoaXMuc2hlZXQgPSBudWxsO1xuICAgICAgdGhpcy5jdHIgPSAwO1xuICAgICAgLy8gdG9kbyAtIGxvb2sgZm9yIHJlbW5hbnRzIGluIGRvY3VtZW50LnN0eWxlU2hlZXRzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyIFxuICAgICAgdGhpcy5zaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmluamVjdGVkID0gZmFsc2U7XG4gIH0sXG4gIHJ1bGVzOiBmdW5jdGlvbiBydWxlcygpIHtcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2hlZXQuY3NzUnVsZXM7XG4gICAgfVxuICAgIHZhciBhcnIgPSBbXTtcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZS5hcHBseShhcnIsIFthcnIubGVuZ3RoLCAwXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KEFycmF5LmZyb20oc2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcykpKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xhbW9yL2xpYi9zaGVldC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FtZWxpemUgPSByZXF1aXJlKCcuL2NhbWVsaXplJyk7XG5cbnZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuXG4vKipcbiAqIENhbWVsY2FzZXMgYSBoeXBoZW5hdGVkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJ2JhY2tncm91bmQtY29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZENvbG9yXCJcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnLW1vei10cmFuc2l0aW9uJylcbiAqICAgPCBcIk1velRyYW5zaXRpb25cIlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCctbXMtdHJhbnNpdGlvbicpXG4gKiAgIDwgXCJtc1RyYW5zaXRpb25cIlxuICpcbiAqIEFzIEFuZGkgU21pdGggc3VnZ2VzdHNcbiAqIChodHRwOi8vd3d3LmFuZGlzbWl0aC5jb20vYmxvZy8yMDEyLzAyL21vZGVybml6ci1wcmVmaXhlZC8pLCBhbiBgLW1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2UgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsaXplU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gY2FtZWxpemUoc3RyaW5nLnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsaXplU3R5bGVOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF9oeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcblxuLyoqXG4gKiBDYW1lbGNhc2VzIGEgaHlwaGVuYXRlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKF8sIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvY2FtZWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DU1NQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHknKTtcblxudmFyIF9DU1NQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DU1NQcm9wZXJ0eSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZGFuZ2Vyb3VzU3R5bGVWYWx1ZVxuICovXG5cbnZhciBpc1VuaXRsZXNzTnVtYmVyID0gX0NTU1Byb3BlcnR5Mi5kZWZhdWx0LmlzVW5pdGxlc3NOdW1iZXI7XG52YXIgc3R5bGVXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9IE5vcm1hbGl6ZWQgc3R5bGUgdmFsdWUgd2l0aCBkaW1lbnNpb25zIGFwcGxpZWQuXG4gKi9cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAvLyBOb3RlIHRoYXQgd2UndmUgcmVtb3ZlZCBlc2NhcGVUZXh0Rm9yQnJvd3NlcigpIGNhbGxzIGhlcmUgc2luY2UgdGhlXG4gIC8vIHdob2xlIHN0cmluZyB3aWxsIGJlIGVzY2FwZWQgd2hlbiB0aGUgYXR0cmlidXRlIGlzIGluamVjdGVkIGludG9cbiAgLy8gdGhlIG1hcmt1cC4gSWYgeW91IHByb3ZpZGUgdW5zYWZlIHVzZXIgZGF0YSBoZXJlIHRoZXkgY2FuIGluamVjdFxuICAvLyBhcmJpdHJhcnkgQ1NTIHdoaWNoIG1heSBiZSBwcm9ibGVtYXRpYyAoSSBjb3VsZG4ndCByZXBybyB0aGlzKTpcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9YU1NfRmlsdGVyX0V2YXNpb25fQ2hlYXRfU2hlZXRcbiAgLy8gaHR0cDovL3d3dy50aGVzcGFubmVyLmNvLnVrLzIwMDcvMTEvMjYvdWx0aW1hdGUteHNzLWNzcy1pbmplY3Rpb24vXG4gIC8vIFRoaXMgaXMgbm90IGFuIFhTUyBob2xlIGJ1dCBpbnN0ZWFkIGEgcG90ZW50aWFsIENTUyBpbmplY3Rpb24gaXNzdWVcbiAgLy8gd2hpY2ggaGFzIGxlYWQgdG8gYSBncmVhdGVyIGRpc2N1c3Npb24gYWJvdXQgaG93IHdlJ3JlIGdvaW5nIHRvXG4gIC8vIHRydXN0IFVSTHMgbW92aW5nIGZvcndhcmQuIFNlZSAjMjExNTkwMVxuXG4gIHZhciBpc0VtcHR5ID0gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJyc7XG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGlzTm9uTnVtZXJpYyA9IGlzTmFOKHZhbHVlKTtcbiAgaWYgKGlzTm9uTnVtZXJpYyB8fCB2YWx1ZSA9PT0gMCB8fCBpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pIHtcbiAgICByZXR1cm4gJycgKyB2YWx1ZTsgLy8gY2FzdCB0byBzdHJpbmdcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIEFsbG93ICcwJyB0byBwYXNzIHRocm91Z2ggd2l0aG91dCB3YXJuaW5nLiAwIGlzIGFscmVhZHkgc3BlY2lhbCBhbmRcbiAgICAgIC8vIGRvZXNuJ3QgcmVxdWlyZSB1bml0cywgc28gd2UgZG9uJ3QgbmVlZCB0byB3YXJuIGFib3V0IGl0LlxuICAgICAgaWYgKGNvbXBvbmVudCAmJiB2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgIHZhciBvd25lciA9IGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuICAgICAgICB2YXIgb3duZXJOYW1lID0gb3duZXIgPyBvd25lci5nZXROYW1lKCkgOiBudWxsO1xuICAgICAgICBpZiAob3duZXJOYW1lICYmICFzdHlsZVdhcm5pbmdzW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBzdHlsZVdhcm5pbmdzW293bmVyTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2FybmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvd25lck5hbWUpIHtcbiAgICAgICAgICB2YXIgd2FybmluZ3MgPSBzdHlsZVdhcm5pbmdzW293bmVyTmFtZV07XG4gICAgICAgICAgd2FybmVkID0gd2FybmluZ3NbbmFtZV07XG4gICAgICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgICAgIHdhcm5pbmdzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2EgYCVzYCB0YWcgKG93bmVyOiBgJXNgKSB3YXMgcGFzc2VkIGEgbnVtZXJpYyBzdHJpbmcgdmFsdWUgJyArICdmb3IgQ1NTIHByb3BlcnR5IGAlc2AgKHZhbHVlOiBgJXNgKSB3aGljaCB3aWxsIGJlIHRyZWF0ZWQgJyArICdhcyBhIHVuaXRsZXNzIG51bWJlciBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIFJlYWN0LicsIGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQudHlwZSwgb3duZXJOYW1lIHx8ICd1bmtub3duJywgbmFtZSwgdmFsdWUpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICB9XG4gIHJldHVybiB2YWx1ZSArICdweCc7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRhbmdlcm91c1N0eWxlVmFsdWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvZGFuZ2Vyb3VzU3R5bGVWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIENTU1Byb3BlcnR5XG4gKi9cblxuLyoqXG4gKiBDU1MgcHJvcGVydGllcyB3aGljaCBhY2NlcHQgbnVtYmVycyBidXQgYXJlIG5vdCBpbiB1bml0cyBvZiBcInB4XCIuXG4gKi9cblxudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3JkZXJJbWFnZU91dHNldDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VTbGljZTogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZFJvd1N0YXJ0OiB0cnVlLFxuICBncmlkUm93RW5kOiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBncmlkQ29sdW1uU3RhcnQ6IHRydWUsXG4gIGdyaWRDb2x1bW5FbmQ6IHRydWUsXG4gIGZvbnRXZWlnaHQ6IHRydWUsXG4gIGxpbmVDbGFtcDogdHJ1ZSxcbiAgbGluZUhlaWdodDogdHJ1ZSxcbiAgb3BhY2l0eTogdHJ1ZSxcbiAgb3JkZXI6IHRydWUsXG4gIG9ycGhhbnM6IHRydWUsXG4gIHRhYlNpemU6IHRydWUsXG4gIHdpZG93czogdHJ1ZSxcbiAgekluZGV4OiB0cnVlLFxuICB6b29tOiB0cnVlLFxuXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IHRydWUsXG4gIGZsb29kT3BhY2l0eTogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZURhc2hhcnJheTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWVcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCB2ZW5kb3Itc3BlY2lmaWMgcHJlZml4LCBlZzogV2Via2l0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgc3R5bGUgbmFtZSwgZWc6IHRyYW5zaXRpb25EdXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gICAqIFdlYmtpdFRyYW5zaXRpb25EdXJhdGlvblxuICAgKi9cbn07ZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdtcycsICdNb3onLCAnTyddO1xuXG4vLyBVc2luZyBPYmplY3Qua2V5cyBoZXJlLCBvciBlbHNlIHRoZSB2YW5pbGxhIGZvci1pbiBsb29wIG1ha2VzIElFOCBnbyBpbnRvIGFuXG4vLyBpbmZpbml0ZSBsb29wLCBiZWNhdXNlIGl0IGl0ZXJhdGVzIG92ZXIgdGhlIG5ld2x5IGFkZGVkIHByb3BzIHRvby5cbk9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIE1vc3Qgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgdW5zZXQgYnkgZG9pbmcgLnN0eWxlW3Byb3BdID0gJycgYnV0IElFOFxuICogZG9lc24ndCBsaWtlIGRvaW5nIHRoYXQgd2l0aCBzaG9ydGhhbmQgcHJvcGVydGllcyBzbyBmb3IgdGhlIHByb3BlcnRpZXMgdGhhdFxuICogSUU4IGJyZWFrcyBvbiwgd2hpY2ggYXJlIGxpc3RlZCBoZXJlLCB3ZSBpbnN0ZWFkIHVuc2V0IGVhY2ggb2YgdGhlXG4gKiBpbmRpdmlkdWFsIHByb3BlcnRpZXMuIFNlZSBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM4NS5cbiAqIFRoZSA0LXZhbHVlICdjbG9jaycgcHJvcGVydGllcyBsaWtlIG1hcmdpbiwgcGFkZGluZywgYm9yZGVyLXdpZHRoIHNlZW0gdG9cbiAqIGJlaGF2ZSB3aXRob3V0IGFueSBwcm9ibGVtcy4gQ3VyaW91c2x5LCBsaXN0LXN0eWxlIHdvcmtzIHRvbyB3aXRob3V0IGFueVxuICogc3BlY2lhbCBwcm9kZGluZy5cbiAqL1xudmFyIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9ucyA9IHtcbiAgYmFja2dyb3VuZDoge1xuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiB0cnVlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IHRydWVcbiAgfSxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIGJvcmRlcldpZHRoOiB0cnVlLFxuICAgIGJvcmRlclN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIGJvcmRlckJvdHRvbVdpZHRoOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbVN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckxlZnQ6IHtcbiAgICBib3JkZXJMZWZ0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyTGVmdFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckxlZnRDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJSaWdodDoge1xuICAgIGJvcmRlclJpZ2h0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyUmlnaHRTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJSaWdodENvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlclRvcDoge1xuICAgIGJvcmRlclRvcFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlclRvcFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlclRvcENvbG9yOiB0cnVlXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBmb250U3R5bGU6IHRydWUsXG4gICAgZm9udFZhcmlhbnQ6IHRydWUsXG4gICAgZm9udFdlaWdodDogdHJ1ZSxcbiAgICBmb250U2l6ZTogdHJ1ZSxcbiAgICBsaW5lSGVpZ2h0OiB0cnVlLFxuICAgIGZvbnRGYW1pbHk6IHRydWVcbiAgfSxcbiAgb3V0bGluZToge1xuICAgIG91dGxpbmVXaWR0aDogdHJ1ZSxcbiAgICBvdXRsaW5lU3R5bGU6IHRydWUsXG4gICAgb3V0bGluZUNvbG9yOiB0cnVlXG4gIH1cbn07XG5cbnZhciBDU1NQcm9wZXJ0eSA9IHtcbiAgaXNVbml0bGVzc051bWJlcjogaXNVbml0bGVzc051bWJlcixcbiAgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zOiBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENTU1Byb3BlcnR5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL0NTU1Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGh5cGhlbmF0ZSA9IHJlcXVpcmUoJy4vaHlwaGVuYXRlJyk7XG5cbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxuICogICA8IFwiLW1vei10cmFuc2l0aW9uXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ21zVHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXG4gKlxuICogQXMgTW9kZXJuaXpyIHN1Z2dlc3RzIChodHRwOi8vbW9kZXJuaXpyLmNvbS9kb2NzLyNwcmVmaXhlZCksIGFuIGBtc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG52YXIgX3VwcGVyY2FzZVBhdHRlcm4gPSAvKFtBLVpdKS9nO1xuXG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIHN0cmluZywgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICpcbiAqIEZvciBDU1Mgc3R5bGUgbmFtZXMsIHVzZSBgaHlwaGVuYXRlU3R5bGVOYW1lYCBpbnN0ZWFkIHdoaWNoIHdvcmtzIHByb3Blcmx5XG4gKiB3aXRoIGFsbCB2ZW5kb3IgcHJlZml4ZXMsIGluY2x1ZGluZyBgbXNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHlwaGVuYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoX3VwcGVyY2FzZVBhdHRlcm4sICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9oeXBoZW5hdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqIEB0eXBlY2hlY2tzIHN0YXRpYy1vbmx5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1lbW9pemVzIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIHN0cmluZyBhcmd1bWVudC5cbiAqL1xuXG5mdW5jdGlvbiBtZW1vaXplU3RyaW5nT25seShjYWxsYmFjaykge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoIWNhY2hlLmhhc093blByb3BlcnR5KHN0cmluZykpIHtcbiAgICAgIGNhY2hlW3N0cmluZ10gPSBjYWxsYmFjay5jYWxsKHRoaXMsIHN0cmluZyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZVtzdHJpbmddO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVTdHJpbmdPbmx5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY2xlYW47XG4vLyBSZXR1cm5zIHRydWUgZm9yIG51bGwsIGZhbHNlLCB1bmRlZmluZWQgYW5kIHt9XG5mdW5jdGlvbiBpc0ZhbHN5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSB8fCAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBjbGVhbk9iamVjdChvYmplY3QpIHtcbiAgaWYgKGlzRmFsc3kob2JqZWN0KSkgcmV0dXJuIG51bGw7XG4gIGlmICgodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgIT09ICdvYmplY3QnKSByZXR1cm4gb2JqZWN0O1xuXG4gIHZhciBhY2MgPSB7fSxcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgaGFzRmFsc3kgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0W2tleXNbaV1dO1xuICAgIHZhciBmaWx0ZXJlZFZhbHVlID0gY2xlYW4odmFsdWUpO1xuICAgIGlmIChmaWx0ZXJlZFZhbHVlID09PSBudWxsIHx8IGZpbHRlcmVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBoYXNGYWxzeSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBhY2Nba2V5c1tpXV0gPSBmaWx0ZXJlZFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMoYWNjKS5sZW5ndGggPT09IDAgPyBudWxsIDogaGFzRmFsc3kgPyBhY2MgOiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGNsZWFuQXJyYXkocnVsZXMpIHtcbiAgdmFyIGhhc0ZhbHN5ID0gZmFsc2U7XG4gIHZhciBmaWx0ZXJlZCA9IFtdO1xuICBydWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgdmFyIGZpbHRlcmVkUnVsZSA9IGNsZWFuKHJ1bGUpO1xuICAgIGlmIChmaWx0ZXJlZFJ1bGUgPT09IG51bGwgfHwgZmlsdGVyZWRSdWxlICE9PSBydWxlKSB7XG4gICAgICBoYXNGYWxzeSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGZpbHRlcmVkLnB1c2goZmlsdGVyZWRSdWxlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWQubGVuZ3RoID09IDAgPyBudWxsIDogaGFzRmFsc3kgPyBmaWx0ZXJlZCA6IHJ1bGVzO1xufVxuXG4vLyBUYWtlcyBzdHlsZSBhcnJheSBvciBvYmplY3QgcHJvdmlkZWQgYnkgdXNlciBhbmQgY2xlYXJzIGFsbCB0aGUgZmFsc3kgZGF0YSBcbi8vIElmIHRoZXJlIGlzIG5vIHN0eWxlcyBsZWZ0IGFmdGVyIGZpbHRyYXRpb24gcmV0dXJucyBudWxsXG5mdW5jdGlvbiBjbGVhbihpbnB1dCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBjbGVhbkFycmF5KGlucHV0KSA6IGNsZWFuT2JqZWN0KGlucHV0KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL2NsZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuUGx1Z2luU2V0ID0gUGx1Z2luU2V0O1xuZXhwb3J0cy5mYWxsYmFja3MgPSBmYWxsYmFja3M7XG5leHBvcnRzLmNvbnRlbnRXcmFwID0gY29udGVudFdyYXA7XG5leHBvcnRzLnByZWZpeGVzID0gcHJlZml4ZXM7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucyA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHlPcGVyYXRpb25zJyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNEZXYgPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geCA9PT0gJ2RldmVsb3BtZW50JyB8fCAheDtcbn0ocHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuXG5mdW5jdGlvbiBQbHVnaW5TZXQoaW5pdGlhbCkge1xuICB0aGlzLmZucyA9IGluaXRpYWwgfHwgW107XG59XG5cbigwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KShQbHVnaW5TZXQucHJvdG90eXBlLCB7XG4gIGFkZDogZnVuY3Rpb24gYWRkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICBpZiAoX3RoaXMuZm5zLmluZGV4T2YoZm4pID49IDApIHtcbiAgICAgICAgaWYgKGlzRGV2KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdhZGRpbmcgdGhlIHNhbWUgcGx1Z2luIGFnYWluLCBpZ25vcmluZycpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5mbnMgPSBbZm5dLmNvbmNhdChfdGhpcy5mbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShmbikge1xuICAgIHRoaXMuZm5zID0gdGhpcy5mbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCAhPT0gZm47XG4gICAgfSk7XG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLmZucyA9IFtdO1xuICB9LFxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybShvKSB7XG4gICAgcmV0dXJuIHRoaXMuZm5zLnJlZHVjZShmdW5jdGlvbiAobywgZm4pIHtcbiAgICAgIHJldHVybiBmbihvKTtcbiAgICB9LCBvKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZhbGxiYWNrcyhub2RlKSB7XG4gIHZhciBoYXNBcnJheSA9IE9iamVjdC5rZXlzKG5vZGUuc3R5bGUpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG5vZGUuc3R5bGVbeF0pO1xuICB9KS5pbmRleE9mKHRydWUpID49IDA7XG4gIGlmIChoYXNBcnJheSkge1xuICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG5cbiAgICB2YXIgZmxhdHRlbmVkID0gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAobywga2V5KSB7XG4gICAgICBvW2tleV0gPSBBcnJheS5pc0FycmF5KHN0eWxlW2tleV0pID8gc3R5bGVba2V5XS5qb2luKCc7ICcgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5wcm9jZXNzU3R5bGVOYW1lKShrZXkpICsgJzogJykgOiBzdHlsZVtrZXldO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSwge30pO1xuICAgIC8vIHRvZG8gLSBcbiAgICAvLyBmbGF0dGVuIGFycmF5cyB3aGljaCBoYXZlbid0IGJlZW4gZmxhdHRlbmVkIHlldCBcbiAgICByZXR1cm4gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBub2RlLCB7IHN0eWxlOiBmbGF0dGVuZWQgfSk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbnZhciBjb250ZW50VmFsdWVzID0gWydub3JtYWwnLCAnbm9uZScsICdjb3VudGVyJywgJ29wZW4tcXVvdGUnLCAnY2xvc2UtcXVvdGUnLCAnbm8tb3Blbi1xdW90ZScsICduby1jbG9zZS1xdW90ZScsICdpbml0aWFsJywgJ2luaGVyaXQnXTtcblxuZnVuY3Rpb24gY29udGVudFdyYXAobm9kZSkge1xuICBpZiAobm9kZS5zdHlsZS5jb250ZW50KSB7XG4gICAgdmFyIGNvbnQgPSBub2RlLnN0eWxlLmNvbnRlbnQ7XG4gICAgaWYgKGNvbnRlbnRWYWx1ZXMuaW5kZXhPZihjb250KSA+PSAwKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgaWYgKC9eKGF0dHJ8Y2FsY3xjb3VudGVycz98dXJsKVxcKC8udGVzdChjb250KSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGlmIChjb250LmNoYXJBdCgwKSA9PT0gY29udC5jaGFyQXQoY29udC5sZW5ndGggLSAxKSAmJiAoY29udC5jaGFyQXQoMCkgPT09ICdcIicgfHwgY29udC5jaGFyQXQoMCkgPT09IFwiJ1wiKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbm9kZSwgeyBzdHlsZTogX2V4dGVuZHMoe30sIG5vZGUuc3R5bGUsIHsgY29udGVudDogJ1wiJyArIGNvbnQgKyAnXCInIH0pIH0pO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBwcmVmaXhlcyhub2RlKSB7XG4gIHJldHVybiAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIG5vZGUsIHsgc3R5bGU6ICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBub2RlLnN0eWxlKSkgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2xhbW9yL2xpYi9wbHVnaW5zLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcmVmaXhlcjtcblxudmFyIF9zdGF0aWNEYXRhID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9zdGF0aWNEYXRhJyk7XG5cbnZhciBfc3RhdGljRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0aWNEYXRhKTtcblxudmFyIF9wcmVmaXhQcm9wZXJ0eSA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9wcmVmaXhQcm9wZXJ0eScpO1xuXG52YXIgX3ByZWZpeFByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFByb3BlcnR5KTtcblxudmFyIF9wcmVmaXhWYWx1ZSA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9wcmVmaXhWYWx1ZScpO1xuXG52YXIgX3ByZWZpeFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFZhbHVlKTtcblxudmFyIF9jdXJzb3IgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvY3Vyc29yJyk7XG5cbnZhciBfY3Vyc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1cnNvcik7XG5cbnZhciBfY3Jvc3NGYWRlID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2Nyb3NzRmFkZScpO1xuXG52YXIgX2Nyb3NzRmFkZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZhZGUpO1xuXG52YXIgX2ZpbHRlciA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9maWx0ZXInKTtcblxudmFyIF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmlsdGVyKTtcblxudmFyIF9mbGV4ID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9mbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXgpO1xuXG52YXIgX2ZsZXhib3hPbGQgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleGJveE9sZCcpO1xuXG52YXIgX2ZsZXhib3hPbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveE9sZCk7XG5cbnZhciBfZ3JhZGllbnQgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZ3JhZGllbnQnKTtcblxudmFyIF9ncmFkaWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmFkaWVudCk7XG5cbnZhciBfaW1hZ2VTZXQgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvaW1hZ2VTZXQnKTtcblxudmFyIF9pbWFnZVNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbWFnZVNldCk7XG5cbnZhciBfcG9zaXRpb24gPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvcG9zaXRpb24nKTtcblxudmFyIF9wb3NpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbik7XG5cbnZhciBfc2l6aW5nID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3NpemluZycpO1xuXG52YXIgX3NpemluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaXppbmcpO1xuXG52YXIgX3RyYW5zaXRpb24gPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvdHJhbnNpdGlvbicpO1xuXG52YXIgX3RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwbHVnaW5zID0gW19jcm9zc0ZhZGUyLmRlZmF1bHQsIF9jdXJzb3IyLmRlZmF1bHQsIF9maWx0ZXIyLmRlZmF1bHQsIF9mbGV4Ym94T2xkMi5kZWZhdWx0LCBfZ3JhZGllbnQyLmRlZmF1bHQsIF9pbWFnZVNldDIuZGVmYXVsdCwgX3Bvc2l0aW9uMi5kZWZhdWx0LCBfc2l6aW5nMi5kZWZhdWx0LCBfdHJhbnNpdGlvbjIuZGVmYXVsdCwgX2ZsZXgyLmRlZmF1bHRdOyAvLyBjdXN0b20gZmFjYWRlIGZvciBpbmxpbmUtc3R5bGUtcHJlZml4ZXJcblxudmFyIHByZWZpeE1hcCA9IF9zdGF0aWNEYXRhMi5kZWZhdWx0LnByZWZpeE1hcDtcblxuZnVuY3Rpb24gcHJlZml4ZXIoc3R5bGUpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gc3R5bGUpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wZXJ0eV07XG5cbiAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSAoMCwgX3ByZWZpeFZhbHVlMi5kZWZhdWx0KShwbHVnaW5zLCBwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBwcmVmaXhNYXApO1xuXG4gICAgLy8gb25seSBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IHdhcyB0b3VjaGVkXG4gICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgIGlmIChwcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgc3R5bGVbcHJvcGVydHldID0gcHJvY2Vzc2VkVmFsdWU7XG4gICAgfVxuXG4gICAgKDAsIF9wcmVmaXhQcm9wZXJ0eTIuZGVmYXVsdCkocHJlZml4TWFwLCBwcm9wZXJ0eSwgc3R5bGUpO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbGFtb3IvbGliL3ByZWZpeGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIHcgPSBbXCJXZWJraXRcIl07XG52YXIgbSA9IFtcIk1velwiXTtcbnZhciBtcyA9IFtcIm1zXCJdO1xudmFyIHdtID0gW1wiV2Via2l0XCIsIFwiTW96XCJdO1xudmFyIHdtcyA9IFtcIldlYmtpdFwiLCBcIm1zXCJdO1xudmFyIHdtbXMgPSBbXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiXTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBwbHVnaW5zOiBbXSxcbiAgcHJlZml4TWFwOiB7IFwiYXBwZWFyYW5jZVwiOiB3bSwgXCJ1c2VyU2VsZWN0XCI6IHdtbXMsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogdywgXCJ0ZXh0RW1waGFzaXNcIjogdywgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiB3LCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IHcsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IHcsIFwiY2xpcFBhdGhcIjogdywgXCJtYXNrSW1hZ2VcIjogdywgXCJtYXNrTW9kZVwiOiB3LCBcIm1hc2tSZXBlYXRcIjogdywgXCJtYXNrUG9zaXRpb25cIjogdywgXCJtYXNrQ2xpcFwiOiB3LCBcIm1hc2tPcmlnaW5cIjogdywgXCJtYXNrU2l6ZVwiOiB3LCBcIm1hc2tDb21wb3NpdGVcIjogdywgXCJtYXNrXCI6IHcsIFwibWFza0JvcmRlclNvdXJjZVwiOiB3LCBcIm1hc2tCb3JkZXJNb2RlXCI6IHcsIFwibWFza0JvcmRlclNsaWNlXCI6IHcsIFwibWFza0JvcmRlcldpZHRoXCI6IHcsIFwibWFza0JvcmRlck91dHNldFwiOiB3LCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogdywgXCJtYXNrQm9yZGVyXCI6IHcsIFwibWFza1R5cGVcIjogdywgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHcsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHcsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHcsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB3LCBcImZpbHRlclwiOiB3LCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdywgXCJicmVha0FmdGVyXCI6IHdtbXMsIFwiYnJlYWtCZWZvcmVcIjogd21tcywgXCJicmVha0luc2lkZVwiOiB3bW1zLCBcImNvbHVtbkNvdW50XCI6IHdtLCBcImNvbHVtbkZpbGxcIjogd20sIFwiY29sdW1uR2FwXCI6IHdtLCBcImNvbHVtblJ1bGVcIjogd20sIFwiY29sdW1uUnVsZUNvbG9yXCI6IHdtLCBcImNvbHVtblJ1bGVTdHlsZVwiOiB3bSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogd20sIFwiY29sdW1uc1wiOiB3bSwgXCJjb2x1bW5TcGFuXCI6IHdtLCBcImNvbHVtbldpZHRoXCI6IHdtLCBcImZsZXhcIjogdywgXCJmbGV4QmFzaXNcIjogdywgXCJmbGV4RGlyZWN0aW9uXCI6IHcsIFwiZmxleEdyb3dcIjogdywgXCJmbGV4Rmxvd1wiOiB3LCBcImZsZXhTaHJpbmtcIjogdywgXCJmbGV4V3JhcFwiOiB3LCBcImFsaWduQ29udGVudFwiOiB3LCBcImFsaWduSXRlbXNcIjogdywgXCJhbGlnblNlbGZcIjogdywgXCJqdXN0aWZ5Q29udGVudFwiOiB3LCBcIm9yZGVyXCI6IHcsIFwidHJhbnNmb3JtXCI6IHcsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHcsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB3LCBcInRyYW5zZm9ybU9yaWdpbllcIjogdywgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogdywgXCJwZXJzcGVjdGl2ZVwiOiB3LCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IHcsIFwidHJhbnNmb3JtU3R5bGVcIjogdywgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IHcsIFwiYW5pbWF0aW9uXCI6IHcsIFwiYW5pbWF0aW9uRGVsYXlcIjogdywgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogdywgXCJhbmltYXRpb25GaWxsTW9kZVwiOiB3LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IHcsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdywgXCJhbmltYXRpb25OYW1lXCI6IHcsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IHcsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogdywgXCJiYWNrZHJvcEZpbHRlclwiOiB3LCBcImZvbnRLZXJuaW5nXCI6IHcsIFwic2Nyb2xsU25hcFR5cGVcIjogd21zLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHdtcywgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB3bXMsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IHdtcywgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB3bXMsIFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOiB3LCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogdywgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiB3LCBcImh5cGhlbnNcIjogd21tcywgXCJmbG93SW50b1wiOiB3bXMsIFwiZmxvd0Zyb21cIjogd21zLCBcInJlZ2lvbkZyYWdtZW50XCI6IHdtcywgXCJ0ZXh0QWxpZ25MYXN0XCI6IG0sIFwidGFiU2l6ZVwiOiBtLCBcIndyYXBGbG93XCI6IG1zLCBcIndyYXBUaHJvdWdoXCI6IG1zLCBcIndyYXBNYXJnaW5cIjogbXMsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiBtcywgXCJncmlkVGVtcGxhdGVSb3dzXCI6IG1zLCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IG1zLCBcImdyaWRUZW1wbGF0ZVwiOiBtcywgXCJncmlkQXV0b0NvbHVtbnNcIjogbXMsIFwiZ3JpZEF1dG9Sb3dzXCI6IG1zLCBcImdyaWRBdXRvRmxvd1wiOiBtcywgXCJncmlkXCI6IG1zLCBcImdyaWRSb3dTdGFydFwiOiBtcywgXCJncmlkQ29sdW1uU3RhcnRcIjogbXMsIFwiZ3JpZFJvd0VuZFwiOiBtcywgXCJncmlkUm93XCI6IG1zLCBcImdyaWRDb2x1bW5cIjogbXMsIFwiZ3JpZENvbHVtbkVuZFwiOiBtcywgXCJncmlkQ29sdW1uR2FwXCI6IG1zLCBcImdyaWRSb3dHYXBcIjogbXMsIFwiZ3JpZEFyZWFcIjogbXMsIFwiZ3JpZEdhcFwiOiBtcywgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB3bXMsIFwiYm9yZGVySW1hZ2VcIjogdywgXCJib3JkZXJJbWFnZU91dHNldFwiOiB3LCBcImJvcmRlckltYWdlUmVwZWF0XCI6IHcsIFwiYm9yZGVySW1hZ2VTbGljZVwiOiB3LCBcImJvcmRlckltYWdlU291cmNlXCI6IHcsIFwiYm9yZGVySW1hZ2VXaWR0aFwiOiB3LCBcInRyYW5zaXRpb25EZWxheVwiOiB3LCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiB3LCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiB3LCBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiB3IH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvc3RhdGljRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlZml4UHJvcGVydHk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4vY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZVN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHByZWZpeFByb3BlcnR5KHByZWZpeFByb3BlcnRpZXMsIHByb3BlcnR5LCBzdHlsZSkge1xuICBpZiAocHJlZml4UHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICB2YXIgcmVxdWlyZWRQcmVmaXhlcyA9IHByZWZpeFByb3BlcnRpZXNbcHJvcGVydHldO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByZXF1aXJlZFByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBzdHlsZVtyZXF1aXJlZFByZWZpeGVzW2ldICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gc3R5bGVbcHJvcGVydHldO1xuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL3ByZWZpeFByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeFZhbHVlO1xuZnVuY3Rpb24gcHJlZml4VmFsdWUocGx1Z2lucywgcHJvcGVydHksIHZhbHVlLCBzdHlsZSwgbWV0YURhdGEpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBsdWdpbnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSBwbHVnaW5zW2ldKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIG1ldGFEYXRhXG5cbiAgICAvLyB3ZSBjYW4gc3RvcCBwcm9jZXNzaW5nIGlmIGEgdmFsdWUgaXMgcmV0dXJuZWRcbiAgICAvLyBhcyBhbGwgcGx1Z2luIGNyaXRlcmlhIGFyZSB1bmlxdWVcbiAgICApO2lmIChwcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHByb2Nlc3NlZFZhbHVlO1xuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvcHJlZml4VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnNvcjtcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5cbnZhciB2YWx1ZXMgPSB7XG4gICd6b29tLWluJzogdHJ1ZSxcbiAgJ3pvb20tb3V0JzogdHJ1ZSxcbiAgZ3JhYjogdHJ1ZSxcbiAgZ3JhYmJpbmc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGN1cnNvcihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jdXJzb3IuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyb3NzRmFkZTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1jcm9zcy1mYWRlXG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJyddO1xuZnVuY3Rpb24gY3Jvc3NGYWRlKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdjcm9zcy1mYWRlKCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9jcm9zcy1mYWRlXFwoL2csIHByZWZpeCArICdjcm9zcy1mYWRlKCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvY3Jvc3NGYWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaWx0ZXI7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWNzcy1maWx0ZXItZnVuY3Rpb25cbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnJ107XG5mdW5jdGlvbiBmaWx0ZXIocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2ZpbHRlcignKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvZmlsdGVyXFwoL2csIHByZWZpeCArICdmaWx0ZXIoJyk7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9maWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXg7XG52YXIgdmFsdWVzID0ge1xuICBmbGV4OiBbJy13ZWJraXQtYm94JywgJy1tb3otYm94JywgJy1tcy1mbGV4Ym94JywgJy13ZWJraXQtZmxleCcsICdmbGV4J10sXG4gICdpbmxpbmUtZmxleCc6IFsnLXdlYmtpdC1pbmxpbmUtYm94JywgJy1tb3otaW5saW5lLWJveCcsICctbXMtaW5saW5lLWZsZXhib3gnLCAnLXdlYmtpdC1pbmxpbmUtZmxleCcsICdpbmxpbmUtZmxleCddXG59O1xuXG5mdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlc1t2YWx1ZV07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZSdcbn07XG5cbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnV2Via2l0Qm94QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJ1xufTtcblxuZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2ZsZXhEaXJlY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsdWUuaW5kZXhPZignY29sdW1uJykgPiAtMSkge1xuICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5kZXhPZigncmV2ZXJzZScpID4gLTEpIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdyZXZlcnNlJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuV2Via2l0Qm94RGlyZWN0aW9uID0gJ25vcm1hbCc7XG4gICAgfVxuICB9XG4gIGlmIChhbHRlcm5hdGl2ZVByb3BzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHN0eWxlW2FsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldXSA9IGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hPbGQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdyYWRpZW50O1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5cbnZhciB2YWx1ZXMgPSAvbGluZWFyLWdyYWRpZW50fHJhZGlhbC1ncmFkaWVudHxyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50fHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQvO1xuXG5mdW5jdGlvbiBncmFkaWVudChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWVzLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9ncmFkaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaW1hZ2VTZXQ7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWNzcy1pbWFnZS1zZXRcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnJ107XG5mdW5jdGlvbiBpbWFnZVNldChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignaW1hZ2Utc2V0KCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9pbWFnZS1zZXRcXCgvZywgcHJlZml4ICsgJ2ltYWdlLXNldCgnKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ltYWdlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwb3NpdGlvbjtcbmZ1bmN0aW9uIHBvc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knKSB7XG4gICAgcmV0dXJuIFsnLXdlYmtpdC1zdGlja3knLCAnc3RpY2t5J107XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9wb3NpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2l6aW5nO1xudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICcnXTtcblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xudmFyIHZhbHVlcyA9IHtcbiAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgJ21heC1jb250ZW50JzogdHJ1ZSxcbiAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgJ2NvbnRhaW4tZmxvYXRzJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gc2l6aW5nKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvc2l6aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9oeXBoZW5hdGVQcm9wZXJ0eScpO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVByb3BlcnR5KTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBpdGFsaXplU3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IHRydWUsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uOiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbn07XG5cblxudmFyIHByZWZpeE1hcHBpbmcgPSB7XG4gIFdlYmtpdDogJy13ZWJraXQtJyxcbiAgTW96OiAnLW1vei0nLFxuICBtczogJy1tcy0nXG59O1xuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZSh2YWx1ZSwgcHJvcGVydHlQcmVmaXhNYXApIHtcbiAgaWYgKCgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvLyBvbmx5IHNwbGl0IG11bHRpIHZhbHVlcywgbm90IGN1YmljIGJlemllcnNcbiAgdmFyIG11bHRpcGxlVmFsdWVzID0gdmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZyk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG11bHRpcGxlVmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHNpbmdsZVZhbHVlID0gbXVsdGlwbGVWYWx1ZXNbaV07XG4gICAgdmFyIHZhbHVlcyA9IFtzaW5nbGVWYWx1ZV07XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydHlQcmVmaXhNYXApIHtcbiAgICAgIHZhciBkYXNoQ2FzZVByb3BlcnR5ID0gKDAsIF9oeXBoZW5hdGVQcm9wZXJ0eTIuZGVmYXVsdCkocHJvcGVydHkpO1xuXG4gICAgICBpZiAoc2luZ2xlVmFsdWUuaW5kZXhPZihkYXNoQ2FzZVByb3BlcnR5KSA+IC0xICYmIGRhc2hDYXNlUHJvcGVydHkgIT09ICdvcmRlcicpIHtcbiAgICAgICAgdmFyIHByZWZpeGVzID0gcHJvcGVydHlQcmVmaXhNYXBbcHJvcGVydHldO1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgcExlbiA9IHByZWZpeGVzLmxlbmd0aDsgaiA8IHBMZW47ICsraikge1xuICAgICAgICAgIC8vIGpvaW4gYWxsIHByZWZpeGVzIGFuZCBjcmVhdGUgYSBuZXcgdmFsdWVcbiAgICAgICAgICB2YWx1ZXMudW5zaGlmdChzaW5nbGVWYWx1ZS5yZXBsYWNlKGRhc2hDYXNlUHJvcGVydHksIHByZWZpeE1hcHBpbmdbcHJlZml4ZXNbal1dICsgZGFzaENhc2VQcm9wZXJ0eSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbXVsdGlwbGVWYWx1ZXNbaV0gPSB2YWx1ZXMuam9pbignLCcpO1xuICB9XG5cbiAgcmV0dXJuIG11bHRpcGxlVmFsdWVzLmpvaW4oJywnKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbihwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBwcm9wZXJ0eVByZWZpeE1hcCkge1xuICAvLyBhbHNvIGNoZWNrIGZvciBhbHJlYWR5IHByZWZpeGVkIHRyYW5zaXRpb25zXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgdmFyIG91dHB1dFZhbHVlID0gcHJlZml4VmFsdWUodmFsdWUsIHByb3BlcnR5UHJlZml4TWFwXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICApO3ZhciB3ZWJraXRPdXRwdXQgPSBvdXRwdXRWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuICEvLW1vei18LW1zLS8udGVzdCh2YWwpO1xuICAgIH0pLmpvaW4oJywnKTtcblxuICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdXZWJraXQnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gd2Via2l0T3V0cHV0O1xuICAgIH1cblxuICAgIHZhciBtb3pPdXRwdXQgPSBvdXRwdXRWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuICEvLXdlYmtpdC18LW1zLS8udGVzdCh2YWwpO1xuICAgIH0pLmpvaW4oJywnKTtcblxuICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdNb3onKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbW96T3V0cHV0O1xuICAgIH1cblxuICAgIHN0eWxlWydXZWJraXQnICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gd2Via2l0T3V0cHV0O1xuICAgIHN0eWxlWydNb3onICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gbW96T3V0cHV0O1xuICAgIHJldHVybiBvdXRwdXRWYWx1ZTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3RyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGh5cGhlbmF0ZVByb3BlcnR5O1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiAoMCwgX2h5cGhlbmF0ZVN0eWxlTmFtZTIuZGVmYXVsdCkocHJvcGVydHkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWluLWpzLXV0aWxzL2xpYi9oeXBoZW5hdGVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbnZhciBjYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZyBpbiBjYWNoZVxuICAgID8gY2FjaGVbc3RyaW5nXVxuICAgIDogY2FjaGVbc3RyaW5nXSA9IHN0cmluZ1xuICAgICAgLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgJy0kJicpXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRvSGFzaDtcbi8vIG11cm11cmhhc2gyIHZpYSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yYXljbW9yZ2FuLzU4ODQyM1xuXG5mdW5jdGlvbiBkb0hhc2goc3RyLCBzZWVkKSB7XG4gIHZhciBtID0gMHg1YmQxZTk5NTtcbiAgdmFyIHIgPSAyNDtcbiAgdmFyIGggPSBzZWVkIF4gc3RyLmxlbmd0aDtcbiAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xuXG4gIHdoaWxlIChsZW5ndGggPj0gNCkge1xuICAgIHZhciBrID0gVUludDMyKHN0ciwgY3VycmVudEluZGV4KTtcblxuICAgIGsgPSBVbXVsMzIoaywgbSk7XG4gICAgayBePSBrID4+PiByO1xuICAgIGsgPSBVbXVsMzIoaywgbSk7XG5cbiAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgIGggXj0gaztcblxuICAgIGN1cnJlbnRJbmRleCArPSA0O1xuICAgIGxlbmd0aCAtPSA0O1xuICB9XG5cbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IFVJbnQxNihzdHIsIGN1cnJlbnRJbmRleCk7XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGN1cnJlbnRJbmRleCArIDIpIDw8IDE2O1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSBVSW50MTYoc3RyLCBjdXJyZW50SW5kZXgpO1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChjdXJyZW50SW5kZXgpO1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9IFVtdWwzMihoLCBtKTtcbiAgaCBePSBoID4+PiAxNTtcblxuICByZXR1cm4gaCA+Pj4gMDtcbn1cblxuZnVuY3Rpb24gVUludDMyKHN0ciwgcG9zKSB7XG4gIHJldHVybiBzdHIuY2hhckNvZGVBdChwb3MrKykgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDgpICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCAxNikgKyAoc3RyLmNoYXJDb2RlQXQocG9zKSA8PCAyNCk7XG59XG5cbmZ1bmN0aW9uIFVJbnQxNihzdHIsIHBvcykge1xuICByZXR1cm4gc3RyLmNoYXJDb2RlQXQocG9zKyspICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCA4KTtcbn1cblxuZnVuY3Rpb24gVW11bDMyKG4sIG0pIHtcbiAgbiA9IG4gfCAwO1xuICBtID0gbSB8IDA7XG4gIHZhciBubG8gPSBuICYgMHhmZmZmO1xuICB2YXIgbmhpID0gbiA+Pj4gMTY7XG4gIHZhciByZXMgPSBubG8gKiBtICsgKChuaGkgKiBtICYgMHhmZmZmKSA8PCAxNikgfCAwO1xuICByZXR1cm4gcmVzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsYW1vci9saWIvaGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnbmF0aXZlanN4L2Rpc3QvbmF0aXZlanN4LXByb3RvdHlwZXMuanMnKTtcbmltcG9ydCBhcmVhcyBmcm9tIFwiLi9hcmVhcy5qc29uXCI7IC8vQ29tZXMgZnJvbSBcIi4uL2RhdGEvdG9qc29uLmpzXCJcbmltcG9ydCBzdGF0cyBmcm9tIFwiLi9zdGF0cy5qc29uXCI7IC8vQ29tZXMgZnJvbSBcIi4uL2RhdGEvdG9zcWwuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBhcmVhcy5tYXAoKHsgbmFtZSwgY29vcmRzIH0pID0+IHtcbiAgY29uc3QgeyByZW50LCBwcmljZSwgY291bnQgfSA9IHN0YXRzLmZpbmQocyA9PiBzLm5hbWUgPT0gbmFtZSk7XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICByZW50LFxuICAgIHByaWNlLFxuICAgIGNvb3JkcyxcbiAgICBjb3VudCxcbiAgICByYXRpbzogcHJpY2UgLyByZW50XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZm8uanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm5hbWVcIjpcIkNoYWNhcml0YVwiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNTk1OTg4NjU3MDYzOSxcImxuZ1wiOi01OC40NTI4MjAwNDkyNzkxfSx7XCJsYXRcIjotMzQuNTk3ODM0NzYxMDI1MixcImxuZ1wiOi01OC40NTU0ODQwODE1OTQ4fSx7XCJsYXRcIjotMzQuNTk2Njc3NDg2NDkwNCxcImxuZ1wiOi01OC40NTkyNzUzODE0MDU2fSx7XCJsYXRcIjotMzQuNTk2NzA0MzA2NzMzNixcImxuZ1wiOi01OC40NjU2MjAxMDk0ODQ1fSx7XCJsYXRcIjotMzQuNTkyNTUxNTE2MzU5MSxcImxuZ1wiOi01OC40NjQzODE3ODUxMDk5fSx7XCJsYXRcIjotMzQuNTkwNTkzMDkyMDk1MixcImxuZ1wiOi01OC40NjY4MjgxNzIyNjk2fSx7XCJsYXRcIjotMzQuNTg2MDQyMTg5MTU0NCxcImxuZ1wiOi01OC40NjE4NzAyMDQzODQzfSx7XCJsYXRcIjotMzQuNTg1NTI3Njg0NTIyMyxcImxuZ1wiOi01OC40NjAzNzg4MDE2OTM4fSx7XCJsYXRcIjotMzQuNTc4Mjk0NjYwMTAwOCxcImxuZ1wiOi01OC40NjA1Mjc2OTkyNjg1fSx7XCJsYXRcIjotMzQuNTc5MDcwNDc5MTM1LFwibG5nXCI6LTU4LjQ1NTM5OTI3OTMxNDR9LHtcImxhdFwiOi0zNC41ODMxOTE4MjEwNzQ2LFwibG5nXCI6LTU4LjQ0NDM5OTc3NjUwOTd9LHtcImxhdFwiOi0zNC41ODQ1MTM1NTE0MTI5LFwibG5nXCI6LTU4LjQ0NDc4NTY1MzR9LHtcImxhdFwiOi0zNC41ODg2Njc3MDA4Mzg0LFwibG5nXCI6LTU4LjQzODUzNTc1MDA4Mzh9LHtcImxhdFwiOi0zNC41OTQzNTM3MzcwMzU4LFwibG5nXCI6LTU4LjQ1MDU0ODg5NDk3MTh9LHtcImxhdFwiOi0zNC41OTU5ODg2NTcwNjM5LFwibG5nXCI6LTU4LjQ1MjgyMDA0OTI3OTF9XV19LHtcIm5hbWVcIjpcIlBhdGVybmFsXCIsXCJjb29yZHNcIjpbW3tcImxhdFwiOi0zNC41OTY1NTc3MDc4MDU4LFwibG5nXCI6LTU4LjQ2NTU3NjgxMjg1NDF9LHtcImxhdFwiOi0zNC41OTY2Nzc0ODY0OTA0LFwibG5nXCI6LTU4LjQ1OTI3NTM4MTQwNTZ9LHtcImxhdFwiOi0zNC41OTc1OTAwNzQ4NDM1LFwibG5nXCI6LTU4LjQ1NjIzNjM3MjMyNTd9LHtcImxhdFwiOi0zNC42MDM4MjkxMzI4MTU3LFwibG5nXCI6LTU4LjQ1ODE2MjkwOTY0MTF9LHtcImxhdFwiOi0zNC42MDQzNzM2ODcwODM4LFwibG5nXCI6LTU4LjQ1ODkzNDgwMDc2ODV9LHtcImxhdFwiOi0zNC42MDE4NjAzOTMxMzMxLFwibG5nXCI6LTU4LjQ2ODkxMjI1OTk5Mjl9LHtcImxhdFwiOi0zNC42MDUzMTExNDIyNDQ3LFwibG5nXCI6LTU4LjQ3NDAxNjYzNjYzNjN9LHtcImxhdFwiOi0zNC42MDA4MjUxMDc2MTA1LFwibG5nXCI6LTU4LjQ3NzQ5ODc2MzM3MjV9LHtcImxhdFwiOi0zNC42MDAxOTk1NzY3OTU1LFwibG5nXCI6LTU4LjQ3NjM5MjMxMjQzNTh9LHtcImxhdFwiOi0zNC41OTk2NzA5NTAyMDEyLFwibG5nXCI6LTU4LjQ3ODgzMTI2NjY2MzN9LHtcImxhdFwiOi0zNC41OTEzMDc1NDM5NzEzLFwibG5nXCI6LTU4LjQ3NTcyNDE0MjIxNTV9LHtcImxhdFwiOi0zNC41ODc0NDUzMTQyNCxcImxuZ1wiOi01OC40NzA4MTUyNjg3NDg4fSx7XCJsYXRcIjotMzQuNTkyNDY3Mjg2ODQzMSxcImxuZ1wiOi01OC40NjQ0MDkxMTk4MjcxfSx7XCJsYXRcIjotMzQuNTk2NTU3NzA3ODA1OCxcImxuZ1wiOi01OC40NjU1NzY4MTI4NTQxfV1dfSx7XCJuYW1lXCI6XCJWaWxsYSBDcmVzcG9cIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjU5NzgyNzMzODMyNDMsXCJsbmdcIjotNTguNDIzNzUyOTgxMzAzN30se1wibGF0XCI6LTM0LjU5ODMyODkzNjQ3MDMsXCJsbmdcIjotNTguNDI3NzczMjE3NTc1OX0se1wibGF0XCI6LTM0LjU5OTEyNjE5MTA0NTUsXCJsbmdcIjotNTguNDI5NDI4ODc5MDIwNH0se1wibGF0XCI6LTM0LjYwMjEzMzgwMDcwNTgsXCJsbmdcIjotNTguNDMyMjQwNjAzODQ1fSx7XCJsYXRcIjotMzQuNjA1NTgyODYzOTkxOCxcImxuZ1wiOi01OC40MzkyMDE2MzYwOTk4fSx7XCJsYXRcIjotMzQuNjA3NjE1NjQ0Mjc0NyxcImxuZ1wiOi01OC40NDYyNDc0MjUzMjE2fSx7XCJsYXRcIjotMzQuNjA0MzczNjg3MDgzOCxcImxuZ1wiOi01OC40NTg5MzQ4MDA3Njg1fSx7XCJsYXRcIjotMzQuNjAzODI5MTMyODE1NyxcImxuZ1wiOi01OC40NTgxNjI5MDk2NDExfSx7XCJsYXRcIjotMzQuNTk3NTkwMDc0ODQzNSxcImxuZ1wiOi01OC40NTYyMzYzNzIzMjU3fSx7XCJsYXRcIjotMzQuNTk3ODM0NzYxMDI1MixcImxuZ1wiOi01OC40NTU0ODQwODE1OTQ4fSx7XCJsYXRcIjotMzQuNTk0MzUzNzM3MDM1OCxcImxuZ1wiOi01OC40NTA1NDg4OTQ5NzE4fSx7XCJsYXRcIjotMzQuNTg4NjY3NzAwODM4NCxcImxuZ1wiOi01OC40Mzg1MzU3NTAwODM4fSx7XCJsYXRcIjotMzQuNTk2MjEwNTE4MDc2NyxcImxuZ1wiOi01OC40MjY5NTAyMjQwNjk3fSx7XCJsYXRcIjotMzQuNTk3NzQ3ODk1Njk2NyxcImxuZ1wiOi01OC40MjMzNjcyMjIyMzUzfSx7XCJsYXRcIjotMzQuNTk3ODI3MzM4MzI0MyxcImxuZ1wiOi01OC40MjM3NTI5ODEzMDM3fV1dfSx7XCJuYW1lXCI6XCJWaWxsYSBkZWwgUGFycXVlXCIsXCJjb29yZHNcIjpbW3tcImxhdFwiOi0zNC42MTQ4NjUyMzk1MjM5LFwibG5nXCI6LTU4LjQ5NDYwOTc1Njg4OTl9LHtcImxhdFwiOi0zNC42MTQzOTEwOTM2NDM3LFwibG5nXCI6LTU4LjQ5NTU3Mjk5NTE0NjZ9LHtcImxhdFwiOi0zNC42MDIzNzg1MzI5MjM0LFwibG5nXCI6LTU4LjUwNjE2NzY2OTc2MTh9LHtcImxhdFwiOi0zNC41OTY3ODg1Mjc3NDI0LFwibG5nXCI6LTU4LjQ5NzEyODIzOTU3NzF9LHtcImxhdFwiOi0zNC41OTc3NTgwODAxMTI3LFwibG5nXCI6LTU4LjQ4MzQ1NjE1NzUwMzF9LHtcImxhdFwiOi0zNC42MDAxOTk1NzY3OTU1LFwibG5nXCI6LTU4LjQ3NjM5MjMxMjQzNTh9LHtcImxhdFwiOi0zNC42MDA4MjUxMDc2MTA1LFwibG5nXCI6LTU4LjQ3NzQ5ODc2MzM3MjV9LHtcImxhdFwiOi0zNC42MDUzMTExNDIyNDQ3LFwibG5nXCI6LTU4LjQ3NDAxNjYzNjYzNjN9LHtcImxhdFwiOi0zNC42MDczNTk3MDQ5MDU0LFwibG5nXCI6LTU4LjQ3NzYxODQwMjMyMDZ9LHtcImxhdFwiOi0zNC42MTAxMzYwNTczNTI0LFwibG5nXCI6LTU4LjQ4ODY1NDMwMjAxMjZ9LHtcImxhdFwiOi0zNC42MTQ4NjUyMzk1MjM5LFwibG5nXCI6LTU4LjQ5NDYwOTc1Njg4OTl9XV19LHtcIm5hbWVcIjpcIkFsbWFncm9cIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjYxNDExNjI1MTU4NTQsXCJsbmdcIjotNTguNDEyODcwMDMxMzA4OX0se1wibGF0XCI6LTM0LjYyMDY0MjMzNDkzODYsXCJsbmdcIjotNTguNDEyNTQzODU5NDk5NX0se1wibGF0XCI6LTM0LjYyMjA3NDUzMjI2OTksXCJsbmdcIjotNTguNDI3Nzk1MzA1OTI1MX0se1wibGF0XCI6LTM0LjYxNTEwNTY4MDg2MTUsXCJsbmdcIjotNTguNDI5MjUyNDc5NDUxNn0se1wibGF0XCI6LTM0LjYxNTQ0OTIxMzg2ODgsXCJsbmdcIjotNTguNDMwMDI4NTM4NzUwN30se1wibGF0XCI6LTM0LjYwNTk0MTM2MDQwMjEsXCJsbmdcIjotNTguNDMwNjY5MTEyMTYzNH0se1wibGF0XCI6LTM0LjYwMjY3MzQ1Njg3OTksXCJsbmdcIjotNTguNDMzMzM0MDg5NzYwNn0se1wibGF0XCI6LTM0LjYwMjEzMzgwMDcwNTgsXCJsbmdcIjotNTguNDMyMjQwNjAzODQ1fSx7XCJsYXRcIjotMzQuNTk5MTI2MTkxMDQ1NSxcImxuZ1wiOi01OC40Mjk0Mjg4NzkwMjA0fSx7XCJsYXRcIjotMzQuNTk3OTQ0MjY4ODY5NixcImxuZ1wiOi01OC40MjY3ODUxOTU4Mzg4fSx7XCJsYXRcIjotMzQuNTk4MDAzMDc2Nzc0OCxcImxuZ1wiOi01OC40MTE5MTg4MDk4MDM4fSx7XCJsYXRcIjotMzQuNjA3MjQ2MzUwNjEzLFwibG5nXCI6LTU4LjQxMzkwODI1MjkwNDV9LHtcImxhdFwiOi0zNC42MDgxOTAwNjM2MDY5LFwibG5nXCI6LTU4LjQxNDY1OTk4MDg4NTF9LHtcImxhdFwiOi0zNC42MTA3MzY0MTkxMDc1LFwibG5nXCI6LTU4LjQxNDQ2NzAzMTI1OTN9LHtcImxhdFwiOi0zNC42MTQxMTYyNTE1ODU0LFwibG5nXCI6LTU4LjQxMjg3MDAzMTMwODl9XV19LHtcIm5hbWVcIjpcIkNhYmFsbGl0b1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjA3MDQ3MDg4NTk2MyxcImxuZ1wiOi01OC40MzA2MDU4MjgzMzA5fSx7XCJsYXRcIjotMzQuNjE1NDQ5MjEzODY4OCxcImxuZ1wiOi01OC40MzAwMjg1Mzg3NTA3fSx7XCJsYXRcIjotMzQuNjE1MTA1NjgwODYxNSxcImxuZ1wiOi01OC40MjkyNTI0Nzk0NTE2fSx7XCJsYXRcIjotMzQuNjI2OTk4NDg0MjQ5MyxcImxuZ1wiOi01OC40MjY3NTU4MTQyMjU5fSx7XCJsYXRcIjotMzQuNjMwNjM5MDk5MDgxOSxcImxuZ1wiOi01OC40NTE1NzYzNzUxMzI5fSx7XCJsYXRcIjotMzQuNjA3MzczMDExNzgwMSxcImxuZ1wiOi01OC40NjI3MDQ2MzIzMTM0fSx7XCJsYXRcIjotMzQuNjA0NDkxODQ0Nzc1LFwibG5nXCI6LTU4LjQ1ODQ3MzkyNTQ1NTl9LHtcImxhdFwiOi0zNC42MDc2MTU2NDQyNzQ3LFwibG5nXCI6LTU4LjQ0NjI0NzQyNTMyMTZ9LHtcImxhdFwiOi0zNC42MDU1ODI4NjM5OTE4LFwibG5nXCI6LTU4LjQzOTIwMTYzNjA5OTh9LHtcImxhdFwiOi0zNC42MDI2NzM0NTY4Nzk5LFwibG5nXCI6LTU4LjQzMzMzNDA4OTc2MDZ9LHtcImxhdFwiOi0zNC42MDU5NDEzNjA0MDIxLFwibG5nXCI6LTU4LjQzMDY2OTExMjE2MzR9LHtcImxhdFwiOi0zNC42MDcwNDcwODg1OTYzLFwibG5nXCI6LTU4LjQzMDYwNTgyODMzMDl9XV19LHtcIm5hbWVcIjpcIlZpbGxhIFNhbnRhIFJpdGFcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjYyNDI4NzE3MjQ3NTcsXCJsbmdcIjotNTguNDgxOTIwMzU5OTgzM30se1wibGF0XCI6LTM0LjYyNDYyOTg2OTI1NjQsXCJsbmdcIjotNTguNDgyNzQyNjQwNDYxNX0se1wibGF0XCI6LTM0LjYxNTAxNjA0MzE5NTgsXCJsbmdcIjotNTguNDk0Nzg1NjMzNTcyNX0se1wibGF0XCI6LTM0LjYxMDEzNjA1NzM1MjQsXCJsbmdcIjotNTguNDg4NjU0MzAyMDEyNn0se1wibGF0XCI6LTM0LjYwODEyNjc1NDI4ODcsXCJsbmdcIjotNTguNDgwNDEwMjg3MDQ4M30se1wibGF0XCI6LTM0LjYxOTE1NTI5NDUyOTQsXCJsbmdcIjotNTguNDcxNjIxMTU4ODM0OH0se1wibGF0XCI6LTM0LjYyNDI4NzE3MjQ3NTcsXCJsbmdcIjotNTguNDgxOTIwMzU5OTgzM31dXX0se1wibmFtZVwiOlwiTW9udGUgQ2FzdHJvXCIsXCJjb29yZHNcIjpbW3tcImxhdFwiOi0zNC42MjQwMzI0MjE2MzIxLFwibG5nXCI6LTU4LjUwMzQ5MjA2MTE1MzR9LHtcImxhdFwiOi0zNC42Mjc1OTQzODA3MDI5LFwibG5nXCI6LTU4LjUwNzI5MzczNzc2Mjh9LHtcImxhdFwiOi0zNC42MjQyNzg2NTM3MDYzLFwibG5nXCI6LTU4LjUxMTY1MTU0ODE4ODF9LHtcImxhdFwiOi0zNC42Mjg0NTAzMjYwMDgsXCJsbmdcIjotNTguNTE2MzgyMjgwNjIxM30se1wibGF0XCI6LTM0LjYyNDQwNTA4NzMzMjYsXCJsbmdcIjotNTguNTIxNjM2NjkxNDIxfSx7XCJsYXRcIjotMzQuNjE2NzMxNjk2NDc2NCxcImxuZ1wiOi01OC41MTMwNDY3MTI3NzA0fSx7XCJsYXRcIjotMzQuNjA5MTI1NzY2NjU1NixcImxuZ1wiOi01OC41MDAxOTI0ODUzNzA1fSx7XCJsYXRcIjotMzQuNjE0MzkxMDkzNjQzNyxcImxuZ1wiOi01OC40OTU1NzI5OTUxNDY2fSx7XCJsYXRcIjotMzQuNjE2NzI4MzQxNDM1OCxcImxuZ1wiOi01OC40OTI2MzYzODQwNDg2fSx7XCJsYXRcIjotMzQuNjIxMzcwNTMzMjAyNSxcImxuZ1wiOi01OC40OTgyMDA4ODAxOTU1fSx7XCJsYXRcIjotMzQuNjI0MDMyNDIxNjMyMSxcImxuZ1wiOi01OC41MDM0OTIwNjExNTM0fV1dfSx7XCJuYW1lXCI6XCJWaWxsYSBSZWFsXCIsXCJjb29yZHNcIjpbW3tcImxhdFwiOi0zNC42MTM5OTk5ODEwNjMsXCJsbmdcIjotNTguNTI1MTE2MDc5NzkxfSx7XCJsYXRcIjotMzQuNjIwMjE1MjE1MTU5MSxcImxuZ1wiOi01OC41MTY5NTAxMjg0N30se1wibGF0XCI6LTM0LjYyNDQwNTA4NzMzMjYsXCJsbmdcIjotNTguNTIxNjM2NjkxNDIxfSx7XCJsYXRcIjotMzQuNjIzNDg2MjMyOTU1MyxcImxuZ1wiOi01OC41MjI4MzIwNTU5NjQ5fSx7XCJsYXRcIjotMzQuNjI3NTIyODAwNTIyNyxcImxuZ1wiOi01OC41MzA4MDI4Nzg5NjA2fSx7XCJsYXRcIjotMzQuNjE1NDkzNjUzNTU4NSxcImxuZ1wiOi01OC41MzE1MTg3NDA1OTF9LHtcImxhdFwiOi0zNC42MTA4OTU2Mzk1OTI2LFwibG5nXCI6LTU4LjUyOTQ2ODk5Njc4MDR9LHtcImxhdFwiOi0zNC42MTM5OTk5ODEwNjMsXCJsbmdcIjotNTguNTI1MTE2MDc5NzkxfV1dfSx7XCJuYW1lXCI6XCJGbG9yZXNcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjY0MjAzOTcxMzQ3MDYsXCJsbmdcIjotNTguNDQ1MjUxNTgyMzc4Mn0se1wibGF0XCI6LTM0LjY0MjgwNjg0Mjg1ODUsXCJsbmdcIjotNTguNDQ0MjQ0MDQ0ODcxOH0se1wibGF0XCI6LTM0LjY0MTc3Nzc1NDYwODksXCJsbmdcIjotNTguNDQzMDc3OTkwMTczNH0se1wibGF0XCI6LTM0LjY0NzM1MjM3OTc0MzUsXCJsbmdcIjotNTguNDM3NDIyMjk1MDgyNX0se1wibGF0XCI6LTM0LjY0NjIzNjg3MjM2MDUsXCJsbmdcIjotNTguNDM0OTIzMDkyMjE3N30se1wibGF0XCI6LTM0LjY0OTg3NDMyNzI0NTIsXCJsbmdcIjotNTguNDMwNDI5ODg2ODY5OH0se1wibGF0XCI6LTM0LjY1NTgwMzQ4OTA3NDgsXCJsbmdcIjotNTguNDM4MDA1NDkxODA2N30se1wibGF0XCI6LTM0LjY1MTE4OTkxMzg1ODMsXCJsbmdcIjotNTguNDQzMzIzOTM1MDExOH0se1wibGF0XCI6LTM0LjY1MDgyMzA3NzM1ODQsXCJsbmdcIjotNTguNDU0NjM2MjM4ODU5NH0se1wibGF0XCI6LTM0LjY1MjI5OTM0NTgyNzcsXCJsbmdcIjotNTguNDU1MDYxNzc4MDc0Mn0se1wibGF0XCI6LTM0LjY1NjgwNjM2MTMzNzgsXCJsbmdcIjotNTguNDYwNDAxNzc3MDQ4NX0se1wibGF0XCI6LTM0LjY1MTQ2ODI1NjY2MDgsXCJsbmdcIjotNTguNDY3MDMzNjI4OTY1MX0se1wibGF0XCI6LTM0LjY0NjE3MDE5NzU5MTcsXCJsbmdcIjotNTguNDYyOTk5MDA4MjMxfSx7XCJsYXRcIjotMzQuNjQxMzk2ODkyNTUxNixcImxuZ1wiOi01OC40NjkyNDIzMzA0NDMxfSx7XCJsYXRcIjotMzQuNjIyMzg0MzA1NzA3MSxcImxuZ1wiOi01OC40Nzc4MDcyMzQxNTY5fSx7XCJsYXRcIjotMzQuNjE3NTYxNjg4NDI3NixcImxuZ1wiOi01OC40Njg2MzUyMTE3MDEyfSx7XCJsYXRcIjotMzQuNjEzODg1NjcxOTYwMixcImxuZ1wiOi01OC40NTk0NDgzNjIwMzc3fSx7XCJsYXRcIjotMzQuNjMwNjM5MDk5MDgxOSxcImxuZ1wiOi01OC40NTE1NzYzNzUxMzI5fSx7XCJsYXRcIjotMzQuNjMxNTAwNTQ3NjY0MixcImxuZ1wiOi01OC40NTQzNzgwNzc3NjM2fSx7XCJsYXRcIjotMzQuNjM3NDY2OTE1OTI0NixcImxuZ1wiOi01OC40NTE0NDEwMDc5NDExfSx7XCJsYXRcIjotMzQuNjQyMDM5NzEzNDcwNixcImxuZ1wiOi01OC40NDUyNTE1ODIzNzgyfV1dfSx7XCJuYW1lXCI6XCJGbG9yZXN0YVwiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjI0MTEwODcxODA1OCxcImxuZ1wiOi01OC40ODMzOTA3MDM2NTgzfSx7XCJsYXRcIjotMzQuNjI0NjI5ODY5MjU2NCxcImxuZ1wiOi01OC40ODI3NDI2NDA0NjE1fSx7XCJsYXRcIjotMzQuNjIyMzg0MzA1NzA3MSxcImxuZ1wiOi01OC40Nzc4MDcyMzQxNTY5fSx7XCJsYXRcIjotMzQuNjM2NjU1MjA0NzEwOSxcImxuZ1wiOi01OC40NzEzMDI5MTQ5MTl9LHtcImxhdFwiOi0zNC42MzczMDgzNjEwMTAzLFwibG5nXCI6LTU4LjQ3MzQ5MjI3NDgxM30se1wibGF0XCI6LTM0LjYzODkzNDcwNjc4MjgsXCJsbmdcIjotNTguNDc2MDcyMzMwNDU1Mn0se1wibGF0XCI6LTM0LjYyMTM3MDUzMzIwMjUsXCJsbmdcIjotNTguNDk4MjAwODgwMTk1NX0se1wibGF0XCI6LTM0LjYxNjcyODM0MTQzNTgsXCJsbmdcIjotNTguNDkyNjM2Mzg0MDQ4Nn0se1wibGF0XCI6LTM0LjYyNDExMDg3MTgwNTgsXCJsbmdcIjotNTguNDgzMzkwNzAzNjU4M31dXX0se1wibmFtZVwiOlwiQ29uc3RpdHVjacOzblwiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjMwNTE0OTkwMjAyNixcImxuZ1wiOi01OC4zNzg2MzAwNzgxNzUzfSx7XCJsYXRcIjotMzQuNjMzMDMxNzQ3MDAyMixcImxuZ1wiOi01OC4zODAxNDMyODE4NTA3fSx7XCJsYXRcIjotMzQuNjMzMDcwMDk3NTAyOCxcImxuZ1wiOi01OC4zODEyNTAzNTg4NDU0fSx7XCJsYXRcIjotMzQuNjMwODQ1MTUyOTYzNyxcImxuZ1wiOi01OC4zODEzMzI3MDU3NTkxfSx7XCJsYXRcIjotMzQuNjMyMjIwNTY1NjIxOSxcImxuZ1wiOi01OC4zODMzOTE1Mjc2MjI1fSx7XCJsYXRcIjotMzQuNjM0MTI0MzkxMzg4NCxcImxuZ1wiOi01OC4zOTAzNTI1OTk1OTczfSx7XCJsYXRcIjotMzQuNjE4MTU5MjIwMDc0NixcImxuZ1wiOi01OC4zOTE2OTY5ODkwNjJ9LHtcImxhdFwiOi0zNC42MTc0NTIzMzA2Mjg1LFwibG5nXCI6LTU4LjM3NzM1Nzk2Mjc3MDd9LHtcImxhdFwiOi0zNC42MjM2MDA1MDcxMzQ2LFwibG5nXCI6LTU4LjM3NzA2NTI1MjQ0NTV9LHtcImxhdFwiOi0zNC42MjczMDE2MTgzNzQ0LFwibG5nXCI6LTU4LjM3NTU3MjkwMzA4Mjh9LHtcImxhdFwiOi0zNC42MjkzMzM0ODIyNTI0LFwibG5nXCI6LTU4LjM3OTA0NDMwOTg4MDl9LHtcImxhdFwiOi0zNC42MzA1MTQ5OTAyMDI2LFwibG5nXCI6LTU4LjM3ODYzMDA3ODE3NTN9XV19LHtcIm5hbWVcIjpcIlNhbiBDcmlzdMOzYmFsXCIsXCJjb29yZHNcIjpbW3tcImxhdFwiOi0zNC42MjE1NTk5NTg5ODUzLFwibG5nXCI6LTU4LjM5MTU1MzY5OTE4NzV9LHtcImxhdFwiOi0zNC42MjcyNTMwMjY3ODUzLFwibG5nXCI6LTU4LjM5MTE2OTgwMTUyMzl9LHtcImxhdFwiOi0zNC42Mjk1MTU5ODc4ODc5LFwibG5nXCI6LTU4LjQwODM2NDQ3ODcyMzZ9LHtcImxhdFwiOi0zNC42MzAzNTU4NjkzNjA1LFwibG5nXCI6LTU4LjQxMTc3OTMxNDgwM30se1wibGF0XCI6LTM0LjYyMjk3NDgxMzU4NTYsXCJsbmdcIjotNTguNDEyMDQxODY4OTcwMX0se1wibGF0XCI6LTM0LjYyMDY0MjMzNDkzODYsXCJsbmdcIjotNTguNDEyNTQzODU5NDk5NX0se1wibGF0XCI6LTM0LjYxODg0MDI2NjQzMDEsXCJsbmdcIjotNTguNDAzNTEyODUxOTI0Mn0se1wibGF0XCI6LTM0LjYxODE1OTIyMDA3NDYsXCJsbmdcIjotNTguMzkxNjk2OTg5MDYyfSx7XCJsYXRcIjotMzQuNjIxNTU5OTU4OTg1MyxcImxuZ1wiOi01OC4zOTE1NTM2OTkxODc1fV1dfSx7XCJuYW1lXCI6XCJCb2Vkb1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjIwNjQyMzM0OTM4NixcImxuZ1wiOi01OC40MTI1NDM4NTk0OTk1fSx7XCJsYXRcIjotMzQuNjIyOTc0ODEzNTg1NixcImxuZ1wiOi01OC40MTIwNDE4Njg5NzAxfSx7XCJsYXRcIjotMzQuNjMyODU2NzU5MDIzMSxcImxuZ1wiOi01OC40MTE1MjA1NjE2MX0se1wibGF0XCI6LTM0LjYzNTIzNzUyNjQ4NTIsXCJsbmdcIjotNTguNDEwNDg4NTUzNTIxMn0se1wibGF0XCI6LTM0LjYzODA5OTM1NTAyNyxcImxuZ1wiOi01OC40MTEyNjA0NDE0OTM0fSx7XCJsYXRcIjotMzQuNjQwMjAwMzc1NjMwNyxcImxuZ1wiOi01OC40MjM0OTE4ODM1NTQ2fSx7XCJsYXRcIjotMzQuNjIyMDc0NTMyMjY5OSxcImxuZ1wiOi01OC40Mjc3OTUzMDU5MjUxfSx7XCJsYXRcIjotMzQuNjIwNjQyMzM0OTM4NixcImxuZ1wiOi01OC40MTI1NDM4NTk0OTk1fV1dfSx7XCJuYW1lXCI6XCJWw6lsZXogU8OhcnNmaWVsZFwiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjMxNDAyNDE2ODAwNCxcImxuZ1wiOi01OC40ODU1NzM1MTc2NjU4fSx7XCJsYXRcIjotMzQuNjM2OTk0Mjc4MzgzNCxcImxuZ1wiOi01OC40Nzg1NDU1NTE3Njk3fSx7XCJsYXRcIjotMzQuNjQxMjk5OTczNjkxNyxcImxuZ1wiOi01OC40ODc4MDU1OTc0Nzk1fSx7XCJsYXRcIjotMzQuNjM2OTYzNTc1Mzc3LFwibG5nXCI6LTU4LjQ5MzMxOTc2Mjg2Mzh9LHtcImxhdFwiOi0zNC42MzY1MTM0MDA2MjcyLFwibG5nXCI6LTU4LjQ5MzExNjIxMjEwMzN9LHtcImxhdFwiOi0zNC42MzY2NDY3NTM4Mjg2LFwibG5nXCI6LTU4LjQ5Mzc5OTE4NDc3MTd9LHtcImxhdFwiOi0zNC42MzE3NzY1NTMzNzM1LFwibG5nXCI6LTU4LjQ5OTk3NzMxNjc5NTJ9LHtcImxhdFwiOi0zNC42MzIyMDc3ODY4NDgxLFwibG5nXCI6LTU4LjUwMTA0MjA5ODU3MDV9LHtcImxhdFwiOi0zNC42Mjc1OTQzODA3MDI5LFwibG5nXCI6LTU4LjUwNzI5MzczNzc2Mjh9LHtcImxhdFwiOi0zNC42MjQwMzI0MjE2MzIxLFwibG5nXCI6LTU4LjUwMzQ5MjA2MTE1MzR9LHtcImxhdFwiOi0zNC42MjEzNzA1MzMyMDI1LFwibG5nXCI6LTU4LjQ5ODIwMDg4MDE5NTV9LHtcImxhdFwiOi0zNC42MzE0MDI0MTY4MDA0LFwibG5nXCI6LTU4LjQ4NTU3MzUxNzY2NTh9XV19LHtcIm5hbWVcIjpcIlZpbGxhIEx1cm9cIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjYzMTgzNDUxOTM4NzIsXCJsbmdcIjotNTguNTAxNTM3NjI0Nzk1NH0se1wibGF0XCI6LTM0LjYzMjIwNzc4Njg0ODEsXCJsbmdcIjotNTguNTAxMDQyMDk4NTcwNX0se1wibGF0XCI6LTM0LjYzMTk1MDY4OTMyNzMsXCJsbmdcIjotNTguNDk5NzA1ODg4MTMyOX0se1wibGF0XCI6LTM0LjYzNjY0Njc1MzgyODYsXCJsbmdcIjotNTguNDkzNzk5MTg0NzcxN30se1wibGF0XCI6LTM0LjYzNjUxMzQwMDYyNzIsXCJsbmdcIjotNTguNDkzMTE2MjEyMTAzM30se1wibGF0XCI6LTM0LjYzNjk2MzU3NTM3NyxcImxuZ1wiOi01OC40OTMzMTk3NjI4NjM4fSx7XCJsYXRcIjotMzQuNjQxMjk5OTczNjkxNyxcImxuZ1wiOi01OC40ODc4MDU1OTc0Nzk1fSx7XCJsYXRcIjotMzQuNjQ0ODQ3OTU5MTA3NixcImxuZ1wiOi01OC40OTUzMDIxODUwMDUyfSx7XCJsYXRcIjotMzQuNjQzNDA5NDUxNjY0OSxcImxuZ1wiOi01OC40OTcxMzc2MTMxNzJ9LHtcImxhdFwiOi0zNC42NDU4MTgxNzA1MTU3LFwibG5nXCI6LTU4LjUwMjI5OTQ5MDc0NTd9LHtcImxhdFwiOi0zNC42NDAwMDgzNDMwOTU2LFwibG5nXCI6LTU4LjUwOTgyMjIzMTI3NzF9LHtcImxhdFwiOi0zNC42MzczNzA5MDg0NjI2LFwibG5nXCI6LTU4LjUxMDUwOTYyNTQxOTN9LHtcImxhdFwiOi0zNC42MzY3MTc4ODQ3OTkzLFwibG5nXCI6LTU4LjUwNTY3MjI2NDUyNDR9LHtcImxhdFwiOi0zNC42MzU4MTI0MzAxMjUsXCJsbmdcIjotNTguNTA2ODE5MzY4ODA3M30se1wibGF0XCI6LTM0LjYzNDgxNzQ5MzU0NSxcImxuZ1wiOi01OC41MTA2NzA3MzczOTczfSx7XCJsYXRcIjotMzQuNjM0NTk5NDE4NzU0OCxcImxuZ1wiOi01OC41MDgzODgzNDc5MjUyfSx7XCJsYXRcIjotMzQuNjI4NDUwMzI2MDA4LFwibG5nXCI6LTU4LjUxNjM4MjI4MDYyMTN9LHtcImxhdFwiOi0zNC42MjQyNzg2NTM3MDYzLFwibG5nXCI6LTU4LjUxMTY1MTU0ODE4ODF9LHtcImxhdFwiOi0zNC42MzE4MzQ1MTkzODcyLFwibG5nXCI6LTU4LjUwMTUzNzYyNDc5NTR9XV19LHtcIm5hbWVcIjpcIlBhcnF1ZSBQYXRyaWNpb3NcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjY0ODMwMjk4NzUwOSxcImxuZ1wiOi01OC40MTAzNjk3Mjk4NTI1fSx7XCJsYXRcIjotMzQuNjQ4NTgyODgwODk2LFwibG5nXCI6LTU4LjQxMjEwMDUzOTY5NjR9LHtcImxhdFwiOi0zNC42NDM0NTUyMTExNTcxLFwibG5nXCI6LTU4LjQxMzQzNjQ0ODYxODV9LHtcImxhdFwiOi0zNC42MzU3MDk0NTI2MjEzLFwibG5nXCI6LTU4LjQxMDUxMTk0NDk5Njl9LHtcImxhdFwiOi0zNC42MzI4NTY3NTkwMjMxLFwibG5nXCI6LTU4LjQxMTUyMDU2MTYxfSx7XCJsYXRcIjotMzQuNjMwMzU1ODY5MzYwNSxcImxuZ1wiOi01OC40MTE3NzkzMTQ4MDN9LHtcImxhdFwiOi0zNC42Mjk1MTU5ODc4ODc5LFwibG5nXCI6LTU4LjQwODM2NDQ3ODcyMzZ9LHtcImxhdFwiOi0zNC42MjcyNTMwMjY3ODUzLFwibG5nXCI6LTU4LjM5MTE2OTgwMTUyMzl9LHtcImxhdFwiOi0zNC42NDAyMDU1MDI0NTksXCJsbmdcIjotNTguMzg5ODgxNDc5ODk4Nn0se1wibGF0XCI6LTM0LjY0MDgyNjUzMTU0MDYsXCJsbmdcIjotNTguMzkxNDcxMjEwOTY5NH0se1wibGF0XCI6LTM0LjY0MjA4NjI0NzczMTUsXCJsbmdcIjotNTguMzkxNDAwMTc0OTg1OX0se1wibGF0XCI6LTM0LjY0NTkxODQ1NTM5NDMsXCJsbmdcIjotNTguNDAwNDkyNDIyOTI5N30se1wibGF0XCI6LTM0LjY0NjM1ODc0MjM4MzUsXCJsbmdcIjotNTguNDAwMzMyNjE0MDM0NX0se1wibGF0XCI6LTM0LjY0NjczMTA2MTE5MTUsXCJsbmdcIjotNTguNDAxMDgzNzMyNzYyNn0se1wibGF0XCI6LTM0LjY0ODMwMjk4NzUwOSxcImxuZ1wiOi01OC40MTAzNjk3Mjk4NTI1fV1dfSx7XCJuYW1lXCI6XCJNYXRhZGVyb3NcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjY3NDUwNTAyNjUxMDIsXCJsbmdcIjotNTguNTAyNTE5NzE2MjMzN30se1wibGF0XCI6LTM0LjY1Njg5MTgwODg2MTksXCJsbmdcIjotNTguNTI1NzczNjI5ODExN30se1wibGF0XCI6LTM0LjY0MzQwOTQ1MTY2NDksXCJsbmdcIjotNTguNDk3MTM3NjEzMTcyfSx7XCJsYXRcIjotMzQuNjU3ODQ0NDU3MTc1MSxcImxuZ1wiOi01OC40Nzg4MTc4MTQ0OTQ2fSx7XCJsYXRcIjotMzQuNjYyNDQ4MTU1NjQwNCxcImxuZ1wiOi01OC40ODU5NDUzMDUxMDYzfSx7XCJsYXRcIjotMzQuNjYzMzQ4NDE1NTE1MyxcImxuZ1wiOi01OC40ODg5NTI0MDgyMDczfSx7XCJsYXRcIjotMzQuNjcxMTgwMzUxNzgyMSxcImxuZ1wiOi01OC40OTcwMzk5MDg2NDh9LHtcImxhdFwiOi0zNC42NzQ1MDUwMjY1MTAyLFwibG5nXCI6LTU4LjUwMjUxOTcxNjIzMzd9XV19LHtcIm5hbWVcIjpcIlZpbGxhIEx1Z2Fub1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjU5MDI1MDIyMDMxLFwibG5nXCI6LTU4LjQ2NTcxMzQ5MTkzMzh9LHtcImxhdFwiOi0zNC42NjAwNDkzODk5NTUzLFwibG5nXCI6LTU4LjQ2NDQzMDI4MzgwOTJ9LHtcImxhdFwiOi0zNC42NjM2NTU4ODQ1MDk3LFwibG5nXCI6LTU4LjQ2ODQ1MjI2NDAzMDN9LHtcImxhdFwiOi0zNC42NjM2MDk0OTMxMzQ1LFwibG5nXCI6LTU4LjQ3MDE5NDQ4NTQ1MzV9LHtcImxhdFwiOi0zNC42NjQ0Mzg2NDQ0Nzg5LFwibG5nXCI6LTU4LjQ3MDM2NjAzNzYxNTV9LHtcImxhdFwiOi0zNC42Njg4NzkzODcxNjQxLFwibG5nXCI6LTU4LjQ2NDc2ODU1Mzg1Mjd9LHtcImxhdFwiOi0zNC42NjkzODg1Njg4NzIxLFwibG5nXCI6LTU4LjQ2MzIyNjc5MDg2MTN9LHtcImxhdFwiOi0zNC42NzM1MzQ3ODc2NDUzLFwibG5nXCI6LTU4LjQ1OTU0NjUzNTQ0NDN9LHtcImxhdFwiOi0zNC42NzQzODIxNDM0NjUsXCJsbmdcIjotNTguNDU3NzI3MTMzMDEyfSx7XCJsYXRcIjotMzQuNjgwMDM4NDEyOTExNixcImxuZ1wiOi01OC40NTA2NDExNDMxNjg5fSx7XCJsYXRcIjotMzQuNjkxNzkyMTgwMjQ3NyxcImxuZ1wiOi01OC40NjMzOTYwMjc0NzgxfSx7XCJsYXRcIjotMzQuNjgyMTM3ODY1NjkwNixcImxuZ1wiOi01OC40NzU3OTcyNTgzMjkzfSx7XCJsYXRcIjotMzQuNjg4OTU0NjA4MjQwNSxcImxuZ1wiOi01OC40ODMzNTUyODkzMjF9LHtcImxhdFwiOi0zNC42NzQ1MDg1OTIzNTMzLFwibG5nXCI6LTU4LjUwMjUyNTkxMzM3MjJ9LHtcImxhdFwiOi0zNC42NzExODAzNTE3ODIxLFwibG5nXCI6LTU4LjQ5NzAzOTkwODY0OH0se1wibGF0XCI6LTM0LjY2MzM0ODQxNTUxNTMsXCJsbmdcIjotNTguNDg4OTUyNDA4MjA3M30se1wibGF0XCI6LTM0LjY2MjQ0ODE1NTY0MDQsXCJsbmdcIjotNTguNDg1OTQ1MzA1MTA2M30se1wibGF0XCI6LTM0LjY1Nzg0NDQ1NzE3NTEsXCJsbmdcIjotNTguNDc4ODE3ODE0NDk0Nn0se1wibGF0XCI6LTM0LjY2Mjc3MjgwMjQ0OTQsXCJsbmdcIjotNTguNDcyNTE1MzE3NTQwNn0se1wibGF0XCI6LTM0LjY1ODQyNjg2NDkyNDgsXCJsbmdcIjotNTguNDcwNTcwNTY2ODUyOX0se1wibGF0XCI6LTM0LjY1OTEwNTM5Nzk1MDUsXCJsbmdcIjotNTguNDY5NTU1OTY0ODYzN30se1wibGF0XCI6LTM0LjY1NzUxNTQ2NzkxNzEsXCJsbmdcIjotNTguNDY3NjU1MzAzMzgyOX0se1wibGF0XCI6LTM0LjY1OTAyNTAyMjAzMSxcImxuZ1wiOi01OC40NjU3MTM0OTE5MzM4fV1dfSx7XCJuYW1lXCI6XCJTYW4gVGVsbW9cIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjYxNTYyNTE0NzE0OTMsXCJsbmdcIjotNTguMzY2NzM0NDY2NTgzOH0se1wibGF0XCI6LTM0LjYyMzk4NzM2Mjc3ODksXCJsbmdcIjotNTguMzY1Nzg1ODQ2MDI3fSx7XCJsYXRcIjotMzQuNjI1MTIxMzcyMDA1NSxcImxuZ1wiOi01OC4zNjM0NTQ5ODU2Mzh9LHtcImxhdFwiOi0zNC42MjUxOTU0NTgwNDM0LFwibG5nXCI6LTU4LjM2Nzk3MTIwMDkyNDh9LHtcImxhdFwiOi0zNC42MjcxNDI0MDQ3ODAzLFwibG5nXCI6LTU4LjM2Nzk0NTEzMzMyNzR9LHtcImxhdFwiOi0zNC42Mjk0OTM3ODU2ODQ5LFwibG5nXCI6LTU4LjM3MDY1ODE1NzY2MTh9LHtcImxhdFwiOi0zNC42MjY2NDcxNjA1MTc1LFwibG5nXCI6LTU4LjM3MDk2MzY2MDM1NX0se1wibGF0XCI6LTM0LjYyNjc5OTM5NDYwMTgsXCJsbmdcIjotNTguMzc0NTYwNTM3NDY0N30se1wibGF0XCI6LTM0LjYyNzMwMTYxODM3NDQsXCJsbmdcIjotNTguMzc1NTcyOTAzMDgyOH0se1wibGF0XCI6LTM0LjYyMzYwMDUwNzEzNDYsXCJsbmdcIjotNTguMzc3MDY1MjUyNDQ1NX0se1wibGF0XCI6LTM0LjYxNjI5MzQ2MzcyOTIsXCJsbmdcIjotNTguMzc3NDI1MzM3NDEyOX0se1wibGF0XCI6LTM0LjYxNTYyNTE0NzE0OTMsXCJsbmdcIjotNTguMzY2NzM0NDY2NTgzOH1dXX0se1wibmFtZVwiOlwiU2FhdmVkcmFcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjU2MTI4NjkyNzkyMjYsXCJsbmdcIjotNTguNDg4MTMxMDY5OTk1Mn0se1wibGF0XCI6LTM0LjU2MjY1MDY1NTUwMTEsXCJsbmdcIjotNTguNDkwOTkxMjYzMzUwN30se1wibGF0XCI6LTM0LjU2MTMwMTY0MTg1NjYsXCJsbmdcIjotNTguNDkxOTMwMTE3NjIxMX0se1wibGF0XCI6LTM0LjU2OTM5MjA3NzU0NzksXCJsbmdcIjotNTguNTA4NjA0ODI3MTA2fSx7XCJsYXRcIjotMzQuNTY5OTk3MTc2MjE2NCxcImxuZ1wiOi01OC41MDkwNDA2MzE4Nzk4fSx7XCJsYXRcIjotMzQuNTY5MjY1MDc4NTYyOCxcImxuZ1wiOi01OC41MDk4NzU0ODE4NTcyfSx7XCJsYXRcIjotMzQuNTQ5NDg5MjQ1ODQ0NSxcImxuZ1wiOi01OC41MDA1NTEzMjM4MzF9LHtcImxhdFwiOi0zNC41Mzg2MzA1OTIxMTQ3LFwibG5nXCI6LTU4LjQ3NTk1MzA5ODk2OTF9LHtcImxhdFwiOi0zNC41NDg5NDAwMTU3OTExLFwibG5nXCI6LTU4LjQ2ODE4OTI2MjY1NX0se1wibGF0XCI6LTM0LjU1MjQyMDkzMzg4NjcsXCJsbmdcIjotNTguNDc0NDM1OTIwNDkwMn0se1wibGF0XCI6LTM0LjU1MzUzMzgxMDIyMTUsXCJsbmdcIjotNTguNDczNTg2MTQ0NjY5MX0se1wibGF0XCI6LTM0LjU2MTI4NjkyNzkyMjYsXCJsbmdcIjotNTguNDg4MTMxMDY5OTk1Mn1dXX0se1wibmFtZVwiOlwiQ29naGxhblwiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNTY2MDk3NzEyNzY2OCxcImxuZ1wiOi01OC40NzI0MjA1MTMyODYxfSx7XCJsYXRcIjotMzQuNTY2ODEwNjUyMTg5MSxcImxuZ1wiOi01OC40NzQ1OTQ0Nzc4OTU2fSx7XCJsYXRcIjotMzQuNTY2MjE4NjY5OTkyMSxcImxuZ1wiOi01OC40NzUxMjM2MTE2MjU3fSx7XCJsYXRcIjotMzQuNTY2ODQ5MTQ3NTc5NyxcImxuZ1wiOi01OC40NzYxOTAxODUwMTgxfSx7XCJsYXRcIjotMzQuNTYzOTMyMDQ5MzE1MyxcImxuZ1wiOi01OC40NzkwNTQ4OTk2MDYzfSx7XCJsYXRcIjotMzQuNTYyNDk5NjY1MjMwOSxcImxuZ1wiOi01OC40ODExNTc3MjM5MzAyfSx7XCJsYXRcIjotMzQuNTU5MTA0MzE2ODIzMSxcImxuZ1wiOi01OC40ODM1NTk3MDQwNzcyfSx7XCJsYXRcIjotMzQuNTUzNTMzODEwMjIxNSxcImxuZ1wiOi01OC40NzM1ODYxNDQ2NjkxfSx7XCJsYXRcIjotMzQuNTYxMzE1MTM1MDE5MixcImxuZ1wiOi01OC40NjcwMzcxNzU2NDY1fSx7XCJsYXRcIjotMzQuNTYxNjg3MzgwNzAxOCxcImxuZ1wiOi01OC40Njc2ODM5MjE5ODQ5fSx7XCJsYXRcIjotMzQuNTYyMTkwMjYyNDcwMixcImxuZ1wiOi01OC40NjY0OTAxNzc3NTE2fSx7XCJsYXRcIjotMzQuNTY2MDk3NzEyNzY2OCxcImxuZ1wiOi01OC40NzI0MjA1MTMyODYxfV1dfSx7XCJuYW1lXCI6XCJWaWxsYSBVcnF1aXphXCIsXCJjb29yZHNcIjpbW3tcImxhdFwiOi0zNC41NjI2NDI1OTAwODY0LFwibG5nXCI6LTU4LjQ4MDk3NjcwODUzNDd9LHtcImxhdFwiOi0zNC41NjM5MzIwNDkzMTUzLFwibG5nXCI6LTU4LjQ3OTA1NDg5OTYwNjN9LHtcImxhdFwiOi0zNC41NjY4NDkxNDc1Nzk3LFwibG5nXCI6LTU4LjQ3NjE5MDE4NTAxODF9LHtcImxhdFwiOi0zNC41NjYyMTg2Njk5OTIxLFwibG5nXCI6LTU4LjQ3NTEyMzYxMTYyNTd9LHtcImxhdFwiOi0zNC41NjY4MTA2NTIxODkxLFwibG5nXCI6LTU4LjQ3NDU5NDQ3Nzg5NTZ9LHtcImxhdFwiOi0zNC41NjY0MzU1MjQ0MjQ0LFwibG5nXCI6LTU4LjQ3Mjk4ODQ3NDMzNDN9LHtcImxhdFwiOi0zNC41NjY2NjE1MzE2ODYzLFwibG5nXCI6LTU4LjQ3MzM2ODQ2NDIxNjJ9LHtcImxhdFwiOi0zNC41NzI5MDg4NDAwMDM3LFwibG5nXCI6LTU4LjQ2ODA4MTI2MTM4OTR9LHtcImxhdFwiOi0zNC41ODQ4MTgyMTY1OTczLFwibG5nXCI6LTU4LjQ4ODc5MzU3MjEzMDF9LHtcImxhdFwiOi0zNC41NzM1NDkyNTI0Mzc2LFwibG5nXCI6LTU4LjUwMjk0Njc0ODk5MjJ9LHtcImxhdFwiOi0zNC41Njk5OTcxNzYyMTY0LFwibG5nXCI6LTU4LjUwOTA0MDYzMTg3OTh9LHtcImxhdFwiOi0zNC41NjkzOTIwNzc1NDc5LFwibG5nXCI6LTU4LjUwODYwNDgyNzEwNn0se1wibGF0XCI6LTM0LjU2MTMwMTY0MTg1NjYsXCJsbmdcIjotNTguNDkxOTMwMTE3NjIxMX0se1wibGF0XCI6LTM0LjU2MjY1MDY1NTUwMTEsXCJsbmdcIjotNTguNDkwOTkxMjYzMzUwN30se1wibGF0XCI6LTM0LjU1OTEwNDMxNjgyMzEsXCJsbmdcIjotNTguNDgzNTU5NzA0MDc3Mn0se1wibGF0XCI6LTM0LjU2MjY0MjU5MDA4NjQsXCJsbmdcIjotNTguNDgwOTc2NzA4NTM0N31dXX0se1wibmFtZVwiOlwiQ29sZWdpYWxlc1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNTY5MDY1NjMwMzYzLFwibG5nXCI6LTU4LjQ0NjY5MTA5MjE0MTd9LHtcImxhdFwiOi0zNC41NzIxMDYyNDU3OTc0LFwibG5nXCI6LTU4LjQ0MDc0NDUxMzg4NDh9LHtcImxhdFwiOi0zNC41NzUzNjQzMTYwNTY3LFwibG5nXCI6LTU4LjQ0Mzk3MTY4OTM2ODZ9LHtcImxhdFwiOi0zNC41Nzg1NDY5MzQ0ODI4LFwibG5nXCI6LTU4LjQzOTkzODg2ODU1MjN9LHtcImxhdFwiOi0zNC41ODMxNzA4NDA5Mjc2LFwibG5nXCI6LTU4LjQ0NDQ0ODU3MzEwMjZ9LHtcImxhdFwiOi0zNC41NzkwNzA0NzkxMzUsXCJsbmdcIjotNTguNDU1Mzk5Mjc5MzE0NH0se1wibGF0XCI6LTM0LjU3ODI5NTI4ODA1MTUsXCJsbmdcIjotNTguNDYwMjI0ODM0MDMwNn0se1wibGF0XCI6LTM0LjU3NTAwODQxMjE5NCxcImxuZ1wiOi01OC40NjMzNTU1NDY0NDA2fSx7XCJsYXRcIjotMzQuNTY5NTI2NDU2OTY2MyxcImxuZ1wiOi01OC40NTc3MDk1NDU1MTJ9LHtcImxhdFwiOi0zNC41Njg5OTgwNTAyODU4LFwibG5nXCI6LTU4LjQ1NzYyODAxNTg4OX0se1wibGF0XCI6LTM0LjU2NjEwODI5MDA4NjIsXCJsbmdcIjotNTguNDUyMjg3NDk3NjI4OH0se1wibGF0XCI6LTM0LjU2OTA2NTYzMDM2MyxcImxuZ1wiOi01OC40NDY2OTEwOTIxNDE3fV1dfSx7XCJuYW1lXCI6XCJCYWx2YW5lcmFcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjU5ODAwMzA3Njc3NDgsXCJsbmdcIjotNTguNDExOTE4ODA5ODAzOH0se1wibGF0XCI6LTM0LjU5ODAzNTk2NTQzMDcsXCJsbmdcIjotNTguNDA0NTA2Njg0NTYxNH0se1wibGF0XCI6LTM0LjU5OTM2OTcyOTU3OSxcImxuZ1wiOi01OC40MDIwMDgyMTQ0NzM5fSx7XCJsYXRcIjotMzQuNTk5NzYwMzE5NjM0OCxcImxuZ1wiOi01OC4zOTg3MjMwMDAxMTE0fSx7XCJsYXRcIjotMzQuNTk5NjM3MTQwNzE4OSxcImxuZ1wiOi01OC4zOTI5MzA4MjU0Nzc1fSx7XCJsYXRcIjotMzQuNjExMjc5OTUzMzkzNixcImxuZ1wiOi01OC4zOTE4MDY1MTAwNjU1fSx7XCJsYXRcIjotMzQuNjE4MTU5MjIwMDc0NixcImxuZ1wiOi01OC4zOTE2OTY5ODkwNjJ9LHtcImxhdFwiOi0zNC42MTg4NDAyNjY0MzAxLFwibG5nXCI6LTU4LjQwMzUxMjg1MTkyNDJ9LHtcImxhdFwiOi0zNC42MjA2NDIzMzQ5Mzg2LFwibG5nXCI6LTU4LjQxMjU0Mzg1OTQ5OTV9LHtcImxhdFwiOi0zNC42MTQxMTYyNTE1ODU0LFwibG5nXCI6LTU4LjQxMjg3MDAzMTMwODl9LHtcImxhdFwiOi0zNC42MTA3MzY0MTkxMDc1LFwibG5nXCI6LTU4LjQxNDQ2NzAzMTI1OTN9LHtcImxhdFwiOi0zNC42MDgxOTAwNjM2MDY4LFwibG5nXCI6LTU4LjQxNDY1OTk4MDg4NTF9LHtcImxhdFwiOi0zNC42MDcyNDYzNTA2MTMsXCJsbmdcIjotNTguNDEzOTA4MjUyOTA0NX0se1wibGF0XCI6LTM0LjU5ODAwMzA3Njc3NDgsXCJsbmdcIjotNTguNDExOTE4ODA5ODAzOH1dXX0se1wibmFtZVwiOlwiVmlsbGEgR3JhbC4gTWl0cmVcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjYxOTAzODA1Mjk5NTUsXCJsbmdcIjotNTguNDcxMzk5NTczMTUzNH0se1wibGF0XCI6LTM0LjYwODEyNjc1NDI4ODcsXCJsbmdcIjotNTguNDgwNDEwMjg3MDQ4M30se1wibGF0XCI6LTM0LjYwNjc0OTQwNjk3NzUsXCJsbmdcIjotNTguNDc2MzY0Njg1ODAwM30se1wibGF0XCI6LTM0LjYwMTg2MDM5MzEzMzEsXCJsbmdcIjotNTguNDY4OTEyMjU5OTkyOX0se1wibGF0XCI6LTM0LjYwNDQ5MTg0NDc3NSxcImxuZ1wiOi01OC40NTg0NzM5MjU0NTU5fSx7XCJsYXRcIjotMzQuNjA3MzczMDExNzgwMSxcImxuZ1wiOi01OC40NjI3MDQ2MzIzMTM0fSx7XCJsYXRcIjotMzQuNjEzODg1NjcxOTYwMixcImxuZ1wiOi01OC40NTk0NDgzNjIwMzc3fSx7XCJsYXRcIjotMzQuNjE5MDM4MDUyOTk1NSxcImxuZ1wiOi01OC40NzEzOTk1NzMxNTM0fV1dfSx7XCJuYW1lXCI6XCJQYXJxdWUgQ2hhc1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNTg3NDQ1MzE0MjQsXCJsbmdcIjotNTguNDcwODE1MjY4NzQ4OH0se1wibGF0XCI6LTM0LjU5MTcyMzU2ODAyNDMsXCJsbmdcIjotNTguNDc1ODg5MDkxODM3OX0se1wibGF0XCI6LTM0LjU4OTExODk4Mzg1OTEsXCJsbmdcIjotNTguNDg0NzEwNDM3MjY2MX0se1wibGF0XCI6LTM0LjU4NDgxODIxNjU5NzMsXCJsbmdcIjotNTguNDg4NzkzNTcyMTMwMX0se1wibGF0XCI6LTM0LjU3OTEyNDk2NTc4MDIsXCJsbmdcIjotNTguNDc4OTg4MDUzODAzNX0se1wibGF0XCI6LTM0LjU3OTk1ODMxMTA2MjksXCJsbmdcIjotNTguNDc1NDI0MDk4NjQ5Nn0se1wibGF0XCI6LTM0LjU4MTc2NDk3MzI0NzQsXCJsbmdcIjotNTguNDczNTcwNzUwODI3NX0se1wibGF0XCI6LTM0LjU4NzQ0NTMxNDI0LFwibG5nXCI6LTU4LjQ3MDgxNTI2ODc0ODh9XV19LHtcIm5hbWVcIjpcIkFncm9ub23DrWFcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjU5NTExNDk5MTQ4MzMsXCJsbmdcIjotNTguNDc3MTE1NjY3NTE4Nn0se1wibGF0XCI6LTM0LjU5OTY3MDk1MDIwMTIsXCJsbmdcIjotNTguNDc4ODMxMjY2NjYzM30se1wibGF0XCI6LTM0LjU5Nzc1ODA4MDExMjcsXCJsbmdcIjotNTguNDgzNDU2MTU3NTAzMX0se1wibGF0XCI6LTM0LjU5NjgxNzM4ODY0OTEsXCJsbmdcIjotNTguNDk3MTc1MDkyNTIyOX0se1wibGF0XCI6LTM0LjU5NDQ1MDExOTk1NjUsXCJsbmdcIjotNTguNTAzNTQzNzY2NTkxfSx7XCJsYXRcIjotMzQuNTk0MzgyMjQyMDc1MSxcImxuZ1wiOi01OC41MDMwODM1MTU1NDM4fSx7XCJsYXRcIjotMzQuNTkzOTUzNTc0Njg4MyxcImxuZ1wiOi01OC41MDM0NzE4MTczNDgyfSx7XCJsYXRcIjotMzQuNTg0ODE4MjE2NTk3MyxcImxuZ1wiOi01OC40ODg3OTM1NzIxMzAxfSx7XCJsYXRcIjotMzQuNTg5MTE4OTgzODU5MSxcImxuZ1wiOi01OC40ODQ3MTA0MzcyNjYxfSx7XCJsYXRcIjotMzQuNTkxNzIzNTY4MDI0MyxcImxuZ1wiOi01OC40NzU4ODkwOTE4Mzc5fSx7XCJsYXRcIjotMzQuNTk1MTE0OTkxNDgzMyxcImxuZ1wiOi01OC40NzcxMTU2Njc1MTg2fV1dfSx7XCJuYW1lXCI6XCJWaWxsYSBPcnTDunphclwiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNTc3OTQyOTU1Nzc3MyxcImxuZ1wiOi01OC40NjA1NDY5NTEwOTE3fSx7XCJsYXRcIjotMzQuNTc4Mjk1Mjg4MDUxNSxcImxuZ1wiOi01OC40NjAyMjQ4MzQwMzA2fSx7XCJsYXRcIjotMzQuNTc4Mjk0NjYwMTAwOCxcImxuZ1wiOi01OC40NjA1Mjc2OTkyNjg1fSx7XCJsYXRcIjotMzQuNTg1NTI3Njg0NTIyMyxcImxuZ1wiOi01OC40NjAzNzg4MDE2OTM4fSx7XCJsYXRcIjotMzQuNTg2MDQyMTg5MTU0NCxcImxuZ1wiOi01OC40NjE4NzAyMDQzODQzfSx7XCJsYXRcIjotMzQuNTkwNTkzMDkyMDk1MixcImxuZ1wiOi01OC40NjY4MjgxNzIyNjk2fSx7XCJsYXRcIjotMzQuNTg3NDU5OTUzNTE0OSxcImxuZ1wiOi01OC40NzA4MDQ1NTk5MjgyfSx7XCJsYXRcIjotMzQuNTgxNzY0OTczMjQ3NCxcImxuZ1wiOi01OC40NzM1NzA3NTA4Mjc1fSx7XCJsYXRcIjotMzQuNTc5OTU4MzExMDYyOSxcImxuZ1wiOi01OC40NzU0MjQwOTg2NDk2fSx7XCJsYXRcIjotMzQuNTc5MTI0OTY1NzgwMixcImxuZ1wiOi01OC40Nzg5ODgwNTM4MDM1fSx7XCJsYXRcIjotMzQuNTcyNDk2MTc1MzI2NixcImxuZ1wiOi01OC40NjczNjQyNjk2NDM2fSx7XCJsYXRcIjotMzQuNTc1MTA1MTE2NTc5MyxcImxuZ1wiOi01OC40NjMxODcxMDQzMjk4fSx7XCJsYXRcIjotMzQuNTc3OTQyOTU1Nzc3MyxcImxuZ1wiOi01OC40NjA1NDY5NTEwOTE3fV1dfSx7XCJuYW1lXCI6XCJCYXJyYWNhc1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjMyOTI1ODM3MTE4OSxcImxuZ1wiOi01OC4zNzAzMzUzNzExNDQ5fSx7XCJsYXRcIjotMzQuNjUwMTM2NjE3MDE5NixcImxuZ1wiOi01OC4zNjc2NDg4MzYzMTk0fSx7XCJsYXRcIjotMzQuNjUxMzM0MjQwMTU4LFwibG5nXCI6LTU4LjM2OTY1NjcyOTg1NzZ9LHtcImxhdFwiOi0zNC42NTIxMDI3NTg3MTEsXCJsbmdcIjotNTguMzcwMDEyMDc0NjQ5OX0se1wibGF0XCI6LTM0LjY1MzU3ODcwMjE2NDMsXCJsbmdcIjotNTguMzY5Nzg2OTYwMzY2Mn0se1wibGF0XCI6LTM0LjY1NDk5MTUzOTQ2MDcsXCJsbmdcIjotNTguMzcyNTM1NDQ4NDk1OH0se1wibGF0XCI6LTM0LjY1Njg4Nzc3MTM1OTQsXCJsbmdcIjotNTguMzc0MDU4NDgxMTE4Nn0se1wibGF0XCI6LTM0LjY1NzU5MDMwNjI1OTcsXCJsbmdcIjotNTguMzg1MDU1MDc4NzQ5NH0se1wibGF0XCI6LTM0LjY2MDI3Nzg0NzgxMTUsXCJsbmdcIjotNTguMzg3OTYxNTk0MTI0N30se1wibGF0XCI6LTM0LjY2MTEyMjA4MDI5MDQsXCJsbmdcIjotNTguMzkwNTEyNTc0Mjc5M30se1wibGF0XCI6LTM0LjY2MjQxNjcwMDczNTcsXCJsbmdcIjotNTguMzkyNTM5MjEzMzY5Nn0se1wibGF0XCI6LTM0LjY2MTg0NzI5NzI0NjUsXCJsbmdcIjotNTguMzk1ODg3NzcwNjI4N30se1wibGF0XCI6LTM0LjY2MjA2MjExMjk3NjYsXCJsbmdcIjotNTguMzk2OTg4MzU1NTM5fSx7XCJsYXRcIjotMzQuNjYxMjU3MjU0NTAyOSxcImxuZ1wiOi01OC4zOTc3OTQ2Njc5OTExfSx7XCJsYXRcIjotMzQuNjYwNzg5MzE4ODY3OCxcImxuZ1wiOi01OC40MDA0MTM3NjcwNjU1fSx7XCJsYXRcIjotMzQuNjQ5Nzk4Mjc1NTI2LFwibG5nXCI6LTU4LjQwNTA0NTAwMDQxOTF9LHtcImxhdFwiOi0zNC42NDcwNjAzMzA2MTYyLFwibG5nXCI6LTU4LjQwMjc0NTk2NzkwN30se1wibGF0XCI6LTM0LjY0NjU1MjkzNDAzNDMsXCJsbmdcIjotNTguNDAwNjAyNTAyMjExfSx7XCJsYXRcIjotMzQuNjQ1OTE4NDU1Mzk0MyxcImxuZ1wiOi01OC40MDA0OTI0MjI5Mjk3fSx7XCJsYXRcIjotMzQuNjQyMDg2MjQ3NzMxNSxcImxuZ1wiOi01OC4zOTE0MDAxNzQ5ODU5fSx7XCJsYXRcIjotMzQuNjQwODI2NTMxNTQwNixcImxuZ1wiOi01OC4zOTE0NzEyMTA5Njk0fSx7XCJsYXRcIjotMzQuNjQwMjA1NTAyNDU5LFwibG5nXCI6LTU4LjM4OTg4MTQ3OTg5ODZ9LHtcImxhdFwiOi0zNC42MzQxMjQzOTEzODg0LFwibG5nXCI6LTU4LjM5MDM1MjU5OTU5NzN9LHtcImxhdFwiOi0zNC42MzIyMjA1NjU2MjE5LFwibG5nXCI6LTU4LjM4MzM5MTUyNzYyMjV9LHtcImxhdFwiOi0zNC42MzA4NDUxNTI5NjM3LFwibG5nXCI6LTU4LjM4MTMzMjcwNTc1OTF9LHtcImxhdFwiOi0zNC42MzMwNzAwOTc1MDI4LFwibG5nXCI6LTU4LjM4MTI1MDM1ODg0NTR9LHtcImxhdFwiOi0zNC42MzMwMzE3NDcwMDIyLFwibG5nXCI6LTU4LjM4MDE0MzI4MTg1MDd9LHtcImxhdFwiOi0zNC42MzA0OTkwMDQzMTEyLFwibG5nXCI6LTU4LjM3ODYyMTIzMjQ3Mjl9LHtcImxhdFwiOi0zNC42MjkzMzM0ODIyNTI0LFwibG5nXCI6LTU4LjM3OTA0NDMwOTg4MDl9LHtcImxhdFwiOi0zNC42MjY3OTkzOTQ2MDE4LFwibG5nXCI6LTU4LjM3NDU2MDUzNzQ2NDd9LHtcImxhdFwiOi0zNC42MjY2NDcxNjA1MTc1LFwibG5nXCI6LTU4LjM3MDk2MzY2MDM1NX0se1wibGF0XCI6LTM0LjYzMjkyNTgzNzExODksXCJsbmdcIjotNTguMzcwMzM1MzcxMTQ0OX1dXX0se1wibmFtZVwiOlwiUGFycXVlIEF2ZWxsYW5lZGFcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjYzODc4Njk1NDMyNzgsXCJsbmdcIjotNTguNDcwMzc1MDQ5OTAxNX0se1wibGF0XCI6LTM0LjY0MTM5Njg5MjU1MTYsXCJsbmdcIjotNTguNDY5MjQyMzMwNDQzMX0se1wibGF0XCI6LTM0LjY0NjE3MDE5NzU5MTcsXCJsbmdcIjotNTguNDYyOTk5MDA4MjMxfSx7XCJsYXRcIjotMzQuNjUxNDY4MjU2NjYwOCxcImxuZ1wiOi01OC40NjcwMzM2Mjg5NjUxfSx7XCJsYXRcIjotMzQuNjU2ODA2MzYxMzM3OCxcImxuZ1wiOi01OC40NjA0MDE3NzcwNDg1fSx7XCJsYXRcIjotMzQuNjYwMDQ5Mzg5OTU1MyxcImxuZ1wiOi01OC40NjQ0MzAyODM4MDkyfSx7XCJsYXRcIjotMzQuNjU3NTE1NDY3OTE3MSxcImxuZ1wiOi01OC40Njc2NTUzMDMzODI5fSx7XCJsYXRcIjotMzQuNjU5MTA1Mzk3OTUwNSxcImxuZ1wiOi01OC40Njk1NTU5NjQ4NjM3fSx7XCJsYXRcIjotMzQuNjU4NDI2ODY0OTI0OCxcImxuZ1wiOi01OC40NzA1NzA1NjY4NTI5fSx7XCJsYXRcIjotMzQuNjYyNzcyODAyNDQ5NCxcImxuZ1wiOi01OC40NzI1MTUzMTc1NDA2fSx7XCJsYXRcIjotMzQuNjQ0ODQ3OTU5MTA3NixcImxuZ1wiOi01OC40OTUzMDIxODUwMDUyfSx7XCJsYXRcIjotMzQuNjM2OTk0Mjc4MzgzNCxcImxuZ1wiOi01OC40Nzg1NDU1NTE3Njk3fSx7XCJsYXRcIjotMzQuNjM4OTM0NzA2NzgyOCxcImxuZ1wiOi01OC40NzYwNzIzMzA0NTUyfSx7XCJsYXRcIjotMzQuNjM3MzA4MzYxMDEwMyxcImxuZ1wiOi01OC40NzM0OTIyNzQ4MTN9LHtcImxhdFwiOi0zNC42MzY2NTUyMDQ3MTA5LFwibG5nXCI6LTU4LjQ3MTMwMjkxNDkxOX0se1wibGF0XCI6LTM0LjYzODc4Njk1NDMyNzgsXCJsbmdcIjotNTguNDcwMzc1MDQ5OTAxNX1dXX0se1wibmFtZVwiOlwiUGFycXVlIENoYWNhYnVjb1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjQxNzQxMjU4MzE1LFwibG5nXCI6LTU4LjQzMjM0NDQwNDMzMjF9LHtcImxhdFwiOi0zNC42NDUxNjM3MDAzODQxLFwibG5nXCI6LTU4LjQzMjEwNzUzODc3NDh9LHtcImxhdFwiOi0zNC42NDczNTIzNzk3NDM1LFwibG5nXCI6LTU4LjQzNzQyMjI5NTA4MjV9LHtcImxhdFwiOi0zNC42NDE3Nzc3NTQ2MDg5LFwibG5nXCI6LTU4LjQ0MzA3Nzk5MDE3MzR9LHtcImxhdFwiOi0zNC42NDI4MDY4NDI4NTg1LFwibG5nXCI6LTU4LjQ0NDI0NDA0NDg3MTh9LHtcImxhdFwiOi0zNC42Mzc0NjY5MTU5MjQ2LFwibG5nXCI6LTU4LjQ1MTQ0MTAwNzk0MTF9LHtcImxhdFwiOi0zNC42MzE1MDA1NDc2NjQyLFwibG5nXCI6LTU4LjQ1NDM3ODA3Nzc2MzZ9LHtcImxhdFwiOi0zNC42MzA2MzkwOTkwODE5LFwibG5nXCI6LTU4LjQ1MTU3NjM3NTEzMjl9LHtcImxhdFwiOi0zNC42MjY5OTg0ODQyNDkzLFwibG5nXCI6LTU4LjQyNjc1NTgxNDIyNTl9LHtcImxhdFwiOi0zNC42NDAyMDAzNzU2MzA3LFwibG5nXCI6LTU4LjQyMzQ5MTg4MzU1NDZ9LHtcImxhdFwiOi0zNC42NDE3NDEyNTgzMTUsXCJsbmdcIjotNTguNDMyMzQ0NDA0MzMyMX1dXX0se1wibmFtZVwiOlwiTnVldmEgUG9tcGV5YVwiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjQ4MTM0ODc5ODE2NyxcImxuZ1wiOi01OC40MTIyMDg5NDg4OTQyfSx7XCJsYXRcIjotMzQuNjQ4NTgyODgwODk2LFwibG5nXCI6LTU4LjQxMjEwMDUzOTY5NjR9LHtcImxhdFwiOi0zNC42NDcwNjAzMzA2MTYyLFwibG5nXCI6LTU4LjQwMjc0NTk2NzkwN30se1wibGF0XCI6LTM0LjY0OTc5ODI3NTUyNixcImxuZ1wiOi01OC40MDUwNDUwMDA0MTkxfSx7XCJsYXRcIjotMzQuNjYwMTk3NDk3MDI4NyxcImxuZ1wiOi01OC40MDA4MzM2ODAxNjY0fSx7XCJsYXRcIjotMzQuNjU5NDE2OTAyMjIwNixcImxuZ1wiOi01OC40MDI2NDQxMjUwOTg2fSx7XCJsYXRcIjotMzQuNjYwMDk1MzM1MDM3MSxcImxuZ1wiOi01OC40MDYzNjg3MDk4NzE0fSx7XCJsYXRcIjotMzQuNjU5ODgyNTM0MjUwMyxcImxuZ1wiOi01OC40MDgyNTU0NTEyMzQ2fSx7XCJsYXRcIjotMzQuNjU4OTM4Njk1NTE4NCxcImxuZ1wiOi01OC40MTAxMjgxMTMzODA0fSx7XCJsYXRcIjotMzQuNjU4NTEyOTA3Nzg3NCxcImxuZ1wiOi01OC40MTI5NjI1OTMzMTYzfSx7XCJsYXRcIjotMzQuNjYwNDkyODE0MDAxMixcImxuZ1wiOi01OC40MjA4Nzc5MzgwODQ3fSx7XCJsYXRcIjotMzQuNjYyMDU1MzIzNTE5MyxcImxuZ1wiOi01OC40MjQwMzUzMjYxMTk2fSx7XCJsYXRcIjotMzQuNjU4Njc0MTE4NDcyLFwibG5nXCI6LTU4LjQyNjc0NTYzNzY1Mn0se1wibGF0XCI6LTM0LjY1MzExMzExNjM3ODIsXCJsbmdcIjotNTguNDM0NDMzNDk4OTU2OH0se1wibGF0XCI6LTM0LjY0OTg3NDMyNzI0NTIsXCJsbmdcIjotNTguNDMwNDI5ODg2ODY5OH0se1wibGF0XCI6LTM0LjY0NjIzNjg3MjM2MDUsXCJsbmdcIjotNTguNDM0OTIzMDkyMjE3N30se1wibGF0XCI6LTM0LjY0NTE2MzcwMDM4NDEsXCJsbmdcIjotNTguNDMyMTA3NTM4Nzc0OH0se1wibGF0XCI6LTM0LjY0MTc0MTI1ODMxNSxcImxuZ1wiOi01OC40MzIzNDQ0MDQzMzIxfSx7XCJsYXRcIjotMzQuNjM4MDk5MzU1MDI3LFwibG5nXCI6LTU4LjQxMTI2MDQ0MTQ5MzR9LHtcImxhdFwiOi0zNC42NDM0NTUyMTExNTcxLFwibG5nXCI6LTU4LjQxMzQzNjQ0ODYxODV9LHtcImxhdFwiOi0zNC42NDgxMzQ4Nzk4MTY3LFwibG5nXCI6LTU4LjQxMjIwODk0ODg5NDJ9XV19LHtcIm5hbWVcIjpcIlBhbGVybW9cIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjU1MjAyMzM3MzQwMjgsXCJsbmdcIjotNTguNDI2NzU5MzE3Mjc2NH0se1wibGF0XCI6LTM0LjU1NDkwMDA5NDYyNjgsXCJsbmdcIjotNTguNDE1Njc5MjU4MzgyNX0se1wibGF0XCI6LTM0LjU1NzM1MjQ1MzE5ODYsXCJsbmdcIjotNTguNDExMTM5MjU4MzI3Nn0se1wibGF0XCI6LTM0LjU1NjU5MTg2Mzg5NzEsXCJsbmdcIjotNTguNDA5NTA3NDQ2MzIwNH0se1wibGF0XCI6LTM0LjU1ODA3MTgxODYzODEsXCJsbmdcIjotNTguNDEwMTc3MDU3OTcwM30se1wibGF0XCI6LTM0LjU2Mzg0OTgxOTEyMTUsXCJsbmdcIjotNTguNDA0NTg3NjU4NTgyfSx7XCJsYXRcIjotMzQuNTYxMjM5OTI3NDQwNyxcImxuZ1wiOi01OC40MDAxMzQ5MjI2NTU1fSx7XCJsYXRcIjotMzQuNTY0MTM0Nzk3NjM0OCxcImxuZ1wiOi01OC40MDQ1NTU2NzUzMTg1fSx7XCJsYXRcIjotMzQuNTY0ODU2NzUzOTY4MyxcImxuZ1wiOi01OC40MDQwMzIwMjMzNTM2fSx7XCJsYXRcIjotMzQuNTYzNzE1NzY3Njk3NixcImxuZ1wiOi01OC40MDE0MDEyNDkyNTk1fSx7XCJsYXRcIjotMzQuNTY0MTEyMzQ4MDI0OCxcImxuZ1wiOi01OC4zOTkyNzY0MDY1MTd9LHtcImxhdFwiOi0zNC41NjUyMjcxOTkxMTg1LFwibG5nXCI6LTU4LjM5ODAzODUzMTgzOTJ9LHtcImxhdFwiOi0zNC41NjYzMjQ3ODk5NzI2LFwibG5nXCI6LTU4LjM5NzkwNjk0OTI3Nzl9LHtcImxhdFwiOi0zNC41NjkwMjM1NTgxMDI5LFwibG5nXCI6LTU4LjQwMDIyMjIzNzM0NDN9LHtcImxhdFwiOi0zNC41NjkyMjM2Mjg5ODEzLFwibG5nXCI6LTU4LjM5OTk2MjE4NDAzNTR9LHtcImxhdFwiOi0zNC41NjY2OTYyMjcyOTg2LFwibG5nXCI6LTU4LjM5NzUwNDUxMTI5ODl9LHtcImxhdFwiOi0zNC41NjY2Njg5OTAyOTk1LFwibG5nXCI6LTU4LjM5Njk3ODc2OTQ4MTF9LHtcImxhdFwiOi0zNC41NjkyMjg4ODY3MjM3LFwibG5nXCI6LTU4LjM5NDU2MTc5NzQzNzZ9LHtcImxhdFwiOi0zNC41NzIyMzU3MjcxNjA2LFwibG5nXCI6LTU4LjM5Mjc4OTkxODA0Nzd9LHtcImxhdFwiOi0zNC41NzIxOTA2OTEyMDgzLFwibG5nXCI6LTU4LjM5NTIwNTc5NzA1MTN9LHtcImxhdFwiOi0zNC41NjkzNDg5MDM3MDc4LFwibG5nXCI6LTU4LjQwMDEyNjY2MDE3MTF9LHtcImxhdFwiOi0zNC41NzA4MDY5NDgyNzMxLFwibG5nXCI6LTU4LjM5OTcxNTc1MjM1MTd9LHtcImxhdFwiOi0zNC41NzQxNDAzNzMxMzAyLFwibG5nXCI6LTU4LjQwMjY0NjQwMDA4Mjl9LHtcImxhdFwiOi0zNC41NzU3MzY3NDY2Nzg5LFwibG5nXCI6LTU4LjQwMTE0NDU1MjA3NX0se1wibGF0XCI6LTM0LjU3ODUwNjcyNjMzNDMsXCJsbmdcIjotNTguMzk2NTU5Njg5NzQ1M30se1wibGF0XCI6LTM0LjU4NDQ3MTg1NDY0NTcsXCJsbmdcIjotNTguNDAwNTQzNjk2MjgyOX0se1wibGF0XCI6LTM0LjU4MzQyNjM4OTc3MjQsXCJsbmdcIjotNTguNDAxOTQzMDg1NTA1MX0se1wibGF0XCI6LTM0LjU4MzQ1OTI2ODQyMzcsXCJsbmdcIjotNTguNDA2MTcyMzYxMjgyNn0se1wibGF0XCI6LTM0LjU4OTA1NzE1ODI0MjIsXCJsbmdcIjotNTguNDEwMDgxMDI4Mjc2NH0se1wibGF0XCI6LTM0LjU5NDA1NDA2ODg5MTEsXCJsbmdcIjotNTguNDE0MzkzNjQxOTgzN30se1wibGF0XCI6LTM0LjU5Nzg1NDc3MTg2NDUsXCJsbmdcIjotNTguNDE2MDAwNDg0OTI0NX0se1wibGF0XCI6LTM0LjU5Nzc0Nzg5NTY5NjcsXCJsbmdcIjotNTguNDIzMzY3MjIyMjM1M30se1wibGF0XCI6LTM0LjU5NjIxMDUxODA3NjcsXCJsbmdcIjotNTguNDI2OTUwMjI0MDY5N30se1wibGF0XCI6LTM0LjU4NDUxMzU1MTQxMjksXCJsbmdcIjotNTguNDQ0Nzg1NjUzNH0se1wibGF0XCI6LTM0LjU4MTc5NzAzNjU5MTgsXCJsbmdcIjotNTguNDQzNDMxNjc1Mjk2Nn0se1wibGF0XCI6LTM0LjU3ODU0NjkzNDQ4MjgsXCJsbmdcIjotNTguNDM5OTM4ODY4NTUyM30se1wibGF0XCI6LTM0LjU3NTM2NDMxNjA1NjcsXCJsbmdcIjotNTguNDQzOTcxNjg5MzY4Nn0se1wibGF0XCI6LTM0LjU3MjEwNjI0NTc5NzQsXCJsbmdcIjotNTguNDQwNzQ0NTEzODg0OH0se1wibGF0XCI6LTM0LjU2Nzg1MzgyMTY0NDksXCJsbmdcIjotNTguNDQ5MDQ0Mzg0Mzk5Nn0se1wibGF0XCI6LTM0LjU2NjcxMjg1ODEyMjcsXCJsbmdcIjotNTguNDQ3ODU0NDc4NTIzN30se1wibGF0XCI6LTM0LjU2MzY4OTA3NDU5NDQsXCJsbmdcIjotNTguNDQyNTM1MjQ4MzMyNX0se1wibGF0XCI6LTM0LjU2MjEzMzkxOTAxNjUsXCJsbmdcIjotNTguNDQxMTYyNDI1ODE2N30se1wibGF0XCI6LTM0LjU2MjU3NzczOTQ4MzIsXCJsbmdcIjotNTguNDM2NDI3MjIzNTI3NH0se1wibGF0XCI6LTM0LjU2MjA4OTE4NDM5NDIsXCJsbmdcIjotNTguNDM0ODU4NDc2MTk4OH0se1wibGF0XCI6LTM0LjU2MTY4MzgzNTY5ODIsXCJsbmdcIjotNTguNDM4MjQ4MTE1NjIwNH0se1wibGF0XCI6LTM0LjU2MDQxOTkxMTgwNjQsXCJsbmdcIjotNTguNDQwNDg5MjIyMjMwNn0se1wibGF0XCI6LTM0LjU1ODgxNTkxNTE5NjgsXCJsbmdcIjotNTguNDQxMzg1NTE3MDMxfSx7XCJsYXRcIjotMzQuNTU3MzAzMDcyODU5NSxcImxuZ1wiOi01OC40NDA0NDI4MDU3NTkyfSx7XCJsYXRcIjotMzQuNTUzOTU3MzAyNTg4MSxcImxuZ1wiOi01OC40MzQxMTA2MjYwNzkxfSx7XCJsYXRcIjotMzQuNTUzNTkzNjEyMzczMyxcImxuZ1wiOi01OC40MzQ2NTM1MjUzMTc1fSx7XCJsYXRcIjotMzQuNTUzMDQ5OTM5ODc2LFwibG5nXCI6LTU4LjQzNDQyMzEwMTk5ODV9LHtcImxhdFwiOi0zNC41NTExMTg3MTg5ODI1LFwibG5nXCI6LTU4LjQzMDk4Mzg4OTU0MzZ9LHtcImxhdFwiOi0zNC41NTA5NTAxNTI5MDgxLFwibG5nXCI6LTU4LjQyOTM5ODI0MTI5ODd9LHtcImxhdFwiOi0zNC41NTIwMjMzNzM0MDI4LFwibG5nXCI6LTU4LjQyNjc1OTMxNzI3NjR9XV19LHtcIm5hbWVcIjpcIlZpbGxhIFJpYWNodWVsb1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjgwNjEwMzExOTE4OSxcImxuZ1wiOi01OC40NDk3ODMyNjgyMTE2fSx7XCJsYXRcIjotMzQuNjg0OTMyMTc4MjM2OCxcImxuZ1wiOi01OC40NDQyOTUzMTgzNzM2fSx7XCJsYXRcIjotMzQuNzA1MjkzMTM1MTU5NixcImxuZ1wiOi01OC40NjE3MTU0ODM2Njg0fSx7XCJsYXRcIjotMzQuNjg4OTU0NjA4MjQwNSxcImxuZ1wiOi01OC40ODMzNTUyODkzMjF9LHtcImxhdFwiOi0zNC42ODIxMzc4NjU2OTA2LFwibG5nXCI6LTU4LjQ3NTc5NzI1ODMyOTN9LHtcImxhdFwiOi0zNC42OTE3OTIxODAyNDc3LFwibG5nXCI6LTU4LjQ2MzM5NjAyNzQ3ODF9LHtcImxhdFwiOi0zNC42ODA1Mzc4MTQ2MDA0LFwibG5nXCI6LTU4LjQ1MTE0MTgzNTA0NjZ9LHtcImxhdFwiOi0zNC42ODA4NjM3NDQ0MzE1LFwibG5nXCI6LTU4LjQ1MDk2NTcxODIyNDR9LHtcImxhdFwiOi0zNC42ODA2MTAzMTE5MTg5LFwibG5nXCI6LTU4LjQ0OTc4MzI2ODIxMTZ9XV19LHtcIm5hbWVcIjpcIlZpbGxhIFNvbGRhdGlcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjY1MTE2NTc3NTU1MDksXCJsbmdcIjotNTguNDQ5MTMyMDgzMTg0N30se1wibGF0XCI6LTM0LjY1MTE4OTkxMzg1ODMsXCJsbmdcIjotNTguNDQzMzIzOTM1MDExOH0se1wibGF0XCI6LTM0LjY1NTgwMzQ4OTA3NDgsXCJsbmdcIjotNTguNDM4MDA1NDkxODA2N30se1wibGF0XCI6LTM0LjY1MzExMzExNjM3ODIsXCJsbmdcIjotNTguNDM0NDMzNDk4OTU2OH0se1wibGF0XCI6LTM0LjY1ODY3NDExODQ3MixcImxuZ1wiOi01OC40MjY3NDU2Mzc2NTJ9LHtcImxhdFwiOi0zNC42NjIwNTUzMjM1MTkzLFwibG5nXCI6LTU4LjQyNDAzNTMyNjExOTZ9LHtcImxhdFwiOi0zNC42NjQ4Nzg4MzA0NDQyLFwibG5nXCI6LTU4LjQyNzM5NTQyMzE1NjV9LHtcImxhdFwiOi0zNC42Nzk1NzY5ODI4MDA1LFwibG5nXCI6LTU4LjQzOTc3MzQ5NjY5fSx7XCJsYXRcIjotMzQuNjgwMTE2OTg4MDkzOSxcImxuZ1wiOi01OC40NDE2NDM1MDM3MzU4fSx7XCJsYXRcIjotMzQuNjgwODg5MTQ3NzczOSxcImxuZ1wiOi01OC40NDIyNzQ2NDI2NTcxfSx7XCJsYXRcIjotMzQuNjgyMzI1OTgyNzc2MyxcImxuZ1wiOi01OC40NDIwNTA0NDEwNjh9LHtcImxhdFwiOi0zNC42ODQ5MzIxNzgyMzY4LFwibG5nXCI6LTU4LjQ0NDI5NTMxODM3MzZ9LHtcImxhdFwiOi0zNC42ODA1MDEyNDAzMjE0LFwibG5nXCI6LTU4LjQ0OTkzNTAzMDcwNzN9LHtcImxhdFwiOi0zNC42ODA4MTgyMTEzOTM1LFwibG5nXCI6LTU4LjQ1MTA5ODA0ODMwMDh9LHtcImxhdFwiOi0zNC42Nzk4Mzg0MjExMTMxLFwibG5nXCI6LTU4LjQ1MDc3NTc4MjUwMDJ9LHtcImxhdFwiOi0zNC42NzQzODIxNDM0NjUsXCJsbmdcIjotNTguNDU3NzI3MTMzMDEyfSx7XCJsYXRcIjotMzQuNjczNjUyNDYzMTY5NyxcImxuZ1wiOi01OC40NTk0MDUyODI0NzAxfSx7XCJsYXRcIjotMzQuNjY5Mzg4NTY4ODcyMSxcImxuZ1wiOi01OC40NjMyMjY3OTA4NjEzfSx7XCJsYXRcIjotMzQuNjY4ODc5Mzg3MTY0MSxcImxuZ1wiOi01OC40NjQ3Njg1NTM4NTI3fSx7XCJsYXRcIjotMzQuNjY0MjEwNDA1NzI2OCxcImxuZ1wiOi01OC40NzA0NTYyNTI3MzQ2fSx7XCJsYXRcIjotMzQuNjYzNjA5NDkzMTM0NSxcImxuZ1wiOi01OC40NzAxOTQ0ODU0NTM1fSx7XCJsYXRcIjotMzQuNjYzNjU1ODg0NTA5NyxcImxuZ1wiOi01OC40Njg0NTIyNjQwMzAzfSx7XCJsYXRcIjotMzQuNjU3ODc4NTQ2Nzk2MixcImxuZ1wiOi01OC40NjE1ODAzMTQ2MTV9LHtcImxhdFwiOi0zNC42NTIyOTkzNDU4Mjc3LFwibG5nXCI6LTU4LjQ1NTA2MTc3ODA3NDJ9LHtcImxhdFwiOi0zNC42NTA4MjMwNzczNTg0LFwibG5nXCI6LTU4LjQ1NDYzNjIzODg1OTR9LHtcImxhdFwiOi0zNC42NTExNjU3NzU1NTA5LFwibG5nXCI6LTU4LjQ0OTEzMjA4MzE4NDd9XV19LHtcIm5hbWVcIjpcIlZpbGxhIFB1ZXlycmVkb25cIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjU5Mzg1NjE1OTU4OTUsXCJsbmdcIjotNTguNTAzMzExMzI1MDg0NH0se1wibGF0XCI6LTM0LjU4MTc0NDI3MTY0NjgsXCJsbmdcIjotNTguNTE0NTE2NzgxNjA4OX0se1wibGF0XCI6LTM0LjU4MTI2ODEyMDA3NTQsXCJsbmdcIjotNTguNTE1NTM2MjgxNDQ2Nn0se1wibGF0XCI6LTM0LjU2OTI2NTA3ODU2MjgsXCJsbmdcIjotNTguNTA5ODc1NDgxODU3Mn0se1wibGF0XCI6LTM0LjU3MzU0OTI1MjQzNzYsXCJsbmdcIjotNTguNTAyOTQ2NzQ4OTkyMn0se1wibGF0XCI6LTM0LjU4NDgxODIxNjU5NzMsXCJsbmdcIjotNTguNDg4NzkzNTcyMTMwMX0se1wibGF0XCI6LTM0LjU5Mzg1NjE1OTU4OTUsXCJsbmdcIjotNTguNTAzMzExMzI1MDg0NH1dXX0se1wibmFtZVwiOlwiVmlsbGEgRGV2b3RvXCIsXCJjb29yZHNcIjpbW3tcImxhdFwiOi0zNC42MTM5MTk3MjY0NDk5LFwibG5nXCI6LTU4LjUwODMwODQ0MjQ1NjN9LHtcImxhdFwiOi0zNC42MTY3MzE2OTY0NzY0LFwibG5nXCI6LTU4LjUxMzA0NjcxMjc3MDR9LHtcImxhdFwiOi0zNC42MjAyMTUyMTUxNTkxLFwibG5nXCI6LTU4LjUxNjk1MDEyODQ3fSx7XCJsYXRcIjotMzQuNjEwODk1NjM5NTkyNixcImxuZ1wiOi01OC41Mjk0Njg5OTY3ODA0fSx7XCJsYXRcIjotMzQuNTgxMjY4MTIwMDc1NCxcImxuZ1wiOi01OC41MTU1MzYyODE0NDY2fSx7XCJsYXRcIjotMzQuNTgxNzQ0MjcxNjQ2OCxcImxuZ1wiOi01OC41MTQ1MTY3ODE2MDg5fSx7XCJsYXRcIjotMzQuNTk0MzgyMjQyMDc1MSxcImxuZ1wiOi01OC41MDMwODM1MTU1NDM4fSx7XCJsYXRcIjotMzQuNTk0NDUwMTE5OTU2NSxcImxuZ1wiOi01OC41MDM1NDM3NjY1OTF9LHtcImxhdFwiOi0zNC41OTY4MTczODg2NDkxLFwibG5nXCI6LTU4LjQ5NzE3NTA5MjUyMjl9LHtcImxhdFwiOi0zNC42MDIzNzg1MzI5MjM0LFwibG5nXCI6LTU4LjUwNjE2NzY2OTc2MTh9LHtcImxhdFwiOi0zNC42MDkxMjU3NjY2NTU2LFwibG5nXCI6LTU4LjUwMDE5MjQ4NTM3MDV9LHtcImxhdFwiOi0zNC42MTM5MTk3MjY0NDk5LFwibG5nXCI6LTU4LjUwODMwODQ0MjQ1NjN9XV19LHtcIm5hbWVcIjpcIkxpbmllcnNcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjYzMzAxMDA5NTI2ODMsXCJsbmdcIjotNTguNTE5MjU0MDUzMjMyNX0se1wibGF0XCI6LTM0LjYzMzIwMzA4NDUzNTEsXCJsbmdcIjotNTguNTE0ODY0MDUzNzE4OH0se1wibGF0XCI6LTM0LjYzNTU1MzQzODU4NTIsXCJsbmdcIjotNTguNTA4ODMwNDg2NjAyN30se1wibGF0XCI6LTM0LjYzNTgxMjQzMDEyNSxcImxuZ1wiOi01OC41MDY4MTkzNjg4MDczfSx7XCJsYXRcIjotMzQuNjM2NzE3ODg0Nzk5MyxcImxuZ1wiOi01OC41MDU2NzIyNjQ1MjQ0fSx7XCJsYXRcIjotMzQuNjM3MzcwOTA4NDYyNixcImxuZ1wiOi01OC41MTA1MDk2MjU0MTkzfSx7XCJsYXRcIjotMzQuNjQwMDA4MzQzMDk1NixcImxuZ1wiOi01OC41MDk4MjIyMzEyNzcxfSx7XCJsYXRcIjotMzQuNjQ1ODE4MTcwNTE1NyxcImxuZ1wiOi01OC41MDIyOTk0OTA3NDU3fSx7XCJsYXRcIjotMzQuNjU2ODkxODA4ODYxOSxcImxuZ1wiOi01OC41MjU3NzM2Mjk4MTE3fSx7XCJsYXRcIjotMzQuNjU0Mjk5MDQxNTQ1NyxcImxuZ1wiOi01OC41MjkyMDg2NjQ2MDQ1fSx7XCJsYXRcIjotMzQuNjM0Nzk1MzQ0MTg0MSxcImxuZ1wiOi01OC41MzAzNTkwNDc3MTQ2fSx7XCJsYXRcIjotMzQuNjM0NDcwNzI2MTA5NCxcImxuZ1wiOi01OC41MjQzMDAzNjg5Nzg0fSx7XCJsYXRcIjotMzQuNjMzODIxMDcwNDczLFwibG5nXCI6LTU4LjUyMDY4NzcxNzc5NTR9LHtcImxhdFwiOi0zNC42MzI3OTcyMzIzMzk3LFwibG5nXCI6LTU4LjUyMDI0MDk3MjI2OTd9LHtcImxhdFwiOi0zNC42MzMwMTAwOTUyNjgzLFwibG5nXCI6LTU4LjUxOTI1NDA1MzIzMjV9XV19LHtcIm5hbWVcIjpcIlZlcnNhbGxlc1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjMyNTYwMTYwNDQ2NyxcImxuZ1wiOi01OC41MTEwNDI5NjE0MzM1fSx7XCJsYXRcIjotMzQuNjM0NTk5NDE4NzU0OCxcImxuZ1wiOi01OC41MDgzODgzNDc5MjUyfSx7XCJsYXRcIjotMzQuNjM0ODE3NDkzNTQ1LFwibG5nXCI6LTU4LjUxMDY3MDczNzM5NzN9LHtcImxhdFwiOi0zNC42MzMyMDMwODQ1MzUxLFwibG5nXCI6LTU4LjUxNDg2NDA1MzcxODh9LHtcImxhdFwiOi0zNC42MzI3OTcyMzIzMzk3LFwibG5nXCI6LTU4LjUyMDI0MDk3MjI2OTd9LHtcImxhdFwiOi0zNC42MzM4MjEwNzA0NzMsXCJsbmdcIjotNTguNTIwNjg3NzE3Nzk1NH0se1wibGF0XCI6LTM0LjYzNDc5NTM0NDE4NDEsXCJsbmdcIjotNTguNTMwMzU5MDQ3NzE0Nn0se1wibGF0XCI6LTM0LjYyNzUyMjgwMDUyMjcsXCJsbmdcIjotNTguNTMwODAyODc4OTYwNn0se1wibGF0XCI6LTM0LjYyMzQ4NjIzMjk1NTMsXCJsbmdcIjotNTguNTIyODMyMDU1OTY0OX0se1wibGF0XCI6LTM0LjYzMjU2MDE2MDQ0NjcsXCJsbmdcIjotNTguNTExMDQyOTYxNDMzNX1dXX0se1wibmFtZVwiOlwiUHVlcnRvIE1hZGVyb1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNTk1MDkyMDcxMTgxNSxcImxuZ1wiOi01OC4zNTczMjA4Nzg2MTQ5fSx7XCJsYXRcIjotMzQuNTk2NjkyMDk2NTI3NyxcImxuZ1wiOi01OC4zNTM0MzYxOTUzOTkxfSx7XCJsYXRcIjotMzQuNjAwMTA4OTE1OTEwNyxcImxuZ1wiOi01OC4zNDk3MzEwNjk3Nzk4fSx7XCJsYXRcIjotMzQuNjAxNjQ3MjQ0MjgwMSxcImxuZ1wiOi01OC4zNDcxMzg3NzE4OTQxfSx7XCJsYXRcIjotMzQuNjA2NzA0NzcyMzAzOCxcImxuZ1wiOi01OC4zNDU4NzQwNzg5Njk2fSx7XCJsYXRcIjotMzQuNjEwNjYzODUwMjYzNyxcImxuZ1wiOi01OC4zNDA4NjA2Mjc4NzkxfSx7XCJsYXRcIjotMzQuNjE2MTExODM2OTk1NyxcImxuZ1wiOi01OC4zMzk4NTUzNzk3MDg3fSx7XCJsYXRcIjotMzQuNjE2OTAwODk1MzkzNSxcImxuZ1wiOi01OC4zNDA3MTk3NzAyODkyfSx7XCJsYXRcIjotMzQuNjE3NDU0NjY2ODkzNixcImxuZ1wiOi01OC4zNDQ1ODQ1MzIwMjY3fSx7XCJsYXRcIjotMzQuNjE3NTE1MzM2NDg3MyxcImxuZ1wiOi01OC4zNDY2OTYzODExMTA0fSx7XCJsYXRcIjotMzQuNjE2ODI4MjgyNDUzMyxcImxuZ1wiOi01OC4zNDkwNjU4ODE2Mzh9LHtcImxhdFwiOi0zNC42MTcyMzA2MzY0MjM2LFwibG5nXCI6LTU4LjM1MDI2NTM0Mzg4MzF9LHtcImxhdFwiOi0zNC42MTgxNzE5NDYxMTYxLFwibG5nXCI6LTU4LjM1MDgwOTYzNTIxMDV9LHtcImxhdFwiOi0zNC42MTgyMTU4MzY4MTEsXCJsbmdcIjotNTguMzQ5NzkzNjMwMzA5OX0se1wibGF0XCI6LTM0LjYxODcxNzM3NTY0MDcsXCJsbmdcIjotNTguMzQ5OTY3NDk3NjY4MX0se1wibGF0XCI6LTM0LjYxODU1MTc2MDQ0MzEsXCJsbmdcIjotNTguMzUwNzIyMTE3MzY3Mn0se1wibGF0XCI6LTM0LjYxODkzNTQxODAzNzksXCJsbmdcIjotNTguMzUwMzY5NTQ4NzQ0NH0se1wibGF0XCI6LTM0LjYxOTE3MDQ5MjMyODEsXCJsbmdcIjotNTguMzUwNjc2OTA5MTA0MX0se1wibGF0XCI6LTM0LjYxOTc3MDk0MDk3MjcsXCJsbmdcIjotNTguMzUyNjkyNDQ1ODk3NX0se1wibGF0XCI6LTM0LjYxOTU1MDQ1MTU2NyxcImxuZ1wiOi01OC4zNTUxMzk3NzQ2NTI0fSx7XCJsYXRcIjotMzQuNjE3NjM4NzYzNjQ5OSxcImxuZ1wiOi01OC4zNTU5OTc2NTU3NDE1fSx7XCJsYXRcIjotMzQuNjI1MTIxMzcyMDA1NSxcImxuZ1wiOi01OC4zNjM0NTQ5ODU2Mzh9LHtcImxhdFwiOi0zNC42MjM3OTQ3OTMzNzQ1LFwibG5nXCI6LTU4LjM2NTgzOTgyNjU0MTl9LHtcImxhdFwiOi0zNC42MDEwMjk1Njc0OTY4LFwibG5nXCI6LTU4LjM2ODM4OTQ4OTIxMDd9LHtcImxhdFwiOi0zNC41OTgzMjEyNzk1NjEsXCJsbmdcIjotNTguMzY5NTEyMzQ3ODAxNX0se1wibGF0XCI6LTM0LjU5ODA2MTQxNzYyNTcsXCJsbmdcIjotNTguMzYzMjMzNjQyNzkyNn0se1wibGF0XCI6LTM0LjU5NzEyNTU2NjY3ODYsXCJsbmdcIjotNTguMzYzNDQ1OTU3NzEzOX0se1wibGF0XCI6LTM0LjU5NTI0NDI3ODUzNzMsXCJsbmdcIjotNTguMzU5MjUxNDk2MzI5N30se1wibGF0XCI6LTM0LjU5NTA5MjA3MTE4MTUsXCJsbmdcIjotNTguMzU3MzIwODc4NjE0OX1dLFt7XCJsYXRcIjotMzQuNTk5MjQyNzUzMDU1MyxcImxuZ1wiOi01OC4zNjY4ODk1NDk0NzN9LHtcImxhdFwiOi0zNC42MDQ4ODEwNDc4NDE1LFwibG5nXCI6LTU4LjM2NjMzOTcxMTkyNjZ9LHtcImxhdFwiOi0zNC42MDUwODgwNzEyODI2LFwibG5nXCI6LTU4LjM2NTMzMTU0MjYzODh9LHtcImxhdFwiOi0zNC42MDQ3Mzg4OTI5NTYxLFwibG5nXCI6LTU4LjM2NDYwOTcyMzk1Njl9LHtcImxhdFwiOi0zNC41OTkxNTkyODk3MTM0LFwibG5nXCI6LTU4LjM2NTI0NjI1NjYyODF9LHtcImxhdFwiOi0zNC41OTg3MjQ1ODU3MTY5LFwibG5nXCI6LTU4LjM2NjE3MjM0NTAwMX0se1wibGF0XCI6LTM0LjU5OTE4NTgwOTcwMDcsXCJsbmdcIjotNTguMzY2Mjc1OTk0MTc4NX0se1wibGF0XCI6LTM0LjU5OTI0Mjc1MzA1NTMsXCJsbmdcIjotNTguMzY2ODg5NTQ5NDczfV0sW3tcImxhdFwiOi0zNC42MDU1NjU1NTI0MDMzLFwibG5nXCI6LTU4LjM2NjE5NjE4NjYxNDF9LHtcImxhdFwiOi0zNC42MTE3MzI2MDIyMzYzLFwibG5nXCI6LTU4LjM2NTU1OTc5MDEwNDh9LHtcImxhdFwiOi0zNC42MTE5OTg2OTc5NDE3LFwibG5nXCI6LTU4LjM2NDU0MzE0MzA3NTd9LHtcImxhdFwiOi0zNC42MTE1OTQ4OTcyNzIsXCJsbmdcIjotNTguMzYzODE2MTAyNTM0MX0se1wibGF0XCI6LTM0LjYwNTQ2MTk0NDA4MDQsXCJsbmdcIjotNTguMzY0NTI1ODU3NDU5Mn0se1wibGF0XCI6LTM0LjYwNTE4Mjk0NTYzMjQsXCJsbmdcIjotNTguMzY1MzIwNjI5OTg1NX0se1wibGF0XCI6LTM0LjYwNTU2NTU1MjQwMzMsXCJsbmdcIjotNTguMzY2MTk2MTg2NjE0MX1dLFt7XCJsYXRcIjotMzQuNjE3NTkyNzYyODcyNyxcImxuZ1wiOi01OC4zNjQ4NTk3MzM0MTI1fSx7XCJsYXRcIjotMzQuNjE3ODQyMDc1MzQ3LFwibG5nXCI6LTU4LjM2Mzg4MjY3NDY1NzZ9LHtcImxhdFwiOi0zNC42MTc0NDI3OTcxNjc0LFwibG5nXCI6LTU4LjM2MzE1Nzc4NDcwM30se1wibGF0XCI6LTM0LjYxMjM3OTU2NDAzNDksXCJsbmdcIjotNTguMzYzNzMyMTUxMTcyNX0se1wibGF0XCI6LTM0LjYxMjA5Mzc0NjcyOTIsXCJsbmdcIjotNTguMzY0NTM0MTQ1MTY0Mn0se1wibGF0XCI6LTM0LjYxMjUyNDAzNDU1NjMsXCJsbmdcIjotNTguMzY1NDcwMTE5NjgyN30se1wibGF0XCI6LTM0LjYxNzU5Mjc2Mjg3MjcsXCJsbmdcIjotNTguMzY0ODU5NzMzNDEyNX1dLFt7XCJsYXRcIjotMzQuNjIzNDIwOTEwNTI1OCxcImxuZ1wiOi01OC4zNjQyMjg0NDcxMjN9LHtcImxhdFwiOi0zNC42MjM1ODE1Mjg0NzMzLFwibG5nXCI6LTU4LjM2MTkxMDEzMDk1NjN9LHtcImxhdFwiOi0zNC42MjMxNjE1NDEyNDg0LFwibG5nXCI6LTU4LjM2MjUzMDA4NDQwNzF9LHtcImxhdFwiOi0zNC42MTgyMTM4NDczMDU4LFwibG5nXCI6LTU4LjM2MzA3MjY1NTQwNjJ9LHtcImxhdFwiOi0zNC42MTc5MzYzNzA2NDQxLFwibG5nXCI6LTU4LjM2Mzg3MDY1MjU5MzV9LHtcImxhdFwiOi0zNC42MTgzNDc3NjQxNDQ3LFwibG5nXCI6LTU4LjM2NDgwMjc5MTQxMDd9LHtcImxhdFwiOi0zNC42MjM0MjA5MTA1MjU4LFwibG5nXCI6LTU4LjM2NDIyODQ0NzEyM31dXX0se1wibmFtZVwiOlwiTW9uc2VycmF0XCIsXCJjb29yZHNcIjpbW3tcImxhdFwiOi0zNC42MDY4MjY0MjUzOTAyLFwibG5nXCI6LTU4LjM2ODc5OTU4MzY1NTJ9LHtcImxhdFwiOi0zNC42MDY5MDExMTk4OTY3LFwibG5nXCI6LTU4LjM2NzcyNTk4NDU5OH0se1wibGF0XCI6LTM0LjYxNTYyNTE0NzE0OTMsXCJsbmdcIjotNTguMzY2NzM0NDY2NTgzOH0se1wibGF0XCI6LTM0LjYxNjI5MzQ2MzcyOTIsXCJsbmdcIjotNTguMzc3NDI1MzM3NDEyOX0se1wibGF0XCI6LTM0LjYxNzQ1MjMzMDYyODUsXCJsbmdcIjotNTguMzc3MzU3OTYyNzcwN30se1wibGF0XCI6LTM0LjYxODE1OTIyMDA3NDYsXCJsbmdcIjotNTguMzkxNjk2OTg5MDYyfSx7XCJsYXRcIjotMzQuNjA5MjkyMTQ4NzQxNixcImxuZ1wiOi01OC4zOTE5NTE2Mzg1MjAxfSx7XCJsYXRcIjotMzQuNjA3ODUzNzEyNjA4OCxcImxuZ1wiOi01OC4zNzEyNTI2NDcxNTd9LHtcImxhdFwiOi0zNC42MDcxOTA4MzgzODg5LFwibG5nXCI6LTU4LjM3MDMwMzY1OTMyMjF9LHtcImxhdFwiOi0zNC42MDY1NzM4OTg4NDY3LFwibG5nXCI6LTU4LjM3MDE5MDQ2MzkzNDh9LHtcImxhdFwiOi0zNC42MDY4MjY0MjUzOTAyLFwibG5nXCI6LTU4LjM2ODc5OTU4MzY1NTJ9XV19LHtcIm5hbWVcIjpcIlNhbiBOaWNvbMOhc1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNjA1MTc0Mjg4NzU1MixcImxuZ1wiOi01OC4zNjc5MjExMTkzNTk2fSx7XCJsYXRcIjotMzQuNjA2OTAxMTE5ODk2NyxcImxuZ1wiOi01OC4zNjc3MjU5ODQ1OTh9LHtcImxhdFwiOi0zNC42MDY1NzM4OTg4NDY3LFwibG5nXCI6LTU4LjM3MDE5MDQ2MzkzNDh9LHtcImxhdFwiOi0zNC42MDcxOTA4MzgzODg5LFwibG5nXCI6LTU4LjM3MDMwMzY1OTMyMjF9LHtcImxhdFwiOi0zNC42MDc4NTM3MTI2MDg4LFwibG5nXCI6LTU4LjM3MTI1MjY0NzE1N30se1wibGF0XCI6LTM0LjYwOTI5MjE0ODc0MTYsXCJsbmdcIjotNTguMzkxOTUxNjM4NTIwMX0se1wibGF0XCI6LTM0LjU5OTYzNzE0MDcxODksXCJsbmdcIjotNTguMzkyOTMwODI1NDc3NX0se1wibGF0XCI6LTM0LjU5ODMyMTI3OTU2MSxcImxuZ1wiOi01OC4zNjk1MTIzNDc4MDE1fSx7XCJsYXRcIjotMzQuNjAxMDI5NTY3NDk2OCxcImxuZ1wiOi01OC4zNjgzODk0ODkyMTA3fSx7XCJsYXRcIjotMzQuNjA1MTc0Mjg4NzU1MixcImxuZ1wiOi01OC4zNjc5MjExMTkzNTk2fV1dfSx7XCJuYW1lXCI6XCJCZWxncmFub1wiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNTMxNTI3MzMzNTU5OSxcImxuZ1wiOi01OC40NTE1OTQxMTA4MzI1fSx7XCJsYXRcIjotMzQuNTMyNTkzMDk1NjE5MixcImxuZ1wiOi01OC40NTA3NjUzNzk4MzM2fSx7XCJsYXRcIjotMzQuNTM1MTQyMDkzNDA4NixcImxuZ1wiOi01OC40NTAwMDg0NTY5MDY1fSx7XCJsYXRcIjotMzQuNTM1NTQ0NjI0NDIyNSxcImxuZ1wiOi01OC40NTA0NzY3MzgzOTAzfSx7XCJsYXRcIjotMzQuNTM1NzQyMzgyNzgxNCxcImxuZ1wiOi01OC40NTMxNzQyMzEwNjQzfSx7XCJsYXRcIjotMzQuNTM2NTE3NjA5MTQxOSxcImxuZ1wiOi01OC40NTQxMTk4NTg0MTk0fSx7XCJsYXRcIjotMzQuNTM4MTI3NjAyMjU5MixcImxuZ1wiOi01OC40NTQ5MDMzMDA3MDE5fSx7XCJsYXRcIjotMzQuNTM4ODA1ODA5OTc3LFwibG5nXCI6LTU4LjQ1NDA4ODA5ODc4NzR9LHtcImxhdFwiOi0zNC41Mzk1NjU5MDg1NTYsXCJsbmdcIjotNTguNDUyMTc0MDAxOTgyMX0se1wibGF0XCI6LTM0LjUzODE0MjIxNzE3NzcsXCJsbmdcIjotNTguNDUxMTkyNDE5MTg3fSx7XCJsYXRcIjotMzQuNTM3MzU1NzQ4NTI4OCxcImxuZ1wiOi01OC40NDk4Nzc1MjAzOTAxfSx7XCJsYXRcIjotMzQuNTM2MTMzNDAwOTM2NyxcImxuZ1wiOi01OC40NTAwMTczMTQwNjg5fSx7XCJsYXRcIjotMzQuNTM1NTU1NjQxNjcxNixcImxuZ1wiOi01OC40NDg5MzIwOTE2MDg4fSx7XCJsYXRcIjotMzQuNTM2MzEyMjE2NzQwNyxcImxuZ1wiOi01OC40NDkzOTEzMTI4NDc1fSx7XCJsYXRcIjotMzQuNTM3MjIwMzYzMDUwNSxcImxuZ1wiOi01OC40NDg3MTE2OTIzNjQ3fSx7XCJsYXRcIjotMzQuNTM3OTA3MjI5ODYxLFwibG5nXCI6LTU4LjQ0OTIxNTQyMzAwNzN9LHtcImxhdFwiOi0zNC41MzczMzY5NzMxMDM0LFwibG5nXCI6LTU4LjQ0ODU5NDAzOTc2ODR9LHtcImxhdFwiOi0zNC41NDExNDYwMzUxMDAxLFwibG5nXCI6LTU4LjQ0MTc1OTQ4MjAzNDV9LHtcImxhdFwiOi0zNC41Mzg3NDEwMDgxMDE5LFwibG5nXCI6LTU4LjQ0NDIwMzA2OTE0NDV9LHtcImxhdFwiOi0zNC41MzcxMjA0NzA4MzY1LFwibG5nXCI6LTU4LjQ0NzI5MjA4Mjg4NTF9LHtcImxhdFwiOi0zNC41MzcyOTMzNDM1NDQ1LFwibG5nXCI6LTU4LjQ0ODEzOTQzMzQ3MzR9LHtcImxhdFwiOi0zNC41MzYwODM3NTUwMzE4LFwibG5nXCI6LTU4LjQ0NjQyNjQ3Njc2MjR9LHtcImxhdFwiOi0zNC41MzY2MDY2OTI0NTEzLFwibG5nXCI6LTU4LjQ0MzM2MjMwNDA4OTd9LHtcImxhdFwiOi0zNC41MzgwNDk1MjMxMzM0LFwibG5nXCI6LTU4LjQ0MTY0MjYyMDA4Mn0se1wibGF0XCI6LTM0LjU0MDI5NTMzODg4MjcsXCJsbmdcIjotNTguNDQwNzM5MzczMzUyNX0se1wibGF0XCI6LTM0LjUzOTcxMDg5ODI5MTksXCJsbmdcIjotNTguNDQwMjg1MTE5MDExNX0se1wibGF0XCI6LTM0LjU0MDMwNTI3MzM4NTcsXCJsbmdcIjotNTguNDM5NDk4OTUwNDYwOX0se1wibGF0XCI6LTM0LjUzOTk0ODI4ODc0NjMsXCJsbmdcIjotNTguNDM3MTk0NjI0NTc3N30se1wibGF0XCI6LTM0LjU0MDc1MTY3MDc1MzEsXCJsbmdcIjotNTguNDM1NzcxNDA1MDczNX0se1wibGF0XCI6LTM0LjU0MjUyMDg1MzI5OTUsXCJsbmdcIjotNTguNDM1MDQ5MDMxMDY5OX0se1wibGF0XCI6LTM0LjU0Mzk4MTMwMDAwNDYsXCJsbmdcIjotNTguNDMxODc0OTM2Nzk3NH0se1wibGF0XCI6LTM0LjU0NTU0MTEzMzAxNyxcImxuZ1wiOi01OC40MzA3ODk5MDQ3MzE4fSx7XCJsYXRcIjotMzQuNTQ3MTE0MDI1NTE5NixcImxuZ1wiOi01OC40MzA1Njc5OTkzOTQxfSx7XCJsYXRcIjotMzQuNTQ2NzM0NDkxNTc1NyxcImxuZ1wiOi01OC40Mjk5NTQ4ODc3NzI1fSx7XCJsYXRcIjotMzQuNTQ3MTE1ODQxMDQ0OSxcImxuZ1wiOi01OC40Mjk3MDI2OTIwMjcyfSx7XCJsYXRcIjotMzQuNTQ3NzQ4NDQ3ODQzMSxcImxuZ1wiOi01OC40Mjk5NzgyMDE4Nzg1fSx7XCJsYXRcIjotMzQuNTQ3MzMyNzU5ODc0NixcImxuZ1wiOi01OC40MzA0NzkxNjk1NDM2fSx7XCJsYXRcIjotMzQuNTQ3Nzg1NzM4NDA4NCxcImxuZ1wiOi01OC40MzA2MzQ5NzQ3NDI4fSx7XCJsYXRcIjotMzQuNTQ5MTA2Njc5MjQ1OSxcImxuZ1wiOi01OC40MjkzNDM2MzM5OTkyfSx7XCJsYXRcIjotMzQuNTQ5MDkzNzEzNDU2LFwibG5nXCI6LTU4LjQyNzg0MjE2Nzc1NzF9LHtcImxhdFwiOi0zNC41NDk3OTAwMDM3NzA1LFwibG5nXCI6LTU4LjQyNzI5NDE3NzY4ODh9LHtcImxhdFwiOi0zNC41NDk1MzIwNTQ2NTU4LFwibG5nXCI6LTU4LjQyNjA3NzgxNzQ2Nzl9LHtcImxhdFwiOi0zNC41NTAwNjE0MjMxOTAzLFwibG5nXCI6LTU4LjQyNTY3NDAxNDMwNTh9LHtcImxhdFwiOi0zNC41NTIwMjM3Nzk2NDExLFwibG5nXCI6LTU4LjQyNjc1ODI0NTAwNjR9LHtcImxhdFwiOi0zNC41NTA5NTAxNTI5MDgxLFwibG5nXCI6LTU4LjQyOTM5ODI0MTI5ODd9LHtcImxhdFwiOi0zNC41NTE0MTQxODQxMzEzLFwibG5nXCI6LTU4LjQzMTY4MDMzMzY0MTd9LHtcImxhdFwiOi0zNC41NTMwNDk5Mzk4NzYsXCJsbmdcIjotNTguNDM0NDIzMTAxOTk4NX0se1wibGF0XCI6LTM0LjU1MzU5MzYxMjM3MzMsXCJsbmdcIjotNTguNDM0NjUzNTI1MzE3NX0se1wibGF0XCI6LTM0LjU1Mzk1NzMwMjU4ODEsXCJsbmdcIjotNTguNDM0MTEwNjI2MDc5MX0se1wibGF0XCI6LTM0LjU1Nzg5NjMwOTIyNDUsXCJsbmdcIjotNTguNDQxMDU4NTMwMzA5NX0se1wibGF0XCI6LTM0LjU1ODgxNTkxNTE5NjgsXCJsbmdcIjotNTguNDQxMzg1NTE3MDMxfSx7XCJsYXRcIjotMzQuNTYwNTU1ODc0OTE2NCxcImxuZ1wiOi01OC40NDAzMjc4NjgyODkzfSx7XCJsYXRcIjotMzQuNTYxNzU2ODEzNTA2LFwibG5nXCI6LTU4LjQzNzk4MDE5MTc0NX0se1wibGF0XCI6LTM0LjU2MTc5MjIyMjA2NDksXCJsbmdcIjotNTguNDM0OTU3ODM1MTE1MX0se1wibGF0XCI6LTM0LjU2MjUzNzAzNTA5ODUsXCJsbmdcIjotNTguNDM1NDAyNDQ1NjkzfSx7XCJsYXRcIjotMzQuNTYyMTMzOTE5MDE2NSxcImxuZ1wiOi01OC40NDExNjI0MjU4MTY3fSx7XCJsYXRcIjotMzQuNTYzNjg5MDc0NTk0NCxcImxuZ1wiOi01OC40NDI1MzUyNDgzMzI1fSx7XCJsYXRcIjotMzQuNTY2NzEyODU4MTIyNyxcImxuZ1wiOi01OC40NDc4NTQ0Nzg1MjM3fSx7XCJsYXRcIjotMzQuNTY3ODUzODIxNjQ0OSxcImxuZ1wiOi01OC40NDkwNDQzODQzOTk2fSx7XCJsYXRcIjotMzQuNTY2MTA4MjkwMDg2MixcImxuZ1wiOi01OC40NTIyODc0OTc2Mjg4fSx7XCJsYXRcIjotMzQuNTY4OTk4MDUwMjg1OCxcImxuZ1wiOi01OC40NTc2MjgwMTU4ODl9LHtcImxhdFwiOi0zNC41Njk1MjY0NTY5NjYzLFwibG5nXCI6LTU4LjQ1NzcwOTU0NTUxMn0se1wibGF0XCI6LTM0LjU3NTAwODQxMjE5NCxcImxuZ1wiOi01OC40NjMzNTU1NDY0NDA2fSx7XCJsYXRcIjotMzQuNTcyNDk2MTc1MzI2NixcImxuZ1wiOi01OC40NjczNjQyNjk2NDM2fSx7XCJsYXRcIjotMzQuNTcyOTA4ODQwMDAzNyxcImxuZ1wiOi01OC40NjgwODEyNjEzODk0fSx7XCJsYXRcIjotMzQuNTY2NjYxNTMxNjg2MyxcImxuZ1wiOi01OC40NzMzNjg0NjQyMTYyfSx7XCJsYXRcIjotMzQuNTYyMTkwMjYyNDcwMixcImxuZ1wiOi01OC40NjY0OTAxNzc3NTE2fSx7XCJsYXRcIjotMzQuNTYxNjg3MzgwNzAxOCxcImxuZ1wiOi01OC40Njc2ODM5MjE5ODQ5fSx7XCJsYXRcIjotMzQuNTYxMzE1MTM1MDE5MixcImxuZ1wiOi01OC40NjcwMzcxNzU2NDY1fSx7XCJsYXRcIjotMzQuNTU4OTI4NTI0MTgzLFwibG5nXCI6LTU4LjQ2OTE4NDE5NTA2ODJ9LHtcImxhdFwiOi0zNC41NTA1MDQwNTMwNzA4LFwibG5nXCI6LTU4LjQ1MzAwNjMwNDM2MDZ9LHtcImxhdFwiOi0zNC41NDg5ODQ3Njk3MTEyLFwibG5nXCI6LTU4LjQ1NDEyMTE2MzIzNDZ9LHtcImxhdFwiOi0zNC41NDI2NTIzNDM2NDEzLFwibG5nXCI6LTU4LjQ0OTI3NDYzODI5MDd9LHtcImxhdFwiOi0zNC41Mzc3OTg3OTAyNzQxLFwibG5nXCI6LTU4LjQ1OTQ0MjY0MjM2NDJ9LHtcImxhdFwiOi0zNC41MzQ5MjI0MjU0MDk0LFwibG5nXCI6LTU4LjQ1MzYzOTk3NDA0NDN9LHtcImxhdFwiOi0zNC41MzQzMTY4NzYxNDUsXCJsbmdcIjotNTguNDUzNjYxMTk5MjM3NH0se1wibGF0XCI6LTM0LjUzMTUyNzMzMzU1OTksXCJsbmdcIjotNTguNDUxNTk0MTEwODMyNX1dXX0se1wibmFtZVwiOlwiUmVjb2xldGFcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjU3MjE5MDY5MTIwODMsXCJsbmdcIjotNTguMzk1MjA1Nzk3MDUxM30se1wibGF0XCI6LTM0LjU3MjIzNTcyNzE2MDYsXCJsbmdcIjotNTguMzkyNzg5OTE4MDQ3N30se1wibGF0XCI6LTM0LjU3NjQ5MjkxNTI0MjIsXCJsbmdcIjotNTguMzg0OTYyNTgwMDI5OX0se1wibGF0XCI6LTM0LjU3NjQwNDc4MzIyMTksXCJsbmdcIjotNTguMzgzNDE0ODU1ODI4NH0se1wibGF0XCI6LTM0LjU3NTQ0NzUwNTEzMTQsXCJsbmdcIjotNTguMzgyOTcwODUyMzQ0NX0se1wibGF0XCI6LTM0LjU3MDY0MzQ1NDc5NzksXCJsbmdcIjotNTguMzkxMzAxNjE5NjQ0Mn0se1wibGF0XCI6LTM0LjU3MDA3MTM5NzM4MjgsXCJsbmdcIjotNTguMzkxMDQ0Nzc2Mzc3NX0se1wibGF0XCI6LTM0LjU3MDk0MzA1ODczNTUsXCJsbmdcIjotNTguMzg3NzU5NzcxNDE2N30se1wibGF0XCI6LTM0LjU3MDQzMDU3NDUyMjcsXCJsbmdcIjotNTguMzgwODc1NDIzMDAzfSx7XCJsYXRcIjotMzQuNTcwNjU1OTIyMzgzNSxcImxuZ1wiOi01OC4zODEzNTYzNzA3ODI0fSx7XCJsYXRcIjotMzQuNTcwOTg4MDQ4NDA1LFwibG5nXCI6LTU4LjM4MDc1NzMzNzAzMzZ9LHtcImxhdFwiOi0zNC41NzA0MTQxMDM4OTM2LFwibG5nXCI6LTU4LjM4MDYxNDUxMTc4OTZ9LHtcImxhdFwiOi0zNC41NzAzMjQ2NzU4MTY5LFwibG5nXCI6LTU4LjM3ODg2NzU3MTU5NjF9LHtcImxhdFwiOi0zNC41NzIwNjU5MjM2NzA0LFwibG5nXCI6LTU4LjM3NTcwNzg1NTU4NjR9LHtcImxhdFwiOi0zNC41NzI5MDcyNjQ3NzE2LFwibG5nXCI6LTU4LjM3NTQwNTAxOTcwNzV9LHtcImxhdFwiOi0zNC41NzI5NTgxNjY4NzM4LFwibG5nXCI6LTU4LjM3NDM1Mzk0NjU5NzF9LHtcImxhdFwiOi0zNC41NzQ3Mzk2NDkyNDQ4LFwibG5nXCI6LTU4LjM3MTIxNjk2OTUyOTN9LHtcImxhdFwiOi0zNC41NzU1NTQ2NzY0NDAyLFwibG5nXCI6LTU4LjM3MDg3MTA1MDQxMjV9LHtcImxhdFwiOi0zNC41NzQ3OTc4NDQ3NzAxLFwibG5nXCI6LTU4LjM3MTI5NjMyMzQ2NDZ9LHtcImxhdFwiOi0zNC41NzMwNDI5MjQ3MjI0LFwibG5nXCI6LTU4LjM3NDM3MTcwNDYxOTF9LHtcImxhdFwiOi0zNC41NzI5OTczNTg0NDQxLFwibG5nXCI6LTU4LjM3NTUwMDE1NTYxNzZ9LHtcImxhdFwiOi0zNC41NzIwNzE3MzE0MzMsXCJsbmdcIjotNTguMzc1ODU0MzQ0NDA5OH0se1wibGF0XCI6LTM0LjU3MDM5MTcxNzE2OTQsXCJsbmdcIjotNTguMzc4OTUxMzc4MjI2Nn0se1wibGF0XCI6LTM0LjU3MDQ4NjI3ODUzNTEsXCJsbmdcIjotNTguMzgwNTE1NzkxNzY3Mn0se1wibGF0XCI6LTM0LjU3MTAxOTU5NDg4OTgsXCJsbmdcIjotNTguMzgwNzA5NTI1OTc5Nn0se1wibGF0XCI6LTM0LjU3MjI5NjMyNzQzNzMsXCJsbmdcIjotNTguMzc4MzEyNDY3NjY3OH0se1wibGF0XCI6LTM0LjU3Mjc0NzY4NDk5NCxcImxuZ1wiOi01OC4zNzgyODcwNzkyMjMxfSx7XCJsYXRcIjotMzQuNTczNDExNzE4MTU4MSxcImxuZ1wiOi01OC4zODM1ODA1OTUwOTQzfSx7XCJsYXRcIjotMzQuNTc0NDEwMjU4NDgxLFwibG5nXCI6LTU4LjM4MTgxMTY2MTExMX0se1wibGF0XCI6LTM0LjU3MzkyNTIyNzQxNjksXCJsbmdcIjotNTguMzc1NDM4NDkyOTQ3Nn0se1wibGF0XCI6LTM0LjU3NjYwMDU4MTk1ODQsXCJsbmdcIjotNTguMzcwNzU2MDAxMzY0MX0se1wibGF0XCI6LTM0LjU3NzAyMzc5NTE3MSxcImxuZ1wiOi01OC4zNzA2OTU2ODkzNTAyfSx7XCJsYXRcIjotMzQuNTc3NTQ1MjYwMzk1MixcImxuZ1wiOi01OC4zNzY3MTA5MTM3Mjg0fSx7XCJsYXRcIjotMzQuNTc5MTAyMzAzNjE1NSxcImxuZ1wiOi01OC4zNzM5NzE3MjMwMDA5fSx7XCJsYXRcIjotMzQuNTgwNTIwMDcxMzI4MyxcImxuZ1wiOi01OC4zNzUxMjE0ODc3NDY1fSx7XCJsYXRcIjotMzQuNTc5OTUwNDc5MjI5MyxcImxuZ1wiOi01OC4zNzYxNjAwNTEyMDI4fSx7XCJsYXRcIjotMzQuNTgwMTYxOTExNTg4MSxcImxuZ1wiOi01OC4zNzk4MzYyNjc0NzIxfSx7XCJsYXRcIjotMzQuNTc4MjM1Mjk2MTcyOSxcImxuZ1wiOi01OC4zODM1NzEyMzcxMjU1fSx7XCJsYXRcIjotMzQuNTc4MjAxNjUyMzk1MSxcImxuZ1wiOi01OC4zODk4NjQ1NTE4OTJ9LHtcImxhdFwiOi0zNC41ODA4MzA5ODk0NzUyLFwibG5nXCI6LTU4LjM5MTY0NDY0MjYxNDV9LHtcImxhdFwiOi0zNC41ODM1NTEzOTk1MzAxLFwibG5nXCI6LTU4LjM4Njk2MzU3MjkyMjZ9LHtcImxhdFwiOi0zNC41ODc1MDAzNDM1NDE0LFwibG5nXCI6LTU4LjM4MzY4NTg5NTU0NTd9LHtcImxhdFwiOi0zNC41OTE2NDgyNDczNjkzLFwibG5nXCI6LTU4LjM4Nzk0OTk1NDMwNzV9LHtcImxhdFwiOi0zNC41OTkyOTI4NzM1ODA1LFwibG5nXCI6LTU4LjM4Njg2MzQzNzk4Mzd9LHtcImxhdFwiOi0zNC41OTk3NjAzMTk2MzQ4LFwibG5nXCI6LTU4LjM5ODcyMzAwMDExMTR9LHtcImxhdFwiOi0zNC41OTkzNjk3Mjk1NzksXCJsbmdcIjotNTguNDAyMDA4MjE0NDczOX0se1wibGF0XCI6LTM0LjU5ODAzNTk2NTQzMDcsXCJsbmdcIjotNTguNDA0NTA2Njg0NTYxNH0se1wibGF0XCI6LTM0LjU5Nzg1NDc3MTg2NDQsXCJsbmdcIjotNTguNDE2MDAwNDg0OTI0NX0se1wibGF0XCI6LTM0LjU5NDA1NDA2ODg5MTEsXCJsbmdcIjotNTguNDE0MzkzNjQxOTgzN30se1wibGF0XCI6LTM0LjU4OTA1NzE1ODI0MjIsXCJsbmdcIjotNTguNDEwMDgxMDI4Mjc2NH0se1wibGF0XCI6LTM0LjU4MzQ1OTI2ODQyMzcsXCJsbmdcIjotNTguNDA2MTcyMzYxMjgyNn0se1wibGF0XCI6LTM0LjU4MzQyNjM4OTc3MjQsXCJsbmdcIjotNTguNDAxOTQzMDg1NTA1MX0se1wibGF0XCI6LTM0LjU4NDQ3MTg1NDY0NTcsXCJsbmdcIjotNTguNDAwNTQzNjk2MjgyOX0se1wibGF0XCI6LTM0LjU3ODUwNjcyNjMzNDMsXCJsbmdcIjotNTguMzk2NTU5Njg5NzQ1M30se1wibGF0XCI6LTM0LjU3NTczNjc0NjY3ODksXCJsbmdcIjotNTguNDAxMTQ0NTUyMDc1fSx7XCJsYXRcIjotMzQuNTc0MTQwMzczMTMwMixcImxuZ1wiOi01OC40MDI2NDY0MDAwODI5fSx7XCJsYXRcIjotMzQuNTcwODA2OTQ4MjczMSxcImxuZ1wiOi01OC4zOTk3MTU3NTIzNTE3fSx7XCJsYXRcIjotMzQuNTY5MzQ4OTAzNzA3OCxcImxuZ1wiOi01OC40MDAxMjY2NjAxNzExfSx7XCJsYXRcIjotMzQuNTcyMTkwNjkxMjA4MyxcImxuZ1wiOi01OC4zOTUyMDU3OTcwNTEzfV1dfSx7XCJuYW1lXCI6XCJSZXRpcm9cIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjU3ODcwNDMxMDMyNDgsXCJsbmdcIjotNTguMzc0MjcyODk4MTM0NX0se1wibGF0XCI6LTM0LjU3ODIxMDY3ODc4OTQsXCJsbmdcIjotNTguMzY3OTI4NDk1ODczNn0se1wibGF0XCI6LTM0LjU3OTcwNDg2NTU4MTYsXCJsbmdcIjotNTguMzY1MzE1MjI0NTkwMn0se1wibGF0XCI6LTM0LjU4MDE1MDc3MjI2OTgsXCJsbmdcIjotNTguMzY1MjQ1NjQzMzYyfSx7XCJsYXRcIjotMzQuNTgwODMwMDc0NzQzNixcImxuZ1wiOi01OC4zNzA1NTgwNzE1MDMxfSx7XCJsYXRcIjotMzQuNTgxNzI4NjI0OTAwNCxcImxuZ1wiOi01OC4zNjg5Njk2NDYwOTQyfSx7XCJsYXRcIjotMzQuNTgxMjI3MzE1NDI3MixcImxuZ1wiOi01OC4zNjI2MzIyMzMxMDk1fSx7XCJsYXRcIjotMzQuNTgyNDIzMzc5NTg5MyxcImxuZ1wiOi01OC4zNjA1MjUzNjMxMzc0fSx7XCJsYXRcIjotMzQuNTgyODY5NTYwMTU3NixcImxuZ1wiOi01OC4zNjA0NzYzMzgxMDQ1fSx7XCJsYXRcIjotMzQuNTgzNTY2MDQzMjc4NSxcImxuZ1wiOi01OC4zNjYxNDAxMTUxMzQxfSx7XCJsYXRcIjotMzQuNTg0NDk5MzMxNTU5NSxcImxuZ1wiOi01OC4zNjQ5NDA3MzA0NDgxfSx7XCJsYXRcIjotMzQuNTg0MTQ1MDU3NzkzNixcImxuZ1wiOi01OC4zNTk4OTY3MDM2NTYxfSx7XCJsYXRcIjotMzQuNTg1OTMxMzQ1MzgzMyxcImxuZ1wiOi01OC4zNTk3NDE3MzY5OTU0fSx7XCJsYXRcIjotMzQuNTg2MjY2ODQyNDY2OCxcImxuZ1wiOi01OC4zNjM2NTY3MTY5OTY2fSx7XCJsYXRcIjotMzQuNTg3NDkxMDA4Njc1OCxcImxuZ1wiOi01OC4zNjM0OTcwMjMwMTI4fSx7XCJsYXRcIjotMzQuNTg3MTkwNjE4NjIzNCxcImxuZ1wiOi01OC4zNTk1ODQxNTEyMDE2fSx7XCJsYXRcIjotMzQuNTg4Mjk2MjcwMzM1LFwibG5nXCI6LTU4LjM1OTcxODIxNTcxNjd9LHtcImxhdFwiOi0zNC41ODg1NTIyMDUxMDg2LFwibG5nXCI6LTU4LjM2MDgzMjQ0NDE1MDR9LHtcImxhdFwiOi0zNC41ODg5MzYwMjA3MjcsXCJsbmdcIjotNTguMzYwNzQwMjM1MTMxNX0se1wibGF0XCI6LTM0LjU4ODU2Mzg2MjU1NjgsXCJsbmdcIjotNTguMzYwODg4NTgzNjZ9LHtcImxhdFwiOi0zNC41OTAwMDgyNzQ0MjY2LFwibG5nXCI6LTU4LjM2Nzk5MTI5NTc0Mzd9LHtcImxhdFwiOi0zNC41OTA0NDM0OTkyMzU5LFwibG5nXCI6LTU4LjM2NzkzMTQ1OTYzMTF9LHtcImxhdFwiOi0zNC41OTA5NzEyMzE3MTg5LFwibG5nXCI6LTU4LjM2NjUxOTAxNjk2NDJ9LHtcImxhdFwiOi0zNC41OTQyNzMzODU0NTUsXCJsbmdcIjotNTguMzY0MzU3MzYwMjU4Mn0se1wibGF0XCI6LTM0LjU5NDQ2NTQxMjkxNDYsXCJsbmdcIjotNTguMzY0ODMzMDIxOTYzfSx7XCJsYXRcIjotMzQuNTkyODI0NTk5ODYwNixcImxuZ1wiOi01OC4zNjU5NDUxMzI3Mjk4fSx7XCJsYXRcIjotMzQuNTk0MTUwNTE3OTUzNCxcImxuZ1wiOi01OC4zNjkwNTM2MTE0NjMzfSx7XCJsYXRcIjotMzQuNTk3NTIwODkyMTUxNyxcImxuZ1wiOi01OC4zNjc4ODcxMTAyMzE3fSx7XCJsYXRcIjotMzQuNTk3NDMxMjYzOTU2OSxcImxuZ1wiOi01OC4zNjY0OTk4NTg5ODJ9LHtcImxhdFwiOi0zNC41OTgwMzk1MDQyNDQ4LFwibG5nXCI6LTU4LjM2NjEwOTM0OTgxMX0se1wibGF0XCI6LTM0LjU5NzM5ODI2MDU2MjEsXCJsbmdcIjotNTguMzY2MTM4MzYzMjcxfSx7XCJsYXRcIjotMzQuNTk3MjEwMDAzMzU1NCxcImxuZ1wiOi01OC4zNjM4MjUyNTY5NDA3fSx7XCJsYXRcIjotMzQuNTk1NTA0NTYxNzE0OSxcImxuZ1wiOi01OC4zNjQ0MDQ3NTc1NzI2fSx7XCJsYXRcIjotMzQuNTk1MzExMjQ2NTI2NixcImxuZ1wiOi01OC4zNjQwOTg4NjIzMjc5fSx7XCJsYXRcIjotMzQuNTk2NjU5MzU5MDI5LFwibG5nXCI6LTU4LjM2MzQxNTk3OTA4NjJ9LHtcImxhdFwiOi0zNC41OTU1MTY3ODYzNjEzLFwibG5nXCI6LTU4LjM2MDM4MDI2MDE3OTV9LHtcImxhdFwiOi0zNC41OTQ5OTM1ODYyOTMxLFwibG5nXCI6LTU4LjM2MDA1NTM0ODAxMzV9LHtcImxhdFwiOi0zNC41OTQ2ODgxOTk3NzYxLFwibG5nXCI6LTU4LjM1NDI2MTI1MDQ4OTF9LHtcImxhdFwiOi0zNC41OTUzNTY2NDc5NTc2LFwibG5nXCI6LTU4LjM1MTEzODMxOTUwODZ9LHtcImxhdFwiOi0zNC41OTQ4NTczNTEwODUxLFwibG5nXCI6LTU4LjM1NDI3OTUwODczNDZ9LHtcImxhdFwiOi0zNC41OTUyNDQyNzg1MzczLFwibG5nXCI6LTU4LjM1OTI1MTQ5NjMyOTd9LHtcImxhdFwiOi0zNC41OTcxMjU1NjY2Nzg2LFwibG5nXCI6LTU4LjM2MzQ0NTk1NzcxMzl9LHtcImxhdFwiOi0zNC41OTgwNjE0MTc2MjU3LFwibG5nXCI6LTU4LjM2MzIzMzY0Mjc5MjZ9LHtcImxhdFwiOi0zNC41OTgxMzYyMjY2NDE5LFwibG5nXCI6LTU4LjM2Mzg2MTY1NTQ2NDN9LHtcImxhdFwiOi0zNC41OTkyOTI4NzM1ODA1LFwibG5nXCI6LTU4LjM4Njg2MzQzNzk4Mzd9LHtcImxhdFwiOi0zNC41OTE2NDgyNDczNjkzLFwibG5nXCI6LTU4LjM4Nzk0OTk1NDMwNzV9LHtcImxhdFwiOi0zNC41ODc1MDAzNDM1NDE0LFwibG5nXCI6LTU4LjM4MzY4NTg5NTU0NTd9LHtcImxhdFwiOi0zNC41ODM1NTEzOTk1MzAxLFwibG5nXCI6LTU4LjM4Njk2MzU3MjkyMjZ9LHtcImxhdFwiOi0zNC41ODA4MzA5ODk0NzUyLFwibG5nXCI6LTU4LjM5MTY0NDY0MjYxNDV9LHtcImxhdFwiOi0zNC41NzgyMDE2NTIzOTUxLFwibG5nXCI6LTU4LjM4OTg2NDU1MTg5Mn0se1wibGF0XCI6LTM0LjU3ODIzNTI5NjE3MjksXCJsbmdcIjotNTguMzgzNTcxMjM3MTI1NX0se1wibGF0XCI6LTM0LjU4MDE2MTkxMTU4ODEsXCJsbmdcIjotNTguMzc5ODM2MjY3NDcyMX0se1wibGF0XCI6LTM0LjU3OTk1MDQ3OTIyOTMsXCJsbmdcIjotNTguMzc2MTYwMDUxMjAyOH0se1wibGF0XCI6LTM0LjU4MDUyMDA3MTMyODMsXCJsbmdcIjotNTguMzc1MTIxNDg3NzQ2NX0se1wibGF0XCI6LTM0LjU3OTEwMjMwMzYxNTUsXCJsbmdcIjotNTguMzczOTcxNzIzMDAwOX0se1wibGF0XCI6LTM0LjU3NzU0NTI2MDM5NTIsXCJsbmdcIjotNTguMzc2NzEwOTEzNzI4NH0se1wibGF0XCI6LTM0LjU3NzQ4NDA3MDU5MzIsXCJsbmdcIjotNTguMzc2MDQwOTY5MjQyNH0se1wibGF0XCI6LTM0LjU3ODcwNDMxMDMyNDgsXCJsbmdcIjotNTguMzc0MjcyODk4MTM0NX1dXX0se1wibmFtZVwiOlwiTsO6w7FlelwiLFwiY29vcmRzXCI6W1t7XCJsYXRcIjotMzQuNTI3NTUyOTkxNDIwNSxcImxuZ1wiOi01OC40NTY2NTQ5Nzg2NTMyfSx7XCJsYXRcIjotMzQuNTI3OTEzMTA1NjAwMixcImxuZ1wiOi01OC40NTU5NDMxMjc0NjAyfSx7XCJsYXRcIjotMzQuNTI4NjY5MTgxOTkzMixcImxuZ1wiOi01OC40NTU5MTQyNDY2MjUxfSx7XCJsYXRcIjotMzQuNTI5ODgzOTY5ODYwOCxcImxuZ1wiOi01OC40NTQwNzEyODIzODN9LHtcImxhdFwiOi0zNC41MzEzNDAzMzk2Nzc1LFwibG5nXCI6LTU4LjQ1MzU2MjMxNjY3Njd9LHtcImxhdFwiOi0zNC41MzMwNzY4MzM0NzM3LFwibG5nXCI6LTU4LjQ1NTY5NzczNDMxNH0se1wibGF0XCI6LTM0LjUzNTIxMzgzMDQ2OTksXCJsbmdcIjotNTguNDU0OTE2NDk4MDc3OX0se1wibGF0XCI6LTM0LjUzNzc5ODc5MDI3NDEsXCJsbmdcIjotNTguNDU5NDQyNjQyMzY0Mn0se1wibGF0XCI6LTM0LjU0MjY1MjM0MzY0MTMsXCJsbmdcIjotNTguNDQ5Mjc0NjM4MjkwN30se1wibGF0XCI6LTM0LjU0ODk4NDc2OTcxMTIsXCJsbmdcIjotNTguNDU0MTIxMTYzMjM0Nn0se1wibGF0XCI6LTM0LjU1MDUwNDA1MzA3MDgsXCJsbmdcIjotNTguNDUzMDA2MzA0MzYwNn0se1wibGF0XCI6LTM0LjU1ODkyODUyNDE4MyxcImxuZ1wiOi01OC40NjkxODQxOTUwNjgyfSx7XCJsYXRcIjotMzQuNTUyNDIwOTMzODg2NyxcImxuZ1wiOi01OC40NzQ0MzU5MjA0OTAyfSx7XCJsYXRcIjotMzQuNTQ4OTQwMDE1NzkxMSxcImxuZ1wiOi01OC40NjgxODkyNjI2NTV9LHtcImxhdFwiOi0zNC41Mzg2MzA1OTIxMTQ3LFwibG5nXCI6LTU4LjQ3NTk1MzA5ODk2OTF9LHtcImxhdFwiOi0zNC41MzMyNjA4ODY5MjQ2LFwibG5nXCI6LTU4LjQ2Mzc5NTU5Njc1MDl9LHtcImxhdFwiOi0zNC41Mjc2MjAwNzU5MjMyLFwibG5nXCI6LTU4LjQ1ODg5MzA4NjgxMzN9LHtcImxhdFwiOi0zNC41Mjc1NTI5OTE0MjA1LFwibG5nXCI6LTU4LjQ1NjY1NDk3ODY1MzJ9XV19LHtcIm5hbWVcIjpcIkxhIEJvY2FcIixcImNvb3Jkc1wiOltbe1wibGF0XCI6LTM0LjYxOTQzMDcwMjgzNjUsXCJsbmdcIjotNTguMzU1MjAwNDU3NjUzNX0se1wibGF0XCI6LTM0LjYxOTc3MDk0MDk3MjcsXCJsbmdcIjotNTguMzUyNjkyNDQ1ODk3NX0se1wibGF0XCI6LTM0LjYxOTE2NzQxNTQ0MDcsXCJsbmdcIjotNTguMzUxNTIwMDc3ODE4NX0se1wibGF0XCI6LTM0LjYxOTc5MDMzNDczODIsXCJsbmdcIjotNTguMzQ5NTcyMDkwODMyMX0se1wibGF0XCI6LTM0LjYxODk2NTI0MjQ2MjksXCJsbmdcIjotNTguMzQ3ODQ3OTU5MTM3Mn0se1wibGF0XCI6LTM0LjYxODk5OTkyOTc0MTMsXCJsbmdcIjotNTguMzQ0NTkxNjY2OTIzN30se1wibGF0XCI6LTM0LjYxOTYyOTk0Mzg1OSxcImxuZ1wiOi01OC4zNDQ2NjY5NzMzNTE1fSx7XCJsYXRcIjotMzQuNjE5ODM2MjI1MzIwMixcImxuZ1wiOi01OC4zNDUxODQ4NDA5NjY5fSx7XCJsYXRcIjotMzQuNjE5MjExNTc0NzAzOSxcImxuZ1wiOi01OC4zNDYzMjM2MzI1MDE5fSx7XCJsYXRcIjotMzQuNjE5OTg5Mjg4OTMzMixcImxuZ1wiOi01OC4zNDcxNTA1ODgwNzMzfSx7XCJsYXRcIjotMzQuNjIyOTU1NTc1NjQwMixcImxuZ1wiOi01OC4zNDU5MzIzNDczMTd9LHtcImxhdFwiOi0zNC42MjIwMDg0MDI0MTA0LFwibG5nXCI6LTU4LjM0NjA5MTkyNTM1ODF9LHtcImxhdFwiOi0zNC42MjE1MTg2MDU1MTk5LFwibG5nXCI6LTU4LjM0NTQ4MTU2NDc2NTh9LHtcImxhdFwiOi0zNC42MjEzNDA5ODUwNDMsXCJsbmdcIjotNTguMzQ0NzAzNjMzMDM2fSx7XCJsYXRcIjotMzQuNjIxNzU4Njg2MjQxMSxcImxuZ1wiOi01OC4zNDQwNTcyMzY2NzA2fSx7XCJsYXRcIjotMzQuNjE5NDg5NjA1NTIzNixcImxuZ1wiOi01OC4zNDQwNDY3Mjc3MjQ2fSx7XCJsYXRcIjotMzQuNjE4NTY3ODYxNDcxNSxcImxuZ1wiOi01OC4zNDI4NTQ3NTE2Njk0fSx7XCJsYXRcIjotMzQuNjE4NjY0NjE2MzE4OSxcImxuZ1wiOi01OC4zMzg4NjUxNTM3NTU1fSx7XCJsYXRcIjotMzQuNjE5MTIzODMyNTM0NyxcImxuZ1wiOi01OC4zMzgxOTY5MDk0NjU1fSx7XCJsYXRcIjotMzQuNjIxNjM1MjUyMTE1NSxcImxuZ1wiOi01OC4zMzcxNjE1OTQ1MDIyfSx7XCJsYXRcIjotMzQuNjIyNzYzNzM1MTM3MSxcImxuZ1wiOi01OC4zMzczMjUwNDI3NjE5fSx7XCJsYXRcIjotMzQuNjIyODUyNDQ4MDEzLFwibG5nXCI6LTU4LjM0MTY3MjE4NTQ3NDN9LHtcImxhdFwiOi0zNC42MjIyMzg1MDE5MzA4LFwibG5nXCI6LTU4LjM0MjA3ODY1NzU5NzR9LHtcImxhdFwiOi0zNC42MjI2ODEwMDE5OTQ3LFwibG5nXCI6LTU4LjM0MzA2NDQwNzU2ODd9LHtcImxhdFwiOi0zNC42MjM3MDg3NzE0MzQ2LFwibG5nXCI6LTU4LjM0MjI0Mjk3NDA3Mjl9LHtcImxhdFwiOi0zNC42MjMxNDM1NjY1NjQxLFwibG5nXCI6LTU4LjM0MTg4MjAwNDg1NzJ9LHtcImxhdFwiOi0zNC42MjMxMzY2NTMzNTgzLFwibG5nXCI6LTU4LjM0MDY2NzUzMzAxNzl9LHtcImxhdFwiOi0zNC42MjQ2NjMwMzc3ODM1LFwibG5nXCI6LTU4LjMzODQ4NzMxOTk2NTl9LHtcImxhdFwiOi0zNC42MjQ4NDcwMTQ5MjgyLFwibG5nXCI6LTU4LjMzNzA0MDIzNjc1NjN9LHtcImxhdFwiOi0zNC42MjY0NTI4NTMyOTUxLFwibG5nXCI6LTU4LjMzNTE0NDAzMjUwMTF9LHtcImxhdFwiOi0zNC42MjcxMjMxMzY0NzA4LFwibG5nXCI6LTU4LjMzNTE0MzAwNjcxMjV9LHtcImxhdFwiOi0zNC42MjgxOTY5MTQwMTc1LFwibG5nXCI6LTU4LjMzNjE5MjcxNjgyMTN9LHtcImxhdFwiOi0zNC42Mjg5MjEzNTYyNDY4LFwibG5nXCI6LTU4LjMzODg2Mzc2ODgwMDJ9LHtcImxhdFwiOi0zNC42Mjc4NDI1Njg3NTA1LFwibG5nXCI6LTU4LjMzOTczMjAyNjM5MzR9LHtcImxhdFwiOi0zNC42Mjc4MjgyNDMxMDQ3LFwibG5nXCI6LTU4LjM0MDY0NDgwMDQyNzV9LHtcImxhdFwiOi0zNC42MjYxODM4NDY2NzQzLFwibG5nXCI6LTU4LjM0MjQzMjcyNjg2M30se1wibGF0XCI6LTM0LjYyNjM5MTQxODg0MTMsXCJsbmdcIjotNTguMzQ0MjczMjY5MDYxfSx7XCJsYXRcIjotMzQuNjI4NTgxMTE3MzQzNSxcImxuZ1wiOi01OC4zNDE1NjU2Nzk0MzA1fSx7XCJsYXRcIjotMzQuNjI4OTU5NDYwMTQxNSxcImxuZ1wiOi01OC4zNDEzODk5NTE5NTU4fSx7XCJsYXRcIjotMzQuNjI5NDg4OTQ2OTQ0MixcImxuZ1wiOi01OC4zNDI0ODYzNTA0NTkzfSx7XCJsYXRcIjotMzQuNjI4MDE1MDE3ODQ5MixcImxuZ1wiOi01OC4zNDQ1NzIxNDA3MDEzfSx7XCJsYXRcIjotMzQuNjI4MzczNjMxNzE1LFwibG5nXCI6LTU4LjM0NTAwNDk2MjAyMzN9LHtcImxhdFwiOi0zNC42MjcxOTIxODcyNTM3LFwibG5nXCI6LTU4LjM0NjQ0OTE0NzY3NTd9LHtcImxhdFwiOi0zNC42Mjc0MDU3ODAyOTU3LFwibG5nXCI6LTU4LjM0NjcwMDk0OTg1OTZ9LHtcImxhdFwiOi0zNC42Mjg2Njk3MzY2MDAyLFwibG5nXCI6LTU4LjM0NTM2NjYzODQ1MTV9LHtcImxhdFwiOi0zNC42MjcyODIwNjc3MTUxLFwibG5nXCI6LTU4LjM0NzA0OTI2MDc4OH0se1wibGF0XCI6LTM0LjYyOTA4MzgzMjI4MjUsXCJsbmdcIjotNTguMzQ4NzgzNjgxN30se1wibGF0XCI6LTM0LjYyOTkzNzUxNjg1NDYsXCJsbmdcIjotNTguMzQ3OTYwNjk0NTEzMX0se1wibGF0XCI6LTM0LjYzMDI4Njg0MjUzNzEsXCJsbmdcIjotNTguMzQ4Mjk4MDMzMDE0NH0se1wibGF0XCI6LTM0LjYzMTE2NjU5MDA1MTQsXCJsbmdcIjotNTguMzQ3OTIxMDMyMjYwNH0se1wibGF0XCI6LTM0LjYzMDkwMTczNTkxNjYsXCJsbmdcIjotNTguMzQ3NjU2OTUxMDczOX0se1wibGF0XCI6LTM0LjYzMTM5MzQ3NDAzMzcsXCJsbmdcIjotNTguMzQ3NTY5MjgyMzMzMn0se1wibGF0XCI6LTM0LjYzMTY1OTU1NzI4OTgsXCJsbmdcIjotNTguMzQ2MDk3MDQ5MjMyMX0se1wibGF0XCI6LTM0LjYzMjExODMxNTM4ODIsXCJsbmdcIjotNTguMzQ3NzQ1OTExMzA0N30se1wibGF0XCI6LTM0LjYzMjYxNTU2OTIyNjUsXCJsbmdcIjotNTguMzQ3Njk2MzI5MjE0fSx7XCJsYXRcIjotMzQuNjMyNTczNDgyMDgyOCxcImxuZ1wiOi01OC4zNDkwMzc5MDg3NjAxfSx7XCJsYXRcIjotMzQuNjMyMzQ4NTczNjk5NyxcImxuZ1wiOi01OC4zNTAxMTYxMDQwMjc0fSx7XCJsYXRcIjotMzQuNjMxMzU1Nzg0MjgxOSxcImxuZ1wiOi01OC4zNTExMzgzMjU5MzE5fSx7XCJsYXRcIjotMzQuNjI5MjgxODY0Nzc0NyxcImxuZ1wiOi01OC4zNTE4NTA5NzkwNDIyfSx7XCJsYXRcIjotMzQuNjI5MTYxNzE4ODgzLFwibG5nXCI6LTU4LjM1Mjk4ODEyODAzMjl9LHtcImxhdFwiOi0zNC42MjM5MTM0NDI3MjU5LFwibG5nXCI6LTU4LjM2MDUxMzQwNDIyNDl9LHtcImxhdFwiOi0zNC42MjQyNTM3MjM1MzgyLFwibG5nXCI6LTU4LjM2MDg5MjA4MzY5NDd9LHtcImxhdFwiOi0zNC42MjM2ODg3Mzc4NzA5LFwibG5nXCI6LTU4LjM2MTczMzk3MTE0MDd9LHtcImxhdFwiOi0zNC42MjQzOTM3MTI2MzAzLFwibG5nXCI6LTU4LjM2MTAxODY5NDMwMzN9LHtcImxhdFwiOi0zNC42MjQ2ODQ2NDM4ODYxLFwibG5nXCI6LTU4LjM2MTI2MjI2ODAyMDJ9LHtcImxhdFwiOi0zNC42MjkxMTEyOTAwMzc5LFwibG5nXCI6LTU4LjM1NDc3MDgzMzU2OTN9LHtcImxhdFwiOi0zNC42MzM1ODE5MTgxODMxLFwibG5nXCI6LTU4LjM1Mjc1Mzg4NzMxNDR9LHtcImxhdFwiOi0zNC42MzY1MzAwMzc2NzU4LFwibG5nXCI6LTU4LjM1NDEzMTA3NDE4MzR9LHtcImxhdFwiOi0zNC42Mzg1ODc5MDY5MTM1LFwibG5nXCI6LTU4LjM1NjkzODU5Mjg3NTZ9LHtcImxhdFwiOi0zNC42MzkyMjY5NDIxMDExLFwibG5nXCI6LTU4LjM1ODAyMjU1NDA3NzV9LHtcImxhdFwiOi0zNC42Mzk0MTkyOTU5NjYsXCJsbmdcIjotNTguMzYxMTEwNTgwNzY3Mn0se1wibGF0XCI6LTM0LjYzOTg5MzA1NTg0MSxcImxuZ1wiOi01OC4zNjE0MjI2NDE4MTYzfSx7XCJsYXRcIjotMzQuNjQwNzIyODUxNTMwMSxcImxuZ1wiOi01OC4zNjA5MDI4MjIwMzY2fSx7XCJsYXRcIjotMzQuNjQxODY4ODIzMjk4MyxcImxuZ1wiOi01OC4zNTgxMjUzMjY5MDIxfSx7XCJsYXRcIjotMzQuNjQ0MDQ0MjgzODEyMyxcImxuZ1wiOi01OC4zNTczMTczMzA5MTkyfSx7XCJsYXRcIjotMzQuNjQ0OTgyNDM2NjQ3OCxcImxuZ1wiOi01OC4zNTc1OTA1OTY0MTY2fSx7XCJsYXRcIjotMzQuNjQ1OTgyODc1NDc5OCxcImxuZ1wiOi01OC4zNTk3OTY2NjQwMDQ5fSx7XCJsYXRcIjotMzQuNjQ3OTQ0NzkxNjIxMyxcImxuZ1wiOi01OC4zNjE3MDg3MjQ2MTY5fSx7XCJsYXRcIjotMzQuNjQ4MzIwMTQwNDU4OSxcImxuZ1wiOi01OC4zNjQzNDgwODgyNjQ0fSx7XCJsYXRcIjotMzQuNjUwMTM2NjE3MDE5NixcImxuZ1wiOi01OC4zNjc2NDg4MzYzMTk0fSx7XCJsYXRcIjotMzQuNjI5NDkzNzg1Njg0OSxcImxuZ1wiOi01OC4zNzA2NTgxNTc2NjE4fSx7XCJsYXRcIjotMzQuNjI3MTQyNDA0NzgwMyxcImxuZ1wiOi01OC4zNjc5NDUxMzMzMjc0fSx7XCJsYXRcIjotMzQuNjI1MTk1NDU4MDQzNCxcImxuZ1wiOi01OC4zNjc5NzEyMDA5MjQ4fSx7XCJsYXRcIjotMzQuNjI1MTM5NTczMjc2OCxcImxuZ1wiOi01OC4zNjMxMTU4MTYzOTc5fSx7XCJsYXRcIjotMzQuNjE3NjM4NzYzNjQ5OSxcImxuZ1wiOi01OC4zNTU5OTc2NTU3NDE1fSx7XCJsYXRcIjotMzQuNjE5NDMwNzAyODM2NSxcImxuZ1wiOi01OC4zNTUyMDA0NTc2NTM1fV1dfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcmVhcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJuYW1lXCI6XCJDaGFjYXJpdGFcIixcInJlbnRcIjoyNzEwMS42MzA0LFwicHJpY2VcIjozMzg0MTY3LjE0MTQsXCJjb3VudFwiOjE2NDJ9LHtcIm5hbWVcIjpcIlBhdGVybmFsXCIsXCJyZW50XCI6MjMyMjUsXCJwcmljZVwiOjI3NjE2MDQuMTcwOCxcImNvdW50XCI6MzEyfSx7XCJuYW1lXCI6XCJWaWxsYSBDcmVzcG9cIixcInJlbnRcIjozMDEwNS4zNTcxLFwicHJpY2VcIjozNTkzODE1LjMyMzIsXCJjb3VudFwiOjI5MTN9LHtcIm5hbWVcIjpcIlZpbGxhIGRlbCBQYXJxdWVcIixcInJlbnRcIjozMzA1Mi4wNTQ4LFwicHJpY2VcIjozMzkzMDQzLjU0NTUsXCJjb3VudFwiOjY3M30se1wibmFtZVwiOlwiQWxtYWdyb1wiLFwicmVudFwiOjIzMjcwLjI3MTcsXCJwcmljZVwiOjMzMDA2NjMuMTIsXCJjb3VudFwiOjI0Mjh9LHtcIm5hbWVcIjpcIkNhYmFsbGl0b1wiLFwicmVudFwiOjI4NjQwLjM2NjksXCJwcmljZVwiOjMyMzcwNDIuNTQyLFwiY291bnRcIjozMjMyfSx7XCJuYW1lXCI6XCJWaWxsYSBTYW50YSBSaXRhXCIsXCJyZW50XCI6MTcxNDQsXCJwcmljZVwiOjM0NzczMzguMDE5OSxcImNvdW50XCI6NDQ2fSx7XCJuYW1lXCI6XCJNb250ZSBDYXN0cm9cIixcInJlbnRcIjoxNDg0NC40NDQ0LFwicHJpY2VcIjozMDkwNjE4LjAwMyxcImNvdW50XCI6NDI2fSx7XCJuYW1lXCI6XCJWaWxsYSBSZWFsXCIsXCJyZW50XCI6MTIzMzYuMzYzNixcInByaWNlXCI6MzIyNjc3MixcImNvdW50XCI6MTA5fSx7XCJuYW1lXCI6XCJGbG9yZXNcIixcInJlbnRcIjoyODMzMC4wODQ2LFwicHJpY2VcIjozMjA4NzM4LjM4MDksXCJjb3VudFwiOjM0Nzd9LHtcIm5hbWVcIjpcIkZsb3Jlc3RhXCIsXCJyZW50XCI6MTcwODcuNjYyMyxcInByaWNlXCI6MzAzMzQxMS4zOTA0LFwiY291bnRcIjo4NDN9LHtcIm5hbWVcIjpcIkNvbnN0aXR1Y2nDs25cIixcInJlbnRcIjo0NzUxMixcInByaWNlXCI6Mjc3NzQyMC45MDc1LFwiY291bnRcIjo2NjJ9LHtcIm5hbWVcIjpcIlNhbiBDcmlzdMOzYmFsXCIsXCJyZW50XCI6Mjc2MjkuMDMyMyxcInByaWNlXCI6MzI0OTQwMC45MDgxLFwiY291bnRcIjo3MDN9LHtcIm5hbWVcIjpcIkJvZWRvXCIsXCJyZW50XCI6MjUzODEuODE4MixcInByaWNlXCI6NDg3MTYzMy43Mzg3LFwiY291bnRcIjo1MjV9LHtcIm5hbWVcIjpcIlbDqWxleiBTw6Fyc2ZpZWxkXCIsXCJyZW50XCI6MjMxMjIuOTE2NyxcInByaWNlXCI6MzAyMzUwOS4wNjQyLFwiY291bnRcIjo4MjB9LHtcIm5hbWVcIjpcIlZpbGxhIEx1cm9cIixcInJlbnRcIjoyOTI4Ny45NjMsXCJwcmljZVwiOjMwNTE4MzEuNjk5MSxcImNvdW50XCI6NzMyfSx7XCJuYW1lXCI6XCJQYXJxdWUgUGF0cmljaW9zXCIsXCJyZW50XCI6NDUwNjEuNjEzNixcInByaWNlXCI6MjU2NDUxOS4xNjY3LFwiY291bnRcIjozOTZ9LHtcIm5hbWVcIjpcIk1hdGFkZXJvc1wiLFwicmVudFwiOjEzNjg3LjMyMzksXCJwcmljZVwiOjMxNDUzNzEuMjQ0MyxcImNvdW50XCI6OTM0fSx7XCJuYW1lXCI6XCJWaWxsYSBMdWdhbm9cIixcInJlbnRcIjoxNDE3Ni4zMTU4LFwicHJpY2VcIjoyNzAyOTI4LjEzODUsXCJjb3VudFwiOjMzN30se1wibmFtZVwiOlwiU2FuIFRlbG1vXCIsXCJyZW50XCI6MzAxMDAsXCJwcmljZVwiOjQ5OTk5MjIuNzU0NixcImNvdW50XCI6NzUzfSx7XCJuYW1lXCI6XCJTYWF2ZWRyYVwiLFwicmVudFwiOjIwNzkyLjUyMzQsXCJwcmljZVwiOjM1NTAzMzMuMDY2NyxcImNvdW50XCI6MTQ1OX0se1wibmFtZVwiOlwiQ29naGxhblwiLFwicmVudFwiOjEzMTEzLjMzMzMsXCJwcmljZVwiOjM0NzY0ODEuNzY3OCxcImNvdW50XCI6NjI1fSx7XCJuYW1lXCI6XCJWaWxsYSBVcnF1aXphXCIsXCJyZW50XCI6MjA4NTguOTI4NixcInByaWNlXCI6MzYzNzM3Ny4xMTkyLFwiY291bnRcIjoxODgyfSx7XCJuYW1lXCI6XCJDb2xlZ2lhbGVzXCIsXCJyZW50XCI6MzY4OTgsXCJwcmljZVwiOjU2MDgzNzkuMDk5NSxcImNvdW50XCI6MTE0NH0se1wibmFtZVwiOlwiQmFsdmFuZXJhXCIsXCJyZW50XCI6MzUzNjguODk2NixcInByaWNlXCI6MzA5Nzc5NC44NjcsXCJjb3VudFwiOjIzMjR9LHtcIm5hbWVcIjpcIlZpbGxhIEdyYWwuIE1pdHJlXCIsXCJyZW50XCI6MTg4MjguMjA1MSxcInByaWNlXCI6MjczMDA0Ni45MzcyLFwiY291bnRcIjo2OTR9LHtcIm5hbWVcIjpcIlBhcnF1ZSBDaGFzXCIsXCJyZW50XCI6MTM5NzAsXCJwcmljZVwiOjMzMDY0NjYuNDg3LFwiY291bnRcIjoyNjR9LHtcIm5hbWVcIjpcIkFncm9ub23DrWFcIixcInJlbnRcIjoxMDE2My40NjE1LFwicHJpY2VcIjozMTAzNzEyLjg4OTgsXCJjb3VudFwiOjMxOX0se1wibmFtZVwiOlwiVmlsbGEgT3J0w7p6YXJcIixcInJlbnRcIjozMjI3NS40Mzg2LFwicHJpY2VcIjozODY1NjM4LjcwNjksXCJjb3VudFwiOjU2OX0se1wibmFtZVwiOlwiQmFycmFjYXNcIixcInJlbnRcIjozNTI2MC44MTI1LFwicHJpY2VcIjozNjkyODQ5Ljc2ODQsXCJjb3VudFwiOjk1N30se1wibmFtZVwiOlwiUGFycXVlIEF2ZWxsYW5lZGFcIixcInJlbnRcIjoyMTQyMS44NzUsXCJwcmljZVwiOjM0MTI5MzQuMDY5OSxcImNvdW50XCI6NTAwfSx7XCJuYW1lXCI6XCJQYXJxdWUgQ2hhY2FidWNvXCIsXCJyZW50XCI6MTYxNzcuNzc3OCxcInByaWNlXCI6MzQwNDI5Ni4wOTIxLFwiY291bnRcIjo3NDR9LHtcIm5hbWVcIjpcIk51ZXZhIFBvbXBleWFcIixcInJlbnRcIjo3MjUxMixcInByaWNlXCI6MzE4NTgwMi41Mzc0LFwiY291bnRcIjoyNDd9LHtcIm5hbWVcIjpcIlBhbGVybW9cIixcInJlbnRcIjo0MDI4OS44MTMyLFwicHJpY2VcIjo2NzMyMjkzLjUzMDgsXCJjb3VudFwiOjk2NTB9LHtcIm5hbWVcIjpcIlZpbGxhIFJpYWNodWVsb1wiLFwicmVudFwiOjY5NDYuMTUzOCxcInByaWNlXCI6MjE3NzAwMCxcImNvdW50XCI6OTR9LHtcIm5hbWVcIjpcIlZpbGxhIFNvbGRhdGlcIixcInJlbnRcIjo1ODAwLFwicHJpY2VcIjoyMjc5MTA2LjM4MyxcImNvdW50XCI6NjN9LHtcIm5hbWVcIjpcIlZpbGxhIFB1ZXlycmVkb25cIixcInJlbnRcIjozOTkwMS4xNjI4LFwicHJpY2VcIjozNDMyMTQ1LjU1NjIsXCJjb3VudFwiOjYyMX0se1wibmFtZVwiOlwiVmlsbGEgRGV2b3RvXCIsXCJyZW50XCI6MTM2MzEuMzk1MyxcInByaWNlXCI6MzkzMjI0MC42MDU3LFwiY291bnRcIjo5MDJ9LHtcIm5hbWVcIjpcIkxpbmllcnNcIixcInJlbnRcIjoyMDIzNy41LFwicHJpY2VcIjoyODcwMzk3LjIxMjksXCJjb3VudFwiOjc5OH0se1wibmFtZVwiOlwiVmVyc2FsbGVzXCIsXCJyZW50XCI6MTIzNTMuMzMzMyxcInByaWNlXCI6NDAxMDYxMC42MzgzLFwiY291bnRcIjoxMTl9LHtcIm5hbWVcIjpcIlB1ZXJ0byBNYWRlcm9cIixcInJlbnRcIjo1NjE5NC42NjE4LFwicHJpY2VcIjoxNjQ3Mzg5OC43NDM5LFwiY291bnRcIjoxNTMwfSx7XCJuYW1lXCI6XCJNb25zZXJyYXRcIixcInJlbnRcIjo0NTYyNi43NzQyLFwicHJpY2VcIjozNDA4MTI4Ljg4MzgsXCJjb3VudFwiOjEyOTN9LHtcIm5hbWVcIjpcIlNhbiBOaWNvbMOhc1wiLFwicmVudFwiOjY4ODk0Ljg4ODYsXCJwcmljZVwiOjQzMzE5NzAuMzM0OSxcImNvdW50XCI6MTg4N30se1wibmFtZVwiOlwiQmVsZ3Jhbm9cIixcInJlbnRcIjozOTI5OS44ODYxLFwicHJpY2VcIjo2Njc1MDI3LjIxNDgsXCJjb3VudFwiOjQ4MjJ9LHtcIm5hbWVcIjpcIlJlY29sZXRhXCIsXCJyZW50XCI6NDI2MjEuNDkxOSxcInByaWNlXCI6Nzg3MzgwMi45NTA3LFwiY291bnRcIjo1NTM0fSx7XCJuYW1lXCI6XCJSZXRpcm9cIixcInJlbnRcIjo0NjQxOC44OTc2LFwicHJpY2VcIjo5MjA0OTI2LjUzNzEsXCJjb3VudFwiOjE4MzV9LHtcIm5hbWVcIjpcIk7DusOxZXpcIixcInJlbnRcIjozMDg1MCxcInByaWNlXCI6NTE1MTIxNS40NjIyLFwiY291bnRcIjoxNTE0fSx7XCJuYW1lXCI6XCJMYSBCb2NhXCIsXCJyZW50XCI6NDI3NDguMjQyOSxcInByaWNlXCI6ODY5NTQwNi42MDE3LFwiY291bnRcIjo5NzR9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0YXRzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDQUxMQkFDS19OQU1FID0gJ19fZ29vZ2xlTWFwc0FwaU9uTG9hZENhbGxiYWNrJ1xuXG52YXIgT1BUSU9OU19LRVlTID0gWydjbGllbnQnLCAna2V5JywgJ2xhbmd1YWdlJywgJ3JlZ2lvbicsICd2J11cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIC8vIEV4aXQgaWYgbm90IHJ1bm5pbmcgaW5zaWRlIGEgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcignQ2FuIG9ubHkgbG9hZCB0aGUgR29vZ2xlIE1hcHMgQVBJIGluIHRoZSBicm93c2VyJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBSZWplY3QgdGhlIHByb21pc2UgYWZ0ZXIgYSB0aW1lb3V0LlxuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93W0NBTExCQUNLX05BTUVdID0gZnVuY3Rpb24oKSB7fSAvLyBTZXQgdGhlIG9uIGxvYWQgY2FsbGJhY2sgdG8gYSBuby1vcC5cbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NvdWxkIG5vdCBsb2FkIHRoZSBHb29nbGUgTWFwcyBBUEknKSlcbiAgICB9LCBvcHRpb25zLnRpbWVvdXQgfHwgMTAwMDApXG5cbiAgICAvLyBIb29rIHVwIHRoZSBvbiBsb2FkIGNhbGxiYWNrLlxuICAgIHdpbmRvd1tDQUxMQkFDS19OQU1FXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKVxuICAgICAgfVxuICAgICAgcmVzb2x2ZSh3aW5kb3cuZ29vZ2xlLm1hcHMpXG4gICAgICBkZWxldGUgd2luZG93W0NBTExCQUNLX05BTUVdXG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSB0aGUgYHNjcmlwdGAgdGFnIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHBhZ2UuXG4gICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIHZhciBwYXJhbXMgPSBbJ2NhbGxiYWNrPScgKyBDQUxMQkFDS19OQU1FXVxuICAgIE9QVElPTlNfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKG9wdGlvbnNba2V5XSkge1xuICAgICAgICBwYXJhbXMucHVzaChrZXkgKyAnPScgKyBvcHRpb25zW2tleV0pXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAob3B0aW9ucy5saWJyYXJpZXMgJiYgb3B0aW9ucy5saWJyYXJpZXMubGVuZ3RoKSB7XG4gICAgICBwYXJhbXMucHVzaCgnbGlicmFyaWVzPScgKyBvcHRpb25zLmxpYnJhcmllcy5qb2luKCcsJykpXG4gICAgfVxuICAgIHNjcmlwdEVsZW1lbnQuc3JjID1cbiAgICAgICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JyArIHBhcmFtcy5qb2luKCcmJylcblxuICAgIC8vIEluc2VydCB0aGUgYHNjcmlwdGAgdGFnLlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudClcbiAgfSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvYWQtZ29vZ2xlLW1hcHMtYXBpL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCduYXRpdmVqc3gvZGlzdC9uYXRpdmVqc3gtcHJvdG90eXBlcy5qcycpO1xuZXhwb3J0IGRlZmF1bHQgW1xuICBcIiMwMDgwMDBcIixcbiAgXCIjMjQ3YzAwXCIsXG4gIFwiIzMzNzcwMFwiLFxuICBcIiMzZTczMDBcIixcbiAgXCIjNDY3MDAwXCIsXG4gIFwiIzRlNmMwMFwiLFxuICBcIiM1NTY3MDBcIixcbiAgXCIjNWM2MTAwXCIsXG4gIFwiIzYxNWUwMFwiLFxuICBcIiM2NjU5MDBcIixcbiAgXCIjNmI1MzAwXCIsXG4gIFwiIzZmNGUwMFwiLFxuICBcIiM3NDQ5MDBcIixcbiAgXCIjNzg0MzAwXCIsXG4gIFwiIzdiM2MwMFwiLFxuICBcIiM3ZjM0MDBcIixcbiAgXCIjODIyZDAwXCIsXG4gIFwiIzg1MjQwMFwiLFxuICBcIiM4ODE4MDBcIixcbiAgXCIjOGIwMDAwXCJcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb2xvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJ25hdGl2ZWpzeC9kaXN0L25hdGl2ZWpzeC1wcm90b3R5cGVzLmpzJyk7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGRldGFpbHMgZnJvbSAnLi9kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5jb25zdCBjb250YWluZXJTdHlsZSA9IGNzcyh7XG4gICAgd2lkdGg6IDE1MCxcbiAgICB6SW5kZXg6IDEwLFxuICAgIHRvcDogNSxcbiAgICBsZWZ0OiA1LFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgcG9zaXRpb246ICdmaXhlZCdcbn0pO1xubGV0ICRjb250YWluZXIsICRyYXRpbywgJHJlbnQsICRwcmljZTtcbiRjb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICQkYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAkJGEuc2V0QXR0cmlidXRlcyhjb250YWluZXJTdHlsZSk7XG4gICAgdmFyICQkYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgJCRiLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICQkYi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbW9kZScpO1xuICAgICQkYi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3JhdGlvJyk7XG4gICAgKGUgPT4gJHJhdGlvID0gZSkoJCRiKTtcbiAgICAkJGEuYXBwZW5kQ2hpbGQoJCRiKTtcbiAgICB2YXIgJCRjID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyBWZW50YS9BbHF1aWxlcicpO1xuICAgICQkYS5hcHBlbmRDaGlsZCgkJGMpO1xuICAgIHZhciAkJGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICQkYS5hcHBlbmRDaGlsZCgkJGQpO1xuICAgIHZhciAkJGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICQkZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAkJGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ21vZGUnKTtcbiAgICAkJGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdyZW50Jyk7XG4gICAgKGUgPT4gJHJlbnQgPSBlKSgkJGUpO1xuICAgICQkYS5hcHBlbmRDaGlsZCgkJGUpO1xuICAgIHZhciAkJGYgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIEFscXVpbGVyJyk7XG4gICAgJCRhLmFwcGVuZENoaWxkKCQkZik7XG4gICAgdmFyICQkZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgJCRhLmFwcGVuZENoaWxkKCQkZyk7XG4gICAgdmFyICQkaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgJCRoLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICQkaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbW9kZScpO1xuICAgICQkaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3ByaWNlJyk7XG4gICAgKGUgPT4gJHByaWNlID0gZSkoJCRoKTtcbiAgICAkJGEuYXBwZW5kQ2hpbGQoJCRoKTtcbiAgICB2YXIgJCRpID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyBWZW50YVxcbiAgJyk7XG4gICAgJCRhLmFwcGVuZENoaWxkKCQkaSk7XG4gICAgcmV0dXJuICQkYTtcbn0uY2FsbCh0aGlzKTtcbmNvbnN0IHN0YXRlID0geyBtb2RlOiAncmF0aW8nIH07XG5mdW5jdGlvbiBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcik7XG59XG5sZXQgJG1vZGVzID0gW1xuICAgICRyYXRpbyxcbiAgICAkcmVudCxcbiAgICAkcHJpY2Vcbl07XG4kbW9kZXMuZm9yRWFjaCgkbW9kZSA9PiB7XG4gICAgJG1vZGUuY2hlY2tlZCA9IHN0YXRlLm1vZGUgPT09ICRtb2RlLnZhbHVlO1xuICAgICRtb2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHsgbW9kZTogJG1vZGUudmFsdWUgfTtcbiAgICAgICAgc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICBtYXAuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICBkZXRhaWxzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9O1xufSk7XG5kZXRhaWxzLnNldFN0YXRlKHN0YXRlKTtcbmZ1bmN0aW9uIHNldFN0YXRlKHBhcnRpYWxTdGF0ZSkge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBhcnRpYWxTdGF0ZSk7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZWxlbWVudDogJGNvbnRhaW5lcixcbiAgICBzZXRTdGF0ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2RlLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==