"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_responce3_responce3_module_ts"],{

/***/ 19266:
/*!*******************************************************!*\
  !*** ./src/app/responce3/responce3-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Responce3PageRoutingModule": () => (/* binding */ Responce3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _responce3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responce3.page */ 95975);




const routes = [
    {
        path: '',
        component: _responce3_page__WEBPACK_IMPORTED_MODULE_0__.Responce3Page
    }
];
let Responce3PageRoutingModule = class Responce3PageRoutingModule {
};
Responce3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Responce3PageRoutingModule);



/***/ }),

/***/ 88806:
/*!***********************************************!*\
  !*** ./src/app/responce3/responce3.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Responce3PageModule": () => (/* binding */ Responce3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _responce3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responce3-routing.module */ 19266);
/* harmony import */ var _responce3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responce3.page */ 95975);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let Responce3PageModule = class Responce3PageModule {
};
Responce3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _responce3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Responce3PageRoutingModule
        ],
        declarations: [_responce3_page__WEBPACK_IMPORTED_MODULE_1__.Responce3Page]
    })
], Responce3PageModule);



/***/ }),

/***/ 95975:
/*!*********************************************!*\
  !*** ./src/app/responce3/responce3.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Responce3Page": () => (/* binding */ Responce3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_responce3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./responce3.page.html */ 64455);
/* harmony import */ var _responce3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responce3.page.scss */ 5928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ 91554);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 24401);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);











let Responce3Page = class Responce3Page {
    constructor(api, storage, fs, afa, angularstorage) {
        this.api = api;
        this.storage = storage;
        this.fs = fs;
        this.afa = afa;
        this.angularstorage = angularstorage;
        this.user_question3_response = [];
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => {
            this.lang = lang;
            if (lang == "English") {
                this.langNumber = "1";
            }
            else {
                this.langNumber = "2";
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
                                                this.storage.get('user_fcm_key').then((user_fcm_key) => {
                                                    this.storage.get('user_id').then((user_id) => {
                                                        this.storage.get('user_sport_category').then((user_sport_category) => {
                                                            this.storage.get('user_other_sport_cate').then(user_other_sport_cate => {
                                                                this.udk = user_id;
                                                                this.user_l_name = user_l_name;
                                                                this.user_f_name = user_f_name;
                                                                this.user_email = user_email;
                                                                this.user_password = user_password;
                                                                this.user_dob = user_dob;
                                                                this.user_postal_code = user_postal_code;
                                                                this.user_gender = user_gender;
                                                                this.user_img = user_img;
                                                                this.user_country = user_country;
                                                                this.user_city = user_city;
                                                                this.user_fcm_key = user_fcm_key;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.discription) {
                var setdiscription = this.api.getStorage("questions");
                setdiscription.user_description2 = this.discription;
                this.api.setstorage("questions", setdiscription);
                // var ques3= JSON.parse(setdiscription.user_question3_response);
                this.storage.get('item').then((newArray) => {
                    this.disponsibility = newArray;
                });
                const formData = new FormData();
                // formData.append('user_id', this.udk);
                formData.append('user_description1', setdiscription.user_description2);
                formData.append('user_description2', this.discription);
                formData.append('user_question1_response', setdiscription.user_question1_response);
                formData.append('user_question2_response', setdiscription.user_description1);
                // formData.append('user_question3_response', JSON.stringify(this.user_question3_response));
                formData.append('user_l_name', this.user_l_name);
                formData.append('user_f_name', this.user_f_name);
                formData.append('user_email', this.user_email);
                formData.append('user_password', this.user_password);
                formData.append('user_dob', this.user_dob);
                formData.append('user_postal_code', this.user_postal_code);
                formData.append('user_gender', this.user_gender);
                formData.append('user_img', this.user_img);
                formData.append('user_type', "1");
                formData.append('user_country', this.user_country);
                formData.append('user_city', this.user_city);
                formData.append('user_fcm_key', this.user_fcm_key);
                formData.append('user_language', this.langNumber);
                formData.append('user_sport_category', this.sportsInstructed);
                formData.append('user_other_sport_cate', this.otherSportsCategory);
                let res = yield this.api.postapi("madd/user", formData);
                if (res.status == 1) {
                    this.useId = res.result.toString();
                    // fireauth.createUserWithEmailAndPassword(FirebaseAuth,this.user_email,'12345678').then(() => {
                    //   fireauth.currentUser.updateProfile({
                    //     displayName: this.user_f_name + this.user_l_name,
                    //     photoURL: this.user_img
                    //   }).catch(err => {
                    //   });
                    // }).catch(err => {
                    //   console.log("falied email" + err);
                    // });
                    this.fs.collection('friends').doc(this.useId).set({
                        userEmail: this.user_email,
                        // userPhone: this.mobile,
                        hubSportId: this.useId,
                        Name: this.user_f_name + this.user_l_name,
                        displayName: this.user_f_name + this.user_l_name,
                        photoURL: this.user_img,
                        UserID: this.useId,
                        Timestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.Timestamp.fromDate(new Date()),
                    }, { merge: true });
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
                    this.api.Navigate("creer-evenement");
                }
                else {
                    if (this.lang == "English") {
                        this.api.toast("Veuillez réessayer après quelque temps");
                    }
                    else {
                        this.api.toast("Veuillez vous connecter pour continuer");
                    }
                }
            }
            else {
                if (this.lang == "English") {
                    this.api.toast("Please fill in the description.");
                }
                else {
                    this.api.toast("Veuillez remplir la description.");
                }
            }
        });
    }
};
Responce3Page.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage }
];
Responce3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-responce3',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_responce3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_responce3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService, _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage])
], Responce3Page);



/***/ }),

/***/ 64455:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/responce3/responce3.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header no-border>\n    <ion-toolbar class=\"terms-headersection\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"question2\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen >\n  <section >\n   \n      <div class=\"center-content\" style=\"padding-top: 30%;\">\n        <ion-row>\n            <ion-col style=\"font-family: montserrat-medium;\" style=\"color: #D3C117;\" class=\"question-count\" [translate]=\"'RESPONCE3.Text1'\"></ion-col>\n        </ion-row>\n          <ion-row>\n              <ion-col col-12 class=\"question-box-main\" [translate]=\"'RESPONCE3.Text2'\">  \n                  \n            \n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-textarea style=\"font-weight: bold;color: white;font-family: montserrat\" placeholder=\"Description\" rows=\"10\" [(ngModel)]=\"discription\" ></ion-textarea>\n          </ion-row>\n          <ion-row>\n              <button ion-button class=\"global-submit-button global-btn\" style=\"background-color: #D3C117; color: white;\" (click)=\"submit()\" [translate]=\"'RESPONCE3.Text4'\">\n              </button>\n          </ion-row>\n      </div>\n  </section>\n</ion-content>");

