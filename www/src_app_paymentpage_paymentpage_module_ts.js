"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_paymentpage_paymentpage_module_ts"],{

/***/ 5565:
/*!***********************************************************!*\
  !*** ./src/app/paymentpage/paymentpage-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentpagePageRoutingModule": () => (/* binding */ PaymentpagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _paymentpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentpage.page */ 57556);




const routes = [
    {
        path: '',
        component: _paymentpage_page__WEBPACK_IMPORTED_MODULE_0__.PaymentpagePage
    }
];
let PaymentpagePageRoutingModule = class PaymentpagePageRoutingModule {
};
PaymentpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentpagePageRoutingModule);



/***/ }),

/***/ 68422:
/*!***************************************************!*\
  !*** ./src/app/paymentpage/paymentpage.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentpagePageModule": () => (/* binding */ PaymentpagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _paymentpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentpage-routing.module */ 5565);
/* harmony import */ var _paymentpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentpage.page */ 57556);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let PaymentpagePageModule = class PaymentpagePageModule {
};
PaymentpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _paymentpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentpagePageRoutingModule
        ],
        declarations: [_paymentpage_page__WEBPACK_IMPORTED_MODULE_1__.PaymentpagePage]
    })
], PaymentpagePageModule);



/***/ }),

/***/ 57556:
/*!*************************************************!*\
  !*** ./src/app/paymentpage/paymentpage.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentpagePage": () => (/* binding */ PaymentpagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_paymentpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./paymentpage.page.html */ 22753);
/* harmony import */ var _paymentpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentpage.page.scss */ 34122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 78713);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ 40516);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 80238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/document-viewer/ngx */ 20353);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 64637);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);








// import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';






let PaymentpagePage = class PaymentpagePage {
    constructor(storage, http, httpClient, fileOpener, api, 
    // public stripe: Stripe,
    formBuilder, document, router, route, file, 
    // public fileTransfer: FileTransfer,
    platform) {
        this.storage = storage;
        this.http = http;
        this.httpClient = httpClient;
        this.fileOpener = fileOpener;
        this.api = api;
        this.formBuilder = formBuilder;
        this.document = document;
        this.router = router;
        this.route = route;
        this.file = file;
        this.platform = platform;
        this.bookingDetail = {};
        this.cardDetails = {};
        this.stripe_key = 'pk_test_8iBMx9Sz5C5oYRZpccfvTNdF00LMtI9Tbq';
        this.submitted = false;
        this.creatform();
        this.route.queryParams.subscribe((params) => {
            if (params && params.special) {
                var details = JSON.parse(params.special);
                this.pageRoute = details.pageRoute;
            }
        });
    }
    ngOnInit() {
        this.storage.get('bookingrequest').then((bookingDetail) => {
            this.bookingDetail = bookingDetail;
            console.log(this.bookingDetail);
        });
    }
    creatform() {
        this.paymentForm = this.formBuilder.group({
            cardnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            expiration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            cvc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            conditions: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue],
        });
    }
    get f() {
        return this.paymentForm.controls;
    }
    onSubmit() {
        console.log('working');
        this.submitted = true;
        // stop here if form is invalid
        if (this.paymentForm.invalid) {
            return;
        }
        else {
            // this.payWithStripe();
        }
    }
    setconditions(x) {
        this.paymentForm.patchValue({ conditions: x });
    }
    conditionsPage() {
        let filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            let fakeName = Date.now();
            this.file
                .copyFile(filePath, 'payment.pdf', this.file.dataDirectory, `${fakeName}.pdf`)
                .then((results) => {
                this.fileOpener.open(results.nativeURL, 'application/pdf');
            });
        }
        else {
            const options = {
                title: 'CGV',
            };
            this.document.viewDocument(`${filePath}/payment.pdf`, 'application/pdf', options);
        }
    }
    // payWithStripe() {
    //   this.stripe.setPublishableKey(this.stripe_key);
    //   var expMonth = moment(this.paymentForm.value.expiration).format('MM');
    //   var expYear = moment(this.paymentForm.value.expiration).format('YYYY');
    //   this.cardDetails = {
    //     number: this.paymentForm.value.cardnumber,
    //     expMonth: expMonth,
    //     expYear: expYear,
    //     cvc: this.paymentForm.value.cvc,
    //   };
    //   console.log(this.cardDetails);
    //   console.log(this.stripe_key);
    //   this.stripe
    //     .createCardToken(this.cardDetails)
    //     .then((token) => {
    //       console.log(token);
    //       this.makePayment(token.id);
    //     })
    //     .catch((error) => console.error(error));
    // }
    makePayment(stripeToken) {
        this.api.loading();
        const formData = new FormData();
        formData.append('book_user_id', this.bookingDetail.book_user_id);
        formData.append('book_host_id', this.bookingDetail.book_host_id);
        formData.append('book_user_f_name', this.bookingDetail.book_user_f_name);
        formData.append('book_user_l_name', this.bookingDetail.book_user_l_name);
        formData.append('book_event_id', this.bookingDetail.book_event_id);
        formData.append('book_event_date', this.bookingDetail.book_event_date);
        formData.append('book_event_address', this.bookingDetail.book_event_address);
        formData.append('stripeToken', stripeToken);
        this.http
            .post('http://fitconnected.prometteur.in/index.php/Api/madd/book', formData)
            .subscribe((res) => {
            if (res.json().status == 1) {
                if (res.json().msg === 'Event is already booked') {
                    this.api.toast('Votre demande a bien été envoyée');
                    this.api.dismissLoading();
                    this.back();
                }
                else {
                    console.log(res.json());
                    this.api.dismissLoading();
                    var msg = "L'événement est déjà réservé";
                    this.api.toast(msg);
                    this.back();
                }
            }
            else {
                console.log(res.json());
            }
        });
    }
    back() {
        this.api.Navigate(this.pageRoute);
    }
};
PaymentpagePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_8__.Http },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__.FileOpener },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _awesome_cordova_plugins_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__.DocumentViewer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform }
];
PaymentpagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-paymentpage',
        template: _Users_applore_Documents_projects_firconnect_node_modules_ngtools_webpack_src_loaders_direct_resource_js_paymentpage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_paymentpage_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage,
        _angular_http__WEBPACK_IMPORTED_MODULE_8__.Http,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
        _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__.FileOpener,
        _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _awesome_cordova_plugins_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__.DocumentViewer,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform])
], PaymentpagePage);



