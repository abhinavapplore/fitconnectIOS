import { Component, OnInit } from '@angular/core';
// import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import {
  DocumentViewer,
  DocumentViewerOptions,
} from '@awesome-cordova-plugins/document-viewer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

import { NavController, Platform } from '@ionic/angular';
import { TranslateConfigService } from '../translate-config.service';
import { PurchaseService } from '../services/purchase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.page.html',
  styleUrls: ['./abonnement.page.scss'],
})
export class AbonnementPage implements OnInit {
  cardDetails: any = {};
  code = '';
  stripe_key = 'pk_test_8iBMx9Sz5C5oYRZpccfvTNdF00LMtI9Tbq';
  cardInput: boolean = false;
  cardNumber: any;
  expMonth: any;
  expYear: any;
  expDate: any;
  cvv: any;
  totalAmt: any;
  selectedPlan: any = {};
  cardNumberText: boolean = false;
  expText: boolean = false;
  cvvText: boolean = false;
  uid;
  activeSubscription: any = {};
  subscribed: boolean = false;
  footerAction: boolean = true;
  termsAccepted: boolean = true;
  conditions: boolean = false;
  engaging;
  termsread: boolean = false;
  termsReadText: boolean = false;
  langCvvPlaceHolder;
  langpCardPlaceHolder;
  langpDatePlaceHolder;
  langpromoPlaceHolder;
  language;
  newSelection;
  prevIndex;
  English;
  notificationPresent: boolean = false;
  notificationArray;
  couponApplied: boolean = false;
  couponId = '';
  msgValue: boolean;
  successEventSubscriptionVar: Subscription;
  subscriptionPlanArray = [];
  constructor(
    public navCtrl: NavController,
    // private stripe: Stripe,
    public http: Http,
    public httpClient: HttpClient,
    public file: File,
   
    public platform: Platform,
    private document: DocumentViewer,
    private fileOpener: FileOpener,
    public storage: Storage,
    public api: ApiService,
    public router: Router,
    public keyboard: Keyboard,
    public translateSevice: TranslateConfigService,
    public purchaseService: PurchaseService
  ) {
    this.keyboard.onKeyboardWillShow().subscribe((data) => {
      this.footerAction = false;
    });
    this.keyboard.onKeyboardWillHide().subscribe((data) => {
      this.footerAction = true;
    });
  }

  ionViewDidEnter() {
    this.storage.get('notificationArray').then((notificationArray) => {
      this.storage.get('msgUnread').then((value) => {
        this.msgValue = value;
        if (
          notificationArray == null ||
          notificationArray == undefined ||
          notificationArray.length == 0
        ) {
          this.notificationPresent = false;
        } else {
          this.notificationArray = notificationArray.length;
          this.notificationPresent = true;
        }
      });
    });
    this.storage.get('user_lang').then((lang) => {
      if (lang == 'English') {
        this.English = true;
        this.langpCardPlaceHolder = 'Card number';
        this.langpDatePlaceHolder = 'Expiration date';
        this.langCvvPlaceHolder = 'CVV';
        this.langpromoPlaceHolder = 'code';
      } else {
        this.English = false;
        this.langpCardPlaceHolder = 'numéro de carte';
        this.langpDatePlaceHolder = "Date d'expiration";
        this.langCvvPlaceHolder = 'CVV';
        this.langpromoPlaceHolder = 'code';
      }
    });
    this.storage.get('user_id').then((user_id) => {
      this.uid = user_id;

      this.getActiveSubscription();
    });
  }

  ngOnInit() {
    this.storage.get('user_lang').then((lang) => {
      this.language = lang;
    });
  }

  searchFocus(event) {
    this.footerAction = false;
  }

  checkCouponCode() {
    if (this.couponApplied) {
    } else {
      if (this.code == '') {
        if (this.English) {
          var msg = 'Please Enter Valid Details.';
          this.api.toast(msg);
        } else {
          var msg = 'Veuillez saisir des détails valides.';
          this.api.toast(msg);
        }
      } else {
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('promo_code', this.code);
        this.httpClient
          .post<any>(
            'http://fitconnected.prometteur.in/index.php/Api/fields/check_promo_offer',
            formData
          )
          .subscribe((res) => {
            console.log(res);
            var response = res;
            if (response.status == 1) {
              this.api.toast(res.msg);
              var discount = parseInt(response.discount);
              this.couponId = response.coupon_id;
              this.couponApplied = true;
              this.totalAmt = this.totalAmt - (this.totalAmt / 100) * discount;
              console.log(this.totalAmt);
            } else {
              this.api.toast(res.msg);
            }
          });
      }
    }
  }

