"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inscription-docs_inscription-docs_module_ts"],{

/***/ 62869:
/*!*********************************************************************!*\
  !*** ./src/app/inscription-docs/inscription-docs-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionDocsPageRoutingModule": () => (/* binding */ InscriptionDocsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _inscription_docs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inscription-docs.page */ 85336);




const routes = [
    {
        path: '',
        component: _inscription_docs_page__WEBPACK_IMPORTED_MODULE_0__.InscriptionDocsPage
    }
];
let InscriptionDocsPageRoutingModule = class InscriptionDocsPageRoutingModule {
};
InscriptionDocsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InscriptionDocsPageRoutingModule);



/***/ }),

/***/ 6232:
/*!*************************************************************!*\
  !*** ./src/app/inscription-docs/inscription-docs.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionDocsPageModule": () => (/* binding */ InscriptionDocsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _inscription_docs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inscription-docs-routing.module */ 62869);
/* harmony import */ var _inscription_docs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscription-docs.page */ 85336);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let InscriptionDocsPageModule = class InscriptionDocsPageModule {
};
InscriptionDocsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inscription_docs_routing_module__WEBPACK_IMPORTED_MODULE_0__.InscriptionDocsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_inscription_docs_page__WEBPACK_IMPORTED_MODULE_1__.InscriptionDocsPage]
    })
], InscriptionDocsPageModule);



/***/ }),

/***/ 85336:
/*!***********************************************************!*\
  !*** ./src/app/inscription-docs/inscription-docs.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionDocsPage": () => (/* binding */ InscriptionDocsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inscription_docs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inscription-docs.page.html */ 25438);
/* harmony import */ var _inscription_docs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscription-docs.page.scss */ 38793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 82128);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 30692);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ 91554);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ 24401);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








// import { Transfer, TransferObject } from '@ionic-native/transfer';











