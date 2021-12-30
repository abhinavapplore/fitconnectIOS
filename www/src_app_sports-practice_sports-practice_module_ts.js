"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sports-practice_sports-practice_module_ts"],{

/***/ 40993:
/*!*******************************************************************!*\
  !*** ./src/app/sports-practice/sports-practice-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsPracticePageRoutingModule": () => (/* binding */ SportsPracticePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sports_practice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sports-practice.page */ 2111);




const routes = [
    {
        path: '',
        component: _sports_practice_page__WEBPACK_IMPORTED_MODULE_0__.SportsPracticePage
    }
];
let SportsPracticePageRoutingModule = class SportsPracticePageRoutingModule {
};
SportsPracticePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SportsPracticePageRoutingModule);



/***/ }),

/***/ 11563:
/*!***********************************************************!*\
  !*** ./src/app/sports-practice/sports-practice.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsPracticePageModule": () => (/* binding */ SportsPracticePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _sports_practice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sports-practice-routing.module */ 40993);
/* harmony import */ var _sports_practice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sports-practice.page */ 2111);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let SportsPracticePageModule = class SportsPracticePageModule {
};
SportsPracticePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sports_practice_routing_module__WEBPACK_IMPORTED_MODULE_0__.SportsPracticePageRoutingModule,
        ],
        declarations: [_sports_practice_page__WEBPACK_IMPORTED_MODULE_1__.SportsPracticePage],
    })
], SportsPracticePageModule);



/***/ }),

/***/ 2111:
/*!*********************************************************!*\
  !*** ./src/app/sports-practice/sports-practice.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsPracticePage": () => (/* binding */ SportsPracticePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sports_practice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sports-practice.page.html */ 85424);
/* harmony import */ var _sports_practice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sports-practice.page.scss */ 37938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);









