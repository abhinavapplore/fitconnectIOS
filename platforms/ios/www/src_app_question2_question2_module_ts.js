"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_question2_question2_module_ts"],{

/***/ 84666:
/*!*******************************************************!*\
  !*** ./src/app/question2/question2-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question2PageRoutingModule": () => (/* binding */ Question2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _question2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question2.page */ 94659);




const routes = [
    {
        path: '',
        component: _question2_page__WEBPACK_IMPORTED_MODULE_0__.Question2Page
    }
];
let Question2PageRoutingModule = class Question2PageRoutingModule {
};
Question2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Question2PageRoutingModule);



/***/ }),

/***/ 74642:
/*!***********************************************!*\
  !*** ./src/app/question2/question2.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question2PageModule": () => (/* binding */ Question2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _question2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question2-routing.module */ 84666);
/* harmony import */ var _question2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question2.page */ 94659);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let Question2PageModule = class Question2PageModule {
};
Question2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _question2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Question2PageRoutingModule
        ],
        declarations: [_question2_page__WEBPACK_IMPORTED_MODULE_1__.Question2Page]
    })
], Question2PageModule);



/***/ }),

/***/ 94659:
/*!*********************************************!*\
  !*** ./src/app/question2/question2.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question2Page": () => (/* binding */ Question2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./question2.page.html */ 38047);
/* harmony import */ var _question2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question2.page.scss */ 32731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 78713);






let Question2Page = class Question2Page {
    constructor(api, storage) {
        this.api = api;
        this.storage = storage;
    }
    ngOnInit() {
        this.storage.get('user_lang').then((lang) => {
            if (lang == "English") {
                this.English = true;
            }
            else {
                this.English = false;
            }
        });
    }
    submit() {
        if (this.discription) {
            var setdiscription = this.api.getStorage("questions");
            setdiscription.user_description1 = this.discription;
            this.api.setstorage("questions", setdiscription);
            this.api.Navigate("inscription-professionnel3");
        }
        else {
            if (this.English) {
                this.api.toast("Please fill the Description.");
            }
            else {
                this.api.toast("Veuillez remplir la description.");
            }
        }
    }
};
Question2Page.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
Question2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-question2',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService, _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage])
], Question2Page);



/***/ }),

/***/ 38047:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/question2/question2.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n    <ion-toolbar  >\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"connexion\"></ion-back-button>\n        </ion-buttons>\n       \n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen >\n    <section >\n     \n        <div class=\"center-content\">\n            <ion-row>\n                <ion-col style=\"font-family: montserrat-medium; color: #D3C117;\" class=\"question-count\" [translate]=\"'QUESTION2.Text1'\">QUESTION 2/3</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style=\"font-family: montserrat-medium;\" col-12 class=\"question-box-main\"><br>\n                   <span [translate]=\"'QUESTION2.Text2'\"> </span>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-textarea style=\"font-weight: bold;color: white;font-family: montserrat\" placeholder=\"Description\" rows=\"10\" [(ngModel)]=\"discription\" ></ion-textarea>\n            </ion-row>\n            <ion-row>\n                <button ion-button class=\"global-submit-button global-btn\" style=\"background-color: #D3C117; color:white;;\" (click)=\"submit()\" [translate]=\"'QUESTION2.Text3'\">SUIVANT\n                </button>\n            </ion-row>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ 32731:
/*!***********************************************!*\
  !*** ./src/app/question2/question2.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".terms-headersection {\n  color: #ffffff;\n  background: transparent;\n}\n\n.question-count {\n  color: #ffaa00;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 16px !important;\n}\n\n.question-box-main {\n  font-size: 18px;\n  color: #ffffff;\n  font-weight: bold;\n  opacity: 80%;\n}\n\nion-textarea {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px !important;\n  padding: 1%;\n  margin: 3%;\n  opacity: 80%;\n  --placeholder-opacity: 100%;\n  font-weight: bold;\n  --placeholder-color: white;\n}\n\nion-content {\n  --background: url('login-bg.svg') no-repeat 52% center/cover;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBRUU7RUFDRSw0REFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0FBQ0oiLCJmaWxlIjoicXVlc3Rpb24yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAudGVybXMtaGVhZGVyc2VjdGlvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnF1ZXN0aW9uLWNvdW50IHtcbiAgICBjb2xvcjogI2ZmYWEwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIC5xdWVzdGlvbi1ib3gtbWFpbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDgwJTtcbiAgfVxuIFxuICBpb24tdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMSU7XG4gICAgbWFyZ2luOiAzJTtcbiAgICBvcGFjaXR5OiA4MCU7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luLWJnLnN2ZycpIG5vLXJlcGVhdCA1MiUgY2VudGVyL2NvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgXG4gIFxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_question2_question2_module_ts.js.map