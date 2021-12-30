"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_conversation_conversation_module_ts"],{

/***/ 27401:
/*!*************************************************************!*\
  !*** ./src/app/conversation/conversation-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationPageRoutingModule": () => (/* binding */ ConversationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation.page */ 19171);




const routes = [
    {
        path: '',
        component: _conversation_page__WEBPACK_IMPORTED_MODULE_0__.ConversationPage
    }
];
let ConversationPageRoutingModule = class ConversationPageRoutingModule {
};
ConversationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConversationPageRoutingModule);



/***/ }),

/***/ 72636:
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationPageModule": () => (/* binding */ ConversationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _conversation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation-routing.module */ 27401);
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation.page */ 19171);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let ConversationPageModule = class ConversationPageModule {
};
ConversationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _conversation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConversationPageRoutingModule
        ],
        declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_1__.ConversationPage]
    })
], ConversationPageModule);



/***/ }),

/***/ 19171:
/*!***************************************************!*\
  !*** ./src/app/conversation/conversation.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationPage": () => (/* binding */ ConversationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_conversation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./conversation.page.html */ 84107);
/* harmony import */ var _conversation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation.page.scss */ 81246);
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













let ConversationPage = class ConversationPage {
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
        this.isBlocked = false;
        this.storage.get('user_id').then((user_id) => {
            this.uid = user_id;
            this.storage.get('user_type').then((user_type) => {
                this.userType = user_type;
            });
        });
        //Enter user id here
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_img').then((user_img) => {
                console.log(user_id);
                this.userImage = user_img;
                this.route.queryParams.subscribe((params) => {
                    if (params && params.special && params.pageRoute) {
                        this.chatUserName = false;
                        this.title = 'Get Help';
                    }
                    else if (params && params.special) {
                        var todayDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('DD-MM-YYYY');
                        var details = JSON.parse(params.special);
                        this.chatUserName = true;
                        this.recieverId = details.recieverId;
                        this.senderId = details.senderId;
                        this.recieverName = details.recieverName;
                        this.recieverImg = details.recieverImg;
                        // this.fs
                        //   .collection('friends')
                        //   .doc(this.senderId)
                        //   .collection('chats')
                        //   .doc(this.recieverId)
                        //   .set(
                        //     {
                        //       recieverName: this.recieverName,
                        //       recieverId: this.recieverId,
                        //       recieverImage: this.recieverImg,
                        //       senderId: this.senderId,
                        //       senderName: this.api.fullName,
                        //       senderImage: this.api.userImage,
                        //       Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        //     },
                        //     { merge: true }
                        //   );
                        // this.fs
                        //   .collection('friends')
                        //   .doc(this.recieverId)
                        //   .collection('chats')
                        //   .doc(this.senderId)
                        //   .set(
                        //     {
                        //       recieverName: this.api.fullName,
                        //       recieverId: this.senderId,
                        //       recieverImage: this.api.userImage,
                        //       senderId: this.recieverId,
                        //       senderName: this.recieverName,
                        //       senderImage: this.recieverImg,
                        //       Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        //     },
                        //     { merge: true }
                        //   );
                        this.fs
                            .collection('friends')
                            .doc(this.senderId)
                            .collection('chats')
                            .doc(this.recieverId)
                            .update({
                            msgRead: true,
                        });
                        this.chatRef = this.fs
                            .collection('friends')
                            .doc(this.senderId)
                            .collection('chats')
                            .doc(this.recieverId)
                            .collection('messagetrail', (ref) => ref.orderBy('Timestamp'))
                            .valueChanges();
                        this.fs
                            .collection('friends')
                            .doc(this.senderId)
                            .collection('chats')
                            .doc(this.recieverId)
                            .collection('messagetrail', (ref) => ref.orderBy('Timestamp'))
                            .valueChanges()
                            .subscribe((data) => {
                            console.log('scrolling');
                            this.scrollToBottomOnInit();
                        });
                        console.log(this.chatRef);
                        this.chatRef;
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
                        this.fs
                            .collection('friends')
                            .doc(this.senderId)
                            .collection('chats')
                            .doc(this.recieverId)
                            .valueChanges()
                            .subscribe((data) => {
                            console.log('blockedStatus data', data);
                            if (data)
                                this.isBlocked = data.blocked ? true : false;
                        });
                    }
                });
            });
        });
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
            this.fs
                .collection('friends')
                .doc(this.senderId)
                .collection('chats')
                .doc(this.recieverId)
                .collection('messagetrail')
                .add({
                //Name: this.hostdisplayname,
                Message: text,
                UserID: this.uid,
                Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromDate(new Date()),
                recieverId: this.recieverId,
                senderId: this.senderId,
                msgTime: formattedTime,
                msgDate: formattedDate,
                msgSent: true,
                msgRead: false,
            });
            this.fs
                .collection('friends')
                .doc(this.recieverId)
                .collection('chats')
                .doc(this.senderId)
                .collection('messagetrail')
                .add({
                Name: this.recieverName,
                Message: text,
                UserID: this.uid,
                Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromDate(new Date()),
                recieverId: this.senderId,
                senderId: this.recieverId,
                msgTime: formattedTime,
                msgDate: formattedDate,
                msgSent: true,
                msgRead: false,
            });
            this.fs
                .collection('friends')
                .doc(this.senderId)
                .collection('chats')
                .doc(this.recieverId)
                .update({
                lastMsg: this.text,
                msgTime: formattedTime,
                msgDate: formattedDate,
                Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromDate(new Date()),
                msgRead: true,
            });
            this.fs
                .collection('friends')
                .doc(this.recieverId)
                .collection('chats')
                .doc(this.senderId)
                .update({
                lastMsg: this.text,
                msgTime: formattedTime,
                msgDate: formattedDate,
                Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromDate(new Date()),
                msgRead: false,
            });
            // this.text = '';
            this.scrollToBottomOnInit();
            const formData = new FormData();
            formData.append('noti_from_user_id', this.senderId);
            formData.append('noti_user_id', this.recieverId);
            formData.append('noti_message', this.text);
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/madd/send_chat_notification', formData)
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
    events() {
        if (this.userType === '1') {
            this.api.Navigate('creer-evenement');
        }
        else {
            this.api.Navigate('evenementcoachvue');
        }
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
ConversationPage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_9__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService }
];
ConversationPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['content', { static: false },] }]
};
ConversationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-conversation',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_conversation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_conversation_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute,
        _angular_http__WEBPACK_IMPORTED_MODULE_9__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient,
        _api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService])
], ConversationPage);



