"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profilereview_profilereview_module_ts"],{

/***/ 21533:
/*!***************************************************************!*\
  !*** ./src/app/profilereview/profilereview-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilereviewPageRoutingModule": () => (/* binding */ ProfilereviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profilereview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profilereview.page */ 98960);




const routes = [
    {
        path: '',
        component: _profilereview_page__WEBPACK_IMPORTED_MODULE_0__.ProfilereviewPage
    }
];
let ProfilereviewPageRoutingModule = class ProfilereviewPageRoutingModule {
};
ProfilereviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilereviewPageRoutingModule);



/***/ }),

/***/ 65157:
/*!*******************************************************!*\
  !*** ./src/app/profilereview/profilereview.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilereviewPageModule": () => (/* binding */ ProfilereviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profilereview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profilereview-routing.module */ 21533);
/* harmony import */ var _profilereview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilereview.page */ 98960);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let ProfilereviewPageModule = class ProfilereviewPageModule {
};
ProfilereviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profilereview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilereviewPageRoutingModule
        ],
        declarations: [_profilereview_page__WEBPACK_IMPORTED_MODULE_1__.ProfilereviewPage]
    })
], ProfilereviewPageModule);



/***/ }),

/***/ 98960:
/*!*****************************************************!*\
  !*** ./src/app/profilereview/profilereview.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilereviewPage": () => (/* binding */ ProfilereviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profilereview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profilereview.page.html */ 81020);
/* harmony import */ var _profilereview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilereview.page.scss */ 16839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 82128);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 30692);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ 91554);
/* harmony import */ var _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../followlist/followlist.page */ 69070);
/* harmony import */ var _rateuser_rateuser_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rateuser/rateuser.page */ 32448);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);










// import { Transfer, TransferObject } from '@ionic-native/transfer';








