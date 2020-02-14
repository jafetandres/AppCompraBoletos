(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ruta-ruta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ruta/ruta.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ruta/ruta.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/nueva-ruta']\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Rutas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content *ngIf=\"items\" class=\"list-mini-content\" padding>\n     \n\n    <div *ngIf=\"items.length > 0\" class=\"list-mini\">\n      <ion-list>\n        <ion-item *ngFor=\"let item of items\" >\n         \n          <ion-label>{{item.payload.doc.data().descripcion}}</ion-label>\n          \n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n      Please create your first task.\n    </div>\n  </ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ruta/ruta.module.ts":
/*!*************************************!*\
  !*** ./src/app/ruta/ruta.module.ts ***!
  \*************************************/
/*! exports provided: RutaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaPageModule", function() { return RutaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ruta_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ruta.page */ "./src/app/ruta/ruta.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ruta_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ruta.resolver */ "./src/app/ruta/ruta.resolver.ts");








var routes = [
    {
        path: '',
        component: _ruta_page__WEBPACK_IMPORTED_MODULE_5__["RutaPage"],
        resolve: {
            data: _ruta_resolver__WEBPACK_IMPORTED_MODULE_7__["RutaResolver"]
        }
    }
];
var RutaPageModule = /** @class */ (function () {
    function RutaPageModule() {
    }
    RutaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_ruta_page__WEBPACK_IMPORTED_MODULE_5__["RutaPage"]],
            providers: [
                _ruta_resolver__WEBPACK_IMPORTED_MODULE_7__["RutaResolver"]
            ]
        })
    ], RutaPageModule);
    return RutaPageModule;
}());



/***/ }),

/***/ "./src/app/ruta/ruta.page.scss":
/*!*************************************!*\
  !*** ./src/app/ruta/ruta.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1dGEvcnV0YS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ruta/ruta.page.ts":
/*!***********************************!*\
  !*** ./src/app/ruta/ruta.page.ts ***!
  \***********************************/
/*! exports provided: RutaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaPage", function() { return RutaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RutaPage = /** @class */ (function () {
    function RutaPage(loadingCtrl, authService, router, route) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    RutaPage.prototype.ngOnInit = function () {
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    RutaPage.prototype.getData = function () {
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
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RutaPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RutaPage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate([""]);
        }, function (err) {
            console.log(err);
        });
    };
    RutaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    RutaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta',
            template: __webpack_require__(/*! raw-loader!./ruta.page.html */ "./node_modules/raw-loader/index.js!./src/app/ruta/ruta.page.html"),
            styles: [__webpack_require__(/*! ./ruta.page.scss */ "./src/app/ruta/ruta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RutaPage);
    return RutaPage;
}());



/***/ }),

/***/ "./src/app/ruta/ruta.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/ruta/ruta.resolver.ts ***!
  \***************************************/
/*! exports provided: RutaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaResolver", function() { return RutaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



var RutaResolver = /** @class */ (function () {
    function RutaResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    RutaResolver.prototype.resolve = function () {
        return this.firebaseService.getRutas();
    };
    RutaResolver.ctorParameters = function () { return [
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    RutaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], RutaResolver);
    return RutaResolver;
}());



/***/ })

}]);
//# sourceMappingURL=ruta-ruta-module-es5.js.map