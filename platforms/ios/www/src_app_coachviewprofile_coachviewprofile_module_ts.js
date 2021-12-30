"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_coachviewprofile_coachviewprofile_module_ts"],{

/***/ 53689:
/*!*********************************************************************!*\
  !*** ./src/app/coachviewprofile/coachviewprofile-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachviewprofilePageRoutingModule": () => (/* binding */ CoachviewprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _coachviewprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coachviewprofile.page */ 47851);




const routes = [
    {
        path: '',
        component: _coachviewprofile_page__WEBPACK_IMPORTED_MODULE_0__.CoachviewprofilePage
    }
];
let CoachviewprofilePageRoutingModule = class CoachviewprofilePageRoutingModule {
};
CoachviewprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoachviewprofilePageRoutingModule);



/***/ }),

/***/ 84209:
/*!*************************************************************!*\
  !*** ./src/app/coachviewprofile/coachviewprofile.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachviewprofilePageModule": () => (/* binding */ CoachviewprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _coachviewprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coachviewprofile-routing.module */ 53689);
/* harmony import */ var _coachviewprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coachviewprofile.page */ 47851);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let CoachviewprofilePageModule = class CoachviewprofilePageModule {
};
CoachviewprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coachviewprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoachviewprofilePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_coachviewprofile_page__WEBPACK_IMPORTED_MODULE_1__.CoachviewprofilePage]
    })
], CoachviewprofilePageModule);



/***/ }),

/***/ 47851:
/*!***********************************************************!*\
  !*** ./src/app/coachviewprofile/coachviewprofile.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachviewprofilePage": () => (/* binding */ CoachviewprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coachviewprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coachviewprofile.page.html */ 68856);
/* harmony import */ var _coachviewprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coachviewprofile.page.scss */ 95692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 24401);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);















let CoachviewprofilePage = class CoachviewprofilePage {
    constructor(translaterService, route, router, api, http, httpClient, storage, af, fs, geolocation) {
        this.translaterService = translaterService;
        this.route = route;
        this.router = router;
        this.api = api;
        this.http = http;
        this.httpClient = httpClient;
        this.storage = storage;
        this.af = af;
        this.fs = fs;
        this.geolocation = geolocation;
        this.Avatar = true;
        this.disponsibility = [];
        this.notificationPresent = false;
        this.hostuser = {};
        this.ban = false;
        this.route.queryParams.subscribe((params) => {
            if (params && params.special) {
                var details = JSON.parse(params.special);
                this.host_id = details.user_id;
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
                                            this.ban = res.json().result[0].user_banned;
                                            this.firstName = res.json().result[0].user_f_name;
                                            this.lastName = res.json().result[0].user_l_name;
                                            var l_name = this.lastName.substring(0, 1);
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
                                            this.hostuser = res.json().result[0];
                                            this.userRating = res.json().avg_rating;
                                            this.total_review = res.json().total_review;
                                            this.userRanking = res.json().userRanking;
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
                                            this.hostuser = res.json().result[0];
                                            this.firstName = res.json().result[0].user_f_name;
                                            this.lastName = res.json().result[0].user_l_name;
                                            var l_name = this.lastName.substring(0, 1);
                                            this.name =
                                                res.json().result[0].user_f_name + ' ' + l_name + '.';
                                            this.imgUrl = res.json().result[0].user_img;
                                            this.userRank = res.json().user_rank;
                                            this.userRating = res.json().avg_rating;
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
            this.fs
                .collection('friends')
                .doc(this.host_id)
                .collection('chats')
                .doc(this.uid)
                .update({ blocked: false });
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
                this.fs
                    .collection('friends')
                    .doc(this.host_id)
                    .collection('chats')
                    .doc(this.uid)
                    .update({ blocked: true });
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
                    this.firstName = res.json().result[0].user_f_name;
                    this.lastName = res.json().result[0].user_l_name;
                    var l_name = this.lastName.substring(0, 1);
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
                    this.firstName = res.json().result[0].user_f_name;
                    this.lastName = res.json().result[0].user_l_name;
                    var l_name = this.lastName.substring(0, 1);
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
        if (!this.followHost) {
            // alert('you need to follow the host first');
            this.api.toast(this.English
                ? 'Follow the coach to message'
                : 'Suivez le coach pour envoyer un message', false, 'primary');
            return;
        }
        console.log('clicked');
        // alert('this.name' + this.name);
        // alert('this.api.fullName' + this.api.fullName);
        this.fs
            .collection('friends')
            .doc(this.uid)
            .collection('chats')
            .doc(this.host_id)
            .set({
            recieverName: this.firstName + ' ' + this.lastName,
            recieverId: this.host_id,
            recieverImage: this.imgUrl,
            senderId: this.uid,
            // senderName: this.userFullname,
            senderName: this.api.fullName,
            senderImage: this.userImage,
            Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.Timestamp.fromDate(new Date()),
        }, { merge: true });
        this.fs
            .collection('friends')
            .doc(this.host_id)
            .collection('chats')
            .doc(this.uid)
            .set({
            senderName: this.firstName + ' ' + this.lastName,
            senderId: this.host_id,
            senderImage: this.imgUrl,
            recieverId: this.uid,
            // recieverName: this.userFullname,
            recieverName: this.api.fullName,
            recieverImage: this.userImage,
            Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.Timestamp.fromDate(new Date()),
        }, { merge: true });
        var vc = {
            recieverId: this.host_id,
            senderId: this.uid,
            recieverName: this.firstName + ' ' + this.lastName,
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
    reviewPage() {
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
        this.router.navigate(['watchreview'], navigationExtras);
    }
    rankingDetails() {
        console.log('test');
        this.api.Navigate('ranking');
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
};
CoachviewprofilePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_8__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestore },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation }
];
CoachviewprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-coachviewprofile',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coachviewprofile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coachviewprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService,
        _angular_http__WEBPACK_IMPORTED_MODULE_8__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestore,
        _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation])
], CoachviewprofilePage);



