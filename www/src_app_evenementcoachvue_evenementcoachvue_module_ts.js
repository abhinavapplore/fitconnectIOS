"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_evenementcoachvue_evenementcoachvue_module_ts"],{

/***/ 40320:
/*!***********************************************************************!*\
  !*** ./src/app/evenementcoachvue/evenementcoachvue-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvenementcoachvuePageRoutingModule": () => (/* binding */ EvenementcoachvuePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _evenementcoachvue_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evenementcoachvue.page */ 62490);




const routes = [
    {
        path: '',
        component: _evenementcoachvue_page__WEBPACK_IMPORTED_MODULE_0__.EvenementcoachvuePage
    }
];
let EvenementcoachvuePageRoutingModule = class EvenementcoachvuePageRoutingModule {
};
EvenementcoachvuePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EvenementcoachvuePageRoutingModule);



/***/ }),

/***/ 4970:
/*!***************************************************************!*\
  !*** ./src/app/evenementcoachvue/evenementcoachvue.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvenementcoachvuePageModule": () => (/* binding */ EvenementcoachvuePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _evenementcoachvue_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evenementcoachvue-routing.module */ 40320);
/* harmony import */ var _evenementcoachvue_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evenementcoachvue.page */ 62490);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let EvenementcoachvuePageModule = class EvenementcoachvuePageModule {
};
EvenementcoachvuePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _evenementcoachvue_routing_module__WEBPACK_IMPORTED_MODULE_0__.EvenementcoachvuePageRoutingModule
        ],
        declarations: [_evenementcoachvue_page__WEBPACK_IMPORTED_MODULE_1__.EvenementcoachvuePage]
    })
], EvenementcoachvuePageModule);



/***/ }),

/***/ 62490:
/*!*************************************************************!*\
  !*** ./src/app/evenementcoachvue/evenementcoachvue.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvenementcoachvuePage": () => (/* binding */ EvenementcoachvuePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_evenementcoachvue_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./evenementcoachvue.page.html */ 43622);
/* harmony import */ var _evenementcoachvue_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evenementcoachvue.page.scss */ 66525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 90900);
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ 35172);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/keyboard/ngx */ 71239);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../translate-config.service */ 47464);

















