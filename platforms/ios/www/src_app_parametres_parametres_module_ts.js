"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_parametres_parametres_module_ts"],{

/***/ 79860:
/*!*********************************************************!*\
  !*** ./src/app/parametres/parametres-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametresPageRoutingModule": () => (/* binding */ ParametresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _parametres_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parametres.page */ 4370);




const routes = [
    {
        path: '',
        component: _parametres_page__WEBPACK_IMPORTED_MODULE_0__.ParametresPage
    }
];
let ParametresPageRoutingModule = class ParametresPageRoutingModule {
};
ParametresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ParametresPageRoutingModule);



/***/ }),

/***/ 88567:
/*!*************************************************!*\
  !*** ./src/app/parametres/parametres.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametresPageModule": () => (/* binding */ ParametresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _parametres_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parametres-routing.module */ 79860);
/* harmony import */ var _parametres_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parametres.page */ 4370);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let ParametresPageModule = class ParametresPageModule {
};
ParametresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _parametres_routing_module__WEBPACK_IMPORTED_MODULE_0__.ParametresPageRoutingModule
        ],
        declarations: [_parametres_page__WEBPACK_IMPORTED_MODULE_1__.ParametresPage]
    })
], ParametresPageModule);



/***/ }),

/***/ 4370:
/*!***********************************************!*\
  !*** ./src/app/parametres/parametres.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametresPage": () => (/* binding */ ParametresPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_parametres_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./parametres.page.html */ 82006);
/* harmony import */ var _parametres_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parametres.page.scss */ 30687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate-config.service */ 47464);









let ParametresPage = class ParametresPage {
    constructor(api, storage, router, http, apiService, translateSevice) {
        this.api = api;
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.apiService = apiService;
        this.translateSevice = translateSevice;
        this.userArray = [];
        this.Selected = false;
        this.notificationPresent = false;
    }
    ngOnInit() {
        this.storage.get('notificationArray').then((notificationArray) => {
            this.storage.get('msgUnread').then((value) => {
                this.msgValue = value;
                if (notificationArray == null ||
                    notificationArray == undefined ||
                    notificationArray.length == 0) {
                    this.notificationPresent = false;
                }
                else {
                    this.notificationArray = notificationArray.length;
                    this.notificationPresent = true;
                }
            });
        });
        this.storage.get('user_lang').then((lang) => {
            if (lang == 'English') {
                this.langNumber = '1';
                this.lang = 'English';
                this.English = false;
            }
            else {
                this.langNumber = '2';
                this.lang = 'French';
                this.English = true;
            }
            this.api.loading();
            this.storage.get('user_type').then((user_type) => {
                this.storage.get('user_id').then((user_id) => {
                    this.user_Type = user_type;
                    this.userId = user_id;
                    const formData = new FormData();
                    formData.append('user_id', this.userId);
                    this.http
                        .post('http://fitconnected.prometteur.in/index.php/Api/fields/user', formData)
                        .subscribe((res) => {
                        console.log(res);
                        this.userArray = res.result;
                        if (this.userArray[0].user_receive_all_notification == 0) {
                            this.allNoti = false;
                        }
                        else {
                            this.allNoti = true;
                        }
                        if (this.userArray[0].user_receive_new_event_notification == 0) {
                            this.eventCreateNoti = false;
                        }
                        else {
                            this.eventCreateNoti = true;
                        }
                        if (this.userArray[0].user_receive_follow_notification == 0) {
                            this.followNoti = false;
                        }
                        else {
                            this.followNoti = true;
                        }
                        this.api.dismissLoading();
                    });
                });
            });
        });
    }
    select(lang) {
        console.log(lang);
        this.translateSevice.setLanguage(lang);
        this.Selected = false;
        if (lang === 'en') {
            this.English = false;
            this.lang = 'English';
            this.langNumber = '1';
        }
        else if (lang === 'fr') {
            this.English = true;
            this.lang = 'Français';
            this.langNumber = '2';
        }
        const formData = new FormData();
        formData.append('user_id', this.userId);
        formData.append('user_language', this.langNumber);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/user', formData)
            .subscribe((res) => {
            if (res.status == '1') {
                console.log(res);
                this.api.toast(res.msg);
            }
            else {
                this.api.toast(res.msg);
            }
        });
    }
    unOption() {
        this.Selected = false;
    }
    openOption() {
        this.Selected = true;
    }
    allNotification($event) {
        console.log($event);
        if ($event.detail.checked) {
            var setting = '1';
        }
        else {
            var setting = '0';
        }
        const formData = new FormData();
        formData.append('user_id', this.userId);
        formData.append('user_receive_all_notification', setting);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/notification_setting', formData)
            .subscribe((res) => {
            console.log(res);
        });
    }
    eventCreateNotification($event) {
        console.log($event);
        if ($event.detail.checked) {
            var setting = '1';
        }
        else {
            var setting = '0';
        }
        const formData = new FormData();
        formData.append('user_id', this.userId);
        formData.append('user_receive_new_event_notification', setting);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/notification_setting', formData)
            .subscribe((res) => {
            console.log(res);
        });
    }
    followNotification($event) {
        console.log($event);
        if ($event.detail.checked) {
            var setting = '1';
        }
        else {
            var setting = '0';
        }
        const formData = new FormData();
        formData.append('user_id', this.userId);
        formData.append('user_receive_follow_notification', setting);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/notification_setting', formData)
            .subscribe((res) => {
            console.log(res);
        });
    }
    events() {
        if (this.user_Type === '1') {
            this.api.Navigate('creer-evenement');
        }
        else {
            this.api.Navigate('evenementcoachvue');
        }
    }
    manage() {
        if (this.user_Type === '1') {
            this.api.Navigate('mes-evenements');
        }
        else {
            this.api.Navigate('evenements-coach');
        }
    }
    notifications() {
        this.api.Navigate('notifications');
    }
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    messages() {
        var vc = {
            pageRoute: 'conversation',
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['chatpage'], navigationExtras);
    }
};
ParametresPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__.TranslateConfigService }
];
ParametresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-parametres',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_parametres_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_parametres_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,
        _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_3__.TranslateConfigService])
], ParametresPage);



