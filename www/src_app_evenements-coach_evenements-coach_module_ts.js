"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_evenements-coach_evenements-coach_module_ts"],{

/***/ 1521:
/*!*********************************************************************!*\
  !*** ./src/app/evenements-coach/evenements-coach-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvenementsCoachPageRoutingModule": () => (/* binding */ EvenementsCoachPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _evenements_coach_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evenements-coach.page */ 47859);




const routes = [
    {
        path: '',
        component: _evenements_coach_page__WEBPACK_IMPORTED_MODULE_0__.EvenementsCoachPage
    }
];
let EvenementsCoachPageRoutingModule = class EvenementsCoachPageRoutingModule {
};
EvenementsCoachPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EvenementsCoachPageRoutingModule);



/***/ }),

/***/ 57789:
/*!*************************************************************!*\
  !*** ./src/app/evenements-coach/evenements-coach.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvenementsCoachPageModule": () => (/* binding */ EvenementsCoachPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _evenements_coach_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evenements-coach-routing.module */ 1521);
/* harmony import */ var _evenements_coach_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evenements-coach.page */ 47859);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let EvenementsCoachPageModule = class EvenementsCoachPageModule {
};
EvenementsCoachPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _evenements_coach_routing_module__WEBPACK_IMPORTED_MODULE_0__.EvenementsCoachPageRoutingModule
        ],
        declarations: [_evenements_coach_page__WEBPACK_IMPORTED_MODULE_1__.EvenementsCoachPage]
    })
], EvenementsCoachPageModule);



/***/ }),

/***/ 47859:
/*!***********************************************************!*\
  !*** ./src/app/evenements-coach/evenements-coach.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvenementsCoachPage": () => (/* binding */ EvenementsCoachPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_evenements_coach_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./evenements-coach.page.html */ 12656);
/* harmony import */ var _evenements_coach_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evenements-coach.page.scss */ 59855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _participants_participants_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../participants/participants.page */ 84961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translate-config.service */ 47464);













