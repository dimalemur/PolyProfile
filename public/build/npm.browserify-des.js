(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.browserify-des"],{

/***/ "../node_modules/browserify-des/index.js":
/*!***********************************************!*\
  !*** ../node_modules/browserify-des/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var CipherBase = __webpack_require__(/*! cipher-base */ \"../node_modules/cipher-base/index.js\")\nvar des = __webpack_require__(/*! des.js */ \"../node_modules/des.js/lib/des.js\")\nvar inherits = __webpack_require__(/*! inherits */ \"../node_modules/inherits/inherits_browser.js\")\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"../node_modules/safe-buffer/index.js\").Buffer\n\nvar modes = {\n  'des-ede3-cbc': des.CBC.instantiate(des.EDE),\n  'des-ede3': des.EDE,\n  'des-ede-cbc': des.CBC.instantiate(des.EDE),\n  'des-ede': des.EDE,\n  'des-cbc': des.CBC.instantiate(des.DES),\n  'des-ecb': des.DES\n}\nmodes.des = modes['des-cbc']\nmodes.des3 = modes['des-ede3-cbc']\nmodule.exports = DES\ninherits(DES, CipherBase)\nfunction DES (opts) {\n  CipherBase.call(this)\n  var modeName = opts.mode.toLowerCase()\n  var mode = modes[modeName]\n  var type\n  if (opts.decrypt) {\n    type = 'decrypt'\n  } else {\n    type = 'encrypt'\n  }\n  var key = opts.key\n  if (!Buffer.isBuffer(key)) {\n    key = Buffer.from(key)\n  }\n  if (modeName === 'des-ede' || modeName === 'des-ede-cbc') {\n    key = Buffer.concat([key, key.slice(0, 8)])\n  }\n  var iv = opts.iv\n  if (!Buffer.isBuffer(iv)) {\n    iv = Buffer.from(iv)\n  }\n  this._des = mode.create({\n    key: key,\n    iv: iv,\n    type: type\n  })\n}\nDES.prototype._update = function (data) {\n  return Buffer.from(this._des.update(data))\n}\nDES.prototype._final = function () {\n  return Buffer.from(this._des.final())\n}\n\n\n//# sourceURL=webpack:///../node_modules/browserify-des/index.js?");

/***/ }),

/***/ "../node_modules/browserify-des/modes.js":
/*!***********************************************!*\
  !*** ../node_modules/browserify-des/modes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports['des-ecb'] = {\n  key: 8,\n  iv: 0\n}\nexports['des-cbc'] = exports.des = {\n  key: 8,\n  iv: 8\n}\nexports['des-ede3-cbc'] = exports.des3 = {\n  key: 24,\n  iv: 8\n}\nexports['des-ede3'] = {\n  key: 24,\n  iv: 0\n}\nexports['des-ede-cbc'] = {\n  key: 16,\n  iv: 8\n}\nexports['des-ede'] = {\n  key: 16,\n  iv: 0\n}\n\n\n//# sourceURL=webpack:///../node_modules/browserify-des/modes.js?");

/***/ })

}]);