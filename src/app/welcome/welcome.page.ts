import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Storage } from '@ionic/storage';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { TranslateConfigService } from '../translate-config.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  selectedLang;

  constructor(
    public api: ApiService,
    public diagnostic: Diagnostic,
    private storage: Storage,
    public httpClient: HttpClient,
    public http: Http,
    public navCtrl: NavController,
    public translateSevice: TranslateConfigService
  ) {}

  ngOnInit() {}

  changeLang($event) {
    console.log($event);
    this.selectedLang = $event.detail.value;
    // this.translateSevice.setLanguage('fr')
  }

  saveLanguage() {
    this.translateSevice.setLanguage(this.selectedLang);

    this.navCtrl.navigateRoot(['/connexion']);
  }
}
