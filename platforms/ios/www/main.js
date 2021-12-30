(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 80238:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-config.service */ 47464);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/fcm/ngx */ 38365);










// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



let ApiService = class ApiService {
    constructor(fcm, http, alertController, 
    // public localNotifications: LocalNotifications,
    navCtrl, toastController, loadingController, translateSevice, storage, fs) {
        this.fcm = fcm;
        this.http = http;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.translateSevice = translateSevice;
        this.storage = storage;
        this.fs = fs;
        this.openchats = [];
        this.emptydata = false;
        ///---
        this.fullName = '';
        this.userImage = '';
        this.showMessageDot = false;
        this.showNotificationDot = false;
        // notifications = [];
        this.devloperevent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.events = {
            refreshEvents: new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(),
        };
        // this.rootUrl = 'http://fitconnected.prometteur.in/index.php/Api/';
        this.rootUrl = 'https://fitconnected.prometteur.in/index.php/Api/';
        this.getUserDataFromLS();
    }
    somethingAboutChat(user_id) {
        this.allUsers = this.fs
            .collection('friends')
            .doc(user_id)
            .collection('chats', (ref) => ref.orderBy('Timestamp', 'desc'))
            .snapshotChanges();
        if (this.allUsers.length != 0) {
            this.allUsers.forEach((user) => {
                console.log('USER', user);
                if (user.length == 0) {
                    this.emptydata = true;
                }
                else {
                    // this.emptydata = false;
                    this.openchats = [];
                    user.forEach((userData) => {
                        // let id = userData.payload.doc.id;
                        this.openchats.push(userData.payload.doc.data());
                        // console.log('this is openchat array in app component file');
                        // console.log(this.openchats);
                        // console.log('ID: ', id, ' Data: ', data);
                        // if (this.openchats.length != 0) {
                        //   this.emptydata = false;
                        // } else {
                        //   this.emptydata = true;
                        // }
                    });
                    this.showMessageDot = false;
                    for (var i = 0; i < this.openchats.length; i++) {
                        if (this.openchats[i].msgRead == false) {
                            this.showMessageDot = true;
                            // break;
                        }
                    }
                }
            });
        }
    }
    // pushNoti(x?){
    //   console.log(x);
    //   console.log("Notification Data check");
    //   this.localNotifications.schedule({
    //     id: 1,
    //     title: x.title,
    //     text: x.message,
    //     icon: '../../resources/icon.png',
    //     data: x
    //   });
    //   this.Navigateroot('notifications');
    // }
    Navigateroot(x) {
        var route = '/' + x;
        this.navCtrl.navigateRoot(route);
    }
    updateToken(user_id) {
        this.fcm.getToken().then((tokenDevice) => {
            console.log(tokenDevice);
            tokenDevice;
            this.storage.set('user_fcm_key', tokenDevice);
            const formD = new FormData();
            formD.append('user_id', user_id);
            formD.append('user_fcm_key', tokenDevice);
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formD)
                .subscribe((res) => {
                console.log(res);
            });
        });
    }
    checkNewNotificationUnread(userId) {
        this.showNotificationDot = false;
        // this.notifications = [];
        const lastNotificationId = window.localStorage.getItem('lastNotificationId');
        if (!lastNotificationId) {
            window.localStorage.setItem('lastNotificationId', '0');
        }
        const formData = new FormData();
        formData.append('user_id', userId);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/fields/unread_notification', formData)
            .subscribe((res) => {
            console.log('API NOTIFICATIONS UNREAD', res);
            try {
                // if (res.result[0].noti_id != lastNotificationId)
                if (res.unread_notification != 0)
                    this.showNotificationDot = true;
                // this.notifications = res.result;
            }
            catch (error) { }
        });
    }
    getUserDataFromLS() {
        this.storage.get('user_f_name').then((user_f_name) => {
            this.storage.get('user_l_name').then((user_l_name) => {
                this.fullName = user_f_name + ' ' + user_l_name;
            });
        });
        this.storage.get('user_img').then((user_img) => {
            this.userImage = user_img;
        });
    }
    Navigate(x) {
        var route = '/' + x;
        this.navCtrl.navigateForward(route);
    }
    Navigateback(x) {
        var route = '/' + x;
        this.navCtrl.navigateBack(route);
    }
    postapi(x, object) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading();
            console.log('%c ' + x + ' ' + 'mycode send', 'background: #101e3d; color: #ffffff', object);
            var responce = yield this.http
                .post(this.rootUrl + x, object, {
                observe: 'response',
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
                this.devloper(error);
                setTimeout(() => {
                    this.dismissLoading();
                }, 100);
                console.log('%c ' + x + ' ' + 'mycode error', 'background: #f04141; color: #ffffff', error);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
            }))
                .toPromise();
            console.log('%c ' + x + ' ' + 'mycode reponce', 'background: #f3ba1d; color: #222428', responce);
            setTimeout(() => {
                this.dismissLoading();
            }, 100);
            if (responce.status == 200 || responce.status == 1) {
                return responce.body;
            }
            else {
                return null;
            }
        });
    }
    presentAlertSubscription(num) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.log('language' + lang);
                if (lang == 'English' && num == 1) {
                    const alert = this.alertController.create({
                        cssClass: 'subscriptionAlert',
                        header: 'You must be a subscriber to create events!',
                        buttons: [
                            {
                                text: 'I Subscribe',
                                handler: () => {
                                    console.log('open subscribe page');
                                    this.openSubscriptionPage();
                                },
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                        ],
                    });
                    (yield alert).present();
                }
                else if (lang != 'English' && num == 1) {
                    const alert = yield this.alertController.create({
                        cssClass: 'subscriptionAlert',
                        header: 'Vous devez être abonné(e) pour créer des événements !',
                        buttons: [
                            {
                                text: 'Je m’abonne',
                                handler: () => {
                                    console.log('open subscribe page');
                                    this.openSubscriptionPage();
                                },
                            },
                            {
                                text: 'Annuler',
                                role: 'cancel',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else if (lang == 'English' && num == 2) {
                    const alert = yield this.alertController.create({
                        cssClass: 'subscriptionAlert',
                        header: 'You must be subscribed to see the profiles.',
                        buttons: [
                            {
                                text: 'I Subscribe',
                                handler: () => {
                                    console.log('open subscribe page');
                                    this.openSubscriptionPage();
                                },
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else if (lang != 'English' && num == 2) {
                    const alert = yield this.alertController.create({
                        cssClass: 'subscriptionAlert',
                        header: 'Vous devez être abonné(e) pour voir les profils.',
                        buttons: [
                            {
                                text: 'Je m’abonne',
                                handler: () => {
                                    console.log('open subscribe page');
                                    this.openSubscriptionPage();
                                },
                            },
                            {
                                text: 'Annuler',
                                role: 'cancel',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else if (lang == 'English' && num == 3) {
                    const alert = yield this.alertController.create({
                        cssClass: 'subscriptionAlert',
                        header: 'You must be subscribed to see the events.',
                        buttons: [
                            {
                                text: 'I Subscribe',
                                handler: () => {
                                    console.log('open subscribe page');
                                    this.openSubscriptionPage();
                                },
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else if (lang != 'English' && num == 3) {
                    const alert = yield this.alertController.create({
                        cssClass: 'subscriptionAlert',
                        header: 'Vous devez être abonné pour voir les événements.',
                        buttons: [
                            {
                                text: 'Je m’abonne',
                                handler: () => {
                                    console.log('open subscribe page');
                                    this.openSubscriptionPage();
                                },
                            },
                            {
                                text: 'Annuler',
                                role: 'cancel',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
            }));
        });
    }
    openSubscriptionPage() {
        this.Navigate('abonnement');
    }
    getapi(x) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading();
            console.log('%c ' + x + ' ' + 'send', 'background: #101e3d; color: #ffffff', x);
            var responce = yield this.http
                .get(this.rootUrl + x, {
                observe: 'response',
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
                this.devloper(error);
                setTimeout(() => {
                    this.dismissLoading();
                }, 100);
                console.log('%c ' + x + ' ' + 'error', 'background: #f04141; color: #ffffff', error);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
            }))
                .toPromise();
            console.log('%c ' + x + ' ' + 'reponce', 'background: #f3ba1d; color: #222428', responce);
            setTimeout(() => {
                this.dismissLoading();
            }, 100);
            if (responce.status == 200) {
                return responce.body;
            }
            else {
                return null;
            }
        });
    }
    toast(msg, dontShow = false, color = 'dark') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (dontShow)
                return;
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                color,
            });
            toast.present();
        });
    }
    toastLong(msg, dontShow = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (dontShow)
                return;
            const toast = yield this.toastController.create({
                message: msg,
                duration: 5000,
            });
            toast.present();
        });
    }
    // async loading() {
    //   this.load = await this.loadingController.create({
    //     message: 'Chargement...',
    //     spinner: 'dots',
    //   });
    //   this.load.present();
    // }
    // async dismissLoading() {
    //   this.load.dismiss();
    // }
    timerloading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.log('language' + lang);
                if (lang == 'English') {
                    this.load = true;
                    return yield this.loadingController
                        .create({
                        message: 'Loading...',
                        spinner: 'dots',
                        duration: 3000,
                    })
                        .then((a) => {
                        a.present().then(() => {
                            console.log('presented');
                            if (!this.load) {
                                a.dismiss().then(() => console.log('abort presenting'));
                            }
                        });
                    });
                }
                else {
                    this.load = true;
                    return yield this.loadingController
                        .create({
                        message: 'Chargement...',
                        spinner: 'dots',
                        duration: 5000,
                    })
                        .then((a) => {
                        a.present().then(() => {
                            console.log('presented');
                            if (!this.load) {
                                a.dismiss().then(() => console.log('abort presenting'));
                            }
                        });
                    });
                }
            }));
        });
    }
    loading2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () { });
    }
    loading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.log('language' + lang);
                if (lang == 'English') {
                    this.load = true;
                    return yield this.loadingController
                        .create({
                        message: 'Loading...',
                        spinner: 'dots',
                        // duration: 5000,
                    })
                        .then((a) => {
                        a.present().then(() => {
                            console.log('presented');
                            if (!this.load) {
                                a.dismiss().then(() => console.log('abort presenting'));
                            }
                        });
                    });
                }
                else {
                    this.load = true;
                    return yield this.loadingController
                        .create({
                        message: 'Chargement...',
                        spinner: 'dots',
                        // duration: 5000,
                    })
                        .then((a) => {
                        a.present().then(() => {
                            console.log('presented');
                            if (!this.load) {
                                a.dismiss().then(() => console.log('abort presenting'));
                            }
                        });
                    });
                }
            }));
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.load = false;
                return yield this.loadingController
                    .dismiss()
                    .then(() => console.log('dismissed'));
            }
            catch (error) { }
        });
    }
    devloper(x) {
        this.devloperevent.emit(x);
    }
    setstorage(x, y) {
        localStorage.setItem(x, JSON.stringify(y));
    }
    getStorage(x) {
        return JSON.parse(localStorage.getItem(x));
    }
    clearStorage() {
        localStorage.clear();
        this.Navigate('/');
    }
};
ApiService.ctorParameters = () => [
    { type: _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_1__.FCM },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore }
];
ApiService.propDecorators = {
    devloperevent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_1__.FCM,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore])
], ApiService);