/***/ }),

/***/ 84107:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/conversation/conversation.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          [size]=\"2\"\n          style=\"display: flex; flex-direction: column; justify-content: center\"\n          (click)=\"back()\"\n        >\n          <img style=\"width: 50%\" src=\"../../assets/images/backblack.png\" />\n        </ion-col>\n        <!-- <ion-col [size]=\"2\" (click)=\"viewProfile()\">\n          <ion-avatar style=\"display: flex; align-items: center\">\n            <ion-img\n              style=\"width: 50px; height: 50px\"\n              [src]=\"recieverImg\"\n            ></ion-img>\n          </ion-avatar>\n        </ion-col> -->\n        <ion-col\n          *ngIf=\"chatUserName\"\n          [size]=\"8\"\n          style=\"\n            font-family: 'montserrat';\n            font-size: 22px;\n            font-weight: bolder;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n          \"\n          (click)=\"viewProfile()\"\n        >\n          <ion-text style=\"color: #d3c117; margin-top: 2px\">\n            {{recieverName}}\n          </ion-text>\n        </ion-col>\n        <ion-col\n          *ngIf=\"!chatUserName\"\n          [size]=\"8\"\n          style=\"\n            text-align: center;\n            font-family: Open Sans-semibold;\n            font-size: 24px;\n          \"\n        >\n          <ion-text>{{title}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <div id=\"searchOverlay\">\n\n\n  <div *ngIf=\"isSearch\">\n    <ion-item style=\"background-color: #FFFFFF;\">\n      <ion-input style=\"background-color: whitesmoke;border-radius: 12px;font-family: Proxima Nova-bold;\" type=\"text\" searchIcon=\"disable\" placeholder=\"Type Here\" (ionInput)=\"getUser($event)\" value={{searchTerm}}></ion-input>\n    <ion-icon name=\"close-circle-outline\" (click)=\"closeSearch()\"></ion-icon>\n    </ion-item>\n    \n    \n   </div>\n\n   <div *ngIf=\"showList\">\n    <ion-list style=\"height: 55px;width: 30%;background-color: #FFFFFF;\" *ngFor=\"let item of search\" (click)=\"selectChat(item)\">\n      <ion-grid>\n        <ion-row style=\"text-align: center;\">\n          \n          \n              \n                <ion-text style=\"font-size: 13px;font-family:Open Sans-regular;color: #454F63;\">{{item.Message}}</ion-text><br>\n                \n             \n          \n        </ion-row>\n          \n        \n      </ion-grid>\n    </ion-list>\n  </div>\n</div> -->\n\n<ion-content #content>\n  <div class=\"chat\" *ngFor=\"let chat of chatRef | async\">\n    <div *ngIf=\"uid== chat.UserID\" class=\"me\" style=\"display: flex\">\n      <div class=\"me\" style=\"color: black; background: whitesmoke\">\n        <span>\n          {{chat.Message}} <br />\n          <span\n            style=\"\n              font-size: 10px;\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-end;\n            \"\n          >\n            {{chat.msgTime}}\n          </span>\n        </span>\n      </div>\n      <ion-avatar\n        style=\"display: flex; justify-content: center; align-items: flex-end\"\n      >\n        <ion-img [src]=\"userImage\" style=\"height: 35px; width: 35px\"> </ion-img>\n      </ion-avatar>\n    </div>\n    <div *ngIf=\"uid!=chat.UserID\" class=\"you\" style=\"display: flex\">\n      <ion-avatar\n        style=\"\n          display: flex;\n          flex-direction: row;\n          height: 35px;\n          width: 36px;\n          padding-top: 16%;\n          margin-right: 10%;\n        \"\n      >\n        <ion-img [src]=\"recieverImg\" style=\"height: 35px; width: 35px\">\n        </ion-img>\n      </ion-avatar>\n      <div\n        class=\"you\"\n        style=\"color: white; background: #3e9dff; margin: 15px 0px 15px 0px\"\n      >\n        <span>\n          {{chat.Message}} <br />\n          <span\n            style=\"\n              font-size: 10px;\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-end;\n            \"\n          >\n            {{chat.msgTime}}\n          </span>\n        </span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- <ion-content class=\"massagechat-content\" [routerLink]=\"['/messagerie']\"\n             routerLinkActive=\"router-link-active\">\n    <section class=\"chat-internal-block\">\n        <div class=\"chat-massage-box\" *ngFor=\"let chat of chatRef | async\">\n            <div class=\"chat-row sender\" *ngIf=\"uid== chat.UserID\">\n                \n                <ion-img [src]=\"userImage\" style=\"height: 35px;width: 35px;\">\n                </ion-img>\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                      {{chat.Message}}\n                    </ion-text>\n                    <small class=\"chat-time\">15:07</small>\n                </div>\n            </div>\n            <div class=\"chat-row reciver\" *ngIf=\"uid!=chat.UserID\">\n              \n                <ion-img [src]=\"recieverImg\" style=\"height: 35px;width: 35px;\">\n                </ion-img>\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                      {{chat.Message}}\n                    </ion-text>\n                    <small class=\"chat-time\">15:10</small>\n                </div>\n            </div>\n            \n            \n            \n        </div>\n        \n    </section>\n</ion-content> -->\n\n<ion-row>\n  <ion-col>\n    <div style=\"padding: 8px; text-align: center\" *ngIf=\"isBlocked==true\">\n      {{'CHAT.blocked'|translate}}\n    </div>\n    <ion-item\n      *ngIf=\"isBlocked==false\"\n      class=\"chatbox\"\n      style=\"\n        border-radius: 25px;\n        box-shadow: #000000 !important;\n        width: 80%;\n        margin: auto;\n      \"\n    >\n      <ion-input\n        style=\"font-weight: bolder\"\n        placeholder=\"Type...\"\n        [(ngModel)]=\"text\"\n      ></ion-input>\n      <ion-button\n        style=\"border-radius: 50px\"\n        (click)=\"send(text)\"\n        fill=\"clear\"\n        icon-only\n        slot=\"end\"\n      >\n        <ion-icon name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n<ion-footer class=\"footer-fixed-tab\" *ngIf=\"footerAction\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"eventdetails()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/selectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 81246:
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".chat {\n  display: flex;\n  flex-direction: column;\n}\n.chat .me {\n  position: relative;\n  margin: 20px 0px 0px;\n  max-width: 80%;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n  border-radius: 10px;\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat .meImage {\n  position: relative;\n  margin: 20px 5px 0px;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n}\n.chat .you {\n  position: relative;\n  margin: 15px;\n  max-width: 80%;\n  align-self: flex-start;\n  padding: 6px 10px 7px;\n  border-radius: 10px;\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat .you .name {\n  font-size: small;\n  font-weight: bold;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n.footer-md:before {\n  display: none;\n}\n.header-fixed-top {\n  text-align: center;\n}\n.header-fixed-top .head-profileimg {\n  width: 35px;\n  position: absolute;\n  left: -25px;\n  top: -10px;\n}\n.massagechat-content .chat-internal-block {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 10px 10px 50px 0px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box {\n  overflow: auto;\n  height: 100%;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .chat-row {\n  width: 96%;\n  margin-bottom: 10px;\n  display: inline-block;\n  margin-left: 2%;\n  position: relative;\n  font-size: 14px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender {\n  padding-left: 30px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender profile {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  left: 0px;\n  top: 3px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender .chat-msgbox {\n  background: #3E9DFF;\n  padding: 8px 10px 5px 5px;\n  border-radius: 10px;\n  color: #ffffff;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .chat-time {\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver {\n  padding-right: 30px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver profile {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  right: 0px;\n  border-radius: 50%;\n  top: 3px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver .chat-msgbox {\n  background: #e4e4e4;\n  padding: 8px 5px 5px 10px;\n  border-radius: 10px;\n  color: #666666;\n}\n.massagechat-content .chat-internal-block .chat-txtbox {\n  width: 90%;\n  position: absolute;\n  left: 5%;\n  bottom: 10px;\n  border: solid thin #e1e1e1;\n  border-radius: 30px;\n  font-size: 12px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n/*  .notifiaction-content {\n  .noti-colorbox\n  {\n    background: #ffe8b9;\n    width: 100%;\n    padding: 10px 10px 0px 10px;\n  }\n  .noti-row-withimg{\n    position: relative;\n    width: 100%;\n    padding: 5px 0px 10px 50px;\n    border-bottom: solid thin #cccccc;\n    margin-bottom: 10px;\n    .noti-imgbox\n    {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      width: 40px;\n      height: 40px;\n      border-radius:50%;\n      overflow: hidden;\n      img{\n        width: 40px;\n        height: 40px;\n        border: solid thin #ffffff;\n        background: #e1e1e1;\n      }\n    }\n    .noti-head\n    {\n      b{\n        display: inline-block;\n      }\n      font-size: 14px;\n      width: 100%;\n      border-bottom: solid thin #666666;\n      padding-bottom: 10px;\n\n    }\n    .noti-other-details\n    {\n      font-size: 12px;\n      padding: 10px 0px 0px 0px;\n      display: inline-block;\n      width: 100%;\n      b{\n        width: 100%;\n        padding: 0px 0px 10px 0px;\n        font-size: 16px;\n        display: inline-block;\n      }\n      .iconswith-row{\n        position: relative;\n        padding-left: 30px;\n        text-align: left;\n        width: 100%;\n        min-height: 30px;\n        margin-bottom: 5px;\n        img{\n          position: absolute;\n          width: 20px;\n          left: 0px;\n        }\n      }\n      .time-img{\n        width: 18px !important;\n      }\n      .location-img{\n        width: 16px !important;\n      }\n      .det-submit-button{\n        float: right;\n        height: 30px;\n        font-size: 14px;\n        padding: 5px 10px;\n        text-transform: capitalize;\n        width: 48%;\n        margin: 0px 1%;\n        text-align: center;\n      }\n    }\n    .noti-time\n    {\n      position: absolute;\n      right: 0px;\n      top: 8px;\n      font-size: 11px;\n      color: #444444;\n    }\n  }\n  .noti-whitebox{\n    padding: 10px 15px;\n    display: inline-block;\n    width: 100%;\n  }\n  .noti-single-row\n  {\n    border-bottom: solid thin #cccccc;\n    .noti-head{\n      border: none;\n      padding-bottom: 0px;\n      padding-right: 25px;\n    }\n\n  }\n } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFDSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0FBQVI7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFPUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFMWjtBQVdFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVJKO0FBU0k7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQVBOO0FBUU07RUFDRSxVQUFBO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFOTjtBQU9RO0VBQ0UsVUFBQTtBQUxWO0FBT1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTFY7QUFhRTtFQUNBLGFBQUE7QUFWRjtBQWFBO0VBQ0ksa0JBQUE7QUFWSjtBQVdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFUTjtBQWFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBVk47QUFXTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBVFI7QUFVUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJWO0FBVVE7RUFDRSxrQkFBQTtBQVJWO0FBU1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFQWjtBQVNVO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVBaO0FBVVE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVJWO0FBVVE7RUFDRSxtQkFBQTtBQVJWO0FBU1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQVBaO0FBU1U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUFo7QUFXTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2RUFBQTtBQVRSO0FBYUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSIsImZpbGUiOiJjb252ZXJzYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXR7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLm1le1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbiA6MjBweCAwcHggMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4IDdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1zaXplOm1lZGl1bTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5tZUltYWdle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbiA6MjBweCA1cHggMHB4O1xuICAgICAgIFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHggN3B4O1xuICAgICBcbiAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC55b3V7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHggN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICBcblxuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICB9XG4gIC5mb290ZXItZml4ZWQtdGFiIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCA1JTtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIC5mb290ZXItYnRuLXRhYnMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5yb3VuZHtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzQzExNztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBcbiAgfVxuXG4gIC5mb290ZXItbWQ6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4uaGVhZGVyLWZpeGVkLXRvcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5oZWFkLXByb2ZpbGVpbWcge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAtMjVweDtcbiAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxuICB9XG4gIC5tYXNzYWdlY2hhdC1jb250ZW50e1xuICAgIC5jaGF0LWludGVybmFsLWJsb2NrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogMTBweCAxMHB4IDUwcHggMHB4O1xuICAgICAgLmNoYXQtbWFzc2FnZS1ib3gge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAuY2hhdC1yb3cge1xuICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbmRlciB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgIHByb2ZpbGUge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICB0b3A6M3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhdC1tc2dib3gge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNFOURGRjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4IDVweCA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jaGF0LXRpbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICAucmVjaXZlciB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICBwcm9maWxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHRvcDozcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGF0LW1zZ2JveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDVweCA1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jaGF0LXR4dGJveCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNSU7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB0aGluICNlMWUxZTE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuIC8qICAubm90aWZpYWN0aW9uLWNvbnRlbnQge1xuICAgLm5vdGktY29sb3Jib3hcbiAgIHtcbiAgICAgYmFja2dyb3VuZDogI2ZmZThiOTtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbiAgIH1cbiAgIC5ub3RpLXJvdy13aXRoaW1ne1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBwYWRkaW5nOiA1cHggMHB4IDEwcHggNTBweDtcbiAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAubm90aS1pbWdib3hcbiAgICAge1xuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgdG9wOiAwcHg7XG4gICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgaW1ne1xuICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICBib3JkZXI6IHNvbGlkIHRoaW4gI2ZmZmZmZjtcbiAgICAgICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XG4gICAgICAgfVxuICAgICB9XG4gICAgIC5ub3RpLWhlYWRcbiAgICAge1xuICAgICAgIGJ7XG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgfVxuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICM2NjY2NjY7XG4gICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIFxuICAgICB9XG4gICAgIC5ub3RpLW90aGVyLWRldGFpbHNcbiAgICAge1xuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xuICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICBie1xuICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgIH1cbiAgICAgICAuaWNvbnN3aXRoLXJvd3tcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICBpbWd7XG4gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgLnRpbWUtaW1ne1xuICAgICAgICAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgLmxvY2F0aW9uLWltZ3tcbiAgICAgICAgIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgIC5kZXQtc3VibWl0LWJ1dHRvbntcbiAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICAgbWFyZ2luOiAwcHggMSU7XG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgfVxuICAgICB9XG4gICAgIC5ub3RpLXRpbWVcbiAgICAge1xuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICByaWdodDogMHB4O1xuICAgICAgIHRvcDogOHB4O1xuICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgfVxuICAgfVxuICAgLm5vdGktd2hpdGVib3h7XG4gICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIC5ub3RpLXNpbmdsZS1yb3dcbiAgIHtcbiAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgICAubm90aS1oZWFke1xuICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgIH1cbiAgXG4gICB9XG4gIH0gKi9cbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_conversation_conversation_module_ts.js.map