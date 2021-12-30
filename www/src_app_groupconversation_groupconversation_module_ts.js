"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_groupconversation_groupconversation_module_ts"],{

/***/ 75101:
/*!***********************************************************************!*\
  !*** ./src/app/groupconversation/groupconversation-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupconversationPageRoutingModule": () => (/* binding */ GroupconversationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _groupconversation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupconversation.page */ 3519);




const routes = [
    {
        path: '',
        component: _groupconversation_page__WEBPACK_IMPORTED_MODULE_0__.GroupconversationPage
    }
];
let GroupconversationPageRoutingModule = class GroupconversationPageRoutingModule {
};
GroupconversationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GroupconversationPageRoutingModule);



/***/ }),

/***/ 47303:
/*!***************************************************************!*\
  !*** ./src/app/groupconversation/groupconversation.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupconversationPageModule": () => (/* binding */ GroupconversationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _groupconversation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupconversation-routing.module */ 75101);
/* harmony import */ var _groupconversation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupconversation.page */ 3519);







let GroupconversationPageModule = class GroupconversationPageModule {
};
GroupconversationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _groupconversation_routing_module__WEBPACK_IMPORTED_MODULE_0__.GroupconversationPageRoutingModule
        ],
        declarations: [_groupconversation_page__WEBPACK_IMPORTED_MODULE_1__.GroupconversationPage]
    })
], GroupconversationPageModule);



/***/ }),

/***/ 3519:
/*!*************************************************************!*\
  !*** ./src/app/groupconversation/groupconversation.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupconversationPage": () => (/* binding */ GroupconversationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_groupconversation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./groupconversation.page.html */ 8526);
/* harmony import */ var _groupconversation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupconversation.page.scss */ 73130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ 80238);













