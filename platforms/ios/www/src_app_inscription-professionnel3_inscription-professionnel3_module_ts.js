"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inscription-professionnel3_inscription-professionnel3_module_ts"],{

/***/ 18131:
/*!*****************************************************************************************!*\
  !*** ./src/app/inscription-professionnel3/inscription-professionnel3-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionProfessionnel3PageRoutingModule": () => (/* binding */ InscriptionProfessionnel3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _inscription_professionnel3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inscription-professionnel3.page */ 82539);




const routes = [
    {
        path: '',
        component: _inscription_professionnel3_page__WEBPACK_IMPORTED_MODULE_0__.InscriptionProfessionnel3Page
    }
];
let InscriptionProfessionnel3PageRoutingModule = class InscriptionProfessionnel3PageRoutingModule {
};
InscriptionProfessionnel3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InscriptionProfessionnel3PageRoutingModule);



/***/ }),

/***/ 15141:
/*!*********************************************************************************!*\
  !*** ./src/app/inscription-professionnel3/inscription-professionnel3.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionProfessionnel3PageModule": () => (/* binding */ InscriptionProfessionnel3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _inscription_professionnel3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inscription-professionnel3-routing.module */ 18131);
/* harmony import */ var _inscription_professionnel3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscription-professionnel3.page */ 82539);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let InscriptionProfessionnel3PageModule = class InscriptionProfessionnel3PageModule {
};
InscriptionProfessionnel3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _inscription_professionnel3_routing_module__WEBPACK_IMPORTED_MODULE_0__.InscriptionProfessionnel3PageRoutingModule
        ],
        declarations: [_inscription_professionnel3_page__WEBPACK_IMPORTED_MODULE_1__.InscriptionProfessionnel3Page]
    })
], InscriptionProfessionnel3PageModule);



/***/ }),

/***/ 82539:
/*!*******************************************************************************!*\
  !*** ./src/app/inscription-professionnel3/inscription-professionnel3.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionProfessionnel3Page": () => (/* binding */ InscriptionProfessionnel3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inscription_professionnel3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inscription-professionnel3.page.html */ 73405);
/* harmony import */ var _inscription_professionnel3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscription-professionnel3.page.scss */ 29332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);









let InscriptionProfessionnel3Page = class InscriptionProfessionnel3Page {
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
            if (!this.updateDetail) {
                if (this.checkedSports.length != 0 &&
                    (this.checkedSports.length <= 3 || this.userType == '1')) {
                    this.storage.set('user_sport_category', this.checkedSports);
                    if (this.otherSportsCat) {
                        this.storage.set('user_other_sport_cate', this.otherSportsCat);
                    }
                    if (this.userType == '1') {
                        this.api.Navigate('responce3');
                    }
                    else {
                        this.api.Navigate('inscription-docs');
                    }
                }
                else {
                    if (this.English) {
                        this.api.toast('Please Select Atleast one sports.', this.userType == '1');
                    }
                    else {
                        this.api.toast('Veuillez sélectionner au moins un sport.', this.userType == '1');
                    }
                }
            }
            else {
                let selectedSports = '';
                let selectSportsName = '';
                for (var i = 0; i < this.checkedSports.length; i++) {
                    selectSportsName += `${this.checkedSports[i].spcat_name},`;
                    selectedSports += `${this.checkedSports[i].spcat_id},`;
                }
                this.storage.set('user_sport_category', selectSportsName.substr(0, selectSportsName.length - 1));
                this.sportsInstructed = selectedSports.substr(0, selectedSports.length - 1);
                const formData = new FormData();
                formData.append('user_id', this.user.user_id);
                formData.append('user_sport_category', this.sportsInstructed);
                formData.append('user_other_sport_cate', this.otherSportsCat);
                let res = yield this.api.postapi('madd/user', formData);
                if (res.status == 1) {
                    if (this.language == 'English') {
                        this.api.toast('Sports Category Updated.');
                        this.api.Navigateroot('evenementcoachvue');
                    }
                    else {
                        this.api.toast('Catégorie sportive mise à jour.');
                        this.api.Navigateroot('evenementcoachvue');
                    }
                }
                else {
                    this.api.toast(res.json().msg);
                }
            }
        });
    }
};
InscriptionProfessionnel3Page.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
InscriptionProfessionnel3Page.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['content', { static: false },] }]
};
InscriptionProfessionnel3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-inscription-professionnel3',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inscription_professionnel3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inscription_professionnel3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router])
], InscriptionProfessionnel3Page);



/***/ }),

