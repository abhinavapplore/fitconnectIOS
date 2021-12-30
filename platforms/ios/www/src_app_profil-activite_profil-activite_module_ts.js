"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profil-activite_profil-activite_module_ts"],{

/***/ 86361:
/*!*******************************************************************!*\
  !*** ./src/app/profil-activite/profil-activite-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilActivitePageRoutingModule": () => (/* binding */ ProfilActivitePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profil_activite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-activite.page */ 88618);




const routes = [
    {
        path: '',
        component: _profil_activite_page__WEBPACK_IMPORTED_MODULE_0__.ProfilActivitePage
    }
];
let ProfilActivitePageRoutingModule = class ProfilActivitePageRoutingModule {
};
ProfilActivitePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilActivitePageRoutingModule);



/***/ }),

/***/ 93740:
/*!***********************************************************!*\
  !*** ./src/app/profil-activite/profil-activite.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilActivitePageModule": () => (/* binding */ ProfilActivitePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profil_activite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-activite-routing.module */ 86361);
/* harmony import */ var _profil_activite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil-activite.page */ 88618);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let ProfilActivitePageModule = class ProfilActivitePageModule {
};
ProfilActivitePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profil_activite_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilActivitePageRoutingModule
        ],
        declarations: [_profil_activite_page__WEBPACK_IMPORTED_MODULE_1__.ProfilActivitePage]
    })
], ProfilActivitePageModule);



/***/ }),

/***/ 88618:
/*!*********************************************************!*\
  !*** ./src/app/profil-activite/profil-activite.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilActivitePage": () => (/* binding */ ProfilActivitePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profil_activite_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profil-activite.page.html */ 90762);
/* harmony import */ var _profil_activite_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil-activite.page.scss */ 35918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 90900);
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ 35172);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ 24401);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../translate-config.service */ 47464);
/* harmony import */ var _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../followlist/followlist.page */ 69070);



















