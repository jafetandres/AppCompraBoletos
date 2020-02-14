(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nueva-ruta-nueva-ruta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nueva-ruta/nueva-ruta.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nueva-ruta/nueva-ruta.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/ruta\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nueva Ruta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Descripcion</ion-label>\n      <ion-input type=\"text\" formControlName=\"descripcion\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Precio</ion-label>\n      <ion-input type=\"text\" formControlName=\"precio\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Seleccione una Ciudad de Origen</ion-label>\n      <ion-select formControlName=\"origen\" >\n        <ion-select-option *ngFor=\"let item of items\" >{{ item.payload.doc.data().descripcion }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n    <ion-label>Seleccione una Ciudad de Destino</ion-label>\n      <ion-select formControlName=\"destino\" >\n        <ion-select-option *ngFor=\"let item of items\" >{{ item.payload.doc.data().descripcion }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n      \n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Crear</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/nueva-ruta/nueva-ruta.module.ts":
/*!*************************************************!*\
  !*** ./src/app/nueva-ruta/nueva-ruta.module.ts ***!
  \*************************************************/
/*! exports provided: NuevaRutaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaRutaPageModule", function() { return NuevaRutaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nueva_ruta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nueva-ruta.page */ "./src/app/nueva-ruta/nueva-ruta.page.ts");
/* harmony import */ var _nueva_ruta_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nueva-ruta.resolver */ "./src/app/nueva-ruta/nueva-ruta.resolver.ts");








const routes = [
    {
        path: '',
        component: _nueva_ruta_page__WEBPACK_IMPORTED_MODULE_6__["NuevaRutaPage"],
        resolve: {
            data: _nueva_ruta_resolver__WEBPACK_IMPORTED_MODULE_7__["NuevaRutaResolver"]
        }
    }
];
let NuevaRutaPageModule = class NuevaRutaPageModule {
};
NuevaRutaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_nueva_ruta_page__WEBPACK_IMPORTED_MODULE_6__["NuevaRutaPage"]],
        providers: [
            _nueva_ruta_resolver__WEBPACK_IMPORTED_MODULE_7__["NuevaRutaResolver"]
        ]
    })
], NuevaRutaPageModule);



/***/ }),

/***/ "./src/app/nueva-ruta/nueva-ruta.page.scss":
/*!*************************************************!*\
  !*** ./src/app/nueva-ruta/nueva-ruta.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251ZXZhLXJ1dGEvbnVldmEtcnV0YS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nueva-ruta/nueva-ruta.page.ts":
/*!***********************************************!*\
  !*** ./src/app/nueva-ruta/nueva-ruta.page.ts ***!
  \***********************************************/
/*! exports provided: NuevaRutaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaRutaPage", function() { return NuevaRutaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");








let NuevaRutaPage = class NuevaRutaPage {
    constructor(loadingCtrl, authService, router, route, toastCtrl, formBuilder, firebaseService, webview) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
    }
    ngOnInit() {
        this.resetFields();
        if (this.route && this.route.data) {
            this.getData();
        }
    }
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Cargando'
            });
            this.presentLoading(loading);
            this.route.data.subscribe(routeData => {
                routeData['data'].subscribe(data => {
                    loading.dismiss();
                    this.items = data;
                    console.log(this.items.length);
                });
            });
        });
    }
    presentLoading(loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
    logout() {
        this.authService.doLogout()
            .then(res => {
            this.router.navigate([""]);
        }, err => {
            console.log(err);
        });
    }
    resetFields() {
        this.validations_form = this.formBuilder.group({
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            precio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            origen: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            destino: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    onSubmit(value) {
        let data = {
            descripcion: value.descripcion,
            precio: value.precio,
            origen: value.origen,
            destino: value.destino
        };
        this.firebaseService.crearRuta(data)
            .then(res => {
            this.router.navigate(["/home"]);
        });
    }
};
NuevaRutaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"] }
];
NuevaRutaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nueva-ruta',
        template: __webpack_require__(/*! raw-loader!./nueva-ruta.page.html */ "./node_modules/raw-loader/index.js!./src/app/nueva-ruta/nueva-ruta.page.html"),
        styles: [__webpack_require__(/*! ./nueva-ruta.page.scss */ "./src/app/nueva-ruta/nueva-ruta.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"]])
], NuevaRutaPage);



/***/ }),

/***/ "./src/app/nueva-ruta/nueva-ruta.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/nueva-ruta/nueva-ruta.resolver.ts ***!
  \***************************************************/
/*! exports provided: NuevaRutaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaRutaResolver", function() { return NuevaRutaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



let NuevaRutaResolver = class NuevaRutaResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        console.log("aqui es ");
    }
    resolve() {
        return this.firebaseService.getCiudades();
    }
};
NuevaRutaResolver.ctorParameters = () => [
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
NuevaRutaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], NuevaRutaResolver);



/***/ })

}]);
//# sourceMappingURL=nueva-ruta-nueva-ruta-module-es2015.js.map