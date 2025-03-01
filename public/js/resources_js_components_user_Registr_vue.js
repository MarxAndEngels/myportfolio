"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_Registr_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Registr.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Registr.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Registr',
  data: function data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirm: null,
      error: null
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      axios.post('/api/user/', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
        role: 0
      }).then(function (res) {
        localStorage.setItem('access_token', res.data.access_token);
        document.location.reload();

        _this.$router.push({
          name: 'main.skills.index'
        });
      })["catch"](function (error) {
        console.log(error.response);
        _this.error = error.response.data.error;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/user/Registr.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/user/Registr.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registr_vue_vue_type_template_id_98b55dba_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registr.vue?vue&type=template&id=98b55dba&lang=true& */ "./resources/js/components/user/Registr.vue?vue&type=template&id=98b55dba&lang=true&");
/* harmony import */ var _Registr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registr.vue?vue&type=script&lang=js& */ "./resources/js/components/user/Registr.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registr_vue_vue_type_template_id_98b55dba_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registr_vue_vue_type_template_id_98b55dba_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/Registr.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/Registr.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/user/Registr.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registr.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Registr.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/Registr.vue?vue&type=template&id=98b55dba&lang=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user/Registr.vue?vue&type=template&id=98b55dba&lang=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_template_id_98b55dba_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_template_id_98b55dba_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_template_id_98b55dba_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registr.vue?vue&type=template&id=98b55dba&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Registr.vue?vue&type=template&id=98b55dba&lang=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Registr.vue?vue&type=template&id=98b55dba&lang=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Registr.vue?vue&type=template&id=98b55dba&lang=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-5" }, [
    _c("h1", [_vm._v("Регистрация")]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.name,
          expression: "name",
        },
      ],
      staticClass: "form-control mb-3",
      attrs: { type: "name", placeholder: "name" },
      domProps: { value: _vm.name },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.name = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.email,
          expression: "email",
        },
      ],
      staticClass: "form-control mb-3",
      attrs: { type: "email", placeholder: "email" },
      domProps: { value: _vm.email },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.email = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.password,
          expression: "password",
        },
      ],
      staticClass: "form-control mb-3",
      attrs: { type: "password", placeholder: "password" },
      domProps: { value: _vm.password },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.password = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.password_confirm,
          expression: "password_confirm",
        },
      ],
      staticClass: "form-control mb-3",
      attrs: { type: "password", placeholder: "confirm password" },
      domProps: { value: _vm.password_confirm },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.password_confirm = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _vm.error
      ? _c("div", { staticClass: "text-danger" }, [_vm._v(_vm._s(_vm.error))])
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      staticClass: "btn btn-primary",
      attrs: { type: "submit", value: "отправить" },
      on: {
        click: function ($event) {
          $event.preventDefault()
          return _vm.store.apply(null, arguments)
        },
      },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);