let ProfilActivitePage = class ProfilActivitePage {
    constructor(route, router, api, socialSharing, screenshot, actionSheetController, http, httpClient, storage, translateSevice, alertController, geolocation, modalCtrl, platform, af, fs) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.actionSheetController = actionSheetController;
        this.http = http;
        this.httpClient = httpClient;
        this.storage = storage;
        this.translateSevice = translateSevice;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.af = af;
        this.fs = fs;
        this.Avatar = true;
        this.coachType = false;
        this.userType = false;
        this.followHost = false;
        this.empty = false;
        this.activeEvent = [];
        this.pastEvent = [];
        this.data = {};
        this.notificationPresent = false;
        this.route.queryParams.subscribe((params) => {
            if (params && params.special) {
                var details = JSON.parse(params.special);
                this.host_id = details.hostId;
                this.uid = details.userId;
                this.distance = details.distance;
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
        this.storage.get('user_type').then((user_type) => {
            this.storage.get('user_f_name').then((user_f_name) => {
                this.storage.get('user_l_name').then((user_l_name) => {
                    this.geolocation.getCurrentPosition().then((resp) => {
                        this.storage.get('user_lang').then((lang) => {
                            if (lang == 'English') {
                                this.English = true;
                            }
                            else {
                                this.English = false;
                            }
                        });
                        // resp.coords.latitude
                        this.lat = resp.coords.latitude;
                        // resp.coords.longitude
                        this.long = resp.coords.longitude;
                        this.user_type = user_type;
                        console.log('below is user type');
                        console.log(this.user_type);
                        if (this.user_type == '2') {
                            this.followHost = true;
                        }
                        console.log(typeof this.user_type);
                        var lname = user_l_name.substring(0, 1);
                        this.userFullname = user_f_name + ' ' + lname + '.';
                        this.api.loading();
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
                                    this.userRating = res.json().avg_rating;
                                    this.total_review = res.json().total_review;
                                    this.userRanking = res.json().userRanking;
                                    this.practice =
                                        res.json().result[0].user_question1_response;
                                    this.sportsPlayed =
                                        res.json().result[0].user_question2_response;
                                    this.userDescription =
                                        res.json().result[0].user_description1;
                                    this.followers = res.json().result[0].followers;
                                    this.following = res.json().result[0].following;
                                    this.dob = res.json().result[0].user_dob;
                                    var date = this.dob.split('T');
                                    var follow_status = res.json().result[0].follow_status;
                                    this.distance = res.json().result[0].follow_status;
                                    if (this.user_type == '1') {
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
                                    this.userRating = res.json().avg_rating;
                                    this.coachType = true;
                                    var lastName = res.json().result[0].user_l_name;
                                    var l_name = lastName.substring(0, 1);
                                    this.name =
                                        res.json().result[0].user_f_name + ' ' + l_name + '.';
                                    this.imgUrl = res.json().result[0].user_img;
                                    this.userRank = res.json().user_rank;
                                    if (this.imgUrl === '' ||
                                        this.imgUrl === undefined ||
                                        this.imgUrl === null) {
                                        this.Avatar = false;
                                    }
                                    else {
                                        this.Avatar = true;
                                    }
                                    this.sportsPlayed = res.json().result[0].user_description2;
                                    this.userDescription =
                                        res.json().result[0].user_description1;
                                    this.followers = res.json().result[0].followers;
                                    this.following = res.json().result[0].following;
                                    this.dob = res.json().result[0].user_dob;
                                    var date = this.dob.split('T');
                                    var follow_status = res.json().result[0].follow_status;
                                    this.distance = res.json().result[0].follow_status;
                                    if (this.user_type == '1') {
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
                                const formData = new FormData();
                                formData.append('host_id', this.host_id);
                                formData.append('book_user_id', this.uid);
                                this.http
                                    .post('http://fitconnected.prometteur.in/index.php/Api/fields/upcoming_event', formData)
                                    .subscribe((res) => {
                                    if (res.json().status == 1) {
                                        console.log(res.json());
                                        this.totalEvents = res.json().result.length;
                                        this.empty = false;
                                        var allEvent = [];
                                        this.activeEvent = res.json().result;
                                        //       var today= new Date();
                                        //  var format = moment(today).format("YYYY-MM-DD");
                                        //  if(this.userType){
                                        //   for(var i=0;i<allEvent.length;i++){
                                        //     if(format<allEvent[i].event_individuals_date){
                                        //       console.log("not event");
                                        //       this.activeEvent.push(allEvent[i]);
                                        //     }else{
                                        //       this.pastEvent.push(allEvent[i]);
                                        //     }
                                        //   }
                                        //  }else if(this.coachType){
                                        //   for(var i=0;i<allEvent.length;i++){
                                        //     if(format<allEvent[i].event_coach_date){
                                        //       console.log("not event");
                                        //       this.activeEvent.push(allEvent[i]);
                                        //     }else{
                                        //       this.pastEvent.push(allEvent[i]);
                                        //     }
                                        //   }
                                        //  }
                                        this.api.dismissLoading();
                                        console.log('hey');
                                        console.log(this.activeEvent);
                                    }
                                    else {
                                        console.log(res.json());
                                        this.message = res.json().msg;
                                        this.empty = true;
                                    }
                                });
                            }
                            else {
                                console.log(res.json());
                                this.api.dismissLoading();
                                if (this.English) {
                                    this.api.toast('Try again in sometime.');
                                }
                                else {
                                    this.api.toast('Réessayez dans un certain temps');
                                }
                                console.log('Server Error');
                            }
                        });
                    });
                });
            });
        });
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
            senderId: this.uid,
            senderName: this.userFullname,
            Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.fromDate(new Date()),
        }, { merge: true });
        this.fs
            .collection('friends')
            .doc(this.host_id)
            .collection('chats')
            .doc(this.uid)
            .set({
            senderName: this.name,
            senderId: this.host_id,
            recieverId: this.uid,
            recieverName: this.userFullname,
            Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.fromDate(new Date()),
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
    takeScreenshot(item) {
        console.log(item);
        this.screenshot.URI(80).then((res) => {
            this.sharableURI = res.URI;
            this.share(item);
        });
    }
    share(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            if (item.event_type === '1') {
                // this.userTitle=item.event_individuals_title;
                this.userTitle = item.event_sport_cate;
                this.userLocation = item.event_individuals_address;
                this.userDate = item.event_individuals_date;
                this.userdiscription = item.event_individuals_discription;
                var msg = 'Event Name: ' +
                    this.userTitle +
                    '\n' +
                    'Location: ' +
                    this.userLocation +
                    '\n' +
                    'Date of Event: ' +
                    this.userDate +
                    '\n' +
                    'Description: ' +
                    this.userdiscription;
                const actionSheet = yield this.actionSheetController.create({
                    header: 'Sélectionner une image source',
                    cssClass: 'social-sharing',
                    buttons: [
                        {
                            text: 'Instagram',
                            icon: 'logo-instagram',
                            handler: () => {
                                this.socialSharing
                                    .shareViaInstagram(msg, this.sharableURI)
                                    .then((res) => {
                                    // Success
                                })
                                    .catch((e) => {
                                    // Error!
                                });
                            },
                        },
                        {
                            text: 'Facebook',
                            icon: 'logo-facebook',
                            handler: () => {
                                this.socialSharing
                                    .shareViaFacebook(msg, this.sharableURI)
                                    .then((res) => {
                                    // Success
                                })
                                    .catch((e) => {
                                    // Error!
                                });
                            },
                        },
                        {
                            text: 'Whatsapp',
                            icon: 'logo-whatsapp',
                            handler: () => {
                                this.socialSharing
                                    .shareViaWhatsApp(msg, this.sharableURI)
                                    .then(() => {
                                    // Success!
                                    var msg = 'Information Shared Successfullty!';
                                    this.api.toast(msg);
                                })
                                    .catch(() => {
                                    // Error!
                                });
                            },
                        },
                        {
                            text: 'Cancel',
                            icon: 'close',
                            role: 'cancel',
                        },
                    ],
                });
                yield actionSheet.present();
            }
            else {
                // this.userTitle=item.event_coach_title;
                this.userTitle = item.event_sport_cate;
                this.userLocation = item.event_coach_address;
                this.userDate = item.event_coach_date;
                this.userdiscription = item.event_coach_discription;
                var msg = 'Event Name: ' +
                    this.userTitle +
                    '\n' +
                    'Location: ' +
                    this.userLocation +
                    '\n' +
                    'Date of Event: ' +
                    this.userDate +
                    '\n' +
                    'Description: ' +
                    this.userdiscription;
                const actionSheet = yield this.actionSheetController.create({
                    header: 'Sélectionner une image source',
                    cssClass: 'social-sharing',
                    buttons: [
                        {
                            text: 'Instagram',
                            icon: 'logo-instagram',
                            handler: () => {
                                this.socialSharing
                                    .shareViaInstagram(msg, this.sharableURI)
                                    .then((res) => {
                                    // Success
                                })
                                    .catch((e) => {
                                    // Error!
                                });
                            },
                        },
                        {
                            text: 'Facebook',
                            icon: 'logo-facebook',
                            handler: () => {
                                this.socialSharing
                                    .shareViaFacebook(msg, this.sharableURI)
                                    .then((res) => {
                                    // Success
                                })
                                    .catch((e) => {
                                    // Error!
                                });
                            },
                        },
                        {
                            text: 'Whatsapp',
                            icon: 'logo-whatsapp',
                            handler: () => {
                                this.socialSharing
                                    .shareViaWhatsApp(msg, this.sharableURI)
                                    .then(() => {
                                    // Success!
                                    var msg = 'Information Shared Successfullty!';
                                    this.api.toast(msg);
                                })
                                    .catch(() => {
                                    // Error!
                                });
                            },
                        },
                        {
                            text: 'Cancel',
                            icon: 'close',
                            role: 'cancel',
                        },
                    ],
                });
                yield actionSheet.present();
            }
        });
    }
    presentAlertBooking(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
            if (event.event_type == '1') {
                var minParticipant = event.event_individuals_participants_min;
                var maxParticipant = event.event_individuals_participants_max;
            }
            else {
                var minParticipant = event.event_coach_participants_min;
                var maxParticipant = event.event_coach_participants_max;
            }
            if (minParticipant == maxParticipant) {
                if (this.English) {
                    this.api.toast('Event is already full');
                }
                else {
                    this.api.toast("L'événement est déjà complet");
                }
            }
            else {
                var lastName = event.user_l_name;
                var l_name = lastName.substring(0, 1);
                this.confirmName = event.user_f_name + ' ' + l_name + '.';
                if (this.English) {
                    const alert = yield this.alertController.create({
                        cssClass: 'booking',
                        message: 'Are you sure you want to join ' +
                            this.confirmName.bold() +
                            ' ' +
                            '. on this event?',
                        buttons: [
                            {
                                text: 'YES',
                                handler: () => {
                                    console.log('Confirm Okay');
                                    this.bookEvent(event);
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
                        cssClass: 'booking',
                        message: 'Es-tu sûr(e) de vouloir rejoindre ' +
                            this.confirmName.bold() +
                            ' ' +
                            '. sur cet événement ?',
                        buttons: [
                            {
                                text: 'OUI',
                                handler: () => {
                                    console.log('Confirm Okay');
                                    this.bookEvent(event);
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
            }
        });
    }
    bookEvent(event) {
        this.storage.get('user_f_name').then((user_f_name) => {
            this.storage.get('user_l_name').then((user_l_name) => {
                console.log(event);
                var today = new Date();
                var format = moment__WEBPACK_IMPORTED_MODULE_2__(today).format('YYYY-MM-DD');
                if (event.event_type === '1') {
                    var address = event.event_individuals_address;
                }
                else if (event.event_type === '2') {
                    var address = event.event_coach_address;
                }
                this.data.book_user_id = this.uid;
                this.data.book_host_id = this.host_id;
                this.data.book_user_f_name = user_f_name;
                this.data.book_user_l_name = user_l_name;
                this.data.book_event_id = event.event_id;
                this.data.book_event_date = format;
                this.data.book_event_address = address;
                this.storage.set('bookingrequest', this.data);
                const formData = new FormData();
                formData.append('book_user_id', this.uid);
                formData.append('book_host_id', this.host_id);
                formData.append('book_user_f_name', user_f_name);
                formData.append('book_user_l_name', user_l_name);
                formData.append('book_event_id', event.event_id);
                formData.append('book_event_date', format);
                formData.append('book_event_address', address);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/book', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        if (res.json().msg == "En attente d'approbation") {
                            if (this.English) {
                                var msg = 'Your request has been sent.';
                            }
                            else {
                                var msg = 'Votre demande a bien été envoyée.';
                            }
                            this.loadData();
                            this.api.toast(msg);
                        }
                        else if (res.json().msg == 'Awaiting Approval') {
                            if (this.English) {
                                this.api.toast(res.json().msg);
                            }
                            else {
                                this.api.toast("En attente d'approbation");
                            }
                        }
                        else if (res.json().msg == 'Already booked event') {
                            if (this.English) {
                                this.api.toast(res.json().msg);
                            }
                            else {
                                this.api.toast('Événement déjà réservé.');
                            }
                        }
                        else {
                            console.log(res.json());
                            this.api.toast(res.json().msg);
                        }
                        this.loadData();
                    }
                    else {
                        console.log(res.json());
                    }
                });
            });
        });
    }
    events() {
        if (this.user_type == '1') {
            this.api.Navigate('creer-evenement');
        }
        else {
            this.api.Navigate('evenementcoachvue');
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
    manage() {
        if (this.user_type == '1') {
            this.api.Navigate('mes-evenements');
        }
        else {
            this.api.Navigate('evenements-coach');
        }
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
    back() {
        this.profile();
    }
    loadData() {
        this.activeEvent = [];
        this.pastEvent = [];
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
                    this.followers = res.json().result[0].followers;
                    this.following = res.json().result[0].following;
                    this.dob = res.json().result[0].user_dob;
                    var date = this.dob.split('T');
                    var follow_status = res.json().result[0].follow_status;
                    this.distance = res.json().result[0].follow_status;
                    if (this.user_type == '1') {
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
                    this.sportsPlayed = res.json().result[0].user_description2;
                    this.userDescription = res.json().result[0].user_description1;
                    this.followers = res.json().result[0].followers;
                    this.following = res.json().result[0].following;
                    this.dob = res.json().result[0].user_dob;
                    var date = this.dob.split('T');
                    var follow_status = res.json().result[0].follow_status;
                    this.distance = res.json().result[0].follow_status;
                    if (this.user_type == '1') {
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
                const formData = new FormData();
                formData.append('user_id', this.host_id);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/fields/event', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log(res.json());
                        this.totalEvents = res.json().result.length;
                        this.empty = false;
                        var allEvent = [];
                        allEvent = res.json().result;
                        var today = new Date();
                        var format = moment__WEBPACK_IMPORTED_MODULE_2__(today).format('YYYY-MM-DD');
                        if (this.userType) {
                            for (var i = 0; i < allEvent.length; i++) {
                                if (format < allEvent[i].event_individuals_date) {
                                    console.log('not event');
                                    this.activeEvent.push(allEvent[i]);
                                }
                                else {
                                    this.pastEvent.push(allEvent[i]);
                                }
                            }
                        }
                        else if (this.coachType) {
                            for (var i = 0; i < allEvent.length; i++) {
                                if (format < allEvent[i].event_coach_date) {
                                    console.log('not event');
                                    this.activeEvent.push(allEvent[i]);
                                }
                                else {
                                    this.pastEvent.push(allEvent[i]);
                                }
                            }
                        }
                        this.api.dismissLoading();
                        console.log('hey');
                        console.log(this.activeEvent);
                    }
                    else {
                        console.log(res.json());
                        this.message = res.json().msg;
                        this.empty = true;
                    }
                });
            }
            else {
                console.log(res.json());
                this.api.dismissLoading();
                if (this.English) {
                    this.api.toast('Try again in some time');
                }
                else {
                    this.api.toast('Réessayez dans un moment');
                }
                console.log('Server Error');
            }
        });
    }
    openListFollowing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.following == 0) {
                return;
            }
            else {
                this.followingList = true;
                const modal = yield this.modalCtrl.create({
                    component: _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_9__.FollowlistPage,
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
    viewProfile(user) {
        console.log('my event');
        if (this.uid === user.user_id) {
            this.api.Navigate('coacheditprofile');
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
    openListFollowers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.followers == 0) {
                return;
            }
            else {
                this.followerList = true;
                const modal = yield this.modalCtrl.create({
                    component: _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_9__.FollowlistPage,
                    cssClass: 'followPage',
                    componentProps: { userId: this.uid, pageTitle: 'Followers' },
                });
                yield modal.present();
                const { data } = yield modal.onWillDismiss();
                if (data) {
                    // this.excludeTracks = data;
                    // this.updateSchedule();
                    this.followerList = false;
                    this.viewProfile(data);
                }
                else {
                    this.followerList = false;
                    this.loadData();
                }
                // if(this.followerList===true){
                //   this.followerList=false;
                // }else if(this.followingList===true){
                //   this.followingList=false;
                //   this.followerList=true;
                // }else{
                //   this.followerList=true;
                // }
            }
        });
    }
};
ProfilActivitePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__.Screenshot },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_13__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_15__.Storage },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_8__.TranslateConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestore }
];
ProfilActivitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-profil-activite',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profil_activite_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profil_activite_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router,
        _api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService,
        _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing,
        _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__.Screenshot,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController,
        _angular_http__WEBPACK_IMPORTED_MODULE_13__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_15__.Storage,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_8__.TranslateConfigService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController,
        _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__.AngularFireAuth,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestore])
], ProfilActivitePage);



