"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_question3_question3_module_ts"],{

/***/ 8678:
/*!*******************************************************!*\
  !*** ./src/app/question3/question3-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question3PageRoutingModule": () => (/* binding */ Question3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _question3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question3.page */ 10442);




const routes = [
    {
        path: '',
        component: _question3_page__WEBPACK_IMPORTED_MODULE_0__.Question3Page
    }
];
let Question3PageRoutingModule = class Question3PageRoutingModule {
};
Question3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Question3PageRoutingModule);



/***/ }),

/***/ 33272:
/*!***********************************************!*\
  !*** ./src/app/question3/question3.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question3PageModule": () => (/* binding */ Question3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _question3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question3-routing.module */ 8678);
/* harmony import */ var _question3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question3.page */ 10442);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let Question3PageModule = class Question3PageModule {
};
Question3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _question3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Question3PageRoutingModule
        ],
        declarations: [_question3_page__WEBPACK_IMPORTED_MODULE_1__.Question3Page]
    })
], Question3PageModule);



/***/ }),

/***/ 10442:
/*!*********************************************!*\
  !*** ./src/app/question3/question3.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question3Page": () => (/* binding */ Question3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./question3.page.html */ 52338);
/* harmony import */ var _question3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question3.page.scss */ 32618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);







let Question3Page = class Question3Page {
    constructor(api, storage, router, route) {
        this.api = api;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.newArray = [];
        this.nav = false;
        this.route.queryParams.subscribe(params => {
            if (params.special) {
                var details = JSON.parse(params.special);
                console.log(details);
                if (details.pageRoute == "mon-profil") {
                    this.nav = true;
                }
            }
        });
    }
    ngOnInit() {
        this.storage.get('user_id').then((user_id) => {
            this.uid = user_id;
            if (this.nav === true) {
                this.storage.get('user_question3_response').then((user_question3_response) => {
                    this.day = user_question3_response;
                    console.log("this.day");
                    console.log(this.day);
                });
            }
            else {
                var setdiscription = this.api.getStorage("questions");
                console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", setdiscription);
                this.day = [
                    {
                        "name": "Lundi",
                        "select": false,
                        "Midi": false,
                        "Matin": false,
                        "Soir": false
                    },
                    {
                        "name": "Mardi",
                        "select": false,
                        "Midi": false,
                        "Matin": false,
                        "Soir": false
                    },
                    {
                        "name": "Mercredi",
                        "select": false,
                        "Midi": false,
                        "Matin": false,
                        "Soir": false
                    },
                    {
                        "name": "Jeudi",
                        "select": false,
                        "Midi": false,
                        "Matin": false,
                        "Soir": false
                    },
                    {
                        "name": "Vendredi",
                        "select": false,
                        "Midi": false,
                        "Matin": false,
                        "Soir": false
                    },
                    {
                        "name": "Samedi",
                        "select": false,
                        "Midi": false,
                        "Matin": false,
                        "Soir": false,
                    },
                    {
                        "name": "Dimanche",
                        "select": false,
                        "Midi": false,
                        "Matin": false,
                        "Soir": false,
                    }
                ];
            }
        });
    }
    checkSelect(x, d) {
        console.log(x);
        console.log(d);
        var time = x.detail.value;
        if (x.detail.checked == true) {
            for (var i = 0; i < this.day.length; i++) {
                if (this.day[i].name === d.name) {
                    this.day[i][time] = true;
                }
            }
        }
        else {
            for (var i = 0; i < this.day.length; i++) {
                if (this.day[i].name === d.name) {
                    this.day[i][time] = false;
                }
            }
        }
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.day);
            if (this.nav === true) {
                this.storage.set('user_question3_response', this.day);
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_question3_response', JSON.stringify(this.day));
                var questions = yield this.api.postapi("madd/user", formData);
                if (questions.status == 1) {
                    var vc = {
                        pageRoute: "editDisponsibility",
                        userId: this.uid
                    };
                    let navigationExtras = {
                        queryParams: {
                            special: JSON.stringify(vc)
                        }
                    };
                    this.router.navigate(['mon-profil'], navigationExtras);
                }
            }
            else {
                this.storage.set('user_question3_response', this.day);
                this.api.Navigate("responce3");
            }
        });
    }
};
Question3Page.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
Question3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-question3',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService, _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute])
], Question3Page);



/***/ }),