let GroupconversationPage = class GroupconversationPage {
    // api: any;
    constructor(af, fs, storage, router, route, http, httpClient, api) {
        this.af = af;
        this.fs = fs;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.http = http;
        this.httpClient = httpClient;
        this.api = api;
        this.showList = false;
        this.isSearch = false;
        this.chatUserName = false;
        this.footerAction = true;
        this.notificationPresent = false;
        this.storage.get('user_id').then((user_id) => {
            this.uid = user_id;
            this.storage.get('user_type').then((user_type) => {
                this.userType = user_type;
            });
        });
        //Enter user id here
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_img').then((user_img) => {
                console.log('user_id', user_id);
                this.userImage = user_img;
                this.route.queryParams.subscribe((params) => {
                    console.log(params);
                    if (params && params.special && params.pageRoute) {
                        // alert('pageroute');
                        this.chatUserName = false;
                        this.title = 'Get Help';
                    }
                    else if (params && params.special) {
                        var todayDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('DD-MM-YYYY');
                        var details = JSON.parse(params.special);
                        // alert('else block');
                        console.log('PARAMS', details);
                        this.chatUserName = true;
                        // this.eventId = details.eventId;
                        this.recieverId = details.recieverId;
                        this.senderId = details.senderId;
                        this.recieverName = details.recieverName;
                        this.recieverImg = details.recieverImg;
                        // this.fs
                        //   .collection('friends')
                        //   .doc(this.senderId)
                        //   .collection('chats')
                        //   .doc(this.recieverId)
                        //   .update({
                        //     msgRead: true,
                        //   });
                        this.chatRef = this.fs
                            // .collection('friends')
                            .collection('events')
                            // .doc(this.senderId)
                            .doc(this.recieverId + '')
                            // .collection('chats')
                            // .doc(this.recieverId)
                            .collection('messagetrail', (ref) => ref.orderBy('Timestamp'))
                            .valueChanges();
                        console.log('CHATS', this.chatRef);
                        this.scrollToBottomOnInit();
                        this.uid = user_id;
                        console.log('Reciever/sender' +
                            this.recieverId +
                            ' ' +
                            this.senderId +
                            '' +
                            this.uid);
                        // this.chatRef = this.fs.collection('chats', ref => ref.orderBy('Timestamp')).valueChanges();
                        // tslint:disable-next-line: max-line-length
                        //  this.fs.collection("friends").doc(this.senderId).collection('chats').doc(this.recieverId)
                        //  .get().subscribe((doc)=>{
                        //    if (doc.exists) {
                        //      console.log("Document data:", doc.data());
                        //      this.userName=doc.data().recieverName;
                        //    } else {
                        //      // doc.data() will be undefined in this case
                        //      console.log("No such document!");
                        //    }
                        //  })
                    }
                });
            });
        });
    }
    events() {
        if (this.userType === '1') {
            this.api.Navigate('creer-evenement');
        }
        else {
            this.api.Navigate('evenementcoachvue');
        }
    }
    ngOnInit() {
        this.scrollToBottomOnInit();
    }
    ionViewDidEnter() {
        this.scrollToBottomOnInit();
    }
    viewProfile() {
        console.log('my event');
        console.log('others event');
        var vc = { user_id: this.recieverId };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['coachviewprofile'], navigationExtras);
    }
    scrollToBottomOnInit() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom(400);
            }
        }, 500);
    }
    send(text) {
        if (this.text != '') {
            var formattedTime = moment__WEBPACK_IMPORTED_MODULE_3__().format('HH:mm');
            var formattedDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('DD-MM-YYYY');
            // this.fs.collection('chats').add({
            //   Name: "test user",
            //   Message: text,
            //   UserID: this.uid,
            //   Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            // });
            // this.text = '';
            console.log('lola');
            console.log(this);
            // this.fs
            //   .collection('friends')
            //   .doc(this.senderId)
            //   .collection('chats')
            //   .doc(this.recieverId)
            //   .collection('messagetrail')
            //   .add({
            //     Message: text,
            //     UserID: this.uid,
            //     Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //     // recieverId: this.recieverId,
            //     senderId: this.senderId,
            //     msgTime: formattedTime,
            //     msgDate: formattedDate,
            //     msgSent: true,
            //     msgRead: false,
            //   });
            // this.fs
            //   .collection('friends')
            //   .doc(this.senderId)
            //   .collection('chats')
            //   .doc(this.recieverId)
            //   .update({
            //     lastMsg: this.text,
            //     msgTime: formattedTime,
            //     msgDate: formattedDate,
            //     Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //     msgRead: true,
            //   });
            // this.fs
            //   .collection('events')
            //   .doc(this.recieverId + '')
            //   .collection('messagetrail')
            //   .doc(this.senderId)
            //   .update({
            //     lastMsg: this.text,
            //     msgTime: formattedTime,
            //     msgDate: formattedDate,
            //     Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //     msgRead: true,
            //   });
            this.fs
                // .collection('friends')
                .collection('events')
                // .doc(this.recieverId)
                .doc(this.recieverId + '')
                // .collection('chats')
                // .doc(this.senderId)
                .collection('messagetrail')
                .add({
                Name: this.recieverName,
                Message: text,
                UserID: this.uid,
                // UserID: 123,
                Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromDate(new Date()),
                recieverId: this.recieverId,
                // recieverId: 456,
                senderId: this.senderId,
                imgUrl: this.userImage,
                // senderId: 789,
                msgTime: formattedTime,
                msgDate: formattedDate,
                msgSent: true,
                msgRead: false,
            });
            this.fs.collection('events').doc(this.recieverId).set({ lastMsg: text });
            // this.fs
            //   .collection('friends')
            //   .doc(this.recieverId)
            //   .collection('chats')
            //   .doc(this.senderId)
            //   .update({
            //     lastMsg: this.text,
            //     msgTime: formattedTime,
            //     msgDate: formattedDate,
            //     Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //     msgRead: false,
            //   });
            this.scrollToBottomOnInit();
            const formData = new FormData();
            formData.append('noti_from_user_id', this.senderId);
            formData.append('noti_event_id', this.recieverId);
            formData.append('noti_message', this.text);
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/madd/send_group_notification', formData)
                .subscribe((res) => {
                if (res.json().status == 1) {
                }
                else {
                    console.log(res);
                }
            });
            this.text = '';
        }
    }
    back() {
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
    searchPressed() {
        this.isSearch = true;
    }
    eventdetails() {
        this.showList = false;
        this.subMenuList = false;
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        this.api.Navigate('mes-evenements');
    }
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    messages() {
        this.showList = false;
        this.subMenuList = false;
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
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
        this.showList = false;
        this.subMenuList = false;
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        this.api.Navigate('notifications');
    }
    getUser(ev) {
        var arr = [];
        var arr1 = [];
        this.fs
            .collection('friends')
            .doc(this.senderId)
            .collection('chats')
            .doc(this.recieverId)
            .collection('messagetrail')
            .get()
            .subscribe((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                arr1.push(doc.data());
                console.log(doc.id, ' => ', doc.data());
            });
            for (let i = 0; i < arr1.length; i++) {
                var input = arr1[i];
                arr.push(input);
                let val = ev.target.value;
                if (val && val.trim() != '') {
                    this.search = arr.filter(function (item) {
                        return item.Message.toLowerCase().indexOf(val.toLowerCase()) > -1;
                    });
                    this.showList = true;
                }
                else {
                    this.showList = false;
                }
            }
        });
    }
    selectChat(item) {
        this.showList = false;
        this.searchTerm = '';
        this.isSearch = false;
    }
    closeSearch() {
        this.showList = false;
        this.isSearch = false;
        this.searchTerm = '';
    }
};
GroupconversationPage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_9__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService }
];
GroupconversationPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['content', { static: false },] }]
};
GroupconversationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-groupconversation',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_groupconversation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_groupconversation_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute,
        _angular_http__WEBPACK_IMPORTED_MODULE_9__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient,
        _api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService])
], GroupconversationPage);



