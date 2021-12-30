"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forget-password_forget-password_module_ts"],{

/***/ 127:
/*!*******************************************************************!*\
  !*** ./src/app/forget-password/forget-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordPageRoutingModule": () => (/* binding */ ForgetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password.page */ 69698);




const routes = [
    {
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordPage
    }
];
let ForgetPasswordPageRoutingModule = class ForgetPasswordPageRoutingModule {
};
ForgetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetPasswordPageRoutingModule);



/***/ }),

/***/ 19650:
/*!***********************************************************!*\
  !*** ./src/app/forget-password/forget-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordPageModule": () => (/* binding */ ForgetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password-routing.module */ 127);
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-password.page */ 69698);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let ForgetPasswordPageModule = class ForgetPasswordPageModule {
};
ForgetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgetPasswordPage]
    })
], ForgetPasswordPageModule);



/***/ }),

/***/ 69698:
/*!*********************************************************!*\
  !*** ./src/app/forget-password/forget-password.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordPage": () => (/* binding */ ForgetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forget_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./forget-password.page.html */ 72351);
/* harmony import */ var _forget_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-password.page.scss */ 68544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 78713);






let ForgetPasswordPage = class ForgetPasswordPage {
    constructor(api, storage) {
        this.api = api;
        this.storage = storage;
    }
    ngOnInit() {
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_lang').then((lang) => {
                if (lang == "English") {
                    this.English = true;
                }
                else {
                    this.English = false;
                }
                this.uid = user_id;
                console.log(this.uid);
            });
        });
    }
    forgetpassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('user_id', this.uid);
            formData.append('user_email', this.email);
            let res = yield this.api.postapi("mForgot/user", formData);
            if (res.status == 1) {
                if (this.English) {
                    this.api.toast("Password has been sent on your email ID");
                }
                else {
                    this.api.toast("Le mot de passe a été envoyé sur votre e-mail ID");
                }
                this.api.Navigate("connexion");
            }
            else {
                if (this.English) {
                    var msg = "Email Not exists.";
                }
                else {
                    var msg = "E-mail n'existe pas.";
                }
                this.api.toast(msg);
            }
        });
    }
};
ForgetPasswordPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage }
];
ForgetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forget-password',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forget_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forget_password_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService, _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage])
], ForgetPasswordPage);



/***/ }),

