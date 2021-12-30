"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mon-compte_mon-compte_module_ts"],{

/***/ 7521:
/*!*********************************************************!*\
  !*** ./src/app/mon-compte/mon-compte-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonComptePageRoutingModule": () => (/* binding */ MonComptePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _mon_compte_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mon-compte.page */ 19139);




const routes = [
    {
        path: '',
        component: _mon_compte_page__WEBPACK_IMPORTED_MODULE_0__.MonComptePage
    }
];
let MonComptePageRoutingModule = class MonComptePageRoutingModule {
};
MonComptePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonComptePageRoutingModule);



/***/ }),

/***/ 71569:
/*!*************************************************!*\
  !*** ./src/app/mon-compte/mon-compte.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonComptePageModule": () => (/* binding */ MonComptePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _mon_compte_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mon-compte-routing.module */ 7521);
/* harmony import */ var _mon_compte_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mon-compte.page */ 19139);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let MonComptePageModule = class MonComptePageModule {
};
MonComptePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _mon_compte_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonComptePageRoutingModule
        ],
        declarations: [_mon_compte_page__WEBPACK_IMPORTED_MODULE_1__.MonComptePage]
    })
], MonComptePageModule);



/***/ }),

/***/ 19139:
/*!***********************************************!*\
  !*** ./src/app/mon-compte/mon-compte.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonComptePage": () => (/* binding */ MonComptePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mon_compte_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./mon-compte.page.html */ 26886);
/* harmony import */ var _mon_compte_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mon-compte.page.scss */ 47546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98904);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 82128);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 30692);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ 91554);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);











// import { Transfer, TransferObject } from '@ionic-native/transfer';