/***/ }),

/***/ 82006:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/parametres/parametres.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"font-family: montserrat-medium\"\n      class=\"top-fixed-heading uppercaes\"\n      [translate]=\"'PARAMETRES.Text1'\"\n    ></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <section class=\"setting-content\">\n    <ion-row class=\"setting-row\">\n      <div class=\"setting-text\" [translate]=\"'PARAMETRES.Text2'\"></div>\n      <div class=\"radio-sliderbox\">\n        <ion-toggle\n          (ionChange)=\"allNotification($event)\"\n          slot=\"start\"\n          name=\"notification\"\n          color=\"success\"\n          [(ngModel)]=\"allNoti\"\n        ></ion-toggle>\n      </div>\n    </ion-row>\n    <h4 class=\"small-title\" [translate]=\"'PARAMETRES.Text3'\"></h4>\n    <ion-row class=\"setting-row\">\n      <div class=\"setting-text\" [translate]=\"'PARAMETRES.Text4'\"></div>\n      <div class=\"radio-sliderbox\">\n        <ion-toggle\n          (ionChange)=\"eventCreateNotification($event)\"\n          slot=\"start\"\n          name=\"kiwi\"\n          color=\"success\"\n          [(ngModel)]=\"eventCreateNoti\"\n        ></ion-toggle>\n      </div>\n    </ion-row>\n    <!-- <ion-row class=\"setting-row\">\n            <div class=\"setting-text\">Alerte pour les nouveaux messages</div>\n            <div class=\"radio-sliderbox\">\n                <ion-toggle slot=\"start\" name=\"kiwi\" color=\"success\" checked></ion-toggle>\n            </div>\n        </ion-row> -->\n    <ion-row class=\"setting-row\">\n      <div class=\"setting-text\" [translate]=\"'PARAMETRES.Text5'\"></div>\n      <div class=\"radio-sliderbox\">\n        <ion-toggle\n          (ionChange)=\"followNotification($event)\"\n          slot=\"start\"\n          name=\"kiwi\"\n          color=\"success\"\n          [(ngModel)]=\"followNoti\"\n        ></ion-toggle>\n      </div>\n    </ion-row>\n  </section>\n\n  <ion-item style=\"margin-top: 5%\">\n    <ion-grid>\n      <ion-row>\n        <h3\n          style=\"\n            font-size: 14px;\n            color: #666666;\n            width: 100%;\n            font-weight: bold;\n          \"\n          [translate]=\"'PARAMETRES.Text6'\"\n        ></h3>\n      </ion-row>\n      <ion-row (click)=\"openOption()\" *ngIf=\"!Selected\">\n        <ion-col [size]=\"10\">\n          <ion-text style=\"color: #666666; font-size: 14px\" text-wrap\n            >{{lang}}</ion-text\n          >\n        </ion-col>\n        <ion-col [size]=\"2\">\n          <ion-icon\n            name=\"chevron-down-outline\"\n            color=\"success\"\n            size=\"large\"\n            *ngIf=\"Selected\"\n            (click)=\"openOption()\"\n            style=\"width: 40%\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"unOption()\" *ngIf=\"Selected\">\n        <ion-col [size]=\"10\">\n          <ion-text style=\"color: #666666; font-size: 14px\" text-wrap\n            >{{lang}}</ion-text\n          >\n        </ion-col>\n        <ion-col [size]=\"2\">\n          <ion-icon\n            name=\"chevron-up-outline\"\n            color=\"success\"\n            size=\"large\"\n            *ngIf=\"!Selected\"\n            (click)=\"unOption()\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"Selected\">\n        <ion-row *ngIf=\"English\" style=\"padding-left: 2%\">\n          <ion-text\n            (click)=\"select('en')\"\n            style=\"color: #666666; font-size: 14px\"\n            [translate]=\"'PARAMETRES.Text7'\"\n          ></ion-text>\n        </ion-row>\n        <ion-row *ngIf=\"!English\" style=\"padding-left: 2%\">\n          <ion-text\n            (click)=\"select('fr')\"\n            style=\"color: #666666; font-size: 14px\"\n            [translate]=\"'PARAMETRES.Text8'\"\n          ></ion-text>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 30687:
/*!*************************************************!*\
  !*** ./src/app/parametres/parametres.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.setting-content {\n  padding: 20px 15px;\n}\n.setting-content .setting-row {\n  position: relative;\n  width: 100%;\n  padding: 10px 55px 10px 0px;\n}\n.setting-content .setting-row .setting-text {\n  width: 100%;\n  color: #666666;\n  font-size: 14px;\n}\n.setting-content .setting-row .radio-sliderbox {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n.setting-content .small-title {\n  font-size: 14px;\n  color: #666666;\n  width: 100%;\n  font-weight: bold;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFtZXRyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBRUo7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBR0o7QUFGSTtFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdOO0FBREk7RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBRU47QUFDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0UsVUFBQTtFQUNGLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR0o7QUFGTTtFQUNFLFVBQUE7QUFJUjtBQUZNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUlSIiwiZmlsZSI6InBhcmFtZXRyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1maXhlZC10b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAudG9wLWdsb2JhbC10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4uc2V0dGluZy1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICAuc2V0dGluZy1yb3d7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggNTVweCAxMHB4IDBweDtcbiAgICAuc2V0dGluZy10ZXh0XG4gICAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnJhZGlvLXNsaWRlcmJveFxuICAgIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICB0b3A6IDBweDtcbiAgICB9XG4gIH1cbiAgLnNtYWxsLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLmZvb3Rlci1maXhlZC10YWIge1xuICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDUlO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAuZm9vdGVyLWJ0bi10YWJzIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgLnJvdW5ke1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNDMTE3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_parametres_parametres_module_ts.js.map