let SportsPracticePage = class SportsPracticePage {
    constructor(api, storage, http, httpClient, route, router) {
        this.api = api;
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.sportsListArray = [];
        this.checkedSports = [];
        this.showList = false;
        this.showLists = [false, false, false];
        //new var
        this.searchTerms = [undefined, undefined, undefined];
        //new var
        this.searchTermsDisabled = [false, true, true];
        //new var
        this.searches = [];
        this.isCheckboxDisabled = false;
        this.updateDetail = false;
        this.route.queryParams.subscribe((params) => {
            console.log(params);
            if (params && params.special) {
                this.storage.get('user_id').then((user_id) => {
                    this.user = JSON.parse(params.special);
                    this.updateDetail = true;
                });
            }
        });
    }
    ngOnInit() {
        this.storage.get('user_id').then((user_id) => {
            this.storage.get('user_lang').then((lang) => {
                this.storage.get('user_type').then((user_type) => {
                    this.userType = user_type || '2';
                    console.log(this.userType);
                    this.language = lang;
                    this.udk = user_id;
                    if (lang == 'English') {
                        this.English = true;
                        this.searchplaceholder = 'Search Sports';
                    }
                    else {
                        this.English = false;
                        this.searchplaceholder = 'Rechercher des sports';
                    }
                    const formData = new FormData();
                    this.http
                        .post('http://fitconnected.prometteur.in/index.php/Api/fields/sport_categories', formData)
                        .subscribe((res) => {
                        if (res.json().status == 1) {
                            console.log(res.json());
                            this.sportsListArray = res.json().result;
                            for (var i = 0; i < this.sportsListArray.length; i++) {
                                this.sportsListArray[i].isChecked = false;
                            }
                            if (lang == 'English') {
                                this.api.toast('Please select main sports.', this.userType == '1');
                            }
                            else {
                                this.api.toast('Veuillez sélectionner les sports principaux.', this.userType == '1');
                            }
                        }
                    });
                });
            });
        });
    }
    searchEvent(ev, index = undefined) {
        console.log('searchevent');
        var arr = [];
        for (let i = 0; i < this.sportsListArray.length; i++) {
            var input = this.sportsListArray[i];
            arr.push(input);
            let val = ev.target.value;
            // alert(typeof(val));
            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                // Filter the items
                if (index != undefined) {
                    this.searches[index] = arr
                        .filter(function (item) {
                        return (item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                    })
                        .slice(0, 4);
                }
                else
                    this.search = arr.filter(function (item) {
                        return (item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                    });
                if (index != undefined) {
                    if (this.searches[index].length !== 0) {
                        this.showLists[index] = true;
                    }
                    else {
                        this.showLists[index] = false;
                    }
                }
                else {
                    if (this.search.length !== 0) {
                        this.showList = true;
                    }
                    else {
                        this.showList = false;
                    }
                }
                // Show the results
            }
            else {
                if (index != undefined)
                    this.showLists[index] = false;
                // hide the results when the query is empty
                this.showList = false;
            }
            // console.log(arr);
        }
    }
    arr_diff(a1, a2) {
        var a = [], diff = [];
        for (var i = 0; i < a1.length; i++) {
            a[a1[i]] = true;
        }
        for (var i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]];
            }
            else {
                a[a2[i]] = true;
            }
        }
        for (var k in a) {
            diff.push(k);
        }
        return diff;
    }
    selectItem(item, index = undefined) {
        if (index != undefined) {
            this.searchTerms[index] = item.spcat_name;
            this.searchTermsDisabled[index] = true;
            if (index < 3)
                this.searchTermsDisabled[index + 1] = false;
        }
        else
            this.searchTerm = '';
        console.log(item);
        console.log(this.searchTerm);
        if (index != undefined)
            this.showLists[index] = false;
        else
            this.showList = false;
        for (var i = 0; i < this.sportsListArray.length; i++) {
            if (this.sportsListArray[i].spcat_id == item.spcat_id) {
                this.sportsListArray[i].isChecked = true;
            }
            // this.sportsListArray[z].isChecked=true;
        }
        if (this.checkedSports.length == 3) {
            this.isCheckboxDisabled = true;
        }
    }
    reset() {
        this.searchTerms = [undefined, undefined, undefined];
        this.searchTermsDisabled = [false, true, true];
        this.checkedSports = [];
        for (var i = 0; i < this.sportsListArray.length; i++) {
            this.sportsListArray[i].isChecked = false;
        }
        this.isCheckboxDisabled = false;
    }
    checked($event, sports, index) {
        console.log($event);
        console.log(sports);
        console.log(index);
        if (this.checkedSports.length > 3 && this.userType == '2') {
            if (this.English) {
                this.api.toast('You can select maximum 3 sports.', this.userType == '1');
            }
            else {
                this.api.toast('Vous pouvez sélectionner au maximum 3 sports.', this.userType == '1');
            }
        }
        else {
            if ($event.detail.checked) {
                this.checkedSports.push(sports);
                if (this.checkedSports.length == 1) {
                    if (this.language == 'English') {
                        // alert(this.userType);
                        this.api.toast('Please select your secondary sports interest.', this.userType == '1');
                    }
                    else {
                        this.api.toast('Veuillez sélectionner votre intérêt sportif secondaire.', this.userType == '1');
                    }
                }
                else if (this.checkedSports.length == 2) {
                    if (this.language == 'English') {
                        this.api.toast('Please select your tertiary sports interest.', this.userType == '1');
                    }
                    else {
                        this.api.toast('Veuillez sélectionner votre intérêt sportif tertiaire.', this.userType == '1');
                    }
                }
                else if (this.checkedSports.length == 3) {
                    // this.scrollToBottomOnInit();
                    if (this.language == 'English') {
                        this.api.toastLong('You can reset your selection to change your main sports. You will be ranked as per your main sports.', this.userType == '1');
                    }
                    else {
                        this.api.toastLong('Vous pouvez réinitialiser votre sélection pour changer vos sports principaux. Vous serez classé selon vos sports principaux', this.userType == '1');
                    }
                    this.isCheckboxDisabled = true;
                }
            }
            else {
                for (var i = 0; i < this.checkedSports.length; i++) {
                    if (this.checkedSports[i].spcat_name == sports.spcat_name) {
                        this.checkedSports.splice(i, 1);
                        break;
                    }
                    else {
                        //do nothing
                    }
                }
            }
        }
    }
    scrollToBottomOnInit() {
        if (this.userType == '2') {
            setTimeout(() => {
                if (this.content.scrollToBottom) {
                    this.content.scrollToBottom(400);
                }
            }, 500);
        }
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let selectedSports = '';
            let selectSportsName = '';
            for (var i = 0; i < this.checkedSports.length; i++) {
                selectSportsName += `${this.checkedSports[i].spcat_name},`;
                selectedSports += `${this.checkedSports[i].spcat_id},`;
            }
            this.storage.set('user_sport_category', selectSportsName.substr(0, selectSportsName.length - 1));
            // remove the last commas
            this.sportsInstructed = selectedSports.substr(0, selectedSports.length - 1);
            selectSportsName = selectSportsName.substr(0, selectSportsName.length - 1);
            console.log('selectSportsName', selectSportsName);
            let formData = new FormData();
            formData.append('user_id', this.api.profile.user_id);
            formData.append('user_question2_response', selectSportsName);
            this.api.loading();
            this.http
                .post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
                .subscribe((res) => {
                this.api.dismissLoading();
                if (res.json().status == 1) {
                    console.log(res);
                    this.api.Navigateback('mon-profil');
                    // this.editPlayed = false;
                    // this.loadData();
                }
                else {
                }
            }, (err) => {
                this.api.dismissLoading();
            });
        });
    }
};
SportsPracticePage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
SportsPracticePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['content', { static: false },] }]
};
SportsPracticePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-sports-practice',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sports_practice_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sports_practice_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router])
], SportsPracticePage);



