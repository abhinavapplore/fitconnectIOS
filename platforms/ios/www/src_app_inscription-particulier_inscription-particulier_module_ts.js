"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inscription-particulier_inscription-particulier_module_ts"],{

/***/ 46867:
/*!***********************************************************************************!*\
  !*** ./src/app/inscription-particulier/inscription-particulier-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionParticulierPageRoutingModule": () => (/* binding */ InscriptionParticulierPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _inscription_particulier_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inscription-particulier.page */ 18770);




const routes = [
    {
        path: '',
        component: _inscription_particulier_page__WEBPACK_IMPORTED_MODULE_0__.InscriptionParticulierPage
    }
];
let InscriptionParticulierPageRoutingModule = class InscriptionParticulierPageRoutingModule {
};
InscriptionParticulierPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InscriptionParticulierPageRoutingModule);



/***/ }),

/***/ 47493:
/*!***************************************************************************!*\
  !*** ./src/app/inscription-particulier/inscription-particulier.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionParticulierPageModule": () => (/* binding */ InscriptionParticulierPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _inscription_particulier_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inscription-particulier-routing.module */ 46867);
/* harmony import */ var _inscription_particulier_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscription-particulier.page */ 18770);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let InscriptionParticulierPageModule = class InscriptionParticulierPageModule {
};
InscriptionParticulierPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _inscription_particulier_routing_module__WEBPACK_IMPORTED_MODULE_0__.InscriptionParticulierPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        entryComponents: [],
        declarations: [_inscription_particulier_page__WEBPACK_IMPORTED_MODULE_1__.InscriptionParticulierPage]
    })
], InscriptionParticulierPageModule);



/***/ }),

/***/ 18770:
/*!*************************************************************************!*\
  !*** ./src/app/inscription-particulier/inscription-particulier.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionParticulierPage": () => (/* binding */ InscriptionParticulierPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inscription_particulier_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inscription-particulier.page.html */ 90106);
/* harmony import */ var _inscription_particulier_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscription-particulier.page.scss */ 92787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-country/select-country.page */ 67823);
/* harmony import */ var _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/fcm/ngx */ 38365);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 98904);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 64637);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 82128);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 30692);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/storage */ 91554);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/document-viewer/ngx */ 20353);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../translate-config.service */ 47464);












// import { Transfer, TransferObject } from '@ionic-native/transfer';












