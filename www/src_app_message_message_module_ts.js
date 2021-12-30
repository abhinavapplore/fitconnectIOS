"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_message_message_module_ts"],{

/***/ 10845:
/*!***************************************************!*\
  !*** ./src/app/message/message-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePageRoutingModule": () => (/* binding */ MessagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.page */ 82946);




const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_0__.MessagePage
    }
];
let MessagePageRoutingModule = class MessagePageRoutingModule {
};
MessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessagePageRoutingModule);



/***/ }),

/***/ 91377:
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePageModule": () => (/* binding */ MessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-routing.module */ 10845);
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.page */ 82946);







let MessagePageModule = class MessagePageModule {
};
MessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _message_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessagePageRoutingModule
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_1__.MessagePage]
    })
], MessagePageModule);



/***/ }),

/***/ 82946:
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePage": () => (/* binding */ MessagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./message.page.html */ 20243);
/* harmony import */ var _message_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.page.scss */ 72901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let MessagePage = class MessagePage {
    constructor() { }
    ngOnInit() {
    }
};
MessagePage.ctorParameters = () => [];
MessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-message',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])
], MessagePage);



/***/ }),

/***/ 20243:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/message/message.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n    <ion-toolbar class=\"top-global-toolbar\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"top-fixed-heading uppercaes themetxtcolor\">\n            <img src=\"assets/images/profile-img.png\" class=\"head-profileimg\">\n         <b>   Jordan B.</b>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"massagechat-content\" [routerLink]=\"['/messagerie']\"\n             routerLinkActive=\"router-link-active\">\n    <section class=\"chat-internal-block\">\n        <div class=\"chat-massage-box\">\n            <div class=\"chat-row sender\">\n                <img src=\"assets/images/profile-img.png\" />\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                        Ok ça marche ! Préférez-vous qu’on se retrouve là bas ?\n                    </ion-text>\n                    <small class=\"chat-time\">15:07</small>\n                </div>\n            </div>\n            <div class=\"chat-row reciver\">\n                <img src=\"assets/images/profile-img2.jpg\" />\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                        Oui pas de problème.\n                    </ion-text>\n                    <small class=\"chat-time\">15:10</small>\n                </div>\n            </div>\n            <div class=\"chat-row sender\">\n                <img src=\"assets/images/profile-img.png\" />\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                        Ok ça marche ! Préférez-vous qu’on se retrouve là bas ?\n                    </ion-text>\n                    <small class=\"chat-time\">15:07</small>\n                </div>\n            </div>\n            <div class=\"chat-row reciver\">\n                <img src=\"assets/images/profile-img2.jpg\" />\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                        Oui pas de problème.\n                    </ion-text>\n                    <small class=\"chat-time\">15:10</small>\n                </div>\n            </div>\n            <div class=\"chat-row sender\">\n                <img src=\"assets/images/profile-img.png\" />\n                <div class=\"chat-msgbox\">\n                    <ion-text class=\"chatmsg\">\n                        Ok ça marche ! Préférez-vous qu’on se retrouve là bas ?\n                    </ion-text>\n                    <small class=\"chat-time\">15:07</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"chat-txtbox\">\n            <ion-input placeholder=\"Répondre\"></ion-input>\n        </div>\n    </section>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n    <ion-toolbar>\n        <ion-buttons>\n            <div class=\"footer-btn-tabs\">\n                <img src=\"assets/images/selectedlocation.png\" class=\"footer-img-location\"/>\n            </div>\n            <div class=\"footer-btn-tabs\">\n                <img src=\"assets/images/unselectedcalendar.png\" class=\"footer-img-date\"/>\n            </div>\n            <div class=\"footer-btn-tabs\">\n                <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\"/>\n            </div>\n            <div class=\"footer-btn-tabs\">\n                <img src=\"assets/images/unselectednotification.png\" class=\"footer-img-noti\"/>\n            </div>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 72901:
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n}\n.header-fixed-top .head-profileimg {\n  width: 35px;\n  position: absolute;\n  left: -25px;\n  top: -10px;\n}\n.massagechat-content .chat-internal-block {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 10px 10px 50px 0px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box {\n  overflow: auto;\n  height: 100%;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .chat-row {\n  width: 96%;\n  margin-bottom: 10px;\n  display: inline-block;\n  margin-left: 2%;\n  position: relative;\n  font-size: 14px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender {\n  padding-left: 30px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender img {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  left: 0px;\n  top: 3px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .sender .chat-msgbox {\n  background: #3E9DFF;\n  padding: 8px 10px 5px 5px;\n  border-radius: 10px;\n  color: #ffffff;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .chat-time {\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver {\n  padding-right: 30px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver img {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  right: 0px;\n  border-radius: 50%;\n  top: 3px;\n}\n.massagechat-content .chat-internal-block .chat-massage-box .reciver .chat-msgbox {\n  background: #e4e4e4;\n  padding: 8px 5px 5px 10px;\n  border-radius: 10px;\n  color: #666666;\n}\n.massagechat-content .chat-internal-block .chat-txtbox {\n  width: 90%;\n  position: absolute;\n  left: 5%;\n  bottom: 10px;\n  border: solid thin #e1e1e1;\n  border-radius: 30px;\n  font-size: 12px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBRU47QUFETTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdSO0FBRE07RUFDRSxrQkFBQTtBQUdSO0FBRlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFJVjtBQUZRO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlWO0FBRE07RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUdSO0FBRE07RUFDRSxtQkFBQTtBQUdSO0FBRlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUlWO0FBRlE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSVY7QUFBSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2RUFBQTtBQUVOO0FBNkdBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQTFHRjtBQTJHRTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBekdKO0FBMEdJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQXhHTjtBQXlHTTtFQUNFLFVBQUE7QUF2R1IiLCJmaWxlIjoibWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWZpeGVkLXRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmhlYWQtcHJvZmlsZWltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yNXB4O1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbi5tYXNzYWdlY2hhdC1jb250ZW50e1xuICAuY2hhdC1pbnRlcm5hbC1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNTBweCAwcHg7XG4gICAgLmNoYXQtbWFzc2FnZS1ib3gge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAuY2hhdC1yb3cge1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAuc2VuZGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHRvcDozcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXQtbXNnYm94IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjM0U5REZGO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4IDVweCA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNoYXQtdGltZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLnJlY2l2ZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgdG9wOjNweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhdC1tc2dib3gge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDVweCA1cHggMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5jaGF0LXR4dGJveCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNSU7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICBib3JkZXI6IHNvbGlkIHRoaW4gI2UxZTFlMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgfVxuICB9XG59XG4vLy5ub3RpZmlhY3Rpb24tY29udGVudCB7XG4vLyAgLm5vdGktY29sb3Jib3hcbi8vICB7XG4vLyAgICBiYWNrZ3JvdW5kOiAjZmZlOGI5O1xuLy8gICAgd2lkdGg6IDEwMCU7XG4vLyAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XG4vLyAgfVxuLy8gIC5ub3RpLXJvdy13aXRoaW1ne1xuLy8gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgd2lkdGg6IDEwMCU7XG4vLyAgICBwYWRkaW5nOiA1cHggMHB4IDEwcHggNTBweDtcbi8vICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gI2NjY2NjYztcbi8vICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4vLyAgICAubm90aS1pbWdib3hcbi8vICAgIHtcbi8vICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICBsZWZ0OiAwcHg7XG4vLyAgICAgIHRvcDogMHB4O1xuLy8gICAgICB3aWR0aDogNDBweDtcbi8vICAgICAgaGVpZ2h0OiA0MHB4O1xuLy8gICAgICBib3JkZXItcmFkaXVzOjUwJTtcbi8vICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICAgaW1ne1xuLy8gICAgICAgIHdpZHRoOiA0MHB4O1xuLy8gICAgICAgIGhlaWdodDogNDBweDtcbi8vICAgICAgICBib3JkZXI6IHNvbGlkIHRoaW4gI2ZmZmZmZjtcbi8vICAgICAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuLy8gICAgICB9XG4vLyAgICB9XG4vLyAgICAubm90aS1oZWFkXG4vLyAgICB7XG4vLyAgICAgIGJ7XG4vLyAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICB9XG4vLyAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gIzY2NjY2Njtcbi8vICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4vL1xuLy8gICAgfVxuLy8gICAgLm5vdGktb3RoZXItZGV0YWlsc1xuLy8gICAge1xuLy8gICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4vLyAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgIGJ7XG4vLyAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbi8vICAgICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICB9XG4vLyAgICAgIC5pY29uc3dpdGgtcm93e1xuLy8gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4vLyAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuLy8gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbi8vICAgICAgICBpbWd7XG4vLyAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICB3aWR0aDogMjBweDtcbi8vICAgICAgICAgIGxlZnQ6IDBweDtcbi8vICAgICAgICB9XG4vLyAgICAgIH1cbi8vICAgICAgLnRpbWUtaW1ne1xuLy8gICAgICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgIH1cbi8vICAgICAgLmxvY2F0aW9uLWltZ3tcbi8vICAgICAgICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuLy8gICAgICB9XG4vLyAgICAgIC5kZXQtc3VibWl0LWJ1dHRvbntcbi8vICAgICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICAgICAgaGVpZ2h0OiAzMHB4O1xuLy8gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbi8vICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgICAgICB3aWR0aDogNDglO1xuLy8gICAgICAgIG1hcmdpbjogMHB4IDElO1xuLy8gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gICAgLm5vdGktdGltZVxuLy8gICAge1xuLy8gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgIHJpZ2h0OiAwcHg7XG4vLyAgICAgIHRvcDogOHB4O1xuLy8gICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xuLy8gICAgfVxuLy8gIH1cbi8vICAubm90aS13aGl0ZWJveHtcbi8vICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbi8vICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgIHdpZHRoOiAxMDAlO1xuLy8gIH1cbi8vICAubm90aS1zaW5nbGUtcm93XG4vLyAge1xuLy8gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuLy8gICAgLm5vdGktaGVhZHtcbi8vICAgICAgYm9yZGVyOiBub25lO1xuLy8gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuLy8gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuLy8gICAgfVxuLy9cbi8vICB9XG4vL31cbi5mb290ZXItZml4ZWQtdGFiIHtcbiAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA1JTtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLmZvb3Rlci1idG4tdGFicyB7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_message_message_module_ts.js.map