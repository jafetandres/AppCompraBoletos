(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actualizar-pais-actualizar-pais-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/actualizar-pais/actualizar-pais.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/actualizar-pais/actualizar-pais.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"pais\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Pais</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Descripcion</ion-label>\n        <ion-input type=\"text\" formControlName=\"descripcion\"></ion-input>\n      </ion-item>\n  \n      <ion-button class=\"submit-button\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Guardar</ion-button>\n    </form>\n    <ion-button class=\"delete-button\" expand=\"block\" color=\"danger\" (click)=\"delete()\">Eliminar</ion-button>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/actualizar-pais/actualizar-pais.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/actualizar-pais/actualizar-pais.module.ts ***!
  \***********************************************************/
/*! exports provided: ActualizarPaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarPaisPageModule", function() { return ActualizarPaisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _actualizar_pais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actualizar-pais.page */ "./src/app/actualizar-pais/actualizar-pais.page.ts");
/* harmony import */ var _actualizar_pais_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actualizar-pais.resolver */ "./src/app/actualizar-pais/actualizar-pais.resolver.ts");








const routes = [
    {
        path: '',
        component: _actualizar_pais_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarPaisPage"],
        resolve: {
            data: _actualizar_pais_resolver__WEBPACK_IMPORTED_MODULE_7__["ActualizarPaisResolver"]
        }
    }
];
let ActualizarPaisPageModule = class ActualizarPaisPageModule {
};
ActualizarPaisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_actualizar_pais_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarPaisPage"]],
        providers: [_actualizar_pais_resolver__WEBPACK_IMPORTED_MODULE_7__["ActualizarPaisResolver"]]
    })
], ActualizarPaisPageModule);



/***/ }),

/***/ "./src/app/actualizar-pais/actualizar-pais.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/actualizar-pais/actualizar-pais.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdHVhbGl6YXItcGFpcy9hY3R1YWxpemFyLXBhaXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/actualizar-pais/actualizar-pais.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/actualizar-pais/actualizar-pais.page.ts ***!
  \*********************************************************/
/*! exports provided: ActualizarPaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarPaisPage", function() { return ActualizarPaisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ActualizarPaisPage = class ActualizarPaisPage {
    constructor(toastCtrl, loadingCtrl, formBuilder, firebaseService, webview, alertCtrl, route, router) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.load = false;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.route.data.subscribe(routeData => {
            let data = routeData['data'];
            if (data) {
                this.item = data;
            }
        });
        this.validations_form = this.formBuilder.group({
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.descripcion, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    onSubmit(value) {
        let data = {
            descripcion: value.descripcion,
        };
        this.firebaseService.actualizarPais(this.item.id, data)
            .then(res => {
            this.router.navigate(["/pais"]);
        });
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: 'Quieres borrar el registro? ' + this.item.title + '?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { }
                    },
                    {
                        text: 'Si',
                        handler: () => {
                            this.firebaseService.eliminarPais(this.item.id)
                                .then(res => {
                                this.router.navigate(["/pais"]);
                            }, err => console.log(err));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentLoading(loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
};
ActualizarPaisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ActualizarPaisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actualizar-pais',
        template: __webpack_require__(/*! raw-loader!./actualizar-pais.page.html */ "./node_modules/raw-loader/index.js!./src/app/actualizar-pais/actualizar-pais.page.html"),
        styles: [__webpack_require__(/*! ./actualizar-pais.page.scss */ "./src/app/actualizar-pais/actualizar-pais.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ActualizarPaisPage);



/***/ }),

/***/ "./src/app/actualizar-pais/actualizar-pais.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/actualizar-pais/actualizar-pais.resolver.ts ***!
  \*************************************************************/
/*! exports provided: ActualizarPaisResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarPaisResolver", function() { return ActualizarPaisResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



let ActualizarPaisResolver = class ActualizarPaisResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve(route) {
        return new Promise((resolve, reject) => {
            let itemId = route.paramMap.get('id');
            this.firebaseService.getPais(itemId)
                .then(data => {
                data.id = itemId;
                resolve(data);
            }, err => {
                reject(err);
            });
        });
    }
};
ActualizarPaisResolver.ctorParameters = () => [
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
ActualizarPaisResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], ActualizarPaisResolver);



/***/ })

}]);
//# sourceMappingURL=actualizar-pais-actualizar-pais-module-es2015.js.map