"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notifications_notifications_module_ts"],{

/***/ 93713:
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 13974);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 49154:
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 93713);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 13974);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
    })
], NotificationsPageModule);



/***/ }),

/***/ 13974:
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notifications.page.html */ 38121);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 41899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _rateuser_rateuser_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rateuser/rateuser.page */ 32448);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);












let NotificationsPage = class NotificationsPage {
    constructor(api, storage, http, httpClient, router, modalCtrl) {
        this.api = api;
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.newBookingRequest = [];
        this.acceptedBookingRequest = [];
        this.rejectedBookingRequest = [];
        this.cancelledEvent = [];
        this.allNotificationList = [];
        // msgValue: boolean;
        this.actionBtn = false;
    }
    ionViewDidEnter() {
        this.api.showNotificationDot = false;
        this.storage.get('msgUnread').then((value) => {
            // console.log(this.msgValue);
            this.storage.remove('notificationArray');
            this.storage.get('user_type').then((user_type) => {
                this.userType = user_type;
                this.storage.get('user_id').then((user_id) => {
                    const formData = new FormData();
                    formData.append('user_id', user_id);
                    this.http
                        .post('http://fitconnected.prometteur.in/index.php/Api/fields/notification', formData)
                        .subscribe((res) => {
                        console.log('NOTIFICATION RESPONSE', res);
                        if (res.json().status == 1) {
                            console.log('success');
                        }
                        else {
                            console.log('fails');
                        }
                        this.storage.get('user_lang').then((lang) => {
                            if (lang == 'English') {
                                this.English = true;
                            }
                            else {
                                this.English = false;
                            }
                        });
                        this.userId = user_id;
                        if (user_type == '2') {
                            this.storage.get('verifiedCoach').then((isSubscribed) => {
                                if (isSubscribed) {
                                    this.getNotifications();
                                }
                                else {
                                    this.emptyData = true;
                                    //open Alert
                                    // this.api.presentAlertSubscription();
                                }
                            });
                        }
                        else {
                            this.getNotifications();
                        }
                    });
                });
            });
        });
    }
    ngOnInit() {
        this.api.showNotificationDot = false;
    }
    review(notification) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('NOTIFICATION DATA IN REVIEW FNC', notification);
            const modal = yield this.modalCtrl.create({
                component: _rateuser_rateuser_page__WEBPACK_IMPORTED_MODULE_4__.RateuserPage,
                cssClass: 'ratePage',
                showBackdrop: false,
                componentProps: {
                    data: notification,
                },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                // alert('asdf');
                this.getNotifications();
            }
            else {
                // this.followerList=false;
                // this.loadData();
            }
        });
    }
    ngOnDestroy() {
        this.api.showNotificationDot = false;
    }
    getNotifications() {
        this.actionBtn = false;
        this.api.timerloading();
        this.allNotificationList = [];
        const formData = new FormData();
        formData.append('user_id', this.userId);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/notification', formData)
            .subscribe((res) => {
            // try {
            //   window.localStorage.setItem(
            //     'lastNotificationId',
            //     this.api.notifications[0].noti_id + ''
            //   );
            // } catch (error) {}
            if (res.json().status == 1) {
                console.log(res.json());
                var allNotification = [];
                var newARR = [];
                newARR = res.json().result;
                for (var i = 0; i < newARR.length; i++) {
                    if (newARR[i].noti_type == 5 ||
                        newARR[i].noti_type == 6 ||
                        newARR[i].noti_type == 9 ||
                        newARR[i].noti_type == 7) {
                        var lName = newARR[i].book_user_l_name.substring(0, 1);
                        var name = newARR[i].book_user_f_name + ' ' + lName + '.';
                        console.log(name);
                        newARR[i].nameFormatted = name;
                        var updateTime = moment__WEBPACK_IMPORTED_MODULE_3__(newARR[i].noti_create_date).format('DD MMM HH:mm');
                        newARR[i].updateTime = updateTime;
                    }
                    else {
                        var lName = newARR[i].book_user_l_name.substring(0, 1);
                        var name = newARR[i].book_user_f_name + ' ' + lName + '.';
                        if (!newARR[i].host_user_l_name)
                            newARR[i].host_user_l_name = '';
                        var lhostName = newARR[i].host_user_l_name.substring(0, 1);
                        var hostname = newARR[i].host_user_f_name + ' ' + lhostName + '.';
                        newARR[i].nameFormatted = name;
                        newARR[i].hostName = hostname;
                        var updateTime = moment__WEBPACK_IMPORTED_MODULE_3__(newARR[i].book_update_date).format('DD MMM HH:mm');
                        newARR[i].updateTime = updateTime;
                    }
                    allNotification.push(newARR[i]);
                }
                this.allNotificationList = allNotification;
                if (this.allNotificationList.length !== 0) {
                    this.emptyData = false;
                }
                else {
                    this.emptyData = true;
                }
                this.api.dismissLoading();
            }
            else {
                this.emptyData = true;
                console.log(res.json());
                this.api.dismissLoading();
            }
        });
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
    manage() {
        this.api.Navigate('mes-evenements');
        if (this.userType === '1') {
            this.api.Navigate('mes-evenements');
        }
        else {
            this.api.Navigate('evenements-coach');
        }
    }
    viewOtherProfile(user) {
        console.log(user);
        console.log('my event');
        if (this.userId === user.book_user_id) {
            if (this.userType == '1') {
                this.api.Navigate('mon-profil');
            }
            else {
                this.api.Navigate('coacheditprofile');
            }
        }
        else {
            console.log('others event');
            var vc = { user_id: user.book_user_id, distance: user.distance };
            let navigationExtras = {
                queryParams: {
                    special: JSON.stringify(vc),
                },
            };
            this.router.navigate(['coachviewprofile'], navigationExtras);
        }
    }
    viewProfile(user) {
        console.log(user);
        console.log('my event');
        if (this.userId === user.host_user_id) {
            if (this.userType == '1') {
                this.api.Navigate('mon-profil');
            }
            else {
                this.api.Navigate('coacheditprofile');
            }
        }
        else {
            console.log('others event');
            var vc = { user_id: user.host_user_id, distance: user.distance };
            let navigationExtras = {
                queryParams: {
                    special: JSON.stringify(vc),
                },
            };
            this.router.navigate(['coachviewprofile'], navigationExtras);
        }
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
    accept(x) {
        this.actionBtn = true;
        console.log(x);
        if (x.event_type == '1') {
            if (x.event_individuals_participants_min ===
                x.event_individuals_participants_max) {
                if (this.English) {
                    this.api.toast('Maximum limit of participant is already full.');
                }
                else {
                    this.api.toast('La limite maximale de participants est déjà pleine.');
                }
            }
            else {
                this.api.loading();
                const formData = new FormData();
                formData.append('book_id', x.book_id);
                formData.append('book_status', '1');
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/book', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        this.api.dismissLoading();
                        console.log(res.json());
                        this.getNotifications();
                    }
                    else {
                        this.api.dismissLoading();
                        this.api.toast(res.json().msg);
                        console.log(res.json());
                    }
                });
            }
        }
        else if (x.event_type == '2') {
            if (x.event_coach_participants_min === x.event_coach_participants_max) {
                this.api.toast('Maximum limit of participant is already full.');
            }
            else {
                this.api.loading();
                const formData = new FormData();
                formData.append('book_id', x.book_id);
                formData.append('book_status', '1');
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/book', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        this.api.dismissLoading();
                        console.log(res.json());
                        this.getNotifications();
                    }
                    else {
                        this.api.dismissLoading();
                        this.api.toast(res.json().msg);
                        console.log(res.json());
                    }
                });
            }
        }
        this.api.dismissLoading();
    }
    reject(x) {
        this.api.loading();
        this.actionBtn = true;
        console.log(x);
        const formData = new FormData();
        formData.append('book_id', x.book_id);
        formData.append('book_status', '0');
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/book', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
                this.api.dismissLoading();
                this.getNotifications();
            }
            else {
                this.api.dismissLoading();
                this.api.toast(res.json().msg);
                console.log(res.json());
            }
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_7__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-notifications',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_7__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController])
], NotificationsPage);



