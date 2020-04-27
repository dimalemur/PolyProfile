(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.react-input-autosize"],{

/***/ "../node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar sizerStyle = {\n\tposition: 'absolute',\n\ttop: 0,\n\tleft: 0,\n\tvisibility: 'hidden',\n\theight: 0,\n\toverflow: 'scroll',\n\twhiteSpace: 'pre'\n};\n\nvar INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];\n\nvar cleanInputProps = function cleanInputProps(inputProps) {\n\tINPUT_PROPS_BLACKLIST.forEach(function (field) {\n\t\treturn delete inputProps[field];\n\t});\n\treturn inputProps;\n};\n\nvar copyStyles = function copyStyles(styles, node) {\n\tnode.style.fontSize = styles.fontSize;\n\tnode.style.fontFamily = styles.fontFamily;\n\tnode.style.fontWeight = styles.fontWeight;\n\tnode.style.fontStyle = styles.fontStyle;\n\tnode.style.letterSpacing = styles.letterSpacing;\n\tnode.style.textTransform = styles.textTransform;\n};\n\nvar isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\\/|Edge\\//.test(window.navigator.userAgent) : false;\n\nvar generateId = function generateId() {\n\t// we only need an auto-generated ID for stylesheet injection, which is only\n\t// used for IE. so if the browser is not IE, this should return undefined.\n\treturn isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;\n};\n\nvar AutosizeInput = function (_Component) {\n\t_inherits(AutosizeInput, _Component);\n\n\tfunction AutosizeInput(props) {\n\t\t_classCallCheck(this, AutosizeInput);\n\n\t\tvar _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));\n\n\t\t_this.inputRef = function (el) {\n\t\t\t_this.input = el;\n\t\t\tif (typeof _this.props.inputRef === 'function') {\n\t\t\t\t_this.props.inputRef(el);\n\t\t\t}\n\t\t};\n\n\t\t_this.placeHolderSizerRef = function (el) {\n\t\t\t_this.placeHolderSizer = el;\n\t\t};\n\n\t\t_this.sizerRef = function (el) {\n\t\t\t_this.sizer = el;\n\t\t};\n\n\t\t_this.state = {\n\t\t\tinputWidth: props.minWidth,\n\t\t\tinputId: props.id || generateId()\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(AutosizeInput, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tthis.mounted = true;\n\t\t\tthis.copyInputStyles();\n\t\t\tthis.updateInputWidth();\n\t\t}\n\t}, {\n\t\tkey: 'UNSAFE_componentWillReceiveProps',\n\t\tvalue: function UNSAFE_componentWillReceiveProps(nextProps) {\n\t\t\tvar id = nextProps.id;\n\n\t\t\tif (id !== this.props.id) {\n\t\t\t\tthis.setState({ inputId: id || generateId() });\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'componentDidUpdate',\n\t\tvalue: function componentDidUpdate(prevProps, prevState) {\n\t\t\tif (prevState.inputWidth !== this.state.inputWidth) {\n\t\t\t\tif (typeof this.props.onAutosize === 'function') {\n\t\t\t\t\tthis.props.onAutosize(this.state.inputWidth);\n\t\t\t\t}\n\t\t\t}\n\t\t\tthis.updateInputWidth();\n\t\t}\n\t}, {\n\t\tkey: 'componentWillUnmount',\n\t\tvalue: function componentWillUnmount() {\n\t\t\tthis.mounted = false;\n\t\t}\n\t}, {\n\t\tkey: 'copyInputStyles',\n\t\tvalue: function copyInputStyles() {\n\t\t\tif (!this.mounted || !window.getComputedStyle) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tvar inputStyles = this.input && window.getComputedStyle(this.input);\n\t\t\tif (!inputStyles) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tcopyStyles(inputStyles, this.sizer);\n\t\t\tif (this.placeHolderSizer) {\n\t\t\t\tcopyStyles(inputStyles, this.placeHolderSizer);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'updateInputWidth',\n\t\tvalue: function updateInputWidth() {\n\t\t\tif (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tvar newInputWidth = void 0;\n\t\t\tif (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {\n\t\t\t\tnewInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;\n\t\t\t} else {\n\t\t\t\tnewInputWidth = this.sizer.scrollWidth + 2;\n\t\t\t}\n\t\t\t// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI\n\t\t\tvar extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;\n\t\t\tnewInputWidth += extraWidth;\n\t\t\tif (newInputWidth < this.props.minWidth) {\n\t\t\t\tnewInputWidth = this.props.minWidth;\n\t\t\t}\n\t\t\tif (newInputWidth !== this.state.inputWidth) {\n\t\t\t\tthis.setState({\n\t\t\t\t\tinputWidth: newInputWidth\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'getInput',\n\t\tvalue: function getInput() {\n\t\t\treturn this.input;\n\t\t}\n\t}, {\n\t\tkey: 'focus',\n\t\tvalue: function focus() {\n\t\t\tthis.input.focus();\n\t\t}\n\t}, {\n\t\tkey: 'blur',\n\t\tvalue: function blur() {\n\t\t\tthis.input.blur();\n\t\t}\n\t}, {\n\t\tkey: 'select',\n\t\tvalue: function select() {\n\t\t\tthis.input.select();\n\t\t}\n\t}, {\n\t\tkey: 'renderStyles',\n\t\tvalue: function renderStyles() {\n\t\t\t// this method injects styles to hide IE's clear indicator, which messes\n\t\t\t// with input size detection. the stylesheet is only injected when the\n\t\t\t// browser is IE, and can also be disabled by the `injectStyles` prop.\n\t\t\tvar injectStyles = this.props.injectStyles;\n\n\t\t\treturn isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {\n\t\t\t\t\t__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'\n\t\t\t\t} }) : null;\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {\n\t\t\t\tif (previousValue !== null && previousValue !== undefined) {\n\t\t\t\t\treturn previousValue;\n\t\t\t\t}\n\t\t\t\treturn currentValue;\n\t\t\t});\n\n\t\t\tvar wrapperStyle = _extends({}, this.props.style);\n\t\t\tif (!wrapperStyle.display) wrapperStyle.display = 'inline-block';\n\n\t\t\tvar inputStyle = _extends({\n\t\t\t\tboxSizing: 'content-box',\n\t\t\t\twidth: this.state.inputWidth + 'px'\n\t\t\t}, this.props.inputStyle);\n\n\t\t\tvar inputProps = _objectWithoutProperties(this.props, []);\n\n\t\t\tcleanInputProps(inputProps);\n\t\t\tinputProps.className = this.props.inputClassName;\n\t\t\tinputProps.id = this.state.inputId;\n\t\t\tinputProps.style = inputStyle;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: this.props.className, style: wrapperStyle },\n\t\t\t\tthis.renderStyles(),\n\t\t\t\t_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ ref: this.sizerRef, style: sizerStyle },\n\t\t\t\t\tsizerValue\n\t\t\t\t),\n\t\t\t\tthis.props.placeholder ? _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ ref: this.placeHolderSizerRef, style: sizerStyle },\n\t\t\t\t\tthis.props.placeholder\n\t\t\t\t) : null\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn AutosizeInput;\n}(_react.Component);\n\nAutosizeInput.propTypes = {\n\tclassName: _propTypes2.default.string, // className for the outer element\n\tdefaultValue: _propTypes2.default.any, // default field value\n\textraWidth: _propTypes2.default.oneOfType([// additional width for input element\n\t_propTypes2.default.number, _propTypes2.default.string]),\n\tid: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots\n\tinjectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true\n\tinputClassName: _propTypes2.default.string, // className for the input element\n\tinputRef: _propTypes2.default.func, // ref callback for the input element\n\tinputStyle: _propTypes2.default.object, // css styles for the input element\n\tminWidth: _propTypes2.default.oneOfType([// minimum width for input element\n\t_propTypes2.default.number, _propTypes2.default.string]),\n\tonAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}\n\tonChange: _propTypes2.default.func, // onChange handler: function(event) {}\n\tplaceholder: _propTypes2.default.string, // placeholder text\n\tplaceholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder\n\tstyle: _propTypes2.default.object, // css styles for the outer element\n\tvalue: _propTypes2.default.any // field value\n};\nAutosizeInput.defaultProps = {\n\tminWidth: 1,\n\tinjectStyles: true\n};\n\nexports.default = AutosizeInput;\n\n//# sourceURL=webpack:///../node_modules/react-input-autosize/lib/AutosizeInput.js?");

/***/ })

}]);