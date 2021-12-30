import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
// import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import {
  DocumentViewer,
  DocumentViewerOptions,
} from '@awesome-cordova-plugins/document-viewer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.page.html',
  styleUrls: ['./paymentpage.page.scss'],
})
export class PaymentpagePage implements OnInit {
  bookingDetail: any = {};
  cardDetails: any = {};
  stripe_key = 'pk_test_8iBMx9Sz5C5oYRZpccfvTNdF00LMtI9Tbq';
  cvc;
  cardNumber;
  expMonth;
  expYear;
  submitted;
  pageRoute;

  paymentForm: FormGroup;
  constructor(
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    private fileOpener: FileOpener,
    public api: ApiService,
    // public stripe: Stripe,
    private formBuilder: FormBuilder,
    private document: DocumentViewer,
    public router: Router,
    public route: ActivatedRoute,
    public file: File,
    // public fileTransfer: FileTransfer,
    public platform: Platform
  ) {
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
      cardnumber: ['', Validators.required],
      expiration: ['', Validators.required],
      cvc: ['', Validators.required],

      conditions: ['false', Validators.requiredTrue],
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
    } else {
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
        .copyFile(
          filePath,
          'payment.pdf',
          this.file.dataDirectory,
          `${fakeName}.pdf`
        )
        .then((results) => {
          this.fileOpener.open(results.nativeURL, 'application/pdf');
        });
    } else {
      const options: DocumentViewerOptions = {
        title: 'CGV',
      };

      this.document.viewDocument(
        `${filePath}/payment.pdf`,
        'application/pdf',
        options
      );
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

  makePayment(stripeToken?) {
    this.api.loading();
    const formData = new FormData();
    formData.append('book_user_id', this.bookingDetail.book_user_id);
    formData.append('book_host_id', this.bookingDetail.book_host_id);
    formData.append('book_user_f_name', this.bookingDetail.book_user_f_name);
    formData.append('book_user_l_name', this.bookingDetail.book_user_l_name);
    formData.append('book_event_id', this.bookingDetail.book_event_id);
    formData.append('book_event_date', this.bookingDetail.book_event_date);
    formData.append(
      'book_event_address',
      this.bookingDetail.book_event_address
    );
    formData.append('stripeToken', stripeToken);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/book',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          if (res.json().msg === 'Event is already booked') {
            this.api.toast('Votre demande a bien été envoyée');
            this.api.dismissLoading();
            this.back();
          } else {
            console.log(res.json());
            this.api.dismissLoading();
            var msg = "L'événement est déjà réservé";
            this.api.toast(msg);
            this.back();
          }
        } else {
          console.log(res.json());
        }
      });
  }

  back() {
    this.api.Navigate(this.pageRoute);
  }
}
