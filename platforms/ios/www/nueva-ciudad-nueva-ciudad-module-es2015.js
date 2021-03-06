(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nueva-ciudad-nueva-ciudad-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nueva-ciudad/nueva-ciudad.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nueva-ciudad/nueva-ciudad.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/pais\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Nueva ciudad</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n        <ion-item>\n            <ion-label>Seleccione una Provincia</ion-label>\n            <ion-select formControlName=\"provincia\">\n                <ion-select-option *ngFor=\"let item of items\">{{item.payload.doc.data().descripcion}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Descripcion</ion-label>\n            <ion-input type=\"text\" formControlName=\"descripcion\"></ion-input>\n        </ion-item>\n        <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Crear</ion-button>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/nueva-ciudad/nueva-ciudad.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/nueva-ciudad/nueva-ciudad.module.ts ***!
  \*****************************************************/
/*! exports provided: NuevaCiudadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaCiudadPageModule", function() { return NuevaCiudadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nueva_ciudad_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nueva-ciudad.page */ "./src/app/nueva-ciudad/nueva-ciudad.page.ts");
/* harmony import */ var _nueva_ciudad_resoler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nueva-ciudad.resoler */ "./src/app/nueva-ciudad/nueva-ciudad.resoler.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _nueva_ciudad_page__WEBPACK_IMPORTED_MODULE_5__["NuevaCiudadPage"],
        resolve: {
            data: _nueva_ciudad_resoler__WEBPACK_IMPORTED_MODULE_6__["NuevaCiudadResolver"]
        }
    }
];
let NuevaCiudadPageModule = class NuevaCiudadPageModule {
};
NuevaCiudadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        declarations: [_nueva_ciudad_page__WEBPACK_IMPORTED_MODULE_5__["NuevaCiudadPage"]],
        providers: [
            _nueva_ciudad_resoler__WEBPACK_IMPORTED_MODULE_6__["NuevaCiudadResolver"]
        ]
    })
], NuevaCiudadPageModule);



/***/ }),

/***/ "./src/app/nueva-ciudad/nueva-ciudad.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/nueva-ciudad/nueva-ciudad.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251ZXZhLWNpdWRhZC9udWV2YS1jaXVkYWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nueva-ciudad/nueva-ciudad.page.ts":
/*!***************************************************!*\
  !*** ./src/app/nueva-ciudad/nueva-ciudad.page.ts ***!
  \***************************************************/
/*! exports provided: NuevaCiudadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaCiudadPage", function() { return NuevaCiudadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");








let NuevaCiudadPage = class NuevaCiudadPage {
    constructor(toastCtrl, loadingCtrl, router, authService, route, formBuilder, firebaseService, webview) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.authService = authService;
        this.route = route;
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
            provincia: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    onSubmit(value) {
        let data = {
            provincia: value.provincia,
            descripcion: value.descripcion,
        };
        this.firebaseService.crearCiudad(data)
            .then(res => {
            this.router.navigate(["/ciudad"]);
        });
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
};
NuevaCiudadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] }
];
NuevaCiudadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nueva-ciudad',
        template: __webpack_require__(/*! raw-loader!./nueva-ciudad.page.html */ "./node_modules/raw-loader/index.js!./src/app/nueva-ciudad/nueva-ciudad.page.html"),
        styles: [__webpack_require__(/*! ./nueva-ciudad.page.scss */ "./src/app/nueva-ciudad/nueva-ciudad.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"]])
], NuevaCiudadPage);



/***/ }),

/***/ "./src/app/nueva-ciudad/nueva-ciudad.resoler.ts":
/*!******************************************************!*\
  !*** ./src/app/nueva-ciudad/nueva-ciudad.resoler.ts ***!
  \******************************************************/
/*! exports provided: NuevaCiudadResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaCiudadResolver", function() { return NuevaCiudadResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



let NuevaCiudadResolver = class NuevaCiudadResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve() {
        return this.firebaseService.getProvincias();
    }
};
NuevaCiudadResolver.ctorParameters = () => [
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
NuevaCiudadResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], NuevaCiudadResolver);



/***/ })

}]);
//# sourceMappingURL=nueva-ciudad-nueva-ciudad-module-es2015.js.map