/***/ 52338:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/question3/question3.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n    <ion-toolbar class=\"terms-headersection\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"question2\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen >\n    <section >\n   \n        <div class=\"center-content\">\n            <ion-row>\n                <ion-col style=\"font-family: montserrat-medium; font-weight: bold; color: #D3C117; \" class=\"question-count\" >QUESTION 3/3</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-12 class=\"question-box-main\" style=\"font-weight: bold; \">Quand aimes-tu faire du sport ?</ion-col>\n            </ion-row>\n            <!-- <ion-row class=\"options-box\">\n               <div *ngFor=\"let get of day;let x = index;\" style=\"width: 100%;\">\n                <h3 [ngClass]=\"{selectedans: get.select == true}\" (click)=\"selected(x)\" >{{get.name}}</h3>\n                <h3 *ngIf=\"get.select == true\" class=\"top\">\n                    <ion-radio-group class=\"ans-radiobox\" [(ngModel)]=\"get.timeAdd\"></ion-radio-group>\n                        <ion-col>\n                            <ion-radio value=\"Matin\" (ionSelect)=\"radioSelect($event)\"></ion-radio>\n                            <ion-label>Matin</ion-label>\n                        </ion-col>\n                        <ion-col>\n                            <ion-radio value=\"midi\" (ionSelect)=\"radioSelect($event)\"></ion-radio>\n                            <ion-label>Midi</ion-label>\n                        </ion-col>\n                        <ion-col>\n                            <ion-radio value=\"Soir\" (ionSelect)=\"radioSelect($event)\"></ion-radio>\n                            <ion-label>Soir</ion-label>\n                        </ion-col>\n                    </ion-radio-group>\n                </h3>\n               </div>\n            \n            </ion-row> -->\n            <div *ngFor=\"let d of day\">\n\n            <ion-row style=\"margin-top: 2%;\">\n<ion-text style=\"color: white;font-weight: bold;font-family: montserrat-medium;\">{{d.name}}</ion-text>\n            </ion-row>\n            <ion-row class=\"inside\" style=\"margin-top: 2%;\">\n                <ion-checkbox [(ngModel)]=\"d.Matin\" value=\"Matin\" (ionChange)=\"checkSelect($event,d)\" color=\"primary\"></ion-checkbox>\n                <ion-label style=\"color: white;\">Matin</ion-label>\n                \n<ion-checkbox [(ngModel)]=\"d.Midi\" value=\"Midi\" (ionChange)=\"checkSelect($event,d)\" color=\"primary\">MIDI</ion-checkbox>\n<ion-label style=\"color: white;\">Midi</ion-label>\n\n<ion-checkbox [(ngModel)]=\"d.Soir\" value=\"Soir\" (ionChange)=\"checkSelect($event,d)\" color=\"primary\">SOIR</ion-checkbox>\n<ion-label style=\"color: white;\">Soir</ion-label>\n            </ion-row>\n        </div>\n\n            <ion-row>\n                <!-- [routerLink]=\"['/acceuilcoach']\" -->\n               \n                <button ion-button class=\"global-submit-button global-btn\" style=\"background-color:#D3C117; color: white;\" (click)=\"submit()\">SUIVANT\n                </button>\n            </ion-row>\n            \n        \n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ 32618:
/*!***********************************************!*\
  !*** ./src/app/question3/question3.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".terms-headersection {\n  color: #ffffff;\n  background: transparent;\n}\n\n.top {\n  position: relative;\n  animation: animatetop 0.4s;\n}\n\n@keyframes animatetop {\n  from {\n    top: -50px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.question-count {\n  color: #D3C117;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 18px !important;\n}\n\n.question-box-main {\n  font-size: 18px;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.options-box {\n  margin: 10px 0px;\n}\n\n.options-box h3 {\n  margin: 10px 0px;\n  font-size: 20px !important;\n  width: 100%;\n  color: #cccccc;\n  display: inline-block;\n  font-weight: inherit;\n}\n\n.ans-radiobox ion-radio {\n  margin-right: 15px;\n}\n\nion-content {\n  --background: url('login-bg.svg') no-repeat 52% center/cover;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-row {\n  justify-content: center;\n}\n\n.inside {\n  justify-content: space-around !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFFRTtFQUFLLGtCQUFBO0VBQWtCLDBCQUFBO0FBR3pCOztBQUhtRDtFQUFzQjtJQUFLLFVBQUE7SUFBVSxVQUFBO0VBU3RGO0VBVGlHO0lBQUcsTUFBQTtJQUFNLFVBQUE7RUFhMUc7QUFDRjs7QUFiRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFlSjs7QUFiRTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFlSjs7QUFiRTtFQUNFLGdCQUFBO0FBZ0JKOztBQWZJO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQWlCTjs7QUFaSTtFQUVFLGtCQUFBO0FBY047O0FBVkU7RUFDRSw0REFBQTtFQUNBLGtCQUFBO0FBYUo7O0FBVkU7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0FBYUo7O0FBVkk7RUFDRSx1QkFBQTtBQWFOOztBQVZJO0VBQ0Usd0NBQUE7QUFhTiIsImZpbGUiOiJxdWVzdGlvbjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC50ZXJtcy1oZWFkZXJzZWN0aW9uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAudG9we3Bvc2l0aW9uOnJlbGF0aXZlO2FuaW1hdGlvbjphbmltYXRldG9wIDAuNHN9QGtleWZyYW1lcyBhbmltYXRldG9we2Zyb217dG9wOi01MHB4O29wYWNpdHk6MH0gdG97dG9wOjA7b3BhY2l0eToxfX1cbiAgLnF1ZXN0aW9uLWNvdW50IHtcbiAgICBjb2xvcjogI0QzQzExNztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICB9XG4gIC5xdWVzdGlvbi1ib3gtbWFpbiB7XG5cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLm9wdGlvbnMtYm94IHtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICB9XG4gIH1cbiAgLmFucy1yYWRpb2JveFxuICB7XG4gICAgaW9uLXJhZGlvXG4gICAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgfVxuICAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luLWJnLnN2ZycpIG5vLXJlcGVhdCA1MiUgY2VudGVyL2NvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLXJvd3tcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbnNpZGV7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICAgIH1cbiAgIFxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_question3_question3_module_ts.js.map