/***/ }),

/***/ 68856:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/coachviewprofile/coachviewprofile.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button> -->\n      <ion-back-button text=\"\" defaultHref=\"ranking\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"font-family: montserrat-medium; font-weight: bolder\"\n      class=\"top-fixed-heading uppercaes\"\n    >\n      {{name | titlecase}}\n      <br />\n      <ng-container *ngIf=\"userRank && coachType\">\n        {{'WATCHREVIEW.Text19' | translate}} -\n        <ion-text\n          style=\"\n            font-size: 16px;\n            font-weight: bold;\n            font-family: montserrat-medium;\n            color: #d3c117;\n          \"\n        >\n          {{userRank | number}}\n        </ion-text>\n      </ng-container>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"overall-content\">\n    <!-- <div class=\"overall-content\" [routerLink]=\"['/coacheditprofile']\"\n         routerLinkActive=\"router-link-active\"> -->\n    <ion-row *ngIf=\"coachType\">\n      <ion-title\n        style=\"font-family: montserrat-medium; font-weight: bolder\"\n        class=\"top-fixed-heading uppercaes\"\n        [translate]=\"'WATCHREVIEW.Text19'\"\n        >{{userRanking}}\n      </ion-title>\n    </ion-row>\n    <div class=\"top-black-block\"></div>\n    <div class=\"top-header-content\">\n      <div class=\"top-btn-toolbar\">\n        <ion-row>\n          <ion-col class=\"ion-text-left\">\n            <div>\n              <ion-button\n                *ngIf=\"!blockedHost\"\n                size=\"small\"\n                class=\"profile-btn\"\n                (click)=\"block()\"\n                [translate]=\"'COACHVIEW.Text1'\"\n              ></ion-button>\n              <ion-button\n                style=\"background: #d3c117\"\n                *ngIf=\"blockedHost\"\n                size=\"small\"\n                class=\"profile-btn\"\n                (click)=\"unfollow('block')\"\n                [translate]=\"'COACHVIEW.Text1'\"\n              >\n              </ion-button>\n            </div>\n\n            <!-- <div *ngIf=\"user_Type==='2'\" style=\"height: 30px;\"></div> -->\n            <!-- <ion-button  *ngIf=\"user_Type==='2'\" size=\"small\" class=\"profile-btn\" (click)=\"block()\">Bloquer</ion-button> -->\n            <div class=\"social-counterbox\">\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-count\"\n              >\n                {{followers}}\n              </div>\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-counttxt\"\n                [translate]=\"'COACHVIEW.Text2'\"\n              ></div>\n            </div>\n          </ion-col>\n          <ion-col\n            style=\"display: flex; flex-direction: row; justify-content: center\"\n          >\n            <div class=\"profile-center\">\n              <img *ngIf=\"!Avatar\" src=\"assets/images/profile-img.png\" />\n              <ion-avatar style=\"height: 92px; width: 92px\" *ngIf=\"Avatar\">\n                <ion-img [src]=\"imgUrl\"></ion-img>\n              </ion-avatar>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <div></div>\n            <div>\n              <ion-button\n                *ngIf=\"!followHost\"\n                size=\"small\"\n                class=\"profile-btnicon\"\n                (click)=\"follow()\"\n              >\n                <ion-icon name=\"add\"></ion-icon>\n                <span [translate]=\"'COACHVIEW.Text3'\"></span>\n              </ion-button>\n            </div>\n\n            <!-- <div *ngIf=\"user_Type==='2'\" style=\"height: 30px;\">\n                           \n                        </div> -->\n\n            <div>\n              <ion-button\n                style=\"background: #d3c117\"\n                *ngIf=\"followHost\"\n                size=\"small\"\n                class=\"profile-btnicon\"\n                (click)=\"unfollow()\"\n                [translate]=\"'COACHVIEW.Text4'\"\n              >\n              </ion-button>\n            </div>\n\n            <!-- <div *ngIf=\"user_Type==='2'\" style=\"display: none;\">\n                            <ion-button style=\"background: #D3C117;\" *ngIf=\"followHost\" size=\"small\" class=\"profile-btnicon\" (click)=\"unfollow()\">\n                            \n                                ne plus suivre\n                            </ion-button>\n                        </div> -->\n\n            <div class=\"social-counterbox\">\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-count\"\n              >\n                {{following}}\n              </div>\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-counttxt\"\n                [translate]=\"'COACHVIEW.Text5'\"\n              ></div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            color: #d3c117;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n        >\n          <div\n            *ngIf=\"userType\"\n            class=\"ion-text-center\"\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bolder;\n              margin-top: 5%;\n              color: #d3c117;\n            \"\n          >\n            <div style=\"display: flex; align-items: center\" *ngIf=\"ban\">\n              <img src=\"assets/images/ban.png\" style=\"width: 1rem\" alt=\"\" />\n              &nbsp; {{name | titlecase}}\n            </div>\n          </div>\n          <div *ngIf=\"coachType\" style=\"margin-top: 5%\" class=\"ion-text-center\">\n            <ion-row style=\"margin-top: 2%\">\n              <ion-icon name=\"star\"></ion-icon>\n              <ion-text style=\"font-family: montserrat-medium\"\n                >{{name | titlecase}}</ion-text\n              >\n            </ion-row>\n            <ion-row>\n              <ion-text\n                class=\"gray-color\"\n                style=\"font-family: montserrat-medium\"\n                [translate]=\"'PROFILEACTIVITE.Text6'\"\n              ></ion-text>\n            </ion-row>\n          </div>\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            margin-top: 2%;\n          \"\n        >\n          <div\n            class=\"small-txt ion-text-center\"\n            style=\"font-family: montserrat-medium\"\n          >\n            {{gender}} - {{age}}\n            <span [translate]=\"'PROFILEACTIVITE.Text7'\"></span>\n          </div>\n        </ion-row>\n\n        <ion-row style=\"justify-content: center\">\n          <div\n            class=\"small-txt ion-text-center\"\n            style=\"font-family: montserrat-medium\"\n          >\n            <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n            <span [translate]=\"'WATCHREVIEW.Text12'\"></span>\n            {{userRating|number:\"0.1-2\"}}/5 - ({{total_review}}\n            <span [translate]=\"'WATCHREVIEW.Text16'\"></span>\n          </div>\n        </ion-row>\n\n        <ion-row class=\"top-profile-center ion-align-items-center\">\n          <div class=\"small-txt-location ion-no-margin ion-text-center\">\n            <img\n              class=\"top-location-img\"\n              src=\"assets/images/icon-location.png\"\n            />\n            {{distance}} KM\n          </div>\n          <!-- <button class=\"top-profile-btn\">\n            <img src=\"assets/images/chat-white.png\" />\n            <span [translate]=\"'COACHVIEW.Text8'\"></span>\n          </button> -->\n\n          <button class=\"top-profile-btn\" (click)=\"chat()\">\n            <img src=\"assets/images/chat-white.png\" />\n            <span [translate]=\"'COACHVIEW.Text8'\"></span>\n          </button>\n        </ion-row>\n        <div class=\"top-tabs\">\n          <ion-row>\n            <ion-col class=\"ion-no-padding\">\n              <div\n                class=\"tabs-block uppercaes selected-tabs\"\n                style=\"font-weight: bold\"\n                [translate]=\"'COACHVIEW.Text9'\"\n              >\n                \\\n              </div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" (click)=\"activity()\">\n              <div\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'COACHVIEW.Text10'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" (click)=\"reviewPage()\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'COACHVIEW.Text18'\"\n              ></div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n    <!-- USER PROFILE VIEW -->\n\n    <div class=\"profile-inner-block\" *ngIf=\"userType\">\n      <div class=\"gray-row\">\n        <ion-row>\n          <b\n            class=\"main-head\"\n            style=\"font-family: montserrat-medium\"\n            [translate]=\"'COACHVIEW.Text11'\"\n          ></b>\n        </ion-row>\n        <ion-row>\n          <div style=\"font-family: montserrat\" class=\"head-right-txtwithicon\">\n            {{practice}}\n          </div>\n        </ion-row>\n      </div>\n\n      <!-- <div class=\"gray-row\">\n        <ion-row>\n          <b\n            style=\"font-family: montserrat-medium\"\n            class=\"main-head\"\n            [translate]=\"'COACHVIEW.Text17'\"\n          >\n          </b>\n        </ion-row>\n        <ion-row>\n          <p class=\"basic-details\" style=\"font-family: montserrat\">\n            {{hostuser.spcat_name}}\n          </p>\n        </ion-row>\n      </div> -->\n\n      <div class=\"gray-row\">\n        <ion-row>\n          <b\n            class=\"main-head\"\n            style=\"font-family: montserrat-medium\"\n            [translate]=\"'COACHVIEW.Text12'\"\n          >\n          </b>\n        </ion-row>\n        <ion-row>\n          <p style=\"font-family: montserrat\" class=\"basic-details\">\n            {{sportsPlayed}}\n          </p>\n        </ion-row>\n      </div>\n      <div class=\"gray-row\">\n        <ion-row>\n          <b\n            class=\"main-head\"\n            style=\"font-family: montserrat-medium\"\n            [translate]=\"'COACHVIEW.Text13'\"\n          >\n          </b>\n        </ion-row>\n        <ion-row>\n          <p class=\"basic-details\" style=\"font-family: montserrat\">\n            «  {{userDescription}} »\n          </p>\n        </ion-row>\n      </div>\n      <!-- <ion-row class=\"gray-row\">\n        <b style=\"font-family: montserrat-medium;\" class=\"main-head\">Disponibilités\n         </b>\n        <ion-row class=\"border-row\" *ngFor=\"let item of disponsibility\">\n          <div class=\"left-bold-head\" style=\"font-family: montserrat;\">{{item.name}}</div>\n          <ion-row  class=\"right-txt\" *ngIf=\"item.Soir==true\" style=\"padding-right: 10px;\">\n            Soir\n          </ion-row >\n\n            <ion-row *ngIf=\"item.Midi==true\" class=\"right-txt\" style=\"padding-right: 10px;\">\n              Midi\n            </ion-row>\n            <ion-row class=\"right-txt\" *ngIf=\"item.Matin==true\" style=\"padding-right: 10px;\">\n              Matin\n            </ion-row>\n          \n        </ion-row>\n      \n      </ion-row> -->\n    </div>\n\n    <!-- COACH PROFILE VIEW -->\n    <div class=\"profile-inner-block\" *ngIf=\"coachType\">\n      <!-- <ion-row class=\"gray-row\">\n                <b class=\"main-head\" style=\"font-family: montserrat-medium;\" [translate]=\"'COACHVIEW.Text14'\"></b>\n                <ion-row class=\"border-row\">\n                    <div class=\"left-bold-head\" style=\"font-family: montserrat-medium;\"\n                        [translate]=\"'COACHVIEW.Text15'\"></div>\n                    <div class=\"right-txt\" style=\"font-family: montserrat;\">{{pricePerHour}}\n\n                        <ion-icon name=\"logo-euro\"></ion-icon>\n\n                    </div>\n\n\n                </ion-row>\n                <ion-row class=\"border-row\">\n                    <div class=\"left-bold-head\" style=\"font-family: montserrat-medium;\"\n                        [translate]=\"'COACHVIEW.Text16'\"></div>\n                    <div class=\"right-txt\" style=\"font-family: montserrat;\">{{pricePerPerson}}\n                        <ion-icon name=\"logo-euro\"></ion-icon>\n\n                    </div>\n\n\n                </ion-row>\n            </ion-row> -->\n      <div class=\"gray-row\">\n        <!-- <div class=\"left-bold-head\">\n                    Cours(s) Proposé(s)</div>\n                <p class=\"basic-details\">{{sportsPlayed}}</p> -->\n        <ion-row>\n          <b\n            style=\"font-family: montserrat-medium\"\n            class=\"main-head\"\n            [translate]=\"'COACHVIEW.Text12'\"\n          >\n          </b>\n        </ion-row>\n        <ion-row>\n          <p class=\"basic-details\" style=\"font-family: montserrat\">\n            {{hostuser.spcat_name}}\n          </p>\n        </ion-row>\n        <!-- <ion-row>\n          <b\n            style=\"font-family: montserrat-medium\"\n            class=\"main-head\"\n            [translate]=\"'COACHVIEW.Text17'\"\n          >\n          </b>\n        </ion-row> \n        <ion-row>\n          <p class=\"basic-details\" style=\"font-family: montserrat\">\n            {{hostuser.spcat_name}}\n          </p>\n        </ion-row>-->\n      </div>\n      <div class=\"gray-row\">\n        <ion-row>\n          <b\n            class=\"main-head\"\n            style=\"font-family: montserrat-medium\"\n            [translate]=\"'COACHVIEW.Text13'\"\n          >\n          </b>\n        </ion-row>\n        <ion-row>\n          <p class=\"basic-details\" style=\"font-family: montserrat\">\n            « {{userDescription}} »\n          </p>\n        </ion-row>\n        <!-- <div class=\"left-bold-head\">Description</div>\n                <p class=\"basic-details\">\n                    « {{userDescription}} »\n                </p> -->\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 95692:
/*!*************************************************************!*\
  !*** ./src/app/coachviewprofile/coachviewprofile.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.overall-content .top-black-block {\n  height: 60px;\n  background: #414141;\n  position: relative;\n  font-weight: bolder;\n}\n.overall-content .top-header-content {\n  position: relative;\n  margin-top: -50px;\n}\n.overall-content .social-counterbox {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 12px;\n  color: #666666;\n}\n.overall-content .soc-count {\n  font-size: 20px;\n  font-weight: bolder;\n}\n.overall-content .profile-center {\n  width: 100px;\n  position: relative;\n  border: solid 5px #ffffff;\n  border-radius: 50%;\n  justify-content: center;\n  margin-left: auto;\n}\n.overall-content .profile-btn {\n  --background: transparent;\n  border: solid 2px #ffffff;\n  border-radius: 15px;\n  text-transform: capitalize;\n  --box-shadow: none;\n  font-weight: bold;\n  margin-left: 30px;\n}\n.overall-content .profile-btnicon {\n  --background: transparent;\n  border: solid 2px #ffffff;\n  border-radius: 15px;\n  text-transform: capitalize;\n  --box-shadow: none;\n  font-weight: bold;\n}\n.overall-content .profile-btnicon ion-icon {\n  margin-right: 9px;\n}\n.overall-content .top-profile-center {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.overall-content .top-profile-center small {\n  width: 100%;\n  display: inline-block;\n}\n.overall-content .small-txt-location {\n  text-align: center;\n  margin: 0px 0px;\n}\n.overall-content .small-txt-location .top-location-img {\n  width: 12px;\n}\n.overall-content .top-profile-btn {\n  border-radius: 30px;\n  padding: 10px 10px 10px 40px;\n  position: relative;\n  text-transform: uppercase;\n  background-color: #D3C117;\n  color: #ffffff;\n}\n.overall-content .top-profile-btn img {\n  width: 22px;\n  position: absolute;\n  left: 10px;\n  top: 7px;\n}\n.overall-content .top-tabs {\n  display: inline-block;\n  width: 100%;\n  background: #ffffff;\n  --background: #ffffff;\n  --ion-color-base: #ffffff !important;\n  color: #cccccc;\n  position: relative;\n  padding: 10px 0px;\n  margin-top: 15px;\n  text-align: center;\n}\n.overall-content .top-tabs .tabs-block {\n  position: relative;\n  text-transform: capitalize;\n}\n.overall-content .top-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -13px;\n  left: 0px;\n  background: #cccccc;\n}\n.overall-content .top-tabs .selected-tabs {\n  color: #D3C117;\n}\n.overall-content .top-tabs .selected-tabs:before {\n  background: #D3C117;\n}\n.overall-content .profile-inner-block {\n  padding: 10px 15px 10px 15px;\n}\n.overall-content .profile-inner-block .gray-row {\n  width: 100%;\n  background: #f5f5f5;\n  padding: 10px 5px 5px 5px;\n  color: #666666;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n.overall-content .profile-inner-block .gray-row .left-bolder-head {\n  font-weight: bolder;\n}\n.overall-content .profile-inner-block .gray-row .right-txt {\n  text-align: right;\n}\n.overall-content .profile-inner-block .border-row {\n  width: 100%;\n  padding: 8px 0px;\n  border-bottom: solid thin #cccccc;\n  display: inline-block;\n}\n.overall-content .profile-inner-block .border-row .left-bolder-head {\n  font-weight: bolder;\n  display: inline-block;\n}\n.overall-content .profile-inner-block .border-row .right-txt {\n  text-align: right;\n  display: inline-block;\n  float: right;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bolder;\n  color: white;\n}\n.ion-text-center {\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNodmlld3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBRUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFRTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBREo7QUFHRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFHRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0U7RUFDRSxpQkFBQTtBQURKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFFSTtFQUVFLFdBQUE7QUFETjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFGSjtBQUlFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFGSjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFETjtBQUdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRE47QUFHSTtFQUNFLGNBQUE7QUFETjtBQUdJO0VBQ0UsbUJBQUE7QUFETjtBQUlFO0VBQ0UsNEJBQUE7QUFGSjtBQUlJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRk47QUFHTTtFQUNFLG1CQUFBO0FBRFI7QUFHTTtFQUNFLGlCQUFBO0FBRFI7QUFJSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUFGTjtBQUdNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQURSO0FBR007RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQURSO0FBT0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSkY7QUFLRTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBSEo7QUFJSTtFQUNFLFVBQUE7RUFDRixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBR007RUFDRSxVQUFBO0FBRFI7QUFHTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFEUjtBQU1BO0VBQ0UsY0FBQTtBQUhGIiwiZmlsZSI6ImNvYWNodmlld3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1maXhlZC10b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAudG9wLWdsb2JhbC10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5vdmVyYWxsLWNvbnRlbnQge1xuICAudG9wLWJsYWNrLWJsb2NrIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuICAudG9wLWhlYWRlci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIH1cbiAgLnNvY2lhbC1jb3VudGVyYm94IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gIH1cbiAgLnNvYy1jb3VudCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cbiAgLnByb2ZpbGUtY2VudGVyIHtcbiAgIFxuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgLnByb2ZpbGUtYnRue1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxuICAucHJvZmlsZS1idG5pY29uIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnByb2ZpbGUtYnRuaWNvbiBpb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIH1cbiAgLnRvcC1wcm9maWxlLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9wLXByb2ZpbGUtY2VudGVyIHNtYWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnNtYWxsLXR4dC1sb2NhdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAudG9wLWxvY2F0aW9uLWltZ1xuICAgIHtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgIH1cbiAgfVxuICAudG9wLXByb2ZpbGUtYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzQzExNztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAudG9wLXByb2ZpbGUtYnRuIGltZyB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiA3cHg7XG4gIH1cbiAgLnRvcC10YWJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItYmFzZTogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAudGFicy1ibG9jayB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgLnRhYnMtYmxvY2s6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgdG9wOiAtMTNweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgfVxuICAgIC5zZWxlY3RlZC10YWJzIHtcbiAgICAgIGNvbG9yOiAjRDNDMTE3O1xuICAgIH1cbiAgICAuc2VsZWN0ZWQtdGFiczpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZDogI0QzQzExNztcbiAgICB9XG4gIH1cbiAgLnByb2ZpbGUtaW5uZXItYmxvY2sge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XG5cbiAgICAuZ3JheS1yb3cge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgcGFkZGluZzogMTBweCA1cHggNXB4IDVweDtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIC5sZWZ0LWJvbGRlci1oZWFkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIH1cbiAgICAgIC5yaWdodC10eHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJvcmRlci1yb3cge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgLmxlZnQtYm9sZGVyLWhlYWQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAucmlnaHQtdHh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9vdGVyLWZpeGVkLXRhYiB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNSU7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC5mb290ZXItYnRuLXRhYnMge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAucm91bmR7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0MxMTc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5pb24tdGV4dC1jZW50ZXJ7XG4gIGNvbG9yOiAjNjY2NjY2O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_coachviewprofile_coachviewprofile_module_ts.js.map