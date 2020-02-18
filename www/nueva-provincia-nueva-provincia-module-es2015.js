(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nueva-provincia-nueva-provincia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nueva-provincia/nueva-provincia.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nueva-provincia/nueva-provincia.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/provincia\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Nueva Provincia</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n       \n      \n      <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n          <ion-item>\n          <ion-label>Seleccione un Pais</ion-label>\n          <ion-select formControlName=\"pais\" >\n            <ion-select-option *ngFor=\"let item of items\" >{{item.payload.doc.data().descripcion}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Descripcion</ion-label>\n            <ion-input type=\"text\" formControlName=\"descripcion\"></ion-input>\n        </ion-item>\n\n        <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Crear</ion-button>\n    </form>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/nueva-provincia/nueva-provincia.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/nueva-provincia/nueva-provincia.module.ts ***!
  \***********************************************************/
/*! exports provided: NuevaProvinciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaProvinciaPageModule", function() { return NuevaProvinciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nueva_provincia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nueva-provincia.page */ "./src/app/nueva-provincia/nueva-provincia.page.ts");
/* harmony import */ var _nueva_provincia_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nueva-provincia.resolver */ "./src/app/nueva-provincia/nueva-provincia.resolver.ts");








const routes = [
    {
        path: '',
        component: _nueva_provincia_page__WEBPACK_IMPORTED_MODULE_6__["NuevaProvinciaPage"],
        resolve: {
            data: _nueva_provincia_resolver__WEBPACK_IMPORTED_MODULE_7__["NuevaProvinciaResolver"]
        }
    }
];
let NuevaProvinciaPageModule = class NuevaProvinciaPageModule {
};
NuevaProvinciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_nueva_provincia_page__WEBPACK_IMPORTED_MODULE_6__["NuevaProvinciaPage"]],
        providers: [
            _nueva_provincia_resolver__WEBPACK_IMPORTED_MODULE_7__["NuevaProvinciaResolver"]
        ]
    })
], NuevaProvinciaPageModule);



/***/ }),

/***/ "./src/app/nueva-provincia/nueva-provincia.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/nueva-provincia/nueva-provincia.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251ZXZhLXByb3ZpbmNpYS9udWV2YS1wcm92aW5jaWEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nueva-provincia/nueva-provincia.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/nueva-provincia/nueva-provincia.page.ts ***!
  \*********************************************************/
/*! exports provided: NuevaProvinciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaProvinciaPage", function() { return NuevaProvinciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");








let NuevaProvinciaPage = class NuevaProvinciaPage {
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
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    onSubmit(value) {
        let data = {
            pais: value.pais,
            descripcion: value.descripcion,
        };
        this.firebaseService.crearProvincia(data)
            .then(res => {
            this.router.navigate(["/provincia"]);
        });
    }
};
NuevaProvinciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] }
];
NuevaProvinciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nueva-provincia',
        template: __webpack_require__(/*! raw-loader!./nueva-provincia.page.html */ "./node_modules/raw-loader/index.js!./src/app/nueva-provincia/nueva-provincia.page.html"),
        styles: [__webpack_require__(/*! ./nueva-provincia.page.scss */ "./src/app/nueva-provincia/nueva-provincia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"]])
], NuevaProvinciaPage);



/***/ }),

/***/ "./src/app/nueva-provincia/nueva-provincia.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/nueva-provincia/nueva-provincia.resolver.ts ***!
  \*************************************************************/
/*! exports provided: NuevaProvinciaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaProvinciaResolver", function() { return NuevaProvinciaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



let NuevaProvinciaResolver = class NuevaProvinciaResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve() {
        return this.firebaseService.getPaises();
    }
};
NuevaProvinciaResolver.ctorParameters = () => [
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
NuevaProvinciaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], NuevaProvinciaResolver);



/***/ })

}]);
//# sourceMappingURL=nueva-provincia-nueva-provincia-module-es2015.js.map