  rankDetails() {
    this.api.Navigate('ranking');
  }

  getActiveSubscription() {
    //reset this
    this.subscribed = false;
    this.activeSubscription = {};
    this.subscriptionPlanArray = [];
    const formData = new FormData();
    formData.append('user_id', this.uid);
    this.httpClient
      .post<any>(
        'http://fitconnected.prometteur.in/index.php/Api/fields/subscription_plan',
        formData
      )
      .subscribe((res) => {
        console.log(res);

        this.subscriptionPlanArray = res.result;
        this.subscriptionPlanArray.forEach((element) => {
          element.selected = false;
          if (element.active) {
            this.activeSubscription = element;
            console.log(this.activeSubscription);
            this.subscribed = true;
          }
        });
        console.log(this.subscriptionPlanArray);
      });
  }

  cardNumberInput() {
    this.cardNumberText = false;
  }

  dateInput() {
    this.expText = false;
  }

  cvvInput() {
    this.cvvText = false;
  }

  radioSelect(item, i) {
    console.log(item);
    console.log(i);
    this.subscriptionPlanArray[i].selected = true;
    this.newSelection = i;

    this.termsread = true;
    this.termsReadText = false;
  }

  ngAfterViewInit() {
    this.successEventSubscriptionVar =
      this.purchaseService.successEvent.subscribe((data) => {
        this.makePayment();
      });
  }
  ngOnDestroy() {
    // this.purchaseService.successEvent.unsubscribe();
    this.successEventSubscriptionVar.unsubscribe();
  }
  choosePlan(item, i) {
    console.log('CHOSE PLAN', item);
    this.selectedPlan = item;
    this.purchaseService.order(item.sub_title);
    // console.log('CHOSE PLAN', this.newSelection);

    // console.log(i);
    // if (this.newSelection == i) {
    //   console.log('here');
    //   if (this.termsread == true) {
    //     this.cardInput = true;
    //     this.selectedPlan = item;
    //     this.totalAmt = item.sub_plan_price;
    //     this.engaging = item.sub_plan_type;
    //   } else {
    //     this.termsReadText = true;
    //   }
    // }
  }

  payWithStripe() {
    this.footerAction = true;
    if (this.termsAccepted == true) {
      if (this.cardNumber == null || this.cardNumber == undefined) {
        this.cardNumberText = true;
      } else if (this.expMonth == null || this.expMonth == undefined) {
        this.expText = true;
      } else if (this.cvv == null || this.cvv == undefined) {
        this.cvvText = true;
      } else {
        // this.api.loading();
        // console.log(this.cardNumber);
        // console.log(this.expMonth);
        // console.log(this.expYear);
        // console.log(this.cvv);
        // console.log(this.totalAmt);
        // this.stripe.setPublishableKey(this.stripe_key);

        // this.cardDetails = {
        //   number: this.cardNumber,
        //   expMonth: this.expMonth,
        //   expYear: this.expYear,
        //   cvc: this.cvv,
        // };

        // this.stripe
        //   .createCardToken(this.cardDetails)
        //   .then((token) => {
        //     console.log(token);
        //     this.api.dismissLoading();
        //     this.makePayment(token.id);
        //   })
        //   .catch((error) => {
        //     this.api.dismissLoading();
        //     this.api.toast(error);
        //   });
      }
    } else {
      this.conditions = true;
    }
  }

  dateSelected() {
    // this.sTime.open();
    console.log(this.expDate);
    this.expMonth = moment(this.expDate).format('MM');
    this.expYear = moment(this.expDate).format('YYYY');
    console.log(this.expMonth);
    console.log(this.expYear);
  }

  setconditions(x) {
    this.termsAccepted = x.detail.checked;
    this.conditions = false;
  }

