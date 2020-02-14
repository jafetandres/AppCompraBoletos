(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehiculo-vehiculo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehiculo/vehiculo.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehiculo/vehiculo.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/nuevo-vehiculo']\">\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Vehiculo</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-content *ngIf=\"items\" class=\"list-mini-content\" padding>\n        <div *ngIf=\"items.length > 0\" class=\"list-mini\">\n            <ion-list>\n                <ion-item-sliding *ngFor=\"let item of items\">\n                    <ion-item>\n                        <ion-label>\n                            <h3>Vehiculo</h3>\n                            <p>\n                                {{item.payload.doc.data().placa}}\n                            </p>\n                        </ion-label>\n                        <ion-label slot=\"end\" text-right>{{item.payload.doc.data().marca}}</ion-label>\n                    </ion-item>\n\n                    <ion-item-options side=\"start\">\n                        <ion-item-option color=\"secondary\" (click)=\"actualizar(item)\">\n                            <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n                        </ion-item-option>\n                    </ion-item-options>\n\n                    <ion-item-options side=\"end\">\n                        <ion-item-option color=\"danger\" (click)=\"eiminar(item.payload.doc.data())\">\n                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-item-option>\n                    </ion-item-options>\n\n                </ion-item-sliding>\n            </ion-list>\n        </div>\n        <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n            Porfavor ingrese un vehiculo.\n        </div>\n    </ion-content>"

/***/ }),

/***/ "./src/app/vehiculo/vehiculo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/vehiculo/vehiculo.module.ts ***!
  \*********************************************/
/*! exports provided: VehiculoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculoPageModule", function() { return VehiculoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vehiculo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehiculo.page */ "./src/app/vehiculo/vehiculo.page.ts");
/* harmony import */ var _vehiculo_resolve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehiculo.resolve */ "./src/app/vehiculo/vehiculo.resolve.ts");








var routes = [
    {
        path: '',
        component: _vehiculo_page__WEBPACK_IMPORTED_MODULE_6__["VehiculoPage"],
        resolve: {
            data: _vehiculo_resolve__WEBPACK_IMPORTED_MODULE_7__["VehiculoResolver"]
        }
    }
];
var VehiculoPageModule = /** @class */ (function () {
    function VehiculoPageModule() {
    }
    VehiculoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ],
            declarations: [_vehiculo_page__WEBPACK_IMPORTED_MODULE_6__["VehiculoPage"]],
            providers: [
                _vehiculo_resolve__WEBPACK_IMPORTED_MODULE_7__["VehiculoResolver"]
            ]
        })
    ], VehiculoPageModule);
    return VehiculoPageModule;
}());



/***/ }),

/***/ "./src/app/vehiculo/vehiculo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/vehiculo/vehiculo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljdWxvL3ZlaGljdWxvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehiculo/vehiculo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/vehiculo/vehiculo.page.ts ***!
  \*******************************************/
/*! exports provided: VehiculoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculoPage", function() { return VehiculoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");






var VehiculoPage = /** @class */ (function () {
    function VehiculoPage(loadingCtrl, authService, router, route, firebaseService) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.firebaseService = firebaseService;
    }
    VehiculoPage.prototype.ngOnInit = function () {
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    VehiculoPage.prototype.getData = function () {
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
    VehiculoPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VehiculoPage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate([""]);
        }, function (err) {
            console.log(err);
        });
    };
    VehiculoPage.prototype.actualizar = function (vehicle) {
        console.log("Lega correcto", vehicle);
    };
    VehiculoPage.prototype.eiminar = function (vehicle) {
        console.log("Lega correcto", vehicle);
        this.firebaseService.deleteVehicle(vehicle);
    };
    VehiculoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
    ]; };
    VehiculoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehiculo',
            template: __webpack_require__(/*! raw-loader!./vehiculo.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehiculo/vehiculo.page.html"),
            styles: [__webpack_require__(/*! ./vehiculo.page.scss */ "./src/app/vehiculo/vehiculo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])
    ], VehiculoPage);
    return VehiculoPage;
}());



/***/ }),

/***/ "./src/app/vehiculo/vehiculo.resolve.ts":
/*!**********************************************!*\
  !*** ./src/app/vehiculo/vehiculo.resolve.ts ***!
  \**********************************************/
/*! exports provided: VehiculoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculoResolver", function() { return VehiculoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



var VehiculoResolver = /** @class */ (function () {
    function VehiculoResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    VehiculoResolver.prototype.resolve = function () {
        return this.firebaseService.getVehiculos();
    };
    VehiculoResolver.ctorParameters = function () { return [
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    VehiculoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], VehiculoResolver);
    return VehiculoResolver;
}());



/***/ })

}]);
//# sourceMappingURL=vehiculo-vehiculo-module-es5.js.map