/***/ }),

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _coach_participated_events_coach_participated_events_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coach-participated-events/coach-participated-events.component */ 30366);




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 28245)).then((m) => m.HomePageModule),
    },
    {
        path: 'connexion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_connexion_connexion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./connexion/connexion.module */ 89)).then((m) => m.ConnexionPageModule),
    },
    {
        path: 'forget',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forget-password_forget-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forget-password/forget-password.module */ 19650)).then((m) => m.ForgetPasswordPageModule),
    },
    {
        path: 'inscription-particulier',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_inscription-particulier_inscription-particulier_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inscription-particulier/inscription-particulier.module */ 47493)).then((m) => m.InscriptionParticulierPageModule),
    },
    {
        path: 'conditions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_conditions_conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./conditions/conditions.module */ 10951)).then((m) => m.ConditionsPageModule),
    },
    {
        path: 'question',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_question_question_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./question/question.module */ 75284)).then((m) => m.QuestionPageModule),
    },
    {
        path: 'question2',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_question2_question2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./question2/question2.module */ 74642)).then((m) => m.Question2PageModule),
    },
    {
        path: 'question3',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_question3_question3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./question3/question3.module */ 33272)).then((m) => m.Question3PageModule),
    },
    {
        path: 'inscription-professionnel',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_inscription-professionnel_inscription-professionnel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inscription-professionnel/inscription-professionnel.module */ 22866)).then((m) => m.InscriptionProfessionnelPageModule),
    },
    {
        path: 'inscription-professionnel2',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inscription-professionnel2_inscription-professionnel2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./inscription-professionnel2/inscription-professionnel2.module */ 13817)).then((m) => m.InscriptionProfessionnel2PageModule),
    },
    {
        path: 'inscription-professionnel3',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inscription-professionnel3_inscription-professionnel3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./inscription-professionnel3/inscription-professionnel3.module */ 15141)).then((m) => m.InscriptionProfessionnel3PageModule),
    },
    {
        path: 'inscription-docs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js"), __webpack_require__.e("src_app_inscription-docs_inscription-docs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inscription-docs/inscription-docs.module */ 6232)).then((m) => m.InscriptionDocsPageModule),
    },
    {
        path: 'evenementcoach',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_evenementcoach_evenementcoach_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./evenementcoach/evenementcoach.module */ 25876)).then((m) => m.EvenementcoachPageModule),
    },
    {
        path: 'abonnement',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_abonnement_abonnement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./abonnement/abonnement.module */ 13944)).then((m) => m.AbonnementPageModule),
    },
    {
        path: 'evenements-coach',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_evenements-coach_evenements-coach_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./evenements-coach/evenements-coach.module */ 57789)).then((m) => m.EvenementsCoachPageModule),
    },
    {
        path: 'coacheditprofile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_coacheditprofile_coacheditprofile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./coacheditprofile/coacheditprofile.module */ 80320)).then((m) => m.CoacheditprofilePageModule),
    },
    {
        path: 'coachviewprofile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js"), __webpack_require__.e("src_app_coachviewprofile_coachviewprofile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./coachviewprofile/coachviewprofile.module */ 84209)).then((m) => m.CoachviewprofilePageModule),
    },
    {
        path: 'evenementcoachvue',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_evenementcoachvue_evenementcoachvue_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./evenementcoachvue/evenementcoachvue.module */ 4970)).then((m) => m.EvenementcoachvuePageModule),
    },
    {
        path: 'confirmation-rejoindre',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_confirmation-rejoindre_confirmation-rejoindre_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./confirmation-rejoindre/confirmation-rejoindre.module */ 40018)).then((m) => m.ConfirmationRejoindrePageModule),
    },
    {
        path: 'click-nantes-particuliers',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_click-nantes-particuliers_click-nantes-particuliers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./click-nantes-particuliers/click-nantes-particuliers.module */ 52016)).then((m) => m.ClickNantesParticuliersPageModule),
    },
    {
        path: 'map-sportifs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_map-sportifs_map-sportifs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./map-sportifs/map-sportifs.module */ 57138)).then((m) => m.MapSportifsPageModule),
    },
    {
        path: 'mes-evenements',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_mes-evenements_mes-evenements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mes-evenements/mes-evenements.module */ 60474)).then((m) => m.MesEvenementsPageModule),
    },
    {
        path: 'mes-evenements-crees',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_mes-evenements-crees_mes-evenements-crees_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mes-evenements-crees/mes-evenements-crees.module */ 40831)).then((m) => m.MesEvenementsCreesPageModule),
    },
    {
        path: 'mes-evenements-participes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mes-evenements-participes_mes-evenements-participes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mes-evenements-participes/mes-evenements-participes.module */ 17528)).then((m) => m.MesEvenementsParticipesPageModule),
    },
    {
        path: 'profil-activite',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js"), __webpack_require__.e("src_app_profil-activite_profil-activite_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profil-activite/profil-activite.module */ 93740)).then((m) => m.ProfilActivitePageModule),
    },
    {
        path: 'mon-profil',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_mon-profil_mon-profil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mon-profil/mon-profil.module */ 71408)).then((m) => m.MonProfilPageModule),
    },
    {
        path: 'mon-profil-activite',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_mon-profil-activite_mon-profil-activite_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mon-profil-activite/mon-profil-activite.module */ 80477)).then((m) => m.MonProfilActivitePageModule),
    },
    {
        path: 'mon-compte',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_mon-compte_mon-compte_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mon-compte/mon-compte.module */ 71569)).then((m) => m.MonComptePageModule),
    },
    {
        path: 'parametres',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_parametres_parametres_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./parametres/parametres.module */ 88567)).then((m) => m.ParametresPageModule),
    },
    {
        path: 'creer-evenement',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_creer-evenement_creer-evenement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./creer-evenement/creer-evenement.module */ 21305)).then((m) => m.CreerEvenementPageModule),
    },
    {
        path: 'messagerie',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_messagerie_messagerie_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./messagerie/messagerie.module */ 99342)).then((m) => m.MessageriePageModule),
    },
    {
        path: 'message',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_message_message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./message/message.module */ 91377)).then((m) => m.MessagePageModule),
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 49154)).then((m) => m.NotificationsPageModule),
    },
    {
        path: 'forget-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forget-password_forget-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forget-password/forget-password.module */ 19650)).then((m) => m.ForgetPasswordPageModule),
    },
    {
        path: 'inscription-particulier',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_inscription-particulier_inscription-particulier_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inscription-particulier/inscription-particulier.module */ 47493)).then((m) => m.InscriptionParticulierPageModule),
    },
    {
        path: 'inscription-professionnel3',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inscription-professionnel3_inscription-professionnel3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./inscription-professionnel3/inscription-professionnel3.module */ 15141)).then((m) => m.InscriptionProfessionnel3PageModule),
    },
    {
        path: 'map-sportifs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_map-sportifs_map-sportifs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./map-sportifs/map-sportifs.module */ 57138)).then((m) => m.MapSportifsPageModule),
    },
    {
        path: 'responce3',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js"), __webpack_require__.e("src_app_responce3_responce3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./responce3/responce3.module */ 88806)).then((m) => m.Responce3PageModule),
    },
    {
        path: 'creescoach',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_creescoach_creescoach_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./creescoach/creescoach.module */ 54930)).then((m) => m.CreescoachPageModule),
    },
    {
        path: 'chatpage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_chatpage_chatpage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./chatpage/chatpage.module */ 63554)).then((m) => m.ChatpagePageModule),
    },
    {
        path: 'participants',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./participants/participants.module */ 65785)).then((m) => m.ParticipantsPageModule),
    },
    {
        path: 'followlist',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./followlist/followlist.module */ 2341)).then((m) => m.FollowlistPageModule),
    },
    {
        path: 'conversation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js"), __webpack_require__.e("src_app_conversation_conversation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./conversation/conversation.module */ 72636)).then((m) => m.ConversationPageModule),
    },
    {
        path: 'paymentpage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paymentpage_paymentpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paymentpage/paymentpage.module */ 68422)).then((m) => m.PaymentpagePageModule),
    },
    {
        path: 'ranking',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ranking_ranking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ranking/ranking.module */ 78677)).then((m) => m.RankingPageModule),
    },
    {
        path: 'rateuser',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./rateuser/rateuser.module */ 39255)).then((m) => m.RateuserPageModule),
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./welcome/welcome.module */ 35783)).then((m) => m.WelcomePageModule),
    },
    {
        path: 'profilereview',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_profilereview_profilereview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profilereview/profilereview.module */ 65157)).then((m) => m.ProfilereviewPageModule),
    },
    {
        path: 'watchreview',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js"), __webpack_require__.e("src_app_watchreview_watchreview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./watchreview/watchreview.module */ 82508)).then((m) => m.WatchreviewPageModule),
    },
    {
        path: 'searchfilter',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./searchfilter/searchfilter.module */ 54627)).then((m) => m.SearchfilterPageModule),
    },
    {
        path: 'groupconversation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js"), __webpack_require__.e("src_app_groupconversation_groupconversation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./groupconversation/groupconversation.module */ 47303)).then(m => m.GroupconversationPageModule)
    },
    {
        path: 'edit-particular-event',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_edit-particular-event_edit-particular-event_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-particular-event/edit-particular-event.module */ 77935)).then(m => m.EditParticularEventPageModule)
    },
    {
        path: 'sports-practice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sports-practice_sports-practice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sports-practice/sports-practice.module */ 11563)).then(m => m.SportsPracticePageModule)
    },
    {
        path: 'coach-participated-events',
        component: _coach_participated_events_coach_participated_events_component__WEBPACK_IMPORTED_MODULE_0__.CoachParticipatedEventsComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 28914);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 62921);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/fcm/ngx */ 38365);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ 80238);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translate-config.service */ 47464);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);

