/***/ }),

/***/ 38121:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/notifications/notifications.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Book status = \n0-reject,1-accept,2=cancel,3=pending,4=removed\n\nnoti_type = \n1=book request,\n2=accpet request,\n3=reject request,\n4=cancel event,\n5=follow,\n6= new event,\n7 = unfollow, \n8 = chat_message, \n9= review reminder, \n10 = event details changed, \n11 => remove participent \n//pending development\n12 => event delete\n -->\n\n<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <!-- <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n        </ion-buttons> -->\n    <ion-title\n      style=\"font-family: montserrat-medium\"\n      class=\"top-fixed-heading uppercaes\"\n      [translate]=\"'NOTIFICATIONS.Text1'\"\n    ></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"notifiaction-content\" *ngIf=\"!emptyData\">\n  <div *ngFor=\"let detail of allNotificationList\">\n    <div *ngIf=\"detail.noti_type=='3'\">\n      <div *ngIf=\"detail.book_status==='0' \">\n        <ion-row style=\"border-bottom: solid thin #cccccc\">\n          <ion-col [size]=\"2\">\n            <ion-avatar\n              style=\"display: flex; align-items: center\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <ion-img\n                *ngIf=\"detail.host_user_id!=userId\"\n                (click)=\"viewProfile(detail)\"\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.host_user_img\"\n              ></ion-img>\n              <ion-img\n                *ngIf=\"detail.host_user_id==userId\"\n                (click)=\"viewOtherProfile(detail)\"\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.book_user_img\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n            <div\n              style=\"font-size: 14px; width: 100%; padding-bottom: 10px\"\n              *ngIf=\"detail.host_user_id!=userId\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <b>{{detail.hostName | titlecase}}</b>\n              <span [translate]=\"'NOTIFICATIONS.Text7'\"></span>\n            </div>\n            <div\n              style=\"font-size: 14px; width: 100%; padding-bottom: 10px\"\n              *ngIf=\"detail.host_user_id==userId\"\n              (click)=\"viewOtherProfile(detail)\"\n            >\n              {{'NOTIFICATIONS.rejectedByHost' |translate}}\n              <b>{{detail.nameFormatted | titlecase}}</b>\n              <span [translate]=\"'NOTIFICATIONS.Text6'\"></span>\n            </div>\n          </ion-col>\n          <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n            <div style=\"font-size: 11px; color: #444444\">\n              {{detail.noti_create_date}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div *ngIf=\"detail.noti_type=='12'\">\n      <ion-row style=\"border-bottom: solid thin #cccccc\">\n        <ion-col [size]=\"2\">\n          <ion-avatar style=\"display: flex; align-items: center\">\n            <ion-img\n              *ngIf=\"detail.host_user_id==userId\"\n              (click)=\"viewOtherProfile(detail)\"\n              style=\"height: 40px; width: 40px\"\n              [src]=\"detail.book_user_img\"\n            ></ion-img>\n            <ion-img\n              (click)=\"viewProfile(detail)\"\n              *ngIf=\"detail.host_user_id!=userId\"\n              style=\"height: 40px; width: 40px\"\n              [src]=\"detail.host_user_img\"\n            ></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n          <div\n            style=\"\n              font-size: 14px;\n              width: 100%;\n\n              padding-bottom: 10px;\n            \"\n            (click)=\"viewProfile(detail)\"\n          >\n            <b\n              >{{detail.host_user_f_name | titlecase}}\n              {{detail.book_user_l_name.slice(0,1)|titlecase}}.\n            </b>\n            <span [translate]=\"'NOTIFICATIONS.DELETED_EVENT'\"></span> :\n            <b> {{detail.event_sport_cate_name}} </b>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n          <div style=\"font-size: 11px; color: #444444\">\n            {{detail.noti_create_date}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf=\"detail.noti_type=='2'\">\n      <div *ngIf=\"detail.book_status==='1'\">\n        <ion-row style=\"border-bottom: solid thin #cccccc\">\n          <ion-col [size]=\"2\">\n            <ion-avatar style=\"display: flex; align-items: center\">\n              <ion-img\n                *ngIf=\"detail.host_user_id==userId\"\n                (click)=\"viewOtherProfile(detail)\"\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.book_user_img\"\n              ></ion-img>\n              <ion-img\n                (click)=\"viewProfile(detail)\"\n                *ngIf=\"detail.host_user_id!=userId\"\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.host_user_img\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n            <div\n              style=\"\n                font-size: 14px;\n                width: 100%;\n\n                padding-bottom: 10px;\n              \"\n              *ngIf=\"detail.host_user_id!=userId\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <b>{{detail.hostName | titlecase}} </b>\n              <span [translate]=\"'NOTIFICATIONS.Text5'\"></span>\n            </div>\n            <div\n              style=\"\n                font-size: 14px;\n                width: 100%;\n\n                padding-bottom: 10px;\n              \"\n              *ngIf=\"detail.host_user_id==userId\"\n              (click)=\"viewOtherProfile(detail)\"\n            >\n              <span [translate]=\"'NOTIFICATIONS.Text61'\"></span>\n              <b>{{detail.nameFormatted | titlecase}}</b>\n              <span [translate]=\"'NOTIFICATIONS.Text6'\"></span>\n            </div>\n          </ion-col>\n          <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n            <div style=\"font-size: 11px; color: #444444\">\n              {{detail.noti_create_date}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div *ngIf=\"detail.noti_type=='11'\">\n      <div *ngIf=\"detail.book_status==='4' \">\n        <ion-row style=\"border-bottom: solid thin #cccccc\">\n          <ion-col [size]=\"2\">\n            <ion-avatar\n              class=\"noti-imgbox\"\n              style=\"display: flex; align-items: center\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <ion-img\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.host_user_img\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n            <div\n              style=\"font-size: 14px; width: 100%; padding-bottom: 10px\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <b>{{detail.hostName | titlecase}}</b>\n              <span [translate]=\"'NOTIFICATIONS.removedFromEvent'\"></span>\n            </div>\n          </ion-col>\n          <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n            <div style=\"font-size: 11px; color: #444444\">\n              {{detail.noti_create_date}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div *ngIf=\"detail.noti_type=='4'\">\n      <div *ngIf=\"detail.book_status==='2' \">\n        <ion-row style=\"border-bottom: solid thin #cccccc\">\n          <ion-col [size]=\"2\">\n            <ion-avatar\n              class=\"noti-imgbox\"\n              style=\"display: flex; align-items: center\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <ion-img\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.book_user_img\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n            <div\n              style=\"font-size: 14px; width: 100%; padding-bottom: 10px\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <!-- <b>{{detail.hostName | titlecase}}</b> -->\n              <b>{{detail.book_user_f_name | titlecase}}</b>\n              <span [translate]=\"'NOTIFICATIONS.WITHDRAWN'\"></span>\n            </div>\n          </ion-col>\n          <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n            <div style=\"font-size: 11px; color: #444444\">\n              {{detail.noti_create_date}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <!-- Following Started -->\n    <div *ngIf=\"detail.noti_type==='5'\">\n      <ion-row style=\"border-bottom: solid thin #cccccc\">\n        <ion-col [size]=\"2\">\n          <ion-avatar\n            class=\"noti-imgbox\"\n            style=\"display: flex; align-items: center\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <ion-img\n              style=\"height: 40px; width: 40px\"\n              [src]=\"detail.book_user_img\"\n            ></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n          <div\n            style=\"font-size: 14px; width: 100%\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <b>{{detail.nameFormatted | titlecase}}</b>\n            <span [translate]=\"'NOTIFICATIONS.Text8'\"></span>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n          <div style=\"font-size: 11px; color: #444444\">\n            {{detail.noti_create_date}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- New Event From Friend -->\n\n    <div *ngIf=\"detail.noti_type==='1'\">\n      <div *ngIf=\"detail.book_status==='0'  && detail.noti_type!='10'\">\n        <ion-row style=\"border-bottom: solid thin #cccccc\">\n          <ion-col [size]=\"2\">\n            <ion-avatar\n              style=\"display: flex; align-items: center\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <ion-img\n                *ngIf=\"detail.host_user_id!=userId\"\n                (click)=\"viewProfile(detail)\"\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.host_user_img\"\n              ></ion-img>\n              <ion-img\n                *ngIf=\"detail.host_user_id==userId\"\n                (click)=\"viewOtherProfile(detail)\"\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.book_user_img\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n            <div\n              style=\"font-size: 14px; width: 100%; padding-bottom: 10px\"\n              *ngIf=\"detail.host_user_id!=userId\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <b>{{detail.hostName | titlecase}}</b>\n              <span [translate]=\"'NOTIFICATIONS.Text7'\"></span>\n            </div>\n            <div\n              style=\"font-size: 14px; width: 100%; padding-bottom: 10px\"\n              *ngIf=\"detail.host_user_id==userId\"\n              (click)=\"viewOtherProfile(detail)\"\n            >\n              {{'NOTIFICATIONS.rejectedByHost' |translate}}\n              <b>{{detail.nameFormatted | titlecase}}</b>\n              <span [translate]=\"'NOTIFICATIONS.Text6'\"></span>\n            </div>\n          </ion-col>\n          <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n            <div style=\"font-size: 11px; color: #444444\">\n              {{detail.noti_create_date}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"detail.book_status==='1'\">\n        <ion-row style=\"border-bottom: solid thin #cccccc\">\n          <ion-col [size]=\"2\">\n            <ion-avatar style=\"display: flex; align-items: center\">\n              <ion-img\n                *ngIf=\"detail.host_user_id==userId\"\n                (click)=\"viewOtherProfile(detail)\"\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.book_user_img\"\n              ></ion-img>\n              <ion-img\n                (click)=\"viewProfile(detail)\"\n                *ngIf=\"detail.host_user_id!=userId\"\n                style=\"height: 40px; width: 40px\"\n                [src]=\"detail.host_user_img\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n            <div\n              style=\"\n                font-size: 14px;\n                width: 100%;\n\n                padding-bottom: 10px;\n              \"\n              *ngIf=\"detail.host_user_id!=userId\"\n              (click)=\"viewProfile(detail)\"\n            >\n              <b>{{detail.hostName | titlecase}} </b>\n              <span [translate]=\"'NOTIFICATIONS.Text5'\"></span>\n            </div>\n            <div\n              style=\"\n                font-size: 14px;\n                width: 100%;\n\n                padding-bottom: 10px;\n              \"\n              *ngIf=\"detail.host_user_id==userId\"\n              (click)=\"viewOtherProfile(detail)\"\n            >\n              <span [translate]=\"'NOTIFICATIONS.Text61'\"></span>\n              <b>{{detail.nameFormatted | titlecase}}</b>\n              <span [translate]=\"'NOTIFICATIONS.Text6'\"></span>\n            </div>\n          </ion-col>\n          <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n            <div style=\"font-size: 11px; color: #444444\">\n              {{detail.noti_create_date}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf=\"detail.book_status=='3'\">\n        <div class=\"noti-row-withimg\">\n          <ion-avatar\n            class=\"noti-imgbox\"\n            style=\"display: flex; align-items: center\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <ion-img\n              style=\"height: 50px; width: 50px\"\n              [src]=\"detail.book_user_img\"\n            ></ion-img>\n          </ion-avatar>\n          <div class=\"noti-head\" (click)=\"viewOtherProfile(detail)\">\n            <b>{{detail.nameFormatted | titlecase}} </b>\n            <span [translate]=\"'NOTIFICATIONS.Text2'\"></span>\n          </div>\n          <div class=\"noti-other-details\" *ngIf=\"detail.event_type==='1'\">\n            <b> {{detail.event_individuals_title | titlecase}}</b>\n            <div class=\"iconswith-row\">\n              <img\n                class=\"location-img\"\n                src=\"assets/images/unselectedlocation.png\"\n              />\n              <div class=\"details-box\">\n                {{detail.event_individuals_address}}\n              </div>\n            </div>\n            <div class=\"iconswith-row\">\n              <img class=\"time-img\" src=\"assets/images/time.png\" />\n              <div class=\"details-box\">\n                {{detail.event_individuals_date}} - {{detail.event_time}}\n              </div>\n            </div>\n            <div class=\"iconswith-row\">\n              <img src=\"assets/images/people.png\" />\n              <div class=\"details-box\">\n                Participants: {{detail.event_individuals_participants_min}} /\n                {{detail.event_individuals_participants_max}}\n              </div>\n            </div>\n            <button\n              ion-button\n              class=\"det-submit-button global-btn themecolor\"\n              (click)=\"accept(detail)\"\n              [translate]=\"'NOTIFICATIONS.Text3'\"\n            ></button>\n            <button\n              ion-button\n              class=\"det-submit-button global-btn themecolor\"\n              (click)=\"reject(detail)\"\n              [translate]=\"'NOTIFICATIONS.Text4'\"\n            ></button>\n          </div>\n          <div class=\"noti-other-details\" *ngIf=\"detail.event_type==='2'\">\n            <b> {{detail.event_coach_title}}</b>\n            <div class=\"iconswith-row\">\n              <img\n                class=\"location-img\"\n                src=\"assets/images/unselectedlocation.png\"\n              />\n              <div class=\"details-box\">{{detail.event_coach_address}}</div>\n            </div>\n            <div class=\"iconswith-row\">\n              <img class=\"time-img\" src=\"assets/images/time.png\" />\n              <div class=\"details-box\">\n                {{detail.event_coach_date}} - {{detail.event_time}}\n              </div>\n            </div>\n            <div class=\"iconswith-row\">\n              <img src=\"assets/images/people.png\" />\n              <div class=\"details-box\">\n                Participants: {{detail.event_coach_participants_min}} /\n                {{detail.event_coach_participants_max}}\n              </div>\n            </div>\n            <ion-button\n              [disabled]=\"detail.isFull || actionBtn\"\n              class=\"det-submit-button global-btn themecolor\"\n              (click)=\"accept(detail)\"\n              [translate]=\"'NOTIFICATIONS.Text3'\"\n            >\n            </ion-button>\n            <ion-button\n              [disabled]=\"actionBtn\"\n              class=\"det-submit-button global-btn themecolor\"\n              (click)=\"reject(detail)\"\n              [translate]=\"'NOTIFICATIONS.Text4'\"\n            >\n            </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"detail.noti_type==='6'\">\n      <ion-row style=\"border-bottom: solid thin #cccccc\">\n        <ion-col [size]=\"2\">\n          <ion-avatar\n            class=\"noti-imgbox\"\n            style=\"display: flex; align-items: center\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <ion-img\n              style=\"height: 40px; width: 40px\"\n              [src]=\"detail.book_user_img\"\n            ></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n          <div\n            style=\"font-size: 14px; width: 100%\"\n            *ngIf=\"detail.event_type=='1'\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <b>{{detail.nameFormatted | titlecase}}</b>\n            <span [translate]=\"'NOTIFICATIONS.Text10'\"></span>\n            <b>{{detail.event_individuals_title | titlecase}}</b>\n          </div>\n          <div\n            style=\"font-size: 14px; width: 100%\"\n            *ngIf=\"detail.event_type=='2'\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <b>{{detail.nameFormatted | titlecase}}</b>\n            <span [translate]=\"'NOTIFICATIONS.Text10'\"></span>\n            <b>{{detail.event_coach_title | titlecase}}</b>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n          <div style=\"font-size: 11px; color: #444444\">\n            {{detail.noti_create_date}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- UnFollowed User -->\n    <div *ngIf=\"detail.noti_type==='7'\">\n      <ion-row style=\"border-bottom: solid thin #cccccc\">\n        <ion-col [size]=\"2\">\n          <ion-avatar\n            class=\"noti-imgbox\"\n            style=\"display: flex; align-items: center\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <ion-img\n              style=\"height: 40px; width: 40px\"\n              [src]=\"detail.book_user_img\"\n            ></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n          <div\n            style=\"font-size: 14px; width: 100%\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <b>{{detail.nameFormatted | titlecase}}</b>\n            <span [translate]=\"'NOTIFICATIONS.Text9'\"></span>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n          <div style=\"font-size: 11px; color: #444444\">\n            {{detail.noti_create_date}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div\n      *ngIf=\"detail.noti_type==='9'\"\n      style=\"border-bottom: solid thin #cccccc\"\n    >\n      <ion-row>\n        <ion-col [size]=\"2\">\n          <ion-avatar\n            class=\"noti-imgbox\"\n            style=\"display: flex; align-items: center\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <ion-img\n              style=\"height: 40px; width: 40px\"\n              [src]=\"detail.book_user_img\"\n            ></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n          <div\n            style=\"font-size: 14px; width: 100%\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <!-- <b>{{detail.nameFormatted | titlecase}}</b> -->\n            <span>{{detail.noti_title}}</span>\n            <b> {{detail.event_sport_cate_name|titlecase}} </b>\n            <span> {{\"NOTIFICATIONS.BY\"|translate}}</span>\n            <span>\n              {{detail.host_user_f_name|titlecase}}\n              {{detail.host_user_l_name|titlecase}}\n            </span>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n          <div style=\"font-size: 11px; color: #444444\">\n            {{detail.noti_create_date}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"display: flex; flex-direction: row-reverse\">\n        <ion-button style=\"padding-right: 10px\" (click)=\"review(detail)\">\n          {{\"Review\"|translate}}\n        </ion-button>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"detail.noti_type==='10'\">\n      <ion-row style=\"border-bottom: solid thin #cccccc\">\n        <ion-col [size]=\"2\">\n          <ion-avatar\n            class=\"noti-imgbox\"\n            style=\"display: flex; align-items: center\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <ion-img\n              style=\"height: 40px; width: 40px\"\n              [src]=\"detail.book_user_img\"\n            ></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col [size]=\"8\" style=\"display: flex; align-items: center\">\n          <div\n            style=\"font-size: 14px; width: 100%\"\n            *ngIf=\"detail.event_type=='1'\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <b>{{detail.nameFormatted | titlecase}}</b>\n            <span [translate]=\"'NOTIFICATIONS.EventUpdated'\"></span>\n            <b>{{detail.event_individuals_title | titlecase}}</b>\n          </div>\n          <div\n            style=\"font-size: 14px; width: 100%\"\n            *ngIf=\"detail.event_type=='2'\"\n            (click)=\"viewOtherProfile(detail)\"\n          >\n            <b>{{detail.nameFormatted | titlecase}}</b>\n            <span [translate]=\"'NOTIFICATIONS.EventUpdated'\"></span>\n            <b>{{detail.event_coach_title | titlecase}}</b>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"2\" style=\"display: flex; align-items: center\">\n          <div style=\"font-size: 11px; color: #444444\">\n            {{detail.noti_create_date}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- </div> -->\n  </div>\n</ion-content>\n<ion-content *ngIf=\"emptyData\">\n  <div\n    style=\"\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      font-family: montserrat-medium;\n      align-items: center;\n    \"\n    [translate]=\"'NOTIFICATIONS.Text12'\"\n  ></div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\">\n        <img\n          src=\"assets/images/selectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 41899:
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.notifiaction-content .noti-colorbox {\n  border-bottom: solid thin #cccccc;\n  background: #ffe8b9;\n  width: 100%;\n  padding: 10px 10px 0px 10px;\n}\n.notifiaction-content .noti-row-withimg {\n  position: relative;\n  width: 100%;\n  padding: 5px 0px 10px 50px;\n  border-bottom: solid thin #cccccc;\n  margin-bottom: 10px;\n}\n.notifiaction-content .noti-row-withimg .noti-imgbox {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.notifiaction-content .noti-row-withimg .noti-imgbox img {\n  width: 40px;\n  height: 40px;\n  border: solid thin #ffffff;\n  background: #e1e1e1;\n}\n.notifiaction-content .noti-row-withimg .noti-head {\n  font-size: 14px;\n  width: 100%;\n  border-bottom: solid thin #666666;\n  padding-bottom: 10px;\n}\n.notifiaction-content .noti-row-withimg .noti-head b {\n  display: inline-block;\n  font-family: \"montserrat-medium\";\n}\n.notifiaction-content .noti-row-withimg .noti-other-details {\n  font-size: 12px;\n  padding: 10px 0px 0px 0px;\n  display: inline-block;\n  width: 100%;\n}\n.notifiaction-content .noti-row-withimg .noti-other-details b {\n  width: 100%;\n  padding: 0px 0px 10px 0px;\n  font-size: 16px;\n  display: inline-block;\n  font-family: \"montserrat-medium\";\n}\n.notifiaction-content .noti-row-withimg .noti-other-details .iconswith-row {\n  position: relative;\n  padding-left: 30px;\n  text-align: left;\n  width: 100%;\n  min-height: 30px;\n  margin-bottom: 5px;\n}\n.notifiaction-content .noti-row-withimg .noti-other-details .iconswith-row img {\n  position: absolute;\n  width: 20px;\n  left: 0px;\n}\n.notifiaction-content .noti-row-withimg .noti-other-details .time-img {\n  width: 18px !important;\n}\n.notifiaction-content .noti-row-withimg .noti-other-details .location-img {\n  width: 16px !important;\n}\n.notifiaction-content .noti-row-withimg .noti-other-details .det-submit-button {\n  float: right;\n  height: 30px;\n  font-size: 14px;\n  padding: 5px 10px;\n  text-transform: capitalize;\n  width: 48%;\n  margin: 0px 1%;\n  text-align: center;\n}\n.notifiaction-content .noti-row-withimg .noti-time {\n  position: absolute;\n  right: 0px;\n  top: 8px;\n  font-size: 11px;\n  color: #444444;\n}\n.notifiaction-content .noti-whitebox {\n  padding: 10px 15px;\n  display: inline-block;\n  width: 100%;\n}\n.notifiaction-content .noti-single-row {\n  border-bottom: solid thin #cccccc;\n}\n.notifiaction-content .noti-single-row .noti-head {\n  border: none;\n  padding-bottom: 0px;\n  padding-right: 25px;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #ffaa00;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBRUo7QUFFRTtFQUVFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUVFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFFSTtFQU1FLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtBQUxOO0FBRk07RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0FBSVI7QUFJSTtFQUVFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUhOO0FBSU07RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUZSO0FBSU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZSO0FBR1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBRFY7QUFJTTtFQUNFLHNCQUFBO0FBRlI7QUFJTTtFQUNFLHNCQUFBO0FBRlI7QUFJTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRlI7QUFLSTtFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpOO0FBT0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUxKO0FBT0U7RUFFRSxpQ0FBQTtBQU5KO0FBT0k7RUFDQyxZQUFBO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtBQUxOO0FBVUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEY7QUFRRTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBTko7QUFPSTtFQUNFLFVBQUE7RUFDRixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUxKO0FBTU07RUFDRSxVQUFBO0FBSlI7QUFNTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFKUiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItZml4ZWQtdG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLnRvcC1nbG9iYWwtdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLm5vdGlmaWFjdGlvbi1jb250ZW50IHtcbiAgLm5vdGktY29sb3Jib3hcbiAge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gI2NjY2NjYztcbiAgICBiYWNrZ3JvdW5kOiAjZmZlOGI5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbiAgfVxuICAubm90aS1yb3ctd2l0aGltZ3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDBweCAxMHB4IDUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLm5vdGktaW1nYm94XG4gICAge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgdG9wOiAwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB0aGluICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XG4gICAgICB9XG4gICAgfVxuICAgIC5ub3RpLWhlYWRcbiAgICB7XG4gICAgICBie1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OlwibW9udHNlcnJhdC1tZWRpdW1cIjtcbiAgICAgIH1cbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjNjY2NjY2O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICB9XG4gICAgLm5vdGktb3RoZXItZGV0YWlsc1xuICAgIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1mYW1pbHk6XCJtb250c2VycmF0LW1lZGl1bVwiO1xuICAgICAgfVxuICAgICAgLmljb25zd2l0aC1yb3d7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRpbWUtaW1ne1xuICAgICAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmxvY2F0aW9uLWltZ3tcbiAgICAgICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5kZXQtc3VibWl0LWJ1dHRvbntcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICBtYXJnaW46IDBweCAxJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAubm90aS10aW1lXG4gICAge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIHRvcDogOHB4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgfVxuICB9XG4gIC5ub3RpLXdoaXRlYm94e1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm5vdGktc2luZ2xlLXJvd1xuICB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgIC5ub3RpLWhlYWR7XG4gICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIH1cblxuICB9XG59XG4uZm9vdGVyLWZpeGVkLXRhYiB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNSU7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC5mb290ZXItYnRuLXRhYnMge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAucm91bmR7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFhMDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_notifications_notifications_module_ts.js.map