/***/ }),

/***/ 85424:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sports-practice/sports-practice.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n  <ion-toolbar class=\"terms-headersection\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"mon-profil\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen #content>\n  <section>\n    <div class=\"center-content\">\n      <ion-row>\n        <ion-col\n          style=\"font-family: montserrat-medium; font-weight: bold\"\n          col-12\n          class=\"question-box-main\"\n        >\n          {{ 'SportsPractice.title'|translate}}\n        </ion-col>\n      </ion-row>\n      <ion-grid>\n        <!-- <ion-row>\n          <ion-searchbar\n            placeholder=\"{{searchplaceholder}}\"\n            (ionInput)=\"searchEvent($event)\"\n            [(ngModel)]=\"searchTerm\"\n          ></ion-searchbar>\n        </ion-row>\n        <div *ngIf=\"showList\">\n          <ion-list>\n            <ion-item\n              *ngFor=\"let item of search;let z=index\"\n              (click)=\"selectItem(item)\"\n            >\n              <ion-text>{{item.spcat_name}}</ion-text>\n            </ion-item>\n          </ion-list>\n        </div> -->\n        <div\n          style=\"display: inline\"\n          *ngFor=\"let anythingElse of [1,1,1];let i=index\"\n        >\n          <ion-row>\n            <ion-searchbar\n              placeholder=\"{{searchplaceholder}} {{i+1}}\"\n              (ionInput)=\"searchEvent($event,i)\"\n              [(ngModel)]=\"searchTerms[i]\"\n              [disabled]=\"searchTermsDisabled[i] \"\n            ></ion-searchbar>\n          </ion-row>\n          <div *ngIf=\"showLists[i]\">\n            <ion-list>\n              <div *ngFor=\"let item of searches[i];let z=index\">\n                <ion-item\n                  (click)=\"selectItem(item,i)\"\n                  *ngIf=\"item.spcat_name!=searchTerms[0] && item.spcat_name!=searchTerms[1]\"\n                >\n                  <ion-text>{{item.spcat_name}}</ion-text>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n          <br />\n        </div>\n        <!-- *ngIf=\"isCheckboxDisabled\" -->\n        <br />\n        <div\n          col-12\n          (click)=\"reset()\"\n          style=\"\n            font-family: montserrat-medium;\n            font-weight: bold;\n            color: #ffffff;\n          \"\n          [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text2'\"\n        ></div>\n\n        <br />\n        <ion-row\n          style=\"display: flex; flex-direction: row; justify-content: center\"\n        >\n          <button\n            (click)=\"submit()\"\n            style=\"font-family: montserrat-medium\"\n            ion-button\n            class=\"global-submit-button global-btn themecolor\"\n            [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text3'\"\n          ></button>\n        </ion-row>\n        <!-- <ion-col size=\"12\" style=\"font-family: montserrat-medium;font-weight: bold;\" class=\"question-box-main\"\n                  [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text1'\"></ion-col>\n                  <ion-col  size=\"12\">\n                      <ion-label class=\"center-professional-txt\" size=\"small\" [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text2'\"></ion-label>\n                      <div class=\"center-professional-amtbox\">\n                          <ion-input type=\"number\" class=\"small-txtbox\" name=\"rateone\" [(ngModel)]=\"rateone\"></ion-input>\n                          <ion-label>\n                              <ion-icon name=\"logo-euro\"></ion-icon>\n                          </ion-label>\n                      </div>\n                  </ion-col>\n                  <ion-col  size=\"12\">\n\n                      <ion-label class=\"center-professional-txt\" size=\"small\" [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text3'\"></ion-label>\n                      <div class=\"center-professional-amtbox\">\n                          <ion-input type=\"number\" class=\"small-txtbox\" name=\"ratetwo\" [(ngModel)]=\"ratetwo\"></ion-input>\n                          <ion-label>\n                              <ion-icon name=\"logo-euro\"></ion-icon>\n                          </ion-label>\n                      </div>\n                  </ion-col>\n                  <ion-col  size=\"12\">\n                      <button style=\"font-family: montserrat-medium;\" ion-button class=\"global-submit-button global-btn themecolor\"\n                     (click)=\"submit()\" [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text4'\">\n              </button>\n                  </ion-col> -->\n\n        <ion-row\n          style=\"display: none; flex-direction: row; justify-content: center\"\n        >\n          <ion-list>\n            <ion-item *ngFor=\"let sports of sportsListArray;let z=index;\">\n              <ion-label>{{sports.spcat_name}}</ion-label>\n              <ion-checkbox\n                [disabled]=\"isCheckboxDisabled && userType=='2'\"\n                (ionChange)=\"checked($event,sports,z)\"\n                [(ngModel)]=\"sports.isChecked\"\n              ></ion-checkbox>\n            </ion-item>\n\n            <!-- <ion-item>\n                        <ion-label>Sports</ion-label>\n                        <ion-select [disabled]=\"isCheckboxDisabled\" multiple=\"true\" (ionChange)=\"checked($event,sports)\" [(ngModel)]=\"checkedSports\" >\n                            <ion-select-option *ngFor=\"let sports of sportsListArray\" value=\"{{sports.spcat_id}}\">\n                                {{sports.spcat_name}}</ion-select-option>\n                        </ion-select>\n                    </ion-item> -->\n          </ion-list>\n        </ion-row>\n        <!-- <ion-row>\n          <ion-col\n            *ngIf=\"isCheckboxDisabled\"\n            col-12\n            (click)=\"reset()\"\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bold;\n              color: #ffffff;\n            \"\n            [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text2'\"\n          ></ion-col>\n        </ion-row> -->\n\n        <!-- // COMMENTED THIS ONE -->\n        <!-- <ion-row class=\"textwith-label\">\n          <ion-input\n            type=\"text\"\n            placeholder=\"other sports category\"\n            [(ngModel)]=\"otherSportsCat\"\n            style=\"font-weight: bold; color: white\"\n          ></ion-input>\n        </ion-row> -->\n      </ion-grid>\n    </div>\n  </section>\n</ion-content>\n<!-- \n<ion-footer>\n  <ion-row style=\"display: flex; flex-direction: row; justify-content: center\">\n    <button\n      style=\"font-family: montserrat-medium\"\n      ion-button\n      class=\"global-submit-button global-btn themecolor\"\n      (click)=\"submit()\"\n      [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text3'\"\n    ></button>\n  </ion-row>\n</ion-footer> -->\n");

