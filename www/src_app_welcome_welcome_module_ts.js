"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_welcome_welcome_module_ts"],{

/***/ 71640:
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 78822);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 35783:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 71640);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 78822);







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 78822:
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./welcome.page.html */ 4656);
/* harmony import */ var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss */ 5604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translate-config.service */ 47464);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);











let WelcomePage = class WelcomePage {
    constructor(api, diagnostic, storage, httpClient, http, navCtrl, translateSevice) {
        this.api = api;
        this.diagnostic = diagnostic;
        this.storage = storage;
        this.httpClient = httpClient;
        this.http = http;
        this.navCtrl = navCtrl;
        this.translateSevice = translateSevice;
    }
    ngOnInit() { }
    changeLang($event) {
        console.log($event);
        this.selectedLang = $event.detail.value;
        // this.translateSevice.setLanguage('fr')
    }
    saveLanguage() {
        this.translateSevice.setLanguage(this.selectedLang);
        this.navCtrl.navigateRoot(['/connexion']);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_7__.Http },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_4__.TranslateConfigService }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-welcome',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,
        _angular_http__WEBPACK_IMPORTED_MODULE_7__.Http,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_4__.TranslateConfigService])
], WelcomePage);



/***/ }),

/***/ 4656:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/welcome/welcome.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content class=\"main-content\">\n  <div class=\"overlay\"></div>\n  <section style=\"padding-top: 40%;\">\n\n          <ion-row>\n              <ion-col class=\"login-logocenter ion-text-center\">\n                  <img style=\"padding: 0% 10% 0% 10%;\" src=\"assets/images/logo.png\"/>\n              </ion-col>\n          </ion-row>\n        \n    <ion-row style=\"display: flex;\n    flex-direction: row;\n    justify-content: center;\">\n      <ion-text style=\"color: white;\n      font-weight: bold;\">Please Select Language</ion-text>\n    </ion-row>\n    <div style=\"display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-top: 7%;\">\n      <div id=\"whiteCard\">\n        <ion-radio-group (ionChange)=\"changeLang($event)\"> \n        <ion-item lines=\"none\" style=\"margin-top: 2%;\">\n          <img src=\"assets/UKFlag.svg\">\n          <ion-label style=\"padding-left: 5%;\">English</ion-label>\n          <ion-radio color=\"secondary\" value=\"en\" ></ion-radio>\n        </ion-item>\n    \n        <ion-item lines=\"none\" style=\"margin-top: 7%;\">\n          <img src=\"assets/franceflag.svg\">\n          <ion-label style=\"padding-left: 5%;\">French</ion-label>\n          <ion-radio color=\"secondary\" value=\"fr\" ></ion-radio>\n        </ion-item>\n        </ion-radio-group>\n        <ion-row style=\"display: flex;\n        flex-direction: row-reverse;\n        margin-top: 2%;\n        margin-right: 5%;\">\n          <ion-text style=\"color: #D3C117;font-weight: bold;\" (click)=\"saveLanguage()\">\n            Save\n          </ion-text>\n        </ion-row>\n      </div>\n     \n    </div>\n  \n  \n  </section>\n</ion-content>\n\n");

/***/ }),

