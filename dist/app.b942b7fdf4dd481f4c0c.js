webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(253);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsImmutabilityHelper = __webpack_require__(84);
	
	var _utilsImmutabilityHelper2 = _interopRequireDefault(_utilsImmutabilityHelper);
	
	var _utilsStyles = __webpack_require__(200);
	
	var _utilsStyles2 = _interopRequireDefault(_utilsStyles);
	
	// This mixin isn't necessary and will be removed
	
	/**
	 *	@params:
	 *	styles = Current styles.
	 *  props = New style properties that will override the current style.
	 */
	exports['default'] = {
	
	  propTypes: {
	    style: _react2['default'].PropTypes.object
	  },
	
	  //Moved this function to ImmutabilityHelper.merge
	  mergeStyles: function mergeStyles() {
	    return _utilsImmutabilityHelper2['default'].merge.apply(this, arguments);
	  },
	
	  //Moved this function to /utils/styles.js
	  mergeAndPrefix: function mergeAndPrefix() {
	    return _utilsStyles2['default'].mergeAndPrefix.apply(this, arguments);
	  },
	
	  // prepareStyles is used to merge multiple styles, make sure they are flipped to rtl
	  // if needed, and then autoprefix them. It should probably always be used instead of
	  // mergeAndPrefix.
	  //
	  // Never call this on the same style object twice. As a rule of thumb,
	  // only call it when passing style attribute to html elements.
	  // If you call it twice you'll get a warning anyway.
	  prepareStyles: function prepareStyles() {
	    return _utilsStyles2['default'].prepareStyles.apply(_utilsStyles2['default'], [this.state && this.state.muiTheme || this.context.muiTheme].concat([].slice.apply(arguments)));
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _baseThemesLightBaseTheme = __webpack_require__(198);
	
	exports['default'] = _interopRequire(_baseThemesLightBaseTheme);
	
	// import deprecatedExport from '../../utils/deprecatedExport';
	
	// export default deprecatedExport(
	//   lightBaseTheme,
	//   'material-ui/lib/styles/raw-themes/light-raw-theme',
	//   'material-ui/lib/styles/baseThemes/lightBaseTheme'
	// );
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactAddonsUpdate = __webpack_require__(203);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _utilsExtend = __webpack_require__(464);
	
	var _utilsExtend2 = _interopRequireDefault(_utilsExtend);
	
	var _getMuiTheme = __webpack_require__(452);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	// import deprecatedExport from '../utils/deprecatedExport';
	
	exports['default'] = // deprecatedExport(
	{
	  getMuiTheme: _getMuiTheme2['default'],
	  modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, spacing) {
	    return (0, _getMuiTheme2['default'])((0, _reactAddonsUpdate2['default'])(muiTheme.baseTheme, { spacing: { $set: spacing } }));
	  },
	  modifyRawThemePalette: function modifyRawThemePalette(muiTheme, palette) {
	    var newPalette = (0, _utilsExtend2['default'])(muiTheme.baseTheme.palette, palette);
	    return (0, _getMuiTheme2['default'])((0, _reactAddonsUpdate2['default'])(muiTheme.baseTheme, { palette: { $set: newPalette } }));
	  },
	  modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, fontFamily) {
	    return (0, _getMuiTheme2['default'])((0, _reactAddonsUpdate2['default'])(muiTheme.baseTheme, { fontFamily: { $set: fontFamily } }));
	  }
	};
	// ,
	//  'material-ui/lib/styles/theme-manager',
	//  'material-ui/lib/styles/themeManager'
	//);
	module.exports = exports['default'];

/***/ },
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(536);

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(162)('wks')
	  , uid    = __webpack_require__(165)
	  , Symbol = __webpack_require__(26).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(493)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(494)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(497)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequire = __webpack_require__(500)['default'];
	
	exports.__esModule = true;
	
	var _squashClickEvent = __webpack_require__(488);
	
	exports.SquashClickEventMixin = _interopRequire(_squashClickEvent);
	
	var _expandedStateHandler = __webpack_require__(487);
	
	exports.ExpandedStateHandlerMixin = _interopRequire(_expandedStateHandler);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(607);
	var assign = __webpack_require__(501);
	
	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});
	
	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;
	
	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();
	
	    delete reactMixin.getDefaultProps;
	  }
	}
	
	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;
	
	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }
	
	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }
	
	    delete reactMixin.getInitialState;
	  }
	}
	
	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);
	
	  var prototypeMethods = {};
	  var staticProps = {};
	
	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });
	
	  mixinProto(reactClass.prototype, prototypeMethods);
	
	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;
	
	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });
	
	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });
	
	    return result;
	  };
	
	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);
	
	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];
	
	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }
	
	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }
	
	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }
	
	  return reactClass;
	}
	
	module.exports = (function() {
	  var reactMixin = mixinProto;
	
	  reactMixin.onClass = function(reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };
	
	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };
	
	  return reactMixin;
	})();


/***/ },
/* 26 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	
	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	
	    easeFunction = easeFunction || this.easeOutFunction;
	
	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';
	
	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(26)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(48)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  red50: '#ffebee',
	  red100: '#ffcdd2',
	  red200: '#ef9a9a',
	  red300: '#e57373',
	  red400: '#ef5350',
	  red500: '#f44336',
	  red600: '#e53935',
	  red700: '#d32f2f',
	  red800: '#c62828',
	  red900: '#b71c1c',
	  redA100: '#ff8a80',
	  redA200: '#ff5252',
	  redA400: '#ff1744',
	  redA700: '#d50000',
	
	  pink50: '#fce4ec',
	  pink100: '#f8bbd0',
	  pink200: '#f48fb1',
	  pink300: '#f06292',
	  pink400: '#ec407a',
	  pink500: '#e91e63',
	  pink600: '#d81b60',
	  pink700: '#c2185b',
	  pink800: '#ad1457',
	  pink900: '#880e4f',
	  pinkA100: '#ff80ab',
	  pinkA200: '#ff4081',
	  pinkA400: '#f50057',
	  pinkA700: '#c51162',
	
	  purple50: '#f3e5f5',
	  purple100: '#e1bee7',
	  purple200: '#ce93d8',
	  purple300: '#ba68c8',
	  purple400: '#ab47bc',
	  purple500: '#9c27b0',
	  purple600: '#8e24aa',
	  purple700: '#7b1fa2',
	  purple800: '#6a1b9a',
	  purple900: '#4a148c',
	  purpleA100: '#ea80fc',
	  purpleA200: '#e040fb',
	  purpleA400: '#d500f9',
	  purpleA700: '#aa00ff',
	
	  deepPurple50: '#ede7f6',
	  deepPurple100: '#d1c4e9',
	  deepPurple200: '#b39ddb',
	  deepPurple300: '#9575cd',
	  deepPurple400: '#7e57c2',
	  deepPurple500: '#673ab7',
	  deepPurple600: '#5e35b1',
	  deepPurple700: '#512da8',
	  deepPurple800: '#4527a0',
	  deepPurple900: '#311b92',
	  deepPurpleA100: '#b388ff',
	  deepPurpleA200: '#7c4dff',
	  deepPurpleA400: '#651fff',
	  deepPurpleA700: '#6200ea',
	
	  indigo50: '#e8eaf6',
	  indigo100: '#c5cae9',
	  indigo200: '#9fa8da',
	  indigo300: '#7986cb',
	  indigo400: '#5c6bc0',
	  indigo500: '#3f51b5',
	  indigo600: '#3949ab',
	  indigo700: '#303f9f',
	  indigo800: '#283593',
	  indigo900: '#1a237e',
	  indigoA100: '#8c9eff',
	  indigoA200: '#536dfe',
	  indigoA400: '#3d5afe',
	  indigoA700: '#304ffe',
	
	  blue50: '#e3f2fd',
	  blue100: '#bbdefb',
	  blue200: '#90caf9',
	  blue300: '#64b5f6',
	  blue400: '#42a5f5',
	  blue500: '#2196f3',
	  blue600: '#1e88e5',
	  blue700: '#1976d2',
	  blue800: '#1565c0',
	  blue900: '#0d47a1',
	  blueA100: '#82b1ff',
	  blueA200: '#448aff',
	  blueA400: '#2979ff',
	  blueA700: '#2962ff',
	
	  lightBlue50: '#e1f5fe',
	  lightBlue100: '#b3e5fc',
	  lightBlue200: '#81d4fa',
	  lightBlue300: '#4fc3f7',
	  lightBlue400: '#29b6f6',
	  lightBlue500: '#03a9f4',
	  lightBlue600: '#039be5',
	  lightBlue700: '#0288d1',
	  lightBlue800: '#0277bd',
	  lightBlue900: '#01579b',
	  lightBlueA100: '#80d8ff',
	  lightBlueA200: '#40c4ff',
	  lightBlueA400: '#00b0ff',
	  lightBlueA700: '#0091ea',
	
	  cyan50: '#e0f7fa',
	  cyan100: '#b2ebf2',
	  cyan200: '#80deea',
	  cyan300: '#4dd0e1',
	  cyan400: '#26c6da',
	  cyan500: '#00bcd4',
	  cyan600: '#00acc1',
	  cyan700: '#0097a7',
	  cyan800: '#00838f',
	  cyan900: '#006064',
	  cyanA100: '#84ffff',
	  cyanA200: '#18ffff',
	  cyanA400: '#00e5ff',
	  cyanA700: '#00b8d4',
	
	  teal50: '#e0f2f1',
	  teal100: '#b2dfdb',
	  teal200: '#80cbc4',
	  teal300: '#4db6ac',
	  teal400: '#26a69a',
	  teal500: '#009688',
	  teal600: '#00897b',
	  teal700: '#00796b',
	  teal800: '#00695c',
	  teal900: '#004d40',
	  tealA100: '#a7ffeb',
	  tealA200: '#64ffda',
	  tealA400: '#1de9b6',
	  tealA700: '#00bfa5',
	
	  green50: '#e8f5e9',
	  green100: '#c8e6c9',
	  green200: '#a5d6a7',
	  green300: '#81c784',
	  green400: '#66bb6a',
	  green500: '#4caf50',
	  green600: '#43a047',
	  green700: '#388e3c',
	  green800: '#2e7d32',
	  green900: '#1b5e20',
	  greenA100: '#b9f6ca',
	  greenA200: '#69f0ae',
	  greenA400: '#00e676',
	  greenA700: '#00c853',
	
	  lightGreen50: '#f1f8e9',
	  lightGreen100: '#dcedc8',
	  lightGreen200: '#c5e1a5',
	  lightGreen300: '#aed581',
	  lightGreen400: '#9ccc65',
	  lightGreen500: '#8bc34a',
	  lightGreen600: '#7cb342',
	  lightGreen700: '#689f38',
	  lightGreen800: '#558b2f',
	  lightGreen900: '#33691e',
	  lightGreenA100: '#ccff90',
	  lightGreenA200: '#b2ff59',
	  lightGreenA400: '#76ff03',
	  lightGreenA700: '#64dd17',
	
	  lime50: '#f9fbe7',
	  lime100: '#f0f4c3',
	  lime200: '#e6ee9c',
	  lime300: '#dce775',
	  lime400: '#d4e157',
	  lime500: '#cddc39',
	  lime600: '#c0ca33',
	  lime700: '#afb42b',
	  lime800: '#9e9d24',
	  lime900: '#827717',
	  limeA100: '#f4ff81',
	  limeA200: '#eeff41',
	  limeA400: '#c6ff00',
	  limeA700: '#aeea00',
	
	  yellow50: '#fffde7',
	  yellow100: '#fff9c4',
	  yellow200: '#fff59d',
	  yellow300: '#fff176',
	  yellow400: '#ffee58',
	  yellow500: '#ffeb3b',
	  yellow600: '#fdd835',
	  yellow700: '#fbc02d',
	  yellow800: '#f9a825',
	  yellow900: '#f57f17',
	  yellowA100: '#ffff8d',
	  yellowA200: '#ffff00',
	  yellowA400: '#ffea00',
	  yellowA700: '#ffd600',
	
	  amber50: '#fff8e1',
	  amber100: '#ffecb3',
	  amber200: '#ffe082',
	  amber300: '#ffd54f',
	  amber400: '#ffca28',
	  amber500: '#ffc107',
	  amber600: '#ffb300',
	  amber700: '#ffa000',
	  amber800: '#ff8f00',
	  amber900: '#ff6f00',
	  amberA100: '#ffe57f',
	  amberA200: '#ffd740',
	  amberA400: '#ffc400',
	  amberA700: '#ffab00',
	
	  orange50: '#fff3e0',
	  orange100: '#ffe0b2',
	  orange200: '#ffcc80',
	  orange300: '#ffb74d',
	  orange400: '#ffa726',
	  orange500: '#ff9800',
	  orange600: '#fb8c00',
	  orange700: '#f57c00',
	  orange800: '#ef6c00',
	  orange900: '#e65100',
	  orangeA100: '#ffd180',
	  orangeA200: '#ffab40',
	  orangeA400: '#ff9100',
	  orangeA700: '#ff6d00',
	
	  deepOrange50: '#fbe9e7',
	  deepOrange100: '#ffccbc',
	  deepOrange200: '#ffab91',
	  deepOrange300: '#ff8a65',
	  deepOrange400: '#ff7043',
	  deepOrange500: '#ff5722',
	  deepOrange600: '#f4511e',
	  deepOrange700: '#e64a19',
	  deepOrange800: '#d84315',
	  deepOrange900: '#bf360c',
	  deepOrangeA100: '#ff9e80',
	  deepOrangeA200: '#ff6e40',
	  deepOrangeA400: '#ff3d00',
	  deepOrangeA700: '#dd2c00',
	
	  brown50: '#efebe9',
	  brown100: '#d7ccc8',
	  brown200: '#bcaaa4',
	  brown300: '#a1887f',
	  brown400: '#8d6e63',
	  brown500: '#795548',
	  brown600: '#6d4c41',
	  brown700: '#5d4037',
	  brown800: '#4e342e',
	  brown900: '#3e2723',
	
	  blueGrey50: '#eceff1',
	  blueGrey100: '#cfd8dc',
	  blueGrey200: '#b0bec5',
	  blueGrey300: '#90a4ae',
	  blueGrey400: '#78909c',
	  blueGrey500: '#607d8b',
	  blueGrey600: '#546e7a',
	  blueGrey700: '#455a64',
	  blueGrey800: '#37474f',
	  blueGrey900: '#263238',
	
	  grey50: '#fafafa',
	  grey100: '#f5f5f5',
	  grey200: '#eeeeee',
	  grey300: '#e0e0e0',
	  grey400: '#bdbdbd',
	  grey500: '#9e9e9e',
	  grey600: '#757575',
	  grey700: '#616161',
	  grey800: '#424242',
	  grey900: '#212121',
	
	  black: '#000000',
	  white: '#ffffff',
	
	  transparent: 'rgba(0, 0, 0, 0)',
	  fullBlack: 'rgba(0, 0, 0, 1)',
	  darkBlack: 'rgba(0, 0, 0, 0.87)',
	  lightBlack: 'rgba(0, 0, 0, 0.54)',
	  minBlack: 'rgba(0, 0, 0, 0.26)',
	  faintBlack: 'rgba(0, 0, 0, 0.12)',
	  fullWhite: 'rgba(255, 255, 255, 1)',
	  darkWhite: 'rgba(255, 255, 255, 0.87)',
	  lightWhite: 'rgba(255, 255, 255, 0.54)'
	};
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(215);


/***/ },
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(56);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(80),
	    isLength = __webpack_require__(61),
	    isObjectLike = __webpack_require__(39);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports["default"] = function (hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	};
	
	module.exports = exports["default"];

/***/ },
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(262);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(97);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(317), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(147);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(265);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(263);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(149);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(156)
	  , defined = __webpack_require__(98);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 59 */,
/* 60 */,
/* 61 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(147);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(149);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(72)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(7).setDesc
	  , has = __webpack_require__(99)
	  , TAG = __webpack_require__(16)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(98);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(340)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(159)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(434);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(429),
	    isLength = __webpack_require__(61);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _inlineStylePrefixer = __webpack_require__(378);
	
	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);
	
	var prefixers = {};
	
	exports['default'] = {
	
	  getPrefixer: function getPrefixer() {
	    // Server-side renderer needs to supply user agent
	    if (typeof navigator === 'undefined') {
	      console.warn('Material-UI expects the global navigator.userAgent to be defined\nfor server-side rendering. Set this property when receiving the request headers.');
	      return null;
	    }
	
	    var userAgent = navigator.userAgent;
	
	    // Get prefixing instance for this user agent
	    var prefixer = prefixers[userAgent];
	    // None found, create a new instance
	    if (!prefixer) {
	      prefixer = new _inlineStylePrefixer2['default'](userAgent);
	      prefixers[userAgent] = prefixer;
	    }
	
	    return prefixer;
	  },
	
	  all: function all(style) {
	    if (!style) {
	      return {};
	    }
	
	    var prefixer = this.getPrefixer();
	
	    if (prefixer) {
	      return prefixer.prefix(style);
	    } else {
	      return _inlineStylePrefixer2['default'].prefixAll(style);
	    }
	  },
	
	  set: function set(style, key, value) {
	    style[key] = value;
	
	    var prefixer = this.getPrefixer();
	
	    if (prefixer) {
	      style = prefixer.prefix(style);
	    } else {
	      style = _inlineStylePrefixer2['default'].prefixAll(style);
	    }
	  },
	
	  getPrefix: function getPrefix(key) {
	    var style = {};
	    style[key] = true;
	
	    var prefixer = this.getPrefixer();
	    var prefixes = undefined;
	
	    if (prefixer) {
	      prefixes = Object.keys(prefixer.prefix(style));
	    } else {
	      prefixes = Object.keys(_inlineStylePrefixer2['default'].prefixAll(style));
	    }
	
	    return prefixes ? prefixes[0] : key;
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var SvgIcon = _react2['default'].createClass({
	  displayName: 'SvgIcon',
	
	  mixins: [_mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  propTypes: {
	    children: _react2['default'].PropTypes.node,
	    color: _react2['default'].PropTypes.string,
	    hoverColor: _react2['default'].PropTypes.string,
	    onMouseEnter: _react2['default'].PropTypes.func,
	    onMouseLeave: _react2['default'].PropTypes.func,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object,
	    viewBox: _react2['default'].PropTypes.string
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      viewBox: '0 0 24 24'
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseEnter = _props.onMouseEnter;
	    var onMouseLeave = _props.onMouseLeave;
	    var style = _props.style;
	    var viewBox = _props.viewBox;
	
	    var other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	
	    var offColor = color ? color : style && style.fill ? style.fill : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;
	
	    var mergedStyles = this.prepareStyles({
	      display: 'inline-block',
	      height: 24,
	      width: 24,
	      userSelect: 'none',
	      transition: _stylesTransitions2['default'].easeOut()
	    }, style, {
	      // Make sure our fill color overrides fill provided in props.style
	      fill: this.state.hovered ? onColor : offColor
	    });
	
	    var events = hoverColor ? {
	      onMouseEnter: this._handleMouseEnter,
	      onMouseLeave: this._handleMouseLeave
	    } : {};
	
	    return _react2['default'].createElement(
	      'svg',
	      _extends({}, other, events, {
	        style: mergedStyles,
	        viewBox: viewBox }),
	      children
	    );
	  },
	
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },
	
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  }
	});
	
	exports['default'] = SvgIcon;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactAddonsUpdate = __webpack_require__(203);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	function mergeSingle(objA, objB) {
	  if (!objA) return objB;
	  if (!objB) return objA;
	  return (0, _reactAddonsUpdate2['default'])(objA, { $merge: objB });
	}
	
	exports['default'] = {
	
	  merge: function merge() {
	    var args = Array.prototype.slice.call(arguments, 0);
	    var base = args[0];
	
	    for (var i = 1; i < args.length; i++) {
	      if (args[i]) {
	        base = mergeSingle(base, args[i]);
	      }
	    }
	    return base;
	  },
	
	  mergeItem: function mergeItem(obj, key, newValueObject) {
	    var command = {};
	    command[key] = { $merge: newValueObject };
	    return (0, _reactAddonsUpdate2['default'])(obj, command);
	  },
	
	  push: function push(array, obj) {
	    var newObj = Array.isArray(obj) ? obj : [obj];
	    return (0, _reactAddonsUpdate2['default'])(array, { $push: newObj });
	  },
	
	  shift: function shift(array) {
	    return (0, _reactAddonsUpdate2['default'])(array, { $splice: [[0, 1]] });
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var horizontal = _react2['default'].PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react2['default'].PropTypes.oneOf(['top', 'center', 'bottom']);
	
	exports['default'] = {
	
	  corners: _react2['default'].PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
	
	  horizontal: horizontal,
	
	  vertical: vertical,
	
	  origin: _react2['default'].PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),
	
	  cornersAndCenter: _react2['default'].PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
	
	  stringOrNumber: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	
	  zDepth: _react2['default'].PropTypes.oneOf([0, 1, 2, 3, 4, 5])
	
	};
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objType = __webpack_require__(489);
	
	var _objType2 = _interopRequireDefault(_objType);
	
	var _JSONObjectNode = __webpack_require__(484);
	
	var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);
	
	var _JSONArrayNode = __webpack_require__(477);
	
	var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);
	
	var _JSONIterableNode = __webpack_require__(481);
	
	var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);
	
	var _JSONStringNode = __webpack_require__(485);
	
	var _JSONStringNode2 = _interopRequireDefault(_JSONStringNode);
	
	var _JSONNumberNode = __webpack_require__(483);
	
	var _JSONNumberNode2 = _interopRequireDefault(_JSONNumberNode);
	
	var _JSONBooleanNode = __webpack_require__(478);
	
	var _JSONBooleanNode2 = _interopRequireDefault(_JSONBooleanNode);
	
	var _JSONNullNode = __webpack_require__(482);
	
	var _JSONNullNode2 = _interopRequireDefault(_JSONNullNode);
	
	var _JSONDateNode = __webpack_require__(479);
	
	var _JSONDateNode2 = _interopRequireDefault(_JSONDateNode);
	
	var _JSONUndefinedNode = __webpack_require__(486);
	
	var _JSONUndefinedNode2 = _interopRequireDefault(_JSONUndefinedNode);
	
	var _JSONFunctionNode = __webpack_require__(480);
	
	var _JSONFunctionNode2 = _interopRequireDefault(_JSONFunctionNode);
	
	exports['default'] = function (key, value, prevValue, theme, styles, getItemString) {
	  var initialExpanded = arguments.length <= 6 || arguments[6] === undefined ? false : arguments[6];
	
	  var nodeType = _objType2['default'](value);
	  if (nodeType === 'Object') {
	    return _react2['default'].createElement(_JSONObjectNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key, styles: styles, getItemString: getItemString });
	  } else if (nodeType === 'Array') {
	    return _react2['default'].createElement(_JSONArrayNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key, styles: styles, getItemString: getItemString });
	  } else if (nodeType === 'Iterable') {
	    return _react2['default'].createElement(_JSONIterableNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key, styles: styles, getItemString: getItemString });
	  } else if (nodeType === 'String') {
	    return _react2['default'].createElement(_JSONStringNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Number') {
	    return _react2['default'].createElement(_JSONNumberNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Boolean') {
	    return _react2['default'].createElement(_JSONBooleanNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Date') {
	    return _react2['default'].createElement(_JSONDateNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Null') {
	    return _react2['default'].createElement(_JSONNullNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Undefined') {
	    return _react2['default'].createElement(_JSONUndefinedNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Function') {
	    return _react2['default'].createElement(_JSONFunctionNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  }
	  return false;
	};
	
	module.exports = exports['default'];

/***/ },
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(7)
	  , createDesc = __webpack_require__(103);
	module.exports = __webpack_require__(71) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(31)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(72);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(100);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(155)
	  , ITERATOR  = __webpack_require__(16)('iterator')
	  , Iterators = __webpack_require__(57);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(344);
	var Iterators = __webpack_require__(57);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(81),
	    isObjectLike = __webpack_require__(39);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(80),
	    isArrayLike = __webpack_require__(81),
	    isObject = __webpack_require__(32),
	    shimKeys = __webpack_require__(432);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _mixinsContextPure = __webpack_require__(447);
	
	var _mixinsContextPure2 = _interopRequireDefault(_mixinsContextPure);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _utilsPropTypes = __webpack_require__(85);
	
	var _utilsPropTypes2 = _interopRequireDefault(_utilsPropTypes);
	
	var _enhancedButton = __webpack_require__(195);
	
	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);
	
	var _fontIcon = __webpack_require__(442);
	
	var _fontIcon2 = _interopRequireDefault(_fontIcon);
	
	var _tooltip = __webpack_require__(459);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _utilsChildren = __webpack_require__(199);
	
	var _utilsChildren2 = _interopRequireDefault(_utilsChildren);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var IconButton = _react2['default'].createClass({
	  displayName: 'IconButton',
	
	  mixins: [_mixinsStylePropable2['default'], _mixinsContextPure2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var spacing = muiTheme.rawTheme.spacing;
	      var palette = muiTheme.rawTheme.palette;
	
	      return {
	        iconSize: spacing.iconSize,
	        textColor: palette.textColor,
	        disabledColor: palette.disabledColor
	      };
	    },
	
	    getChildrenClasses: function getChildrenClasses() {
	      return [_enhancedButton2['default'], _fontIcon2['default'], _tooltip2['default']];
	    }
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  propTypes: {
	    children: _react2['default'].PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2['default'].PropTypes.string,
	    disabled: _react2['default'].PropTypes.bool,
	    iconClassName: _react2['default'].PropTypes.string,
	    iconStyle: _react2['default'].PropTypes.object,
	    onBlur: _react2['default'].PropTypes.func,
	    onFocus: _react2['default'].PropTypes.func,
	    onKeyboardFocus: _react2['default'].PropTypes.func,
	    onMouseEnter: _react2['default'].PropTypes.func,
	    onMouseLeave: _react2['default'].PropTypes.func,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object,
	    tooltip: _react2['default'].PropTypes.node,
	    tooltipPosition: _utilsPropTypes2['default'].cornersAndCenter,
	    tooltipStyles: _react2['default'].PropTypes.object,
	    touch: _react2['default'].PropTypes.bool
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      tooltipShown: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      iconStyle: {},
	      tooltipPosition: 'bottom-center'
	    };
	  },
	
	  getStyles: function getStyles() {
	    var _constructor$getRelevantContextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);
	
	    var iconSize = _constructor$getRelevantContextKeys.iconSize;
	    var textColor = _constructor$getRelevantContextKeys.textColor;
	    var disabledColor = _constructor$getRelevantContextKeys.disabledColor;
	
	    var styles = {
	      root: {
	        position: 'relative',
	        boxSizing: 'border-box',
	        transition: _stylesTransitions2['default'].easeOut(),
	        padding: iconSize / 2,
	        width: iconSize * 2,
	        height: iconSize * 2,
	        fontSize: 0
	      },
	      tooltip: {
	        boxSizing: 'border-box'
	      },
	      icon: {
	        color: textColor,
	        fill: textColor
	      },
	      overlay: {
	        position: 'relative',
	        top: 0,
	        width: '100%',
	        height: '100%',
	        background: disabledColor
	      },
	      disabled: {
	        color: disabledColor,
	        fill: disabledColor
	      }
	    };
	
	    return styles;
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var iconClassName = _props.iconClassName;
	    var tooltip = _props.tooltip;
	    var touch = _props.touch;
	    var iconStyle = _props.iconStyle;
	
	    var other = _objectWithoutProperties(_props, ['disabled', 'iconClassName', 'tooltip', 'touch', 'iconStyle']);
	
	    var fonticon = undefined;
	
	    var styles = this.getStyles();
	    var tooltipPosition = this.props.tooltipPosition.split('-');
	
	    var tooltipElement = tooltip ? _react2['default'].createElement(_tooltip2['default'], {
	      ref: 'tooltip',
	      label: tooltip,
	      show: this.state.tooltipShown,
	      touch: touch,
	      style: this.mergeStyles(styles.tooltip, this.props.tooltipStyles),
	      verticalPosition: tooltipPosition[0],
	      horizontalPosition: tooltipPosition[1] }) : null;
	
	    if (iconClassName) {
	      var iconHoverColor = iconStyle.iconHoverColor;
	
	      var iconStyleFontIcon = _objectWithoutProperties(iconStyle, ['iconHoverColor']);
	
	      fonticon = _react2['default'].createElement(
	        _fontIcon2['default'],
	        {
	          className: iconClassName,
	          hoverColor: disabled ? null : iconHoverColor,
	          style: this.mergeStyles(styles.icon, disabled ? styles.disabled : {}, iconStyleFontIcon) },
	        this.props.children
	      );
	    }
	
	    var childrenStyle = disabled ? this.mergeStyles(iconStyle, styles.disabled) : iconStyle;
	
	    return _react2['default'].createElement(
	      _enhancedButton2['default'],
	      _extends({}, other, {
	        ref: 'button',
	        centerRipple: true,
	        disabled: disabled,
	        style: this.mergeStyles(styles.root, this.props.style),
	        onBlur: this._handleBlur,
	        onFocus: this._handleFocus,
	        onMouseLeave: this._handleMouseLeave,
	        onMouseEnter: this._handleMouseEnter,
	        onKeyboardFocus: this._handleKeyboardFocus }),
	      tooltipElement,
	      fonticon,
	      _utilsChildren2['default'].extend(this.props.children, {
	        style: childrenStyle
	      })
	    );
	  },
	
	  setKeyboardFocus: function setKeyboardFocus() {
	    this.refs.button.setKeyboardFocus();
	  },
	
	  _showTooltip: function _showTooltip() {
	    if (this.props.tooltip) {
	      this.setState({ tooltipShown: true });
	    }
	  },
	
	  _hideTooltip: function _hideTooltip() {
	    if (this.props.tooltip) this.setState({ tooltipShown: false });
	  },
	
	  _handleBlur: function _handleBlur(e) {
	    this._hideTooltip();
	    if (this.props.onBlur) this.props.onBlur(e);
	  },
	
	  _handleFocus: function _handleFocus(e) {
	    this._showTooltip();
	    if (this.props.onFocus) this.props.onFocus(e);
	  },
	
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.button.isKeyboardFocused()) this._hideTooltip();
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },
	
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this._showTooltip();
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },
	
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this._showTooltip();
	      if (this.props.onFocus) this.props.onFocus(e);
	    } else if (!this.state.hovered) {
	      this._hideTooltip();
	      if (this.props.onBlur) this.props.onBlur(e);
	    }
	
	    if (this.props.onKeyboardFocus) this.props.onKeyboardFocus(e, keyboardFocused);
	  }
	
	});
	
	exports['default'] = IconButton;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _colors = __webpack_require__(33);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var Typography = function Typography() {
	  _classCallCheck(this, Typography);
	
	  // text colors
	  this.textFullBlack = _colors2['default'].fullBlack;
	  this.textDarkBlack = _colors2['default'].darkBlack;
	  this.textLightBlack = _colors2['default'].lightBlack;
	  this.textMinBlack = _colors2['default'].minBlack;
	  this.textFullWhite = _colors2['default'].fullWhite;
	  this.textDarkWhite = _colors2['default'].darkWhite;
	  this.textLightWhite = _colors2['default'].lightWhite;
	
	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;
	
	  this.fontStyleButtonFontSize = 14;
	};
	
	exports['default'] = new Typography();
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	
	  /**
	   * The relative brightness of any point in a colorspace, normalized to 0 for
	   * darkest black and 1 for lightest white. RGB colors only. Does not take
	   * into account alpha values.
	   *
	   * TODO:
	   * - Take into account alpha values.
	   * - Identify why there are minor discrepancies for some use cases
	   *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
	   *
	   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	   */
	  _luminance: function _luminance(color) {
	    color = this._decomposeColor(color);
	
	    if (color.type.indexOf('rgb') > -1) {
	      var rgb = color.values.map(function (val) {
	        val /= 255; // normalized
	        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	      });
	
	      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
	    } else {
	      var message = 'Calculating the relative luminance is not available for ' + 'HSL and HSLA.';
	      console.error(message);
	      return -1;
	    }
	  },
	
	  /**
	   * @params:
	   * additionalValue = An extra value that has been calculated but not included
	   *                   with the original color object, such as an alpha value.
	   */
	  _convertColorToString: function _convertColorToString(color, additonalValue) {
	    var str = color.type + '(' + parseInt(color.values[0]) + ',' + parseInt(color.values[1]) + ',' + parseInt(color.values[2]);
	
	    if (additonalValue !== undefined) {
	      str += ',' + additonalValue + ')';
	    } else if (color.values.length === 4) {
	      str += ',' + color.values[3] + ')';
	    } else {
	      str += ')';
	    }
	
	    return str;
	  },
	
	  // Converts a color from hex format to rgb format.
	  _convertHexToRGB: function _convertHexToRGB(color) {
	    if (color.length === 4) {
	      var extendedColor = '#';
	      for (var i = 1; i < color.length; i++) {
	        extendedColor += color.charAt(i) + color.charAt(i);
	      }
	      color = extendedColor;
	    }
	
	    var values = {
	      r: parseInt(color.substr(1, 2), 16),
	      g: parseInt(color.substr(3, 2), 16),
	      b: parseInt(color.substr(5, 2), 16)
	    };
	
	    return 'rgb(' + values.r + ',' + values.g + ',' + values.b + ')';
	  },
	
	  // Returns the type and values of a color of any given type.
	  _decomposeColor: function _decomposeColor(color) {
	    if (color.charAt(0) === '#') {
	      return this._decomposeColor(this._convertHexToRGB(color));
	    }
	
	    var marker = color.indexOf('(');
	    var type = color.substring(0, marker);
	    var values = color.substring(marker + 1, color.length - 1).split(',');
	
	    return { type: type, values: values };
	  },
	
	  // Set the absolute transparency of a color.
	  // Any existing alpha values are overwritten.
	  fade: function fade(color, amount) {
	    color = this._decomposeColor(color);
	    if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
	    return this._convertColorToString(color, amount);
	  },
	
	  // Desaturates rgb and sets opacity to 0.15
	  lighten: function lighten(color, amount) {
	    color = this._decomposeColor(color);
	
	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 + amount;
	        if (color.values[i] > 255) color.values[i] = 255;
	      }
	    }
	
	    if (color.type.indexOf('a') <= -1) color.type += 'a';
	
	    return this._convertColorToString(color, '0.15');
	  },
	
	  darken: function darken(color, amount) {
	    color = this._decomposeColor(color);
	
	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 - amount;
	        if (color.values[i] < 0) color.values[i] = 0;
	      }
	    }
	
	    return this._convertColorToString(color);
	  },
	
	  // Calculates the contrast ratio between two colors.
	  //
	  // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	  contrastRatio: function contrastRatio(background, foreground) {
	    var lumA = this._luminance(background);
	    var lumB = this._luminance(foreground);
	
	    if (lumA >= lumB) {
	      return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
	    } else {
	      return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
	    }
	  },
	
	  /**
	   * Determines how readable a color combination is based on its level.
	   * Levels are defined from @LeaVerou:
	   * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
	   */
	  contrastRatioLevel: function contrastRatioLevel(background, foreground) {
	    var levels = {
	      'fail': {
	        range: [0, 3],
	        color: 'hsl(0, 100%, 40%)'
	      },
	      'aa-large': {
	        range: [3, 4.5],
	        color: 'hsl(40, 100%, 45%)'
	      },
	      'aa': {
	        range: [4.5, 7],
	        color: 'hsl(80, 60%, 45%)'
	      },
	      'aaa': {
	        range: [7, 22],
	        color: 'hsl(95, 60%, 41%)'
	      }
	    };
	
	    var ratio = this.contrastRatio(background, foreground);
	
	    for (var level in levels) {
	      var range = levels[level].range;
	      if (ratio >= range[0] && ratio <= range[1]) return level;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var styles = {
	  base: {
	    display: 'inline-block',
	    marginLeft: 0,
	    marginTop: 8,
	    marginRight: 5,
	    'float': 'left',
	    transition: '150ms',
	    WebkitTransition: '150ms',
	    MozTransition: '150ms',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent',
	    borderTopWidth: 5,
	    borderTopStyle: 'solid',
	    WebkitTransform: 'rotateZ(-90deg)',
	    MozTransform: 'rotateZ(-90deg)',
	    transform: 'rotateZ(-90deg)'
	  },
	  open: {
	    WebkitTransform: 'rotateZ(0deg)',
	    MozTransform: 'rotateZ(0deg)',
	    transform: 'rotateZ(0deg)'
	  }
	};
	
	var JSONArrow = (function (_React$Component) {
	  _inherits(JSONArrow, _React$Component);
	
	  function JSONArrow() {
	    _classCallCheck(this, JSONArrow);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONArrow.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      borderTopColor: this.props.theme.base0D
	    });
	    if (this.props.open) {
	      style = _extends({}, style, styles.open);
	    }
	    style = _extends({}, style, this.props.style);
	    return _react2['default'].createElement('div', { style: style, onClick: this.props.onClick });
	  };
	
	  return JSONArrow;
	})(_react2['default'].Component);
	
	exports['default'] = JSONArrow;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _shallowEqual = __webpack_require__(502);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}
	
	module.exports = exports['default'];

/***/ },
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxDevtools = __webpack_require__(242);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(596);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(589);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(React.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  {
	    toggleVisibilityKey: 'ctrl-h',
	    changePositionKey: 'ctrl-q' },
	  React.createElement(_reduxDevtoolsLogMonitor2.default, null)
	));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	exports.actions = exports.fetchAsync = exports.fetch = exports.FETCH_ALBUMS = undefined;
	
	var _defineProperty2 = __webpack_require__(69);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(47);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _reduxActions = __webpack_require__(68);
	
	var _fetchJsonp = __webpack_require__(174);
	
	var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var FETCH_ALBUMS = exports.FETCH_ALBUMS = 'FETCH_ALBUMS';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	var fetch = exports.fetch = (0, _reduxActions.createAction)(FETCH_ALBUMS);
	
	var fetchAsync = exports.fetchAsync = function fetchAsync(term) {
					return function (dispatch, getState) {
									console.log('fetching', term);
									return (0, _fetchJsonp2.default)("//itunes.apple.com/search?term=" + encodeURIComponent(term || 'jaar') + "&limit=25&media=music&entity=album").then(function (albums) {
													return albums.json().then(function (data) {
																	return dispatch(fetch(data));
													});
									}, function (error) {
													return console.log('fetch error');
									});
					};
	};
	
	var actions = exports.actions = {
					fetch: fetch,
					fetchAsync: fetchAsync
	};
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, FETCH_ALBUMS, function (state, _ref) {
					var payload = _ref.payload;
					return (0, _extends3.default)({}, state, {
									payload: payload
					});
	}), 1);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	exports.actions = exports.main = exports.MAIN = undefined;
	
	var _defineProperty2 = __webpack_require__(69);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(47);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _reduxActions = __webpack_require__(68);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var MAIN = exports.MAIN = 'MAIN';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	var main = exports.main = (0, _reduxActions.createAction)(MAIN, function () {
					var x = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
					console.log('main action', x);
					return x;
	});
	
	var actions = exports.actions = {
					main: main
	};
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, MAIN, function (state, _ref) {
					var payload = _ref.payload;
	
					return (0, _extends3.default)({}, state, {
									payload: payload
					});
	}), []);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	exports.actions = exports.fetchAsync = exports.fetch = exports.FETCH_TRACKS = undefined;
	
	var _defineProperty2 = __webpack_require__(69);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(47);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _reduxActions = __webpack_require__(68);
	
	var _fetchJsonp = __webpack_require__(174);
	
	var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var FETCH_TRACKS = exports.FETCH_TRACKS = 'FETCH_TRACKS';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	var fetch = exports.fetch = (0, _reduxActions.createAction)(FETCH_TRACKS, function () {
					var x = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
					console.log('action function', x);
					return x;
	});
	
	var fetchAsync = exports.fetchAsync = function fetchAsync(term) {
					return function (dispatch, getState) {
									console.log('fetching tracks for', term);
									(0, _fetchJsonp2.default)("//itunes.apple.com/search?term=" + encodeURIComponent(term || 'jaar') + "&limit=25&media=music&entity=musicTrack").then(function (tracks) {
													return tracks.json().then(function (data) {
																	return dispatch(fetch(data));
													});
									}, function (error) {
													return console.log('fetch error');
									});
					};
	};
	
	var actions = exports.actions = {
					fetch: fetch,
					fetchAsync: fetchAsync
	};
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, FETCH_TRACKS, function (state, _ref) {
					var payload = _ref.payload;
	
					console.log('fetch track action');
					return (0, _extends3.default)({}, state, {
									payload: payload
					});
	}), []);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(271);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _symbol = __webpack_require__(267);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }
	
	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(346);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(349);
	module.exports = __webpack_require__(9).Object.keys;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(350);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(55)
	  , TAG = __webpack_require__(16)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(55);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(57)
	  , ITERATOR   = __webpack_require__(16)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(37);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(101)
	  , $export        = __webpack_require__(31)
	  , redefine       = __webpack_require__(104)
	  , hide           = __webpack_require__(100)
	  , has            = __webpack_require__(99)
	  , Iterators      = __webpack_require__(57)
	  , $iterCreate    = __webpack_require__(330)
	  , setToStringTag = __webpack_require__(73)
	  , getProto       = __webpack_require__(7).getProto
	  , ITERATOR       = __webpack_require__(16)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(16)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(7).getDesc
	  , isObject = __webpack_require__(56)
	  , anObject = __webpack_require__(37);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(48)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(26)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(163)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 166 */
/***/ function(module, exports) {



/***/ },
/* 167 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.fetchJsonp = mod.exports;
	  }
	})(this, function (exports, module) {
	  'use strict';
	
	  var defaultOptions = {
	    timeout: 5000,
	    jsonpCallback: 'callback',
	    jsonpCallbackFunction: null
	  };
	
	  function generateCallbackFunction() {
	    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
	  }
	
	  // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined' error if request timeout
	  function clearFunction(functionName) {
	    // IE8 throws an exception when you try to delete a property on window
	    // http://stackoverflow.com/a/1824228/751089
	    try {
	      delete window[functionName];
	    } catch (e) {
	      window[functionName] = undefined;
	    }
	  }
	
	  function removeScript(scriptId) {
	    var script = document.getElementById(scriptId);
	    document.getElementsByTagName('head')[0].removeChild(script);
	  }
	
	  var fetchJsonp = function fetchJsonp(url) {
	    var options = arguments[1] === undefined ? {} : arguments[1];
	
	    var timeout = options.timeout != null ? options.timeout : defaultOptions.timeout;
	    var jsonpCallback = options.jsonpCallback != null ? options.jsonpCallback : defaultOptions.jsonpCallback;
	
	    var timeoutId = undefined;
	
	    return new Promise(function (resolve, reject) {
	      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
	
	      window[callbackFunction] = function (response) {
	        resolve({
	          ok: true,
	          // keep consistent with fetch API
	          json: function json() {
	            return Promise.resolve(response);
	          }
	        });
	
	        if (timeoutId) clearTimeout(timeoutId);
	
	        removeScript(jsonpCallback + '_' + callbackFunction);
	
	        clearFunction(callbackFunction);
	      };
	
	      // Check if the user set their own params, and if not add a ? to start a list of params
	      url += url.indexOf('?') === -1 ? '?' : '&';
	
	      var jsonpScript = document.createElement('script');
	      jsonpScript.setAttribute('src', url + jsonpCallback + '=' + callbackFunction);
	      jsonpScript.id = jsonpCallback + '_' + callbackFunction;
	      document.getElementsByTagName('head')[0].appendChild(jsonpScript);
	
	      timeoutId = setTimeout(function () {
	        reject(new Error('JSONP request to ' + url + ' timed out'));
	
	        clearFunction(callbackFunction);
	        removeScript(jsonpCallback + '_' + callbackFunction);
	      }, timeout);
	    });
	  };
	
	  // export as global function
	  /*
	  let local;
	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }
	  
	  local.fetchJsonp = fetchJsonp;
	  */
	
	  module.exports = fetchJsonp;
	});

/***/ },
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ },
/* 186 */,
/* 187 */,
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(40);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(413),
	    isObject = __webpack_require__(32),
	    isObjectLike = __webpack_require__(39);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 190 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 191 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(41),
	    toObject = __webpack_require__(40);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(419),
	    isArray = __webpack_require__(41);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesColors = __webpack_require__(33);
	
	var _stylesColors2 = _interopRequireDefault(_stylesColors);
	
	var _utilsChildren = __webpack_require__(199);
	
	var _utilsChildren2 = _interopRequireDefault(_utilsChildren);
	
	var _utilsEvents = __webpack_require__(463);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var _utilsKeyCode = __webpack_require__(465);
	
	var _utilsKeyCode2 = _interopRequireDefault(_utilsKeyCode);
	
	var _ripplesFocusRipple = __webpack_require__(450);
	
	var _ripplesFocusRipple2 = _interopRequireDefault(_ripplesFocusRipple);
	
	var _ripplesTouchRipple = __webpack_require__(451);
	
	var _ripplesTouchRipple2 = _interopRequireDefault(_ripplesTouchRipple);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var styleInjected = false;
	var listening = false;
	var tabPressed = false;
	
	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';
	
	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}
	
	function listenForTabPresses() {
	  if (!listening) {
	    _utilsEvents2['default'].on(window, 'keydown', function (e) {
	      tabPressed = e.keyCode === _utilsKeyCode2['default'].TAB;
	    });
	    listening = true;
	  }
	}
	
	var EnhancedButton = _react2['default'].createClass({
	  displayName: 'EnhancedButton',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  propTypes: {
	    centerRipple: _react2['default'].PropTypes.bool,
	    children: _react2['default'].PropTypes.node,
	    containerElement: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.element]),
	    disableFocusRipple: _react2['default'].PropTypes.bool,
	    disableKeyboardFocus: _react2['default'].PropTypes.bool,
	    disableTouchRipple: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    focusRippleColor: _react2['default'].PropTypes.string,
	    focusRippleOpacity: _react2['default'].PropTypes.number,
	    keyboardFocused: _react2['default'].PropTypes.bool,
	    linkButton: _react2['default'].PropTypes.bool,
	    onBlur: _react2['default'].PropTypes.func,
	    onFocus: _react2['default'].PropTypes.func,
	    onKeyDown: _react2['default'].PropTypes.func,
	    onKeyUp: _react2['default'].PropTypes.func,
	    onKeyboardFocus: _react2['default'].PropTypes.func,
	    onTouchTap: _react2['default'].PropTypes.func,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object,
	    tabIndex: _react2['default'].PropTypes.number,
	    touchRippleColor: _react2['default'].PropTypes.string,
	    touchRippleOpacity: _react2['default'].PropTypes.number,
	    type: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      containerElement: 'button',
	      onBlur: function onBlur() {},
	      onFocus: function onFocus() {},
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onKeyDown: function onKeyDown() {},
	      onKeyUp: function onKeyUp() {},
	      onTouchTap: function onTouchTap() {},
	      tabIndex: 0,
	      type: 'button'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      isKeyboardFocused: !this.props.disabled && this.props.keyboardFocused && !this.props.disableKeyboardFocus,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	
	    if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      if (nextProps.onKeyboardFocus) {
	        nextProps.onKeyboardFocus(null, false);
	      }
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    injectStyle();
	    listenForTabPresses();
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var centerRipple = _props.centerRipple;
	    var children = _props.children;
	    var containerElement = _props.containerElement;
	    var disabled = _props.disabled;
	    var disableFocusRipple = _props.disableFocusRipple;
	    var disableKeyboardFocus = _props.disableKeyboardFocus;
	    var disableTouchRipple = _props.disableTouchRipple;
	    var focusRippleColor = _props.focusRippleColor;
	    var focusRippleOpacity = _props.focusRippleOpacity;
	    var linkButton = _props.linkButton;
	    var touchRippleColor = _props.touchRippleColor;
	    var touchRippleOpacity = _props.touchRippleOpacity;
	    var onBlur = _props.onBlur;
	    var onFocus = _props.onFocus;
	    var onKeyUp = _props.onKeyUp;
	    var onKeyDown = _props.onKeyDown;
	    var onTouchTap = _props.onTouchTap;
	    var style = _props.style;
	    var tabIndex = _props.tabIndex;
	    var type = _props.type;
	
	    var other = _objectWithoutProperties(_props, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'linkButton', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onFocus', 'onKeyUp', 'onKeyDown', 'onTouchTap', 'style', 'tabIndex', 'type']);
	
	    var mergedStyles = this.prepareStyles({
	      border: 10,
	      background: 'none',
	      boxSizing: 'border-box',
	      display: 'inline-block',
	      font: 'inherit',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      tapHighlightColor: _stylesColors2['default'].transparent,
	      appearance: linkButton ? null : 'button',
	      cursor: disabled ? 'default' : 'pointer',
	      textDecoration: 'none',
	      outline: 'none'
	    }, style);
	
	    if (disabled && linkButton) {
	      return _react2['default'].createElement(
	        'span',
	        _extends({}, other, {
	          style: mergedStyles }),
	        children
	      );
	    }
	
	    var buttonProps = _extends({}, other, {
	      style: mergedStyles,
	      disabled: disabled,
	      onBlur: this._handleBlur,
	      onFocus: this._handleFocus,
	      onTouchTap: this._handleTouchTap,
	      onKeyUp: this._handleKeyUp,
	      onKeyDown: this._handleKeyDown,
	      tabIndex: tabIndex,
	      type: type
	    });
	    var buttonChildren = this._createButtonChildren();
	
	    return _react2['default'].isValidElement(containerElement) ? _react2['default'].cloneElement(containerElement, buttonProps, buttonChildren) : _react2['default'].createElement(linkButton ? 'a' : containerElement, buttonProps, buttonChildren);
	  },
	
	  isKeyboardFocused: function isKeyboardFocused() {
	    return this.state.isKeyboardFocused;
	  },
	
	  removeKeyboardFocus: function removeKeyboardFocus(e) {
	    if (this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      this.props.onKeyboardFocus(e, false);
	    }
	  },
	
	  setKeyboardFocus: function setKeyboardFocus(e) {
	    if (!this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: true });
	      this.props.onKeyboardFocus(e, true);
	    }
	  },
	
	  _cancelFocusTimeout: function _cancelFocusTimeout() {
	    if (this._focusTimeout) {
	      clearTimeout(this._focusTimeout);
	      this._focusTimeout = null;
	    }
	  },
	
	  _createButtonChildren: function _createButtonChildren() {
	    var _props2 = this.props;
	    var centerRipple = _props2.centerRipple;
	    var children = _props2.children;
	    var disabled = _props2.disabled;
	    var disableFocusRipple = _props2.disableFocusRipple;
	    var disableKeyboardFocus = _props2.disableKeyboardFocus;
	    var disableTouchRipple = _props2.disableTouchRipple;
	    var focusRippleColor = _props2.focusRippleColor;
	    var focusRippleOpacity = _props2.focusRippleOpacity;
	    var touchRippleColor = _props2.touchRippleColor;
	    var touchRippleOpacity = _props2.touchRippleOpacity;
	    var isKeyboardFocused = this.state.isKeyboardFocused;
	
	    //Focus Ripple
	    var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2['default'].createElement(_ripplesFocusRipple2['default'], {
	      color: focusRippleColor,
	      opacity: focusRippleOpacity,
	      show: isKeyboardFocused
	    }) : undefined;
	
	    //Touch Ripple
	    var touchRipple = !disabled && !disableTouchRipple ? _react2['default'].createElement(
	      _ripplesTouchRipple2['default'],
	      {
	        centerRipple: centerRipple,
	        color: touchRippleColor,
	        opacity: touchRippleOpacity },
	      children
	    ) : undefined;
	
	    return _utilsChildren2['default'].create({
	      focusRipple: focusRipple,
	      touchRipple: touchRipple,
	      children: touchRipple ? undefined : children
	    });
	  },
	
	  _handleKeyDown: function _handleKeyDown(e) {
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      if (e.keyCode === _utilsKeyCode2['default'].ENTER && this.state.isKeyboardFocused) {
	        this._handleTouchTap(e);
	      }
	    }
	    this.props.onKeyDown(e);
	  },
	
	  _handleKeyUp: function _handleKeyUp(e) {
	    if (!this.props.disabled && e.keyCode === _utilsKeyCode2['default'].SPACE && this.state.isKeyboardFocused) {
	      this._handleTouchTap(e);
	    }
	    this.props.onKeyUp(e);
	  },
	
	  _handleBlur: function _handleBlur(e) {
	    this._cancelFocusTimeout();
	    this.removeKeyboardFocus(e);
	    this.props.onBlur(e);
	  },
	
	  _handleFocus: function _handleFocus(e) {
	    var _this = this;
	
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      //setTimeout is needed because the focus event fires first
	      //Wait so that we can capture if this was a keyboard focus
	      //or touch focus
	      this._focusTimeout = setTimeout(function () {
	        if (tabPressed) {
	          _this.setKeyboardFocus(e);
	        }
	      }, 150);
	
	      this.props.onFocus(e);
	    }
	  },
	
	  _handleTouchTap: function _handleTouchTap(e) {
	    this._cancelFocusTimeout();
	    if (!this.props.disabled) {
	      tabPressed = false;
	      this.removeKeyboardFocus(e);
	      this.props.onTouchTap(e);
	    }
	  }
	
	});
	
	exports['default'] = EnhancedButton;
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _utilsPropTypes = __webpack_require__(85);
	
	var _utilsPropTypes2 = _interopRequireDefault(_utilsPropTypes);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesTypography = __webpack_require__(116);
	
	var _stylesTypography2 = _interopRequireDefault(_stylesTypography);
	
	var _paper = __webpack_require__(197);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var List = _react2['default'].createClass({
	  displayName: 'List',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  propTypes: {
	    children: _react2['default'].PropTypes.node,
	    insetSubheader: _react2['default'].PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object,
	    subheader: _react2['default'].PropTypes.node,
	    subheaderStyle: _react2['default'].PropTypes.object,
	    zDepth: _utilsPropTypes2['default'].zDepth
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      zDepth: 0
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var insetSubheader = _props.insetSubheader;
	    var style = _props.style;
	    var subheader = _props.subheader;
	    var subheaderStyle = _props.subheaderStyle;
	    var zDepth = _props.zDepth;
	
	    var other = _objectWithoutProperties(_props, ['children', 'insetSubheader', 'style', 'subheader', 'subheaderStyle', 'zDepth']);
	
	    var styles = {
	      root: {
	        padding: 0,
	        paddingBottom: 8,
	        paddingTop: subheader ? 0 : 8
	      },
	
	      subheader: {
	        color: _stylesTypography2['default'].textLightBlack,
	        fontSize: 14,
	        fontWeight: _stylesTypography2['default'].fontWeightMedium,
	        lineHeight: '48px',
	        paddingLeft: insetSubheader ? 72 : 16
	      }
	    };
	
	    var subheaderElement = undefined;
	    if (subheader) {
	      var mergedSubheaderStyles = this.prepareStyles(styles.subheader, subheaderStyle);
	      subheaderElement = _react2['default'].createElement(
	        'div',
	        { style: mergedSubheaderStyles },
	        subheader
	      );
	    }
	
	    return _react2['default'].createElement(
	      _paper2['default'],
	      _extends({}, other, {
	        style: this.mergeStyles(styles.root, style),
	        zDepth: zDepth }),
	      subheaderElement,
	      children
	    );
	  }
	});
	
	exports['default'] = List;
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _utilsPropTypes = __webpack_require__(85);
	
	var _utilsPropTypes2 = _interopRequireDefault(_utilsPropTypes);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var Paper = _react2['default'].createClass({
	  displayName: 'Paper',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  propTypes: {
	    children: _react2['default'].PropTypes.node,
	    circle: _react2['default'].PropTypes.bool,
	    rounded: _react2['default'].PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object,
	    transitionEnabled: _react2['default'].PropTypes.bool,
	    zDepth: _utilsPropTypes2['default'].zDepth
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      circle: false,
	      rounded: true,
	      transitionEnabled: true,
	      zDepth: 1
	    };
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var circle = _props.circle;
	    var rounded = _props.rounded;
	    var style = _props.style;
	    var transitionEnabled = _props.transitionEnabled;
	    var zDepth = _props.zDepth;
	
	    var other = _objectWithoutProperties(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
	
	    var styles = {
	      backgroundColor: this.state.muiTheme.paper.backgroundColor,
	      transition: transitionEnabled && _stylesTransitions2['default'].easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      boxShadow: this._getZDepthShadows(zDepth),
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles, style) }),
	      children
	    );
	  },
	
	  _getZDepthShadows: function _getZDepthShadows(zDepth) {
	    var shadows = [null, '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)', '0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)', '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)', '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)', '0 19px 60px rgba(0, 0, 0, 0.30), 0 15px 20px rgba(0, 0, 0, 0.22)'];
	
	    return shadows[zDepth];
	  }
	
	});
	
	exports['default'] = Paper;
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _colors = __webpack_require__(33);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _utilsColorManipulator = __webpack_require__(117);
	
	var _utilsColorManipulator2 = _interopRequireDefault(_utilsColorManipulator);
	
	var _spacing = __webpack_require__(453);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	/*
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */
	
	exports['default'] = {
	  spacing: _spacing2['default'],
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors2['default'].cyan500,
	    primary2Color: _colors2['default'].cyan700,
	    primary3Color: _colors2['default'].grey400,
	    accent1Color: _colors2['default'].pinkA200,
	    accent2Color: _colors2['default'].grey100,
	    accent3Color: _colors2['default'].grey500,
	    textColor: _colors2['default'].darkBlack,
	    alternateTextColor: _colors2['default'].white,
	    canvasColor: _colors2['default'].white,
	    borderColor: _colors2['default'].grey300,
	    disabledColor: _utilsColorManipulator2['default'].fade(_colors2['default'].darkBlack, 0.3),
	    pickerHeaderColor: _colors2['default'].cyan500,
	    clockCircleColor: _utilsColorManipulator2['default'].fade(_colors2['default'].darkBlack, 0.07)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCreateFragment = __webpack_require__(473);
	
	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);
	
	exports['default'] = {
	
	  create: function create(fragments) {
	    var newFragments = {};
	    var validChildrenCount = 0;
	    var firstKey = undefined;
	
	    //Only create non-empty key fragments
	    for (var key in fragments) {
	      var currentChild = fragments[key];
	
	      if (currentChild) {
	        if (validChildrenCount === 0) firstKey = key;
	        newFragments[key] = currentChild;
	        validChildrenCount++;
	      }
	    }
	
	    if (validChildrenCount === 0) return undefined;
	    if (validChildrenCount === 1) return newFragments[firstKey];
	    return (0, _reactAddonsCreateFragment2['default'])(newFragments);
	  },
	
	  extend: function extend(children, extendedProps, extendedChildren) {
	
	    return _react2['default'].isValidElement(children) ? _react2['default'].Children.map(children, function (child) {
	
	      var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;
	
	      var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;
	
	      return _react2['default'].cloneElement(child, newProps, newChildren);
	    }) : children;
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _stylesAutoPrefix = __webpack_require__(82);
	
	var _stylesAutoPrefix2 = _interopRequireDefault(_stylesAutoPrefix);
	
	var _utilsImmutabilityHelper = __webpack_require__(84);
	
	var _utilsImmutabilityHelper2 = _interopRequireDefault(_utilsImmutabilityHelper);
	
	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
	
	exports['default'] = {
	
	  merge: function merge() {
	    return _utilsImmutabilityHelper2['default'].merge.apply(this, arguments);
	  },
	
	  mergeAndPrefix: function mergeAndPrefix() {
	    var mergedStyles = _utilsImmutabilityHelper2['default'].merge.apply(this, arguments);
	    return _stylesAutoPrefix2['default'].all(mergedStyles);
	  },
	
	  // This function ensures that `style` supports both ltr and rtl directions by checking
	  //   `styleConstants` in `muiTheme` and replacing attribute keys if necessary.
	  ensureDirection: function ensureDirection(muiTheme, style) {
	    if (true) {
	      if (style.didFlip) {
	        console.warn(new Error('You\'re calling `ensureDirection` on the same style object twice.'));
	      }
	      style = _utilsImmutabilityHelper2['default'].merge({
	        didFlip: 'true'
	      }, style);
	    }
	
	    // Left to right is the default. No need to flip anything.
	    if (!muiTheme.isRtl) return style;
	
	    var flippedAttributes = {
	      // Keys and their replacements.
	      right: 'left',
	      left: 'right',
	      marginRight: 'marginLeft',
	      marginLeft: 'marginRight',
	      paddingRight: 'paddingLeft',
	      paddingLeft: 'paddingRight',
	      borderRight: 'borderLeft',
	      borderLeft: 'borderRight'
	    };
	
	    var newStyle = {};
	
	    Object.keys(style).forEach(function (attribute) {
	      var value = style[attribute];
	      var key = attribute;
	
	      if (flippedAttributes.hasOwnProperty(attribute)) {
	        key = flippedAttributes[attribute];
	      }
	
	      switch (attribute) {
	        case 'float':
	        case 'textAlign':
	          if (value === 'right') {
	            value = 'left';
	          } else if (value === 'left') {
	            value = 'right';
	          }
	          break;
	        case 'direction':
	          if (value === 'ltr') {
	            value = 'rtl';
	          } else if (value === 'rtl') {
	            value = 'ltr';
	          }
	          break;
	        case 'transform':
	          var matches = undefined;
	          if (matches = value.match(reTranslate)) {
	            value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	          }
	          if (matches = value.match(reSkew)) {
	            value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	          }
	          break;
	        case 'transformOrigin':
	          if (value.indexOf('right') > -1) {
	            value = value.replace('right', 'left');
	          } else if (value.indexOf('left') > -1) {
	            value = value.replace('left', 'right');
	          }
	          break;
	      }
	
	      newStyle[key] = value;
	    });
	
	    return newStyle;
	  },
	
	  prepareStyles: function prepareStyles(muiTheme) {
	    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      styles[_key - 1] = arguments[_key];
	    }
	
	    styles = styles.length > 1 ? _utilsImmutabilityHelper2['default'].merge.apply(this, styles) : styles[0] || {};
	    var flipped = this.ensureDirection(muiTheme, styles);
	    return _stylesAutoPrefix2['default'].all(flipped);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 201 */,
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(561);

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(583);

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
	// all credits and original code to the author
	// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
	// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>
	
	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _createClass = __webpack_require__(499)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _grabNode = __webpack_require__(86);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var _themesSolarized = __webpack_require__(490);
	
	var _themesSolarized2 = _interopRequireDefault(_themesSolarized);
	
	var styles = {
	  tree: {
	    border: 0,
	    padding: 0,
	    marginTop: 8,
	    marginBottom: 8,
	    marginLeft: 2,
	    marginRight: 0,
	    fontSize: '0.90em',
	    listStyle: 'none',
	    MozUserSelect: 'none',
	    WebkitUserSelect: 'none'
	  }
	};
	
	var getEmptyStyle = function getEmptyStyle() {
	  return {};
	};
	
	var JSONTree = (function (_React$Component) {
	  _inherits(JSONTree, _React$Component);
	
	  _createClass(JSONTree, null, [{
	    key: 'propTypes',
	    value: {
	      data: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      expandRoot: true,
	      theme: _themesSolarized2['default'],
	      getArrowStyle: getEmptyStyle,
	      getListStyle: getEmptyStyle,
	      getItemStringStyle: getEmptyStyle,
	      getLabelStyle: getEmptyStyle,
	      getValueStyle: getEmptyStyle,
	      getItemString: function getItemString(type, data, itemType, itemString) {
	        return _react2['default'].createElement(
	          'span',
	          null,
	          itemType,
	          ' ',
	          itemString
	        );
	      }
	    },
	    enumerable: true
	  }]);
	
	  function JSONTree(props) {
	    _classCallCheck(this, JSONTree);
	
	    _React$Component.call(this, props);
	  }
	
	  JSONTree.prototype.render = function render() {
	    var keyName = this.props.keyName || 'root';
	    var getStyles = {
	      getArrowStyle: this.props.getArrowStyle,
	      getListStyle: this.props.getListStyle,
	      getItemStringStyle: this.props.getItemStringStyle,
	      getLabelStyle: this.props.getLabelStyle,
	      getValueStyle: this.props.getValueStyle
	    };
	    var _props = this.props;
	    var data = _props.data;
	    var previousData = _props.previousData;
	    var theme = _props.theme;
	    var getItemString = _props.getItemString;
	    var expandRoot = _props.expandRoot;
	
	    var rootNode = _grabNode2['default'](keyName, data, previousData, theme, getStyles, getItemString, expandRoot);
	    return _react2['default'].createElement(
	      'ul',
	      { style: _extends({}, styles.tree, this.props.style) },
	      rootNode
	    );
	  };
	
	  return JSONTree;
	})(_react2['default'].Component);
	
	exports['default'] = JSONTree;
	module.exports = exports['default'];

/***/ },
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.toggleVisibility = toggleVisibility;
	exports.changePosition = changePosition;
	exports.changeSize = changeSize;
	var TOGGLE_VISIBILITY = exports.TOGGLE_VISIBILITY = '@@redux-devtools-log-monitor/TOGGLE_VISIBILITY';
	function toggleVisibility() {
	  return { type: TOGGLE_VISIBILITY };
	}
	
	var CHANGE_POSITION = exports.CHANGE_POSITION = '@@redux-devtools-log-monitor/CHANGE_POSITION';
	function changePosition() {
	  return { type: CHANGE_POSITION };
	}
	
	var CHANGE_SIZE = exports.CHANGE_SIZE = '@@redux-devtools-log-monitor/CHANGE_SIZE';
	function changeSize(size) {
	  return { type: CHANGE_SIZE, size: size };
	}

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var POSITIONS = exports.POSITIONS = ['left', 'top', 'right', 'bottom'];

/***/ },
/* 241 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.updateScrollTop = updateScrollTop;
	var UPDATE_SCROLL_TOP = exports.UPDATE_SCROLL_TOP = '@@redux-devtools-log-monitor/UPDATE_SCROLL_TOP';
	function updateScrollTop(scrollTop) {
	  return { type: UPDATE_SCROLL_TOP, scrollTop: scrollTop };
	}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _instrument = __webpack_require__(243);
	
	Object.defineProperty(exports, 'instrument', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.default;
	  }
	});
	Object.defineProperty(exports, 'ActionCreators', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.ActionCreators;
	  }
	});
	Object.defineProperty(exports, 'ActionTypes', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.ActionTypes;
	  }
	});
	
	var _persistState = __webpack_require__(601);
	
	Object.defineProperty(exports, 'persistState', {
	  enumerable: true,
	  get: function get() {
	    return _persistState.default;
	  }
	});
	
	var _createDevTools = __webpack_require__(600);
	
	Object.defineProperty(exports, 'createDevTools', {
	  enumerable: true,
	  get: function get() {
	    return _createDevTools.default;
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.ActionCreators = exports.ActionTypes = undefined;
	exports.default = instrument;
	
	var _difference = __webpack_require__(401);
	
	var _difference2 = _interopRequireDefault(_difference);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var ActionTypes = exports.ActionTypes = {
	  PERFORM_ACTION: 'PERFORM_ACTION',
	  RESET: 'RESET',
	  ROLLBACK: 'ROLLBACK',
	  COMMIT: 'COMMIT',
	  SWEEP: 'SWEEP',
	  TOGGLE_ACTION: 'TOGGLE_ACTION',
	  JUMP_TO_STATE: 'JUMP_TO_STATE',
	  IMPORT_STATE: 'IMPORT_STATE'
	};
	
	/**
	 * Action creators to change the History state.
	 */
	var ActionCreators = exports.ActionCreators = {
	  performAction: function performAction(action) {
	    return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
	  },
	  reset: function reset() {
	    return { type: ActionTypes.RESET, timestamp: Date.now() };
	  },
	  rollback: function rollback() {
	    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
	  },
	  commit: function commit() {
	    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
	  },
	  sweep: function sweep() {
	    return { type: ActionTypes.SWEEP };
	  },
	  toggleAction: function toggleAction(id) {
	    return { type: ActionTypes.TOGGLE_ACTION, id: id };
	  },
	  jumpToState: function jumpToState(index) {
	    return { type: ActionTypes.JUMP_TO_STATE, index: index };
	  },
	  importState: function importState(nextLiftedState) {
	    return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState };
	  }
	};
	
	var INIT_ACTION = { type: '@@INIT' };
	
	/**
	 * Computes the next entry in the log by applying an action.
	 */
	function computeNextEntry(reducer, action, state, error) {
	  if (error) {
	    return {
	      state: state,
	      error: 'Interrupted by an error up the chain'
	    };
	  }
	
	  var nextState = state;
	  var nextError = undefined;
	  try {
	    nextState = reducer(state, action);
	  } catch (err) {
	    nextError = err.toString();
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.chrome !== 'undefined') {
	      // In Chrome, rethrowing provides better source map support
	      setTimeout(function () {
	        throw err;
	      });
	    } else {
	      console.error(err.stack || err);
	    }
	  }
	
	  return {
	    state: nextState,
	    error: nextError
	  };
	}
	
	/**
	 * Runs the reducer on invalidated actions to get a fresh computation log.
	 */
	function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds) {
	  // Optimization: exit early and return the same reference
	  // if we know nothing could have changed.
	  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
	    return computedStates;
	  }
	
	  var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
	  for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
	    var actionId = stagedActionIds[i];
	    var action = actionsById[actionId].action;
	
	    var previousEntry = nextComputedStates[i - 1];
	    var previousState = previousEntry ? previousEntry.state : committedState;
	    var previousError = previousEntry ? previousEntry.error : undefined;
	
	    var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
	    var entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError);
	
	    nextComputedStates.push(entry);
	  }
	
	  return nextComputedStates;
	}
	
	/**
	 * Lifts an app's action into an action on the lifted store.
	 */
	function liftAction(action) {
	  return ActionCreators.performAction(action);
	}
	
	/**
	 * Creates a history state reducer from an app's reducer.
	 */
	function liftReducerWith(reducer, initialCommittedState, monitorReducer) {
	  var initialLiftedState = {
	    monitorState: monitorReducer(undefined, {}),
	    nextActionId: 1,
	    actionsById: { 0: liftAction(INIT_ACTION) },
	    stagedActionIds: [0],
	    skippedActionIds: [],
	    committedState: initialCommittedState,
	    currentStateIndex: 0,
	    computedStates: []
	  };
	
	  /**
	   * Manages how the history actions modify the history state.
	   */
	  return function () {
	    var liftedState = arguments.length <= 0 || arguments[0] === undefined ? initialLiftedState : arguments[0];
	    var liftedAction = arguments[1];
	    var monitorState = liftedState.monitorState;
	    var actionsById = liftedState.actionsById;
	    var nextActionId = liftedState.nextActionId;
	    var stagedActionIds = liftedState.stagedActionIds;
	    var skippedActionIds = liftedState.skippedActionIds;
	    var committedState = liftedState.committedState;
	    var currentStateIndex = liftedState.currentStateIndex;
	    var computedStates = liftedState.computedStates;
	
	    // By default, agressively recompute every state whatever happens.
	    // This has O(n) performance, so we'll override this to a sensible
	    // value whenever we feel like we don't have to recompute the states.
	
	    var minInvalidatedStateIndex = 0;
	
	    switch (liftedAction.type) {
	      case ActionTypes.RESET:
	        {
	          // Get back to the state the store was created with.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = initialCommittedState;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.COMMIT:
	        {
	          // Consider the last committed state the new starting point.
	          // Squash any staged actions into a single committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = computedStates[currentStateIndex].state;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.ROLLBACK:
	        {
	          // Forget about any staged actions.
	          // Start again from the last committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.TOGGLE_ACTION:
	        {
	          var _ret = (function () {
	            // Toggle whether an action with given ID is skipped.
	            // Being skipped means it is a no-op during the computation.
	            var actionId = liftedAction.id;
	
	            var index = skippedActionIds.indexOf(actionId);
	            if (index === -1) {
	              skippedActionIds = [actionId].concat(skippedActionIds);
	            } else {
	              skippedActionIds = skippedActionIds.filter(function (id) {
	                return id !== actionId;
	              });
	            }
	            // Optimization: we know history before this action hasn't changed
	            minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
	            return 'break';
	          })();
	
	          if (_ret === 'break') break;
	        }
	      case ActionTypes.JUMP_TO_STATE:
	        {
	          // Without recomputing anything, move the pointer that tell us
	          // which state is considered the current one. Useful for sliders.
	          currentStateIndex = liftedAction.index;
	          // Optimization: we know the history has not changed.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	      case ActionTypes.SWEEP:
	        {
	          // Forget any actions that are currently being skipped.
	          stagedActionIds = (0, _difference2.default)(stagedActionIds, skippedActionIds);
	          skippedActionIds = [];
	          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
	          break;
	        }
	      case ActionTypes.PERFORM_ACTION:
	        {
	          if (currentStateIndex === stagedActionIds.length - 1) {
	            currentStateIndex++;
	          }
	          var actionId = nextActionId++;
	          // Mutation! This is the hottest path, and we optimize on purpose.
	          // It is safe because we set a new key in a cache dictionary.
	          actionsById[actionId] = liftedAction;
	          stagedActionIds = [].concat(stagedActionIds, [actionId]);
	          // Optimization: we know that only the new action needs computing.
	          minInvalidatedStateIndex = stagedActionIds.length - 1;
	          break;
	        }
	      case ActionTypes.IMPORT_STATE:
	        {
	          var _liftedAction$nextLif = liftedAction.nextLiftedState;
	          // Completely replace everything.
	
	          monitorState = _liftedAction$nextLif.monitorState;
	          actionsById = _liftedAction$nextLif.actionsById;
	          nextActionId = _liftedAction$nextLif.nextActionId;
	          stagedActionIds = _liftedAction$nextLif.stagedActionIds;
	          skippedActionIds = _liftedAction$nextLif.skippedActionIds;
	          committedState = _liftedAction$nextLif.committedState;
	          currentStateIndex = _liftedAction$nextLif.currentStateIndex;
	          computedStates = _liftedAction$nextLif.computedStates;
	
	          break;
	        }
	      case '@@redux/INIT':
	        {
	          // Always recompute states on hot reload and init.
	          minInvalidatedStateIndex = 0;
	          break;
	        }
	      default:
	        {
	          // If the action is not recognized, it's a monitor action.
	          // Optimization: a monitor action can't change history.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	    }
	
	    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
	    monitorState = monitorReducer(monitorState, liftedAction);
	    return {
	      monitorState: monitorState,
	      actionsById: actionsById,
	      nextActionId: nextActionId,
	      stagedActionIds: stagedActionIds,
	      skippedActionIds: skippedActionIds,
	      committedState: committedState,
	      currentStateIndex: currentStateIndex,
	      computedStates: computedStates
	    };
	  };
	}
	
	/**
	 * Provides an app's view into the state of the lifted store.
	 */
	function unliftState(liftedState) {
	  var computedStates = liftedState.computedStates;
	  var currentStateIndex = liftedState.currentStateIndex;
	  var state = computedStates[currentStateIndex].state;
	
	  return state;
	}
	
	/**
	 * Provides an app's view into the lifted store.
	 */
	function unliftStore(liftedStore, liftReducer) {
	  var lastDefinedState = undefined;
	
	  return _extends({}, liftedStore, {
	
	    liftedStore: liftedStore,
	
	    dispatch: function dispatch(action) {
	      liftedStore.dispatch(liftAction(action));
	      return action;
	    },
	    getState: function getState() {
	      var state = unliftState(liftedStore.getState());
	      if (state !== undefined) {
	        lastDefinedState = state;
	      }
	      return lastDefinedState;
	    },
	    replaceReducer: function replaceReducer(nextReducer) {
	      liftedStore.replaceReducer(liftReducer(nextReducer));
	    }
	  });
	}
	
	/**
	 * Redux instrumentation store enhancer.
	 */
	function instrument() {
	  var monitorReducer = arguments.length <= 0 || arguments[0] === undefined ? function () {
	    return null;
	  } : arguments[0];
	
	  return function (createStore) {
	    return function (reducer, initialState) {
	      function liftReducer(r) {
	        return liftReducerWith(r, initialState, monitorReducer);
	      }
	
	      var liftedStore = createStore(liftReducer(reducer));
	      return unliftStore(liftedStore, liftReducer);
	    };
	  };
	}

/***/ },
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(354);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(248)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./AlbumsView.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./AlbumsView.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 250 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var x=[{"wrapperType":"collection","collectionType":"Album","artistId":23203991,"collectionId":216167680,"amgArtistId":673409,"artistName":"Arcade Fire","collectionName":"Neon Bible","collectionCensoredName":"Neon Bible","artistViewUrl":"https://itunes.apple.com/us/artist/arcade-fire/id23203991?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/neon-bible/id216167680?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/17/84/4d/17844de5-3aa8-047a-0564-bc22edde3f70/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/17/84/4d/17844de5-3aa8-047a-0564-bc22edde3f70/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2007 Merge Records","country":"USA","currency":"USD","releaseDate":"2007-03-06T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":2322618,"collectionId":278818185,"artistName":"My Morning Jacket","collectionName":"It Still Moves","collectionCensoredName":"It Still Moves","artistViewUrl":"https://itunes.apple.com/us/artist/my-morning-jacket/id2322618?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/it-still-moves/id278818185?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/7c/9d/84/7c9d843f-6aa0-c62d-c5cf-1d5523d7faee/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/7c/9d/84/7c9d843f-6aa0-c62d-c5cf-1d5523d7faee/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2003 ATO Records, LLC. All Rights Reserved","country":"USA","currency":"USD","releaseDate":"2004-09-09T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":13432236,"collectionId":146424124,"amgArtistId":21307,"artistName":"Scott Walker","collectionName":"The Drift","collectionCensoredName":"The Drift","artistViewUrl":"https://itunes.apple.com/us/artist/scott-walker/id13432236?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-drift/id146424124?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/68/90/28/68902864-7459-3e36-aea7-0389167443ea/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/68/90/28/68902864-7459-3e36-aea7-0389167443ea/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2006 4AD","country":"USA","currency":"USD","releaseDate":"2006-05-08T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":29525428,"collectionId":742432549,"amgArtistId":533953,"artistName":"LCD Soundsystem","collectionName":"Sound of Silver","collectionCensoredName":"Sound of Silver","artistViewUrl":"https://itunes.apple.com/us/artist/lcd-soundsystem/id29525428?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sound-of-silver/id742432549?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/4f/e9/df/4fe9df4a-0ae2-0d17-58ce-edfd5f3385c2/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/4f/e9/df/4fe9df4a-0ae2-0d17-58ce-edfd5f3385c2/source/100x100bb.jpg","collectionPrice":5.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2007 DFA LLC under exclusive licence to Parlophone Records Ltd","country":"USA","currency":"USD","releaseDate":"2007-03-12T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":340033375,"collectionId":583322210,"amgArtistId":1188387,"artistName":"Surfer Blood","collectionName":"Astro Coast","collectionCensoredName":"Astro Coast","artistViewUrl":"https://itunes.apple.com/us/artist/surfer-blood/id340033375?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/astro-coast/id583322210?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/f6/d9/b6/f6d9b645-b7aa-606b-570b-feb806a0c1ae/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/f6/d9/b6/f6d9b645-b7aa-606b-570b-feb806a0c1ae/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2010 Kanine Records","country":"USA","currency":"USD","releaseDate":"2010-01-19T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":24281998,"collectionId":1052128128,"amgArtistId":660339,"artistName":"Panda Bear","collectionName":"Person Pitch","collectionCensoredName":"Person Pitch","artistViewUrl":"https://itunes.apple.com/us/artist/panda-bear/id24281998?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/person-pitch/id1052128128?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music69/v4/ea/a4/b1/eaa4b11c-e9d9-5e28-d856-c95c58c3050f/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music69/v4/ea/a4/b1/eaa4b11c-e9d9-5e28-d856-c95c58c3050f/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2007 My Animal Home","country":"USA","currency":"USD","releaseDate":"2007-03-20T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":266606878,"collectionId":931456846,"amgArtistId":1001581,"artistName":"Fuck Buttons","collectionName":"Tarot Sport","collectionCensoredName":"Tarot Sport","artistViewUrl":"https://itunes.apple.com/us/artist/fuck-buttons/id266606878?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/tarot-sport/id931456846?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music3/v4/26/37/34/26373468-6b82-c51b-1dd4-bc186fd2b7e4/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music3/v4/26/37/34/26373468-6b82-c51b-1dd4-bc186fd2b7e4/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2009 ATP Recordings","country":"USA","currency":"USD","releaseDate":"2009-10-20T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":3271784,"collectionId":3863054,"amgArtistId":434969,"artistName":"The Shins","collectionName":"Chutes Too Narrow","collectionCensoredName":"Chutes Too Narrow","artistViewUrl":"https://itunes.apple.com/us/artist/the-shins/id3271784?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/chutes-too-narrow/id3863054?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/70/6a/41/706a4128-ded3-451e-ca3c-985f808cc3c9/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/70/6a/41/706a4128-ded3-451e-ca3c-985f808cc3c9/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2003 Sub Pop","country":"USA","currency":"USD","releaseDate":"2003-10-21T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":445959577,"collectionId":445959542,"amgArtistId":1164729,"artistName":"Volcano Choir","collectionName":"Unmap","collectionCensoredName":"Unmap","artistViewUrl":"https://itunes.apple.com/us/artist/volcano-choir/id445959577?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/unmap/id445959542?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/ee/df/d8/eedfd80f-8823-2060-9a29-3e66d2b8b7b2/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/ee/df/d8/eedfd80f-8823-2060-9a29-3e66d2b8b7b2/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2009 Jagjaguwar","country":"USA","currency":"USD","releaseDate":"2009-09-22T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":20158274,"collectionId":425525730,"amgArtistId":544165,"artistName":"Cass McCombs","collectionName":"Wit's End","collectionCensoredName":"Wit's End","artistViewUrl":"https://itunes.apple.com/us/artist/cass-mccombs/id20158274?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/wits-end/id425525730?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/f3/b7/23/f3b7235f-8a61-76f4-1c0f-da4e0fbdfbe7/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/f3/b7/23/f3b7235f-8a61-76f4-1c0f-da4e0fbdfbe7/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ Domino Recording Co Ltd","country":"USA","currency":"USD","releaseDate":"2011-04-26T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":416187080,"collectionId":427872057,"amgArtistId":1085157,"artistName":"EMA","collectionName":"Past Life Martyred Saints","collectionCensoredName":"Past Life Martyred Saints","artistViewUrl":"https://itunes.apple.com/us/artist/ema/id416187080?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/past-life-martyred-saints/id427872057?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/2f/bc/45/2fbc45a6-3ee4-c005-c961-2b23b4ee8a2a/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/2f/bc/45/2fbc45a6-3ee4-c005-c961-2b23b4ee8a2a/source/100x100bb.jpg","collectionPrice":8.91,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2011 Souterrain Transmissions","country":"USA","currency":"USD","releaseDate":"2011-05-10T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":432012935,"collectionId":669854622,"amgArtistId":2381951,"artistName":"Shabazz Palaces","collectionName":"Black Up","collectionCensoredName":"Black Up","artistViewUrl":"https://itunes.apple.com/us/artist/shabazz-palaces/id432012935?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/black-up/id669854622?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music6/v4/c2/f9/9d/c2f99dc3-fed1-fc79-2a85-1f41c7f559b6/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music6/v4/c2/f9/9d/c2f99dc3-fed1-fc79-2a85-1f41c7f559b6/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2011 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2011-06-28T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":213048483,"collectionId":368521609,"amgArtistId":1114093,"artistName":"Emeralds","collectionName":"Does It Look Like I'm Here?","collectionCensoredName":"Does It Look Like I'm Here?","artistViewUrl":"https://itunes.apple.com/us/artist/emeralds/id213048483?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/does-it-look-like-im-here/id368521609?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/84/dd/69/84dd695e-93b5-ce02-ffca-00543eab38cd/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/84/dd/69/84dd695e-93b5-ce02-ffca-00543eab38cd/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2010 Editions Mego","country":"USA","currency":"USD","releaseDate":"2010-05-24T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":2894441,"collectionId":209047335,"amgArtistId":276494,"artistName":"Deerhoof","collectionName":"Friend Opportunity","collectionCensoredName":"Friend Opportunity","artistViewUrl":"https://itunes.apple.com/us/artist/deerhoof/id2894441?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/friend-opportunity/id209047335?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/67/97/4e/67974e69-dc3a-352f-0ba8-473f96268873/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/67/97/4e/67974e69-dc3a-352f-0ba8-473f96268873/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2007 Kill Rock Stars","country":"USA","currency":"USD","releaseDate":"2007-01-23T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":423445122,"collectionId":443466580,"amgArtistId":789580,"artistName":"John Maus","collectionName":"We Must Become the Pitiless Censors of Ourselves","collectionCensoredName":"We Must Become the Pitiless Censors of Ourselves","artistViewUrl":"https://itunes.apple.com/us/artist/john-maus/id423445122?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/we-must-become-pitiless-censors/id443466580?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/2c/2b/ce/2c2bceff-0b4f-ec99-e2da-c6bdc3d2c701/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/2c/2b/ce/2c2bceff-0b4f-ec99-e2da-c6bdc3d2c701/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2011 Ribbon Music","country":"USA","currency":"USD","releaseDate":"2011-06-28T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":73704844,"collectionId":622401562,"amgArtistId":665407,"artistName":"Bear In Heaven","collectionName":"Beast Rest Forth Mouth","collectionCensoredName":"Beast Rest Forth Mouth","artistViewUrl":"https://itunes.apple.com/us/artist/bear-in-heaven/id73704844?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/beast-rest-forth-mouth/id622401562?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music2/v4/e0/58/b7/e058b797-5fec-3c03-2c1d-fe64c9f5dfde/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music2/v4/e0/58/b7/e058b797-5fec-3c03-2c1d-fe64c9f5dfde/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":20,"copyright":"℗ 2010 Hometapes","country":"USA","currency":"USD","releaseDate":"2010-08-24T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":252623,"collectionId":629037626,"amgArtistId":26498,"artistName":"PJ Harvey","collectionName":"Let England Shake","collectionCensoredName":"Let England Shake","artistViewUrl":"https://itunes.apple.com/us/artist/pj-harvey/id252623?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/let-england-shake/id629037626?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music2/v4/13/81/f2/1381f2e5-ea89-945e-bb49-37bd1c74cc14/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music2/v4/13/81/f2/1381f2e5-ea89-945e-bb49-37bd1c74cc14/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2011 Vagrant Records (US)","country":"USA","currency":"USD","releaseDate":"2011-02-15T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":487277,"collectionId":468587752,"amgArtistId":3805,"artistName":"Kate Bush","collectionName":"50 Words for Snow","collectionCensoredName":"50 Words for Snow","artistViewUrl":"https://itunes.apple.com/us/artist/kate-bush/id487277?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/50-words-for-snow/id468587752?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/d8/d7/50/d8d75014-2d09-8721-15e2-b5ee476ec94b/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/d8/d7/50/d8d75014-2d09-8721-15e2-b5ee476ec94b/source/100x100bb.jpg","collectionPrice":10.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2011 Noble & Brite Ltd. Trading As Fish People, Under Exclusive License To Anti, Inc.","country":"USA","currency":"USD","releaseDate":"2011-11-21T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":321144825,"collectionId":352418533,"amgArtistId":1114544,"artistName":"Local Natives","collectionName":"Gorilla Manor","collectionCensoredName":"Gorilla Manor","artistViewUrl":"https://itunes.apple.com/us/artist/local-natives/id321144825?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/gorilla-manor/id352418533?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/02/d8/a4/02d8a477-ca95-90f0-533f-280c750e0fce/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/02/d8/a4/02d8a477-ca95-90f0-533f-280c750e0fce/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2010 Frenchkiss Records","country":"USA","currency":"USD","releaseDate":"2010-02-16T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":5453136,"collectionId":1027457277,"amgArtistId":168739,"artistName":"Basement Jaxx","collectionName":"Kish Kash","collectionCensoredName":"Kish Kash","artistViewUrl":"https://itunes.apple.com/us/artist/basement-jaxx/id5453136?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/kish-kash/id1027457277?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music5/v4/49/7a/fe/497afed6-1e90-47ca-2618-fd0978874f8e/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music5/v4/49/7a/fe/497afed6-1e90-47ca-2618-fd0978874f8e/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2003 XL Recordings","country":"USA","currency":"USD","releaseDate":"2003-10-20T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":333097675,"collectionId":918402453,"amgArtistId":2337766,"artistName":"ScHoolboy Q","collectionName":"Habits & Contradictions","collectionCensoredName":"Habits & Contradictions","artistViewUrl":"https://itunes.apple.com/us/artist/schoolboy-q/id333097675?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/habits-contradictions/id918402453?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music3/v4/83/21/47/8321471a-0917-846c-3cdd-de432bf74bff/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music3/v4/83/21/47/8321471a-0917-846c-3cdd-de432bf74bff/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":15,"copyright":"℗ 2012 Top Dawg Entertainment","country":"USA","currency":"USD","releaseDate":"2012-01-14T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":330169462,"collectionId":669292909,"amgArtistId":1171148,"artistName":"Washed Out","collectionName":"Within and Without","collectionCensoredName":"Within and Without","artistViewUrl":"https://itunes.apple.com/us/artist/washed-out/id330169462?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/within-and-without/id669292909?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music6/v4/b7/bf/6c/b7bf6c78-a6c1-bd05-5563-de3388688aed/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music6/v4/b7/bf/6c/b7bf6c78-a6c1-bd05-5563-de3388688aed/source/100x100bb.jpg","collectionPrice":8.91,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2011 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2011-07-12T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":31683901,"collectionId":36510627,"amgArtistId":678634,"artistName":"Death from Above 1979","collectionName":"You're a Woman, I'm a Machine","collectionCensoredName":"You're a Woman, I'm a Machine","artistViewUrl":"https://itunes.apple.com/us/artist/death-from-above-1979/id31683901?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/youre-a-woman-im-a-machine/id36510627?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/cd/d6/e3/cdd6e3e8-1361-290a-a632-9d7ef434680a/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/cd/d6/e3/cdd6e3e8-1361-290a-a632-9d7ef434680a/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2004 Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States","country":"USA","currency":"USD","releaseDate":"2004-09-28T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":16654916,"collectionId":626319898,"amgArtistId":554526,"artistName":"The Exploding Hearts","collectionName":"Guitar Romantic","collectionCensoredName":"Guitar Romantic","artistViewUrl":"https://itunes.apple.com/us/artist/the-exploding-hearts/id16654916?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/guitar-romantic/id626319898?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music2/v4/14/81/10/1481102c-c965-4d22-7309-76ad8cd357f0/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music2/v4/14/81/10/1481102c-c965-4d22-7309-76ad8cd357f0/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2003 Tuff Break Records","country":"USA","currency":"USD","releaseDate":"2003-04-01T08:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":425470694,"collectionId":1022625220,"amgArtistId":2362056,"artistName":"Deafheaven","collectionName":"New Bermuda","collectionCensoredName":"New Bermuda","artistViewUrl":"https://itunes.apple.com/us/artist/deafheaven/id425470694?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/new-bermuda/id1022625220?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music1/v4/0a/cc/4d/0acc4d04-c082-9882-52ad-bc90024994db/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music1/v4/0a/cc/4d/0acc4d04-c082-9882-52ad-bc90024994db/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":5,"copyright":"℗ 2015 Deafheaven, under exclusive license to Anti, Inc.","country":"USA","currency":"USD","releaseDate":"2015-10-02T07:00:00Z","primaryGenreName":"Metal"},{"wrapperType":"collection","collectionType":"Album","artistId":445928802,"collectionId":194344715,"amgArtistId":310452,"artistName":"Califone","collectionName":"Roots and Crowns","collectionCensoredName":"Roots and Crowns","artistViewUrl":"https://itunes.apple.com/us/artist/califone/id445928802?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/roots-and-crowns/id194344715?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/bb/60/91/bb609159-41a0-f557-09c7-5b70d55fcc17/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/bb/60/91/bb609159-41a0-f557-09c7-5b70d55fcc17/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2006 Thrill Jockey Records","country":"USA","currency":"USD","releaseDate":"2006-10-10T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":406846711,"collectionId":427302789,"amgArtistId":2361462,"artistName":"Iceage","collectionName":"New Brigade","collectionCensoredName":"New Brigade","artistViewUrl":"https://itunes.apple.com/us/artist/iceage/id406846711?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/new-brigade/id427302789?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/cb/a3/a1/cba3a1c3-6c80-ab47-ffef-e299afee3a8b/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/cb/a3/a1/cba3a1c3-6c80-ab47-ffef-e299afee3a8b/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2011 What's Your Rupture?","country":"USA","currency":"USD","releaseDate":"2011-03-18T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":275727569,"collectionId":425059566,"amgArtistId":826649,"artistName":"Fleet Foxes","collectionName":"Helplessness Blues","collectionCensoredName":"Helplessness Blues","artistViewUrl":"https://itunes.apple.com/us/artist/fleet-foxes/id275727569?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/helplessness-blues/id425059566?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/18/7e/35/187e3596-54da-9d97-93c7-74e290e6ee4d/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/18/7e/35/187e3596-54da-9d97-93c7-74e290e6ee4d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2011 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2011-05-03T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":274234314,"collectionId":1014524083,"amgArtistId":1029194,"artistName":"Kurt Vile","collectionName":"B'lieve I'm Goin Down...","collectionCensoredName":"B'lieve I'm Goin Down...","artistViewUrl":"https://itunes.apple.com/us/artist/kurt-vile/id274234314?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/blieve-im-goin-down.../id1014524083?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music7/v4/d3/43/20/d3432010-93ba-51dc-613f-80c4fbb83d4c/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music7/v4/d3/43/20/d3432010-93ba-51dc-613f-80c4fbb83d4c/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2015 Matador","country":"USA","currency":"USD","releaseDate":"2015-09-25T07:00:00Z","primaryGenreName":"Singer/Songwriter"},{"wrapperType":"collection","collectionType":"Album","artistId":201313968,"collectionId":436227959,"amgArtistId":823007,"artistName":"Fucked Up","collectionName":"David Comes to Life","collectionCensoredName":"David Comes to Life","artistViewUrl":"https://itunes.apple.com/us/artist/fucked-up/id201313968?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/david-comes-to-life/id436227959?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/74/81/4d/74814dc4-17f5-c3bf-d8a7-879b872b4dad/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/74/81/4d/74814dc4-17f5-c3bf-d8a7-879b872b4dad/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":18,"copyright":"℗ 2011 Matador","country":"USA","currency":"USD","releaseDate":"2011-06-03T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":479756766,"collectionId":965067911,"amgArtistId":2377309,"artistName":"The Weeknd","collectionName":"House of Balloons","collectionCensoredName":"House of Balloons","artistViewUrl":"https://itunes.apple.com/us/artist/the-weeknd/id479756766?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/house-of-balloons/id965067911?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music5/v4/76/ea/f1/76eaf174-4484-c940-0026-0027690905ae/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music5/v4/76/ea/f1/76eaf174-4484-c940-0026-0027690905ae/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":10,"copyright":"℗ 2015 The Weeknd XO, Inc.","country":"USA","currency":"USD","releaseDate":"2015-02-17T08:00:00Z","primaryGenreName":"R&B/Soul"},{"wrapperType":"collection","collectionType":"Album","artistId":5524452,"collectionId":1019907448,"amgArtistId":528521,"artistName":"Why?","collectionName":"Oaklandazulasylum","collectionCensoredName":"Oaklandazulasylum","artistViewUrl":"https://itunes.apple.com/us/artist/why/id5524452?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/oaklandazulasylum/id1019907448?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music5/v4/43/c3/9b/43c39b20-ada7-99f3-dd32-f5d902a816fb/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music5/v4/43/c3/9b/43c39b20-ada7-99f3-dd32-f5d902a816fb/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2003 Anticon","country":"USA","currency":"USD","releaseDate":"2003-06-16T07:00:00Z","primaryGenreName":"Hip-Hop"},{"wrapperType":"collection","collectionType":"Album","artistId":308179967,"collectionId":427760555,"amgArtistId":1133429,"artistName":"Tune-Yards","collectionName":"Whokill","collectionCensoredName":"Whokill","artistViewUrl":"https://itunes.apple.com/us/artist/tune-yards/id308179967?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/whokill/id427760555?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/c8/ef/e4/c8efe433-4cdf-77b3-1aed-9efdd9264c91/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/c8/ef/e4/c8efe433-4cdf-77b3-1aed-9efdd9264c91/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2011 4AD","country":"USA","currency":"USD","releaseDate":"2011-04-18T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":24375409,"collectionId":731950193,"amgArtistId":514055,"artistName":"Hot Chip","collectionName":"One Life Stand","collectionCensoredName":"One Life Stand","artistViewUrl":"https://itunes.apple.com/us/artist/hot-chip/id24375409?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/one-life-stand/id731950193?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music7/v4/1f/f5/08/1ff50838-bd1e-1a67-bc4f-b0e974c225e4/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music7/v4/1f/f5/08/1ff50838-bd1e-1a67-bc4f-b0e974c225e4/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2010 Parlophone Records Ltd, a Warner Music Group Company","country":"USA","currency":"USD","releaseDate":"2010-01-29T08:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":377952839,"collectionId":493888693,"amgArtistId":2061682,"artistName":"Cloud Nothings","collectionName":"Attack On Memory","collectionCensoredName":"Attack On Memory","artistViewUrl":"https://itunes.apple.com/us/artist/cloud-nothings/id377952839?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/attack-on-memory/id493888693?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/0d/fa/6b/0dfa6b00-91ef-e503-3dd7-8cba3b59c977/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/0d/fa/6b/0dfa6b00-91ef-e503-3dd7-8cba3b59c977/source/100x100bb.jpg","collectionPrice":7.92,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2012 Carpark Records","country":"USA","currency":"USD","releaseDate":"2012-01-24T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":156604,"collectionId":333568289,"amgArtistId":4268,"artistName":"The Flaming Lips","collectionName":"Embryonic","collectionCensoredName":"Embryonic","artistViewUrl":"https://itunes.apple.com/us/artist/the-flaming-lips/id156604?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/embryonic/id333568289?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/68/b5/2c/68b52cfc-784d-e30f-116e-40881b5447c2/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/68/b5/2c/68b52cfc-784d-e30f-116e-40881b5447c2/source/100x100bb.jpg","collectionPrice":10.99,"collectionExplicitness":"notExplicit","trackCount":18,"copyright":"℗ 2009 Warner Bros. Records Inc. for the U.S. and WEA International Inc. for the world outside the U.S.","country":"USA","currency":"USD","releaseDate":"2009-10-09T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":360368,"collectionId":304765336,"amgArtistId":458353,"artistName":"Cee-Lo","collectionName":"Cee-Lo Green... Is the Soul Machine","collectionCensoredName":"Cee-Lo Green... Is the Soul Machine","artistViewUrl":"https://itunes.apple.com/us/artist/cee-lo/id360368?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cee-lo-green...-is-soul-machine/id304765336?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/ed/a0/44/eda04442-0d58-5b73-006a-a8d53bc8f925/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/ed/a0/44/eda04442-0d58-5b73-006a-a8d53bc8f925/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":18,"copyright":"℗ 2004 Arista Records, Inc.","country":"USA","currency":"USD","releaseDate":"2003-01-09T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":5305611,"collectionId":5305635,"amgArtistId":508143,"artistName":"The Walkmen","collectionName":"Bows + Arrows","collectionCensoredName":"Bows + Arrows","artistViewUrl":"https://itunes.apple.com/us/artist/the-walkmen/id5305611?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/bows-+-arrows/id5305635?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/d8/52/cc/d852cc29-a810-03c7-4c19-5055cc96fd00/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/d8/52/cc/d852cc29-a810-03c7-4c19-5055cc96fd00/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2004 Record Collection","country":"USA","currency":"USD","releaseDate":"2004-02-03T08:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":13759021,"collectionId":1023399445,"amgArtistId":657815,"artistName":"A.C. Newman","collectionName":"The Slow Wonder","collectionCensoredName":"The Slow Wonder","artistViewUrl":"https://itunes.apple.com/us/artist/a.c.-newman/id13759021?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-slow-wonder/id1023399445?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music2/v4/32/52/0c/32520c65-34d2-ade4-0579-869e5c9054dd/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music2/v4/32/52/0c/32520c65-34d2-ade4-0579-869e5c9054dd/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2004 Matador","country":"USA","currency":"USD","releaseDate":"2004-06-07T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":4273404,"collectionId":586314144,"amgArtistId":442935,"artistName":"Sufjan Stevens","collectionName":"Seven Swans","collectionCensoredName":"Seven Swans","artistViewUrl":"https://itunes.apple.com/us/artist/sufjan-stevens/id4273404?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/seven-swans/id586314144?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/e0/d1/ff/e0d1ffea-e037-8da1-82ae-e7cc7aa71266/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/e0/d1/ff/e0d1ffea-e037-8da1-82ae-e7cc7aa71266/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2004 Asthmatic Kitty","country":"USA","currency":"USD","releaseDate":"2004-03-16T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":146055657,"collectionId":456243804,"amgArtistId":776313,"artistName":"Wolves in the Throne Room","collectionName":"Celestial Lineage","collectionCensoredName":"Celestial Lineage","artistViewUrl":"https://itunes.apple.com/us/artist/wolves-in-the-throne-room/id146055657?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/celestial-lineage/id456243804?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/af/84/2c/af842ca4-28dc-9188-1c26-cbee754c4f8c/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/af/84/2c/af842ca4-28dc-9188-1c26-cbee754c4f8c/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2011 Southern Lord Recordings","country":"USA","currency":"USD","releaseDate":"2011-09-13T07:00:00Z","primaryGenreName":"Metal"},{"wrapperType":"collection","collectionType":"Album","artistId":4055370,"collectionId":281216400,"amgArtistId":479558,"artistName":"Prefuse 73","collectionName":"One Word Extinguisher","collectionCensoredName":"One Word Extinguisher","artistViewUrl":"https://itunes.apple.com/us/artist/prefuse-73/id4055370?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/one-word-extinguisher/id281216400?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/77/7a/96/777a968c-8e28-9738-ee01-d17a8a1afabc/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/77/7a/96/777a968c-8e28-9738-ee01-d17a8a1afabc/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":23,"copyright":"℗ 2003 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2003-05-05T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":28024521,"collectionId":706186757,"artistName":"Viktor Vaughn","collectionName":"Vaudeville Villain","collectionCensoredName":"Vaudeville Villain","artistViewUrl":"https://itunes.apple.com/us/artist/viktor-vaughn/id28024521?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/vaudeville-villain/id706186757?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music4/v4/f8/da/17/f8da1723-5343-455d-11b2-89dc07411308/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music4/v4/f8/da/17/f8da1723-5343-455d-11b2-89dc07411308/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":17,"copyright":"℗ 2003 Sound Ink Records","country":"USA","currency":"USD","releaseDate":"2012-01-17T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":5664621,"collectionId":1052135735,"amgArtistId":560122,"artistName":"Animal Collective","collectionName":"Sung Tongs","collectionCensoredName":"Sung Tongs","artistViewUrl":"https://itunes.apple.com/us/artist/animal-collective/id5664621?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sung-tongs/id1052135735?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music69/v4/2e/6d/73/2e6d7338-6656-2e27-52cd-aece1557b2ea/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music69/v4/2e/6d/73/2e6d7338-6656-2e27-52cd-aece1557b2ea/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2004 My Animal Home","country":"USA","currency":"USD","releaseDate":"2004-06-01T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":2931898,"collectionId":459830979,"amgArtistId":203757,"artistName":"Grandaddy","collectionName":"Sumday","collectionCensoredName":"Sumday","artistViewUrl":"https://itunes.apple.com/us/artist/grandaddy/id2931898?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sumday/id459830979?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/9f/75/1e/9f751e63-2e68-bddb-18fd-965b55d73f0d/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/9f/75/1e/9f751e63-2e68-bddb-18fd-965b55d73f0d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2003 Entertainment One US LP","country":"USA","currency":"USD","releaseDate":"2003-06-10T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":13762165,"collectionId":259438686,"amgArtistId":277908,"artistName":"Mirah","collectionName":"C'mon Miracle","collectionCensoredName":"C'mon Miracle","artistViewUrl":"https://itunes.apple.com/us/artist/mirah/id13762165?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cmon-miracle/id259438686?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/d1/be/ed/d1beedf8-8506-797d-e4a3-b0c00388b5c3/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/d1/be/ed/d1beedf8-8506-797d-e4a3-b0c00388b5c3/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2004 K Records","country":"USA","currency":"USD","releaseDate":"2007-09-04T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":5543027,"collectionId":260751719,"amgArtistId":583030,"artistName":"The Fiery Furnaces","collectionName":"Blueberry Boat","collectionCensoredName":"Blueberry Boat","artistViewUrl":"https://itunes.apple.com/us/artist/the-fiery-furnaces/id5543027?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/blueberry-boat/id260751719?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/73/18/30/73183086-7311-f0ca-35e8-e0c42b31a568/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/73/18/30/73183086-7311-f0ca-35e8-e0c42b31a568/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"cleaned","contentAdvisoryRating":"Clean","trackCount":13,"copyright":"℗ 2004 Rough Trade","country":"USA","currency":"USD","releaseDate":"2004-09-06T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":46086389,"collectionId":896424792,"amgArtistId":561410,"artistName":"M83","collectionName":"Dead Cities, Red Seas & Lost Ghosts","collectionCensoredName":"Dead Cities, Red Seas & Lost Ghosts","artistViewUrl":"https://itunes.apple.com/us/artist/m83/id46086389?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/dead-cities-red-seas-lost/id896424792?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music4/v4/9f/ce/3e/9fce3e3f-12d4-6c29-86fc-344b73fddc5e/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music4/v4/9f/ce/3e/9fce3e3f-12d4-6c29-86fc-344b73fddc5e/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2003 M83 Recording Inc. under exclusive license to Mute for USA & Canada","country":"USA","currency":"USD","releaseDate":"2014-08-25T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":5455211,"collectionId":122147305,"amgArtistId":186041,"artistName":"Destroyer","collectionName":"Destroyer's Rubies","collectionCensoredName":"Destroyer's Rubies","artistViewUrl":"https://itunes.apple.com/us/artist/destroyer/id5455211?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/destroyers-rubies/id122147305?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/87/09/71/870971af-db97-1628-9823-f4c5d80d84fb/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/87/09/71/870971af-db97-1628-9823-f4c5d80d84fb/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2006 Merge Records","country":"USA","currency":"USD","releaseDate":"2006-02-21T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":200823564,"collectionId":349535407,"amgArtistId":821440,"artistName":"Beach House","collectionName":"Teen Dream","collectionCensoredName":"Teen Dream","artistViewUrl":"https://itunes.apple.com/us/artist/beach-house/id200823564?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/teen-dream/id349535407?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/f1/75/4f/f1754fbf-91a8-a2ab-d259-723a84ee2643/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/f1/75/4f/f1754fbf-91a8-a2ab-d259-723a84ee2643/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2010 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2010-01-26T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":198271209,"collectionId":453456287,"amgArtistId":910288,"artistName":"St. Vincent","collectionName":"Strange Mercy","collectionCensoredName":"Strange Mercy","artistViewUrl":"https://itunes.apple.com/us/artist/st.-vincent/id198271209?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/strange-mercy/id453456287?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/04/7b/b0/047bb06c-ce0f-b159-aa1a-e4a07c0c02b5/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/04/7b/b0/047bb06c-ce0f-b159-aa1a-e4a07c0c02b5/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2011 4AD","country":"USA","currency":"USD","releaseDate":"2011-09-12T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":2959120,"collectionId":1023398126,"amgArtistId":199913,"artistName":"Cat Power","collectionName":"You Are Free","collectionCensoredName":"You Are Free","artistViewUrl":"https://itunes.apple.com/us/artist/cat-power/id2959120?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/you-are-free/id1023398126?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music4/v4/9b/de/b8/9bdeb877-a40f-7d60-cc65-3c101eb53147/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music4/v4/9b/de/b8/9bdeb877-a40f-7d60-cc65-3c101eb53147/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2003 Matador","country":"USA","currency":"USD","releaseDate":"2003-02-17T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":3205453,"collectionId":5456934,"amgArtistId":528246,"artistName":"The Decemberists","collectionName":"Castaways and Cutouts","collectionCensoredName":"Castaways and Cutouts","artistViewUrl":"https://itunes.apple.com/us/artist/the-decemberists/id3205453?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/castaways-and-cutouts/id5456934?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/46/61/4a/46614a1d-3450-05da-fc56-91c6bb605974/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/46/61/4a/46614a1d-3450-05da-fc56-91c6bb605974/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2003 Kill Rock Stars","country":"USA","currency":"USD","releaseDate":"2003-05-06T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":54782697,"collectionId":865892281,"amgArtistId":428111,"artistName":"Max Richter","collectionName":"The Blue Notebooks","collectionCensoredName":"The Blue Notebooks","artistViewUrl":"https://itunes.apple.com/us/artist/max-richter/id54782697?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-blue-notebooks/id865892281?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music4/v4/80/68/fe/8068fe80-3c2b-34be-f21f-fbb57139901f/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music4/v4/80/68/fe/8068fe80-3c2b-34be-f21f-fbb57139901f/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2014 Deutsche Grammophon GmbH, Berlin","country":"USA","currency":"USD","releaseDate":"2014-04-25T07:00:00Z","primaryGenreName":"Classical"},{"wrapperType":"collection","collectionType":"Album","artistId":438267148,"collectionId":442815754,"amgArtistId":2242137,"artistName":"WU LYF","collectionName":"Go Tell Fire to the Mountain","collectionCensoredName":"Go Tell Fire to the Mountain","artistViewUrl":"https://itunes.apple.com/us/artist/wu-lyf/id438267148?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/go-tell-fire-to-the-mountain/id442815754?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/18/15/24/18152401-2185-e3d3-8d0d-ca0b6f90734f/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/18/15/24/18152401-2185-e3d3-8d0d-ca0b6f90734f/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2011 L Y F Recordings","country":"USA","currency":"USD","releaseDate":"2011-06-13T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":27519442,"collectionId":887699504,"amgArtistId":618043,"artistName":"Madvillain","collectionName":"Madvillainy","collectionCensoredName":"Madvillainy","artistViewUrl":"https://itunes.apple.com/us/artist/madvillain/id27519442?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/madvillainy/id887699504?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music4/v4/95/ba/b0/95bab0f8-3571-01d1-4a7d-57121daaa635/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music4/v4/95/ba/b0/95bab0f8-3571-01d1-4a7d-57121daaa635/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":22,"copyright":"℗ 2004 Stones Throw Records","country":"USA","currency":"USD","releaseDate":"2004-12-01T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":2894441,"collectionId":362184965,"amgArtistId":276494,"artistName":"Deerhoof","collectionName":"Apple O'","collectionCensoredName":"Apple O'","artistViewUrl":"https://itunes.apple.com/us/artist/deerhoof/id2894441?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/apple-o/id362184965?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/af/dd/d9/afddd9f8-c404-dede-a959-0f94702fd976/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/af/dd/d9/afddd9f8-c404-dede-a959-0f94702fd976/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2010 Kill Rock Stars","country":"USA","currency":"USD","releaseDate":"2010-04-17T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":6663365,"collectionId":40888218,"amgArtistId":542082,"artistName":"Out Hud","collectionName":"S.T.R.E.E.T. D.A.D.","collectionCensoredName":"S.T.R.E.E.T. D.A.D.","artistViewUrl":"https://itunes.apple.com/us/artist/out-hud/id6663365?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/s.t.r.e.e.t.-d.a.d./id40888218?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/9f/df/ab/9fdfab10-302a-baf2-7b9a-e409cec2b27e/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/9f/df/ab/9fdfab10-302a-baf2-7b9a-e409cec2b27e/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":6,"copyright":"℗ 2002 kranky","country":"USA","currency":"USD","releaseDate":"2002-11-01T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":4040057,"collectionId":419850766,"amgArtistId":292248,"artistName":"Isolée","collectionName":"We Are Monster","collectionCensoredName":"We Are Monster","artistViewUrl":"https://itunes.apple.com/us/artist/isolee/id4040057?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/we-are-monster/id419850766?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/af/cf/38/afcf38e7-d45e-cfb4-44eb-b7388d01394a/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/af/cf/38/afcf38e7-d45e-cfb4-44eb-b7388d01394a/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2011 PAMPA RECORDS","country":"USA","currency":"USD","releaseDate":"2011-02-25T08:00:00Z","primaryGenreName":"Dance"},{"wrapperType":"collection","collectionType":"Album","artistId":6925799,"collectionId":594342075,"amgArtistId":482481,"artistName":"Broken Social Scene","collectionName":"You Forgot It in People","collectionCensoredName":"You Forgot It in People","artistViewUrl":"https://itunes.apple.com/us/artist/broken-social-scene/id6925799?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/you-forgot-it-in-people/id594342075?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/30/f1/e2/30f1e2f8-3b93-ffb0-07e5-3b75be5eb298/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/30/f1/e2/30f1e2f8-3b93-ffb0-07e5-3b75be5eb298/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2003 Arts & Crafts Productions","country":"USA","currency":"USD","releaseDate":"2012-10-24T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":150291770,"collectionId":150291766,"amgArtistId":784336,"artistName":"Sunset Rubdown","collectionName":"Shut Up I Am Dreaming","collectionCensoredName":"Shut Up I Am Dreaming","artistViewUrl":"https://itunes.apple.com/us/artist/sunset-rubdown/id150291770?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/shut-up-i-am-dreaming/id150291766?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/77/82/7b/77827b72-1565-dd97-cdf3-6b530908bcc4/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/77/82/7b/77827b72-1565-dd97-cdf3-6b530908bcc4/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2006 Absolutely Kosher Records","country":"USA","currency":"USD","releaseDate":"2006-05-02T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":59398,"collectionId":1048698276,"amgArtistId":1703,"artistName":"Loretta Lynn","collectionName":"Van Lear Rose","collectionCensoredName":"Van Lear Rose","artistViewUrl":"https://itunes.apple.com/us/artist/loretta-lynn/id59398?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/van-lear-rose/id1048698276?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music6/v4/40/b8/99/40b8993d-20c8-0a60-9f99-c77b0ddd3a85/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music6/v4/40/b8/99/40b8993d-20c8-0a60-9f99-c77b0ddd3a85/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2004 Loretta Lynn","country":"USA","currency":"USD","releaseDate":"2004-04-27T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":24281998,"collectionId":1056452558,"amgArtistId":660339,"artistName":"Panda Bear","collectionName":"Young Prayer","collectionCensoredName":"Young Prayer","artistViewUrl":"https://itunes.apple.com/us/artist/panda-bear/id24281998?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/young-prayer/id1056452558?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music69/v4/87/e3/e3/87e3e300-cb1d-83ba-d790-f1c696758055/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music69/v4/87/e3/e3/87e3e300-cb1d-83ba-d790-f1c696758055/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2004 My Animal Home","country":"USA","currency":"USD","releaseDate":"2004-09-28T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":3208711,"collectionId":285268899,"amgArtistId":480902,"artistName":"Lightning Bolt","collectionName":"Wonderful Rainbow","collectionCensoredName":"Wonderful Rainbow","artistViewUrl":"https://itunes.apple.com/us/artist/lightning-bolt/id3208711?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/wonderful-rainbow/id285268899?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/83/7a/28/837a2844-cfdf-d76c-9201-dab6af397da6/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/83/7a/28/837a2844-cfdf-d76c-9201-dab6af397da6/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2003 Lightning Bolt","country":"USA","currency":"USD","releaseDate":"2008-07-06T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":54068529,"collectionId":176247340,"amgArtistId":581935,"artistName":"Junior Boys","collectionName":"So This Is Goodbye","collectionCensoredName":"So This Is Goodbye","artistViewUrl":"https://itunes.apple.com/us/artist/junior-boys/id54068529?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/so-this-is-goodbye/id176247340?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/28/80/52/28805294-552d-2929-0f27-ab7c6db5446b/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/28/80/52/28805294-552d-2929-0f27-ab7c6db5446b/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2006 Domino Recording Co Ltd","country":"USA","currency":"USD","releaseDate":"2006-08-22T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":2894441,"collectionId":79486938,"amgArtistId":276494,"artistName":"Deerhoof","collectionName":"The Runners Four","collectionCensoredName":"The Runners Four","artistViewUrl":"https://itunes.apple.com/us/artist/deerhoof/id2894441?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-runners-four/id79486938?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/67/98/c5/6798c55b-cd79-4f3d-298a-f13fd7f68140/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/67/98/c5/6798c55b-cd79-4f3d-298a-f13fd7f68140/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":20,"copyright":"℗ 2005 Kill Rock Stars","country":"USA","currency":"USD","releaseDate":"2005-09-27T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":206246072,"collectionId":261574831,"amgArtistId":558108,"artistName":"Sunn O)))","collectionName":"Black One","collectionCensoredName":"Black One","artistViewUrl":"https://itunes.apple.com/us/artist/sunn-o/id206246072?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/black-one/id261574831?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/2b/85/d3/2b85d3fe-70e2-776c-205b-b96f2d1a2638/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/2b/85/d3/2b85d3fe-70e2-776c-205b-b96f2d1a2638/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2005 Southern Lord Recordings","country":"USA","currency":"USD","releaseDate":"2005-10-31T08:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":27944896,"collectionId":50232347,"amgArtistId":655954,"artistName":"Bloc Party","collectionName":"Silent Alarm","collectionCensoredName":"Silent Alarm","artistViewUrl":"https://itunes.apple.com/us/artist/bloc-party/id27944896?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/silent-alarm/id50232347?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/d7/fa/fb/d7fafb49-d914-916d-411c-bd1ac19308b3/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/d7/fa/fb/d7fafb49-d914-916d-411c-bd1ac19308b3/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2005 Bloc Party under exclusive license to Vice Music, Inc. for the United States, Canada, Mexico, South America and Central America.  Manufactured and distributed in the United States by Atlantic Recording Corporation.","country":"USA","currency":"USD","releaseDate":"2005-03-22T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":3627480,"collectionId":203786047,"amgArtistId":680466,"artistName":"The Go! Team","collectionName":"Thunder, Lightning, Strike","collectionCensoredName":"Thunder, Lightning, Strike","artistViewUrl":"https://itunes.apple.com/us/artist/the-go!-team/id3627480?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/thunder-lightning-strike/id203786047?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/ec/1b/bb/ec1bbbaa-6af3-37e9-ebe9-1bf176f646a5/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/ec/1b/bb/ec1bbbaa-6af3-37e9-ebe9-1bf176f646a5/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2005 Memphis Industries Limited","country":"USA","currency":"USD","releaseDate":"2005-10-04T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":282078681,"collectionId":452135966,"amgArtistId":1055324,"artistName":"The War on Drugs","collectionName":"Slave Ambient","collectionCensoredName":"Slave Ambient","artistViewUrl":"https://itunes.apple.com/us/artist/the-war-on-drugs/id282078681?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/slave-ambient/id452135966?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music6/v4/df/63/00/df630024-b219-2599-c12b-8af83659bf30/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music6/v4/df/63/00/df630024-b219-2599-c12b-8af83659bf30/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2011 Secretly Canadian","country":"USA","currency":"USD","releaseDate":"2011-08-16T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":140777342,"collectionId":370918921,"amgArtistId":748801,"artistName":"Janelle Monáe","collectionName":"The ArchAndroid","collectionCensoredName":"The ArchAndroid","artistViewUrl":"https://itunes.apple.com/us/artist/janelle-monae/id140777342?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-archandroid/id370918921?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/f6/4a/0c/f64a0ca8-a00c-ab1d-c96d-5138a26f4f84/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/f6/4a/0c/f64a0ca8-a00c-ab1d-c96d-5138a26f4f84/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":18,"copyright":"℗ 2010 Bad Boy Records, LLC.  Manufactured and Distributed by Atlantic RecordingCorporation, A Warner Music Group Company. All Rights Reserved.","country":"USA","currency":"USD","releaseDate":"2010-05-17T07:00:00Z","primaryGenreName":"R&B/Soul"},{"wrapperType":"collection","collectionType":"Album","artistId":21303752,"collectionId":80031110,"amgArtistId":470325,"artistName":"Annie","collectionName":"Anniemal","collectionCensoredName":"Anniemal","artistViewUrl":"https://itunes.apple.com/us/artist/annie/id21303752?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/anniemal/id80031110?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/0f/c7/ff/0fc7ff26-3015-4f62-e1e5-1de119fce6ec/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/0f/c7/ff/0fc7ff26-3015-4f62-e1e5-1de119fce6ec/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2004 679 Recordings Ltd.","country":"USA","currency":"USD","releaseDate":"1984-06-01T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":2715720,"collectionId":5926607,"amgArtistId":353484,"artistName":"Kanye West","collectionName":"The College Dropout","collectionCensoredName":"The College Dropout","artistViewUrl":"https://itunes.apple.com/us/artist/kanye-west/id2715720?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-college-dropout/id5926607?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music69/v4/e6/a4/14/e6a41459-5a6d-49d8-98c7-838a670b4189/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music69/v4/e6/a4/14/e6a41459-5a6d-49d8-98c7-838a670b4189/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":21,"copyright":"℗ 2004 Roc-A-Fella Records, LLC","country":"USA","currency":"USD","releaseDate":"2004-02-10T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":457870121,"collectionId":457870090,"artistName":"Youth Lagoon","collectionName":"The Year of Hibernation","collectionCensoredName":"The Year of Hibernation","artistViewUrl":"https://itunes.apple.com/us/artist/youth-lagoon/id457870121?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-year-of-hibernation/id457870090?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/d1/22/2f/d1222f2f-0c37-3a55-4fdc-9675a02b789f/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/d1/22/2f/d1222f2f-0c37-3a55-4fdc-9675a02b789f/source/100x100bb.jpg","collectionPrice":8.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2011 Fat Possum Records","country":"USA","currency":"USD","releaseDate":"2011-09-27T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":73516820,"collectionId":669683619,"amgArtistId":729540,"artistName":"Wolf Parade","collectionName":"Apologies to the Queen Mary","collectionCensoredName":"Apologies to the Queen Mary","artistViewUrl":"https://itunes.apple.com/us/artist/wolf-parade/id73516820?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/apologies-to-the-queen-mary/id669683619?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music6/v4/c7/8d/49/c78d4900-040b-b9be-408b-08bd9a151306/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music6/v4/c7/8d/49/c78d4900-040b-b9be-408b-08bd9a151306/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2005 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2005-09-27T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":26099738,"collectionId":273154795,"amgArtistId":587901,"artistName":"Vitalic","collectionName":"OK Cowboy","collectionCensoredName":"OK Cowboy","artistViewUrl":"https://itunes.apple.com/us/artist/vitalic/id26099738?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/ok-cowboy/id273154795?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/38/4a/d3/384ad367-e3ca-65fe-3b26-d8738982466d/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/38/4a/d3/384ad367-e3ca-65fe-3b26-d8738982466d/source/100x100bb.jpg","collectionPrice":6.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2005 Citizen Records","country":"USA","currency":"USD","releaseDate":"2005-04-04T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":26090355,"collectionId":828151551,"amgArtistId":688598,"artistName":"The Knife","collectionName":"Silent Shout","collectionCensoredName":"Silent Shout","artistViewUrl":"https://itunes.apple.com/us/artist/the-knife/id26090355?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/silent-shout/id828151551?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/26/c2/5d/26c25df3-0527-c1fa-61fa-c125cef65236/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/26/c2/5d/26c25df3-0527-c1fa-61fa-c125cef65236/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2006 Rabid Records Under Exclusive License to Brille Records Ltd","country":"USA","currency":"USD","releaseDate":"2006-06-26T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":15023382,"collectionId":76586949,"amgArtistId":435591,"artistName":"The Clientele","collectionName":"Strange Geometry","collectionCensoredName":"Strange Geometry","artistViewUrl":"https://itunes.apple.com/us/artist/the-clientele/id15023382?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/strange-geometry/id76586949?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/07/8c/cf/078ccf3d-957e-6d44-34e4-877b11ed38ca/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/07/8c/cf/078ccf3d-957e-6d44-34e4-877b11ed38ca/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2005 Merge Records","country":"USA","currency":"USD","releaseDate":"2005-10-11T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":14120295,"collectionId":27050374,"amgArtistId":534857,"artistName":"Comets On Fire","collectionName":"Blue Cathedral","collectionCensoredName":"Blue Cathedral","artistViewUrl":"https://itunes.apple.com/us/artist/comets-on-fire/id14120295?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/blue-cathedral/id27050374?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/bf/65/86/bf658657-be43-656f-c678-ede4cdb94677/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/bf/65/86/bf658657-be43-656f-c678-ede4cdb94677/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2004 Sub Pop","country":"USA","currency":"USD","releaseDate":"2004-07-27T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":462455,"collectionId":135446923,"amgArtistId":194811,"artistName":"Ghostface Killah","collectionName":"Fishscale","collectionCensoredName":"Fishscale","artistViewUrl":"https://itunes.apple.com/us/artist/ghostface-killah/id462455?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/fishscale/id135446923?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/cd/17/5f/cd175fe4-48cf-8976-1d18-ee07249aac11/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/cd/17/5f/cd175fe4-48cf-8976-1d18-ee07249aac11/source/100x100bb.jpg","collectionPrice":11.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":25,"copyright":"℗ 2006 The Island Def Jam Music Group","country":"USA","currency":"USD","releaseDate":"2006-03-28T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":46086389,"collectionId":896427127,"amgArtistId":561410,"artistName":"M83","collectionName":"Before the Dawn Heals Us","collectionCensoredName":"Before the Dawn Heals Us","artistViewUrl":"https://itunes.apple.com/us/artist/m83/id46086389?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/before-the-dawn-heals-us/id896427127?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/3d/b0/8f/3db08f2f-353e-4bdf-8f5b-d1244ca540b2/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/3d/b0/8f/3db08f2f-353e-4bdf-8f5b-d1244ca540b2/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":15,"copyright":"℗ 2005 M83 Recording Inc. under exclusive license to Mute for USA & Canada","country":"USA","currency":"USD","releaseDate":"2014-08-25T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":65922937,"collectionId":186825697,"amgArtistId":516160,"artistName":"Mastodon","collectionName":"Blood Mountain","collectionCensoredName":"Blood Mountain","artistViewUrl":"https://itunes.apple.com/us/artist/mastodon/id65922937?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/blood-mountain/id186825697?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/5b/60/13/5b601301-d495-4664-f291-97f6545ea599/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/5b/60/13/5b601301-d495-4664-f291-97f6545ea599/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2006 Reprise Records for the U.S. and WEA International Inc. for the world outside the U.S.","country":"USA","currency":"USD","releaseDate":"2006-09-08T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":14677454,"collectionId":63570677,"amgArtistId":674864,"artistName":"M.I.A.","collectionName":"Arular","collectionCensoredName":"Arular","artistViewUrl":"https://itunes.apple.com/us/artist/m.i.a./id14677454?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/arular/id63570677?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music4/v4/14/3e/36/143e3609-6b03-8364-82eb-a10cbed095f1/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music4/v4/14/3e/36/143e3609-6b03-8364-82eb-a10cbed095f1/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":14,"copyright":"℗ 2005 XL Recordings Ltd under exclusive licence to Interscope Records in the USA.","country":"USA","currency":"USD","releaseDate":"2005-05-17T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":67291928,"collectionId":73512699,"amgArtistId":463610,"artistName":"Bonnie \"Prince\" Billy & Matt Sweeney","collectionName":"Superwolf","collectionCensoredName":"Superwolf","artistViewUrl":"https://itunes.apple.com/us/artist/bonnie-prince-billy/id67291928?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/superwolf/id73512699?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/b3/6b/8d/b36b8d8c-6292-d717-39aa-29ff6c7dea40/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/b3/6b/8d/b36b8d8c-6292-d717-39aa-29ff6c7dea40/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2005 Drag City","country":"USA","currency":"USD","releaseDate":"2005-01-25T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":20232686,"collectionId":570843030,"amgArtistId":655850,"artistName":"Art Brut","collectionName":"Bang Bang Rock & Roll","collectionCensoredName":"Bang Bang Rock & Roll","artistViewUrl":"https://itunes.apple.com/us/artist/art-brut/id20232686?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/bang-bang-rock-roll/id570843030?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/4b/53/b5/4b53b573-801b-849c-1f16-94b183a8642d/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/4b/53/b5/4b53b573-801b-849c-1f16-94b183a8642d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":15,"copyright":"℗ 2005 Downtown Music, LLC.","country":"USA","currency":"USD","releaseDate":"2005-05-30T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":2715720,"collectionId":79483267,"amgArtistId":353484,"artistName":"Kanye West","collectionName":"Late Registration","collectionCensoredName":"Late Registration","artistViewUrl":"https://itunes.apple.com/us/artist/kanye-west/id2715720?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/late-registration/id79483267?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/fb/20/9b/fb209b23-3681-bfb5-e135-7c707870be9c/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/fb/20/9b/fb209b23-3681-bfb5-e135-7c707870be9c/source/100x100bb.jpg","collectionPrice":8.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":21,"copyright":"℗ 2005 Roc-A-Fella Records, LLC","country":"USA","currency":"USD","releaseDate":"2005-08-12T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":5621730,"collectionId":1025317255,"amgArtistId":534323,"artistName":"Devendra Banhart","collectionName":"Cripple Crow","collectionCensoredName":"Cripple Crow","artistViewUrl":"https://itunes.apple.com/us/artist/devendra-banhart/id5621730?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cripple-crow/id1025317255?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music7/v4/c6/f4/13/c6f413be-c1da-dab5-0e7d-f9bf3caea1ae/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music7/v4/c6/f4/13/c6f413be-c1da-dab5-0e7d-f9bf3caea1ae/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":22,"copyright":"℗ 2005 XL Recordings","country":"USA","currency":"USD","releaseDate":"2005-09-12T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":19552743,"collectionId":58623804,"amgArtistId":643275,"artistName":"The Hold Steady","collectionName":"Separation Sunday","collectionCensoredName":"Separation Sunday","artistViewUrl":"https://itunes.apple.com/us/artist/the-hold-steady/id19552743?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/separation-sunday/id58623804?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/cb/fb/e4/cbfbe435-286b-bb15-30cd-88d50ba5f871/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/cb/fb/e4/cbfbe435-286b-bb15-30cd-88d50ba5f871/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2005 French Kiss Records","country":"USA","currency":"USD","releaseDate":"2005-04-19T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":28624696,"collectionId":263050989,"amgArtistId":554525,"artistName":"Black Lips","collectionName":"Good Bad Not Evil","collectionCensoredName":"Good Bad Not Evil","artistViewUrl":"https://itunes.apple.com/us/artist/black-lips/id28624696?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/good-bad-not-evil/id263050989?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/60/8f/66/608f66c7-cedf-cdeb-818a-86f6eebc783b/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/60/8f/66/608f66c7-cedf-cdeb-818a-86f6eebc783b/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2007 VICE Music","country":"USA","currency":"USD","releaseDate":"2007-09-11T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":5664621,"collectionId":917531066,"amgArtistId":560122,"artistName":"Animal Collective","collectionName":"Feels","collectionCensoredName":"Feels","artistViewUrl":"https://itunes.apple.com/us/artist/animal-collective/id5664621?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/feels/id917531066?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music4/v4/d4/a3/2d/d4a32d1f-7b91-f1f7-e115-726a1d1cf75b/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music4/v4/d4/a3/2d/d4a32d1f-7b91-f1f7-e115-726a1d1cf75b/source/100x100bb.jpg","collectionPrice":8.91,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2005 Animal Collective under exclusive license to FatCat Records","country":"USA","currency":"USD","releaseDate":"2005-10-18T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":7432761,"collectionId":276328444,"amgArtistId":653503,"artistName":"Cut Copy","collectionName":"In Ghost Colours","collectionCensoredName":"In Ghost Colours","artistViewUrl":"https://itunes.apple.com/us/artist/cut-copy/id7432761?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/in-ghost-colours/id276328444?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music7/v4/de/4a/86/de4a8629-bfc3-6f3c-dd26-6f6bf4d23773/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music7/v4/de/4a/86/de4a8629-bfc3-6f3c-dd26-6f6bf4d23773/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":15,"copyright":"℗ 2008 Modular Recordings","country":"USA","currency":"USD","releaseDate":"2008-03-22T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":23956529,"collectionId":81156483,"amgArtistId":441538,"artistName":"Vashti Bunyan","collectionName":"Lookaftering","collectionCensoredName":"Lookaftering","artistViewUrl":"https://itunes.apple.com/us/artist/vashti-bunyan/id23956529?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/lookaftering/id81156483?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/7d/9c/2e/7d9c2ed9-a62f-1286-d1d1-a96aad3b73e2/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/7d/9c/2e/7d9c2ed9-a62f-1286-d1d1-a96aad3b73e2/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2005 Dicristina Stair Builders","country":"USA","currency":"USD","releaseDate":"2005-10-25T07:00:00Z","primaryGenreName":"Singer/Songwriter"},{"wrapperType":"collection","collectionType":"Album","artistId":20837680,"collectionId":447870959,"amgArtistId":467334,"artistName":"Antony & The Johnsons","collectionName":"I Am a Bird Now","collectionCensoredName":"I Am a Bird Now","artistViewUrl":"https://itunes.apple.com/us/artist/antony-the-johnsons/id20837680?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/i-am-a-bird-now/id447870959?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music6/v4/0f/af/86/0faf8609-50c9-4708-c63d-958e49518b33/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music6/v4/0f/af/86/0faf8609-50c9-4708-c63d-958e49518b33/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2005 Secretly Canadian","country":"USA","currency":"USD","releaseDate":"2005-02-01T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":4978498,"collectionId":78948861,"amgArtistId":457597,"artistName":"The New Pornographers","collectionName":"Twin Cinema","collectionCensoredName":"Twin Cinema","artistViewUrl":"https://itunes.apple.com/us/artist/the-new-pornographers/id4978498?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/twin-cinema/id78948861?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/7b/6a/3f/7b6a3fa9-2fd1-4b5f-d90a-7e2e96a507a5/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/7b/6a/3f/7b6a3fa9-2fd1-4b5f-d90a-7e2e96a507a5/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":15,"copyright":"℗ 2005 Matador","country":"USA","currency":"USD","releaseDate":"2005-08-22T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":6544795,"collectionId":81974669,"amgArtistId":459831,"artistName":"Six Organs of Admittance","collectionName":"School of the Flower","collectionCensoredName":"School of the Flower","artistViewUrl":"https://itunes.apple.com/us/artist/six-organs-of-admittance/id6544795?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/school-of-the-flower/id81974669?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/9d/ad/2c/9dad2c41-b18f-8fb6-1f10-3ceef689a326/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/9d/ad/2c/9dad2c41-b18f-8fb6-1f10-3ceef689a326/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2005 Drag City","country":"USA","currency":"USD","releaseDate":"2005-01-25T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":266606878,"collectionId":931459631,"amgArtistId":1001581,"artistName":"Fuck Buttons","collectionName":"Street Horrrsing","collectionCensoredName":"Street Horrrsing","artistViewUrl":"https://itunes.apple.com/us/artist/fuck-buttons/id266606878?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/street-horrrsing/id931459631?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music3/v4/e8/fd/b7/e8fdb7e3-53cc-a9c0-aa43-5cb409c5b45b/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music3/v4/e8/fd/b7/e8fdb7e3-53cc-a9c0-aa43-5cb409c5b45b/source/100x100bb.jpg","collectionPrice":5.99,"collectionExplicitness":"notExplicit","trackCount":6,"copyright":"℗ 2008 ATP Recordings","country":"USA","currency":"USD","releaseDate":"2008-03-17T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":129692168,"collectionId":158948497,"amgArtistId":750170,"artistName":"Tapes 'n Tapes","collectionName":"The Loon","collectionCensoredName":"The Loon","artistViewUrl":"https://itunes.apple.com/us/artist/tapes-n-tapes/id129692168?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-loon/id158948497?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/4e/9a/a8/4e9aa87a-eef1-763d-ee2d-4ea39a7d7c05/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/4e/9a/a8/4e9aa87a-eef1-763d-ee2d-4ea39a7d7c05/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2006 XL","country":"USA","currency":"USD","releaseDate":"2006-07-24T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":5782613,"collectionId":416292103,"amgArtistId":291737,"artistName":"The Bug","collectionName":"London Zoo","collectionCensoredName":"London Zoo","artistViewUrl":"https://itunes.apple.com/us/artist/the-bug/id5782613?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/london-zoo/id416292103?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/4f/61/0f/4f610ff4-26f3-8a4e-2e6b-229acddb7abf/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/4f/61/0f/4f610ff4-26f3-8a4e-2e6b-229acddb7abf/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":12,"copyright":"℗ 2008 Ninja Tune","country":"USA","currency":"USD","releaseDate":"2008-06-30T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":15063650,"collectionId":15063675,"amgArtistId":508838,"artistName":"The Plastic Constellations","collectionName":"Mazatlan","collectionCensoredName":"Mazatlan","artistViewUrl":"https://itunes.apple.com/us/artist/the-plastic-constellations/id15063650?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/mazatlan/id15063675?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/8c/50/4b/8c504b57-3f64-db8d-4df1-944da2f4ad7a/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/8c/50/4b/8c504b57-3f64-db8d-4df1-944da2f4ad7a/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2004, We Are Genius Millionaires Publishing and Friendly Empire Publishing (both ASCAP)","country":"USA","currency":"USD","releaseDate":"2004-04-27T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":3274302,"collectionId":5644896,"amgArtistId":534825,"artistName":"Iron & Wine","collectionName":"Our Endless Numbered Days","collectionCensoredName":"Our Endless Numbered Days","artistViewUrl":"https://itunes.apple.com/us/artist/iron-wine/id3274302?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/our-endless-numbered-days/id5644896?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/10/73/0d/10730d01-0149-ea02-acfd-36445cf4356d/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/10/73/0d/10730d01-0149-ea02-acfd-36445cf4356d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2004 Sub Pop","country":"USA","currency":"USD","releaseDate":"2004-03-23T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":5869117,"collectionId":287818308,"amgArtistId":384397,"artistName":"Lil Wayne","collectionName":"Tha Carter III","collectionCensoredName":"Tha Carter III","artistViewUrl":"https://itunes.apple.com/us/artist/lil-wayne/id5869117?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/tha-carter-iii/id287818308?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/f7/6a/0b/f76a0b19-e704-cd2d-bd8c-ba941d5ab26a/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/f7/6a/0b/f76a0b19-e704-cd2d-bd8c-ba941d5ab26a/source/100x100bb.jpg","collectionPrice":11.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":18,"copyright":"℗ 2008 Cash Money Records Inc.","country":"USA","currency":"USD","releaseDate":"2008-08-19T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":5334805,"collectionId":262587593,"amgArtistId":392957,"artistName":"Les Savy Fav","collectionName":"Let's Stay Friends","collectionCensoredName":"Let's Stay Friends","artistViewUrl":"https://itunes.apple.com/us/artist/les-savy-fav/id5334805?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/lets-stay-friends/id262587593?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/5f/1d/c5/5f1dc56a-3088-41fa-5454-e3baf47baa12/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/5f/1d/c5/5f1dc56a-3088-41fa-5454-e3baf47baa12/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2007 Frenchkiss Records","country":"USA","currency":"USD","releaseDate":"2007-09-18T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":13453308,"collectionId":252525828,"amgArtistId":678518,"artistName":"Feist","collectionName":"The Reminder","collectionCensoredName":"The Reminder","artistViewUrl":"https://itunes.apple.com/us/artist/feist/id13453308?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-reminder/id252525828?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/f3/eb/0c/f3eb0c57-6acb-cbb7-d5be-ec33e23876fa/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/f3/eb/0c/f3eb0c57-6acb-cbb7-d5be-ec33e23876fa/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":15,"copyright":"℗ 2007 Polydor, A Universal Music Company under license to Interscope Records in the United States","country":"USA","currency":"USD","releaseDate":"2007-05-01T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":129649188,"collectionId":129649178,"amgArtistId":762166,"artistName":"Band of Horses","collectionName":"Everything All the Time","collectionCensoredName":"Everything All the Time","artistViewUrl":"https://itunes.apple.com/us/artist/band-of-horses/id129649188?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/everything-all-the-time/id129649178?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/68/c1/62/68c162f2-b936-c76a-71a0-e23959a8859d/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/68/c1/62/68c162f2-b936-c76a-71a0-e23959a8859d/source/100x100bb.jpg","collectionPrice":8.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2006 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2006-03-21T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":73124553,"collectionId":905225973,"amgArtistId":726173,"artistName":"The Boy Least Likely To","collectionName":"The Best Party Ever","collectionCensoredName":"The Best Party Ever","artistViewUrl":"https://itunes.apple.com/us/artist/the-boy-least-likely-to/id73124553?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-best-party-ever/id905225973?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music3/v4/97/7d/99/977d993c-c7bb-e3a2-6e26-2e7961d9f8c1/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music3/v4/97/7d/99/977d993c-c7bb-e3a2-6e26-2e7961d9f8c1/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2005 The Boy Least Likely To","country":"USA","currency":"USD","releaseDate":"2005-07-19T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":14331285,"collectionId":447103444,"amgArtistId":630789,"artistName":"Jens Lekman","collectionName":"Night Falls Over Kortedala","collectionCensoredName":"Night Falls Over Kortedala","artistViewUrl":"https://itunes.apple.com/us/artist/jens-lekman/id14331285?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/night-falls-over-kortedala/id447103444?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music4/v4/8b/3b/9f/8b3b9fee-cf28-8f46-45f6-4ac82a8f5889/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music4/v4/8b/3b/9f/8b3b9fee-cf28-8f46-45f6-4ac82a8f5889/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2007 Secretly Canadian","country":"USA","currency":"USD","releaseDate":"2007-10-09T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":85081471,"collectionId":201790175,"amgArtistId":611601,"artistName":"Lindstrøm","collectionName":"It's a Feedelity Affair","collectionCensoredName":"It's a Feedelity Affair","artistViewUrl":"https://itunes.apple.com/us/artist/lindstr-m/id85081471?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/its-a-feedelity-affair/id201790175?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/e4/c7/06/e4c70694-06d6-9589-9ddf-b30dee62d8d3/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/e4/c7/06/e4c70694-06d6-9589-9ddf-b30dee62d8d3/source/100x100bb.jpg","collectionPrice":10.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2006 Feedelity Recordings","country":"USA","currency":"USD","releaseDate":"2006-10-23T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":259437105,"collectionId":270425072,"amgArtistId":980085,"artistName":"Vampire Weekend","collectionName":"Vampire Weekend","collectionCensoredName":"Vampire Weekend","artistViewUrl":"https://itunes.apple.com/us/artist/vampire-weekend/id259437105?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/vampire-weekend/id270425072?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/87/28/b5/8728b51f-2b95-93b3-cae4-acfd76ca74d6/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/87/28/b5/8728b51f-2b95-93b3-cae4-acfd76ca74d6/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":11,"copyright":"℗ 2008 XL","country":"USA","currency":"USD","releaseDate":"2008-01-29T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":100546166,"collectionId":282224908,"amgArtistId":760657,"artistName":"The Field","collectionName":"From Here We Go Sublime","collectionCensoredName":"From Here We Go Sublime","artistViewUrl":"https://itunes.apple.com/us/artist/the-field/id100546166?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/from-here-we-go-sublime/id282224908?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/e1/60/49/e160490a-796d-c9e0-cd10-9ea0707be5b6/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/e1/60/49/e160490a-796d-c9e0-cd10-9ea0707be5b6/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2007 Kompakt","country":"USA","currency":"USD","releaseDate":"2007-03-26T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":266025481,"collectionId":275300567,"amgArtistId":981749,"artistName":"The Dodos","collectionName":"Visiter","collectionCensoredName":"Visiter","artistViewUrl":"https://itunes.apple.com/us/artist/the-dodos/id266025481?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/visiter/id275300567?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/57/1e/f5/571ef56f-0f0e-d95a-a20e-e75fa1133c21/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/57/1e/f5/571ef56f-0f0e-d95a-a20e-e75fa1133c21/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2008 Frenchkiss Records","country":"USA","currency":"USD","releaseDate":"2008-03-18T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":80540767,"collectionId":285781449,"amgArtistId":681035,"artistName":"The Tough Alliance","collectionName":"A New Chance","collectionCensoredName":"A New Chance","artistViewUrl":"https://itunes.apple.com/us/artist/the-tough-alliance/id80540767?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/a-new-chance/id285781449?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/68/ad/80/68ad80ae-0e74-84f3-2b99-287f4c32b1d7/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/68/ad/80/68ad80ae-0e74-84f3-2b99-287f4c32b1d7/source/100x100bb.jpg","collectionPrice":7.92,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2007 Sincerely Yours","country":"USA","currency":"USD","releaseDate":"2007-05-16T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":5641488,"collectionId":696641105,"amgArtistId":224252,"artistName":"Air","collectionName":"Talkie Walkie","collectionCensoredName":"Talkie Walkie","artistViewUrl":"https://itunes.apple.com/us/artist/air/id5641488?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/talkie-walkie/id696641105?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music4/v4/6b/da/21/6bda2197-a3ee-2659-1320-079f5f4ee817/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music4/v4/6b/da/21/6bda2197-a3ee-2659-1320-079f5f4ee817/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2004 Source, a division of Parlophone Music France","country":"USA","currency":"USD","releaseDate":"2004-01-26T08:00:00Z","primaryGenreName":"Electronica"},{"wrapperType":"collection","collectionType":"Album","artistId":36034,"collectionId":14147301,"amgArtistId":5474,"artistName":"Sonic Youth","collectionName":"Sonic Nurse","collectionCensoredName":"Sonic Nurse","artistViewUrl":"https://itunes.apple.com/us/artist/sonic-youth/id36034?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sonic-nurse/id14147301?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music6/v4/b9/67/54/b9675437-9bef-fd34-37a5-a76f81859687/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music6/v4/b9/67/54/b9675437-9bef-fd34-37a5-a76f81859687/source/100x100bb.jpg","collectionPrice":5.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2004 Geffen Records Inc.","country":"USA","currency":"USD","releaseDate":"2004-06-08T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":217440066,"collectionId":290491423,"amgArtistId":865235,"artistName":"Marnie Stern","collectionName":"This Is It and I Am It and You Are It and So Is That and He Is It and She Is It and It Is It and That Is That","collectionCensoredName":"This Is It and I Am It and You Are It and So Is That and He Is It and She Is It and It Is It and That Is That","artistViewUrl":"https://itunes.apple.com/us/artist/marnie-stern/id217440066?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/this-is-it-i-am-it-you-are/id290491423?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/f6/a4/87/f6a48717-40a3-107e-e716-809db39d180d/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/f6/a4/87/f6a48717-40a3-107e-e716-809db39d180d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2008 Kill Rock Stars","country":"USA","currency":"USD","releaseDate":"2008-10-07T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":130207860,"collectionId":291909295,"amgArtistId":734244,"artistName":"Islands","collectionName":"Return to the Sea","collectionCensoredName":"Return to the Sea","artistViewUrl":"https://itunes.apple.com/us/artist/islands/id130207860?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/return-to-the-sea/id291909295?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/2f/92/66/2f926698-9e28-2adf-9414-1c826b6c343a/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/2f/92/66/2f926698-9e28-2adf-9414-1c826b6c343a/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2006 Swan-Blue Apples BMI- SOCAN","country":"USA","currency":"USD","releaseDate":"2006-04-18T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":5028207,"collectionId":369086757,"amgArtistId":706707,"artistName":"Blitzen Trapper","collectionName":"Wild Mountain Nation","collectionCensoredName":"Wild Mountain Nation","artistViewUrl":"https://itunes.apple.com/us/artist/blitzen-trapper/id5028207?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/wild-mountain-nation/id369086757?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/7f/a1/64/7fa16433-0e55-e207-35ae-f6a5340ee2de/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/7f/a1/64/7fa16433-0e55-e207-35ae-f6a5340ee2de/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ LidKerCow Ltd.","country":"USA","currency":"USD","releaseDate":"2007-06-12T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":3205453,"collectionId":720113155,"amgArtistId":528246,"artistName":"The Decemberists","collectionName":"The Crane Wife","collectionCensoredName":"The Crane Wife","artistViewUrl":"https://itunes.apple.com/us/artist/the-decemberists/id3205453?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-crane-wife/id720113155?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/6c/1c/f0/6c1cf06a-fade-1cea-fc95-789e0e1e0491/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/6c/1c/f0/6c1cf06a-fade-1cea-fc95-789e0e1e0491/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗  2006 Capitol Records, Inc.. All rights reserved.","country":"USA","currency":"USD","releaseDate":"2006-10-03T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":657515,"collectionId":270079778,"amgArtistId":41092,"artistName":"Radiohead","collectionName":"In Rainbows","collectionCensoredName":"In Rainbows","artistViewUrl":"https://itunes.apple.com/us/artist/radiohead/id657515?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/in-rainbows/id270079778?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/dd/08/0a/dd080a3b-d63d-cf41-c551-2f1a55c14fce/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/dd/08/0a/dd080a3b-d63d-cf41-c551-2f1a55c14fce/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2007 _Xurbia_Xendless Limited","country":"USA","currency":"USD","releaseDate":"2007-12-28T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":17885376,"collectionId":307895944,"amgArtistId":542162,"artistName":"Camera Obscura","collectionName":"My Maudlin Career","collectionCensoredName":"My Maudlin Career","artistViewUrl":"https://itunes.apple.com/us/artist/camera-obscura/id17885376?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/my-maudlin-career/id307895944?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/88/e5/51/88e551e9-fb56-3d3c-92e9-93e7349b8e16/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/88/e5/51/88e551e9-fb56-3d3c-92e9-93e7349b8e16/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2009 4AD","country":"USA","currency":"USD","releaseDate":"2009-04-20T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":41467056,"collectionId":318815067,"amgArtistId":691057,"artistName":"Bibio","collectionName":"Ambivalence Avenue","collectionCensoredName":"Ambivalence Avenue","artistViewUrl":"https://itunes.apple.com/us/artist/bibio/id41467056?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/ambivalence-avenue/id318815067?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/8b/c0/ed/8bc0edd4-da9d-fc87-54ce-b5fa42075ccb/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/8b/c0/ed/8bc0edd4-da9d-fc87-54ce-b5fa42075ccb/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2009 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2009-06-22T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":355589461,"collectionId":296085626,"amgArtistId":695483,"artistName":"Shining","collectionName":"In the Kingdom of Kitsch You Will Be a Monster","collectionCensoredName":"In the Kingdom of Kitsch You Will Be a Monster","artistViewUrl":"https://itunes.apple.com/us/artist/shining/id355589461?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/in-kingdom-kitsch-you-will/id296085626?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/f5/c2/7b/f5c27b7b-056b-10fc-b71b-05f8083c9102/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/f5/c2/7b/f5c27b7b-056b-10fc-b71b-05f8083c9102/source/100x100bb.jpg","collectionPrice":10.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2005 Rune Grammofon","country":"USA","currency":"USD","releaseDate":"2005-03-17T08:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":42056970,"collectionId":318004199,"amgArtistId":601780,"artistName":"Dirty Projectors","collectionName":"Bitte Orca","collectionCensoredName":"Bitte Orca","artistViewUrl":"https://itunes.apple.com/us/artist/dirty-projectors/id42056970?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/bitte-orca/id318004199?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/10/47/10/104710c3-c663-545d-1d18-db1b7df202f0/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/10/47/10/104710c3-c663-545d-1d18-db1b7df202f0/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2009 Domino Recodring Co. LTD","country":"USA","currency":"USD","releaseDate":"2009-06-09T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":285808124,"collectionId":1055890845,"amgArtistId":1133959,"artistName":"Cymbals Eat Guitars","collectionName":"Why There Are Mountains","collectionCensoredName":"Why There Are Mountains","artistViewUrl":"https://itunes.apple.com/us/artist/cymbals-eat-guitars/id285808124?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/why-there-are-mountains/id1055890845?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music69/v4/bf/f1/70/bff17060-0563-02b2-ca80-95fc54ee08ad/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music69/v4/bf/f1/70/bff17060-0563-02b2-ca80-95fc54ee08ad/source/100x100bb.jpg","collectionPrice":8.91,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2015 Sinderlyn","country":"USA","currency":"USD","releaseDate":"2009-01-20T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":4384720,"collectionId":718946058,"amgArtistId":649146,"artistName":"Menomena","collectionName":"Friend and Foe","collectionCensoredName":"Friend and Foe","artistViewUrl":"https://itunes.apple.com/us/artist/menomena/id4384720?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/friend-and-foe/id718946058?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/83/28/ba/8328ba08-08a7-eef4-8083-08f68dc93de3/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/83/28/ba/8328ba08-08a7-eef4-8083-08f68dc93de3/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2007 Barsuk Records","country":"USA","currency":"USD","releaseDate":"2007-01-23T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":5500360,"collectionId":316654605,"amgArtistId":401761,"artistName":"Phoenix","collectionName":"Wolfgang Amadeus Phoenix","collectionCensoredName":"Wolfgang Amadeus Phoenix","artistViewUrl":"https://itunes.apple.com/us/artist/phoenix/id5500360?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/wolfgang-amadeus-phoenix/id316654605?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/48/4b/f8/484bf86f-7048-b89c-ae56-c8f5e983adaf/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/48/4b/f8/484bf86f-7048-b89c-ae56-c8f5e983adaf/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2009 Ghettoblaster S.A.R.L. under exlcusive license to Glassnote Entertainment Group LLC in the United States and Canada","country":"USA","currency":"USD","releaseDate":"2009-05-26T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":3208396,"collectionId":5390070,"amgArtistId":519953,"artistName":"Xiu Xiu","collectionName":"Fabulous Muscles","collectionCensoredName":"Fabulous Muscles","artistViewUrl":"https://itunes.apple.com/us/artist/xiu-xiu/id3208396?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/fabulous-muscles/id5390070?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/cd/81/7b/cd817b1f-0d08-1c9e-2bd0-157d10e00705/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/cd/81/7b/cd817b1f-0d08-1c9e-2bd0-157d10e00705/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2004 5 Rue Christine","country":"USA","currency":"USD","releaseDate":"2004-02-17T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":3274302,"collectionId":669617227,"amgArtistId":534825,"artistName":"Iron & Wine","collectionName":"The Shepherd's Dog","collectionCensoredName":"The Shepherd's Dog","artistViewUrl":"https://itunes.apple.com/us/artist/iron-wine/id3274302?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-shepherds-dog/id669617227?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music4/v4/46/ed/04/46ed046c-5846-db27-40a5-18adb1418573/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music4/v4/46/ed/04/46ed046c-5846-db27-40a5-18adb1418573/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2007 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2007-09-25T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":207937295,"collectionId":917542468,"amgArtistId":847906,"artistName":"The Twilight Sad","collectionName":"Fourteen Autumns and Fifteen Winters","collectionCensoredName":"Fourteen Autumns and Fifteen Winters","artistViewUrl":"https://itunes.apple.com/us/artist/the-twilight-sad/id207937295?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/fourteen-autumns-fifteen-winters/id917542468?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music4/v4/5d/24/af/5d24af05-914f-8621-b437-24be2b81970a/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music4/v4/5d/24/af/5d24af05-914f-8621-b437-24be2b81970a/source/100x100bb.jpg","collectionPrice":8.91,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2007 The Twilight Sad under exclusive license to FatCat Records","country":"USA","currency":"USD","releaseDate":"2007-05-06T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":161177939,"collectionId":299332980,"amgArtistId":865010,"artistName":"Sally Shapiro","collectionName":"Disco Romance","collectionCensoredName":"Disco Romance","artistViewUrl":"https://itunes.apple.com/us/artist/sally-shapiro/id161177939?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/disco-romance/id299332980?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/0c/c4/e6/0cc4e695-d999-823d-11af-5bc0225fb807/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/0c/c4/e6/0cc4e695-d999-823d-11af-5bc0225fb807/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2007 Paper Bag Records","country":"USA","currency":"USD","releaseDate":"2007-10-30T07:00:00Z","primaryGenreName":"Dance"},{"wrapperType":"collection","collectionType":"Album","artistId":201313968,"collectionId":291852780,"amgArtistId":823007,"artistName":"Fucked Up","collectionName":"The Chemistry of Common Life","collectionCensoredName":"The Chemistry of Common Life","artistViewUrl":"https://itunes.apple.com/us/artist/fucked-up/id201313968?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-chemistry-of-common-life/id291852780?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/04/0e/3c/040e3cf4-00d1-75e7-35db-ed17085f177f/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/04/0e/3c/040e3cf4-00d1-75e7-35db-ed17085f177f/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2008 Matador","country":"USA","currency":"USD","releaseDate":"2008-10-13T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":251740762,"collectionId":307804763,"amgArtistId":654074,"artistName":"Dan Deacon","collectionName":"Bromst","collectionCensoredName":"Bromst","artistViewUrl":"https://itunes.apple.com/us/artist/dan-deacon/id251740762?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/bromst/id307804763?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/9b/35/ec/9b35ec36-db03-94c1-2ca1-4685b0c9089f/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/9b/35/ec/9b35ec36-db03-94c1-2ca1-4685b0c9089f/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2009 Carpark Records","country":"USA","currency":"USD","releaseDate":"2009-03-24T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":155905421,"collectionId":1051363212,"amgArtistId":541457,"artistName":"Girl Talk","collectionName":"Night Ripper","collectionCensoredName":"Night Ripper","artistViewUrl":"https://itunes.apple.com/us/artist/girl-talk/id155905421?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/night-ripper/id1051363212?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music6/v4/ff/36/02/ff360227-6c01-8c55-1f94-6daf8f0db9df/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music6/v4/ff/36/02/ff360227-6c01-8c55-1f94-6daf8f0db9df/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":16,"copyright":"℗ 2006 Illegal Art","country":"USA","currency":"USD","releaseDate":"2006-05-09T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":407685008,"collectionId":989425234,"amgArtistId":472173,"artistName":"Isis","collectionName":"Wavering Radiant","collectionCensoredName":"Wavering Radiant","artistViewUrl":"https://itunes.apple.com/us/artist/isis/id407685008?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/wavering-radiant/id989425234?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music6/v4/fc/3c/06/fc3c060c-81fd-51f5-e88f-7c38aaf5fa6d/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music6/v4/fc/3c/06/fc3c060c-81fd-51f5-e88f-7c38aaf5fa6d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2009 Ipecac Recordings","country":"USA","currency":"USD","releaseDate":"2015-01-20T08:00:00Z","primaryGenreName":"Hard Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":6562624,"collectionId":187593021,"amgArtistId":560230,"artistName":"TV on the Radio","collectionName":"Return to Cookie Mountain","collectionCensoredName":"Return to Cookie Mountain","artistViewUrl":"https://itunes.apple.com/us/artist/tv-on-the-radio/id6562624?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/return-to-cookie-mountain/id187593021?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/46/0f/84/460f8446-f7e1-54f6-2728-a1c36aff8d74/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/46/0f/84/460f8446-f7e1-54f6-2728-a1c36aff8d74/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":15,"copyright":"℗ 2006 Touch And Go Records","country":"USA","currency":"USD","releaseDate":"2006-09-12T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":5664621,"collectionId":262707761,"amgArtistId":560122,"artistName":"Animal Collective","collectionName":"Strawberry Jam","collectionCensoredName":"Strawberry Jam","artistViewUrl":"https://itunes.apple.com/us/artist/animal-collective/id5664621?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/strawberry-jam/id262707761?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/88/71/31/887131f4-4514-e0d6-e52d-4ac16807a032/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/88/71/31/887131f4-4514-e0d6-e52d-4ac16807a032/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2007 Domino Recording Co. LTD","country":"USA","currency":"USD","releaseDate":"2007-09-11T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":145014446,"collectionId":726415628,"amgArtistId":827554,"artistName":"Bat for Lashes","collectionName":"Two Suns","collectionCensoredName":"Two Suns","artistViewUrl":"https://itunes.apple.com/us/artist/bat-for-lashes/id145014446?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/two-suns/id726415628?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/63/c1/af/63c1afd3-b20f-9bba-fbe3-19943c78eb58/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/63/c1/af/63c1afd3-b20f-9bba-fbe3-19943c78eb58/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2009 The copyright in this sound recording is owned by The Echo Label Ltd under exclusive licence to Parlophone Records Ltd","country":"USA","currency":"USD","releaseDate":"2009-01-12T08:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":120775250,"collectionId":828118946,"amgArtistId":817337,"artistName":"I'm from Barcelona","collectionName":"Let Me Introduce My Friends","collectionCensoredName":"Let Me Introduce My Friends","artistViewUrl":"https://itunes.apple.com/us/artist/im-from-barcelona/id120775250?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/let-me-introduce-my-friends/id828118946?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/24/ae/0b/24ae0bbc-51cb-4cb7-d4da-e5bd72cb3d9d/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/24/ae/0b/24ae0bbc-51cb-4cb7-d4da-e5bd72cb3d9d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2007 EMI Music Sweden AB under exclusive llcense to Mute for North America","country":"USA","currency":"USD","releaseDate":"2014-03-01T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":327041547,"collectionId":334190964,"amgArtistId":1167997,"artistName":"The Very Best","collectionName":"Warm Heart of Africa","collectionCensoredName":"Warm Heart of Africa","artistViewUrl":"https://itunes.apple.com/us/artist/the-very-best/id327041547?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/warm-heart-of-africa/id334190964?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/5b/0c/3d/5b0c3da2-4fce-97f5-541f-8be768b9d36d/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/5b/0c/3d/5b0c3da2-4fce-97f5-541f-8be768b9d36d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2009 Green Owl","country":"USA","currency":"USD","releaseDate":"2009-09-30T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":29836830,"collectionId":314837656,"amgArtistId":682277,"artistName":"Grizzly Bear","collectionName":"Veckatimest","collectionCensoredName":"Veckatimest","artistViewUrl":"https://itunes.apple.com/us/artist/grizzly-bear/id29836830?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/veckatimest/id314837656?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/ec/4e/c4/ec4ec404-b318-2914-5d03-aeca2d519c75/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/ec/4e/c4/ec4ec404-b318-2914-5d03-aeca2d519c75/source/100x100bb.jpg","collectionPrice":8.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2009 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2009-05-26T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":150291770,"collectionId":453249274,"amgArtistId":784336,"artistName":"Sunset Rubdown","collectionName":"Random Spirit Lover","collectionCensoredName":"Random Spirit Lover","artistViewUrl":"https://itunes.apple.com/us/artist/sunset-rubdown/id150291770?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/random-spirit-lover/id453249274?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music6/v4/7a/d8/84/7ad88405-3294-ef38-0df1-306c752a2e35/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music6/v4/7a/d8/84/7ad88405-3294-ef38-0df1-306c752a2e35/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2007 Jagjaguwar","country":"USA","currency":"USD","releaseDate":"2007-10-09T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":577524258,"collectionId":264568174,"amgArtistId":776924,"artistName":"The Pipettes","collectionName":"We Are the Pipettes","collectionCensoredName":"We Are the Pipettes","artistViewUrl":"https://itunes.apple.com/us/artist/the-pipettes/id577524258?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/we-are-the-pipettes/id264568174?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/f8/b9/7a/f8b97aa3-2040-d8ae-b219-105df3b5c359/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/f8/b9/7a/f8b97aa3-2040-d8ae-b219-105df3b5c359/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":16,"copyright":"℗ 2007 Memphis Industries Ltd Under exclusive license to Cherrytree/Interscope Records in the United States","country":"USA","currency":"USD","releaseDate":"2007-10-02T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":329090291,"collectionId":329090236,"amgArtistId":1185522,"artistName":"Memory Tapes","collectionName":"Seek Magic","collectionCensoredName":"Seek Magic","artistViewUrl":"https://itunes.apple.com/us/artist/memory-tapes/id329090291?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/seek-magic/id329090236?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/87/8c/f6/878cf6c6-25ca-70d9-85b9-25ba7cc41787/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/87/8c/f6/878cf6c6-25ca-70d9-85b9-25ba7cc41787/source/100x100bb.jpg","collectionPrice":7.92,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2009 Memory Tapes","country":"USA","currency":"USD","releaseDate":"2009-08-25T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":33568718,"collectionId":251186625,"amgArtistId":658804,"artistName":"Battles","collectionName":"Mirrored","collectionCensoredName":"Mirrored","artistViewUrl":"https://itunes.apple.com/us/artist/battles/id33568718?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/mirrored/id251186625?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/83/ad/28/83ad28e0-554b-25db-fc10-cba78243cefb/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/83/ad/28/83ad28e0-554b-25db-fc10-cba78243cefb/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2007 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2007-05-14T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":298172653,"collectionId":827807445,"amgArtistId":1096611,"artistName":"Fever Ray","collectionName":"Fever Ray","collectionCensoredName":"Fever Ray","artistViewUrl":"https://itunes.apple.com/us/artist/fever-ray/id298172653?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/fever-ray/id827807445?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/09/2d/36/092d3616-74c2-de31-c919-647556ab9f16/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/09/2d/36/092d3616-74c2-de31-c919-647556ab9f16/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2009 Rabid Records under exclusive llcense to Mute for North America","country":"USA","currency":"USD","releaseDate":"2009-01-13T08:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":436538198,"collectionId":309682431,"amgArtistId":867889,"artistName":"Woods","collectionName":"Songs of Shame","collectionCensoredName":"Songs of Shame","artistViewUrl":"https://itunes.apple.com/us/artist/woods/id436538198?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/songs-of-shame/id309682431?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/fd/c7/af/fdc7af16-6559-04f4-011b-a9871f322ab7/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/fd/c7/af/fdc7af16-6559-04f4-011b-a9871f322ab7/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2009 Woodsist","country":"USA","currency":"USD","releaseDate":"2009-04-28T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":251740762,"collectionId":288790281,"amgArtistId":654074,"artistName":"Dan Deacon","collectionName":"Spiderman of the Rings","collectionCensoredName":"Spiderman of the Rings","artistViewUrl":"https://itunes.apple.com/us/artist/dan-deacon/id251740762?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/spiderman-of-the-rings/id288790281?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/fd/64/c7/fd64c79f-fbd1-d96e-d075-483c83933c91/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/fd/64/c7/fd64c79f-fbd1-d96e-d075-483c83933c91/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2007 Carpark Records","country":"USA","currency":"USD","releaseDate":"2008-09-02T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":6925799,"collectionId":595120211,"amgArtistId":482481,"artistName":"Broken Social Scene","collectionName":"Forgiveness Rock Record","collectionCensoredName":"Forgiveness Rock Record","artistViewUrl":"https://itunes.apple.com/us/artist/broken-social-scene/id6925799?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/forgiveness-rock-record/id595120211?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/d2/db/7a/d2db7a9b-c22d-882e-6384-fa48edd19f55/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/d2/db/7a/d2db7a9b-c22d-882e-6384-fa48edd19f55/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2010 Arts & Crafts Productions Inc.","country":"USA","currency":"USD","releaseDate":"2012-10-24T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":99316914,"collectionId":290878332,"amgArtistId":579820,"artistName":"Department of Eagles","collectionName":"In Ear Park","collectionCensoredName":"In Ear Park","artistViewUrl":"https://itunes.apple.com/us/artist/department-of-eagles/id99316914?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/in-ear-park/id290878332?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/a5/b7/b8/a5b7b8ee-b1b4-0c2b-0be8-65e7621c552b/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/a5/b7/b8/a5b7b8ee-b1b4-0c2b-0be8-65e7621c552b/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2008 4AD","country":"USA","currency":"USD","releaseDate":"2008-10-06T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":1965909,"collectionId":311310235,"amgArtistId":175954,"artistName":"Bill Callahan","collectionName":"Sometimes I Wish We Were an Eagle","collectionCensoredName":"Sometimes I Wish We Were an Eagle","artistViewUrl":"https://itunes.apple.com/us/artist/bill-callahan/id1965909?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sometimes-i-wish-we-were-eagle/id311310235?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/9f/fe/51/9ffe5185-b932-ffb2-8eed-4fba15f9c04f/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/9f/fe/51/9ffe5185-b932-ffb2-8eed-4fba15f9c04f/source/100x100bb.jpg","collectionPrice":8.91,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2009 Drag City Inc.","country":"USA","currency":"USD","releaseDate":"2009-04-14T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":20015980,"collectionId":22641416,"amgArtistId":615777,"artistName":"The Futureheads","collectionName":"The Futureheads","collectionCensoredName":"The Futureheads","artistViewUrl":"https://itunes.apple.com/us/artist/the-futureheads/id20015980?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-futureheads/id22641416?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/7b/0a/39/7b0a39d4-c8b4-c5ce-53b3-13e4046a1dbc/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/7b/0a/39/7b0a39d4-c8b4-c5ce-53b3-13e4046a1dbc/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":15,"copyright":"℗ 2004 679 Recordings","country":"USA","currency":"USD","releaseDate":"2004-06-28T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":7377207,"collectionId":406087640,"amgArtistId":645663,"artistName":"Architecture In Helsinki","collectionName":"In Case We Die","collectionCensoredName":"In Case We Die","artistViewUrl":"https://itunes.apple.com/us/artist/architecture-in-helsinki/id7377207?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/in-case-we-die/id406087640?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/c4/fc/cd/c4fccd38-c972-4a2b-ff86-97cc0c25c3f2/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/c4/fc/cd/c4fccd38-c972-4a2b-ff86-97cc0c25c3f2/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2010 Architecture In Helsinki / Cobraside","country":"USA","currency":"USD","releaseDate":"2005-04-05T07:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":20837680,"collectionId":789702123,"amgArtistId":467334,"artistName":"Antony & The Johnsons","collectionName":"The Crying Light","collectionCensoredName":"The Crying Light","artistViewUrl":"https://itunes.apple.com/us/artist/antony-the-johnsons/id20837680?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-crying-light/id789702123?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music6/v4/bd/3e/7b/bd3e7b5e-0d2c-2762-e695-6323c1953abc/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music6/v4/bd/3e/7b/bd3e7b5e-0d2c-2762-e695-6323c1953abc/source/100x100bb.jpg","collectionPrice":9.9,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2009 Secretly Canadian","country":"USA","currency":"USD","releaseDate":"2009-01-20T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":3823891,"collectionId":411842895,"amgArtistId":508841,"artistName":"Tim Hecker","collectionName":"Ravedeath, 1972","collectionCensoredName":"Ravedeath, 1972","artistViewUrl":"https://itunes.apple.com/us/artist/tim-hecker/id3823891?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/ravedeath-1972/id411842895?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/34/cd/40/34cd40e2-1bd5-2530-28c8-03fbc23801a4/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/34/cd/40/34cd40e2-1bd5-2530-28c8-03fbc23801a4/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2011 kranky","country":"USA","currency":"USD","releaseDate":"2011-02-14T08:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":251725382,"collectionId":323957271,"amgArtistId":531387,"artistName":"DJ /Rupture","collectionName":"Uproot","collectionCensoredName":"Uproot","artistViewUrl":"https://itunes.apple.com/us/artist/dj-rupture/id251725382?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/uproot/id323957271?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/e8/74/91/e874915e-9514-9390-f422-6e84883a4220/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/e8/74/91/e874915e-9514-9390-f422-6e84883a4220/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":23,"copyright":"℗ 2009 the Agriculture","country":"USA","currency":"USD","releaseDate":"2008-10-07T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":210056561,"collectionId":387922299,"amgArtistId":732627,"artistName":"Deerhunter","collectionName":"Halcyon Digest","collectionCensoredName":"Halcyon Digest","artistViewUrl":"https://itunes.apple.com/us/artist/deerhunter/id210056561?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/halcyon-digest/id387922299?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/cd/24/27/cd2427cb-0225-c3ed-3048-23bd123957fe/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/cd/24/27/cd2427cb-0225-c3ed-3048-23bd123957fe/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2010 4AD","country":"USA","currency":"USD","releaseDate":"2010-09-27T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":567072,"collectionId":850569437,"amgArtistId":476055,"artistName":"Gorillaz","collectionName":"Plastic Beach","collectionCensoredName":"Plastic Beach","artistViewUrl":"https://itunes.apple.com/us/artist/gorillaz/id567072?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/plastic-beach/id850569437?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music2/v4/66/d0/20/66d020c6-a005-8c14-9403-c624f616dc31/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music2/v4/66/d0/20/66d020c6-a005-8c14-9403-c624f616dc31/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":16,"copyright":"℗ 2014 Parlophone Records Limited, a Warner Music Group company.","country":"USA","currency":"USD","releaseDate":"2014-04-11T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":263435943,"collectionId":413642457,"amgArtistId":1008964,"artistName":"Lykke Li","collectionName":"Wounded Rhymes","collectionCensoredName":"Wounded Rhymes","artistViewUrl":"https://itunes.apple.com/us/artist/lykke-li/id263435943?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/wounded-rhymes/id413642457?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/40/d3/9e/40d39e5b-2df1-c3f3-efb6-632232505913/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/40/d3/9e/40d39e5b-2df1-c3f3-efb6-632232505913/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2011 LL Recordings under exclusive licence to Warner Music UK Limited for the world excluding Sweden, Norway, Denmark, Finland and Iceland","country":"USA","currency":"USD","releaseDate":"2010-02-28T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":301995668,"collectionId":488873549,"amgArtistId":2059507,"artistName":"Nicolas Jaar","collectionName":"Space Is Only Noise","collectionCensoredName":"Space Is Only Noise","artistViewUrl":"https://itunes.apple.com/us/artist/nicolas-jaar/id301995668?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/space-is-only-noise/id488873549?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/a3/bc/89/a3bc8994-d918-5dd8-495e-9df302bb5ad5/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/a3/bc/89/a3bc8994-d918-5dd8-495e-9df302bb5ad5/source/100x100bb.jpg","collectionPrice":10.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2010 Circus Company","country":"USA","currency":"USD","releaseDate":"2011-01-31T08:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":7432761,"collectionId":669309519,"amgArtistId":653503,"artistName":"Cut Copy","collectionName":"Zonoscope","collectionCensoredName":"Zonoscope","artistViewUrl":"https://itunes.apple.com/us/artist/cut-copy/id7432761?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/zonoscope/id669309519?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music6/v4/fb/37/8f/fb378ffd-e292-9eee-ce5e-9cafb844fc30/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music6/v4/fb/37/8f/fb378ffd-e292-9eee-ce5e-9cafb844fc30/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2011 Modular Recordings","country":"USA","currency":"USD","releaseDate":"2011-02-08T08:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":4273404,"collectionId":392327958,"amgArtistId":442935,"artistName":"Sufjan Stevens","collectionName":"The Age of Adz","collectionCensoredName":"The Age of Adz","artistViewUrl":"https://itunes.apple.com/us/artist/sufjan-stevens/id4273404?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-age-of-adz/id392327958?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/fd/a0/ed/fda0ed9c-3d31-efca-0a94-5a147bab4abd/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/fd/a0/ed/fda0ed9c-3d31-efca-0a94-5a147bab4abd/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2010 Asthmatic Kitty","country":"USA","currency":"USD","releaseDate":"2010-10-12T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":2715720,"collectionId":403822142,"amgArtistId":353484,"artistName":"Kanye West","collectionName":"My Beautiful Dark Twisted Fantasy","collectionCensoredName":"My Beautiful Dark Twisted Fantasy","artistViewUrl":"https://itunes.apple.com/us/artist/kanye-west/id2715720?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/my-beautiful-dark-twisted/id403822142?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/fb/8d/c9/fb8dc987-8592-a70c-6b96-29052eef47a9/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/fb/8d/c9/fb8dc987-8592-a70c-6b96-29052eef47a9/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":14,"copyright":"℗ 2010 Roc-A-Fella Records, LLC","country":"USA","currency":"USD","releaseDate":"2010-11-22T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":338172312,"collectionId":673970570,"amgArtistId":1185195,"artistName":"Oneohtrix Point Never","collectionName":"R Plus Seven","collectionCensoredName":"R Plus Seven","artistViewUrl":"https://itunes.apple.com/us/artist/oneohtrix-point-never/id338172312?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/r-plus-seven/id673970570?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/26/80/b5/2680b5b1-c5bf-4d58-8c1d-3096d856f939/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/26/80/b5/2680b5b1-c5bf-4d58-8c1d-3096d856f939/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2013 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2013-09-30T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":438548334,"collectionId":733175218,"amgArtistId":2294372,"artistName":"Mutual Benefit","collectionName":"Love's Crushing Diamond","collectionCensoredName":"Love's Crushing Diamond","artistViewUrl":"https://itunes.apple.com/us/artist/mutual-benefit/id438548334?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/loves-crushing-diamond/id733175218?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/60/83/bc/6083bc2c-a23c-48e1-f5b5-9139830f1b34/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/60/83/bc/6083bc2c-a23c-48e1-f5b5-9139830f1b34/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2013 Other Music Recording Company","country":"USA","currency":"USD","releaseDate":"2013-10-25T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":354914525,"collectionId":366879180,"amgArtistId":393935,"artistName":"Male Bonding","collectionName":"Nothing Hurts","collectionCensoredName":"Nothing Hurts","artistViewUrl":"https://itunes.apple.com/us/artist/male-bonding/id354914525?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/nothing-hurts/id366879180?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/e4/48/f0/e448f02f-b6ca-8ce7-f704-08d1c87bab04/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/e4/48/f0/e448f02f-b6ca-8ce7-f704-08d1c87bab04/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2010 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2010-05-11T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":289099102,"collectionId":1046817772,"amgArtistId":1105030,"artistName":"Julia Holter","collectionName":"Have You in My Wilderness","collectionCensoredName":"Have You in My Wilderness","artistViewUrl":"https://itunes.apple.com/us/artist/julia-holter/id289099102?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/have-you-in-my-wilderness/id1046817772?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music3/v4/0e/3c/f8/0e3cf81d-3366-499b-6b6e-db2db07e15df/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music3/v4/0e/3c/f8/0e3cf81d-3366-499b-6b6e-db2db07e15df/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2015 Domino Recording Co Ltd","country":"USA","currency":"USD","releaseDate":"2015-09-25T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":549186342,"collectionId":993161423,"amgArtistId":2649406,"artistName":"Kelela","collectionName":"Cut 4 Me","collectionCensoredName":"Cut 4 Me","artistViewUrl":"https://itunes.apple.com/us/artist/kelela/id549186342?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cut-4-me/id993161423?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music1/v4/84/7c/58/847c58f6-167b-d623-00e4-03531ed15021/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music1/v4/84/7c/58/847c58f6-167b-d623-00e4-03531ed15021/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2013 Fade to Mind","country":"USA","currency":"USD","releaseDate":"2015-08-06T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":479276137,"collectionId":960342539,"amgArtistId":2867604,"artistName":"Courtney Barnett","collectionName":"Sometimes I Sit and Think, and Sometimes I Just Sit","collectionCensoredName":"Sometimes I Sit and Think, and Sometimes I Just Sit","artistViewUrl":"https://itunes.apple.com/us/artist/courtney-barnett/id479276137?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sometimes-i-sit-think-sometimes/id960342539?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music5/v4/4b/0a/8e/4b0a8e4d-66c6-c680-e02e-0f6453133f0d/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music5/v4/4b/0a/8e/4b0a8e4d-66c6-c680-e02e-0f6453133f0d/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":12,"copyright":"℗ 2015 Marathon Artists under exclusive license to Mom+Pop Music","country":"USA","currency":"USD","releaseDate":"2015-03-23T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":46086389,"collectionId":828259375,"amgArtistId":561410,"artistName":"M83","collectionName":"Hurry Up, We're Dreaming","collectionCensoredName":"Hurry Up, We're Dreaming","artistViewUrl":"https://itunes.apple.com/us/artist/m83/id46086389?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/hurry-up-were-dreaming/id828259375?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/30/55/e8/3055e810-838c-707a-eefb-3879b4abc07f/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/30/55/e8/3055e810-838c-707a-eefb-3879b4abc07f/source/100x100bb.jpg","collectionPrice":14.99,"collectionExplicitness":"notExplicit","trackCount":22,"copyright":"℗ 2011 M83 Recording Inc under exclusive license to Mute for North America","country":"USA","currency":"USD","releaseDate":"2014-03-01T08:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":92012,"collectionId":570845528,"amgArtistId":291154,"artistName":"Mos Def","collectionName":"The Ecstatic","collectionCensoredName":"The Ecstatic","artistViewUrl":"https://itunes.apple.com/us/artist/mos-def/id92012?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-ecstatic/id570845528?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/05/85/ed/0585ed6f-6493-3ee0-55dc-47911c6fbd7d/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/05/85/ed/0585ed6f-6493-3ee0-55dc-47911c6fbd7d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":16,"copyright":"℗ 2009 Downtown Music, LLC.","country":"USA","currency":"USD","releaseDate":"2009-06-09T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":312848073,"collectionId":418800378,"amgArtistId":1118416,"artistName":"Toro y Moi","collectionName":"Underneath the Pine","collectionCensoredName":"Underneath the Pine","artistViewUrl":"https://itunes.apple.com/us/artist/toro-y-moi/id312848073?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/underneath-the-pine/id418800378?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/d7/ad/43/d7ad4303-4e69-8cea-1616-4069ad19153b/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/d7/ad/43/d7ad4303-4e69-8cea-1616-4069ad19153b/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2011 Carpark Records","country":"USA","currency":"USD","releaseDate":"2011-02-21T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":310972126,"collectionId":319402891,"amgArtistId":1136621,"artistName":"Japandroids","collectionName":"Post-Nothing","collectionCensoredName":"Post-Nothing","artistViewUrl":"https://itunes.apple.com/us/artist/japandroids/id310972126?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/post-nothing/id319402891?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/c9/c4/a6/c9c4a6c3-d944-46d1-0d64-319e9daf4c11/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/c9/c4/a6/c9c4a6c3-d944-46d1-0d64-319e9daf4c11/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2009 Polyvinyl Record Co.","country":"USA","currency":"USD","releaseDate":"2009-06-09T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":77801705,"collectionId":897998509,"amgArtistId":1068640,"artistName":"DJ Rashad","collectionName":"Double Cup","collectionCensoredName":"Double Cup","artistViewUrl":"https://itunes.apple.com/us/artist/dj-rashad/id77801705?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/double-cup/id897998509?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/cd/64/87/cd6487dd-3494-7899-5fd4-cc8b6251985e/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/cd/64/87/cd6487dd-3494-7899-5fd4-cc8b6251985e/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":14,"copyright":"℗ 2014 Hyperdub","country":"USA","currency":"USD","releaseDate":"2014-07-01T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":334782437,"collectionId":937490809,"amgArtistId":1169212,"artistName":"Neon Indian","collectionName":"Psychic Chasms","collectionCensoredName":"Psychic Chasms","artistViewUrl":"https://itunes.apple.com/us/artist/neon-indian/id334782437?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/psychic-chasms/id937490809?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music3/v4/fa/40/84/fa408495-673a-5fa9-cf2d-71030258d93b/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music3/v4/fa/40/84/fa408495-673a-5fa9-cf2d-71030258d93b/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2010 Neon Indian under exclusive license to FADER Label","country":"USA","currency":"USD","releaseDate":"2010-06-21T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":2959228,"collectionId":181411762,"amgArtistId":5892,"artistName":"Yo La Tengo","collectionName":"I Am Not Afraid of You and I Will Beat Your Ass","collectionCensoredName":"I Am Not Afraid of You and I Will Beat Your Ass","artistViewUrl":"https://itunes.apple.com/us/artist/yo-la-tengo/id2959228?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/i-am-not-afraid-you-i-will/id181411762?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/8c/ba/f6/8cbaf6e1-e5ca-5871-11aa-b5bd5699120f/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/8c/ba/f6/8cbaf6e1-e5ca-5871-11aa-b5bd5699120f/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":15,"copyright":"℗ 2006 Matador","country":"USA","currency":"USD","releaseDate":"2006-09-11T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":440698865,"collectionId":716767448,"amgArtistId":2364775,"artistName":"Blood Orange","collectionName":"Cupid Deluxe","collectionCensoredName":"Cupid Deluxe","artistViewUrl":"https://itunes.apple.com/us/artist/blood-orange/id440698865?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cupid-deluxe/id716767448?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music4/v4/38/4a/ec/384aecfa-fbaf-9c40-9852-38a01015176d/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music4/v4/38/4a/ec/384aecfa-fbaf-9c40-9852-38a01015176d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2013 Domino Recording Co Ltd","country":"USA","currency":"USD","releaseDate":"2013-11-18T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":367955316,"collectionId":961676269,"amgArtistId":2144684,"artistName":"Lower Dens","collectionName":"Escape from Evil","collectionCensoredName":"Escape from Evil","artistViewUrl":"https://itunes.apple.com/us/artist/lower-dens/id367955316?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/escape-from-evil/id961676269?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music3/v4/e4/44/12/e44412d0-5cf1-aa1b-42d7-ab1a919701bf/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music3/v4/e4/44/12/e44412d0-5cf1-aa1b-42d7-ab1a919701bf/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2015 Ribbon Music, LLC","country":"USA","currency":"USD","releaseDate":"2015-03-27T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":415722074,"collectionId":415722064,"amgArtistId":2122387,"artistName":"Julianna Barwick","collectionName":"The Magic Place","collectionCensoredName":"The Magic Place","artistViewUrl":"https://itunes.apple.com/us/artist/julianna-barwick/id415722074?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-magic-place/id415722064?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/a5/1c/b3/a51cb37f-dea4-e35f-1683-ca1dd5f121b8/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/a5/1c/b3/a51cb37f-dea4-e35f-1683-ca1dd5f121b8/source/100x100bb.jpg","collectionPrice":8.91,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2011 Julianna Barwick","country":"USA","currency":"USD","releaseDate":"2011-02-22T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":4273404,"collectionId":955572616,"amgArtistId":442935,"artistName":"Sufjan Stevens","collectionName":"Carrie & Lowell","collectionCensoredName":"Carrie & Lowell","artistViewUrl":"https://itunes.apple.com/us/artist/sufjan-stevens/id4273404?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/carrie-lowell/id955572616?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music3/v4/ca/0b/5f/ca0b5f5f-22c0-4257-9a78-dc8fb9b857ca/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music3/v4/ca/0b/5f/ca0b5f5f-22c0-4257-9a78-dc8fb9b857ca/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2015 Asthmatic Kitty Records","country":"USA","currency":"USD","releaseDate":"2015-03-31T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":169024236,"collectionId":357534650,"amgArtistId":823008,"artistName":"The Morning Benders","collectionName":"Big Echo","collectionCensoredName":"Big Echo","artistViewUrl":"https://itunes.apple.com/us/artist/the-morning-benders/id169024236?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/big-echo/id357534650?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/db/06/b9/db06b974-de6f-c9f1-a09b-9d4250006a7a/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/db/06/b9/db06b974-de6f-c9f1-a09b-9d4250006a7a/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2010 Rough Trade","country":"USA","currency":"USD","releaseDate":"2010-06-28T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":23203991,"collectionId":697069412,"amgArtistId":673409,"artistName":"Arcade Fire","collectionName":"Reflektor","collectionCensoredName":"Reflektor","artistViewUrl":"https://itunes.apple.com/us/artist/arcade-fire/id23203991?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/reflektor/id697069412?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music4/v4/5c/31/dd/5c31dd23-625a-1bff-d6c9-93098338ce87/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music4/v4/5c/31/dd/5c31dd23-625a-1bff-d6c9-93098338ce87/source/100x100bb.jpg","collectionPrice":11.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2013 Arcade Fire Music, LLC","country":"USA","currency":"USD","releaseDate":"2013-10-28T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":29254083,"collectionId":561709112,"amgArtistId":2273752,"artistName":"Miguel","collectionName":"Kaleidoscope Dream","collectionCensoredName":"Kaleidoscope Dream","artistViewUrl":"https://itunes.apple.com/us/artist/miguel/id29254083?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/kaleidoscope-dream/id561709112?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/cf/06/1d/cf061d1e-0484-c929-14eb-2a997901a056/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/cf/06/1d/cf061d1e-0484-c929-14eb-2a997901a056/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":13,"copyright":"℗ 2012 RCA Records, a division of Sony Music Entertainment","country":"USA","currency":"USD","releaseDate":"2012-10-01T07:00:00Z","primaryGenreName":"R&B/Soul"},{"wrapperType":"collection","collectionType":"Album","artistId":406846711,"collectionId":587471846,"amgArtistId":2361462,"artistName":"Iceage","collectionName":"You're Nothing","collectionCensoredName":"You're Nothing","artistViewUrl":"https://itunes.apple.com/us/artist/iceage/id406846711?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/youre-nothing/id587471846?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/b8/19/b5/b819b56a-1ce7-6a4e-e70b-5760fa99ef8b/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/b8/19/b5/b819b56a-1ce7-6a4e-e70b-5760fa99ef8b/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2013 Matador","country":"USA","currency":"USD","releaseDate":"2013-02-18T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":29525428,"collectionId":693387639,"amgArtistId":533953,"artistName":"LCD Soundsystem","collectionName":"This Is Happening","collectionCensoredName":"This Is Happening","artistViewUrl":"https://itunes.apple.com/us/artist/lcd-soundsystem/id29525428?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/this-is-happening/id693387639?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music4/v4/3f/09/90/3f09907e-b12a-a371-b111-757cff054bbf/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music4/v4/3f/09/90/3f09907e-b12a-a371-b111-757cff054bbf/source/100x100bb.jpg","collectionPrice":5.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2010 The copyright in this sound recording is owned by DFA LLC under exclusive licence to Parlophone Records Ltd","country":"USA","currency":"USD","releaseDate":"2010-05-18T07:00:00Z","primaryGenreName":"Dance"},{"wrapperType":"collection","collectionType":"Album","artistId":42056970,"collectionId":529617790,"amgArtistId":601780,"artistName":"Dirty Projectors","collectionName":"Swing Lo Magellan","collectionCensoredName":"Swing Lo Magellan","artistViewUrl":"https://itunes.apple.com/us/artist/dirty-projectors/id42056970?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/swing-lo-magellan/id529617790?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/6c/47/a2/6c47a297-1441-46c2-70ea-693dff9fb998/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/6c/47/a2/6c47a297-1441-46c2-70ea-693dff9fb998/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2012 Domino Recording Co Ltd","country":"USA","currency":"USD","releaseDate":"2012-07-10T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":289099102,"collectionId":671114581,"amgArtistId":1105030,"artistName":"Julia Holter","collectionName":"Loud City Song","collectionCensoredName":"Loud City Song","artistViewUrl":"https://itunes.apple.com/us/artist/julia-holter/id289099102?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/loud-city-song/id671114581?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music6/v4/42/90/ef/4290ef49-419f-c8c3-9478-5aa8e35d61e8/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music6/v4/42/90/ef/4290ef49-419f-c8c3-9478-5aa8e35d61e8/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2013 Domino Recording Co Ltd","country":"USA","currency":"USD","releaseDate":"2013-08-19T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":18156670,"collectionId":541577745,"amgArtistId":675242,"artistName":"Ariel Pink's Haunted Graffiti","collectionName":"Mature Themes","collectionCensoredName":"Mature Themes","artistViewUrl":"https://itunes.apple.com/us/artist/ariel-pinks-haunted-graffiti/id18156670?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/mature-themes/id541577745?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/9c/71/1a/9c711aac-a930-593a-ec62-8f67ac2519ba/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/9c/71/1a/9c711aac-a930-593a-ec62-8f67ac2519ba/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":13,"copyright":"℗ 2012 4AD","country":"USA","currency":"USD","releaseDate":"2012-08-20T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":614946147,"collectionId":614945667,"amgArtistId":2710953,"artistName":"Savages","collectionName":"Silence Yourself","collectionCensoredName":"Silence Yourself","artistViewUrl":"https://itunes.apple.com/us/artist/savages/id614946147?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/silence-yourself/id614945667?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music2/v4/71/47/38/71473887-b50e-7a12-0549-4100d1773aaa/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music2/v4/71/47/38/71473887-b50e-7a12-0549-4100d1773aaa/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2013 Matador","country":"USA","currency":"USD","releaseDate":"2013-05-06T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":51075707,"collectionId":626872826,"amgArtistId":13762,"artistName":"The National","collectionName":"Trouble Will Find Me","collectionCensoredName":"Trouble Will Find Me","artistViewUrl":"https://itunes.apple.com/us/artist/the-national/id51075707?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/trouble-will-find-me/id626872826?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music2/v4/91/a3/dd/91a3dd85-c1c4-474f-d1dc-c07e52bc82ab/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music2/v4/91/a3/dd/91a3dd85-c1c4-474f-d1dc-c07e52bc82ab/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":13,"copyright":"℗ 2013 4AD","country":"USA","currency":"USD","releaseDate":"2013-05-20T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":26090355,"collectionId":828145438,"amgArtistId":688598,"artistName":"The Knife","collectionName":"Shaking the Habitual","collectionCensoredName":"Shaking the Habitual","artistViewUrl":"https://itunes.apple.com/us/artist/the-knife/id26090355?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/shaking-the-habitual/id828145438?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/38/f9/ad/38f9ad7d-ea63-bf22-d998-a9c4436796fa/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/38/f9/ad/38f9ad7d-ea63-bf22-d998-a9c4436796fa/source/100x100bb.jpg","collectionPrice":10.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2013 Rabid Records under exclusive license to Brille Records Ltd. and Mute for US and Canada","country":"USA","currency":"USD","releaseDate":"2014-03-01T08:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":184839847,"collectionId":711559045,"amgArtistId":68216,"artistName":"DJ Quik","collectionName":"The Book of David","collectionCensoredName":"The Book of David","artistViewUrl":"https://itunes.apple.com/us/artist/dj-quik/id184839847?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-book-of-david/id711559045?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/c1/78/1a/c1781aa3-3896-92f6-2bf7-8dc941d19a60/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/c1/78/1a/c1781aa3-3896-92f6-2bf7-8dc941d19a60/source/100x100bb.jpg","collectionPrice":-1,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":18,"copyright":"℗ 2011 Mad Science Recordings","country":"USA","currency":"USD","releaseDate":"2011-04-19T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":485087438,"collectionId":785719208,"amgArtistId":2548582,"artistName":"Waxahatchee","collectionName":"Cerulean Salt","collectionCensoredName":"Cerulean Salt","artistViewUrl":"https://itunes.apple.com/us/artist/waxahatchee/id485087438?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cerulean-salt/id785719208?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music6/v4/8c/5f/c8/8c5fc87d-2899-2a55-7d47-ce83375788b0/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music6/v4/8c/5f/c8/8c5fc87d-2899-2a55-7d47-ce83375788b0/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":13,"copyright":"℗ 2013 Don Giovanni Records","country":"USA","currency":"USD","releaseDate":"2013-03-05T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":140777342,"collectionId":665514095,"amgArtistId":748801,"artistName":"Janelle Monáe","collectionName":"The Electric Lady","collectionCensoredName":"The Electric Lady","artistViewUrl":"https://itunes.apple.com/us/artist/janelle-monae/id140777342?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-electric-lady/id665514095?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/63/bf/f4/63bff401-07ff-5eb4-3be6-a71940f6199e/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/63/bf/f4/63bff401-07ff-5eb4-3be6-a71940f6199e/source/100x100bb.jpg","collectionPrice":5.99,"collectionExplicitness":"notExplicit","trackCount":19,"copyright":"℗ 2013 Bad Boy Records, LLC. Manufactured and Distributed by Atlantic Recording Corporation, A Warner Music Group Company.","country":"USA","currency":"USD","releaseDate":"2013-09-10T07:00:00Z","primaryGenreName":"R&B/Soul"},{"wrapperType":"collection","collectionType":"Album","artistId":1965909,"collectionId":694137709,"amgArtistId":175954,"artistName":"Bill Callahan","collectionName":"Dream River","collectionCensoredName":"Dream River","artistViewUrl":"https://itunes.apple.com/us/artist/bill-callahan/id1965909?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/dream-river/id694137709?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/ca/95/3b/ca953b36-95e0-072d-5f56-d7d4c5fee2df/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/ca/95/3b/ca953b36-95e0-072d-5f56-d7d4c5fee2df/source/100x100bb.jpg","collectionPrice":7.92,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2013 Drag City","country":"USA","currency":"USD","releaseDate":"2013-09-17T07:00:00Z","primaryGenreName":"Singer/Songwriter"},{"wrapperType":"collection","collectionType":"Album","artistId":5468295,"collectionId":617154241,"amgArtistId":168791,"artistName":"Daft Punk","collectionName":"Random Access Memories","collectionCensoredName":"Random Access Memories","artistViewUrl":"https://itunes.apple.com/us/artist/daft-punk/id5468295?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/random-access-memories/id617154241?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music2/v4/0c/8c/4a/0c8c4a84-465f-ee54-d999-eb0743d224ef/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music2/v4/0c/8c/4a/0c8c4a84-465f-ee54-d999-eb0743d224ef/source/100x100bb.jpg","collectionPrice":11.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2013 Daft Life Limited under exclusive license to Columbia Records, a Division of Sony Music Entertainment","country":"USA","currency":"USD","releaseDate":"2013-05-17T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":259437105,"collectionId":613184430,"amgArtistId":980085,"artistName":"Vampire Weekend","collectionName":"Modern Vampires of the City","collectionCensoredName":"Modern Vampires of the City","artistViewUrl":"https://itunes.apple.com/us/artist/vampire-weekend/id259437105?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/modern-vampires-of-the-city/id613184430?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music2/v4/5e/7c/64/5e7c64e8-797c-637e-df69-7802fc8cd665/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music2/v4/5e/7c/64/5e7c64e8-797c-637e-df69-7802fc8cd665/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2013 XL Recordings","country":"USA","currency":"USD","releaseDate":"2013-05-13T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":290242959,"collectionId":547068224,"amgArtistId":1111074,"artistName":"Tame Impala","collectionName":"Lonerism","collectionCensoredName":"Lonerism","artistViewUrl":"https://itunes.apple.com/us/artist/tame-impala/id290242959?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/lonerism/id547068224?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/ef/23/4c/ef234c32-18ec-49fa-0ade-d68a2a2f2211/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/ef/23/4c/ef234c32-18ec-49fa-0ade-d68a2a2f2211/source/100x100bb.jpg","collectionPrice":8.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2012 Modular Recordings","country":"USA","currency":"USD","releaseDate":"2012-10-05T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":271256,"collectionId":705503499,"amgArtistId":905792,"artistName":"Drake","collectionName":"Nothing Was the Same","collectionCensoredName":"Nothing Was the Same","artistViewUrl":"https://itunes.apple.com/us/artist/drake/id271256?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/nothing-was-the-same/id705503499?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/17/14/d0/1714d03b-9ee9-ae57-58c1-c415778752f2/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/17/14/d0/1714d03b-9ee9-ae57-58c1-c415778752f2/source/100x100bb.jpg","collectionPrice":13.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":16,"copyright":"℗ 2013 Cash Money Records Inc.","country":"USA","currency":"USD","releaseDate":"2013-09-24T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":499450846,"collectionId":892503890,"amgArtistId":2546620,"artistName":"Pallbearer","collectionName":"Foundations of Burden","collectionCensoredName":"Foundations of Burden","artistViewUrl":"https://itunes.apple.com/us/artist/pallbearer/id499450846?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/foundations-of-burden/id892503890?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music6/v4/05/86/48/0586489a-eb44-f986-768c-d9a34c3b5f49/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music6/v4/05/86/48/0586489a-eb44-f986-768c-d9a34c3b5f49/source/100x100bb.jpg","collectionPrice":8.99,"collectionExplicitness":"notExplicit","trackCount":6,"copyright":"℗ 2014 Profound Lore","country":"USA","currency":"USD","releaseDate":"2014-08-19T07:00:00Z","primaryGenreName":"Metal"},{"wrapperType":"collection","collectionType":"Album","artistId":566639154,"collectionId":924266590,"amgArtistId":2295422,"artistName":"Vince Staples","collectionName":"Hell Can Wait","collectionCensoredName":"Hell Can Wait","artistViewUrl":"https://itunes.apple.com/us/artist/vince-staples/id566639154?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/hell-can-wait/id924266590?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music3/v4/1a/ae/2c/1aae2c72-49f3-aeca-0db0-8750e7579594/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music3/v4/1a/ae/2c/1aae2c72-49f3-aeca-0db0-8750e7579594/source/100x100bb.jpg","collectionPrice":6.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":7,"copyright":"℗ 2014 Def Jam Recordings (ARTium Records), a division of UMG Recordings, Inc.","country":"USA","currency":"USD","releaseDate":"2014-10-07T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":5580746,"collectionId":836834698,"amgArtistId":5572,"artistName":"Swans","collectionName":"To Be Kind","collectionCensoredName":"To Be Kind","artistViewUrl":"https://itunes.apple.com/us/artist/swans/id5580746?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/to-be-kind/id836834698?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music4/v4/8f/65/72/8f6572a0-26b7-278b-5d2a-793ef6a154f4/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music4/v4/8f/65/72/8f6572a0-26b7-278b-5d2a-793ef6a154f4/source/100x100bb.jpg","collectionPrice":13.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":10,"copyright":"℗ 2014 Young God Records","country":"USA","currency":"USD","releaseDate":"2014-05-13T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":406846711,"collectionId":904912441,"amgArtistId":2361462,"artistName":"Iceage","collectionName":"Plowing Into the Field of Love","collectionCensoredName":"Plowing Into the Field of Love","artistViewUrl":"https://itunes.apple.com/us/artist/iceage/id406846711?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/plowing-into-the-field-of-love/id904912441?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music4/v4/46/f5/67/46f56731-b605-a7a9-f2ba-0b3bd9834796/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music4/v4/46/f5/67/46f56731-b605-a7a9-f2ba-0b3bd9834796/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2014 Matador","country":"USA","currency":"USD","releaseDate":"2014-10-06T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":265224116,"collectionId":737903433,"amgArtistId":882159,"artistName":"These New Puritans","collectionName":"Field of Reeds","collectionCensoredName":"Field of Reeds","artistViewUrl":"https://itunes.apple.com/us/artist/these-new-puritans/id265224116?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/field-of-reeds/id737903433?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music6/v4/03/c4/f9/03c4f9a9-e9a7-3626-2306-0c84abe96675/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music6/v4/03/c4/f9/03c4f9a9-e9a7-3626-2306-0c84abe96675/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2013 Infectious Music UK","country":"USA","currency":"USD","releaseDate":"2013-10-29T07:00:00Z","primaryGenreName":"Indie Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":263435943,"collectionId":839186333,"amgArtistId":1008964,"artistName":"Lykke Li","collectionName":"I Never Learn","collectionCensoredName":"I Never Learn","artistViewUrl":"https://itunes.apple.com/us/artist/lykke-li/id263435943?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/i-never-learn/id839186333?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/02/7a/bd/027abd19-0575-429e-e68e-a0989e9ea9f7/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/02/7a/bd/027abd19-0575-429e-e68e-a0989e9ea9f7/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2014 LL RECORDINGS UNDER EXCLUSIVE LICENSE TO WARNER MUSIC UK LIMITED FOR THE WORLD EXCLUDING SWEDEN, NORWAY, DENMARK, FINLAND AND ICELAND AND WARNER MUSIC SWEDEN AB FOR SWEDEN, NORWAY, DENMARK, FINLAND AND ICELAND.","country":"USA","currency":"USD","releaseDate":"2014-05-02T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":164483115,"collectionId":681237313,"artistName":"HAIM","collectionName":"Days Are Gone","collectionCensoredName":"Days Are Gone","artistViewUrl":"https://itunes.apple.com/us/artist/haim/id164483115?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/days-are-gone/id681237313?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music6/v4/af/9b/86/af9b864d-b3eb-d823-5bd8-c53faa18b3dd/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music6/v4/af/9b/86/af9b864d-b3eb-d823-5bd8-c53faa18b3dd/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2012, 2013 Haim Productions Inc. under exclusive license to Columbia Records, a Division of Sony Music Entertainment","country":"USA","currency":"USD","releaseDate":"2013-09-30T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":266606878,"collectionId":661579017,"amgArtistId":1001581,"artistName":"Fuck Buttons","collectionName":"Slow Focus","collectionCensoredName":"Slow Focus","artistViewUrl":"https://itunes.apple.com/us/artist/fuck-buttons/id266606878?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/slow-focus/id661579017?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music1/v4/80/65/a3/8065a388-94fb-e9ba-bef8-b42d70d511bb/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music1/v4/80/65/a3/8065a388-94fb-e9ba-bef8-b42d70d511bb/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2013 Fuck Buttons under exclusive license to ATP Recordings","country":"USA","currency":"USD","releaseDate":"2013-07-23T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":100546166,"collectionId":460417889,"amgArtistId":760657,"artistName":"The Field","collectionName":"Looping State of Mind","collectionCensoredName":"Looping State of Mind","artistViewUrl":"https://itunes.apple.com/us/artist/the-field/id100546166?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/looping-state-of-mind/id460417889?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/d8/40/33/d84033d8-5f69-2e18-a914-90587a82f547/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/d8/40/33/d84033d8-5f69-2e18-a914-90587a82f547/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":7,"copyright":"℗ 2011 Kompakt","country":"USA","currency":"USD","releaseDate":"2011-09-05T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":514361724,"collectionId":931563362,"amgArtistId":2580759,"artistName":"Father John Misty","collectionName":"I Love You, Honeybear","collectionCensoredName":"I Love You, Honeybear","artistViewUrl":"https://itunes.apple.com/us/artist/father-john-misty/id514361724?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/i-love-you-honeybear/id931563362?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music5/v4/ef/fa/88/effa8845-544d-1770-4962-cf6ce4bb5da5/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music5/v4/ef/fa/88/effa8845-544d-1770-4962-cf6ce4bb5da5/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2015 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2015-02-10T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":321076707,"collectionId":412978341,"amgArtistId":1179759,"artistName":"Smith Westerns","collectionName":"Dye It Blonde","collectionCensoredName":"Dye It Blonde","artistViewUrl":"https://itunes.apple.com/us/artist/smith-westerns/id321076707?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/dye-it-blonde/id412978341?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/60/22/c9/6022c9ac-2336-4fa5-808e-de946778f418/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/60/22/c9/6022c9ac-2336-4fa5-808e-de946778f418/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ Fat Possum Records","country":"USA","currency":"USD","releaseDate":"2011-01-18T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":210056561,"collectionId":1027498475,"amgArtistId":732627,"artistName":"Deerhunter","collectionName":"Fading Frontier","collectionCensoredName":"Fading Frontier","artistViewUrl":"https://itunes.apple.com/us/artist/deerhunter/id210056561?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/fading-frontier/id1027498475?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music69/v4/bd/ea/04/bdea0459-96ee-9d69-f9f1-8dee75864335/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music69/v4/bd/ea/04/bdea0459-96ee-9d69-f9f1-8dee75864335/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2015 4AD","country":"USA","currency":"USD","releaseDate":"2015-10-16T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":2715720,"collectionId":662392801,"amgArtistId":353484,"artistName":"Kanye West","collectionName":"Yeezus","collectionCensoredName":"Yeezus","artistViewUrl":"https://itunes.apple.com/us/artist/kanye-west/id2715720?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/yeezus/id662392801?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/7b/98/80/7b9880bd-7fb3-7ac9-772e-4b57c6839c52/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/7b/98/80/7b9880bd-7fb3-7ac9-772e-4b57c6839c52/source/100x100bb.jpg","collectionPrice":11.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":10,"copyright":"℗ 2013 Def Jam Recordings, a division of UMG Recordings, Inc.","country":"USA","currency":"USD","releaseDate":"2013-06-18T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":120737020,"collectionId":553280519,"amgArtistId":822087,"artistName":"Flying Lotus","collectionName":"Until the Quiet Comes","collectionCensoredName":"Until the Quiet Comes","artistViewUrl":"https://itunes.apple.com/us/artist/flying-lotus/id120737020?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/until-the-quiet-comes/id553280519?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/10/a9/92/10a99249-d3e8-2da8-a70c-bdac92a88f5f/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/10/a9/92/10a99249-d3e8-2da8-a70c-bdac92a88f5f/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":18,"copyright":"℗ 2012 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2012-10-01T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":398128,"collectionId":598391518,"amgArtistId":373055,"artistName":"Justin Timberlake","collectionName":"The 20/20 Experience","collectionCensoredName":"The 20/20 Experience","artistViewUrl":"https://itunes.apple.com/us/artist/justin-timberlake/id398128?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-20-20-experience/id598391518?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/9f/0c/e6/9f0ce6d5-8682-284f-8d7d-1bd9dcd3ad0d/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/9f/0c/e6/9f0ce6d5-8682-284f-8d7d-1bd9dcd3ad0d/source/100x100bb.jpg","collectionPrice":10.99,"collectionExplicitness":"cleaned","contentAdvisoryRating":"Clean","trackCount":11,"copyright":"℗ 2013 RCA Records, a division of Sony Music Entertainment","country":"USA","currency":"USD","releaseDate":"2013-03-19T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":2989314,"collectionId":641229267,"amgArtistId":224179,"artistName":"Boards of Canada","collectionName":"Tomorrow's Harvest","collectionCensoredName":"Tomorrow's Harvest","artistViewUrl":"https://itunes.apple.com/us/artist/boards-of-canada/id2989314?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/tomorrows-harvest/id641229267?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music2/v4/6e/05/c5/6e05c546-d9fd-79f2-4fc2-bd08638267ec/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music2/v4/6e/05/c5/6e05c546-d9fd-79f2-4fc2-bd08638267ec/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":18,"copyright":"℗ 2013 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2013-06-10T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":570708990,"collectionId":848813886,"amgArtistId":2734137,"artistName":"Parquet Courts","collectionName":"Sunbathing Animal","collectionCensoredName":"Sunbathing Animal","artistViewUrl":"https://itunes.apple.com/us/artist/parquet-courts/id570708990?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sunbathing-animal/id848813886?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/d0/18/9e/d0189e19-d8a5-77dc-111c-9b6fef9760d2/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/d0/18/9e/d0189e19-d8a5-77dc-111c-9b6fef9760d2/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2014 What's Your Rupture? / Mom and Pop","country":"USA","currency":"USD","releaseDate":"2014-06-03T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":474544299,"collectionId":1063485786,"amgArtistId":2917326,"artistName":"Archy Marshall","collectionName":"A New Place 2 Drown","collectionCensoredName":"A New Place 2 Drown","artistViewUrl":"https://itunes.apple.com/us/artist/archy-marshall/id474544299?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/a-new-place-2-drown/id1063485786?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music7/v4/f0/3f/79/f03f7935-100f-b96b-8c25-651673dffdb7/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music7/v4/f0/3f/79/f03f7935-100f-b96b-8c25-651673dffdb7/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2015 True Panther","country":"USA","currency":"USD","releaseDate":"2015-12-10T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":212373640,"collectionId":928753229,"amgArtistId":791610,"artistName":"A Sunny Day In Glasgow","collectionName":"Sea When Absent","collectionCensoredName":"Sea When Absent","artistViewUrl":"https://itunes.apple.com/us/artist/a-sunny-day-in-glasgow/id212373640?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sea-when-absent/id928753229?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music1/v4/ae/ab/c7/aeabc716-795c-23be-a48a-041c6bf77d32/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music1/v4/ae/ab/c7/aeabc716-795c-23be-a48a-041c6bf77d32/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2014 Lefse Records","country":"USA","currency":"USD","releaseDate":"2014-10-07T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":186406961,"collectionId":843666402,"amgArtistId":595630,"artistName":"Ben Frost","collectionName":"A U R O R A","collectionCensoredName":"A U R O R A","artistViewUrl":"https://itunes.apple.com/us/artist/ben-frost/id186406961?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/a-u-r-o-r-a/id843666402?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music4/v4/56/4d/2f/564d2f72-94fc-b5b1-f0d1-4d99e4927be9/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music4/v4/56/4d/2f/564d2f72-94fc-b5b1-f0d1-4d99e4927be9/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2014 Bedroom Community Under Exclusive License To Mute Artists Limited","country":"USA","currency":"USD","releaseDate":"2014-05-27T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":377952839,"collectionId":796039691,"amgArtistId":2061682,"artistName":"Cloud Nothings","collectionName":"Here and Nowhere Else","collectionCensoredName":"Here and Nowhere Else","artistViewUrl":"https://itunes.apple.com/us/artist/cloud-nothings/id377952839?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/here-and-nowhere-else/id796039691?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music6/v4/3e/3a/74/3e3a74f7-b069-bf39-ef66-0e2518dd51f4/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music6/v4/3e/3a/74/3e3a74f7-b069-bf39-ef66-0e2518dd51f4/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2014 Carpark Records / Mom + Pop","country":"USA","currency":"USD","releaseDate":"2014-04-01T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":303296550,"collectionId":1060838431,"amgArtistId":1141856,"artistName":"Jeremih","collectionName":"Late Nights","collectionCensoredName":"Late Nights","artistViewUrl":"https://itunes.apple.com/us/artist/jeremih/id303296550?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/late-nights/id1060838431?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music69/v4/11/d9/f1/11d9f1fa-6b5f-3e6b-44da-fbbcf1f8d91e/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music69/v4/11/d9/f1/11d9f1fa-6b5f-3e6b-44da-fbbcf1f8d91e/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":15,"copyright":"℗ 2015 Def Jam Recordings, a division of UMG Recordings, Inc.","country":"USA","currency":"USD","releaseDate":"2015-12-04T08:00:00Z","primaryGenreName":"R&B/Soul"},{"wrapperType":"collection","collectionType":"Album","artistId":51277889,"collectionId":950791947,"amgArtistId":652968,"artistName":"YACHT","collectionName":"See Mystery Lights","collectionCensoredName":"See Mystery Lights","artistViewUrl":"https://itunes.apple.com/us/artist/yacht/id51277889?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/see-mystery-lights/id950791947?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music5/v4/9d/53/4d/9d534d6d-9520-9e24-53df-db8fea6e004a/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music5/v4/9d/53/4d/9d534d6d-9520-9e24-53df-db8fea6e004a/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2009 DFA LLC","country":"USA","currency":"USD","releaseDate":"2009-07-28T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":295015,"collectionId":960042103,"amgArtistId":27211,"artistName":"Björk","collectionName":"Vulnicura","collectionCensoredName":"Vulnicura","artistViewUrl":"https://itunes.apple.com/us/artist/bjork/id295015?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/vulnicura/id960042103?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music3/v4/e0/c1/46/e0c146b4-da78-229d-242a-244dc2e87b1f/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music3/v4/e0/c1/46/e0c146b4-da78-229d-242a-244dc2e87b1f/source/100x100bb.jpg","collectionPrice":10.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2015 One Little Indian","country":"USA","currency":"USD","releaseDate":"2015-01-20T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":202810881,"collectionId":328452563,"amgArtistId":857148,"artistName":"Wild Beasts","collectionName":"Two Dancers","collectionCensoredName":"Two Dancers","artistViewUrl":"https://itunes.apple.com/us/artist/wild-beasts/id202810881?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/two-dancers/id328452563?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/80/c8/ac/80c8ac0a-7dcf-448e-642d-8a3ed6b3c597/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/80/c8/ac/80c8ac0a-7dcf-448e-642d-8a3ed6b3c597/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2009 Domino Recording Co. LTD","country":"USA","currency":"USD","releaseDate":"2009-09-08T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":100546166,"collectionId":703437625,"amgArtistId":760657,"artistName":"The Field","collectionName":"Cupid's Head","collectionCensoredName":"Cupid's Head","artistViewUrl":"https://itunes.apple.com/us/artist/the-field/id100546166?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cupids-head/id703437625?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/41/88/24/418824a4-15e3-3135-eb76-804793bd1212/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/41/88/24/418824a4-15e3-3135-eb76-804793bd1212/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"notExplicit","trackCount":6,"copyright":"℗ 2013 Kompakt","country":"USA","currency":"USD","releaseDate":"2013-09-30T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":499450846,"collectionId":499450844,"amgArtistId":2546620,"artistName":"Pallbearer","collectionName":"Sorrow and Extinction","collectionCensoredName":"Sorrow and Extinction","artistViewUrl":"https://itunes.apple.com/us/artist/pallbearer/id499450846?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sorrow-and-extinction/id499450844?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/dd/8b/78/dd8b787e-0983-dc2b-c1ba-4c67792ce014/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/dd/8b/78/dd8b787e-0983-dc2b-c1ba-4c67792ce014/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":5,"copyright":"℗ 2012 Profound Lore","country":"USA","currency":"USD","releaseDate":"2012-02-21T08:00:00Z","primaryGenreName":"Rock"},{"wrapperType":"collection","collectionType":"Album","artistId":457870121,"collectionId":604113839,"artistName":"Youth Lagoon","collectionName":"Wondrous Bughouse","collectionCensoredName":"Wondrous Bughouse","artistViewUrl":"https://itunes.apple.com/us/artist/youth-lagoon/id457870121?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/wondrous-bughouse/id604113839?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/5e/ab/b8/5eabb802-8b71-5e49-a0a7-e120dc20340d/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/5e/ab/b8/5eabb802-8b71-5e49-a0a7-e120dc20340d/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2013 Fat Possum Records","country":"USA","currency":"USD","releaseDate":"2013-03-05T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":39883194,"collectionId":911319255,"amgArtistId":43296,"artistName":"Aphex Twin","collectionName":"Syro","collectionCensoredName":"Syro","artistViewUrl":"https://itunes.apple.com/us/artist/aphex-twin/id39883194?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/syro/id911319255?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music1/v4/82/ca/51/82ca51ea-c625-5cbb-2ab1-a4252f3cd561/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music1/v4/82/ca/51/82ca51ea-c625-5cbb-2ab1-a4252f3cd561/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":13,"copyright":"℗ 2014 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2014-09-22T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":282078681,"collectionId":765568650,"amgArtistId":1055324,"artistName":"The War on Drugs","collectionName":"Lost in the Dream","collectionCensoredName":"Lost in the Dream","artistViewUrl":"https://itunes.apple.com/us/artist/the-war-on-drugs/id282078681?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/lost-in-the-dream/id765568650?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/d8/4c/94/d84c9481-9f5c-80b9-4f1d-74d1451751c1/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/d8/4c/94/d84c9481-9f5c-80b9-4f1d-74d1451751c1/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2014 Secretly Canadian","country":"USA","currency":"USD","releaseDate":"2014-03-18T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":20838226,"collectionId":714705385,"amgArtistId":556863,"artistName":"The Radio Dept.","collectionName":"Clinging to a Scheme","collectionCensoredName":"Clinging to a Scheme","artistViewUrl":"https://itunes.apple.com/us/artist/the-radio-dept./id20838226?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/clinging-to-a-scheme/id714705385?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music4/v4/27/9d/15/279d150e-0df0-9865-155b-795801e7d5a5/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music4/v4/27/9d/15/279d150e-0df0-9865-155b-795801e7d5a5/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2010 Labrador","country":"USA","currency":"USD","releaseDate":"2010-04-20T07:00:00Z","primaryGenreName":"Pop"},{"wrapperType":"collection","collectionType":"Album","artistId":120737020,"collectionId":908342744,"amgArtistId":822087,"artistName":"Flying Lotus","collectionName":"You're Dead!","collectionCensoredName":"You're Dead!","artistViewUrl":"https://itunes.apple.com/us/artist/flying-lotus/id120737020?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/youre-dead!/id908342744?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music4/v4/56/73/cd/5673cd7b-0030-725e-4d1b-f8ccc191d640/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music4/v4/56/73/cd/5673cd7b-0030-725e-4d1b-f8ccc191d640/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":19,"copyright":"℗ 2014 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2014-10-06T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":703784,"collectionId":883793887,"amgArtistId":127525,"artistName":"Spoon","collectionName":"They Want My Soul","collectionCensoredName":"They Want My Soul","artistViewUrl":"https://itunes.apple.com/us/artist/spoon/id703784?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/they-want-my-soul/id883793887?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music7/v4/b1/04/f0/b104f0bb-b741-f277-e1d0-7cef6a561561/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music7/v4/b1/04/f0/b104f0bb-b741-f277-e1d0-7cef6a561561/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2014 Headz Under exclusive license to Seven Four Entertainment, LLC/Republic Records, a Division of UMG Recordings, Inc. (Loma Vista Recordings).","country":"USA","currency":"USD","releaseDate":"2014-08-05T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":81886939,"collectionId":986011611,"amgArtistId":788504,"artistName":"Young Thug","collectionName":"Barter 6","collectionCensoredName":"Barter 6","artistViewUrl":"https://itunes.apple.com/us/artist/young-thug/id81886939?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/barter-6/id986011611?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music7/v4/57/0e/74/570e7400-01cb-494c-d0dc-dc1358ff343a/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music7/v4/57/0e/74/570e7400-01cb-494c-d0dc-dc1358ff343a/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":13,"copyright":"℗ 2015 300 Entertainment / Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States.  A Warner Music Group Company","country":"USA","currency":"USD","releaseDate":"2015-04-16T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":120737020,"collectionId":367788829,"amgArtistId":822087,"artistName":"Flying Lotus","collectionName":"Cosmogramma","collectionCensoredName":"Cosmogramma","artistViewUrl":"https://itunes.apple.com/us/artist/flying-lotus/id120737020?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cosmogramma/id367788829?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/ef/ee/f3/efeef3c8-61bf-ddbe-645d-dc811ac16afa/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/ef/ee/f3/efeef3c8-61bf-ddbe-645d-dc811ac16afa/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":17,"copyright":"℗ 2010 Warp Records Limited","country":"USA","currency":"USD","releaseDate":"2010-05-03T07:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":73149328,"collectionId":508606137,"amgArtistId":848226,"artistName":"Mount Eerie","collectionName":"Clear Moon","collectionCensoredName":"Clear Moon","artistViewUrl":"https://itunes.apple.com/us/artist/mount-eerie/id73149328?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/clear-moon/id508606137?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/4d/10/a6/4d10a664-d821-1508-4f37-8ccfd1fe87d3/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/4d/10/a6/4d10a664-d821-1508-4f37-8ccfd1fe87d3/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2012 P.W. Elverum & Sun","country":"USA","currency":"USD","releaseDate":"2012-05-22T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":271256,"collectionId":966997496,"amgArtistId":905792,"artistName":"Drake","collectionName":"If You're Reading This It's Too Late","collectionCensoredName":"If You're Reading This It's Too Late","artistViewUrl":"https://itunes.apple.com/us/artist/drake/id271256?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/if-youre-reading-this-its/id966997496?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music3/v4/ff/e3/8b/ffe38bc5-3ad5-3da5-1089-b467770ab617/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music3/v4/ff/e3/8b/ffe38bc5-3ad5-3da5-1089-b467770ab617/source/100x100bb.jpg","collectionPrice":6.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":17,"copyright":"℗ 2015 Cash Money Records Inc.","country":"USA","currency":"USD","releaseDate":"2015-02-13T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":2756920,"collectionId":1051022913,"amgArtistId":82407,"artistName":"Grimes","collectionName":"Art Angels","collectionCensoredName":"Art Angels","artistViewUrl":"https://itunes.apple.com/us/artist/grimes/id2756920?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/art-angels/id1051022913?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music6/v4/b1/3b/aa/b13baa39-5948-c432-8070-3aff64383f2c/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music6/v4/b1/3b/aa/b13baa39-5948-c432-8070-3aff64383f2c/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":14,"copyright":"℗ 2015 4AD","country":"USA","currency":"USD","releaseDate":"2015-11-06T08:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":200823564,"collectionId":997913392,"amgArtistId":821440,"artistName":"Beach House","collectionName":"Depression Cherry","collectionCensoredName":"Depression Cherry","artistViewUrl":"https://itunes.apple.com/us/artist/beach-house/id200823564?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/depression-cherry/id997913392?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music7/v4/6c/94/78/6c9478f3-726b-96cc-6413-489f79de5d1f/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music7/v4/6c/94/78/6c9478f3-726b-96cc-6413-489f79de5d1f/source/100x100bb.jpg","collectionPrice":8.99,"collectionExplicitness":"notExplicit","trackCount":10,"copyright":"℗ 2015 Sub Pop Records","country":"USA","currency":"USD","releaseDate":"2015-08-28T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":437819641,"collectionId":791628884,"amgArtistId":2444286,"artistName":"Death Grips","collectionName":"Government Plates","collectionCensoredName":"Government Plates","artistViewUrl":"https://itunes.apple.com/us/artist/death-grips/id437819641?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/government-plates/id791628884?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music6/v4/84/34/c1/8434c1e4-23b9-ccec-dd15-e729bf53e397/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music6/v4/84/34/c1/8434c1e4-23b9-ccec-dd15-e729bf53e397/source/100x100bb.jpg","collectionPrice":6.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":11,"copyright":"℗ 2014 Third Worlds, LLC Under Exclusive License To Harvest Records","country":"USA","currency":"USD","releaseDate":"2014-01-14T08:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":368183298,"collectionId":974187289,"amgArtistId":2412704,"artistName":"Kendrick Lamar","collectionName":"To Pimp a Butterfly","collectionCensoredName":"To Pimp a Butterfly","artistViewUrl":"https://itunes.apple.com/us/artist/kendrick-lamar/id368183298?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/to-pimp-a-butterfly/id974187289?uo=4","artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music1/v4/dc/1d/80/dc1d8084-4240-606c-27d9-6eb0927c3839/source/60x60bb.jpg","artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music1/v4/dc/1d/80/dc1d8084-4240-606c-27d9-6eb0927c3839/source/100x100bb.jpg","collectionPrice":7.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":17,"copyright":"℗ 2015 Aftermath/Interscope (Top Dawg Entertainment)","country":"USA","currency":"USD","releaseDate":"2015-03-16T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":540112627,"collectionId":579417867,"amgArtistId":2642420,"artistName":"Foxygen","collectionName":"We Are the 21st Century Ambassadors of Peace & Magic","collectionCensoredName":"We Are the 21st Century Ambassadors of Peace & Magic","artistViewUrl":"https://itunes.apple.com/us/artist/foxygen/id540112627?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/we-are-21st-century-ambassadors/id579417867?uo=4","artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/ad/e0/91/ade091c9-2afa-7522-a661-8080debe64bf/source/60x60bb.jpg","artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/ad/e0/91/ade091c9-2afa-7522-a661-8080debe64bf/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":9,"copyright":"℗ 2013 Jagjaguwar","country":"USA","currency":"USD","releaseDate":"2013-01-22T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":367322286,"collectionId":1008950960,"amgArtistId":2127533,"artistName":"Thundercat","collectionName":"The Beyond / Where the Giants Roam","collectionCensoredName":"The Beyond / Where the Giants Roam","artistViewUrl":"https://itunes.apple.com/us/artist/thundercat/id367322286?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/beyond-where-giants-roam/id1008950960?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music1/v4/2b/6f/30/2b6f3011-5e9e-385f-051f-f4c2849e870e/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music1/v4/2b/6f/30/2b6f3011-5e9e-385f-051f-f4c2849e870e/source/100x100bb.jpg","collectionPrice":7.74,"collectionExplicitness":"notExplicit","trackCount":6,"copyright":"℗ 2015 Brainfeeder","country":"USA","currency":"USD","releaseDate":"2015-06-22T07:00:00Z","primaryGenreName":"R&B/Soul"},{"wrapperType":"collection","collectionType":"Album","artistId":338172312,"collectionId":1035616150,"amgArtistId":1185195,"artistName":"Oneohtrix Point Never","collectionName":"Garden of Delete","collectionCensoredName":"Garden of Delete","artistViewUrl":"https://itunes.apple.com/us/artist/oneohtrix-point-never/id338172312?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/garden-of-delete/id1035616150?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music49/v4/36/48/c3/3648c3ac-0467-ae34-3d2f-656596f5a536/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music49/v4/36/48/c3/3648c3ac-0467-ae34-3d2f-656596f5a536/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":12,"copyright":"℗ 2015 Warp Records","country":"USA","currency":"USD","releaseDate":"2015-11-13T08:00:00Z","primaryGenreName":"Electronic"},{"wrapperType":"collection","collectionType":"Album","artistId":428125326,"collectionId":587434599,"amgArtistId":746382,"artistName":"Grouper","collectionName":"The Man Who Died In His Boat","collectionCensoredName":"The Man Who Died In His Boat","artistViewUrl":"https://itunes.apple.com/us/artist/grouper/id428125326?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/the-man-who-died-in-his-boat/id587434599?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/09/c4/3c/09c43c6d-c6c9-536a-eb25-2d6b95c34c1b/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/09/c4/3c/09c43c6d-c6c9-536a-eb25-2d6b95c34c1b/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2013 kranky","country":"USA","currency":"USD","releaseDate":"2013-02-04T08:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":310972126,"collectionId":527058833,"amgArtistId":1136621,"artistName":"Japandroids","collectionName":"Celebration Rock","collectionCensoredName":"Celebration Rock","artistViewUrl":"https://itunes.apple.com/us/artist/japandroids/id310972126?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/celebration-rock/id527058833?uo=4","artworkUrl60":"http://is1.mzstatic.com/image/thumb/Music/v4/70/fa/42/70fa42cf-5a22-e301-20b4-ecffea152211/source/60x60bb.jpg","artworkUrl100":"http://is1.mzstatic.com/image/thumb/Music/v4/70/fa/42/70fa42cf-5a22-e301-20b4-ecffea152211/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":8,"copyright":"℗ 2012 Polyvinyl Record Co.","country":"USA","currency":"USD","releaseDate":"2012-06-05T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":459702,"collectionId":512239506,"amgArtistId":22718,"artistName":"Spiritualized","collectionName":"Sweet Heart Sweet Light","collectionCensoredName":"Sweet Heart Sweet Light","artistViewUrl":"https://itunes.apple.com/us/artist/spiritualized/id459702?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/sweet-heart-sweet-light/id512239506?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/23/17/37/231737a6-400b-6895-c877-1f5bbb6802a0/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/23/17/37/231737a6-400b-6895-c877-1f5bbb6802a0/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"notExplicit","trackCount":11,"copyright":"℗ 2012 Fat Possum Records","country":"USA","currency":"USD","releaseDate":"2012-04-17T07:00:00Z","primaryGenreName":"Alternative"},{"wrapperType":"collection","collectionType":"Album","artistId":3567934,"collectionId":520430291,"amgArtistId":379502,"artistName":"EL-P","collectionName":"Cancer 4 Cure","collectionCensoredName":"Cancer 4 Cure","artistViewUrl":"https://itunes.apple.com/us/artist/el-p/id3567934?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/cancer-4-cure/id520430291?uo=4","artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/5b/28/02/5b2802be-16b0-43ec-f4a6-c39cd53c7ce5/source/60x60bb.jpg","artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/5b/28/02/5b2802be-16b0-43ec-f4a6-c39cd53c7ce5/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":12,"copyright":"℗ 2012 Fat Possum Records","country":"USA","currency":"USD","releaseDate":"2012-05-22T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"},{"wrapperType":"collection","collectionType":"Album","artistId":1320637,"collectionId":524296592,"amgArtistId":471031,"artistName":"Killer Mike","collectionName":"R.A.P. Music","collectionCensoredName":"R.A.P. Music","artistViewUrl":"https://itunes.apple.com/us/artist/killer-mike/id1320637?uo=4","collectionViewUrl":"https://itunes.apple.com/us/album/r.a.p.-music/id524296592?uo=4","artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/38/17/e5/3817e586-6d01-6f77-32cb-e69f2f3db93f/source/60x60bb.jpg","artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/38/17/e5/3817e586-6d01-6f77-32cb-e69f2f3db93f/source/100x100bb.jpg","collectionPrice":9.99,"collectionExplicitness":"explicit","contentAdvisoryRating":"Explicit","trackCount":12,"copyright":"℗ 2012 Williams Street Records","country":"USA","currency":"USD","releaseDate":"2012-05-15T07:00:00Z","primaryGenreName":"Hip-Hop/Rap"}];exports.default=x;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(70);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(54);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _reactRedux = __webpack_require__(49);
	
	var _reactRouter = __webpack_require__(63);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Root = (function (_React$Component) {
	  (0, _inherits3.default)(Root, _React$Component);
	
	  function Root() {
	    (0, _classCallCheck3.default)(this, Root);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Root).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Root, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        _reactRedux.Provider,
	        { store: this.props.store },
	        React.createElement(
	          'div',
	          { style: { height: '100%' } },
	          this.content,
	          this.devTools
	        )
	      );
	    }
	  }, {
	    key: 'content',
	    get: function get() {
	      return React.createElement(
	        _reactRouter.Router,
	        { history: this.props.history },
	        this.props.routes
	      );
	    }
	  }, {
	    key: 'devTools',
	    get: function get() {
	      if (true) {
	        if (false) {
	          if (!window.devToolsExtension) {
	            require('../redux/utils/createDevToolsWindow').default(this.props.store);
	          } else {
	            window.devToolsExtension.open();
	          }
	        } else if (!window.devToolsExtension) {
	          var DevTools = __webpack_require__(143).default;
	          return React.createElement(DevTools, null);
	        }
	      }
	    }
	  }]);
	  return Root;
	})(React.Component);
	
	Root.propTypes = {
	  history: React.PropTypes.object.isRequired,
	  routes: React.PropTypes.element.isRequired,
	  store: React.PropTypes.object.isRequired
	};
	exports.default = Root;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(608);
	
	// Note: Stateless/function components *will not* hot reload!
	// react-transform *only* works on component classes.
	//
	// Since layouts rarely change, they are a good place to
	// leverage React's new Statelesss Functions:
	// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
	//
	// CoreLayout is a pure function of it's props, so we can
	// define it with a plain javascript function...
	function CoreLayout(_ref) {
	  var children = _ref.children;
	
	  return React.createElement(
	    'div',
	    { className: 'page-container' },
	    React.createElement(
	      'div',
	      { className: 'view-container' },
	      children
	    )
	  );
	}
	
	CoreLayout.propTypes = {
	  children: React.PropTypes.element
	};
	
	exports.default = CoreLayout;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ReactDOM, React) {'use strict';
	
	var _createBrowserHistory = __webpack_require__(176);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _reduxSimpleRouter = __webpack_require__(142);
	
	var _routes = __webpack_require__(257);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _Root = __webpack_require__(251);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _configureStore = __webpack_require__(254);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var history = (0, _createBrowserHistory2.default)();
	var store = (0, _configureStore2.default)(window.__INITIAL_STATE__);
	
	(0, _reduxSimpleRouter.syncReduxAndRouter)(history, store, function (state) {
	  return state.router;
	});
	
	// Render the React application to the DOM
	ReactDOM.render(React.createElement(_Root2.default, { history: history, routes: _routes2.default, store: store }), document.getElementById('root'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34), __webpack_require__(1)))

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;
	
	var _reduxThunk = __webpack_require__(602);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _rootReducer = __webpack_require__(256);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	var _redux = __webpack_require__(95);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore(initialState) {
	  var createStoreWithMiddleware = undefined;
	  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
	
	  if (true) {
	    createStoreWithMiddleware = (0, _redux.compose)(middleware, window.devToolsExtension ? window.devToolsExtension() : __webpack_require__(143).default.instrument());
	  } else {
	    createStoreWithMiddleware = (0, _redux.compose)(middleware);
	  }
	
	  var store = createStoreWithMiddleware(_redux.createStore)(_rootReducer2.default, initialState);
	  if (false) {
	    module.hot.accept('./rootReducer', function () {
	      var nextRootReducer = require('./rootReducer').default;
	
	      store.replaceReducer(nextRootReducer);
	    });
	  }
	  return store;
	}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.doubleAsync = exports.increment = exports.COUNTER_INCREMENT = undefined;
	
	var _defineProperty2 = __webpack_require__(69);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _reduxActions = __webpack_require__(68);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	var increment = exports.increment = (0, _reduxActions.createAction)(COUNTER_INCREMENT, function () {
	  var value = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	  return value;
	});
	
	// This is a thunk, meaning it is a function that immediately
	// returns a function for lazy evaluation. It is incredibly useful for
	// creating async actions, especially when combined with redux-thunk!
	// NOTE: This is solely for demonstration purposes. In a real application,
	// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
	// reducer take care of this logic.
	var doubleAsync = exports.doubleAsync = function doubleAsync() {
	  return function (dispatch, getState) {
	    setTimeout(function () {
	      dispatch(increment(getState().counter));
	    }, 1000);
	  };
	};
	
	var actions = exports.actions = {
	  increment: increment,
	  doubleAsync: doubleAsync
	};
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, COUNTER_INCREMENT, function (state, _ref) {
	  var payload = _ref.payload;
	  return state + payload;
	}), 1);

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(95);
	
	var _reduxSimpleRouter = __webpack_require__(142);
	
	var _counter = __webpack_require__(255);
	
	var _counter2 = _interopRequireDefault(_counter);
	
	var _tracks = __webpack_require__(146);
	
	var _tracks2 = _interopRequireDefault(_tracks);
	
	var _albums = __webpack_require__(144);
	
	var _albums2 = _interopRequireDefault(_albums);
	
	var _main = __webpack_require__(145);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _redux.combineReducers)({
	    main: _main2.default,
	    albums: _albums2.default,
	    tracks: _tracks2.default,
	    counter: _counter2.default,
	    router: _reduxSimpleRouter.routeReducer
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRouter = __webpack_require__(63);
	
	var _CoreLayout = __webpack_require__(252);
	
	var _CoreLayout2 = _interopRequireDefault(_CoreLayout);
	
	var _MainView = __webpack_require__(259);
	
	var _MainView2 = _interopRequireDefault(_MainView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// NOTE: here we're making use of the `resolve.root` configuration
	// option in webpack, which allows us to specify import paths as if
	// they were from the root of the ~/src directory. This makes it
	// very easy to navigate to files regardless of how deeply nested
	// your current file is.
	exports.default = React.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _CoreLayout2.default },
	  React.createElement(_reactRouter.IndexRoute, { component: _MainView2.default }),
	  React.createElement(_reactRouter.Route, { path: '/albi/', component: _MainView2.default })
	);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
				value: true
	});
	exports.AlbumView = undefined;
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(70);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(54);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _reactRedux = __webpack_require__(49);
	
	var _reactRouter = __webpack_require__(63);
	
	var _albums = __webpack_require__(144);
	
	var _postpitch = __webpack_require__(250);
	
	var _postpitch2 = _interopRequireDefault(_postpitch);
	
	var _AlbumsView = __webpack_require__(249);
	
	var _AlbumsView2 = _interopRequireDefault(_AlbumsView);
	
	var _gridList = __webpack_require__(443);
	
	var _gridList2 = _interopRequireDefault(_gridList);
	
	var _gridTile = __webpack_require__(444);
	
	var _gridTile2 = _interopRequireDefault(_gridTile);
	
	var _appBar = __webpack_require__(440);
	
	var _appBar2 = _interopRequireDefault(_appBar);
	
	var _iconButton = __webpack_require__(115);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _search = __webpack_require__(455);
	
	var _search2 = _interopRequireDefault(_search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// We define mapStateToProps where we'd normally use
	// the @connect decorator so the data requirements are clear upfront, but then
	// export the decorated component after the main class definition so
	// the component can be tested w/ and w/o being connected.
	// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
	var mapStateToProps = function mapStateToProps(state) {
				return {
							albums: state.albums
				};
	};
	
	var AlbumView = exports.AlbumView = (function (_React$Component) {
				(0, _inherits3.default)(AlbumView, _React$Component);
	
				function AlbumView(props, context) {
							(0, _classCallCheck3.default)(this, AlbumView);
	
							var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AlbumView).call(this, props, context));
	
							_this.state = {
										text: _this.props.location.query.term || ''
							};
							return _this;
				}
	
				(0, _createClass3.default)(AlbumView, [{
							key: 'refetch',
							value: function refetch(props) {
										return;
	
										var props = props || this.props;
										var term = props.location.query.term;
	
										this.props.fetchAsync(term);
							}
				}, {
							key: 'componentDidMount',
							value: function componentDidMount() {
										this.refetch.bind(this)();
							}
				}, {
							key: 'componentWillUpdate',
							value: function componentWillUpdate(nprops) {
										console.log('Jaar component updated', nprops.location.query, this.props.location.query);
										if (nprops.location.query !== this.props.location.query) {
													this.refetch.bind(this)(nprops);
										}
							}
				}, {
							key: 'search',
							value: function search(e) {
										if (e.key === 'Enter') {
													this.setState({ text: this.refs.input.value });
													this.props.history.pushState(null, location.pathname, { term: this.refs.input.value });
										}
							}
				}, {
							key: 'change',
							value: function change(e) {
										this.setState({ text: this.refs.input.value });
							}
				}, {
							key: 'chooseAlbum',
							value: function chooseAlbum(album) {
										this.props.history.pushState(null, location.pathname, { album: album.collectionName, artist: album.artistName });
							}
				}, {
							key: 'componentDidMount',
							value: function componentDidMount() {
										this.refetch.bind(this)();
							}
				}, {
							key: 'render',
							value: function render() {
										var _this2 = this;
	
										console.log('rendering album view', this.props, this.state, _postpitch2.default.length);
										var squares = _postpitch2.default.sort(function (a, b) {
													return new Date(b.releaseDate) - new Date(a.releaseDate);
										}).map(function (r) {
													var cyear = new Date(r.releaseDate).getFullYear();
													return React.createElement(
																_gridTile2.default,
																{ onClick: _this2.chooseAlbum.bind(_this2, r), title: r.collectionName, subtitle: r.artistName },
																React.createElement('img', { src: r.artworkUrl100.replace('100x100', '200x200') }),
																React.createElement(
																			'div',
																			{ className: _AlbumsView2.default['year'] },
																			cyear
																)
													);
										});
	
										return React.createElement(
													'div',
													{ className: '', style: { width: 350, height: window.innerHeight - 320, overflow: 'auto' } },
													React.createElement(_appBar2.default, {
																title: 'Albi',
																iconElementLeft: React.createElement(
																			_iconButton2.default,
																			null,
																			React.createElement(_search2.default, null)
																),
																iconClassNameRight: 'muidocs-icon-navigation-expand-more'
													}),
													React.createElement('div', null),
													React.createElement(
																'div',
																{ className: 'albums' },
																React.createElement(
																			_gridList2.default,
																			{ cellHeight: 160,
																						style: { width: 320, height: 640, overflowY: 'auto' } },
																			squares ? squares : 'loading..'
																)
													)
										);
	
										return React.createElement(
													'div',
													null,
													'Album View'
										);
							}
				}]);
				return AlbumView;
	})(React.Component);
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, _albums.actions)(AlbumView);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MainView = undefined;
	
	var _extends2 = __webpack_require__(47);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(70);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(54);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _keys = __webpack_require__(96);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _promise = __webpack_require__(266);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _reactRedux = __webpack_require__(49);
	
	var _AlbumsView = __webpack_require__(258);
	
	var _AlbumsView2 = _interopRequireDefault(_AlbumsView);
	
	var _TracksView = __webpack_require__(260);
	
	var _TracksView2 = _interopRequireDefault(_TracksView);
	
	var _main = __webpack_require__(145);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.softclean = function (e, t) {
		return e.replace(/\./gim, '').replace(/"/gim, '').replace(/:/gim, '').split('ft')[0].split(' - ')[0];
	};
	
	window.clean = function (e, t) {
		return t ? e ? e.toLowerCase().replace(/"/gim, '').split(' - ')[0].split('ft')[0].replace(/^the\s|\sthe\s|\sand\s| ep$/gim, " ").replace(/part/gim, "pt").replace(RegExp("[^\\p{L}a-zA-Z0-9]", "gim"), "").replace("around", "round").trim(" ") : "" : e ? e.toLowerCase().replace(/^the\s|\sthe\s|\sand\s| ep$/gim, " ").replace(/\(.*?\)/gim, "").replace(/\[.*?\]/gim, "").replace(/part/gim, "pt").replace(RegExp("[^\\p{L}a-zA-Z0-9]", "gim"), "").replace("around", "round").trim(" ") : "";
	};
	
	var fetchFromPipe = function fetchFromPipe(tracks) {
		var hash = [];
	
		var vidreadiez = [];
	
		tracks.forEach(function (trk, trki) {
			if (!trk.name || !trk.artist) {
				console.log('no track name or artists');
				return;
			}
			var cleantrk = window.clean(trk.name);
			if (cleantrk === 'length') {
				return;
			}
			var vidready = null;
			var promise = new _promise2.default(function (resolve) {
				vidready = resolve;
			});
	
			vidreadiez.push(promise);
	
			trk.artist = trk.artist.replace(' / ', ' & ').replace(/&/gim, 'and');
	
			var song = cleantrk.length > 30 ? trk.name : trk.artist.toLowerCase() + ' ' + trk.name.toLowerCase();
			if (window.accurate) {
				song += ' ' + trk.album;
			}
	
			//	    var req = $.getJSON('https://gdata.youtube.com/feeds/api/videos?q=' + encodeURIComponent(song) + '&safeSearch=none&orderby=relevance&max-results=15&v=2&alt=json&callback=?', function(e) {
			var req = fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&max-results=15&key=AIzaSyDmfdow0Soqa6o_Vg-JG2Hcg11Bzrm2Vgk&type=video&q=' + encodeURIComponent(song)).then(function (x) {
				return x.json().then(function (e) {
	
					/*		if (!e.feed.entry || e.feed.entry.length === 0) {
	    //					   console.log('empty. resolving');
	    vidready.resolve();
	    return;
	    }*/
	
					var lessgood = {};
	
					console.log(e);
					e.items.forEach(function (entry, i) {
	
						var cleanYTitle = window.clean(entry.snippet.title);
						var cleanartist = window.clean(trk.artist);
	
						var id = entry.id.videoId;
						var vidobj = {
							order: trki,
							id: id,
							who_shared: 'takashirgb',
							fromindie: true,
							player: 'yt',
							name: trk.name,
							artist: trk.artist,
							albums: trk.album,
							viewCount: 0 };
	
						function nogood(what, score, force) {
							var rwhat = new RegExp(what);
							if ((entry.snippet.title.toLowerCase().match(rwhat) || entry.snippet.description.toLowerCase().match(rwhat)) && !trk.name.toLowerCase().match(rwhat)) {
	
								var already = lessgood[cleantrk];
								if (!already || score > already.s || force) {
									lessgood[cleantrk] = { s: score || 0, o: vidobj };
								}
	
								console.log('its a ' + what, 'srch:', song, 'you said: ', song, 'tube said', cleanYTitle);
								return true;
							}
							return false;
						};
	
						var superclean = window.clean(entry.snippet.title, true).replace(cleantrk, '').replace(cleanartist, '').replace('new', '').replace('album', '').replace('lyrics', '').replace('hd', '').replace(/\d+p/gim, '').replace(window.clean(trk.album), '');
	
						/*    if (superclean.length > 20){
	           console.log('too many guys', 'srch:',
	           song,
	           'you said: ',
	           cleanartist,
	           cleantrk,
	           'tube said',
	           cleanYTitle);
	           return;
	     	      }*/
	
						if (cleanYTitle.indexOf(cleantrk.replace(/s$/gim, '')) === -1) {
							console.log('no title.', 'srch:', 'you said: ', cleantrk, 'tube said', cleanYTitle);
							return;
						}
	
						/*		    if (cleanYTitle.indexOf(cleanartist) === -1) {
	     		    var nothing = true;
	     		    $.each(entry.category,function(i, tag){
	     		    if (window.clean(tag.term).indexOf(cleanartist) !== -1){
	     		    nothing = false;
	     		    }
	     		    });
	     		    
	     		    if (nothing && cleantrk.length < 10) {
	     		    console.log('no artist.', 'srch:',
	     		    song,
	     		    'you said: ',
	     		    cleanartist,
	     		    cleantrk,
	     		    'tube said',
	     		    cleanYTitle);
	     		    return;
	     		    }
	     		    }*/
	
						//nogood('version')
						if (nogood('@ the', 2) || nogood('at the', 1) || nogood('from the basement', 1) || nogood('acoustic', 1) || nogood('thumbs') || nogood('concert') || nogood('explains') || nogood('teaser') || nogood('\\scover') || nogood('remix') || nogood('live', 1) || nogood('perform', 2) || nogood('version', 3) || nogood('philhar') || nogood('\\d{1,2}[\\.-/]\\d{1,2}', 0, true)) {
							return;
						}
	
						/*		    if (entry.media$group.media$content[0].duration < 40) {
	     		    return;
	     		    }
	     */
	
						vidready(vidobj);
						return;
					});
	
					var lesskeys = (0, _keys2.default)(lessgood);
					vidready();
				});
			});
	
			setTimeout(function () {
				vidready();
			}, 5000);
		});
		return vidreadiez;
	};
	
	/*  end fetch from pipes */
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			albums: state.albums,
			tracks: state.tracks
		};
	};
	
	var MainView = exports.MainView = (function (_React$Component) {
		(0, _inherits3.default)(MainView, _React$Component);
	
		function MainView(props, context) {
			(0, _classCallCheck3.default)(this, MainView);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MainView).call(this, props, context));
		}
	
		(0, _createClass3.default)(MainView, [{
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				window.YT = null;
				window.playerobj = null;
			}
		}, {
			key: 'loadApi',
			value: function loadApi(id) {
				console.log('loading api with id', id);
				var that = this;
				if (window.playerobj) {
					window.playerobj.loadVideoById({ videoId: id });
					return;
				}
				var x = document.getElementById('player');
	
				// 2. This code loads the IFrame Player API code asynchronously.
				var tag = document.createElement('script');
	
				tag.src = "https://www.youtube.com/iframe_api";
				document.getElementsByTagName("head")[0].appendChild(tag);
	
				// 3. This function creates an <iframe> (and YouTube player)
				//    after the API code downloads.
				window.onYouTubeIframeAPIReady = function () {
					console.log('api ready');
					window.playerobj = new YT.Player('player', {
						playerVars: { 'autoplay': 1 },
						width: 320,
						height: 320,
						'videoId': id,
						events: {
							'onReady': onPlayerReady,
							'onStateChange': onPlayerStateChange,
							'onError': onError
						}
					});
				};
	
				// 4. The API will call this function when the video player is ready.
				function onPlayerReady(event) {
					console.log('player ready');
				}
	
				// 4. The API will call this function when the video player is ready.
				function onError(event) {
					console.log('player error', event);
					that.playNext.bind(that)();
				}
	
				// 5. The API calls this function when the player's state changes.
				//    The function indicates that when playing a video (state=1),
				//    the player should play for six seconds and then stop.
				function onPlayerStateChange(event) {
	
					if (event.data == YT.PlayerState.ENDED) {
						that.playNext.bind(that)();
					}
				}
	
				function stopVideo() {
					player.stopVideo();
				}
			}
		}, {
			key: 'playNext',
			value: function playNext(track) {
				var that = this;
				track = track || that.track;
				var next = that.props.tracks.payload.results.sort(function (a, b) {
					return a.trackNumber - b.trackNumber;
				})[that.state.track.index + 1];
				console.log('playing next', next);
				if (next) {
					that.chooseTrack({ t: next, index: that.state.track.index + 1 });
				}
			}
		}, {
			key: 'chooseTrack',
			value: function chooseTrack(track) {
				var t = track.t;
				var index = track.index;
	
				var that = this;
				this.setState({ track: track });
				_promise2.default.all(fetchFromPipe([{ artist: t.artistName, name: t.trackName, album: t.collectionName }])).then(function (x) {
					console.log('from pipe -> ', x);
					if (x[0]) {
						that.loadApi.bind(that, x[0].id)();
					} else {
						that.playNext.bind(that, track)();
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				console.log('rendering main view', this.props, this.state);
				var body = this.props.location.query.album ? React.createElement(_TracksView2.default, (0, _extends3.default)({}, this.state, { chooseTrack: this.chooseTrack.bind(this) }, this.props)) : React.createElement(_AlbumsView2.default, this.props);
				return React.createElement(
					'div',
					{ className: 'container', style: { width: 350 } },
					React.createElement(
						'div',
						{ className: 'player', style: { minHeight: 320, background: 'black' } },
						React.createElement('div', { id: 'player' })
					),
					body
				);
			}
		}]);
		return MainView;
	})(React.Component);
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, _main.actions)(MainView);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TracksView = undefined;
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(70);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(54);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _reactRedux = __webpack_require__(49);
	
	var _reactRouter = __webpack_require__(63);
	
	var _tracks = __webpack_require__(146);
	
	var _AlbumsView = __webpack_require__(249);
	
	var _AlbumsView2 = _interopRequireDefault(_AlbumsView);
	
	var _list = __webpack_require__(196);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _divider = __webpack_require__(441);
	
	var _divider2 = _interopRequireDefault(_divider);
	
	var _listItem = __webpack_require__(445);
	
	var _listItem2 = _interopRequireDefault(_listItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// We define mapStateToProps where we'd normally use
	// the @connect decorator so the data requirements are clear upfront, but then
	// export the decorated component after the main class definition so
	// the component can be tested w/ and w/o being connected.
	// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
	var mapStateToProps = function mapStateToProps(state) {
		return {
			tracks: state.tracks
		};
	};
	
	function pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}
	
	var TracksView = exports.TracksView = (function (_React$Component) {
		(0, _inherits3.default)(TracksView, _React$Component);
	
		function TracksView(props, context) {
			(0, _classCallCheck3.default)(this, TracksView);
	
			var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TracksView).call(this, props, context));
	
			_this.state = {};
			return _this;
		}
	
		(0, _createClass3.default)(TracksView, [{
			key: 'refetch',
			value: function refetch(props) {
				var props = props || this.props;
				var _props$location$query = props.location.query;
				var album = _props$location$query.album;
				var artist = _props$location$query.artist;
	
				this.props.fetchAsync(artist + ' ' + album);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.refetch.bind(this)();
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.refetch.bind(this)();
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				var that = this;
				console.log('rendering tracks view', this.props);
				if (!this.props.tracks || !this.props.tracks.payload) {
					return React.createElement(
						'div',
						null,
						'loading...'
					);
				}
	
				var filterAlbum = this.props.location.query.album || '';
				var filterArtist = this.props.location.query.artist || '';
	
				var index = -1;
				var squares = this.props.tracks.payload.results.sort(function (a, b) {
					return a.trackNumber - b.trackNumber;
				}).map(function (r) {
	
					if (!r.artistName) {
						return null;
					}
					index++;
					if (r.collectionName.toLowerCase().indexOf(filterAlbum.toLowerCase()) !== -1 && r.artistName.toLowerCase().indexOf(filterArtist.toLowerCase()) !== -1) {
						var trackclass = that.props.track && that.props.track.index === index ? _AlbumsView2.default['track--selected'] : '';
						return React.createElement(
							'div',
							{ className: _AlbumsView2.default['track'] + ' ' + trackclass, onClick: _this2.props.chooseTrack.bind(_this2, { t: r, index: index }) },
							React.createElement(_listItem2.default, {
								primaryText: pad(r.trackNumber, 2) + ' ' + r.trackName }),
							React.createElement(_divider2.default, null)
						);
					}
				});
	
				return React.createElement(
					'div',
					{ className: '', style: { height: window.innerHeight - 320, overflow: 'auto' } },
					React.createElement(
						'div',
						{ className: 'tracks' },
						React.createElement(
							_list2.default,
							{ subheader: filterArtist + ' / ' + filterAlbum },
							squares ? squares : 'loading..'
						)
					)
				);
	
				return React.createElement(
					'div',
					null,
					'Track View'
				);
			}
		}]);
		return TracksView;
	})(React.Component);
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, _tracks.actions)(TracksView);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(313), __esModule: true };

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(316), __esModule: true };

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(318), __esModule: true };

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(319), __esModule: true };

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(52);

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53);

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyDescriptor = __webpack_require__(264);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
	
	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};

/***/ },
/* 271 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(273);

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(261);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 274 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'apathy',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#031A16',
	  base01: '#0B342D',
	  base02: '#184E45',
	  base03: '#2B685E',
	  base04: '#5F9C92',
	  base05: '#81B5AC',
	  base06: '#A7CEC8',
	  base07: '#D2E7E4',
	  base08: '#3E9688',
	  base09: '#3E7996',
	  base0A: '#3E4C96',
	  base0B: '#883E96',
	  base0C: '#963E4C',
	  base0D: '#96883E',
	  base0E: '#4C963E',
	  base0F: '#3E965B'
	};
	module.exports = exports['default'];

/***/ },
/* 275 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ashes',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#1C2023',
	  base01: '#393F45',
	  base02: '#565E65',
	  base03: '#747C84',
	  base04: '#ADB3BA',
	  base05: '#C7CCD1',
	  base06: '#DFE2E5',
	  base07: '#F3F4F5',
	  base08: '#C7AE95',
	  base09: '#C7C795',
	  base0A: '#AEC795',
	  base0B: '#95C7AE',
	  base0C: '#95AEC7',
	  base0D: '#AE95C7',
	  base0E: '#C795AE',
	  base0F: '#C79595'
	};
	module.exports = exports['default'];

/***/ },
/* 276 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier dune',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
	  base00: '#20201d',
	  base01: '#292824',
	  base02: '#6e6b5e',
	  base03: '#7d7a68',
	  base04: '#999580',
	  base05: '#a6a28c',
	  base06: '#e8e4cf',
	  base07: '#fefbec',
	  base08: '#d73737',
	  base09: '#b65611',
	  base0A: '#cfb017',
	  base0B: '#60ac39',
	  base0C: '#1fad83',
	  base0D: '#6684e1',
	  base0E: '#b854d4',
	  base0F: '#d43552'
	};
	module.exports = exports['default'];

/***/ },
/* 277 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier forest',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
	  base00: '#1b1918',
	  base01: '#2c2421',
	  base02: '#68615e',
	  base03: '#766e6b',
	  base04: '#9c9491',
	  base05: '#a8a19f',
	  base06: '#e6e2e0',
	  base07: '#f1efee',
	  base08: '#f22c40',
	  base09: '#df5320',
	  base0A: '#d5911a',
	  base0B: '#5ab738',
	  base0C: '#00ad9c',
	  base0D: '#407ee7',
	  base0E: '#6666ea',
	  base0F: '#c33ff3'
	};
	module.exports = exports['default'];

/***/ },
/* 278 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier heath',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
	  base00: '#1b181b',
	  base01: '#292329',
	  base02: '#695d69',
	  base03: '#776977',
	  base04: '#9e8f9e',
	  base05: '#ab9bab',
	  base06: '#d8cad8',
	  base07: '#f7f3f7',
	  base08: '#ca402b',
	  base09: '#a65926',
	  base0A: '#bb8a35',
	  base0B: '#379a37',
	  base0C: '#159393',
	  base0D: '#516aec',
	  base0E: '#7b59c0',
	  base0F: '#cc33cc'
	};
	module.exports = exports['default'];

/***/ },
/* 279 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier lakeside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
	  base00: '#161b1d',
	  base01: '#1f292e',
	  base02: '#516d7b',
	  base03: '#5a7b8c',
	  base04: '#7195a8',
	  base05: '#7ea2b4',
	  base06: '#c1e4f6',
	  base07: '#ebf8ff',
	  base08: '#d22d72',
	  base09: '#935c25',
	  base0A: '#8a8a0f',
	  base0B: '#568c3b',
	  base0C: '#2d8f6f',
	  base0D: '#257fad',
	  base0E: '#5d5db1',
	  base0F: '#b72dd2'
	};
	module.exports = exports['default'];

/***/ },
/* 280 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier seaside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
	  base00: '#131513',
	  base01: '#242924',
	  base02: '#5e6e5e',
	  base03: '#687d68',
	  base04: '#809980',
	  base05: '#8ca68c',
	  base06: '#cfe8cf',
	  base07: '#f0fff0',
	  base08: '#e6193c',
	  base09: '#87711d',
	  base0A: '#c3c322',
	  base0B: '#29a329',
	  base0C: '#1999b3',
	  base0D: '#3d62f5',
	  base0E: '#ad2bee',
	  base0F: '#e619c3'
	};
	module.exports = exports['default'];

/***/ },
/* 281 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bespin',
	  author: 'jan t. sott',
	  base00: '#28211c',
	  base01: '#36312e',
	  base02: '#5e5d5c',
	  base03: '#666666',
	  base04: '#797977',
	  base05: '#8a8986',
	  base06: '#9d9b97',
	  base07: '#baae9e',
	  base08: '#cf6a4c',
	  base09: '#cf7d34',
	  base0A: '#f9ee98',
	  base0B: '#54be0d',
	  base0C: '#afc4db',
	  base0D: '#5ea6ea',
	  base0E: '#9b859d',
	  base0F: '#937121'
	};
	module.exports = exports['default'];

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'brewer',
	  author: 'timothée poisot (http://github.com/tpoisot)',
	  base00: '#0c0d0e',
	  base01: '#2e2f30',
	  base02: '#515253',
	  base03: '#737475',
	  base04: '#959697',
	  base05: '#b7b8b9',
	  base06: '#dadbdc',
	  base07: '#fcfdfe',
	  base08: '#e31a1c',
	  base09: '#e6550d',
	  base0A: '#dca060',
	  base0B: '#31a354',
	  base0C: '#80b1d3',
	  base0D: '#3182bd',
	  base0E: '#756bb1',
	  base0F: '#b15928'
	};
	module.exports = exports['default'];

/***/ },
/* 283 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bright',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#303030',
	  base02: '#505050',
	  base03: '#b0b0b0',
	  base04: '#d0d0d0',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ffffff',
	  base08: '#fb0120',
	  base09: '#fc6d24',
	  base0A: '#fda331',
	  base0B: '#a1c659',
	  base0C: '#76c7b7',
	  base0D: '#6fb3d2',
	  base0E: '#d381c3',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 284 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'chalk',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#f5f5f5',
	  base08: '#fb9fb1',
	  base09: '#eda987',
	  base0A: '#ddb26f',
	  base0B: '#acc267',
	  base0C: '#12cfc0',
	  base0D: '#6fc2ef',
	  base0E: '#e1a3ee',
	  base0F: '#deaf8f'
	};
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'codeschool',
	  author: 'brettof86',
	  base00: '#232c31',
	  base01: '#1c3657',
	  base02: '#2a343a',
	  base03: '#3f4944',
	  base04: '#84898c',
	  base05: '#9ea7a6',
	  base06: '#a7cfa3',
	  base07: '#b5d8f6',
	  base08: '#2a5491',
	  base09: '#43820d',
	  base0A: '#a03b1e',
	  base0B: '#237986',
	  base0C: '#b02f30',
	  base0D: '#484d79',
	  base0E: '#c59820',
	  base0F: '#c98344'
	};
	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'colors',
	  author: 'mrmrs (http://clrs.cc)',
	  base00: '#111111',
	  base01: '#333333',
	  base02: '#555555',
	  base03: '#777777',
	  base04: '#999999',
	  base05: '#bbbbbb',
	  base06: '#dddddd',
	  base07: '#ffffff',
	  base08: '#ff4136',
	  base09: '#ff851b',
	  base0A: '#ffdc00',
	  base0B: '#2ecc40',
	  base0C: '#7fdbff',
	  base0D: '#0074d9',
	  base0E: '#b10dc9',
	  base0F: '#85144b'
	};
	module.exports = exports['default'];

/***/ },
/* 287 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'default',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#181818',
	  base01: '#282828',
	  base02: '#383838',
	  base03: '#585858',
	  base04: '#b8b8b8',
	  base05: '#d8d8d8',
	  base06: '#e8e8e8',
	  base07: '#f8f8f8',
	  base08: '#ab4642',
	  base09: '#dc9656',
	  base0A: '#f7ca88',
	  base0B: '#a1b56c',
	  base0C: '#86c1b9',
	  base0D: '#7cafc2',
	  base0E: '#ba8baf',
	  base0F: '#a16946'
	};
	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'eighties',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2d2d2d',
	  base01: '#393939',
	  base02: '#515151',
	  base03: '#747369',
	  base04: '#a09f93',
	  base05: '#d3d0c8',
	  base06: '#e8e6df',
	  base07: '#f2f0ec',
	  base08: '#f2777a',
	  base09: '#f99157',
	  base0A: '#ffcc66',
	  base0B: '#99cc99',
	  base0C: '#66cccc',
	  base0D: '#6699cc',
	  base0E: '#cc99cc',
	  base0F: '#d27b53'
	};
	module.exports = exports['default'];

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'embers',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#16130F',
	  base01: '#2C2620',
	  base02: '#433B32',
	  base03: '#5A5047',
	  base04: '#8A8075',
	  base05: '#A39A90',
	  base06: '#BEB6AE',
	  base07: '#DBD6D1',
	  base08: '#826D57',
	  base09: '#828257',
	  base0A: '#6D8257',
	  base0B: '#57826D',
	  base0C: '#576D82',
	  base0D: '#6D5782',
	  base0E: '#82576D',
	  base0F: '#825757'
	};
	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'flat',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2C3E50',
	  base01: '#34495E',
	  base02: '#7F8C8D',
	  base03: '#95A5A6',
	  base04: '#BDC3C7',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ECF0F1',
	  base08: '#E74C3C',
	  base09: '#E67E22',
	  base0A: '#F1C40F',
	  base0B: '#2ECC71',
	  base0C: '#1ABC9C',
	  base0D: '#3498DB',
	  base0E: '#9B59B6',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'google',
	  author: 'seth wright (http://sethawright.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#CC342B',
	  base09: '#F96A38',
	  base0A: '#FBA922',
	  base0B: '#198844',
	  base0C: '#3971ED',
	  base0D: '#3971ED',
	  base0E: '#A36AC7',
	  base0F: '#3971ED'
	};
	module.exports = exports['default'];

/***/ },
/* 292 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'grayscale',
	  author: 'alexandre gavioli (https://github.com/alexx2/)',
	  base00: '#101010',
	  base01: '#252525',
	  base02: '#464646',
	  base03: '#525252',
	  base04: '#ababab',
	  base05: '#b9b9b9',
	  base06: '#e3e3e3',
	  base07: '#f7f7f7',
	  base08: '#7c7c7c',
	  base09: '#999999',
	  base0A: '#a0a0a0',
	  base0B: '#8e8e8e',
	  base0C: '#868686',
	  base0D: '#686868',
	  base0E: '#747474',
	  base0F: '#5e5e5e'
	};
	module.exports = exports['default'];

/***/ },
/* 293 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'green screen',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#001100',
	  base01: '#003300',
	  base02: '#005500',
	  base03: '#007700',
	  base04: '#009900',
	  base05: '#00bb00',
	  base06: '#00dd00',
	  base07: '#00ff00',
	  base08: '#007700',
	  base09: '#009900',
	  base0A: '#007700',
	  base0B: '#00bb00',
	  base0C: '#005500',
	  base0D: '#009900',
	  base0E: '#00bb00',
	  base0F: '#005500'
	};
	module.exports = exports['default'];

/***/ },
/* 294 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'harmonic16',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#0b1c2c',
	  base01: '#223b54',
	  base02: '#405c79',
	  base03: '#627e99',
	  base04: '#aabcce',
	  base05: '#cbd6e2',
	  base06: '#e5ebf1',
	  base07: '#f7f9fb',
	  base08: '#bf8b56',
	  base09: '#bfbf56',
	  base0A: '#8bbf56',
	  base0B: '#56bf8b',
	  base0C: '#568bbf',
	  base0D: '#8b56bf',
	  base0E: '#bf568b',
	  base0F: '#bf5656'
	};
	module.exports = exports['default'];

/***/ },
/* 295 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'hopscotch',
	  author: 'jan t. sott',
	  base00: '#322931',
	  base01: '#433b42',
	  base02: '#5c545b',
	  base03: '#797379',
	  base04: '#989498',
	  base05: '#b9b5b8',
	  base06: '#d5d3d5',
	  base07: '#ffffff',
	  base08: '#dd464c',
	  base09: '#fd8b19',
	  base0A: '#fdcc59',
	  base0B: '#8fc13e',
	  base0C: '#149b93',
	  base0D: '#1290bf',
	  base0E: '#c85e7c',
	  base0F: '#b33508'
	};
	module.exports = exports['default'];

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _threezerotwofour = __webpack_require__(308);
	
	exports.threezerotwofour = _interopRequire(_threezerotwofour);
	
	var _apathy = __webpack_require__(274);
	
	exports.apathy = _interopRequire(_apathy);
	
	var _ashes = __webpack_require__(275);
	
	exports.ashes = _interopRequire(_ashes);
	
	var _atelierDune = __webpack_require__(276);
	
	exports.atelierDune = _interopRequire(_atelierDune);
	
	var _atelierForest = __webpack_require__(277);
	
	exports.atelierForest = _interopRequire(_atelierForest);
	
	var _atelierHeath = __webpack_require__(278);
	
	exports.atelierHeath = _interopRequire(_atelierHeath);
	
	var _atelierLakeside = __webpack_require__(279);
	
	exports.atelierLakeside = _interopRequire(_atelierLakeside);
	
	var _atelierSeaside = __webpack_require__(280);
	
	exports.atelierSeaside = _interopRequire(_atelierSeaside);
	
	var _bespin = __webpack_require__(281);
	
	exports.bespin = _interopRequire(_bespin);
	
	var _brewer = __webpack_require__(282);
	
	exports.brewer = _interopRequire(_brewer);
	
	var _bright = __webpack_require__(283);
	
	exports.bright = _interopRequire(_bright);
	
	var _chalk = __webpack_require__(284);
	
	exports.chalk = _interopRequire(_chalk);
	
	var _codeschool = __webpack_require__(285);
	
	exports.codeschool = _interopRequire(_codeschool);
	
	var _colors = __webpack_require__(286);
	
	exports.colors = _interopRequire(_colors);
	
	var _default = __webpack_require__(287);
	
	exports['default'] = _interopRequire(_default);
	
	var _eighties = __webpack_require__(288);
	
	exports.eighties = _interopRequire(_eighties);
	
	var _embers = __webpack_require__(289);
	
	exports.embers = _interopRequire(_embers);
	
	var _flat = __webpack_require__(290);
	
	exports.flat = _interopRequire(_flat);
	
	var _google = __webpack_require__(291);
	
	exports.google = _interopRequire(_google);
	
	var _grayscale = __webpack_require__(292);
	
	exports.grayscale = _interopRequire(_grayscale);
	
	var _greenscreen = __webpack_require__(293);
	
	exports.greenscreen = _interopRequire(_greenscreen);
	
	var _harmonic = __webpack_require__(294);
	
	exports.harmonic = _interopRequire(_harmonic);
	
	var _hopscotch = __webpack_require__(295);
	
	exports.hopscotch = _interopRequire(_hopscotch);
	
	var _isotope = __webpack_require__(297);
	
	exports.isotope = _interopRequire(_isotope);
	
	var _marrakesh = __webpack_require__(298);
	
	exports.marrakesh = _interopRequire(_marrakesh);
	
	var _mocha = __webpack_require__(299);
	
	exports.mocha = _interopRequire(_mocha);
	
	var _monokai = __webpack_require__(300);
	
	exports.monokai = _interopRequire(_monokai);
	
	var _ocean = __webpack_require__(301);
	
	exports.ocean = _interopRequire(_ocean);
	
	var _paraiso = __webpack_require__(302);
	
	exports.paraiso = _interopRequire(_paraiso);
	
	var _pop = __webpack_require__(303);
	
	exports.pop = _interopRequire(_pop);
	
	var _railscasts = __webpack_require__(304);
	
	exports.railscasts = _interopRequire(_railscasts);
	
	var _shapeshifter = __webpack_require__(305);
	
	exports.shapeshifter = _interopRequire(_shapeshifter);
	
	var _solarized = __webpack_require__(306);
	
	exports.solarized = _interopRequire(_solarized);
	
	var _summerfruit = __webpack_require__(307);
	
	exports.summerfruit = _interopRequire(_summerfruit);
	
	var _tomorrow = __webpack_require__(309);
	
	exports.tomorrow = _interopRequire(_tomorrow);
	
	var _tube = __webpack_require__(310);
	
	exports.tube = _interopRequire(_tube);
	
	var _twilight = __webpack_require__(311);
	
	exports.twilight = _interopRequire(_twilight);

/***/ },
/* 297 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'isotope',
	  author: 'jan t. sott',
	  base00: '#000000',
	  base01: '#404040',
	  base02: '#606060',
	  base03: '#808080',
	  base04: '#c0c0c0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#ff0000',
	  base09: '#ff9900',
	  base0A: '#ff0099',
	  base0B: '#33ff00',
	  base0C: '#00ffff',
	  base0D: '#0066ff',
	  base0E: '#cc00ff',
	  base0F: '#3300ff'
	};
	module.exports = exports['default'];

/***/ },
/* 298 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'marrakesh',
	  author: 'alexandre gavioli (http://github.com/alexx2/)',
	  base00: '#201602',
	  base01: '#302e00',
	  base02: '#5f5b17',
	  base03: '#6c6823',
	  base04: '#86813b',
	  base05: '#948e48',
	  base06: '#ccc37a',
	  base07: '#faf0a5',
	  base08: '#c35359',
	  base09: '#b36144',
	  base0A: '#a88339',
	  base0B: '#18974e',
	  base0C: '#75a738',
	  base0D: '#477ca1',
	  base0E: '#8868b3',
	  base0F: '#b3588e'
	};
	module.exports = exports['default'];

/***/ },
/* 299 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'mocha',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#3B3228',
	  base01: '#534636',
	  base02: '#645240',
	  base03: '#7e705a',
	  base04: '#b8afad',
	  base05: '#d0c8c6',
	  base06: '#e9e1dd',
	  base07: '#f5eeeb',
	  base08: '#cb6077',
	  base09: '#d28b71',
	  base0A: '#f4bc87',
	  base0B: '#beb55b',
	  base0C: '#7bbda4',
	  base0D: '#8ab3b5',
	  base0E: '#a89bb9',
	  base0F: '#bb9584'
	};
	module.exports = exports['default'];

/***/ },
/* 300 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'monokai',
	  author: 'wimer hazenberg (http://www.monokai.nl)',
	  base00: '#272822',
	  base01: '#383830',
	  base02: '#49483e',
	  base03: '#75715e',
	  base04: '#a59f85',
	  base05: '#f8f8f2',
	  base06: '#f5f4f1',
	  base07: '#f9f8f5',
	  base08: '#f92672',
	  base09: '#fd971f',
	  base0A: '#f4bf75',
	  base0B: '#a6e22e',
	  base0C: '#a1efe4',
	  base0D: '#66d9ef',
	  base0E: '#ae81ff',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 301 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ocean',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2b303b',
	  base01: '#343d46',
	  base02: '#4f5b66',
	  base03: '#65737e',
	  base04: '#a7adba',
	  base05: '#c0c5ce',
	  base06: '#dfe1e8',
	  base07: '#eff1f5',
	  base08: '#bf616a',
	  base09: '#d08770',
	  base0A: '#ebcb8b',
	  base0B: '#a3be8c',
	  base0C: '#96b5b4',
	  base0D: '#8fa1b3',
	  base0E: '#b48ead',
	  base0F: '#ab7967'
	};
	module.exports = exports['default'];

/***/ },
/* 302 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'paraiso',
	  author: 'jan t. sott',
	  base00: '#2f1e2e',
	  base01: '#41323f',
	  base02: '#4f424c',
	  base03: '#776e71',
	  base04: '#8d8687',
	  base05: '#a39e9b',
	  base06: '#b9b6b0',
	  base07: '#e7e9db',
	  base08: '#ef6155',
	  base09: '#f99b15',
	  base0A: '#fec418',
	  base0B: '#48b685',
	  base0C: '#5bc4bf',
	  base0D: '#06b6ef',
	  base0E: '#815ba4',
	  base0F: '#e96ba8'
	};
	module.exports = exports['default'];

/***/ },
/* 303 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'pop',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#eb008a',
	  base09: '#f29333',
	  base0A: '#f8ca12',
	  base0B: '#37b349',
	  base0C: '#00aabb',
	  base0D: '#0e5a94',
	  base0E: '#b31e8d',
	  base0F: '#7a2d00'
	};
	module.exports = exports['default'];

/***/ },
/* 304 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'railscasts',
	  author: 'ryan bates (http://railscasts.com)',
	  base00: '#2b2b2b',
	  base01: '#272935',
	  base02: '#3a4055',
	  base03: '#5a647e',
	  base04: '#d4cfc9',
	  base05: '#e6e1dc',
	  base06: '#f4f1ed',
	  base07: '#f9f7f3',
	  base08: '#da4939',
	  base09: '#cc7833',
	  base0A: '#ffc66d',
	  base0B: '#a5c261',
	  base0C: '#519f50',
	  base0D: '#6d9cbe',
	  base0E: '#b6b3eb',
	  base0F: '#bc9458'
	};
	module.exports = exports['default'];

/***/ },
/* 305 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'shapeshifter',
	  author: 'tyler benziger (http://tybenz.com)',
	  base00: '#000000',
	  base01: '#040404',
	  base02: '#102015',
	  base03: '#343434',
	  base04: '#555555',
	  base05: '#ababab',
	  base06: '#e0e0e0',
	  base07: '#f9f9f9',
	  base08: '#e92f2f',
	  base09: '#e09448',
	  base0A: '#dddd13',
	  base0B: '#0ed839',
	  base0C: '#23edda',
	  base0D: '#3b48e3',
	  base0E: '#f996e2',
	  base0F: '#69542d'
	};
	module.exports = exports['default'];

/***/ },
/* 306 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 307 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'summerfruit',
	  author: 'christopher corley (http://cscorley.github.io/)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#B0B0B0',
	  base05: '#D0D0D0',
	  base06: '#E0E0E0',
	  base07: '#FFFFFF',
	  base08: '#FF0086',
	  base09: '#FD8900',
	  base0A: '#ABA800',
	  base0B: '#00C918',
	  base0C: '#1faaaa',
	  base0D: '#3777E6',
	  base0E: '#AD00A1',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 308 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'threezerotwofour',
	  author: 'jan t. sott (http://github.com/idleberg)',
	  base00: '#090300',
	  base01: '#3a3432',
	  base02: '#4a4543',
	  base03: '#5c5855',
	  base04: '#807d7c',
	  base05: '#a5a2a2',
	  base06: '#d6d5d4',
	  base07: '#f7f7f7',
	  base08: '#db2d20',
	  base09: '#e8bbd0',
	  base0A: '#fded02',
	  base0B: '#01a252',
	  base0C: '#b5e4f4',
	  base0D: '#01a0e4',
	  base0E: '#a16a94',
	  base0F: '#cdab53'
	};
	module.exports = exports['default'];

/***/ },
/* 309 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'tomorrow',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#cc6666',
	  base09: '#de935f',
	  base0A: '#f0c674',
	  base0B: '#b5bd68',
	  base0C: '#8abeb7',
	  base0D: '#81a2be',
	  base0E: '#b294bb',
	  base0F: '#a3685a'
	};
	module.exports = exports['default'];

/***/ },
/* 310 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'london tube',
	  author: 'jan t. sott',
	  base00: '#231f20',
	  base01: '#1c3f95',
	  base02: '#5a5758',
	  base03: '#737171',
	  base04: '#959ca1',
	  base05: '#d9d8d8',
	  base06: '#e7e7e8',
	  base07: '#ffffff',
	  base08: '#ee2e24',
	  base09: '#f386a1',
	  base0A: '#ffd204',
	  base0B: '#00853e',
	  base0C: '#85cebc',
	  base0D: '#009ddc',
	  base0E: '#98005d',
	  base0F: '#b06110'
	};
	module.exports = exports['default'];

/***/ },
/* 311 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'twilight',
	  author: 'david hart (http://hart-dev.com)',
	  base00: '#1e1e1e',
	  base01: '#323537',
	  base02: '#464b50',
	  base03: '#5f5a60',
	  base04: '#838184',
	  base05: '#a7a7a7',
	  base06: '#c3c3c3',
	  base07: '#ffffff',
	  base08: '#cf6a4c',
	  base09: '#cda869',
	  base0A: '#f9ee98',
	  base0B: '#8f9d6a',
	  base0C: '#afc4db',
	  base0D: '#7587a6',
	  base0E: '#9b859d',
	  base0F: '#9b703f'
	};
	module.exports = exports['default'];

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */
	
	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */
	
	  var t = true
	
	  function detect(ua) {
	
	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }
	
	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , chromeBook = /CrOS/.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , result
	
	    if (/opera|opr/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/windows phone/i.test(ua)) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeBook) {
	      result = {
	        name: 'Chrome'
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (/sailfish/i.test(ua)) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (/silk/i.test(ua)) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	      , version: versionIdentifier
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/(web|hpw)os/i.test(ua)) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (/tizen/i.test(ua)) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/safari/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      , version: versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }
	
	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      result.name = result.name || "Webkit"
	      result.webkit = t
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }
	
	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    }
	
	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }
	
	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
	      result.tablet = t
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
	      result.mobile = t
	    }
	
	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t
	
	    return result
	  }
	
	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')
	
	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }
	
	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;
	
	  return bowser
	});


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	__webpack_require__(343);
	module.exports = __webpack_require__(9).Array.from;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106);
	__webpack_require__(75);
	module.exports = __webpack_require__(342);

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(345);
	module.exports = __webpack_require__(9).Number.isSafeInteger;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	__webpack_require__(347);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(348);
	module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(166);
	__webpack_require__(75);
	__webpack_require__(106);
	__webpack_require__(351);
	module.exports = __webpack_require__(9).Promise;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(352);
	__webpack_require__(166);
	module.exports = __webpack_require__(9).Symbol;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	__webpack_require__(106);
	module.exports = __webpack_require__(16)('iterator');

/***/ },
/* 321 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(56)
	  , document = __webpack_require__(26).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(7);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(48)
	  , call        = __webpack_require__(158)
	  , isArrayIter = __webpack_require__(157)
	  , anObject    = __webpack_require__(37)
	  , toLength    = __webpack_require__(164)
	  , getIterFn   = __webpack_require__(105);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(58)
	  , getNames  = __webpack_require__(7).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26).document && document.documentElement;

/***/ },
/* 327 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(55);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(56)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(7)
	  , descriptor     = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(73)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(100)(IteratorPrototype, __webpack_require__(16)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 331 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(7)
	  , toIObject = __webpack_require__(58);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(26)
	  , macrotask = __webpack_require__(341).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(55)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(7)
	  , toObject = __webpack_require__(74)
	  , IObject  = __webpack_require__(156);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(72)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(104);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 336 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(9)
	  , $           = __webpack_require__(7)
	  , DESCRIPTORS = __webpack_require__(71)
	  , SPECIES     = __webpack_require__(16)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(37)
	  , aFunction = __webpack_require__(97)
	  , SPECIES   = __webpack_require__(16)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(163)
	  , defined   = __webpack_require__(98);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(48)
	  , invoke             = __webpack_require__(327)
	  , html               = __webpack_require__(326)
	  , cel                = __webpack_require__(322)
	  , global             = __webpack_require__(26)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(55)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(37)
	  , get      = __webpack_require__(105);
	module.exports = __webpack_require__(9).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(48)
	  , $export     = __webpack_require__(31)
	  , toObject    = __webpack_require__(74)
	  , call        = __webpack_require__(158)
	  , isArrayIter = __webpack_require__(157)
	  , toLength    = __webpack_require__(164)
	  , getIterFn   = __webpack_require__(105);
	$export($export.S + $export.F * !__webpack_require__(160)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(321)
	  , step             = __webpack_require__(331)
	  , Iterators        = __webpack_require__(57)
	  , toIObject        = __webpack_require__(58);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(159)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(31)
	  , isInteger = __webpack_require__(329)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(31);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(334)});

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(58);
	
	__webpack_require__(102)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(74);
	
	__webpack_require__(102)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(74);
	
	__webpack_require__(102)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(31);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(161).set});

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(7)
	  , LIBRARY    = __webpack_require__(101)
	  , global     = __webpack_require__(26)
	  , ctx        = __webpack_require__(48)
	  , classof    = __webpack_require__(155)
	  , $export    = __webpack_require__(31)
	  , isObject   = __webpack_require__(56)
	  , anObject   = __webpack_require__(37)
	  , aFunction  = __webpack_require__(97)
	  , strictNew  = __webpack_require__(339)
	  , forOf      = __webpack_require__(324)
	  , setProto   = __webpack_require__(161).set
	  , same       = __webpack_require__(336)
	  , SPECIES    = __webpack_require__(16)('species')
	  , speciesConstructor = __webpack_require__(338)
	  , asap       = __webpack_require__(333)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(71)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(335)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(73)(P, PROMISE);
	__webpack_require__(337)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(160)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(7)
	  , global         = __webpack_require__(26)
	  , has            = __webpack_require__(99)
	  , DESCRIPTORS    = __webpack_require__(71)
	  , $export        = __webpack_require__(31)
	  , redefine       = __webpack_require__(104)
	  , $fails         = __webpack_require__(72)
	  , shared         = __webpack_require__(162)
	  , setToStringTag = __webpack_require__(73)
	  , uid            = __webpack_require__(165)
	  , wks            = __webpack_require__(16)
	  , keyOf          = __webpack_require__(332)
	  , $names         = __webpack_require__(325)
	  , enumKeys       = __webpack_require__(323)
	  , isArray        = __webpack_require__(328)
	  , anObject       = __webpack_require__(37)
	  , toIObject      = __webpack_require__(58)
	  , createDesc     = __webpack_require__(103)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(101)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports
	
	
	// module
	exports.push([module.id, "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box}body,html{margin:0;padding:0;height:100%}*,:after,:before{box-sizing:inherit}body{background:pink}.core__track____MXnP{display:none}", "", {"version":3,"sources":["/./src/styles/core.scss"],"names":[],"mappings":"AAkBA,KACE,uBAAwB,0BAEG,6BAEI,CACtB,KAMT,QAAU,CAAE,2FAuBZ,aAAe,CAAE,4BAUjB,qBAAsB,uBAEG,CAChB,sBAOT,aAAc,QACJ,CAAE,kBAQZ,YAAc,CAAE,EAQhB,4BAA8B,CAAE,iBAOhC,SAAW,CAAE,YAQb,wBAA0B,CAAE,SAO5B,eAAkB,CAAE,IAMpB,iBAAmB,CAAE,GAOrB,cAAe,cACE,CAAE,KAMnB,gBAAiB,UACL,CAAE,MAMd,aAAe,CAAE,QAOjB,cAAe,cACA,kBACI,uBACM,CAAE,IAG3B,SAAY,CAAE,IAGd,aAAgB,CAAE,IAQlB,QAAU,CAAE,eAMZ,eAAiB,CAAE,OAQnB,eAAiB,CAAE,GAOnB,uBAAwB,QACd,CAAE,IAMZ,aAAe,CAAE,kBASjB,sBAAkC,aACnB,CAAE,sCAmBjB,cAAe,aAED,QAEJ,CACD,OAMT,gBAAkB,CAAE,cAUpB,mBAAqB,CAAE,oEAavB,0BAA2B,cAEX,CACP,sCAOT,cAAgB,CAAE,iDAOlB,SAAU,SACC,CAAE,MAOb,kBAAoB,CAAE,uCAWtB,sBAAuB,SAEZ,CACF,4FAST,WAAa,CAAE,mBAQf,6BAA8B,sBAKN,CAAE,+FAS1B,uBAAyB,CAAE,SAM3B,wBAA0B,aACZ,0BACiB,CAAE,OAOjC,SAAU,SAEC,CACF,SAMT,aAAe,CAAE,SAOjB,eAAkB,CAAE,MAQpB,yBAA0B,gBACR,CAAE,MAIpB,SAAW,CAAE,KAGb,qBAAuB,CAAE,UAIzB,SAAU,UACC,WACE,CAAE,iBAKf,kBAAoB,CAAE,KAItB,eAAiB,CAAE,qBAGnB,YAAc,CAAE","file":"core.scss","sourcesContent":["/*\nApplication Settings Go Here\n------------------------------------\nThis file acts as a bundler for all variables/mixins/themes, so they\ncan easily be swapped out without `core.scss` ever having to know.\n\nFor example:\n\n@import './variables/colors'\n@import './variables/components'\n@import './themes/default'\n*/\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\n/* albi */\nbody {\n  background: pink; }\n\n.track {\n  display: none; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"track": "core__track____MXnP"
	};

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports
	
	
	// module
	exports.push([module.id, ".AlbumsView__track___2xYsx{margin:3px}.AlbumsView__track--selected___6g7ml{background-color:#6fb3d2}.AlbumsView__year___XPAG7{position:absolute;bottom:1px;left:0;z-index:10000;color:#fff;right:0;font-size:10px}", "", {"version":3,"sources":["/./src/views/AlbumsView.scss"],"names":[],"mappings":"AAAA,2BACE,UAAY,CAAE,qCAGd,wBAA0B,CAAE,0BAG5B,kBAAmB,WACP,OACJ,cACO,WACF,QACJ,cACO,CAAE","file":"AlbumsView.scss","sourcesContent":[".track {\n  margin: 3px; }\n\n.track--selected {\n  background-color: #6FB3D2; }\n\n.year {\n  position: absolute;\n  bottom: 1px;\n  left: 0;\n  z-index: 10000;\n  color: white;\n  right: 0;\n  font-size: 10px; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"track": "AlbumsView__track___2xYsx",
		"track--selected": "AlbumsView__track--selected___6g7ml",
		"year": "AlbumsView__year___XPAG7"
	};

/***/ },
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _pluginsCursor = __webpack_require__(382);
	
	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);
	
	var _pluginsFlex = __webpack_require__(383);
	
	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);
	
	var _pluginsSizing = __webpack_require__(387);
	
	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);
	
	var _pluginsGradient = __webpack_require__(386);
	
	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);
	
	// special flexbox specifications
	
	var _pluginsFlexboxIE = __webpack_require__(384);
	
	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);
	
	var _pluginsFlexboxOld = __webpack_require__(385);
	
	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);
	
	exports['default'] = [_pluginsCursor2['default'], _pluginsFlex2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default']];
	module.exports = exports['default'];

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _getBrowserInformation = __webpack_require__(380);
	
	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);
	
	var _getPrefixedKeyframes = __webpack_require__(381);
	
	var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);
	
	var _caniuseData = __webpack_require__(379);
	
	var _caniuseData2 = _interopRequireDefault(_caniuseData);
	
	var _Plugins = __webpack_require__(377);
	
	var _Plugins2 = _interopRequireDefault(_Plugins);
	
	var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
	
	// only throw warnings if devmode is enabled
	var warn = function warn() {
	  if (true) {
	    console.warn.apply(console, arguments);
	  }
	};
	// helper to capitalize strings
	var caplitalizeString = function caplitalizeString(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	// leight polyfill for Object.assign
	var assign = function assign(base, extend) {
	  if (extend) {
	    Object.keys(extend).forEach(function (key) {
	      return base[key] = extend[key];
	    });
	  }
	  return extend;
	};
	
	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer. Pass an asterisk as userAgent to combine all prefixes
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   */
	
	  function Prefixer() {
	    var _this = this;
	
	    var userAgent = arguments.length <= 0 || arguments[0] === undefined ? defaultUserAgent : arguments[0];
	
	    _classCallCheck(this, Prefixer);
	
	    this._userAgent = userAgent;
	    this._browserInfo = (0, _getBrowserInformation2['default'])(userAgent);
	
	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      this.cssPrefix = this._browserInfo.prefix.CSS;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _getPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      warn('Either the global navigator was undefined or an invalid userAgent was provided.', 'Using a valid userAgent? Please let us know and create an issue at https://github.com/rofrischmann/inline-style-prefixer/issues');
	      return false;
	    }
	    var data = this._browserInfo.browser && _caniuseData2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      warn('Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue.');
	      return false;
	    }
	  }
	
	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */
	
	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;
	
	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }
	
	      styles = assign({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + caplitalizeString(property)] = value;
	            delete styles[property];
	          }
	
	          // resolve plugins
	          _Plugins2['default'].forEach(function (plugin) {
	            assign(styles, plugin(property, value, _this2._browserInfo, styles, false));
	          });
	        }
	      });
	
	      return styles;
	    }
	
	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      var prefixes = {};
	      var browserInfo = (0, _getBrowserInformation2['default'])('*');
	
	      browserInfo.browsers.forEach(function (browser) {
	        var data = _caniuseData2['default'][browser];
	        if (data) {
	          assign(prefixes, data);
	        }
	      });
	
	      // there should always be at least one prefixed style, but just incase
	      if (!Object.keys(prefixes).length > 0) {
	        return styles;
	      }
	
	      styles = assign({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = Prefixer.prefixAll(value);
	        } else {
	          var browsers = Object.keys(browserInfo.prefixes);
	          browsers.forEach(function (browser) {
	            var style = browserInfo.prefixes[browser];
	            // add prefixes if needed
	            if (prefixes[property]) {
	              styles[style.inline + caplitalizeString(property)] = value;
	            }
	
	            // resolve plugins for each browser
	            _Plugins2['default'].forEach(function (plugin) {
	              var browserInfo = {
	                name: browser,
	                prefix: style,
	                version: 0 // assume lowest
	              };
	              assign(styles, plugin(property, value, browserInfo, styles, true));
	            });
	          });
	        }
	      });
	
	      return styles;
	    }
	  }]);
	
	  return Prefixer;
	})();
	
	exports['default'] = Prefixer;
	module.exports = exports['default'];

/***/ },
/* 379 */
/***/ function(module, exports) {

	var caniuseData = {"chrome":{"transform":35,"transformOrigin":35,"transformOriginX":35,"transformOriginY":35,"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transformStyle":35,"transformOriginZ":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"animationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":49,"userSelect":49,"fontKerning":32,"textEmphasisPosition":49,"textEmphasis":49,"textEmphasisStyle":49,"textEmphasisColor":49,"boxDecorationBreak":49,"clipPath":49,"maskImage":49,"maskMode":49,"maskRepeat":49,"maskPosition":49,"maskClip":49,"maskOrigin":49,"maskSize":49,"maskComposite":49,"mask":49,"maskBorderSource":49,"maskBorderMode":49,"maskBorderSlice":49,"maskBorderWidth":49,"maskBorderOutset":49,"maskBorderRepeat":49,"maskBorder":49,"maskType":49,"textDecorationStyle":49,"textDecorationSkip":49,"textDecorationLine":49,"textDecorationColor":49,"filter":49,"fontFeatureSettings":49,"breakAfter":49,"breakBefore":49,"breakInside":49,"columnCount":49,"columnFill":49,"columnGap":49,"columnRule":49,"columnRuleColor":49,"columnRuleStyle":49,"columnRuleWidth":49,"columns":49,"columnSpan":49,"columnWidth":49},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"flexWrap":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8,"transformOrigin":8,"transformOriginX":8,"transformOriginY":8,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transformStyle":8,"transformOriginZ":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"animationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":9,"userSelect":9,"backdropFilter":9,"fontKerning":9,"scrollSnapType":9,"scrollSnapPointsX":9,"scrollSnapPointsY":9,"scrollSnapDestination":9,"scrollSnapCoordinate":9,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":9,"clipPath":9,"maskImage":9,"maskMode":9,"maskRepeat":9,"maskPosition":9,"maskClip":9,"maskOrigin":9,"maskSize":9,"maskComposite":9,"mask":9,"maskBorderSource":9,"maskBorderMode":9,"maskBorderSlice":9,"maskBorderWidth":9,"maskBorderOutset":9,"maskBorderRepeat":9,"maskBorder":9,"maskType":9,"textDecorationStyle":9,"textDecorationSkip":9,"textDecorationLine":9,"textDecorationColor":9,"shapeImageThreshold":9,"shapeImageMargin":9,"shapeImageOutside":9,"filter":9,"hyphens":9,"flowInto":9,"flowFrom":9,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":9,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":45,"userSelect":45,"boxSizing":28,"textAlignLast":45,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":45,"hyphens":42,"fontFeatureSettings":33,"breakAfter":45,"breakBefore":45,"breakInside":45,"columnCount":45,"columnFill":45,"columnGap":45,"columnRule":45,"columnRuleColor":45,"columnRuleStyle":45,"columnRuleWidth":45,"columns":45,"columnSpan":45,"columnWidth":45},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"flexWrap":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"transform":22,"transformOrigin":22,"transformOriginX":22,"transformOriginY":22,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transformStyle":22,"transformOriginZ":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"animationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":35,"userSelect":35,"fontKerning":19,"textEmphasisPosition":35,"textEmphasis":35,"textEmphasisStyle":35,"textEmphasisColor":35,"boxDecorationBreak":35,"clipPath":35,"maskImage":35,"maskMode":35,"maskRepeat":35,"maskPosition":35,"maskClip":35,"maskOrigin":35,"maskSize":35,"maskComposite":35,"mask":35,"maskBorderSource":35,"maskBorderMode":35,"maskBorderSlice":35,"maskBorderWidth":35,"maskBorderOutset":35,"maskBorderRepeat":35,"maskBorder":35,"maskType":35,"filter":35,"fontFeatureSettings":35,"breakAfter":35,"breakBefore":35,"breakInside":35,"columnCount":35,"columnFill":35,"columnGap":35,"columnRule":35,"columnRuleColor":35,"columnRuleStyle":35,"columnRuleWidth":35,"columns":35,"columnSpan":35,"columnWidth":35},"ie":{"gridTemplateRows":11,"grid":11,"flowInto":11,"flexDirection":10,"touchAction":10,"gridRow":11,"scrollSnapPointsX":11,"wrapMargin":11,"breakBefore":11,"gridRowEnd":11,"gridRowStart":11,"breakInside":11,"transformOrigin":9,"scrollSnapType":11,"scrollSnapDestination":11,"gridTemplate":11,"flexWrap":10,"transformOriginX":9,"flowFrom":11,"gridColumnStart":11,"userSelect":11,"wrapFlow":11,"scrollSnapCoordinate":11,"gridGap":11,"gridAutoRows":11,"hyphens":11,"regionFragment":11,"flex":10,"columnGap":11,"wrapThrough":11,"transformOriginY":9,"breakAfter":11,"rowGap":11,"gridTemplateColumns":11,"gridArea":11,"transform":9,"gridAutoFlow":11,"flexFlow":10,"gridTemplateAreas":11,"gridColumn":11,"gridAutoColumns":11,"scrollSnapPointsY":11,"textSizeAdjust":11},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"flexWrap":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8.1,"transformOrigin":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transformStyle":8.1,"transformOriginZ":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"animationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9,"userSelect":9,"backdropFilter":9,"fontKerning":9,"scrollSnapType":9,"scrollSnapPointsX":9,"scrollSnapPointsY":9,"scrollSnapDestination":9,"scrollSnapCoordinate":9,"boxDecorationBreak":9,"clipPath":9,"maskImage":9,"maskMode":9,"maskRepeat":9,"maskPosition":9,"maskClip":9,"maskOrigin":9,"maskSize":9,"maskComposite":9,"mask":9,"maskBorderSource":9,"maskBorderMode":9,"maskBorderSlice":9,"maskBorderWidth":9,"maskBorderOutset":9,"maskBorderRepeat":9,"maskBorder":9,"maskType":9,"textSizeAdjust":9,"textDecorationStyle":9,"textDecorationSkip":9,"textDecorationLine":9,"textDecorationColor":9,"shapeImageThreshold":9,"shapeImageMargin":9,"shapeImageOutside":9,"filter":9,"hyphens":9,"flowInto":9,"flowFrom":9,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"borderImage":4.2,"borderImageOutset":4.2,"borderImageRepeat":4.2,"borderImageSlice":4.2,"borderImageSource":4.2,"borderImageWidth":4.2,"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"flexWrap":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"transform":4.4,"transformOrigin":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transformStyle":4.4,"transformOriginZ":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"animationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":44,"userSelect":44,"fontKerning":4.4,"textEmphasisPosition":44,"textEmphasis":44,"textEmphasisStyle":44,"textEmphasisColor":44,"boxDecorationBreak":44,"clipPath":44,"maskImage":44,"maskMode":44,"maskRepeat":44,"maskPosition":44,"maskClip":44,"maskOrigin":44,"maskSize":44,"maskComposite":44,"mask":44,"maskBorderSource":44,"maskBorderMode":44,"maskBorderSlice":44,"maskBorderWidth":44,"maskBorderOutset":44,"maskBorderRepeat":44,"maskBorder":44,"maskType":44,"filter":44,"fontFeatureSettings":44,"breakAfter":44,"breakBefore":44,"breakInside":44,"columnCount":44,"columnFill":44,"columnGap":44,"columnRule":44,"columnRuleColor":44,"columnRuleStyle":44,"columnRuleWidth":44,"columns":44,"columnSpan":44,"columnWidth":44},"and_chr":{"appearance":46,"userSelect":46,"textEmphasisPosition":46,"textEmphasis":46,"textEmphasisStyle":46,"textEmphasisColor":46,"boxDecorationBreak":46,"clipPath":46,"maskImage":46,"maskMode":46,"maskRepeat":46,"maskPosition":46,"maskClip":46,"maskOrigin":46,"maskSize":46,"maskComposite":46,"mask":46,"maskBorderSource":46,"maskBorderMode":46,"maskBorderSlice":46,"maskBorderWidth":46,"maskBorderOutset":46,"maskBorderRepeat":46,"maskBorder":46,"maskType":46,"textDecorationStyle":46,"textDecorationSkip":46,"textDecorationLine":46,"textDecorationColor":46,"filter":46,"fontFeatureSettings":46,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"flexWrap":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"transform":9.9,"transformOrigin":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transformStyle":9.9,"transformOriginZ":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"animationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{"borderImage":5,"borderImageOutset":5,"borderImageRepeat":5,"borderImageSlice":5,"borderImageSource":5,"borderImageWidth":5,"tabSize":5,"objectFit":5,"objectPosition":5}}; module.exports = caniuseData

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _bowser = __webpack_require__(312);
	
	var _bowser2 = _interopRequireDefault(_bowser);
	
	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};
	
	var browsers = {
	  chrome: [['chrome']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  ie: [['msie'], ['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_chr: [['android', 'chrome', 'mobile'], ['android', 'chrome', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};
	
	/**
	 * Returns an object containing prefix data associated with a browser
	 * @param {string} browser - browser to find a prefix for
	 */
	var getPrefixes = function getPrefixes(browser) {
	  var prefixKeys = undefined;
	  var prefix = undefined;
	  var vendors = undefined;
	  var conditions = undefined;
	  var prefixVendor = undefined;
	  var browserVendors = undefined;
	
	  // Find the prefix for this browser (if any)
	  prefixKeys = Object.keys(vendorPrefixes);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = prefixKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      prefix = _step.value;
	
	      // Find a matching vendor
	      vendors = vendorPrefixes[prefix];
	      conditions = browsers[browser];
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = vendors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          prefixVendor = _step2.value;
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;
	
	          try {
	            for (var _iterator3 = conditions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              browserVendors = _step3.value;
	
	              if (browserVendors.indexOf(prefixVendor) !== -1) {
	                return {
	                  inline: prefix,
	                  CSS: '-' + prefix.toLowerCase() + '-'
	                };
	              }
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	                _iterator3['return']();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	
	    // No prefix found for this browser
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return { inline: '', CSS: '' };
	};
	
	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */
	
	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }
	
	  var info = {};
	
	  // Special user agent, return all supported prefixes
	  // instead of returning a string browser name and a prefix object
	  // we return an array of browser names and map of prefixes for each browser
	  if (userAgent === '*') {
	    // Return an array of supported browsers
	    info.browsers = Object.keys(browsers);
	
	    // Return prefixes associated by browser
	    info.prefixes = {};
	
	    // Iterate browser list, assign prefix to each
	    info.browsers.forEach(function (browser) {
	      info.prefixes[browser] = getPrefixes(browser);
	    });
	
	    return info;
	  }
	
	  // Normal user agent, detect browser
	  info = _bowser2['default']._detect(userAgent);
	
	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          CSS: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });
	
	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });
	
	  info.browser = name;
	  info.version = parseFloat(info.version);
	  info.osversion = parseFloat(info.osversion);
	
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (name === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }
	
	  return info;
	};
	
	module.exports = exports['default'];

/***/ },
/* 381 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;
	
	  var prefixedKeyframes = 'keyframes';
	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.CSS + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};
	
	module.exports = exports['default'];

/***/ },
/* 382 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = ['zoom-in', 'zoom-out', 'grab', 'grabbing'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (property === 'cursor' && values.indexOf(value) > -1 && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 383 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = ['flex', 'inline-flex'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (property === 'display' && values.indexOf(value) > -1 && (browser === 'chrome' && (version < 29 || version > 20) || (browser === 'safari' || browser === 'ios_saf') && (version < 9 || version > 6) || browser === 'opera' && (version == 15 || version == 16))) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 384 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: '-ms-flexbox',
	  'inline-flex': '-ms-inline-flexbox'
	};
	
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	var properties = Object.keys(alternativeProps).concat('display');
	
	exports['default'] = function (property, value, _ref2, styles) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	
	  if (properties.indexOf(property) > -1 && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    delete styles[property];
	    return _defineProperty({}, alternativeProps[property] || property, alternativeValues[value] || value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 385 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	var properties = Object.keys(alternativeProps).concat(['alignContent', 'alignSelf', 'display', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection']);
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (properties.indexOf(property) > -1 && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return { display: prefix.CSS + alternativeValues[value] };
	    }
	    return _defineProperty({}, alternativeProps[property] || property, alternativeValues[value] || value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 386 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = ['background', 'backgroundImage'];
	var values = ['linear-gradient', 'radial-gradient', 'repeating-linear-gradient', 'repeating-radial-gradient'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (properties.indexOf(property) > -1 && values.indexOf(value) > -1 && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 387 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = ['maxHeight', 'maxWidth', 'width', 'height', 'columnWidth', 'minWidth', 'minHeight'];
	var values = ['min-content', 'max-content', 'fill-available', 'fit-content', 'contain-floats'];
	
	exports['default'] = function (property, value, _ref2) {
	  var prefix = _ref2.prefix;
	
	  /**
	   * This actually is only available with prefixes
	   * NOTE: This might change in the feature
	   */
	  if (properties.indexOf(property) > -1 && values.indexOf(value) > -1) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 388 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = arrayCopy;


/***/ },
/* 389 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 390 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 391 */,
/* 392 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = bindCallback;


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var bindCallback = __webpack_require__(392),
	    isIterateeCall = __webpack_require__(394),
	    restParam = __webpack_require__(399);
	
	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 394 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(185);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');
	
	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }
	
	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }
	
	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);
	
	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;
	
	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = debounce;


/***/ },
/* 396 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(185),
	    isArguments = __webpack_require__(79),
	    isArray = __webpack_require__(111);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.3.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var arrayCopy = __webpack_require__(388),
	    arrayEach = __webpack_require__(389),
	    createAssigner = __webpack_require__(393),
	    isArguments = __webpack_require__(79),
	    isArray = __webpack_require__(111),
	    isPlainObject = __webpack_require__(186),
	    isTypedArray = __webpack_require__(396),
	    keys = __webpack_require__(397),
	    toPlainObject = __webpack_require__(400);
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.merge` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {Object} Returns `object`.
	 */
	function baseMerge(object, source, customizer, stackA, stackB) {
	  if (!isObject(object)) {
	    return object;
	  }
	  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	      props = isSrcArr ? undefined : keys(source);
	
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObjectLike(srcValue)) {
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	    }
	    else {
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;
	
	      if (isCommon) {
	        result = srcValue;
	      }
	      if ((result !== undefined || (isSrcArr && !(key in object))) &&
	          (isCommon || (result === result ? (result !== value) : (value === value)))) {
	        object[key] = result;
	      }
	    }
	  });
	  return object;
	}
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	  var length = stackA.length,
	      srcValue = source[key];
	
	  while (length--) {
	    if (stackA[length] == srcValue) {
	      object[key] = stackB[length];
	      return;
	    }
	  }
	  var value = object[key],
	      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	      isCommon = result === undefined;
	
	  if (isCommon) {
	    result = srcValue;
	    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	      result = isArray(value)
	        ? value
	        : (isArrayLike(value) ? arrayCopy(value) : []);
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      result = isArguments(value)
	        ? toPlainObject(value)
	        : (isPlainObject(value) ? value : {});
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate
	  // it with its merged value.
	  stackA.push(srcValue);
	  stackB.push(result);
	
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	  } else if (result === result ? (result !== value) : (value === value)) {
	    object[key] = result;
	  }
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Recursively merges own enumerable properties of the source object(s), that
	 * don't resolve to `undefined` into the destination object. Subsequent sources
	 * overwrite property assignments of previous sources. If `customizer` is
	 * provided it is invoked to produce the merged values of the destination and
	 * source properties. If `customizer` returns `undefined` merging is handled
	 * by the method instead. The `customizer` is bound to `thisArg` and invoked
	 * with five arguments: (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 *
	 * // using a customizer callback
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.merge(object, other, function(a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);
	
	module.exports = merge;


/***/ },
/* 399 */
/***/ function(module, exports) {

	/**
	 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseCopy = __webpack_require__(390),
	    keysIn = __webpack_require__(187);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return baseCopy(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(408),
	    baseFlatten = __webpack_require__(409),
	    isArrayLike = __webpack_require__(81),
	    isObjectLike = __webpack_require__(39),
	    restParam = __webpack_require__(403);
	
	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },
/* 402 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 403 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(422),
	    getNative = __webpack_require__(80);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 405 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 406 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(415),
	    baseMatchesProperty = __webpack_require__(416),
	    bindCallback = __webpack_require__(420),
	    identity = __webpack_require__(114),
	    property = __webpack_require__(439);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(412),
	    cacheIndexOf = __webpack_require__(421),
	    createCache = __webpack_require__(424);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(405),
	    isArguments = __webpack_require__(112),
	    isArray = __webpack_require__(41),
	    isArrayLike = __webpack_require__(81),
	    isObjectLike = __webpack_require__(39);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(423);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(410),
	    keys = __webpack_require__(113);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(431);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(426),
	    equalByTag = __webpack_require__(427),
	    equalObjects = __webpack_require__(428),
	    isArray = __webpack_require__(41),
	    isTypedArray = __webpack_require__(435);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(189),
	    toObject = __webpack_require__(40);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(414),
	    getMatchData = __webpack_require__(430),
	    toObject = __webpack_require__(40);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(188),
	    baseIsEqual = __webpack_require__(189),
	    baseSlice = __webpack_require__(418),
	    isArray = __webpack_require__(41),
	    isKey = __webpack_require__(192),
	    isStrictComparable = __webpack_require__(193),
	    last = __webpack_require__(402),
	    toObject = __webpack_require__(40),
	    toPath = __webpack_require__(194);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(188),
	    toPath = __webpack_require__(194);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 418 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 419 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(114);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(40);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(404),
	    getNative = __webpack_require__(80);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(407),
	    baseForOwn = __webpack_require__(411);
	
	/**
	 * Creates a function for `_.mapKeys` or `_.mapValues`.
	 *
	 * @private
	 * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	 * @returns {Function} Returns the new map function.
	 */
	function createObjectMapper(isMapKeys) {
	  return function(object, iteratee, thisArg) {
	    var result = {};
	    iteratee = baseCallback(iteratee, thisArg, 3);
	
	    baseForOwn(object, function(value, key, object) {
	      var mapped = iteratee(value, key, object);
	      key = isMapKeys ? mapped : key;
	      value = isMapKeys ? value : mapped;
	      result[key] = value;
	    });
	    return result;
	  };
	}
	
	module.exports = createObjectMapper;


/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(406);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 427 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(113);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(190);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(193),
	    pairs = __webpack_require__(438);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 431 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(112),
	    isArray = __webpack_require__(41),
	    isIndex = __webpack_require__(191),
	    isLength = __webpack_require__(61),
	    keysIn = __webpack_require__(436);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(433),
	    isObjectLike = __webpack_require__(39);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(61),
	    isObjectLike = __webpack_require__(39);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(112),
	    isArray = __webpack_require__(41),
	    isIndex = __webpack_require__(191),
	    isLength = __webpack_require__(61),
	    isObject = __webpack_require__(32);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var createObjectMapper = __webpack_require__(425);
	
	/**
	 * Creates an object with the same keys as `object` and values generated by
	 * running each own enumerable property of `object` through `iteratee`. The
	 * iteratee function is bound to `thisArg` and invoked with three arguments:
	 * (value, key, object).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	 *   return n * 3;
	 * });
	 * // => { 'a': 3, 'b': 6 }
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * // using the `_.property` callback shorthand
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	var mapValues = createObjectMapper();
	
	module.exports = mapValues;


/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(113),
	    toObject = __webpack_require__(40);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(190),
	    basePropertyDeep = __webpack_require__(417),
	    isKey = __webpack_require__(192);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesTypography = __webpack_require__(116);
	
	var _stylesTypography2 = _interopRequireDefault(_stylesTypography);
	
	var _iconButton = __webpack_require__(115);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _svgIconsNavigationMenu = __webpack_require__(458);
	
	var _svgIconsNavigationMenu2 = _interopRequireDefault(_svgIconsNavigationMenu);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var _paper = __webpack_require__(197);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _utilsPropTypes = __webpack_require__(85);
	
	var _utilsPropTypes2 = _interopRequireDefault(_utilsPropTypes);
	
	var AppBar = _react2['default'].createClass({
	  displayName: 'AppBar',
	
	  mixins: [_mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  propTypes: {
	    /**
	     * Can be used to render a tab inside an app bar for instance.
	     */
	    children: _react2['default'].PropTypes.node,
	
	    /**
	     * Applied to the app bar's root element.
	     */
	    className: _react2['default'].PropTypes.string,
	
	    /**
	     * The classname of the icon on the left of the app bar.
	     * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
	     */
	    iconClassNameLeft: _react2['default'].PropTypes.string,
	
	    /**
	     * Similiar to the iconClassNameLeft prop except that
	     * it applies to the icon displayed on the right of the app bar.
	     */
	    iconClassNameRight: _react2['default'].PropTypes.string,
	
	    /**
	     * The custom element to be displayed on the left side of the
	     * app bar such as an SvgIcon.
	     */
	    iconElementLeft: _react2['default'].PropTypes.element,
	
	    /**
	     * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
	     */
	    iconElementRight: _react2['default'].PropTypes.element,
	
	    /**
	     * Override the inline-styles of the element displayed on the right side of the app bar.
	     */
	    iconStyleRight: _react2['default'].PropTypes.object,
	
	    /**
	     * Callback function for when the left icon is selected via a touch tap.
	     */
	    onLeftIconButtonTouchTap: _react2['default'].PropTypes.func,
	
	    /**
	     * Callback function for when the right icon is selected via a touch tap.
	     */
	    onRightIconButtonTouchTap: _react2['default'].PropTypes.func,
	
	    /**
	     * Callback function for when the title text is selected via a touch tap.
	     */
	    onTitleTouchTap: _react2['default'].PropTypes.func,
	
	    /**
	     * Determines whether or not to display the Menu icon next to the title.
	     * Setting this prop to false will hide the icon.
	     */
	    showMenuIconButton: _react2['default'].PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the app bar's root element.
	     */
	    style: _react2['default'].PropTypes.object,
	
	    /**
	     * The title to display on the app bar.
	     */
	    title: _react2['default'].PropTypes.node,
	
	    /**
	     * Override the inline-styles of the app bar's title element.
	     */
	    titleStyle: _react2['default'].PropTypes.object,
	
	    /**
	     * The zDepth of the app bar.
	     * The shadow of the app bar is also dependent on this property.
	     */
	    zDepth: _utilsPropTypes2['default'].zDepth
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      showMenuIconButton: true,
	      title: '',
	      zDepth: 1
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (true) {
	      if (this.props.iconElementLeft && this.props.iconClassNameLeft) {
	        console.warn('Properties iconClassNameLeft and iconElementLeft cannot be simultaneously ' + 'defined. Please use one or the other.');
	      }
	
	      if (this.props.iconElementRight && this.props.iconClassNameRight) {
	        console.warn('Properties iconClassNameRight and iconElementRight cannot be simultaneously ' + 'defined. Please use one or the other.');
	      }
	    }
	  },
	
	  getStyles: function getStyles() {
	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;
	
	    var themeVariables = muiTheme.appBar;
	    var iconButtonSize = muiTheme.button.iconButtonSize;
	    var flatButtonSize = 36;
	
	    var styles = {
	      root: {
	        position: 'relative',
	        zIndex: muiTheme.zIndex.appBar,
	        width: '100%',
	        display: 'flex',
	        minHeight: themeVariables.height,
	        backgroundColor: themeVariables.color,
	        paddingLeft: rawTheme.spacing.desktopGutter,
	        paddingRight: rawTheme.spacing.desktopGutter
	      },
	      title: {
	        whiteSpace: 'nowrap',
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        margin: 0,
	        paddingTop: 0,
	        letterSpacing: 0,
	        fontSize: 24,
	        fontWeight: _stylesTypography2['default'].fontWeightNormal,
	        color: themeVariables.textColor,
	        lineHeight: themeVariables.height + 'px'
	      },
	      mainElement: {
	        boxFlex: 1,
	        flex: '1'
	      },
	      iconButton: {
	        style: {
	          marginTop: (themeVariables.height - iconButtonSize) / 2,
	          marginRight: 8,
	          marginLeft: -16
	        },
	        iconStyle: {
	          fill: themeVariables.textColor,
	          color: themeVariables.textColor
	        }
	      },
	      flatButton: {
	        color: themeVariables.textColor,
	        marginTop: (iconButtonSize - flatButtonSize) / 2 + 2
	      }
	    };
	
	    return styles;
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var title = _props.title;
	    var titleStyle = _props.titleStyle;
	    var iconStyleRight = _props.iconStyleRight;
	    var showMenuIconButton = _props.showMenuIconButton;
	    var iconElementLeft = _props.iconElementLeft;
	    var iconElementRight = _props.iconElementRight;
	    var iconClassNameLeft = _props.iconClassNameLeft;
	    var iconClassNameRight = _props.iconClassNameRight;
	    var className = _props.className;
	    var style = _props.style;
	    var zDepth = _props.zDepth;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['title', 'titleStyle', 'iconStyleRight', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'className', 'style', 'zDepth', 'children']);
	
	    var menuElementLeft = undefined;
	    var menuElementRight = undefined;
	    var styles = this.getStyles();
	    var iconRightStyle = this.mergeStyles(styles.iconButton.style, {
	      marginRight: -16,
	      marginLeft: 'auto'
	    }, iconStyleRight);
	    var titleElement = undefined;
	
	    if (title) {
	      // If the title is a string, wrap in an h1 tag.
	      // If not, just use it as a node.
	      titleElement = typeof title === 'string' || title instanceof String ? _react2['default'].createElement(
	        'h1',
	        { onTouchTap: this._onTitleTouchTap,
	          style: this.prepareStyles(styles.title, styles.mainElement, titleStyle) },
	        title
	      ) : _react2['default'].createElement(
	        'div',
	        { onTouchTap: this._onTitleTouchTap,
	          style: this.prepareStyles(styles.title, styles.mainElement, titleStyle) },
	        title
	      );
	    }
	
	    if (showMenuIconButton) {
	      if (iconElementLeft) {
	        switch (iconElementLeft.type.displayName) {
	          case 'IconButton':
	            iconElementLeft = _react2['default'].cloneElement(iconElementLeft, {
	              iconStyle: this.mergeStyles(styles.iconButton.iconStyle)
	            });
	            break;
	        }
	
	        menuElementLeft = _react2['default'].createElement(
	          'div',
	          { style: this.prepareStyles(styles.iconButton.style) },
	          iconElementLeft
	        );
	      } else {
	        var child = iconClassNameLeft ? '' : _react2['default'].createElement(_svgIconsNavigationMenu2['default'], { style: this.mergeStyles(styles.iconButton.iconStyle) });
	        menuElementLeft = _react2['default'].createElement(
	          _iconButton2['default'],
	          {
	            style: this.mergeStyles(styles.iconButton.style),
	            iconStyle: this.mergeStyles(styles.iconButton.iconStyle),
	            iconClassName: iconClassNameLeft,
	            onTouchTap: this._onLeftIconButtonTouchTap },
	          child
	        );
	      }
	    }
	
	    if (iconElementRight) {
	      switch (iconElementRight.type.displayName) {
	        case 'IconMenu':
	        case 'IconButton':
	          iconElementRight = _react2['default'].cloneElement(iconElementRight, {
	            iconStyle: this.mergeStyles(styles.iconButton.iconStyle)
	          });
	          break;
	
	        case 'FlatButton':
	          iconElementRight = _react2['default'].cloneElement(iconElementRight, {
	            style: this.mergeStyles(styles.flatButton, iconElementRight.props.style)
	          });
	          break;
	      }
	
	      menuElementRight = _react2['default'].createElement(
	        'div',
	        { style: this.prepareStyles(iconRightStyle) },
	        iconElementRight
	      );
	    } else if (iconClassNameRight) {
	      menuElementRight = _react2['default'].createElement(_iconButton2['default'], {
	        style: iconRightStyle,
	        iconStyle: this.mergeStyles(styles.iconButton.iconStyle),
	        iconClassName: iconClassNameRight,
	        onTouchTap: this._onRightIconButtonTouchTap });
	    }
	
	    return _react2['default'].createElement(
	      _paper2['default'],
	      _extends({}, other, {
	        rounded: false,
	        className: className,
	        style: this.mergeStyles(styles.root, style),
	        zDepth: zDepth }),
	      menuElementLeft,
	      titleElement,
	      menuElementRight,
	      children
	    );
	  },
	
	  _onLeftIconButtonTouchTap: function _onLeftIconButtonTouchTap(event) {
	    if (this.props.onLeftIconButtonTouchTap) {
	      this.props.onLeftIconButtonTouchTap(event);
	    }
	  },
	
	  _onRightIconButtonTouchTap: function _onRightIconButtonTouchTap(event) {
	    if (this.props.onRightIconButtonTouchTap) {
	      this.props.onRightIconButtonTouchTap(event);
	    }
	  },
	
	  _onTitleTouchTap: function _onTitleTouchTap(event) {
	    if (this.props.onTitleTouchTap) {
	      this.props.onTitleTouchTap(event);
	    }
	  }
	
	});
	
	exports['default'] = AppBar;
	module.exports = exports['default'];

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _muiThemeable = __webpack_require__(448);
	
	var _muiThemeable2 = _interopRequireDefault(_muiThemeable);
	
	var _utilsStyles = __webpack_require__(200);
	
	var _utilsStyles2 = _interopRequireDefault(_utilsStyles);
	
	var propTypes = {
	  /**
	   * CSS class that will be added to the divider's root element
	   */
	  className: _react2['default'].PropTypes.string,
	
	  /**
	   * If true, the divider will be indented 72px
	   */
	  inset: _react2['default'].PropTypes.bool,
	
	  /**
	   * Override the inline-styles of the list divider's root element
	   */
	  style: _react2['default'].PropTypes.object
	};
	
	var defaultProps = {
	  inset: false
	};
	
	var Divider = function Divider(_ref) {
	  var inset = _ref.inset;
	  var muiTheme = _ref.muiTheme;
	  var style = _ref.style;
	
	  var other = _objectWithoutProperties(_ref, ['inset', 'muiTheme', 'style']);
	
	  var styles = {
	    root: {
	      margin: 0,
	      marginTop: -1,
	      marginLeft: inset ? 72 : 0,
	      height: 1,
	      border: 'none',
	      backgroundColor: muiTheme.rawTheme.palette.borderColor
	    }
	  };
	
	  return _react2['default'].createElement('hr', _extends({}, other, { style: _utilsStyles2['default'].prepareStyles(muiTheme, styles.root, style) }));
	};
	
	Divider.displayName = 'Divider';
	Divider.propTypes = propTypes;
	Divider.defaultProps = defaultProps;
	Divider = (0, _muiThemeable2['default'])(Divider);
	
	exports['default'] = Divider;
	module.exports = exports['default'];

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var FontIcon = _react2['default'].createClass({
	  displayName: 'FontIcon',
	
	  mixins: [_mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  propTypes: {
	    color: _react2['default'].PropTypes.string,
	    hoverColor: _react2['default'].PropTypes.string,
	    onMouseEnter: _react2['default'].PropTypes.func,
	    onMouseLeave: _react2['default'].PropTypes.func,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['color', 'hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
	
	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var offColor = color ? color : style && style.color ? style.color : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;
	
	    var mergedStyles = this.prepareStyles({
	      position: 'relative',
	      fontSize: spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _stylesTransitions2['default'].easeOut()
	    }, style, {
	      color: this.state.hovered ? onColor : offColor
	    });
	
	    return _react2['default'].createElement('span', _extends({}, other, {
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      style: mergedStyles }));
	  },
	
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: false });
	    if (this.props.onMouseLeave) {
	      this.props.onMouseLeave(e);
	    }
	  },
	
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: true });
	    if (this.props.onMouseEnter) {
	      this.props.onMouseEnter(e);
	    }
	  }
	});
	
	exports['default'] = FontIcon;
	module.exports = exports['default'];

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var GridList = _react2['default'].createClass({
	  displayName: 'GridList',
	
	  mixins: [_mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  propTypes: {
	    cellHeight: _react2['default'].PropTypes.number,
	    children: _react2['default'].PropTypes.node,
	    cols: _react2['default'].PropTypes.number,
	    padding: _react2['default'].PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      cols: 2,
	      padding: 4,
	      cellHeight: 180
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  getStyles: function getStyles() {
	    return {
	      root: {
	        display: 'flex',
	        flexWrap: 'wrap',
	        margin: -this.props.padding / 2
	      },
	      item: {
	        boxSizing: 'border-box',
	        padding: this.props.padding / 2
	      }
	    };
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var _props = this.props;
	    var cols = _props.cols;
	    var padding = _props.padding;
	    var cellHeight = _props.cellHeight;
	    var children = _props.children;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['cols', 'padding', 'cellHeight', 'children', 'style']);
	
	    var styles = this.getStyles();
	
	    var mergedRootStyles = this.mergeStyles(styles.root, style);
	
	    var wrappedChildren = _react2['default'].Children.map(children, function (currentChild) {
	      var childCols = currentChild.props.cols || 1;
	      var childRows = currentChild.props.rows || 1;
	      var itemStyle = _this.mergeStyles(styles.item, {
	        width: 100 / cols * childCols + '%',
	        height: cellHeight * childRows + padding
	      });
	
	      return _react2['default'].createElement(
	        'div',
	        { style: _this.prepareStyles(itemStyle) },
	        currentChild
	      );
	    });
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({ style: this.prepareStyles(mergedRootStyles) }, other),
	      wrappedChildren
	    );
	  }
	});
	
	exports['default'] = GridList;
	module.exports = exports['default'];

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var GridTile = _react2['default'].createClass({
	  displayName: 'GridTile',
	
	  mixins: [_mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  propTypes: {
	    actionIcon: _react2['default'].PropTypes.element,
	    actionPosition: _react2['default'].PropTypes.oneOf(['left', 'right']),
	    children: _react2['default'].PropTypes.node,
	    cols: _react2['default'].PropTypes.number,
	    rootClass: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]),
	    rows: _react2['default'].PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object,
	    subtitle: _react2['default'].PropTypes.node,
	    title: _react2['default'].PropTypes.node,
	    titleBackground: _react2['default'].PropTypes.string,
	    titlePosition: _react2['default'].PropTypes.oneOf(['top', 'bottom'])
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      titlePosition: 'bottom',
	      titleBackground: 'rgba(0, 0, 0, 0.4)',
	      actionPosition: 'right',
	      cols: 1,
	      rows: 1,
	      rootClass: 'div'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  getStyles: function getStyles() {
	    var _titleBar;
	
	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var themeVariables = this.state.muiTheme.gridTile;
	    var actionPos = this.props.actionIcon ? this.props.actionPosition : null;
	    var gutterLess = spacing.desktopGutterLess;
	
	    var styles = {
	      root: {
	        position: 'relative',
	        display: 'block',
	        height: '100%',
	        overflow: 'hidden'
	      },
	      titleBar: (_titleBar = {
	        position: 'absolute',
	        left: 0,
	        right: 0
	      }, _defineProperty(_titleBar, this.props.titlePosition, 0), _defineProperty(_titleBar, 'height', this.props.subtitle ? 68 : 48), _defineProperty(_titleBar, 'background', this.props.titleBackground), _defineProperty(_titleBar, 'display', 'flex'), _defineProperty(_titleBar, 'alignItems', 'center'), _titleBar),
	      titleWrap: {
	        flexGrow: 1,
	        marginLeft: actionPos === 'right' ? gutterLess : 0,
	        marginRight: actionPos === 'left' ? gutterLess : 0,
	        color: themeVariables.textColor,
	        overflow: 'hidden'
	      },
	      title: {
	        fontSize: '16px',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        whiteSpace: 'nowrap'
	      },
	      subtitle: {
	        fontSize: '12px',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        whiteSpace: 'nowrap'
	      },
	      actionIcon: {
	        order: actionPos === 'left' ? -1 : 1
	      },
	      childImg: {
	        height: '100%',
	        transform: 'translateX(-50%)',
	        position: 'relative',
	        left: '50%'
	      }
	    };
	    return styles;
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._ensureImageCover();
	  },
	
	  componeneDidUpdate: function componeneDidUpdate() {
	    this._ensureImageCover();
	  },
	
	  _ensureImageCover: function _ensureImageCover() {
	    var imgEl = _reactDom2['default'].findDOMNode(this.refs.img);
	
	    if (imgEl) {
	      (function () {
	        var fit = function fit() {
	          if (imgEl.offsetWidth < imgEl.parentNode.offsetWidth) {
	            imgEl.style.height = 'auto';
	            imgEl.style.left = '0';
	            imgEl.style.width = '100%';
	            imgEl.style.top = '50%';
	            imgEl.style.transform = imgEl.style.WebkitTransform = 'translateY(-50%)';
	          }
	          imgEl.removeEventListener('load', fit);
	          imgEl = null; // prevent closure memory leak
	        };
	        if (imgEl.complete) {
	          fit();
	        } else {
	          imgEl.addEventListener('load', fit);
	        }
	      })();
	    }
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var _props = this.props;
	    var title = _props.title;
	    var subtitle = _props.subtitle;
	    var titlePosition = _props.titlePosition;
	    var titleBackground = _props.titleBackground;
	    var actionIcon = _props.actionIcon;
	    var actionPosition = _props.actionPosition;
	    var style = _props.style;
	    var children = _props.children;
	    var rootClass = _props.rootClass;
	
	    var other = _objectWithoutProperties(_props, ['title', 'subtitle', 'titlePosition', 'titleBackground', 'actionIcon', 'actionPosition', 'style', 'children', 'rootClass']);
	
	    var styles = this.getStyles();
	
	    var mergedRootStyles = this.prepareStyles(styles.root, style);
	
	    var titleBar = null;
	
	    if (title) {
	      titleBar = _react2['default'].createElement(
	        'div',
	        { style: this.prepareStyles(styles.titleBar) },
	        _react2['default'].createElement(
	          'div',
	          { style: this.prepareStyles(styles.titleWrap) },
	          _react2['default'].createElement(
	            'div',
	            { style: this.prepareStyles(styles.title) },
	            title
	          ),
	          subtitle ? _react2['default'].createElement(
	            'div',
	            { style: this.prepareStyles(styles.subtitle) },
	            subtitle
	          ) : null
	        ),
	        actionIcon ? _react2['default'].createElement(
	          'div',
	          { style: this.prepareStyles(styles.actionIcon) },
	          actionIcon
	        ) : null
	      );
	    }
	
	    var newChildren = children;
	
	    // if there is an image passed as children
	    // clone it an put our styles
	    if (_react2['default'].Children.count(children) === 1) {
	      newChildren = _react2['default'].Children.map(children, function (child) {
	        if (child.type === 'img') {
	          return _react2['default'].cloneElement(child, {
	            ref: 'img',
	            style: _this.prepareStyles(styles.childImg, child.props.style)
	          });
	        } else {
	          return child;
	        }
	      });
	    }
	
	    var RootTag = rootClass;
	    return _react2['default'].createElement(
	      RootTag,
	      _extends({ style: mergedRootStyles }, other),
	      newChildren,
	      titleBar
	    );
	  }
	});
	
	exports['default'] = GridTile;
	module.exports = exports['default'];

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _utilsColorManipulator = __webpack_require__(117);
	
	var _utilsColorManipulator2 = _interopRequireDefault(_utilsColorManipulator);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesColors = __webpack_require__(33);
	
	var _stylesColors2 = _interopRequireDefault(_stylesColors);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _stylesTypography = __webpack_require__(116);
	
	var _stylesTypography2 = _interopRequireDefault(_stylesTypography);
	
	var _enhancedButton = __webpack_require__(195);
	
	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);
	
	var _iconButton = __webpack_require__(115);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _svgIconsNavigationArrowDropUp = __webpack_require__(457);
	
	var _svgIconsNavigationArrowDropUp2 = _interopRequireDefault(_svgIconsNavigationArrowDropUp);
	
	var _svgIconsNavigationArrowDropDown = __webpack_require__(456);
	
	var _svgIconsNavigationArrowDropDown2 = _interopRequireDefault(_svgIconsNavigationArrowDropDown);
	
	var _nestedList = __webpack_require__(446);
	
	var _nestedList2 = _interopRequireDefault(_nestedList);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var ListItem = _react2['default'].createClass({
	  displayName: 'ListItem',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  propTypes: {
	    autoGenerateNestedIndicator: _react2['default'].PropTypes.bool,
	    children: _react2['default'].PropTypes.node,
	    disableKeyboardFocus: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    initiallyOpen: _react2['default'].PropTypes.bool,
	    innerDivStyle: _react2['default'].PropTypes.object,
	    innerStyle: _react2['default'].PropTypes.object,
	    insetChildren: _react2['default'].PropTypes.bool,
	    leftAvatar: _react2['default'].PropTypes.element,
	    leftCheckbox: _react2['default'].PropTypes.element,
	    leftIcon: _react2['default'].PropTypes.element,
	    nestedItems: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element),
	    nestedLevel: _react2['default'].PropTypes.number,
	    onKeyboardFocus: _react2['default'].PropTypes.func,
	    onMouseEnter: _react2['default'].PropTypes.func,
	    onMouseLeave: _react2['default'].PropTypes.func,
	    onNestedListToggle: _react2['default'].PropTypes.func,
	    onTouchStart: _react2['default'].PropTypes.func,
	    onTouchTap: _react2['default'].PropTypes.func,
	    primaryText: _react2['default'].PropTypes.node,
	    primaryTogglesNestedList: _react2['default'].PropTypes.bool,
	    rightAvatar: _react2['default'].PropTypes.element,
	    rightIcon: _react2['default'].PropTypes.element,
	    rightIconButton: _react2['default'].PropTypes.element,
	    rightToggle: _react2['default'].PropTypes.element,
	    secondaryText: _react2['default'].PropTypes.node,
	    secondaryTextLines: _react2['default'].PropTypes.oneOf([1, 2]),
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoGenerateNestedIndicator: true,
	      initiallyOpen: false,
	      nestedItems: [],
	      nestedLevel: 0,
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      onNestedListToggle: function onNestedListToggle() {},
	      onTouchStart: function onTouchStart() {},
	      primaryTogglesNestedList: false,
	      secondaryTextLines: 1
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      isKeyboardFocused: false,
	      open: this.props.initiallyOpen,
	      rightIconButtonHovered: false,
	      rightIconButtonKeyboardFocused: false,
	      touch: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var autoGenerateNestedIndicator = _props.autoGenerateNestedIndicator;
	    var children = _props.children;
	    var disabled = _props.disabled;
	    var disableKeyboardFocus = _props.disableKeyboardFocus;
	    var innerDivStyle = _props.innerDivStyle;
	    var insetChildren = _props.insetChildren;
	    var leftAvatar = _props.leftAvatar;
	    var leftCheckbox = _props.leftCheckbox;
	    var leftIcon = _props.leftIcon;
	    var nestedItems = _props.nestedItems;
	    var nestedLevel = _props.nestedLevel;
	    var onKeyboardFocus = _props.onKeyboardFocus;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var onTouchStart = _props.onTouchStart;
	    var onTouchTap = _props.onTouchTap;
	    var rightAvatar = _props.rightAvatar;
	    var rightIcon = _props.rightIcon;
	    var rightIconButton = _props.rightIconButton;
	    var rightToggle = _props.rightToggle;
	    var primaryText = _props.primaryText;
	    var primaryTogglesNestedList = _props.primaryTogglesNestedList;
	    var secondaryText = _props.secondaryText;
	    var secondaryTextLines = _props.secondaryTextLines;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['autoGenerateNestedIndicator', 'children', 'disabled', 'disableKeyboardFocus', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'onKeyboardFocus', 'onMouseLeave', 'onMouseEnter', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
	
	    var textColor = this.state.muiTheme.rawTheme.palette.textColor;
	    var hoverColor = _utilsColorManipulator2['default'].fade(textColor, 0.1);
	    var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
	    var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
	    var twoLine = secondaryText && secondaryTextLines === 1;
	    var threeLine = secondaryText && secondaryTextLines > 1;
	    var hasCheckbox = leftCheckbox || rightToggle;
	
	    var styles = {
	      root: {
	        backgroundColor: (this.state.isKeyboardFocused || this.state.hovered) && !this.state.rightIconButtonHovered && !this.state.rightIconButtonKeyboardFocused ? hoverColor : null,
	        color: textColor,
	        display: 'block',
	        fontSize: 16,
	        lineHeight: '16px',
	        position: 'relative',
	        transition: _stylesTransitions2['default'].easeOut()
	      },
	
	      //This inner div is needed so that ripples will span the entire container
	      innerDiv: {
	        marginLeft: nestedLevel * this.state.muiTheme.listItem.nestedLevelDepth,
	        paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
	        paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
	        paddingBottom: singleAvatar ? 20 : 16,
	        paddingTop: singleNoAvatar || threeLine ? 16 : 20,
	        position: 'relative'
	      },
	
	      icons: {
	        height: 24,
	        width: 24,
	        display: 'block',
	        position: 'absolute',
	        top: twoLine ? 12 : singleAvatar ? 4 : 0,
	        margin: 12
	      },
	
	      leftIcon: {
	        color: _stylesColors2['default'].grey600,
	        fill: _stylesColors2['default'].grey600,
	        left: 4
	      },
	
	      rightIcon: {
	        color: _stylesColors2['default'].grey400,
	        fill: _stylesColors2['default'].grey400,
	        right: 4
	      },
	
	      avatars: {
	        position: 'absolute',
	        top: singleAvatar ? 8 : 16
	      },
	
	      label: {
	        cursor: 'pointer'
	      },
	
	      leftAvatar: {
	        left: 16
	      },
	
	      rightAvatar: {
	        right: 16
	      },
	
	      leftCheckbox: {
	        position: 'absolute',
	        display: 'block',
	        width: 24,
	        top: twoLine ? 24 : singleAvatar ? 16 : 12,
	        left: 16
	      },
	
	      primaryText: {},
	
	      rightIconButton: {
	        position: 'absolute',
	        display: 'block',
	        top: twoLine ? 12 : singleAvatar ? 4 : 0,
	        right: 4
	      },
	
	      rightToggle: {
	        position: 'absolute',
	        display: 'block',
	        width: 54,
	        top: twoLine ? 25 : singleAvatar ? 17 : 13,
	        right: 8
	      },
	
	      secondaryText: {
	        fontSize: 14,
	        lineHeight: threeLine ? '18px' : '16px',
	        height: threeLine ? 36 : 16,
	        margin: 0,
	        marginTop: 4,
	        color: _stylesTypography2['default'].textLightBlack,
	
	        //needed for 2 and 3 line ellipsis
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        whiteSpace: threeLine ? null : 'nowrap',
	        display: threeLine ? '-webkit-box' : null,
	        WebkitLineClamp: threeLine ? 2 : null,
	        WebkitBoxOrient: threeLine ? 'vertical' : null
	      }
	    };
	
	    var contentChildren = [children];
	
	    if (leftIcon) {
	      this._pushElement(contentChildren, leftIcon, this.mergeStyles(styles.icons, styles.leftIcon));
	    }
	
	    if (rightIcon) {
	      this._pushElement(contentChildren, rightIcon, this.mergeStyles(styles.icons, styles.rightIcon));
	    }
	
	    if (leftAvatar) {
	      this._pushElement(contentChildren, leftAvatar, this.mergeStyles(styles.avatars, styles.leftAvatar));
	    }
	
	    if (rightAvatar) {
	      this._pushElement(contentChildren, rightAvatar, this.mergeStyles(styles.avatars, styles.rightAvatar));
	    }
	
	    if (leftCheckbox) {
	      this._pushElement(contentChildren, leftCheckbox, this.mergeStyles(styles.leftCheckbox));
	    }
	
	    //RightIconButtonElement
	    var hasNestListItems = nestedItems.length;
	    var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
	    var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;
	
	    if (rightIconButton || needsNestedIndicator) {
	      var rightIconButtonElement = rightIconButton;
	      var rightIconButtonHandlers = {
	        onKeyboardFocus: this._handleRightIconButtonKeyboardFocus,
	        onMouseEnter: this._handleRightIconButtonMouseEnter,
	        onMouseLeave: this._handleRightIconButtonMouseLeave,
	        onTouchTap: this._handleRightIconButtonTouchTap,
	        onMouseDown: this._handleRightIconButtonMouseUp,
	        onMouseUp: this._handleRightIconButtonMouseUp
	      };
	
	      // Create a nested list indicator icon if we don't have an icon on the right
	      if (needsNestedIndicator) {
	        rightIconButtonElement = this.state.open ? _react2['default'].createElement(
	          _iconButton2['default'],
	          null,
	          _react2['default'].createElement(_svgIconsNavigationArrowDropUp2['default'], null)
	        ) : _react2['default'].createElement(
	          _iconButton2['default'],
	          null,
	          _react2['default'].createElement(_svgIconsNavigationArrowDropDown2['default'], null)
	        );
	        rightIconButtonHandlers.onTouchTap = this._handleNestedListToggle;
	      }
	
	      this._pushElement(contentChildren, rightIconButtonElement, this.mergeStyles(styles.rightIconButton), rightIconButtonHandlers);
	    }
	
	    if (rightToggle) {
	      this._pushElement(contentChildren, rightToggle, this.mergeStyles(styles.rightToggle));
	    }
	
	    if (primaryText) {
	      var secondaryTextElement = this._createTextElement(styles.primaryText, primaryText, 'primaryText');
	      contentChildren.push(secondaryTextElement);
	    }
	
	    if (secondaryText) {
	      var secondaryTextElement = this._createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
	      contentChildren.push(secondaryTextElement);
	    }
	
	    var nestedList = nestedItems.length ? _react2['default'].createElement(
	      _nestedList2['default'],
	      { nestedLevel: nestedLevel + 1, open: this.state.open },
	      nestedItems
	    ) : undefined;
	
	    return _react2['default'].createElement(
	      'div',
	      null,
	      hasCheckbox ? this._createLabelElement(styles, contentChildren) : disabled ? this._createDisabledElement(styles, contentChildren) : _react2['default'].createElement(
	        _enhancedButton2['default'],
	        _extends({}, other, {
	          disabled: disabled,
	          disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
	          linkButton: true,
	          onKeyboardFocus: this._handleKeyboardFocus,
	          onMouseLeave: this._handleMouseLeave,
	          onMouseEnter: this._handleMouseEnter,
	          onTouchStart: this._handleTouchStart,
	          onTouchTap: primaryTogglesNestedList ? this._handleNestedListToggle : onTouchTap,
	          ref: 'enhancedButton',
	          style: this.mergeStyles(styles.root, style) }),
	        _react2['default'].createElement(
	          'div',
	          { style: this.prepareStyles(styles.innerDiv, innerDivStyle) },
	          contentChildren
	        )
	      ),
	      nestedList
	    );
	  },
	
	  applyFocusState: function applyFocusState(focusState) {
	    var button = this.refs.enhancedButton;
	    var buttonEl = _reactDom2['default'].findDOMNode(button);
	
	    if (button) {
	      switch (focusState) {
	        case 'none':
	          buttonEl.blur();
	          break;
	        case 'focused':
	          buttonEl.focus();
	          break;
	        case 'keyboard-focused':
	          button.setKeyboardFocus();
	          buttonEl.focus();
	          break;
	      }
	    }
	  },
	
	  _createDisabledElement: function _createDisabledElement(styles, contentChildren) {
	    var _props2 = this.props;
	    var innerDivStyle = _props2.innerDivStyle;
	    var style = _props2.style;
	
	    var mergedDivStyles = this.prepareStyles(styles.root, styles.innerDiv, innerDivStyle, style);
	
	    return _react2['default'].createElement('div', { style: mergedDivStyles }, contentChildren);
	  },
	
	  _createLabelElement: function _createLabelElement(styles, contentChildren) {
	    var _props3 = this.props;
	    var innerDivStyle = _props3.innerDivStyle;
	    var style = _props3.style;
	
	    var mergedLabelStyles = this.prepareStyles(styles.root, styles.innerDiv, innerDivStyle, styles.label, style);
	
	    return _react2['default'].createElement('label', { style: mergedLabelStyles }, contentChildren);
	  },
	
	  _createTextElement: function _createTextElement(styles, data, key) {
	    var isAnElement = _react2['default'].isValidElement(data);
	    var mergedStyles = isAnElement ? this.prepareStyles(styles, data.props.style) : null;
	
	    return isAnElement ? _react2['default'].cloneElement(data, {
	      key: key,
	      style: mergedStyles
	    }) : _react2['default'].createElement(
	      'div',
	      { key: key, style: this.prepareStyles(styles) },
	      data
	    );
	  },
	
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, isKeyboardFocused) {
	    this.setState({ isKeyboardFocused: isKeyboardFocused });
	    this.props.onKeyboardFocus(e, isKeyboardFocused);
	  },
	
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.state.touch) this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },
	
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },
	
	  _handleNestedListToggle: function _handleNestedListToggle(e) {
	    e.stopPropagation();
	    this.setState({ open: !this.state.open });
	    this.props.onNestedListToggle(this);
	  },
	
	  _handleRightIconButtonKeyboardFocus: function _handleRightIconButtonKeyboardFocus(e, isKeyboardFocused) {
	    var iconButton = this.props.rightIconButton;
	    var newState = {};
	
	    newState.rightIconButtonKeyboardFocused = isKeyboardFocused;
	    if (isKeyboardFocused) newState.isKeyboardFocused = false;
	    this.setState(newState);
	
	    if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(e, isKeyboardFocused);
	  },
	
	  _handleRightIconButtonMouseDown: function _handleRightIconButtonMouseDown(e) {
	    var iconButton = this.props.rightIconButton;
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onMouseDown) iconButton.props.onMouseDown(e);
	  },
	
	  _handleRightIconButtonMouseLeave: function _handleRightIconButtonMouseLeave(e) {
	    var iconButton = this.props.rightIconButton;
	    this.setState({ rightIconButtonHovered: false });
	    if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(e);
	  },
	
	  _handleRightIconButtonMouseEnter: function _handleRightIconButtonMouseEnter(e) {
	    var iconButton = this.props.rightIconButton;
	    this.setState({ rightIconButtonHovered: true });
	    if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(e);
	  },
	
	  _handleRightIconButtonMouseUp: function _handleRightIconButtonMouseUp(e) {
	    var iconButton = this.props.rightIconButton;
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(e);
	  },
	
	  _handleRightIconButtonTouchTap: function _handleRightIconButtonTouchTap(e) {
	    var iconButton = this.props.rightIconButton;
	
	    //Stop the event from bubbling up to the list-item
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(e);
	  },
	
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({ touch: true });
	    this.props.onTouchStart(e);
	  },
	
	  _pushElement: function _pushElement(children, element, baseStyles, additionalProps) {
	    if (element) {
	      var styles = this.mergeStyles(baseStyles, element.props.style);
	      children.push(_react2['default'].cloneElement(element, _extends({
	        key: children.length,
	        style: styles
	      }, additionalProps)));
	    }
	  }
	
	});
	
	exports['default'] = ListItem;
	module.exports = exports['default'];

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsImmutabilityHelper = __webpack_require__(84);
	
	var _utilsImmutabilityHelper2 = _interopRequireDefault(_utilsImmutabilityHelper);
	
	var _list = __webpack_require__(196);
	
	var _list2 = _interopRequireDefault(_list);
	
	var NestedList = _react2['default'].createClass({
	  displayName: 'NestedList',
	
	  propTypes: {
	    children: _react2['default'].PropTypes.node,
	    nestedLevel: _react2['default'].PropTypes.number,
	    open: _react2['default'].PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      nestedLevel: 1,
	      open: false
	    };
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var open = _props.open;
	    var nestedLevel = _props.nestedLevel;
	    var style = _props.style;
	
	    var styles = {
	      root: {
	        display: open ? null : 'none'
	      }
	    };
	
	    return _react2['default'].createElement(
	      _list2['default'],
	      { style: _utilsImmutabilityHelper2['default'].merge(styles.root, style) },
	      _react2['default'].Children.map(children, function (child) {
	        return _react2['default'].isValidElement(child) ? _react2['default'].cloneElement(child, {
	          nestedLevel: nestedLevel + 1
	        }) : child;
	      })
	    );
	  }
	
	});
	
	exports['default'] = NestedList;
	module.exports = exports['default'];

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsShallowEqual = __webpack_require__(466);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	function relevantContextKeysEqual(classObject, currentContext, nextContext) {
	
	  //Get those keys from current object's context that we care
	  //about and check whether those keys have changed or not
	  if (classObject.getRelevantContextKeys) {
	    var currentContextKeys = classObject.getRelevantContextKeys(currentContext);
	    var nextContextKeys = classObject.getRelevantContextKeys(nextContext);
	
	    if (!(0, _utilsShallowEqual2['default'])(currentContextKeys, nextContextKeys)) {
	      return false;
	    }
	  }
	
	  //Check if children context keys changed
	  if (classObject.getChildrenClasses) {
	    var childrenArray = classObject.getChildrenClasses();
	    for (var i = 0; i < childrenArray.length; i++) {
	      if (!relevantContextKeysEqual(childrenArray[i], currentContext, nextContext)) {
	        return false;
	      }
	    }
	  }
	
	  //context keys are equal
	  return true;
	}
	
	exports['default'] = {
	
	  //Don't update if state, prop, and context are equal
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	
	    //If either the props or state have changed, component should update
	    if (!(0, _utilsShallowEqual2['default'])(this.props, nextProps) || !(0, _utilsShallowEqual2['default'])(this.state, nextState)) {
	      return true;
	    }
	
	    //If current theme and next theme are both undefined, do not update
	    if (!this.context.muiTheme && !nextContext.muiTheme) {
	      return false;
	    }
	
	    //If both themes exist, compare keys only if current theme is not static
	    if (this.context.muiTheme && nextContext.muiTheme) {
	      return !this.context.muiTheme['static'] && !relevantContextKeysEqual(this.constructor, this.context.muiTheme, nextContext.muiTheme);
	    }
	
	    //At this point it is guaranteed that exactly one theme is undefined so simply update
	    return true;
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = muiThemeable;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	function muiThemeable(WrappedComponent) {
	  var MuiComponent = function MuiComponent(props, _ref) {
	    var _ref$muiTheme = _ref.muiTheme;
	    var muiTheme = _ref$muiTheme === undefined ? _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default']) : _ref$muiTheme;
	
	    return _react2['default'].createElement(WrappedComponent, _extends({}, props, { muiTheme: muiTheme }));
	  };
	
	  MuiComponent.displayName = getDisplayName(WrappedComponent);
	  MuiComponent.contextTypes = {
	    muiTheme: _react2['default'].PropTypes.object
	  };
	  MuiComponent.childContextTypes = {
	    muiTheme: _react2['default'].PropTypes.object
	  };
	
	  return MuiComponent;
	}
	
	module.exports = exports['default'];

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesAutoPrefix = __webpack_require__(82);
	
	var _stylesAutoPrefix2 = _interopRequireDefault(_stylesAutoPrefix);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _stylesColors = __webpack_require__(33);
	
	var _stylesColors2 = _interopRequireDefault(_stylesColors);
	
	var CircleRipple = _react2['default'].createClass({
	  displayName: 'CircleRipple',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  propTypes: {
	    color: _react2['default'].PropTypes.string,
	    opacity: _react2['default'].PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: _stylesColors2['default'].darkBlack,
	      opacity: 0.16
	    };
	  },
	
	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },
	
	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },
	
	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },
	
	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },
	
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;
	
	    var style = _reactDom2['default'].findDOMNode(this).style;
	    style.opacity = 0;
	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 2000);
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var opacity = _props.opacity;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['color', 'opacity', 'style']);
	
	    var mergedStyles = this.mergeAndPrefix({
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      backgroundColor: color
	    }, style);
	
	    return _react2['default'].createElement('div', _extends({}, other, { style: mergedStyles }));
	  },
	
	  _animate: function _animate() {
	    var style = _reactDom2['default'].findDOMNode(this).style;
	    var transitionValue = _stylesTransitions2['default'].easeOut('2s', 'opacity') + ',' + _stylesTransitions2['default'].easeOut('1s', 'transform');
	    _stylesAutoPrefix2['default'].set(style, 'transition', transitionValue);
	    _stylesAutoPrefix2['default'].set(style, 'transform', 'scale(1)');
	  },
	
	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;
	
	    var style = _reactDom2['default'].findDOMNode(this).style;
	    style.opacity = this.props.opacity;
	    _stylesAutoPrefix2['default'].set(style, 'transform', 'scale(0)');
	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, 0);
	  }
	
	});
	
	exports['default'] = CircleRipple;
	module.exports = exports['default'];

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesAutoPrefix = __webpack_require__(82);
	
	var _stylesAutoPrefix2 = _interopRequireDefault(_stylesAutoPrefix);
	
	var _stylesColors = __webpack_require__(33);
	
	var _stylesColors2 = _interopRequireDefault(_stylesColors);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _transitionGroupsScaleIn = __webpack_require__(461);
	
	var _transitionGroupsScaleIn2 = _interopRequireDefault(_transitionGroupsScaleIn);
	
	var pulsateDuration = 750;
	
	var FocusRipple = _react2['default'].createClass({
	  displayName: 'FocusRipple',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  propTypes: {
	    color: _react2['default'].PropTypes.string,
	    innerStyle: _react2['default'].PropTypes.object,
	    opacity: _react2['default'].PropTypes.number,
	    show: _react2['default'].PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: _stylesColors2['default'].darkBlack
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    } else {
	      if (this._timeout) clearTimeout(this._timeout);
	    }
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;
	    var style = _props.style;
	
	    var mergedRootStyles = this.mergeStyles({
	      height: '100%',
	      width: '100%',
	      position: 'absolute',
	      top: 0,
	      left: 0
	    }, style);
	
	    var ripple = show ? this._getRippleElement(this.props) : null;
	
	    return _react2['default'].createElement(
	      _transitionGroupsScaleIn2['default'],
	      {
	        maxScale: 0.85,
	        style: mergedRootStyles },
	      ripple
	    );
	  },
	
	  _getRippleElement: function _getRippleElement(props) {
	    var color = props.color;
	    var innerStyle = props.innerStyle;
	    var opacity = props.opacity;
	
	    var innerStyles = this.mergeAndPrefix({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      opacity: opacity ? opacity : 0.16,
	      backgroundColor: color,
	      transition: _stylesTransitions2['default'].easeOut(pulsateDuration + 'ms', 'transform', null, _stylesTransitions2['default'].easeInOutFunction)
	    }, innerStyle);
	
	    return _react2['default'].createElement('div', { ref: 'innerCircle', style: innerStyles });
	  },
	
	  _pulsate: function _pulsate() {
	    if (!this.isMounted()) return;
	
	    var innerCircle = _reactDom2['default'].findDOMNode(this.refs.innerCircle);
	    if (!innerCircle) return;
	
	    var startScale = 'scale(1)';
	    var endScale = 'scale(0.85)';
	    var currentScale = innerCircle.style.transform;
	    var nextScale = undefined;
	
	    currentScale = currentScale || startScale;
	    nextScale = currentScale === startScale ? endScale : startScale;
	
	    _stylesAutoPrefix2['default'].set(innerCircle.style, 'transform', nextScale);
	    this._timeout = setTimeout(this._pulsate, pulsateDuration);
	  },
	
	  _setRippleSize: function _setRippleSize() {
	    var el = _reactDom2['default'].findDOMNode(this.refs.innerCircle);
	    var height = el.offsetHeight;
	    var width = el.offsetWidth;
	    var size = Math.max(height, width);
	
	    var oldTop = 0;
	    // For browsers that don't support endsWith()
	    if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	      oldTop = parseInt(el.style.top);
	    }
	    el.style.height = size + 'px';
	    el.style.top = height / 2 - size / 2 + oldTop + 'px';
	  }
	
	});
	
	exports['default'] = FocusRipple;
	module.exports = exports['default'];

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _reactAddonsTransitionGroup = __webpack_require__(202);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _utilsDom = __webpack_require__(462);
	
	var _utilsDom2 = _interopRequireDefault(_utilsDom);
	
	var _utilsImmutabilityHelper = __webpack_require__(84);
	
	var _utilsImmutabilityHelper2 = _interopRequireDefault(_utilsImmutabilityHelper);
	
	var _circleRipple = __webpack_require__(449);
	
	var _circleRipple2 = _interopRequireDefault(_circleRipple);
	
	var TouchRipple = _react2['default'].createClass({
	  displayName: 'TouchRipple',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  propTypes: {
	    centerRipple: _react2['default'].PropTypes.bool,
	    children: _react2['default'].PropTypes.node,
	    color: _react2['default'].PropTypes.string,
	    opacity: _react2['default'].PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    //Touch start produces a mouse down event for compat reasons. To avoid
	    //showing ripples twice we skip showing a ripple for the first mouse down
	    //after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    //to avoid re-rendering when we change it
	    this._ignoreNextMouseDown = false;
	
	    return {
	      //This prop allows us to only render the ReactTransitionGroup
	      //on the first click of the component, making the inital
	      //render faster
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var style = _props.style;
	    var _state = this.state;
	    var hasRipples = _state.hasRipples;
	    var ripples = _state.ripples;
	
	    var rippleGroup = undefined;
	    if (hasRipples) {
	      var mergedStyles = this.mergeAndPrefix({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        overflow: 'hidden'
	      }, style);
	
	      rippleGroup = _react2['default'].createElement(
	        _reactAddonsTransitionGroup2['default'],
	        { style: mergedStyles },
	        ripples
	      );
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      {
	        onMouseUp: this._handleMouseUp,
	        onMouseDown: this._handleMouseDown,
	        onMouseLeave: this._handleMouseLeave,
	        onTouchStart: this._handleTouchStart,
	        onTouchEnd: this._handleTouchEnd },
	      rippleGroup,
	      children
	    );
	  },
	
	  start: function start(e, isRippleTouchGenerated) {
	    if (this._ignoreNextMouseDown && !isRippleTouchGenerated) {
	      this._ignoreNextMouseDown = false;
	      return;
	    }
	
	    var ripples = this.state.ripples;
	
	    //Add a ripple to the ripples array
	    ripples = _utilsImmutabilityHelper2['default'].push(ripples, _react2['default'].createElement(_circleRipple2['default'], {
	      key: this.state.nextKey,
	      style: !this.props.centerRipple ? this._getRippleStyle(e) : {},
	      color: this.props.color,
	      opacity: this.props.opacity,
	      touchGenerated: isRippleTouchGenerated }));
	
	    this._ignoreNextMouseDown = isRippleTouchGenerated;
	    this.setState({
	      hasRipples: true,
	      nextKey: this.state.nextKey + 1,
	      ripples: ripples
	    });
	  },
	
	  end: function end() {
	    var currentRipples = this.state.ripples;
	    this.setState({
	      ripples: _utilsImmutabilityHelper2['default'].shift(currentRipples)
	    });
	  },
	
	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) this.start(e, false);
	  },
	
	  _handleMouseUp: function _handleMouseUp() {
	    this.end();
	  },
	
	  _handleMouseLeave: function _handleMouseLeave() {
	    this.end();
	  },
	
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.start(e, true);
	  },
	
	  _handleTouchEnd: function _handleTouchEnd() {
	    this.end();
	  },
	
	  _getRippleStyle: function _getRippleStyle(e) {
	    var style = {};
	    var el = _reactDom2['default'].findDOMNode(this);
	    var elHeight = el.offsetHeight;
	    var elWidth = el.offsetWidth;
	    var offset = _utilsDom2['default'].offset(el);
	    var isTouchEvent = e.touches && e.touches.length;
	    var pageX = isTouchEvent ? e.touches[0].pageX : e.pageX;
	    var pageY = isTouchEvent ? e.touches[0].pageY : e.pageY;
	    var pointerX = pageX - offset.left;
	    var pointerY = pageY - offset.top;
	    var topLeftDiag = this._calcDiag(pointerX, pointerY);
	    var topRightDiag = this._calcDiag(elWidth - pointerX, pointerY);
	    var botRightDiag = this._calcDiag(elWidth - pointerX, elHeight - pointerY);
	    var botLeftDiag = this._calcDiag(pointerX, elHeight - pointerY);
	    var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	    var rippleSize = rippleRadius * 2;
	    var left = pointerX - rippleRadius;
	    var top = pointerY - rippleRadius;
	
	    style.height = rippleSize + 'px';
	    style.width = rippleSize + 'px';
	    style.top = top + 'px';
	    style.left = left + 'px';
	
	    return style;
	  },
	
	  _calcDiag: function _calcDiag(a, b) {
	    return Math.sqrt(a * a + b * b);
	  }
	
	});
	
	exports['default'] = TouchRipple;
	module.exports = exports['default'];

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getMuiTheme;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashMerge = __webpack_require__(398);
	
	var _lodashMerge2 = _interopRequireDefault(_lodashMerge);
	
	var _colors = __webpack_require__(33);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _utilsColorManipulator = __webpack_require__(117);
	
	var _utilsColorManipulator2 = _interopRequireDefault(_utilsColorManipulator);
	
	var _baseThemesLightBaseTheme = __webpack_require__(198);
	
	var _baseThemesLightBaseTheme2 = _interopRequireDefault(_baseThemesLightBaseTheme);
	
	var _zIndex = __webpack_require__(454);
	
	var _zIndex2 = _interopRequireDefault(_zIndex);
	
	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	
	function getMuiTheme(baseTheme, muiTheme) {
	  baseTheme = (0, _lodashMerge2['default'])({}, _baseThemesLightBaseTheme2['default'], baseTheme);
	  var _baseTheme = baseTheme;
	  var palette = _baseTheme.palette;
	  var spacing = _baseTheme.spacing;
	
	  return (0, _lodashMerge2['default'])({
	    isRtl: false,
	    zIndex: _zIndex2['default'],
	    baseTheme: baseTheme,
	    rawTheme: baseTheme, // To provide backward compatibility.
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement
	    },
	    avatar: {
	      borderColor: 'rgba(0, 0, 0, 0.08)'
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    flatButton: {
	      color: _colors2['default'].transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: _utilsColorManipulator2['default'].fade(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.accent1Color,
	      secondaryTextColor: palette.primary1Color
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.accent1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor
	    },
	    gridTile: {
	      textColor: _colors2['default'].white
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    leftNav: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: 'rgba(0, 0, 0, .035)',
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    paper: {
	      backgroundColor: palette.canvasColor
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: _utilsColorManipulator2['default'].darken(palette.alternateTextColor, 0.1),
	      disabledTextColor: _utilsColorManipulator2['default'].fade(palette.textColor, 0.3)
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: _utilsColorManipulator2['default'].lighten(palette.primary1Color, 0.55),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.accent3Color,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: _utilsColorManipulator2['default'].fade(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: _utilsColorManipulator2['default'].fade(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      backgroundColor: _utilsColorManipulator2['default'].darken(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: 'rgba(0, 0, 0, .40)',
	      separatorColor: 'rgba(0, 0, 0, .175)',
	      menuHoverColor: 'rgba(0, 0, 0, .10)'
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: _utilsColorManipulator2['default'].fade(palette.alternateTextColor, 0.6),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.textColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors2['default'].red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    }
	  }, muiTheme);
	}
	
	module.exports = exports['default'];

/***/ },
/* 453 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  iconSize: 24,
	
	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopLeftNavMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};
	module.exports = exports["default"];

/***/ },
/* 454 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  menu: 1000,
	  appBar: 1100,
	  leftNavOverlay: 1200,
	  leftNav: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};
	module.exports = exports["default"];

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(83);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	var ActionSearch = _react2['default'].createClass({
	  displayName: 'ActionSearch',
	
	  mixins: [_reactAddonsPureRenderMixin2['default']],
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _svgIcon2['default'],
	      this.props,
	      _react2['default'].createElement('path', { d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' })
	    );
	  }
	
	});
	
	exports['default'] = ActionSearch;
	module.exports = exports['default'];

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(83);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	var NavigationArrowDropDown = _react2['default'].createClass({
	  displayName: 'NavigationArrowDropDown',
	
	  mixins: [_reactAddonsPureRenderMixin2['default']],
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _svgIcon2['default'],
	      this.props,
	      _react2['default'].createElement('path', { d: 'M7 10l5 5 5-5z' })
	    );
	  }
	
	});
	
	exports['default'] = NavigationArrowDropDown;
	module.exports = exports['default'];

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(83);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	var NavigationArrowDropUp = _react2['default'].createClass({
	  displayName: 'NavigationArrowDropUp',
	
	  mixins: [_reactAddonsPureRenderMixin2['default']],
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _svgIcon2['default'],
	      this.props,
	      _react2['default'].createElement('path', { d: 'M7 14l5-5 5 5z' })
	    );
	  }
	
	});
	
	exports['default'] = NavigationArrowDropUp;
	module.exports = exports['default'];

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(83);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	var NavigationMenu = _react2['default'].createClass({
	  displayName: 'NavigationMenu',
	
	  mixins: [_reactAddonsPureRenderMixin2['default']],
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _svgIcon2['default'],
	      this.props,
	      _react2['default'].createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	    );
	  }
	
	});
	
	exports['default'] = NavigationMenu;
	module.exports = exports['default'];

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _stylesColors = __webpack_require__(33);
	
	var _stylesColors2 = _interopRequireDefault(_stylesColors);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var Tooltip = _react2['default'].createClass({
	  displayName: 'Tooltip',
	
	  mixins: [_mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2['default'].PropTypes.string,
	    horizontalPosition: _react2['default'].PropTypes.oneOf(['left', 'right', 'center']),
	    label: _react2['default'].PropTypes.node.isRequired,
	    show: _react2['default'].PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object,
	    touch: _react2['default'].PropTypes.bool,
	    verticalPosition: _react2['default'].PropTypes.oneOf(['top', 'bottom'])
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._setRippleSize();
	    this._setTooltipPosition();
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    this._setTooltipPosition();
	
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this._setRippleSize();
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      offsetWidth: null,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  getStyles: function getStyles() {
	    var verticalPosition = this.props.verticalPosition;
	    var horizontalPosition = this.props.horizontalPosition;
	    var touchMarginOffset = this.props.touch ? 10 : 0;
	    var touchOffsetTop = this.props.touch ? -20 : -10;
	    var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;
	
	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;
	
	    var styles = {
	      root: {
	        position: 'absolute',
	        fontFamily: rawTheme.fontFamily,
	        fontSize: '10px',
	        lineHeight: '22px',
	        padding: '0 8px',
	        zIndex: muiTheme.zIndex.tooltip,
	        color: _stylesColors2['default'].white,
	        overflow: 'hidden',
	        top: -10000,
	        borderRadius: 2,
	        userSelect: 'none',
	        opacity: 0,
	        right: horizontalPosition === 'left' ? 12 : null,
	        left: horizontalPosition === 'center' ? (this.state.offsetWidth - 48) / 2 * -1 : null,
	        transition: _stylesTransitions2['default'].easeOut('0ms', 'top', '450ms') + ',' + _stylesTransitions2['default'].easeOut('450ms', 'transform', '0ms') + ',' + _stylesTransitions2['default'].easeOut('450ms', 'opacity', '0ms')
	      },
	      label: {
	        position: 'relative',
	        whiteSpace: 'nowrap'
	      },
	      ripple: {
	        position: 'absolute',
	        left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	        top: verticalPosition === 'bottom' ? 0 : '100%',
	        transform: 'translate(-50%, -50%)',
	        borderRadius: '50%',
	        backgroundColor: 'transparent',
	        transition: _stylesTransitions2['default'].easeOut('0ms', 'width', '450ms') + ',' + _stylesTransitions2['default'].easeOut('0ms', 'height', '450ms') + ',' + _stylesTransitions2['default'].easeOut('450ms', 'backgroundColor', '0ms')
	      },
	      rootWhenShown: {
	        top: verticalPosition === 'top' ? touchOffsetTop : 36,
	        opacity: 0.9,
	        transform: 'translate3d(0px, ' + offset + 'px, 0px)',
	        transition: _stylesTransitions2['default'].easeOut('0ms', 'top', '0ms') + ',' + _stylesTransitions2['default'].easeOut('450ms', 'transform', '0ms') + ',' + _stylesTransitions2['default'].easeOut('450ms', 'opacity', '0ms')
	      },
	      rootWhenTouched: {
	        fontSize: '14px',
	        lineHeight: '32px',
	        padding: '0 16px'
	      },
	      rippleWhenShown: {
	        backgroundColor: _stylesColors2['default'].grey700,
	        transition: _stylesTransitions2['default'].easeOut('450ms', 'width', '0ms') + ',' + _stylesTransitions2['default'].easeOut('450ms', 'height', '0ms') + ',' + _stylesTransitions2['default'].easeOut('450ms', 'backgroundColor', '0ms')
	      }
	    };
	
	    return styles;
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;
	
	    var other = _objectWithoutProperties(_props, ['label']);
	
	    var styles = this.getStyles();
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, other, {
	        style: this.prepareStyles(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style)
	      }),
	      _react2['default'].createElement('div', {
	        ref: 'ripple',
	        style: this.prepareStyles(styles.ripple, this.props.show && styles.rippleWhenShown) }),
	      _react2['default'].createElement(
	        'span',
	        { style: this.prepareStyles(styles.label) },
	        label
	      )
	    );
	  },
	
	  _setRippleSize: function _setRippleSize() {
	    var ripple = _reactDom2['default'].findDOMNode(this.refs.ripple);
	    var tooltip = window.getComputedStyle(_reactDom2['default'].findDOMNode(this));
	    var tooltipWidth = parseInt(tooltip.getPropertyValue('width'), 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	    var tooltipHeight = parseInt(tooltip.getPropertyValue('height'), 10);
	
	    var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	    if (this.props.show) {
	      ripple.style.height = rippleDiameter + 'px';
	      ripple.style.width = rippleDiameter + 'px';
	    } else {
	      ripple.style.width = '0px';
	      ripple.style.height = '0px';
	    }
	  },
	
	  _setTooltipPosition: function _setTooltipPosition() {
	    var tooltip = _reactDom2['default'].findDOMNode(this);
	    this.setState({ offsetWidth: tooltip.offsetWidth });
	  }
	
	});
	
	exports['default'] = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _stylesAutoPrefix = __webpack_require__(82);
	
	var _stylesAutoPrefix2 = _interopRequireDefault(_stylesAutoPrefix);
	
	var _stylesTransitions = __webpack_require__(28);
	
	var _stylesTransitions2 = _interopRequireDefault(_stylesTransitions);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var ScaleInChild = _react2['default'].createClass({
	  displayName: 'ScaleInChild',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  propTypes: {
	    children: _react2['default'].PropTypes.node,
	    enterDelay: _react2['default'].PropTypes.number,
	    maxScale: _react2['default'].PropTypes.number,
	    minScale: _react2['default'].PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0,
	      maxScale: 1,
	      minScale: 0
	    };
	  },
	
	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },
	
	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },
	
	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },
	
	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },
	
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;
	
	    var style = _reactDom2['default'].findDOMNode(this).style;
	
	    style.opacity = '0';
	    _stylesAutoPrefix2['default'].set(style, 'transform', 'scale(' + this.props.minScale + ')');
	
	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 450);
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var enterDelay = _props.enterDelay;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'style']);
	
	    var mergedRootStyles = this.prepareStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: 0,
	      transition: _stylesTransitions2['default'].easeOut(null, ['transform', 'opacity'])
	    }, style);
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, other, { style: mergedRootStyles }),
	      children
	    );
	  },
	
	  _animate: function _animate() {
	    var style = _reactDom2['default'].findDOMNode(this).style;
	
	    style.opacity = '1';
	    _stylesAutoPrefix2['default'].set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	  },
	
	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;
	
	    var style = _reactDom2['default'].findDOMNode(this).style;
	
	    style.opacity = '0';
	    _stylesAutoPrefix2['default'].set(style, 'transform', 'scale(0)');
	
	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, this.props.enterDelay);
	  }
	
	});
	
	exports['default'] = ScaleInChild;
	module.exports = exports['default'];

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(14);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _reactAddonsTransitionGroup = __webpack_require__(202);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _mixinsStylePropable = __webpack_require__(6);
	
	var _mixinsStylePropable2 = _interopRequireDefault(_mixinsStylePropable);
	
	var _scaleInChild = __webpack_require__(460);
	
	var _scaleInChild2 = _interopRequireDefault(_scaleInChild);
	
	var _stylesRawThemesLightRawTheme = __webpack_require__(10);
	
	var _stylesRawThemesLightRawTheme2 = _interopRequireDefault(_stylesRawThemesLightRawTheme);
	
	var _stylesThemeManager = __webpack_require__(11);
	
	var _stylesThemeManager2 = _interopRequireDefault(_stylesThemeManager);
	
	var ScaleIn = _react2['default'].createClass({
	  displayName: 'ScaleIn',
	
	  mixins: [_reactAddonsPureRenderMixin2['default'], _mixinsStylePropable2['default']],
	
	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : _stylesThemeManager2['default'].getMuiTheme(_stylesRawThemesLightRawTheme2['default'])
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	
	  propTypes: {
	    childStyle: _react2['default'].PropTypes.object,
	    children: _react2['default'].PropTypes.node,
	    enterDelay: _react2['default'].PropTypes.number,
	    maxScale: _react2['default'].PropTypes.number,
	    minScale: _react2['default'].PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2['default'].PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0
	    };
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var childStyle = _props.childStyle;
	    var enterDelay = _props.enterDelay;
	    var maxScale = _props.maxScale;
	    var minScale = _props.minScale;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	
	    var mergedRootStyles = this.prepareStyles({
	      position: 'relative',
	      overflow: 'hidden',
	      height: '100%'
	    }, style);
	
	    var newChildren = _react2['default'].Children.map(children, function (child) {
	      return _react2['default'].createElement(
	        _scaleInChild2['default'],
	        {
	          key: child.key,
	          enterDelay: enterDelay,
	          maxScale: maxScale,
	          minScale: minScale,
	          style: childStyle },
	        child
	      );
	    });
	
	    return _react2['default'].createElement(
	      _reactAddonsTransitionGroup2['default'],
	      _extends({}, other, {
	        style: mergedRootStyles,
	        component: 'div' }),
	      newChildren
	    );
	  }
	
	});
	
	exports['default'] = ScaleIn;
	module.exports = exports['default'];

/***/ },
/* 462 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;
	
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	
	    return false;
	  },
	
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  },
	
	  getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
	    var attrStyle = el.style[attr];
	    var attrNum = 0;
	    if (attrStyle && attrStyle.length) {
	      attrNum = parseInt(attrStyle);
	    }
	
	    return attrNum;
	  },
	
	  addClass: function addClass(el, className) {
	    if (el.classList) el.classList.add(className);else el.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(el, className) {
	    if (el.classList) {
	      el.classList.remove(className);
	    } else {
	      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	    }
	  },
	
	  hasClass: function hasClass(el, className) {
	    if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  },
	
	  toggleClass: function toggleClass(el, className) {
	    if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
	  },
	
	  forceRedraw: function forceRedraw(el) {
	    var originalDisplay = el.style.display;
	
	    el.style.display = 'none';
	    el.style.display = originalDisplay;
	  },
	
	  withoutTransition: function withoutTransition(el, callback) {
	    var originalTransition = el.style.transition;
	
	    //turn off transition
	    el.style.transition = null;
	
	    callback();
	
	    //force a redraw
	    this.forceRedraw(el);
	
	    //put the transition back
	    el.style.transition = originalTransition;
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 463 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return callback(e);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	
	  isKeyboard: function isKeyboard(e) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(e.type) !== -1;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 464 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function isObject(obj) {
	  return typeof obj === 'object' && obj !== null;
	}
	
	/**
	*  A recursive merge between two objects.
	*
	*  @param base     - the object whose properties are to be overwritten. It
	*                    should be either the root level or some nested level.
	*  @param override - an object containing properties to be overwritten. It
	*                    should have the same structure as the object object.
	*/
	var extend = function extend(base, override) {
	
	  var mergedObject = {};
	
	  //Loop through each key in the base object
	  Object.keys(base).forEach(function (key) {
	
	    var baseProp = base[key];
	    var overrideProp = undefined;
	
	    if (isObject(override)) overrideProp = override[key];
	
	    //Recursive call extend if the prop is another object, else just copy it over
	    mergedObject[key] = isObject(baseProp) && !Array.isArray(baseProp) ? extend(baseProp, overrideProp) : baseProp;
	  });
	
	  //Loop through each override key and override the props in the
	  //base object
	  if (isObject(override)) {
	
	    Object.keys(override).forEach(function (overrideKey) {
	
	      var overrideProp = override[overrideKey];
	
	      //Only copy over props that are not objects
	      if (!isObject(overrideProp) || Array.isArray(overrideProp)) {
	        mergedObject[overrideKey] = overrideProp;
	      }
	    });
	  }
	
	  return mergedObject;
	};
	
	exports['default'] = extend;
	module.exports = exports['default'];

/***/ },
/* 465 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  DOWN: 40,
	  ESC: 27,
	  ENTER: 13,
	  LEFT: 37,
	  RIGHT: 39,
	  SPACE: 32,
	  TAB: 9,
	  UP: 38
	};
	module.exports = exports["default"];

/***/ },
/* 466 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 467 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
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
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 468 */
/***/ function(module, exports) {

	// Most of these are according to this table: http://www.ssicom.org/js/x171166.htm
	// However where nodejs readline diverges, they are adjusted to conform to it
	module.exports = {
	  nomod: {
	      escape: '\u001b'
	    , space: ' ' // actually '\u0020'
	    }
	  , ctrl: {
	        ' ': '\u0000'
	      , 'a': '\u0001'
	      , 'b': '\u0002'
	      , 'c': '\u0003'
	      , 'd': '\u0004'
	      , 'e': '\u0005'
	      , 'f': '\u0006'
	      , 'g': '\u0007'
	      , 'h': '\u0008'
	      , 'i': '\u0009'
	      , 'j': '\u000a'
	      , 'k': '\u000b'
	      , 'm': '\u000c'
	      , 'n': '\u000d'
	      , 'l': '\u000e'
	      , 'o': '\u000f'
	      , 'p': '\u0010'
	      , 'q': '\u0011'
	      , 'r': '\u0012'
	      , 's': '\u0013'
	      , 't': '\u0014'
	      , 'u': '\u0015'
	      , 'v': '\u0016'
	      , 'w': '\u0017'
	      , 'x': '\u0018'
	      , 'y': '\u0019'
	      , 'z': '\u001a'
	      , '[': '\u001b'
	      , '\\':'\u001c'
	      , ']': '\u001d'
	      , '^': '\u001e'
	      , '_': '\u001f'
	
	      , 'space': '\u0000'
	    }
	};


/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keycodes = __webpack_require__(468);
	
	function assertKeyString(s) {
	  if (!/^(ctrl-|shift-|alt-|meta-){0,4}\w+$/.test(s))
	    throw new Error('The string to parse needs to be of the format "c", "ctrl-c", "shift-ctrl-c".');
	}
	
	module.exports = function parse(s) {
	  var keyString = s.trim().toLowerCase();
	
	  assertKeyString(keyString);
	
	  var key = {
	      name     :  undefined
	    , ctrl     :  false
	    , meta     :  false
	    , shift    :  false
	    , alt      :  false
	    , sequence :  undefined
	  }
	  , parts = keyString.split('-')
	  , c;
	
	  key.name = parts.pop();
	  while((c = parts.pop())) key[c] = true;
	  key.sequence = key.ctrl 
	    ? keycodes.ctrl[key.name] || key.name
	    : keycodes.nomod[key.name] || key.name;
	
	  // uppercase sequence for single chars when shift was pressed
	  if (key.shift && key.sequence && key.sequence.length === 1)
	    key.sequence = key.sequence.toUpperCase();
	
	  return key;
	};


/***/ },
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(550).create;

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(270)['default'];
	
	var _inherits = __webpack_require__(54)['default'];
	
	var _createClass = __webpack_require__(269)['default'];
	
	var _classCallCheck = __webpack_require__(268)['default'];
	
	var _extends = __webpack_require__(47)['default'];
	
	var _toConsumableArray = __webpack_require__(272)['default'];
	
	var _Object$keys = __webpack_require__(96)['default'];
	
	var _interopRequireDefault = __webpack_require__(148)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashDebounce = __webpack_require__(395);
	
	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);
	
	var _objectAssign = __webpack_require__(467);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _autoprefix = __webpack_require__(475);
	
	var _autoprefix2 = _interopRequireDefault(_autoprefix);
	
	function autoprefixes(styles) {
	  return _Object$keys(styles).reduce(function (obj, key) {
	    return (obj[key] = (0, _autoprefix2['default'])(styles[key]), obj);
	  }, {});
	}
	
	var styles = autoprefixes({
	  wrapper: {
	    position: 'fixed',
	    width: 0,
	    height: 0,
	    top: 0,
	    left: 0
	  },
	
	  dim: {
	    position: 'fixed',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    zIndex: 0,
	    background: 'rgba(0, 0, 0, 0.2)',
	    opacity: 1
	  },
	
	  dimAppear: {
	    opacity: 0
	  },
	
	  dimTransparent: {
	    pointerEvents: 'none'
	  },
	
	  dimHidden: {
	    opacity: 0
	  },
	
	  dock: {
	    position: 'fixed',
	    zIndex: 1,
	    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
	    background: 'white',
	    left: 0,
	    top: 0,
	    width: '100%',
	    height: '100%'
	  },
	
	  dockHidden: {
	    opacity: 0
	  },
	
	  dockResizing: {
	    transition: 'none'
	  },
	
	  dockContent: {
	    width: '100%',
	    height: '100%',
	    overflow: 'auto'
	  },
	
	  resizer: {
	    position: 'absolute',
	    zIndex: 2,
	    opacity: 0
	  }
	});
	
	function getTransitions(duration) {
	  return ['left', 'top', 'width', 'height'].map(function (p) {
	    return p + ' ' + duration / 1000 + 's ease-out';
	  });
	}
	
	function getDockStyles(_ref, _ref2) {
	  var fluid = _ref.fluid;
	  var dockStyle = _ref.dockStyle;
	  var dockHiddenStyle = _ref.dockHiddenStyle;
	  var duration = _ref.duration;
	  var position = _ref.position;
	  var isVisible = _ref.isVisible;
	  var size = _ref2.size;
	  var isResizing = _ref2.isResizing;
	  var fullWidth = _ref2.fullWidth;
	  var fullHeight = _ref2.fullHeight;
	
	  var posStyle = undefined;
	  var absSize = fluid ? size * 100 + '%' : size + 'px';
	
	  function getRestSize(fullSize) {
	    return fluid ? 100 - size * 100 + '%' : fullSize - size + 'px';
	  }
	
	  switch (position) {
	    case 'left':
	      posStyle = {
	        width: absSize,
	        left: isVisible ? 0 : '-' + absSize
	      };
	      break;
	    case 'right':
	      posStyle = {
	        left: isVisible ? getRestSize(fullWidth) : fullWidth,
	        width: absSize
	      };
	      break;
	    case 'top':
	      posStyle = {
	        top: isVisible ? 0 : '-' + absSize,
	        height: absSize
	      };
	      break;
	    case 'bottom':
	      posStyle = {
	        top: isVisible ? getRestSize(fullHeight) : fullHeight,
	        height: absSize
	      };
	      break;
	  }
	
	  var transitions = getTransitions(duration);
	
	  return [styles.dock, (0, _autoprefix2['default'])({
	    transition: [].concat(_toConsumableArray(transitions), [!isVisible && 'opacity 0.01s linear ' + duration / 1000 + 's']).filter(function (t) {
	      return t;
	    }).join(',')
	  }), dockStyle, (0, _autoprefix2['default'])(posStyle), isResizing && styles.dockResizing, !isVisible && styles.dockHidden, !isVisible && dockHiddenStyle];
	}
	
	function getDimStyles(_ref3, _ref4) {
	  var dimMode = _ref3.dimMode;
	  var dimStyle = _ref3.dimStyle;
	  var duration = _ref3.duration;
	  var isVisible = _ref3.isVisible;
	  var isTransitionStarted = _ref4.isTransitionStarted;
	
	  return [styles.dim, (0, _autoprefix2['default'])({
	    transition: 'opacity ' + duration / 1000 + 's ease-out'
	  }), dimStyle, dimMode === 'transparent' && styles.dimTransparent, !isVisible && styles.dimHidden, isTransitionStarted && isVisible && styles.dimAppear, isTransitionStarted && !isVisible && styles.dimDisappear];
	}
	
	function getResizerStyles(position) {
	  var resizerStyle = undefined;
	  var size = 10;
	
	  switch (position) {
	    case 'left':
	      resizerStyle = {
	        right: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'right':
	      resizerStyle = {
	        left: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'top':
	      resizerStyle = {
	        bottom: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	    case 'bottom':
	      resizerStyle = {
	        top: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	  }
	
	  return [styles.resizer, (0, _autoprefix2['default'])(resizerStyle)];
	}
	
	function getFullSize(position, fullWidth, fullHeight) {
	  return position === 'left' || position === 'right' ? fullWidth : fullHeight;
	}
	
	var Dock = (function (_Component) {
	  _inherits(Dock, _Component);
	
	  function Dock(props) {
	    var _this = this;
	
	    _classCallCheck(this, Dock);
	
	    _get(Object.getPrototypeOf(Dock.prototype), 'constructor', this).call(this, props);
	
	    this.transitionEnd = function () {
	      _this.setState({ isTransitionStarted: false });
	    };
	
	    this.hideDim = function () {
	      if (!_this.props.isVisible) {
	        _this.setState({ isDimHidden: true });
	      }
	    };
	
	    this.handleDimClick = function () {
	      if (_this.props.dimMode === 'opaque') {
	        _this.props.onVisibleChange && _this.props.onVisibleChange(false);
	      }
	    };
	
	    this.handleResize = function () {
	      if (window.requestAnimationFrame) {
	        window.requestAnimationFrame(_this.updateWindowSize.bind(_this, true));
	      } else {
	        _this.updateWindowSize(true);
	      }
	    };
	
	    this.updateWindowSize = function (windowResize) {
	      var sizeState = {
	        fullWidth: window.innerWidth,
	        fullHeight: window.innerHeight
	      };
	
	      if (windowResize) {
	        _this.setState(_extends({}, sizeState, {
	          isResizing: true,
	          isWindowResizing: windowResize
	        }));
	
	        _this.debouncedUpdateWindowSizeEnd();
	      } else {
	        _this.setState(sizeState);
	      }
	    };
	
	    this.updateWindowSizeEnd = function () {
	      _this.setState({
	        isResizing: false,
	        isWindowResizing: false
	      });
	    };
	
	    this.debouncedUpdateWindowSizeEnd = (0, _lodashDebounce2['default'])(this.updateWindowSizeEnd, 30);
	
	    this.handleWrapperLeave = function () {
	      _this.setState({ isResizing: false });
	    };
	
	    this.handleMouseDown = function () {
	      _this.setState({ isResizing: true });
	    };
	
	    this.handleMouseUp = function () {
	      _this.setState({ isResizing: false });
	    };
	
	    this.handleMouseMove = function (e) {
	      if (!_this.state.isResizing || _this.state.isWindowResizing) return;
	      e.preventDefault();
	
	      var _props = _this.props;
	      var position = _props.position;
	      var fluid = _props.fluid;
	      var _state = _this.state;
	      var fullWidth = _state.fullWidth;
	      var fullHeight = _state.fullHeight;
	      var isControlled = _state.isControlled;
	      var x = e.clientX;
	      var y = e.clientY;
	
	      var size = undefined;
	
	      switch (position) {
	        case 'left':
	          size = fluid ? x / fullWidth : x;
	          break;
	        case 'right':
	          size = fluid ? (fullWidth - x) / fullWidth : fullWidth - x;
	          break;
	        case 'top':
	          size = fluid ? y / fullHeight : y;
	          break;
	        case 'bottom':
	          size = fluid ? (fullHeight - y) / fullHeight : fullHeight - y;
	          break;
	      }
	
	      _this.props.onSizeChange && _this.props.onSizeChange(size);
	
	      if (!isControlled) {
	        _this.setState({ size: size });
	      }
	    };
	
	    this.state = {
	      isControlled: typeof props.size !== 'undefined',
	      size: props.size || props.defaultSize,
	      isDimHidden: !props.isVisible,
	      fullWidth: typeof window !== 'undefined' && window.innerWidth,
	      fullHeight: typeof window !== 'undefined' && window.innerHeight,
	      isTransitionStarted: false,
	      isWindowResizing: false
	    };
	  }
	
	  _createClass(Dock, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('mouseup', this.handleMouseUp);
	      window.addEventListener('mousemove', this.handleMouseMove);
	      window.addEventListener('resize', this.handleResize);
	
	      if (!window.fullWidth) {
	        this.updateWindowSize();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('mouseup', this.handleMouseUp);
	      window.removeEventListener('mousemove', this.handleMouseMove);
	      window.removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var isControlled = typeof nextProps.size !== 'undefined';
	
	      this.setState({ isControlled: isControlled });
	
	      if (isControlled && this.props.size !== nextProps.size) {
	        this.setState({ size: nextProps.size });
	      } else if (this.props.fluid !== nextProps.fluid) {
	        this.updateSize(nextProps);
	      }
	
	      if (this.props.isVisible !== nextProps.isVisible) {
	        this.setState({
	          isTransitionStarted: true
	        });
	      }
	    }
	  }, {
	    key: 'updateSize',
	    value: function updateSize(props) {
	      var _state2 = this.state;
	      var fullWidth = _state2.fullWidth;
	      var fullHeight = _state2.fullHeight;
	
	      this.setState({
	        size: props.fluid ? this.state.size / getFullSize(props.position, fullWidth, fullHeight) : getFullSize(props.position, fullWidth, fullHeight) * this.state.size
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _this2 = this;
	
	      if (this.props.isVisible !== prevProps.isVisible) {
	        if (!this.props.isVisible) {
	          window.setTimeout(function () {
	            return _this2.hideDim();
	          }, this.props.duration);
	        } else {
	          this.setState({ isDimHidden: false });
	        }
	
	        window.setTimeout(function () {
	          return _this2.setState({ isTransitionStarted: false });
	        }, 0);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var zIndex = _props2.zIndex;
	      var dimMode = _props2.dimMode;
	      var position = _props2.position;
	      var isVisible = _props2.isVisible;
	      var _state3 = this.state;
	      var isResizing = _state3.isResizing;
	      var size = _state3.size;
	      var isDimHidden = _state3.isDimHidden;
	
	      var dimStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDimStyles(this.props, this.state))));
	      var dockStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDockStyles(this.props, this.state))));
	      var resizerStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getResizerStyles(position))));
	
	      return _react2['default'].createElement(
	        'div',
	        { style: (0, _objectAssign2['default'])({}, styles.wrapper, { zIndex: zIndex }) },
	        dimMode !== 'none' && !isDimHidden && _react2['default'].createElement('div', { style: dimStyles, onClick: this.handleDimClick }),
	        _react2['default'].createElement(
	          'div',
	          { style: dockStyles },
	          _react2['default'].createElement('div', { style: resizerStyles,
	            onMouseDown: this.handleMouseDown }),
	          _react2['default'].createElement(
	            'div',
	            { style: styles.dockContent },
	            typeof children === 'function' ? children({
	              position: position,
	              isResizing: isResizing,
	              size: size,
	              isVisible: isVisible
	            }) : children
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	      zIndex: _react.PropTypes.number,
	      fluid: _react.PropTypes.bool,
	      size: _react.PropTypes.number,
	      defaultSize: _react.PropTypes.number,
	      dimMode: _react.PropTypes.oneOf(['none', 'transparent', 'opaque']),
	      isVisible: _react.PropTypes.bool,
	      onVisibleChange: _react.PropTypes.func,
	      onSizeChange: _react.PropTypes.func,
	      dimStyle: _react.PropTypes.object,
	      dockStyle: _react.PropTypes.object,
	      duration: _react.PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      position: 'left',
	      zIndex: 99999999,
	      fluid: true,
	      defaultSize: 0.3,
	      dimMode: 'opaque',
	      duration: 200
	    },
	    enumerable: true
	  }]);
	
	  return Dock;
	})(_react.Component);
	
	exports['default'] = Dock;
	module.exports = exports['default'];

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	// Same as https://github.com/SimenB/react-vendor-prefixes/blob/master/src/index.js,
	// but dumber
	
	'use strict';
	
	var _extends = __webpack_require__(47)['default'];
	
	var _Object$keys = __webpack_require__(96)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoprefix;
	var vendorSpecificProperties = ['animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'backfaceVisibility', 'backgroundClip', 'borderImage', 'borderImageSlice', 'boxSizing', 'boxShadow', 'contentColumns', 'transform', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'perspective', 'perspectiveOrigin', 'userSelect'];
	
	var prefixes = ['Moz', 'Webkit', 'ms', 'O'];
	
	function prefixProp(key, value) {
	  return prefixes.reduce(function (obj, pre) {
	    return (obj[pre + key[0].toUpperCase() + key.substr(1)] = value, obj);
	  }, {});
	}
	
	function autoprefix(style) {
	  return _Object$keys(style).reduce(function (obj, key) {
	    return vendorSpecificProperties.indexOf(key) !== -1 ? _extends({}, obj, prefixProp(key, style[key])) : obj;
	  }, style);
	}
	
	module.exports = exports['default'];

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(148)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _Dock = __webpack_require__(474);
	
	var _Dock2 = _interopRequireDefault(_Dock);
	
	exports['default'] = _Dock2['default'];
	module.exports = exports['default'];

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _JSONArrow = __webpack_require__(118);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	var _grabNode = __webpack_require__(86);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};
	
	var JSONArrayNode = (function (_React$Component) {
	  _inherits(JSONArrayNode, _React$Component);
	
	  function JSONArrayNode(props) {
	    _classCallCheck(this, _JSONArrayNode);
	
	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }
	
	  // Returns the child nodes for each element in the array. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.
	
	  JSONArrayNode.prototype.getChildNodes = function getChildNodes() {
	    var _this = this;
	
	    if (this.state.expanded && this.needsChildNodes) {
	      (function () {
	        var childNodes = [];
	        _this.props.data.forEach(function (element, idx) {
	          var prevData = undefined;
	          if (typeof _this.props.previousData !== 'undefined' && _this.props.previousData !== null) {
	            prevData = _this.props.previousData[idx];
	          }
	          var node = _grabNode2['default'](idx, element, prevData, _this.props.theme, _this.props.styles, _this.props.getItemString);
	          if (node !== false) {
	            childNodes.push(node);
	          }
	        });
	        _this.needsChildNodes = false;
	        _this.renderedChildren = childNodes;
	      })();
	    }
	    return this.renderedChildren;
	  };
	
	  // Returns the "n Items" string for this node, generating and
	  // caching it if it hasn't been created yet.
	
	  JSONArrayNode.prototype.getItemString = function getItemString(itemType) {
	    if (!this.itemString) {
	      this.itemString = this.props.data.length + ' item' + (this.props.data.length !== 1 ? 's' : '');
	    }
	    return this.props.getItemString('Array', this.props.data, itemType, this.itemString);
	  };
	
	  JSONArrayNode.prototype.render = function render() {
	    var childNodes = this.getChildNodes();
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0E
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this), style: this.props.styles.getArrowStyle(this.state.expanded) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Array', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({}, spanStyle, this.props.styles.getItemStringStyle('Array', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.getItemString(_react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '[]'
	        ))
	      ),
	      _react2['default'].createElement(
	        'ol',
	        { style: _extends({}, childListStyle, this.props.styles.getListStyle('Array', this.state.expanded)) },
	        childNodes
	      )
	    );
	  };
	
	  var _JSONArrayNode = JSONArrayNode;
	  JSONArrayNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONArrayNode) || JSONArrayNode;
	  return JSONArrayNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONArrayNode;
	module.exports = exports['default'];
	
	// flag to see if we still need to render our child nodes
	
	// cache store for our child nodes
	
	// cache store for the number of items string we display

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _utilsHexToRgb = __webpack_require__(42);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONBooleanNode = (function (_React$Component) {
	  _inherits(JSONBooleanNode, _React$Component);
	
	  function JSONBooleanNode() {
	    _classCallCheck(this, _JSONBooleanNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONBooleanNode.prototype.render = function render() {
	    var truthString = this.props.value ? 'true' : 'false';
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Boolean', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base09
	          }, this.props.styles.getValueStyle('Boolean', true)) },
	        truthString
	      )
	    );
	  };
	
	  var _JSONBooleanNode = JSONBooleanNode;
	  JSONBooleanNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONBooleanNode) || JSONBooleanNode;
	  return JSONBooleanNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONBooleanNode;
	module.exports = exports['default'];

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _utilsHexToRgb = __webpack_require__(42);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONDateNode = (function (_React$Component) {
	  _inherits(JSONDateNode, _React$Component);
	
	  function JSONDateNode() {
	    _classCallCheck(this, _JSONDateNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONDateNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Date', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base0B
	          }, this.props.styles.getValueStyle('Date', true)) },
	        this.props.value.toISOString()
	      )
	    );
	  };
	
	  var _JSONDateNode = JSONDateNode;
	  JSONDateNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONDateNode) || JSONDateNode;
	  return JSONDateNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONDateNode;
	module.exports = exports['default'];

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _utilsHexToRgb = __webpack_require__(42);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONFunctionNode = (function (_React$Component) {
	  _inherits(JSONFunctionNode, _React$Component);
	
	  function JSONFunctionNode() {
	    _classCallCheck(this, _JSONFunctionNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONFunctionNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Undefined', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base08
	          }, this.props.styles.getValueStyle('Undefined', true)) },
	        this.props.value.toString()
	      )
	    );
	  };
	
	  var _JSONFunctionNode = JSONFunctionNode;
	  JSONFunctionNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONFunctionNode) || JSONFunctionNode;
	  return JSONFunctionNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONFunctionNode;
	module.exports = exports['default'];

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _getIterator = __webpack_require__(491)['default'];
	
	var _Number$isSafeInteger = __webpack_require__(492)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _JSONArrow = __webpack_require__(118);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	var _grabNode = __webpack_require__(86);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};
	
	var JSONIterableNode = (function (_React$Component) {
	  _inherits(JSONIterableNode, _React$Component);
	
	  function JSONIterableNode(props) {
	    _classCallCheck(this, _JSONIterableNode);
	
	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }
	
	  // Returns the child nodes for each entry in iterable. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.
	
	  JSONIterableNode.prototype.getChildNodes = function getChildNodes() {
	    if (this.state.expanded && this.needsChildNodes) {
	      var childNodes = [];
	      for (var _iterator = this.props.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
	        var _ref;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }
	
	        var entry = _ref;
	
	        var key = null;
	        var value = null;
	        if (Array.isArray(entry)) {
	          key = entry[0];
	          value = entry[1];
	        } else {
	          key = childNodes.length;
	          value = entry;
	        }
	
	        var prevData = undefined;
	        if (typeof this.props.previousData !== 'undefined' && this.props.previousData !== null) {
	          prevData = this.props.previousData[key];
	        }
	        var node = _grabNode2['default'](key, value, prevData, this.props.theme, this.props.styles, this.props.getItemString);
	        if (node !== false) {
	          childNodes.push(node);
	        }
	      }
	      this.needsChildNodes = false;
	      this.renderedChildren = childNodes;
	    }
	    return this.renderedChildren;
	  };
	
	  // Returns the "n entries" string for this node, generating and
	  // caching it if it hasn't been created yet.
	
	  JSONIterableNode.prototype.getItemString = function getItemString(itemType) {
	    if (!this.itemString) {
	      var data = this.props.data;
	
	      var count = 0;
	      if (_Number$isSafeInteger(data.size)) {
	        count = data.size;
	      } else {
	        for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
	          var _ref2;
	
	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	          }
	
	          var entry = _ref2;
	          // eslint-disable-line no-unused-vars
	          count += 1;
	        }
	      }
	      this.itemString = count + ' entr' + (count !== 1 ? 'ies' : 'y');
	    }
	    return this.props.getItemString('Iterable', this.props.data, itemType, this.itemString);
	  };
	
	  JSONIterableNode.prototype.render = function render() {
	    var childNodes = this.getChildNodes();
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0E
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this), style: this.props.styles.getArrowStyle(this.state.expanded) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Iterable', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({}, spanStyle, this.props.styles.getItemStringStyle('Iterable', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.getItemString(_react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '()'
	        ))
	      ),
	      _react2['default'].createElement(
	        'ol',
	        { style: _extends({}, childListStyle, this.props.styles.getListStyle('Iterable', this.state.expanded)) },
	        childNodes
	      )
	    );
	  };
	
	  var _JSONIterableNode = JSONIterableNode;
	  JSONIterableNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONIterableNode) || JSONIterableNode;
	  return JSONIterableNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONIterableNode;
	module.exports = exports['default'];
	
	// flag to see if we still need to render our child nodes
	
	// cache store for our child nodes
	
	// cache store for the number of items string we display

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _utilsHexToRgb = __webpack_require__(42);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONNullNode = (function (_React$Component) {
	  _inherits(JSONNullNode, _React$Component);
	
	  function JSONNullNode() {
	    _classCallCheck(this, _JSONNullNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONNullNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Null', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base08
	          }, this.props.styles.getValueStyle('Null', true)) },
	        'null'
	      )
	    );
	  };
	
	  var _JSONNullNode = JSONNullNode;
	  JSONNullNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONNullNode) || JSONNullNode;
	  return JSONNullNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONNullNode;
	module.exports = exports['default'];

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _utilsHexToRgb = __webpack_require__(42);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONNumberNode = (function (_React$Component) {
	  _inherits(JSONNumberNode, _React$Component);
	
	  function JSONNumberNode() {
	    _classCallCheck(this, _JSONNumberNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONNumberNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Number', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base09
	          }, this.props.styles.getValueStyle('Number', true)) },
	        this.props.value
	      )
	    );
	  };
	
	  var _JSONNumberNode = JSONNumberNode;
	  JSONNumberNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONNumberNode) || JSONNumberNode;
	  return JSONNumberNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONNumberNode;
	module.exports = exports['default'];

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _Object$keys = __webpack_require__(496)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _JSONArrow = __webpack_require__(118);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	var _grabNode = __webpack_require__(86);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};
	
	var JSONObjectNode = (function (_React$Component) {
	  _inherits(JSONObjectNode, _React$Component);
	
	  function JSONObjectNode(props) {
	    _classCallCheck(this, _JSONObjectNode);
	
	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.itemString = false;
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }
	
	  // Returns the child nodes for each element in the object. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.
	
	  JSONObjectNode.prototype.getChildNodes = function getChildNodes() {
	    if (this.state.expanded && this.needsChildNodes) {
	      var obj = this.props.data;
	      var childNodes = [];
	      for (var k in obj) {
	        if (obj.hasOwnProperty(k)) {
	          var prevData = undefined;
	          if (typeof this.props.previousData !== 'undefined' && this.props.previousData !== null) {
	            prevData = this.props.previousData[k];
	          }
	          var node = _grabNode2['default'](k, obj[k], prevData, this.props.theme, this.props.styles, this.props.getItemString);
	          if (node !== false) {
	            childNodes.push(node);
	          }
	        }
	      }
	      this.needsChildNodes = false;
	      this.renderedChildren = childNodes;
	    }
	    return this.renderedChildren;
	  };
	
	  // Returns the "n Items" string for this node, generating and
	  // caching it if it hasn't been created yet.
	
	  JSONObjectNode.prototype.getItemString = function getItemString(itemType) {
	    if (!this.itemString) {
	      var len = _Object$keys(this.props.data).length;
	      this.itemString = len + ' key' + (len !== 1 ? 's' : '');
	    }
	    return this.props.getItemString('Object', this.props.data, itemType, this.itemString);
	  };
	
	  JSONObjectNode.prototype.render = function render() {
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0B
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this), style: this.props.styles.getArrowStyle(this.state.expanded) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Object', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({}, spanStyle, this.props.styles.getItemStringStyle('Object', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.getItemString(_react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '{}'
	        ))
	      ),
	      _react2['default'].createElement(
	        'ul',
	        { style: _extends({}, childListStyle, this.props.styles.getListStyle('Object', this.state.expanded)) },
	        this.getChildNodes()
	      )
	    );
	  };
	
	  var _JSONObjectNode = JSONObjectNode;
	  JSONObjectNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONObjectNode) || JSONObjectNode;
	  return JSONObjectNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONObjectNode;
	module.exports = exports['default'];
	
	// cache store for the number of items string we display
	
	// flag to see if we still need to render our child nodes
	
	// cache store for our child nodes

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _utilsHexToRgb = __webpack_require__(42);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONStringNode = (function (_React$Component) {
	  _inherits(JSONStringNode, _React$Component);
	
	  function JSONStringNode() {
	    _classCallCheck(this, _JSONStringNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONStringNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('String', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base0B
	          }, this.props.styles.getValueStyle('String', true)) },
	        '"',
	        this.props.value,
	        '"'
	      )
	    );
	  };
	
	  var _JSONStringNode = JSONStringNode;
	  JSONStringNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONStringNode) || JSONStringNode;
	  return JSONStringNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONStringNode;
	module.exports = exports['default'];

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(20)['default'];
	
	var _classCallCheck = __webpack_require__(18)['default'];
	
	var _extends = __webpack_require__(19)['default'];
	
	var _interopRequireDefault = __webpack_require__(15)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(25);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(24);
	
	var _utilsHexToRgb = __webpack_require__(42);
	
	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONUndefinedNode = (function (_React$Component) {
	  _inherits(JSONUndefinedNode, _React$Component);
	
	  function JSONUndefinedNode() {
	    _classCallCheck(this, _JSONUndefinedNode);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  JSONUndefinedNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Undefined', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base08
	          }, this.props.styles.getValueStyle('Undefined', true)) },
	        'undefined'
	      )
	    );
	  };
	
	  var _JSONUndefinedNode = JSONUndefinedNode;
	  JSONUndefinedNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONUndefinedNode) || JSONUndefinedNode;
	  return JSONUndefinedNode;
	})(_react2['default'].Component);
	
	exports['default'] = JSONUndefinedNode;
	module.exports = exports['default'];

/***/ },
/* 487 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    this.setState({
	      expanded: !this.state.expanded
	    });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    // resets our caches and flags we need to build child nodes again
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.needsChildNodes = true;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 488 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol$iterator = __webpack_require__(498)['default'];
	
	exports.__esModule = true;
	
	exports['default'] = function (obj) {
	  if (obj !== null && typeof obj === 'object' && !Array.isArray(obj) && typeof obj[_Symbol$iterator] === 'function') {
	    return 'Iterable';
	  }
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};
	
	module.exports = exports['default'];

/***/ },
/* 490 */
306,
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(314), __esModule: true };

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(315), __esModule: true };

/***/ },
/* 493 */
262,
/* 494 */
263,
/* 495 */
147,
/* 496 */
96,
/* 497 */
265,
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(320), __esModule: true };

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(495)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 500 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 501 */
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 502 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */
	
	'use strict';
	
	var shallowCompare = __webpack_require__(582);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */
	
	'use strict';
	
	var ReactChildren = __webpack_require__(125);
	var ReactElement = __webpack_require__(12);
	
	var emptyFunction = __webpack_require__(17);
	var invariant = __webpack_require__(2);
	var warning = __webpack_require__(4);
	
	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set a fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	var ReactFragment = {
	  // Wrap a keyed object in an opaque proxy that warns you if you access any
	  // of its properties.
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	       true ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : undefined;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	       true ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : undefined;
	      return object;
	    }
	
	    !(object.nodeType !== 1) ?  true ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : undefined;
	
	    var result = [];
	
	    for (var key in object) {
	      if (true) {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	           true ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : undefined;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }
	
	    return result;
	  }
	};
	
	module.exports = ReactFragment;

/***/ },
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(234);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(212);
	var ReactTransitionChildMapping = __webpack_require__(560);
	
	var assign = __webpack_require__(3);
	var emptyFunction = __webpack_require__(17);
	
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});
	
	module.exports = ReactTransitionGroup;

/***/ },
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(107);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var assign = __webpack_require__(3);
	var keyOf = __webpack_require__(27);
	var invariant = __webpack_require__(2);
	var hasOwnProperty = ({}).hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ?  true ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ?  true ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}
	
	function update(value, spec) {
	  !(typeof spec === 'object') ?  true ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ?  true ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ?  true ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ?  true ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ?  true ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ?  true ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;

/***/ },
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDock = __webpack_require__(476);
	
	var _reactDock2 = _interopRequireDefault(_reactDock);
	
	var _constants = __webpack_require__(240);
	
	var _actions = __webpack_require__(239);
	
	var _reducers = __webpack_require__(590);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _parseKey = __webpack_require__(469);
	
	var _parseKey2 = _interopRequireDefault(_parseKey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DockMonitor = (function (_Component) {
	  _inherits(DockMonitor, _Component);
	
	  function DockMonitor(props) {
	    _classCallCheck(this, DockMonitor);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleSizeChange = _this.handleSizeChange.bind(_this);
	    return _this;
	  }
	
	  DockMonitor.prototype.componentDidMount = function componentDidMount() {
	    window.addEventListener('keydown', this.handleKeyDown);
	  };
	
	  DockMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('keydown', this.handleKeyDown);
	  };
	
	  DockMonitor.prototype.matchesKey = function matchesKey(key, event) {
	    var charCode = event.keyCode || event.which;
	    var char = String.fromCharCode(charCode);
	    return key.name.toUpperCase() === char.toUpperCase() && key.alt === event.altKey && key.ctrl === event.ctrlKey && key.meta === event.metaKey && key.shift === event.shiftKey;
	  };
	
	  DockMonitor.prototype.handleKeyDown = function handleKeyDown(e) {
	    var visibilityKey = (0, _parseKey2.default)(this.props.toggleVisibilityKey);
	    var positionKey = (0, _parseKey2.default)(this.props.changePositionKey);
	
	    if (this.matchesKey(visibilityKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.toggleVisibility)());
	    } else if (this.matchesKey(positionKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.changePosition)());
	    }
	  };
	
	  DockMonitor.prototype.handleSizeChange = function handleSizeChange(requestedSize) {
	    this.props.dispatch((0, _actions.changeSize)(requestedSize));
	  };
	
	  DockMonitor.prototype.render = function render() {
	    var _props = this.props;
	    var monitorState = _props.monitorState;
	    var children = _props.children;
	    var fluid = _props.fluid;
	
	    var rest = _objectWithoutProperties(_props, ['monitorState', 'children', 'fluid']);
	
	    var position = monitorState.position;
	    var isVisible = monitorState.isVisible;
	    var size = monitorState.size;
	
	    var childProps = _extends({}, rest, {
	      monitorState: monitorState.childMonitorState
	    });
	
	    return _react2.default.createElement(
	      _reactDock2.default,
	      { position: position,
	        isVisible: isVisible,
	        size: size,
	        fluid: fluid,
	        onSizeChange: this.handleSizeChange,
	        dimMode: 'none' },
	      (0, _react.cloneElement)(children, childProps)
	    );
	  };
	
	  return DockMonitor;
	})(_react.Component);
	
	DockMonitor.update = _reducers2.default;
	DockMonitor.propTypes = {
	  defaultPosition: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	  defaultIsVisible: _react.PropTypes.bool.isRequired,
	  defaultSize: _react.PropTypes.number.isRequired,
	  toggleVisibilityKey: _react.PropTypes.string.isRequired,
	  changePositionKey: _react.PropTypes.string.isRequired,
	  fluid: _react.PropTypes.bool,
	  children: _react.PropTypes.element,
	
	  dispatch: _react.PropTypes.func,
	  monitorState: _react.PropTypes.shape({
	    position: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	    size: _react.PropTypes.number.isRequired,
	    isVisible: _react.PropTypes.bool.isRequired,
	    childMonitorState: _react.PropTypes.any
	  })
	};
	DockMonitor.defaultProps = {
	  defaultIsVisible: true,
	  defaultPosition: 'right',
	  defaultSize: 0.3,
	  fluid: true
	};
	exports.default = DockMonitor;

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _DockMonitor = __webpack_require__(588);
	
	var _DockMonitor2 = _interopRequireDefault(_DockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _DockMonitor2.default;

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = reducer;
	
	var _actions = __webpack_require__(239);
	
	var _constants = __webpack_require__(240);
	
	function position(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultPosition : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.CHANGE_POSITION ? _constants.POSITIONS[(_constants.POSITIONS.indexOf(state) + 1) % _constants.POSITIONS.length] : state;
	}
	
	function size(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultSize : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.CHANGE_SIZE ? action.size : state;
	}
	
	function isVisible(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultIsVisible : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.TOGGLE_VISIBILITY ? !state : state;
	}
	
	function childMonitorState(props, state, action) {
	  var child = props.children;
	  return child.type.update(child.props, state, action);
	}
	
	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];
	
	  return {
	    position: position(props, state.position, action),
	    isVisible: isVisible(props, state.isVisible, action),
	    size: size(props, state.size, action),
	    childMonitorState: childMonitorState(props, state.childMonitorState, action)
	  };
	}

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LogMonitorEntry = __webpack_require__(593);
	
	var _LogMonitorEntry2 = _interopRequireDefault(_LogMonitorEntry);
	
	var _LogMonitorButton = __webpack_require__(592);
	
	var _LogMonitorButton2 = _interopRequireDefault(_LogMonitorButton);
	
	var _function = __webpack_require__(119);
	
	var _function2 = _interopRequireDefault(_function);
	
	var _reduxDevtoolsThemes = __webpack_require__(598);
	
	var themes = _interopRequireWildcard(_reduxDevtoolsThemes);
	
	var _reduxDevtools = __webpack_require__(242);
	
	var _actions = __webpack_require__(241);
	
	var _reducers = __webpack_require__(597);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reset = _reduxDevtools.ActionCreators.reset;
	var rollback = _reduxDevtools.ActionCreators.rollback;
	var commit = _reduxDevtools.ActionCreators.commit;
	var sweep = _reduxDevtools.ActionCreators.sweep;
	var toggleAction = _reduxDevtools.ActionCreators.toggleAction;
	
	var styles = {
	  container: {
	    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
	    position: 'relative',
	    overflowY: 'hidden',
	    width: '100%',
	    height: '100%',
	    minWidth: 300,
	    direction: 'ltr'
	  },
	  buttonBar: {
	    textAlign: 'center',
	    borderBottomWidth: 1,
	    borderBottomStyle: 'solid',
	    borderColor: 'transparent',
	    zIndex: 1,
	    display: 'flex',
	    flexDirection: 'row'
	  },
	  elements: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 38,
	    bottom: 0,
	    overflowX: 'hidden',
	    overflowY: 'auto'
	  }
	};
	
	var LogMonitor = (function (_Component) {
	  _inherits(LogMonitor, _Component);
	
	  function LogMonitor(props) {
	    _classCallCheck(this, LogMonitor);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	    _this.handleToggleAction = _this.handleToggleAction.bind(_this);
	    _this.handleReset = _this.handleReset.bind(_this);
	    _this.handleRollback = _this.handleRollback.bind(_this);
	    _this.handleSweep = _this.handleSweep.bind(_this);
	    _this.handleCommit = _this.handleCommit.bind(_this);
	    return _this;
	  }
	
	  LogMonitor.prototype.componentDidMount = function componentDidMount() {
	    var node = this.refs.container;
	    if (!node) {
	      return;
	    }
	
	    node.scrollTop = this.props.monitorState.initialScrollTop;
	    this.interval = setInterval(this.updateScrollTop.bind(this), 1000);
	  };
	
	  LogMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    clearInterval(this.setInterval);
	  };
	
	  LogMonitor.prototype.updateScrollTop = function updateScrollTop() {
	    var node = this.refs.container;
	    this.props.dispatch((0, _actions.updateScrollTop)(node ? node.scrollTop : 0));
	  };
	
	  LogMonitor.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var node = this.refs.container;
	    if (!node) {
	      this.scrollDown = true;
	    } else if (this.props.stagedActionIds.length < nextProps.stagedActionIds.length) {
	      var scrollTop = node.scrollTop;
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;
	
	      this.scrollDown = Math.abs(scrollHeight - (scrollTop + offsetHeight)) < 20;
	    } else {
	      this.scrollDown = false;
	    }
	  };
	
	  LogMonitor.prototype.componentDidUpdate = function componentDidUpdate() {
	    var node = this.refs.container;
	    if (!node) {
	      return;
	    }
	    if (this.scrollDown) {
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;
	
	      node.scrollTop = scrollHeight - offsetHeight;
	      this.scrollDown = false;
	    }
	  };
	
	  LogMonitor.prototype.handleRollback = function handleRollback() {
	    this.props.dispatch(rollback());
	  };
	
	  LogMonitor.prototype.handleSweep = function handleSweep() {
	    this.props.dispatch(sweep());
	  };
	
	  LogMonitor.prototype.handleCommit = function handleCommit() {
	    this.props.dispatch(commit());
	  };
	
	  LogMonitor.prototype.handleToggleAction = function handleToggleAction(id) {
	    this.props.dispatch(toggleAction(id));
	  };
	
	  LogMonitor.prototype.handleReset = function handleReset() {
	    this.props.dispatch(reset());
	  };
	
	  LogMonitor.prototype.getTheme = function getTheme() {
	    var theme = this.props.theme;
	
	    if (typeof theme !== 'string') {
	      return theme;
	    }
	
	    if (typeof themes[theme] !== 'undefined') {
	      return themes[theme];
	    }
	
	    console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
	    return themes.nicinabox;
	  };
	
	  LogMonitor.prototype.render = function render() {
	    var elements = [];
	    var theme = this.getTheme();
	    var _props = this.props;
	    var actionsById = _props.actionsById;
	    var skippedActionIds = _props.skippedActionIds;
	    var stagedActionIds = _props.stagedActionIds;
	    var computedStates = _props.computedStates;
	    var select = _props.select;
	
	    for (var i = 0; i < stagedActionIds.length; i++) {
	      var actionId = stagedActionIds[i];
	      var action = actionsById[actionId].action;
	      var _computedStates$i = computedStates[i];
	      var state = _computedStates$i.state;
	      var error = _computedStates$i.error;
	
	      var previousState = undefined;
	      if (i > 0) {
	        previousState = computedStates[i - 1].state;
	      }
	      elements.push(_react2.default.createElement(_LogMonitorEntry2.default, { key: actionId,
	        theme: theme,
	        select: select,
	        action: action,
	        actionId: actionId,
	        state: state,
	        previousState: previousState,
	        collapsed: skippedActionIds.indexOf(actionId) > -1,
	        error: error,
	        onActionClick: this.handleToggleAction }));
	    }
	
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.container, { backgroundColor: theme.base00 }) },
	      _react2.default.createElement(
	        'div',
	        { style: _extends({}, styles.buttonBar, { borderColor: theme.base02 }) },
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleReset,
	            enabled: true },
	          'Reset'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleRollback,
	            enabled: computedStates.length > 1 },
	          'Revert'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleSweep,
	            enabled: skippedActionIds.length > 0 },
	          'Sweep'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleCommit,
	            enabled: computedStates.length > 1 },
	          'Commit'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: styles.elements, ref: 'container' },
	        elements
	      )
	    );
	  };
	
	  return LogMonitor;
	})(_react.Component);
	
	LogMonitor.update = _reducers2.default;
	LogMonitor.propTypes = {
	  dispatch: _react.PropTypes.func,
	  computedStates: _react.PropTypes.array,
	  actionsById: _react.PropTypes.object,
	  stagedActionIds: _react.PropTypes.array,
	  skippedActionIds: _react.PropTypes.array,
	  monitorState: _react.PropTypes.shape({
	    initialScrollTop: _react.PropTypes.number
	  }),
	
	  preserveScrollTop: _react.PropTypes.bool,
	  select: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
	};
	LogMonitor.defaultProps = {
	  select: function select(state) {
	    return state;
	  },
	  theme: 'nicinabox',
	  preserveScrollTop: true
	};
	exports.default = LogMonitor;

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _brighten = __webpack_require__(595);
	
	var _brighten2 = _interopRequireDefault(_brighten);
	
	var _function = __webpack_require__(119);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  base: {
	    cursor: 'pointer',
	    fontWeight: 'bold',
	    borderRadius: 3,
	    padding: 4,
	    marginLeft: 3,
	    marginRight: 3,
	    marginTop: 5,
	    marginBottom: 5,
	    flexGrow: 1,
	    display: 'inline-block',
	    fontSize: '0.8em',
	    color: 'white',
	    textDecoration: 'none'
	  }
	};
	
	var LogMonitorButton = (function (_React$Component) {
	  _inherits(LogMonitorButton, _React$Component);
	
	  function LogMonitorButton(props) {
	    _classCallCheck(this, LogMonitorButton);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
	    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	
	    _this.state = {
	      hovered: false,
	      active: false
	    };
	    return _this;
	  }
	
	  LogMonitorButton.prototype.handleMouseEnter = function handleMouseEnter() {
	    this.setState({ hovered: true });
	  };
	
	  LogMonitorButton.prototype.handleMouseLeave = function handleMouseLeave() {
	    this.setState({ hovered: false });
	  };
	
	  LogMonitorButton.prototype.handleMouseDown = function handleMouseDown() {
	    this.setState({ active: true });
	  };
	
	  LogMonitorButton.prototype.handleMouseUp = function handleMouseUp() {
	    this.setState({ active: false });
	  };
	
	  LogMonitorButton.prototype.onClick = function onClick() {
	    if (!this.props.enabled) {
	      return;
	    }
	    if (this.props.onClick) {
	      this.props.onClick();
	    }
	  };
	
	  LogMonitorButton.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      backgroundColor: this.props.theme.base02
	    });
	    if (this.props.enabled && this.state.hovered) {
	      style = _extends({}, style, {
	        backgroundColor: (0, _brighten2.default)(this.props.theme.base02, 0.2)
	      });
	    }
	    if (!this.props.enabled) {
	      style = _extends({}, style, {
	        opacity: 0.2,
	        cursor: 'text',
	        backgroundColor: 'transparent'
	      });
	    }
	    return _react2.default.createElement(
	      'a',
	      { onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onClick: this.onClick,
	        style: style },
	      this.props.children
	    );
	  };
	
	  return LogMonitorButton;
	})(_react2.default.Component);
	
	exports.default = LogMonitorButton;

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(204);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	var _LogMonitorEntryAction = __webpack_require__(594);
	
	var _LogMonitorEntryAction2 = _interopRequireDefault(_LogMonitorEntryAction);
	
	var _function = __webpack_require__(119);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  entry: {
	    display: 'block',
	    WebkitUserSelect: 'none'
	  },
	  tree: {
	    paddingLeft: 0
	  }
	};
	
	var LogMonitorEntry = (function (_Component) {
	  _inherits(LogMonitorEntry, _Component);
	
	  function LogMonitorEntry(props) {
	    _classCallCheck(this, LogMonitorEntry);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	    _this.handleActionClick = _this.handleActionClick.bind(_this);
	    return _this;
	  }
	
	  LogMonitorEntry.prototype.printState = function printState(state, error) {
	    var errorText = error;
	    if (!errorText) {
	      try {
	        return _react2.default.createElement(_reactJsonTree2.default, {
	          theme: this.props.theme,
	          keyName: 'state',
	          data: this.props.select(state),
	          previousData: this.props.select(this.props.previousState),
	          style: styles.tree });
	      } catch (err) {
	        errorText = 'Error selecting state.';
	      }
	    }
	
	    return _react2.default.createElement(
	      'div',
	      { style: {
	          color: this.props.theme.base08,
	          paddingTop: 20,
	          paddingLeft: 30,
	          paddingRight: 30,
	          paddingBottom: 35
	        } },
	      errorText
	    );
	  };
	
	  LogMonitorEntry.prototype.handleActionClick = function handleActionClick() {
	    var _props = this.props;
	    var actionId = _props.actionId;
	    var onActionClick = _props.onActionClick;
	
	    if (actionId > 0) {
	      onActionClick(actionId);
	    }
	  };
	
	  LogMonitorEntry.prototype.render = function render() {
	    var _props2 = this.props;
	    var actionId = _props2.actionId;
	    var error = _props2.error;
	    var action = _props2.action;
	    var state = _props2.state;
	    var collapsed = _props2.collapsed;
	
	    var styleEntry = {
	      opacity: collapsed ? 0.5 : 1,
	      cursor: actionId > 0 ? 'pointer' : 'default'
	    };
	
	    return _react2.default.createElement(
	      'div',
	      { style: {
	          textDecoration: collapsed ? 'line-through' : 'none',
	          color: this.props.theme.base06
	        } },
	      _react2.default.createElement(_LogMonitorEntryAction2.default, {
	        theme: this.props.theme,
	        collapsed: collapsed,
	        action: action,
	        onClick: this.handleActionClick,
	        style: _extends({}, styles.entry, styleEntry) }),
	      !collapsed && _react2.default.createElement(
	        'div',
	        null,
	        this.printState(state, error)
	      )
	    );
	  };
	
	  return LogMonitorEntry;
	})(_react.Component);
	
	LogMonitorEntry.propTypes = {
	  state: _react.PropTypes.object.isRequired,
	  action: _react.PropTypes.object.isRequired,
	  actionId: _react.PropTypes.number.isRequired,
	  select: _react.PropTypes.func.isRequired,
	  error: _react.PropTypes.string,
	  onActionClick: _react.PropTypes.func.isRequired,
	  collapsed: _react.PropTypes.bool
	};
	exports.default = LogMonitorEntry;

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(204);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  actionBar: {
	    paddingTop: 8,
	    paddingBottom: 7,
	    paddingLeft: 16
	  },
	  payload: {
	    margin: 0,
	    overflow: 'auto'
	  }
	};
	
	var LogMonitorAction = (function (_Component) {
	  _inherits(LogMonitorAction, _Component);
	
	  function LogMonitorAction() {
	    _classCallCheck(this, LogMonitorAction);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  LogMonitorAction.prototype.renderPayload = function renderPayload(payload) {
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.payload, {
	          backgroundColor: this.props.theme.base00
	        }) },
	      Object.keys(payload).length > 0 ? _react2.default.createElement(_reactJsonTree2.default, { theme: this.props.theme, keyName: 'action', data: payload }) : ''
	    );
	  };
	
	  LogMonitorAction.prototype.render = function render() {
	    var _props$action = this.props.action;
	    var type = _props$action.type;
	
	    var payload = _objectWithoutProperties(_props$action, ['type']);
	
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({
	          backgroundColor: this.props.theme.base02,
	          color: this.props.theme.base06
	        }, this.props.style) },
	      _react2.default.createElement(
	        'div',
	        { style: styles.actionBar,
	          onClick: this.props.onClick },
	        type
	      ),
	      !this.props.collapsed ? this.renderPayload(payload) : ''
	    );
	  };
	
	  return LogMonitorAction;
	})(_react.Component);
	
	exports.default = LogMonitorAction;

/***/ },
/* 595 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (hexColor, lightness) {
	  var hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex.replace(/(.)/g, '$1$1');
	  }
	  var lum = lightness || 0;
	
	  var rgb = '#';
	  var c = undefined;
	  for (var i = 0; i < 3; ++i) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	  return rgb;
	};

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _LogMonitor = __webpack_require__(591);
	
	var _LogMonitor2 = _interopRequireDefault(_LogMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _LogMonitor2.default;

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = reducer;
	
	var _actions = __webpack_require__(241);
	
	function initialScrollTop(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var action = arguments[2];
	
	  if (!props.preserveScrollTop) {
	    return 0;
	  }
	
	  return action.type === _actions.UPDATE_SCROLL_TOP ? action.scrollTop : state;
	}
	
	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];
	
	  return {
	    initialScrollTop: initialScrollTop(props, state.initialScrollTop, action)
	  };
	}

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _base16 = __webpack_require__(296);
	
	_defaults(exports, _interopExportWildcard(_base16, _defaults));
	
	var _nicinabox = __webpack_require__(599);
	
	exports.nicinabox = _interopRequire(_nicinabox);

/***/ },
/* 599 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'nicinabox',
	  author: 'nicinabox (http://github.com/nicinabox)',
	  base00: '#2A2F3A',
	  base01: '#3C444F',
	  base02: '#4F5A65',
	  base03: '#BEBEBE',
	  base04: '#b0b0b0', // based on ocean theme
	  base05: '#d0d0d0', // based on ocean theme
	  base06: '#FFFFFF',
	  base07: '#f5f5f5', // based on ocean theme
	  base08: '#fb9fb1', // based on ocean theme
	  base09: '#FC6D24',
	  base0A: '#ddb26f', // based on ocean theme
	  base0B: '#A1C659',
	  base0C: '#12cfc0', // based on ocean theme
	  base0D: '#6FB3D2',
	  base0E: '#D381C3',
	  base0F: '#deaf8f' // based on ocean theme
	};
	module.exports = exports['default'];

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = createDevTools;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(49);
	
	var _instrument = __webpack_require__(243);
	
	var _instrument2 = _interopRequireDefault(_instrument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function createDevTools(children) {
	  var _class, _temp;
	
	  var monitorElement = _react.Children.only(children);
	  var monitorProps = monitorElement.props;
	  var Monitor = monitorElement.type;
	  var ConnectedMonitor = (0, _reactRedux.connect)(function (state) {
	    return state;
	  })(Monitor);
	  var enhancer = (0, _instrument2.default)(function (state, action) {
	    return Monitor.update(monitorProps, state, action);
	  });
	
	  return _temp = _class = (function (_Component) {
	    _inherits(DevTools, _Component);
	
	    function DevTools(props, context) {
	      _classCallCheck(this, DevTools);
	
	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	      if (!props.store && !context.store) {
	        console.error('Redux DevTools could not render. You must pass the Redux store ' + 'to <DevTools> either as a "store" prop or by wrapping it in a ' + '<Provider store={store}>.');
	        return _possibleConstructorReturn(_this);
	      }
	
	      if (context.store) {
	        _this.liftedStore = context.store.liftedStore;
	      } else {
	        _this.liftedStore = props.store.liftedStore;
	      }
	
	      if (!_this.liftedStore) {
	        console.error('Redux DevTools could not render. Did you forget to include ' + 'DevTools.instrument() in your store enhancer chain before ' + 'using createStore()?');
	      }
	      return _this;
	    }
	
	    DevTools.prototype.render = function render() {
	      if (!this.liftedStore) {
	        return null;
	      }
	
	      return _react2.default.createElement(ConnectedMonitor, _extends({}, monitorProps, {
	        store: this.liftedStore }));
	    };
	
	    return DevTools;
	  })(_react.Component), _class.contextTypes = {
	    store: _react.PropTypes.object
	  }, _class.propTypes = {
	    store: _react.PropTypes.object
	  }, _class.instrument = function () {
	    return enhancer;
	  }, _temp;
	}

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = persistState;
	
	var _mapValues = __webpack_require__(437);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	var _identity = __webpack_require__(114);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function persistState(sessionId) {
	  var deserializeState = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
	  var deserializeAction = arguments.length <= 2 || arguments[2] === undefined ? _identity2.default : arguments[2];
	
	  if (!sessionId) {
	    return function (next) {
	      return function () {
	        return next.apply(undefined, arguments);
	      };
	    };
	  }
	
	  function deserialize(state) {
	    return _extends({}, state, {
	      actionsById: (0, _mapValues2.default)(state.actionsById, function (liftedAction) {
	        return _extends({}, liftedAction, {
	          action: deserializeAction(liftedAction.action)
	        });
	      }),
	      committedState: deserializeState(state.committedState),
	      computedStates: state.computedStates.map(function (computedState) {
	        return _extends({}, computedState, {
	          state: deserializeState(computedState.state)
	        });
	      })
	    });
	  }
	
	  return function (next) {
	    return function (reducer, initialState) {
	      var key = 'redux-dev-session-' + sessionId;
	
	      var finalInitialState = undefined;
	      try {
	        var json = localStorage.getItem(key);
	        if (json) {
	          finalInitialState = deserialize(JSON.parse(json)) || initialState;
	          next(reducer, initialState);
	        }
	      } catch (e) {
	        console.warn('Could not read debug session from localStorage:', e);
	        try {
	          localStorage.removeItem(key);
	        } finally {
	          finalInitialState = undefined;
	        }
	      }
	
	      var store = next(reducer, finalInitialState);
	
	      return _extends({}, store, {
	        dispatch: function dispatch(action) {
	          store.dispatch(action);
	
	          try {
	            localStorage.setItem(key, JSON.stringify(store.getState()));
	          } catch (e) {
	            console.warn('Could not write debug session to localStorage:', e);
	          }
	
	          return action;
	        }
	      });
	    };
	  };
	}

/***/ },
/* 602 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = thunkMiddleware;
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */
/***/ function(module, exports) {

	var objToStr = function(x){ return Object.prototype.toString.call(x); };
	
	var thrower = function(error){
	    throw error;
	};
	
	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }
	
	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = function(left, right, key){
	            if (left !== undefined && right !== undefined) {
	                var getTypeName = function(obj){
	                    if (obj && obj.constructor && obj.constructor.name) {
	                        return obj.constructor.name;
	                    }
	                    else {
	                        return objToStr(obj).slice(8, -1);
	                    }
	                };
	                throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                        + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	            }
	            return left === undefined ? right : left;
	        };
	    }
	
	    function setNonEnumerable(target, key, value){
	        if (key in target){
	            target[key] = value;
	        }
	        else {
	            Object.defineProperty(target, key, {
	                value: value,
	                writable: true,
	                configurable: true
	            });
	        }
	    }
	
	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];
	
	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;
	
	            var wrapIfFunction = function(thing){
	                return typeof thing !== "function" ? thing
	                : function(){
	                    return thing.call(this, arguments);
	                };
	            };
	
	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }
	
	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";
	
	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }
	
	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};
	
	mixins._mergeObjects = function(obj1, obj2) {
	    var assertObject = function(obj, obj2){
	        var type = objToStr(obj);
	        if (type !== '[object Object]') {
	            var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	            var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	            thrower('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	        }
	    };
	
	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }
	
	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);
	
	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            thrower('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });
	
	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;
	
	}
	
	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }
	
	    var fn = left || right;
	
	    return function(args){
	        return fn.apply(this, args);
	    };
	};
	
	mixins.MANY = function(left, right, key){
	    return function(args){
	        if (right) right.apply(this, args);
	        return left ? left.apply(this, args) : undefined;
	    };
	};
	
	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if(left && right) {
	        return mixins._mergeObjects(left, right);
	    }
	
	    return left || right;
	}
	
	mixins.MANY_MERGED = function(left, right, key){
	    return function(args){
	        var res1 = right && right.apply(this, args);
	        var res2 = left && left.apply(this, args);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};
	
	
	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return right.call(this, left.apply(this, args));
	    };
	};
	
	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return left.call(this, right.apply(this, args));
	    };
	};
	


/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(353);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(248)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./core.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./core.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
]);
//# sourceMappingURL=app.b942b7fdf4dd481f4c0c.js.map