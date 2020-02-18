(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actualizar-provincia-actualizar-provincia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/actualizar-provincia/actualizar-provincia.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/actualizar-provincia/actualizar-provincia.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"pais\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Provincia</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n        <ion-item>\n            <ion-label>Seleccione un Pais</ion-label>\n            <ion-select formControlName=\"pais\" >\n              <ion-select-option *ngFor=\"let pais of paises\" ></ion-select-option>\n            </ion-select>\n          </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Descripcion</ion-label>\n        <ion-input type=\"text\" formControlName=\"descripcion\"></ion-input>\n      </ion-item>\n  \n      <ion-button class=\"submit-button\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Guardar</ion-button>\n    </form>\n    <ion-button class=\"delete-button\" expand=\"block\" color=\"danger\" (click)=\"delete()\">Eliminar</ion-button>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/actualizar-provincia/actualizar-provincia.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/actualizar-provincia/actualizar-provincia.module.ts ***!
  \*********************************************************************/
/*! exports provided: ActualizarProvinciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarProvinciaPageModule", function() { return ActualizarProvinciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _actualizar_provincia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actualizar-provincia.page */ "./src/app/actualizar-provincia/actualizar-provincia.page.ts");
/* harmony import */ var _actualizar_provincia_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actualizar-provincia.resolver */ "./src/app/actualizar-provincia/actualizar-provincia.resolver.ts");








const routes = [
    {
        path: '',
        component: _actualizar_provincia_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarProvinciaPage"],
        resolve: {
            data: _actualizar_provincia_resolver__WEBPACK_IMPORTED_MODULE_7__["ActualizarProvinciaResolver"]
        }
    }
];
let ActualizarProvinciaPageModule = class ActualizarProvinciaPageModule {
};
ActualizarProvinciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_actualizar_provincia_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarProvinciaPage"]],
        providers: [_actualizar_provincia_resolver__WEBPACK_IMPORTED_MODULE_7__["ActualizarProvinciaResolver"]]
    })
], ActualizarProvinciaPageModule);



/***/ }),

/***/ "./src/app/actualizar-provincia/actualizar-provincia.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/actualizar-provincia/actualizar-provincia.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdHVhbGl6YXItcHJvdmluY2lhL2FjdHVhbGl6YXItcHJvdmluY2lhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/actualizar-provincia/actualizar-provincia.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/actualizar-provincia/actualizar-provincia.page.ts ***!
  \*******************************************************************/
/*! exports provided: ActualizarProvinciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarProvinciaPage", function() { return ActualizarProvinciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");








let ActualizarProvinciaPage = class ActualizarProvinciaPage {
    constructor(toastCtrl, loadingCtrl, formBuilder, firebaseService, webview, alertCtrl, route, router, afs) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.afs = afs;
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
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.pais, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.descripcion, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    onSubmit(value) {
        let data = {
            descripcion: value.descripcion,
        };
        this.firebaseService.actualizarProvincia(this.item.id, data)
            .then(res => {
            this.router.navigate(["/provincia"]);
        });
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: 'Quieres borrar el registro ' + this.item.descripcion + '?',
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
                            this.firebaseService.eliminarProvincia(this.item.id)
                                .then(res => {
                                this.router.navigate(["/provincia"]);
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
ActualizarProvinciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
ActualizarProvinciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actualizar-provincia',
        template: __webpack_require__(/*! raw-loader!./actualizar-provincia.page.html */ "./node_modules/raw-loader/index.js!./src/app/actualizar-provincia/actualizar-provincia.page.html"),
        styles: [__webpack_require__(/*! ./actualizar-provincia.page.scss */ "./src/app/actualizar-provincia/actualizar-provincia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
], ActualizarProvinciaPage);



/***/ }),

/***/ "./src/app/actualizar-provincia/actualizar-provincia.resolver.ts":
/*!***********************************************************************!*\
  !*** ./src/app/actualizar-provincia/actualizar-provincia.resolver.ts ***!
  \***********************************************************************/
/*! exports provided: ActualizarProvinciaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarProvinciaResolver", function() { return ActualizarProvinciaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



let ActualizarProvinciaResolver = class ActualizarProvinciaResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve(route) {
        return new Promise((resolve, reject) => {
            let itemId = route.paramMap.get('id');
            this.firebaseService.getProvincia(itemId)
                .then(data => {
                data.id = itemId;
                resolve(data);
            }, err => {
                reject(err);
            });
        });
    }
};
ActualizarProvinciaResolver.ctorParameters = () => [
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
ActualizarProvinciaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], ActualizarProvinciaResolver);



/***/ })

}]);
//# sourceMappingURL=actualizar-provincia-actualizar-provincia-module-es2015.js.map