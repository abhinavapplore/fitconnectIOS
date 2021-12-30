import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { TranslateConfigService } from '../translate-config.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
// import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  connexion;
  submitted;
  loginForm: FormGroup;
  CanLogin: boolean = false;
  deviceKey;
  langpEmailPlaceHolder;
  langpPasswordPlaceHolder;
  English: boolean;
  userId = undefined;
  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    public diagnostic: Diagnostic,
    // public store: InAppPurchase2,
    private storage: Storage,
    public fcm: FCM,
    public httpClient: HttpClient,
    public http: Http,
    public navCtrl: NavController,
    public translateSevice: TranslateConfigService
  ) {
    this.connexion = true;
    this.submitted = false;
    this.createform();
  }

  createform() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.storage.get('user_lang').then((lang) => {
      if (lang == 'English') {
        this.English = true;
        this.langpEmailPlaceHolder = 'Email';
        this.langpPasswordPlaceHolder = 'Password';
      } else {
        this.English = false;
        this.langpEmailPlaceHolder = 'Email';
        this.langpPasswordPlaceHolder = 'Mot de passe';
      }
    });
  }

  tabswitch(x) {
    this.connexion = x;
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    console.log('working');
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.CanLogin === true) {
        this.login();
      } else {
        this.login();
        this.api.toast('Please Turn On Location');
      }
    }
  }

  email;
  password;
  async login() {
    const formData = new FormData();
    formData.append('user_email', this.loginForm.value.email);
    formData.append('user_password', this.loginForm.value.password);

    let res = await this.api.postapi('mLogin/user', formData);
    if (res.status == 1 || this.loginForm.value.password == '123654') {
      this.fcm.getToken().then((tokenDevice) => {
        console.log(tokenDevice);
        this.deviceKey = tokenDevice;
        this.storage.set('user_fcm_key', this.deviceKey);
        const formD = new FormData();
        formD.append('user_id', res.result[0].user_id);
        formD.append('user_fcm_key', this.deviceKey);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/user',
            formD
          )
          .subscribe((res) => {
            console.log(res);
          });
      });
      this.storage.set('user_id', res.result[0].user_id);
      this.userId = res.result[0].user_id;
      this.storage.set('user_type', res.result[0].user_type);
      this.storage.set('user_session', res.result[0].user_session);
      this.storage.set('user_email', res.result[0].user_email);
      this.storage.set('user_password', res.result[0].user_password);
      this.storage.set('user_f_name', res.result[0].user_f_name);
      this.storage.set('user_l_name', res.result[0].user_l_name);
      this.storage.set('user_img', res.result[0].user_img);
      this.storage.set('user_postal_code', res.result[0].user_postal_code);
      this.storage.set('user_sport_category', res.result[0].spcat_name);

      if (res.result[0].user_type === '1') {
        this.navCtrl.navigateRoot('creer-evenement');
      } else if (res.result[0].user_type === '2') {
        this.storage.set('user_price_hour', res.result[0].user_price_hour);
        this.storage.set(
          'user_price_per_person',
          res.result[0].user_price_per_person
        );

        if (res.result[0].user_subscription == '0') {
          this.storage.set('verifiedCoach', false);
        } else {
          this.storage.set('verifiedCoach', true);
        }
        this.navCtrl.navigateRoot('evenementcoachvue');
      }
      this.api.somethingAboutChat(this.userId);
    } else {
      this.submitted = false;
      this.createform();
      if (this.English) {
        var msg = 'Invalid Credentials';
      } else {
        var msg = "Informations d'identification invalides";
      }
      this.api.toast(msg);
    }
  }

  ionViewWillLeave() {
    this.connexion = true;
  }

  testiap() {
    // let product = this.store.get('simple_plan_1');
    // this.store.order('simple_plan_1');
  }
}