let EvenementsCoachPage = class EvenementsCoachPage {
    constructor(api, storage, alertController, http, httpClient, modalCtrl, translateSevice, router, route) {
        this.api = api;
        this.storage = storage;
        this.alertController = alertController;
        this.http = http;
        this.httpClient = httpClient;
        this.modalCtrl = modalCtrl;
        this.translateSevice = translateSevice;
        this.router = router;
        this.route = route;
        this.eventId = undefined;
        this.activeEvents = [];
        this.individual = false;
        this.coach = false;
        this.notificationPresent = false;
    }
    exitEvent(event) {
        let formData = new FormData();
        formData.append('book_id', event.book_id);
        formData.append('book_status', '2');
        this.api.loading();
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/cancle_booked_event', formData)
            .subscribe((res) => {
            console.log('DELETE USER RESPONS', res);
            this.api.dismissLoading();
            this.getEvents();
            if (res.json().status == 1) {
            }
            else {
                // this.creatform();
                //  this.api.toast(res.msg)
            }
        });
    }
    ionViewDidEnter() {
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
                this.English = true;
            }
            else {
                this.English = false;
            }
        });
        this.activeEvents = [];
        // this.api.loading();
        this.storage.get('user_id').then((user_id) => {
            this.udk = user_id;
            console.log('user_id', user_id);
            this.storage.get('user_type').then((user_type) => {
                this.userType = user_type;
                if (user_type === '1') {
                    this.individual = true;
                }
                else if (user_type === '2') {
                    // this.storage.get('verifiedCoach').then((isSubscribed)=>{
                    // this.coach=true;
                    // if(isSubscribed){
                    this.getEvents();
                }
                else {
                    //open modal
                    // this.api.presentAlertSubscription();
                    this.empty = true;
                    //   }
                    // });
                }
            });
        });
    }
    ngOnInit() { }
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    getEvents() {
        this.api.loading();
        this.activeEvents = [];
        const formData = new FormData();
        formData.append('user_id', this.udk);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/upcoming_event', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
                var allEvents = [];
                allEvents = res.json().result;
                var today = new Date();
                var format = moment__WEBPACK_IMPORTED_MODULE_3__(today).format('YYYY-MM-DD');
                this.activeEvents = res.json().result;
                this.totalEvents = this.activeEvents.length;
                // for(var i=0;i<allEvents.length;i++){
                //   if(format<=allEvents[i].event_coach_date){
                //     var lastName=allEvents[i].user_l_name;
                //     var l_name = lastName.substring(0, 1);
                //     allEvents[i].last_name=l_name;
                //     this.activeEvents.push(allEvents[i]);
                //   }else{
                //     console.log("not event");
                //   }
                //   console.log(this.activeEvents);
                //   this.totalEvents=this.activeEvents.length;
                // }
                this.empty = false;
                this.api.dismissLoading();
            }
            else {
                console.log(res.json());
                this.message = res.json().msg;
                this.empty = true;
                this.api.dismissLoading();
            }
        });
    }
    selectItem(item) {
        console.log(item);
        if (this.udk == item.user_id) {
            if (this.userType == '1') {
                this.api.Navigate('mon-profil');
            }
            else {
                this.api.Navigate('coacheditprofile');
            }
        }
        else {
            var vc = {
                user_id: item.user_id,
            };
            let navigationExtras = {
                queryParams: {
                    special: JSON.stringify(vc),
                },
            };
            this.router.navigate(['coachviewprofile'], navigationExtras);
        }
    }
    showParticipant(get) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (get.event_type === '1') {
                if (get.event_individuals_participants_min === '0') {
                    return;
                }
                else {
                    var eventId = get.event_id;
                    const modal = yield this.modalCtrl.create({
                        component: _participants_participants_page__WEBPACK_IMPORTED_MODULE_4__.ParticipantsPage,
                        cssClass: 'participantPage',
                        componentProps: { eventId: eventId },
                    });
                    yield modal.present();
                    const { data } = yield modal.onWillDismiss();
                    if (data) {
                        // this.excludeTracks = data;
                        // this.updateSchedule();
                        this.selectItem(data);
                    }
                }
            }
            else if (get.event_type === '2') {
                if (get.event_coach_participants_min === '0') {
                    return;
                }
                else {
                    var eventId = get.event_id;
                    const modal = yield this.modalCtrl.create({
                        component: _participants_participants_page__WEBPACK_IMPORTED_MODULE_4__.ParticipantsPage,
                        cssClass: 'participantPage',
                        componentProps: { eventId: eventId },
                    });
                    yield modal.present();
                    const { data } = yield modal.onWillDismiss();
                    if (data) {
                        // this.excludeTracks = data;
                        // this.updateSchedule();
                        this.selectItem(data);
                    }
                }
            }
        });
    }
    home() {
        this.api.Navigate('evenementcoachvue');
    }
    created() {
        this.api.Navigate('creescoach');
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
    participated() {
        this.api.Navigate('coach-participated-events');
    }
    edit(event) {
        console.log(event);
        // this.
        //   this.api.Navigate('evenementcoach');
        // this.router.navigate(['coachviewprofile'], navigationExtras);
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(event),
            },
        };
        this.router.navigate(['evenementcoach'], navigationExtras);
    }
    presentAlertConfirm(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.English) {
                const alert = yield this.alertController.create({
                    cssClass: 'secondary',
                    message: 'Are you sure you want to delete this event?',
                    buttons: [
                        {
                            text: 'YES',
                            handler: () => {
                                console.log('Confirm Okay');
                                this.deleteEvent(event);
                            },
                        },
                        {
                            text: 'NO',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alertController.create({
                    cssClass: 'secondary',
                    message: 'Es-tu sûr(e) de vouloir supprimer cet événement ?',
                    buttons: [
                        {
                            text: 'OUI',
                            handler: () => {
                                console.log('Confirm Okay');
                                this.deleteEvent(event);
                            },
                        },
                        {
                            text: 'NON',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                            },
                        },
                    ],
                });
                yield alert.present();
            }
        });
    }
    deleteEvent(event) {
        this.api.loading();
        console.log(event);
        const formData = new FormData();
        formData.append('event_id', event.event_id);
        formData.append('event_type', event.event_type);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/del/event', formData)
            .subscribe((res) => {
            this.api.dismissLoading();
            if (res.json().msg == 'Records Deleted Successfully') {
                console.log(res);
                this.getEvents();
                if (this.English) {
                    var msg = 'Deleted event';
                }
                else {
                    var msg = 'événement supprimé';
                }
                this.api.toast(msg);
            }
            else {
                console.log(res);
            }
        });
    }
};
EvenementsCoachPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_9__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute }
];
EvenementsCoachPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-evenements-coach',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_evenements_coach_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_evenements_coach_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController,
        _angular_http__WEBPACK_IMPORTED_MODULE_9__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute])
], EvenementsCoachPage);



