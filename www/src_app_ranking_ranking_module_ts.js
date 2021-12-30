"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ranking_ranking_module_ts"],{

/***/ 14377:
/*!***************************************************!*\
  !*** ./src/app/ranking/ranking-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RankingPageRoutingModule": () => (/* binding */ RankingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ranking.page */ 94500);




const routes = [
    {
        path: '',
        component: _ranking_page__WEBPACK_IMPORTED_MODULE_0__.RankingPage
    }
];
let RankingPageRoutingModule = class RankingPageRoutingModule {
};
RankingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RankingPageRoutingModule);



/***/ }),

/***/ 78677:
/*!*******************************************!*\
  !*** ./src/app/ranking/ranking.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RankingPageModule": () => (/* binding */ RankingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ranking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ranking-routing.module */ 14377);
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ranking.page */ 94500);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic4-rating */ 22249);









let RankingPageModule = class RankingPageModule {
};
RankingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, ionic4_rating__WEBPACK_IMPORTED_MODULE_2__.IonicRatingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _ranking_routing_module__WEBPACK_IMPORTED_MODULE_0__.RankingPageRoutingModule
        ],
        declarations: [_ranking_page__WEBPACK_IMPORTED_MODULE_1__.RankingPage]
    })
], RankingPageModule);



/***/ }),

/***/ 94500:
/*!*****************************************!*\
  !*** ./src/app/ranking/ranking.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RankingPage": () => (/* binding */ RankingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ranking_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ranking.page.html */ 5483);
/* harmony import */ var _ranking_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ranking.page.scss */ 94462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate-config.service */ 47464);
/* harmony import */ var _searchfilter_searchfilter_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../searchfilter/searchfilter.page */ 85487);












let RankingPage = class RankingPage {
    constructor(api, storage, alertController, http, httpClient, modalCtrl, translateSevice, router) {
        this.api = api;
        this.storage = storage;
        this.alertController = alertController;
        this.http = http;
        this.httpClient = httpClient;
        this.modalCtrl = modalCtrl;
        this.translateSevice = translateSevice;
        this.router = router;
        this.allusers = [];
        this.dataLoaded = false;
    }
    ngOnInit() {
        this.storage.get('user_type').then((user_type) => {
            this.storage.get('user_id').then((user_id) => {
                this.userId = user_id;
                this.userType = user_type;
                this.getUsers();
            });
        });
    }
    getUsers() {
        this.dataLoaded = false;
        this.allusers = [];
        this.api.loading();
        const formData = new FormData();
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/user_ranking', formData)
            .subscribe((res) => {
            console.log(res.json());
            this.allusers = res.json().result;
            this.dataLoaded = true;
            this.api.dismissLoading();
        });
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
    notifications() {
        this.api.Navigate('notifications');
    }
    events() {
        if (this.userType == '1') {
            this.api.Navigate('creer-evenement');
        }
        else {
            this.api.Navigate('evenementcoachvue');
        }
    }
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    filterFunc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _searchfilter_searchfilter_page__WEBPACK_IMPORTED_MODULE_4__.SearchfilterPage,
                cssClass: 'searchFilterPage',
                showBackdrop: false,
                componentProps: { usersArray: this.allusers },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data == 'noresult') {
                this.getUsers();
            }
            else {
                this.dataLoaded = false;
                this.api.loading();
                const formData = new FormData();
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/fields/user_ranking', formData)
                    .subscribe((res) => {
                    console.log(res.json());
                    var alluserAray = res.json().result;
                    this.api.dismissLoading();
                    if (data.isArea) {
                        this.allusers = [];
                        for (var i = 0; i < alluserAray.length; i++) {
                            if (alluserAray[i].user_city == data.city) {
                                this.allusers.push(alluserAray[i]);
                            }
                        }
                        console.log(this.allusers);
                        this.dataLoaded = true;
                    }
                    else if (data.isName) {
                        this.allusers = [];
                        for (var i = 0; i < alluserAray.length; i++) {
                            if (alluserAray[i].user_f_name == data.first_name) {
                                this.allusers.push(alluserAray[i]);
                            }
                        }
                        console.log(this.allusers);
                        this.dataLoaded = true;
                    }
                    else if (data.isSports) {
                        this.allusers = [];
                        for (var i = 0; i < alluserAray.length; i++) {
                            if (alluserAray[i].spcat_name == data.sportsName) {
                                this.allusers.push(alluserAray[i]);
                            }
                        }
                        console.log(this.allusers);
                        this.dataLoaded = true;
                    }
                });
            }
        });
    }
    manage() {
        this.api.Navigate('mes-evenements');
        if (this.userType === '1') {
            this.api.Navigate('mes-evenements');
        }
        else {
            this.api.Navigate('evenements-coach');
        }
    }
    viewProfile(user) {
        // if(this.userType=="0" && !this.subscribed){
        //   //present alert
        //   this.api.presentAlertSubscription(2);
        // }else{
        console.log('my event');
        if (this.userId === user.user_id) {
            if (this.userType == '1') {
                this.api.Navigate('mon-profil');
            }
            else {
                this.api.Navigate('coacheditprofile');
            }
        }
        else {
            console.log('others event');
            var vc = { user_id: user.user_id, distance: user.distance };
            let navigationExtras = {
                queryParams: {
                    special: JSON.stringify(vc),
                },
            };
            this.router.navigate(['coachviewprofile'], navigationExtras);
        }
    }
};
RankingPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_8__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__.TranslateConfigService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
RankingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-ranking',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ranking_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ranking_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController,
        _angular_http__WEBPACK_IMPORTED_MODULE_8__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_3__.TranslateConfigService,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router])
], RankingPage);