/***/ 73405:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inscription-professionnel3/inscription-professionnel3.page.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n  <ion-toolbar class=\"terms-headersection\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"connexion\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen #content>\n  <section>\n    <div class=\"center-content\">\n      <ion-row *ngIf=\"this.userType=='1'\">\n        <ion-col\n          style=\"font-family: montserrat-medium; color: #d3c117\"\n          class=\"question-count\"\n        >\n          <!-- QUESTION {{this.userType=='1'?2:3}}/3 -->\n          QUESTION 2/3\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <!-- // add condition -->\n        <ion-col\n          style=\"font-family: montserrat-medium; font-weight: bold\"\n          col-12\n          class=\"question-box-main\"\n        >\n          {{( userType=='2'? 'INSCRIPTIONPROFESSIONNEL3.Text1':\n          'INSCRIPTIONPROFESSIONNEL3.Text4' )|translate}}\n        </ion-col>\n      </ion-row>\n      <ion-grid>\n        <!-- <ion-row>\n          <ion-searchbar\n            placeholder=\"{{searchplaceholder}}\"\n            (ionInput)=\"searchEvent($event)\"\n            [(ngModel)]=\"searchTerm\"\n          ></ion-searchbar>\n        </ion-row>\n        <div *ngIf=\"showList\">\n          <ion-list>\n            <ion-item\n              *ngFor=\"let item of search;let z=index\"\n              (click)=\"selectItem(item)\"\n            >\n              <ion-text>{{item.spcat_name}}</ion-text>\n            </ion-item>\n          </ion-list>\n        </div> -->\n        <div\n          style=\"display: inline\"\n          *ngFor=\"let anythingElse of [1,1,1];let i=index\"\n        >\n          <ion-row>\n            <ion-searchbar\n              placeholder=\"{{searchplaceholder}} {{i+1}}\"\n              (ionInput)=\"searchEvent($event,i)\"\n              [(ngModel)]=\"searchTerms[i]\"\n              [disabled]=\"searchTermsDisabled[i] \"\n            ></ion-searchbar>\n          </ion-row>\n          <div *ngIf=\"showLists[i]\">\n            <ion-list>\n              <div *ngFor=\"let item of searches[i];let z=index\">\n                <ion-item\n                  (click)=\"selectItem(item,i)\"\n                  *ngIf=\"item.spcat_name!=searchTerms[0] && item.spcat_name!=searchTerms[1]\"\n                >\n                  <ion-text>{{item.spcat_name}}</ion-text>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n          <br />\n        </div>\n        <!-- *ngIf=\"isCheckboxDisabled\" -->\n        <br />\n        <div\n          col-12\n          (click)=\"reset()\"\n          style=\"\n            font-family: montserrat-medium;\n            font-weight: bold;\n            color: #ffffff;\n          \"\n          [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text2'\"\n        ></div>\n\n        <br />\n        <ion-row\n          style=\"display: flex; flex-direction: row; justify-content: center\"\n        >\n          <button\n            (click)=\"submit()\"\n            style=\"font-family: montserrat-medium\"\n            ion-button\n            class=\"global-submit-button global-btn themecolor\"\n            [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text3'\"\n          ></button>\n        </ion-row>\n        <!-- <ion-col size=\"12\" style=\"font-family: montserrat-medium;font-weight: bold;\" class=\"question-box-main\"\n                  [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text1'\"></ion-col>\n                  <ion-col  size=\"12\">\n                      <ion-label class=\"center-professional-txt\" size=\"small\" [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text2'\"></ion-label>\n                      <div class=\"center-professional-amtbox\">\n                          <ion-input type=\"number\" class=\"small-txtbox\" name=\"rateone\" [(ngModel)]=\"rateone\"></ion-input>\n                          <ion-label>\n                              <ion-icon name=\"logo-euro\"></ion-icon>\n                          </ion-label>\n                      </div>\n                  </ion-col>\n                  <ion-col  size=\"12\">\n\n                      <ion-label class=\"center-professional-txt\" size=\"small\" [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text3'\"></ion-label>\n                      <div class=\"center-professional-amtbox\">\n                          <ion-input type=\"number\" class=\"small-txtbox\" name=\"ratetwo\" [(ngModel)]=\"ratetwo\"></ion-input>\n                          <ion-label>\n                              <ion-icon name=\"logo-euro\"></ion-icon>\n                          </ion-label>\n                      </div>\n                  </ion-col>\n                  <ion-col  size=\"12\">\n                      <button style=\"font-family: montserrat-medium;\" ion-button class=\"global-submit-button global-btn themecolor\"\n                     (click)=\"submit()\" [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text4'\">\n              </button>\n                  </ion-col> -->\n\n        <ion-row\n          style=\"display: none; flex-direction: row; justify-content: center\"\n        >\n          <ion-list>\n            <ion-item *ngFor=\"let sports of sportsListArray;let z=index;\">\n              <ion-label>{{sports.spcat_name}}</ion-label>\n              <ion-checkbox\n                [disabled]=\"isCheckboxDisabled && userType=='2'\"\n                (ionChange)=\"checked($event,sports,z)\"\n                [(ngModel)]=\"sports.isChecked\"\n              ></ion-checkbox>\n            </ion-item>\n\n            <!-- <ion-item>\n                        <ion-label>Sports</ion-label>\n                        <ion-select [disabled]=\"isCheckboxDisabled\" multiple=\"true\" (ionChange)=\"checked($event,sports)\" [(ngModel)]=\"checkedSports\" >\n                            <ion-select-option *ngFor=\"let sports of sportsListArray\" value=\"{{sports.spcat_id}}\">\n                                {{sports.spcat_name}}</ion-select-option>\n                        </ion-select>\n                    </ion-item> -->\n          </ion-list>\n        </ion-row>\n        <!-- <ion-row>\n          <ion-col\n            *ngIf=\"isCheckboxDisabled\"\n            col-12\n            (click)=\"reset()\"\n            style=\"\n              font-family: montserrat-medium;\n              font-weight: bold;\n              color: #ffffff;\n            \"\n            [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text2'\"\n          ></ion-col>\n        </ion-row> -->\n\n        <!-- // COMMENTED THIS ONE -->\n        <!-- <ion-row class=\"textwith-label\">\n          <ion-input\n            type=\"text\"\n            placeholder=\"other sports category\"\n            [(ngModel)]=\"otherSportsCat\"\n            style=\"font-weight: bold; color: white\"\n          ></ion-input>\n        </ion-row> -->\n      </ion-grid>\n    </div>\n  </section>\n</ion-content>\n<!-- \n<ion-footer>\n  <ion-row style=\"display: flex; flex-direction: row; justify-content: center\">\n    <button\n      style=\"font-family: montserrat-medium\"\n      ion-button\n      class=\"global-submit-button global-btn themecolor\"\n      (click)=\"submit()\"\n      [translate]=\"'INSCRIPTIONPROFESSIONNEL3.Text3'\"\n    ></button>\n  </ion-row>\n</ion-footer> -->\n");

