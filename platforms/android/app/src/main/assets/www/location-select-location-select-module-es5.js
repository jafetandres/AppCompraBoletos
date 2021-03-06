(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-select-location-select-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/location-select/location-select.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/location-select/location-select.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons left>\n            <button ion-button (click)=\"close()\">Cancel</button>\n        </ion-buttons>\n        <ion-buttons right>\n            <button [disabled]=\"saveDisabled\" ion-button (click)=\"save()\">Save</button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-toolbar>\n        <ion-searchbar [(ngModel)]=\"query\" (ionInput)=\"searchPlace()\"></ion-searchbar>\n    </ion-toolbar>\n\n    <ion-list>\n        <ion-item *ngFor=\"let place of places\" (touchstart)=\"selectPlace(place)\">{{place.description}}</ion-item>\n    </ion-list>\n\n</ion-header>\n\n<ion-content>\n\n    <div #pleaseConnect id=\"please-connect\">\n        <p>Please connect to the Internet...</p>\n    </div>\n\n    <div #map id=\"map\">\n        <ion-spinner></ion-spinner>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/location-select/location-select-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/location-select/location-select-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LocationSelectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSelectPageRoutingModule", function() { return LocationSelectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _location_select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-select.page */ "./src/app/location-select/location-select.page.ts");




var routes = [
    {
        path: '',
        component: _location_select_page__WEBPACK_IMPORTED_MODULE_3__["LocationSelectPage"]
    }
];
var LocationSelectPageRoutingModule = /** @class */ (function () {
    function LocationSelectPageRoutingModule() {
    }
    LocationSelectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LocationSelectPageRoutingModule);
    return LocationSelectPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/location-select/location-select.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/location-select/location-select.module.ts ***!
  \***********************************************************/
/*! exports provided: LocationSelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSelectPageModule", function() { return LocationSelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-select-routing.module */ "./src/app/location-select/location-select-routing.module.ts");
/* harmony import */ var _location_select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-select.page */ "./src/app/location-select/location-select.page.ts");







var LocationSelectPageModule = /** @class */ (function () {
    function LocationSelectPageModule() {
    }
    LocationSelectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _location_select_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationSelectPageRoutingModule"]
            ],
            declarations: [_location_select_page__WEBPACK_IMPORTED_MODULE_6__["LocationSelectPage"]]
        })
    ], LocationSelectPageModule);
    return LocationSelectPageModule;
}());



/***/ }),

/***/ "./src/app/location-select/location-select.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/location-select/location-select.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-location-select ion-list {\n  margin: 0 !important;\n}\npage-location-select #please-connect {\n  position: absolute;\n  background-color: #000;\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\npage-location-select #please-connect p {\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  position: relative;\n  font-size: 1.6em;\n  top: 30%;\n}\npage-location-select .scroll-content {\n  overflow: hidden;\n}\npage-location-select #map {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWZldGFuZHJlc2dhbHZlenF1ZXphZGEvRHJvcGJveC9Qcm95ZWN0b3NJb25pYy9BcHBDb21wcmFCb2xldG9zL3NyYy9hcHAvbG9jYXRpb24tc2VsZWN0L2xvY2F0aW9uLXNlbGVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvY2F0aW9uLXNlbGVjdC9sb2NhdGlvbi1zZWxlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7QUNETjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNGTjtBREtJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtBQ0hSO0FETUk7RUFDSSxnQkFBQTtBQ0pSO0FET0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbi1zZWxlY3QvbG9jYXRpb24tc2VsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtbG9jYXRpb24tc2VsZWN0IHtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgI3BsZWFzZS1jb25uZWN0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICBcbiAgICAjcGxlYXNlLWNvbm5lY3QgcCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICAgIHRvcDogMzAlO1xuICAgIH1cbiAgXG4gICAgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gIFxuICAgICNtYXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIFxuICB9IiwicGFnZS1sb2NhdGlvbi1zZWxlY3QgaW9uLWxpc3Qge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbnBhZ2UtbG9jYXRpb24tc2VsZWN0ICNwbGVhc2UtY29ubmVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC41O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxucGFnZS1sb2NhdGlvbi1zZWxlY3QgI3BsZWFzZS1jb25uZWN0IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuNmVtO1xuICB0b3A6IDMwJTtcbn1cbnBhZ2UtbG9jYXRpb24tc2VsZWN0IC5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5wYWdlLWxvY2F0aW9uLXNlbGVjdCAjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/location-select/location-select.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/location-select/location-select.page.ts ***!
  \*********************************************************/
/*! exports provided: LocationSelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSelectPage", function() { return LocationSelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/google-maps.service */ "./src/services/google-maps.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LocationSelectPage = /** @class */ (function () {
    function LocationSelectPage(zone, maps, platform, geolocation) {
        this.zone = zone;
        this.maps = maps;
        this.platform = platform;
        this.geolocation = geolocation;
        this.query = '';
        this.places = [];
        this.searchDisabled = true;
        this.saveDisabled = true;
    }
    LocationSelectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(function () {
            _this.autocompleteService = new google.maps.places.AutocompleteService();
            _this.placesService = new google.maps.places.PlacesService(_this.maps.map);
            _this.searchDisabled = false;
        });
    };
    LocationSelectPage.prototype.ngOnInit = function () {
    };
    LocationSelectPage.prototype.selectPlace = function (place) {
        var _this = this;
        this.places = [];
        var location = {
            lat: null,
            lng: null,
            name: place.name
        };
        this.placesService.getDetails({ placeId: place.place_id }, function (details) {
            _this.zone.run(function () {
                location.name = details.name;
                location.lat = details.geometry.location.lat();
                location.lng = details.geometry.location.lng();
                _this.saveDisabled = false;
                _this.maps.map.setCenter({ lat: location.lat, lng: location.lng });
                _this.location = location;
            });
        });
    };
    LocationSelectPage.prototype.searchPlace = function () {
        var _this = this;
        this.saveDisabled = true;
        if (this.query.length > 0 && !this.searchDisabled) {
            var config = {
                types: ['geocode'],
                input: this.query
            };
            this.autocompleteService.getPlacePredictions(config, function (predictions, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                    _this.places = [];
                    predictions.forEach(function (prediction) {
                        _this.places.push(prediction);
                    });
                }
            });
        }
        else {
            this.places = [];
        }
    };
    LocationSelectPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: src_services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LocationSelectPage.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pleaseConnect', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LocationSelectPage.prototype, "pleaseConnect", void 0);
    LocationSelectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-select',
            template: __webpack_require__(/*! raw-loader!./location-select.page.html */ "./node_modules/raw-loader/index.js!./src/app/location-select/location-select.page.html"),
            styles: [__webpack_require__(/*! ./location-select.page.scss */ "./src/app/location-select/location-select.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], src_services_google_maps_service__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], LocationSelectPage);
    return LocationSelectPage;
}());



/***/ })

}]);
//# sourceMappingURL=location-select-location-select-module-es5.js.map