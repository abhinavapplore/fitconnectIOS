"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_creer-evenement_creer-evenement_module_ts"],{

/***/ 17269:
/*!*******************************************************************!*\
  !*** ./src/app/creer-evenement/creer-evenement-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreerEvenementPageRoutingModule": () => (/* binding */ CreerEvenementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _creer_evenement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creer-evenement.page */ 40305);




const routes = [
    {
        path: '',
        component: _creer_evenement_page__WEBPACK_IMPORTED_MODULE_0__.CreerEvenementPage
    }
];
let CreerEvenementPageRoutingModule = class CreerEvenementPageRoutingModule {
};
CreerEvenementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreerEvenementPageRoutingModule);



/***/ }),

/***/ 21305:
/*!***********************************************************!*\
  !*** ./src/app/creer-evenement/creer-evenement.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreerEvenementPageModule": () => (/* binding */ CreerEvenementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _creer_evenement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creer-evenement-routing.module */ 17269);
/* harmony import */ var _creer_evenement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creer-evenement.page */ 40305);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let CreerEvenementPageModule = class CreerEvenementPageModule {
};
CreerEvenementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_8__.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyApm82MFXMcROWrHaGTj-auUcyOYQwBwsE',
                libraries: ['places']
            }),
            _creer_evenement_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreerEvenementPageRoutingModule
        ],
        declarations: [_creer_evenement_page__WEBPACK_IMPORTED_MODULE_1__.CreerEvenementPage]
    })
], CreerEvenementPageModule);



/***/ }),

/***/ 40305:
/*!*********************************************************!*\
  !*** ./src/app/creer-evenement/creer-evenement.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreerEvenementPage": () => (/* binding */ CreerEvenementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_creer_evenement_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./creer-evenement.page.html */ 58575);
/* harmony import */ var _creer_evenement_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creer-evenement.page.scss */ 92443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 90900);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/keyboard/ngx */ 71239);
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ 35172);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../translate-config.service */ 47464);



