let InscriptionDocsPage = class InscriptionDocsPage {
    constructor(alertController, api, storage, camera, 
    //  private transfer: Transfer,
    file, filePath, platform, actionSheetController, toastCtrl, loadingCtrl, route, router, af, fs, afa, translateService) {
        this.alertController = alertController;
        this.api = api;
        this.storage = storage;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.router = router;
        this.af = af;
        this.fs = fs;
        this.afa = afa;
        this.translateService = translateService;
        this.alertShown = false;
        this.uploaded1 = false;
        this.uploaded2 = false;
        this.uploaded3 = false;
        this.userUpdate = false;
        this.user = {};
        this.otherSportsCategory = '';
        this.route.queryParams.subscribe((params) => {
            console.log(params);
            if (params && params.special) {
                this.storage.get('user_id').then((user_id) => {
                    this.user = JSON.parse(params.special);
                    if (this.user.user_id_card != 'undefined') {
                        this.uploaded1 = true;
                    }
                    if (this.user.user_diploma_card != 'undefined') {
                        this.uploaded2 = true;
                    }
                    if (this.user.user_attachment != 'undefined') {
                        this.uploaded3 = true;
                    }
                    this.userUpdate = true;
                });
            }
        });
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => {
            this.lang = lang;
            if (this.lang == 'English') {
                this.langNumber = '1';
            }
            else {
                this.langNumber = '2';
            }
        });
        this.storage.get('user_f_name').then((user_f_name) => {
            this.storage.get('user_l_name').then((user_l_name) => {
                this.storage.get('user_email').then((user_email) => {
                    this.storage.get('user_password').then((user_password) => {
                        this.storage.get('user_dob').then((user_dob) => {
                            this.storage.get('user_postal_code').then((user_postal_code) => {
                                this.storage.get('user_gender').then((user_gender) => {
                                    this.storage.get('user_img').then((user_img) => {
                                        this.storage.get('user_country').then((user_country) => {
                                            this.storage.get('user_city').then((user_city) => {
                                                this.storage
                                                    .get('user_fcm_key')
                                                    .then((user_fcm_key) => {
                                                    this.storage.get('user_desc').then((user_desc) => {
                                                        this.storage
                                                            .get('user_sport_category')
                                                            .then((user_sport_category) => {
                                                            this.storage
                                                                .get('user_other_sport_cate')
                                                                .then((user_other_sport_cate) => {
                                                                this.userfName = user_f_name;
                                                                this.userlName = user_l_name;
                                                                this.user_email = user_email;
                                                                this.user_password = user_password;
                                                                this.user_dob = user_dob;
                                                                this.user_postal_code = user_postal_code;
                                                                this.user_gender = user_gender;
                                                                this.user_img = user_img;
                                                                this.user_country = user_country;
                                                                this.user_city = user_city;
                                                                this.user_fcm_key = user_fcm_key;
                                                                this.user_desc = user_desc;
                                                                this.sportsInstructed = user_sport_category;
                                                                let selectedSports = '';
                                                                let selectSportsName = '';
                                                                for (var i = 0; i < user_sport_category.length; i++) {
                                                                    selectSportsName += `${user_sport_category[i].spcat_name},`;
                                                                    selectedSports += `${user_sport_category[i].spcat_id},`;
                                                                }
                                                                this.storage.set('user_sport_category', selectSportsName.substr(0, selectSportsName.length - 1));
                                                                this.sportsInstructed = selectedSports.substr(0, selectedSports.length - 1);
                                                                this.otherSportsCategory = user_other_sport_cate;
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.alertShown) {
                let heading = '';
                let body = '';
                this.translateService.get('WARNING.Text1').subscribe((data1) => {
                    heading = data1;
                    this.translateService.get('WARNING.Text2').subscribe((data2) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        body = data2;
                        // alert(heading);
                        // alert(body);
                        const alert2 = yield this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: heading,
                            subHeader: '',
                            message: body,
                            buttons: ['OK'],
                        });
                        yield alert2.present();
                        this.alertShown = true;
                    }));
                });
                // this.alertShown=true
                return;
            }
            if (!this.userUpdate) {
                const formData = new FormData();
                formData.append('user_l_name', this.userlName);
                formData.append('user_f_name', this.userfName);
                formData.append('user_email', this.user_email);
                formData.append('user_password', this.user_password);
                formData.append('user_dob', this.user_dob);
                formData.append('user_postal_code', this.user_postal_code);
                formData.append('user_gender', this.user_gender);
                formData.append('user_img', this.user_img);
                formData.append('user_type', '2');
                formData.append('user_country', this.user_country);
                formData.append('user_city', this.user_city);
                formData.append('user_fcm_key', this.user_fcm_key);
                formData.append('user_description1', this.user_desc);
                formData.append('user_sport_category', this.sportsInstructed);
                formData.append('user_other_sport_cate', this.otherSportsCategory);
                formData.append('user_id_card', this.lastImage);
                formData.append('user_diploma_card', this.nextImage);
                formData.append('user_attachment', this.annexure);
                formData.append('user_language', this.langNumber);
                // new form data for the input
                let res = yield this.api.postapi('madd/user', formData);
                if (res.status == 1) {
                    this.useId = res.result.toString();
                    // firebase
                    //   .auth()
                    //   .createUserWithEmailAndPassword(this.user_email, '12345678')
                    //   .then(() => {
                    //     this.afa.auth.currentUser
                    //       .updateProfile({
                    //         displayName: this.userfName + this.userlName,
                    //         photoURL: this.lastImage,
                    //       })
                    //       .catch((err) => {});
                    //   })
                    //   .catch((err) => {
                    //     console.log('falied email' + err);
                    //   });
                    this.fs
                        .collection('friends')
                        .doc(this.useId)
                        .set({
                        userEmail: this.user_email,
                        // userPhone: this.mobile,
                        hubSportId: this.useId,
                        Name: this.userfName + this.userlName,
                        displayName: this.userfName + this.userlName,
                        photoURL: this.user_img,
                        UserID: this.useId,
                        Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.fromDate(new Date()),
                    }, { merge: true });
                    this.storage.set('verifiedCoach', false);
                    // if(this.lang=="English"){
                    //   this.api.toast("Please login to continue.");
                    // }else{
                    //   this.api.toast("Veuillez vous connecter pour continuer.");
                    // }
                    this.storage.set('user_id', res.user_details[0].user_id);
                    this.storage.set('user_type', res.user_details[0].user_type);
                    this.storage.set('user_session', res.user_details[0].user_session);
                    this.storage.set('user_email', res.user_details[0].user_email);
                    this.storage.set('user_password', res.user_details[0].user_password);
                    this.storage.set('user_f_name', res.user_details[0].user_f_name);
                    this.storage.set('user_l_name', res.user_details[0].user_l_name);
                    this.storage.set('user_img', res.user_details[0].user_img);
                    this.storage.set('user_postal_code', res.user_details[0].user_postal_code);
                    if (res.user_details[0].user_subscription == '0') {
                        this.storage.set('verifiedCoach', false);
                    }
                    else {
                        this.storage.set('verifiedCoach', true);
                    }
                    this.api.Navigate('evenementcoachvue');
                }
                else {
                    // this.creatform();
                    this.api.toast(res.msg);
                }
            }
            else {
                const formData = new FormData();
                formData.append('user_id', this.user.user_id);
                formData.append('user_id_card', this.lastImage);
                formData.append('user_diploma_card', this.nextImage);
                formData.append('user_attachment', this.annexure);
                let res = yield this.api.postapi('madd/user', formData);
                if (res.status == 1) {
                    if (this.langNumber == '1') {
                        this.api.toast('Thank you for your submission. We will verify your account and send you confirmation.');
                        this.api.Navigateroot('evenementcoachvue');
                    }
                    else {
                        this.api.toast('Merci pour votre soumission. Nous vérifierons votre compte et vous enverrons une confirmation.');
                        this.api.Navigateroot('evenementcoachvue');
                    }
                }
                else {
                    this.api.toast(res.json().msg);
                }
            }
        });
    }
    presentActionSheet(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.lang == 'English') {
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
        });
    }
    takePicture(sourceType) {
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.file
                .resolveLocalFilesystemUrl(imageData)
                .then((entry) => {
                entry.file((file) => {
                    console.log('Hello there');
                    console.log(file);
                    if (this.uploaded1 === false) {
                        this.upload2Firebase1(file);
                    }
                    else if (this.uploaded1 === true) {
                        this.upload2Firebase2(file);
                    }
                    // this.readFile(file);
                });
            });
        }, (err) => {
            // Handle error
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
            else if (i === 2) {
                this.upload2Firebase2(imgBlob);
            }
            else {
                this.upload2Firebase3(imgBlob);
            }
        };
        reader.readAsArrayBuffer(file);
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
    upload2Firebase1(image) {
        this.api.loading();
        const file = image;
        const filePath = this.makeid(5);
        const fileRef = this.af.ref(filePath);
        //const newFile = new File(file);
        // let newFile= file.getURL().getFile();
        const task = this.af.upload(filePath, file);
        console.log(filePath);
        console.log(file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.uploaded1 = true;
            this.lastImage = value;
            this.api.dismissLoading();
            if (this.lang == 'English') {
                this.api.toast('ID uploaded');
            }
            else {
                this.api.toast('ID téléchargé');
            }
        })))
            .subscribe();
    }
    upload2Firebase2(image) {
        this.api.loading();
        const file = image;
        console.log('hello' + typeof file);
        const filePath = this.makeid(5);
        const fileRef = this.af.ref(filePath);
        //  new File([file], , {type:file})
        const task = this.af.upload(filePath, file);
        console.log(filePath);
        console.log(file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.uploaded2 = true;
            this.nextImage = value;
            this.api.dismissLoading();
            if (this.lang == 'English') {
                this.api.toast('Document Uploaded');
            }
            else {
                this.api.toast('Document téléchargé.');
            }
        })))
            .subscribe();
    }
    upload2Firebase3(image) {
        this.api.loading();
        const file = image;
        console.log('hello' + typeof file);
        const filePath = this.makeid(5);
        const fileRef = this.af.ref(filePath);
        //  new File([file], , {type:file})
        const task = this.af.upload(filePath, file);
        console.log(filePath);
        console.log(file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.uploaded3 = true;
            this.annexure = value;
            // this.api.toast("Annexes Uploaded");
            this.api.dismissLoading();
            if (this.lang == 'English') {
                this.api.toast('Press Submit to continue');
            }
            else {
                this.api.toast('Appuyez sur SUIVANT pour continuer');
            }
        })))
            .subscribe();
    }
    uploadFile(event) {
        const file = event.target.files[0];
        const filePath = this.makeid(5);
        const fileRef = this.af.ref(filePath);
        const task = this.af.upload(filePath, file);
        console.log(filePath);
        console.log(file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.lastImage = value;
            this.uploaded1 = true;
        })))
            .subscribe();
    }
    uploadFile1(event) {
        const file1 = event.target.files[0];
        const filePath1 = this.makeid(5);
        const fileRef1 = this.af.ref(filePath1);
        const task1 = this.af.upload(filePath1, file1);
        // observe percentage changes
        this.uploadPercent1 = task1.percentageChanges();
        // get notified when the download URL is available
        task1
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => fileRef1.getDownloadURL().subscribe((value) => {
            this.nextImage = value;
            this.uploaded2 = true;
        })))
            .subscribe();
    }
};
InscriptionDocsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_13__.AngularFireStorage },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService }
];
InscriptionDocsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-inscription-docs',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inscription_docs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inscription_docs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController,
        _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage,
        _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File,
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_13__.AngularFireStorage,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__.AngularFirestore,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService])
], InscriptionDocsPage);



