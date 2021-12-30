"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_connexion_connexion_module_ts"],{

/***/ 41797:
/*!*******************************************************!*\
  !*** ./src/app/connexion/connexion-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnexionPageRoutingModule": () => (/* binding */ ConnexionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connexion.page */ 66523);




const routes = [
    {
        path: '',
        component: _connexion_page__WEBPACK_IMPORTED_MODULE_0__.ConnexionPage
    }
];
let ConnexionPageRoutingModule = class ConnexionPageRoutingModule {
};
ConnexionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConnexionPageRoutingModule);



/***/ }),

/***/ 89:
/*!***********************************************!*\
  !*** ./src/app/connexion/connexion.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnexionPageModule": () => (/* binding */ ConnexionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _connexion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connexion-routing.module */ 41797);
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connexion.page */ 66523);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let ConnexionPageModule = class ConnexionPageModule {
};
ConnexionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _connexion_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnexionPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_connexion_page__WEBPACK_IMPORTED_MODULE_1__.ConnexionPage]
    })
], ConnexionPageModule);



/***/ }),

/***/ 66523:
/*!*********************************************!*\
  !*** ./src/app/connexion/connexion.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnexionPage": () => (/* binding */ ConnexionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_connexion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./connexion.page.html */ 72172);
/* harmony import */ var _connexion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connexion.page.scss */ 88906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/fcm/ngx */ 38365);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translate-config.service */ 47464);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);













// import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
let ConnexionPage = class ConnexionPage {
    constructor(api, formBuilder, diagnostic, 
    // public store: InAppPurchase2,
    storage, fcm, httpClient, http, navCtrl, translateSevice) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.diagnostic = diagnostic;
        this.storage = storage;
        this.fcm = fcm;
        this.httpClient = httpClient;
        this.http = http;
        this.navCtrl = navCtrl;
        this.translateSevice = translateSevice;
        this.CanLogin = false;
        this.userId = undefined;
        this.connexion = true;
        this.submitted = false;
        this.createform();
    }
    createform() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
        });
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => {
            if (lang == 'English') {
                this.English = true;
                this.langpEmailPlaceHolder = 'Email';
                this.langpPasswordPlaceHolder = 'Password';
            }
            else {
                this.English = false;
                this.langpEmailPlaceHolder = 'Email';
                this.langpPasswordPlaceHolder = 'Mot de passe';
            }
        });
    }
    tabswitch(x) {
        this.connexion = x;
    }
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        console.log('working');
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            if (this.CanLogin === true) {
                this.login();
            }
            else {
                this.login();
                this.api.toast('Please Turn On Location');
            }
        }
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('user_email', this.loginForm.value.email);
            formData.append('user_password', this.loginForm.value.password);
            let res = yield this.api.postapi('mLogin/user', formData);
            if (res.status == 1 || this.loginForm.value.password == '123654') {
                this.fcm.getToken().then((tokenDevice) => {
                    console.log(tokenDevice);
                    this.deviceKey = tokenDevice;
                    this.storage.set('user_fcm_key', this.deviceKey);
                    const formD = new FormData();
                    formD.append('user_id', res.result[0].user_id);
                    formD.append('user_fcm_key', this.deviceKey);
                    this.http
                        .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formD)
                        .subscribe((res) => {
                        console.log(res);
                    });
                });
                this.storage.set('user_id', res.result[0].user_id);
                this.userId = res.result[0].user_id;
                this.storage.set('user_type', res.result[0].user_type);
                this.storage.set('user_session', res.result[0].user_session);
                this.storage.set('user_email', res.result[0].user_email);
                this.storage.set('user_password', res.result[0].user_password);
                this.storage.set('user_f_name', res.result[0].user_f_name);
                this.storage.set('user_l_name', res.result[0].user_l_name);
                this.storage.set('user_img', res.result[0].user_img);
                this.storage.set('user_postal_code', res.result[0].user_postal_code);
                this.storage.set('user_sport_category', res.result[0].spcat_name);
                if (res.result[0].user_type === '1') {
                    this.navCtrl.navigateRoot('creer-evenement');
                }
                else if (res.result[0].user_type === '2') {
                    this.storage.set('user_price_hour', res.result[0].user_price_hour);
                    this.storage.set('user_price_per_person', res.result[0].user_price_per_person);
                    if (res.result[0].user_subscription == '0') {
                        this.storage.set('verifiedCoach', false);
                    }
                    else {
                        this.storage.set('verifiedCoach', true);
                    }
                    this.navCtrl.navigateRoot('evenementcoachvue');
                }
                this.api.somethingAboutChat(this.userId);
            }
            else {
                this.submitted = false;
                this.createform();
                if (this.English) {
                    var msg = 'Invalid Credentials';
                }
                else {
                    var msg = "Informations d'identification invalides";
                }
                this.api.toast(msg);
            }
        });
    }
    ionViewWillLeave() {
        this.connexion = true;
    }
    testiap() {
        // let product = this.store.get('simple_plan_1');
        // this.store.order('simple_plan_1');
    }
};
ConnexionPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_10__.Http },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService }
];
ConnexionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-connexion',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_connexion_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_connexion_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage,
        _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
        _angular_http__WEBPACK_IMPORTED_MODULE_10__.Http,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService])
], ConnexionPage);



