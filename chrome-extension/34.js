((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    textOne: {
      type: String,
      default: ''
    },
    textTwo: {
      type: String,
      default: ''
    },
    funcOne: {
      type: Function,
      default: function _default() {}
    },
    funcTwo: {
      type: Function,
      default: function _default() {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Blockie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Blockie */ "./src/components/Blockie/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        Blockie: _components_Blockie__WEBPACK_IMPORTED_MODULE_0__["default"]
      }
    }
  },
  props: {
    address: {
      type: String,
      default: ''
    },
    balance: {
      type: String,
      default: '0'
    },
    selectedAccount: {
      type: String,
      default: ''
    },
    selectAccount: {
      type: Function,
      default: function _default() {}
    },
    currency: {
      type: String,
      default: 'ETH'
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers */ "./src/helpers/index.js");
/* harmony import */ var _helpers_addressUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/addressUtils */ "./src/helpers/addressUtils.js");
/* harmony import */ var _components_AddressSelectionComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/AddressSelectionComponent */ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/index.js");
/* harmony import */ var _components_AcceptCancelButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/AcceptCancelButtons */ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/index.js");
/* harmony import */ var _builds_mewcx_cxHelpers_cxEvents_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/builds/mewcx/cxHelpers/cxEvents.js */ "./src/builds/mewcx/cxHelpers/cxEvents.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'address-selection-component': _components_AddressSelectionComponent__WEBPACK_IMPORTED_MODULE_11__["default"],
    'accept-cancel-buttons': _components_AcceptCancelButtons__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      selectedAccount: '',
      accounts: [],
      accWithBal: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(['linkQuery', 'web3', 'network']), {
    request: function request() {
      var _this$linkQuery = this.linkQuery,
          connectionRequest = _this$linkQuery.connectionRequest,
          favicon = _this$linkQuery.favicon;
      var obj = {};
      obj['favicon'] = favicon;
      obj['connectionRequest'] = _helpers__WEBPACK_IMPORTED_MODULE_9__["Misc"].getService(connectionRequest);
      return obj;
    }
  }),
  mounted: function mounted() {
    _helpers__WEBPACK_IMPORTED_MODULE_9__["ExtensionHelpers"].getAccounts(this.getAccounts);
  },
  methods: {
    getAccounts: function getAccounts(acc) {
      this.accounts = Object.keys(acc).filter(function (item) {
        if (Object(_helpers_addressUtils__WEBPACK_IMPORTED_MODULE_10__["isAddress"])(item)) {
          if (JSON.parse(acc[item]).type !== 'watchOnly') return acc[item];
        }
      });
      this.getBalance();
    },
    getBalance: function () {
      var _getBalance = Object(_Users_yelpadillo_workspace_work_myetherwallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var i, balance, balanceToWei;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < this.accounts.length)) {
                  _context.next = 11;
                  break;
                }

                if (!Object(_helpers_addressUtils__WEBPACK_IMPORTED_MODULE_10__["isAddress"])(this.accounts[i])) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return this.web3.eth.getBalance(this.accounts[i]);

              case 5:
                balance = _context.sent;
                balanceToWei = this.web3.utils.fromWei(balance);
                this.accWithBal.push({
                  balance: new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(balanceToWei).toString(),
                  address: this.accounts[i]
                });

              case 8:
                i++;
                _context.next = 1;
                break;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getBalance() {
        return _getBalance.apply(this, arguments);
      }

      return getBalance;
    }(),
    selectAccount: function selectAccount(acc) {
      if (this.selectedAccount === acc) {
        this.selectedAccount = '';
      } else {
        this.selectedAccount = acc;
      }
    },
    rejectAction: function rejectAction() {
      var _self = this;

      var chrome = window.chrome;
      chrome.tabs.query({
        url: "*://*.".concat(_self.request.connectionRequest, "/*")
      }, function (tab) {
        var obj = {
          event: _builds_mewcx_cxHelpers_cxEvents_js__WEBPACK_IMPORTED_MODULE_13__["REJECT_MEW_CX_ACC"]
        };
        chrome.tabs.sendMessage(tab[0].id, obj);
        window.close();
      });
    },
    sendAccount: function sendAccount() {
      var account = this.selectedAccount;
      var chrome = window.chrome;
      var eventObj = {};
      eventObj["".concat(this.request.connectionRequest.toLowerCase())] = account;
      chrome.tabs.query({
        url: "*://*.".concat(this.request.connectionRequest.toLowerCase(), "/*")
      }, function (tab) {
        var obj = {
          event: _builds_mewcx_cxHelpers_cxEvents_js__WEBPACK_IMPORTED_MODULE_13__["SELECTED_MEW_CX_ACC"],
          payload: [account]
        };
        chrome.storage.sync.set(eventObj, function () {});
        chrome.tabs.sendMessage(tab[0].id, obj);
        window.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c("div", { staticClass: "buttons-container" }, [
    _c(
      "button",
      {
        staticClass: "sign",
        attrs: { disabled: _vm.props.disabled },
        on: {
          click: function($event) {
            $event.preventDefault()
            $event.stopPropagation()
            return _vm.props.funcOne($event)
          }
        }
      },
      [_vm._v("\n    " + _vm._s(_vm.props.textOne) + "\n  ")]
    ),
    _c(
      "button",
      {
        staticClass: "reject",
        on: {
          click: function($event) {
            $event.preventDefault()
            $event.stopPropagation()
            return _vm.props.funcTwo($event)
          }
        }
      },
      [_vm._v("\n    " + _vm._s(_vm.tprops.extTwo) + "\n  ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "div",
    {
      staticClass: "address-detail-container",
      on: {
        click: function($event) {
          return _vm.selectAccount(_vm.props.address)
        }
      }
    },
    [
      _c("div", { staticClass: "check-mark-container" }, [
        _c("i", {
          class: [
            _vm.props.selectedAccount === _vm.props.address
              ? "icon-selected"
              : "icon-not-selected",
            "fa fa-check-circle fa-lg"
          ]
        })
      ]),
      _c(
        "div",
        {
          class: [
            _vm.props.selectedAccount === _vm.props.address ? "selected" : "",
            "address-detail"
          ]
        },
        [
          _c(_vm.injections.components.Blockie, {
            tag: "component",
            attrs: { address: _vm.props.address, width: "30px", height: "30px" }
          }),
          _c("div", { staticClass: "address-text" }, [
            _c("p", [_vm._v(_vm._s(_vm._f("concatAddr")(_vm.props.address)))]),
            _c("div", { staticClass: "balance" }, [
              _c("span", [_vm._v("Balance:")]),
              _c("span", [
                _vm._v(
                  _vm._s(_vm.props.balance.substr(0, 7)) +
                    " " +
                    _vm._s(_vm.currency)
                )
              ])
            ])
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "connection-request" },
    [
      _c("div", { staticClass: "connection-request-container" }, [
        _c("div", { staticClass: "website-logos" }, [
          _c("img", {
            staticClass: "site-logo",
            attrs: { src: _vm.request.favicon }
          }),
          _c("img", {
            staticClass: "clip-logo",
            attrs: { src: __webpack_require__(/*! @/assets/images/icons/clip.svg */ "./src/assets/images/icons/clip.svg") }
          }),
          _c("img", {
            staticClass: "site-logo",
            attrs: { src: __webpack_require__(/*! @/assets/images/logo-small.png */ "./src/assets/images/logo-small.png") }
          })
        ]),
        _c("p", [
          _vm._v(
            "\n      " +
              _vm._s(_vm.request.connectionRequest) +
              " is trying to access MEW CX. Please\n      choose a wallet that you want to connect.\n    "
          )
        ])
      ]),
      _c("div", { staticClass: "accounts-container" }, [
        _c(
          "div",
          { staticClass: "account-container" },
          [
            _vm._l(_vm.accWithBal, function(acc, idx) {
              return _c("address-selection-component", {
                key: acc.address + idx,
                attrs: {
                  address: acc.address,
                  balance: acc.balance,
                  "selected-account": _vm.selectedAccount,
                  "select-account": _vm.selectAccount,
                  currency: _vm.network.type.name
                }
              })
            }),
            _vm.accWithBal.length === 0 ? _c("div", {}) : _vm._e()
          ],
          2
        )
      ]),
      _c("accept-cancel-buttons", {
        attrs: {
          "func-one": _vm.sendAccount,
          "func-two": _vm.rejectAction,
          disabled: _vm.selectedAccount === "",
          "text-one": "Access",
          "text-two": "Reject"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttons-container[data-v-5012fca8] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 20px 0;\n}\n.buttons-container button[data-v-5012fca8] {\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    min-width: 120px;\n    padding: 10px;\n    text-align: center;\n}\n.buttons-container button.sign[data-v-5012fca8] {\n      background-color: #05c0a5;\n}\n.buttons-container button.sign[data-v-5012fca8]:disabled {\n        background-color: #999;\n}\n.buttons-container button.reject[data-v-5012fca8] {\n      background-color: #ff122f;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address-detail-container[data-v-ec7d0318] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 10px 0;\n}\n.address-detail-container .check-mark-container[data-v-ec7d0318] {\n    cursor: pointer;\n    padding: 5px;\n}\n.address-detail-container .icon-selected[data-v-ec7d0318] {\n    color: #05c0a5;\n}\n.address-detail-container .icon-not-selected[data-v-ec7d0318] {\n    color: #999;\n}\n.address-detail-container .address-detail[data-v-ec7d0318] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border: 1px solid #f2fafa;\n    background-color: #f2fafa;\n    border-radius: 5px;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 75px;\n    padding: 14px;\n    width: 100%;\n}\n.address-detail-container .address-detail .address-text[data-v-ec7d0318] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding-left: 10px;\n}\n.address-detail-container .address-detail .address-text .balance[data-v-ec7d0318] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n.address-detail-container .address-detail .address-text p[data-v-ec7d0318],\n      .address-detail-container .address-detail .address-text span[data-v-ec7d0318] {\n        font-size: 14px;\n        margin: 0;\n}\n.address-detail-container .address-detail.selected[data-v-ec7d0318] {\n      border: 1px solid #05c0a5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".connection-request-container[data-v-5d504a24] {\n  background-color: #f2fafa;\n  padding: 20px;\n}\n.connection-request-container .website-logos[data-v-5d504a24] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 0 40px 10px;\n}\n.connection-request-container .site-logo[data-v-5d504a24] {\n    width: 50px;\n}\n.connection-request-container .clip-logo[data-v-5d504a24] {\n    height: 25px;\n}\n.connection-request-container p[data-v-5d504a24] {\n    color: #0b2840;\n    font-weight: bold;\n    margin: 0 !important;\n    text-align: center;\n}\n.connection-request[data-v-5d504a24] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.connection-request .accounts-container[data-v-5d504a24] {\n    height: 220px;\n    margin-right: 15px;\n    padding-top: 10px;\n}\n.connection-request .accounts-container .account-container[data-v-5d504a24] {\n      max-height: 220px;\n      overflow-y: auto;\n      width: auto !important;\n}\n.submit-button[data-v-5d504a24], .disabled[data-v-5d504a24] {\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 21px 55px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  text-align: center;\n}\n.submit-button[data-v-5d504a24] {\n  background-color: #05c0a5;\n  border: 1px solid #05c0a5;\n  color: #fff;\n}\n.disabled[data-v-5d504a24] {\n  background-color: #999;\n  border: 1px solid #999;\n  pointer-events: none;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("860e7842", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("12887e68", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("132f3eea", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/images/icons/clip.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icons/clip.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clip.svg";

/***/ }),

/***/ "./src/assets/images/logo-small.png":
/*!******************************************!*\
  !*** ./src/assets/images/logo-small.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-small.png";

/***/ }),

/***/ "./src/builds/mewcx/cxHelpers/cxEvents.js":
/*!************************************************!*\
  !*** ./src/builds/mewcx/cxHelpers/cxEvents.js ***!
  \************************************************/
/*! exports provided: WEB3_DETECTED, INJECT_WEB3, SELECTED_MEW_CX_ACC, MEW_TX_HASH, MEW_SIGNED_MSG, REJECT_MEW_CX_ACC, REJECT_MEW_TX_SIGN, REJECT_MEW_SIGN_MSG, WEB3_GET_ACC, WEB3_SEND_TX, WEB3_SEND_SIGN_MSG, WEB3_RECEIVE_ACC, WEB3_RECEIVE_TX_HASH, WEB3_RECEIVE_SIGNED_MSG, WEB3_REJECT, WEB3_NETWORK_CHANGE, WEB3_CHAIN_CHANGE, CX_FETCH_MEW_ACCS, CX_WEB3_DETECTED, CX_CONFIRM_SEND_TX, CX_SIGN_MSG, CX_INJECT_WEB3, CX_SEND_SIGNED_TX, WEB3_RPC_REQUEST, NETWORK_SWITCH_AND_CHAIN_ID, WEB3_INJECT_SUCCESS, CX_SUBSCRIBE, WEB3_SUBSCRIBE_LISTENER, WEB3_SUBSCRIPTION_LISTENER, WEB3_SUBSCRIBE, WEB3_SUBSCRIBE_RES, WEB3_SUBSCRIBTION_RES, WEB3_SUBSCRIPTION_ERR, WEB3_UNSUBSCRIBE, CX_UNSUBSCRIBE, WEB3_UNSUBSCRIBE_RES, WEB3_QUERY_GASPRICE, WEB3_RECEIVE_GASPRICE, CX_GET_GASPRICE, WEB3_GET_TX_COUNT, CX_GET_TX_COUNT, WEB3_RECEIVE_TX_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_DETECTED", function() { return WEB3_DETECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_WEB3", function() { return INJECT_WEB3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_MEW_CX_ACC", function() { return SELECTED_MEW_CX_ACC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEW_TX_HASH", function() { return MEW_TX_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEW_SIGNED_MSG", function() { return MEW_SIGNED_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECT_MEW_CX_ACC", function() { return REJECT_MEW_CX_ACC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECT_MEW_TX_SIGN", function() { return REJECT_MEW_TX_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECT_MEW_SIGN_MSG", function() { return REJECT_MEW_SIGN_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_GET_ACC", function() { return WEB3_GET_ACC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_SEND_TX", function() { return WEB3_SEND_TX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_SEND_SIGN_MSG", function() { return WEB3_SEND_SIGN_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_RECEIVE_ACC", function() { return WEB3_RECEIVE_ACC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_RECEIVE_TX_HASH", function() { return WEB3_RECEIVE_TX_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_RECEIVE_SIGNED_MSG", function() { return WEB3_RECEIVE_SIGNED_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_REJECT", function() { return WEB3_REJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_NETWORK_CHANGE", function() { return WEB3_NETWORK_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_CHAIN_CHANGE", function() { return WEB3_CHAIN_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_FETCH_MEW_ACCS", function() { return CX_FETCH_MEW_ACCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_WEB3_DETECTED", function() { return CX_WEB3_DETECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_CONFIRM_SEND_TX", function() { return CX_CONFIRM_SEND_TX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_SIGN_MSG", function() { return CX_SIGN_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_INJECT_WEB3", function() { return CX_INJECT_WEB3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_SEND_SIGNED_TX", function() { return CX_SEND_SIGNED_TX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_RPC_REQUEST", function() { return WEB3_RPC_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK_SWITCH_AND_CHAIN_ID", function() { return NETWORK_SWITCH_AND_CHAIN_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_INJECT_SUCCESS", function() { return WEB3_INJECT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_SUBSCRIBE", function() { return CX_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_SUBSCRIBE_LISTENER", function() { return WEB3_SUBSCRIBE_LISTENER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_SUBSCRIPTION_LISTENER", function() { return WEB3_SUBSCRIPTION_LISTENER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_SUBSCRIBE", function() { return WEB3_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_SUBSCRIBE_RES", function() { return WEB3_SUBSCRIBE_RES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_SUBSCRIBTION_RES", function() { return WEB3_SUBSCRIBTION_RES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_SUBSCRIPTION_ERR", function() { return WEB3_SUBSCRIPTION_ERR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_UNSUBSCRIBE", function() { return WEB3_UNSUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_UNSUBSCRIBE", function() { return CX_UNSUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_UNSUBSCRIBE_RES", function() { return WEB3_UNSUBSCRIBE_RES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_QUERY_GASPRICE", function() { return WEB3_QUERY_GASPRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_RECEIVE_GASPRICE", function() { return WEB3_RECEIVE_GASPRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_GET_GASPRICE", function() { return CX_GET_GASPRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_GET_TX_COUNT", function() { return WEB3_GET_TX_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CX_GET_TX_COUNT", function() { return CX_GET_TX_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_RECEIVE_TX_COUNT", function() { return WEB3_RECEIVE_TX_COUNT; });
var WEB3_DETECTED = 'web3{{id}}web3Detected';
var INJECT_WEB3 = 'injectWeb3';
var SELECTED_MEW_CX_ACC = 'selectedMewCXAccount';
var MEW_TX_HASH = 'mewTxHash';
var MEW_SIGNED_MSG = 'mewSignedMsg';
var REJECT_MEW_CX_ACC = 'rejectMewCXAccount';
var REJECT_MEW_TX_SIGN = 'rejectMewTxSign';
var REJECT_MEW_SIGN_MSG = 'rejectMewSignMsg';
var WEB3_GET_ACC = 'web3{{id}}getAccount';
var WEB3_SEND_TX = 'web3{{id}}sendTx';
var WEB3_SEND_SIGN_MSG = 'web3{{id}}sendSignMsg';
var WEB3_RECEIVE_ACC = 'web3{{id}}receiveAccount';
var WEB3_RECEIVE_TX_HASH = 'web3{{id}}recieveTxHash';
var WEB3_RECEIVE_SIGNED_MSG = 'web3{{id}}recieveSignedMsg';
var WEB3_REJECT = 'web3{{id}}reject';
var WEB3_NETWORK_CHANGE = 'web3{{id}}providerNetworkChange';
var WEB3_CHAIN_CHANGE = 'web3{{id}}providerChainChange';
var CX_FETCH_MEW_ACCS = 'mewCxFetchAccounts';
var CX_WEB3_DETECTED = 'web3Detected';
var CX_CONFIRM_SEND_TX = 'confirmAndSendTx';
var CX_SIGN_MSG = 'signMsg';
var CX_INJECT_WEB3 = 'injectWeb3';
var CX_SEND_SIGNED_TX = 'sendSignedTx';
var WEB3_RPC_REQUEST = 'web3RPCRequest';
var NETWORK_SWITCH_AND_CHAIN_ID = 'networkAndChainIdChanged';
var WEB3_INJECT_SUCCESS = 'web3{{id}}ScriptInjectedSuccessfuly';
var CX_SUBSCRIBE = 'cxSubscription';
var WEB3_SUBSCRIBE_LISTENER = 'web3{{id}}SubscribeListener';
var WEB3_SUBSCRIPTION_LISTENER = 'web3{{id}}SubscriptionListener';
var WEB3_SUBSCRIBE = 'web3{{id}}Subscribe';
var WEB3_SUBSCRIBE_RES = 'web3SubscribeRes';
var WEB3_SUBSCRIBTION_RES = 'web3SubscribtionRes';
var WEB3_SUBSCRIPTION_ERR = 'web3SubscriptionErr';
var WEB3_UNSUBSCRIBE = 'web3{{id}}Unsubscribe';
var CX_UNSUBSCRIBE = 'cxUnsubcribe';
var WEB3_UNSUBSCRIBE_RES = 'web3{{id}}UnsubscribeRes';
var WEB3_QUERY_GASPRICE = 'web3{{id}}QueryGasPrice';
var WEB3_RECEIVE_GASPRICE = 'web3{{id}}ReceiveGasPrice';
var CX_GET_GASPRICE = 'cxGetGasPrice';
var WEB3_GET_TX_COUNT = 'web3{{id}}GetTxCount';
var CX_GET_TX_COUNT = 'cxGetTxCount';
var WEB3_RECEIVE_TX_COUNT = 'web3{{id}}ReceiveTxCount';


/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue":
/*!***********************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true& */ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true&");
/* harmony import */ var _AcceptCancelButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcceptCancelButtons.vue?vue&type=script&lang=js& */ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AcceptCancelButtons_vue_vue_type_style_index_0_id_5012fca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true& */ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AcceptCancelButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  "5012fca8",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5012fca8')) {
      api.createRecord('5012fca8', component.options)
    } else {
      api.rerender('5012fca8', component.options)
    }
    module.hot.accept(/*! ./AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true& */ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true& */ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true&");
(function () {
      api.rerender('5012fca8', {
        render: _AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptCancelButtons.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_style_index_0_id_5012fca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=style&index=0&id=5012fca8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_style_index_0_id_5012fca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_style_index_0_id_5012fca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_style_index_0_id_5012fca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_style_index_0_id_5012fca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_style_index_0_id_5012fca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue?vue&type=template&id=5012fca8&scoped=true&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptCancelButtons_vue_vue_type_template_id_5012fca8_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/index.js":
/*!********************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AcceptCancelButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcceptCancelButtons */ "./src/layouts/ExtensionWeb3Popup/components/AcceptCancelButtons/AcceptCancelButtons.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AcceptCancelButtons__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue":
/*!***********************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true& */ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true&");
/* harmony import */ var _AddressSelectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddressSelectionComponent.vue?vue&type=script&lang=js& */ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddressSelectionComponent_vue_vue_type_style_index_0_id_ec7d0318_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true& */ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddressSelectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  "ec7d0318",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('ec7d0318')) {
      api.createRecord('ec7d0318', component.options)
    } else {
      api.rerender('ec7d0318', component.options)
    }
    module.hot.accept(/*! ./AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true& */ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true& */ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true&");
(function () {
      api.rerender('ec7d0318', {
        render: _AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddressSelectionComponent.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_style_index_0_id_ec7d0318_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=style&index=0&id=ec7d0318&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_style_index_0_id_ec7d0318_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_style_index_0_id_ec7d0318_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_style_index_0_id_ec7d0318_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_style_index_0_id_ec7d0318_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_style_index_0_id_ec7d0318_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue?vue&type=template&id=ec7d0318&scoped=true&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressSelectionComponent_vue_vue_type_template_id_ec7d0318_scoped_true_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/index.js":
/*!**************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddressSelectionComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddressSelectionComponent */ "./src/layouts/ExtensionWeb3Popup/components/AddressSelectionComponent/AddressSelectionComponent.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AddressSelectionComponent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue":
/*!*****************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true& */ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true&");
/* harmony import */ var _AccountAccessContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountAccessContainer.vue?vue&type=script&lang=js& */ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AccountAccessContainer_vue_vue_type_style_index_0_id_5d504a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true& */ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AccountAccessContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d504a24",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5d504a24')) {
      api.createRecord('5d504a24', component.options)
    } else {
      api.reload('5d504a24', component.options)
    }
    module.hot.accept(/*! ./AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true& */ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true& */ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true&");
(function () {
      api.rerender('5d504a24', {
        render: _AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAccessContainer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_style_index_0_id_5d504a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=style&index=0&id=5d504a24&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_style_index_0_id_5d504a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_style_index_0_id_5d504a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_style_index_0_id_5d504a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_style_index_0_id_5d504a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_style_index_0_id_5d504a24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue?vue&type=template&id=5d504a24&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAccessContainer_vue_vue_type_template_id_5d504a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/index.js":
/*!***********************************************************************************!*\
  !*** ./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountAccessContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountAccessContainer */ "./src/layouts/ExtensionWeb3Popup/containers/AccountAccessContainer/AccountAccessContainer.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AccountAccessContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=34.js.map