let AppComponent = class AppComponent {
    constructor(activatedRoute, platform, storage, fs, splashScreen, statusBar, navCtrl, languageService, config, router, fcm, navController, toastController, translate, api, httpClient, http) {
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.storage = storage;
        this.fs = fs;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.languageService = languageService;
        this.config = config;
        this.router = router;
        this.fcm = fcm;
        this.navController = navController;
        this.toastController = toastController;
        this.translate = translate;
        this.api = api;
        this.httpClient = httpClient;
        this.http = http;
        this.noti = false;
        this.counter = 0;
        this.openchats = [];
        this.initializeApp();
    }
    checkAutoLogin() {
        this.storage.get('user_id').then((user_id) => {
            if (user_id != null || user_id != undefined) {
            }
            else {
            }
        });
    }
    // somethingAboutChat(user_id) {
    //   this.allUsers = this.fs
    //     .collection('friends')
    //     .doc(user_id)
    //     .collection('chats', (ref) => ref.orderBy('Timestamp', 'desc'))
    //     .snapshotChanges();
    //   if (this.allUsers.length != 0) {
    //     this.allUsers.forEach((user) => {
    //       console.log('USER', user);
    //       if (user.length == 0) {
    //         this.emptydata = true;
    //         this.api.dismissLoading();
    //       } else {
    //         // this.emptydata = false;
    //         this.openchats = [];
    //         user.forEach((userData) => {
    //           // let id = userData.payload.doc.id;
    //           this.openchats.push(userData.payload.doc.data());
    //           // console.log('this is openchat array in app component file');
    //           // console.log(this.openchats);
    //           // console.log('ID: ', id, ' Data: ', data);
    //           // if (this.openchats.length != 0) {
    //           //   this.emptydata = false;
    //           // } else {
    //           //   this.emptydata = true;
    //           // }
    //         });
    //         this.api.showMessageDot = false;
    //         for (var i = 0; i < this.openchats.length; i++) {
    //           if (this.openchats[i].msgRead == false) {
    //             this.api.showMessageDot = true;
    //             // break;
    //           }
    //         }
    //         this.api.dismissLoading();
    //       }
    //     });
    //   } else {
    //     this.api.dismissLoading();
    //     this.emptydata = true;
    //   }
    // }
    initializeApp() {
        console.log('step' + 1);
        // this.splashScreen.show();
        this.platform.ready().then(() => {
            this.storage
                .get('user_lang')
                .then((lang) => {
                if (lang == 'English') {
                    this.English = true;
                }
                else {
                    this.English = false;
                }
                console.log('got lang', lang);
            })
                .catch((err) => {
                console.log('error getting lang');
                this.English = true;
            });
            console.log('step' + 2);
            try {
                // this.store.verbosity = this.store.DEBUG;
                // this.purchaseService.registerProducts();
                // this.purchaseService.setupListeners();
            }
            catch (error) { }
            this.fcm
                .subscribeToTopic('/testtopic')
                .then((result) => {
                console.log('subscribing topic ', result);
            })
                .catch((err) => {
                console.log('subscribing topic err ', err);
            });
            this.languageService.getDefaultLanguage();
            console.log('step' + 3);
            this.storage.get('user_id').then((user_id) => {
                if (!user_id) {
                    console.log('not loged in');
                    this.storage.get('user_lang').then((lang) => {
                        if (lang != null || lang != undefined) {
                            this.navCtrl.navigateRoot(['/connexion']);
                            // this.navCtrl.navigateRoot(['/inscription-professionnel3']);
                        }
                        else {
                            this.navCtrl.navigateRoot(['/welcome']);
                        }
                    });
                    return;
                }
                else {
                    console.log('USER ID', user_id);
                    this.storage.get('user_type').then((user_type) => {
                        console.log('user_type', user_type);
                        if (user_type === '1') {
                            this.navCtrl.navigateRoot(['/creer-evenement']);
                        }
                        else {
                            this.navCtrl.navigateRoot(['/evenementcoachvue']);
                        }
                    });
                    this.api.updateToken(user_id);
                    // this.api.checkNewNotificationUnread(user_id);
                    this.api.somethingAboutChat(user_id);
                }
            });
            console.log('step' + 5);
            this.fcm.onTokenRefresh().subscribe((token) => {
                this.storage.get('user_id').then((user_id) => {
                    //send to server
                    this.deviceKey = token;
                    this.storage.set('user_fcm_key', this.deviceKey);
                    const formD = new FormData();
                    formD.append('user_id', user_id);
                    formD.append('user_fcm_key', this.deviceKey);
                    this.http
                        .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formD)
                        .subscribe((res) => {
                        console.log(res);
                    });
                });
            });
            // this.config.set('backButtonIcon', 'assets/images/back.svg');
            // this.statusBar.styleDefault();
            this.statusBar.styleLightContent();
            this.fcm.clearAllNotifications();
            this.fcm.onNotification().subscribe((data) => {
                console.log(data);
                if (data.noti_type == '8' || data.noti_type == 8) {
                    this.showMessageToast();
                }
                else {
                    this.api.toast(this.English
                        ? 'You got new notification'
                        : 'Vous avez une nouvelle notification');
                    this.api.showNotificationDot = true;
                    this.updateNotiArray(data);
                }
                // this.api.Navigate('notifications');
            });
            //   } else {
            //     this.router.navigate(['/connexion']);
            //   }
            // });
            this.router.navigate(['/connexion']);
        });
        this.backButtonSubscription =
            this.platform.backButton.subscribeWithPriority(0, () => {
                this.routerOutlets.forEach((outlet) => {
                    if (this.router.url === '/creer-evenement' ||
                        this.router.url === '/evenementcoachvue' ||
                        this.router.url === '/connexion') {
                        if (this.counter == 0) {
                            this.counter++;
                            this.presentToast();
                            setTimeout(() => {
                                this.counter = 0;
                            }, 3000);
                        }
                        else {
                            navigator['app'].exitApp();
                        }
                    }
                    else if (outlet && outlet.canGoBack()) {
                        outlet.pop();
                    }
                });
            });
    }
    showMessageToast() {
        // console.log('activatedRoute', this.activatedRoute);
        console.log('activatedRoute', window.location);
        if (window.location.pathname.includes('conversation')) {
            return;
        }
        this.api.toast(this.English ? 'You got new message' : 'tu as un nouveau message');
        // this.api.showMessageDot = true;
    }
    messageNotificationNavigation(data) {
        if (data.wasTapped) {
            console.log('Received in background');
            console.log(data);
            let vc = {
                senderId: data.senderId,
                recieverId: data.recieverId,
                recieverName: data.recieverName,
                recieverImg: data.recieverimg,
            };
            let navigationExtras = {
                queryParams: {
                    special: JSON.stringify(vc),
                },
            };
            this.navCtrl.navigateRoot(['conversation'], navigationExtras);
        }
        else {
            console.log('Received in foreground');
            console.log(data);
            let vc = {
                senderId: data.senderId,
                recieverId: data.recieverId,
                recieverName: data.recieverName,
                recieverImg: data.recieverimg,
            };
            let navigationExtras = {
                queryParams: {
                    special: JSON.stringify(vc),
                },
            };
            this.router.navigate(['conversation'], navigationExtras);
        }
    }
    updateNotiArray(data) {
        this.storage.get('notificationArray').then((notifications) => {
            if (notifications == undefined || notifications == null) {
                if (data.noti_type != '8') {
                    var notiArray = [];
                    var obj = { body: data.body };
                    notiArray.push(obj);
                }
                this.storage.set('notificationArray', notiArray).then((noti) => {
                    if (data.wasTapped) {
                        console.log('Received in background');
                        console.log(data);
                        // this.navCtrl.navigateRoot('notifications');
                        // this.api.pushNoti(data);
                        this.noti = true;
                        // if(data.noti_type=="8"||data.noti_type==8){
                        //   let vc={
                        //     senderId:data.senderId,
                        //     recieverId:data.recieverId,
                        //   recieverName:data.recieverName,
                        //   recieverImg:data.recieverimg};
                        //   let navigationExtras = {
                        //   queryParams: {
                        //     special: JSON.stringify(vc)
                        //   }
                        // };
                        //   this.router.navigate(['conversation'], navigationExtras);
                        // }else{
                        // alert("laps")
                        this.api.Navigateroot('notifications');
                        // }
                    }
                    else {
                        // if(data.noti_type=="8"||data.noti_type==8){
                        //   let vc={
                        //     senderId:data.senderId,
                        //   recieverId:data.recieverId,
                        //   recieverName:data.recieverName,
                        //   recieverImg:data.recieverimg};
                        //   let navigationExtras = {
                        //   queryParams: {
                        //     special: JSON.stringify(vc)
                        //   }
                        // };
                        //   this.router.navigate(['conversation'], navigationExtras);
                        // }else{
                        // alert("laps")
                        this.api.toast(this.English
                            ? 'You got new notification'
                            : 'Vous avez une nouvelle notification');
                        // this.api.Navigateroot('notifications');
                        // }
                        // this.api.pushNoti(data);
                        console.log('Received in foreground');
                        console.log(data);
                    }
                });
            }
            else {
                console.log(data);
                if (data.noti_type != '8') {
                    notifications.push(obj);
                }
                this.storage.set('notificationArray', notifications).then((noti) => {
                    if (data.wasTapped) {
                        console.log('Received in background');
                        console.log(data);
                        // this.navCtrl.navigateRoot('notifications');
                        // this.api.pushNoti(data);
                        this.noti = true;
                        if (data.noti_type == '8' || data.noti_type == 8) {
                            let vc = {
                                senderId: data.senderId,
                                recieverId: data.recieverId,
                                recieverName: data.recieverName,
                                recieverImg: data.recieverimg,
                            };
                            let navigationExtras = {
                                queryParams: {
                                    special: JSON.stringify(vc),
                                },
                            };
                            // this.router.navigate(['conversation'], navigationExtras);
                        }
                        else {
                            // alert("laps")
                            // this.api.Navigateroot('notifications');
                        }
                        this.noti = true;
                    }
                    else {
                        // this.api.pushNoti(data);
                        if (data.noti_type == '8' || data.noti_type == 8) {
                            let vc = {
                                senderId: data.senderId,
                                recieverId: data.recieverId,
                                recieverName: data.recieverName,
                                recieverImg: data.recieverimg,
                            };
                            let navigationExtras = {
                                queryParams: {
                                    special: JSON.stringify(vc),
                                },
                            };
                            // this.router.navigate(['conversation'], navigationExtras);
                        }
                        else {
                            // alert("laps")
                            // this.api.Navigateroot('notifications');
                            console.log(data);
                        }
                    }
                });
            }
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.English = true;
            if (this.English) {
                const toast = yield this.toastController.create({
                    message: 'Press back again to exit.',
                    duration: 2000,
                });
                toast.present();
            }
            else {
                const toast = yield this.toastController.create({
                    message: 'Appuyez à nouveau pour quitter.',
                    duration: 2000,
                });
                toast.present();
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore },
    { type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_6__.TranslateConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Config },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_14__.Http }
];
AppComponent.propDecorators = {
    routerOutlets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet,] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-root',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore,
        _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen,
        _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_6__.TranslateConfigService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Config,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService,
        _api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient,
        _angular_http__WEBPACK_IMPORTED_MODULE_14__.Http])
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageLoader": () => (/* binding */ LanguageLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 28914);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 62921);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/fcm/ngx */ 38365);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/compat */ 20762);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/compat/database */ 97606);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ 91554);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 82128);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 30692);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 90900);
/* harmony import */ var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/keyboard/ngx */ 71239);
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ 35172);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var _inscription_professionnel_select_country2_select_country2_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inscription-professionnel/select-country2/select-country2.module */ 42585);
/* harmony import */ var _inscription_particulier_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inscription-particulier/select-country/select-country.module */ 18645);
/* harmony import */ var _app_participants_participants_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/participants/participants.module */ 65785);
/* harmony import */ var _app_searchfilter_searchfilter_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/searchfilter/searchfilter.module */ 54627);
/* harmony import */ var _app_followlist_followlist_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/followlist/followlist.module */ 2341);
/* harmony import */ var _app_rateuser_rateuser_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../app/rateuser/rateuser.module */ 39255);
/* harmony import */ var _awesome_cordova_plugins_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @awesome-cordova-plugins/document-viewer/ngx */ 20353);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 64637);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/http-loader */ 82003);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ionic4-rating */ 22249);
/* harmony import */ var _services_purchase_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/purchase.service */ 29322);
/* harmony import */ var _coach_participated_events_coach_participated_events_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./coach-participated-events/coach-participated-events.component */ 30366);





















