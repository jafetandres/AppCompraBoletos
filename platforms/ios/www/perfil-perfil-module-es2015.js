(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Perfil</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div>\n      <ion-row>\n        <ion-col size=\"6\" offset=\"3\">\n          <img [src]=\"image\" alt=\"this is the image\"/>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" offset=\"3\">\n          <ion-button fill=\"outline\" expand=\"block\" size=\"small\" (click)=\"openImagePicker()\">Cambiar Foto</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n        <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Nombre</ion-label>\n            <ion-input type=\"text\" formControlName=\"displayName\"></ion-input>\n          </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Correo</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Description</ion-label>\n        <ion-input type=\"text\" formControlName=\"description\"></ion-input>\n      </ion-item> -->\n      <ion-button class=\"submit-button\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Guardar</ion-button>\n    </form>\n    <!-- <ion-button class=\"delete-button\" expand=\"block\" color=\"danger\" (click)=\"delete()\">Delete</ion-button> -->\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");
/* harmony import */ var _perfil_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perfil.resolver */ "./src/app/perfil/perfil.resolver.ts");








const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"],
        resolve: {
            data: _perfil_resolver__WEBPACK_IMPORTED_MODULE_7__["PerfilResolver"]
        }
    }
];
let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]],
        providers: [
            _perfil_resolver__WEBPACK_IMPORTED_MODULE_7__["PerfilResolver"]
        ]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");









let PerfilPage = class PerfilPage {
    constructor(loadingCtrl, authService, router, route, formBuilder, toastCtrl, imagePicker, webview, firebaseService) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
        this.webview = webview;
        this.firebaseService = firebaseService;
    }
    ngOnInit() {
        if (this.route && this.route.data) {
            this.getData();
        }
    }
    getData() {
        this.route.data.subscribe(routeData => {
            let data = routeData['data'];
            if (data) {
                this.usuario = data;
                this.image = this.usuario.photoURL;
                console.log("ruta imagen perfil" + this.usuario.photoURL);
                //  this.image = this.item.image;
            }
        });
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.usuario.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.usuario.displayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    }
    onSubmit(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = {
                email: value.email,
                displayName: value.displayName,
                photoURL: this.image
            };
            this.firebaseService.actualizarPerfil(value.photoURL, data)
                .then(res => {
                this.router.navigate(["/home"]);
            });
        });
    }
    openImagePicker() {
        this.imagePicker.hasReadPermission()
            .then((result) => {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then((results) => {
                    for (var i = 0; i < results.length; i++) {
                        this.uploadImageToFirebase(results[i]);
                    }
                }, (err) => console.log(err));
            }
        }, (err) => {
            console.log(err);
        });
    }
    uploadImageToFirebase(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Por favor espere...'
            });
            const toast = yield this.toastCtrl.create({
                message: 'La imagen ha sido actualizada.',
                duration: 3000
            });
            this.presentLoading(loading);
            let image_src = this.webview.convertFileSrc(image);
            //uploads img to firebase storage
            this.firebaseService.uploadImage(image_src)
                .then(photoURL => {
                this.image = photoURL;
                loading.dismiss();
                toast.present();
            }, err => {
                console.log(err);
            });
        });
    }
    presentLoading(loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"] }
];
PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: __webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html"),
        styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"]])
], PerfilPage);



/***/ }),

/***/ "./src/app/perfil/perfil.resolver.ts":
/*!*******************************************!*\
  !*** ./src/app/perfil/perfil.resolver.ts ***!
  \*******************************************/
/*! exports provided: PerfilResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilResolver", function() { return PerfilResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");



let PerfilResolver = class PerfilResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve(route) {
        return new Promise((resolve, reject) => {
            this.firebaseService.getPerfil()
                .then(data => {
                resolve(data);
            }, err => {
                reject(err);
            });
        });
    }
};
PerfilResolver.ctorParameters = () => [
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
PerfilResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], PerfilResolver);



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es2015.js.map