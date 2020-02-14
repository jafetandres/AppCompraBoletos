(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["provincia-provincia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/provincia/provincia.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/provincia/provincia.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/nueva-provincia']\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Provincias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content *ngIf=\"items\" class=\"list-mini-content\" padding>\n     \n\n    <div *ngIf=\"items.length > 0\" class=\"list-mini\">\n      <ion-list>\n        <ion-item *ngFor=\"let item of items\" >\n         \n          <ion-label>{{item.payload.doc.data().descripcion}}</ion-label>\n          \n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n      Porfavor crear una provincia.\n    </div>\n  </ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/provincia/provincia.module.ts":
/*!***********************************************!*\
  !*** ./src/app/provincia/provincia.module.ts ***!
  \***********************************************/
/*! exports provided: ProvinciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinciaPageModule", function() { return ProvinciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provincia_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provincia.page */ "./src/app/provincia/provincia.page.ts");
/* harmony import */ var _provincia_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provincia.resolver */ "./src/app/provincia/provincia.resolver.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _provincia_page__WEBPACK_IMPORTED_MODULE_5__["ProvinciaPage"],
        resolve: {
            data: _provincia_resolver__WEBPACK_IMPORTED_MODULE_6__["ProvinciaResolver"]
        }
    }
];
let ProvinciaPageModule = class ProvinciaPageModule {
};
ProvinciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        declarations: [_provincia_page__WEBPACK_IMPORTED_MODULE_5__["ProvinciaPage"]],
        providers: [
            _provincia_resolver__WEBPACK_IMPORTED_MODULE_6__["ProvinciaResolver"]
        ]
    })
], ProvinciaPageModule);



/***/ }),

/***/ "./src/app/provincia/provincia.page.scss":
/*!***********************************************!*\
  !*** ./src/app/provincia/provincia.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpbmNpYS9wcm92aW5jaWEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/provincia/provincia.page.ts":
/*!*********************************************!*\
  !*** ./src/app/provincia/provincia.page.ts ***!
  \*********************************************/
/*! exports provided: ProvinciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinciaPage", function() { return ProvinciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProvinciaPage = class ProvinciaPage {
    constructor(loadingCtrl, authService, router, route) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
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
};
ProvinciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProvinciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-provincia',
        template: __webpack_require__(/*! raw-loader!./provincia.page.html */ "./node_modules/raw-loader/index.js!./src/app/provincia/provincia.page.html"),
        styles: [__webpack_require__(/*! ./provincia.page.scss */ "./src/app/provincia/provincia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ProvinciaPage);



/***/ }),

/***/ "./src/app/provincia/provincia.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/provincia/provincia.resolver.ts ***!
  \*************************************************/
/*! exports provided: ProvinciaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinciaResolver", function() { return ProvinciaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



let ProvinciaResolver = class ProvinciaResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve() {
        return this.firebaseService.getProvincias();
    }
};
ProvinciaResolver.ctorParameters = () => [
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
ProvinciaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], ProvinciaResolver);



/***/ })

}]);
//# sourceMappingURL=provincia-provincia-module-es2015.js.map