  cancelSubscription(item) {
    console.log(item);
    this.api.loading();
    const formData = new FormData();
    formData.append('user_id', this.uid);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/mAdd/cancel_user_subcription',
        formData
      )
      .subscribe((res) => {
        if (res.json().msg == 'success') {
          if (this.language == 'English') {
            this.api.toast('Subscription Canceled');
          } else {
            this.api.toast('Abonnement Annulé');
          }

          this.storage.set('verifiedCoach', false);
          this.storage.remove('coachSubscription');

          this.navHome();
        } else {
          console.log(res);
          this.api.toast(res.json().msg);
        }
        this.api.dismissLoading();
      });
  }

  makePayment(token = 'token not specified') {
    // alert('usub_user_id' + this.uid);
    // alert('usub_plan_id' + this.selectedPlan.sub_id);

    // alert('usub_coupon_id' + 'not specified');

    // alert('stripeToken' + token);
    this.api.loading();
    const formData = new FormData();
    formData.append('usub_user_id', this.uid);
    formData.append('usub_plan_id', this.selectedPlan.sub_id);
    // formData.append('usub_coupon_id', this.couponId);
    formData.append('usub_coupon_id', 'not specified');

    formData.append('stripeToken', token);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/mAdd/user_subcription',
        formData
      )
      .subscribe((res) => {
        console.log('USER SUBSCRIPTINO RESPONSE', res);

        if (res.json().msg == 'success') {
          this.api.dismissLoading();
          if (this.language == 'English') {
            this.api.toast('Subscription added');
          } else {
            this.api.toast('Abonnement ajouté');
          }

          // this.cardInput = false;
          this.storage.set('verifiedCoach', true);
          this.storage.set('coachSubscription', this.selectedPlan);
          this.navHome();
        } else {
          this.api.dismissLoading();
          console.log(res);
          this.api.toast(res.json().msg);
          // this.cardInput = true;
        }
      });
  }
  makePayment2(token = 'token not specified') {
    if (this.couponApplied) {
      this.api.loading();
      const formData = new FormData();
      formData.append('usub_user_id', this.uid);
      formData.append('usub_plan_id', this.selectedPlan.sub_id);
      // formData.append('usub_coupon_id', this.couponId);
      formData.append('usub_coupon_id', 'not specified');

      formData.append('stripeToken', token);

      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/mAdd/user_subcription',
          formData
        )
        .subscribe((res) => {
          if (res.json().msg == 'success') {
            this.api.dismissLoading();
            if (this.language == 'English') {
              this.api.toast('Subscription added');
            } else {
              this.api.toast('Abonnement ajouté');
            }

            this.cardInput = false;
            this.storage.set('verifiedCoach', true);
            this.storage.set('coachSubscription', this.selectedPlan);
            this.navHome();
          } else {
            this.api.dismissLoading();
            console.log(res);
            this.api.toast(res.json().msg);
            this.cardInput = true;
          }
        });
    } else {
      this.api.loading();
      const formData = new FormData();
      formData.append('usub_user_id', this.uid);
      formData.append('usub_plan_id', this.selectedPlan.sub_id);

      formData.append('stripeToken', token);

      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/mAdd/user_subcription',
          formData
        )
        .subscribe((res) => {
          if (res.json().msg == 'success') {
            this.api.dismissLoading();
            if (this.language == 'English') {
              this.api.toast('Subscription added');
            } else {
              this.api.toast('Abonnement ajouté');
            }

            this.cardInput = false;
            this.storage.set('verifiedCoach', true);
            this.storage.set('coachSubscription', this.selectedPlan);
            this.navHome();
          } else {
            this.api.dismissLoading();
            console.log(res);
            this.api.toast(res.json().msg);
            this.cardInput = true;
          }
        });
    }
  }

  navHome() {
    this.router.navigateByUrl('evenementcoachvue');
  }

  // getActiveSubscription(){
  //   this.storage.get('verifiedCoach').then((isSubscribed)=>{
  //     this.subscribed=isSubscribed;

  //     if(isSubscribed){
  //       this.storage.get('coachSubscription').then((coachSubscription)=>{
  //         this.activeSubscription=coachSubscription;

  //   });

  //     }else{
  //       //open Alert
  //       // this.api.presentAlertSubscription();
  //     }
  //   });
  // }

  year() {
    this.cardInput = true;
    var amt = 29.9;
    this.totalAmt = amt.toFixed(2);
    console.log(this.totalAmt);
  }
  permonth() {
    this.cardInput = true;
    var amt = 49.9 * 12;
    this.totalAmt = amt.toFixed(2);
    console.log(this.totalAmt);
  }

  events() {
    this.api.Navigate('evenementcoachvue');
  }

  manage() {
    this.api.Navigate('evenements-coach');
  }

  notifications() {
    this.api.Navigate('notifications');
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

  conditionsPage() {
    var vc = {
      pageRoute: 'paymentpage',
    };
    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };

    this.router.navigate(['conditions'], navigationExtras);
  }
}