/***/ }),

/***/ 25438:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inscription-docs/inscription-docs.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n  <ion-toolbar class=\"terms-headersection\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"connexion\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <section>\n    <div class=\"center-content\">\n      <div class=\"professional-block\">\n        <ion-row class=\"first-margin\">\n          <ion-col\n            style=\"font-family: montserrat-medium\"\n            class=\"ion-no-padding\"\n            class=\"question-box-main\"\n            [translate]=\"'INSCRIPTIONDOCS.Text1'\"\n          >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"forword-icons-withans\" (click)=\"presentActionSheet(1)\">\n            <ion-title\n              size=\"small\"\n              class=\"ion-no-padding\"\n              [translate]=\"'INSCRIPTIONDOCS.Text5'\"\n            ></ion-title>\n            <div *ngIf=\"!uploaded1\" class=\"redo-box\">\n              <img src=\"assets/images/money-euro.png\" />\n            </div>\n            <img\n              class=\"redo-box img\"\n              *ngIf=\"uploaded1\"\n              src=\"../../assets/images/coloredupload.png\"\n            />\n          </div>\n        </ion-row>\n        <ion-row>\n          <div class=\"forword-icons-withans\" (click)=\"presentActionSheet(2)\">\n            <ion-title\n              size=\"small\"\n              class=\"ion-no-padding\"\n              [translate]=\"'INSCRIPTIONDOCS.Text2'\"\n            ></ion-title>\n            <div class=\"redo-box\" *ngIf=\"!uploaded2\">\n              <img src=\"assets/images/money-euro.png\" />\n            </div>\n            <img\n              class=\"redo-box img\"\n              *ngIf=\"uploaded2\"\n              src=\"../../assets/images/coloredupload.png\"\n            />\n          </div>\n        </ion-row>\n        <ion-row>\n          <div class=\"forword-icons-withans\" (click)=\"presentActionSheet(3)\">\n            <ion-title\n              size=\"small\"\n              class=\"ion-no-padding\"\n              [translate]=\"'INSCRIPTIONDOCS.Text3'\"\n            ></ion-title>\n            <div class=\"redo-box\" *ngIf=\"!uploaded3\">\n              <img src=\"assets/images/money-euro.png\" />\n            </div>\n            <img\n              class=\"redo-box img\"\n              *ngIf=\"uploaded3\"\n              src=\"../../assets/images/coloredupload.png\"\n            />\n          </div>\n        </ion-row>\n        <ion-row class=\"btn-profession-box\">\n          <button\n            ion-button\n            class=\"global-submit-button global-btn\"\n            style=\"background-color: #d3c117; color: white\"\n            (click)=\"submit()\"\n            [translate]=\"'INSCRIPTIONDOCS.Text4'\"\n          ></button>\n        </ion-row>\n        <div (click)=\"submit()\" style=\"margin-top: 1rem; color: white\">\n          Skip\n        </div>\n      </div>\n    </div>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ 38793:
/*!*************************************************************!*\
  !*** ./src/app/inscription-docs/inscription-docs.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".first-margin {\n  margin-bottom: 30px;\n}\n\n.redo-box img {\n  margin-top: 10px;\n  width: 20px;\n}\n\n.professional-block {\n  width: calc(100% - 80px);\n  max-width: 400px;\n  margin: 0px auto;\n}\n\n.terms-headersection {\n  color: #ffffff;\n  background: transparent;\n}\n\n.question-count {\n  color: #ffaa00;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 16px !important;\n}\n\n.question-box-main {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.forword-icons-withans {\n  padding-right: 40px;\n  position: relative;\n  width: 100%;\n  color: #ffffff;\n  margin: 10px 0px;\n  min-height: 40px;\n  text-align: left;\n}\n\n.forword-icons-withans .redo-box {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  background: rgba(255, 255, 255, 0.6);\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  border-radius: 50%;\n}\n\n.btn-profession-box {\n  margin-top: 50px;\n}\n\nion-content {\n  --background: url('login-bg.svg') no-repeat 52% center/cover;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2NyaXB0aW9uLWRvY3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUsbUJBQUE7QUFESjs7QUFHRTtFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUdFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBR0o7O0FBQUU7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFESTtFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRU47O0FBRUU7RUFFRSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsNERBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQUFKIiwiZmlsZSI6Imluc2NyaXB0aW9uLWRvY3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5maXJzdC1tYXJnaW5cbiAge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgLnJlZG8tYm94IGltZ1xuICB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAucHJvZmVzc2lvbmFsLWJsb2NrIHtcbiAgICB3aWR0aDpjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLnRlcm1zLWhlYWRlcnNlY3Rpb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5xdWVzdGlvbi1jb3VudCB7XG4gICAgY29sb3I6ICNmZmFhMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgfVxuICAucXVlc3Rpb24tYm94LW1haW4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5mb3J3b3JkLWljb25zLXdpdGhhbnNcbiAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC5yZWRvLWJveFxuICAgIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1wcm9mZXNzaW9uLWJveFxuICB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luLWJnLnN2ZycpIG5vLXJlcGVhdCA1MiUgY2VudGVyL2NvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_inscription-docs_inscription-docs_module_ts.js.map