let CreerEvenementPage = class CreerEvenementPage {
    constructor(api, formBuilder, route, router, http, httpClient, geolocation, mapsAPILoader, translateSevice, platform, storage, socialSharing, alertController, ngZone, keyboard, actionSheetController, screenshot, diagnostic) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.http = http;
        this.httpClient = httpClient;
        this.geolocation = geolocation;
        this.mapsAPILoader = mapsAPILoader;
        this.translateSevice = translateSevice;
        this.platform = platform;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.alertController = alertController;
        this.ngZone = ngZone;
        this.keyboard = keyboard;
        this.actionSheetController = actionSheetController;
        this.screenshot = screenshot;
        this.diagnostic = diagnostic;
        this.sportsList = [];
        this.showContList = false;
        this.markersArray = [];
        this.footerAction = true;
        this.userEventCardBoolean = false;
        this.subMenuList = false;
        this.title = 'Event Location';
        this.height = 0;
        this.events = [];
        this.detailArray = [];
        this.imgAvailable = false;
        this.Avatar = true;
        this.coachEventCardBoolean = false;
        this.HourPrice = false;
        this.PersonPrice = false;
        this.formFilled = false;
        this.search = [];
        this.showList = false;
        this.data = {};
        this.userVerified = false;
        this.isEventApiCalled = false;
        this.userSportCategory = [];
        this.eventType = '';
        this.notificationPresent = false;
        this.submitted = false;
        this.showbox = false;
        this.creatform();
        this.keyboard.onKeyboardWillShow().subscribe((data) => {
            this.footerAction = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe((data) => {
            this.footerAction = true;
        });
    }
    get f() {
        return this.CreateEvent.controls;
    }
    ionViewDidEnter() {
        this.isEventApiCalled = false;
        this.storage.get('notificationArray').then((notificationArray) => {
            this.storage.get('msgUnread').then((value) => {
                // this.msgValue = value;
                this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('language' + lang);
                    if (lang == 'English') {
                        this.English = true;
                        this.topSearchPlaceHolder = 'Sports Category';
                        this.langSportNamePlaceHolder = 'Which sport?';
                        this.langAddressPlaceHolder = 'Address';
                        this.langDatePlaceHolder = 'Date / hour';
                        this.langDateCancelPlaceHolder = 'Cancel';
                        this.langDateDonePlaceHolder = 'Validate';
                        this.langParticipantsPlaceHolder = 'Participants max.';
                        this.langPricePlaceHolder = 'Cost';
                        this.langDescPlaceHolder = 'Add a description';
                        this.langMonthsPlaceHolder =
                            'jan,feb,mar,apr,may,june,july,aug,sept,oct,nov,dec';
                    }
                    else {
                        this.English = false;
                        this.topSearchPlaceHolder = 'Catégorie de sport';
                        this.langSportNamePlaceHolder = 'Quel sport?';
                        this.langAddressPlaceHolder = 'Adresse';
                        this.langDatePlaceHolder = 'Date / Heure';
                        this.langDateCancelPlaceHolder = 'annuler';
                        this.langDateDonePlaceHolder = 'Valider';
                        this.langParticipantsPlaceHolder = 'Participants max.';
                        this.langPricePlaceHolder = 'Cost';
                        this.langDescPlaceHolder = 'Ajouter une description';
                        this.langMonthsPlaceHolder =
                            'jan,fév,mar,avr,mai,juin,juil,août,sept,oct,nov,déc';
                    }
                }));
                this.storage.get('user_img').then((user_img) => {
                    if (user_img === undefined || user_img === null || user_img === '') {
                        this.Avatar = false;
                    }
                    else {
                        this.Avatar = true;
                        this.imgUrl = user_img;
                    }
                    // this.diagnostic.isGpsLocationEnabled().then((isAvailable) =>
                    // {
                    //   if(isAvailable===true){
                    this.storage.get('user_id').then((user_id) => {
                        this.api.checkNewNotificationUnread(user_id);
                        this.api.updateToken(user_id);
                        console.log(this.imgUrl);
                        console.log('above is image');
                        this.uid = user_id;
                        this.geolocation
                            .getCurrentPosition()
                            .then((resp) => {
                            var latitude = resp.coords.latitude;
                            // resp.coords.longitude
                            this.lat = latitude.toFixed(6);
                            var timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().unix();
                            console.log(timeStamp);
                            // resp.coords.latitude
                            var longitude = resp.coords.longitude;
                            this.long = longitude.toFixed(6);
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
                                //initialize map
                                this.testmap();
                                const formData = new FormData();
                                formData.append('user_id', this.uid);
                                formData.append('user_lat', this.lat);
                                formData.append('user_lon', this.long);
                                formData.append('user_timezone', userTimezone);
                                this.http
                                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                                    .subscribe((res) => {
                                    if (res.json().status == 1) {
                                        console.log(res);
                                    }
                                    else {
                                        console.log('location not updated');
                                    }
                                });
                            });
                            //set marker
                            this.setMarkers();
                            //initialize autosearch
                            this.mapsAPILoader.load().then(() => {
                                this.geoCoder = new google.maps.Geocoder();
                                setTimeout(() => {
                                    if (this.searchElementRef === undefined ||
                                        this.searchElementRef === null) {
                                        console.log('no action req.');
                                        this.setMarkers();
                                    }
                                    else {
                                        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                                        // types: ["(cities)"]
                                        });
                                        // autocomplete.addListener('place_changed', () => {
                                        //   // alert('place-changesdfd2');
                                        //   this.ngZone.run(() => {
                                        //     //get the place result
                                        //     let place: google.maps.places.PlaceResult =
                                        //       autocomplete.getPlace();
                                        //     //verify result
                                        //     if (
                                        //       place.geometry === undefined ||
                                        //       place.geometry === null
                                        //     ) {
                                        //       return;
                                        //     }
                                        //     this.placeName = place.formatted_address;
                                        //     //set latitude, longitude and zoom
                                        //     this.latitude = place.geometry.location.lat();
                                        //     this.longitude = place.geometry.location.lng();
                                        //     this.zoom = 16;
                                        //   });
                                        // });
                                        this.getAddress(this.lat, this.long);
                                        console.log(this.placeName);
                                        console.log(this.latitude);
                                        console.log(this.longitude);
                                    }
                                });
                            });
                        })
                            .catch((error) => {
                            console.log('Error getting location', error);
                            this.api.toast('Please Check your gps');
                        });
                    });
                    // }else{
                    //   this.api.toast("Please Turn On Location to proceed");
                    // }
                    //   }).catch((err)=>{
                    //     // alert(err);
                    //     console.log(err);
                    //     this.storage.get('user_id').then((user_id) => {
                    //       this.uid=user_id;
                    //       this.geolocation.getCurrentPosition().then((resp) => {
                    //         // resp.coords.latitude
                    //         var latitude=resp.coords.latitude
                    //         // resp.coords.longitude
                    //        this.lat= latitude.toFixed(6);
                    //         this.long=resp.coords.longitude;
                    //                  //initialize map
                    //                  var longitude = resp.coords.longitude;
                    //                  this.long = longitude.toFixed(6);
                    //                  this.testmap();
                    //                  const formData = new FormData();
                    //                  formData.append('user_id',this.uid);
                    //   formData.append('user_lat',this.lat);
                    //   formData.append('user_lon',this.long);
                    //   this.http.post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                    // .subscribe(res => {
                    //   if(res.json().status == 1){
                    //     console.log(res);
                    //   }else{
                    //     console.log("location not updated")
                    //   }
                    // });
                    // //set marker
                    // this.setMarkers();
                    //                  //initialize autosearch
                    //         this.mapsAPILoader.load().then(() => {
                    //         this.geoCoder = new google.maps.Geocoder;
                    //         setTimeout(() => {
                    //           if(this.searchElementRef===undefined||this.searchElementRef===null){
                    //             console.log("no action req.");
                    //             this.setMarkers();
                    //           }else{
                    //             let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                    //               // types: ["address"]
                    //             });
                    //             autocomplete.addListener("place_changed", () => {
                    //               this.ngZone.run(() => {
                    //                 //get the place result
                    //                 let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    //                 //verify result
                    //                 if (place.geometry === undefined || place.geometry === null) {
                    //                   return;
                    //                 }
                    //                 this.placeName=place.formatted_address;
                    //                 //set latitude, longitude and zoom
                    //                 this.latitude = place.geometry.location.lat();
                    //                 this.longitude = place.geometry.location.lng();
                    //                 this.zoom = 16;
                    //               });
                    //             });
                    //             this.getAddress(this.lat,this.long);
                    //             console.log(this.placeName)
                    //                       console.log(this.latitude)
                    //                       console.log(this.longitude)
                    //           }
                    //                 });
                    //               });
                    //        }).catch((error) => {
                    //          console.log('Error getting location', error);
                    //          if(this.English){
                    //           this.api.toast("Please Turn On Gps");
                    //         }else{
                    //           this.api.toast("Veuillez activer le GPS");
                    //         }
                    //        });
                    //       });
                    //   })
                });
            });
        });
    }
    searchFocus(event) {
        // this.footerAction = false;
    }
    rankingDetails() {
        console.log('test');
        this.api.Navigate('ranking');
    }
    cancelSearch(event) {
        // alert('asdf');
        this.footerAction = true;
        this.isEventApiCalled = false;
        this.setMarkers();
    }
    ionViewWillLeave() {
        this.searchTerm = '';
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
    ngOnInit() {
        this.storage.get('user_f_name').then((user_f_name) => {
            this.storage.get('user_l_name').then((user_l_name) => {
                this.storage
                    .get('user_sport_category')
                    .then((user_sport_category) => {
                    this.userfName = user_f_name;
                    this.userlName = user_l_name;
                    console.log(this.uid);
                    // set all events
                    this.todayDate = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
                    this.todayTime = moment__WEBPACK_IMPORTED_MODULE_5__().format('H:mm');
                    console.log(this.todayDate);
                    if (user_sport_category) {
                        this.userSportCategory = user_sport_category.split(',');
                    }
                });
            });
        });
    }
    viewProfile() {
        this.showList = false;
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        console.log('my event');
        if (this.uid === this.host_id) {
            this.api.Navigate('mon-profil');
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
    dateSelected() {
        // this.sTime.open();
        console.log(this.CreateEvent.value.event_date);
        this.time = moment__WEBPACK_IMPORTED_MODULE_5__(this.CreateEvent.value.event_date).format('H:mm');
        this.date = moment__WEBPACK_IMPORTED_MODULE_5__(this.CreateEvent.value.event_date).format('YYYY-MM-DD');
        console.log(this.time);
        console.log(this.date);
        if (this.date < this.todayDate) {
            if (this.English) {
                this.api.toast('Please Select Future Date');
            }
            else {
                this.api.toast('Veuillez sélectionner une date future');
            }
            this.date = '';
            this.time = '';
            this.CreateEvent.value.event_date = '';
        }
        else if (this.date == this.todayDate && this.time <= this.todayTime) {
            if (this.English) {
                this.api.toast('Please Select Future Time');
            }
            else {
                this.api.toast('Veuillez sélectionner Heure future');
            }
            this.date = '';
            this.time = '';
            this.CreateEvent.value.event_coach_date = '';
        }
    }
    timeSelected() {
        this.time = this.CreateEvent.value.eventTime;
        console.log(this.time);
    }
    showboxmethod() {
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        this.showbox = !this.showbox;
        setTimeout(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {});
            autocomplete.setOptions({
                // types: ['(cities)'],
                types: ['address'],
            });
            // autocomplete.addListener('place_changed', () => {
            //   // alert('asdf');
            //   this.ngZone.run(() => {
            //     //get the place result
            //     let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            //     //verify result
            //     if (place.geometry === undefined || place.geometry === null) {
            //       return;
            //     }
            //     this.placeName = place.formatted_address;
            //     //set latitude, longitude and zoom
            //     this.latitude = place.geometry.location.lat();
            //     this.longitude = place.geometry.location.lng();
            //     this.zoom = 16;
            //   });
            // });
            // console.log(this.myCustomComp) // prints {object}
        });
    }
    closeboxmethod() {
        this.creatform();
        this.footerAction = true;
        this.showbox = false;
    }
    creatform() {
        this.CreateEvent = this.formBuilder.group({
            // event: ['', Validators.required],
            event: [''],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            event_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            event_participants_max: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            event_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            event_discription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            event_sport_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            event_sport_id: [''],
            // eventTime: ['', Validators.required],
        });
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
            console.log(results);
            console.log(status);
            this.placeName = results[0].formatted_address;
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.placeName = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    readPage() {
        this.http.request('assets/images/coachIcon.png').subscribe((img) => {
            console.log('Hello' + img);
            return img;
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
    searchChange(event) {
        // alert('asdf');
        if (!this.searchTerm) {
            // alert('asdf');
            this.setMarkers();
        }
    }
    setMarkers(categoryName = undefined) {
        // alert('categoryName' + categoryName);
        setTimeout(() => { }, 10000);
        // this.api.loading();
        this.clearAllMarkers();
        const formData = new FormData();
        formData.append('book_user_id', this.uid);
        console.log(this.events.length);
        if (!this.isEventApiCalled) {
            // this.isEventApiCalled = true;
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/fields/event', formData)
                .subscribe((res) => {
                if (res.json().status == 1) {
                    console.log(res.json());
                    this.events = res.json().result;
                    console.log(this.events);
                    // CHECK IF event_type TYPE TO "1"
                    // GET user_map_img
                    if (res.json().notification_list == undefined ||
                        res.json().notification_list == null ||
                        res.json().notification_list.length == 0) {
                        this.notificationPresent = false;
                    }
                    else {
                        this.storage.set('notificationArray', res.json().notification_list);
                        this.storage
                            .get('notificationArray')
                            .then((notificationArray) => {
                            console.log(notificationArray);
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
                    }
                    // console.log(this.events);
                    // console.log("hey there");
                    // this.api.dismissLoading();
                    for (var i = 0; i < this.events.length; i++) {
                        // console.log('event category', this.events[i].spcat_name);
                        if (categoryName && this.events[i].spcat_name != categoryName)
                            continue;
                        // console.log('event', this.events[i]);
                        if (this.events[i].event_type === '1') {
                            if (this.events[i].event_individuals_lat === undefined ||
                                this.events[i].event_individuals_log === null) {
                            }
                            else {
                                var latitude = parseFloat(this.events[i].event_individuals_lat);
                                var longitude = parseFloat(this.events[i].event_individuals_log);
                                var myLatlng = new google.maps.LatLng(latitude, longitude);
                                if (!this.events[i].isFull) {
                                    var icon = {
                                        // url: 'assets/icone-eventblue.png', // url
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
                                    };
                                    this.events[i].isAvailable = false;
                                }
                                // this.map.addListener('click', function(e) {
                                // console.log(this.events[i].user_id, this.uid);
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
                                // marker.addListener('dragend', function (event) {
                                //   console.log(event);
                                //   this.latitude = event.latLng.lat();
                                //   console.log(this.latitude);
                                //   this.longitude = event.latLng.lng();
                                //   console.log(this.longitude);
                                // });
                                //marker click event
                                var self = this;
                                google.maps.event.addListener(this.markersArray[i], 'click', (function (marker, i) {
                                    return function () {
                                        self.detailArray = [];
                                        for (var j = 0; j < self.events.length; j++) {
                                            if (marker.index === self.events[i].event_id) {
                                                self.detailArray.push(self.events[i]);
                                                self.EUserfName = self.events[i].user_f_name;
                                                self.isAvailable = self.events[i].isAvailable;
                                                self.userLname = self.events[i].user_l_name.substring(0, 1);
                                                if (self.events[i].user_img === undefined ||
                                                    self.events[i].user_img === null ||
                                                    self.events[i].user_img === '') {
                                                    self.imgAvailable = false;
                                                }
                                                else {
                                                    self.imgAvailable = true;
                                                }
                                                self.userImg = self.events[i].user_img;
                                                self.spcat_name = self.events[i].spcat_name;
                                                self.userLocation =
                                                    self.events[i].event_individuals_address;
                                                self.userDate =
                                                    self.events[i].event_individuals_date;
                                                self.userTime = self.events[i].event_time;
                                                self.isBooked = self.events[i].isBooked;
                                                self.isFull = self.events[i].isFull;
                                                self.userTitle =
                                                    self.events[i].event_individuals_title;
                                                self.pricePerPerson =
                                                    self.events[i].event_individuals_price_per_person;
                                                self.userVerified = self.events[i].user_verified;
                                                self.host_id = self.events[i].user_id;
                                                self.evn_id = self.events[i].event_id;
                                                self.userdiscription =
                                                    self.events[i].event_individuals_discription;
                                                self.participants_max =
                                                    self.events[i].event_individuals_participants_max;
                                                self.participants_min =
                                                    self.events[i].event_individuals_participants_min;
                                                self.evn_type = self.events[i].event_type;
                                                self.userEventCardBoolean = true;
                                                console.log('CHECK HERE 1', self.events[i]);
                                                self.selectedEvent = self.events[i];
                                                return;
                                            }
                                            else {
                                                console.log('Didnt match!');
                                            }
                                        }
                                    };
                                })(this.markersArray[i], i));
                            }
                        }
                        else if (this.events[i].event_type === '2' ||
                            this.events[i].event_type === '3') {
                            if (this.events[i].event_coach_lat === undefined ||
                                this.events[i].event_coach_log === null) {
                                console.log(this.events[0]);
                            }
                            else {
                                var latitude = parseFloat(this.events[i].event_coach_lat);
                                var longitude = parseFloat(this.events[i].event_coach_log);
                                var myLatlng = new google.maps.LatLng(latitude, longitude);
                                var url = '';
                                url = this.events[i].coach_user_marker;
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
                                var icon = {
                                    url: url,
                                    scaledSize: new google.maps.Size(45, 45),
                                    origin: new google.maps.Point(0, 0), // origin
                                };
                                // console.log(this.events[i].event_id);
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
                                        console.log('marker.index', marker.index);
                                        self.detailArray = [];
                                        for (var j = 0; j < self.events.length; j++) {
                                            if (marker.index === self.events[i].event_id) {
                                                self.detailArray.push(self.events[i]);
                                                self.EUserfName = self.events[i].user_f_name;
                                                self.userLname = self.events[i].user_l_name.substring(0, 1);
                                                if (self.events[i].user_img === undefined ||
                                                    self.events[i].user_img === null ||
                                                    self.events[i].user_img === '') {
                                                    self.imgAvailable = false;
                                                }
                                                else {
                                                    self.imgAvailable = true;
                                                }
                                                self.isAvailable = self.events[i].isAvailable;
                                                self.isFull = self.events[i].isFull;
                                                console.log(self.isAvailable);
                                                console.log('CHECK HERE 2', self.events[i]);
                                                self.selectedEvent = self.events[i];
                                                self.spcat_name = self.events[i].spcat_name;
                                                self.userImg = self.events[i].user_img;
                                                self.userLocation =
                                                    self.events[i].event_coach_address;
                                                self.userDate = self.events[i].event_coach_date;
                                                self.userTime = self.events[i].event_time;
                                                self.isBooked = self.events[i].isBooked;
                                                self.userTitle = self.events[i].event_coach_title;
                                                self.pricePerPerson =
                                                    self.events[i].event_individuals_price_per_person;
                                                self.userVerified = self.events[i].user_verified;
                                                self.host_id = self.events[i].user_id;
                                                self.evn_id = self.events[i].event_id;
                                                self.userdiscription =
                                                    self.events[i].event_coach_discription;
                                                self.userMin =
                                                    self.events[i].event_coach_participants_min_required;
                                                self.participants_max =
                                                    self.events[i].event_coach_participants_max;
                                                self.participants_min =
                                                    self.events[i].event_coach_participants_min;
                                                if (self.events[i].event_coach_price_hour != '0') {
                                                    self.coachPrice =
                                                        self.events[i].event_coach_price_hour;
                                                    self.HourPrice = true;
                                                }
                                                else if (self.events[i].event_coach_price_person != '0') {
                                                    self.coachPrice =
                                                        self.events[i].event_coach_price_person;
                                                    self.HourPrice = false;
                                                }
                                                self.evn_type = self.events[i].event_type;
                                                self.coachEventCardBoolean = true;
                                                return;
                                            }
                                            else {
                                                console.log('Didnt match!');
                                            }
                                        }
                                    };
                                })(this.markersArray[i], i));
                                //   });
                                // });
                            }
                        }
                    }
                }
                else {
                }
            });
        }
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
    closeDetailsBox() {
        this.showList = false;
        if (this.userEventCardBoolean === true) {
            this.userEventCardBoolean = false;
        }
        else if (this.coachEventCardBoolean === true) {
            this.coachEventCardBoolean = false;
            this.HourPrice = false;
        }
    }
    profile() {
        this.showList = false;
        this.subMenuList = false;
        this.api.Navigate('mon-profil');
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
    sportsTab() {
        this.showList = false;
        if (this.subMenuList === true) {
            this.subMenuList = false;
            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.api.Navigate('map-sportifs');
        }
        else {
            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.api.Navigate('map-sportifs');
        }
    }
    logout() {
        this.showList = false;
        this.subMenuList = false;
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
    hideFooter() {
        console.log('this works');
        this.footerAction = false;
    }
    onSubmit() {
        console.log('working');
        this.submitted = true;
        // stop here if form is invalid
        if (this.CreateEvent.invalid) {
            return;
        }
        else {
            this.createevent();
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
                if (this.English) {
                    var msg = 'Event Deleted';
                }
                else {
                    var msg = 'événement supprimé';
                }
                this.api.toast(msg);
                if ((this.userEventCardBoolean = true)) {
                    this.userEventCardBoolean = false;
                    this.loadData();
                }
                else if ((this.coachEventCardBoolean = true)) {
                    this.coachEventCardBoolean = false;
                    this.loadData();
                }
                // this.loadData();
            }
            else {
                console.log(res + 'Error');
            }
        });
    }
    textChange() {
        if (this.CreateEvent.value.event === '' ||
            this.placeName === '' ||
            this.CreateEvent.value.event_participants_max === '' ||
            this.CreateEvent.value.event_discription === '' ||
            this.date === '' ||
            this.time === '') {
            if (this.date === '' || this.time === '') {
                this.api.toast('Please Select Future Date');
            }
            this.formFilled = false;
        }
        else {
            this.formFilled = true;
        }
    }
    createevent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.api.loading();
            console.log(this.CreateEvent.value.eventTime);
            //  var event_time=moment(this.CreateEvent.value.eventTime).format("H:mm");
            const formData = new FormData();
            formData.append('user_id', this.uid);
            formData.append('event_type', '1');
            formData.append('user_f_name', this.userfName);
            formData.append('user_l_name', this.userlName);
            formData.append('user_img', this.imgUrl);
            formData.append('event_individuals_date', this.date);
            formData.append('event_individuals_price_per_person', this.CreateEvent.value.event_price);
            formData.append('event_individuals_participants_max', this.CreateEvent.value.event_participants_max);
            formData.append('event_individuals_participants_min', '0');
            formData.append('event_individuals_title', this.CreateEvent.value.event);
            formData.append('event_individuals_address', this.placeName);
            formData.append('event_time', this.time);
            formData.append('event_individuals_discription', this.CreateEvent.value.event_discription);
            formData.append('event_individuals_lat', this.latitude.toString());
            formData.append('event_individuals_log', this.longitude.toString());
            formData.append(
            // 'event_sport_id',
            'event_sport_cate', this.CreateEvent.value.event_sport_id.toString());
            if (this.CreateEvent.value.event_sport_name) {
            }
            // formData.append(
            //   'event_sport_cate',
            //   this.CreateEvent.value.event_sport_name.toString()
            // );
            else {
                formData.append('event_sport_cate', '');
            }
            console.log(this.CreateEvent.value.event);
            console.log(this.CreateEvent.value.event_discription);
            console.log(this.CreateEvent.value.event_date);
            console.log(this.CreateEvent.value.event_participants_max);
            console.log(this.placeName);
            console.log(this.latitude);
            console.log(this.longitude);
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/madd/event', formData)
                .subscribe((res) => {
                this.api.dismissLoading();
                if (res.json().status == 1) {
                    this.showbox = false;
                    this.footerAction = true;
                    this.submitted = false;
                    // this.api.toast(res.msg);
                    this.isEventApiCalled = false;
                    this.setMarkers();
                    this.creatform();
                }
                else {
                    // this.creatform();
                    //  this.api.toast(res.msg)
                }
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
            //  styles: [{
            //   stylers: [{
            //     saturation: -100
            //   }]
            // }],
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
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var self = this;
        this.map.addListener('click', function () {
            if (self.subMenuList === true) {
                self.subMenuList = false;
            }
        });
    }
    eventdetails() {
        this.showList = false;
        this.subMenuList = false;
        this.userEventCardBoolean = false;
        this.coachEventCardBoolean = false;
        this.api.Navigate('mes-evenements');
    }
    addressInput() {
        document.getElementById('addInput').classList.remove('addressInput');
        document.getElementById('addInput').classList.add('AddressInput');
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
    bookEvent() {
        this.isBooked = true;
        var today = new Date();
        var format = moment__WEBPACK_IMPORTED_MODULE_5__(today).format('YYYY-MM-DD');
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
                if (res.json().msg == "En attente d'approbation") {
                    if (this.English) {
                        var msg = 'Your request has been sent.';
                    }
                    else {
                        var msg = 'Votre demande a bien été envoyée.';
                    }
                    this.userEventCardBoolean = false;
                    this.coachEventCardBoolean = false;
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
                this.userEventCardBoolean = false;
                this.coachEventCardBoolean = false;
                this.loadData();
            }
            else {
                console.log(res.json());
            }
        });
    }
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
            if (this.English) {
                const actionSheet = yield this.actionSheetController.create({
                    header: 'Select a source',
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
                const actionSheet = yield this.actionSheetController.create({
                    header: 'Sélectionner une source',
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
                                    var msg = 'Information partagée avec succès!';
                                    this.api.toast(msg);
                                })
                                    .catch(() => {
                                    // Error!
                                });
                            },
                        },
                        {
                            text: 'Email',
                            icon: 'mail',
                            handler: () => {
                                this.socialSharing
                                    .canShareViaEmail()
                                    .then(() => {
                                    // Sharing via email is possible
                                    this.storage.get('user_email').then((user_email) => {
                                        this.uEmail = user_email;
                                    });
                                })
                                    .catch((err) => {
                                    // Sharing via email is not possible
                                    alert(err);
                                });
                                // Share via email
                                this.socialSharing
                                    .shareViaEmail(msg, 'hubtosport', [this.uEmail])
                                    .then(() => {
                                    // Success!
                                })
                                    .catch((err) => {
                                    // Error!
                                    alert(err);
                                });
                            },
                        },
                        {
                            text: 'Annuler',
                            icon: 'close',
                            role: 'cancel',
                        },
                    ],
                });
                yield actionSheet.present();
            }
        });
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
                            cssClass: 'secondary',
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
                            '. on this event?',
                        buttons: [
                            {
                                text: 'YES',
                                handler: () => {
                                    console.log('Confirm Okay');
                                    this.bookEvent();
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
            }
        });
    }
    loadData() {
        this.testmap();
        this.setMarkers();
    }
    searchSportCategoryFunc(ev) {
        var arr = [];
        for (let i = 0; i < this.sportsList.length; i++) {
            var input = this.sportsList[i];
            arr.push(input);
            let val = ev.target.value;
            // alert(typeof(val));
            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                // Filter the items
                this.searchName = arr.filter(function (item) {
                    return item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
                this.searchName.slice(0, 10);
                // Show the results
                if (this.searchName.length !== 0) {
                    this.showContList = true;
                }
                else {
                    this.showContList = false;
                }
            }
            else {
                // hide the results when the query is empty
                this.showContList = false;
            }
            // console.log(arr);
        }
    }
    selectSportCategory(item) {
        console.log(item);
        // this.countryId= item.con_id;
        // this.country = item.con_name;
        this.CreateEvent.patchValue({ event_sport_name: item.spcat_name });
        this.CreateEvent.patchValue({ event_sport_id: item.spcat_id });
        // alert(item.spcat_id);
        // this.registerForm.patchValue({country:this.country})
        this.showContList = false;
        return;
    }
    searchEvent(ev) {
        console.log('SPORTS LIST', this.sportsList);
        var arr = [];
        for (let i = 0; i < this.sportsList.length; i++) {
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
                    item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
                // hide the results when the query is empty
                this.showList = false;
            }
            // console.log(arr);
        }
    }
    selectItem(item) {
        console.log('select item');
        this.searchTerm = item.spcat_name;
        console.log(item);
        console.log(this.searchTerm);
        // console.log('events list', this.events);
        this.showList = false;
        //
        this.isEventApiCalled = false;
        this.setMarkers(this.searchTerm);
        // CLEAR MAP
        // item.spcat_name compare to this.event[].spcat_name
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
            this.userTitle = item.event_sport_cate;
            this.pricePerPerson = item.event_individuals_price_per_person;
            this.userVerified = item.user_verified;
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
            this.userTitle = item.event_sport_cate;
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
                                    formData.append('event_individuals_address', eventAddress);
                                    formData.append('event_individuals_lat', lat.toString());
                                    formData.append('event_cevent_individuals_logoach_log', lng.toString());
                                    this.http
                                        .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/event', formData)
                                        .subscribe((res) => {
                                        if (res) {
                                            const response = res.json();
                                            if (response.status == 1) {
                                                this.isEventApiCalled = false;
                                                this.ionViewDidEnter();
                                            }
                                        }
                                    });
                                },
                            },
                            {
                                text: 'NO',
                                role: 'cancel',
                                cssClass: 'secondary',
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
                        message: `
            Voulez-vous vraiment mettre à jour cet emplacement de l'événement en ${eventAddress} ?`,
                        buttons: [
                            {
                                text: 'OUI',
                                handler: () => {
                                    console.log('Confirm Okay');
                                    const formData = new FormData();
                                    formData.append('event_id', eventId);
                                    formData.append('event_individuals_address', eventAddress);
                                    formData.append('event_individuals_lat', lat.toString());
                                    formData.append('event_cevent_individuals_logoach_log', lng.toString());
                                    this.http
                                        .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/event', formData)
                                        .subscribe((res) => {
                                        if (res) {
                                            const response = res.json();
                                            if (response.status == 1) {
                                                this.isEventApiCalled = false;
                                                this.ionViewDidEnter();
                                            }
                                        }
                                    });
                                },
                            },
                            {
                                text: 'NON',
                                role: 'cancel',
                                cssClass: 'secondary',
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
CreerEvenementPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_13__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_15__.MapsAPILoader },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_9__.TranslateConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_17__.Storage },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.NgZone },
    { type: _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ActionSheetController },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__.Screenshot },
    { type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__.Diagnostic }
];
CreerEvenementPage.propDecorators = {
    searchElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ['search', { static: false },] }]
};
CreerEvenementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-creer-evenement',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_creer_evenement_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_creer_evenement_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router,
        _angular_http__WEBPACK_IMPORTED_MODULE_13__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient,
        _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation,
        _agm_core__WEBPACK_IMPORTED_MODULE_15__.MapsAPILoader,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_9__.TranslateConfigService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_17__.Storage,
        _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController,
        _angular_core__WEBPACK_IMPORTED_MODULE_18__.NgZone,
        _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__.Keyboard,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ActionSheetController,
        _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__.Screenshot,
        _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__.Diagnostic])
], CreerEvenementPage);



