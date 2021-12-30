"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mon-profil_mon-profil_module_ts"],{

/***/ 7612:
/*!*********************************************************!*\
  !*** ./src/app/mon-profil/mon-profil-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonProfilPageRoutingModule": () => (/* binding */ MonProfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _mon_profil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mon-profil.page */ 47264);




const routes = [
    {
        path: '',
        component: _mon_profil_page__WEBPACK_IMPORTED_MODULE_0__.MonProfilPage
    }
];
let MonProfilPageRoutingModule = class MonProfilPageRoutingModule {
};
MonProfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonProfilPageRoutingModule);



/***/ }),

/***/ 71408:
/*!*************************************************!*\
  !*** ./src/app/mon-profil/mon-profil.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonProfilPageModule": () => (/* binding */ MonProfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _mon_profil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mon-profil-routing.module */ 7612);
/* harmony import */ var _mon_profil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mon-profil.page */ 47264);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let MonProfilPageModule = class MonProfilPageModule {
};
MonProfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _mon_profil_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonProfilPageRoutingModule
        ],
        declarations: [_mon_profil_page__WEBPACK_IMPORTED_MODULE_1__.MonProfilPage]
    })
], MonProfilPageModule);



/***/ }),

/***/ 47264:
/*!***********************************************!*\
  !*** ./src/app/mon-profil/mon-profil.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonProfilPage": () => (/* binding */ MonProfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mon_profil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./mon-profil.page.html */ 86810);
/* harmony import */ var _mon_profil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mon-profil.page.scss */ 29838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98904);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 82128);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 30692);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ 91554);
/* harmony import */ var _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../followlist/followlist.page */ 69070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);











// import { Transfer, TransferObject } from '@ionic-native/transfer';