/***/ }),

/***/ 8526:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/groupconversation/groupconversation.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          [size]=\"2\"\n          style=\"display: flex; flex-direction: column; justify-content: center\"\n          (click)=\"back()\"\n        >\n          <img style=\"width: 50%\" src=\"../../assets/images/backblack.png\" />\n        </ion-col>\n        <!-- <ion-col [size]=\"2\" (click)=\"viewProfile()\"> -->\n        <!-- <ion-col [size]=\"2\">\n          <ion-avatar style=\"display: flex; align-items: center\"> </ion-avatar>\n        </ion-col> -->\n        <ion-col\n          *ngIf=\"chatUserName\"\n          [size]=\"8\"\n          style=\"\n            font-family: 'montserrat';\n            font-size: 1rem;\n            font-weight: bolder;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n          \"\n        >\n          <ion-text style=\"color: #ceb900; margin-top: 2px\"\n            >{{recieverName}}</ion-text\n          >\n        </ion-col>\n        <ion-col\n          *ngIf=\"!chatUserName\"\n          [size]=\"8\"\n          style=\"\n            text-align: center;\n            font-family: Open Sans-semibold;\n            font-size: 24px;\n          \"\n        >\n          <ion-text>{{title}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <div id=\"searchOverlay\">\n\n\n  <div *ngIf=\"isSearch\">\n    <ion-item style=\"background-color: #FFFFFF;\">\n      <ion-input style=\"background-color: whitesmoke;border-radius: 12px;font-family: Proxima Nova-bold;\" type=\"text\" searchIcon=\"disable\" placeholder=\"Type Here\" (ionInput)=\"getUser($event)\" value={{searchTerm}}></ion-input>\n    <ion-icon name=\"close-circle-outline\" (click)=\"closeSearch()\"></ion-icon>\n    </ion-item>\n    \n    \n   </div>\n\n   <div *ngIf=\"showList\">\n    <ion-list style=\"height: 55px;width: 30%;background-color: #FFFFFF;\" *ngFor=\"let item of search\" (click)=\"selectChat(item)\">\n      <ion-grid>\n        <ion-row style=\"text-align: center;\">\n          \n          \n              \n                <ion-text style=\"font-size: 13px;font-family:Open Sans-regular;color: #454F63;\">{{item.Message}}</ion-text><br>\n                \n             \n          \n        </ion-row>\n          \n        \n      </ion-grid>\n    </ion-list>\n  </div>\n</div> -->\n\n<ion-content #content>\n  <div class=\"chat\" *ngFor=\"let chat of chatRef | async\">\n    <div *ngIf=\"uid== chat.UserID\" class=\"me\" style=\"display: flex\">\n      <div class=\"me\" style=\"color: black; background: whitesmoke\">\n        <span>\n          {{chat.Message}} <br />\n          <span\n            style=\"\n              font-size: 10px;\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-end;\n            \"\n          >\n            {{chat.msgTime}}\n          </span>\n        </span>\n      </div>\n      <ion-avatar\n        style=\"display: flex; justify-content: center; align-items: flex-end\"\n      >\n        <ion-img [src]=\"userImage\" style=\"height: 35px; width: 35px\"> </ion-img>\n      </ion-avatar>\n    </div>\n    <div *ngIf=\"uid!=chat.UserID\" class=\"you\" style=\"display: flex\">\n      <ion-avatar\n        style=\"\n          display: flex;\n          flex-direction: row;\n          height: 35px;\n          width: 36px;\n          padding-top: 16%;\n          margin-right: 10%;\n        \"\n      >\n        <ion-img [src]=\"chat.imgUrl\" style=\"height: 35px; width: 35px\">\n        </ion-img>\n      </ion-avatar>\n      <div\n        class=\"you\"\n        style=\"color: white; background: #3e9dff; margin: 15px 0px 15px 0px\"\n      >\n        <span>\n          {{chat.Message}} <br />\n          <span\n            style=\"\n              font-size: 10px;\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-end;\n            \"\n          >\n            {{chat.msgTime}}\n          </span>\n        </span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- <ion-content class=\"massagechat-content\" [routerLink]=\"['/messagerie']\"\n             routerLinkActive=\"router-link-active\">\n    <section class=\"chat-internal-block\">\n        <div class=\"chat-massage-box\" *ngFor=\"let chat of chatRef | async\">\n            <div class=\"chat-row sender\" *ngIf=\"uid== chat.UserID\">\n                \n                <ion-img [src]=\"userImage\" style=\"height: 35px;width: 35px;\">\n                </ion-img>\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                      {{chat.Message}}\n                    </ion-text>\n                    <small class=\"chat-time\">15:07</small>\n                </div>\n            </div>\n            <div class=\"chat-row reciver\" *ngIf=\"uid!=chat.UserID\">\n              \n                <ion-img [src]=\"recieverImg\" style=\"height: 35px;width: 35px;\">\n                </ion-img>\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                      {{chat.Message}}\n                    </ion-text>\n                    <small class=\"chat-time\">15:10</small>\n                </div>\n            </div>\n            \n            \n            \n        </div>\n        \n    </section>\n</ion-content> -->\n\n<ion-row>\n  <ion-col>\n    <ion-item\n      class=\"chatbox\"\n      style=\"\n        border-radius: 25px;\n        box-shadow: #000000 !important;\n        width: 80%;\n        margin: auto;\n      \"\n    >\n      <ion-input\n        style=\"font-weight: bolder\"\n        placeholder=\"Type...\"\n        [(ngModel)]=\"text\"\n      ></ion-input>\n      <ion-button\n        style=\"border-radius: 50px\"\n        (click)=\"send(text)\"\n        fill=\"clear\"\n        icon-only\n        slot=\"end\"\n      >\n        <ion-icon name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n<ion-footer class=\"footer-fixed-tab\" *ngIf=\"footerAction\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"eventdetails()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/selectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 73130:
/*!***************************************************************!*\
  !*** ./src/app/groupconversation/groupconversation.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".chat {\n  display: flex;\n  flex-direction: column;\n}\n.chat .me {\n  position: relative;\n  margin: 20px 0px 0px;\n  max-width: 80%;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n  border-radius: 10px;\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat .meImage {\n  position: relative;\n  margin: 20px 5px 0px;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n}\n.chat .you {\n  position: relative;\n  margin: 15px;\n  max-width: 80%;\n  align-self: flex-start;\n  padding: 6px 10px 7px;\n  border-radius: 10px;\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat .you .name {\n  font-size: small;\n  font-weight: bold;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #d3c117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n.footer-md:before {\n  display: none;\n}\n.header-fixed-top {\n  text-align: center;\n}\n.header-fixed-top .head-profileimg {\n  width: 35px;\n  position: absolute;\n  left: -25px;\n  top: -10px;\n}\n.massagechat-content .chat-internal-block {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 10px 10px 50px 0px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box {\n  overflow: auto;\n  height: 100%;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .chat-row {\n  width: 96%;\n  margin-bottom: 10px;\n  display: inline-block;\n  margin-left: 2%;\n  position: relative;\n  font-size: 14px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender {\n  padding-left: 30px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender profile {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  left: 0px;\n  top: 3px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender .chat-msgbox {\n  background: #3e9dff;\n  padding: 8px 10px 5px 5px;\n  border-radius: 10px;\n  color: #ffffff;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .chat-time {\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver {\n  padding-right: 30px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver profile {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  right: 0px;\n  border-radius: 50%;\n  top: 3px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver .chat-msgbox {\n  background: #e4e4e4;\n  padding: 8px 5px 5px 10px;\n  border-radius: 10px;\n  color: #666666;\n}\n.massagechat-content .chat-internal-block .chat-txtbox {\n  width: 90%;\n  position: absolute;\n  left: 5%;\n  bottom: 10px;\n  border: solid thin #e1e1e1;\n  border-radius: 30px;\n  font-size: 12px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n/*  .notifiaction-content {\n   .noti-colorbox\n   {\n     background: #ffe8b9;\n     width: 100%;\n     padding: 10px 10px 0px 10px;\n   }\n   .noti-row-withimg{\n     position: relative;\n     width: 100%;\n     padding: 5px 0px 10px 50px;\n     border-bottom: solid thin #cccccc;\n     margin-bottom: 10px;\n     .noti-imgbox\n     {\n       position: absolute;\n       left: 0px;\n       top: 0px;\n       width: 40px;\n       height: 40px;\n       border-radius:50%;\n       overflow: hidden;\n       img{\n         width: 40px;\n         height: 40px;\n         border: solid thin #ffffff;\n         background: #e1e1e1;\n       }\n     }\n     .noti-head\n     {\n       b{\n         display: inline-block;\n       }\n       font-size: 14px;\n       width: 100%;\n       border-bottom: solid thin #666666;\n       padding-bottom: 10px;\n\n     }\n     .noti-other-details\n     {\n       font-size: 12px;\n       padding: 10px 0px 0px 0px;\n       display: inline-block;\n       width: 100%;\n       b{\n         width: 100%;\n         padding: 0px 0px 10px 0px;\n         font-size: 16px;\n         display: inline-block;\n       }\n       .iconswith-row{\n         position: relative;\n         padding-left: 30px;\n         text-align: left;\n         width: 100%;\n         min-height: 30px;\n         margin-bottom: 5px;\n         img{\n           position: absolute;\n           width: 20px;\n           left: 0px;\n         }\n       }\n       .time-img{\n         width: 18px !important;\n       }\n       .location-img{\n         width: 16px !important;\n       }\n       .det-submit-button{\n         float: right;\n         height: 30px;\n         font-size: 14px;\n         padding: 5px 10px;\n         text-transform: capitalize;\n         width: 48%;\n         margin: 0px 1%;\n         text-align: center;\n       }\n     }\n     .noti-time\n     {\n       position: absolute;\n       right: 0px;\n       top: 8px;\n       font-size: 11px;\n       color: #444444;\n     }\n   }\n   .noti-whitebox{\n     padding: 10px 15px;\n     display: inline-block;\n     width: 100%;\n   }\n   .noti-single-row\n   {\n     border-bottom: solid thin #cccccc;\n     .noti-head{\n       border: none;\n       padding-bottom: 0px;\n       padding-right: 25px;\n     }\n\n   }\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwY29udmVyc2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUVBLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUFOO0FBSUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREY7QUFFRTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQU07RUFDRSxVQUFBO0FBRVI7QUFBTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUlBO0VBQ0UsYUFBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtBQURGO0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUVJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFBTjtBQUNNO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDTTtFQUNFLGtCQUFBO0FBQ1I7QUFBUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUVWO0FBQVE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRVY7QUFDTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ1I7QUFDTTtFQUNFLG1CQUFBO0FBQ1I7QUFBUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBRVY7QUFBUTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFFVjtBQUVJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZFQUFBO0FBQU47QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBIiwiZmlsZSI6Imdyb3VwY29udmVyc2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLm1lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHg7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogNnB4IDEwcHggN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxuICAubWVJbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMjBweCA1cHggMHB4O1xuXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogNnB4IDEwcHggN3B4O1xuICB9XG4gIC55b3Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiA2cHggMTBweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG5cbiAgICAubmFtZSB7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG4uZm9vdGVyLWZpeGVkLXRhYiB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNSU7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC5mb290ZXItYnRuLXRhYnMge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgLnJvdW5kIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzYzExNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyLWZpeGVkLXRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmhlYWQtcHJvZmlsZWltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yNXB4O1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbi5tYXNzYWdlY2hhdC1jb250ZW50IHtcbiAgLmNoYXQtaW50ZXJuYWwtYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDUwcHggMHB4O1xuICAgIC5jaGF0LW1hc3NhZ2UtYm94IHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLmNoYXQtcm93IHtcbiAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLnNlbmRlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgcHJvZmlsZSB7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXQtbXNnYm94IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2U5ZGZmO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4IDVweCA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNoYXQtdGltZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLnJlY2l2ZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBwcm9maWxlIHtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5jaGF0LW1zZ2JveCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggNXB4IDVweCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmNoYXQtdHh0Ym94IHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA1JTtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlcjogc29saWQgdGhpbiAjZTFlMWUxO1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gICAgICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cbiAgfVxufVxuLyogIC5ub3RpZmlhY3Rpb24tY29udGVudCB7XG4gICAubm90aS1jb2xvcmJveFxuICAge1xuICAgICBiYWNrZ3JvdW5kOiAjZmZlOGI5O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xuICAgfVxuICAgLm5vdGktcm93LXdpdGhpbWd7XG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIHBhZGRpbmc6IDVweCAwcHggMTBweCA1MHB4O1xuICAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICNjY2NjY2M7XG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgIC5ub3RpLWltZ2JveFxuICAgICB7XG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICB0b3A6IDBweDtcbiAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICBpbWd7XG4gICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgIGJvcmRlcjogc29saWQgdGhpbiAjZmZmZmZmO1xuICAgICAgICAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgICAgICB9XG4gICAgIH1cbiAgICAgLm5vdGktaGVhZFxuICAgICB7XG4gICAgICAgYntcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICB9XG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gIzY2NjY2NjtcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgXG4gICAgIH1cbiAgICAgLm5vdGktb3RoZXItZGV0YWlsc1xuICAgICB7XG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIGJ7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgfVxuICAgICAgIC5pY29uc3dpdGgtcm93e1xuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgIGltZ3tcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAudGltZS1pbWd7XG4gICAgICAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAubG9jYXRpb24taW1ne1xuICAgICAgICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgLmRldC1zdWJtaXQtYnV0dG9ue1xuICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICBtYXJnaW46IDBweCAxJTtcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICB9XG4gICAgIH1cbiAgICAgLm5vdGktdGltZVxuICAgICB7XG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgdG9wOiA4cHg7XG4gICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgICB9XG4gICB9XG4gICAubm90aS13aGl0ZWJveHtcbiAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgfVxuICAgLm5vdGktc2luZ2xlLXJvd1xuICAge1xuICAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICNjY2NjY2M7XG4gICAgIC5ub3RpLWhlYWR7XG4gICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgfVxuICBcbiAgIH1cbiAgfSAqL1xuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_groupconversation_groupconversation_module_ts.js.map