// import { Transfer } from '@ionic-native/transfer';













// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';




// import { Globalization } from '@ionic-native/globalization/ngx';

// import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';


// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
// }
function LanguageLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
var config = {
    apiKey: 'AIzaSyDotnA5JC8ct9ILEwYzxKuQqwoBe5fYbUs',
    authDomain: 'fitnconnect-d126f.firebaseapp.com',
    projectId: 'fitnconnect-d126f',
    storageBucket: 'fitnconnect-d126f.appspot.com',
    messagingSenderId: '102646053757',
    appId: '1:102646053757:web:3946830ba41985fd04ea14',
    measurementId: 'G-G1579GY5NQ',
};
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _coach_participated_events_coach_participated_events_component__WEBPACK_IMPORTED_MODULE_24__.CoachParticipatedEventsComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
            ionic4_rating__WEBPACK_IMPORTED_MODULE_22__.IonicRatingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonicModule.forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_31__.IonicStorageModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule.forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateLoader,
                    useFactory: LanguageLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClient],
                },
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_33__.AngularFireModule.initializeApp(config),
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_34__.AngularFirestoreModule.enablePersistence(),
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_35__.AngularFireDatabaseModule,
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_36__.AngularFireAuthModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_37__.AngularFireStorageModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule,
            _angular_http__WEBPACK_IMPORTED_MODULE_38__.HttpModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_39__.AgmCoreModule,
            _inscription_professionnel_select_country2_select_country2_module__WEBPACK_IMPORTED_MODULE_14__.SelectCountry2PageModule,
            _app_followlist_followlist_module__WEBPACK_IMPORTED_MODULE_18__.FollowlistPageModule,
            _app_rateuser_rateuser_module__WEBPACK_IMPORTED_MODULE_19__.RateuserPageModule,
            _app_participants_participants_module__WEBPACK_IMPORTED_MODULE_16__.ParticipantsPageModule,
            _app_searchfilter_searchfilter_module__WEBPACK_IMPORTED_MODULE_17__.SearchfilterPageModule,
            _inscription_particulier_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_15__.SelectCountryPageModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_40__.RouterModule,
        ],
        providers: [
            _services_purchase_service__WEBPACK_IMPORTED_MODULE_23__.PurchaseService,
            _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation,
            _awesome_cordova_plugins_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__.FCM,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File,
            // InAppPurchase2,
            _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__.Camera,
            _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__.SocialSharing,
            // Stripe,
            _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__.Diagnostic,
            // LocalNotifications,
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__.FilePath,
            _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__.Keyboard,
            _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_12__.Screenshot,
            _awesome_cordova_plugins_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_20__.DocumentViewer,
            _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule,
            _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_21__.FileOpener,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_40__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 30366:
/*!**********************************************************************************!*\
  !*** ./src/app/coach-participated-events/coach-participated-events.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachParticipatedEventsComponent": () => (/* binding */ CoachParticipatedEventsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coach_participated_events_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coach-participated-events.component.html */ 92510);
/* harmony import */ var _coach_participated_events_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coach-participated-events.component.scss */ 94841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);









let CoachParticipatedEventsComponent = class CoachParticipatedEventsComponent {
    constructor(api, storage, http, httpClient, router) {
        this.api = api;
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.router = router;
        this.individual = false;
        this.coach = false;
        this.activeEvents = [];
        this.empty = false;
        this.notificationPresent = false;
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
            this.uid = user_id;
            const formData = new FormData();
            formData.append('user_id', this.uid);
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/fields/past_event', formData)
                .subscribe((res) => {
                if (res.json().status == 1) {
                    console.log(res.json());
                    this.totalEvents = res.json().result.length;
                    this.activeEvents = res.json().result;
                    console.log(this.activeEvents);
                    this.api.dismissLoading();
                }
                else {
                    console.log(res.json());
                    this.message = res.json().msg;
                    this.empty = true;
                    this.totalEvents = res.json().result.length;
                    this.api.dismissLoading();
                }
            });
        });
    }
    coming() {
        this.api.Navigate('evenements-coach');
    }
    created() {
        this.api.Navigate('creescoach');
    }
    home() {
        this.api.Navigate('evenementcoachvue');
    }
    events() {
        this.api.Navigate('creer-evenement');
    }
    manage() {
        this.api.Navigate('mes-evenements');
    }
    notifications() {
        this.api.Navigate('notifications');
    }
    rankingDetails() {
        this.api.Navigate('ranking');
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
CoachParticipatedEventsComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
CoachParticipatedEventsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-coach-participated-events',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coach_participated_events_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coach_participated_events_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_4__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router])
], CoachParticipatedEventsComponent);



/***/ }),

/***/ 45685:
/*!*********************************************************!*\
  !*** ./src/app/followlist/followlist-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowlistPageRoutingModule": () => (/* binding */ FollowlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _followlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./followlist.page */ 69070);




const routes = [
    {
        path: '',
        component: _followlist_page__WEBPACK_IMPORTED_MODULE_0__.FollowlistPage
    }
];
let FollowlistPageRoutingModule = class FollowlistPageRoutingModule {
};
FollowlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FollowlistPageRoutingModule);



/***/ }),

/***/ 2341:
/*!*************************************************!*\
  !*** ./src/app/followlist/followlist.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowlistPageModule": () => (/* binding */ FollowlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _followlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./followlist-routing.module */ 45685);
/* harmony import */ var _followlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followlist.page */ 69070);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let FollowlistPageModule = class FollowlistPageModule {
};
FollowlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _followlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.FollowlistPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_followlist_page__WEBPACK_IMPORTED_MODULE_1__.FollowlistPage]
    })
], FollowlistPageModule);



/***/ }),

/***/ 69070:
/*!***********************************************!*\
  !*** ./src/app/followlist/followlist.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowlistPage": () => (/* binding */ FollowlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_followlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./followlist.page.html */ 51754);
/* harmony import */ var _followlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followlist.page.scss */ 29077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);









let FollowlistPage = class FollowlistPage {
    constructor(storage, http, httpClient, api, modalCtrl) {
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.followersArray = [];
        this.followingArray = [];
        this.followerList = false;
        this.followingList = false;
    }
    ngAfterViewInit() {
        this.api.loading();
        const formData = new FormData();
        formData.append('user_id', this.userId);
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
                if (this.pageTitle === 'Followers') {
                    this.followerList = true;
                    this.followers = this.followersArray.length;
                }
                else if (this.pageTitle === 'Following') {
                    this.followingList = true;
                    this.following = this.followingArray.length;
                }
                this.api.dismissLoading();
            }
            else {
                this.api.dismissLoading();
                console.log(res.json());
                this.api.toast(res.json().msg);
            }
        });
    }
    startFollow(detail) {
        const formData = new FormData();
        formData.append('fol_user_id', this.userId);
        formData.append('fol_host_id', detail.user_id);
        formData.append('fol_status', '1');
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user_follow', formData)
            .subscribe((res) => {
            console.log(res.json());
            if (res.json().status == 1) {
                console.log(res.json());
                var msg = 'You started Following ' + detail.nameFormatted;
                this.loadData();
                this.api.toast(msg);
            }
            else {
                console.log(res.json());
            }
        });
    }
    startUnfollow(detail) {
        console.log('unfollow');
        const formData = new FormData();
        formData.append('fol_user_id', this.userId);
        formData.append('fol_host_id', detail.user_id);
        formData.append('fol_status', '0');
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/user_follow', formData)
            .subscribe((res) => {
            console.log(res.json());
            if (res.json().status == 1) {
                console.log(res.json());
                var msg = 'You Unfollowed ' + detail.nameFormatted;
                this.loadData();
                this.api.toast(msg);
            }
            else {
                console.log(res.json());
            }
        });
    }
    loadData() {
        this.followersArray = [];
        this.followingArray = [];
        this.api.loading();
        const formData = new FormData();
        formData.append('user_id', this.userId);
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
                if (this.pageTitle === 'Followers') {
                    this.followerList = true;
                    this.followers = this.followersArray.length;
                }
                else if (this.pageTitle === 'Following') {
                    this.followingList = true;
                    this.following = this.followingArray.length;
                }
                this.api.dismissLoading();
            }
            else {
                this.api.dismissLoading();
                console.log(res.json());
                this.api.toast(res.json().msg);
            }
        });
    }
    dismiss(data) {
        console.log('clicked');
        console.log(data);
        // data={
        // }
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    }
};
FollowlistPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
FollowlistPage.propDecorators = {
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['userId',] }],
    pageTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['pageTitle',] }]
};
FollowlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-followlist',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_followlist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_followlist_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_4__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient,
        _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController])
], FollowlistPage);



/***/ }),

/***/ 81834:
/*!*****************************************************************************************!*\
  !*** ./src/app/inscription-particulier/select-country/select-country-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCountryPageRoutingModule": () => (/* binding */ SelectCountryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _select_country_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-country.page */ 67823);




const routes = [
    {
        path: '',
        component: _select_country_page__WEBPACK_IMPORTED_MODULE_0__.SelectCountryPage
    }
];
let SelectCountryPageRoutingModule = class SelectCountryPageRoutingModule {
};
SelectCountryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectCountryPageRoutingModule);



/***/ }),

/***/ 18645:
/*!*********************************************************************************!*\
  !*** ./src/app/inscription-particulier/select-country/select-country.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCountryPageModule": () => (/* binding */ SelectCountryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _select_country_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-country-routing.module */ 81834);
/* harmony import */ var _select_country_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-country.page */ 67823);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);








let SelectCountryPageModule = class SelectCountryPageModule {
};
SelectCountryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            _select_country_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectCountryPageRoutingModule
        ],
        declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_1__.SelectCountryPage]
    })
], SelectCountryPageModule);



/***/ }),

/***/ 67823:
/*!*******************************************************************************!*\
  !*** ./src/app/inscription-particulier/select-country/select-country.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCountryPage": () => (/* binding */ SelectCountryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_country_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-country.page.html */ 95700);
/* harmony import */ var _select_country_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-country.page.scss */ 29145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ 80238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translate-config.service */ 47464);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 78713);










