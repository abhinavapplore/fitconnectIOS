"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chatpage_chatpage_module_ts"],{

/***/ 37651:
/*!*****************************************************!*\
  !*** ./src/app/chatpage/chatpage-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatpagePageRoutingModule": () => (/* binding */ ChatpagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _chatpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatpage.page */ 7794);




const routes = [
    {
        path: '',
        component: _chatpage_page__WEBPACK_IMPORTED_MODULE_0__.ChatpagePage
    }
];
let ChatpagePageRoutingModule = class ChatpagePageRoutingModule {
};
ChatpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatpagePageRoutingModule);



/***/ }),

/***/ 63554:
/*!*********************************************!*\
  !*** ./src/app/chatpage/chatpage.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatpagePageModule": () => (/* binding */ ChatpagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _chatpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatpage-routing.module */ 37651);
/* harmony import */ var _chatpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatpage.page */ 7794);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let ChatpagePageModule = class ChatpagePageModule {
};
ChatpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chatpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatpagePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_chatpage_page__WEBPACK_IMPORTED_MODULE_1__.ChatpagePage]
    })
], ChatpagePageModule);



/***/ }),

/***/ 7794:
/*!*******************************************!*\
  !*** ./src/app/chatpage/chatpage.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatpagePage": () => (/* binding */ ChatpagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chatpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chatpage.page.html */ 11856);
/* harmony import */ var _chatpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatpage.page.scss */ 32811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/keyboard/ngx */ 71239);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translate-config.service */ 47464);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);