/***/ }),

/***/ 12656:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/evenements-coach/evenements-coach.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"font-family: montserrat-medium; font-weight: bold\"\n      class=\"top-fixed-heading uppercaes\"\n      [translate]=\"'CREESCOACH.Text1'\"\n    ></ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"top-tabs\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\"\n        ><div\n          class=\"tabs-block uppercaes selected-tabs\"\n          [translate]=\"'CREESCOACH.Text2'\"\n        ></div\n      ></ion-col>\n      <ion-col class=\"ion-no-padding\" (click)=\"created()\"\n        ><div\n          class=\"tabs-block uppercaes\"\n          [translate]=\"'CREESCOACH.Text3'\"\n        ></div\n      ></ion-col>\n      <ion-col class=\"ion-no-padding\" (click)=\"participated()\"\n        ><div\n          class=\"tabs-block uppercaes\"\n          [translate]=\"'CREESCOACH.participated'\"\n        ></div\n      ></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"!empty\">\n  <ion-list class=\"right\">\n    <ion-row\n      style=\"\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        text-align: center;\n      \"\n    >\n      <ion-text style=\"font-family: montserrat-medium; font-weight: bold\"\n        ><b>{{totalEvents}}</b> <b [translate]=\"'CREESCOACH.Text4'\"></b\n      ></ion-text>\n    </ion-row>\n\n    <ion-card class=\"card-evenement\" *ngFor=\"let get of activeEvents\">\n      <ion-card-title class=\"evenement-subtitle\" style=\"position: relative\">\n        <!-- <div class=\"card-title\">{{get.event_coach_title | titlecase}}</div> -->\n        <div class=\"card-title\">{{get.spcat_name | titlecase}}</div>\n        <div style=\"position: absolute; right: 0px; top: 0px\">\n          <button\n            style=\"margin-left: 0.5rem\"\n            *ngIf=\"get.user_id==this.udk\"\n            class=\"evenment-submit-button global-btn themecolor\"\n            (click)=\"edit(get)\"\n          >\n            <ion-icon name=\"create\"></ion-icon>\n          </button>\n\n          <button\n            *ngIf=\"get.user_id==this.udk\"\n            class=\"evenment-submit-button global-btn themecolor\"\n            (click)=\"presentAlertConfirm(get)\"\n          >\n            <ion-icon name=\"trash\"></ion-icon>\n          </button>\n\n          <button\n            *ngIf=\"udk!=get.host_user_id && get.book_status=='waiting for approval'\"\n            class=\"evenment-submit-button global-btn themecolor\"\n            style=\"background-color: #d3c117\"\n          >\n            {{'MESEVENTMENTS.Text8'|translate}}\n          </button>\n          <button\n            *ngIf=\"get.host_user_id!=this.udk && get.book_status!='waiting for approval'\"\n            class=\"evenment-submit-button global-btn themecolor\"\n            (click)=\"exitEvent(get)\"\n            style=\"background-color: #d3c117\"\n          >\n            <!-- <ion-icon name=\"close\"></ion-icon> -->\n            {{'MESEVENTMENTS.Text7'|translate}}\n          </button>\n        </div>\n      </ion-card-title>\n      <ion-card-content class=\"evenement-card-content ion-no-padding\">\n        <ion-list class=\"ion-no-padding\">\n          <ion-row>\n            <div class=\"iconswith-row\">\n              <img\n                src=\"../../assets/images/unselectedlocation.png\"\n                class=\"location-img\"\n              />\n              <div class=\"details-box\" style=\"font-family: montserrat-medium\">\n                {{get.event_coach_address||get.event_individuals_address}}\n              </div>\n            </div>\n            <div class=\"iconswith-row\">\n              <img src=\"assets/images/time.png\" class=\"time-img\" />\n              <div class=\"details-box\" style=\"font-family: montserrat-medium\">\n                {{get.event_coach_date | date:\"dd-MM-yyyy\"}} -\n                {{get.event_time}}\n              </div>\n            </div>\n            <div class=\"iconswith-row\" (click)=\"showParticipant(get)\">\n              <img src=\"assets/images/people.png\" />\n              <div class=\"details-box\" style=\"font-family: montserrat-medium\">\n                <span *ngIf=\"get.event_type=='1'\">\n                  {{get.event_individuals_participants_min}} /\n                  {{get.event_individuals_participants_max}}\n                </span>\n                <span *ngIf=\"get.event_type=='2'\">\n                  {{get.event_coach_participants_min}} /\n                  {{get.event_coach_participants_max}}\n                </span>\n              </div>\n            </div>\n          </ion-row>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n<ion-content *ngIf=\"empty\">\n  <div\n    style=\"\n      display: flex;\n      justify-content: center;\n      font-family: montserrat-medium;\n    \"\n    [translate]=\"'CREESCOACH.Text6'\"\n  ></div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"home()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\">\n        <img src=\"assets/images/selectedcalendar.png\" class=\"footer-img-date\" />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          <!-- <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}</div>-->\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 59855:
/*!*************************************************************!*\
  !*** ./src/app/evenements-coach/evenements-coach.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n}\n.header-fixed-top ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.header-fixed-top .top-tabs {\n  --background: #ffffff;\n  --ion-color-base: #ffffff !important;\n  color: #cccccc;\n  position: relative;\n  font-weight: bold;\n}\n.header-fixed-top .top-tabs .tabs-block {\n  position: relative;\n}\n.header-fixed-top .top-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -19px;\n  left: 0px;\n}\n.header-fixed-top .top-tabs .selected-tabs {\n  color: #D3C117;\n  font-family: \"montserrat-medium;\";\n  font-weight: bold;\n}\n.header-fixed-top .top-tabs .selected-tabs:before {\n  background: #D3C117;\n}\n.evenement-title {\n  font-size: 14px;\n  text-align: center;\n  color: #666666;\n  margin: 10px 0px;\n}\n.card-evenement {\n  padding: 10px 10px 0px 10px;\n  margin-bottom: 15px;\n}\n.card-evenement .evenement-subtitle {\n  border-bottom: solid thin #e1e1e1;\n  min-height: 40px;\n  margin-bottom: 10px;\n}\n.card-evenement .evenment-submit-button {\n  float: right;\n  height: 30px;\n  font-size: 14px;\n  padding: 5px 10px;\n  text-transform: capitalize;\n  background-color: #D3C117;\n  color: white;\n}\n.card-evenement .card-title {\n  display: inline-block;\n  font-size: 16px;\n}\n.card-evenement .evenement-card-content {\n  border-radius: 10px;\n  padding-bottom: 0px;\n}\n.card-evenement .evenement-card-content .iconswith-row {\n  position: relative;\n  padding-left: 30px;\n  text-align: left;\n  width: 100%;\n  min-height: 30px;\n  margin-bottom: 5px;\n}\n.card-evenement .evenement-card-content .iconswith-row img {\n  position: absolute;\n  width: 20px;\n  left: 0px;\n}\n.card-evenement .evenement-card-content .time-img {\n  width: 18px !important;\n}\n.card-evenement .evenement-card-content .location-img {\n  width: 16px !important;\n}\n.card-coach {\n  margin-top: 10px;\n  text-align: center;\n  position: relative;\n  background: #F8F8F8;\n  padding: 15px 0px 20px 0px;\n  overflow: initial;\n  margin-bottom: 35px !important;\n}\n.card-coach .amount-engagement {\n  display: inline-block;\n}\n.card-coach .peramt-box {\n  margin-bottom: 10px;\n  color: #a9a9a9;\n  margin-top: -3px;\n}\n.card-coach .engage-radio-box ion-radio {\n  margin-right: 10px;\n}\n.card-coach .buttonbox-cardouter {\n  position: absolute;\n  z-index: 10;\n  left: calc(50% - 85px);\n  bottom: -20px;\n}\n.card-coach .label-withterms a {\n  color: #525252;\n  text-decoration: underline;\n}\n.card-coach .engage-radio-box {\n  background: #f5f5f5;\n}\n.card-coach .engage-radio-box radio {\n  color: #000000;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n.addressInput:-ms-input-placeholder {\n  font-weight: bold;\n  color: #B8B8B8;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW5lbWVudHMtY29hY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFFSjtBQUFFO0VBRUkscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFBSTtFQUVFLGtCQUFBO0FBQ047QUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDTjtBQUNJO0VBRUUsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjtBQUlBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRkY7QUFLQTtFQUVFLDJCQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQUlFO0VBRUUsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFLRTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1FO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBSko7QUFNRTtFQUVFLG1CQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU1JO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQU9JO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUxOO0FBT0k7RUFFRSxzQkFBQTtBQU5OO0FBUUk7RUFFRSxzQkFBQTtBQVBOO0FBYUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQVZGO0FBV0U7RUFDRSxxQkFBQTtBQVRKO0FBWUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVZKO0FBYUU7RUFDRSxrQkFBQTtBQVhKO0FBY0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFaSjtBQWNFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FBWko7QUFjRTtFQUNFLG1CQUFBO0FBWko7QUFhSTtFQUNFLGNBQUE7QUFYTjtBQWVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVpGO0FBYUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQVhKO0FBWUk7RUFDRSxVQUFBO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFWSjtBQVdNO0VBQ0UsVUFBQTtBQVRSO0FBV007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVFI7QUFlQTtFQUVFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFiRiIsImZpbGUiOiJldmVuZW1lbnRzLWNvYWNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItZml4ZWQtdG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAudG9wLXRhYnNcbiAge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAudGFicy1ibG9ja1xuICAgIHtcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIH1cbiAgICAudGFicy1ibG9jazpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICB0b3A6IC0xOXB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgIH1cbiAgICAuc2VsZWN0ZWQtdGFic1xuICAgIHtcbiAgICAgIGNvbG9yOiNEM0MxMTc7XG4gICAgICBmb250LWZhbWlseTogXCJtb250c2VycmF0LW1lZGl1bTtcIjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuc2VsZWN0ZWQtdGFiczpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZDogI0QzQzExNztcbiAgICB9XG4gIH1cbn1cbi5ldmVuZW1lbnQtdGl0bGVcbntcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uY2FyZC1ldmVuZW1lbnRcbntcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAuZXZlbmVtZW50LXN1YnRpdGxlXG4gIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICNlMWUxZTE7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5ldmVubWVudC1zdWJtaXQtYnV0dG9uXG4gIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNDMTE3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2FyZC10aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZXZlbmVtZW50LWNhcmQtY29udGVudFxuICB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC5pY29uc3dpdGgtcm93XG4gICAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmljb25zd2l0aC1yb3cgaW1ne1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgfVxuICAgIC50aW1lLWltZ1xuICAgIHtcbiAgICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2NhdGlvbi1pbWdcbiAgICB7XG4gICAgICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5cbi5jYXJkLWNvYWNoIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDIwcHggMHB4O1xuICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweCAhaW1wb3J0YW50O1xuICAuYW1vdW50LWVuZ2FnZW1lbnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5wZXJhbXQtYm94IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjYTlhOWE5O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gIH1cblxuICAuZW5nYWdlLXJhZGlvLWJveCBpb24tcmFkaW8ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5idXR0b25ib3gtY2FyZG91dGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA4NXB4KTtcbiAgICBib3R0b206IC0yMHB4O1xuICB9XG4gIC5sYWJlbC13aXRodGVybXMgYSB7XG4gICAgY29sb3I6ICM1MjUyNTI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLmVuZ2FnZS1yYWRpby1ib3gge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgcmFkaW8ge1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICB9XG59XG4uZm9vdGVyLWZpeGVkLXRhYiB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNSU7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC5mb290ZXItYnRuLXRhYnMge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAucm91bmR7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0MxMTc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hZGRyZXNzSW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0I4QjhCODtcbiAgb3BhY2l0eTogMC45O1xuICBcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_evenements-coach_evenements-coach_module_ts.js.map