let SelectCountryPage = class SelectCountryPage {
    constructor(api, location, modalCtrl, translateSevice, http, storage) {
        this.api = api;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.translateSevice = translateSevice;
        this.http = http;
        this.storage = storage;
        this.countryListAllIsoData = [];
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => {
            if (lang == 'English') {
                this.langpTitlePlaceHolder = 'Select a country';
                this.langSearchPlaceHolder = 'Search';
            }
            else {
                this.langpTitlePlaceHolder = 'Sélectionnez un pays';
                this.langSearchPlaceHolder = 'Rechercher';
            }
        });
        const formData = new FormData();
        this.http
            .post(' http://fitconnected.prometteur.in/index.php/Api/fields/country_list', formData)
            .subscribe((res) => {
            console.log(res);
            this.countryListAllIsoData = res.result;
        });
    }
    dismiss(x) {
        this.modalCtrl.dismiss({
            dismissed: true,
            componentProps: {
                country: x,
            },
        });
    }
};
SelectCountryPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__.TranslateConfigService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
SelectCountryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-select-country',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_country_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_country_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        _translate_config_service__WEBPACK_IMPORTED_MODULE_3__.TranslateConfigService,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage])
], SelectCountryPage);



/***/ }),

/***/ 37201:
/*!*********************************************************************************************!*\
  !*** ./src/app/inscription-professionnel/select-country2/select-country2-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCountry2PageRoutingModule": () => (/* binding */ SelectCountry2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _select_country2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-country2.page */ 33793);




const routes = [
    {
        path: '',
        component: _select_country2_page__WEBPACK_IMPORTED_MODULE_0__.SelectCountry2Page
    }
];
let SelectCountry2PageRoutingModule = class SelectCountry2PageRoutingModule {
};
SelectCountry2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectCountry2PageRoutingModule);



/***/ }),

/***/ 42585:
/*!*************************************************************************************!*\
  !*** ./src/app/inscription-professionnel/select-country2/select-country2.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCountry2PageModule": () => (/* binding */ SelectCountry2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _select_country2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-country2-routing.module */ 37201);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _select_country2_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-country2.page */ 33793);








let SelectCountry2PageModule = class SelectCountry2PageModule {
};
SelectCountry2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule,
            _select_country2_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectCountry2PageRoutingModule
        ],
        declarations: [_select_country2_page__WEBPACK_IMPORTED_MODULE_2__.SelectCountry2Page]
    })
], SelectCountry2PageModule);



/***/ }),

/***/ 33793:
/*!***********************************************************************************!*\
  !*** ./src/app/inscription-professionnel/select-country2/select-country2.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCountry2Page": () => (/* binding */ SelectCountry2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_country2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-country2.page.html */ 8861);
/* harmony import */ var _select_country2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-country2.page.scss */ 94825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 28914);





let SelectCountry2Page = class SelectCountry2Page {
    constructor(splashScreen) {
        this.splashScreen = splashScreen;
    }
    ngOnInit() {
        this.splashScreen.show();
    }
};
SelectCountry2Page.ctorParameters = () => [
    { type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen }
];
SelectCountry2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-select-country2',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_country2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_country2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen])
], SelectCountry2Page);



/***/ }),

/***/ 35829:
/*!*************************************************************!*\
  !*** ./src/app/participants/participants-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticipantsPageRoutingModule": () => (/* binding */ ParticipantsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _participants_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./participants.page */ 84961);




const routes = [
    {
        path: '',
        component: _participants_page__WEBPACK_IMPORTED_MODULE_0__.ParticipantsPage
    }
];
let ParticipantsPageRoutingModule = class ParticipantsPageRoutingModule {
};
ParticipantsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ParticipantsPageRoutingModule);



/***/ }),

/***/ 65785:
/*!*****************************************************!*\
  !*** ./src/app/participants/participants.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticipantsPageModule": () => (/* binding */ ParticipantsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _participants_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./participants-routing.module */ 35829);
/* harmony import */ var _participants_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./participants.page */ 84961);







let ParticipantsPageModule = class ParticipantsPageModule {
};
ParticipantsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _participants_routing_module__WEBPACK_IMPORTED_MODULE_0__.ParticipantsPageRoutingModule
        ],
        declarations: [_participants_page__WEBPACK_IMPORTED_MODULE_1__.ParticipantsPage],
    })
], ParticipantsPageModule);



/***/ }),

/***/ 84961:
/*!***************************************************!*\
  !*** ./src/app/participants/participants.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticipantsPage": () => (/* binding */ ParticipantsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_participants_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./participants.page.html */ 60153);
/* harmony import */ var _participants_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./participants.page.scss */ 83189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 78713);












let ParticipantsPage = class ParticipantsPage {
    constructor(api, storage, http, httpClient, modalCtrl, route, router, af, fs) {
        this.api = api;
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.router = router;
        this.af = af;
        this.fs = fs;
        this.participantArray = [];
    }
    ngAfterViewInit() {
        this.api.loading();
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_f_name').then((user_f_name) => {
                this.storage.get('user_l_name').then((user_l_name) => {
                    this.storage.get('user_type').then((user_type) => {
                        this.user_type = user_type;
                        var lname = user_l_name.substring(0, 1);
                        this.userFullname = user_f_name + ' ' + lname + '.';
                        this.uid = user_id;
                    });
                });
            });
            console.log(this.eventId);
            const formData = new FormData();
            formData.append('event_id', this.eventId);
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/fields/event_participants', formData)
                .subscribe((res) => {
                if (res.json().status == 1) {
                    console.log(res.json());
                    var newARR = [];
                    newARR = res.json().result;
                    for (var i = 0; i < newARR.length; i++) {
                        var lName = newARR[i].participant_l_name.substring(0, 1);
                        var name = newARR[i].participant_f_name + ' ' + lName + '.';
                        newARR[i].nameFormatted = name;
                        this.participantArray.push(newARR[i]);
                        this.api.dismissLoading();
                    }
                }
                else {
                    console.log(res.json());
                    this.api.dismissLoading();
                }
            });
        });
    }
    remove(user) {
        console.log('got user to delete', user);
        let formData = new FormData();
        formData.append('book_id', user.book_id);
        formData.append('book_status', '4');
        this.api.loading();
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/remove_participant', formData)
            .subscribe((res) => {
            console.log('DELETE USER RESPONS', res);
            this.api.dismissLoading();
            this.dismiss();
            this.api.events.refreshEvents.emit();
            if (res.json().status == 1) {
            }
            else {
                // this.creatform();
                //  this.api.toast(res.msg)
            }
        });
    }
    dismiss(data) {
        // data={
        // }
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    }
    chat(user) {
        console.log(user);
        // var l_name = user.participant_l_name.substring(0, 1);
        //       var formatname =user.participant_f_name +' ' + l_name+".";
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_img').then((user_img) => {
                //   this.fs.collection('friends').doc(user_id).collection('chats').doc(user.participant_id).set({
                //     recieverName: user.nameFormatted,
                //     recieverId: user.participant_id,
                //     recieverImage:user.participant_img,
                //     senderId: user_id,
                //     senderName:this.userFullname,
                //     senderImage:user_img,
                //     Timestamp: firebase.firestore.FieldValue.serverTimestamp()
                // }, { merge: true });
                //     this.fs.collection('friends').doc(user.participant_id).collection('chats').doc(user_id).set({
                //     senderName: user.nameFormatted,
                //     senderId: user.participant_id,
                //     senderImage:user.participant_img,
                //     recieverId: user_id,
                //     recieverName:this.userFullname,
                //     recieverImage:user_img,
                //     Timestamp: firebase.firestore.FieldValue.serverTimestamp()
                // }, { merge: true });
                console.log('clicked');
                var vc = {
                    recieverId: user.participant_id,
                    senderId: user_id,
                    recieverName: user.nameFormatted,
                    recieverImg: user.participant_img,
                };
                let navigationExtras = {
                    queryParams: {
                        special: JSON.stringify(vc),
                    },
                };
                this.dismiss();
                this.router.navigate(['conversation'], navigationExtras);
            });
        });
    }
    viewProfile(user) {
        var vc = {
            user_id: user.participant_id,
        };
        console.log(user.participant_id);
        this.dismiss(vc);
    }
};
ParticipantsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore }
];
ParticipantsPage.propDecorators = {
    eventId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input, args: ['eventId',] }]
};
ParticipantsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-participants',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_participants_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_participants_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_4__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore])
], ParticipantsPage);



/***/ }),

/***/ 93029:
/*!*****************************************************!*\
  !*** ./src/app/rateuser/rateuser-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateuserPageRoutingModule": () => (/* binding */ RateuserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _rateuser_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rateuser.page */ 32448);




const routes = [
    {
        path: '',
        component: _rateuser_page__WEBPACK_IMPORTED_MODULE_0__.RateuserPage
    }
];
let RateuserPageRoutingModule = class RateuserPageRoutingModule {
};
RateuserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RateuserPageRoutingModule);



/***/ }),

/***/ 39255:
/*!*********************************************!*\
  !*** ./src/app/rateuser/rateuser.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateuserPageModule": () => (/* binding */ RateuserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _rateuser_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rateuser-routing.module */ 93029);
/* harmony import */ var _rateuser_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rateuser.page */ 32448);
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic4-rating */ 22249);








let RateuserPageModule = class RateuserPageModule {
};
RateuserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ionic4_rating__WEBPACK_IMPORTED_MODULE_2__.IonicRatingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _rateuser_routing_module__WEBPACK_IMPORTED_MODULE_0__.RateuserPageRoutingModule
        ],
        declarations: [_rateuser_page__WEBPACK_IMPORTED_MODULE_1__.RateuserPage]
    })
], RateuserPageModule);



/***/ }),

/***/ 32448:
/*!*******************************************!*\
  !*** ./src/app/rateuser/rateuser.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateuserPage": () => (/* binding */ RateuserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rateuser_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rateuser.page.html */ 19877);
/* harmony import */ var _rateuser_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rateuser.page.scss */ 64903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 78713);









let RateuserPage = class RateuserPage {
    constructor(modalcontroller, storage, http, httpClient, api) {
        this.modalcontroller = modalcontroller;
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.api = api;
    }
    ngOnInit() {
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.uid = user_id;
                this.language = lang;
            }));
        });
        console.log('DATA ON RATE USER PAGE', this.data);
        // alert('hostId' + this.data.host_user_id);
    }
    dismiss() {
        this.modalcontroller.dismiss(true);
    }
    sendRating() {
        if (!this.rate) {
            if (this.language == 'English') {
                this.api.toast('Please add rating.');
            }
            else {
                this.api.toast('Veuillez ajouter une note.');
            }
        }
        else if (!this.review) {
            if (this.language == 'English') {
                this.api.toast('Please add review.');
            }
            else {
                this.api.toast('Veuillez ajouter un commentaire.');
            }
        }
        else {
            const formData = new FormData();
            formData.append('urate_create_by', this.uid);
            formData.append('urate_review', this.review);
            formData.append('urate_rating', this.rate);
            formData.append('urate_user_id', this.data.host_user_id);
            formData.append('urate_event_id', this.data.event_id);
            formData.append('urate_noti_id', this.data.noti_id);
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/mAdd/user_rating', formData)
                .subscribe((res) => {
                if (res.json().status == 1) {
                    this.api.toast(res.json().msg);
                    this.dismiss();
                }
                else {
                    this.api.toast(res.json().msg);
                    this.dismiss();
                }
            });
        }
    }
};
RateuserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_6__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
RateuserPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['data',] }]
};
RateuserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-rateuser',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rateuser_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rateuser_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_6__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient,
        _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService])
], RateuserPage);