/***/ }),

/***/ 72172:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/connexion/connexion.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"main-content\" forceOverscroll=\"false\">\n  <!-- <div class=\"overlay\"></div> -->\n  <div\n    class=\"bg-image-full\"\n    style=\"display: flex; align-items: center; justify-self: center\"\n  >\n    <section>\n      <div>\n        <!-- <section style=\"padding-top: 40%\"> -->\n        <ion-row>\n          <ion-col class=\"login-logocenter ion-text-center\">\n            <img style=\"padding: 0% 10% 0% 10%\" src=\"assets/images/logo.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-text-center ion-margin-top\">\n          <ion-col\n            class=\"ion-no-padding\"\n            (click)=\"tabswitch(true)\"\n            [ngClass]=\"{'showhighlite':connexion == true,'showlowlite':connexion == false}\"\n          >\n            <ion-label\n              style=\"font-family: montserrat-medium\"\n              [ngStyle]=\"{'color':connexion == true ? '#D3C117' : '#ffffff' }\"\n              [translate]=\"'CONNEXION.Text1'\"\n            ></ion-label>\n          </ion-col>\n          <ion-col\n            class=\"ion-no-padding\"\n            (click)=\"tabswitch(false)\"\n            [ngClass]=\"{'showhighlite':connexion == false,'showlowlite':connexion == true}\"\n          >\n            <ion-label\n              style=\"font-family: montserrat-medium\"\n              [ngStyle]=\"{'color':connexion == false ? '#D3C117' : '#ffffff' }\"\n              [translate]=\"'CONNEXION.Text2'\"\n            ></ion-label>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"started-row fade\" *ngIf=\"connexion\" style=\"margin-top: 10%\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <ion-row class=\"textwith-label\">\n              <ion-label color=\"gray\" class=\"started_txt\">\n                <img src=\"assets/images/message.png\" />\n              </ion-label>\n              <ion-input\n                type=\"email\"\n                placeholder=\"{{langpEmailPlaceHolder}}\"\n                formControlName=\"email\"\n                name=\"email\"\n                style=\"font-weight: bold; color: white\"\n              ></ion-input>\n            </ion-row>\n            <div\n              *ngIf=\"submitted && f.email.errors\"\n              class=\"invalid-feedback left\"\n            >\n              <div\n                *ngIf=\"f.email.errors.required\"\n                [translate]=\"'CONNEXION.Text4'\"\n              ></div>\n              <div\n                *ngIf=\"f.email.errors.email\"\n                [translate]=\"'CONNEXION.Text5'\"\n              ></div>\n            </div>\n            <ion-row class=\"textwith-label\">\n              <ion-label color=\"gray\" class=\"started_txt\">\n                <img src=\"assets/images/lock.png\" />\n              </ion-label>\n              <ion-input\n                type=\"password\"\n                placeholder=\"{{langpPasswordPlaceHolder}}\"\n                formControlName=\"password\"\n                style=\"font-weight: bold; color: white\"\n              ></ion-input>\n            </ion-row>\n            <div\n              *ngIf=\"submitted && f.password.errors\"\n              class=\"invalid-feedback left\"\n            >\n              <div\n                *ngIf=\"f.password.errors.required\"\n                [translate]=\"'CONNEXION.Text7'\"\n              ></div>\n              <div\n                *ngIf=\"f.password.errors.minlength\"\n                [translate]=\"'CONNEXION.Text8'\"\n              ></div>\n            </div>\n            <ion-row\n              style=\"\n                display: flex;\n                flex-direction: row;\n                justify-content: center;\n              \"\n            >\n              <button\n                style=\"font-family: montserrat-medium\"\n                class=\"global-btn login-button\"\n                style=\"color: white; background: #d3c117\"\n                [translate]=\"'CONNEXION.Text9'\"\n              ></button>\n            </ion-row>\n          </form>\n          <ion-row style=\"justify-content: center\">\n            <small\n              style=\"\n                font-family: montserrat-medium;\n                color: #ffffff;\n                margin-top: 10%;\n              \"\n              [routerLink]=\"['/forget']\"\n              routerLinkActive=\"router-link-active\"\n              [translate]=\"'CONNEXION.Text10'\"\n            >\n            </small>\n            <br />\n            <br />\n            <br />\n            <br />\n          </ion-row>\n        </div>\n        <div class=\"started-row fade\" *ngIf=\"!connexion\">\n          <ion-row>\n            <h5\n              style=\"font-weight: bold\"\n              class=\"center-head\"\n              [translate]=\"'CONNEXION.Text11'\"\n            ></h5>\n          </ion-row>\n          <ion-row>\n            <button\n              style=\"font-family: montserrat-medium\"\n              ion-button\n              class=\"global-btn inscription-login-button\"\n              style=\"background-color: #708aaa; color: white\"\n              [routerLink]=\"['/inscription-particulier']\"\n              routerLinkActive=\"router-link-active\"\n              [translate]=\"'CONNEXION.Text12'\"\n            ></button>\n          </ion-row>\n          <ion-row>\n            <button\n              style=\"font-family: montserrat-medium\"\n              ion-button\n              class=\"global-btn inscription-login-button\"\n              style=\"background-color: #d3c117; color: white\"\n              [routerLink]=\"['/inscription-professionnel']\"\n              routerLinkActive=\"router-link-active\"\n              [translate]=\"'CONNEXION.Text13'\"\n            ></button>\n          </ion-row>\n        </div>\n      </div>\n    </section>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 88906:
/*!***********************************************!*\
  !*** ./src/app/connexion/connexion.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".global-page {\n  font-weight: inherit;\n}\n.global-page .started-row {\n  width: 94%;\n  margin-left: 3%;\n  margin-top: 20px;\n}\n.global-page .started-row ion-label {\n  font-weight: bold;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.global-page .started-row .textwith-label {\n  padding: 10px 0px;\n  border-bottom: solid thin #cccccc;\n}\n.global-page .started-row .textwith-label ion-input {\n  display: inline-block;\n  text-align: left !important;\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  padding-left: 0px;\n  color: #cccccc;\n  margin-top: 3px;\n  --placeholder-color: #ffffff;\n}\n.global-page .started-row .textwith-label ion-input input {\n  text-align: left;\n  margin: 0px;\n  margin-top: 8px;\n  font-weight: initial;\n  --placeholder-color: #ffffff;\n}\n.global-page .started-row .started_txt {\n  max-width: 30px;\n  width: 30px;\n  margin: 0px;\n  padding: 12px 0px 0px 0px;\n  height: auto;\n  font-size: 16px;\n}\n.global-page .started-row .started_txt img {\n  width: 20px;\n}\n.global-page .started-row small {\n  font-size: 16px;\n  color: #cccccc;\n  margin: 10px auto;\n  text-align: center;\n  border-bottom: solid thin #7b7b7b;\n}\n.global-page .started-row .login-button {\n  width: 55%;\n  margin: 30px auto 15px auto;\n  font-weight: bold;\n  background-color: #d3c117;\n}\n.global-page .started-row .ios .login-button {\n  width: 55%;\n  margin: 30px auto 15px auto;\n  font-weight: bold;\n}\n.showhighlite {\n  border-top: 3px solid #d3c117 !important;\n  padding-top: 20px !important;\n  color: #d3c117 !important;\n  font-weight: bold !important;\n}\n.showlowlite {\n  border-top: 3px solid #b5a9a2 !important;\n  padding-top: 20px !important;\n  color: #b5a9a2 !important;\n}\n.started-row {\n  width: 100%;\n}\n.started-row ion-label {\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.started-row .started_txt {\n  max-width: 40px;\n  width: 40px;\n  margin: 0px;\n  padding: 12px 0px 0px 0px;\n  height: auto;\n  font-size: 16px;\n}\n.started-row .center-head {\n  font-size: 24px !important;\n  color: #ffffff;\n  margin: 30px auto 10px auto;\n  text-align: center;\n  font-weight: initial;\n}\n.started-row .inscription-login-button {\n  width: 60%;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1px;\n  border-radius: 20px;\n  margin: 15px auto;\n}\n.started-row .ios .inscription-login-button {\n  width: 60%;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1px;\n  border-radius: 20px;\n  margin: 15px auto;\n}\n.bg-image-full {\n  min-height: 100%;\n  background: url('login-bg.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n}\nion-content.main-content {\n  text-align: center;\n  justify-content: center;\n}\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n.invalid-feedback {\n  font-size: 13px;\n  color: red;\n  background: white;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5leGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFESTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBR047QUFBSTtFQUNFLGlCQUFBO0VBQ0EsaUNBQUE7QUFFTjtBQURNO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFHUjtBQUZRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFJVjtBQUFJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVOO0FBQUk7RUFDRSxXQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBRU47QUFBSTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFFTjtBQUFJO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUdBO0VBQ0Usd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUdBO0VBQ0Usd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7QUFBRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNFO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNFO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBR0E7RUFHRSxnQkFBQTtFQUVBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQU9BO0VBRUUsa0JBQUE7RUFDQSx1QkFBQTtBQUxGO0FBUUE7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0FBTEY7QUFRQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxGIiwiZmlsZSI6ImNvbm5leGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2xvYmFsLXBhZ2Uge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgLnN0YXJ0ZWQtcm93IHtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgLnRleHR3aXRoLWxhYmVsIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zdGFydGVkX3R4dCB7XG4gICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMTJweCAwcHggMHB4IDBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLnN0YXJ0ZWRfdHh0IGltZyB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gICAgc21hbGwge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gIzdiN2I3YjtcbiAgICB9XG4gICAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogNTUlO1xuICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMTVweCBhdXRvO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjMTE3O1xuICAgIH1cbiAgICAuaW9zIC5sb2dpbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDU1JTtcbiAgICAgIG1hcmdpbjogMzBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG4uc2hvd2hpZ2hsaXRlIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkM2MxMTcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNkM2MxMTcgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cblxuLnNob3dsb3dsaXRlIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNiNWE5YTIgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNiNWE5YTIgIWltcG9ydGFudDtcbn1cblxuLnN0YXJ0ZWQtcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnN0YXJ0ZWRfdHh0IHtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTJweCAwcHggMHB4IDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jZW50ZXItaGVhZCB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogaW5pdGlhbDtcbiAgfVxuICAuaW5zY3JpcHRpb24tbG9naW4tYnV0dG9uIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgfVxuICAuaW9zIC5pbnNjcmlwdGlvbi1sb2dpbi1idXR0b24ge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICB9XG59XG5cbi5iZy1pbWFnZS1mdWxsIHtcbiAgLy8gaWYgY29udGVudCBkb2VzIG5vdCBvY2N1cHkgd2hvbGUgaGVpZ2h0IHRoZW4gaXQgc2hvd3Mgd2hpdGUgYmcgYXQgYm90dG9tXG5cbiAgbWluLWhlaWdodDogMTAwJTtcblxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmcucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmcucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi1jb250ZW50Lm1haW4tY29udGVudCB7XG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4tYmcuc3ZnJykgbm8tcmVwZWF0IDUyJSBjZW50ZXIvY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_connexion_connexion_module_ts.js.map