/***/ }),

/***/ 5928:
/*!***********************************************!*\
  !*** ./src/app/responce3/responce3.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".terms-headersection {\n  color: #ffffff;\n  background: transparent;\n}\n\n.question-count {\n  color: #D3C117;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 16px !important;\n}\n\n.question-box-main {\n  font-size: 18px;\n  color: #ffffff;\n  font-weight: bold;\n}\n\nion-textarea {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px !important;\n  padding: 1%;\n  margin: 3%;\n  opacity: 80%;\n  --placeholder-opacity: 100%;\n  font-weight: bold;\n  --placeholder-color: white;\n}\n\nion-content {\n  --background: url('login-bg.svg') no-repeat 52% center/cover;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbmNlMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHRTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFJRTtFQUNFLDREQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7QUFESiIsImZpbGUiOiJyZXNwb25jZTMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC50ZXJtcy1oZWFkZXJzZWN0aW9uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLnF1ZXN0aW9uLWNvdW50IHtcbiAgICBjb2xvcjogI0QzQzExNztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIC5xdWVzdGlvbi1ib3gtbWFpbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIFxuICB9XG4gXG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBtYXJnaW46IDMlO1xuICAgIG9wYWNpdHk6IDgwJTtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4tYmcuc3ZnJykgbm8tcmVwZWF0IDUyJSBjZW50ZXIvY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG4gICBcbiAgXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_responce3_responce3_module_ts.js.map