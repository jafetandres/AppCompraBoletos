(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-task-new-task-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/new-task/new-task.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-task/new-task.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>New Task</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div>\n      <ion-row no-padding>\n        <ion-col size=\"6\" offset=\"3\">\n          <img [src]=\"image\" alt=\"this is the image\"/>\n        </ion-col>\n      </ion-row>\n      <ion-row no-padding>\n        <ion-col size=\"6\" offset=\"3\">\n          <ion-button fill=\"outline\" expand=\"block\" size=\"small\" (click)=\"openImagePicker()\">Change Picture</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"onSubmit(validations_form.value)\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Title</ion-label>\n        <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Description</ion-label>\n        <ion-input type=\"text\" formControlName=\"description\"></ion-input>\n      </ion-item>\n      <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Create</ion-button>\n    </form>\n  </ion-content>"

/***/ }),

/***/ "./src/app/new-task/new-task.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-task/new-task.module.ts ***!
  \*********************************************/
/*! exports provided: NewTaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskPageModule", function() { return NewTaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-task.page */ "./src/app/new-task/new-task.page.ts");







const routes = [
    {
        path: '',
        component: _new_task_page__WEBPACK_IMPORTED_MODULE_6__["NewTaskPage"]
    }
];
let NewTaskPageModule = class NewTaskPageModule {
};
NewTaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]],
        declarations: [_new_task_page__WEBPACK_IMPORTED_MODULE_6__["NewTaskPage"]]
    })
], NewTaskPageModule);



/***/ }),

/***/ "./src/app/new-task/new-task.page.scss":
/*!*********************************************!*\
  !*** ./src/app/new-task/new-task.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy10YXNrL25ldy10YXNrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/new-task/new-task.page.ts":
/*!*******************************************!*\
  !*** ./src/app/new-task/new-task.page.ts ***!
  \*******************************************/
/*! exports provided: NewTaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskPage", function() { return NewTaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");








let NewTaskPage = class NewTaskPage {
    constructor(imagePicker, toastCtrl, loadingCtrl, router, formBuilder, firebaseService, webview) {
        this.imagePicker = imagePicker;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.webview = webview;
    }
    ngOnInit() {
        this.resetFields();
    }
    resetFields() {
        this.image = "../assets/imgs/default_image.jpg";
        this.validations_form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    onSubmit(value) {
        let data = {
            title: value.title,
            description: value.description,
            image: this.image
        };
        this.firebaseService.createTask(data)
            .then(res => {
            this.router.navigate(["/home"]);
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
                        // this.uploadImageToFirebase(results[i]);
                    }
                }, (err) => console.log(err));
            }
        }, (err) => {
            console.log(err);
        });
    }
    // async uploadImageToFirebase(image){
    //   const loading = await this.loadingCtrl.create({
    //     message: 'Please wait...'
    //   });
    //   const toast = await this.toastCtrl.create({
    //     message: 'Image was updated successfully',
    //     duration: 3000
    //   });
    //   this.presentLoading(loading);
    //   let image_src = this.webview.convertFileSrc(image);
    //   let randomId = Math.random().toString(36).substr(2, 5);
    //   //uploads img to firebase storage
    //   this.firebaseService.uploadImage(image_src, randomId)
    //   .then(photoURL => {
    //     this.image = photoURL;
    //     loading.dismiss();
    //     toast.present();
    //   }, err =>{
    //     console.log(err);
    //   })
    // }
    presentLoading(loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
};
NewTaskPage.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] }
];
NewTaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-task',
        template: __webpack_require__(/*! raw-loader!./new-task.page.html */ "./node_modules/raw-loader/index.js!./src/app/new-task/new-task.page.html"),
        styles: [__webpack_require__(/*! ./new-task.page.scss */ "./src/app/new-task/new-task.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"]])
], NewTaskPage);



/***/ })

}]);
//# sourceMappingURL=new-task-new-task-module-es2015.js.map