/***/ }),

/***/ 96611:
/*!*************************************************************!*\
  !*** ./src/app/searchfilter/searchfilter-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchfilterPageRoutingModule": () => (/* binding */ SearchfilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _searchfilter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchfilter.page */ 85487);




const routes = [
    {
        path: '',
        component: _searchfilter_page__WEBPACK_IMPORTED_MODULE_0__.SearchfilterPage
    }
];
let SearchfilterPageRoutingModule = class SearchfilterPageRoutingModule {
};
SearchfilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchfilterPageRoutingModule);



/***/ }),

/***/ 54627:
/*!*****************************************************!*\
  !*** ./src/app/searchfilter/searchfilter.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchfilterPageModule": () => (/* binding */ SearchfilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _searchfilter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchfilter-routing.module */ 96611);
/* harmony import */ var _searchfilter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchfilter.page */ 85487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let SearchfilterPageModule = class SearchfilterPageModule {
};
SearchfilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _searchfilter_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchfilterPageRoutingModule
        ],
        declarations: [_searchfilter_page__WEBPACK_IMPORTED_MODULE_1__.SearchfilterPage]
    })
], SearchfilterPageModule);



/***/ }),

/***/ 85487:
/*!***************************************************!*\
  !*** ./src/app/searchfilter/searchfilter.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchfilterPage": () => (/* binding */ SearchfilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_searchfilter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./searchfilter.page.html */ 78610);
/* harmony import */ var _searchfilter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchfilter.page.scss */ 13452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);









let SearchfilterPage = class SearchfilterPage {
    constructor(storage, http, httpClient, api, modalCtrl) {
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.sportsList = [];
        this.searchNameTerm = '';
        this.showNameList = false;
        this.searchAreaTerm = '';
        this.searchSportsTerm = '';
        this.showAreaList = false;
        this.showSportsList = false;
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('language' + lang);
            if (lang == 'English') {
                console.log('English');
                this.English = true;
                this.namePlaceholder = 'Name';
                this.sportsActivityPlaceHolder = 'Sports Activity';
                this.areaPlaceHolder = 'Location';
            }
            else {
                console.log('FRENCH');
                this.English = false;
                this.namePlaceholder = 'Nom';
                this.sportsActivityPlaceHolder = 'Activité sportive';
                this.areaPlaceHolder = 'Emplacement';
            }
            console.log(this.usersArray);
        }));
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
    dismiss(data) {
        console.log('clicked');
        console.log(data);
        if (data == 'check') {
            if (this.searchAreaTerm != '') {
                var obj = {
                    isArea: true,
                    city: this.searchAreaTerm,
                };
                this.modalCtrl.dismiss(obj);
            }
            else if (this.searchNameTerm != '') {
                var nameObj = {
                    isName: true,
                    first_name: this.searchNameTerm,
                };
                this.modalCtrl.dismiss(nameObj);
            }
            else if (this.searchSportsTerm != '') {
                var sportsObj = {
                    isSports: true,
                    sportsName: this.searchSportsTerm,
                };
                this.modalCtrl.dismiss(sportsObj);
            }
        }
        else if (data == 'noresult') {
            this.modalCtrl.dismiss(data);
        }
    }
    searchNameFunc(ev) {
        var arr = [];
        for (let i = 0; i < this.usersArray.length; i++) {
            var input = this.usersArray[i];
            arr.push(input);
            let val = ev.target.value;
            // alert(typeof(val));
            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                // Filter the items
                this.searchName = arr.filter(function (item) {
                    return (item.user_f_name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.user_l_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
                // Show the results
                if (this.searchName.length !== 0) {
                    this.showNameList = true;
                }
                else {
                    this.showNameList = false;
                }
            }
            else {
                // hide the results when the query is empty
                this.showNameList = false;
            }
            // console.log(arr);
        }
    }
    selectNameItem(item) {
        console.log(item);
        this.searchNameTerm = item.user_f_name;
        console.log(this.searchNameTerm);
        this.showNameList = false;
        return;
    }
    remove_duplicates(arr) {
        var obj = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        for (var key in obj) {
            ret_arr.push(key);
        }
        return ret_arr;
    }
    searchSportsFunc(ev) {
        var arr = [];
        for (let i = 0; i < this.usersArray.length; i++) {
            var input = this.usersArray[i];
            arr.push(input);
            let val = ev.target.value;
            // alert(typeof(val));
            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                // Filter the items
                this.searchSports = arr.filter(function (item) {
                    return item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
                this.removeDuplicates(this.searchSports, this.sportCategoryCondition);
                // Show the results
                if (this.searchSports.length !== 0) {
                    this.showSportsList = true;
                }
                else {
                    this.showSportsList = false;
                }
            }
            else {
                // hide the results when the query is empty
                this.showSportsList = false;
            }
            // console.log(arr);
        }
    }
    selectSportsItem(item) {
        console.log(item);
        this.searchSportsTerm = item.spcat_name;
        console.log(this.searchSportsTerm);
        this.showSportsList = false;
        return;
    }
    searchAreaFunc(ev) {
        var arr = [];
        for (let i = 0; i < this.usersArray.length; i++) {
            var input = this.usersArray[i];
            arr.push(input);
            let val = ev.target.value;
            // alert(typeof(val));
            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                // Filter the items
                this.searchArea = arr.filter(function (item) {
                    return (item.user_city.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.user_country.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
                // remove duplicates
                this.removeDuplicates(this.searchArea, this.areaCondition);
                // Show the results
                if (this.searchArea.length !== 0) {
                    this.showAreaList = true;
                }
                else {
                    this.showAreaList = false;
                }
            }
            else {
                // hide the results when the query is empty
                this.showAreaList = false;
            }
            // console.log(arr);
        }
    }
    sportCategoryCondition(thing1, thing2) {
        return thing1.spcat_name === thing2.spcat_name;
    }
    areaCondition(thing1, thing2) {
        return thing1.user_city === thing2.user_city;
    }
    removeDuplicates(arr, equals) {
        var originalArr = arr.slice(0);
        var i, len, val;
        arr.length = 0;
        for (i = 0, len = originalArr.length; i < len; ++i) {
            val = originalArr[i];
            if (!arr.some(function (item) {
                return equals(item, val);
            })) {
                arr.push(val);
            }
        }
    }
    selectAreaItem(item) {
        console.log(item);
        this.searchAreaTerm = item.user_city;
        console.log(this.searchAreaTerm);
        this.showAreaList = false;
        return;
    }
};
SearchfilterPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
SearchfilterPage.propDecorators = {
    usersArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['usersArray',] }]
};
SearchfilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-searchfilter',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_searchfilter_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_searchfilter_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,
        _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController])
], SearchfilterPage);



/***/ }),

/***/ 29322:
/*!**********************************************!*\
  !*** ./src/app/services/purchase.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseService": () => (/* binding */ PurchaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


// import {
//   InAppPurchase2,
//   IAPProduct,
// } from '@ionic-native/in-app-purchase-2/ngx';
let PurchaseService = class PurchaseService {
    constructor() {
        // products: Array<IAPProduct> = [];
        this.successEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    // registerProducts() {
    //   this.store.register({
    //     id: 'simple_plan_1',
    //     type: this.store.CONSUMABLE,
    //   });
    //   this.store.register({
    //     id: 'simple_plan_2',
    //     type: this.store.CONSUMABLE,
    //   });
    //   this.store.register({
    //     id: 'simple_plan_3',
    //     type: this.store.CONSUMABLE,
    //   });
    //   this.store.refresh();
    // }
    setupListeners() {
        // this.store.ready(() => {
        //   // alert('Store is ready');
        //   console.log('Products: ' + JSON.stringify(this.store.products));
        //   console.log(JSON.stringify(this.store.get('my_product_id')));
        // });
        // // Register event handlers for the specific product
        // this.store.when('product').registered((product: IAPProduct) => {
        //   console.log('Registered: ' + JSON.stringify(product));
        //   // alert('Registered: ' + JSON.stringify(product));
        // });
        // this.store.when('product').updated((product: IAPProduct) => {
        //   console.log('Updated' + JSON.stringify(product));
        //   // alert('Updated' + JSON.stringify(product));
        // });
        // // User closed the native purchase dialog
        // this.store
        //   .when('product')
        //   .cancelled((product) => {
        //     console.error('Purchase was Cancelled');
        //     // alert('Purchase was cancelled.');
        //   })
        //   .approved((product: IAPProduct) => {
        //     // call the success function with the product
        //     console.log('PRODUCT APPROVED');
        //     // alert('product is approved');
        //     product.verify();
        //   })
        //   .verified((product: IAPProduct) => {
        //     // alert('product is validated');
        //     this.successEvent.emit(product);
        //     product.finish();
        //   });
        // // Track all store errors
        // this.store.error((err) => {
        //   console.error('Store Error ' + JSON.stringify(err));
        //   // alert('Store Error ' + JSON.stringify(err));
        // });
    }
    order(planId) {
        // alert('will order' + planId);
        // this.store.order(planId);
    }
};
PurchaseService.ctorParameters = () => [];
PurchaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root',
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], PurchaseService);



/***/ }),

/***/ 47464:
/*!*********************************************!*\
  !*** ./src/app/translate-config.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateConfigService": () => (/* binding */ TranslateConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let TranslateConfigService = class TranslateConfigService {
    constructor(translate, storage, navCtrl) {
        this.translate = translate;
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    getDefaultLanguage() {
        this.storage.get('user_lang').then((userLang) => {
            console.log('userLang', userLang);
            // console.log("HEYYYYYY")
            if (userLang == undefined || userLang == null) {
                this.navCtrl.navigateRoot(['/welcome']);
                //   let language = this.translate.getBrowserLang();
                //   this.translate.setDefaultLang(language);
                //   console.log("bacha language"+language);
                //   if(language==="en"){
                //     this.language="English";
                //   }else if(language==="fr"){
                //     this.language="French";
                //   }
                //   this.storage.set('user_lang', this.language );
                //  // this.translate.use("fr");
                //   return language;
            }
            else {
                this.storage.set('user_lang', userLang);
                if (userLang == 'English' || userLang == 'en') {
                    this.translate.setDefaultLang('en');
                    return 'en';
                }
                else {
                    this.translate.setDefaultLang('fr');
                    return 'fr';
                }
            }
        });
    }
    setLanguage(setLang) {
        this.translate.use(setLang);
        if (setLang === 'en') {
            this.language = 'English';
        }
        else if (setLang === 'fr') {
            this.language = 'French';
        }
        this.storage.set('user_lang', this.language);
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
TranslateConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController])
], TranslateConfigService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n\n</ion-app>\n");

/***/ }),