let MonProfilPage = class MonProfilPage {
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
        this.route.queryParams.subscribe((params) => {
            if (params && params.special) {
                var details = JSON.parse(params.special);
                if (details.pageRoute === 'editDisponsibility' ||
                    details.pageRoute === 'question') {
                    this.uid = details.userId;
                    this.loadData();
                }
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
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_img').then((user_img) => {
                this.storage.get('user_lang').then((lang) => {
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
                        this.api.profile = res.json().result[0];
                        // alert(this.api.profile.spcat_name);
                        var lastName = res.json().result[0].user_l_name;
                        var l_name = lastName.substring(0, 1);
                        this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
                        this.followers = res.json().result[0].followers;
                        this.following = res.json().result[0].following;
                        this.practice = res.json().result[0].user_question1_response;
                        this.sportsPlayed = res.json().result[0].user_question2_response;
                        this.imgUrl = res.json().result[0].user_img;
                        this.sportsInterest = res.json().result[0].spcat_name;
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
                    }
                    else {
                        console.log(res.json());
                    }
                });
            });
        });
    }
    openListFollowing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    reviewPage() {
        this.api.Navigate('profilereview');
    }
    openListFollowers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    closeDetailsBox() {
        if (this.followerList === true) {
            this.followerList = false;
        }
        else if (this.followingList === true) {
            this.followingList = false;
        }
    }
    sportsPractice() {
        var vc = {
            pageRoute: 'myProfile',
            userId: this.uid,
            selected: this.practice,
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['question'], navigationExtras);
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
            this.storage.get('user_img').then((user_img) => {
                this.storage.get('user_lang').then((lang) => {
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
                        this.api.profile = res.json().result[0];
                        // alert(this.api.profile.spcat_name);
                        var lastName = res.json().result[0].user_l_name;
                        var l_name = lastName.substring(0, 1);
                        this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
                        this.followers = res.json().result[0].followers;
                        this.following = res.json().result[0].following;
                        this.practice = res.json().result[0].user_question1_response;
                        this.sportsPlayed = res.json().result[0].user_question2_response;
                        this.imgUrl = res.json().result[0].user_img;
                        this.sportsInterest = res.json().result[0].spcat_name;
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
                    }
                    else {
                        console.log(res.json());
                    }
                });
            });
        });
    }
    sportsPlayedFunc() {
        this.api.Navigate('sports-practice');
    }
    sportsPlayedFunc1() {
        if (this.editPlayed === true) {
            if (this.editPlay == null ||
                this.editPlay == undefined ||
                this.editPlay == '') {
                this.displayEmptyPlayError = true;
            }
            else {
                console.log(this.editPlay);
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_question2_response', this.editPlay);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log(res);
                        this.editPlayed = false;
                        this.loadData();
                    }
                    else {
                    }
                });
            }
        }
        else {
            this.editPlayed = true;
        }
    }
    description() {
        if (this.editDescription === true) {
            if (this.userDesc == null ||
                this.userDesc == undefined ||
                this.userDesc == '') {
                this.displayEmptyDescError = true;
            }
            else {
                console.log(this.userDesc);
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_description1', this.userDesc);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log(res);
                        this.editDescription = false;
                        this.loadData();
                    }
                    else {
                    }
                });
            }
        }
        else {
            this.editDescription = true;
        }
    }
    presentActionSheet(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                console.log('language' + lang);
                if (lang == 'English') {
                    const actionSheet = yield this.actionSheetController.create({
                        header: 'Select a source image',
                        buttons: [
                            {
                                text: 'Import from library',
                                handler: () => {
                                    this.takePicture1(this.camera.PictureSourceType.PHOTOLIBRARY, i);
                                },
                            },
                            {
                                text: 'Take a picture',
                                handler: () => {
                                    this.takePicture1(this.camera.PictureSourceType.CAMERA, i);
                                },
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel',
                            },
                        ],
                    });
                    yield actionSheet.present();
                }
                else {
                    const actionSheet = yield this.actionSheetController.create({
                        header: 'Sélectionner une image source',
                        buttons: [
                            {
                                text: 'Importer à partir de la bibliothèque',
                                handler: () => {
                                    this.takePicture1(this.camera.PictureSourceType.PHOTOLIBRARY, i);
                                },
                            },
                            {
                                text: 'prendre une photo',
                                handler: () => {
                                    this.takePicture1(this.camera.PictureSourceType.CAMERA, i);
                                },
                            },
                            {
                                text: 'annuler',
                                role: 'cancel',
                            },
                        ],
                    });
                    yield actionSheet.present();
                }
            }));
        });
    }
    takePicture1(sourceType, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is('ios')) {
                const options = {
                    quality: 100,
                    targetWidth: 900,
                    targetHeight: 600,
                    destinationType: this.camera.DestinationType.FILE_URI,
                    sourceType: sourceType,
                    encodingType: this.camera.EncodingType.JPEG,
                    correctOrientation: true,
                };
                const tempImage = yield this.camera.getPicture(options);
                const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
                // Now, the opposite. Extract the full path, minus filename.
                // Result example: file:///var/mobile/Containers/Data/Application
                // /E4A79B4A-E5CB-4E0C-A7D9-0603ECD48690/tmp/
                const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);
                // Get the Data directory on the device.
                // Result example: file:///var/mobile/Containers/Data/Application
                // /E4A79B4A-E5CB-4E0C-A7D9-0603ECD48690/Library/NoCloud/
                const newBaseFilesystemPath = this.file.dataDirectory;
                yield this.file.copyFile(tempBaseFilesystemPath, tempFilename, newBaseFilesystemPath, tempFilename);
                // Result example: file:///var/mobile/Containers/Data/Application
                // /E4A79B4A-E5CB-4E0C-A7D9-0603ECD48690/Library/NoCloud/cdv_photo_003.jpg
                const storedPhoto = newBaseFilesystemPath + tempFilename;
                this.file
                    .resolveLocalFilesystemUrl(storedPhoto)
                    .then((entry) => {
                    entry.file((file) => this.readFile(file, i));
                })
                    .catch((err) => {
                    console.log(err);
                    // this.presentToast('Error while reading file.');
                });
            }
            else {
                const options = {
                    quality: 100,
                    destinationType: this.camera.DestinationType.FILE_URI,
                    sourceType: sourceType,
                    encodingType: this.camera.EncodingType.JPEG,
                    correctOrientation: true,
                };
                this.camera.getPicture(options).then((imageData) => {
                    this.file
                        .resolveLocalFilesystemUrl(imageData)
                        .then((entry) => {
                        entry.file((file) => {
                            console.log(file);
                            this.readFile(file, i);
                        });
                    });
                }, (err) => {
                    // Handle error
                });
            }
        });
    }
    readFile(file, i) {
        const reader = new FileReader();
        reader.onload = () => {
            // const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type,
            });
            //  formData.append('file', imgBlob, file.name);
            // this.uploadImageData(formData);
            if (i === 1) {
                this.upload2Firebase1(imgBlob);
            }
            else {
                console.log('if second image');
            }
        };
        reader.readAsArrayBuffer(file);
    }
    createFileName() {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    uploadFile(event) {
        const file = event.target.files[0];
        const filePath = this.makeid(5);
        const fileRef = this.angularstorage.ref(filePath);
        const task = this.angularstorage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.userAvatarStr = value;
        })))
            .subscribe();
    }
    upload2Firebase1(image) {
        this.api.timerloading();
        const file = image;
        const filePath = this.makeid(5);
        const fileRef = this.angularstorage.ref(filePath);
        //const newFile = new File(file);
        // let newFile= file.getURL().getFile();
        const task = this.angularstorage.upload(filePath, file);
        console.log(filePath);
        console.log(file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.uploaded1 = true;
            this.imgUrl = value;
            this.api.dismissLoading();
            this.updateImage();
        })))
            .subscribe();
    }
    updateImage() {
        this.api.timerloading();
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_img', this.imgUrl);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log('success');
                this.storage.set('user_img', this.imgUrl);
                this.api.dismissLoading();
                this.loadData();
            }
            else {
                this.api.dismissLoading();
                console.log('successfalse check code');
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
            }
            else {
                console.log(res.json());
                this.api.dismissLoading();
            }
        });
    }
    activity() {
        this.api.Navigate('mon-profil-activite');
    }
    editSchedule() {
        console.log('clicked');
        var vc = {
            pageRoute: 'mon-profil',
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(vc),
            },
        };
        this.router.navigate(['question3'], navigationExtras);
    }
    events() {
        this.api.Navigate('creer-evenement');
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
        this.api.Navigate('mes-evenements');
    }
    rankingDetails() {
        this.api.Navigate('ranking');
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
};
MonProfilPage.ctorParameters = () => [
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
MonProfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-mon-profil',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mon_profil_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mon_profil_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
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
], MonProfilPage);



