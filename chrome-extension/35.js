((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    deleteFunc: {
      type: Function,
      default: function _default() {}
    },
    name: {
      type: String,
      default: ''
    },
    idx: {
      type: Number,
      default: 0
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TagComponent_TagComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TagComponent/TagComponent.vue */ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue");
/* harmony import */ var _components_PopOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PopOver */ "./src/components/PopOver/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'tag-component': _components_TagComponent_TagComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    popover: _components_PopOver__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    updateName: {
      type: Function,
      default: function _default() {}
    },
    updateCategory: {
      type: Function,
      default: function _default() {}
    },
    updateTags: {
      type: Function,
      default: function _default() {}
    },
    updateDescription: {
      type: Function,
      default: function _default() {}
    },
    updateDisableBtn: {
      type: Function,
      default: function _default() {}
    },
    updateUsMarket: {
      type: Function,
      default: function _default() {}
    },
    updateDappStatus: {
      type: Function,
      default: function _default() {}
    },
    updateMockFlow: {
      type: Function,
      default: function _default() {}
    },
    updateContractAddress: {
      type: Function,
      default: function _default() {}
    },
    updateDappIcon: {
      type: Function,
      default: function _default() {}
    },
    updateBanner: {
      type: Function,
      default: function _default() {}
    },
    form: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      tag: '',
      tags: [],
      dappCategories: [{
        value: null,
        text: 'Please select'
      }, {
        value: 'Games',
        text: 'Games'
      }, {
        value: 'Social',
        text: 'Social'
      }, {
        value: 'Finance',
        text: 'Finance'
      }, {
        value: 'Infrastructure',
        text: 'Infrastructure'
      }, {
        value: 'Exchanges',
        text: 'Exchanges'
      }, {
        value: 'Development',
        text: 'Development'
      }, {
        value: 'Media',
        text: 'Media'
      }, {
        value: 'Wallet',
        text: 'Wallet'
      }, {
        value: 'Security',
        text: 'Security'
      }, {
        value: 'Property',
        text: 'Property'
      }, {
        value: 'Marketplaces',
        text: 'Marketplaces'
      }, {
        value: 'Governance',
        text: 'Governance'
      }, {
        value: 'Storage',
        text: 'Storage'
      }, {
        value: 'Identity',
        text: 'Identity'
      }, {
        value: 'Energy',
        text: 'Energy'
      }, {
        value: 'Insurance',
        text: 'Insurance'
      }, {
        value: 'Health',
        text: 'Health'
      }, {
        value: 'Other',
        text: 'Other'
      }],
      dappUsMarketOptions: [{
        value: null,
        text: 'Please select'
      }, {
        value: 'Yes',
        text: 'Yes'
      }, {
        value: 'No',
        text: 'No'
      }],
      dappStatusOptions: [{
        value: null,
        text: 'Please select'
      }, {
        value: 'Live',
        text: 'Live'
      }, {
        value: 'Beta',
        text: 'Beta'
      }, {
        value: 'Prototype',
        text: 'Prototype'
      }, {
        value: 'Work in progress',
        text: 'Work in progress'
      }, {
        value: 'Concept',
        text: 'Concept'
      }, {
        value: 'Stealth',
        text: 'Stealth'
      }],
      dappContractOptions: [{
        value: null,
        text: 'Please select'
      }, {
        value: 'None in Process',
        text: 'None in Process'
      }, {
        value: 'In Process',
        text: 'In Process'
      }, {
        value: 'Completed',
        text: 'Completed'
      }],
      tagInput: '',
      displayTags: this.form.tags,
      mockFileError: false,
      dappIconError: false,
      bannerError: false,
      mockFlowImgName: '',
      dappTagsError: false
    };
  },
  methods: {
    onKeyDown: function onKeyDown(e) {
      var _this = this;

      if (e.keyCode === 13 && this.$refs.tagHolder.offsetWidth <= this.$refs.dappTagsInput.offsetWidth - 10) {
        if (this.tagInput.length > 0) {
          this.displayTags.push(this.tagInput);
          this.tagInput = '';
          setTimeout(function () {
            return _this.updateWidth();
          });
        }
      } else if (e.keyCode === 8) {
        if (this.tagInput.length <= 0) {
          var lastTag = this.displayTags.splice(this.displayTags.length - 1, 1);
          setTimeout(function () {
            _this.updateWidth();

            _this.tagInput = lastTag.toString();
          });
        }
      }

      this.dappTagsError = this.displayTags.length === 0;
      this.updateTags(this.displayTags);
    },
    deleteTag: function deleteTag(idx) {
      var _this2 = this;

      this.displayTags.splice(idx, 1);
      this.updateTags(this.displayTags);
      this.dappTagsError = this.displayTags.length === 0;
      setTimeout(function () {
        return _this2.updateWidth();
      });
    },
    updateWidth: function updateWidth() {
      this.$refs.dappTagsInput.style.paddingLeft = this.$refs.tagHolder.offsetWidth > 0 ? "".concat(this.$refs.tagHolder.offsetWidth + 8, "px") : '10.5px';
    },
    onMockFileChange: function onMockFileChange(e) {
      var file = e.target.files[0],
          img = new Image(),
          url = URL.createObjectURL(file),
          vm = this;

      if (file.type === 'application/pdf') {
        file.size > 5000000 ? this.onMockFileChangeError() : this.onMockFileChangeSuccess(file, url);
      } else {
        img.src = url;

        img.onload = function () {
          img.width > 1200 || img.height > 630 ? vm.onMockFileChangeError() : vm.onMockFileChangeSuccess(file, url);
        };
      }
    },
    onMockFileChangeSuccess: function onMockFileChangeSuccess(file, url) {
      this.mockFileError = false;
      this.form.mockFlowFile = file;
      this.form.mockFlowUrl = url;
      this.updateMockFlow(false);
    },
    onMockFileChangeError: function onMockFileChangeError() {
      this.mockFileError = true;
      this.updateMockFlow(true);
    },
    onDappIconChange: function onDappIconChange(e) {
      var file = e.type === 'drop' ? e.dataTransfer.files[0] : e.target.files[0],
          img = new Image(),
          url = URL.createObjectURL(file),
          vm = this;
      img.src = url;

      img.onload = function () {
        if (img.height > 192 || img.width > 192) {
          vm.dappIconError = true;
          vm.updateDappIcon(true);
        } else {
          vm.dappIconError = false;
          vm.form.dappIconFile = file;
          vm.form.dappIconUrl = url;
          vm.updateDappIcon(false);
        }
      };
    },
    onBannerChange: function onBannerChange(e) {
      var file = e.type === 'drop' ? e.dataTransfer.files[0] : e.target.files[0],
          img = new Image(),
          url = URL.createObjectURL(file),
          vm = this;
      img.src = url;

      img.onload = function () {
        if (img.width < 1200 || img.height < 206) {
          vm.bannerError = true;
          vm.updateBanner(true);
        } else {
          vm.bannerError = false;
          vm.form.bannerFile = file;
          vm.form.bannerUrl = url;
          vm.updateBanner(false);
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { ref: "tagContainer", staticClass: "tag-container" }, [
    _vm._v("\n  " + _vm._s(_vm.name) + " "),
    _c(
      "span",
      {
        on: {
          click: function($event) {
            return _vm.deleteFunc(_vm.idx)
          }
        }
      },
      [_c("i", { staticClass: "fa fa-times" })]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "about-your-dapp w-50 mb-5 mt-5" },
    [
      _c(
        "b-form",
        { attrs: { onsubmit: "return false;" } },
        [
          _c("b-form-group", [
            _c("label", { staticClass: "dapp-label" }, [_vm._v("Dapp name")]),
            _c(
              "div",
              { staticClass: "dapp-input" },
              [
                _c("b-form-input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  attrs: { id: "dappName", name: "name", type: "text" },
                  on: { update: _vm.updateName },
                  model: {
                    value: _vm.form.dappName,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "dappName", $$v)
                    },
                    expression: "form.dappName"
                  }
                }),
                _c("span", [_vm._v("*")])
              ],
              1
            ),
            _vm.errors.has("name")
              ? _c("p", { staticClass: "error" }, [
                  _vm._v(
                    "\n        " + _vm._s(_vm.errors.first("name")) + "\n      "
                  )
                ])
              : _vm._e()
          ]),
          _c("b-form-group", [
            _c("label", { staticClass: "dapp-label" }, [_vm._v("Category")]),
            _c("div", { staticClass: "dapp-input" }, [
              _c(
                "label",
                { staticClass: "dapp-select-label" },
                [
                  _c("b-form-select", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      id: "dappCategory",
                      options: _vm.dappCategories,
                      name: "category"
                    },
                    on: { change: _vm.updateCategory },
                    model: {
                      value: _vm.form.category,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "category", $$v)
                      },
                      expression: "form.category"
                    }
                  })
                ],
                1
              ),
              _c("span", [_vm._v("*")])
            ]),
            _vm.errors.has("category")
              ? _c("p", { staticClass: "error" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.errors.first("category")) +
                      "\n      "
                  )
                ])
              : _vm._e()
          ]),
          _c(
            "b-form-group",
            { staticClass: "input-tags-group tags-form-group" },
            [
              _c(
                "label",
                { staticClass: "dapp-label" },
                [
                  _vm._v("Tags\n        "),
                  _c("popover", {
                    staticClass: "dapp-popover",
                    attrs: { popcontent: _vm.$t("dappsSubmission.tags") }
                  })
                ],
                1
              ),
              _c("div", { staticClass: "input-tags-container" }, [
                _c("div", { staticClass: "tag-wrapper" }, [
                  _c(
                    "div",
                    { ref: "tagHolder", staticClass: "tag-holder" },
                    _vm._l(_vm.displayTags, function(tag, idx) {
                      return _c("tag-component", {
                        key: tag + idx,
                        ref: "tagContainer",
                        refInFor: true,
                        attrs: {
                          name: tag,
                          "delete-func": _vm.deleteTag,
                          idx: idx
                        }
                      })
                    }),
                    1
                  ),
                  _c("div", { staticClass: "dapp-input" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.tagInput,
                          expression: "tagInput"
                        }
                      ],
                      ref: "dappTagsInput",
                      staticClass: "dapp-tags-input",
                      attrs: { id: "dappTags", type: "text" },
                      domProps: { value: _vm.tagInput },
                      on: {
                        keyup: _vm.onKeyDown,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.tagInput = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _c("span", [_vm._v("*")])
              ]),
              _vm.dappTagsError
                ? _c("p", { staticClass: "error" }, [
                    _vm._v("\n        The tags field is required\n      ")
                  ])
                : _vm._e()
            ]
          ),
          _c("div", { staticClass: "suggested-tags-container mb-3" }, [
            _c("p", { staticClass: "title" }, [_vm._v("Suggested Tags")]),
            _c("p", { staticClass: "tags" }, [
              _c("span", [_vm._v("Games")]),
              _c("span", [_vm._v("Defi Lending")]),
              _c("span", [_vm._v("Social")]),
              _c("span", [_vm._v("Finance")]),
              _c("span", [_vm._v("Wallet")])
            ])
          ]),
          _c(
            "b-form-group",
            { attrs: { id: "form-group-description" } },
            [
              _c("label", { staticClass: "dapp-label" }, [
                _vm._v("Description")
              ]),
              _c(
                "b-form-invalid-feedback",
                { attrs: { id: "form-group-description" } },
                [_vm._v("\n        This is a required field.\n      ")]
              ),
              _c(
                "div",
                { staticClass: "dapp-input" },
                [
                  _c("b-form-textarea", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "max:800|required",
                        expression: "'max:800|required'"
                      }
                    ],
                    attrs: {
                      name: "description",
                      placeholder: "800 characters",
                      rows: "7",
                      size: "lg"
                    },
                    on: {
                      update: _vm.updateDescription,
                      change: function($event) {
                        return _vm.updateDisableBtn(_vm.errors)
                      }
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
                    }
                  }),
                  _c("span", [_vm._v("*")])
                ],
                1
              ),
              _vm.errors.has("description")
                ? _c("p", { staticClass: "error" }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.errors.first("description")) +
                        "\n      "
                    )
                  ])
                : _vm._e()
            ],
            1
          ),
          _c("b-form-group", [
            _c("label", { staticClass: "dapp-label" }, [
              _vm._v("Is your Dapp available for use in the United States?")
            ]),
            _c("div", { staticClass: "dapp-input" }, [
              _c(
                "label",
                { staticClass: "dapp-select-label" },
                [
                  _c("b-form-select", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      id: "dappUsMarket",
                      options: _vm.dappUsMarketOptions,
                      name: "field"
                    },
                    on: { change: _vm.updateUsMarket },
                    model: {
                      value: _vm.form.usMarket,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "usMarket", $$v)
                      },
                      expression: "form.usMarket"
                    }
                  })
                ],
                1
              ),
              _c("span", [_vm._v("*")])
            ]),
            _vm.errors.has("field")
              ? _c("p", { staticClass: "error" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.errors.first("field")) +
                      "\n      "
                  )
                ])
              : _vm._e()
          ]),
          _c("b-form-group", [
            _c("label", { staticClass: "dapp-label" }, [_vm._v("Dapp status")]),
            _c("div", { staticClass: "dapp-input" }, [
              _c(
                "label",
                { staticClass: "dapp-select-label" },
                [
                  _c("b-form-select", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      id: "dappStatus",
                      options: _vm.dappStatusOptions,
                      name: "status"
                    },
                    on: { change: _vm.updateDappStatus },
                    model: {
                      value: _vm.form.dappStatus,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "dappStatus", $$v)
                      },
                      expression: "form.dappStatus"
                    }
                  })
                ],
                1
              ),
              _c("span", [_vm._v("*")])
            ]),
            _vm.errors.has("status")
              ? _c("p", { staticClass: "error" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.errors.first("status")) +
                      "\n      "
                  )
                ])
              : _vm._e()
          ]),
          _c("b-form-group", [
            _c(
              "label",
              { staticClass: "dapp-label" },
              [
                _vm._v("Mock user flow\n        "),
                _c("popover", {
                  staticClass: "dapp-popover",
                  attrs: { popcontent: _vm.$t("dappsSubmission.mockUserFlow") }
                })
              ],
              1
            ),
            _c("p", { staticClass: "dapp-text-info mb-3" }, [
              _vm._v(
                "\n        Dimensions must be 1200px width by 630px height; JPEG or PDF file\n        only; Image size no large than 5MB\n      "
              )
            ]),
            _c("div", { staticClass: "dapp-input" }, [
              _c(
                "label",
                {
                  staticClass: "upload-btn-wrapper",
                  attrs: { for: "customUpload" }
                },
                [
                  _c("div", { staticClass: "fake-input" }, [
                    _c("p", { staticClass: "file-name" }, [
                      _vm._v(_vm._s(_vm.form.mockFlowFile.name))
                    ])
                  ]),
                  _c("button", { staticClass: "upload-btn" }, [
                    _vm._v("Upload")
                  ])
                ]
              ),
              _c("input", {
                ref: "mockUserFlow",
                attrs: { id: "customUpload", type: "file" },
                on: { change: _vm.onMockFileChange }
              }),
              _c("span", [_vm._v("*")])
            ]),
            _vm.mockFileError
              ? _c("p", { staticClass: "error" }, [
                  _vm._v(
                    "\n        The image dimensions are too big. Dimensions must be 1200px width by\n        630px height and less than 5MB.\n      "
                  )
                ])
              : _vm._e()
          ]),
          _c("b-form-group", [
            _c(
              "label",
              { staticClass: "dapp-label" },
              [
                _vm._v("Contract address\n        "),
                _c("popover", {
                  staticClass: "dapp-popover",
                  attrs: {
                    popcontent: _vm.$t("dappsSubmission.contractAddress")
                  }
                })
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "dapp-input" },
              [
                _c("b-form-input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  attrs: {
                    id: "contractAddress",
                    name: "address",
                    type: "text"
                  },
                  on: { update: _vm.updateContractAddress },
                  model: {
                    value: _vm.form.contractAddress,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "contractAddress", $$v)
                    },
                    expression: "form.contractAddress"
                  }
                }),
                _c("span", [_vm._v("*")])
              ],
              1
            ),
            _vm.errors.has("address")
              ? _c("p", { staticClass: "error" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.errors.first("address")) +
                      "\n      "
                  )
                ])
              : _vm._e()
          ]),
          _c("b-form-group", [
            _c(
              "label",
              { staticClass: "dapp-label" },
              [
                _c("span", { staticClass: "dapp-icon-label" }, [
                  _vm._v(" Dapp icon ")
                ]),
                _c("popover", {
                  staticClass: "dapp-popover",
                  attrs: { popcontent: _vm.$t("dappsSubmission.dappIcon") }
                }),
                _vm.form.dappIconUrl
                  ? _c(
                      "label",
                      {
                        staticClass: "replace-label",
                        attrs: { for: "dappIcon" }
                      },
                      [_vm._v("Replace")]
                    )
                  : _vm._e()
              ],
              1
            ),
            _c("div", { staticClass: "image-wrapper" }, [
              _c(
                "div",
                {
                  staticClass: "image-container",
                  class: _vm.form.dappIconUrl ? "dapp-icon-uploaded " : ""
                },
                [
                  _c(
                    "label",
                    { staticClass: "image-label", attrs: { for: "dappIcon" } },
                    [
                      _c("div", { staticClass: "image-placeholder" }, [
                        !_vm.form.dappIconUrl
                          ? _c("i", { staticClass: "fa fa-cloud-upload" })
                          : _vm._e(),
                        _c("h4", { staticClass: "image-text" }, [
                          _vm._v(
                            "\n                Drop your icon here, or select a file from your computer.\n              "
                          )
                        ]),
                        _c("p", { staticClass: "image-requirements" }, [
                          _vm._v(
                            "\n                JPEG or PNG, at least 192px * 192px\n              "
                          )
                        ])
                      ]),
                      _vm.form.dappIconUrl
                        ? _c("img", {
                            staticClass: "dapp-icon-img",
                            attrs: { src: _vm.form.dappIconUrl }
                          })
                        : _vm._e(),
                      _c("b-form-file", {
                        attrs: {
                          id: "dappIcon",
                          "drop-placeholder": "Drop your icon here",
                          type: "file"
                        },
                        on: { change: _vm.onDappIconChange }
                      })
                    ],
                    1
                  )
                ]
              ),
              _c(
                "span",
                {
                  staticClass: "requiredIcon",
                  class: _vm.form.dappIconUrl ? "uploaded-required-icon" : ""
                },
                [_vm._v("*")]
              )
            ]),
            _vm.dappIconError
              ? _c("p", { staticClass: "error" }, [
                  _vm._v(
                    "\n        The image dimensions are too big. Dimensions must be 192px by 192px.\n      "
                  )
                ])
              : _vm._e()
          ]),
          _c("b-form-group", [
            _c(
              "label",
              { staticClass: "dapp-label" },
              [
                _vm._v("Banner\n        "),
                _c("popover", {
                  staticClass: "dapp-popover",
                  attrs: { popcontent: _vm.$t("dappsSubmission.banner") }
                }),
                _vm.form.bannerUrl
                  ? _c(
                      "label",
                      {
                        staticClass: "replace-label",
                        attrs: { for: "bannerImage" }
                      },
                      [_vm._v("Replace")]
                    )
                  : _vm._e()
              ],
              1
            ),
            _c("div", { staticClass: "image-wrapper" }, [
              _c(
                "div",
                {
                  staticClass: "image-container",
                  class: _vm.form.bannerUrl ? "banner-uploaded " : ""
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "image-label",
                      attrs: { for: "bannerImage" }
                    },
                    [
                      _c("div", { staticClass: "image-placeholder" }, [
                        !_vm.form.bannerUrl
                          ? _c("i", { staticClass: "fa fa-cloud-upload" })
                          : _vm._e(),
                        _c("h4", { staticClass: "image-text" }, [
                          _vm._v(
                            "\n                Drop your image here, or select a file from your computer.\n              "
                          )
                        ]),
                        _c("p", { staticClass: "image-requirements" }, [
                          _vm._v(
                            "\n                JPEG or PNG, at least 1200px * 206px\n              "
                          )
                        ])
                      ]),
                      _vm.form.bannerUrl
                        ? _c("img", {
                            staticClass: "banner-img",
                            attrs: { src: _vm.form.bannerUrl }
                          })
                        : _vm._e(),
                      _c("b-form-file", {
                        attrs: {
                          id: "bannerImage",
                          accept: "image/*",
                          "drop-placeholder": "Drop your banner here",
                          type: "file"
                        },
                        on: { change: _vm.onBannerChange }
                      })
                    ],
                    1
                  )
                ]
              ),
              _c(
                "span",
                {
                  staticClass: "requiredIcon",
                  class: _vm.form.bannerUrl ? "uploaded-required-icon" : ""
                },
                [_vm._v("*")]
              )
            ]),
            _vm.bannerError
              ? _c("p", { staticClass: "error" }, [
                  _vm._v(
                    "\n        The image dimensions are too small. Dimensions must be at least 1200px\n        * 206px.\n      "
                  )
                ])
              : _vm._e()
          ]),
          _c(
            "b-form-group",
            [
              _c("label", { staticClass: "dapp-label" }, [
                _vm._v("Dapp website")
              ]),
              _c("b-form-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "url:require_protocol",
                    expression: "'url:require_protocol'"
                  }
                ],
                attrs: {
                  id: "dappWebsite",
                  name: "website",
                  placeholder: "URL link",
                  type: "text"
                },
                on: {
                  change: function($event) {
                    return _vm.updateDisableBtn(_vm.errors)
                  }
                },
                model: {
                  value: _vm.form.dappWebsite,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "dappWebsite", $$v)
                  },
                  expression: "form.dappWebsite"
                }
              }),
              _vm.errors.has("website")
                ? _c("p", { staticClass: "error" }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.errors.first("website")) +
                        "\n      "
                    )
                  ])
                : _vm._e()
            ],
            1
          ),
          _c("b-form-group", [
            _c(
              "label",
              { staticClass: "dapp-label" },
              [
                _vm._v("Dapp contract audit\n        "),
                _c("popover", {
                  staticClass: "dapp-popover",
                  attrs: { popcontent: _vm.$t("dappsSubmission.contractAudit") }
                })
              ],
              1
            ),
            _c(
              "label",
              { staticClass: "dapp-select-label" },
              [
                _c("b-form-select", {
                  attrs: {
                    id: "dappContract",
                    options: _vm.dappContractOptions
                  },
                  model: {
                    value: _vm.form.contractAudit,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "contractAudit", $$v)
                    },
                    expression: "form.contractAudit"
                  }
                })
              ],
              1
            )
          ])
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tag-container[data-v-0ea1d7c3] {\n  background-color: #6d89a6;\n  border-radius: 5px;\n  color: #fff;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: normal;\n  margin-left: 2px;\n  padding: 2px;\n}\n.tag-container span[data-v-0ea1d7c3] {\n    cursor: pointer;\n}\n.tag-container i[data-v-0ea1d7c3] {\n    margin-left: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fake-input[data-v-5c786b9f] {\n  background: #eef4fc;\n  border-radius: 4px;\n  display: table;\n  height: 52px;\n  width: 100%;\n}\n.fake-input .file-name[data-v-5c786b9f] {\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 5px;\n}\n.uploaded-required-icon[data-v-5c786b9f] {\n  margin-bottom: 45px;\n}\n.image-wrapper[data-v-5c786b9f] {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.dapp-icon-label[data-v-5c786b9f] {\n  font-size: 16px;\n  min-width: 86px;\n}\n.image-label[data-v-5c786b9f] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 223px;\n  text-align: center;\n  vertical-align: middle;\n}\n.image-label i[data-v-5c786b9f] {\n    color: #e2e2e2;\n    font-size: 60px;\n}\n.image-placeholder[data-v-5c786b9f] {\n  width: 100%;\n}\n.image-container[data-v-5c786b9f] {\n  cursor: pointer;\n  display: table;\n  height: 223px;\n  position: relative;\n  width: 90%;\n}\n.image-text[data-v-5c786b9f] {\n  color: #555;\n  font-family: 'Avenir Next';\n  font-size: 14px;\n}\n.image-requirements[data-v-5c786b9f] {\n  color: #c5c5c5;\n  font-family: 'Avenir Next';\n  font-weight: normal;\n}\n.upload-btn[data-v-5c786b9f] {\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #05c0a5;\n  color: #05c0a5;\n  height: 52px;\n  width: 112px;\n}\n.upload-btn-wrapper[data-v-5c786b9f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  width: 90%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.input-tags-container[data-v-5c786b9f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.input-tags-container span[data-v-5c786b9f] {\n    color: #ff445b;\n    font-size: 16px;\n    padding-left: 10px;\n}\n.tag-wrapper[data-v-5c786b9f] {\n  max-width: 90%;\n  overflow: auto;\n  position: relative;\n  width: 90%;\n}\n.tag-wrapper .dapp-tags-input[data-v-5c786b9f] {\n    max-width: 100%;\n    width: 100%;\n    padding-left: 10.5px;\n}\n.tag-holder[data-v-5c786b9f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  left: 5px;\n  position: absolute;\n  top: 13px;\n}\n.suggested-tags-container[data-v-5c786b9f] {\n  margin-top: 15px;\n  margin-left: 15px;\n  text-align: left;\n}\n.suggested-tags-container .title[data-v-5c786b9f] {\n    text-transform: uppercase;\n    font-weight: 500;\n    color: #6d89a6;\n}\n.suggested-tags-container .tags[data-v-5c786b9f] {\n    color: #0b2840;\n    font-weight: normal;\n    margin-bottom: 3rem;\n}\n.suggested-tags-container .tags span[data-v-5c786b9f] {\n      margin-right: 15px;\n}\n.custom-file[data-v-5c786b9f] {\n  border-radius: 6px;\n  border: 1px dashed #999;\n  cursor: pointer;\n  height: 223px;\n  position: absolute;\n}\n.replace-label[data-v-5c786b9f] {\n  color: #05c0a5;\n  cursor: pointer;\n  font-weight: normal;\n  text-align: right;\n  width: 100%;\n}\n.dapp-icon-uploaded.image-container[data-v-5c786b9f] {\n  height: 180px;\n}\n.dapp-icon-uploaded .image-placeholder[data-v-5c786b9f] {\n  margin-left: 150px;\n  text-align: left;\n  position: absolute;\n  width: 50%;\n}\n.dapp-icon-uploaded .image-label[data-v-5c786b9f] {\n  -webkit-box-align: normal;\n      -ms-flex-align: normal;\n          align-items: normal;\n  height: 100%;\n  margin-top: 20px;\n}\n.dapp-icon-uploaded .image-text[data-v-5c786b9f] {\n  margin-top: 20px;\n}\n.dapp-icon-uploaded .custom-file[data-v-5c786b9f] {\n  height: 118px;\n  width: 118px;\n}\n.dapp-icon-uploaded .dapp-icon-img[data-v-5c786b9f] {\n  height: 118px;\n  width: 118px;\n}\n.banner-uploaded.image-container[data-v-5c786b9f] {\n  height: 200px;\n}\n.banner-uploaded .image-label[data-v-5c786b9f] {\n  height: 150px;\n}\n.banner-uploaded .banner-img[data-v-5c786b9f] {\n  border-radius: 4px;\n  height: 99px;\n  width: 100%;\n}\n.banner-uploaded .custom-file[data-v-5c786b9f] {\n  height: 99px;\n}\n.banner-uploaded .image-placeholder[data-v-5c786b9f] {\n  margin-left: 20px;\n  margin-top: 90px;\n  position: absolute;\n  text-align: left;\n}\n.banner-uploaded .replace-label[data-v-5c786b9f] {\n  text-align: right;\n  width: 100%;\n}\n.tags-form-group[data-v-5c786b9f] {\n  margin-bottom: 1rem !important;\n}\n.error[data-v-5c786b9f] {\n  color: #f00;\n  margin-top: 5px;\n  width: 90%;\n}\n.about-your-dapp[data-v-5c786b9f] {\n  display: inline-block;\n}\n.form-group[data-v-5c786b9f] {\n  font-weight: 600;\n  margin-bottom: 3.6rem;\n  margin-top: 5px;\n  text-align: left;\n}\n.form-group input[data-v-5c786b9f] {\n    background: #eef4fc;\n    border: none;\n    height: 52px;\n    max-width: 90%;\n    width: 90%;\n}\n.form-group select[data-v-5c786b9f] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: #eef4fc;\n    border: none;\n    height: 52px;\n}\n.form-group input[data-v-5c786b9f]::-webkit-input-placeholder,\n  .form-group select[data-v-5c786b9f]::-webkit-input-placeholder,\n  .form-group textarea[data-v-5c786b9f]::-webkit-input-placeholder {\n    color: #a3b7cf;\n}\n.form-group input[data-v-5c786b9f]::-moz-placeholder,\n  .form-group select[data-v-5c786b9f]::-moz-placeholder,\n  .form-group textarea[data-v-5c786b9f]::-moz-placeholder {\n    color: #a3b7cf;\n}\n.form-group input[data-v-5c786b9f]:-ms-input-placeholder,\n  .form-group select[data-v-5c786b9f]:-ms-input-placeholder,\n  .form-group textarea[data-v-5c786b9f]:-ms-input-placeholder {\n    color: #a3b7cf;\n}\n.form-group input[data-v-5c786b9f]::-ms-input-placeholder,\n  .form-group select[data-v-5c786b9f]::-ms-input-placeholder,\n  .form-group textarea[data-v-5c786b9f]::-ms-input-placeholder {\n    color: #a3b7cf;\n}\n.form-group input[data-v-5c786b9f]::placeholder,\n  .form-group select[data-v-5c786b9f]::placeholder,\n  .form-group textarea[data-v-5c786b9f]::placeholder {\n    color: #a3b7cf;\n}\n.form-group .dapp-select-label[data-v-5c786b9f] {\n    width: 90%;\n    height: 52px;\n    position: relative;\n}\n.form-group .dapp-select-label[data-v-5c786b9f]::after {\n    color: #0b2840;\n    content: '>';\n    font-family: Beirut;\n    font-size: 20px;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    width: 5%;\n}\n.form-group .dapp-input[data-v-5c786b9f] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.form-group .dapp-input span[data-v-5c786b9f] {\n      color: #ff445b;\n      font-size: 16px;\n      height: 19px;\n      padding-left: 10px;\n}\n.form-group .requiredIcon[data-v-5c786b9f] {\n    color: #ff445b;\n    font-size: 16px;\n    height: 19px;\n    padding-left: 10px;\n}\n.form-group textarea[data-v-5c786b9f] {\n    background: #eef4fc;\n    border: none;\n    font-size: 14px;\n    width: 90%;\n}\n.form-group .dapp-text-info[data-v-5c786b9f] {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    width: 90%;\n}\n.form-group input[type='file'][data-v-5c786b9f] {\n    position: absolute;\n    font-size: 100px;\n    left: 0;\n    right: 0;\n    opacity: 0;\n}\n.form-group .dapp-popover[data-v-5c786b9f] {\n    height: 16px;\n    width: 16px;\n    margin-left: 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dapp-label {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 16px;\n  margin-bottom: 10px;\n  width: 90%;\n}\n.custom-file-input {\n  height: 100%;\n}\n.custom-file-label {\n  height: 100%;\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.custom-file-label.dragging {\n    opacity: 1;\n    border-color: #05c0a5;\n}\n.custom-file-label::after {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1cd35024", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b5378dea", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("22eb3a23", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue":
/*!***********************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true& */ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true&");
/* harmony import */ var _TagComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagComponent.vue?vue&type=script&lang=js& */ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TagComponent_vue_vue_type_style_index_0_id_0ea1d7c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true& */ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TagComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ea1d7c3",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0ea1d7c3')) {
      api.createRecord('0ea1d7c3', component.options)
    } else {
      api.reload('0ea1d7c3', component.options)
    }
    module.hot.accept(/*! ./TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true& */ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true& */ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true&");
(function () {
      api.rerender('0ea1d7c3', {
        render: _TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagComponent.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_style_index_0_id_0ea1d7c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=style&index=0&id=0ea1d7c3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_style_index_0_id_0ea1d7c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_style_index_0_id_0ea1d7c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_style_index_0_id_0ea1d7c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_style_index_0_id_0ea1d7c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_style_index_0_id_0ea1d7c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/components/TagComponent/TagComponent.vue?vue&type=template&id=0ea1d7c3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_template_id_0ea1d7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue":
/*!*******************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true& */ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true&");
/* harmony import */ var _AboutYourDappContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutYourDappContainer.vue?vue&type=script&lang=js& */ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutYourDappContainer_vue_vue_type_style_index_0_id_5c786b9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true& */ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true&");
/* harmony import */ var _AboutYourDappContainer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss& */ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _AboutYourDappContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c786b9f",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5c786b9f')) {
      api.createRecord('5c786b9f', component.options)
    } else {
      api.reload('5c786b9f', component.options)
    }
    module.hot.accept(/*! ./AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true& */ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true& */ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true&");
(function () {
      api.rerender('5c786b9f', {
        render: _AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_0_id_5c786b9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=0&id=5c786b9f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_0_id_5c786b9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_0_id_5c786b9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_0_id_5c786b9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_0_id_5c786b9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_0_id_5c786b9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true&":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c565626-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3c565626-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue?vue&type=template&id=5c786b9f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3c565626_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutYourDappContainer_vue_vue_type_template_id_5c786b9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/index.js":
/*!*************************************************************************************!*\
  !*** ./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutYourDappContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutYourDappContainer */ "./src/layouts/DappSubmissionLayout/containers/AboutYourDappContainer/AboutYourDappContainer.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AboutYourDappContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=35.js.map