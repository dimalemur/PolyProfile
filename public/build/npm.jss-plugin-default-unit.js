(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.jss-plugin-default-unit"],{

/***/ "../node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ \"../node_modules/jss/dist/jss.esm.js\");\n\n\nvar px = jss__WEBPACK_IMPORTED_MODULE_0__[\"hasCSSTOMSupport\"] && CSS ? CSS.px : 'px';\nvar ms = jss__WEBPACK_IMPORTED_MODULE_0__[\"hasCSSTOMSupport\"] && CSS ? CSS.ms : 'ms';\nvar percent = jss__WEBPACK_IMPORTED_MODULE_0__[\"hasCSSTOMSupport\"] && CSS ? CSS.percent : '%';\n/**\n * Generated jss-plugin-default-unit CSS property units\n *\n * @type object\n */\n\nvar defaultUnits = {\n  // Animation properties\n  'animation-delay': ms,\n  'animation-duration': ms,\n  // Background properties\n  'background-position': px,\n  'background-position-x': px,\n  'background-position-y': px,\n  'background-size': px,\n  // Border Properties\n  border: px,\n  'border-bottom': px,\n  'border-bottom-left-radius': px,\n  'border-bottom-right-radius': px,\n  'border-bottom-width': px,\n  'border-left': px,\n  'border-left-width': px,\n  'border-radius': px,\n  'border-right': px,\n  'border-right-width': px,\n  'border-top': px,\n  'border-top-left-radius': px,\n  'border-top-right-radius': px,\n  'border-top-width': px,\n  'border-width': px,\n  // Margin properties\n  margin: px,\n  'margin-bottom': px,\n  'margin-left': px,\n  'margin-right': px,\n  'margin-top': px,\n  // Padding properties\n  padding: px,\n  'padding-bottom': px,\n  'padding-left': px,\n  'padding-right': px,\n  'padding-top': px,\n  // Mask properties\n  'mask-position-x': px,\n  'mask-position-y': px,\n  'mask-size': px,\n  // Width and height properties\n  height: px,\n  width: px,\n  'min-height': px,\n  'max-height': px,\n  'min-width': px,\n  'max-width': px,\n  // Position properties\n  bottom: px,\n  left: px,\n  top: px,\n  right: px,\n  // Shadow properties\n  'box-shadow': px,\n  'text-shadow': px,\n  // Column properties\n  'column-gap': px,\n  'column-rule': px,\n  'column-rule-width': px,\n  'column-width': px,\n  // Font and text properties\n  'font-size': px,\n  'font-size-delta': px,\n  'letter-spacing': px,\n  'text-indent': px,\n  'text-stroke': px,\n  'text-stroke-width': px,\n  'word-spacing': px,\n  // Motion properties\n  motion: px,\n  'motion-offset': px,\n  // Outline properties\n  outline: px,\n  'outline-offset': px,\n  'outline-width': px,\n  // Perspective properties\n  perspective: px,\n  'perspective-origin-x': percent,\n  'perspective-origin-y': percent,\n  // Transform properties\n  'transform-origin': percent,\n  'transform-origin-x': percent,\n  'transform-origin-y': percent,\n  'transform-origin-z': percent,\n  // Transition properties\n  'transition-delay': ms,\n  'transition-duration': ms,\n  // Alignment properties\n  'vertical-align': px,\n  'flex-basis': px,\n  // Some random properties\n  'shape-margin': px,\n  size: px,\n  // Grid properties\n  grid: px,\n  'grid-gap': px,\n  'grid-row-gap': px,\n  'grid-column-gap': px,\n  'grid-template-rows': px,\n  'grid-template-columns': px,\n  'grid-auto-rows': px,\n  'grid-auto-columns': px,\n  // Not existing properties.\n  // Used to avoid issues with jss-plugin-expand integration.\n  'box-shadow-x': px,\n  'box-shadow-y': px,\n  'box-shadow-blur': px,\n  'box-shadow-spread': px,\n  'font-line-height': px,\n  'text-shadow-x': px,\n  'text-shadow-y': px,\n  'text-shadow-blur': px\n};\n\n/**\n * Clones the object and adds a camel cased property version.\n */\nfunction addCamelCasedVersion(obj) {\n  var regExp = /(-[a-z])/g;\n\n  var replace = function replace(str) {\n    return str[1].toUpperCase();\n  };\n\n  var newObj = {};\n\n  for (var _key in obj) {\n    newObj[_key] = obj[_key];\n    newObj[_key.replace(regExp, replace)] = obj[_key];\n  }\n\n  return newObj;\n}\n\nvar units = addCamelCasedVersion(defaultUnits);\n/**\n * Recursive deep style passing function\n */\n\nfunction iterate(prop, value, options) {\n  if (!value) return value;\n\n  if (Array.isArray(value)) {\n    for (var i = 0; i < value.length; i++) {\n      value[i] = iterate(prop, value[i], options);\n    }\n  } else if (typeof value === 'object') {\n    if (prop === 'fallbacks') {\n      for (var innerProp in value) {\n        value[innerProp] = iterate(innerProp, value[innerProp], options);\n      }\n    } else {\n      for (var _innerProp in value) {\n        value[_innerProp] = iterate(prop + \"-\" + _innerProp, value[_innerProp], options);\n      }\n    }\n  } else if (typeof value === 'number') {\n    var unit = options[prop] || units[prop];\n\n    if (unit) {\n      return typeof unit === 'function' ? unit(value).toString() : \"\" + value + unit;\n    }\n\n    return value.toString();\n  }\n\n  return value;\n}\n/**\n * Add unit to numeric values.\n */\n\n\nfunction defaultUnit(options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var camelCasedOptions = addCamelCasedVersion(options);\n\n  function onProcessStyle(style, rule) {\n    if (rule.type !== 'style') return style;\n\n    for (var prop in style) {\n      style[prop] = iterate(prop, style[prop], camelCasedOptions);\n    }\n\n    return style;\n  }\n\n  function onChangeValue(value, prop) {\n    return iterate(prop, value, camelCasedOptions);\n  }\n\n  return {\n    onProcessStyle: onProcessStyle,\n    onChangeValue: onChangeValue\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultUnit);\n\n\n//# sourceURL=webpack:///../node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js?");

/***/ })

}]);