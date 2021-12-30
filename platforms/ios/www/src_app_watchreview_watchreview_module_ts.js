"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_watchreview_watchreview_module_ts"],{

/***/ 8722:
/*!***********************************************************!*\
  !*** ./src/app/watchreview/watchreview-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchreviewPageRoutingModule": () => (/* binding */ WatchreviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _watchreview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchreview.page */ 46259);




const routes = [
    {
        path: '',
        component: _watchreview_page__WEBPACK_IMPORTED_MODULE_0__.WatchreviewPage
    }
];
let WatchreviewPageRoutingModule = class WatchreviewPageRoutingModule {
};
WatchreviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WatchreviewPageRoutingModule);



/***/ }),

/***/ 82508:
/*!***************************************************!*\
  !*** ./src/app/watchreview/watchreview.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchreviewPageModule": () => (/* binding */ WatchreviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _watchreview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchreview-routing.module */ 8722);
/* harmony import */ var _watchreview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchreview.page */ 46259);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let WatchreviewPageModule = class WatchreviewPageModule {
};
WatchreviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _watchreview_routing_module__WEBPACK_IMPORTED_MODULE_0__.WatchreviewPageRoutingModule
        ],
        declarations: [_watchreview_page__WEBPACK_IMPORTED_MODULE_1__.WatchreviewPage]
    })
], WatchreviewPageModule);



/***/ }),

/***/ 46259:
/*!*************************************************!*\
  !*** ./src/app/watchreview/watchreview.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchreviewPage": () => (/* binding */ WatchreviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_watchreview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./watchreview.page.html */ 21213);
/* harmony import */ var _watchreview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchreview.page.scss */ 5908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 24401);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _rateuser_rateuser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rateuser/rateuser.page */ 32448);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 78099);
















