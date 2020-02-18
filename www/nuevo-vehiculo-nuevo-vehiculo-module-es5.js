(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-vehiculo-nuevo-vehiculo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nuevo-vehiculo/nuevo-vehiculo.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nuevo-vehiculo/nuevo-vehiculo.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/pais\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Nuevo Vehiculo</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Placa</ion-label>\n            <ion-input type=\"text\" formControlName=\"placa\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Modelo</ion-label>\n            <ion-input type=\"text\" formControlName=\"modelo\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Marca</ion-label>\n            <ion-input type=\"text\" formControlName=\"marca\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Color</ion-label>\n            <ion-input type=\"text\" formControlName=\"color\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Num. Asientos</ion-label>\n            <ion-input type=\"number\" formControlName=\"numero_asiento\"></ion-input>\n        </ion-item>\n        <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\">Guardar</ion-button>\n    </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/nuevo-vehiculo/nuevo-vehiculo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/nuevo-vehiculo/nuevo-vehiculo.module.ts ***!
  \*********************************************************/
/*! exports provided: NuevoVehiculoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoVehiculoPageModule", function() { return NuevoVehiculoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nuevo_vehiculo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo-vehiculo.page */ "./src/app/nuevo-vehiculo/nuevo-vehiculo.page.ts");
/* harmony import */ var _nuevo_vehiculo_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nuevo-vehiculo.resolver */ "./src/app/nuevo-vehiculo/nuevo-vehiculo.resolver.ts");








var routes = [
    {
        path: '',
        component: _nuevo_vehiculo_page__WEBPACK_IMPORTED_MODULE_6__["NuevoVehiculoPage"],
        resolve: {
            data: _nuevo_vehiculo_resolver__WEBPACK_IMPORTED_MODULE_7__["NuevoVehiculoResolver"]
        }
    }
];
var NuevoVehiculoPageModule = /** @class */ (function () {
    function NuevoVehiculoPageModule() {
    }
    NuevoVehiculoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_nuevo_vehiculo_page__WEBPACK_IMPORTED_MODULE_6__["NuevoVehiculoPage"]],
            providers: [
                _nuevo_vehiculo_resolver__WEBPACK_IMPORTED_MODULE_7__["NuevoVehiculoResolver"]
            ]
        })
    ], NuevoVehiculoPageModule);
    return NuevoVehiculoPageModule;
}());



/***/ }),

/***/ "./src/app/nuevo-vehiculo/nuevo-vehiculo.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/nuevo-vehiculo/nuevo-vehiculo.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251ZXZvLXZlaGljdWxvL251ZXZvLXZlaGljdWxvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/nuevo-vehiculo/nuevo-vehiculo.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/nuevo-vehiculo/nuevo-vehiculo.page.ts ***!
  \*******************************************************/
/*! exports provided: NuevoVehiculoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoVehiculoPage", function() { return NuevoVehiculoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");








var NuevoVehiculoPage = /** @class */ (function () {
    function NuevoVehiculoPage(toastCtrl, loadingCtrl, router, authService, route, formBuilder, firebaseService, webview) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
    }
    NuevoVehiculoPage.prototype.ngOnInit = function () {
        this.resetFields();
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    NuevoVehiculoPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            placa: value.placa,
            modelo: value.modelo,
            marca: value.marca,
            color: value.color,
            numero_asiento: value.numero_asiento
        };
        this.firebaseService.crearVehiculo(data)
            .then(function (res) {
            _this.router.navigate(['/vehiculo']);
        });
    };
    NuevoVehiculoPage.prototype.resetFields = function () {
        this.validations_form = this.formBuilder.group({
            placa: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            numero_asiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    };
    // async getData() {
    //   const loading = await this.loadingCtrl.create({
    //     message: 'Cargando'
    //   });
    //   this.presentLoading(loading);
    //   this.route.data.subscribe(routeData => {
    //     routeData['data'].subscribe(data => {
    //       loading.dismiss();
    //       this.items = data;
    //       console.log(this.items.length);
    //     });
    //   });
    // }
    NuevoVehiculoPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NuevoVehiculoPage.prototype.getData = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.item = data;
            }
        });
        this.validations_form = this.formBuilder.group({
            placa: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.item.placa, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.item.modelo, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.item.marca, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.item.color, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            numero_asiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.item.numero_asiento, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    NuevoVehiculoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] }
    ]; };
    NuevoVehiculoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nuevo-vehiculo',
            template: __webpack_require__(/*! raw-loader!./nuevo-vehiculo.page.html */ "./node_modules/raw-loader/index.js!./src/app/nuevo-vehiculo/nuevo-vehiculo.page.html"),
            styles: [__webpack_require__(/*! ./nuevo-vehiculo.page.scss */ "./src/app/nuevo-vehiculo/nuevo-vehiculo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"]])
    ], NuevoVehiculoPage);
    return NuevoVehiculoPage;
}());



/***/ }),

/***/ "./src/app/nuevo-vehiculo/nuevo-vehiculo.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/nuevo-vehiculo/nuevo-vehiculo.resolver.ts ***!
  \***********************************************************/
/*! exports provided: NuevoVehiculoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoVehiculoResolver", function() { return NuevoVehiculoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



var NuevoVehiculoResolver = /** @class */ (function () {
    function NuevoVehiculoResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    NuevoVehiculoResolver.prototype.resolve = function () {
        return this.firebaseService.getVehiculos();
    };
    NuevoVehiculoResolver.ctorParameters = function () { return [
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    NuevoVehiculoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], NuevoVehiculoResolver);
    return NuevoVehiculoResolver;
}());



/***/ })

}]);
//# sourceMappingURL=nuevo-vehiculo-nuevo-vehiculo-module-es5.js.map