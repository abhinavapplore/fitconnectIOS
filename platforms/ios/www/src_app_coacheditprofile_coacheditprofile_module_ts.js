"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_coacheditprofile_coacheditprofile_module_ts"],{

/***/ 44901:
/*!*********************************************************************!*\
  !*** ./src/app/coacheditprofile/coacheditprofile-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoacheditprofilePageRoutingModule": () => (/* binding */ CoacheditprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _coacheditprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coacheditprofile.page */ 15693);




const routes = [
    {
        path: '',
        component: _coacheditprofile_page__WEBPACK_IMPORTED_MODULE_0__.CoacheditprofilePage
    }
];
let CoacheditprofilePageRoutingModule = class CoacheditprofilePageRoutingModule {
};
CoacheditprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoacheditprofilePageRoutingModule);



/***/ }),

/***/ 80320:
/*!*************************************************************!*\
  !*** ./src/app/coacheditprofile/coacheditprofile.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoacheditprofilePageModule": () => (/* binding */ CoacheditprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _coacheditprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coacheditprofile-routing.module */ 44901);
/* harmony import */ var _coacheditprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coacheditprofile.page */ 15693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let CoacheditprofilePageModule = class CoacheditprofilePageModule {
};
CoacheditprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coacheditprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoacheditprofilePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_coacheditprofile_page__WEBPACK_IMPORTED_MODULE_1__.CoacheditprofilePage]
    })
], CoacheditprofilePageModule);



/***/ }),

/***/ 15693:
/*!***********************************************************!*\
  !*** ./src/app/coacheditprofile/coacheditprofile.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoacheditprofilePage": () => (/* binding */ CoacheditprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coacheditprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coacheditprofile.page.html */ 50309);
/* harmony import */ var _coacheditprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coacheditprofile.page.scss */ 40151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 98904);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 82128);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 30692);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ 91554);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../followlist/followlist.page */ 69070);
/* harmony import */ var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/keyboard/ngx */ 71239);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 13252);










// import { Transfer, TransferObject } from '@ionic-native/transfer';