/***/ }),

/***/ 90762:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profil-activite/profil-activite.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" (click)=\"back()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"font-family: montserrat-medium; font-weight: bold\"\n      class=\"top-fixed-heading uppercaes\"\n      >{{name}} <br />\n      <ng-container *ngIf=\"userRank && coachType\">\n        {{'WATCHREVIEW.Text19' | translate}} -\n        <ion-text\n          style=\"\n            font-size: 16px;\n            font-weight: bold;\n            font-family: montserrat-medium;\n            color: #d3c117;\n          \"\n        >\n          {{userRank | number}}\n        </ion-text>\n      </ng-container></ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"overall-content\">\n    <ion-row *ngIf=\"coachType\">\n      <ion-title\n        style=\"font-family: montserrat-medium; font-weight: bolder\"\n        class=\"top-fixed-heading uppercaes\"\n        [translate]=\"'WATCHREVIEW.Text19'\"\n        >{{userRanking}}\n      </ion-title>\n    </ion-row>\n    <div class=\"top-black-block\"></div>\n    <div class=\"top-header-content\">\n      <div class=\"top-btn-toolbar\">\n        <ion-row>\n          <ion-col class=\"ion-text-left\">\n            <div *ngIf=\"user_type==='1'\">\n              <ion-button\n                *ngIf=\"!blockedHost\"\n                size=\"small\"\n                class=\"profile-btn\"\n                (click)=\"block()\"\n                [translate]=\"'PROFILEACTIVITE.Text1'\"\n              ></ion-button>\n              <ion-button\n                style=\"background: #d3c117\"\n                *ngIf=\"blockedHost\"\n                size=\"small\"\n                class=\"profile-btn\"\n                (click)=\"unfollow('block')\"\n                [translate]=\"'PROFILEACTIVITE.Text1'\"\n              ></ion-button>\n            </div>\n\n            <div *ngIf=\"user_type==='2'\" style=\"height: 30px\"></div>\n            <!-- <ion-button  *ngIf=\"user_Type==='2'\" size=\"small\" class=\"profile-btn\" (click)=\"block()\">Bloquer</ion-button> -->\n            <div class=\"social-counterbox\">\n              <div\n                class=\"soc-count\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n              >\n                {{followers}}\n              </div>\n              <div\n                class=\"soc-counttxt\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                [translate]=\"'PROFILEACTIVITE.Text2'\"\n              ></div>\n            </div>\n          </ion-col>\n          <ion-col\n            style=\"display: flex; flex-direction: row; justify-content: center\"\n          >\n            <div class=\"profile-center\">\n              <img *ngIf=\"!Avatar\" src=\"assets/images/profile-img.png\" />\n              <ion-avatar style=\"height: 92px; width: 92px\" *ngIf=\"Avatar\">\n                <ion-img [src]=\"imgUrl\"></ion-img>\n              </ion-avatar>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <div></div>\n            <div *ngIf=\"user_type==='1'\">\n              <ion-button\n                *ngIf=\"!followHost\"\n                size=\"small\"\n                class=\"profile-btnicon\"\n                (click)=\"follow()\"\n              >\n                <ion-icon name=\"add\"></ion-icon>\n                <span [translate]=\"'PROFILEACTIVITE.Text3'\"></span>\n              </ion-button>\n            </div>\n\n            <div *ngIf=\"user_type==='2'\" style=\"height: 30px\"></div>\n\n            <div *ngIf=\"user_type==='1'\">\n              <ion-button\n                style=\"background: #d3c117\"\n                *ngIf=\"followHost\"\n                size=\"small\"\n                class=\"profile-btnicon\"\n                (click)=\"unfollow()\"\n                [translate]=\"'PROFILEACTIVITE.Text4'\"\n              >\n              </ion-button>\n            </div>\n\n            <div *ngIf=\"user_type==='2'\" style=\"display: none\">\n              <ion-button\n                style=\"background: #d3c117\"\n                *ngIf=\"followHost\"\n                size=\"small\"\n                class=\"profile-btnicon\"\n                (click)=\"unfollow()\"\n                [translate]=\"'PROFILEACTIVITE.Text4'\"\n              >\n              </ion-button>\n            </div>\n\n            <div class=\"social-counterbox\">\n              <div\n                class=\"soc-count\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n              >\n                {{following}}\n              </div>\n              <div\n                class=\"soc-counttxt\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                [translate]=\"'PROFILEACTIVITE.Text5'\"\n              ></div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row\n          style=\"\n            text-align: center;\n            color: #d3c117;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n        >\n          <div\n            *ngIf=\"userType\"\n            class=\"ion-text-center\"\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bolder;\n              margin-top: 5%;\n            \"\n          >\n            {{name | titlecase}}\n          </div>\n          <div *ngIf=\"coachType\" style=\"margin-top: 5%\" class=\"ion-text-center\">\n            <ion-row style=\"margin-top: 2%\">\n              <ion-icon name=\"star\"></ion-icon>\n              <ion-text style=\"font-family: montserrat-medium\"\n                >{{name | titlecase}}</ion-text\n              >\n            </ion-row>\n            <ion-row>\n              <ion-text\n                class=\"gray-color\"\n                style=\"font-family: montserrat-medium\"\n                [translate]=\"'PROFILEACTIVITE.Text6'\"\n              ></ion-text>\n            </ion-row>\n          </div>\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            margin-top: 2%;\n            color: grey;\n          \"\n        >\n          <div\n            class=\"small-txt ion-text-center\"\n            style=\"font-family: montserrat-medium\"\n          >\n            {{gender}} - {{age}}\n            <span [translate]=\"'PROFILEACTIVITE.Text7'\"></span>\n          </div>\n        </ion-row>\n\n        <ion-row style=\"justify-content: center\" *ngIf=\"coachType\">\n          <div\n            class=\"small-txt ion-text-center\"\n            style=\"font-family: montserrat-medium\"\n          >\n            <ion-icon color=\"primary\" name=\"star\"></ion-icon>\n            <span [translate]=\"'WATCHREVIEW.Text12'\"></span> {{userRating\n            |number:\"0.1-2\"}}/5 - ({{total_review}}\n            <span [translate]=\"'WATCHREVIEW.Text16'\"></span>\n          </div>\n        </ion-row>\n\n        <ion-row class=\"top-profile-center ion-align-items-center\">\n          <div class=\"small-txt-location ion-no-margin ion-text-center\">\n            <img\n              class=\"top-location-img\"\n              src=\"assets/images/icon-location.png\"\n            />\n            {{distance}} KM\n          </div>\n          <button *ngIf=\"!followHost\" class=\"top-profile-btn\">\n            <img src=\"assets/images/chat-white.png\" />\n            <span [translate]=\"'PROFILEACTIVITE.Text8'\"></span>\n          </button>\n\n          <button *ngIf=\"followHost\" class=\"top-profile-btn\" (click)=\"chat()\">\n            <img src=\"assets/images/chat-white.png\" />\n            <span [translate]=\"'PROFILEACTIVITE.Text8'\"></span>\n          </button>\n        </ion-row>\n        <div class=\"top-tabs\">\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" (click)=\"profile()\">\n              <div\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'PROFILEACTIVITE.Text9'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\">\n              <div\n                class=\"tabs-block uppercaes selected-tabs\"\n                [translate]=\"'PROFILEACTIVITE.Text10'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" (click)=\"reviewPage()\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'PROFILEACTIVITE.Text18'\"\n              ></div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <div class=\"profile-inner-block\" *ngIf=\"!empty\">\n      <ion-list>\n        <ion-row class=\"slide-toggle-row\">\n          <div class=\"togle-btn-countrow\">\n            <h5\n              class=\"toggle-title uppercaes\"\n              style=\"font-family: montserrat-medium; font-weight: bold\"\n              [translate]=\"'PROFILEACTIVITE.Text11'\"\n            ></h5>\n            <b\n              class=\"toggle-count\"\n              style=\"font-family: montserrat-medium; font-weight: bold\"\n              >{{totalEvents}}</b\n            >\n          </div>\n\n          <section class=\"gray-box\" *ngFor=\"let event of activeEvent\">\n            <ion-row class=\"title-with-date\">\n              <!-- <b *ngIf=\"userType\" class=\"title-txt\">{{event.event_individuals_title}}</b> -->\n              <!-- <b *ngIf=\"userType\" class=\"title-txt\">{{event.event_sport_cate}}</b -->\n              <b *ngIf=\"userType\" class=\"title-txt\">{{event.spcat_name}}</b>\n              <!-- <b *ngIf=\"coachType\" class=\"title-txt\">{{event.event_coach_title}}</b> -->\n              <!-- <b *ngIf=\"coachType\" class=\"title-txt\">{{event.event_sport_cate}}</b -->\n              <b *ngIf=\"coachType\" class=\"title-txt\">{{event.spcat_name}}</b>\n              <div *ngIf=\"userType\" class=\"date-txt\">\n                {{event.event_individuals_date}}\n              </div>\n              <div *ngIf=\"coachType\" class=\"date-txt\">\n                {{event.event_coach_date}}\n              </div>\n            </ion-row>\n            <div class=\"iconswith-row\">\n              <img\n                class=\"location-img\"\n                src=\"assets/images/unselectedlocation.png\"\n              />\n              <div *ngIf=\"userType\" class=\"details-box\">\n                {{event.event_individuals_address}}\n              </div>\n              <div *ngIf=\"coachType\" class=\"details-box\">\n                {{event.event_coach_address}}\n              </div>\n            </div>\n            <!-- <div *ngIf=\"user_type=='1'\" class=\"buttonbox-cardouter\"> -->\n            <div class=\"buttonbox-cardouter\">\n              <!-- {{event.isAvailable}} {{!event.isBooked}} -->\n              <button\n                *ngIf=\"event.isAvailable && !event.isBooked\"\n                ion-button\n                class=\"global-submit-button global-btn themecolor\"\n                [translate]=\"'PROFILEACTIVITE.Text12'\"\n                (click)=\"presentAlertBooking(event)\"\n              ></button>\n              <button\n                *ngIf=\"!event.isAvailable || event.isBooked\"\n                style=\"opacity: 0.5 !important\"\n                ion-button\n                class=\"global-submit-button global-btn themecolor\"\n                [translate]=\"'PROFILEACTIVITE.Text12'\"\n              ></button>\n            </div>\n            <!-- <div *ngIf=\"user_type=='2'\" class=\"buttonbox-cardouter\">\n              <button\n                ion-button\n                class=\"global-submit-button global-btn themecolor\"\n                [translate]=\"'EVENTMENTCOACHVUE.Text6'\"\n                (click)=\"takeScreenshot(event)\"\n              ></button>\n            </div> -->\n          </section>\n\n          <section class=\"gray-box\" *ngFor=\"let detail of pastEvent\">\n            <ion-row class=\"title-with-date\">\n              <!-- <b *ngIf=\"userType\" class=\"title-txt\">{{detail.event_individuals_title}}</b> -->\n              <b *ngIf=\"userType\" class=\"title-txt\"\n                >{{detail.event_sport_cate}}</b\n              >\n              <!-- <b *ngIf=\"coachType\" class=\"title-txt\">{{detail.event_coach_title}}</b> -->\n              <b *ngIf=\"coachType\" class=\"title-txt\"\n                >{{detail.event_sport_cate}}</b\n              >\n              <div *ngIf=\"userType\" class=\"date-txt\">\n                {{detail.event_individuals_date}}\n              </div>\n              <div *ngIf=\"coachType\" class=\"date-txt\">\n                {{detail.event_coach_date}}\n              </div>\n            </ion-row>\n            <div class=\"iconswith-row\">\n              <img\n                class=\"location-img\"\n                src=\"assets/images/unselectedlocation.png\"\n              />\n              <div *ngIf=\"userType\" class=\"details-box\">\n                {{detail.event_individuals_address}}\n              </div>\n              <div *ngIf=\"coachType\" class=\"details-box\">\n                {{detail.event_coach_address}}\n              </div>\n            </div>\n          </section>\n        </ion-row>\n      </ion-list>\n    </div>\n\n    <div\n      *ngIf=\"empty\"\n      style=\"display: flex; justify-content: center\"\n      [translate]=\"'PROFILEACTIVITE.Text13'\"\n    ></div>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 35918:
/*!***********************************************************!*\
  !*** ./src/app/profil-activite/profil-activite.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.overall-content .top-black-block {\n  height: 60px;\n  background: #414141;\n  position: relative;\n}\n.overall-content .top-header-content {\n  position: relative;\n  margin-top: -50px;\n}\n.overall-content .social-counterbox {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 12px;\n  color: #666666;\n}\n.overall-content .soc-count {\n  font-size: 20px;\n  font-weight: bold;\n}\n.overall-content .profile-center {\n  width: 100px;\n  position: relative;\n  border: solid 5px #ffffff;\n  border-radius: 50%;\n  margin-left: auto;\n}\n.overall-content .profile-btn {\n  --background: transparent;\n  border: solid 2px #ffffff;\n  border-radius: 15px;\n  text-transform: capitalize;\n  --box-shadow: none;\n  font-weight: bold;\n  margin-left: 30px;\n}\n.overall-content .profile-btnicon {\n  --background: transparent;\n  border: solid 2px #ffffff;\n  border-radius: 15px;\n  text-transform: capitalize;\n  --box-shadow: none;\n  --box-shadow: none;\n  font-weight: bold;\n}\n.overall-content .profile-btnicon ion-icon {\n  margin-right: 9px;\n}\n.overall-content .top-profile-center {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.overall-content .top-profile-center .gray-color {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: 5px;\n  color: #666666;\n}\n.overall-content .top-profile-center small {\n  width: 100%;\n  display: inline-block;\n}\n.overall-content .small-txt-location {\n  text-align: center;\n  margin: 8px 0px;\n}\n.overall-content .small-txt-location .top-location-img {\n  width: 12px;\n}\n.overall-content .top-profile-btn {\n  border-radius: 30px;\n  padding: 10px 10px 10px 40px;\n  position: relative;\n  text-transform: uppercase;\n  background-color: #D3C117;\n  color: #ffffff;\n}\n.overall-content .top-profile-btn img {\n  width: 22px;\n  position: absolute;\n  left: 10px;\n  top: 7px;\n}\n.overall-content .top-tabs {\n  display: inline-block;\n  width: 100%;\n  background: #ffffff;\n  --background: #ffffff;\n  --ion-color-base: #ffffff !important;\n  color: #cccccc;\n  position: relative;\n  padding: 10px 0px;\n  margin-top: 15px;\n  text-align: center;\n}\n.overall-content .top-tabs .tabs-block {\n  position: relative;\n  text-transform: capitalize;\n}\n.overall-content .top-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -13px;\n  left: 0px;\n  background: #cccccc;\n}\n.overall-content .top-tabs .selected-tabs {\n  color: #D3C117;\n  font-family: \"montserrat-medium\";\n}\n.overall-content .top-tabs .selected-tabs:before {\n  background: #D3C117;\n}\n.overall-content .profile-inner-block {\n  padding: 10px 15px 10px 15px;\n}\n.overall-content .profile-inner-block .togle-btn-countrow {\n  width: 100%;\n  position: relative;\n  padding: 0px 50px 10px 0px;\n}\n.overall-content .profile-inner-block .togle-btn-countrow .toggle-title {\n  margin: 0px;\n  color: #666666;\n  font-size: 16px;\n}\n.overall-content .profile-inner-block .togle-btn-countrow .toggle-count {\n  position: absolute;\n  right: 0px;\n  top: -4px;\n  font-size: 24px;\n  color: #666666;\n}\n.overall-content .profile-inner-block .gray-box {\n  width: 100%;\n  margin-top: 10px;\n  text-align: center;\n  position: relative;\n  background: #F8F8F8;\n  padding: 15px 15px 30px 15px;\n  overflow: initial;\n  margin-bottom: 25px !important;\n}\n.overall-content .profile-inner-block .gray-box .title-with-date {\n  margin-bottom: 10px;\n  position: relative;\n  font-size: 16px;\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  color: #666666;\n}\n.overall-content .profile-inner-block .gray-box .title-with-date .date-txt {\n  float: right;\n  font-size: 12px;\n}\n.overall-content .profile-inner-block .gray-box .buttonbox-cardouter {\n  position: absolute;\n  z-index: 10;\n  left: calc(50% - 85px);\n  bottom: -20px;\n}\n.overall-content .profile-inner-block .gray-box .iconswith-row {\n  position: relative;\n  padding-left: 20px;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  color: #666666;\n}\n.overall-content .profile-inner-block .gray-box .iconswith-row img {\n  position: absolute;\n  left: 0px;\n}\n.overall-content .profile-inner-block .gray-box .iconswith-row .location-img {\n  width: 12px !important;\n}\n.overall-content .profile-inner-block .border-row {\n  width: 100%;\n  padding: 8px 0px;\n  border-bottom: solid thin #cccccc;\n  display: inline-block;\n}\n.overall-content .profile-inner-block .border-row .left-bold-head {\n  font-weight: bold;\n  display: inline-block;\n}\n.overall-content .profile-inner-block .border-row .right-txt {\n  text-align: right;\n  display: inline-block;\n  float: right;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n.selected {\n  opacity: 0.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC1hY3Rpdml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7QUFBRTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFFSjtBQUdFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0U7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0U7RUFDRSxpQkFBQTtBQURKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQURKO0FBRUk7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFETjtBQUlFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBRko7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBR0k7RUFFRSxXQUFBO0FBRk47QUFLRTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSEo7QUFLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBSEo7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBSUk7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FBRk47QUFJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUZOO0FBSUk7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUFGTjtBQUlJO0VBQ0UsbUJBQUE7QUFGTjtBQUtFO0VBQ0UsNEJBQUE7QUFISjtBQUlJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFGTjtBQUdNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRFI7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQURSO0FBSUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFGTjtBQUlNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGUjtBQUdRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFEVjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBRlI7QUFJTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZSO0FBR1E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFEVjtBQUdRO0VBQ0Usc0JBQUE7QUFEVjtBQUtJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQUhOO0FBSU07RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBRlI7QUFJTTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBRlI7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFMRjtBQU1FO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFKSjtBQUtJO0VBQ0UsVUFBQTtFQUNGLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFJTTtFQUNFLFVBQUE7QUFGUjtBQUlNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZSO0FBU0E7RUFDRSx1QkFBQTtBQU5GIiwiZmlsZSI6InByb2ZpbC1hY3Rpdml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWZpeGVkLXRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC50b3AtZ2xvYmFsLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm92ZXJhbGwtY29udGVudCB7XG4gIC50b3AtYmxhY2stYmxvY2sge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAudG9wLWhlYWRlci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIH1cbiAgLnNvY2lhbC1jb3VudGVyYm94IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gIH1cbiAgLnNvYy1jb3VudCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5wcm9maWxlLWNlbnRlciB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IHNvbGlkIDVweCAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIC5wcm9maWxlLWJ0bntcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbiAgLnByb2ZpbGUtYnRuaWNvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucHJvZmlsZS1idG5pY29uIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgfVxuICAudG9wLXByb2ZpbGUtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5ncmF5LWNvbG9yXG4gICAge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIH1cbiAgfVxuICAudG9wLXByb2ZpbGUtY2VudGVyIHNtYWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnNtYWxsLXR4dC1sb2NhdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogOHB4IDBweDtcbiAgICAudG9wLWxvY2F0aW9uLWltZ1xuICAgIHtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgIH1cbiAgfVxuICAudG9wLXByb2ZpbGUtYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzQzExNztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAudG9wLXByb2ZpbGUtYnRuIGltZyB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiA3cHg7XG4gIH1cbiAgLnRvcC10YWJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItYmFzZTogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAudGFicy1ibG9jayB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgLnRhYnMtYmxvY2s6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgdG9wOiAtMTNweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgfVxuICAgIC5zZWxlY3RlZC10YWJzIHtcbiAgICAgIGNvbG9yOiAjRDNDMTE3O1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdC1tZWRpdW1cIjtcbiAgICB9XG4gICAgLnNlbGVjdGVkLXRhYnM6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNEM0MxMTc7XG4gICAgfVxuICB9XG4gIC5wcm9maWxlLWlubmVyLWJsb2NrIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xuICAgIC50b2dsZS1idG4tY291bnRyb3cge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAwcHggNTBweCAxMHB4IDBweDtcbiAgICAgIC50b2dnbGUtdGl0bGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICAgIC50b2dnbGUtY291bnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmdyYXktYm94e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogI0Y4RjhGODtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAzMHB4IDE1cHg7XG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcblxuICAgICAgLnRpdGxlLXdpdGgtZGF0ZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgLmRhdGUtdHh0IHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnV0dG9uYm94LWNhcmRvdXRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gODVweCk7XG4gICAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgICB9XG4gICAgICAuaWNvbnN3aXRoLXJvdyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2NhdGlvbi1pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmJvcmRlci1yb3cge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgLmxlZnQtYm9sZC1oZWFkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5yaWdodC10eHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5mb290ZXItZml4ZWQtdGFiIHtcbiAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA1JTtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLmZvb3Rlci1idG4tdGFicyB7XG4gICAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIC5yb3VuZHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzQzExNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4uc2VsZWN0ZWR7XG4gIG9wYWNpdHk6IDAuNSFpbXBvcnRhbnQ7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_profil-activite_profil-activite_module_ts.js.map