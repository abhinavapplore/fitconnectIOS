"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_question_question_module_ts"],{

/***/ 51433:
/*!*****************************************************!*\
  !*** ./src/app/question/question-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPageRoutingModule": () => (/* binding */ QuestionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.page */ 14228);




const routes = [
    {
        path: '',
        component: _question_page__WEBPACK_IMPORTED_MODULE_0__.QuestionPage
    }
];
let QuestionPageRoutingModule = class QuestionPageRoutingModule {
};
QuestionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionPageRoutingModule);



/***/ }),

/***/ 75284:
/*!*********************************************!*\
  !*** ./src/app/question/question.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPageModule": () => (/* binding */ QuestionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _question_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-routing.module */ 51433);
/* harmony import */ var _question_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.page */ 14228);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let QuestionPageModule = class QuestionPageModule {
};
QuestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _question_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionPageRoutingModule
        ],
        declarations: [_question_page__WEBPACK_IMPORTED_MODULE_1__.QuestionPage]
    })
], QuestionPageModule);



/***/ }),

/***/ 14228:
/*!*******************************************!*\
  !*** ./src/app/question/question.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPage": () => (/* binding */ QuestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./question.page.html */ 21301);
/* harmony import */ var _question_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.page.scss */ 25404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 78713);









let QuestionPage = class QuestionPage {
    constructor(api, route, router, storage, http, httpClient) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.AlreadyUser = false;
        this.route.queryParams.subscribe((params) => {
            if (params && params.special) {
                var details = JSON.parse(params.special);
                if (details.pageRoute === 'myProfile') {
                    this.AlreadyUser = true;
                    this.uid = details.userId;
                    this.selectone = details.selected;
                }
            }
        });
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => {
            if (lang == 'English') {
                this.English = true;
                this.type = [
                    {
                        name: 'Occasional',
                        select: false,
                    },
                    {
                        name: 'Regular',
                        select: false,
                    },
                    // {
                    //   "name": "Trailer",
                    //   "select": false
                    // }
                ];
            }
            else {
                this.English = false;
                this.type = [
                    {
                        name: 'Occasionnel',
                        select: false,
                    },
                    {
                        name: 'Régulier',
                        select: false,
                    },
                    // {
                    //   "name": "Trailer",
                    //   "select": false
                    // }
                ];
            }
            for (let i = 0; i < this.type.length; i++) {
                if (this.selectone == this.type[i].name) {
                    this.able = true;
                    this.selectone = this.type[i].name;
                    this.type[i].select = true;
                }
                else {
                    this.type[i].select = false;
                }
            }
        });
    }
    selected(x) {
        for (let i = 0; i < this.type.length; i++) {
            if (i == x) {
                this.able = true;
                this.selectone = this.type[i].name;
                this.type[i].select = true;
            }
            else {
                this.type[i].select = false;
            }
        }
    }
    submit() {
        if (this.able == true) {
            if (this.AlreadyUser === true) {
                console.log(this.selectone);
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_question1_response', this.selectone);
                this.http
                    .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                    .subscribe((res) => {
                    if (res.json().status == 1) {
                        console.log(res);
                        var vc = {
                            pageRoute: 'question',
                            userId: this.uid,
                        };
                        let navigationExtras = {
                            queryParams: {
                                special: JSON.stringify(vc),
                            },
                        };
                        this.router.navigate(['mon-profil'], navigationExtras);
                    }
                });
            }
            else {
                var questions = {
                    user_question1_response: this.selectone,
                };
                this.api.setstorage('questions', questions);
                // this.api.Navigate("question2")
                this.api.Navigate('inscription-professionnel3');
            }
        }
        else {
            if (this.English) {
                this.api.toast('Please select the type of athlete.');
            }
            else {
                this.api.toast('Veuillez sélectionner le type de sportif.');
            }
        }
    }
};
QuestionPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
QuestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-question',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient])
], QuestionPage);



/***/ }),

/***/ 21301:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/question/question.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n    <ion-toolbar class=\"terms-headersection\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"connexion\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen >\n    <section >\n  \n        <div class=\"center-content\">\n            <ion-row>\n                <ion-col style=\"font-family: montserrat-medium; font-weight: bold; color: #D3C117;\" class=\"question-count\" [translate]=\"'QUESTION.Text1'\"></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-12 class=\"question-box-main\" [translate]=\"'QUESTION.Text2'\"></ion-col>\n            </ion-row>\n            <ion-row class=\"options-box\" >\n           \n                    <h3 style=\"font-family: montserrat;font-weight: bold;\" *ngFor=\"let get of type;let x = index;\" [ngClass]=\"{selectedans: get.select == true}\" (click)=\"selected(x)\">{{get.name}}</h3>\n               \n            </ion-row>\n            <ion-row>\n                <button ion-button class=\"login-button global-btn\" style=\"background-color: #D3C117; color: white;\" (click)=\"submit()\" [translate]=\"'QUESTION.Text3'\">SUIVANT\n                </button>\n            </ion-row>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ 25404:
/*!*********************************************!*\
  !*** ./src/app/question/question.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: url('login-bg.svg') no-repeat 52% center/cover;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.terms-headersection {\n  color: #ffffff;\n  background: transparent;\n}\n\n.question-count {\n  margin-top: 0px;\n  color: #D3C117;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 18px !important;\n}\n\n.question-box-main {\n  font-size: 18px;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.options-box {\n  margin: 40px 0px;\n}\n\n.options-box h3 {\n  font-size: 20px !important;\n  width: 100%;\n  color: #cccccc;\n  display: inline-block;\n  font-weight: inherit;\n}\n\n.login-button {\n  width: 170px;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1px;\n  border-radius: 20px;\n  margin: 15px auto;\n  font-weight: bold;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLDREQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7QUFBTjs7QUFHRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDRTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDRTtFQUNFLGdCQUFBO0FBRUo7O0FBREk7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUdOOztBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0FBR0oiLCJmaWxlIjoicXVlc3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi1iZy5zdmcnKSBuby1yZXBlYXQgNTIlIGNlbnRlci9jb3ZlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgfVxuICBcbiAgLnRlcm1zLWhlYWRlcnNlY3Rpb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5xdWVzdGlvbi1jb3VudCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiAjRDNDMTE3O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnF1ZXN0aW9uLWJveC1tYWluIHtcblxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAub3B0aW9ucy1ib3gge1xuICAgIG1hcmdpbjogNDBweCAwcHg7XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICBcbiAgICB9XG4gIH1cbiAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_question_question_module_ts.js.map