let ChatpagePage = class ChatpagePage {
    constructor(router, af, http, fs, storage, route, api, keyboard, translateSevice) {
        this.router = router;
        this.af = af;
        this.http = http;
        this.fs = fs;
        this.storage = storage;
        this.route = route;
        this.api = api;
        this.keyboard = keyboard;
        this.translateSevice = translateSevice;
        this.eventGroups = [];
        this.openchats = [];
        this.showList = false;
        this.isSearch = false;
        this.footerAction = true;
        this.emptydata = false;
        this.notificationPresent = false;
        this.storage.get('user_id').then((user_id) => {
            this.uid = user_id;
            this.storage.get('user_type').then((user_type) => {
                this.userType = user_type;
            });
        });
        this.keyboard.onKeyboardWillShow().subscribe((data) => {
            this.footerAction = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe((data) => {
            this.footerAction = true;
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
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_type').then((user_type) => {
                this.uid = user_id;
                this.getEventGroups();
                if (user_type === '2') {
                    this.storage.get('verifiedCoach').then((isSubscribed) => {
                        if (isSubscribed) {
                            this.getChats();
                        }
                        else {
                            this.emptyCoach = true;
                        }
                    });
                }
                else {
                    this.getChats();
                }
            });
        });
    }
    getEventGroups() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // let res = await this.api.postapi('fields/event_groups', {
            //   user_id: this.uid,
            // });
            // console.log('EVENTS GROUPS', res);
            let formData = new FormData();
            formData.append('user_id', this.uid + '');
            this.http
                .post(this.api.rootUrl + 'fields/event_groups', formData
            // {
            // user_id: this.uid + '',
            // }
            )
                .subscribe((data) => {
                console.log('EVENT GROUPS', data);
                this.eventGroups = data.result;
                // .collection('chats', (ref) => ref.orderBy('Timestamp', 'desc'))
                // .snapshotChanges();
                // This works:
                this.eventGroups.forEach((element) => {
                    let fsGroups = this.fs
                        .collection('events')
                        .doc(element.event_id + '')
                        .valueChanges()
                        .subscribe((data) => {
                        element.lastMsg = data.lastMsg;
                        // console.log(data);
                    });
                });
            }, (err) => {
                console.log(alert('Error getting groups'));
            });
        });
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => {
            if (lang == 'English') {
                this.topSearchPlaceHolder = 'Search...';
            }
            else {
                this.topSearchPlaceHolder = 'Chercher...';
            }
        });
    }
    gotosubscription() {
        this.api.Navigate('abonnement');
    }
    getChats() {
        this.openchats = [];
        this.api.timerloading();
        this.allUsers = this.fs
            .collection('friends')
            .doc(this.uid)
            .collection('chats', (ref) => ref.orderBy('Timestamp', 'desc'))
            .snapshotChanges();
        // This works:
        console.log(this.allUsers);
        var todayDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('DD-MM-YYYY');
        if (this.allUsers.length != 0) {
            this.allUsers.forEach((user) => {
                if (user.length == 0) {
                    this.emptydata = true;
                    this.api.dismissLoading();
                }
                else {
                    this.emptydata = false;
                    this.openchats = [];
                    user.forEach((userData) => {
                        let data = userData.payload.doc.data();
                        let id = userData.payload.doc.id;
                        let time = moment__WEBPACK_IMPORTED_MODULE_3__(userData.payload.doc.Timestamp).format("h:mm A'");
                        // console.log(typeof userData.payload.doc.Timestamp);
                        data.formatTime = time;
                        this.openchats.push(data);
                        console.log('this is openchat array');
                        console.log(this.openchats);
                        console.log('ID: ', id, ' Data: ', data);
                        if (this.openchats.length != 0) {
                            this.emptydata = false;
                            for (var i = 0; i < this.openchats.length; i++) {
                                // var msgDate=moment(this.openchats[i].msgDate);
                                if (this.openchats[i].msgDate != todayDate) {
                                    this.openchats[i].showTime = false;
                                }
                                else {
                                    this.openchats[i].showTime = true;
                                    // this.openchats[element].msgTime=this.openchats[element].msgDate;
                                }
                                if (this.openchats[i].msgRead == false) {
                                    this.storage.set('msgUnread', true);
                                    break;
                                }
                                else {
                                    console.log('msgRead');
                                    console.log(this.openchats[i]);
                                    this.storage.set('msgUnread', false);
                                }
                            }
                        }
                        else {
                            this.emptydata = true;
                        }
                    });
                    this.api.dismissLoading();
                }
            });
        }
        else {
            this.api.dismissLoading();
            this.emptydata = true;
        }
    }
    gotochat(item) {
        let recId = item.recieverId;
        let vc = {
            recieverId: recId,
            senderId: this.uid,
            recieverName: item.recieverName,
            recieverImg: item.recieverImage,
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['conversation'], navigationExtras);
    }
    gotoGroupChat(group) {
        // let recId = item.recieverId;
        let eventName = group.spcat_name || 'Event';
        eventName += ' : ' + group.event_date;
        let vc = {
            // eventId: group.event_id + '',
            recieverId: group.event_id + '',
            senderId: this.uid,
            recieverName: eventName,
            // recieverImg: 'item.recieverImage',
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['groupconversation'], navigationExtras);
    }
    //  this.router.navigateByUrl("conversation");
    back() {
        this.router.navigateByUrl('profile');
    }
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    ionViewWillLeave() {
        this.searchTerm = '';
        this.showList = false;
    }
    searchPressed() {
        this.isSearch = true;
    }
    getUser(ev) {
        var arr = [];
        for (let i = 0; i < this.openchats.length; i++) {
            var input = this.openchats[i];
            arr.push(input);
            let val = ev.target.value;
            if (val && val.trim() != '') {
                this.search = arr.filter(function (item) {
                    return (item.recieverName.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
                // Show the results
                if (this.search.length !== 0) {
                    this.showList = true;
                }
                else {
                    this.showList = false;
                }
            }
            else {
                this.showList = false;
            }
        }
    }
    selectChat(item) {
        this.showList = false;
        this.searchTerm = '';
        this.isSearch = false;
        console.log(item.evn_id);
        console.log(item.evn_name);
        console.log(item);
        this.gotochat(item);
    }
    closeSearch() {
        this.showList = false;
        this.isSearch = false;
        this.searchTerm = '';
    }
    events() {
        if (this.userType === '1') {
            this.api.Navigate('creer-evenement');
        }
        else {
            this.api.Navigate('evenementcoachvue');
        }
    }
    manage() {
        if (this.userType === '1') {
            this.api.Navigate('mes-evenements');
        }
        else {
            this.api.Navigate('evenements-coach');
        }
    }
    notifications() {
        this.api.Navigate('notifications');
    }
};
ChatpagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService }
];
ChatpagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-chatpage',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chatpage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chatpage_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute,
        _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService])
], ChatpagePage);