let InscriptionParticulierPage = class InscriptionParticulierPage {
    constructor(api, formBuilder, camera, httpClient, router, fileOpener, angularstorage, file, filePath, actionSheetController, modalCtrl, fcm, storage, document, fs, afa, platform, translateSevice) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.httpClient = httpClient;
        this.router = router;
        this.fileOpener = fileOpener;
        this.angularstorage = angularstorage;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.fcm = fcm;
        this.storage = storage;
        this.document = document;
        this.fs = fs;
        this.afa = afa;
        this.platform = platform;
        this.translateSevice = translateSevice;
        this.showCitySuggestion = false;
        this.country = '';
        this.height = window.innerHeight;
        this.uploaded1 = false;
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD');
        this.countryListAllIsoData = [];
        this.showContList = false;
        this.submitted = false;
        this.creatform();
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            console.log('language' + lang);
            if (lang == 'English') {
                this.English = true;
            }
            else {
                this.English = false;
            }
        }));
        this.fcm.getToken().then((tokenDevice) => {
            console.log(tokenDevice);
            this.deviceKey = tokenDevice;
            this.storage.set('user_fcm_key', this.deviceKey);
            this.storage.set('user_type', '1');
        });
    }
    ionViewWillEnter() {
        this.countryListAllIsoData = [];
        const formData = new FormData();
        this.httpClient
            .post(' http://fitconnected.prometteur.in/index.php/Api/fields/country_list', formData)
            .subscribe((res) => {
            console.log(res);
            this.countryListAllIsoData = res.result;
        });
    }
    searchContFunc(ev) {
        var arr = [];
        for (let i = 0; i < this.countryListAllIsoData.length; i++) {
            var input = this.countryListAllIsoData[i];
            arr.push(input);
            let val = ev.target.value;
            // alert(typeof(val));
            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                // Filter the items
                this.searchName = arr.filter(function (item) {
                    return item.con_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
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
    selectContItem(item) {
        console.log(item);
        this.countryId = item.con_id;
        this.country = item.con_name;
        this.registerForm.patchValue({ country: this.country });
        this.showContList = false;
        return;
    }
    creatform() {
        this.registerForm = this.formBuilder.group({
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.email]],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            postalcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            country: [this.country, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(6)]],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            conditions: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.requiredTrue],
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    onSubmit() {
        console.log('working');
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.registerparticulier();
        }
    }
    presentActionSheet(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
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
                try {
                    yield this.file.removeFile(newBaseFilesystemPath, tempFilename);
                }
                catch (error) { }
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
    // async takePicture1(sourceType,i){
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.FILE_URI,
    //     sourceType: sourceType,
    //     encodingType: this.camera.EncodingType.JPEG,
    //   };
    //   const tempImage = await this.camera.getPicture(options);
    //   const newBaseFilesystemPath = this.file.dataDirectory;
    //   let newpath=await this.filePath.resolveNativePath(tempImage);
    //   const tempFilename = newpath.substr(newpath.lastIndexOf('/') + 1);
    //   const tempBaseFilesystemPath = newpath.substr(0, newpath.lastIndexOf('/') + 1);
    //   await this.file.copyFile(tempBaseFilesystemPath, tempFilename,
    //                            newBaseFilesystemPath, tempFilename);
    //   const storedPhoto = newBaseFilesystemPath + tempFilename;
    //   this.file.resolveLocalFilesystemUrl(storedPhoto)
    //   .then(entry => {
    //       ( < FileEntry > entry).file(file => this.readFile(file,i))
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     //  this.presentToast('Error while reading file.');
    //   });
    // }
    conditionsPage() {
        //    let filePath = this.file.applicationDirectory + 'www/assets';
        //    if(this.platform.is('android')){
        // let fakeName = Date.now();
        // this.file.copyFile(filePath, 'register.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then((results)=>{
        // this.fileOpener.open(results.nativeURL, 'application/pdf')
        // })
        //    }else{
        //     const options: DocumentViewerOptions = {
        //       title: 'CGU'
        //     }
        //     this.document.viewDocument(`${filePath}/register.pdf`, 'application/pdf', options)
        //    }
        this.api.Navigate('conditions');
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.userAvatarStr = value;
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => fileRef.getDownloadURL().subscribe((value) => {
            this.uploaded1 = true;
            this.lastImage = value;
            this.api.dismissLoading();
        })))
            .subscribe();
    }
    registerparticulier() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var dateOfBirth = moment__WEBPACK_IMPORTED_MODULE_10__(this.registerForm.value.dob).format('YYYY-MM-DD');
            console.log(dateOfBirth);
            if (dateOfBirth >= this.todayDate) {
                console.log(dateOfBirth);
                console.log(this.todayDate);
                if (this.English) {
                    this.api.toast('DOB cannot be future date.');
                }
                else {
                    this.api.toast('DOB ne peut pas être une date future.');
                }
            }
            else {
                if (this.lastImage === '' ||
                    this.lastImage === null ||
                    this.lastImage === undefined) {
                    if (this.English) {
                        this.api.toast('Please upload display picture.');
                    }
                    else {
                        this.api.toast("Veuillez télécharger l'image d'affichage");
                    }
                }
                else {
                    const formData = new FormData();
                    formData.append('user_email', this.registerForm.value.email);
                    let res = yield this.api.postapi('fields/check_email_exists', formData);
                    if (res.result == true) {
                        if (this.English) {
                            var msg = 'Email Exists.';
                        }
                        else {
                            var msg = 'Le mail existe.';
                        }
                        this.api.toast(msg);
                    }
                    else {
                        this.storage.set('user_type', '1');
                        this.storage.set('user_dob', dateOfBirth);
                        this.storage.set('user_city', this.registerForm.value.city);
                        this.storage.set('user_country', this.registerForm.value.country);
                        this.storage.set('user_gender', this.registerForm.value.gender);
                        this.storage.set('user_postal_code', this.registerForm.value.postalcode);
                        this.storage.set('user_email', this.registerForm.value.email);
                        this.storage.set('user_password', this.registerForm.value.password);
                        this.storage.set('user_fcm_key', this.deviceKey);
                        this.storage.set('user_f_name', this.registerForm.value.fname);
                        this.storage.set('user_l_name', this.registerForm.value.lname);
                        this.storage.set('user_img', this.lastImage);
                        // this.api.setstorage("user_id",res.result);
                        this.api.Navigate('question');
                    }
                    // this.storage.set('user_id', res.result );
                }
            }
            // else{
            //   this.submitted = false;
            //   // this.creatform();
            //   this.api.toast(res.msg)
            // }
        });
    }
    getSuggestion() {
        const formData = new FormData();
        formData.append('city_country_id', this.countryId);
        formData.append('city_name', this.registerForm.value.city);
        this.httpClient
            .post(' http://fitconnected.prometteur.in/index.php/Api/fields/city_list', formData)
            .subscribe((res) => {
            console.log(res);
            this.cityArray = res.result;
            this.showCitySuggestion = true;
        });
    }
    selectCity(x) {
        this.showCitySuggestion = false;
        this.cityName = x;
        this.registerForm.value.city = x;
    }
    selectcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_3__.SelectCountryPage,
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            this.countryId = data.componentProps.country.con_id;
            this.country = data.componentProps.country.con_name;
            this.registerForm.patchValue({ country: this.country });
            console.log('aaaaaaaaaaaaaaaaa', data.componentProps.country);
        });
    }
    setconditions(x) {
        this.registerForm.patchValue({ conditions: x });
    }
};
InscriptionParticulierPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__.FileOpener },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_18__.AngularFireStorage },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__.FilePath },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController },
    { type: _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_20__.Storage },
    { type: _awesome_cordova_plugins_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__.DocumentViewer },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_21__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_22__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_12__.TranslateConfigService }
];
InscriptionParticulierPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({
        selector: 'app-inscription-particulier',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inscription_particulier_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inscription_particulier_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder,
        _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router,
        _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__.FileOpener,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_18__.AngularFireStorage,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File,
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__.FilePath,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ActionSheetController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController,
        _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_20__.Storage,
        _awesome_cordova_plugins_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__.DocumentViewer,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_21__.AngularFirestore,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_22__.AngularFireAuth,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_12__.TranslateConfigService])
], InscriptionParticulierPage);