/***/ }),

/***/ 86810:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/mon-profil/mon-profil.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"creer-evenements\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"font-family: montserrat-medium\"\n      class=\"top-fixed-heading uppercaes\"\n      [translate]=\"'MONPROFILE.Text1'\"\n    ></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"overall-content\">\n    <!-- <div class=\"overall-content\" [routerLink]=\"['/mon-profil-activite']\"\n       routerLinkActive=\"router-link-active\"> -->\n    <div class=\"top-black-block\"></div>\n    <div class=\"top-header-content\">\n      <div class=\"top-btn-toolbar\">\n        <ion-row>\n          <ion-col class=\"ion-text-left\" (click)=\"openListFollowers()\">\n            <div class=\"social-counterbox\">\n              <div\n                *ngIf=\"!followerList\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-count\"\n              >\n                {{followers}}\n              </div>\n              <div\n                *ngIf=\"!followerList\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-counttxt\"\n                [translate]=\"'MONPROFILE.Text2'\"\n              ></div>\n              <div\n                *ngIf=\"followerList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-count\"\n              >\n                {{followers}}\n              </div>\n              <div\n                *ngIf=\"followerList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-counttxt\"\n                [translate]=\"'MONPROFILE.Text2'\"\n              ></div>\n            </div>\n            <div *ngIf=\"followerList\" class=\"arrow-up\"></div>\n          </ion-col>\n          <ion-col\n            style=\"display: flex; flex-direction: row; justify-content: center\"\n          >\n            <div class=\"profile-center\">\n              <img *ngIf=\"!Avatar\" src=\"assets/images/profile-img.png\" />\n              <ion-avatar style=\"height: 100px; width: 100px\" *ngIf=\"Avatar\">\n                <ion-img [src]=\"imgUrl\"></ion-img>\n              </ion-avatar>\n              <div class=\"edit-pencilicon\" (click)=\"presentActionSheet(1)\">\n                <img src=\"assets/images/edit-pencil.png\" />\n              </div>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-text-right\" (click)=\"openListFollowing()\">\n            <div class=\"social-counterbox\">\n              <div\n                *ngIf=\"!followingList\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-count\"\n              >\n                {{following}}\n              </div>\n              <div\n                *ngIf=\"!followingList\"\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                class=\"soc-counttxt\"\n                [translate]=\"'MONPROFILE.Text3'\"\n              ></div>\n              <div\n                *ngIf=\"followingList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-count\"\n              >\n                {{following}}\n              </div>\n              <div\n                *ngIf=\"followingList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-counttxt\"\n                [translate]=\"'MONPROFILE.Text3'\"\n              ></div>\n            </div>\n            <div *ngIf=\"followingList\" class=\"arrow-up\"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            color: #d3c117;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n        >\n          <ion-title\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bold;\n              margin-top: 5%;\n            \"\n            >{{name | titlecase}}</ion-title\n          >\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            margin-top: 2%;\n          \"\n        >\n          <small style=\"font-family: montserrat\"\n            >{{gender}} - {{age}} <span [translate]=\"'MONPROFILE.Text4'\"></span\n          ></small>\n        </ion-row>\n\n        <div class=\"top-tabs\">\n          <ion-row>\n            <ion-col class=\"ion-no-padding\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes selected-tabs\"\n                [translate]=\"'MONPROFILE.Text5'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" (click)=\"activity()\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'MONPROFILE.Text6'\"\n              ></div>\n            </ion-col>\n            <!-- <ion-col class=\"ion-no-padding\" (click)=\"reviewPage()\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'MONPROFILE.Text11'\"\n              ></div>\n            </ion-col> -->\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <div class=\"profile-inner-block\">\n      <ion-row class=\"gray-row\">\n        <b class=\"main-head\" style=\"font-family: montserrat-medium\">\n          <span [translate]=\"'MONPROFILE.Text7'\"></span>\n          <div *ngIf=\"!editPractice\" class=\"head-right-txtwithicon\">\n            {{practice}}\n            <img\n              class=\"edit-row-icon\"\n              (click)=\"sportsPractice()\"\n              src=\"assets/images/edit-pencil.png\"\n            />\n          </div>\n          <!-- <div *ngIf=\"editPractice\" class=\"head-right-txtwithicon\">\n            <img class=\"edit-row-icon\" (click)=\"sportsPractice()\" src=\"assets/images/edit-pencil.png\"/>\n            <ion-input  type=\"text\" class=\"input-txt\" [(ngModel)]=\"editPract\"></ion-input>\n            </div> -->\n        </b>\n      </ion-row>\n      <ion-row class=\"gray-row\">\n        <b class=\"main-head\" style=\"font-family: montserrat-medium\">\n          <span [translate]=\"'MONPROFILE.Text8'\"></span>\n          <img\n            class=\"edit-row-icon\"\n            (click)=\"sportsPlayedFunc()\"\n            src=\"assets/images/edit-pencil.png\"\n          />\n        </b>\n        <p *ngIf=\"!editPlayed\" class=\"basic-details\">{{sportsPlayed}}</p>\n        <ion-input\n          *ngIf=\"editPlayed\"\n          type=\"text\"\n          class=\"input-txt\"\n          [(ngModel)]=\"editPlay\"\n        ></ion-input>\n        <div\n          *ngIf=\"editPlayed && displayEmptyPlayError\"\n          style=\"color: red; font-size: 10px\"\n          [translate]=\"'MONPROFILE.Text9'\"\n        ></div>\n      </ion-row>\n      <!-- <ion-row class=\"gray-row\">\n        <b class=\"main-head\" style=\"font-family: montserrat-medium\"\n          >Sports Interest\n        </b>\n        <p>{{sportsInterest}}</p>\n\n        <div\n          *ngIf=\"editDescription && displayEmptyDescError\"\n          style=\"color: red; font-size: 10px\"\n          [translate]=\"'MONPROFILE.Text10'\"\n        ></div>\n      </ion-row> -->\n      <ion-row class=\"gray-row\">\n        <b class=\"main-head\" style=\"font-family: montserrat-medium\"\n          >Description\n          <img\n            class=\"edit-row-icon\"\n            (click)=\"description()\"\n            src=\"assets/images/edit-pencil.png\"\n        /></b>\n        <p *ngIf=\"!editDescription\" class=\"basic-details\">\n          «  {{userDescription}} »\n        </p>\n        <ion-input\n          *ngIf=\"editDescription\"\n          type=\"text\"\n          class=\"input-txt\"\n          [(ngModel)]=\"userDesc\"\n        ></ion-input>\n        <div\n          *ngIf=\"editDescription && displayEmptyDescError\"\n          style=\"color: red; font-size: 10px\"\n          [translate]=\"'MONPROFILE.Text10'\"\n        ></div>\n      </ion-row>\n      <!-- <ion-row class=\"gray-row\">\n        <b class=\"main-head\" style=\"font-family: montserrat-medium;\">Disponibilités\n          <img (click)=\"editSchedule()\" class=\"edit-row-icon\" src=\"assets/images/edit-pencil.png\"/></b>\n        <ion-row class=\"border-row\" *ngFor=\"let item of disponsibility\">\n          <div class=\"left-bold-head\" style=\"font-family: montserrat;\">{{item.name}}</div>\n          <ion-row  class=\"right-txt\" *ngIf=\"item.Soir==true\" style=\"padding-right: 10px;\">\n            Soir\n          </ion-row >\n\n            <ion-row *ngIf=\"item.Midi==true\" class=\"right-txt\" style=\"padding-right: 10px;\">\n              Midi\n            </ion-row>\n            <ion-row class=\"right-txt\" *ngIf=\"item.Matin==true\" style=\"padding-right: 10px;\">\n              Matin\n            </ion-row>\n          \n        </ion-row>\n      \n      </ion-row> -->\n    </div>\n  </div>\n  <!-- </div> -->\n</ion-content>\n\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n        <!-- *ngIf=\"msgValue\" -->\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 29838:
/*!*************************************************!*\
  !*** ./src/app/mon-profil/mon-profil.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.overall-content .top-black-block {\n  height: 60px;\n  background: #414141;\n  position: relative;\n}\n.overall-content .top-header-content {\n  position: relative;\n  margin-top: -50px;\n}\n.overall-content .social-counterbox {\n  text-align: center;\n  font-size: 12px;\n  color: #dddddd;\n}\n.overall-content .soc-count {\n  font-size: 20px;\n  font-weight: bold;\n}\n.overall-content .profile-center {\n  width: 110px;\n  position: relative;\n  border: solid 5px #ffffff;\n  border-radius: 50%;\n}\n.overall-content .profile-center .edit-pencilicon {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  padding: 5px;\n  text-align: center;\n  background: #ffffff;\n  right: -5px;\n  top: 2px;\n  z-index: 10;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.overall-content .profile-center .edit-pencilicon img {\n  width: 100%;\n}\n.overall-content .top-profile-center {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.overall-content .top-profile-center small {\n  width: 100%;\n  display: inline-block;\n}\n.arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  margin-left: 33%;\n  border-bottom: 20px solid #d3c117;\n}\n.top-tabs {\n  display: inline-block;\n  width: 100%;\n  background: #ffffff;\n  --background: #ffffff;\n  --ion-color-base: #ffffff !important;\n  color: #cccccc;\n  position: relative;\n  padding: 10px 0px;\n  margin-top: 15px;\n  text-align: center;\n}\n.top-tabs .tabs-block {\n  position: relative;\n  text-transform: capitalize;\n}\n.top-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -13px;\n  left: 0px;\n  background: #cccccc;\n}\n.top-tabs .selected-tabs {\n  color: #d3c117;\n}\n.top-tabs .selected-tabs:before {\n  background: #d3c117;\n}\n.profile-inner-block {\n  padding: 10px 15px 10px 15px;\n  font-size: 14px;\n}\n.profile-inner-block .gray-row {\n  width: 100%;\n  background: #f5f5f5;\n  padding: 10px 5px 5px 5px;\n  color: #666666;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n.profile-inner-block .gray-row .left-bold-head {\n  font-weight: bold;\n}\n.profile-inner-block .gray-row .right-txt {\n  text-align: right;\n}\n.profile-inner-block .edit-row-icon {\n  width: 15px;\n  margin-left: 8px;\n  float: right;\n}\n.profile-inner-block .main-head {\n  width: 100%;\n  display: inline-block;\n  font-weight: bold;\n  min-height: 25px;\n}\n.profile-inner-block .main-head .head-right-txtwithicon {\n  float: right;\n}\n.profile-inner-block .border-row {\n  width: 100%;\n  padding: 8px 0px;\n  border-bottom: solid thin #cccccc;\n  display: inline-block;\n}\n.profile-inner-block .border-row .left-bold-head {\n  font-weight: bold;\n  display: inline-block;\n}\n.profile-inner-block .border-row .right-txt {\n  text-align: right;\n  display: inline-block;\n  float: right;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #d3c117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #d3c117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbi1wcm9maWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBRUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FBQ047QUFFSTtFQUNFLFdBQUE7QUFBTjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFESjtBQUdFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBREo7QUFLQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFGRjtBQUtBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREo7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUdFO0VBQ0UsbUJBQUE7QUFESjtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FBRkY7QUFHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBR0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBREo7QUFHRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUVJO0VBQ0UsWUFBQTtBQUFOO0FBR0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FBREo7QUFFSTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFBTjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFBTjtBQUtBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZGO0FBR0U7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQURKO0FBRUk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUNNO0VBQ0UsVUFBQTtBQUNSO0FBQ007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ1I7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGRjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFESjtBQUVJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQU47QUFDTTtFQUNFLFVBQUE7QUFDUjtBQUNNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNSIiwiZmlsZSI6Im1vbi1wcm9maWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1maXhlZC10b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAudG9wLWdsb2JhbC10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5vdmVyYWxsLWNvbnRlbnQge1xuICAudG9wLWJsYWNrLWJsb2NrIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnRvcC1oZWFkZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICB9XG4gIC5zb2NpYWwtY291bnRlcmJveCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgfVxuICAuc29jLWNvdW50IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnByb2ZpbGUtY2VudGVyIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogc29saWQgNXB4ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC5lZGl0LXBlbmNpbGljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICB0b3A6IDJweDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cbiAgICAuZWRpdC1wZW5jaWxpY29uIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgLnRvcC1wcm9maWxlLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9wLXByb2ZpbGUtY2VudGVyIHNtYWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cblxuLmFycm93LXVwIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDMzJTtcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCAjZDNjMTE3O1xufVxuXG4udG9wLXRhYnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLnRhYnMtYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuICAudGFicy1ibG9jazpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB0b3A6IC0xM3B4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICB9XG4gIC5zZWxlY3RlZC10YWJzIHtcbiAgICBjb2xvcjogI2QzYzExNztcbiAgfVxuICAuc2VsZWN0ZWQtdGFiczpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNkM2MxMTc7XG4gIH1cbn1cblxuLnByb2ZpbGUtaW5uZXItYmxvY2sge1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC5ncmF5LXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAxMHB4IDVweCA1cHggNXB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC5sZWZ0LWJvbGQtaGVhZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnJpZ2h0LXR4dCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbiAgLmVkaXQtcm93LWljb24ge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5tYWluLWhlYWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIC5oZWFkLXJpZ2h0LXR4dHdpdGhpY29uIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIH1cbiAgLmJvcmRlci1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjY2NjO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAubGVmdC1ib2xkLWhlYWQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5yaWdodC10eHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG59XG5cbi5mb290ZXItZml4ZWQtdGFiIHtcbiAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA1JTtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLmZvb3Rlci1idG4tdGFicyB7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAucm91bmQge1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjMTE3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9vdGVyLWZpeGVkLXRhYiB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNSU7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC5mb290ZXItYnRuLXRhYnMge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgLnJvdW5kIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzYzExNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_mon-profil_mon-profil_module_ts.js.map