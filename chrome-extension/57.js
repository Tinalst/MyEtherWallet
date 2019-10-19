((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    form: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    lackOfInfo: {
      type: Boolean,
      default: false
    },
    socialAccts: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true& ***!
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
    { staticClass: "mt-5 " },
    [
      _vm.lackOfInfo
        ? _c("p", { staticClass: "error" }, [
            _vm._v(
              "\n    Please provide all the required information we need.\n  "
            )
          ])
        : _vm._e(),
      _c(
        "b-container",
        { staticClass: "dapp-info-container mx-auto mt-2 pb-5 pl-5 w-75" },
        [
          _c("p", { staticClass: "summary-header pt-5" }, [
            _vm._v("Dapp Information")
          ]),
          _c(
            "b-row",
            [
              _c("b-col", [
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Dapp name")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.dappName))
                  ])
                ]),
                _c(
                  "div",
                  { staticClass: "mt-5" },
                  [
                    _c("p", { staticClass: "summary-title mb-3 mb-3" }, [
                      _vm._v("Tags")
                    ]),
                    _vm._l(_vm.form.tags, function(tag, idx) {
                      return _c(
                        "div",
                        {
                          key: tag + idx,
                          staticClass: "summary-tag-content mr-2 mb-2"
                        },
                        [
                          _vm._v(
                            "\n            " + _vm._s(tag) + "\n          "
                          )
                        ]
                      )
                    })
                  ],
                  2
                ),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Mock user flow")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm.form.mockFlowFile.type !== "application/pdf"
                      ? _c("img", {
                          staticClass: "summary-img",
                          attrs: { src: _vm.form.mockFlowUrl }
                        })
                      : _vm._e(),
                    _c("span", { staticClass: "align-middle" }, [
                      _vm._v(" " + _vm._s(_vm.form.mockFlowFile.name) + " ")
                    ])
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Contract address")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.contractAddress))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Description")
                  ]),
                  _c("span", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.description))
                  ])
                ])
              ]),
              _c("b-col", [
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Category")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.category))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Launch in the U.S. market")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.usMarket))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Dapp icon")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _c("img", {
                      staticClass: "summary-img",
                      attrs: { src: _vm.form.dappIconUrl }
                    }),
                    _c("span", { staticClass: "align-middle" }, [
                      _vm._v(" " + _vm._s(_vm.form.dappIconFile.name) + " ")
                    ])
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Banner image")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _c("img", {
                      staticClass: "summary-img",
                      attrs: { src: _vm.form.bannerUrl }
                    }),
                    _c("span", { staticClass: "align-middle" }, [
                      _vm._v(" " + _vm._s(_vm.form.bannerFile.name) + " ")
                    ])
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Dapp website")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.dappWebsite))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Dapp contract audit")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.contractAudit))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Dapp status")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.dappStatus))
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _c(
        "b-container",
        { staticClass: "dapp-team-container mx-auto mt-5 mb-5 pb-5 pl-5 w-75" },
        [
          _c("p", { staticClass: "summary-header pt-5" }, [
            _vm._v("Team & company information")
          ]),
          _c(
            "b-row",
            [
              _c("b-col", [
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Authors")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.authors))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3 mb-3" }, [
                    _vm._v("My full name")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.fullName))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("My email address")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.email))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Company website")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.companyWebsite))
                  ])
                ])
              ]),
              _c("b-col", [
                _c(
                  "div",
                  { staticClass: "mt-5" },
                  [
                    _c("p", { staticClass: "summary-title mb-3" }, [
                      _vm._v("Social media")
                    ]),
                    _vm._l(_vm.socialAccts, function(acct, idx) {
                      return _c(
                        "div",
                        { key: acct + idx, staticClass: "social-links mr-2" },
                        [
                          _c("img", {
                            staticClass: "social-img",
                            attrs: { src: acct.src }
                          })
                        ]
                      )
                    })
                  ],
                  2
                ),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Software License")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.license))
                  ])
                ]),
                _c("div", { staticClass: "mt-5" }, [
                  _c("p", { staticClass: "summary-title mb-3" }, [
                    _vm._v("Additional notes")
                  ]),
                  _c("p", { staticClass: "summary-content" }, [
                    _vm._v(_vm._s(_vm.form.additionalNotes))
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error[data-v-792658bf] {\n  color: #f00;\n  margin-bottom: 2px;\n}\n.dapp-info-container[data-v-792658bf],\n.dapp-team-container[data-v-792658bf] {\n  background: #f2fafa;\n  border-radius: 12px;\n  text-align: left;\n}\n.summary-header[data-v-792658bf] {\n  color: #0b2840;\n  font-size: 24px;\n  font-weight: bold;\n}\n.left-column[data-v-792658bf],\n.right-column[data-v-792658bf] {\n  display: inline-block;\n}\n.summary-title[data-v-792658bf] {\n  color: #0b2840;\n  font-size: 16px;\n  font-weight: 600;\n}\n.summary-content[data-v-792658bf] {\n  color: #476081;\n  font-size: 14px;\n  font-weight: normal;\n}\n.summary-tag-content[data-v-792658bf] {\n  background: #6d89a6;\n  border-radius: 4px;\n  color: white;\n  display: inline-block;\n  padding: 5px;\n}\n.summary-img[data-v-792658bf] {\n  height: 15px;\n  width: 19px;\n}\n.social-img[data-v-792658bf] {\n  border-radius: 10px;\n  height: 22px;\n  width: 22px;\n}\n.social-links[data-v-792658bf] {\n  border-radius: 20px;\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("86ad0ac6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue":
/*!*******************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true& */ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true&");
/* harmony import */ var _SummaryContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SummaryContainer.vue?vue&type=script&lang=js& */ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SummaryContainer_vue_vue_type_style_index_0_id_792658bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true& */ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SummaryContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "792658bf",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('792658bf')) {
      api.createRecord('792658bf', component.options)
    } else {
      api.reload('792658bf', component.options)
    }
    module.hot.accept(/*! ./SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true& */ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true& */ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true&");
(function () {
      api.rerender('792658bf', {
        render: _SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SummaryContainer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_style_index_0_id_792658bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=style&index=0&id=792658bf&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_style_index_0_id_792658bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_style_index_0_id_792658bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_style_index_0_id_792658bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_style_index_0_id_792658bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_style_index_0_id_792658bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue?vue&type=template&id=792658bf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SummaryContainer_vue_vue_type_template_id_792658bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/index.js":
/*!*******************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/SummaryContainer/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SummaryContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SummaryContainer */ "./src/layouts/DappSubmissionLayout/containers/SummaryContainer/SummaryContainer.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SummaryContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=57.js.map