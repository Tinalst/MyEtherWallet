((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@myetherwallet/eth-token-balance/dist/abi.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@myetherwallet/eth-token-balance/dist/abi.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  constant: true,
  inputs: [{
    name: "_owner",
    type: "address"
  }, {
    name: "name",
    type: "bool"
  }, {
    name: "website",
    type: "bool"
  }, {
    name: "email",
    type: "bool"
  }, {
    name: "_count",
    type: "uint256"
  }],
  name: "getAllBalance",
  outputs: [{
    name: "",
    type: "bytes"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}];
exports.default = _default;

/***/ }),

/***/ "./node_modules/@myetherwallet/eth-token-balance/dist/binaryDecoder.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@myetherwallet/eth-token-balance/dist/binaryDecoder.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

var _bignumber = _interopRequireDefault(__webpack_require__(/*! bignumber.js */ "./node_modules/@myetherwallet/eth-token-balance/node_modules/bignumber.js/bignumber.js"));

var _web = _interopRequireDefault(__webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizeHex = bytes => {
  return bytes * 2;
};

function trim(str) {
  return str.replace(/\0[\s\S]*$/g, "");
}

function getAscii(hex) {
  hex = hex.substring(0, 2) == "0x" ? hex : "0x" + hex;
  return trim(_web.default.utils.toAscii(hex));
}

var _default = hex => {
  var tokens = [];
  hex = hex.substring(0, 2) == "0x" ? hex.substring(2) : hex;
  hex = hex.substring(0, hex.lastIndexOf("1") - 1); //starting point

  var offset = hex.length;
  offset -= sizeHex(32);
  var countTokens = hex.substr(offset, sizeHex(32));
  offset -= sizeHex(1);
  var isName = parseInt(hex.substr(offset, sizeHex(1)));
  offset -= sizeHex(1);
  var isWebSite = parseInt(hex.substr(offset, sizeHex(1)));
  offset -= sizeHex(1);
  var isEmail = parseInt(hex.substr(offset, sizeHex(1)));
  var numTokens = new _bignumber.default("0x" + countTokens).toNumber();

  for (var i = 0; i < numTokens; i++) {
    var token = {};
    offset -= sizeHex(16);
    token.symbol = getAscii(hex.substr(offset, sizeHex(16)));
    offset -= sizeHex(20);
    token.addr = "0x" + hex.substr(offset, sizeHex(20));
    offset -= sizeHex(1);
    token.decimals = new _bignumber.default("0x" + hex.substr(offset, sizeHex(1))).toNumber();
    offset -= sizeHex(32);
    token.balance = new _bignumber.default("0x" + hex.substr(offset, sizeHex(32))).toFixed();

    if (isName) {
      offset -= sizeHex(16);
      token.name = getAscii(hex.substr(offset, sizeHex(16)));
    }

    if (isWebSite) {
      offset -= sizeHex(32);
      token.website = getAscii(hex.substr(offset, sizeHex(32)));
    }

    if (isEmail) {
      offset -= sizeHex(32);
      token.email = getAscii(hex.substr(offset, sizeHex(32)));
    }

    tokens.push(token);
  }

  return tokens;
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/@myetherwallet/eth-token-balance/dist/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@myetherwallet/eth-token-balance/dist/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _binaryDecoder = _interopRequireDefault(__webpack_require__(/*! ./binaryDecoder */ "./node_modules/@myetherwallet/eth-token-balance/dist/binaryDecoder.js"));

var _abi = _interopRequireDefault(__webpack_require__(/*! ./abi */ "./node_modules/@myetherwallet/eth-token-balance/dist/abi.js"));

var _web = _interopRequireDefault(__webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contractAddress = {
  // Mainnet
  "1": "0x2783c0A4Bfd3721961653a9e9939Fc63687bf07f",
  "3": "0xB8E1Bbc50FD87Ea00D8ce73747Ac6F516aF26dAC"
};

class TokenBalance {
  constructor(ethProvider) {
    if (ethProvider.currentProvider) {
      ethProvider = ethProvider.currentProvider;
    }

    this.web3 = new _web.default(ethProvider);
    this.tokenContract = new this.web3.eth.Contract(_abi.default);
    this.tokenPromise = new Promise((resolve, reject) => {
      this.web3.eth.net.getId().then(version => {
        if (!contractAddress[version]) {
          return reject(new Error("Network not supported"));
        }

        this.tokenContract.options.address = contractAddress[version];
        resolve();
      });
    });
  }

  getBalance(address) {
    let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let website = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    let email = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    let count = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    return new Promise((resolve, reject) => {
      this.tokenPromise.then(() => {
        this.tokenContract.methods.getAllBalance(address, name, website, email, count).call().then(res => {
          resolve((0, _binaryDecoder.default)(res));
        }).catch(reject);
      }).catch(reject);
    });
  }

}

var _default = TokenBalance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@myetherwallet/eth-token-balance/node_modules/bignumber.js/bignumber.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@myetherwallet/eth-token-balance/node_modules/bignumber.js/bignumber.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v8.1.1
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    hasSymbol = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol',

    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                    // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',      // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if only one character,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '1e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (hasSymbol) {
      P[Symbol.toStringTag] = 'BigNumber';

      // Node.js v10.12.0+
      P[Symbol.for('nodejs.util.inspect.custom')] = P.valueOf;
    }

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return BigNumber; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node.js and other environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    link: {
      type: String,
      default: ''
    },
    linkText: {
      type: String,
      default: ''
    },
    question: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.js");

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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: {
      type: String,
      default: ''
    },
    removeWallet: {
      type: Function,
      default: function _default() {}
    },
    address: {
      type: String,
      default: ''
    },
    wallet: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      locName: this.name
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$refs.editModal.$on('hidden', function () {
      _this.locName = _this.name;
    });
  },
  methods: {
    saveWallet: function saveWallet() {
      var wallet = Object.assign({}, this.wallet);
      _helpers__WEBPACK_IMPORTED_MODULE_1__["ExtensionHelpers"].addWalletToStore(this.address, wallet.priv, this.locName, wallet.type, 'edit', this.saveWalletCb);
    },
    saveWalletCb: function saveWalletCb() {
      this.$refs.editModal.hide();
      _helpers__WEBPACK_IMPORTED_MODULE_1__["Toast"].responseHandler('Wallet successfully updated!', _helpers__WEBPACK_IMPORTED_MODULE_1__["Toast"].SUCCESS);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    cancelRemove: {
      type: Function,
      default: function _default() {}
    },
    walletType: {
      type: String,
      default: ''
    },
    nickname: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    }
  },
  methods: {
    removeWallet: function removeWallet() {
      _helpers__WEBPACK_IMPORTED_MODULE_0__["ExtensionHelpers"].deleteWalletFromStore(this.address, this.removeCb);
    },
    removeCb: function removeCb() {
      this.$refs.removeWalletModal.hide();
      _helpers__WEBPACK_IMPORTED_MODULE_0__["Toast"].responseHandler('Wallet successfully removed!', _helpers__WEBPACK_IMPORTED_MODULE_0__["Toast"].SUCCESS);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Blockie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Blockie */ "./src/components/Blockie/index.js");
/* harmony import */ var _myetherwallet_eth_token_balance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @myetherwallet/eth-token-balance */ "./node_modules/@myetherwallet/eth-token-balance/dist/index.js");
/* harmony import */ var _myetherwallet_eth_token_balance__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_myetherwallet_eth_token_balance__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _helpers_sortByBalance_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/helpers/sortByBalance.js */ "./src/helpers/sortByBalance.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _EditWalletModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../EditWalletModal */ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/index.js");
/* harmony import */ var _RemoveWalletModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../RemoveWalletModal */ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! store */ "./node_modules/store/dist/store.legacy.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _networks_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/networks/types */ "./src/networks/types/index.js");
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! web3-utils */ "./node_modules/web3-utils/src/index.js");
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _layouts_InterfaceLayout_components_InterfaceTokensModal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/layouts/InterfaceLayout/components/InterfaceTokensModal */ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/index.js");















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    blockie: _components_Blockie__WEBPACK_IMPORTED_MODULE_14__["default"],
    'edit-wallet-modal': _EditWalletModal__WEBPACK_IMPORTED_MODULE_18__["default"],
    'remove-wallet-modal': _RemoveWalletModal__WEBPACK_IMPORTED_MODULE_19__["default"],
    'interface-tokens-modal': _layouts_InterfaceLayout_components_InterfaceTokensModal__WEBPACK_IMPORTED_MODULE_25__["default"]
  },
  props: {
    address: {
      type: String,
      default: ''
    },
    wallet: {
      type: String,
      default: ''
    },
    nickname: {
      type: String,
      default: ''
    },
    walletType: {
      type: String,
      default: 'watchOnly'
    },
    access: {
      type: Function,
      default: function _default() {}
    },
    detail: {
      type: Function,
      default: function _default() {}
    },
    balance: {
      type: String,
      default: ''
    },
    usd: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      loading: false,
      tokens: [],
      search: '',
      localTokenVersion: [],
      customTokens: [],
      localCustomTokens: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_20__["mapState"])(['web3', 'network']), {
    parsedWallet: function parsedWallet() {
      return JSON.parse(this.wallet);
    },
    convertedBalance: function convertedBalance() {
      var balance = new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(this.balance).times(this.usd).toFixed(2);
      return "$ ".concat(balance);
    }
  }),
  watch: {
    search: function search(newVal) {
      this.loading = true;

      if (newVal !== '') {
        this.localTokenVersion = this.tokens.slice().filter(function (token) {
          if (token.symbol.toLowerCase().includes(newVal.toLowerCase())) {
            return token;
          }
        });
        this.localCustomTokens = this.customTokens.slice().filter(function (token) {
          if (token.symbol.toLowerCase().includes(newVal.toLowerCase())) {
            return token;
          }
        });
        this.loading = false;
      } else {
        this.loading = false;
        this.localTokenVersion = this.tokens.slice();
        this.localCustomTokens = this.customTokens.slice();
      }
    }
  },
  created: function created() {
    window.chrome.storage.onChanged.addListener(this.fetchTokens);
  },
  mounted: function mounted() {
    this.fetchTokens();
  },
  destroyed: function destroyed() {
    window.chrome.storage.onChanged.removeListener(this.fetchTokens);
  },
  methods: {
    searchBySymbol: function searchBySymbol(symbol) {
      var searchNetwork = this.localTokenVersion.find(function (item) {
        return item.symbol.toLowerCase() === symbol.toLowerCase();
      });
      var searchCustom = this.customTokens.find(function (item) {
        return item.symbol.toLowerCase() === symbol.toLowerCase();
      });

      if (searchNetwork !== undefined || searchCustom !== undefined) {
        return false;
      }

      return true;
    },
    searchByAddr: function searchByAddr(addr) {
      var searchNetwork = this.localTokenVersion.find(function (item) {
        return web3_utils__WEBPACK_IMPORTED_MODULE_24___default.a.toChecksumAddress(item.address) === web3_utils__WEBPACK_IMPORTED_MODULE_24___default.a.toChecksumAddress(addr);
      });
      var searchCustom = this.customTokens.find(function (item) {
        return web3_utils__WEBPACK_IMPORTED_MODULE_24___default.a.toChecksumAddress(item.address) === web3_utils__WEBPACK_IMPORTED_MODULE_24___default.a.toChecksumAddress(addr);
      });

      if (searchNetwork !== undefined || searchCustom !== undefined) {
        return false;
      }

      return true;
    },
    tokenError: function tokenError(address, symbol, addType) {
      var findTokenBySymbol = this.searchBySymbol(symbol);
      var findTokenByAddr = this.searchByAddr(address);

      if (!findTokenByAddr && addType !== '') {
        this.$refs.tokenModal.$refs.tokenModal.hide();
        _helpers__WEBPACK_IMPORTED_MODULE_21__["Toast"].responseHandler('A default or custom token with this contract address already exists!', _helpers__WEBPACK_IMPORTED_MODULE_21__["Toast"].ERROR);
        return false;
      } else if (!findTokenBySymbol && addType !== '') {
        this.$refs.tokenModal.$refs.tokenModal.hide();
        _helpers__WEBPACK_IMPORTED_MODULE_21__["Toast"].responseHandler("A default or custom token with this symbol already exists! The token in our list may have the same symbol but a different contract address, try adding it again with a '2' after the symbol!", _helpers__WEBPACK_IMPORTED_MODULE_21__["Toast"].ERROR);
        return false;
      }

      return findTokenByAddr || findTokenBySymbol;
    },
    addToken: function () {
      var _addToken = Object(_Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(address, symbol, decimal) {
        var token, currentCustomToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.tokenError(address, symbol, 'manual')) {
                  _context.next = 12;
                  break;
                }

                token = {
                  address: address,
                  decimals: decimal,
                  email: '',
                  name: symbol,
                  symbol: symbol,
                  website: '',
                  type: 'custom'
                };
                currentCustomToken = store__WEBPACK_IMPORTED_MODULE_22___default.a.get('customTokens');
                this.customTokens = this.customTokens.length > 0 ? this.customTokens : [];
                this.customTokens.push(token);
                this.localCustomTokens = this.customTokens.splice();
                currentCustomToken[this.network.type.name] = this.customTokens;
                store__WEBPACK_IMPORTED_MODULE_22___default.a.set('customTokens', currentCustomToken);
                this.$refs.tokenModal.$refs.tokenModal.hide();
                _context.next = 11;
                return this.fetchTokens();

              case 11:
                _helpers__WEBPACK_IMPORTED_MODULE_21__["Toast"].responseHandler('Successfully added token!', _helpers__WEBPACK_IMPORTED_MODULE_21__["Toast"].SUCCESS);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addToken(_x, _x2, _x3) {
        return _addToken.apply(this, arguments);
      }

      return addToken;
    }(),
    openAddCustom: function openAddCustom() {
      this.$refs.tokenModal.$refs.tokenModal.show();
    },
    cancelRemove: function cancelRemove() {
      this.edit();
      this.$refs.removeWalletModal.$refs.removeWalletModal.hide();
    },
    edit: function edit() {
      this.$refs.editModal.$refs.editModal.show();
    },
    fetchTokenBalance: function () {
      var _fetchTokenBalance = Object(_Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(token) {
        var tokenIndex, customIdx, contractAbi, contract, data, balance;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tokenIndex = this.tokens.findIndex(function (element) {
                  return element.address.toLowerCase() === token.address.toLowerCase();
                });
                customIdx = this.customTokens.findIndex(function (element) {
                  return element.address.toLowerCase() === token.address.toLowerCase();
                });
                contractAbi = [{
                  name: 'balanceOf',
                  type: 'function',
                  constant: true,
                  inputs: [{
                    name: 'address',
                    type: 'address'
                  }],
                  outputs: [{
                    name: 'out',
                    type: 'uint256'
                  }]
                }];
                contract = new this.web3.eth.Contract(contractAbi);
                data = contract.methods.balanceOf(this.address).encodeABI();
                _context2.next = 7;
                return this.web3.eth.call({
                  to: token.address,
                  data: data
                }).then(function (res) {
                  var tokenBalance;

                  if (Number(res) === 0 || res === '0x') {
                    tokenBalance = 0;
                  } else {
                    var denominator = new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(10).pow(token.decimals);
                    tokenBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(res).div(denominator).toString();
                  }

                  return tokenBalance;
                }).catch(function (e) {
                  _helpers__WEBPACK_IMPORTED_MODULE_21__["Toast"].responseHandler(e, false);
                });

              case 7:
                balance = _context2.sent;
                this.localTokenVersion = this.localTokenVersion.map(function (item, idx) {
                  if (idx === tokenIndex) {
                    item.balance = balance;
                  }

                  return item;
                });
                this.localCustomTokens = this.localCustomTokens.map(function (item, idx) {
                  if (idx === customIdx) {
                    item.balance = balance;
                  }

                  return item;
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchTokenBalance(_x4) {
        return _fetchTokenBalance.apply(this, arguments);
      }

      return fetchTokenBalance;
    }(),
    openRemoveWallet: function openRemoveWallet() {
      this.$refs.editModal.$refs.editModal.hide();
      this.$refs.removeWalletModal.$refs.removeWalletModal.show();
    },
    fetchTokens: function () {
      var _fetchTokens = Object(_Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var tokens, tb, newLogo;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.loading = true;
                tokens = [];
                tb = new _myetherwallet_eth_token_balance__WEBPACK_IMPORTED_MODULE_15___default.a(this.web3.currentProvider);
                newLogo = {
                  // eslint-disable-next-line
                  src: __webpack_require__(/*! @/assets/images/networks/eth.svg */ "./src/assets/images/networks/eth.svg")
                };
                _context3.prev = 4;
                _context3.next = 7;
                return tb.getBalance(this.address);

              case 7:
                tokens = _context3.sent;
                tokens = tokens.map(function (token) {
                  var balance = token.balance;
                  delete token.balance;
                  token.balance = new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(balance).gt(0) ? new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(balance).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_17___default.a(10).pow(token.decimals)).toFixed(3) : 0;
                  token.address = token.addr; // token['logo'] = token.hasOwnProperty('logo') ? token.logo.hasOwnProperty('src') ? token.logo : newLogo : newLogo

                  token['logo'] = newLogo;
                  delete token.addr;
                  return token;
                });
                this.loading = false;
                this.localTokenVersion = tokens.sort(_helpers_sortByBalance_js__WEBPACK_IMPORTED_MODULE_16__["default"]);
                this.tokens = tokens.sort(_helpers_sortByBalance_js__WEBPACK_IMPORTED_MODULE_16__["default"]);
                _context3.next = 20;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](4);
                tokens = this.network.type.tokens.map(function (token) {
                  token.balance = 'Load'; // token['logo'] = token.hasOwnProperty('logo') ? token.logo.hasOwnProperty('src') ? token.logo : newLogo : newLogo

                  token['logo'] = newLogo;
                  return token;
                });
                this.loading = false;
                this.tokens = tokens;
                this.localTokenVersion = tokens;

              case 20:
                this.getCustomTokens();

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 14]]);
      }));

      function fetchTokens() {
        return _fetchTokens.apply(this, arguments);
      }

      return fetchTokens;
    }(),
    getCustomTokens: function getCustomTokens() {
      if (store__WEBPACK_IMPORTED_MODULE_22___default.a.get('localTokens') !== undefined) {
        this.getV3Tokens();
      }

      var storedTokens = store__WEBPACK_IMPORTED_MODULE_22___default.a.get('customTokens') || {};
      var tokens = storedTokens.hasOwnProperty(this.network.type.name) ? storedTokens[this.network.type.name] : [];
      this.customTokens = tokens.map(function (token) {
        var newLogo = {
          // eslint-disable-next-line
          src: __webpack_require__(/*! @/assets/images/networks/eth.svg */ "./src/assets/images/networks/eth.svg")
        }; // token['logo'] = token.hasOwnProperty('logo') ? token.logo.hasOwnProperty('src') ? token.logo : newLogo : newLogo

        token['logo'] = newLogo;
        return token;
      });
      this.localCustomTokens = this.customTokens.slice();
    },
    getV3Tokens: function getV3Tokens() {
      var _this = this;

      var v3Tokens = store__WEBPACK_IMPORTED_MODULE_22___default.a.get('localTokens');
      var v5CustomTokens = store__WEBPACK_IMPORTED_MODULE_22___default.a.get('customTokens');
      v3Tokens.forEach(function (token) {
        var newObj = {
          address: token.contractAddress,
          decimals: token.decimal,
          email: '',
          name: token.symbol,
          symbol: token.symbol,
          website: '',
          type: 'custom'
        };
        Object.keys(_networks_types__WEBPACK_IMPORTED_MODULE_23__).forEach(function (network) {
          if (token.network && (_networks_types__WEBPACK_IMPORTED_MODULE_23__[network].name.toLowerCase() === token.network.toLowerCase() || _networks_types__WEBPACK_IMPORTED_MODULE_23__[network].name_long.toLowerCase() === token.network.toLowerCase())) {
            if (_this.tokenError(newObj.address, newObj.symbol, '')) {
              v5CustomTokens[_networks_types__WEBPACK_IMPORTED_MODULE_23__[network].name].push(newObj);
            }
          }
        });
      });
      store__WEBPACK_IMPORTED_MODULE_22___default.a.set('customTokens', v5CustomTokens);
      store__WEBPACK_IMPORTED_MODULE_22___default.a.remove('localTokens');
    },
    copyAddress: function copyAddress() {
      this.$refs.addressInput.select();
      document.execCommand('copy');
    },
    viewAllTokens: function viewAllTokens(bool) {
      if (bool) {
        this.$refs.viewAllModal.show();
      } else {
        this.$refs.viewAllModal.hide();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_WalletInfoComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/WalletInfoComponent */ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/index.js");

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

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: {
    components: {
      default: {
        WalletInfoComponent: _components_WalletInfoComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
      }
    }
  },
  props: {
    ethPrice: {
      type: Number,
      default: 0
    },
    myWallets: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    togglePasswordModal: {
      type: Function,
      default: function _default() {}
    },
    addWallet: {
      type: Function,
      default: function _default() {}
    },
    openNetworkModal: {
      type: Function,
      default: function _default() {}
    },
    network: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    totalBalance: {
      type: String,
      default: '0'
    },
    convertedBalance: {
      type: String,
      default: '$ 0'
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _components_InterfaceBottomText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/InterfaceBottomText */ "./src/components/InterfaceBottomText/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_addressUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/addressUtils */ "./src/helpers/addressUtils.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'interface-bottom-text': _components_InterfaceBottomText__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    addToken: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      tokenAddress: '',
      tokenSymbol: '',
      tokenDecimal: '',
      validAddress: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(['web3']), {
    allFieldsValid: function allFieldsValid() {
      if (!this.validAddress) return false;
      if (this.tokenSymbol === '') return false;
      if (this.tokenDecimal < 0 || this.tokenDecimal > 18 || this.tokenDecimal === '') return false;
      if (this.errors.has('address') || this.errors.has('symbol') || this.errors.has('decimal')) return false;
      return true;
    }
  }),
  watch: {
    tokenAddress: function tokenAddress(newVal) {
      var strippedWhitespace = newVal.toLowerCase().trim();
      var regTest = new RegExp(/[a-zA-Z0-9]/g);
      this.validAddress = regTest.test(strippedWhitespace) && Object(_helpers_addressUtils__WEBPACK_IMPORTED_MODULE_7__["isAddress"])(strippedWhitespace);
      this.toAddress = strippedWhitespace;
      this.tokenAddress = strippedWhitespace;
    },
    tokenSymbol: function tokenSymbol(newVal) {
      this.tokenSymbol = newVal.substr(0, 7);
    }
  },
  methods: {
    resetCompState: function resetCompState() {
      this.tokenAddress = '';
      this.tokenSymbol = '';
      this.tokenDecimal = '';
      this.validAddress = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bottom-text" }, [
    _c("p", [
      _vm._v("\n    " + _vm._s(_vm.question) + "\n    "),
      _c(
        "a",
        {
          attrs: {
            href: _vm.link,
            target: "_blank",
            rel: "noopener noreferrer"
          }
        },
        [_vm._v(_vm._s(_vm.linkText))]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "editModal",
          staticClass: "bootstrap-modal",
          attrs: { "hide-footer": "", title: "Edit Modal", centered: "" }
        },
        [
          _c("div", { staticClass: "modal-contents" }, [
            _c("form", [
              _c("div", { staticClass: "input-container" }, [
                _c("label", { attrs: { for: "walletName" } }, [
                  _vm._v(" Wallet Name ")
                ]),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.locName,
                      expression: "locName"
                    }
                  ],
                  attrs: {
                    placeholder: "Please add a wallet nickname",
                    name: "walletName"
                  },
                  domProps: { value: _vm.locName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.locName = $event.target.value
                    }
                  }
                })
              ]),
              _c(
                "button",
                {
                  staticClass: "submit-button large-round-button-green-filled",
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.saveWallet($event)
                    }
                  }
                },
                [_vm._v("\n          Submit\n        ")]
              ),
              _c(
                "button",
                {
                  staticClass: "remove-button large-round-button-white-filled",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.removeWallet($event)
                    }
                  }
                },
                [_vm._v("\n          Remove Wallet\n        ")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "removeWalletModal",
          staticClass: "bootstrap-modal",
          attrs: {
            "hide-footer": "",
            "hide-header": "",
            centered: "",
            title: "Remove Wallet Wallet"
          }
        },
        [
          _c("div", { staticClass: "modal-contents" }, [
            _c("div", { staticClass: "warning-text-container" }, [
              _c("h2", [_vm._v("Remove Wallet")]),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.walletType === "wallet",
                      expression: "walletType === 'wallet'"
                    }
                  ],
                  staticClass: "text-container"
                },
                [
                  _vm._v(
                    "\n          Be sure you have saved the private key and/or Keystore File and the\n          password before you remove it. If you want to use this wallet with\n          your MyEtherWallet CX in the future, you will need to manually\n          re-add it using the private key/JSON and password..\n        "
                  )
                ]
              ),
              _c(
                "h3",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.walletType === "watchOnly",
                      expression: "walletType === 'watchOnly'"
                    }
                  ]
                },
                [
                  _vm._v(
                    "\n          Are you sure you want to delete wallet " +
                      _vm._s("" + _vm.nickname) +
                      "?\n        "
                  )
                ]
              )
            ]),
            _c("div", { staticClass: "remove-modal-buttons" }, [
              _c(
                "div",
                { staticClass: "cancel", on: { click: _vm.cancelRemove } },
                [_vm._v("\n          Cancel\n        ")]
              ),
              _c(
                "div",
                { staticClass: "remove", on: { click: _vm.removeWallet } },
                [_vm._v("\n          Remove\n        ")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wallet-info-container" },
    [
      _c("interface-tokens-modal", {
        ref: "tokenModal",
        attrs: { "add-token": _vm.addToken }
      }),
      _c("edit-wallet-modal", {
        ref: "editModal",
        attrs: {
          address: _vm.address,
          name: _vm.parsedWallet.nick,
          wallet: _vm.parsedWallet,
          "remove-wallet": _vm.openRemoveWallet
        }
      }),
      _c("remove-wallet-modal", {
        ref: "removeWalletModal",
        attrs: {
          "cancel-remove": _vm.cancelRemove,
          "wallet-type": _vm.parsedWallet.type,
          nickname: _vm.parsedWallet.nick,
          address: _vm.address
        }
      }),
      _c(
        "b-modal",
        {
          ref: "viewAllModal",
          attrs: {
            "hide-footer": "",
            "hide-header": "",
            "modal-class": "cx-token-modal"
          }
        },
        [
          _c("div", { staticClass: "modal-header-contaier" }, [
            _c("div", [
              _c("h3", [
                _vm._v("\n          All Tokens\n          "),
                _c("span", { staticClass: "token-count" }, [
                  _vm._v(" " + _vm._s(_vm.tokens.length) + " ")
                ])
              ]),
              _c("div", { staticClass: "modal-nickname" }, [
                _c("p", [_vm._v(_vm._s(_vm.parsedWallet.nick))])
              ])
            ]),
            _c("div", { staticClass: "header-buttons" }, [
              _c("div", { staticClass: "header-button" }, [
                _c("i", {
                  staticClass: "fa fa-repeat fa-lg",
                  on: { click: _vm.fetchTokens }
                })
              ]),
              _c("div", { staticClass: "header-button" }, [
                _c("i", {
                  staticClass: "fa fa-times fa-lg",
                  on: {
                    click: function() {
                      _vm.viewAllTokens(false)
                    }
                  }
                })
              ])
            ])
          ]),
          _c("div", { staticClass: "token-search-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              attrs: { placeholder: "Search tokens" },
              domProps: { value: _vm.search },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            }),
            _c("i", { staticClass: "fa fa-search" })
          ]),
          _c("div", { staticClass: "modal-tokens-container" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ],
                staticClass: "loading-container"
              },
              [
                _c("i", { staticClass: "fa fa-spinner fa-spin" }),
                _vm._v(" Loading Tokens...\n      ")
              ]
            ),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading,
                    expression: "!loading"
                  }
                ],
                staticClass: "tokens-container"
              },
              [
                _vm._l(_vm.localCustomTokens, function(token, idx) {
                  return _c(
                    "div",
                    {
                      key: token.address + _vm.address + idx,
                      staticClass: "modal-token-item"
                    },
                    [
                      _c("div", { staticClass: "icon-name-container" }, [
                        _c("img", { attrs: { src: token.logo.src } }),
                        _c("p", [
                          _vm._v(
                            "\n              " +
                              _vm._s(token.name) +
                              " (Custom) "
                          ),
                          _c("br"),
                          _c("span", [_vm._v(_vm._s(token.balance))])
                        ])
                      ])
                    ]
                  )
                }),
                _vm._l(_vm.localTokenVersion, function(token, idx) {
                  return _c(
                    "div",
                    {
                      key: token.address + _vm.address + idx,
                      staticClass: "modal-token-item"
                    },
                    [
                      _c("div", { staticClass: "icon-name-container" }, [
                        _c("img", { attrs: { src: token.logo.src } }),
                        _c("p", [
                          _vm._v("\n              " + _vm._s(token.name) + " "),
                          _c("br"),
                          _c("span", [_vm._v(_vm._s(token.balance))])
                        ])
                      ])
                    ]
                  )
                })
              ],
              2
            )
          ])
        ]
      ),
      _c("div", { staticClass: "nickname-and-buttons" }, [
        _c("p", [
          _vm._v("\n      " + _vm._s(_vm.parsedWallet.nick) + "\n    ")
        ]),
        _c("div", { staticClass: "button-container" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.walletType !== "watchOnly",
                  expression: "walletType !== 'watchOnly'"
                }
              ],
              staticClass: "clickable",
              on: {
                click: function() {
                  _vm.access(_vm.wallet, "access")
                }
              }
            },
            [_vm._v("\n        Access\n      ")]
          ),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.walletType !== "watchOnly",
                  expression: "walletType !== 'watchOnly'"
                }
              ],
              staticClass: "clickable",
              on: {
                click: function() {
                  _vm.detail(_vm.wallet, "view", _vm.nickname)
                }
              }
            },
            [_vm._v("\n        Details\n      ")]
          ),
          _c("div", { staticClass: "clickable", on: { click: _vm.edit } }, [
            _vm._v("Edit")
          ])
        ])
      ]),
      _c("div", { staticClass: "wallet-content" }, [
        _c("div", { staticClass: "address-and-balance-container" }, [
          _c("div", { staticClass: "address-content-container" }, [
            _c(
              "div",
              { staticClass: "address-info" },
              [
                _c("blockie", {
                  attrs: { address: _vm.address, width: "70px", height: "70px" }
                }),
                _c("div", { staticClass: "actual-address" }, [
                  _c("p", [_vm._v("Address")]),
                  _c("p", [_vm._v(_vm._s(_vm.address))]),
                  _c("input", {
                    ref: "addressInput",
                    domProps: { value: _vm.address }
                  })
                ])
              ],
              1
            ),
            _c("div", { staticClass: "copy-button" }, [
              _c("p", { on: { click: _vm.copyAddress } }, [_vm._v("Copy")])
            ])
          ]),
          _c("div", { staticClass: "balance-container" }, [
            _c("p", [_vm._v("Balance")]),
            _c("div", [
              _c("p", { staticClass: "actual-balance" }, [
                _vm._v("\n            " + _vm._s(_vm.balance) + " "),
                _c("span", [_vm._v(_vm._s(_vm.network.type.name))])
              ]),
              _vm.network.type.name === "ETH"
                ? _c("p", { staticClass: "dollar-balance" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.convertedBalance) +
                        "\n          "
                    )
                  ])
                : _vm._e()
            ])
          ])
        ]),
        _c("div", { staticClass: "tokens-container" }, [
          _c(
            "div",
            { staticClass: "tokens-header" },
            [
              _c("p", [_vm._v("\n          Tokens\n        ")]),
              _c(
                "b-dropdown",
                { staticClass: "cx-dropdown", attrs: { "no-caret": true } },
                [
                  _c("template", { slot: "button-content" }, [
                    _c("i", { staticClass: "fa fa-lg fa-ellipsis-h" })
                  ]),
                  _c("b-dropdown-item", { on: { click: _vm.openAddCustom } }, [
                    _vm._v("Add")
                  ]),
                  _c("b-dropdown-item", { on: { click: _vm.fetchTokens } }, [
                    _vm._v("Refresh")
                  ]),
                  _c(
                    "b-dropdown-item",
                    {
                      on: {
                        click: function() {
                          _vm.viewAllTokens(true)
                        }
                      }
                    },
                    [_vm._v("View All")]
                  )
                ],
                2
              )
            ],
            1
          ),
          _c("div", { staticClass: "token-search-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              attrs: { placeholder: "Search tokens" },
              domProps: { value: _vm.search },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            }),
            _c("i", { staticClass: "fa fa-search" })
          ]),
          _c("div", { staticClass: "actual-tokens-container" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ],
                staticClass: "loading-container"
              },
              [
                _c("i", { staticClass: "fa fa-spinner fa-spin" }),
                _vm._v(" Loading Tokens...\n        ")
              ]
            ),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading,
                    expression: "!loading"
                  }
                ]
              },
              [
                _vm._l(_vm.localCustomTokens, function(token, idx) {
                  return _c(
                    "div",
                    { key: token.address + idx, staticClass: "token-item" },
                    [
                      _c("p", [
                        _vm._v(
                          "\n              " +
                            _vm._s(token.name) +
                            "\n            "
                        )
                      ]),
                      _c(
                        "p",
                        {
                          class: [
                            token.balance !== "Load" ? "" : "manual-load"
                          ],
                          on: {
                            click: function($event) {
                              token.balance !== "Load"
                                ? function() {}
                                : _vm.fetchTokenBalance(token)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(token.balance) +
                              "\n            "
                          )
                        ]
                      )
                    ]
                  )
                }),
                _vm._l(_vm.localTokenVersion, function(token, idx) {
                  return _c(
                    "div",
                    { key: token.address + idx, staticClass: "token-item" },
                    [
                      _c("p", [
                        _vm._v(
                          "\n              " +
                            _vm._s(token.name) +
                            "\n            "
                        )
                      ]),
                      _c(
                        "p",
                        {
                          class: [
                            token.balance !== "Load" ? "" : "manual-load"
                          ],
                          on: {
                            click: function($event) {
                              token.balance !== "Load"
                                ? function() {}
                                : _vm.fetchTokenBalance(token)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(token.balance) +
                              "\n            "
                          )
                        ]
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c("div", { staticClass: "my-wallets-container" }, [
    _c("div", { staticClass: "wallets-container-header" }, [
      _c("div", { staticClass: "header-title-container" }, [
        _vm._m(0),
        _c(
          "div",
          { staticClass: "add-button", on: { click: _vm.props.addWallet } },
          [_vm._v("\n        + Add More\n      ")]
        )
      ]),
      _c("div", { staticClass: "dropdown-container" }, [
        _c("span", { staticClass: "network-text" }, [_vm._v("NETWORK")]),
        _c(
          "span",
          {
            staticClass: "current-network",
            on: { click: _vm.props.openNetworkModal }
          },
          [
            _vm._v(
              "\n        " +
                _vm._s(_vm.props.network.type.name) +
                " - " +
                _vm._s(_vm.props.network.service) +
                "\n      "
            )
          ]
        )
      ])
    ]),
    _c("div", { staticClass: "total-balance-container" }, [
      _c("div", { staticClass: "title-name" }, [
        _vm._v("\n      Total Balance\n    ")
      ]),
      _c("div", { staticClass: "balance-container" }, [
        _c("p", { staticClass: "actual-balance" }, [
          _vm._v("\n        " + _vm._s(_vm.props.totalBalance) + " "),
          _c("span", [_vm._v(_vm._s(_vm.props.network.type.name) + " ")])
        ]),
        _vm.props.network.type.name === "ETH"
          ? _c("p", { staticClass: "converted-balance" }, [
              _vm._v(
                "\n        " + _vm._s(_vm.props.convertedBalance) + "\n      "
              )
            ])
          : _vm._e()
      ])
    ]),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.props.myWallets.length > 0 || _vm.props.loading,
            expression: "props.myWallets.length > 0 || props.loading"
          }
        ],
        staticClass: "wallets"
      },
      _vm._l(_vm.props.myWallets, function(wallet) {
        return _c(_vm.injections.components.WalletInfoComponent, {
          key: wallet.address,
          tag: "component",
          attrs: {
            usd: _vm.props.ethPrice,
            address: wallet.address,
            balance: wallet.balance,
            wallet: wallet.wallet,
            nickname: wallet.nickname,
            "wallet-type": wallet.type,
            access: _vm.props.togglePasswordModal,
            detail: _vm.props.togglePasswordModal
          }
        })
      }),
      1
    ),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.props.myWallets.length === 0 && !_vm.props.loading,
            expression: "props.myWallets.length === 0 && !props.loading"
          }
        ],
        staticClass: "wallets-info"
      },
      [_c("h2", [_vm._v("No Wallet found...")])]
    ),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.props.loading && _vm.props.myWallets.length === 0,
            expression: "props.loading && props.myWallets.length === 0"
          }
        ],
        staticClass: "wallets-info"
      },
      [_c("h2", [_vm._v("Loading Wallets...")])]
    )
  ])
}
var staticRenderFns = [
  function(_h, _vm) {
    var _c = _vm._c
    return _c("div", { staticClass: "title-balance" }, [
      _c("h2", [_vm._v("My Wallets")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      ref: "tokenModal",
      staticClass: "bootstrap-modal nopadding max-height-1",
      attrs: {
        "hide-footer": "",
        centered: "",
        title: "Add Custom Token",
        static: "",
        lazy: ""
      },
      on: { hidden: _vm.resetCompState }
    },
    [
      _c("form", { staticClass: "tokens-modal-body" }, [
        _c("div", [
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tokenAddress,
                expression: "tokenAddress"
              }
            ],
            class: [
              "custom-input-text-1",
              _vm.tokenAddress !== "" && !_vm.validAddress
                ? "invalid-address"
                : ""
            ],
            attrs: {
              name: "Address",
              type: "text",
              placeholder: "Token Contract Address"
            },
            domProps: { value: _vm.tokenAddress },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tokenAddress = $event.target.value
              }
            }
          }),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.tokenAddress !== "" && !_vm.validAddress,
                  expression: "tokenAddress !== '' && !validAddress"
                }
              ],
              staticClass: "error-message"
            },
            [_vm._v("\n        Invalid address given.\n      ")]
          ),
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tokenSymbol,
                expression: "tokenSymbol"
              }
            ],
            staticClass: "custom-input-text-1",
            attrs: {
              name: "Symbol",
              type: "text",
              placeholder: "Token Symbol"
            },
            domProps: { value: _vm.tokenSymbol },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tokenSymbol = $event.target.value
              }
            }
          }),
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|numeric",
                expression: "'required|numeric'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tokenDecimal,
                expression: "tokenDecimal"
              }
            ],
            staticClass: "custom-input-text-1",
            attrs: {
              name: "Decimal",
              type: "number",
              min: "0",
              max: "18",
              placeholder: "Decimals"
            },
            domProps: { value: _vm.tokenDecimal },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tokenDecimal = $event.target.value
              }
            }
          }),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.tokenDecimal < 0 || _vm.tokenDecimal > 18,
                  expression: "tokenDecimal < 0 || tokenDecimal > 18"
                }
              ],
              staticClass: "error-message"
            },
            [
              _vm._v(
                "\n        Invalid Decimal. Decimal can only be between 0 and 18.\n      "
              )
            ]
          )
        ]),
        _c(
          "div",
          { staticClass: "button-block" },
          [
            _c(
              "button",
              {
                class: [
                  _vm.allFieldsValid ? "" : "disabled",
                  "save-button large-round-button-green-filled clickable"
                ],
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.addToken(
                      _vm.tokenAddress,
                      _vm.tokenSymbol,
                      _vm.tokenDecimal
                    )
                  }
                }
              },
              [
                _vm._v(
                  "\n        " + _vm._s(_vm.$t("interface.save")) + "\n      "
                )
              ]
            ),
            _c("interface-bottom-text", {
              attrs: {
                "link-text": _vm.$t("interface.helpCenter"),
                question: _vm.$t("interface.dontKnow"),
                link: "https://kb.myetherwallet.com"
              }
            })
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottom-text[data-v-739eed1a] {\n  padding-top: 20px;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-container[data-v-f0ed13a6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px 0;\n}\n.input-container input[data-v-f0ed13a6] {\n    background-color: #f2f4fa;\n    border: none;\n    padding: 15px;\n}\n.input-container label[data-v-f0ed13a6] {\n    color: #334758;\n    font-weight: bold;\n}\n.submit-button[data-v-f0ed13a6], .remove-button[data-v-f0ed13a6] {\n  margin-top: 10px;\n  width: 100% !important;\n}\n.remove-button[data-v-f0ed13a6] {\n  color: #e96071;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warning-text-container[data-v-9eb7bb0e] {\n  padding-top: 30px;\n  text-align: center;\n}\n.warning-text-container p[data-v-9eb7bb0e] {\n    font-size: 16px !important;\n}\n.warning-text-container h2[data-v-9eb7bb0e] {\n    color: #003945;\n    font-weight: bold;\n}\n.warning-text-container .text-container[data-v-9eb7bb0e] {\n    padding: 10px 30px;\n}\n.remove-modal-buttons[data-v-9eb7bb0e] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding-top: 40px;\n}\n.remove-modal-buttons .cancel[data-v-9eb7bb0e],\n  .remove-modal-buttons .remove[data-v-9eb7bb0e] {\n    border: 1px solid;\n    border-radius: 5px;\n    cursor: pointer;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 5px;\n    padding: 20px;\n    text-align: center;\n}\n.remove-modal-buttons .remove[data-v-9eb7bb0e] {\n    background-color: #e96071;\n    border: 1px solid #e96071;\n    color: #fff;\n}\n.remove-modal-buttons .cancel[data-v-9eb7bb0e] {\n    border: 1px solid #999;\n    color: #999;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wallet-info-container[data-v-75487c05] {\n  padding-top: 20px;\n  width: 100%;\n}\n.wallet-info-container .nickname-and-buttons[data-v-75487c05] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #334758;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 10px;\n}\n.wallet-info-container .nickname-and-buttons p[data-v-75487c05] {\n      color: #fff !important;\n      font-weight: 500;\n}\n.wallet-info-container .nickname-and-buttons .button-container[data-v-75487c05] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n.wallet-info-container .nickname-and-buttons .button-container .clickable[data-v-75487c05] {\n        color: #fff;\n        cursor: pointer;\n        padding: 5px 15px;\n}\n.wallet-info-container .wallet-content[data-v-75487c05] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: #fff;\n}\n.wallet-info-container .wallet-content .address-and-balance-container[data-v-75487c05] {\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-height: 250px;\n      padding: 15px;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .address-content-container[data-v-75487c05] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding: 30px;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .address-content-container .address-info[data-v-75487c05] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .address-content-container .address-info .actual-address[data-v-75487c05] {\n            margin-left: 30px;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .address-content-container .address-info .actual-address p[data-v-75487c05] {\n              font-size: 17px;\n              padding: 5px;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .address-content-container .address-info .actual-address p[data-v-75487c05]:first-child {\n                font-weight: bold;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .address-content-container .address-info .actual-address input[data-v-75487c05] {\n              position: absolute;\n              opacity: 0;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .address-content-container .copy-button p[data-v-75487c05] {\n          color: #999;\n          cursor: pointer;\n          font-size: 17px;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .balance-container[data-v-75487c05] {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background-color: #f2fafa;\n        border-radius: 5px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding: 15px 20px;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .balance-container p[data-v-75487c05] {\n          font-weight: bold;\n          font-size: 17px;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .balance-container .actual-balance[data-v-75487c05] {\n          color: #5a78f0;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .balance-container .actual-balance span[data-v-75487c05] {\n            font-size: 14px;\n            font-weight: normal;\n}\n.wallet-info-container .wallet-content .address-and-balance-container .balance-container .dollar-balance[data-v-75487c05] {\n          color: #96a8b6;\n          font-weight: normal;\n          text-align: right;\n}\n.wallet-info-container .wallet-content .tokens-container[data-v-75487c05] {\n      border-left: 1px solid #999;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      max-width: 350px;\n      min-width: 225px;\n      padding: 10px;\n}\n.wallet-info-container .wallet-content .tokens-container .tokens-header[data-v-75487c05] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding: 5px;\n}\n.wallet-info-container .wallet-content .tokens-container .tokens-header p[data-v-75487c05] {\n          font-weight: bold;\n}\n.wallet-info-container .wallet-content .tokens-container .tokens-header i[data-v-75487c05] {\n          color: #999;\n          cursor: pointer;\n}\n.wallet-info-container .wallet-content .tokens-container .tokens-header .view[data-v-75487c05] {\n          color: #999;\n          cursor: pointer;\n          font-weight: normal;\n          opacity: 0.9;\n}\n.wallet-info-container .wallet-content .tokens-container .actual-tokens-container[data-v-75487c05] {\n        height: 150px;\n        overflow-y: scroll;\n        padding-top: 10px;\n}\n.wallet-info-container .wallet-content .tokens-container .actual-tokens-container .loading-container[data-v-75487c05] {\n          text-align: center;\n}\n.wallet-info-container .wallet-content .tokens-container .actual-tokens-container .token-item[data-v-75487c05] {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          padding: 7px 10px;\n}\n.wallet-info-container .wallet-content .tokens-container .actual-tokens-container .token-item .manual-load[data-v-75487c05] {\n            cursor: pointer;\n}\n.wallet-info-container .wallet-content .tokens-container .actual-tokens-container .token-item img[data-v-75487c05] {\n            height: 30px;\n            width: 30px;\n}\n.token-search-container[data-v-75487c05] {\n  padding: 5px 0;\n  position: relative;\n}\n.token-search-container input[data-v-75487c05] {\n    background-color: #f2f4fa;\n    border: none !important;\n    padding: 5px 5px 5px 30px;\n    width: 100%;\n}\n.token-search-container i[data-v-75487c05] {\n    left: 10px;\n    position: absolute;\n    top: 13px;\n}\n.modal-header-contaier[data-v-75487c05] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n.modal-header-contaier h3[data-v-75487c05] {\n    position: relative;\n}\n.modal-header-contaier .modal-nickname[data-v-75487c05] {\n    min-width: 120px;\n    width: 100%;\n}\n.modal-header-contaier .modal-nickname p[data-v-75487c05] {\n      color: #999;\n}\n.modal-header-contaier .token-count[data-v-75487c05] {\n    background-color: #5a78f0;\n    border-radius: 5px;\n    color: #fff !important;\n    font-size: 12px;\n    margin-left: 5px;\n    padding: 5px;\n    position: absolute;\n    top: -5px;\n}\n.modal-header-contaier .header-buttons[data-v-75487c05] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.modal-header-contaier .header-buttons .header-button[data-v-75487c05] {\n      padding: 0 10px;\n}\n.modal-header-contaier .header-buttons .header-button[data-v-75487c05]:last-child {\n        padding-right: 10px;\n}\n.modal-header-contaier .header-buttons i[data-v-75487c05] {\n      cursor: pointer;\n      font-size: 20px;\n      font-weight: 400 !important;\n}\n.modal-tokens-container .tokens-container[data-v-75487c05] {\n  max-height: 100vh;\n  overflow-y: scroll;\n  padding-right: 10px;\n}\n.modal-tokens-container .modal-token-item[data-v-75487c05] {\n  background-color: #f2fafa;\n  border-radius: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 5px;\n  margin-right: 5px;\n  padding: 10px;\n  width: 100%;\n}\n.modal-tokens-container .modal-token-item[data-v-75487c05]:last-child {\n    margin-bottom: 0;\n}\n.modal-tokens-container .modal-token-item .icon-name-container[data-v-75487c05] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.modal-tokens-container .modal-token-item .icon-name-container p[data-v-75487c05] {\n      font-weight: bold;\n      padding-left: 10px;\n}\n.modal-tokens-container .modal-token-item .icon-name-container span[data-v-75487c05] {\n      font-weight: normal !important;\n      padding-top: 10px;\n}\n.modal-tokens-container .modal-token-item .icon-name-container img[data-v-75487c05] {\n      max-height: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".total-balance-container[data-v-74442f73] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border-radius: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 10px;\n  padding: 15px;\n  width: 100%;\n}\n.total-balance-container .title-name[data-v-74442f73] {\n    font-weight: bold;\n}\n.total-balance-container .balance-container .actual-balance[data-v-74442f73] {\n    color: #5a78f0 !important;\n    font-size: 20px !important;\n    font-weight: bold;\n}\n.total-balance-container .balance-container .actual-balance span[data-v-74442f73] {\n      font-size: 20px !important;\n      font-weight: normal;\n}\n.total-balance-container .balance-container .converted-balance[data-v-74442f73] {\n    color: #96a8b6;\n    text-align: right;\n}\n.extension-wallets-container[data-v-74442f73] {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 1fr;\n  min-height: 500px;\n}\n.wallets-container[data-v-74442f73] {\n  background-color: #f2f4fa;\n  height: 100%;\n  padding: 50px;\n}\n.my-wallets-container[data-v-74442f73],\n.watch-only-container[data-v-74442f73] {\n  display: grid;\n  grid-template-columns: 85% 1fr;\n}\n.my-wallets-container .wallets-container-header[data-v-74442f73],\n  .my-wallets-container .total-balance-container[data-v-74442f73],\n  .watch-only-container .wallets-container-header[data-v-74442f73],\n  .watch-only-container .total-balance-container[data-v-74442f73] {\n    grid-column-start: 1;\n}\n.my-wallets-container .wallets[data-v-74442f73],\n  .my-wallets-container .wallets-info[data-v-74442f73],\n  .watch-only-container .wallets[data-v-74442f73],\n  .watch-only-container .wallets-info[data-v-74442f73] {\n    grid-column-start: 1;\n}\n.wallets-container-header[data-v-74442f73] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.wallets-container-header h2[data-v-74442f73] {\n    margin: 0 15px 0 0 !important;\n}\n.wallets-container-header .add-button[data-v-74442f73] {\n    color: #05c0a5;\n    cursor: pointer;\n}\n.wallets-container-header .header-title-container[data-v-74442f73] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.wallets-container-header .dropdown-container span[data-v-74442f73] {\n    font-size: 12px;\n}\n.wallets-container-header .dropdown-container .network-text[data-v-74442f73] {\n    color: #999;\n    padding-right: 15px;\n}\n.wallets-container-header .dropdown-container .current-network[data-v-74442f73] {\n    background-color: #fff;\n    border: 1px solid #e2e2e2;\n    border-radius: 5px;\n    cursor: pointer;\n    padding: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tokens-modal-body[data-v-6eddaf7e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: auto;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 30px 30px;\n}\n.tokens-modal-body input[data-v-6eddaf7e] {\n    margin: 5px 0;\n    width: 100%;\n}\n.tokens-modal-body button[data-v-6eddaf7e] {\n    max-width: 300px;\n    width: 100%;\n}\n.tokens-modal-body div[data-v-6eddaf7e] {\n    text-align: center;\n}\n.invalid-address[data-v-6eddaf7e] {\n  border: 1px solid #f00;\n}\n.error-message[data-v-6eddaf7e] {\n  color: #f00;\n}\n.button-block[data-v-6eddaf7e] {\n  margin-top: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3a3ab1b1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("068c7142", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("734a071b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("736a2190", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4c7bf209", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("22ad58d9", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/InterfaceBottomText/InterfaceBottomText.vue":
/*!********************************************************************!*\
  !*** ./src/components/InterfaceBottomText/InterfaceBottomText.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true& */ "./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true&");
/* harmony import */ var _InterfaceBottomText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterfaceBottomText.vue?vue&type=script&lang=js& */ "./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InterfaceBottomText_vue_vue_type_style_index_0_id_739eed1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true& */ "./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InterfaceBottomText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "739eed1a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('739eed1a')) {
      api.createRecord('739eed1a', component.options)
    } else {
      api.reload('739eed1a', component.options)
    }
    module.hot.accept(/*! ./InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true& */ "./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true& */ "./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true&");
(function () {
      api.rerender('739eed1a', {
        render: _InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/components/InterfaceBottomText/InterfaceBottomText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceBottomText.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_style_index_0_id_739eed1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=style&index=0&id=739eed1a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_style_index_0_id_739eed1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_style_index_0_id_739eed1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_style_index_0_id_739eed1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_style_index_0_id_739eed1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_style_index_0_id_739eed1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InterfaceBottomText/InterfaceBottomText.vue?vue&type=template&id=739eed1a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceBottomText_vue_vue_type_template_id_739eed1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/InterfaceBottomText/index.js":
/*!*****************************************************!*\
  !*** ./src/components/InterfaceBottomText/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InterfaceBottomText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceBottomText */ "./src/components/InterfaceBottomText/InterfaceBottomText.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InterfaceBottomText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/helpers/sortByBalance.js":
/*!**************************************!*\
  !*** ./src/helpers/sortByBalance.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortByBalance; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

function sortByBalance(a, b) {
  var aBn = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(a.balance);
  var bBn = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(b.balance);

  if (!aBn.isNaN() && !bBn.isNaN()) {
    if (aBn.isGreaterThan(bBn)) {
      return -1;
    } else if (bBn.isGreaterThan(aBn)) {
      return 1;
    }
  }

  return 0;
}

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue":
/*!*******************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true&");
/* harmony import */ var _EditWalletModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditWalletModal.vue?vue&type=script&lang=js& */ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditWalletModal_vue_vue_type_style_index_0_id_f0ed13a6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss& */ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditWalletModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f0ed13a6",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('f0ed13a6')) {
      api.createRecord('f0ed13a6', component.options)
    } else {
      api.reload('f0ed13a6', component.options)
    }
    module.hot.accept(/*! ./EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true&");
(function () {
      api.rerender('f0ed13a6', {
        render: _EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditWalletModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_style_index_0_id_f0ed13a6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=style&index=0&id=f0ed13a6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_style_index_0_id_f0ed13a6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_style_index_0_id_f0ed13a6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_style_index_0_id_f0ed13a6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_style_index_0_id_f0ed13a6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_style_index_0_id_f0ed13a6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue?vue&type=template&id=f0ed13a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditWalletModal_vue_vue_type_template_id_f0ed13a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/index.js":
/*!********************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/EditWalletModal/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditWalletModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditWalletModal */ "./src/layouts/ExtensionBrowserAction/components/EditWalletModal/EditWalletModal.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EditWalletModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue":
/*!***********************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true&");
/* harmony import */ var _RemoveWalletModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoveWalletModal.vue?vue&type=script&lang=js& */ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RemoveWalletModal_vue_vue_type_style_index_0_id_9eb7bb0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss& */ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RemoveWalletModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9eb7bb0e",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('9eb7bb0e')) {
      api.createRecord('9eb7bb0e', component.options)
    } else {
      api.reload('9eb7bb0e', component.options)
    }
    module.hot.accept(/*! ./RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true&");
(function () {
      api.rerender('9eb7bb0e', {
        render: _RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveWalletModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_style_index_0_id_9eb7bb0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=style&index=0&id=9eb7bb0e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_style_index_0_id_9eb7bb0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_style_index_0_id_9eb7bb0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_style_index_0_id_9eb7bb0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_style_index_0_id_9eb7bb0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_style_index_0_id_9eb7bb0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue?vue&type=template&id=9eb7bb0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveWalletModal_vue_vue_type_template_id_9eb7bb0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/index.js":
/*!**********************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemoveWalletModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoveWalletModal */ "./src/layouts/ExtensionBrowserAction/components/RemoveWalletModal/RemoveWalletModal.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RemoveWalletModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue":
/*!***************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true&");
/* harmony import */ var _WalletInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletInfoComponent.vue?vue&type=script&lang=js& */ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WalletInfoComponent_vue_vue_type_style_index_0_id_75487c05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WalletInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75487c05",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('75487c05')) {
      api.createRecord('75487c05', component.options)
    } else {
      api.reload('75487c05', component.options)
    }
    module.hot.accept(/*! ./WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true& */ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true&");
(function () {
      api.rerender('75487c05', {
        render: _WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletInfoComponent.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_style_index_0_id_75487c05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=style&index=0&id=75487c05&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_style_index_0_id_75487c05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_style_index_0_id_75487c05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_style_index_0_id_75487c05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_style_index_0_id_75487c05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_style_index_0_id_75487c05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue?vue&type=template&id=75487c05&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletInfoComponent_vue_vue_type_template_id_75487c05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/index.js":
/*!************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WalletInfoComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletInfoComponent */ "./src/layouts/ExtensionBrowserAction/components/WalletInfoComponent/WalletInfoComponent.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _WalletInfoComponent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue":
/*!*************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true& */ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true&");
/* harmony import */ var _MyWalletsContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyWalletsContainer.vue?vue&type=script&lang=js& */ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyWalletsContainer_vue_vue_type_style_index_0_id_74442f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true& */ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyWalletsContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  "74442f73",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('74442f73')) {
      api.createRecord('74442f73', component.options)
    } else {
      api.rerender('74442f73', component.options)
    }
    module.hot.accept(/*! ./MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true& */ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true& */ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true&");
(function () {
      api.rerender('74442f73', {
        render: _MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyWalletsContainer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_style_index_0_id_74442f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=style&index=0&id=74442f73&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_style_index_0_id_74442f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_style_index_0_id_74442f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_style_index_0_id_74442f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_style_index_0_id_74442f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_style_index_0_id_74442f73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true&":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue?vue&type=template&id=74442f73&scoped=true&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWalletsContainer_vue_vue_type_template_id_74442f73_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/index.js":
/*!***********************************************************************************!*\
  !*** ./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyWalletsContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyWalletsContainer */ "./src/layouts/ExtensionBrowserAction/containers/MyWalletsContainer/MyWalletsContainer.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyWalletsContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue":
/*!**********************************************************************************************!*\
  !*** ./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html& */ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html&");
/* harmony import */ var _InterfaceTokensModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterfaceTokensModal.vue?vue&type=script&lang=js& */ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InterfaceTokensModal_vue_vue_type_style_index_0_id_6eddaf7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true& */ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InterfaceTokensModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6eddaf7e",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('6eddaf7e')) {
      api.createRecord('6eddaf7e', component.options)
    } else {
      api.reload('6eddaf7e', component.options)
    }
    module.hot.accept(/*! ./InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html& */ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html& */ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html&");
(function () {
      api.rerender('6eddaf7e', {
        render: _InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceTokensModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_style_index_0_id_6eddaf7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=style&index=0&id=6eddaf7e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_style_index_0_id_6eddaf7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_style_index_0_id_6eddaf7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_style_index_0_id_6eddaf7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_style_index_0_id_6eddaf7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_style_index_0_id_6eddaf7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html&":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue?vue&type=template&id=6eddaf7e&scoped=true&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterfaceTokensModal_vue_vue_type_template_id_6eddaf7e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/index.js":
/*!******************************************************************************!*\
  !*** ./src/layouts/InterfaceLayout/components/InterfaceTokensModal/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InterfaceTokensModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceTokensModal */ "./src/layouts/InterfaceLayout/components/InterfaceTokensModal/InterfaceTokensModal.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InterfaceTokensModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=25.js.map