let MonComptePage = class MonComptePage {
    constructor(api, storage, http, httpClient, camera, platform, 
    //  private transfer: Transfer,
    angularstorage, file, filePath, actionSheetController, alertController, router) {
        this.api = api;
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.camera = camera;
        this.platform = platform;
        this.angularstorage = angularstorage;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.router = router;
        this.emailEdit = false;
        this.passEdit = false;
        this.postalEdit = false;
        this.Avatar = true;
        this.uploaded1 = false;
        this.displayPostalError = false;
        this.displayPassError = false;
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
            this.storage.get('user_img').then((user_img) => {
                this.storage.get('user_type').then((user_type) => {
                    this.storage.get('user_lang').then((lang) => {
                        console.log(lang);
                        if (lang == 'English') {
                            this.English = true;
                        }
                        else {
                            this.English = false;
                        }
                        this.userType = user_type;
                        if (user_img === undefined ||
                            user_img === null ||
                            user_img === '') {
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
                                this.postalCode = res.json().result[0].user_postal_code;
                                this.emailId = res.json().result[0].user_email;
                                this.password = res.json().result[0].user_password;
                                this.imgUrl = res.json().result[0].user_img;
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
                        });
                    });
                });
            });
        });
    }
    editEmail() {
        if (this.emailEdit === true) {
            console.log(this.newEmail);
            const formData = new FormData();
            formData.append('user_id', this.uid);
            formData.append('user_email', this.newEmail);
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                .subscribe((res) => {
                if (res.json().status == 1) {
                    console.log('success');
                    this.emailEdit = false;
                    this.loadData();
                }
                else {
                    console.log('successfalse check code');
                }
            });
        }
        else {
            this.emailEdit = true;
        }
    }
    editPass() {
        if (this.passEdit === true) {
            console.log(this.password);
            if (this.password == null ||
                this.password == undefined ||
                this.password == '') {
                this.displayPassError = true;
            }
            else {
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_password', this.password);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log('success');
                        this.passEdit = false;
                        this.loadData();
                    }
                    else {
                        console.log('successfalse check code');
                    }
                });
            }
        }
        else {
            this.passEdit = true;
        }
    }
    editPostal() {
        if (this.postalEdit === true) {
            console.log(this.postalCode);
            if (this.postalCode == null ||
                this.postalCode == undefined ||
                this.postalCode == '') {
                this.displayPostalError = true;
            }
            else {
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_postal_code', this.postalCode);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log('success');
                        this.postalEdit = false;
                        this.loadData();
                    }
                    else {
                        console.log('successfalse check code');
                    }
                });
            }
        }
        else {
            this.postalEdit = true;
        }
    }
    presentActionSheet(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.English) {
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
                            text: 'to take a picture',
                            handler: () => {
                                this.takePicture1(this.camera.PictureSourceType.CAMERA, i);
                            },
                        },
                        {
                            text: 'Cancel ',
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
                            text: 'annuler ',
                            role: 'cancel',
                        },
                    ],
                });
                yield actionSheet.present();
            }
        });
    }
    takePicture1(sourceType, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is('ios')) {
                const options = {
                    quality: 100,
                    targetWidth: 900,
                    targetHeight: 600,
                    destinationType: this.camera.DestinationType.FILE_URI,
                    sourceType: sourceType,
                    encodingType: this.camera.EncodingType.JPEG,
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.imgUrl = value;
            this.api.dismissLoading();
            this.updateImage();
        })))
            .subscribe();
    }
    upload2Firebase1(image) {
        this.api.loading();
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.uploaded1 = true;
            this.imgUrl = value;
            this.api.dismissLoading();
            this.updateImage();
        })))
            .subscribe();
    }
    updateImage() {
        this.api.loading();
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
                if (this.English) {
                    this.api.toast('Profile Picture Updated');
                }
                else {
                    this.api.toast('Image de profil mise à jour');
                }
                this.loadData();
            }
            else {
                console.log('successfalse check code');
            }
        });
    }
    loadData() {
        this.api.loading();
        this.storage.get('user_img').then((user_img) => {
            if (user_img === undefined || user_img === null || user_img === '') {
                this.Avatar = false;
            }
            else {
                this.Avatar = true;
            }
        });
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
                this.postalCode = res.json().result[0].user_postal_code;
                this.emailId = res.json().result[0].user_email;
                this.imgUrl = res.json().result[0].user_img;
                this.storage.set('user_img', this.imgUrl);
                this.password = res.json().result[0].user_password;
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
            this.api.dismissLoading();
        });
    }
    events() {
        if (this.userType === '1') {
            this.api.Navigate('creer-evenement');
        }
        else {
            this.api.Navigate('evenementcoachvue');
        }
    }
    manage() {
        if (this.userType === '1') {
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
    rankingDetails() {
        this.api.Navigate('ranking');
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.English) {
                const alert = yield this.alertController.create({
                    cssClass: 'secondary',
                    message: 'Are you sure you want to delete your account?',
                    buttons: [
                        {
                            text: 'YES',
                            handler: () => {
                                console.log('Confirm Okay');
                                this.deleteAccount();
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
                    message: 'Voulez-vous vraiment supprimer votre compte?',
                    buttons: [
                        {
                            text: 'OUI',
                            handler: () => {
                                console.log('Confirm Okay');
                                this.deleteAccount();
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
    deleteAccount() {
        const formData = new FormData();
        formData.append('user_id', this.uid);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/del/user', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                if (this.English) {
                    var msg = 'Your account has been deleted';
                }
                else {
                    var msg = 'Votre compte a été supprimé';
                }
                this.api.toast(msg);
                this.storage.remove('user_id').then(() => {
                    this.storage.remove('user_type');
                    this.storage.remove('user_session');
                    this.storage.remove('user_email');
                    this.storage.remove('user_password');
                    this.storage.remove('user_f_name');
                    this.storage.remove('user_l_name');
                    this.storage.remove('user_img');
                    this.api.Navigate('connexion');
                });
            }
            else {
                console.log(res.json());
            }
        });
    }
};
MonComptePage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_11__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__.AngularFireStorage },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__.FilePath },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router }
];
MonComptePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-mon-compte',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mon_compte_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mon_compte_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_11__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient,
        _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__.AngularFireStorage,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File,
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__.FilePath,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router])
], MonComptePage);



/***/ }),