let CoacheditprofilePage = class CoacheditprofilePage {
    constructor(storage, http, httpClient, camera, api, 
    //  private transfer: Transfer,
    angularstorage, file, filePath, actionSheetController, keyboard, router, modalCtrl, platform) {
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.camera = camera;
        this.api = api;
        this.angularstorage = angularstorage;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetController = actionSheetController;
        this.keyboard = keyboard;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.Avatar = true;
        this.editCourse = false;
        this.notificationPresent = false;
        this.editDescription = false;
        this.editHour = false;
        this.editPerson = false;
        this.followingList = false;
        this.followerList = false;
        this.followersArray = [];
        this.followingArray = [];
        this.footerAction = true;
        this.displayPersonError = false;
        this.displayHourError = false;
        this.displayEmptyError = false;
        this.user = {};
        this.keyboard.onKeyboardWillShow().subscribe((data) => {
            this.footerAction = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe((data) => {
            this.footerAction = true;
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
            this.storage.get('user_img').then((user_img) => {
                this.storage.get('user_lang').then((lang) => {
                    if (lang == 'English') {
                        this.English = true;
                    }
                    else {
                        this.English = false;
                    }
                });
                if (user_img === undefined || user_img === null || user_img === '') {
                    this.Avatar = false;
                }
                else {
                    this.Avatar = true;
                    this.imgUrl = user_img;
                }
            });
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
                    this.user = res.json().result[0];
                    this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
                    this.followers = res.json().result[0].followers;
                    this.following = res.json().result[0].following;
                    this.hourly = res.json().result[0].user_price_hour;
                    this.person = res.json().result[0].user_price_per_person;
                    this.userRank = res.json().user_rank;
                    this.userDescription = res.json().result[0].user_description1;
                    this.coachingOffered = res.json().result[0].user_description2;
                    this.dob = res.json().result[0].user_dob;
                    var date = this.dob.split('T');
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
                else {
                    console.log(res.json());
                    this.api.dismissLoading();
                    this.api.toast(res.json().msg);
                }
            });
        });
    }
    updateDocs() {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.user),
            },
        };
        this.router.navigate(['inscription-docs'], navigationExtras);
    }
    activity() {
        this.api.Navigate('mon-profil-activite');
    }
    openListFollowing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.following == 0) {
                return;
            }
            else {
                this.followingList = true;
                const modal = yield this.modalCtrl.create({
                    component: _followlist_followlist_page__WEBPACK_IMPORTED_MODULE_8__.FollowlistPage,
                    cssClass: 'followPage',
                    showBackdrop: false,
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
    openListFollowers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.followers == 0) {
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
    closeDetailsBox() {
        if (this.followerList === true) {
            this.followerList = false;
        }
        else if (this.followingList === true) {
            this.followingList = false;
        }
    }
    reviewPage() {
        this.api.Navigate('profilereview');
    }
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    description() {
        if (this.editDescription === true) {
            if (this.userDesc == null ||
                this.userDesc == undefined ||
                this.userDesc == '') {
                this.displayEmptyError = true;
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
            setTimeout(() => {
                this.myDescInput.setFocus();
            }, 150);
        }
    }
    course() {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.user),
            },
        };
        this.router.navigate(['inscription-professionnel3'], navigationExtras);
    }
    perHour() {
        if (this.editHour === true) {
            if (this.hourRate == null ||
                this.hourRate == undefined ||
                this.hourRate == '') {
                this.displayHourError = true;
            }
            else {
                console.log(this.userDesc);
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_price_hour', this.hourRate);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log(res);
                        this.storage.set('user_price_hour', this.hourRate);
                        this.editHour = false;
                        this.loadData();
                    }
                    else {
                    }
                });
            }
        }
        else {
            this.editHour = true;
            setTimeout(() => {
                this.myInput.setFocus();
            }, 150);
        }
    }
    perPerson() {
        if (this.editPerson === true) {
            if (this.personRate == null ||
                this.personRate == undefined ||
                this.personRate == '') {
                this.displayPersonError = true;
            }
            else {
                console.log(this.userDesc);
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_price_per_person', this.personRate);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log(res);
                        this.storage.set('user_price_per_person', this.personRate);
                        this.editPerson = false;
                        this.loadData();
                    }
                    else {
                    }
                });
            }
        }
        else {
            this.editPerson = true;
            setTimeout(() => {
                this.myInput1.setFocus();
            }, 150);
        }
    }
    presentActionSheet(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.imgUrl = value;
            this.updateImage();
        })))
            .subscribe();
    }
    upload2Firebase1(image) {
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.imgUrl = value;
            this.updateImage();
        })))
            .subscribe();
    }
    updateImage() {
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_img', this.imgUrl);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log('success');
                this.storage.set('user_img', this.imgUrl);
                this.loadData();
            }
            else {
                console.log('successfalse check code');
            }
        });
    }
    startFollow(detail) {
        const formData = new FormData();
        formData.append('fol_user_id', this.uid);
        formData.append('fol_host_id', detail.user_id);
        formData.append('fol_status', '1');
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user_follow', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
                var msg = 'You started Following ' + this.name;
                this.loadData();
                this.api.toast(msg);
            }
            else {
                console.log(res.json());
            }
        });
    }
    startUnfollow(detail) {
        const formData = new FormData();
        formData.append('fol_user_id', this.uid);
        formData.append('fol_host_id', detail.user_id);
        formData.append('fol_status', '0');
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user_follow', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                console.log(res.json());
                var msg = 'You Unfollowed ' + this.name;
                this.loadData();
                this.api.toast(msg);
            }
            else {
                console.log(res.json());
            }
        });
    }
    loadData() {
        this.api.loading();
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_img').then((user_img) => {
                if (user_img === undefined || user_img === null || user_img === '') {
                    this.Avatar = false;
                }
                else {
                    this.Avatar = true;
                    this.imgUrl = user_img;
                }
            });
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
                    this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
                    this.followers = res.json().result[0].followers;
                    this.following = res.json().result[0].following;
                    this.hourly = res.json().result[0].user_price_hour;
                    this.person = res.json().result[0].user_price_per_person;
                    this.userDescription = res.json().result[0].user_description1;
                    this.coachingOffered = res.json().result[0].user_description2;
                    this.dob = res.json().result[0].user_dob;
                    var date = this.dob.split('T');
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
                }
                else {
                    console.log(res.json());
                }
                const formData = new FormData();
                formData.append('user_id', this.uid);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/fields/user_follow', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log(res.json());
                        var newARR = [];
                        newARR = res.json().result.followers;
                        for (var i = 0; i < newARR.length; i++) {
                            var lName = newARR[i].user_l_name.substring(0, 1);
                            var name = newARR[i].user_f_name + ' ' + lName + '.';
                            newARR[i].nameFormatted = name;
                            this.followersArray.push(newARR[i]);
                        }
                        var otherARR = [];
                        otherARR = res.json().result.following;
                        for (var i = 0; i < otherARR.length; i++) {
                            var lName = otherARR[i].user_l_name.substring(0, 1);
                            var name = otherARR[i].user_f_name + ' ' + lName + '.';
                            otherARR[i].nameFormatted = name;
                            this.followingArray.push(otherARR[i]);
                        }
                        this.api.dismissLoading();
                    }
                    else {
                        console.log(res.json());
                        this.api.dismissLoading();
                    }
                });
            });
        });
    }
    events() {
        this.api.Navigate('evenementcoachvue');
    }
    manage() {
        this.api.Navigate('evenements-coach');
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
};
CoacheditprofilePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_13__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_15__.AngularFireStorage },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ActionSheetController },
    { type: _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__.Keyboard },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform }
];
CoacheditprofilePage.propDecorators = {
    myInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ['input', { static: false },] }],
    myInput1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ['input1', { static: false },] }],
    myCourseInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ['courseInput', { static: false },] }],
    myDescInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ['descInput', { static: false },] }]
};
CoacheditprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-coacheditprofile',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coacheditprofile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coacheditprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_12__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_13__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient,
        _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera,
        _api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_15__.AngularFireStorage,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File,
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ActionSheetController,
        _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__.Keyboard,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform])
], CoacheditprofilePage);



