(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-pais-nuevo-pais-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nuevo-pais/nuevo-pais.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nuevo-pais/nuevo-pais.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/pais\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Nuevo Pais</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Descripcion</ion-label>\n            <ion-input type=\"text\" formControlName=\"descripcion\"></ion-input>\n        </ion-item>\n        <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Crear</ion-button>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/nuevo-pais/nuevo-pais-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/nuevo-pais/nuevo-pais-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NuevoPaisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoPaisPageRoutingModule", function() { return NuevoPaisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nuevo_pais_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo-pais.page */ "./src/app/nuevo-pais/nuevo-pais.page.ts");




var routes = [
    {
        path: '',
        component: _nuevo_pais_page__WEBPACK_IMPORTED_MODULE_3__["NuevoPaisPage"]
    }
];
var NuevoPaisPageRoutingModule = /** @class */ (function () {
    function NuevoPaisPageRoutingModule() {
    }
    NuevoPaisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NuevoPaisPageRoutingModule);
    return NuevoPaisPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/nuevo-pais/nuevo-pais.module.ts":
/*!*************************************************!*\
  !*** ./src/app/nuevo-pais/nuevo-pais.module.ts ***!
  \*************************************************/
/*! exports provided: NuevoPaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoPaisPageModule", function() { return NuevoPaisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nuevo_pais_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nuevo-pais-routing.module */ "./src/app/nuevo-pais/nuevo-pais-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nuevo_pais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo-pais.page */ "./src/app/nuevo-pais/nuevo-pais.page.ts");







var routes = [
    {
        path: '',
        component: _nuevo_pais_page__WEBPACK_IMPORTED_MODULE_6__["NuevoPaisPage"]
    }
];
var NuevoPaisPageModule = /** @class */ (function () {
    function NuevoPaisPageModule() {
    }
    NuevoPaisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _nuevo_pais_routing_module__WEBPACK_IMPORTED_MODULE_4__["NuevoPaisPageRoutingModule"]
            ],
            declarations: [_nuevo_pais_page__WEBPACK_IMPORTED_MODULE_6__["NuevoPaisPage"]]
        })
    ], NuevoPaisPageModule);
    return NuevoPaisPageModule;
}());



/***/ }),

/***/ "./src/app/nuevo-pais/nuevo-pais.page.scss":
/*!*************************************************!*\
  !*** ./src/app/nuevo-pais/nuevo-pais.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251ZXZvLXBhaXMvbnVldm8tcGFpcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nuevo-pais/nuevo-pais.page.ts":
/*!***********************************************!*\
  !*** ./src/app/nuevo-pais/nuevo-pais.page.ts ***!
  \***********************************************/
/*! exports provided: NuevoPaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoPaisPage", function() { return NuevoPaisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");







var NuevoPaisPage = /** @class */ (function () {
    function NuevoPaisPage(toastCtrl, loadingCtrl, router, formBuilder, firebaseService, webview) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
    }
    NuevoPaisPage.prototype.ngOnInit = function () {
        this.resetFields();
    };
    NuevoPaisPage.prototype.resetFields = function () {
        this.validations_form = this.formBuilder.group({
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    NuevoPaisPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            descripcion: value.descripcion,
        };
        this.firebaseService.crearPais(data)
            .then(function (res) {
            _this.router.navigate(["/home"]);
        });
    };
    NuevoPaisPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"] }
    ]; };
    NuevoPaisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nuevo-pais',
            template: __webpack_require__(/*! raw-loader!./nuevo-pais.page.html */ "./node_modules/raw-loader/index.js!./src/app/nuevo-pais/nuevo-pais.page.html"),
            styles: [__webpack_require__(/*! ./nuevo-pais.page.scss */ "./src/app/nuevo-pais/nuevo-pais.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"]])
    ], NuevoPaisPage);
    return NuevoPaisPage;
}());



/***/ })

}]);
//# sourceMappingURL=nuevo-pais-nuevo-pais-module-es5.js.map