/***/ }),

/***/ 37938:
/*!***********************************************************!*\
  !*** ./src/app/sports-practice/sports-practice.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".professional-block {\n  width: calc(100% - 80px);\n  max-width: 400px;\n  margin: 0px auto;\n}\n\n.terms-headersection {\n  color: #ffffff;\n  background: transparent;\n}\n\n.question-count {\n  color: #ffaa00;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 16px !important;\n}\n\n.question-box-main {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.center-professional-txt {\n  color: #ffffff;\n  font-size: 14px;\n  width: 100%;\n  margin-top: 35px;\n  margin-left: -15px;\n}\n\n.btn-profession-box {\n  margin-top: 50px;\n}\n\n.center-professional-amtbox {\n  width: 100px;\n  margin: 10px auto;\n  display: flex;\n  color: #ffffff;\n}\n\n.center-professional-amtbox ion-input {\n  background: transparent;\n  border: solid 2px #cccccc;\n  border-radius: 5px;\n  height: 35px;\n}\n\n.center-professional-amtbox ion-icon {\n  margin: 10px 0px 0px 10px;\n}\n\n.transparent-txtarea {\n  background: rgba(255, 255, 255, 0.5);\n  min-height: 120px;\n  margin: 15px 15px 20px 15px;\n  text-align: left;\n}\n\n.transparent-txtarea textarea {\n  min-height: 120px !important;\n}\n\n.transparent-txtarea .btn-profession-box {\n  margin-top: 50px;\n}\n\nion-col {\n  padding-bottom: 40px;\n}\n\nion-content {\n  --background: url('login-bg.svg') no-repeat 52% center/cover;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3J0cy1wcmFjdGljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUxFO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxFO0VBQ0UseUJBQUE7QUFPSjs7QUFKQTtFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTkU7RUFDRSw0QkFBQTtBQVFKOztBQU5FO0VBQ0UsZ0JBQUE7QUFRSjs7QUFKQTtFQUNFLG9CQUFBO0FBT0Y7O0FBSkE7RUFDRSw0REFBQTtFQUNBLGtCQUFBO0FBT0Y7O0FBSkE7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0FBT0YiLCJmaWxlIjoic3BvcnRzLXByYWN0aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9mZXNzaW9uYWwtYmxvY2sge1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4udGVybXMtaGVhZGVyc2VjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5xdWVzdGlvbi1jb3VudCB7XG4gIGNvbG9yOiAjZmZhYTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ucXVlc3Rpb24tYm94LW1haW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2VudGVyLXByb2Zlc3Npb25hbC10eHQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLmJ0bi1wcm9mZXNzaW9uLWJveCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uY2VudGVyLXByb2Zlc3Npb25hbC1hbXRib3gge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjY2NjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDEwcHg7XG4gIH1cbn1cbi50cmFuc3BhcmVudC10eHRhcmVhIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMjBweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYnRuLXByb2Zlc3Npb24tYm94IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luLWJnLnN2ZycpIG5vLXJlcGVhdCA1MiUgY2VudGVyL2NvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_sports-practice_sports-practice_module_ts.js.map