/***/ 5604:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".global-page {\n  font-weight: inherit;\n}\n.global-page .started-row {\n  width: 94%;\n  margin-left: 3%;\n  margin-top: 20px;\n}\n.global-page .started-row ion-label {\n  font-weight: bold;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.global-page .started-row .textwith-label {\n  padding: 10px 0px;\n  border-bottom: solid thin #cccccc;\n}\n.global-page .started-row .textwith-label ion-input {\n  display: inline-block;\n  text-align: left !important;\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  padding-left: 0px;\n  color: #cccccc;\n  margin-top: 3px;\n  --placeholder-color: #ffffff;\n}\n.global-page .started-row .textwith-label ion-input input {\n  text-align: left;\n  margin: 0px;\n  margin-top: 8px;\n  font-weight: initial;\n  --placeholder-color: #ffffff;\n}\n.global-page .started-row .started_txt {\n  max-width: 30px;\n  width: 30px;\n  margin: 0px;\n  padding: 12px 0px 0px 0px;\n  height: auto;\n  font-size: 16px;\n}\n.global-page .started-row .started_txt img {\n  width: 20px;\n}\n.global-page .started-row small {\n  font-size: 16px;\n  color: #cccccc;\n  margin: 10px auto;\n  text-align: center;\n  border-bottom: solid thin #7b7b7b;\n}\n.global-page .started-row .login-button {\n  width: 55%;\n  margin: 30px auto 15px auto;\n  font-weight: bold;\n  background-color: #D3C117;\n}\n.global-page .started-row .ios .login-button {\n  width: 55%;\n  margin: 30px auto 15px auto;\n  font-weight: bold;\n}\n.showhighlite {\n  border-top: 3px solid #D3C117 !important;\n  padding-top: 20px !important;\n  color: #D3C117 !important;\n  font-weight: bold !important;\n}\n.showlowlite {\n  border-top: 3px solid #B5A9A2 !important;\n  padding-top: 20px !important;\n  color: #B5A9A2 !important;\n}\n.started-row {\n  width: 100%;\n}\n.started-row ion-label {\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.started-row .started_txt {\n  max-width: 40px;\n  width: 40px;\n  margin: 0px;\n  padding: 12px 0px 0px 0px;\n  height: auto;\n  font-size: 16px;\n}\n.started-row .center-head {\n  font-size: 24px !important;\n  color: #ffffff;\n  margin: 30px auto 10px auto;\n  text-align: center;\n  font-weight: initial;\n}\n.started-row .inscription-login-button {\n  width: 60%;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1px;\n  border-radius: 20px;\n  margin: 15px auto;\n}\n.started-row .ios .inscription-login-button {\n  width: 60%;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1px;\n  border-radius: 20px;\n  margin: 15px auto;\n}\n#whiteCard {\n  height: 160px;\n  width: 280px;\n  background: white;\n}\nion-content.main-content {\n  --background: url('login-bg.svg') no-repeat 52% center/cover;\n  text-align: center;\n  justify-content: center;\n}\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n.invalid-feedback {\n  font-size: 13px;\n  color: red;\n  background: white;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjtBQUFJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVOO0FBRE07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUdSO0FBQU07RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0FBRVI7QUFEUTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBR1Y7QUFGVTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FBSVo7QUFDTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDUjtBQUNNO0VBQ0UsV0FBQTtBQUNSO0FBQ007RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUNSO0FBQ007RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFDTTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFLRTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBRko7QUFLRTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUZKO0FBT0k7RUFDRSxXQUFBO0FBSk47QUFLTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUhSO0FBS007RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSFI7QUFLTTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUhSO0FBS007RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSFI7QUFLTTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQU9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0k7RUFDRSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFKTjtBQU9JO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQUpOO0FBUU07RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMUiIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbG9iYWwtcGFnZSB7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgLnN0YXJ0ZWQtcm93IHtcbiAgICAgIHdpZHRoOiA5NCU7XG4gICAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgXG4gICAgICAudGV4dHdpdGgtbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICBjb2xvcjogI2NjY2NjYztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnN0YXJ0ZWRfdHh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMHB4IDBweCAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLnN0YXJ0ZWRfdHh0IGltZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgfVxuICAgICAgc21hbGwge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICM3YjdiN2I7XG4gICAgICB9XG4gICAgICAubG9naW4tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMTVweCBhdXRvO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzQzExNztcbiAgICAgIH1cbiAgICAgIC5pb3MgLmxvZ2luLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBcbiAgLnNob3doaWdobGl0ZXtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0QzQzExNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNEM0MxMTcgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyBcbiAgfVxuICBcbiAgLnNob3dsb3dsaXRle1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjQjVBOUEyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0I1QTlBMiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBcbiAgXG4gICAgLnN0YXJ0ZWQtcm93IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgLnN0YXJ0ZWRfdHh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMHB4IDBweCAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLmNlbnRlci1oZWFkIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBtYXJnaW46IDMwcHggYXV0byAxMHB4IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICAuaW5zY3JpcHRpb24tbG9naW4tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAgIH1cbiAgICAgIC5pb3MgLmluc2NyaXB0aW9uLWxvZ2luLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgICB9XG4gICAgfVxuICBcbiAgI3doaXRlQ2FyZHtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICBcbiAgICBpb24tY29udGVudC5tYWluLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi1iZy5zdmcnKSBuby1yZXBlYXQgNTIlIGNlbnRlci9jb3ZlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIFxuICBcbiAgICAgIC5pbnZhbGlkLWZlZWRiYWNre1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgXG4gICAgICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts.js.map