let WatchreviewPage = class WatchreviewPage {
    constructor(route, router, api, http, httpClient, storage, af, fs, geolocation, modalCtrl) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.http = http;
        this.httpClient = httpClient;
        this.storage = storage;
        this.af = af;
        this.fs = fs;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.dataLoaded = false;
        this.userBoolean = false;
        this.Avatar = true;
        this.disponsibility = [];
        this.notificationPresent = false;
        this.userReviews = [];
        this.review_ranking = {};
        this.route.queryParams.subscribe((params) => {
            if (params && params.special) {
                var details = JSON.parse(params.special);
                this.host_id = details.hostId;
                this.distance = details.distance;
                console.log(this.distance);
                console.log(details);
                console.log(this.host_id + 'hostid');
                this.storage.get('user_lang').then((lang) => {
                    if (lang == 'English') {
                        this.English = true;
                    }
                    else {
                        this.English = false;
                    }
                });
            }
        });
    }
    ngOnInit() {
        this.api.loading();
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
            this.storage.get('user_f_name').then((user_f_name) => {
                this.storage.get('user_l_name').then((user_l_name) => {
                    this.storage.get('user_img').then((user_img) => {
                        this.storage.get('user_type').then((user_type) => {
                            this.storage.get('user_lang').then((lang) => {
                                if (lang == 'English') {
                                    this.English = true;
                                }
                                else {
                                    this.English = false;
                                }
                            });
                            console.log(user_type);
                            this.geolocation.getCurrentPosition().then((resp) => {
                                // resp.coords.latitude
                                this.lat = resp.coords.latitude;
                                // resp.coords.longitude
                                this.long = resp.coords.longitude;
                                console.log(typeof user_type);
                                this.userImage = user_img;
                                this.user_Type = user_type;
                                var lname = user_l_name.substring(0, 1);
                                this.userFullname = user_f_name + ' ' + lname + '.';
                                this.uid = user_id;
                                const formData = new FormData();
                                formData.append('user_id', this.uid);
                                formData.append('user_host_id', this.host_id);
                                formData.append('user_lat', this.lat);
                                formData.append('user_long', this.long);
                                this.http
                                    .post('http://fitconnected.prometteur.in/index.php/Api/fields/user', formData)
                                    .subscribe((res) => {
                                    if (res.json().status == 1) {
                                        console.log(res.json());
                                        if (res.json().result[0].user_type === '1') {
                                            this.userType = true;
                                            this.userBoolean = res.json().result[0].booked_event;
                                            this.userReviews = res.json().user_review_list;
                                            this.review_ranking = res.json().review_ranking;
                                            this.userRating = res.json().avg_rating;
                                            this.total_review = res.json().total_review;
                                            // var total1= this.review_ranking.one_star;
                                            // var total5 = this.review_ranking.five_star*5
                                            // var total4=this.review_ranking.four_star*4;
                                            // var total3=this.review_ranking.three_star*3;
                                            // var total2=this.review_ranking.two_star*2;
                                            // var total =total5+total4+total3+total2+total1;
                                            // this.userRating = total/5;
                                            var lastName = res.json().result[0].user_l_name;
                                            var l_name = lastName.substring(0, 1);
                                            this.name =
                                                res.json().result[0].user_f_name + ' ' + l_name + '.';
                                            this.imgUrl = res.json().result[0].user_img;
                                            if (this.imgUrl === '' ||
                                                this.imgUrl === undefined ||
                                                this.imgUrl === null) {
                                                this.Avatar = false;
                                            }
                                            else {
                                                this.Avatar = true;
                                            }
                                            this.practice =
                                                res.json().result[0].user_question1_response;
                                            this.sportsPlayed =
                                                res.json().result[0].user_question2_response;
                                            this.userDescription =
                                                res.json().result[0].user_description1;
                                            //  this.disponsibility=JSON.parse(res.json().result[0].user_question3_response);
                                            this.followers = res.json().result[0].followers;
                                            this.following = res.json().result[0].following;
                                            this.dob = res.json().result[0].user_dob;
                                            var date = this.dob.split('T');
                                            this.distance = res.json().result[0].distance;
                                            var follow_status = res.json().result[0].follow_status;
                                            //  if(this.user_Type=="1"){
                                            if (follow_status == '0') {
                                                this.followHost = false;
                                            }
                                            else if (follow_status == '1') {
                                                this.followHost = true;
                                            }
                                            else {
                                                this.blockedHost = true;
                                                console.log('this host is blocked by user');
                                            }
                                            //  }
                                            var conv = moment__WEBPACK_IMPORTED_MODULE_2__(date[0], 'YYYY-MM-DD').fromNow();
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
                                        }
                                        else if (res.json().result[0].user_type === '2') {
                                            this.coachType = true;
                                            this.userBoolean = res.json().result[0].booked_event;
                                            this.userReviews = res.json().user_review_list;
                                            this.review_ranking = res.json().review_ranking;
                                            this.userRating = res.json().avg_rating;
                                            this.total_review = res.json().total_review;
                                            this.userRanking = res.json().userRanking;
                                            this.userRank = res.json().user_rank;
                                            var lastName = res.json().result[0].user_l_name;
                                            var l_name = lastName.substring(0, 1);
                                            this.name =
                                                res.json().result[0].user_f_name + ' ' + l_name + '.';
                                            this.imgUrl = res.json().result[0].user_img;
                                            if (this.imgUrl === '' ||
                                                this.imgUrl === undefined ||
                                                this.imgUrl === null) {
                                                this.Avatar = false;
                                            }
                                            else {
                                                this.Avatar = true;
                                            }
                                            this.pricePerHour =
                                                res.json().result[0].user_price_hour;
                                            this.pricePerPerson =
                                                res.json().result[0].user_price_per_person;
                                            console.log(this.pricePerHour);
                                            console.log(this.pricePerPerson);
                                            this.sportsPlayed =
                                                res.json().result[0].user_description2;
                                            this.userDescription =
                                                res.json().result[0].user_description1;
                                            this.followers = res.json().result[0].followers;
                                            this.following = res.json().result[0].following;
                                            this.dob = res.json().result[0].user_dob;
                                            this.distance = res.json().result[0].distance;
                                            var date = this.dob.split('T');
                                            var follow_status = res.json().result[0].follow_status;
                                            //  if(this.user_Type=="1"){
                                            if (follow_status == '0') {
                                                this.followHost = false;
                                            }
                                            else if (follow_status == '1') {
                                                this.followHost = true;
                                            }
                                            else {
                                                this.blockedHost = true;
                                                console.log('this host is blocked by user');
                                            }
                                            //  }
                                            var conv = moment__WEBPACK_IMPORTED_MODULE_2__(date[0], 'YYYY-MM-DD').fromNow();
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
                                        }
                                        this.dataLoaded = true;
                                    }
                                    else {
                                        console.log(res.json());
                                        this.api.dismissLoading();
                                        this.api.toast('Try again in some time');
                                        console.log('Server Error');
                                    }
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    follow() {
        if (this.blockedHost === true) {
            this.unfollow('block');
        }
        else {
            const formData = new FormData();
            formData.append('fol_user_id', this.uid);
            formData.append('fol_host_id', this.host_id);
            formData.append('fol_status', '1');
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/madd/user_follow', formData)
                .subscribe((res) => {
                if (res.json().status == 1) {
                    console.log(res.json());
                    if (this.English) {
                        var msg = 'You started Following ' + this.name;
                    }
                    else {
                        var msg = 'Vous avez commencé à suivre ' + this.name;
                    }
                    this.loadData();
                    this.api.toast(msg);
                }
                else {
                    console.log(res.json());
                }
            });
        }
    }
    unfollow(block) {
        if (block == 'block') {
            if (this.English) {
                var premsg = 'You Unblocked';
            }
            else {
                var premsg = 'Vous avez débloqué';
            }
        }
        else {
            if (this.English) {
                var premsg = 'You Unfollowed';
            }
            else {
                var premsg = 'Vous êtes désabonné';
            }
        }
        this.blockedHost = false;
        const formData = new FormData();
        formData.append('fol_user_id', this.uid);
        formData.append('fol_host_id', this.host_id);
        formData.append('fol_status', '0');
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user_follow', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
                var msg = premsg + ' ' + this.name;
                this.loadData();
                this.api.toast(msg);
            }
            else {
                console.log(res.json());
            }
        });
    }
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    block() {
        this.followHost = false;
        const formData = new FormData();
        formData.append('fol_user_id', this.uid);
        formData.append('fol_host_id', this.host_id);
        formData.append('fol_status', '2');
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user_follow', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
                if (this.English) {
                    var msg = 'You have blocked ' + this.name;
                }
                else {
                    var msg = 'Vous avez bloqué ' + this.name;
                }
                this.loadData();
                this.api.toast(msg);
            }
            else {
                console.log(res.json());
            }
        });
    }
    loadData() {
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_host_id', this.host_id);
        formData.append('user_lat', this.lat);
        formData.append('user_long', this.long);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/user', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
                if (res.json().result[0].user_type === '1') {
                    this.userType = true;
                    var lastName = res.json().result[0].user_l_name;
                    var l_name = lastName.substring(0, 1);
                    this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
                    this.imgUrl = res.json().result[0].user_img;
                    if (this.imgUrl === '' ||
                        this.imgUrl === undefined ||
                        this.imgUrl === null) {
                        this.Avatar = false;
                    }
                    else {
                        this.Avatar = true;
                    }
                    this.practice = res.json().result[0].user_question1_response;
                    this.sportsPlayed = res.json().result[0].user_question2_response;
                    this.userDescription = res.json().result[0].user_description1;
                    //  this.disponsibility=JSON.parse(res.json().result[0].user_question3_response);
                    this.followers = res.json().result[0].followers;
                    this.following = res.json().result[0].following;
                    this.dob = res.json().result[0].user_dob;
                    var date = this.dob.split('T');
                    this.distance = res.json().result[0].distance;
                    var follow_status = res.json().result[0].follow_status;
                    if (follow_status == '0') {
                        this.followHost = false;
                    }
                    else if (follow_status == '1') {
                        this.followHost = true;
                    }
                    else {
                        this.blockedHost = true;
                        console.log('this host is blocked by user');
                    }
                    var conv = moment__WEBPACK_IMPORTED_MODULE_2__(date[0], 'YYYY-MM-DD').fromNow();
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
                }
                else if (res.json().result[0].user_type === '2') {
                    this.coachType = true;
                    var lastName = res.json().result[0].user_l_name;
                    var l_name = lastName.substring(0, 1);
                    this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
                    this.imgUrl = res.json().result[0].user_img;
                    if (this.imgUrl === '' ||
                        this.imgUrl === undefined ||
                        this.imgUrl === null) {
                        this.Avatar = false;
                    }
                    else {
                        this.Avatar = true;
                    }
                    this.pricePerHour = res.json().result[0].user_price_hour;
                    this.pricePerPerson = res.json().result[0].user_price_per_person;
                    console.log(this.pricePerHour);
                    console.log(this.pricePerPerson);
                    this.sportsPlayed = res.json().result[0].user_description2;
                    this.userDescription = res.json().result[0].user_description1;
                    this.followers = res.json().result[0].followers;
                    this.following = res.json().result[0].following;
                    this.dob = res.json().result[0].user_dob;
                    this.distance = res.json().result[0].distance;
                    var date = this.dob.split('T');
                    var follow_status = res.json().result[0].follow_status;
                    if (follow_status == '0') {
                        this.followHost = false;
                    }
                    else if (follow_status == '1') {
                        this.followHost = true;
                    }
                    else {
                        this.blockedHost = true;
                        console.log('this host is blocked by user');
                    }
                    var conv = moment__WEBPACK_IMPORTED_MODULE_2__(date[0], 'YYYY-MM-DD').fromNow();
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
                }
            }
            else {
                console.log(res.json());
                this.api.dismissLoading();
                if (this.English) {
                    this.api.toast('Try again in sometime');
                }
                else {
                    this.api.toast('Réessayez dans un moment');
                }
                console.log('Server Error');
            }
        });
    }
    chat() {
        console.log('clicked');
        this.fs
            .collection('friends')
            .doc(this.uid)
            .collection('chats')
            .doc(this.host_id)
            .set({
            recieverName: this.name,
            recieverId: this.host_id,
            recieverImage: this.imgUrl,
            senderId: this.uid,
            senderName: this.userFullname,
            senderImage: this.userImage,
            Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.FieldValue,
        }, { merge: true });
        this.fs
            .collection('friends')
            .doc(this.host_id)
            .collection('chats')
            .doc(this.uid)
            .set({
            senderName: this.name,
            senderId: this.host_id,
            senderImage: this.imgUrl,
            recieverId: this.uid,
            recieverName: this.userFullname,
            recieverImage: this.userImage,
            Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.FieldValue,
        }, { merge: true });
        var vc = {
            recieverId: this.host_id,
            senderId: this.uid,
            recieverName: this.name,
            recieverImg: this.imgUrl,
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['conversation'], navigationExtras);
    }
    activity() {
        var vc = {
            hostId: this.host_id,
            userId: this.uid,
            distance: this.distance,
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['profil-activite'], navigationExtras);
    }
    profile() {
        var vc = {
            user_id: this.host_id,
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['coachviewprofile'], navigationExtras);
    }
    openRating() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _rateuser_rateuser_page__WEBPACK_IMPORTED_MODULE_6__.RateuserPage,
                showBackdrop: false,
                cssClass: 'ratePage',
                componentProps: {
                    userId: this.uid,
                    hostId: this.host_id,
                    pageTitle: 'Rate',
                },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
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
    back() {
        this.api.Navigate('map-sportifs');
    }
    getReviewPercentage(reviewRanking) {
        if (reviewRanking !== 0) {
            console.log(reviewRanking / this.total_review);
            return reviewRanking / this.total_review;
        }
        else {
            return reviewRanking;
        }
    }
};
WatchreviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_9__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController }
];
WatchreviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-watchreview',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_watchreview_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_watchreview_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService,
        _angular_http__WEBPACK_IMPORTED_MODULE_9__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuth,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore,
        _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController])
], WatchreviewPage);