/***/ 92510:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/coach-participated-events/coach-participated-events.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title\n      style=\"font-family: montserrat-medium; font-weight: bold\"\n      class=\"top-fixed-heading uppercaes\"\n      [translate]=\"'MESEVENTMENTSPARTICIPES.Text1'\"\n    ></ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"top-tabs\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" (click)=\"coming()\">\n        <div\n          class=\"tabs-block uppercaes\"\n          [translate]=\"'MESEVENTMENTSPARTICIPES.Text2'\"\n        ></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" (click)=\"created()\">\n        <div\n          class=\"tabs-block uppercaes\"\n          [translate]=\"'MESEVENTMENTSPARTICIPES.Text3'\"\n        ></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\">\n        <div\n          class=\"tabs-block uppercaes selected-tabs\"\n          [translate]=\"'MESEVENTMENTSPARTICIPES.Text4'\"\n        ></div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list class=\"mes-content\">\n    <ion-row\n      style=\"\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        text-align: center;\n      \"\n    >\n      <ion-text style=\"font-family: montserrat-medium; font-weight: bold\"\n        ><b>{{ totalEvents }}</b>\n        <span [translate]=\"'MESEVENTMENTSPARTICIPES.Text5'\"></span\n      ></ion-text>\n    </ion-row>\n\n    <div *ngIf=\"!empty\">\n      <section class=\"gray-box\" *ngFor=\"let detail of activeEvents\">\n        <div *ngIf=\"detail.host_user_type === '1'\">\n          <ion-row class=\"title-with-date\">\n            <b class=\"title-txt\" style=\"font-family: montserrat-medium\">\n              <!-- {{detail.event_individuals_title}} -->\n              {{ detail.spcat_name | titlecase }}\n            </b>\n            <div class=\"date-txt\" style=\"font-family: montserrat-medium\">\n              {{ detail.event_individuals_date }}\n            </div>\n          </ion-row>\n          <div class=\"iconswith-row\">\n            <img\n              class=\"location-img\"\n              src=\"../../assets/images/unselectedlocation.png\"\n            />\n            <div class=\"details-box\" style=\"font-family: montserrat-medium\">\n              {{ detail.event_individuals_address }}\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"detail.host_user_type === '2'\">\n          <ion-row class=\"title-with-date\">\n            <b class=\"title-txt\" style=\"font-family: montserrat-medium\">\n              <!-- {{detail.event_coach_title}} -->\n              <!-- {{ detail.event_sport_cate }} -->\n              {{ detail.spcat_name }}\n            </b>\n            <div class=\"date-txt\" style=\"font-family: montserrat-medium\">\n              {{ detail.event_coach_date }}\n            </div>\n          </ion-row>\n          <div class=\"iconswith-row\">\n            <img\n              class=\"location-img\"\n              src=\"../../assets/images/unselectedlocation.png\"\n            />\n            <div class=\"details-box\" style=\"font-family: montserrat-medium\">\n              {{ detail.event_coach_address }}\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n\n    <!-- <div style=\"display: flex;\n  justify-content: center;\" *ngIf=\"empty\">\n    {{message}}\n  </div> -->\n  </ion-list>\n</ion-content>\n<ion-footer class=\"footer-fixed-tab\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div class=\"footer-btn-tabs\" (click)=\"home()\">\n        <img\n          src=\"assets/images/unselectedlocation.png\"\n          class=\"footer-img-location\"\n        />\n      </div>\n\n      <div class=\"footer-btn-tabs\" (click)=\"rankingDetails()\">\n        <img src=\"assets/rankiconunselected.svg\" class=\"footer-img-location\" />\n      </div>\n\n      <div class=\"footer-btn-tabs\">\n        <img src=\"assets/images/selectedcalendar.png\" class=\"footer-img-date\" />\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"messages()\">\n        <img src=\"assets/images/unselectedmsg.png\" class=\"footer-img-chat\" />\n        <div class=\"round\" *ngIf=\"this.api.showMessageDot\"></div>\n      </div>\n      <div class=\"footer-btn-tabs\" (click)=\"notifications()\">\n        <img\n          src=\"assets/images/unselectednotification.png\"\n          class=\"footer-img-noti\"\n        />\n        <div class=\"round\" *ngIf=\"this.api.showNotificationDot\">\n          {{ notificationArray }}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 51754:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/followlist/followlist.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n  <ion-toolbar>\n    <div class=\"header\">\n      <ion-title *ngIf=\"followerList\" style=\"font-size: 16px;font-family: montserrat-medium;\">{{followers}} <span [translate]=\"'FOLLOWLIST.Text1'\"></span></ion-title>\n    <ion-title *ngIf= \"followingList\" style=\"font-size: 16px;font-family: montserrat-medium;\"> <span [translate]=\"'FOLLOWLIST.Text2'\"></span> {{following}} <span [translate]=\"'FOLLOWLIST.Text3'\"></span></ion-title>\n    <ion-icon name=\"close\" size=\"large\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n \n    \n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n\n  <!-- follower list -->\n  <div *ngIf=\"followerList\">\n    <ion-row style=\"margin-top: 2%;\" *ngFor=\"let follow of followersArray\">\n      <ion-col [size]=\"2\" (click)=\"dismiss(follow)\">\n        <ion-avatar style=\"display: flex;\n        align-items: center;\">\n            <ion-img style=\"width: 50px;\n            height: 50px;\" [src]=\"follow.user_img\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col [size]=\"5\" (click)=\"dismiss(follow)\">\n          {{follow.nameFormatted}}\n      </ion-col>\n      <ion-col [size]=\"5\" *ngIf=\"follow.user_follow==='0' && userId=='1'\">\n          <ion-button style=\"--border-radius: 52px;--background:#D3C117;\" (click)=\"startFollow(follow)\" [translate]=\"'FOLLOWLIST.Text4'\"></ion-button>\n      </ion-col>\n  </ion-row>\n\n  </div>\n        \n            \n       \n\n        <!-- following list -->\n        <div *ngIf=\"followingList\">\n                 \n                  <ion-row style=\"margin-top: 2%;\" *ngFor=\"let follow of followingArray\">\n                      <ion-col [size]=\"2\" (click)=\"dismiss(follow)\">\n                          <ion-avatar style=\"display: flex;\n                          align-items: center;\">\n                              <ion-img style=\"width: 50px;\n                              height: 50px;\" [src]=\"follow.user_img\"></ion-img>\n                          </ion-avatar>\n                      </ion-col>\n                      <ion-col [size]=\"5\" (click)=\"dismiss(follow)\" style=\"font-weight: bolder;color: #929292; font-family: 'montserrat-medium';margin-left: 10px;\">\n                          {{follow.nameFormatted}}\n                      </ion-col>\n                      <ion-col >\n                          <ion-button style=\"--border-radius: 52px;--background:#D3C117;font-size: 10px; font-weight: bold;\" (click)=\"startUnfollow(follow)\" [translate]=\"'FOLLOWLIST.Text5'\"></ion-button>\n                      </ion-col>\n                  </ion-row>\n                \n           \n           </div>\n\n</ion-content>\n");

/***/ }),

/***/ 95700:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inscription-particulier/select-country/select-country.page.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n\n<ion-content>\n  <div style=\"font-family: montserrat-medium;\" class=\"title top\">\n   {{langpTitlePlaceHolder}}\n  </div>\n  <ion-searchbar class=\"top\" color=\"light\" [(ngModel)]=\"query\" placeholder=\"{{langSearchPlaceHolder}}\"></ion-searchbar>\n  <ion-item-divider style=\"background: #ffffff;border-bottom: 1px soild #999;\">\n  </ion-item-divider>\n  <ion-list class=\"fade\">\n    <ion-item *ngFor=\"let get of countryListAllIsoData | filter:query;\" (click)=\"dismiss(get)\">\n      <ion-label >{{get.con_name}}</ion-label>\n    </ion-item>\n   \n  </ion-list>\n  </ion-content>\n");

/***/ }),

/***/ 8861:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inscription-professionnel/select-country2/select-country2.page.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n");

/***/ }),

