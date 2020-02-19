(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boleto-boleto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/boleto/boleto.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/boleto/boleto.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/nuevo-boleto']\">\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Boletos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-content *ngIf=\"items\" class=\"list-mini-content\" padding>\n\n\n        <div *ngIf=\"items.length > 0\" class=\"list-mini\">\n            <ion-list>\n                <ion-item-sliding *ngFor=\"let item of items\">\n                    <ion-item>\n                        <ion-label>{{ item.payload.doc.data().estado }}</ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option color=\"danger\" (click)=\"eliminar(item.payload.doc.id)\">\n                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-list>\n        </div>\n        <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n            Porfavor crea un boleto.\n        </div>\n    </ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/boleto/boleto.module.ts":
/*!*****************************************!*\
  !*** ./src/app/boleto/boleto.module.ts ***!
  \*****************************************/
/*! exports provided: BoletoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPageModule", function() { return BoletoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _boleto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boleto.page */ "./src/app/boleto/boleto.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _boleto_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boleto.resolver */ "./src/app/boleto/boleto.resolver.ts");








var routes = [
    {
        path: '',
        component: _boleto_page__WEBPACK_IMPORTED_MODULE_5__["BoletoPage"],
        resolve: {
            data: _boleto_resolver__WEBPACK_IMPORTED_MODULE_7__["BoletoResolver"]
        }
    }
];
var BoletoPageModule = /** @class */ (function () {
    function BoletoPageModule() {
    }
    BoletoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_boleto_page__WEBPACK_IMPORTED_MODULE_5__["BoletoPage"]],
            providers: [
                _boleto_resolver__WEBPACK_IMPORTED_MODULE_7__["BoletoResolver"]
            ]
        })
    ], BoletoPageModule);
    return BoletoPageModule;
}());



/***/ }),

/***/ "./src/app/boleto/boleto.page.scss":
/*!*****************************************!*\
  !*** ./src/app/boleto/boleto.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvbGV0by9ib2xldG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/boleto/boleto.page.ts":
/*!***************************************!*\
  !*** ./src/app/boleto/boleto.page.ts ***!
  \***************************************/
/*! exports provided: BoletoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPage", function() { return BoletoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");






var BoletoPage = /** @class */ (function () {
    function BoletoPage(loadingCtrl, authService, router, route, firebaseService) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.firebaseService = firebaseService;
    }
    BoletoPage.prototype.ngOnInit = function () {
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    BoletoPage.prototype.getData = function () {
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
    BoletoPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BoletoPage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate([""]);
        }, function (err) {
            console.log(err);
        });
    };
    BoletoPage.prototype.eliminar = function (boleto) {
        console.log("Lega correcto", boleto);
        this.firebaseService.deleteBoleto(boleto);
    };
    BoletoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
    ]; };
    BoletoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boleto',
            template: __webpack_require__(/*! raw-loader!./boleto.page.html */ "./node_modules/raw-loader/index.js!./src/app/boleto/boleto.page.html"),
            styles: [__webpack_require__(/*! ./boleto.page.scss */ "./src/app/boleto/boleto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])
    ], BoletoPage);
    return BoletoPage;
}());



/***/ }),

/***/ "./src/app/boleto/boleto.resolver.ts":
/*!*******************************************!*\
  !*** ./src/app/boleto/boleto.resolver.ts ***!
  \*******************************************/
/*! exports provided: BoletoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoResolver", function() { return BoletoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



var BoletoResolver = /** @class */ (function () {
    function BoletoResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    BoletoResolver.prototype.resolve = function () {
        return this.firebaseService.getBoletos();
    };
    BoletoResolver.ctorParameters = function () { return [
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    BoletoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], BoletoResolver);
    return BoletoResolver;
}());



/***/ })

}]);
//# sourceMappingURL=boleto-boleto-module-es5.js.map