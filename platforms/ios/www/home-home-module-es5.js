(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/perfil']\">\n                <ion-icon src=\"../assets/icon/person-circle-outline.svg\" name=\"person-circle-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Compra Boletos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content *ngIf=\"items\" class=\"list-mini-content\" padding>\n     <ion-button [routerLink]=\"['/location-select']\">Ir a GPS</ion-button> \n\n    <div *ngIf=\"items.length > 0\" class=\"list-mini\">\n      <ion-list>\n        <ion-item *ngFor=\"let item of items\" [routerLink]=\"['/details', item.payload.doc.id]\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"item.payload.doc.data().image\">\n          </ion-thumbnail>\n          <ion-label>{{item.payload.doc.data().title}}</ion-label>\n          <ion-button fill=\"clear\" slot=\"end\">Details</ion-button>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngIf=\"items.length == 0\" class=\"empty-list\">\n      Please create your first task.\n    </div>\n  </ion-content> -->\n<ion-content>\n    <ion-list>\n        <ion-item [routerLink]=\"['/pais']\">\n            <ion-label>Pais</ion-label>\n        </ion-item>\n        <ion-item [routerLink]=\"['/provincia']\">\n            <ion-label>Provincia</ion-label>\n        </ion-item>\n        <ion-item [routerLink]=\"['/ciudad']\">\n            <ion-label>Ciudad</ion-label>\n        </ion-item>\n\n\n\n        <ion-item [routerLink]=\"['/vehiculo']\">\n            <ion-label>Vehiculo</ion-label>\n        </ion-item>\n\n        <ion-item [routerLink]=\"['/ruta']\">\n            <ion-label>Rutas</ion-label>\n        </ion-item>\n\n        <ion-item [routerLink]=\"['/boleto']\">\n            <ion-label>Boleto</ion-label>\n        </ion-item>\n       \n\n    </ion-list>\n\n</ion-content>\n<ion-footer (click)=\"logout()\">\n    <ion-toolbar color=\"medium\">\n        <ion-title>Cerrar Sesion</ion-title>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.resolver */ "./src/app/home/home.resolver.ts");








var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
        resolve: {
            data: _home_resolver__WEBPACK_IMPORTED_MODULE_7__["HomeResolver"]
        }
    }
];
console.log(routes.values);
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            providers: [
                _home_resolver__WEBPACK_IMPORTED_MODULE_7__["HomeResolver"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-menu {\n  --width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWZldGFuZHJlc2dhbHZlenF1ZXphZGEvRHJvcGJveC9Qcm95ZWN0b3NJb25pYy9BcHBDb21wcmFCb2xldG9zL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLW1lbnUge1xuICAgIC0td2lkdGg6IDUwMHB4O1xuICB9IiwiLm15LWN1c3RvbS1tZW51IHtcbiAgLS13aWR0aDogNTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomePage = /** @class */ (function () {
    function HomePage(loadingCtrl, authService, router, route, menu) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.menu = menu;
    }
    HomePage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    HomePage.prototype.openEnd = function () {
        this.menu.open('end');
    };
    HomePage.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    };
    HomePage.prototype.ngOnInit = function () {
        if (this.route && this.route.data) {
            this.getData();
        }
    };
    HomePage.prototype.getData = function () {
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
    HomePage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.router.navigate([""]);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/home.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/home/home.resolver.ts ***!
  \***************************************/
/*! exports provided: HomeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResolver", function() { return HomeResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



var HomeResolver = /** @class */ (function () {
    function HomeResolver(firebaseService) {
        this.firebaseService = firebaseService;
        console.log("aqui es ");
    }
    HomeResolver.prototype.resolve = function () {
        return this.firebaseService.getTasks();
    };
    HomeResolver.ctorParameters = function () { return [
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    HomeResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], HomeResolver);
    return HomeResolver;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map