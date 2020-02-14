(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pais-pais-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pais/pais.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pais/pais.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/nuevo-pais']\">\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Paises</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-content *ngIf=\"items\" class=\"list-mini-content\" padding>\n       \n  \n      <div *ngIf=\"items.length > 0\" class=\"list-mini\">\n        <ion-list>\n          <ion-item *ngFor=\"let item of items\" >\n           \n            <ion-label>{{item.payload.doc.data().descripcion}}</ion-label>\n            \n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n        Por favor crea un pais.\n      </div>\n    </ion-content>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pais/pais.module.ts":
/*!*************************************!*\
  !*** ./src/app/pais/pais.module.ts ***!
  \*************************************/
/*! exports provided: PaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageModule", function() { return PaisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pais.page */ "./src/app/pais/pais.page.ts");
/* harmony import */ var _pais_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pais.resolver */ "./src/app/pais/pais.resolver.ts");








const routes = [
    {
        path: '',
        component: _pais_page__WEBPACK_IMPORTED_MODULE_6__["PaisPage"],
        resolve: {
            data: _pais_resolver__WEBPACK_IMPORTED_MODULE_7__["PaisResolver"]
        }
    }
];
let PaisPageModule = class PaisPageModule {
};
PaisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_pais_page__WEBPACK_IMPORTED_MODULE_6__["PaisPage"]],
        providers: [
            _pais_resolver__WEBPACK_IMPORTED_MODULE_7__["PaisResolver"]
        ]
    })
], PaisPageModule);



/***/ }),

/***/ "./src/app/pais/pais.page.scss":
/*!*************************************!*\
  !*** ./src/app/pais/pais.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaXMvcGFpcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pais/pais.page.ts":
/*!***********************************!*\
  !*** ./src/app/pais/pais.page.ts ***!
  \***********************************/
/*! exports provided: PaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPage", function() { return PaisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PaisPage = class PaisPage {
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
PaisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PaisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pais',
        template: __webpack_require__(/*! raw-loader!./pais.page.html */ "./node_modules/raw-loader/index.js!./src/app/pais/pais.page.html"),
        styles: [__webpack_require__(/*! ./pais.page.scss */ "./src/app/pais/pais.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], PaisPage);



/***/ }),

/***/ "./src/app/pais/pais.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/pais/pais.resolver.ts ***!
  \***************************************/
/*! exports provided: PaisResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisResolver", function() { return PaisResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



let PaisResolver = class PaisResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve() {
        return this.firebaseService.getPaises();
    }
};
PaisResolver.ctorParameters = () => [
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
PaisResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], PaisResolver);



/***/ })

}]);
//# sourceMappingURL=pais-pais-module-es2015.js.map