/***/ }),

/***/ 22753:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/paymentpage/paymentpage.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"header-fixed-top\">\n  <ion-toolbar class=\"top-global-toolbar\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" defaultHref=\"response3\"></ion-back-button>\n      </ion-buttons>\n      <ion-title style=\"font-family:montserrat-medium;\" class=\"top-fixed-heading uppercaes\" [translate]=\"'PAYMENT.Text1'\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <form [formGroup]=\"paymentForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-item lines=\"none\">\n      <ion-label position=\"floating\" [translate]=\"'PAYMENT.Text2'\">\n       </ion-label>\n      <ion-input type=\"tel\" formControlName=\"cardnumber\" name=\"cardnumber\"></ion-input>\n      \n      <div *ngIf=\"submitted && f.cardnumber.errors\" class=\"invalid-feedback left\">\n        <div *ngIf=\"f.cardnumber.errors.required\" [translate]=\"'PAYMENT.Text3'\"></div>\n    </div>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"floating\" [translate]=\"'PAYMENT.Text4'\">\n        </ion-label>\n        <ion-datetime pickerFormat=\"MM/YYYY\" displayFormat=\"MM/YYYY\"\n        monthShortNames=\"jan,fév,mar,avr,mai,juin,juillet,août,sept,oct,nov,déc\" cancelText=\"annuler\" doneText=\"Valider\" min=\"2020\" max=\"2050\" formControlName=\"expiration\" name=\"expiration\"></ion-datetime>\n     \n      <div *ngIf=\"submitted && f.expiration.errors\" class=\"invalid-feedback left\">\n        <div *ngIf=\"f.expiration.errors.required\" [translate]=\"'PAYMENT.Text5'\"></div>\n    </div>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"floating\">CVC*</ion-label>\n      <ion-input type=\"tel\" formControlName=\"cvc\" name=\"cvc\"></ion-input>\n      <div *ngIf=\"submitted && f.cvc.errors\" class=\"invalid-feedback left\">\n        <div *ngIf=\"f.cvc.errors.required\" [translate]=\"'PAYMENT.Text6'\"></div>\n        \n    </div>\n    </ion-item>\n\n    <ion-row style=\"margin-top: 5%;\">\n      <ion-col size=\"2\" style=\"display: flex;\n      justify-content: flex-end;\">\n        \n          <ion-checkbox mode=\"ios\" formControlName=\"conditions\" name=\"conditions\" (ngModelChange)=\"setconditions($event)\"></ion-checkbox>\n        \n        \n      </ion-col>\n      \n      <ion-col size=\"10\">\n        \n          <ion-label style=\"font-size: 14px;margin-top: 19px;\" [translate]=\"'PAYMENT.Text7'\">\n            <b (click)=\"conditionsPage()\" class=\"ion-no-padding\"\n              style=\"text-decoration: underline;font-family: montserrat-medium;font-weight: bold;\" [translate]=\"'PAYMENT.Text8'\">\n              CONDITIONS GENERALES D’UTILISATION\n            </b>\n          </ion-label>\n        \n      </ion-col>\n      <div *ngIf=\"submitted && f.conditions.errors\" class=\"invalid-feedback left\" style=\"width: 100%;text-align: center;\">\n        <div *ngIf=\"f.conditions.errors.required\" [translate]=\"'PAYMENT.Text9'\">Veuillez accepter les termes et conditions</div>\n    </div>\n    </ion-row>\n\n    <ion-item lines=\"none\">\n      <button style=\"font-size: 12px; \" type=\"submit\" ion-button class=\"global-submit-button global-btn themecolor\" [translate]=\"'PAYMENT.Text10'\">\n        effectuer le paiement\n      </button>\n    </ion-item>\n    </form>\n\n</ion-content>\n");

/***/ }),

/***/ 34122:
/*!***************************************************!*\
  !*** ./src/app/paymentpage/paymentpage.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".header-fixed-top {\n  text-align: center;\n  --box-shadow: none !important;\n}\n.header-fixed-top .top-global-toolbar {\n  --background: #414141;\n  --ion-color-base: #000000 !important;\n  color: #ffffff;\n  --box-shadow: none !important;\n}\n.invalid-feedback {\n  font-size: 13px;\n  color: red;\n  background: white;\n  border-radius: 1px;\n}\nion-input, ion-datetime {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUFJO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQUVOO0FBSUk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQVFNO0VBRUUsNERBQUE7QUFOUiIsImZpbGUiOiJwYXltZW50cGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWZpeGVkLXRvcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC50b3AtZ2xvYmFsLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAgIFxuICAgICAgXG4gICAgLmludmFsaWQtZmVlZGJhY2t7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBcbiAgICAgIH1cblxuICAgIFxuXG5cbiAgICAgIGlvbi1pbnB1dCxpb24tZGF0ZXRpbWUge1xuICBcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSkgIWltcG9ydGFudDtcbiAgICAgXG4gICAgfVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_paymentpage_paymentpage_module_ts.js.map