(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actualizar-vehiculo-actualizar-vehiculo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/actualizar-vehiculo/actualizar-vehiculo.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/actualizar-vehiculo/actualizar-vehiculo.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/pais\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Actualizar Vehiculo</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Placa</ion-label>\n            <ion-input type=\"text\" formControlName=\"placa\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Modelo</ion-label>\n            <ion-input type=\"text\" formControlName=\"modelo\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Marca</ion-label>\n            <ion-input type=\"text\" formControlName=\"marca\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Color</ion-label>\n            <ion-input type=\"text\" formControlName=\"color\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Num. Asientos</ion-label>\n            <ion-input type=\"number\" formControlName=\"numero_asiento\"></ion-input>\n        </ion-item>\n        <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\">Guardar</ion-button>\n    </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/actualizar-vehiculo/actualizar-vehiculo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/actualizar-vehiculo/actualizar-vehiculo.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActualizarVehiculoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarVehiculoPageModule", function() { return ActualizarVehiculoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _actualizar_vehiculo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actualizar-vehiculo.page */ "./src/app/actualizar-vehiculo/actualizar-vehiculo.page.ts");
/* harmony import */ var _actualizar_vehiculo_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actualizar-vehiculo.resolver */ "./src/app/actualizar-vehiculo/actualizar-vehiculo.resolver.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var routes = [
    {
        path: '',
        component: _actualizar_vehiculo_page__WEBPACK_IMPORTED_MODULE_5__["ActualizarVehiculoPage"],
        resolve: {
            data: _actualizar_vehiculo_resolver__WEBPACK_IMPORTED_MODULE_6__["VehiculoActualizarResolver"]
        }
    }
];
var ActualizarVehiculoPageModule = /** @class */ (function () {
    function ActualizarVehiculoPageModule() {
    }
    ActualizarVehiculoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
            ],
            declarations: [_actualizar_vehiculo_page__WEBPACK_IMPORTED_MODULE_5__["ActualizarVehiculoPage"]],
            providers: [_actualizar_vehiculo_resolver__WEBPACK_IMPORTED_MODULE_6__["VehiculoActualizarResolver"]]
        })
    ], ActualizarVehiculoPageModule);
    return ActualizarVehiculoPageModule;
}());



/***/ }),

/***/ "./src/app/actualizar-vehiculo/actualizar-vehiculo.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/actualizar-vehiculo/actualizar-vehiculo.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdHVhbGl6YXItdmVoaWN1bG8vYWN0dWFsaXphci12ZWhpY3Vsby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/actualizar-vehiculo/actualizar-vehiculo.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/actualizar-vehiculo/actualizar-vehiculo.page.ts ***!
  \*****************************************************************/
/*! exports provided: ActualizarVehiculoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarVehiculoPage", function() { return ActualizarVehiculoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ActualizarVehiculoPage = /** @class */ (function () {
    function ActualizarVehiculoPage(imagePicker, toastCtrl, loadingCtrl, formBuilder, firebaseService, webview, alertCtrl, route, router) {
        this.imagePicker = imagePicker;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
    }
    ActualizarVehiculoPage.prototype.ngOnInit = function () {
        this.getData();
    };
    ActualizarVehiculoPage.prototype.getData = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.item = data;
            }
        });
        this.validations_form = this.formBuilder.group({
            placa: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.placa, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.modelo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.marca, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.color, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            numero_asiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.numero_asiento, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    ActualizarVehiculoPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            placa: value.placa,
            modelo: value.modelo,
            marca: value.marca,
            color: value.color,
            numero_asiento: value.numero_asiento,
        };
        this.firebaseService.actualizarVehiculo(this.item.id, data)
            .then(function (res) {
            _this.router.navigate(["/vehiculo"]);
        });
    };
    ActualizarVehiculoPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ActualizarVehiculoPage.ctorParameters = function () { return [
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    ActualizarVehiculoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actualizar-vehiculo',
            template: __webpack_require__(/*! raw-loader!./actualizar-vehiculo.page.html */ "./node_modules/raw-loader/index.js!./src/app/actualizar-vehiculo/actualizar-vehiculo.page.html"),
            styles: [__webpack_require__(/*! ./actualizar-vehiculo.page.scss */ "./src/app/actualizar-vehiculo/actualizar-vehiculo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ActualizarVehiculoPage);
    return ActualizarVehiculoPage;
}());



/***/ }),

/***/ "./src/app/actualizar-vehiculo/actualizar-vehiculo.resolver.ts":
/*!*********************************************************************!*\
  !*** ./src/app/actualizar-vehiculo/actualizar-vehiculo.resolver.ts ***!
  \*********************************************************************/
/*! exports provided: VehiculoActualizarResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculoActualizarResolver", function() { return VehiculoActualizarResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



var VehiculoActualizarResolver = /** @class */ (function () {
    function VehiculoActualizarResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    VehiculoActualizarResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var itemId = route.paramMap.get('id');
            _this.firebaseService.getVehiculo(itemId)
                .then(function (data) {
                data.id = itemId;
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    VehiculoActualizarResolver.ctorParameters = function () { return [
        { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    VehiculoActualizarResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], VehiculoActualizarResolver);
    return VehiculoActualizarResolver;
}());



/***/ })

}]);
//# sourceMappingURL=actualizar-vehiculo-actualizar-vehiculo-module-es5.js.map