/***/ 72351:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/forget-password/forget-password.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen forceOverscroll=\"false\">\n  <ion-header no-border slot=\"fixed\">\n    <ion-toolbar class=\"terms-headersection\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" defaultHref=\"connexion\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <div\n    class=\"bg-image-full\"\n    style=\"display: flex; align-items: center; justify-content: center\"\n  >\n    <section>\n      <div>\n        <ion-row>\n          <ion-col class=\"login-logocenter\">\n            <img style=\"padding: 0% 10% 0% 10%\" src=\"assets/images/logo.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col\n            style=\"font-family: montserrat-medium\"\n            class=\"question-count\"\n            [translate]=\"'FORGOTPASS.Text1'\"\n          ></ion-col>\n        </ion-row>\n        <div class=\"started-row fade\">\n          <ion-row class=\"textwith-label\">\n            <ion-label color=\"gray\" class=\"started_txt\">\n              <img src=\"assets/images/message.png\" />\n            </ion-label>\n            <ion-input\n              type=\"email\"\n              placeholder=\"Email\"\n              [(ngModel)]=\"email\"\n            ></ion-input>\n          </ion-row>\n\n          <ion-row>\n            <button\n              (click)=\"forgetpassword()\"\n              ion-button\n              class=\"global-btn themecolor login-button\"\n              [translate]=\"'FORGOTPASS.Text2'\"\n            ></button>\n          </ion-row>\n        </div>\n      </div>\n    </section>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 68544:
/*!***********************************************************!*\
  !*** ./src/app/forget-password/forget-password.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".started-row {\n  width: 94%;\n  margin-left: 3%;\n  margin-top: 20px;\n}\n.started-row ion-label {\n  font-weight: bold;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.started-row .textwith-label {\n  padding: 10px 0px;\n  border-bottom: solid thin #cccccc;\n}\n.started-row .textwith-label ion-input {\n  display: inline-block;\n  text-align: left !important;\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  padding-left: 0px;\n  color: #cccccc;\n  margin-top: 3px;\n  --placeholder-color: #ffffff;\n}\n.started-row .textwith-label ion-input input {\n  text-align: left;\n  margin: 0px;\n  margin-top: 8px;\n  font-weight: initial;\n  --placeholder-color: #ffffff;\n}\n.started-row .started_txt {\n  max-width: 30px;\n  width: 30px;\n  margin: 0px;\n  padding: 12px 0px 0px 0px;\n  height: auto;\n  font-size: 16px;\n}\n.started-row .started_txt img {\n  width: 20px;\n}\n.started-row small {\n  font-size: 16px;\n  color: #cccccc;\n  margin: 10px auto;\n  text-align: center;\n  border-bottom: solid thin #7b7b7b;\n}\n.started-row .login-button {\n  width: 55%;\n  margin: 30px auto 15px auto;\n}\n.started-row .ios .login-button {\n  width: 55%;\n  margin: 30px auto 15px auto;\n}\n.started-row {\n  width: 100%;\n}\n.started-row ion-label {\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.started-row .started_txt {\n  max-width: 40px;\n  width: 40px;\n  margin: 0px;\n  padding: 12px 0px 0px 0px;\n  height: auto;\n  font-size: 16px;\n}\n.started-row .center-head {\n  font-size: 24px !important;\n  color: #ffffff;\n  margin: 30px auto 10px auto;\n  text-align: center;\n  font-weight: initial;\n}\n.started-row .inscription-login-button {\n  width: 180px;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1px;\n  border-radius: 20px;\n  margin: 15px auto;\n}\n.bg-image-full {\n  min-height: 100%;\n  background: url('login-bg.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n}\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n.question-count {\n  color: #ffaa00;\n  margin-bottom: 10px;\n  font-size: 18px !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUFJO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFFTjtBQURNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFHUjtBQUNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBQ0o7QUFDRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQUNKO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUdBO0VBQ0UsV0FBQTtBQUFGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBR0E7RUFHRSxnQkFBQTtFQUVBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQVlBO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQVRGO0FBV0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBUkYiLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydGVkLXJvdyB7XG4gIHdpZHRoOiA5NCU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC50ZXh0d2l0aC1sYWJlbCB7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgIGlvbi1pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgaW5wdXQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnN0YXJ0ZWRfdHh0IHtcbiAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTJweCAwcHggMHB4IDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5zdGFydGVkX3R4dCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNjY2NjY2M7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gIzdiN2I3YjtcbiAgfVxuICAubG9naW4tYnV0dG9uIHtcbiAgICB3aWR0aDogNTUlO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDE1cHggYXV0bztcbiAgfVxuICAuaW9zIC5sb2dpbi1idXR0b24ge1xuICAgIHdpZHRoOiA1NSU7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMTVweCBhdXRvO1xuICB9XG59XG5cbi5zdGFydGVkLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5zdGFydGVkX3R4dCB7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMHB4IDBweCAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY2VudGVyLWhlYWQge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDEwcHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XG4gIH1cbiAgLmluc2NyaXB0aW9uLWxvZ2luLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgfVxufVxuXG4uYmctaW1hZ2UtZnVsbCB7XG4gIC8vIGlmIGNvbnRlbnQgZG9lcyBub3Qgb2NjdXB5IHdob2xlIGhlaWdodCB0aGVuIGl0IHNob3dzIHdoaXRlIGJnIGF0IGJvdHRvbVxuXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJnLnBuZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLy8gYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJnLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuLy8gaW9uLWNvbnRlbnQge1xuLy8gICAtLWJhY2tncm91bmQ6IG5vbmU7XG4vLyAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iZy5wbmcnKTtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbi8vIH1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5xdWVzdGlvbi1jb3VudCB7XG4gIGNvbG9yOiAjZmZhYTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_forget-password_forget-password_module_ts.js.map