/***/ }),

/***/ 11856:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/chatpage/chatpage.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title\n      style=\"font-family: montserrat-medium\"\n      class=\"top-fixed-heading uppercaes\"\n      [translate]=\"'CHAT.Text1'\"\n    >\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row style=\"display: flex; flex-direction: row; justify-content: center\">\n    <ion-searchbar\n      style=\"margin-top: 4%; box-shadow: #000000 !important; width: 90%\"\n      placeholder=\"{{topSearchPlaceHolder}}\"\n      [(ngModel)]=\"searchTerm\"\n      (ionInput)=\"getUser($event)\"\n    >\n    </ion-searchbar>\n  </ion-row>\n\n  <!-- <div *ngIf=\"!emptydata\" style=\"margin-top: 20px\"> -->\n  <div style=\"margin-top: 20px\">\n    <div *ngIf=\"showList\">\n      <ion-list>\n        <ion-item *ngFor=\"let users of search\" (click)=\"selectChat(users)\">\n          <ion-text class=\"noti-head\">\n            <b style=\"color: black\"> {{users.recieverName}} </b>\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- <div class=\"messagerie-section\"> -->\n    <div *ngFor=\"let item of openchats\">\n      <ion-row\n        class=\"noti-row-withimg noti-single-row\"\n        style=\"padding-left: 10px; border-bottom: 2px solid lightgrey\"\n        *ngIf=\"item.blocked!=true\"\n        (click)=\"gotochat(item)\"\n      >\n        <!-- <ion-avatar style=\"display: flex;\n            align-items: flex-start;\"> -->\n        <!-- <div class=\"noti-imgbox\"> -->\n        <!-- <ion-img class=\"img\" style=\"height: 50px;\n              width: 50px;\" [src]=\"item.recieverImage\"></ion-img> -->\n        <ion-col\n          style=\"display: flex; flex-direction: column; justify-content: center\"\n          size=\"2\"\n        >\n          <ion-avatar\n            class=\"noti-imgbox\"\n            style=\"display: flex; align-items: center\"\n          >\n            <ion-img\n              style=\"width: 50px; height: 50px\"\n              [src]=\"item.recieverImage\"\n            ></ion-img>\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-row style=\"margin-top: 5px\">\n            <ion-col>\n              <div class=\"noti-head\">\n                <b>{{item.recieverName | titlecase}}</b>\n              </div>\n            </ion-col>\n            <!-- <ion-col style=\"display: flex; flex-direction: row-reverse\">\n              <div class=\"noti-time\" *ngIf=\"item.showTime\">\n                {{item.msgTime}}\n              </div>\n              <div class=\"noti-time\" *ngIf=\"!item.showTime\">\n                {{item.msgDate}}\n              </div>\n            </ion-col> -->\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div\n                *ngIf=\"!item.msgRead\"\n                style=\"\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                  color: black;\n                \"\n                class=\"details-user\"\n              >\n                {{item.lastMsg}}\n              </div>\n              <div\n                *ngIf=\"item.msgRead\"\n                style=\"font-family: montserrat-medium; color: grey\"\n                class=\"details-user\"\n              >\n                {{item.lastMsg}}\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <!-- </ion-avatar> -->\n        <!-- </div> -->\n\n        <!-- <div *ngIf=\"item.lastMsg==''||item.lastMsg==null\"> -->\n\n        <!-- </div> -->\n      </ion-row>\n    </div>\n    <ion-row\n      class=\"noti-row-withimg noti-single-row\"\n      style=\"padding-left: 10px; border-bottom: 2px solid lightgrey\"\n      *ngFor=\"let group of eventGroups\"\n      (click)=\"gotoGroupChat(group)\"\n    >\n      <!-- <ion-avatar style=\"display: flex;\n            align-items: flex-start;\"> -->\n      <!-- <div class=\"noti-imgbox\"> -->\n      <!-- <ion-img class=\"img\" style=\"height: 50px;\n              width: 50px;\" [src]=\"item.recieverImage\"></ion-img> -->\n      <ion-col\n        style=\"display: flex; flex-direction: column; justify-content: center\"\n        size=\"2\"\n      >\n        <ion-avatar\n          class=\"noti-imgbox\"\n          style=\"display: flex; align-items: center\"\n        >\n          <ion-img\n            style=\"width: 50px; height: 50px\"\n            src=\"{{group.host_user_img}}\"\n          ></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row style=\"margin-top: 5px\">\n          <ion-col>\n            <div class=\"noti-head\">\n              <b\n                >{{group.spcat_name||'Event ' | titlecase}} :\n                {{group.event_date|date}}</b\n              >\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <!-- *ngIf=\"!item.msgRead\" -->\n            <!-- <div\n              style=\"\n                font-family: montserrat-medium;\n                font-weight: bold;\n                color: black;\n              \"\n              class=\"details-user\"\n            >\n              {{group.lastMsg}}\n            </div> -->\n            <!-- *ngIf=\"item.msgRead\" -->\n            <div\n              *ngIf=\"group.lastMsg\"\n              style=\"font-family: montserrat-medium; color: grey\"\n              class=\"details-user\"\n            >\n              {{group.lastMsg.slice(0,15)}} {{group.lastMsg.length>15?'...':''}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- </ion-avatar> -->\n      <!-- </div> -->\n\n      <!-- <div *ngIf=\"item.lastMsg==''||item.lastMsg==null\"> -->\n\n      <!-- </div> -->\n    </ion-row>\n\n    <!-- </div> -->\n  </div>\n\n  <div *ngIf=\"emptydata && !this.eventGroups.length\">\n    <div\n      *ngIf=\"emptydata\"\n      style=\"\n        height: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        font-family: montserrat-medium;\n      \"\n      [translate]=\"'CHAT.Text2'\"\n    >\n      pas de discussions\n    </div>\n    <div *ngIf=\"emptyCoach\" style=\"padding: 10px\">\n      <ion-row\n        style=\"\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          font-family: montserrat-medium;\n          text-align: center;\n        \"\n        [translate]=\"'CHAT.Text3'\"\n      >\n      </ion-row>\n      <ion-row\n        style=\"display: flex; flex-direction: row; justify-content: center\"\n      >\n        <ion-button\n          style=\"--border-radius: 52px; --background: #ffaa00\"\n          (click)=\"gotosubscription()\"\n          [translate]=\"'CHAT.Text4'\"\n        >\n        </ion-button>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"footer-fixed-tab\" *ngIf=\"footerAction\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\">\n        <img src=\"assets/images/selectedmsg.png\" class=\"footer-img-chat\" />\n        <!-- <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div> -->\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\"></div>\n        <!-- <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div> -->\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 32811:
/*!*********************************************!*\
  !*** ./src/app/chatpage/chatpage.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  height: 77px;\n  width: 60px;\n}\n\n.header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: black !important;\n}\n\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n}\n\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 20px;\n}\n\n.header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n\n.messagerie-content .messagerie-searchbox {\n  position: fixed;\n  background: #ffffff;\n  z-index: 10;\n  box-shadow: black;\n  border: 1px solid white;\n  border-radius: 25px;\n  width: 95%;\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\n.messagerie-content .messagerie-list-container {\n  padding-top: 50px;\n}\n\n.messagerie-content .noti-row-withimg {\n  position: relative;\n  width: 50%;\n  padding: 5px 0px 10px 25px;\n  margin-bottom: 10px;\n}\n\n.messagerie-content .noti-row-withimg .noti-imgbox {\n  left: 0px;\n  top: 0px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n}\n\n.messagerie-content .noti-row-withimg .noti-imgbox img {\n  width: 40px;\n  height: 40px;\n  border: solid thin #ffffff;\n  background: #e1e1e1;\n}\n\n.messagerie-content .noti-row-withimg .details-user {\n  width: 100%;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #444444;\n}\n\n.messagerie-content .noti-row-withimg .noti-head {\n  font-size: 14px;\n  width: 100%;\n  border-bottom: solid thin #666666;\n  padding-bottom: 10px;\n}\n\n.messagerie-content .noti-row-withimg .noti-head b {\n  display: inline-block;\n}\n\n.messagerie-content .noti-row-withimg .noti-other-details {\n  font-size: 12px;\n  padding: 10px 0px 0px 0px;\n  display: inline-block;\n  width: 100%;\n}\n\n.messagerie-content .noti-row-withimg .noti-other-details b {\n  width: 100%;\n  padding: 0px 0px 10px 0px;\n  font-size: 16px;\n  display: inline-block;\n}\n\n.messagerie-content .noti-row-withimg .noti-other-details .iconswith-row {\n  position: relative;\n  padding-left: 30px;\n  text-align: left;\n  width: 100%;\n  min-height: 30px;\n  margin-bottom: 5px;\n}\n\n.messagerie-content .noti-row-withimg .noti-other-details .iconswith-row img {\n  position: absolute;\n  width: 20px;\n  left: 0px;\n}\n\n.messagerie-content .noti-row-withimg .noti-other-details .time-img {\n  width: 18px !important;\n}\n\n.messagerie-content .noti-row-withimg .noti-other-details .location-img {\n  width: 16px !important;\n}\n\n.messagerie-content .noti-row-withimg .noti-other-details .det-submit-button {\n  float: right;\n  height: 30px;\n  font-size: 14px;\n  padding: 5px 10px;\n  text-transform: capitalize;\n  width: 48%;\n  margin: 0px 1%;\n  text-align: center;\n}\n\n.messagerie-content .noti-row-withimg .noti-time {\n  position: absolute;\n  right: 0px;\n  left: 5px;\n  top: 8px;\n  font-size: 11px;\n  color: #444444;\n}\n\n.messagerie-content .messagerie-section {\n  padding: 10px 15px;\n  display: inline-block;\n  width: 100%;\n}\n\n.messagerie-content .noti-single-row {\n  border-bottom: solid thin #cccccc;\n}\n\n.messagerie-content .noti-single-row .noti-head {\n  border: none;\n  padding-bottom: 0px;\n  padding-right: 25px;\n}\n\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #ffaa00;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n\n.searchbar-input {\n  box-shadow: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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QkFBQTtBQVpKIiwiZmlsZSI6ImNoYXRwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXJ7XG4gICAgaGVpZ2h0OiA3N3B4O1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG4uaGVhZGVyLWZpeGVkLXRvcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC50b3AtZ2xvYmFsLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAtLWJveC1zaGFkb3c6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbi5mb290ZXItZml4ZWQtdGFiIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCA1JTtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIC5mb290ZXItYnRuLXRhYnMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1maXhlZC10b3Age1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAudG9wLWdsb2JhbC10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5tZXNzYWdlcmllLWNvbnRlbnQge1xuICAgIC5tZXNzYWdlcmllLXNlYXJjaGJveCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBib3gtc2hhZG93OiBibGFjaztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIH1cbiAgICAubWVzc2FnZXJpZS1saXN0LWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB9XG4gICAgLm5vdGktcm93LXdpdGhpbWd7XG4gICAgICAuYntcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogNXB4IDBweCAxMHB4IDI1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgLm5vdGktaW1nYm94XG4gICAgICB7XG4gICAgICBcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIHRoaW4gI2ZmZmZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZGV0YWlscy11c2VyXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgIH1cbiAgICAgIC5ub3RpLWhlYWRcbiAgICAgIHtcbiAgICAgICAgYntcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjNjY2NjY2O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgXG4gICAgICB9XG4gICAgICAubm90aS1vdGhlci1kZXRhaWxzXG4gICAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmljb25zd2l0aC1yb3d7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGltZS1pbWd7XG4gICAgICAgICAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubG9jYXRpb24taW1ne1xuICAgICAgICAgIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRldC1zdWJtaXQtYnV0dG9ue1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgbWFyZ2luOiAwcHggMSU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubm90aS10aW1lXG4gICAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1lc3NhZ2VyaWUtc2VjdGlvbntcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubm90aS1zaW5nbGUtcm93XG4gICAge1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgICAgLm5vdGktaGVhZHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgfVxuICBcbiAgICB9XG4gIH1cbiAgLmZvb3Rlci1maXhlZC10YWIge1xuICAgIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDUlO1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgLmZvb3Rlci1idG4tdGFicyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdW5ke1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYTAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoYmFyLWlucHV0e1xuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_chatpage_chatpage_module_ts.js.map