/***/ }),

/***/ 50309:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/coacheditprofile/coacheditprofile.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"font-family: montserrat-medium; font-weight: bolder\"\n      class=\"top-fixed-heading uppercaes\"\n    >\n      {{name | titlecase}}\n      <br />\n      <ng-container *ngIf=\"userRank\">\n        {{'WATCHREVIEW.Text19' | translate}} -\n        <ion-text\n          style=\"\n            font-size: 16px;\n            font-weight: bold;\n            font-family: montserrat-medium;\n            color: #d3c117;\n          \"\n        >\n          {{userRank | number}}\n        </ion-text>\n      </ng-container>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"overall-content\">\n    <div class=\"top-black-block\"></div>\n    <div class=\"top-header-content\">\n      <div class=\"top-btn-toolbar\">\n        <ion-row>\n          <ion-col class=\"ion-text-left\" (click)=\"openListFollowers()\">\n            <div class=\"social-counterbox\">\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                *ngIf=\"!followerList\"\n                class=\"soc-count\"\n              >\n                {{followers}}\n              </div>\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                *ngIf=\"!followerList\"\n                class=\"soc-counttxt\"\n                [translate]=\"'COACHEDIT.Text1'\"\n              ></div>\n              <div\n                *ngIf=\"followerList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-count\"\n              >\n                {{followers}}\n              </div>\n              <div\n                *ngIf=\"followerList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-counttxt\"\n                [translate]=\"'COACHEDIT.Text1'\"\n              ></div>\n            </div>\n            <div *ngIf=\"followerList\" class=\"arrow-up\"></div>\n          </ion-col>\n          <ion-col\n            style=\"display: flex; flex-direction: row; justify-content: center\"\n          >\n            <div class=\"profile-center\">\n              <img *ngIf=\"!Avatar\" src=\"assets/images/profile-img.png\" />\n              <ion-avatar style=\"width: 100px; height: 100px\" *ngIf=\"Avatar\">\n                <ion-img [src]=\"imgUrl\"></ion-img>\n              </ion-avatar>\n              <div class=\"edit-pencilicon\" (click)=\"presentActionSheet(1)\">\n                <img src=\"assets/images/edit-pencil.png\" />\n              </div>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-text-right\" (click)=\"openListFollowing()\">\n            <div class=\"social-counterbox\">\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                *ngIf=\"!followingList\"\n                class=\"soc-count\"\n              >\n                {{following}}\n              </div>\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bold\"\n                *ngIf=\"!followingList\"\n                class=\"soc-counttxt\"\n                [translate]=\"'COACHEDIT.Text2'\"\n              ></div>\n              <div\n                *ngIf=\"followingList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-count\"\n              >\n                {{following}}\n              </div>\n              <div\n                *ngIf=\"followingList\"\n                style=\"\n                  color: #d3c117;\n                  font-family: montserrat-medium;\n                  font-weight: bold;\n                \"\n                class=\"soc-counttxt\"\n                [translate]=\"'COACHEDIT.Text2'\"\n              ></div>\n            </div>\n            <div *ngIf=\"followingList\" class=\"arrow-up\"></div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row\n          style=\"\n            text-align: center;\n            color: #d3c117;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          \"\n        >\n          <ion-title\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bold;\n              margin-top: 5%;\n            \"\n            >{{name | titlecase}}</ion-title\n          >\n        </ion-row>\n        <ion-row\n          style=\"\n            text-align: center;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            margin-top: 2%;\n          \"\n        >\n          <small style=\"font-family: montserrat\"\n            >{{gender}} - {{age}} <span [translate]=\"'COACHEDIT.Text3'\"></span\n          ></small>\n        </ion-row>\n\n        <div class=\"top-tabs\">\n          <ion-row>\n            <ion-col class=\"ion-no-padding\">\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bolder\"\n                class=\"tabs-block uppercaes selected-tabs\"\n                [translate]=\"'COACHEDIT.Text4'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" (click)=\"activity()\">\n              <div\n                style=\"font-family: montserrat-medium; font-weight: bolder\"\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'COACHEDIT.Text5'\"\n              ></div>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" (click)=\"reviewPage()\">\n              <div\n                style=\"font-family: montserrat-medium\"\n                class=\"tabs-block uppercaes\"\n                [translate]=\"'COACHEDIT.Text14'\"\n              ></div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"profile-inner-block\">\n      <!-- <ion-row class=\"gray-row\">\n                <b class=\"main-head\" style=\"font-family: montserrat-medium;\" [translate]=\"'COACHEDIT.Text6'\"></b>\n                <ion-row class=\"border-row\">\n                    <div class=\"left-bold-head\" style=\"font-family: montserrat-medium;font-weight: bold;\" [translate]=\"'COACHEDIT.Text7'\"></div>\n                    <div *ngIf=\"!editHour\" class=\"right-txt\" style=\"display: flex;\">\n                        <ion-text style=\"font-family: montserrat;\">{{hourly}}</ion-text>\n                       \n                        <ion-icon name=\"logo-euro\"></ion-icon>\n                        <img class=\"edit-row-icon\" (click)=\"perHour()\" src=\"assets/images/edit-pencil.png\"/>\n                    </div>\n                    <div class=\"right-txt\" *ngIf=\"editHour\">\n                        <img class=\"edit-row-icon\" (click)=\"perHour()\" src=\"assets/images/edit-pencil.png\"/>\n                        <ion-input type=\"number\" [(ngModel)]=\"hourRate\" #input></ion-input>\n                        <div *ngIf=\"editHour && displayHourError\" style=\"color: red;font-size: 10px;\" [translate]=\"'COACHEDIT.Text8'\"></div>\n                        <ion-icon name=\"logo-euro\"></ion-icon> \n                        \n                    </div>\n                    \n                </ion-row>\n                <ion-row class=\"border-row\">\n                    <div class=\"left-bold-head\" style=\"font-family: montserrat-medium;font-weight: bold;\" [translate]=\"'COACHEDIT.Text9'\"></div>\n                    <div *ngIf=\"!editPerson\" class=\"right-txt\" style=\"display: flex;\">\n                        <ion-text style=\"font-family: montserrat;\">{{person}}</ion-text>\n                        <ion-icon name=\"logo-euro\"></ion-icon>\n                        <img class=\"edit-row-icon\" (click)=\"perPerson()\" src=\"assets/images/edit-pencil.png\"/>\n                    </div>\n                    <div class=\"right-txt\" *ngIf=\"editPerson\">\n                        <img class=\"edit-row-icon\" (click)=\"perPerson()\" src=\"assets/images/edit-pencil.png\"/>\n                        <ion-input  type=\"number\" [(ngModel)]=\"personRate\" #input1></ion-input>\n                        <div *ngIf=\"editPerson && displayPersonError\" style=\"color: red;font-size: 10px;\" [translate]=\"'COACHEDIT.Text10'\"></div>\n                         <ion-icon name=\"logo-euro\"></ion-icon>\n                       \n                    </div>\n                   \n                </ion-row>\n            </ion-row> -->\n      <ion-row class=\"gray-row\">\n        <b\n          class=\"main-head\"\n          style=\"font-family: montserrat-medium\"\n          [translate]=\"'COACHEDIT.Text11'\"\n          >Cours(s) Proposé(s)\n          <img\n            class=\"edit-row-icon\"\n            (click)=\"course()\"\n            src=\"assets/images/edit-pencil.png\"\n          />\n        </b>\n        <p\n          *ngIf=\"!editCourse\"\n          class=\"basic-details\"\n          style=\"font-family: montserrat\"\n        >\n          {{user.spcat_name}}\n        </p>\n        <ion-input\n          *ngIf=\"editCourse\"\n          type=\"text\"\n          class=\"input-txt\"\n          [(ngModel)]=\"userDesc2\"\n          #courseInput\n        >\n        </ion-input>\n        <div\n          *ngIf=\"editCourse && displayEmptyError\"\n          style=\"color: red; font-size: 10px\"\n          [translate]=\"'COACHEDIT.Text12'\"\n        ></div>\n      </ion-row>\n      <ion-row class=\"gray-row\">\n        <b class=\"main-head\" style=\"font-family: montserrat-medium\"\n          >Description\n          <img\n            class=\"edit-row-icon\"\n            (click)=\"description()\"\n            src=\"assets/images/edit-pencil.png\"\n        /></b>\n        <p\n          *ngIf=\"!editDescription\"\n          class=\"basic-details\"\n          style=\"font-family: montserrat\"\n        >\n          «  {{userDescription}} »\n        </p>\n        <ion-input\n          *ngIf=\"editDescription\"\n          type=\"text\"\n          class=\"input-txt\"\n          [(ngModel)]=\"userDesc\"\n          #descInput\n        >\n        </ion-input>\n        <div\n          *ngIf=\"editDescription && displayEmptyError\"\n          style=\"color: red; font-size: 10px\"\n          [translate]=\"'COACHEDIT.Text13'\"\n        ></div>\n      </ion-row>\n\n      <ion-row\n        *ngIf=\"user.user_diploma_card=='undefined' || user.user_id_card=='undefined' ||true\"\n        style=\"display: flex; justify-content: center\"\n      >\n        <ion-button\n          expand=\"block\"\n          (click)=\"updateDocs()\"\n          style=\"font-weight: bold\"\n        >\n          <ion-icon slot=\"start\" name=\"warning\"></ion-icon>\n          {{'COACHEDIT.Text15'|translate}}\n        </ion-button>\n\n        <!-- <ion-text\n          style=\"\n            border: solid;\n            border-radius: 5px;\n            padding: 1rem;\n            border-color: rgb(255, 68, 68);\n            width: 100%;\n            text-align: center;\n            color: rgb(240, 0, 0);\n            border-width: 2px;\n          \"\n        ></ion-text> -->\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\" *ngIf=\"footerAction\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 40151:
/*!*************************************************************!*\
  !*** ./src/app/coacheditprofile/coacheditprofile.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.overall-content .top-black-block {\n  height: 60px;\n  background: #414141;\n  position: relative;\n}\n.overall-content .top-header-content {\n  position: relative;\n  margin-top: -50px;\n}\n.overall-content .social-counterbox {\n  text-align: center;\n  font-size: 12px;\n  color: #dddddd;\n  font-weight: bold;\n}\n.overall-content .soc-count {\n  font-size: 20px;\n  font-weight: bold;\n}\n.overall-content .profile-center {\n  width: 110px;\n  position: relative;\n  border: solid 5px #ffffff;\n  border-radius: 50%;\n  margin-left: 11%;\n}\n.overall-content .profile-center .edit-pencilicon {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  padding: 5px;\n  text-align: center;\n  background: #ffffff;\n  right: -5px;\n  top: 2px;\n  z-index: 10;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.overall-content .profile-center .edit-pencilicon img {\n  width: 100%;\n}\n.overall-content .top-profile-center {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.overall-content .top-profile-center small {\n  width: 100%;\n  display: inline-block;\n}\n.arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  margin-left: 33%;\n  border-bottom: 20px solid #D3C117;\n}\n.top-tabs {\n  display: inline-block;\n  width: 100%;\n  background: #ffffff;\n  --background: #ffffff;\n  --ion-color-base: #ffffff !important;\n  color: #cccccc;\n  position: relative;\n  padding: 10px 0px;\n  margin-top: 15px;\n  text-align: center;\n}\n.top-tabs .tabs-block {\n  position: relative;\n  text-transform: capitalize;\n}\n.top-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -13px;\n  left: 0px;\n  background: #cccccc;\n}\n.top-tabs .selected-tabs {\n  color: #D3C117;\n}\n.top-tabs .selected-tabs:before {\n  background: #D3C117;\n}\n.profile-inner-block {\n  padding: 10px 15px 10px 15px;\n}\n.profile-inner-block .gray-row {\n  width: 100%;\n  background: #f5f5f5;\n  padding: 10px 5px 5px 5px;\n  color: #666666;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n.profile-inner-block .gray-row .left-bold-head {\n  font-weight: bold;\n}\n.profile-inner-block .gray-row .right-txt {\n  text-align: right;\n}\n.profile-inner-block .edit-row-icon {\n  width: 15px;\n  margin-left: 8px;\n  float: right;\n}\n.profile-inner-block .main-head {\n  width: 100%;\n  display: inline-block;\n  font-weight: bold;\n}\n.profile-inner-block .border-row {\n  width: 100%;\n  padding: 8px 0px;\n  border-bottom: solid thin #cccccc;\n  display: inline-block;\n}\n.profile-inner-block .border-row .left-bold-head {\n  font-weight: bold;\n  display: inline-block;\n}\n.profile-inner-block .border-row .right-txt {\n  text-align: right;\n  display: inline-block;\n  float: right;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNoZWRpdHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBRUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQUNOO0FBQ0k7RUFDRSxXQUFBO0FBQ047QUFJRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBRko7QUFJRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUZKO0FBUUE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBTEY7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU5GO0FBT0U7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FBTEo7QUFPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFPRTtFQUNFLG1CQUFBO0FBTEo7QUFTQTtFQUNFLDRCQUFBO0FBTkY7QUFPRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxKO0FBTUk7RUFDRSxpQkFBQTtBQUpOO0FBTUk7RUFDRSxpQkFBQTtBQUpOO0FBT0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7QUFPRTtFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFRRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUFOSjtBQU9JO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUxOO0FBT0k7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBVUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEY7QUFRRTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBTko7QUFPSTtFQUNFLFVBQUE7RUFDRixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUxKO0FBTU07RUFDRSxVQUFBO0FBSlI7QUFNTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFKUiIsImZpbGUiOiJjb2FjaGVkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItZml4ZWQtdG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLnRvcC1nbG9iYWwtdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ub3ZlcmFsbC1jb250ZW50IHtcbiAgLnRvcC1ibGFjay1ibG9jayB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC50b3AtaGVhZGVyLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgfVxuICAuc29jaWFsLWNvdW50ZXJib3gge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNvYy1jb3VudCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5wcm9maWxlLWNlbnRlciB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IHNvbGlkIDVweCAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMTElO1xuICAgIC5lZGl0LXBlbmNpbGljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICB0b3A6IDJweDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgIH1cbiAgICAuZWRpdC1wZW5jaWxpY29uIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgIH1cbiAgIFxuICB9XG4gIC50b3AtcHJvZmlsZS1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRvcC1wcm9maWxlLWNlbnRlciBzbWFsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5cblxuXG4uYXJyb3ctdXAge1xuICB3aWR0aDogMDsgXG4gIGhlaWdodDogMDsgXG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMyU7XG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgI0QzQzExNztcbn1cblxuXG4udG9wLXRhYnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLnRhYnMtYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuICAudGFicy1ibG9jazpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHRvcDogLTEzcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gIH1cbiAgLnNlbGVjdGVkLXRhYnMge1xuICAgIGNvbG9yOiAjRDNDMTE3O1xuICB9XG4gIC5zZWxlY3RlZC10YWJzOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI0QzQzExNztcbiAgfVxufVxuXG4ucHJvZmlsZS1pbm5lci1ibG9jayB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XG4gIC5ncmF5LXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAxMHB4IDVweCA1cHggNXB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC5sZWZ0LWJvbGQtaGVhZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnJpZ2h0LXR4dCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbiAgLmVkaXQtcm93LWljb24ge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5tYWluLWhlYWRcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYm9yZGVyLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICNjY2NjY2M7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC5sZWZ0LWJvbGQtaGVhZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLnJpZ2h0LXR4dCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1maXhlZC10YWIge1xuICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDUlO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAuZm9vdGVyLWJ0bi10YWJzIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgLnJvdW5ke1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNDMTE3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_coacheditprofile_coacheditprofile_module_ts.js.map