/***/ }),

/***/ 90106:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inscription-particulier/inscription-particulier.page.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen forceOverscroll=\"false\">\n  <ion-header no-border slot=\"fixed\">\n    <ion-toolbar class=\"terms-headersection\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" defaultHref=\"connexion\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <div\n    class=\"bg-image-full\"\n    [ngStyle]=\"{'height':height+'px'}\"\n    style=\"overflow: scroll\"\n  >\n    <br />\n    <br />\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <ion-item\n        lines=\"none\"\n        (click)=\"presentActionSheet(1)\"\n        style=\"padding-top: 1rem\"\n      >\n        <div class=\"profile-img-center\">\n          <div class=\"profile-img-block\">\n            <!-- <div style=\"display: flex;\n          justify-content: center;\" class=\"pro-img-container\"> -->\n\n            <ion-avatar class=\"avtarClass\">\n              <img *ngIf=\"!uploaded1\" src=\"assets/images/default-pic.png\" />\n              <ion-img *ngIf=\"uploaded1\" [src]=\"lastImage\"></ion-img>\n            </ion-avatar>\n            <!-- </div> -->\n            <div class=\"file-up-btnbox\">\n              <ion-icon\n                class=\"lg-rg-icon\"\n                id=\"input_container\"\n                name=\"add\"\n                item-right\n              >\n              </ion-icon>\n\n              <!-- <input id=\"file-input\" type=\"file\" (change)=\"uploadFile($event)\" style=\"display: none;\" />\n            <label style=\" width: 260px;\" for=\"file-input\">\n            </label> -->\n              <!-- <ion-input type=\"file\" accept=\"image/*\" class=\"upload-file\"></ion-input> -->\n            </div>\n          </div>\n        </div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label\n          position=\"floating\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text1'\"\n        ></ion-label>\n        <ion-input type=\"text\" formControlName=\"lname\" name=\"lname\"></ion-input>\n        <div\n          style=\"font-size: 12px; color: #ffffff; font-weight: bold\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text2'\"\n        ></div>\n        <div *ngIf=\"submitted && f.lname.errors\" class=\"invalid-feedback left\">\n          <div\n            *ngIf=\"f.lname.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text3'\"\n          ></div>\n        </div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label\n          position=\"floating\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text4'\"\n        ></ion-label>\n        <ion-input type=\"text\" formControlName=\"fname\" name=\"fname\"></ion-input>\n        <div *ngIf=\"submitted && f.fname.errors\" class=\"invalid-feedback left\">\n          <div\n            *ngIf=\"f.fname.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text5'\"\n          ></div>\n        </div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label\n          position=\"floating\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text6'\"\n        ></ion-label>\n        <ion-input\n          type=\"email\"\n          formControlName=\"email\"\n          name=\"email\"\n        ></ion-input>\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback left\">\n          <div\n            *ngIf=\"f.email.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text7'\"\n          >\n            Entrez l'ID de messagerie\n          </div>\n          <div\n            *ngIf=\"f.email.errors.email\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text8'\"\n          ></div>\n        </div>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label\n          position=\"floating\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text9'\"\n        ></ion-label>\n        <!-- [(ngModel)]=\"searchNameTerm\" -->\n        <ion-input\n          (ionInput)=\"searchContFunc($event)\"\n          type=\"text\"\n          formControlName=\"country\"\n          name=\"country\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.country.errors\"\n          class=\"invalid-feedback left\"\n        >\n          <div\n            *ngIf=\"f.country.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text10'\"\n          ></div>\n        </div>\n      </ion-item>\n\n      <div *ngIf=\"showContList\">\n        <ion-item\n          lines=\"none\"\n          *ngFor=\"let city of searchName\"\n          (click)=\"selectContItem(city)\"\n        >\n          <ion-text style=\"color: white\">{{city.con_name}}</ion-text>\n        </ion-item>\n      </div>\n\n      <ion-item lines=\"none\">\n        <ion-label\n          position=\"floating\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text11'\"\n        ></ion-label>\n        <ion-input\n          (ionInput)=\"getSuggestion()\"\n          type=\"text\"\n          [(ngModel)]=\"cityName\"\n          formControlName=\"city\"\n          name=\"city\"\n        >\n        </ion-input>\n        <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback left\">\n          <div\n            *ngIf=\"f.city.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text12'\"\n          ></div>\n        </div>\n      </ion-item>\n      <div *ngIf=\"showCitySuggestion\">\n        <ion-item\n          lines=\"none\"\n          *ngFor=\"let city of cityArray\"\n          (click)=\"selectCity(city.city_name)\"\n        >\n          <ion-text style=\"color: white\">{{city.city_name}}</ion-text>\n        </ion-item>\n      </div>\n\n      <ion-item lines=\"none\">\n        <ion-label\n          position=\"floating\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text13'\"\n        ></ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"postalcode\"\n          name=\"postalcode\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.postalcode.errors\"\n          class=\"invalid-feedback left\"\n        >\n          <div\n            *ngIf=\"f.postalcode.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text14'\"\n          ></div>\n        </div>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label\n          position=\"floating\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text15'\"\n        ></ion-label>\n        <ion-input\n          type=\"password\"\n          formControlName=\"password\"\n          name=\"password\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.password.errors\"\n          class=\"invalid-feedback left\"\n        >\n          <div\n            *ngIf=\"f.password.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text16'\"\n          ></div>\n          <div\n            *ngIf=\"f.password.errors.minlength\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text17'\"\n          ></div>\n        </div>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label\n          position=\"floating\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text18'\"\n        ></ion-label>\n        <ion-datetime\n          *ngIf=\"English\"\n          displayFormat=\"DD-MMM-YY\"\n          pickerFormat=\"DD-MMM-YY\"\n          formControlName=\"dob\"\n          name=\"dob\"\n          monthShortNames=\"jan,feb,mar,apr,may,june,july,aug,sept,oct,nov,dec\"\n          cancelText=\"Cancel\"\n          doneText=\"Done\"\n        >\n        </ion-datetime>\n        <ion-datetime\n          *ngIf=\"!English\"\n          displayFormat=\"DD-MMM-YY\"\n          pickerFormat=\"DD-MMM-YY\"\n          formControlName=\"dob\"\n          name=\"dob\"\n          monthShortNames=\"jan,fév,mar,avr,mai,juin,juil,août,sept,oct,nov,déc\"\n          cancelText=\"annuler\"\n          doneText=\"Valider\"\n        >\n        </ion-datetime>\n        <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback left\">\n          <div\n            *ngIf=\"f.dob.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text19'\"\n          ></div>\n        </div>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-item lines=\"none\">\n            <ion-label\n              style=\"font-size: 14px\"\n              [translate]=\"'INSCRIPTIONPARTICULAR.Text20'\"\n            >\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"9\" style=\"text-align: center; margin-top: 3%\">\n          <ion-radio-group\n            formControlName=\"gender\"\n            name=\"gender\"\n            style=\"display: flex\"\n          >\n            <ion-col size=\"6\">\n              <ion-radio value=\"1\" class=\"ion-radio\"></ion-radio>\n              <ion-label\n                style=\"font-size: 16px; margin-left: 10%\"\n                [translate]=\"'INSCRIPTIONPARTICULAR.Text21'\"\n              ></ion-label>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-radio value=\"2\"></ion-radio>\n              <ion-label\n                style=\"font-size: 16px; margin-left: 10%\"\n                [translate]=\"'INSCRIPTIONPARTICULAR.Text22'\"\n              ></ion-label>\n            </ion-col>\n          </ion-radio-group>\n        </ion-col>\n\n        <div\n          *ngIf=\"submitted && f.gender.errors\"\n          class=\"invalid-feedback left\"\n          style=\"width: 100%; text-align: center\"\n        >\n          <div\n            *ngIf=\"f.gender.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text23'\"\n          ></div>\n        </div>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" style=\"display: flex; justify-content: flex-end\">\n          <ion-radio\n            class=\"radio-btn\"\n            value=\"any\"\n            formControlName=\"conditions\"\n            name=\"conditions\"\n            (ngModelChange)=\"setconditions($event)\"\n          ></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\">\n          <ion-label\n            style=\"font-size: 14px; margin-top: 19px\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text24'\"\n          ></ion-label>\n\n          <b\n            style=\"color: white\"\n            (click)=\"conditionsPage()\"\n            class=\"ion-no-padding\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text25'\"\n            style=\"\n              text-decoration: underline;\n              font-family: montserrat-medium;\n              font-weight: bold;\n              color: #ffffff !important;\n            \"\n          >\n          </b>\n        </ion-col>\n        <div\n          *ngIf=\"submitted && f.conditions.errors\"\n          class=\"invalid-feedback left\"\n          style=\"width: 100%; text-align: center\"\n        >\n          <div\n            *ngIf=\"f.conditions.errors.required\"\n            [translate]=\"'INSCRIPTIONPARTICULAR.Text26'\"\n          ></div>\n        </div>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <button\n          ion-button\n          class=\"global-submit-button global-btn\"\n          style=\"color: white; background-color: #d3c117\"\n          type=\"submit\"\n          [disabled]=\"registerForm.invalid\"\n          [translate]=\"'INSCRIPTIONPARTICULAR.Text27'\"\n        ></button>\n      </ion-item>\n    </form>\n    <br />\n    <br />\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 92787:
/*!***************************************************************************!*\
  !*** ./src/app/inscription-particulier/inscription-particulier.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-label,\nion-input,\nion-datetime {\n  color: #ffffff !important;\n  font-weight: bold;\n}\n\nion-toolbar,\nion-item {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-input,\nion-datetime {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;\n}\n\n.radio-btn {\n  color: white;\n}\n\n.profile-img-center {\n  width: 100%;\n  text-align: center;\n}\n\n.lg-rg-icon {\n  margin: 0px !important;\n}\n\n.profile-img-block {\n  text-align: center;\n  position: relative;\n  width: 80px;\n  border-radius: 100%;\n  height: 80px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.3);\n  margin-left: calc(50% - 50px);\n  box-shadow: 5px 8px 20px rgba(0, 0, 0, 0.19), 0 2px 5px rgba(0, 0, 0, 0.23);\n  -webkit-box-shadow: 5px 8px 20px rgba(0, 0, 0, 0.19), io 0 2px 5px rgba(0, 0, 0, 0.23);\n}\n\n.pro-img-container {\n  position: relative;\n  width: 100%;\n  border-radius: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.pro-img-container ion-img {\n  width: 100%;\n  height: 100%;\n  padding-top: 6px;\n}\n\n.file-up-btnbox {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  background: #000000;\n  color: #ffffff;\n  border-radius: 50%;\n  font-size: 25px;\n  right: -7px;\n  top: 7%;\n}\n\n.upload-file {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n}\n\n.bg-image-full {\n  background: url('login-bg.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.invalid-feedback {\n  font-size: 13px;\n  color: red;\n  background: white;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2NyaXB0aW9uLXBhcnRpY3VsaWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UseUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBOztFQUVFLHlCQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTs7RUFFRSw0REFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDJFQUFBO0VBQ0Esc0ZBQUE7QUFFRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUZGOztBQUtBO0VBS0UsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQU5GOztBQWVBO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQVpGOztBQWVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWkYiLCJmaWxlIjoiaW5zY3JpcHRpb24tcGFydGljdWxpZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsLFxuaW9uLWlucHV0LFxuaW9uLWRhdGV0aW1lIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi10b29sYmFyLFxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQsXG5pb24tZGF0ZXRpbWUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5yYWRpby1idG4ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9maWxlLWltZy1jZW50ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxnLXJnLWljb24ge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGUtaW1nLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XG4gIGJveC1zaGFkb3c6IDVweCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSxcbiAgICBpbyAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cblxuLnByby1pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBpb24taW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgfVxufVxuXG4ucHJvLWltZy1jb250YWluZXIgaW1nIHtcbn1cblxuLmZpbGUtdXAtYnRuYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHJpZ2h0OiAtN3B4O1xuICB0b3A6IDclO1xufVxuXG4udXBsb2FkLWZpbGUge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMHB4O1xufVxuXG4uYmctaW1hZ2UtZnVsbCB7XG4gIC8vIGlmIGNvbnRlbnQgZG9lcyBub3Qgb2NjdXB5IHdob2xlIGhlaWdodCB0aGVuIGl0IHNob3dzIHdoaXRlIGJnIGF0IGJvdHRvbVxuXG4gIC8vIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJnLnBuZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLy8gYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJnLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4tYmcuc3ZnJykgbm8tcmVwZWF0IDUyJSBjZW50ZXIvY292ZXI7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_inscription-particulier_inscription-particulier_module_ts.js.map