let ProfilereviewPage = class ProfilereviewPage {
    constructor(api, storage, route, router, http, httpClient, modalCtrl, camera, platform, 
    //  private transfer: Transfer,
    angularstorage, file, filePath, actionSheetController) {
        this.api = api;
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.http = http;
        this.httpClient = httpClient;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.platform = platform;
        this.angularstorage = angularstorage;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetController = actionSheetController;
        this.Avatar = true;
        this.uploaded1 = false;
        this.editDescription = false;
        this.editPlayed = false;
        this.editPractice = false;
        this.disponsibility = [];
        this.followingList = false;
        this.followerList = false;
        this.displayEmptyDescError = false;
        this.displayEmptyPlayError = false;
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
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_type').then((user_type) => {
                this.storage.get('user_img').then((user_img) => {
                    this.storage.get('user_lang').then((lang) => {
                        this.userType = user_type;
                        if (lang == 'English') {
                            this.English = true;
                        }
                        else {
                            this.English = false;
                        }
                    });
                    // this.storage.get('item').then((newArray) => {
                    //   this.disponsibility=newArray;
                    // });
                    if (user_img === undefined || user_img === null || user_img === '') {
                        this.Avatar = false;
                    }
                    else {
                        this.Avatar = true;
                    }
                    this.uid = user_id;
                    console.log(this.uid);
                    const formData = new FormData();
                    formData.append('user_id', this.uid);
                    this.http
                        .post('http://fitconnected.prometteur.in/index.php/Api/fields/user', formData)
                        .subscribe((res) => {
                        if (res.json().status == 1) {
                            console.log(res.json());
                            var lastName = res.json().result[0].user_l_name;
                            var l_name = lastName.substring(0, 1);
                            this.name =
                                res.json().result[0].user_f_name + ' ' + l_name + '.';
                            this.followers = res.json().result[0].followers;
                            this.following = res.json().result[0].following;
                            this.practice = res.json().result[0].user_question1_response;
                            this.sportsPlayed =
                                res.json().result[0].user_question2_response;
                            this.imgUrl = res.json().result[0].user_img;
                            //  const objOfObjs=res.json().result[0].user_question3_response;
                            //  this.disponsibility =  Object.entries(objOfObjs).map((e) => ( { [e[0]]: e[1] } ));
                            // this.disponsibility=JSON.parse(res.json().result[0].user_question3_response);
                            // this.storage.set('user_question3_response',this.disponsibility);
                            //  console.log(this.disponsibility);
                            this.userDescription = res.json().result[0].user_description1;
                            this.dob = res.json().result[0].user_dob;
                            var date = this.dob.split('T');
                            var conv = moment__WEBPACK_IMPORTED_MODULE_3__(date[0], 'YYYY-MM-DD').fromNow();
                            // console.log(this.age)
                            var convert = conv.split('years');
                            this.age = convert[0];
                            var g = res.json().result[0].user_gender;
                            if (g == '1' && this.English) {
                                this.gender = 'Man';
                            }
                            else if (g == '1' && !this.English) {
                                this.gender = 'Masculin';
                            }
                            else if (g == '2' && this.English) {
                                this.gender = 'Women';
                            }
                            else if (g == '2' && !this.English) {
                                this.gender = 'Féminin';
                            }
                            this.reiviewList();
                        }
                        else {
                            console.log(res.json());
                        }
                    });
                });
            });
        });
    }
    reiviewList() {
        const formData = new FormData();
        formData.append('user_id', this.uid);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/user_rating', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
            }
        });
    }
    profile() {
        if (this.userType == '1') {
            this.api.Navigate('mon-profil');
        }
        else {
            this.api.Navigate('coacheditprofile');
        }
    }
    openListFollowers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.followers.length === 0) {
                return;
            }
            else {
                this.followerList = true;
                const modal = yield this.modalCtrl.create({
                    component: _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_8__.FollowlistPage,
                    cssClass: 'followPage',
                    showBackdrop: false,
                    componentProps: { userId: this.uid, pageTitle: 'Followers' },
                });
                yield modal.present();
                const { data } = yield modal.onWillDismiss();
                if (data) {
                    this.followerList = false;
                    // this.excludeTracks = data;
                    this.viewProfile(data);
                    // this.updateSchedule();
                }
                else {
                    this.followerList = false;
                    this.loadData();
                }
            }
        });
    }
    openListFollowing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.following.length === 0) {
                return;
            }
            else {
                this.followingList = true;
                const modal = yield this.modalCtrl.create({
                    component: _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_8__.FollowlistPage,
                    showBackdrop: false,
                    cssClass: 'followPage',
                    componentProps: { userId: this.uid, pageTitle: 'Following' },
                });
                yield modal.present();
                const { data } = yield modal.onWillDismiss();
                if (data) {
                    this.followingList = false;
                    this.viewProfile(data);
                    // this.excludeTracks = data;
                    // this.updateSchedule();
                }
                else {
                    this.followingList = false;
                    this.loadData();
                }
                // if(this.followerList===true){
                //   this.followerList=false;
                //   this.followingList=true;
                // }else if(this.followingList===true){
                //   this.followingList=false;
                // }else{
                //   this.followingList=true;
                // }
            }
        });
    }
    loadData() {
        this.api.timerloading();
        this.storage.get('user_img').then((user_img) => {
            if (user_img === undefined || user_img === null || user_img === '') {
                this.Avatar = false;
            }
            else {
                this.Avatar = true;
            }
        });
        console.log(this.uid);
        const formData = new FormData();
        formData.append('user_id', this.uid);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/user', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
                var lastName = res.json().result[0].user_l_name;
                var l_name = lastName.substring(0, 1);
                this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
                this.disponsibility = JSON.parse(res.json().result[0].user_question3_response);
                this.practice = res.json().result[0].user_question1_response;
                this.sportsPlayed = res.json().result[0].user_question2_response;
                this.userDescription = res.json().result[0].user_description1;
                this.imgUrl = res.json().result[0].user_img;
                this.storage.set('user_img', this.imgUrl);
                this.dob = res.json().result[0].user_dob;
                var date = this.dob.split('T');
                var conv = moment__WEBPACK_IMPORTED_MODULE_3__(date[0], 'YYYY-MM-DD').fromNow();
                // console.log(this.age)
                var convert = conv.split('years');
                this.age = convert[0];
                var g = res.json().result[0].user_gender;
                if (g == '1' && this.English) {
                    this.gender = 'Man';
                }
                else if (g == '1' && !this.English) {
                    this.gender = 'Masculin';
                }
                else if (g == '2' && this.English) {
                    this.gender = 'Women';
                }
                else if (g == '2' && !this.English) {
                    this.gender = 'Féminin';
                }
                this.api.dismissLoading();
                this.reiviewList();
            }
            else {
                console.log(res.json());
                this.api.dismissLoading();
            }
        });
    }
    viewProfile(user) {
        console.log('my event');
        if (this.uid === user.user_id) {
            this.api.Navigate('mon-profil');
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
    openRating() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _rateuser_rateuser_page__WEBPACK_IMPORTED_MODULE_9__.RateuserPage,
                showBackdrop: false,
                cssClass: 'ratePage',
                componentProps: { userId: this.uid, pageTitle: 'Following' },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
        });
    }
    activity() {
        this.api.Navigate('mon-profil-activite');
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
};
ProfilereviewPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_13__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__.AngularFireStorage },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__.FilePath },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ActionSheetController }
];
ProfilereviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-profilereview',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profilereview_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profilereview_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router,
        _angular_http__WEBPACK_IMPORTED_MODULE_13__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController,
        _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__.AngularFireStorage,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File,
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__.FilePath,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ActionSheetController])
], ProfilereviewPage);