/***/ }),

/***/ 29332:
/*!*********************************************************************************!*\
  !*** ./src/app/inscription-professionnel3/inscription-professionnel3.page.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".professional-block {\n  width: calc(100% - 80px);\n  max-width: 400px;\n  margin: 0px auto;\n}\n\n.terms-headersection {\n  color: #ffffff;\n  background: transparent;\n}\n\n.question-count {\n  color: #ffaa00;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 16px !important;\n}\n\n.question-box-main {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.center-professional-txt {\n  color: #ffffff;\n  font-size: 14px;\n  width: 100%;\n  margin-top: 35px;\n  margin-left: -15px;\n}\n\n.btn-profession-box {\n  margin-top: 50px;\n}\n\n.center-professional-amtbox {\n  width: 100px;\n  margin: 10px auto;\n  display: flex;\n  color: #ffffff;\n}\n\n.center-professional-amtbox ion-input {\n  background: transparent;\n  border: solid 2px #cccccc;\n  border-radius: 5px;\n  height: 35px;\n}\n\n.center-professional-amtbox ion-icon {\n  margin: 10px 0px 0px 10px;\n}\n\n.transparent-txtarea {\n  background: rgba(255, 255, 255, 0.5);\n  min-height: 120px;\n  margin: 15px 15px 20px 15px;\n  text-align: left;\n}\n\n.transparent-txtarea textarea {\n  min-height: 120px !important;\n}\n\n.transparent-txtarea .btn-profession-box {\n  margin-top: 50px;\n}\n\nion-col {\n  padding-bottom: 40px;\n}\n\nion-content {\n  --background: url('login-bg.svg') no-repeat 52% center/cover;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2NyaXB0aW9uLXByb2Zlc3Npb25uZWwzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUFFO0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBRUUsZ0JBQUE7QUFFSjs7QUFBRTtFQUVFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRUo7O0FBREk7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBR047O0FBREk7RUFFRSx5QkFBQTtBQUVOOztBQUNFO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFESTtFQUNFLDRCQUFBO0FBR047O0FBREk7RUFFRSxnQkFBQTtBQUVOOztBQUVFO0VBQ0Usb0JBQUE7QUFDSjs7QUFFRTtFQUNFLDREQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7QUFDSiIsImZpbGUiOiJpbnNjcmlwdGlvbi1wcm9mZXNzaW9ubmVsMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLnByb2Zlc3Npb25hbC1ibG9jayB7XG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gODBweCk7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC50ZXJtcy1oZWFkZXJzZWN0aW9uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAucXVlc3Rpb24tY291bnQge1xuICAgIGNvbG9yOiAjZmZhYTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnF1ZXN0aW9uLWJveC1tYWluIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuY2VudGVyLXByb2Zlc3Npb25hbC10eHRcbiAge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgfVxuICAuYnRuLXByb2Zlc3Npb24tYm94XG4gIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5jZW50ZXItcHJvZmVzc2lvbmFsLWFtdGJveFxuICB7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBpb24taW5wdXR7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogc29saWQgMnB4ICNjY2NjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIGlvbi1pY29uXG4gICAge1xuICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMTBweDtcbiAgICB9XG4gIH1cbiAgLnRyYW5zcGFyZW50LXR4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBtYXJnaW46IDE1cHggMTVweCAyMHB4IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBtaW4taGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnRuLXByb2Zlc3Npb24tYm94XG4gICAge1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG4gIH1cblxuICBpb24tY29se1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4tYmcuc3ZnJykgbm8tcmVwZWF0IDUyJSBjZW50ZXIvY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_inscription-professionnel3_inscription-professionnel3_module_ts.js.map