/***/ 26886:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/mon-compte/mon-compte.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"response3\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"font-family: montserrat-medium\"\n      class=\"top-fixed-heading uppercaes\"\n      [translate]=\"'MONCOMPTE.Text1'\"\n    ></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- <div class=\"overall-content\" [routerLink]=\"['/parametres']\"\n         routerLinkActive=\"router-link-active\"> -->\n  <div class=\"overall-content\">\n    <div class=\"top-black-block\"></div>\n    <div class=\"top-header-content\">\n      <div class=\"top-btn-toolbar\">\n        <ion-row>\n          <ion-col class=\"ion-text-left\"> </ion-col>\n          <ion-col style=\"justify-content: center; display: flex\">\n            <div class=\"profile-center\">\n              <img *ngIf=\"!Avatar\" src=\"assets/images/profile-img.png\" />\n              <ion-avatar style=\"height: 100px; width: 100px\" *ngIf=\"Avatar\">\n                <ion-img [src]=\"imgUrl\"></ion-img>\n              </ion-avatar>\n\n              <div class=\"edit-pencilicon\" (click)=\"presentActionSheet(1)\">\n                <img src=\"assets/images/edit-pencil.png\" />\n              </div>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-text-right\"> </ion-col>\n        </ion-row>\n        <ion-row class=\"top-profile-center ion-align-items-center\">\n          <div\n            class=\"ion-text-center\"\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bold;\n              color: #d3c117;\n            \"\n          >\n            {{name | titlecase}}\n          </div>\n          <div\n            class=\"small-txt ion-text-center\"\n            style=\"font-family: montserrat\"\n          >\n            {{gender}} - {{age}} <span [translate]=\"'MONCOMPTE.Text2'\"></span>\n          </div>\n          <h5\n            class=\"top-heading\"\n            style=\"font-family: montserrat-medium; font-weight: bold\"\n            [translate]=\"'MONCOMPTE.Text3'\"\n          ></h5>\n        </ion-row>\n      </div>\n    </div>\n    <div class=\"profile-inner-block\">\n      <ion-list>\n        <div class=\"setborder\">\n          <div\n            class=\"main-head\"\n            style=\"font-family: montserrat-medium; font-size: 12px\"\n            [translate]=\"'MONCOMPTE.Text4'\"\n          >\n            <!-- <img (click)=\"editEmail()\" class=\"edit-row-icon\" src=\"assets/images/edit-pencil.png\"/> -->\n          </div>\n          <div style=\"padding-top: 10px\">\n            <ion-label style=\"font-family: montserrat\" *ngIf=\"!emailEdit\"\n              >{{emailId}}</ion-label\n            >\n            <ion-input\n              *ngIf=\"emailEdit\"\n              type=\"email\"\n              class=\"input-txt\"\n              [(ngModel)]=\"newEmail\"\n            ></ion-input>\n          </div>\n        </div>\n\n        <div class=\"setborder\">\n          <div\n            class=\"main-head\"\n            style=\"font-family: montserrat-medium; font-size: 12px\"\n          >\n            <span [translate]=\"'MONCOMPTE.Text5'\"></span>\n            <img\n              (click)=\"editPass()\"\n              class=\"edit-row-icon\"\n              src=\"assets/images/edit-pencil.png\"\n            />\n          </div>\n          <div style=\"padding-top: 10px\">\n            <ion-label style=\"font-family: montserrat\" *ngIf=\"!passEdit\"\n              >**********</ion-label\n            >\n            <ion-input\n              *ngIf=\"passEdit\"\n              type=\"password\"\n              class=\"input-txt\"\n              [(ngModel)]=\"password\"\n            ></ion-input>\n            <div\n              *ngIf=\"passEdit && displayPassError\"\n              style=\"color: red; font-size: 10px\"\n              [translate]=\"'MONCOMPTE.Text6'\"\n            ></div>\n          </div>\n        </div>\n\n        <div class=\"setborder\">\n          <div\n            class=\"main-head\"\n            style=\"font-family: montserrat-medium; font-size: 12px\"\n          >\n            <span [translate]=\"'MONCOMPTE.Text7'\"></span>\n            <img\n              (click)=\"editPostal()\"\n              class=\"edit-row-icon\"\n              src=\"assets/images/edit-pencil.png\"\n            />\n          </div>\n          <div style=\"padding-top: 10px\">\n            <ion-label style=\"font-family: montserrat\" *ngIf=\"!postalEdit\"\n              >{{postalCode}}</ion-label\n            >\n            <ion-input\n              *ngIf=\"postalEdit\"\n              type=\"tel\"\n              class=\"input-txt\"\n              [(ngModel)]=\"postalCode\"\n            ></ion-input>\n            <div\n              *ngIf=\"postalEdit && displayPostalError\"\n              style=\"color: red; font-size: 10px\"\n              [translate]=\"'MONCOMPTE.Text8'\"\n            ></div>\n          </div>\n        </div>\n      </ion-list>\n\n      <ion-row class=\"ion-margin-bottom ion-margin-top ion-padding-top\">\n        <ion-col\n          class=\"ion-text-center\"\n          (click)=\"presentAlertConfirm()\"\n          style=\"display: flex; flex-direction: row; justify-content: center\"\n        >\n          <ion-icon name=\"trash\" item-left color=\"dark\"></ion-icon>\n          <b\n            margin-left\n            style=\"font-family: montserrat-medium; font-size: 12px\"\n            [translate]=\"'MONCOMPTE.Text9'\"\n          >\n          </b>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"events()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"manage()\">\n        <img\n          src=\"assets/images/unselectedcalendar.png\"\n          class=\"footer-img-date\"\n        />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{notificationArray}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 47546:
/*!*************************************************!*\
  !*** ./src/app/mon-compte/mon-compte.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.setborder {\n  border-bottom: 1px solid #CBCBCB !important;\n  margin-top: 15px;\n}\nion-input {\n  --padding-start: 0px;\n  margin-bottom: 10px;\n}\n.overall-content .top-black-block {\n  height: 60px;\n  background: #414141;\n  position: relative;\n}\n.overall-content .top-header-content {\n  position: relative;\n  margin-top: -50px;\n}\n.overall-content .profile-center {\n  width: 110px;\n  position: relative;\n  border: solid 5px #ffffff;\n  border-radius: 50%;\n}\n.overall-content .profile-center .edit-pencilicon {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  padding: 5px;\n  text-align: center;\n  background: #ffffff;\n  right: -5px;\n  top: 2px;\n  z-index: 10;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.overall-content .profile-center .edit-pencilicon img {\n  width: 100%;\n}\n.overall-content .top-profile-center {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.overall-content .top-profile-center .top-heading {\n  text-transform: uppercase;\n  font-size: 12px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #666666;\n  border-top: solid thin #e1e1e1;\n  padding-top: 15px;\n}\n.overall-content .top-profile-center small {\n  width: 100%;\n  display: inline-block;\n}\n.profile-inner-block {\n  padding: 10px;\n}\n.profile-inner-block .white-textbox-container .item-inner {\n  padding: 0px !important;\n  flex: inherit;\n}\n.profile-inner-block .deleteicon-withtxt {\n  width: 100%;\n  color: #666666;\n  font-size: 12px;\n  padding: 20px 0px 10px 0px;\n}\n.profile-inner-block .deleteicon-withtxt ion-icon {\n  font-size: 16px;\n}\n.profile-inner-block .edit-row-icon {\n  width: 15px;\n  margin-left: 8px;\n  float: right;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #D3C117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n  font-size: 12px;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbi1jb21wdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csa0JBQUE7RUFDQSw2QkFBQTtBQUNIO0FBQUc7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBRUw7QUFFQztFQUNFLDJDQUFBO0VBQ0EsZ0JBQUE7QUFDSDtBQUdBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBS0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBRko7QUFLRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0FBRk47QUFNRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBSko7QUFLSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUhOO0FBTUU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU9BO0VBQ0UsYUFBQTtBQUpGO0FBTUk7RUFFRSx1QkFBQTtFQUNBLGFBQUE7QUFMTjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFOSjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBUUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTko7QUFVQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFQRjtBQVFFO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFOSjtBQU9JO0VBQ0UsVUFBQTtFQUNGLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTEo7QUFNTTtFQUNFLFVBQUE7QUFKUjtBQU1NO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUpSIiwiZmlsZSI6Im1vbi1jb21wdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1maXhlZC10b3Age1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAudG9wLWdsb2JhbC10b29sYmFyIHtcbiAgICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgIH1cbiB9XG5cbiAuc2V0Ym9yZGVye1xuICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQkNCQ0IgIWltcG9ydGFudDtcbiAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiB9XG5cbmlvbi1pbnB1dHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gXG59XG5cbi5vdmVyYWxsLWNvbnRlbnQge1xuICAudG9wLWJsYWNrLWJsb2NrIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnRvcC1oZWFkZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICB9XG5cbiAgLnByb2ZpbGUtY2VudGVyIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogc29saWQgNXB4ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC5lZGl0LXBlbmNpbGljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICB0b3A6IDJweDtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgIH1cbiAgICAuZWRpdC1wZW5jaWxpY29uIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgIH1cbiAgfVxuICAudG9wLXByb2ZpbGUtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC50b3AtaGVhZGluZ3tcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgdGhpbiAjZTFlMWUxO1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgfVxuICB9XG4gIC50b3AtcHJvZmlsZS1jZW50ZXIgc21hbGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuLnByb2ZpbGUtaW5uZXItYmxvY2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICAud2hpdGUtdGV4dGJveC1jb250YWluZXJ7XG4gICAgLml0ZW0taW5uZXJcbiAgICB7XG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgIGZsZXg6IGluaGVyaXQ7XG4gICAgfVxuICB9XG4gIC5kZWxldGVpY29uLXdpdGh0eHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAxMHB4IDBweDtcbiAgICBpb24taWNvbntcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbiAgLmVkaXQtcm93LWljb24ge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG5cbi5mb290ZXItZml4ZWQtdGFiIHtcbiAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA1JTtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLmZvb3Rlci1idG4tdGFicyB7XG4gICAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIC5yb3VuZHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzQzExNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_mon-compte_mon-compte_module_ts.js.map