let EvenementcoachvuePage = class EvenementcoachvuePage {
    constructor(api, http, httpClient, geolocation, translateSevice, platform, storage, route, router, alertController, socialSharing, actionSheetController, screenshot, diagnostic, keyboard) {
        this.api = api;
        this.http = http;
        this.httpClient = httpClient;
        this.geolocation = geolocation;
        this.translateSevice = translateSevice;
        this.platform = platform;
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.socialSharing = socialSharing;
        this.actionSheetController = actionSheetController;
        this.screenshot = screenshot;
        this.diagnostic = diagnostic;
        this.keyboard = keyboard;
        this.sportsList = [];
        this.markersArray = [];
        this.subMenuList = false;
        this.height = 0;
        this.events = [];
        this.detailArray = [];
        this.imgAvailable = false;
        this.userEventCardBoolean = false;
        this.Avatar = true;
        this.HourPrice = false;
        this.search = [];
        this.showList = false;
        this.footerAction = true;
        this.data = {};
        this.notificationPresent = false;
        this.keyboard.onKeyboardWillShow().subscribe((data) => {
            this.footerAction = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe((data) => {
            this.footerAction = true;
        });
    }
    searchChange(event) {
        // alert('asdf');
        if (!this.searchTerm) {
            // alert('asdf');
            this.setMarkers();
        }
    }
    ionViewWillEnter() {
        this.sportsList = [];
        const formData = new FormData();
        this.httpClient
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/sport_categories', formData)
            .subscribe((res) => {
            console.log(res);
            this.sportsList = res.result;
        });
    }
    cancelSearch(event) {
        this.footerAction = true;
        this.footerAction = true;
        this.setMarkers();
    }
    searchFocus(event) {
        // this.footerAction = false;
    }
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    ionViewDidEnter() {
        this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('verifiedCoach').then((isSubscribed) => {
                this.isVerified = isSubscribed;
                console.log('language' + lang);
                if (lang == 'English') {
                    this.English = true;
                    this.topSearchPlaceHolder = 'Sports Category';
                }
                else {
                    this.English = false;
                    this.topSearchPlaceHolder = 'Catégorie de sport';
                }
            });
        }));
        // this.diagnostic.isGpsLocationEnabled().then((isAvailable) =>
        // {
        // if(isAvailable===true){
        this.api.loading();
        this.storage.get('notificationArray').then((notificationArray) => {
            this.storage.get('msgUnread').then((value) => {
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
            this.api.checkNewNotificationUnread(user_id);
            this.api.updateToken(user_id);
            this.storage.get('user_img').then((user_img) => {
                this.geolocation
                    .getCurrentPosition()
                    .then((resp) => {
                    // resp.coords.latitude
                    this.imgUrl = user_img;
                    if (user_img === undefined ||
                        user_img === null ||
                        user_img === '') {
                        this.Avatar = false;
                    }
                    else {
                        this.Avatar = true;
                    }
                    this.uid = user_id;
                    var timeStamp = moment__WEBPACK_IMPORTED_MODULE_8__().unix();
                    var latitude = resp.coords.latitude;
                    // resp.coords.longitude
                    this.lat = latitude.toFixed(6);
                    this.long = resp.coords.longitude;
                    //initialize map
                    var longitude = resp.coords.longitude;
                    this.long = longitude.toFixed(6);
                    this.testmap();
                    this.http
                        .get('https://maps.googleapis.com/maps/api/timezone/json?location=' +
                        this.lat +
                        ',' +
                        this.long +
                        '&timestamp=' +
                        timeStamp +
                        '&key=AIzaSyApm82MFXMcROWrHaGTj-auUcyOYQwBwsE')
                        .subscribe((data) => {
                        console.log(data.json());
                        var userTimezone = data.json().timeZoneId;
                        const formData = new FormData();
                        formData.append('user_id', this.uid);
                        formData.append('user_lat', this.lat);
                        formData.append('user_lon', this.long);
                        formData.append('user_timezone', userTimezone);
                        this.http
                            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                            .subscribe((res) => {
                            console.log('madd/user', res);
                            if (res.json().status == 1) {
                                console.log(res.json());
                                this.api.dismissLoading();
                                if (res.json().user_details[0].user_subscription == 1) {
                                    this.storage.set('verifiedCoach', true);
                                    this.subscribed = true;
                                    this.setMarkers();
                                }
                                else {
                                    this.storage.set('verifiedCoach', false);
                                    this.subscribed = false;
                                    this.setMarkers();
                                }
                            }
                            else {
                                this.api.dismissLoading();
                                console.log('location not updated');
                            }
                        });
                    });
                })
                    .catch((error) => {
                    console.log('Error getting location', error);
                });
            });
        });
        // }else{
        //   this.api.toast("Please Turn On Location to proceed");
        // }
        // }).catch((err)=>{
        //     console.log(err);
        //     if(this.English){
        //       this.api.toast("Please Turn On Gps");
        //     }else{
        //       this.api.toast("Veuillez activer le GPS");
        //     }
        //     this.storage.get('user_id').then((user_id) => {
        //       this.storage.get('user_img').then((user_img) => {
        //         this.geolocation.getCurrentPosition().then((resp) => {
        //           // resp.coords.latitude
        //           this.imgUrl=user_img;
        //           this.uid=user_id;
        //           var latitude=resp.coords.latitude
        //           // resp.coords.longitude
        //          this.lat= latitude.toFixed(6);
        //           this.long=resp.coords.longitude;
        //                    //initialize map
        //                    var longitude = resp.coords.longitude;
        //                    this.long = longitude.toFixed(6);
        //           this.testmap();
        //           const formData = new FormData();
        //           formData.append('user_id',this.uid);
        //           formData.append('user_lat',this.lat);
        //           formData.append('user_lon',this.long);
        //           this.http.post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
        //         .subscribe(res => {
        //           if(res.json().status == 1){
        //             console.log(res);
        //             this.api.dismissLoading();
        //               this.storage.get('verifiedCoach').then((isSubscribed)=>{
        //                 console.log(isSubscribed);
        //                   this.subscribed=isSubscribed;
        //                   this.setMarkers();
        //               });
        //           if(user_img===undefined||user_img===null||user_img===''){
        //             this.Avatar=false;
        //           }else{
        //             this.Avatar=true;
        //           }
        //           }else{
        //             this.api.dismissLoading();
        //             console.log("location not updated")
        //           }
        //         });
        //          }).catch((error) => {
        //            console.log('Error getting location', error);
        //          });
        //       });
        //     });
        //   })
    }
    ionViewWillLeave() {
        this.searchTerm = '';
    }
    addevent() {
        this.showList = false;
        this.subMenuList = false;
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        // if(this.subscribed){
        this.api.Navigate('evenementcoach');
        //       }else{
        // this.api.presentAlertSubscription(1);
        //       }
    }
    eventdetails() {
        this.showList = false;
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        this.subMenuList = false;
        this.api.Navigate('evenements-coach');
    }
    messages() {
        this.showList = false;
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        this.subMenuList = false;
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
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        this.subMenuList = false;
        this.api.Navigate('notifications');
    }
    subMenu() {
        this.showList = false;
        if (this.subMenuList === true) {
            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.subMenuList = false;
        }
        else {
            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.subMenuList = true;
        }
    }
    profile() {
        this.showList = false;
        this.subMenuList = false;
        this.api.Navigate('coacheditprofile');
    }
    myAcc() {
        this.showList = false;
        this.subMenuList = false;
        this.api.Navigate('mon-compte');
    }
    settings() {
        this.showList = false;
        this.subMenuList = false;
        this.api.Navigate('parametres');
    }
    logout() {
        this.showList = false;
        this.subMenuList = false;
        this.storage.remove('verifiedCoach');
        //api
        const formData = new FormData();
        formData.append('user_id', this.uid);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/mLogout', formData)
            .subscribe((res) => {
            if (res.json().status == '1') {
                this.logoutuser();
            }
            else {
                this.api.toast(res.json().msg);
            }
        });
    }
    logoutuser() {
        this.storage.remove('user_id').then(() => {
            this.storage.remove('user_type');
            this.storage.remove('user_email');
            this.storage.remove('user_password');
            this.storage.remove('user_img');
            this.storage.remove('user_postal_code');
            this.router.navigate(['/connexion']);
        });
    }
    ngOnInit() {
        this.storage.get('user_f_name').then((user_f_name) => {
            this.storage.get('user_l_name').then((user_l_name) => {
                this.userfName = user_f_name;
                this.userlName = user_l_name;
                this.todayDate = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD');
                this.todayTime = moment__WEBPACK_IMPORTED_MODULE_8__().format('H:mm');
                console.log(this.todayDate);
            });
        });
    }
    testmap() {
        var myLatlng = new google.maps.LatLng(this.lat, this.long);
        var mapOptions = {
            zoom: 12,
            center: myLatlng,
            mapTypeControl: false,
            scaleControl: false,
            zoomControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            styles: [
                {
                    featureType: 'administrative',
                    elementType: 'all',
                    stylers: [{ visibility: 'on' }],
                },
                {
                    featureType: 'administrative',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#444444' }],
                },
                {
                    featureType: 'landscape',
                    elementType: 'all',
                    stylers: [{ color: '#f6f6f4' }, { visibility: 'on' }],
                },
                {
                    featureType: 'landscape.natural',
                    elementType: 'all',
                    stylers: [{ visibility: 'off' }, { color: '#00f3ff' }],
                },
                {
                    featureType: 'landscape.natural.landcover',
                    elementType: 'labels.icon',
                    stylers: [{ visibility: 'off' }],
                },
                {
                    featureType: 'poi',
                    elementType: 'all',
                    stylers: [{ visibility: 'off' }],
                },
                {
                    featureType: 'poi.attraction',
                    elementType: 'all',
                    stylers: [{ visibility: 'off' }],
                },
                {
                    featureType: 'poi.park',
                    elementType: 'all',
                    stylers: [{ visibility: 'simplified' }, { color: '#c8e4cd' }],
                },
                {
                    featureType: 'poi.place_of_worship',
                    elementType: 'all',
                    stylers: [
                        { visibility: 'off' },
                        { saturation: '-65' },
                        { hue: '#0028ff' },
                    ],
                },
                {
                    featureType: 'road',
                    elementType: 'all',
                    stylers: [
                        { saturation: -100 },
                        { lightness: 45 },
                        { color: '#feffff' },
                    ],
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text',
                    stylers: [{ visibility: 'simplified' }, { color: '#454f63' }],
                },
                {
                    featureType: 'road.highway',
                    elementType: 'all',
                    stylers: [{ visibility: 'simplified' }],
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'labels.icon',
                    stylers: [{ visibility: 'off' }],
                },
                {
                    featureType: 'transit',
                    elementType: 'all',
                    stylers: [{ visibility: 'off' }],
                },
                {
                    featureType: 'transit.station.airport',
                    elementType: 'all',
                    stylers: [{ visibility: 'on' }],
                },
                {
                    featureType: 'transit.station.bus',
                    elementType: 'all',
                    stylers: [{ visibility: 'on' }],
                },
                {
                    featureType: 'transit.station.rail',
                    elementType: 'all',
                    stylers: [
                        { visibility: 'simplified' },
                        { hue: '#0039ff' },
                        { saturation: '-100' },
                        { lightness: '0' },
                        { gamma: '0.00' },
                        { weight: '1.94' },
                    ],
                },
                {
                    featureType: 'water',
                    elementType: 'all',
                    stylers: [{ color: '#bde1f1' }, { visibility: 'on' }],
                },
            ],
        };
        this.map = new google.maps.Map(document.getElementById('map3'), mapOptions);
        //      var icon = {
        //       url: this.imgUrl, // url
        //       scaledSize: new google.maps.Size(30, 30), // scaled size
        //       origin: new google.maps.Point(0,0), // origin
        //       anchor: new google.maps.Point(0, 0) // anchor
        //   };
        //   var marker = new google.maps.Marker({
        //     position: myLatlng,
        //     icon: icon
        // });
        //  var marker = new google.maps.Marker({
        //      position: myLatlng,
        //      icon: "assets/images/mapicon.png"
        //  });
        // To add the marker to the map, call setMap();
        //  marker.setMap(this.map)
        var self = this;
        this.map.addListener('click', function () {
            if (self.subMenuList === true) {
                self.subMenuList = false;
            }
        });
    }
    setMarkers(categoryName = undefined) {
        this.clearAllMarkers();
        this.events = [];
        const formData = new FormData();
        formData.append('book_user_id', this.uid);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/event', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                this.events = res.json().result;
                this.storage.set('notificationArray', res.json().notification_list);
                this.storage.get('notificationArray').then((notificationArray) => {
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
                console.log(this.events);
                console.log('hey there');
                for (var i = 0; i < this.events.length; i++) {
                    if (categoryName && this.events[i].spcat_name != categoryName)
                        continue;
                    if (this.events[i].event_type === '1') {
                        if (this.events[i].event_individuals_lat === undefined ||
                            this.events[i].event_individuals_log === null) {
                            console.log(this.events[i]);
                        }
                        else {
                            var latitude = parseFloat(this.events[i].event_individuals_lat);
                            var longitude = parseFloat(this.events[i].event_individuals_log);
                            var myLatlng = new google.maps.LatLng(latitude, longitude);
                            // this.map.addListener('click', function(e) {
                            if (!this.events[i].isFull) {
                                // url: "assets/icone-eventblue.png", // url
                                var icon = {
                                    url: this.events[i].user_map_img + '',
                                    scaledSize: new google.maps.Size(35, 45),
                                    origin: new google.maps.Point(0, 0), // origin
                                };
                                this.events[i].isAvailable = true;
                            }
                            else {
                                var icon = {
                                    url: this.events[i].user_red_map_img + '',
                                    scaledSize: new google.maps.Size(35, 45),
                                    origin: new google.maps.Point(0, 0), // origin
                                    // scaledSize: new google.maps.Size(45, 45), // scaled size
                                    // origin: new google.maps.Point(0, 0), // origin
                                };
                                this.events[i].isAvailable = false;
                            }
                            // var marker = new google.maps.Marker({
                            this.markersArray[i] = new google.maps.Marker({
                                position: myLatlng,
                                icon: icon,
                                index: this.events[i].event_id,
                            });
                            // To add the marker to the map, call setMap();
                            this.markersArray[i].setMap(this.map);
                            //marker click event
                            var self = this;
                            google.maps.event.addListener(this.markersArray[i], 'click', (function (marker, i) {
                                return function () {
                                    console.log(marker.index);
                                    self.detailArray = [];
                                    self.openEvents(marker, i);
                                };
                            })(this.markersArray[i], i));
                        }
                    }
                    else if (this.events[i].event_type === '2' ||
                        this.events[i].event_type === '3') {
                        if (this.events[i].event_coach_lat === undefined ||
                            this.events[i].event_coach_log === null) {
                            console.log(this.events[i]);
                        }
                        else {
                            var latitude = parseFloat(this.events[i].event_coach_lat);
                            var longitude = parseFloat(this.events[i].event_coach_log);
                            var myLatlng = new google.maps.LatLng(latitude, longitude);
                            var url = '';
                            if (this.events[i].event_coach_date > this.todayDate) {
                                this.events[i].isAvailable = true;
                            }
                            else if (this.events[i].event_coach_date == this.todayDate &&
                                this.events[i].event_time > this.todayTime) {
                                this.events[i].isAvailable = true;
                            }
                            else {
                                this.events[i].isAvailable = false;
                            }
                            url = this.events[i].coach_user_marker;
                            var icon = {
                                url: url,
                                scaledSize: new google.maps.Size(45, 45),
                                origin: new google.maps.Point(0, 0), // origin
                            };
                            // var marker = new google.maps.Marker({
                            this.markersArray[i] = new google.maps.Marker({
                                position: myLatlng,
                                icon: icon,
                                index: this.events[i].event_id,
                                // draggable: this.events[i].user_id == this.uid,
                                draggable: false,
                            });
                            // To add the marker to the map, call setMap();
                            this.markersArray[i].setMap(this.map);
                            const _this = this;
                            google.maps.event.addListener(this.markersArray[i], 'dragend', function (event) {
                                _this.updateEventDetails(this.markersArray[i].index, event.latLng.lat(), event.latLng.lng());
                            });
                            //marker click event
                            var self = this;
                            google.maps.event.addListener(this.markersArray[i], 'click', (function (marker, i) {
                                return function () {
                                    console.log(marker.index);
                                    self.detailArray = [];
                                    self.openEvents(marker, i);
                                };
                            })(this.markersArray[i], i));
                        }
                    }
                }
            }
            else {
            }
        });
    }
    openEvents(marker, i) {
        console.log('open events', this.events[i]);
        this.selectedEvent = this.events[i];
        // if(this.isVerified){
        if (this.events[i].event_type === '1') {
            for (var j = 0; j < this.events.length; j++) {
                if (marker.index === this.events[i].event_id) {
                    this.detailArray.push(this.events[i]);
                    this.EUserfName = this.events[i].user_f_name;
                    this.userLname = this.events[i].user_l_name.substring(0, 1);
                    if (this.events[i].user_img === undefined ||
                        this.events[i].user_img === null ||
                        this.events[i].user_img === '') {
                        this.imgAvailable = false;
                    }
                    else {
                        this.imgAvailable = true;
                    }
                    this.userImg = this.events[i].user_img;
                    this.isAvailable = this.events[i].user_img;
                    this.evn_id = this.events[i].event_id;
                    this.evn_type = this.events[i].event_type;
                    this.spcat_name = this.events[i].spcat_name;
                    this.userLocation = this.events[i].event_individuals_address;
                    this.userDate = this.events[i].event_individuals_date;
                    this.userTime = this.events[i].event_time;
                    this.host_id = this.events[i].user_id;
                    // this.userTitle = this.events[i].event_individuals_title;
                    // this.userTitle = this.events[i].event_sport_cate;
                    this.spcat_name = this.events[i].spcat_name;
                    this.pricePerPerson =
                        this.events[i].event_individuals_price_per_person;
                    this.userdiscription = this.events[i].event_individuals_discription;
                    this.participants_max =
                        this.events[i].event_individuals_participants_max;
                    this.participants_min =
                        this.events[i].event_individuals_participants_min;
                    this.userEventCardBoolean = true;
                    return;
                }
                else {
                    console.log('Didnt match!');
                }
            }
        }
        else {
            for (var j = 0; j < this.events.length; j++) {
                if (marker.index === this.events[i].event_id) {
                    this.detailArray.push(this.events[i]);
                    this.EUserfName = this.events[i].user_f_name;
                    this.userLname = this.events[i].user_l_name.substring(0, 1);
                    if (this.events[i].user_img === undefined ||
                        this.events[i].user_img === null ||
                        this.events[i].user_img === '') {
                        this.imgAvailable = false;
                    }
                    else {
                        this.imgAvailable = true;
                    }
                    this.userImg = this.events[i].user_img;
                    this.host_id = this.events[i].user_id;
                    this.evn_id = this.events[i].event_id;
                    this.evn_type = this.events[i].event_type;
                    this.spcat_name = this.events[i].spcat_name;
                    this.userLocation = this.events[i].event_coach_address;
                    if (this.events[i].event_coach_price_hour != '0') {
                        this.coachPrice = this.events[i].event_coach_price_hour;
                        this.HourPrice = true;
                    }
                    else if (this.events[i].event_coach_price_person != '0') {
                        this.coachPrice = this.events[i].event_coach_price_person;
                        this.HourPrice = false;
                    }
                    this.isAvailable = this.events[i].user_img;
                    this.userDate = this.events[i].event_coach_date;
                    this.userMin = this.events[i].event_coach_participants_min_required;
                    this.userTime = this.events[i].event_time;
                    // this.userTitle = this.events[i].event_coach_title;
                    // this.userTitle = this.events[i].event_sport_cate;
                    this.spcat_name = this.events[i].spcat_name;
                    this.pricePerPerson =
                        this.events[i].event_individuals_price_per_person;
                    this.userdiscription = this.events[i].event_coach_discription;
                    this.participants_max = this.events[i].event_coach_participants_max;
                    this.participants_min = this.events[i].event_coach_participants_min;
                    this.coachEventCardBoolean = true;
                }
            }
        }
        // }else{
        //     this.api.presentAlertSubscription(3);
        //   }
    }
    closeDetailsBox() {
        console.log('clicked');
        if (this.userEventCardBoolean === true) {
            this.userEventCardBoolean = false;
        }
        else if (this.coachEventCardBoolean === true) {
            this.coachEventCardBoolean = false;
        }
    }
    abbonement() {
        this.subMenuList = false;
        this.api.Navigate('abonnement');
    }
    viewProfile() {
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        console.log('my event');
        if (this.uid == this.host_id) {
            if (this.userType == '1') {
                this.api.Navigate('mon-profil');
            }
            else {
                this.api.Navigate('coacheditprofile');
            }
        }
        else {
            console.log('others event');
            var vc = { user_id: this.host_id };
            let navigationExtras = {
                queryParams: {
                    special: JSON.stringify(vc),
                },
            };
            this.router.navigate(['coachviewprofile'], navigationExtras);
        }
    }
    deleteEvent() {
        console.log(event);
        const formData = new FormData();
        formData.append('event_id', this.evn_id);
        formData.append('event_type', this.evn_type);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/del/event', formData)
            .subscribe((res) => {
            if (res.json().msg == 'Records Deleted Successfully') {
                console.log(res);
                var msg = 'événement supprimé';
                this.api.toast(msg);
                this.userEventCardBoolean = false;
                this.coachEventCardBoolean = false;
                this.loadData();
            }
            else {
                console.log(res + 'Error');
            }
        });
    }
    // share(){
    //   this.socialSharing.shareViaWhatsApp("Event Name:"+this.userTitle+"Location: "+this.userLocation+"Date of Event: "+
    //   this.userDate+ "Description:"+this.userdiscription).then(() => {
    //     // Success!
    //     var msg="Information Shared Successfullty!"
    //     this.api.toast(msg);
    //   }).catch(() => {
    //     // Error!
    //   });
    // }
    takeScreenshot() {
        this.screenshot.URI(80).then((res) => {
            this.sharableURI = res.URI;
            this.share();
        });
    }
    share() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        });
    }
    sportsTab() {
        if (this.subMenuList === true) {
            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.subMenuList = false;
        }
        else {
            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.api.Navigate('map-sportifs');
        }
    }
    bookEvent() {
        // if(this.subscribed==true){
        var today = new Date();
        var format = moment__WEBPACK_IMPORTED_MODULE_8__(today).format('YYYY-MM-DD');
        this.data.book_user_id = this.uid;
        this.data.book_host_id = this.host_id;
        this.data.book_user_f_name = this.userfName;
        this.data.book_user_l_name = this.userlName;
        this.data.book_event_id = this.evn_id;
        this.data.book_event_date = format;
        this.data.book_event_address = this.userLocation;
        this.storage.set('bookingrequest', this.data);
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        const formData = new FormData();
        formData.append('book_user_id', this.uid);
        formData.append('book_host_id', this.host_id);
        formData.append('book_user_f_name', this.userfName);
        formData.append('book_user_l_name', this.userlName);
        formData.append('book_event_id', this.evn_id);
        formData.append('book_event_date', format);
        formData.append('book_event_address', this.userLocation);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/book', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                if (res.json().msg === 'success') {
                    var msg = 'Votre demande a bien été envoyée';
                    this.userEventCardBoolean = false;
                    this.coachEventCardBoolean = false;
                    this.loadData();
                    this.api.toast(msg);
                }
                else {
                    console.log(res.json());
                    this.userEventCardBoolean = false;
                    this.coachEventCardBoolean = false;
                    this.api.toast(res.json().msg);
                    this.loadData();
                }
            }
            else {
                console.log(res.json());
            }
        });
        // }else{
        //   this.api.presentAlertSubscription(3);
        // }
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.English) {
                const alert = yield this.alertController.create({
                    cssClass: 'secondary',
                    message: 'Are you sure you want to delete this event?',
                    buttons: [
                        {
                            text: 'YES',
                            handler: () => {
                                console.log('Confirm Okay');
                                this.deleteEvent();
                            },
                        },
                        {
                            text: 'NO',
                            role: 'cancel',
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
                                this.deleteEvent();
                            },
                        },
                        {
                            text: 'NON',
                            role: 'cancel',
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
    loadData() {
        this.testmap();
        this.setMarkers();
    }
    presentAlertBooking() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.participants_min == this.participants_max) {
                if (this.English) {
                    this.api.toast('Event is already full');
                }
                else {
                    this.api.toast("L'événement est déjà complet");
                }
            }
            else {
                if (this.English) {
                    const alert = yield this.alertController.create({
                        cssClass: 'booking',
                        message: 'Are you sure you want to join ' +
                            this.EUserfName.bold() +
                            ' ' +
                            this.userLname.bold() +
                            '. sur cet événement ?',
                        buttons: [
                            {
                                text: 'OUI',
                                handler: () => {
                                    console.log('Confirm Okay');
                                    this.bookEvent();
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
                else {
                    const alert = yield this.alertController.create({
                        cssClass: 'booking',
                        message: 'Es-tu sûr(e) de vouloir rejoindre ' +
                            this.EUserfName.bold() +
                            ' ' +
                            this.userLname.bold() +
                            '. on this event?',
                        buttons: [
                            {
                                text: 'OUI',
                                handler: () => {
                                    console.log('Confirm Okay');
                                    this.bookEvent();
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
    clearAllMarkers() {
        this.markersArray.forEach((element) => {
            try {
                element.setMap(null);
            }
            catch (error) { }
        });
        this.markersArray = [];
    }
    searchEvent(ev) {
        var arr = [];
        for (let i = 0; i < this.sportsList.length; i++) {
            //var input = {};
            //for(var k =0;k<input.length;k++)
            //this.input1.productId=ProductText;
            // var obj = {};
            // var input = {"id":productId,"name":ProductText,"productUrl":productUrl,"productsell":productsell};
            var input = this.sportsList[i];
            arr.push(input);
            let val = ev.target.value;
            // alert(typeof(val));
            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                // Filter the items
                this.search = arr.filter(function (item) {
                    return (
                    // item.event_coach_title.toLowerCase().indexOf(val.toLowerCase()) >
                    //   -1 ||
                    // item.event_individuals_title
                    //   .toLowerCase()
                    //   .indexOf(val.toLowerCase()) > -1 ||
                    // item.event_sport_cate.toLowerCase().indexOf(val.toLowerCase()) > -1
                    item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
                if (this.search.length !== 0) {
                    this.showList = true;
                }
                else {
                    this.showList = false;
                }
                // Show the results
            }
            else {
                // hide the results when the query is empty
                this.showList = false;
            }
            // console.log(arr);
        }
    }
    selectItem(item) {
        console.log('select item', item);
        this.searchTerm = item.spcat_name;
        console.log(item);
        console.log(this.searchTerm);
        this.showList = false;
        this.setMarkers(this.searchTerm);
        if (item.event_type === '1') {
            this.EUserfName = item.user_f_name;
            this.userLname = item.user_l_name.substring(0, 1);
            if (item.user_img === undefined ||
                item.user_img === null ||
                item.user_img === '') {
                this.imgAvailable = false;
            }
            else {
                this.imgAvailable = true;
            }
            this.userImg = item.user_img;
            this.userLocation = item.event_individuals_address;
            this.userDate = item.event_individuals_date;
            this.userTime = item.event_time;
            // this.userTitle = item.event_individuals_title;
            // this.userTitle = item.event_sport_cate;
            this.host_id = item.user_id;
            this.evn_id = item.event_id;
            this.userdiscription = item.event_individuals_discription;
            this.participants_max = item.event_individuals_participants_max;
            this.participants_min = item.event_individuals_participants_min;
            this.evn_type = item.event_type;
            this.userEventCardBoolean = true;
            return;
        }
        else if (item.event_type === '2') {
            this.EUserfName = item.user_f_name;
            this.userLname = item.user_l_name.substring(0, 1);
            if (item.user_img === undefined ||
                item.user_img === null ||
                item.user_img === '') {
                this.imgAvailable = false;
            }
            else {
                this.imgAvailable = true;
            }
            this.userImg = item.user_img;
            this.userLocation = item.event_coach_address;
            this.userDate = item.event_coach_date;
            this.userTime = item.event_time;
            // this.userTitle = item.event_coach_title;
            // this.userTitle = item.event_sport_cate;
            this.host_id = item.user_id;
            this.evn_id = item.event_id;
            this.userdiscription = item.event_coach_discription;
            this.userMin = item.event_coach_participants_min_required;
            this.participants_max = item.event_coach_participants_max;
            this.participants_min = item.event_coach_participants_min;
            if (item.event_coach_price_hour != '0') {
                this.coachPrice = item.event_coach_price_hour;
                this.HourPrice = true;
            }
            else if (item.event_coach_price_person != '0') {
                this.coachPrice = item.event_coach_price_person;
                this.HourPrice = false;
            }
            this.evn_type = item.event_type;
            this.coachEventCardBoolean = true;
            return;
        }
    }
    updateEventDetails(eventId, lat, lng) {
        const geocoder = new google.maps.Geocoder();
        const latlng = {
            lat,
            lng,
        };
        geocoder.geocode({ location: latlng }, (results, status) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (status === 'OK') {
                const eventAddress = results[0].formatted_address;
                if (this.English) {
                    const alert = yield this.alertController.create({
                        cssClass: 'secondary',
                        message: `Are you sure you want to update this event location to ${eventAddress}?`,
                        buttons: [
                            {
                                text: 'YES',
                                handler: () => {
                                    console.log('Confirm Okay');
                                    const formData = new FormData();
                                    formData.append('event_id', eventId);
                                    formData.append('event_coach_address', eventAddress);
                                    formData.append('event_coach_lat', lat.toString());
                                    formData.append('event_coach_log', lng.toString());
                                    this.http
                                        .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/event', formData)
                                        .subscribe((res) => {
                                        if (res) {
                                            const response = res.json();
                                            if (response.status == 1) {
                                                this.ionViewDidEnter();
                                            }
                                        }
                                    });
                                },
                            },
                            {
                                text: 'NO',
                                role: 'cancel',
                                handler: (blah) => {
                                    this.ionViewDidEnter();
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        cssClass: 'secondary',
                        message: `Voulez-vous vraiment mettre à jour cet emplacement de l'événement en ${eventAddress} ?`,
                        buttons: [
                            {
                                text: 'OUI',
                                handler: () => {
                                    console.log('Confirm Okay');
                                    const formData = new FormData();
                                    formData.append('event_id', eventId);
                                    formData.append('event_coach_address', eventAddress);
                                    formData.append('event_coach_lat', lat.toString());
                                    formData.append('event_coach_log', lng.toString());
                                    this.http
                                        .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/event', formData)
                                        .subscribe((res) => {
                                        if (res) {
                                            const response = res.json();
                                            if (response.status == 1) {
                                                this.ionViewDidEnter();
                                            }
                                        }
                                    });
                                },
                            },
                            {
                                text: 'NON',
                                role: 'cancel',
                                handler: (blah) => {
                                    this.ionViewDidEnter();
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
            }
        }));
    }
};
EvenementcoachvuePage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_11__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_9__.TranslateConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_14__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__.Screenshot },
    { type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__.Diagnostic },
    { type: _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__.Keyboard }
];
EvenementcoachvuePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-evenementcoachvue',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_evenementcoachvue_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_evenementcoachvue_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _angular_http__WEBPACK_IMPORTED_MODULE_11__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient,
        _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_9__.TranslateConfigService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_14__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController,
        _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController,
        _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__.Screenshot,
        _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__.Diagnostic,
        _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__.Keyboard])
], EvenementcoachvuePage);



/***/ }),

/***/ 43622:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/evenementcoachvue/evenementcoachvue.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"map-content\">\n  <div class=\"map-block\">\n    <ion-grid class=\"map-search-box\">\n      <ion-row\n        class=\"map-search-withrow\"\n        style=\"display: flex; flex-direction: row; align-items: center\"\n      >\n        <ion-col size=\"10\">\n          <div class=\"search-box\">\n            <ion-searchbar\n              class=\"ion-no-padding\"\n              (ionInput)=\"searchEvent($event)\"\n              placeholder=\"{{topSearchPlaceHolder}}\"\n              [(ngModel)]=\"searchTerm\"\n              showCancelButton=\"focus\"\n              (ionClear)=\"cancelSearch($event)\"\n              (ionFocus)=\"searchFocus($event)\"\n              (ionChange)=\"searchChange($event)\"\n            >\n            </ion-searchbar>\n          </div>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding-top: 0\">\n          <!-- <div class=\"search-profile-box\" style=\"margin-right: 15%;height: 58px;\" (click)=\"subMenu()\"> -->\n\n          <ion-avatar\n            (click)=\"subMenu()\"\n            style=\"display: flex; align-items: center\"\n          >\n            <ion-img style=\"width: 50px; height: 50px\" [src]=\"imgUrl\"></ion-img>\n          </ion-avatar>\n\n          <!-- </div> -->\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"showList\">\n        <ion-list>\n          <ion-item *ngFor=\"let item of search\" (click)=\"selectItem(item)\">\n            <ion-text>\n              <!-- {{item.event_coach_title}} -->\n\n              <ng-container>{{item.spcat_name}}</ng-container>\n            </ion-text>\n            <!-- <ion-text *ngIf=\"item.event_type==='2'\"\n              >{{item.event_coach_title}}<ng-container\n                *ngIf=\"item.event_sport_cate\"\n                >-({{item.event_sport_cate}})</ng-container\n              ></ion-text\n            >\n            <ion-text *ngIf=\"item.event_type==='1'\"\n              >{{item.event_individuals_title}}<ng-container\n                *ngIf=\"item.event_sport_cate\"\n                >-({{item.event_sport_cate}})</ng-container\n              ></ion-text\n            > -->\n          </ion-item>\n        </ion-list>\n      </div>\n      <ion-row\n        *ngIf=\"subMenuList\"\n        style=\"display: flex; flex-direction: row-reverse\"\n      >\n        <ion-list>\n          <ion-item (click)=\"profile()\">\n            <ion-label [translate]=\"'EVENTMENTCOACHVUE.Text1'\"></ion-label>\n          </ion-item>\n          <ion-item (click)=\"myAcc()\">\n            <ion-label [translate]=\"'EVENTMENTCOACHVUE.Text2'\"></ion-label>\n          </ion-item>\n          <ion-item (click)=\"abbonement()\">\n            <ion-label [translate]=\"'EVENTMENTCOACHVUE.Text3'\"></ion-label>\n          </ion-item>\n          <ion-item (click)=\"settings()\">\n            <ion-label [translate]=\"'EVENTMENTCOACHVUE.Text4'\"></ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" (click)=\"logout()\">\n            <ion-label [translate]=\"'EVENTMENTCOACHVUE.Text5'\"></ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-row>\n    </ion-grid>\n\n    <!-- User Event Card -->\n    <div class=\"map-det-popup left\" *ngIf=\"userEventCardBoolean\">\n      <ion-card class=\"det-card\" style=\"border-radius: 12px\">\n        <ion-row\n          style=\"\n            border-bottom-style: solid;\n            border-bottom-color: #929292;\n            border-bottom-width: 0.5px;\n            margin-top: 5%;\n          \"\n        >\n          <ion-col\n            [size]=\"2\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n            (click)=\"viewProfile()\"\n          >\n            <ion-avatar\n              style=\"display: flex; align-items: center\"\n              *ngIf=\"imgAvailable\"\n            >\n              <ion-img\n                style=\"width: 50px; height: 50px\"\n                [src]=\"userImg\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col\n            [size]=\"8\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n          >\n            <ion-row\n              style=\"\n                color: #d3c117;\n                font-size: 18px;\n                font-family: Open Sans-bold;\n              \"\n              (click)=\"viewProfile()\"\n            >\n              {{EUserfName | titlecase}} {{userLname | titlecase}}.\n            </ion-row>\n            {{spcat_name}}\n            <!-- <ion-row> {{userTitle | titlecase}} </ion-row> -->\n          </ion-col>\n          <ion-col\n            [size]=\"2\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n          >\n            <div class=\"det-close\" (click)=\"closeDetailsBox()\">\n              <ion-icon name=\"close\" size=\"large\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-card-content class=\"evenement-card-content ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-row>\n              <!-- <div class=\"iconswith-row\">\n                <img\n                  src=\"../../assets/images/create-coach-img1.png\"\n                  class=\"location-img\"\n                />\n                <b style=\"color: black\" class=\"details-box\">{{spcat_name}}</b>\n              </div> -->\n              <div class=\"iconswith-row\">\n                <img src=\"../../assets/images/pin.png\" class=\"location-img\" />\n                <div class=\"details-box\">{{userLocation}}</div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/time.png\" class=\"time-img\" />\n                <div class=\"details-box\">{{userDate}} - {{userTime}}</div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/people.png\" class=\"time-img\" />\n                <div class=\"details-box\">\n                  Participants: {{participants_min}}/{{participants_max}}\n                </div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/money-bag.png\" class=\"time-img\" />\n                <div class=\"details-box\" [translate]=\"'CREEREVENT.Text9'\">\n                  {{pricePerPerson}}\n                </div>\n              </div>\n            </ion-row>\n          </ion-list>\n        </ion-card-content>\n        <ion-row\n          *ngIf=\"uid!==host_id\"\n          style=\"display: flex; flex-direction: row; justify-content: center\"\n        >\n          <ion-button\n            [disabled]=\"!selectedEvent.isAvailable || selectedEvent.isBooked || selectedEvent.isFull\"\n            style=\"--border-radius: 52px; --background: #d3c117\"\n            (click)=\"bookEvent()\"\n            [translate]=\"'EVENTMENTCOACHVUE.Text14'\"\n          >\n          </ion-button>\n          <ion-button\n            style=\"--border-radius: 52px; --background: #708aaa; width: 40%\"\n            (click)=\"takeScreenshot()\"\n          >\n            <img\n              style=\"width: 18%\"\n              src=\"assets/images/share.png\"\n              class=\"time-img\"\n            />\n            <ion-text\n              style=\"margin-left: 5%; font-weight: bold\"\n              [translate]=\"'EVENTMENTCOACHVUE.Text6'\"\n            >\n            </ion-text>\n          </ion-button>\n        </ion-row>\n        <ion-row\n          *ngIf=\"uid===host_id\"\n          style=\"display: flex; flex-direction: row\"\n        >\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"--border-radius: 52px; --background: #d3c117; width: 90%\"\n              (click)=\"presentAlertConfirm()\"\n              [translate]=\"'EVENTMENTCOACHVUE.Text7'\"\n            >\n              <!-- <ion-icon name=\"arrow-redo-outline\"></ion-icon> -->\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"--border-radius: 52px; --background: #708aaa; width: 90%\"\n              (click)=\"takeScreenshot()\"\n            >\n              <img\n                style=\"width: 18%\"\n                src=\"assets/images/share.png\"\n                class=\"time-img\"\n              />\n              <ion-text\n                style=\"margin-left: 5%; font-weight: bold\"\n                [translate]=\"'EVENTMENTCOACHVUE.Text6'\"\n              >\n              </ion-text>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          style=\"\n            margin-top: 5%;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n          [translate]=\"'EVENTMENTCOACHVUE.Text8'\"\n        >\n        </ion-row>\n        <ion-row\n          style=\"\n            margin-top: 5%;\n            margin-left: 5%;\n            padding-bottom: 4%;\n            width: 80%;\n          \"\n        >\n          {{userdiscription}}\n        </ion-row>\n      </ion-card>\n    </div>\n\n    <!-- Coach Event Card -->\n    <div class=\"map-det-popup left\" *ngIf=\"coachEventCardBoolean\">\n      <ion-card class=\"det-card\" style=\"border-radius: 12px\">\n        <ion-row\n          style=\"\n            border-bottom-style: solid;\n            border-bottom-color: #929292;\n            border-bottom-width: 0.5px;\n            margin-top: 5%;\n          \"\n        >\n          <ion-col\n            [size]=\"2\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n            (click)=\"viewProfile()\"\n          >\n            <!-- <img *ngIf=\"!imgAvailable\" style=\"border-radius: 53%;\" src=\"assets/images/profile-img2.jpg\" /> -->\n            <ion-avatar\n              style=\"display: flex; align-items: center\"\n              *ngIf=\"imgAvailable\"\n            >\n              <ion-img\n                style=\"width: 50px; height: 50px\"\n                [src]=\"userImg\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col\n            [size]=\"8\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n          >\n            <ion-row\n              style=\"\n                color: #d3c117;\n                font-size: 18px;\n                font-family: Open Sans-bold;\n              \"\n              (click)=\"viewProfile()\"\n            >\n              <img\n                src=\"assets/images/Star.svg\"\n                style=\"width: 7%\"\n                class=\"time-img\"\n              />\n              {{EUserfName | titlecase}} {{userLname | titlecase}}. (Coach)\n            </ion-row>\n            <ion-row> {{spcat_name}} </ion-row>\n          </ion-col>\n          <ion-col\n            [size]=\"2\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n          >\n            <div class=\"det-close\" (click)=\"closeDetailsBox()\">\n              <ion-icon name=\"close\" size=\"large\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-card-content class=\"evenement-card-content ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-row>\n              <!-- <div class=\"iconswith-row\">\n                <img\n                  src=\"../../assets/images/create-coach-img1.png\"\n                  class=\"location-img\"\n                />\n                <b style=\"color: black\" class=\"details-box\">{{spcat_name}}</b>\n              </div> -->\n              <div class=\"iconswith-row\">\n                <img src=\"../../assets/images/pin.png\" class=\"location-img\" />\n                <div class=\"details-box\">{{userLocation}}</div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/time.png\" class=\"time-img\" />\n                <div class=\"details-box\">{{userDate}} - {{userTime}}</div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/people.png\" class=\"time-img\" />\n                <div class=\"details-box\">\n                  Participants: {{participants_min}}/{{participants_max}}\n                </div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/money-bag.png\" class=\"time-img\" />\n                <div\n                  class=\"details-box\"\n                  [translate]=\"'EVENTMENTCOACHVUE.Text11'\"\n                >\n                  <p *ngIf=\"HourPrice\" [translate]=\"'EVENTMENTCOACHVUE.Text12'\">\n                    &nbsp;\n                  </p>\n                  <p\n                    *ngIf=\"!HourPrice\"\n                    [translate]=\"'EVENTMENTCOACHVUE.Text13'\"\n                  >\n                    &nbsp;\n                  </p>\n                  {{coachPrice | currency:'EUR':true}} (Minimum: {{userMin}})\n                </div>\n              </div>\n            </ion-row>\n          </ion-list>\n        </ion-card-content>\n        <ion-row\n          *ngIf=\"uid!==host_id\"\n          style=\"display: flex; flex-direction: row; justify-content: center\"\n        >\n          <ion-button\n            [disabled]=\"!selectedEvent.isAvailable || selectedEvent.isBooked || selectedEvent.isFull\"\n            style=\"--border-radius: 52px; --background: #d3c117\"\n            (click)=\"presentAlertBooking()\"\n            [translate]=\"'EVENTMENTCOACHVUE.Text14'\"\n          >\n          </ion-button>\n\n          <ion-button\n            style=\"--border-radius: 52px; --background: #708aaa; width: 40%\"\n            (click)=\"takeScreenshot()\"\n          >\n            <img\n              style=\"width: 18%\"\n              src=\"assets/images/share.png\"\n              class=\"time-img\"\n            />\n            <ion-text\n              style=\"margin-left: 5%\"\n              [translate]=\"'EVENTMENTCOACHVUE.Text6'\"\n            >\n            </ion-text>\n          </ion-button>\n        </ion-row>\n        <ion-row\n          *ngIf=\"uid===host_id\"\n          style=\"display: flex; flex-direction: row\"\n        >\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"--border-radius: 52px; --background: #d3c117; width: 90%\"\n              (click)=\"takeScreenshot()\"\n            >\n              <img\n                style=\"width: 18%\"\n                src=\"assets/images/share.png\"\n                class=\"time-img\"\n              />\n              <ion-text\n                style=\"margin-left: 5%\"\n                [translate]=\"'EVENTMENTCOACHVUE.Text6'\"\n              >\n              </ion-text>\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"--border-radius: 52px; --background: #d3c117; width: 90%\"\n              (click)=\"presentAlertConfirm()\"\n              [translate]=\"'EVENTMENTCOACHVUE.Text7'\"\n            >\n              <!-- <ion-icon name=\"arrow-redo-outline\"></ion-icon> -->\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          style=\"\n            margin-top: 5%;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n          [translate]=\"'EVENTMENTCOACHVUE.Text8'\"\n        >\n        </ion-row>\n        <ion-row\n          style=\"\n            margin-top: 5%;\n            margin-left: 5%;\n            display: flex;\n            justify-content: flex-start;\n            padding-bottom: 4%;\n            width: 80%;\n          \"\n        >\n          {{userdiscription}}\n        </ion-row>\n      </ion-card>\n    </div>\n    <div class=\"google-map\" id=\"map3\"></div>\n    <div class=\"plus-icon-box\">\n      <ion-icon name=\"add\" style=\"color: white\" (click)=\"addevent()\"></ion-icon>\n    </div>\n    <div class=\"bottom-tab\" *ngIf=\"footerAction\">\n      <div class=\"two-tabs\">\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <div\n              style=\"\n                text-transform: uppercase;\n                font-family: montserrat-medium;\n                font-weight: bold;\n              \"\n              class=\"tabs-block uppercaes selected-tabs\"\n              [translate]=\"'EVENTMENTCOACHVUE.Text9'\"\n            ></div>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" (click)=\"sportsTab()\">\n            <div\n              style=\"\n                text-transform: uppercase;\n                font-family: montserrat-medium;\n                font-weight: bold;\n              \"\n              class=\"tabs-block uppercaes\"\n              [translate]=\"'EVENTMENTCOACHVUE.Text10'\"\n            ></div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\" *ngIf=\"footerAction\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\">\n        <img\n          src=\"assets/images/selectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"eventdetails()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 66525:
/*!***************************************************************!*\
  !*** ./src/app/evenementcoachvue/evenementcoachvue.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".map-content .map-block {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-content .google-map {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-content .pastEventButton {\n  color: #000000 !important;\n  --border-radius: 52px !important;\n  --background: lightgray !important;\n  width: 90% !important;\n}\n.map-content .presentEvent {\n  --border-radius: 52px;\n  --background: #D3C117;\n  width: 90%;\n}\n.map-content .plus-icon-box {\n  position: absolute;\n  z-index: 100000;\n  width: 50px;\n  height: 50px;\n  bottom: 60px;\n  right: 10px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 50px;\n  border-radius: 50%;\n  background-color: #708AAA;\n}\n.map-content .map-search-box {\n  position: absolute;\n  z-index: 100000;\n  width: 96%;\n  top: 30px;\n  left: 2%;\n}\n.map-content .map-search-box .map-search-withrow {\n  position: relative;\n  width: 100%;\n}\n.map-content .map-search-box .map-search-withrow .search-box {\n  width: 100%;\n  display: inline-block;\n}\n.map-content .map-search-box .map-search-withrow .search-box .searchbar-input-container input {\n  border-radius: 30px !important;\n}\n.map-content .map-search-box .map-search-withrow .search-box .searchbar-input {\n  border-radius: 30px !important;\n}\n.map-content .map-search-box .map-search-withrow .search-profile-box {\n  width: 50px;\n  display: inline-block;\n  float: right;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50%;\n  border: solid 3px #ffffff;\n  background: #f5f5f5;\n  overflow: hidden;\n}\n.map-content .map-search-box .map-search-withrow .search-profile-box img {\n  width: 100%;\n}\n.map-content .bottom-tab {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n}\n.map-content .bottom-tab .two-tabs {\n  display: inline-block;\n  width: 100%;\n  background: #6B6B6B;\n  --background: #6B6B6B;\n  --ion-color-base: #6B6B6B!important;\n  color: #cccccc;\n  position: relative;\n  padding: 10px 10%;\n  text-align: center;\n  line-height: 30px;\n}\n.map-content .bottom-tab .two-tabs .tabs-block {\n  position: relative;\n  text-transform: capitalize;\n}\n.map-content .bottom-tab .two-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -13px;\n  left: 0px;\n  background: #cccccc;\n}\n.map-content .bottom-tab .two-tabs .selected-tabs {\n  color: #D3C117;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.map-content .bottom-tab .two-tabs .selected-tabs:before {\n  background: #D3C117;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n.evenement-card-content {\n  border-radius: 10px;\n  padding-bottom: 0px;\n}\n.evenement-card-content .iconswith-row {\n  position: relative;\n  padding-left: 10px;\n  text-align: left;\n  width: 100%;\n  min-height: 30px;\n  margin-bottom: 5px;\n  display: flex;\n}\n.evenement-card-content .iconswith-row img {\n  position: absolute;\n  width: 20px;\n  left: 0px;\n}\n.evenement-card-content .details-box {\n  padding-left: 5%;\n  display: flex;\n  width: 100%;\n}\n.evenement-card-content .time-img {\n  width: 18px !important;\n}\n.evenement-card-content .location-img {\n  width: 16px !important;\n}\n.map-det-popup {\n  position: absolute;\n  z-index: 1000000;\n  width: 96%;\n  top: 80px;\n  left: 2%;\n}\n.map-det-popup ion-card {\n  background: #ffffff;\n  overflow: initial;\n}\n.map-det-popup .det-head-withimg {\n  position: relative;\n  padding: 0px 20px 5px 10px;\n  border-bottom: solid thin #e1e1e1;\n}\n.map-det-popup .det-head-withimg .det-head-txt {\n  display: inline-block;\n  width: 100%;\n}\n.map-det-popup .det-head-withimg .det-head-txt b {\n  display: inline-block;\n  width: 100%;\n  font-size: 18px;\n}\n.map-det-popup .det-head-withimg .det-close {\n  position: absolute;\n  right: 0px;\n  font-size: 24px;\n  top: 0px;\n  line-height: 20px;\n}\n.map-det-popup ion-list {\n  padding: 10px;\n  color: #666666;\n}\n.map-det-popup ion-list .create-input-row {\n  position: relative;\n  width: 100%;\n  padding-left: 50px;\n}\n.map-det-popup ion-list .create-input-row ion-input {\n  margin-bottom: 15px;\n  border-bottom: solid thin #cccccc;\n}\n.map-det-popup ion-list .left-createicon {\n  height: 25px;\n  width: 22px;\n  margin-right: 20px;\n  position: absolute;\n  left: 0px;\n}\n.map-det-popup ion-list .coach-radiobox .engage-euro {\n  font-size: 18px;\n  margin-right: 3px;\n}\n.map-det-popup ion-list .coach-radiobox ion-radio {\n  margin-right: 15px;\n}\n.map-det-popup .det-card-content {\n  overflow: initial;\n  padding-bottom: 20px;\n}\n.map-det-popup .buttonbox-cardouter {\n  position: absolute;\n  z-index: 10;\n  left: calc(50% - 85px);\n  bottom: -20px;\n}\nion-icon {\n  --color:white;\n  --outline-color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW5lbWVudGNvYWNodnVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlFO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUU7RUFFRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBQUxKO0FBUUU7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQU5KO0FBV0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBVEY7QUFXRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQVRKO0FBVUk7RUFFRSxrQkFBQTtFQUNBLFdBQUE7QUFUTjtBQVVNO0VBRUUsV0FBQTtFQUNBLHFCQUFBO0FBVFI7QUFXVTtFQUNFLDhCQUFBO0FBVFo7QUFZUTtFQUVFLDhCQUFBO0FBWFY7QUFlTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFFQSw2RUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBYlI7QUFjTztFQUNDLFdBQUE7QUFaUjtBQW9CRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBbEJKO0FBbUJJO0VBQ0UscUJBQUE7RUFDRixXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBakJKO0FBa0JJO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQWhCTjtBQWtCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWtCSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBaEJOO0FBa0JJO0VBQ0UsbUJBQUE7QUFoQk47QUFxQkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBbEJGO0FBbUJFO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFqQko7QUFrQkk7RUFDRSxVQUFBO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFoQko7QUFpQk07RUFDRSxVQUFBO0FBZlI7QUFpQk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBZlI7QUFxQkE7RUFFSSxtQkFBQTtFQUNBLG1CQUFBO0FBbkJKO0FBb0JJO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBbkJOO0FBcUJJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQW5CTjtBQXFCSTtFQUNFLGdCQUFBO0VBQ0YsYUFBQTtFQUNBLFdBQUE7QUFuQko7QUFxQkk7RUFFRSxzQkFBQTtBQXBCTjtBQXNCSTtFQUVFLHNCQUFBO0FBckJOO0FBeUJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQXRCSjtBQXVCSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFyQk47QUF1Qkk7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUFyQk47QUFzQk07RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFwQlI7QUFxQlE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBbkJWO0FBc0JNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQXBCUjtBQXVCSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBckJOO0FBc0JNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFwQlI7QUFxQlE7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0FBbkJWO0FBc0JNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQXBCUjtBQXdCUTtFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQXZCVjtBQXlCUTtFQUVFLGtCQUFBO0FBeEJWO0FBNEJJO0VBRUUsaUJBQUE7RUFDQSxvQkFBQTtBQTNCTjtBQTZCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQTNCTjtBQStCRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQTVCSiIsImZpbGUiOiJldmVuZW1lbnRjb2FjaHZ1ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRlbnRcbntcbiAgLm1hcC1ibG9ja1xuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuZ29vZ2xlLW1hcFxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wYXN0RXZlbnRCdXR0b24ge1xuICAgXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUycHggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnByZXNlbnRFdmVudHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUycHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNDMTE3O1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgXG5cblxuLnBsdXMtaWNvbi1ib3h7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDYwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwOEFBQTtcbn1cbiAgLm1hcC1zZWFyY2gtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDAwO1xuICAgIHdpZHRoOiA5NiU7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IDIlO1xuICAgIC5tYXAtc2VhcmNoLXdpdGhyb3dcbiAgICB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5zZWFyY2gtYm94XG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVye1xuICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoYmFyLWlucHV0XG4gICAgICAgIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgLnNlYXJjaC1wcm9maWxlLWJveCB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgfVxuICBcbiAgLmJvdHRvbS10YWJ7ICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC50d28tdGFic3tcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNkI2QjZCO1xuICAgIC0tYmFja2dyb3VuZDogIzZCNkI2QjtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjNkI2QjZCIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAxMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIC50YWJzLWJsb2NrIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgICAudGFicy1ibG9jazpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICB0b3A6IC0xM3B4O1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICB9XG4gICAgLnNlbGVjdGVkLXRhYnMge1xuICAgICAgY29sb3I6ICNEM0MxMTc7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIC5zZWxlY3RlZC10YWJzOmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRDNDMTE3O1xuICAgIH1cbiAgfVxufVxufVxuLmZvb3Rlci1maXhlZC10YWIge1xuICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDUlO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAuZm9vdGVyLWJ0bi10YWJzIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgLnJvdW5ke1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNDMTE3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZXZlbmVtZW50LWNhcmQtY29udGVudFxuICB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC5pY29uc3dpdGgtcm93XG4gICAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5pY29uc3dpdGgtcm93IGltZ3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgIH1cbiAgICAuZGV0YWlscy1ib3h7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50aW1lLWltZ1xuICAgIHtcbiAgICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2NhdGlvbi1pbWdcbiAgICB7XG4gICAgICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXAtZGV0LXBvcHVwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDAwMDtcbiAgICB3aWR0aDogOTYlO1xuICAgIHRvcDogODBweDtcbiAgICBsZWZ0OiAyJTtcbiAgICBpb24tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgfVxuICAgIC5kZXQtaGVhZC13aXRoaW1nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDVweCAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjZTFlMWUxO1xuICAgICAgLmRldC1oZWFkLXR4dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kZXQtY2xvc2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgY29sb3I6IzY2NjY2NjtcbiAgICAgIC5jcmVhdGUtaW5wdXQtcm93IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICNjY2NjY2M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5sZWZ0LWNyZWF0ZWljb24ge1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgLmNvYWNoLXJhZGlvYm94XG4gICAgICB7XG4gICAgICAgIC5lbmdhZ2UtZXVyb1xuICAgICAgICB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1yYWRpb1xuICAgICAgICB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5kZXQtY2FyZC1jb250ZW50XG4gICAge1xuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmJ1dHRvbmJveC1jYXJkb3V0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDg1cHgpO1xuICAgICAgYm90dG9tOiAtMjBweDtcbiAgICB9XG4gIH1cblxuICBpb24taWNvbntcbiAgICAtLWNvbG9yOndoaXRlO1xuICAgIC0tb3V0bGluZS1jb2xvcjp3aGl0ZTtcbiAgfVxuXG5cbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_evenementcoachvue_evenementcoachvue_module_ts.js.map