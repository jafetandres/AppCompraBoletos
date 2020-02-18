(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ciudad-ciudad-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ciudad/ciudad.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ciudad/ciudad.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/nueva-ciudad']\">\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Ciudad</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-content *ngIf=\"items\" class=\"list-mini-content\" padding>\n        <div *ngIf=\"items.length > 0\" class=\"list-mini\">\n            <ion-list>\n                <ion-item *ngFor=\"let item of items\">\n                    <ion-label>{{item.payload.doc.data().descripcion}}</ion-label>\n                </ion-item>\n            </ion-list>\n        </div>\n        <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n            Porfavor ingrese una ciuadad.\n        </div>\n    </ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/ciudad/ciudad.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ciudad/ciudad.module.ts ***!
  \*****************************************/
/*! exports provided: CiudadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiudadPageModule", function() { return CiudadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ciudad_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ciudad.page */ "./src/app/ciudad/ciudad.page.ts");
/* harmony import */ var _ciudad_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ciudad.resolve */ "./src/app/ciudad/ciudad.resolve.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var routes = [
    {
        path: '',
        component: _ciudad_page__WEBPACK_IMPORTED_MODULE_5__["CiudadPage"],
        resolve: {
            data: _ciudad_resolve__WEBPACK_IMPORTED_MODULE_6__["CiudadResolver"]
        }
    }
];
var CiudadPageModule = /** @class */ (function () {
    function CiudadPageModule() {
    }
    CiudadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            ],
            declarations: [_ciudad_page__WEBPACK_IMPORTED_MODULE_5__["CiudadPage"]],
            providers: [
                _ciudad_resolve__WEBPACK_IMPORTED_MODULE_6__["CiudadResolver"]
            ]
        })
    ], CiudadPageModule);
    return CiudadPageModule;
}());



/***/ }),

/***/ "./src/app/ciudad/ciudad.page.scss":
/*!*****************************************!*\
  !*** ./src/app/ciudad/ciudad.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpdWRhZC9jaXVkYWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ciudad/ciudad.page.ts":
/*!***************************************!*\
  !*** ./src/app/ciudad/ciudad.page.ts ***!
  \***************************************/
/*! exports provided: CiudadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiudadPage", function() { return CiudadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CiudadPage = /** @class */ (function () {
    function CiudadPage(loadingCtrl, authService, router, route) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    CiudadPage.prototype.ngOnInit = function () {
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    CiudadPage.prototype.getData = function () {
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
                                console.log(_this.items);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CiudadPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CiudadPage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate([""]);
        }, function (err) {
            console.log(err);
        });
    };
    CiudadPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    CiudadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ciudad',
            template: __webpack_require__(/*! raw-loader!./ciudad.page.html */ "./node_modules/raw-loader/index.js!./src/app/ciudad/ciudad.page.html"),
            styles: [__webpack_require__(/*! ./ciudad.page.scss */ "./src/app/ciudad/ciudad.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CiudadPage);
    return CiudadPage;
}());



/***/ }),

/***/ "./src/app/ciudad/ciudad.resolve.ts":
/*!******************************************!*\
  !*** ./src/app/ciudad/ciudad.resolve.ts ***!
  \******************************************/
/*! exports provided: CiudadResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiudadResolver", function() { return CiudadResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



var CiudadResolver = /** @class */ (function () {
    function CiudadResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    CiudadResolver.prototype.resolve = function () {
        return this.firebaseService.getCiudades();
    };
    CiudadResolver.ctorParameters = function () { return [
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    CiudadResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], CiudadResolver);
    return CiudadResolver;
}());



/***/ })

}]);
//# sourceMappingURL=ciudad-ciudad-module-es5.js.map