/***/ 60153:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/participants/participants.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n  <!-- <ion-toolbar> -->\n  <ion-row>\n    <ion-col\n      [size]=\"8\"\n      style=\"justify-content: flex-end; font-family: montserrat-medium\"\n    >\n      Participants :\n    </ion-col>\n    <ion-col [size]=\"4\" style=\"justify-content: flex-end\">\n      <ion-icon name=\"close\" size=\"large\" (click)=\"dismiss()\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-col> </ion-col>\n\n  <!-- <div class=\"header\">\n    <ion-title>Participants :</ion-title>\n   \n      <ion-icon name=\"close\" size=\"large\" (click)=\"dismiss()\"></ion-icon>\n    </div> -->\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"margin-top: 2%\" *ngFor=\"let user of participantArray\">\n    <ion-col [size]=\"2\">\n      <ion-avatar style=\"display: flex; align-items: center\">\n        <ion-img\n          style=\"width: 50px; height: 50px\"\n          [src]=\"user.participant_img\"\n        ></ion-img>\n      </ion-avatar>\n    </ion-col>\n    <ion-col [size]=\"5\" (click)=\"viewProfile(user)\">\n      {{user.nameFormatted}}\n    </ion-col>\n\n    <ion-col\n      style=\"justify-content: flex-end !important\"\n      *ngIf=\"uid!==user.participant_id\"\n      [size]=\"5\"\n    >\n      <ion-avatar style=\"display: flex; align-items: center\">\n        <img\n          (click)=\"remove(user)\"\n          style=\"width: 30px; height: 30px\"\n          src=\"../../assets/images/remove.png\"\n        />\n        &nbsp;\n        <img\n          (click)=\"chat(user)\"\n          style=\"width: 30px; height: 30px\"\n          src=\"../../assets/images/message-orange.png\"\n        />\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ 19877:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rateuser/rateuser.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row>\n    <ion-col\n      size=\"8\"\n      style=\"\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n      \"\n    >\n      <ion-text style=\"font-weight: bold; font-size: 14px\"\n        >Rating and Reviews</ion-text\n      >\n    </ion-col>\n    <ion-col\n      size=\"4\"\n      style=\"display: flex; flex-direction: row-reverse\"\n      (click)=\"dismiss()\"\n    >\n      <ion-icon style=\"font-size: 24px\" name=\"close\"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"justify-content: center; margin-top: 5%\">\n    <ion-text style=\"font-weight: bold; font-size: 14px\">Rating</ion-text>\n  </ion-row>\n\n  <ion-row style=\"justify-content: center; margin-top: 5%\">\n    <div\n      style=\"\n        height: 28%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n      \"\n    >\n      <rating [rate]=\"rate\" readonly=\"false\" [(ngModel)]=\"rate\" size=\"default\">\n        <!-- size=\"default\" (click)=\"clicked($event)\" \n      (rateChange)=\"onRateChange($event)\"> -->\n      </rating>\n    </div>\n  </ion-row>\n\n  <ion-row style=\"justify-content: center; margin-top: 5%\">\n    <ion-text> Review </ion-text>\n  </ion-row>\n\n  <ion-row style=\"justify-content: center; margin-top: 5%\">\n    <ion-textarea\n      [(ngModel)]=\"review\"\n      style=\"border: 1px solid #707070\"\n    ></ion-textarea>\n  </ion-row>\n\n  <ion-row style=\"justify-content: center; margin-top: 5%\">\n    <ion-button shape=\"round\" (click)=\"sendRating()\">Send</ion-button>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ 78610:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/searchfilter/searchfilter.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row\n    style=\"\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: baseline;\n      margin-top: 5%;\n    \"\n  >\n    <ion-col>\n      <ion-text\n        [translate]=\"'SEARCHFILTER.Text1'\"\n        style=\"\n          color: #d3c117;\n          font-size: 18px;\n          font-weight: bold;\n          margin-left: 5%;\n        \"\n      ></ion-text>\n    </ion-col>\n    <ion-col\n      style=\"display: flex; flex-direction: row-reverse; margin-right: 5%\"\n    >\n      <img src=\"assets/cross.svg\" (click)=\"dismiss('noresult')\" />\n    </ion-col>\n  </ion-row>\n  <!-- <ion-item style=\"margin-top: 10%;\">\n    <img src=\"assets/man-user.svg\">\n    <ion-input [(ngModel)]=\"searchNameTerm\" (ionInput)=\"searchNameFunc($event)\" placeholder=\"{{namePlaceholder}}\" type=\"text\"></ion-input>\n  </ion-item>\n  <div *ngIf=\"showNameList\">\n    <ion-list>\n      <ion-item *ngFor=\"let item of searchName\" (click)=\"selectNameItem(item)\">\n        <ion-text>{{item.user_f_name}}</ion-text>\n        \n      </ion-item>\n    </ion-list>\n  </div> -->\n\n  <ion-item style=\"margin-top: 5%\">\n    <img src=\"assets/running.svg\" />\n    <ion-input\n      [(ngModel)]=\"searchSportsTerm\"\n      (ionInput)=\"searchSportsFunc($event)\"\n      style=\"margin-left: 4% !important\"\n      placeholder=\"{{sportsActivityPlaceHolder}}\"\n      type=\"text\"\n    ></ion-input>\n  </ion-item>\n  <div *ngIf=\"showSportsList\">\n    <ion-list>\n      <ion-item\n        *ngFor=\"let item of searchSports\"\n        (click)=\"selectSportsItem(item)\"\n      >\n        <ion-text>{{item.spcat_name}}</ion-text>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-item style=\"margin-top: 5%\">\n    <img src=\"assets/icone-location-gris.svg\" />\n    <ion-input\n      [(ngModel)]=\"searchAreaTerm\"\n      (ionInput)=\"searchAreaFunc($event)\"\n      placeholder=\"{{areaPlaceHolder}}\"\n      type=\"text\"\n    ></ion-input>\n  </ion-item>\n  <div *ngIf=\"showAreaList\">\n    <ion-list>\n      <ion-item *ngFor=\"let item of searchArea\" (click)=\"selectAreaItem(item)\">\n        <ion-text>{{item.user_city}}, {{item.user_country}}</ion-text>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-row style=\"margin-top: 10%; justify-content: center\">\n    <ion-button\n      shape=\"round\"\n      [translate]=\"'SEARCHFILTER.Text1'\"\n      color=\"primary\"\n      style=\"color: white; font-weight: bold; font-size: 18px\"\n      (click)=\"dismiss('check')\"\n    ></ion-button>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 94841:
/*!************************************************************************************!*\
  !*** ./src/app/coach-participated-events/coach-participated-events.component.scss ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header-fixed-top {\n  text-align: center;\n}\n.header-fixed-top ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.header-fixed-top .top-tabs {\n  --background: #ffffff;\n  --ion-color-base: #ffffff !important;\n  color: #cccccc;\n  position: relative;\n  font-weight: bold;\n}\n.header-fixed-top .top-tabs .tabs-block {\n  position: relative;\n}\n.header-fixed-top .top-tabs .tabs-block:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  top: -19px;\n  left: 0px;\n}\n.header-fixed-top .top-tabs .selected-tabs {\n  color: #d3c117;\n  font-weight: bold;\n  font-family: \"montserrat-medium;\";\n}\n.header-fixed-top .top-tabs .selected-tabs:before {\n  background: #d3c117;\n}\n.evenement-title {\n  font-size: 14px;\n  text-align: center;\n  color: #666666;\n  margin: 10px 0px 15px 0px;\n}\n.mes-content {\n  padding: 10px 10px 0px 10px;\n}\n.mes-content .gray-box {\n  width: 100%;\n  margin-top: 10px;\n  text-align: center;\n  position: relative;\n  background: #f8f8f8;\n  padding: 15px;\n  overflow: initial;\n}\n.mes-content .gray-box .title-with-date {\n  margin-bottom: 10px;\n  position: relative;\n  font-size: 16px;\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  color: #666666;\n}\n.mes-content .gray-box .title-with-date .date-txt {\n  float: right;\n  font-size: 12px;\n}\n.mes-content .gray-box .buttonbox-cardouter {\n  position: absolute;\n  z-index: 10;\n  left: calc(50% - 85px);\n  bottom: -20px;\n}\n.mes-content .gray-box .iconswith-row {\n  position: relative;\n  padding-left: 20px;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  color: #666666;\n}\n.mes-content .gray-box .iconswith-row img {\n  position: absolute;\n  left: 0px;\n}\n.mes-content .gray-box .iconswith-row .location-img {\n  width: 12px !important;\n}\n.card-coach {\n  margin-top: 10px;\n  text-align: center;\n  position: relative;\n  background: #f8f8f8;\n  padding: 15px 0px 20px 0px;\n  overflow: initial;\n  margin-bottom: 35px !important;\n}\n.card-coach .amount-engagement {\n  display: inline-block;\n}\n.card-coach .peramt-box {\n  margin-bottom: 10px;\n  color: #a9a9a9;\n  margin-top: -3px;\n}\n.card-coach .engage-radio-box ion-radio {\n  margin-right: 10px;\n}\n.card-coach .buttonbox-cardouter {\n  position: absolute;\n  z-index: 10;\n  left: calc(50% - 85px);\n  bottom: -20px;\n}\n.card-coach .label-withterms a {\n  color: #525252;\n  text-decoration: underline;\n}\n.card-coach .engage-radio-box {\n  background: #f5f5f5;\n}\n.card-coach .engage-radio-box radio {\n  color: #000000;\n}\n.footer-fixed-tab {\n  background: #414141;\n  width: 100%;\n  padding: 0px 5%;\n}\n.footer-fixed-tab ion-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs {\n  width: 25%;\n  float: left;\n  text-align: center;\n  padding: 15px;\n  --background: transparent;\n  position: relative;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs img {\n  width: 50%;\n}\n.footer-fixed-tab ion-toolbar .footer-btn-tabs .round {\n  height: 15px;\n  width: 15px;\n  background-color: #d3c117;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  left: 50px;\n  top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNoLXBhcnRpY2lwYXRlZC1ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUU7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQURJO0VBQ0Usa0JBQUE7QUFHTjtBQURJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUdOO0FBREk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxtQkFBQTtBQUdOO0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUFBO0VBQ0UsMkJBQUE7QUFHRjtBQUZFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBSUo7QUFISTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS047QUFKTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBTVI7QUFISTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUtOO0FBSEk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLTjtBQUpNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBTVI7QUFKTTtFQUNFLHNCQUFBO0FBTVI7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBR0Y7QUFGRTtFQUNFLHFCQUFBO0FBSUo7QUFERTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR0o7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUFJO0VBQ0UsY0FBQTtBQUVOO0FBRUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBRUo7QUFESTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUdOO0FBRk07RUFDRSxVQUFBO0FBSVI7QUFGTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFJUiIsImZpbGUiOiJjb2FjaC1wYXJ0aWNpcGF0ZWQtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1maXhlZC10b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC50b3AtdGFicyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLnRhYnMtYmxvY2sge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAudGFicy1ibG9jazpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICB0b3A6IC0xOXB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgIH1cbiAgICAuc2VsZWN0ZWQtdGFicyB7XG4gICAgICBjb2xvcjogI2QzYzExNztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdC1tZWRpdW07XCI7XG4gICAgfVxuICAgIC5zZWxlY3RlZC10YWJzOmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZDNjMTE3O1xuICAgIH1cbiAgfVxufVxuLmV2ZW5lbWVudC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAxMHB4IDBweCAxNXB4IDBweDtcbn1cbi5tZXMtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbiAgLmdyYXktYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgIC50aXRsZS13aXRoLWRhdGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgLmRhdGUtdHh0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5idXR0b25ib3gtY2FyZG91dGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSA4NXB4KTtcbiAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgfVxuICAgIC5pY29uc3dpdGgtcm93IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgICAubG9jYXRpb24taW1nIHtcbiAgICAgICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtY29hY2gge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgcGFkZGluZzogMTVweCAwcHggMjBweCAwcHg7XG4gIG92ZXJmbG93OiBpbml0aWFsO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4ICFpbXBvcnRhbnQ7XG4gIC5hbW91bnQtZW5nYWdlbWVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLnBlcmFtdC1ib3gge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICNhOWE5YTk7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgfVxuXG4gIC5lbmdhZ2UtcmFkaW8tYm94IGlvbi1yYWRpbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmJ1dHRvbmJveC1jYXJkb3V0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDg1cHgpO1xuICAgIGJvdHRvbTogLTIwcHg7XG4gIH1cbiAgLmxhYmVsLXdpdGh0ZXJtcyBhIHtcbiAgICBjb2xvcjogIzUyNTI1MjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuZW5nYWdlLXJhZGlvLWJveCB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICByYWRpbyB7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gIH1cbn1cbi5mb290ZXItZml4ZWQtdGFiIHtcbiAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA1JTtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLmZvb3Rlci1idG4tdGFicyB7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAucm91bmQge1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjMTE3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 29077:
/*!*************************************************!*\
  !*** ./src/app/followlist/followlist.page.scss ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n}\n\nion-col {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvd2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiZm9sbG93bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 29145:
/*!*********************************************************************************!*\
  !*** ./src/app/inscription-particulier/select-country/select-country.page.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".title {\n  margin-top: 35px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1jb3VudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic2VsZWN0LWNvdW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuIl19 */";

/***/ }),

/***/ 94825:
/*!*************************************************************************************!*\
  !*** ./src/app/inscription-professionnel/select-country2/select-country2.page.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".title {\n  margin-top: 35px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1jb3VudHJ5Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InNlbGVjdC1jb3VudHJ5Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4iXX0= */";

/***/ }),

/***/ 83189:
/*!*****************************************************!*\
  !*** ./src/app/participants/participants.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n}\n\nion-col {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY2lwYW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJwYXJ0aWNpcGFudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxufSJdfQ== */";

/***/ }),

/***/ 64903:
/*!*********************************************!*\
  !*** ./src/app/rateuser/rateuser.page.scss ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRldXNlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 13452:
/*!*****************************************************!*\
  !*** ./src/app/searchfilter/searchfilter.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  width: 90%;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InNlYXJjaGZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59Il19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map