/***/ }),

/***/ 58575:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/creer-evenement/creer-evenement.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"map-content\">\n  <div class=\"map-block\">\n    <ion-grid class=\"map-search-box\">\n      <ion-row\n        class=\"map-search-withrow\"\n        style=\"display: flex; flex-direction: row; align-items: center\"\n      >\n        <ion-col size=\"10\">\n          <div class=\"search-box\">\n            <ion-searchbar\n              class=\"ion-no-padding\"\n              showCancelButton=\"always\"\n              (ionCancel)=\"cancelSearch($event)\"\n              (ionClear)=\"cancelSearch($event)\"\n              (ionFocus)=\"searchFocus($event)\"\n              (ionInput)=\"searchEvent($event)\"\n              placeholder=\"{{topSearchPlaceHolder}}\"\n              [(ngModel)]=\"searchTerm\"\n              (ionChange)=\"searchChange($event)\"\n            ></ion-searchbar>\n          </div>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding-top: 0\">\n          <!-- <div class=\"search-profile-box\" style=\"margin-right: 15%;\" (click)=\"subMenu()\"> -->\n\n          <ion-avatar\n            (click)=\"subMenu()\"\n            style=\"display: flex; align-items: center\"\n          >\n            <ion-img style=\"width: 50px; height: 50px\" [src]=\"imgUrl\"></ion-img>\n          </ion-avatar>\n\n          <!-- </div> -->\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"showList\">\n        <ion-list>\n          <ion-item *ngFor=\"let item of search\" (click)=\"selectItem(item)\">\n            <ion-text>\n              <!-- {{item.event_coach_title}} -->\n\n              <ng-container>{{item.spcat_name}}</ng-container>\n            </ion-text>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <!-- Side menu Options -->\n\n      <ion-row\n        *ngIf=\"subMenuList\"\n        style=\"display: flex; flex-direction: row-reverse\"\n      >\n        <ion-list>\n          <ion-item (click)=\"profile()\">\n            <ion-label [translate]=\"'CREEREVENT.Text1'\"></ion-label>\n          </ion-item>\n          <ion-item (click)=\"myAcc()\">\n            <ion-label [translate]=\"'CREEREVENT.Text2'\"></ion-label>\n          </ion-item>\n          <ion-item (click)=\"settings()\">\n            <ion-label [translate]=\"'CREEREVENT.Text3'\"></ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" (click)=\"logout()\">\n            <ion-label [translate]=\"'CREEREVENT.Text4'\"></ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Create Event Box For user -->\n    <div class=\"map-det-popup left\" *ngIf=\"showbox\">\n      <ion-card class=\"det-card\">\n        <ion-card-header style=\"padding-bottom: 5px\">\n          <div class=\"det-head-withimg\">\n            <div class=\"det-head-txt\">\n              <b\n                class=\"popup\"\n                style=\"color: #d3c117\"\n                [translate]=\"'CREEREVENT.Text5'\"\n              ></b>\n            </div>\n            <div class=\"det-close\" (click)=\"closeboxmethod()\">\n              <ion-icon name=\"close\"></ion-icon>\n            </div>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"det-card-content\">\n          <form [formGroup]=\"CreateEvent\" (ngSubmit)=\"onSubmit()\">\n            <ion-list>\n              <ion-row class=\"create-input-row\">\n                <img\n                  src=\"../../assets/images/running.png\"\n                  class=\"left-createicon\"\n                />\n\n                <!-- // ADD AUTO SUGGESTION -->\n                <!-- http://fitconnected.prometteur.in/index.php/Api/fields/sport_categories -->\n                <!-- formControlName=\"event\" -->\n                <ion-input\n                  (ionInput)=\"searchSportCategoryFunc($event)\"\n                  formControlName=\"event_sport_name\"\n                  placeholder=\"{{langSportNamePlaceHolder}}\"\n                  required\n                  class=\"ion-no-padding\"\n                ></ion-input>\n              </ion-row>\n\n              <div *ngIf=\"showContList\">\n                <ion-item\n                  lines=\"none\"\n                  *ngFor=\"let filteredSport of searchName\"\n                  (click)=\"selectSportCategory(filteredSport)\"\n                >\n                  <!-- <ion-text style=\"color: white;\">{{city.con_name}}</ion-text> -->\n                  <ion-text style=\"color: black; font-weight: bold\"\n                    >{{filteredSport.spcat_name}}</ion-text\n                  >\n                </ion-item>\n              </div>\n\n              <div\n                *ngIf=\"submitted && f.event.errors\"\n                class=\"invalid-feedback left\"\n              >\n                <div\n                  *ngIf=\"f.event.errors.required\"\n                  [translate]=\"'CREEREVENT.Text6'\"\n                ></div>\n              </div>\n              <ion-row class=\"create-input-row\" id=\"addressfield\">\n                <img\n                  src=\"assets/images/unselectedlocation.png\"\n                  width=\"20px\"\n                  class=\"left-createicon\"\n                />\n                <input\n                  style=\"\n                    width: 100%;\n                    margin-bottom: 15px;\n                    color: #b8b8b8;\n                    border: none;\n                    border-bottom: 1px solid #ccccccb5;\n                  \"\n                  class=\"ion-no-padding\"\n                  oninput=\"addressInput()\"\n                  formControlName=\"address\"\n                  name=\"address\"\n                  type=\"text\"\n                  class=\"form-control addressInput\"\n                  (keydown.enter)=\"$event.preventDefault()\"\n                  placeholder=\"{{langAddressPlaceHolder}}\"\n                  autocorrect=\"off\"\n                  autocapitalize=\"off\"\n                  spellcheck=\"off\"\n                  #search\n                />\n\n                <!-- <ion-input formControlName=\"address\"  placeholder=\"Address\" type=\"text\" name=\"address\" class=\"ion-no-padding\"></ion-input> -->\n              </ion-row>\n              <div\n                *ngIf=\"submitted && f.address.errors\"\n                class=\"invalid-feedback left\"\n              >\n                <div\n                  *ngIf=\"f.address.errors.required\"\n                  [translate]=\"'CREEREVENT.Text6'\"\n                ></div>\n              </div>\n              <ion-row class=\"create-input-row\" style=\"margin-bottom: 7%\">\n                <img\n                  src=\"../../assets/images/calendar.png\"\n                  class=\"left-createicon\"\n                />\n                <!-- <ion-input formControlName=\"event_date\" (ionChange)=\"dateSelected()\"  placeholder=\"Date / Heure\" type=\"date\" name=\"event_date\" class=\"ion-no-padding\"></ion-input> -->\n                <ion-datetime\n                  *ngIf=\"English\"\n                  displayFormat=\"DD MMM YYYY H:mm\"\n                  pickerFormat=\"DD MMM YY H:mm\"\n                  placeholder=\"{{langDatePlaceHolder}}\"\n                  min=\"2020\"\n                  max=\"2030\"\n                  formControlName=\"event_date\"\n                  (ionChange)=\"dateSelected()\"\n                  class=\"ion-no-padding\"\n                  style=\"\n                    border-bottom: 1px solid #ccccccb5;\n                    width: 100%;\n                    font-weight: bold;\n                    color: #b8b8b8;\n                    --placeholder-font-weight: bold;\n                    --placeholder-color: #b8b8b8;\n                  \"\n                  monthShortNames=\"jan,feb,mar,apr,may,june,july,aug,sept,oct,nov,dec\"\n                  cancelText=\"Cancel\"\n                  doneText=\"Done\"\n                >\n                  <!-- <ion-text>{{time}}</ion-text>  -->\n                </ion-datetime>\n                <ion-datetime\n                  *ngIf=\"!English\"\n                  displayFormat=\"DD MMM YYYY H:mm\"\n                  pickerFormat=\"DD MMM YY H:mm\"\n                  placeholder=\"{{langDatePlaceHolder}}\"\n                  min=\"2020\"\n                  max=\"2030\"\n                  formControlName=\"event_date\"\n                  (ionChange)=\"dateSelected()\"\n                  class=\"ion-no-padding\"\n                  style=\"\n                    border-bottom: 1px solid #ccccccb5;\n                    width: 100%;\n                    font-weight: bold;\n                    color: #b8b8b8;\n                    --placeholder-font-weight: bold;\n                    --placeholder-color: #b8b8b8;\n                  \"\n                  monthShortNames=\"jan,fév,mar,avr,mai,juin,juil,août,sept,oct,nov,déc\"\n                  cancelText=\"annuler\"\n                  doneText=\"Valider\"\n                >\n                  <!-- <ion-text>{{time}}</ion-text>  -->\n                </ion-datetime>\n                <!-- <ion-datetime #dateTime style=\"display:none\" displayFormat=\"H:mm\" pickerFormat=\"H:mm\" formControlName=\"eventTime\"\n                (ionChange)=\"timeSelected()\"></ion-datetime> -->\n              </ion-row>\n\n              <div\n                *ngIf=\"submitted && f.event_date.errors\"\n                class=\"invalid-feedback left\"\n              >\n                <div\n                  *ngIf=\"f.event_date.errors.required\"\n                  [translate]=\"'CREEREVENT.Text6'\"\n                ></div>\n              </div>\n              <ion-row class=\"create-input-row\">\n                <img\n                  src=\"../../assets/images/user.png\"\n                  class=\"left-createicon\"\n                />\n                <ion-input\n                  formControlName=\"event_participants_max\"\n                  type=\"number\"\n                  placeholder=\"{{langParticipantsPlaceHolder}}\"\n                  name=\"event_participants_max\"\n                  class=\"ion-no-padding\"\n                >\n                </ion-input>\n              </ion-row>\n              <div\n                *ngIf=\"submitted && f.event_participants_max.errors\"\n                class=\"invalid-feedback left\"\n              >\n                <div\n                  *ngIf=\"f.event_participants_max.errors.required\"\n                  [translate]=\"'CREEREVENT.Text6'\"\n                ></div>\n              </div>\n\n              <ion-row class=\"create-input-row\">\n                <img\n                  style=\"width: 6%\"\n                  src=\"../../assets/price.png\"\n                  class=\"left-createicon\"\n                />\n                <ion-input\n                  formControlName=\"event_price\"\n                  type=\"number\"\n                  placeholder=\"{{langPricePlaceHolder}}\"\n                  name=\"event_participants_max\"\n                  class=\"ion-no-padding\"\n                ></ion-input>\n              </ion-row>\n              <div\n                *ngIf=\"submitted && f.event_price.errors\"\n                class=\"invalid-feedback left\"\n              >\n                <div\n                  *ngIf=\"f.event_price.errors.required\"\n                  [translate]=\"'CREEREVENT.Text6'\"\n                ></div>\n              </div>\n              <!-- <ion-row class=\"create-input-row\">\n                <img src=\"../../assets/images/filter.svg\" class=\"left-createicon\" />\n                <ion-select placeholder=\"{{'EVENTMENTCOACH.Text8' | translate}}\" style=\"width: 100%;\"\n                  formControlName=\"event_sport_name\">\n                  <ion-select-option *ngFor=\"let userSport of userSportCategory\" value=\"{{userSport}}\">{{userSport}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-row> -->\n              <div\n                *ngIf=\"submitted && f.event_sport_name.errors\"\n                class=\"invalid-feedback left\"\n              >\n                <div *ngIf=\"f.event_sport_name.errors.required\">\n                  {{'EVENTMENTCOACH.Text8' | translate}}\n                  {{'EVENTMENTCOACH.Text9' | translate}}\n                </div>\n              </div>\n              <ion-row>\n                <ion-textarea\n                  (ionChange)=\"textChange()\"\n                  formControlName=\"event_discription\"\n                  name=\"event_discription\"\n                  class=\"global-txtarea\"\n                  cols=\"3\"\n                  rows=\"2\"\n                  placeholder=\"{{langDescPlaceHolder}}\"\n                ></ion-textarea>\n              </ion-row>\n            </ion-list>\n            <div class=\"buttonbox-cardouter\">\n              <button\n                type=\"submit\"\n                ion-button\n                class=\"global-submit-button global-btn\"\n                style=\"background-color: #d3c117; color: white\"\n                [translate]=\"'CREEREVENT.Text8'\"\n              ></button>\n            </div>\n          </form>\n        </ion-card-content>\n        <ion-footer class=\"det-card-footer\"> </ion-footer>\n      </ion-card>\n    </div>\n\n    <!-- User Event Card -->\n\n    <div class=\"map-det-popup left\" *ngIf=\"userEventCardBoolean\">\n      <ion-card class=\"det-card\" style=\"border-radius: 12px\">\n        <ion-row\n          style=\"\n            border-bottom-style: solid;\n            border-bottom-color: #929292;\n            border-bottom-width: 0.5px;\n            margin-top: 5%;\n          \"\n        >\n          <ion-col\n            [size]=\"2\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n            (click)=\"viewProfile()\"\n          >\n            <img\n              *ngIf=\"!imgAvailable\"\n              style=\"border-radius: 53%\"\n              src=\"assets/images/profile-img2.jpg\"\n            />\n            <ion-avatar\n              style=\"display: flex; align-items: center\"\n              *ngIf=\"imgAvailable\"\n            >\n              <ion-img\n                style=\"width: 50px; height: 50px\"\n                [src]=\"userImg\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col\n            [size]=\"8\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n          >\n            <ion-row\n              style=\"\n                color: #d3c117;\n                font-size: 18px;\n                font-family: Open Sans-bold;\n              \"\n              (click)=\"viewProfile()\"\n            >\n              {{EUserfName | titlecase}} {{userLname | titlecase}}.\n            </ion-row>\n            {{this.selectedEvent.spcat_name}}\n            <!-- <ion-row> {{userTitle | titlecase}} </ion-row> -->\n            <ion-row *ngIf=\"userVerified && evn_type!='1'\">\n              <img\n                src=\"assets/images/tickicon.svg\"\n                style=\"width: 18px !important; margin-right: 2%\"\n              />\n              {{'CREEREVENT.Text21' | translate}}\n              <!-- {{evn_type}} -->\n            </ion-row>\n          </ion-col>\n          <ion-col\n            [size]=\"2\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n          >\n            <div class=\"det-close\" (click)=\"closeDetailsBox()\">\n              <ion-icon name=\"close\" size=\"large\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-card-content class=\"evenement-card-content ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-row>\n              <!-- <div class=\"iconswith-row\" *ngIf=\"this.selectedEvent\">\n                <img\n                  src=\"../../assets/images/create-coach-img1.png\"\n                  class=\"location-img\"\n                />\n                <b style=\"color: black\" class=\"details-box\"\n                  >{{this.selectedEvent.spcat_name}}</b\n                >\n              </div> -->\n              <div class=\"iconswith-row\">\n                <img src=\"../../assets/images/pin.png\" class=\"location-img\" />\n                <div class=\"details-box\">{{userLocation}}</div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/time.png\" class=\"time-img\" />\n                <div class=\"details-box\">{{userDate}} - {{userTime}}</div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/people.png\" class=\"time-img\" />\n                <div class=\"details-box\" [translate]=\"'CREEREVENT.Text9'\">\n                  {{participants_min}}/{{participants_max}}\n                </div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/money-bag.png\" class=\"time-img\" />\n                <div class=\"details-box\" [translate]=\"'CREEREVENT.Text9'\">\n                  {{pricePerPerson}}\n                </div>\n              </div>\n            </ion-row>\n          </ion-list>\n        </ion-card-content>\n        <ion-row\n          *ngIf=\"uid!==host_id\"\n          style=\"display: flex; flex-direction: row\"\n        >\n          <ion-col size=\"6\">\n            <ion-button\n              [disabled]=\"!isAvailable || isBooked || isFull\"\n              style=\"--border-radius: 52px; --background: #d3c117; width: 90%\"\n              (click)=\"presentAlertBooking()\"\n              [translate]=\"'CREEREVENT.Text10'\"\n            >\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"--border-radius: 52px; --background: #708aaa; width: 90%\"\n              (click)=\"takeScreenshot()\"\n            >\n              <img\n                style=\"width: 18%\"\n                src=\"assets/images/share.png\"\n                class=\"time-img\"\n              />\n              <ion-text\n                style=\"margin-left: 5%\"\n                [translate]=\"'CREEREVENT.Text11'\"\n              >\n              </ion-text>\n            </ion-button>\n          </ion-col>\n\n          <!-- <ion-icon name=\"arrow-redo-outline\"></ion-icon> -->\n        </ion-row>\n        <ion-row\n          *ngIf=\"uid===host_id\"\n          style=\"display: flex; flex-direction: row\"\n        >\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"\n                --border-radius: 52px;\n                --background: #d3c117;\n                color: white;\n                width: 90%;\n                font-weight: bold;\n              \"\n              (click)=\"presentAlertConfirm()\"\n              [translate]=\"'CREEREVENT.Text12'\"\n            >\n              <!-- <ion-icon name=\"arrow-redo-outline\"></ion-icon> -->\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"\n                --border-radius: 52px;\n                --background: #708aaa;\n                color: white;\n                width: 90%;\n              \"\n              (click)=\"takeScreenshot()\"\n            >\n              <img\n                style=\"width: 18%\"\n                src=\"assets/images/share.png\"\n                class=\"time-img\"\n              />\n              <ion-text\n                style=\"margin-left: 5%; font-weight: bold\"\n                [translate]=\"'CREEREVENT.Text11'\"\n              >\n              </ion-text>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          style=\"\n            margin-top: 5%;\n            margin-top: 5%;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n          [translate]=\"'CREEREVENT.Text13'\"\n        >\n        </ion-row>\n        <ion-row\n          style=\"\n            margin-top: 5%;\n            margin-left: 5%;\n            display: flex;\n            justify-content: flex-start;\n            padding-bottom: 4%;\n            width: 80%;\n          \"\n        >\n          {{userdiscription}}\n        </ion-row>\n        <ion-row\n          *ngIf=\"!userVerified\"\n          style=\"\n            margin-top: 5%;\n            margin-left: 5%;\n            display: flex;\n            justify-content: center;\n            padding-bottom: 4%;\n            color: red;\n          \"\n        >\n          {{'CREEREVENT.Text22' | translate}}\n        </ion-row>\n      </ion-card>\n    </div>\n\n    <!-- coach event card -->\n    <div class=\"map-det-popup left\" *ngIf=\"coachEventCardBoolean\">\n      <ion-card class=\"det-card\" style=\"border-radius: 12px\">\n        <ion-row\n          style=\"\n            border-bottom-style: solid;\n            border-bottom-color: #929292;\n            border-bottom-width: 0.5px;\n            margin-top: 5%;\n          \"\n        >\n          <ion-col\n            [size]=\"2\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n            (click)=\"viewProfile()\"\n          >\n            <img\n              *ngIf=\"!imgAvailable\"\n              style=\"border-radius: 53%\"\n              src=\"assets/images/profile-img2.jpg\"\n            />\n            <ion-avatar\n              style=\"display: flex; align-items: center\"\n              *ngIf=\"imgAvailable\"\n            >\n              <ion-img\n                style=\"width: 50px; height: 50px\"\n                [src]=\"userImg\"\n              ></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col\n            [size]=\"8\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n          >\n            <ion-row\n              style=\"\n                color: #d3c117;\n                font-size: 18px;\n                font-family: Open Sans-bold;\n              \"\n              (click)=\"viewProfile()\"\n            >\n              <img\n                src=\"assets/images/Star.svg\"\n                style=\"width: 7%\"\n                class=\"time-img\"\n              />\n              {{EUserfName | titlecase}} {{userLname | titlecase}}. (Coach) </ion-row\n            >{{this.selectedEvent.spcat_name}}\n            <!-- <ion-row> {{userTitle | titlecase}} </ion-row> -->\n          </ion-col>\n          <ion-col\n            [size]=\"2\"\n            style=\"\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            \"\n          >\n            <div class=\"det-close\" (click)=\"closeDetailsBox()\">\n              <ion-icon name=\"close\" size=\"large\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-card-content class=\"evenement-card-content ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-row>\n              <!-- <div class=\"iconswith-row\">\n                <img\n                  src=\"../../assets/images/create-coach-img1.png\"\n                  class=\"location-img\"\n                />\n                <b style=\"color: black\" class=\"details-box\"\n                  >{{this.selectedEvent.spcat_name}}</b\n                >\n              </div> -->\n              <div class=\"iconswith-row\">\n                <img src=\"../../assets/images/pin.png\" class=\"location-img\" />\n                <div class=\"details-box\">{{userLocation}}</div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/time.png\" class=\"time-img\" />\n                <div class=\"details-box\">{{userDate}} - {{userTime}}</div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/people.png\" class=\"time-img\" />\n                <div class=\"details-box\" [translate]=\"'CREEREVENT.Text9'\">\n                  {{participants_min}}/{{participants_max}}\n                </div>\n              </div>\n              <div class=\"iconswith-row\">\n                <img src=\"assets/images/money-bag.png\" class=\"time-img\" />\n                <div class=\"details-box\" [translate]=\"'CREEREVENT.Text15'\">\n                  <p *ngIf=\"HourPrice\" [translate]=\"'CREEREVENT.Text16'\">\n                    &nbsp;\n                  </p>\n                  <p *ngIf=\"!HourPrice\" [translate]=\"'CREEREVENT.Text17'\">\n                    &nbsp;\n                  </p>\n                  {{coachPrice | currency:'EUR':true}} (Minimum: {{userMin}})\n                </div>\n              </div>\n            </ion-row>\n          </ion-list>\n        </ion-card-content>\n        <ion-row\n          *ngIf=\"uid!==host_id\"\n          style=\"display: flex; flex-direction: row\"\n        >\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"--border-radius: 52px; --background: #d3c117; width: 90%\"\n              (click)=\"takeScreenshot()\"\n            >\n              <img\n                style=\"width: 18%\"\n                src=\"assets/images/share.png\"\n                class=\"time-img\"\n              />\n              <ion-text\n                style=\"margin-left: 5%\"\n                [translate]=\"'CREEREVENT.Text11'\"\n              >\n              </ion-text>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              [disabled]=\"!isAvailable || isBooked || isFull\"\n              style=\"--border-radius: 52px; --background: #708aaa; width: 90%\"\n              (click)=\"presentAlertBooking()\"\n              [translate]=\"'CREEREVENT.Text10'\"\n            >\n              <!-- <ion-icon name=\"arrow-redo-outline\"></ion-icon> -->\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          *ngIf=\"uid===host_id\"\n          style=\"display: flex; flex-direction: row\"\n        >\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"--border-radius: 52px; --background: #d3c117; width: 90%\"\n              (click)=\"takeScreenshot()\"\n            >\n              <img\n                style=\"width: 18%\"\n                src=\"assets/images/share.png\"\n                class=\"time-img\"\n              />\n              <ion-text\n                style=\"margin-left: 5%\"\n                [translate]=\"'CREEREVENT.Text11'\"\n              >\n              </ion-text>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              style=\"\n                --border-radius: 52px;\n                background-color: #708aaa;\n                width: 90%;\n              \"\n              (click)=\"presentAlertConfirm()\"\n              [translate]=\"'CREEREVENT.Text12'\"\n            >\n              <!-- <ion-icon name=\"arrow-redo-outline\"></ion-icon> -->\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          style=\"\n            margin-top: 5%;\n            margin-top: 5%;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n          [translate]=\"'CREEREVENT.Text13'\"\n        >\n        </ion-row>\n        <ion-row\n          style=\"\n            margin-top: 5%;\n            margin-left: 5%;\n            display: flex;\n            justify-content: flex-start;\n            padding-bottom: 4%;\n            width: 80%;\n          \"\n        >\n          {{userdiscription}}\n        </ion-row>\n      </ion-card>\n    </div>\n\n    <div class=\"google-map\" id=\"map\"></div>\n    <div class=\"plus-icon-box\" (click)=\"showboxmethod()\">\n      <ion-icon name=\"add\" style=\"color: white\"></ion-icon>\n    </div>\n    <div class=\"bottom-tab\" *ngIf=\"footerAction\">\n      <div class=\"two-tabs\">\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <div\n              style=\"\n                text-transform: uppercase;\n                font-family: montserrat-medium;\n                font-weight: bold;\n              \"\n              class=\"tabs-block uppercaes selected-tabs\"\n              [translate]=\"'CREEREVENT.Text18'\"\n            ></div>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" (click)=\"sportsTab()\">\n            <div\n              style=\"\n                text-transform: uppercase;\n                font-family: montserrat-medium;\n                font-weight: bold;\n              \"\n              class=\"tabs-block uppercaes\"\n              [translate]=\"'CREEREVENT.Text19'\"\n            ></div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- Bottom Tabs -->\n\n<ion-footer class=\"footer-fixed-tab\" *ngIf=\"footerAction\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\">\n        <img\n          src=\"assets/images/selectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"eventdetails()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          <!-- {{notificationArray}} -->\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 92443:
/*!***********************************************************!*\
  !*** ./src/app/creer-evenement/creer-evenement.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".map-content .map-block {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-content .google-map {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-content .google-map .customMarker {\n  position: absolute;\n  cursor: pointer;\n  background: #424242;\n  width: 100px;\n  height: 100px;\n  /* -width/2 */\n  margin-left: -50px;\n  /* -height + arrow */\n  margin-top: -110px;\n  border-radius: 10px;\n  padding: 0px;\n}\n.map-content .google-map .pastEventButton {\n  color: #000000 !important;\n  --border-radius: 52px !important;\n  --background: lightgray !important;\n  width: 90% !important;\n}\n.map-content .google-map .presentEvent {\n  --border-radius: 52px;\n  --background: #D3C117;\n  width: 90%;\n}\n.map-content .google-map .customMarker:after {\n  content: \"\";\n  position: absolute;\n  bottom: -10px;\n  left: 40px;\n  border-width: 10px 10px 0;\n  border-style: solid;\n  border-color: #424242 transparent;\n  display: block;\n  width: 0;\n}\n.map-content .google-map .customMarker img {\n  width: 90px;\n  height: 90px;\n  margin: 5px;\n  border-radius: 10px;\n}\n.map-content .plus-icon-box {\n  position: absolute;\n  z-index: 100000;\n  width: 50px;\n  height: 50px;\n  bottom: 60px;\n  right: 10px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 50px;\n  border-radius: 50%;\n  background-color: #708AAA;\n}\n.map-content .map-search-box {\n  position: absolute;\n  z-index: 100000;\n  width: 96%;\n  top: 30px;\n  left: 2%;\n}\n.map-content .map-search-box .map-search-withrow {\n  position: relative;\n  width: 100%;\n}\n.map-content .map-search-box .map-search-withrow .search-box {\n  width: 100%;\n  display: inline-block;\n}\n.map-content .map-search-box .map-search-withrow .search-box .searchbar-input-container input {\n  border-radius: 30px !important;\n}\n.map-content .map-search-box .map-search-withrow .search-box .searchbar-input {\n  border-radius: 30px !important;\n}\n.map-content .map-search-box .map-search-withrow .search-profile-box {\n  width: 50px;\n  display: inline-block;\n  float: right;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50%;\n  border: solid 3px #ffffff;\n  background: #f5f5f5;\n  overflow: hidden;\n}\n.map-content .map-search-box .map-search-withrow .search-profile-box img {\n  width: 100%;\n}\n.map-content .map-search-box .map-search-withrow .popup-profile {\n  position: absolute;\n  background: #ffffff;\n  right: 0px;\n  top: 50px;\n  transition: 0.5s all;\n  border-radius: 0px 0px 10px 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.map-content .map-search-box .map-search-withrow .popup-profile .profile-option-ul {\n  list-style: none;\n  margin: 0px;\n  font-size: 14px;\n  padding: 5px 15px 0px 15px;\n  color: #666666;\n}\n.map-content .map-search-box .map-search-withrow .popup-profile .profile-option-ul li {\n  width: 100%;\n  padding: 8px 0px;\n  border-bottom: solid thin #e1e1e1;\n}\n.map-content .map-det-popup {\n  position: absolute;\n  z-index: 1000000;\n  width: 96%;\n  top: 90px;\n  left: 2%;\n}\n.map-content .map-det-popup ion-card {\n  background: #ffffff;\n  overflow: initial;\n}\n.map-content .map-det-popup .det-head-withimg {\n  position: relative;\n  padding: 0px 20px 5px 10px;\n  border-bottom: solid thin #e1e1e1;\n}\n.map-content .map-det-popup .det-head-withimg .det-head-txt {\n  display: inline-block;\n  width: 100%;\n}\n.map-content .map-det-popup .det-head-withimg .det-head-txt b {\n  display: inline-block;\n  width: 100%;\n  font-size: 18px;\n}\n.map-content .map-det-popup .det-head-withimg .det-close {\n  position: absolute;\n  right: 0px;\n  font-size: 24px;\n  top: 0px;\n  line-height: 20px;\n}\n.map-content .map-det-popup ion-list {\n  padding: 10px;\n  color: #666666;\n}\n.map-content .map-det-popup ion-list .create-input-row {\n  position: relative;\n  width: 100%;\n  padding-left: 35px;\n}\n.map-content .map-det-popup ion-list .create-input-row ion-input {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ccccccb5;\n}\n.map-content .map-det-popup ion-list .left-createicon {\n  width: 22px;\n  margin-right: 20px;\n  position: absolute;\n  left: 0px;\n}\n.map-content .map-det-popup ion-list .coach-radiobox .engage-euro {\n  font-size: 18px;\n  margin-right: 3px;\n}\n.map-content .map-det-popup ion-list .coach-radiobox ion-radio {\n  margin-right: 15px;\n}\n.map-content .map-det-popup .det-card-content {\n  overflow: initial;\n  padding-bottom: 20px;\n}\n.map-content .map-det-popup .buttonbox-cardouter {\n  position: absolute;\n  z-index: 99;\n  left: calc(50% - 85px);\n  bottom: -20px;\n}\n.map-content .bottom-tab {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n}\n.map-content .bottom-tab .two-tabs {\n  display: inline-block;\n  width: 100%;\n  background: #6B6B6B;\n  --background: #6B6B6B;\n  --ion-color-base: #6B6B6B!important;\n  color: #cccccc;\n  position: relative;\n  padding: 10px 10%;\n  text-align: center;\n  line-height: 30px;\n}\n.map-content .bottom-tab .two-tabs .tabs-block {\n  position: relative;\n  text-transform: capitalize;\n}\n.map-content .bottom-tab .two-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -13px;\n  left: 0px;\n  background: #cccccc;\n}\n.map-content .bottom-tab .two-tabs .selected-tabs {\n  color: #D3C117;\n}\n.map-content .bottom-tab .two-tabs .selected-tabs:before {\n  background: #D3C117;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.invalid-feedback {\n  text-align: center !important;\n  color: red !important;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n#addressfield .ng-valid {\n  font-weight: bold;\n  opacity: 1;\n}\n#addressfield .ng-invalid {\n  font-weight: bold;\n  color: #B8B8B8;\n  opacity: 0.6;\n}\n.evenement-card-content {\n  border-radius: 10px;\n  padding-bottom: 0px;\n}\n.evenement-card-content .iconswith-row {\n  position: relative;\n  padding-left: 10px;\n  text-align: left;\n  width: 100%;\n  min-height: 30px;\n  margin-bottom: 5px;\n  display: flex;\n}\n.evenement-card-content .iconswith-row img {\n  position: absolute;\n  width: 20px;\n  left: 0px;\n}\n.evenement-card-content .details-box {\n  padding-left: 5%;\n  display: flex;\n  width: 100%;\n}\n.evenement-card-content .time-img {\n  width: 18px !important;\n}\n.evenement-card-content .location-img {\n  width: 16px !important;\n}\nion-backdrop {\n  --backdrop-opacity:0.1 !important;\n}\nion-input {\n  font-weight: bold !important;\n  color: #B8B8B8 !important;\n  --placeholder-font-weight: bold !important;\n  --placeholder-color: #B8B8B8 !important;\n  --placeholder-font-family: \"montserrat-medium\" !important;\n  --placeholder-opacity:1 !important;\n}\nion-textarea {\n  font-weight: bold !important;\n  color: #B8B8B8 !important;\n  --placeholder-font-weight: bold !important;\n  --placeholder-color: #B8B8B8 !important;\n  --placeholder-font-family: \"montserrat-medium\" !important;\n  --placeholder-opacity:1 !important;\n}\nion-datetime .datetime-text {\n  font-weight: bold !important;\n  color: #B8B8B8 !important;\n  font-family: \"montserrat-medium\" !important;\n  --placeholder-opacity:1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWVyLWV2ZW5lbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJRTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGTjtBQUtFO0VBRUEseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7QUFKRjtBQVNBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFQRjtBQVdFO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQVROO0FBV0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVROO0FBY0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBWko7QUFjRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQVpKO0FBYUk7RUFFRSxrQkFBQTtFQUNBLFdBQUE7QUFaTjtBQWFNO0VBRUUsV0FBQTtFQUNBLHFCQUFBO0FBWlI7QUFjVTtFQUNFLDhCQUFBO0FBWlo7QUFlUTtFQUVFLDhCQUFBO0FBZFY7QUFrQk07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBRUEsNkVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQWlCUTtFQUNFLFdBQUE7QUFmVjtBQWtCTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFFQSw2RUFBQTtBQWhCUjtBQWlCUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFmVjtBQWdCVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBZFo7QUFxQkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBbkJKO0FBb0JJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQWxCTjtBQW9CSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQWxCTjtBQW1CTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQWpCUjtBQWtCUTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFoQlY7QUFtQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBakJSO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFsQk47QUFtQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWpCUjtBQWtCUTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7QUFoQlY7QUFtQk07RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFsQlI7QUFzQlE7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7QUFyQlY7QUF1QlE7RUFFRSxrQkFBQTtBQXRCVjtBQTBCSTtFQUVFLGlCQUFBO0VBQ0Esb0JBQUE7QUF6Qk47QUEyQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUF6Qk47QUE0QkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQTFCSjtBQTJCSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXpCTjtBQTBCTTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUF4QlI7QUEwQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUF4QlI7QUEwQk07RUFDRSxjQUFBO0FBeEJSO0FBMEJNO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBeEJSO0FBOEJBO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtBQTNCRjtBQTZCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUExQkY7QUEyQkU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQXpCSjtBQTBCSTtFQUNFLFVBQUE7RUFDRixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXhCSjtBQXlCTTtFQUNFLFVBQUE7QUF2QlI7QUF5Qk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBdkJSO0FBbUNFO0VBQ0UsaUJBQUE7RUFFQSxVQUFBO0FBakNKO0FBd0NFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQXJDSjtBQTJEQTtFQUVJLG1CQUFBO0VBQ0EsbUJBQUE7QUF6REo7QUEwREk7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUF6RE47QUEyREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBekROO0FBMkRJO0VBQ0UsZ0JBQUE7RUFDRixhQUFBO0VBQ0EsV0FBQTtBQXpESjtBQTJESTtFQUVFLHNCQUFBO0FBMUROO0FBNERJO0VBRUUsc0JBQUE7QUEzRE47QUErREU7RUFDRSxpQ0FBQTtBQTVESjtBQStERTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseURBQUE7RUFDQSxrQ0FBQTtBQTVESjtBQStERTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseURBQUE7RUFDQSxrQ0FBQTtBQTVESjtBQWlFSTtFQUNFLDRCQUFBO0VBQ0YseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO0FBOURKIiwiZmlsZSI6ImNyZWVyLWV2ZW5lbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRlbnRcbntcbiAgLm1hcC1ibG9ja1xuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuZ29vZ2xlLW1hcFxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY3VzdG9tTWFya2VyIHtcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiM0MjQyNDI7XG4gICAgICB3aWR0aDoxMDBweDtcbiAgICAgIGhlaWdodDoxMDBweDtcbiAgICAgIC8qIC13aWR0aC8yICovXG4gICAgICBtYXJnaW4tbGVmdDotNTBweDtcbiAgICAgIC8qIC1oZWlnaHQgKyBhcnJvdyAqL1xuICAgICAgbWFyZ2luLXRvcDotMTEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICBwYWRkaW5nOjBweDtcbiAgfVxuXG4gIC5wYXN0RXZlbnRCdXR0b24ge1xuICAgXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTJweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ucHJlc2VudEV2ZW50e1xuICAtLWJvcmRlci1yYWRpdXM6IDUycHg7XG4gIC0tYmFja2dyb3VuZDogI0QzQzExNztcbiAgd2lkdGg6IDkwJTtcbn1cblxuXG4gIC5jdXN0b21NYXJrZXI6YWZ0ZXIge1xuICAgICAgY29udGVudDpcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAwO1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1jb2xvcjogIzQyNDI0MiB0cmFuc3BhcmVudDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDA7XG4gIH1cbiAgLmN1c3RvbU1hcmtlciBpbWcge1xuICAgICAgd2lkdGg6OTBweDtcbiAgICAgIGhlaWdodDo5MHB4O1xuICAgICAgbWFyZ2luOjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgfVxuICB9XG5cblxuICAucGx1cy1pY29uLWJveHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3R0b206IDYwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwOEFBQTtcbiAgfVxuICAubWFwLXNlYXJjaC1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgd2lkdGg6IDk2JTtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMiU7XG4gICAgLm1hcC1zZWFyY2gtd2l0aHJvd1xuICAgIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLnNlYXJjaC1ib3hcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXJ7XG4gICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2hiYXItaW5wdXRcbiAgICAgICAge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAuc2VhcmNoLXByb2ZpbGUtYm94IHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5wb3B1cC1wcm9maWxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgICAgICAucHJvZmlsZS1vcHRpb24tdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDBweCAxNXB4O1xuICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gI2UxZTFlMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICAubWFwLWRldC1wb3B1cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDAwMDA7XG4gICAgd2lkdGg6IDk2JTtcbiAgICB0b3A6IDkwcHg7XG4gICAgbGVmdDogMiU7XG4gICAgaW9uLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgIH1cbiAgICAuZGV0LWhlYWQtd2l0aGltZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAwcHggMjBweCA1cHggMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHRoaW4gI2UxZTFlMTtcbiAgICAgIC5kZXQtaGVhZC10eHQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZGV0LWNsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGNvbG9yOiM2NjY2NjY7XG4gICAgICAuY3JlYXRlLWlucHV0LXJvdyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2NiNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmxlZnQtY3JlYXRlaWNvbiB7XG4gICAgICAgIC8vIGhlaWdodDogMjVweDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgICAuY29hY2gtcmFkaW9ib3hcbiAgICAgIHtcbiAgICAgICAgLmVuZ2FnZS1ldXJvXG4gICAgICAgIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXJhZGlvXG4gICAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRldC1jYXJkLWNvbnRlbnRcbiAgICB7XG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAuYnV0dG9uYm94LWNhcmRvdXRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiA5OTtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gODVweCk7XG4gICAgICBib3R0b206IC0yMHB4O1xuICAgIH1cbiAgfVxuICAuYm90dG9tLXRhYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC50d28tdGFic3tcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogIzZCNkI2QjtcbiAgICAgIC0tYmFja2dyb3VuZDogIzZCNkI2QjtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICM2QjZCNkIhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgLnRhYnMtYmxvY2sge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgICAgLnRhYnMtYmxvY2s6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIHRvcDogLTEzcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RlZC10YWJzIHtcbiAgICAgICAgY29sb3I6ICNEM0MxMTc7XG4gICAgICB9XG4gICAgICAuc2VsZWN0ZWQtdGFiczpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRDNDMTE3O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmludmFsaWQtZmVlZGJhY2t7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG4uZm9vdGVyLWZpeGVkLXRhYiB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNSU7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC5mb290ZXItYnRuLXRhYnMge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAucm91bmR7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0MxMTc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgXG59XG5cblxuI2FkZHJlc3NmaWVsZFxuXG57XG4gIC5uZy12YWxpZHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxufVxuI2FkZHJlc3NmaWVsZFxuXG57XG4gIC5uZy1pbnZhbGlke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjQjhCOEI4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuXG4vLyAuYWRkcmVzc0lucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIFxuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgY29sb3I6ICNCOEI4Qjg7XG4vLyAgIG9wYWNpdHk6IDAuOTtcbiAgXG4vLyB9XG5cbi8vIC5BZGRyZXNzSW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgXG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBjb2xvcjogI0I4QjhCODtcbi8vICAgb3BhY2l0eTogMTtcbiAgXG4vLyB9XG5cblxuXG4uZXZlbmVtZW50LWNhcmQtY29udGVudFxuICB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC5pY29uc3dpdGgtcm93XG4gICAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5pY29uc3dpdGgtcm93IGltZ3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgIH1cbiAgICAuZGV0YWlscy1ib3h7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50aW1lLWltZ1xuICAgIHtcbiAgICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2NhdGlvbi1pbWdcbiAgICB7XG4gICAgICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1iYWNrZHJvcHtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6MC4xICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taW5wdXR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0I4QjhCOCAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjQjhCOEI4ICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LWZhbWlseTogXCJtb250c2VycmF0LW1lZGl1bVwiICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OjEgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10ZXh0YXJlYXtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjQjhCOEI4ICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNCOEI4QjggIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXQtbWVkaXVtXCIgIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6MSAhaW1wb3J0YW50O1xuICB9XG5cblxuICBpb24tZGF0ZXRpbWV7XG4gICAgLmRhdGV0aW1lLXRleHR7XG4gICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjQjhCOEI4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdC1tZWRpdW1cIiAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eToxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_creer-evenement_creer-evenement_module_ts.js.map