/***/ }),

/***/ 5483:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ranking/ranking.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"font-family: montserrat-medium\"\n      class=\"top-fixed-heading\"\n      [translate]=\"'RANKING.Text1'\"\n    >\n    </ion-title>\n    <ion-buttons style=\"display: flex; flex-direction: row-reverse\">\n      <img (click)=\"filterFunc()\" src=\"../../assets/rankfilter.svg\" />\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"dataLoaded\">\n  <div\n    *ngIf=\"!allusers.length\"\n    style=\"padding: 4px; font-size: 1.5rem; text-align: center\"\n  >\n    No Users Found\n  </div>\n  <ion-row *ngIf=\"allusers.length>2\">\n    <ion-col size=\"4\" (click)=\"viewProfile(allusers[1])\">\n      <ion-row style=\"display: flex; justify-content: center\">\n        <div class=\"circleleft\">\n          <ion-avatar style=\"height: 90%; width: 90%\">\n            <ion-img [src]=\"allusers[1].user_img\"></ion-img>\n          </ion-avatar>\n        </div>\n      </ion-row>\n      <div>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <ion-text style=\"font-size: 16px\">\n            {{allusers[1].user_f_name}}</ion-text\n          >\n        </ion-row>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <div\n            style=\"\n              height: 28%;\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n            \"\n          >\n            <div style=\"font-size: 1.2rem\">\n              <span *ngFor=\"let i of [1,2,3,4,5];let i=index\">\n                <ion-icon\n                  [ngStyle]=\"{'color': i>allusers[1].avg_rating?'#acacac':'orange'}\"\n                  name=\"star\"\n                ></ion-icon>\n              </span>\n            </div>\n            <!-- d3c117 -->\n            <!-- <rating\n              [rate]=\"rate\"\n              readonly=\"true\"\n              [(ngModel)]=\"allusers[1].avg_rating\"\n              size=\"small\"\n            >\n            \n            </rating> -->\n          </div>\n        </ion-row>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <ion-text\n            style=\"font-size: 10px; text-align: center\"\n            [translate]=\"'RANKING.Text1'\"\n          ></ion-text>\n          <b style=\"font-size: 10px\"> - 2</b>\n        </ion-row>\n      </div>\n    </ion-col>\n    <ion-col size=\"4\" (click)=\"viewProfile(allusers[0])\">\n      <ion-row style=\"display: flex; justify-content: center\">\n        <div class=\"circle\">\n          <ion-avatar style=\"width: 90%; height: 90%\">\n            <ion-img [src]=\"allusers[0].user_img\"></ion-img>\n          </ion-avatar>\n        </div>\n      </ion-row>\n\n      <div>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <ion-text style=\"font-size: 16px\"\n            >{{allusers[0].user_f_name}}</ion-text\n          >\n        </ion-row>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <div\n            style=\"\n              height: 28%;\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n            \"\n          >\n            <div style=\"font-size: 1.2rem\">\n              <span *ngFor=\"let i of [1,2,3,4,5];let i=index\">\n                <ion-icon\n                  [ngStyle]=\"{'color': i>allusers[0].avg_rating?'#acacac':'orange'}\"\n                  name=\"star\"\n                ></ion-icon>\n              </span>\n            </div>\n\n            <!-- <rating\n              readonly=\"true\"\n              [(ngModel)]=\"allusers[0].avg_rating\"\n              size=\"small\"\n            >\n            </rating> -->\n          </div>\n        </ion-row>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <ion-text\n            style=\"font-size: 10px; text-align: center\"\n            [translate]=\"'RANKING.Text1'\"\n          ></ion-text>\n          <b style=\"font-size: 10px\"> - 1</b>\n        </ion-row>\n      </div>\n    </ion-col>\n    <ion-col size=\"4\" (click)=\"viewProfile(allusers[2])\">\n      <ion-row style=\"display: flex; justify-content: center\">\n        <div class=\"circleright\">\n          <ion-avatar style=\"height: 90%; width: 90%\">\n            <ion-img [src]=\"allusers[2].user_img\"></ion-img>\n          </ion-avatar>\n        </div>\n      </ion-row>\n      <div>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <ion-text style=\"font-size: 16px\">\n            {{allusers[2].user_f_name}}</ion-text\n          >\n        </ion-row>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <div\n            style=\"\n              height: 28%;\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n            \"\n          >\n            <div style=\"font-size: 1.2rem\">\n              <span *ngFor=\"let i of [1,2,3,4,5];let i=index\">\n                <ion-icon\n                  [ngStyle]=\"{'color': i>allusers[2].avg_rating?'#acacac':'orange'}\"\n                  name=\"star\"\n                ></ion-icon>\n              </span>\n            </div>\n            <!-- <rating\n              [rate]=\"rate\"\n              readonly=\"true\"\n              [(ngModel)]=\"allusers[2].avg_rating\"\n              size=\"small\"\n            >\n            </rating> -->\n          </div>\n        </ion-row>\n        <ion-row style=\"display: flex; justify-content: center\">\n          <ion-text\n            style=\"font-size: 10px; text-align: center\"\n            [translate]=\"'RANKING.Text1'\"\n          ></ion-text>\n          <b style=\"font-size: 10px\"> - 3</b>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-card\n    *ngFor=\"let user of allusers;let z = index\"\n    (click)=\"viewProfile(user)\"\n  >\n    <ion-row *ngIf=\"z!=0 || z!=1 || z!=2\">\n      <ion-col size=\"4\">\n        <ion-avatar style=\"height: 80px; width: 80px\">\n          <!-- <ion-img [src]=\"user.user_img\"></ion-img> -->\n          <img [src]=\"user.user_img\" />\n        </ion-avatar>\n      </ion-col>\n      <ion-col\n        style=\"\n          display: flex;\n          flex-direction: column;\n          justify-content: space-around;\n        \"\n        size=\"6\"\n      >\n        <ion-row>\n          <ion-text style=\"font-size: 16px\">{{user.user_f_name}}</ion-text>\n        </ion-row>\n        <ion-row\n          style=\"display: flex; justify-content: center\"\n          style=\"margin-top: 20%\"\n        >\n          <div style=\"font-size: 1.2rem\">\n            <span *ngFor=\"let i of [1,2,3,4,5];let i=index\">\n              <ion-icon\n                [ngStyle]=\"{'color': i>user.avg_rating?'#acacac':'orange'}\"\n                name=\"star\"\n              ></ion-icon>\n            </span>\n          </div>\n          <!-- <rating\n            size=\"small\"\n            [rate]=\"rate\"\n            readonly=\"true\"\n            [(ngModel)]=\"user.avg_rating\"\n            fontSize=\"15px\"\n          >\n          </rating> -->\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-row style=\"display: flex; flex-direction: row-reverse\">\n          <ion-text\n            style=\"display: flex; flex-direction: row-reverse\"\n            style=\"font-size: 10px\"\n            [translate]=\"'RANKING.Text1'\"\n          ></ion-text>\n        </ion-row>\n        <ion-row style=\"display: flex; flex-direction: row-reverse\">\n          <ion-text style=\"font-size: 1.5rem; color: black\">\n            <b>{{z+1}}</b></ion-text\n          >\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\">\n        <img src=\"assets/rankiconselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          <!-- {{notificationArray}} -->\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 94462:
/*!*******************************************!*\
  !*** ./src/app/ranking/ranking.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #d3c117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n.header-fixed-top {\n  text-align: center;\n}\n.header-fixed-top ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.circle {\n  border: 2px solid #d3c117;\n  height: 100px;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  width: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.circleleft {\n  border: 2px solid #708aaa;\n  height: 75px;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  width: 75px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.circleright {\n  border: 2px solid #acacac;\n  height: 70px;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  width: 70px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.ratebutton {\n  /* --border-radius: 4px; */\n  width: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmtpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQUZNO0VBQ0UsVUFBQTtBQUlSO0FBRk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSVI7QUFRQTtFQUNFLGtCQUFBO0FBTEY7QUFNRTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBSko7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFRQTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7QUFMRiIsImZpbGUiOiJyYW5raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItZml4ZWQtdGFiIHtcbiAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA1JTtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLmZvb3Rlci1idG4tdGFicyB7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAucm91bmQge1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjMTE3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyAucmF0aW5ne1xuaW9uLWljb24ge1xuICAvLyB3aWR0aDogNXB4ICFpbXBvcnRhbnQ7XG59XG4vLyB9XG5cbi5oZWFkZXItZml4ZWQtdG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4uY2lyY2xlIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2QzYzExNztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaXJjbGVsZWZ0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzcwOGFhYTtcbiAgaGVpZ2h0OiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDc1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2lyY2xlcmlnaHQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYWNhY2FjO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yYXRlYnV0dG9uIHtcbiAgLyogLS1ib3JkZXItcmFkaXVzOiA0cHg7ICovXG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vIGlvbi1pY29ue1xuLy8gICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbi8vIH1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_ranking_ranking_module_ts.js.map