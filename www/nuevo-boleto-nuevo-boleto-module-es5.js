(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-boleto-nuevo-boleto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nuevo-boleto/nuevo-boleto.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nuevo-boleto/nuevo-boleto.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/boleto\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nuevo Boleto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Fecha</ion-label>\n      <ion-datetime type=\"text\" formControlName=\"fecha\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Estado</ion-label>\n      <ion-input type=\"text\" formControlName=\"estado\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Valor</ion-label>\n      <ion-input type=\"number\" formControlName=\"valor\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Seleccione un Vehiculo</ion-label>\n      <ion-select formControlName=\"vehiculo\" >\n        <ion-select-option *ngFor=\"let item of items\" >{{ item.payload.doc.data().placa }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n      \n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Crear</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/nuevo-boleto/nuevo-boleto.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/nuevo-boleto/nuevo-boleto.module.ts ***!
  \*****************************************************/
/*! exports provided: NuevoBoletoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoBoletoPageModule", function() { return NuevoBoletoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nuevo_boleto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevo-boleto.page */ "./src/app/nuevo-boleto/nuevo-boleto.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nuevo_boleto_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nuevo-boleto.resolver */ "./src/app/nuevo-boleto/nuevo-boleto.resolver.ts");








var routes = [
    {
        path: '',
        component: _nuevo_boleto_page__WEBPACK_IMPORTED_MODULE_5__["NuevoBoletoPage"],
        resolve: {
            data: _nuevo_boleto_resolver__WEBPACK_IMPORTED_MODULE_7__["NuevoBoletoResolver"]
        }
    }
];
var NuevoBoletoPageModule = /** @class */ (function () {
    function NuevoBoletoPageModule() {
    }
    NuevoBoletoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_nuevo_boleto_page__WEBPACK_IMPORTED_MODULE_5__["NuevoBoletoPage"]],
            providers: [
                _nuevo_boleto_resolver__WEBPACK_IMPORTED_MODULE_7__["NuevoBoletoResolver"]
            ]
        })
    ], NuevoBoletoPageModule);
    return NuevoBoletoPageModule;
}());



/***/ }),

/***/ "./src/app/nuevo-boleto/nuevo-boleto.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/nuevo-boleto/nuevo-boleto.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251ZXZvLWJvbGV0by9udWV2by1ib2xldG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nuevo-boleto/nuevo-boleto.page.ts":
/*!***************************************************!*\
  !*** ./src/app/nuevo-boleto/nuevo-boleto.page.ts ***!
  \***************************************************/
/*! exports provided: NuevoBoletoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoBoletoPage", function() { return NuevoBoletoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");








var NuevoBoletoPage = /** @class */ (function () {
    function NuevoBoletoPage(loadingCtrl, authService, router, route, toastCtrl, formBuilder, firebaseService, webview) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
    }
    NuevoBoletoPage.prototype.ngOnInit = function () {
        this.resetFields();
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    NuevoBoletoPage.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Cargando'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.route.data.subscribe(function (routeData) {
                            routeData['data'].subscribe(function (data) {
                                loading.dismiss();
                                _this.items = data;
                                console.log(_this.items.length);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevoBoletoPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NuevoBoletoPage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate([""]);
        }, function (err) {
            console.log(err);
        });
    };
    NuevoBoletoPage.prototype.resetFields = function () {
        this.validations_form = this.formBuilder.group({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            vehiculo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    NuevoBoletoPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            fecha: value.fecha,
            estado: value.estado,
            valor: value.valor,
            vehiculo: value.vehiculo
        };
        this.firebaseService.crearBoleto(data)
            .then(function (res) {
            _this.router.navigate(["/home"]);
        });
    };
    NuevoBoletoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] }
    ]; };
    NuevoBoletoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nuevo-boleto',
            template: __webpack_require__(/*! raw-loader!./nuevo-boleto.page.html */ "./node_modules/raw-loader/index.js!./src/app/nuevo-boleto/nuevo-boleto.page.html"),
            styles: [__webpack_require__(/*! ./nuevo-boleto.page.scss */ "./src/app/nuevo-boleto/nuevo-boleto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"]])
    ], NuevoBoletoPage);
    return NuevoBoletoPage;
}());



/***/ }),

/***/ "./src/app/nuevo-boleto/nuevo-boleto.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/nuevo-boleto/nuevo-boleto.resolver.ts ***!
  \*******************************************************/
/*! exports provided: NuevoBoletoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoBoletoResolver", function() { return NuevoBoletoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



var NuevoBoletoResolver = /** @class */ (function () {
    function NuevoBoletoResolver(firebaseService) {
        this.firebaseService = firebaseService;
        console.log("aqui es ");
    }
    NuevoBoletoResolver.prototype.resolve = function () {
        return this.firebaseService.getVehiculos();
    };
    NuevoBoletoResolver.ctorParameters = function () { return [
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    NuevoBoletoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], NuevoBoletoResolver);
    return NuevoBoletoResolver;
}());



/***/ })

}]);
//# sourceMappingURL=nuevo-boleto-nuevo-boleto-module-es5.js.map