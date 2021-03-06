(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.jss-plugin-camel-case"],{

/***/ "../node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyphenate-style-name */ \"../node_modules/hyphenate-style-name/index.js\");\n\n\n/**\n * Convert camel cased property names to dash separated.\n *\n * @param {Object} style\n * @return {Object}\n */\n\nfunction convertCase(style) {\n  var converted = {};\n\n  for (var prop in style) {\n    var key = prop.indexOf('--') === 0 ? prop : Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prop);\n    converted[key] = style[prop];\n  }\n\n  if (style.fallbacks) {\n    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);\n  }\n\n  return converted;\n}\n/**\n * Allow camel cased property names by converting them back to dasherized.\n *\n * @param {Rule} rule\n */\n\n\nfunction camelCase() {\n  function onProcessStyle(style) {\n    if (Array.isArray(style)) {\n      // Handle rules like @font-face, which can have multiple styles in an array\n      for (var index = 0; index < style.length; index++) {\n        style[index] = convertCase(style[index]);\n      }\n\n      return style;\n    }\n\n    return convertCase(style);\n  }\n\n  function onChangeValue(value, prop, rule) {\n    if (prop.indexOf('--') === 0) {\n      return value;\n    }\n\n    var hyphenatedProp = Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prop); // There was no camel case in place\n\n    if (prop === hyphenatedProp) return value;\n    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.\n\n    return null;\n  }\n\n  return {\n    onProcessStyle: onProcessStyle,\n    onChangeValue: onChangeValue\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (camelCase);\n\n\n//# sourceURL=webpack:///../node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js?");

/***/ })

}]);