/***/ }),

/***/ 21213:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/watchreview/watchreview.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-title\n        style=\"font-family: montserrat-medium; font-weight: bolder\"\n        class=\"top-fixed-heading uppercaes\"\n        >{{name | titlecase}} <br />\n        <ng-container *ngIf=\"userRank && coachType\">\n          {{'WATCHREVIEW.Text19' | translate}} -\n          <ion-text\n            style=\"\n              font-size: 16px;\n              font-weight: bold;\n              font-family: montserrat-medium;\n              color: #d3c117;\n            \"\n          >\n            {{userRank | number}}\n          </ion-text>\n        </ng-container>\n      </ion-title>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-title style=\"font-family: montserrat-medium; font-weight: bolder;\" class=\"top-fixed-heading uppercaes\">\n        \n      </ion-title>\n\n    </ion-row> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"dataLoaded\">\n  <div class=\"overall-content\">\n    <ion-row *ngIf=\"coachType\">\n      <ion-title\n        style=\"font-family: montserrat-medium; font-weight: bolder\"\n        class=\"top-fixed-heading uppercaes\"\n        [translate]=\"'WATCHREVIEW.Text19'\"\n        >{{userRanking}}\n      </ion-title>\n    </ion-row>\n    <!-- <div class=\"overall-content\" [routerLink]=\"['/coacheditprofile']\"\n       routerLinkActive=\"router-link-active\"> -->\n    <div class=\"top-black-block\"></div>\n    <div class=\"top-header-content\">\n      <div class=\"top-btn-toolbar\">\n        <ion-row>\n          <ion-col class=\"ion-text-left\">\n            <div>\n              <ion-button\n                *ngIf=\"!blockedHost\"\n                size=\"small\"\n                class=\"profile-btn\"\n                (click)=\"block()\"\n                [translate]=\"'WATCHREVIEW.Text1'\"\n              ></ion-button>\n              <ion-button\n                style=\"background: #d3c117\"\n                *ngIf=\"blockedHost\"\n                size=\"small\"\n                class=\"profile-btn\"\n                (click)=\"unfollow('block')\"\n                [translate]=\"'WATCHREVIEW.Text1'\"\n              >\n              </ion-button>\n            </div>\n\n            <!-- <div *ngIf=\"user_Type==='2'\" style=\"height: 30px;\"></div> -->\n            <!-- <ion-button  *ngIf=\"user_Type==='2'\" size=\"small\" class=\"profile-btn\" (click)=\"block()\">Bloquer</ion-button> -->\n            <div class=\"social-counterbox\">\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-count\"\n              >\n                {{followers}}\n              </div>\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-counttxt\"\n                [translate]=\"'WATCHREVIEW.Text2'\"\n              ></div>\n            </div>\n          </ion-col>\n          <ion-col\n            style=\"display: flex; flex-direction: row; justify-content: center\"\n          >\n            <div class=\"profile-center\">\n              <img *ngIf=\"!Avatar\" src=\"assets/images/profile-img.png\" />\n              <ion-avatar style=\"height: 92px; width: 92px\" *ngIf=\"Avatar\">\n                <ion-img [src]=\"imgUrl\"></ion-img>\n              </ion-avatar>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <div></div>\n            <div>\n              <ion-button\n                *ngIf=\"!followHost\"\n                size=\"small\"\n                class=\"profile-btnicon\"\n                (click)=\"follow()\"\n              >\n                <ion-icon name=\"add\"></ion-icon>\n                <span [translate]=\"'WATCHREVIEW.Text3'\"></span>\n              </ion-button>\n            </div>\n\n            <!-- <div *ngIf=\"user_Type==='2'\" style=\"height: 30px;\">\n                         \n                      </div> -->\n\n            <div>\n              <ion-button\n                style=\"background: #d3c117\"\n                *ngIf=\"followHost\"\n                size=\"small\"\n                class=\"profile-btnicon\"\n                (click)=\"unfollow()\"\n                [translate]=\"'WATCHREVIEW.Text4'\"\n              >\n              </ion-button>\n            </div>\n\n            <!-- <div *ngIf=\"user_Type==='2'\" style=\"display: none;\">\n                          <ion-button style=\"background: #D3C117;\" *ngIf=\"followHost\" size=\"small\" class=\"profile-btnicon\" (click)=\"unfollow()\">\n                          \n                              ne plus suivre\n                          </ion-button>\n                      </div> -->\n\n            <div class=\"social-counterbox\">\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-count\"\n              >\n                {{following}}\n              </div>\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-counttxt\"\n                [translate]=\"'WATCHREVIEW.Text5'\"\n              ></div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            color: #d3c117;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n        >\n          <div\n            *ngIf=\"userType\"\n            class=\"ion-text-center\"\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bolder;\n              margin-top: 5%;\n              color: #d3c117;\n            \"\n          >\n            {{name | titlecase}}\n          </div>\n          <div *ngIf=\"coachType\" style=\"margin-top: 5%\" class=\"ion-text-center\">\n            <ion-row style=\"margin-top: 2%\">\n              <ion-icon name=\"star\"></ion-icon>\n              <ion-text style=\"font-family: montserrat-medium\"\n                >{{name | titlecase}}</ion-text\n              >\n            </ion-row>\n            <ion-row>\n              <ion-text\n                class=\"gray-color\"\n                style=\"font-family: montserrat-medium\"\n                [translate]=\"'PROFILEACTIVITE.Text6'\"\n              ></ion-text>\n            </ion-row>\n          </div>\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            margin-top: 2%;\n          \"\n        >\n          <div\n            class=\"small-txt ion-text-center\"\n            style=\"font-family: montserrat-medium\"\n          >\n            {{gender}} - {{age}}\n            <span [translate]=\"'PROFILEACTIVITE.Text7'\"></span>\n          </div>\n        </ion-row>\n\n        <ion-row style=\"justify-content: center\" *ngIf=\"coachType\">\n          <div\n            class=\"small-txt ion-text-center\"\n            style=\"font-family: montserrat-medium\"\n          >\n            <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n            <span [translate]=\"'WATCHREVIEW.Text12'\"></span\n            >{{userRating|number:\"0.1-2\"}}/5 - ({{total_review}}\n            <span [translate]=\"'WATCHREVIEW.Text16'\"></span>\n          </div>\n        </ion-row>\n        <ion-row class=\"top-profile-center ion-align-items-center\">\n          <div class=\"small-txt-location ion-no-margin ion-text-center\">\n            <img\n              class=\"top-location-img\"\n              src=\"assets/images/icon-location.png\"\n            />\n            {{distance}} KM\n          </div>\n          <button *ngIf=\"!followHost\" class=\"top-profile-btn\">\n            <img src=\"assets/images/chat-white.png\" />\n            <span [translate]=\"'WATCHREVIEW.Text8'\"></span>\n          </button>\n\n          <button *ngIf=\"followHost\" class=\"top-profile-btn\" (click)=\"chat()\">\n            <img src=\"assets/images/chat-white.png\" />\n            <span [translate]=\"'WATCHREVIEW.Text8'\"></span>\n          </button>\n        </ion-row>\n        <div class=\"top-tabs\">\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" (click)=\"profile()\">\n              <div\n                class=\"tabs-block uppercaes\"\n                style=\"font-weight: bold\"\n                [translate]=\"'WATCHREVIEW.Text9'\"\n              >\n                \\\n              </div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" (click)=\"activity()\">\n              <div\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'WATCHREVIEW.Text10'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes selected-tabs\"\n                [translate]=\"'WATCHREVIEW.Text11'\"\n              ></div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"profile-inner-block\">\n      <ion-row *ngIf=\"coachType\">\n        <ion-col size=\"4\">\n          <ion-text\n            style=\"\n              font-size: 16px;\n              font-weight: bold;\n              font-family: montserrat-medium;\n            \"\n            [translate]=\"'WATCHREVIEW.Text12'\"\n          ></ion-text>\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"openRating()\" *ngIf=\"userBoolean\">\n          <img src=\"assets/chaticonoval.svg\" />\n          <ion-text\n            style=\"color: #708aaa; font-size: 14px\"\n            [translate]=\"'WATCHREVIEW.Text13'\"\n          >\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n\n          <ion-text\n            >{{getReviewPercentage(review_ranking.one_star) |\n            percent}}</ion-text\n          >\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-text\n            >{{getReviewPercentage(review_ranking.two_star) |\n            percent}}</ion-text\n          >\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-text\n            >{{getReviewPercentage(review_ranking.three_star) |\n            percent}}</ion-text\n          >\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"medium\" name=\"star-outline\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-text\n            >{{getReviewPercentage(review_ranking.four_star) |\n            percent}}</ion-text\n          >\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n          <ion-text\n            >{{getReviewPercentage(review_ranking.five_star) |\n            percent}}</ion-text\n          >\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-text\n            style=\"\n              font-size: 16px;\n              font-weight: bold;\n              font-family: montserrat-medium;\n            \"\n            [translate]=\"'WATCHREVIEW.Text18'\"\n          >\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <span\n            style=\"\n              font-size: 16px;\n              font-weight: bold;\n              font-family: montserrat-medium;\n            \"\n            [translate]=\"'WATCHREVIEW.Text17'\"\n          >\n          </span>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              font-weight: bold;\n              font-family: montserrat-medium;\n              color: #d3c117;\n            \"\n          >\n            {{total_review}}\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-card *ngFor=\"let userReview of userReviews\">\n        <ion-card-header>\n          <ion-row style=\"border-bottom: 1px solid lightgray\">\n            <ion-col size=\"2\">\n              <ion-avatar>\n                <img [src]=\"userReview.user_img\" />\n              </ion-avatar>\n            </ion-col>\n            <ion-col size=\"6\" style=\"padding-left: 10%\">\n              <ion-row>\n                <ion-text\n                  style=\"\n                    font-weight: bold;\n                    font-size: 16px;\n                    font-family: montserrat-medium;\n                  \"\n                >\n                  {{userReview.user_f_name}} {{userReview.user_l_name}}\n                </ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-icon\n                  color=\"primary\"\n                  [name]=\"userReview.urate_rating >= 1 ? 'star' : 'star-outline'\"\n                ></ion-icon>\n                <ion-icon\n                  color=\"primary\"\n                  [name]=\"userReview.urate_rating >= 2 ? 'star' : 'star-outline'\"\n                ></ion-icon>\n                <ion-icon\n                  color=\"primary\"\n                  [name]=\"userReview.urate_rating >= 3 ? 'star' : 'star-outline'\"\n                ></ion-icon>\n                <ion-icon\n                  color=\"primary\"\n                  [name]=\"userReview.urate_rating >= 4 ? 'star' : 'star-outline'\"\n                ></ion-icon>\n                <ion-icon\n                  color=\"primary\"\n                  [name]=\"userReview.urate_rating >= 5 ? 'star' : 'star-outline'\"\n                ></ion-icon>\n                <ion-text\n                  style=\"\n                    font-size: 10px;\n                    font-weight: bold;\n                    font-family: montserrat-medium;\n                  \"\n                >\n                  {{userReview.urate_rating}} Ratings</ion-text\n                >\n              </ion-row>\n            </ion-col>\n            <!-- <ion-col size=\"3\">\n              <ion-text style=\"font-size: 9px;\">02 Oct 2020 02:00 PM</ion-text>\n            </ion-col> -->\n          </ion-row>\n        </ion-card-header>\n\n        <ion-card-content style=\"font-family: montserrat-medium\">\n          {{userReview.urate_review}}\n        </ion-card-content>\n      </ion-card>\n      <ion-row *ngIf=\"userReviews.length==0\" style=\"justify-content: center\">\n        <ion-text [translate]=\"'WATCHREVIEW.Text14'\"></ion-text>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 5908:
/*!***************************************************!*\
  !*** ./src/app/watchreview/watchreview.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.overall-content .top-black-block {\n  height: 60px;\n  background: #414141;\n  position: relative;\n  font-weight: bolder;\n}\n.overall-content .top-header-content {\n  position: relative;\n  margin-top: -50px;\n}\n.overall-content .social-counterbox {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 12px;\n  color: #666666;\n}\n.overall-content .soc-count {\n  font-size: 20px;\n  font-weight: bolder;\n}\n.overall-content .profile-center {\n  width: 100px;\n  position: relative;\n  border: solid 5px #ffffff;\n  border-radius: 50%;\n  justify-content: center;\n  margin-left: auto;\n}\n.overall-content .profile-btn {\n  --background: transparent;\n  border: solid 2px #ffffff;\n  border-radius: 15px;\n  text-transform: capitalize;\n  --box-shadow: none;\n  font-weight: bold;\n  margin-left: 30px;\n}\n.overall-content .profile-btnicon {\n  --background: transparent;\n  border: solid 2px #ffffff;\n  border-radius: 15px;\n  text-transform: capitalize;\n  --box-shadow: none;\n  font-weight: bold;\n}\n.overall-content .profile-btnicon ion-icon {\n  margin-right: 9px;\n}\n.overall-content .top-profile-center {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.overall-content .top-profile-center small {\n  width: 100%;\n  display: inline-block;\n}\n.overall-content .small-txt-location {\n  text-align: center;\n  margin: 0px 0px;\n}\n.overall-content .small-txt-location .top-location-img {\n  width: 12px;\n}\n.overall-content .top-profile-btn {\n  border-radius: 30px;\n  padding: 10px 10px 10px 40px;\n  position: relative;\n  text-transform: uppercase;\n  background-color: #D3C117;\n  color: #ffffff;\n}\n.overall-content .top-profile-btn img {\n  width: 22px;\n  position: absolute;\n  left: 10px;\n  top: 7px;\n}\n.overall-content .top-tabs {\n  display: inline-block;\n  width: 100%;\n  background: #ffffff;\n  --background: #ffffff;\n  --ion-color-base: #ffffff !important;\n  color: #cccccc;\n  position: relative;\n  padding: 10px 0px;\n  margin-top: 15px;\n  text-align: center;\n}\n.overall-content .top-tabs .tabs-block {\n  position: relative;\n  text-transform: capitalize;\n}\n.overall-content .top-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -13px;\n  left: 0px;\n  background: #cccccc;\n}\n.overall-content .top-tabs .selected-tabs {\n  color: #D3C117;\n}\n.overall-content .top-tabs .selected-tabs:before {\n  background: #D3C117;\n}\n.overall-content .profile-inner-block {\n  padding: 10px 15px 10px 15px;\n}\n.overall-content .profile-inner-block .gray-row {\n  width: 100%;\n  background: #f5f5f5;\n  padding: 10px 5px 5px 5px;\n  color: #666666;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n.overall-content .profile-inner-block .gray-row .left-bolder-head {\n  font-weight: bolder;\n}\n.overall-content .profile-inner-block .gray-row .right-txt {\n  text-align: right;\n}\n.overall-content .profile-inner-block .border-row {\n  width: 100%;\n  padding: 8px 0px;\n  border-bottom: solid thin #cccccc;\n  display: inline-block;\n}\n.overall-content .profile-inner-block .border-row .left-bolder-head {\n  font-weight: bolder;\n  display: inline-block;\n}\n.overall-content .profile-inner-block .border-row .right-txt {\n  text-align: right;\n  display: inline-block;\n  float: right;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bolder;\n  color: white;\n}\n.ion-text-center {\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNocmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUFJO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQUVOO0FBR0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQU47QUFFSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQU47QUFFSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRUk7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUROO0FBR0k7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUROO0FBR0k7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFETjtBQUdJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBRE47QUFHSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUROO0FBRU07RUFFRSxXQUFBO0FBRFI7QUFJSTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBRk47QUFJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBRk47QUFJSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOO0FBR007RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FBRFI7QUFHTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQURSO0FBR007RUFDRSxjQUFBO0FBRFI7QUFHTTtFQUNFLG1CQUFBO0FBRFI7QUFJSTtFQUNFLDRCQUFBO0FBRk47QUFJTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZSO0FBR1E7RUFDRSxtQkFBQTtBQURWO0FBR1E7RUFDRSxpQkFBQTtBQURWO0FBSU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FBRlI7QUFHUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFEVjtBQUdRO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFEVjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpKO0FBS0k7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQUhOO0FBSU07RUFDRSxVQUFBO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUdRO0VBQ0UsVUFBQTtBQURWO0FBR1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRFY7QUFNRTtFQUNFLGNBQUE7QUFISiIsImZpbGUiOiJ3YXRjaHJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWZpeGVkLXRvcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC50b3AtZ2xvYmFsLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIC5vdmVyYWxsLWNvbnRlbnQge1xuICAgIC50b3AtYmxhY2stYmxvY2sge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgfVxuICAgIC50b3AtaGVhZGVyLWNvbnRlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgfVxuICAgIC5zb2NpYWwtY291bnRlcmJveCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgfVxuICAgIC5zb2MtY291bnQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG4gICAgLnByb2ZpbGUtY2VudGVyIHtcbiAgICAgXG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXI6IHNvbGlkIDVweCAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG4gICAgLnByb2ZpbGUtYnRue1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogc29saWQgMnB4ICNmZmZmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cbiAgICAucHJvZmlsZS1idG5pY29uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IHNvbGlkIDJweCAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5wcm9maWxlLWJ0bmljb24gaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgfVxuICAgIC50b3AtcHJvZmlsZS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50b3AtcHJvZmlsZS1jZW50ZXIgc21hbGwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5zbWFsbC10eHQtbG9jYXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgLnRvcC1sb2NhdGlvbi1pbWdcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50b3AtcHJvZmlsZS1idG4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzQzExNztcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgICAudG9wLXByb2ZpbGUtYnRuIGltZyB7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICB0b3A6IDdweDtcbiAgICB9XG4gICAgLnRvcC10YWJzIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLnRhYnMtYmxvY2sge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgICAgLnRhYnMtYmxvY2s6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIHRvcDogLTEzcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RlZC10YWJzIHtcbiAgICAgICAgY29sb3I6ICNEM0MxMTc7XG4gICAgICB9XG4gICAgICAuc2VsZWN0ZWQtdGFiczpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRDNDMTE3O1xuICAgICAgfVxuICAgIH1cbiAgICAucHJvZmlsZS1pbm5lci1ibG9jayB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xuICBcbiAgICAgIC5ncmF5LXJvdyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweCA1cHggNXB4O1xuICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAubGVmdC1ib2xkZXItaGVhZCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtdHh0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmJvcmRlci1yb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC5sZWZ0LWJvbGRlci1oZWFkIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtdHh0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZm9vdGVyLWZpeGVkLXRhYiB7XG4gICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHggNSU7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAuZm9vdGVyLWJ0bi10YWJzIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAucm91bmR7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0MxMTc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pb24tdGV4dC1jZW50ZXJ7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_watchreview_watchreview_module_ts.js.map