/***/ }),

/***/ 81020:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profilereview/profilereview.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <ion-icon\n      style=\"font-size: 25px; margin-left: 14px\"\n      slot=\"start\"\n      mode=\"ios\"\n      color=\"light\"\n      name=\"arrow-back\"\n      (click)=\"events()\"\n    ></ion-icon>\n\n    <ion-title\n      style=\"font-family: montserrat-medium\"\n      class=\"top-fixed-heading uppercaes\"\n      [translate]=\"'PROFILEREVIEW.Text1'\"\n    ></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"overall-content\">\n    <!-- <div class=\"overall-content\" [routerLink]=\"['/mon-profil-activite']\"\n       routerLinkActive=\"router-link-active\"> -->\n    <div class=\"top-black-block\"></div>\n    <div class=\"top-header-content\">\n      <div class=\"top-btn-toolbar\">\n        <ion-row>\n          <ion-col class=\"ion-text-left\" (click)=\"openListFollowers()\">\n            <div class=\"social-counterbox\">\n              <div\n                *ngIf=\"!followerList\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-count\"\n              >\n                {{followers}}\n              </div>\n              <div\n                *ngIf=\"!followerList\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-counttxt\"\n                [translate]=\"'PROFILEREVIEW.Text2'\"\n              ></div>\n              <div\n                *ngIf=\"followerList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-count\"\n              >\n                {{followers}}\n              </div>\n              <div\n                *ngIf=\"followerList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-counttxt\"\n                [translate]=\"'PROFILEREVIEW.Text2'\"\n              ></div>\n            </div>\n            <div *ngIf=\"followerList\" class=\"arrow-up\"></div>\n          </ion-col>\n          <ion-col\n            style=\"display: flex; flex-direction: row; justify-content: center\"\n          >\n            <div class=\"profile-center\">\n              <img *ngIf=\"!Avatar\" src=\"assets/images/profile-img.png\" />\n              <ion-avatar style=\"height: 100px; width: 100px\" *ngIf=\"Avatar\">\n                <ion-img [src]=\"imgUrl\"></ion-img>\n              </ion-avatar>\n              <!-- (click)=\"presentActionSheet(1)\" -->\n              <div class=\"edit-pencilicon\">\n                <img src=\"assets/images/edit-pencil.png\" />\n              </div>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-text-right\" (click)=\"openListFollowing()\">\n            <div class=\"social-counterbox\">\n              <div\n                *ngIf=\"!followingList\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-count\"\n              >\n                {{following}}\n              </div>\n              <div\n                *ngIf=\"!followingList\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-counttxt\"\n                [translate]=\"'PROFILEREVIEW.Text3'\"\n              ></div>\n              <div\n                *ngIf=\"followingList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-count\"\n              >\n                {{following}}\n              </div>\n              <div\n                *ngIf=\"followingList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-counttxt\"\n                [translate]=\"'PROFILEREVIEW.Text3'\"\n              ></div>\n            </div>\n            <div *ngIf=\"followingList\" class=\"arrow-up\"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            color: #d3c117;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n        >\n          <ion-title\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bold;\n              margin-top: 5%;\n            \"\n            >{{name | titlecase}}</ion-title\n          >\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            margin-top: 2%;\n          \"\n        >\n          <small style=\"font-family: montserrat\"\n            >{{gender}} - {{age}}\n            <span [translate]=\"'PROFILEREVIEW.Text4'\"></span\n          ></small>\n        </ion-row>\n\n        <div class=\"top-tabs\">\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" (click)=\"profile()\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'PROFILEREVIEW.Text5'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" (click)=\"activity()\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'PROFILEREVIEW.Text6'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes selected-tabs\"\n                [translate]=\"'PROFILEREVIEW.Text11'\"\n              ></div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <div class=\"profile-inner-block\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text style=\"font-size: 16px; font-weight: bold\">Rating</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-row style=\"border-bottom: 1px solid lightgray\">\n            <ion-col size=\"2\">\n              <img src=\"assets/images/profile-img.png\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-row>\n                <ion-text style=\"font-weight: bold; font-size: 16px\">\n                  John Pitter\n                </ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-text style=\"font-size: 10px; font-weight: bold\">\n                  4 Ratings</ion-text\n                >\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-text style=\"font-size: 9px\">02 Oct 2020 02:00 PM</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n\n        <ion-card-content>\n          Keep close to Nature's heart... and break clear away, once in awhile,\n          and climb a mountain or spend a week in the woods. Wash your spirit\n          clean.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-row style=\"border-bottom: 1px solid lightgray\">\n            <ion-col size=\"2\">\n              <img src=\"assets/images/profile-img.png\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-row>\n                <ion-text style=\"font-weight: bold; font-size: 16px\">\n                  John Pitter\n                </ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-icon color=\"primary\" name=\"star-outline\"></ion-icon>\n                <ion-text style=\"font-size: 10px; font-weight: bold\">\n                  4 Ratings</ion-text\n                >\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-text style=\"font-size: 9px\">02 Oct 2020 02:00 PM</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n\n        <ion-card-content>\n          Keep close to Nature's heart... and break clear away, once in awhile,\n          and climb a mountain or spend a week in the woods. Wash your spirit\n          clean.\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <!-- (click)=\"eventdetails()\" -->\n      <div class=\"footer-btn-tabs\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 16839:
/*!*******************************************************!*\
  !*** ./src/app/profilereview/profilereview.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.overall-content .top-black-block {\n  height: 60px;\n  background: #414141;\n  position: relative;\n}\n.overall-content .top-header-content {\n  position: relative;\n  margin-top: -50px;\n}\n.overall-content .social-counterbox {\n  text-align: center;\n  font-size: 12px;\n  color: #dddddd;\n}\n.overall-content .soc-count {\n  font-size: 20px;\n  font-weight: bold;\n}\n.overall-content .profile-center {\n  width: 110px;\n  position: relative;\n  border: solid 5px #ffffff;\n  border-radius: 50%;\n}\n.overall-content .profile-center .edit-pencilicon {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  padding: 5px;\n  text-align: center;\n  background: #ffffff;\n  right: -5px;\n  top: 2px;\n  z-index: 10;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.overall-content .profile-center .edit-pencilicon img {\n  width: 100%;\n}\n.overall-content .top-profile-center {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.overall-content .top-profile-center small {\n  width: 100%;\n  display: inline-block;\n}\n.arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  margin-left: 33%;\n  border-bottom: 20px solid #D3C117;\n}\n.top-tabs {\n  display: inline-block;\n  width: 100%;\n  background: #ffffff;\n  --background: #ffffff;\n  --ion-color-base: #ffffff !important;\n  color: #cccccc;\n  position: relative;\n  padding: 10px 0px;\n  margin-top: 15px;\n  text-align: center;\n}\n.top-tabs .tabs-block {\n  position: relative;\n  text-transform: capitalize;\n}\n.top-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -13px;\n  left: 0px;\n  background: #cccccc;\n}\n.top-tabs .selected-tabs {\n  color: #D3C117;\n}\n.top-tabs .selected-tabs:before {\n  background: #D3C117;\n}\n.profile-inner-block {\n  padding: 10px 15px 10px 15px;\n  font-size: 14px;\n}\n.profile-inner-block .gray-row {\n  width: 100%;\n  background: #f5f5f5;\n  padding: 10px 5px 5px 5px;\n  color: #666666;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n.profile-inner-block .gray-row .left-bold-head {\n  font-weight: bold;\n}\n.profile-inner-block .gray-row .right-txt {\n  text-align: right;\n}\n.profile-inner-block .edit-row-icon {\n  width: 15px;\n  margin-left: 8px;\n  float: right;\n}\n.profile-inner-block .main-head {\n  width: 100%;\n  display: inline-block;\n  font-weight: bold;\n  min-height: 25px;\n}\n.profile-inner-block .main-head .head-right-txtwithicon {\n  float: right;\n}\n.profile-inner-block .border-row {\n  width: 100%;\n  padding: 8px 0px;\n  border-bottom: solid thin #cccccc;\n  display: inline-block;\n}\n.profile-inner-block .border-row .left-bold-head {\n  font-weight: bold;\n  display: inline-block;\n}\n.profile-inner-block .border-row .right-txt {\n  text-align: right;\n  display: inline-block;\n  float: right;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVyZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQUk7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBRU47QUFHSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFFSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFOO0FBRUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFOO0FBQ007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FBQ1I7QUFDTTtFQUNFLFdBQUE7QUFDUjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFETjtBQUdJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBRE47QUFLRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFGSjtBQUtFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFETjtBQUdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRE47QUFHSTtFQUNFLGNBQUE7QUFETjtBQUdJO0VBQ0UsbUJBQUE7QUFETjtBQUtFO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FBRko7QUFHSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUROO0FBRU07RUFDRSxpQkFBQTtBQUFSO0FBRU07RUFDRSxpQkFBQTtBQUFSO0FBR0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRE47QUFHSTtFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUdNO0VBRUUsWUFBQTtBQUZSO0FBS0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FBSE47QUFJTTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFGUjtBQUlNO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFGUjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpKO0FBS0k7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQUhOO0FBSU07RUFDRSxVQUFBO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUdRO0VBQ0UsVUFBQTtBQURWO0FBR1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRFYiLCJmaWxlIjoicHJvZmlsZXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWZpeGVkLXRvcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC50b3AtZ2xvYmFsLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIC5vdmVyYWxsLWNvbnRlbnQge1xuICAgIC50b3AtYmxhY2stYmxvY2sge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnRvcC1oZWFkZXItY29udGVudCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICB9XG4gICAgLnNvY2lhbC1jb3VudGVyYm94IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjZGRkZGRkO1xuICAgIH1cbiAgICAuc29jLWNvdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAucHJvZmlsZS1jZW50ZXIge1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyOiBzb2xpZCA1cHggI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC5lZGl0LXBlbmNpbGljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgIH1cbiAgICAgIC5lZGl0LXBlbmNpbGljb24gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gIFxuICAgICAgfVxuICAgIH1cbiAgICAudG9wLXByb2ZpbGUtY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAudG9wLXByb2ZpbGUtY2VudGVyIHNtYWxsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgfVxuICBcbiAgLmFycm93LXVwIHtcbiAgICB3aWR0aDogMDsgXG4gICAgaGVpZ2h0OiAwOyBcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICNEM0MxMTc7XG4gIH1cbiAgXG4gIC50b3AtdGFicyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLnRhYnMtYmxvY2sge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICAgIC50YWJzLWJsb2NrOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIHRvcDogLTEzcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIH1cbiAgICAuc2VsZWN0ZWQtdGFicyB7XG4gICAgICBjb2xvcjogI0QzQzExNztcbiAgICB9XG4gICAgLnNlbGVjdGVkLXRhYnM6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNEM0MxMTc7XG4gICAgfVxuICB9XG4gIFxuICAucHJvZmlsZS1pbm5lci1ibG9jayB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLmdyYXktcm93IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDVweCA1cHg7XG4gICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAubGVmdC1ib2xkLWhlYWQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5yaWdodC10eHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVkaXQtcm93LWljb24ge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgICAubWFpbi1oZWFkXG4gICAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgICAuaGVhZC1yaWdodC10eHR3aXRoaWNvblxuICAgICAge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5ib3JkZXItcm93IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gI2NjY2NjYztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIC5sZWZ0LWJvbGQtaGVhZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAucmlnaHQtdHh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmZvb3Rlci1maXhlZC10YWIge1xuICAgIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDUlO1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgLmZvb3Rlci1idG4tdGFicyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdW5ke1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNDMTE3O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_profilereview_profilereview_module_ts.js.map