import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { AlertController, ModalController } from '@ionic/angular';
import { ParticipantsPage } from '../participants/participants.page';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateConfigService } from '../translate-config.service';
import { SearchfilterPage } from '../searchfilter/searchfilter.page';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  userType;
  userId;
  allusers: any = [];
  dataLoaded: boolean = false;
  constructor(
    public api: ApiService,
    public storage: Storage,
    public alertController: AlertController,
    public http: Http,
    public httpClient: HttpClient,
    public modalCtrl: ModalController,
    public translateSevice: TranslateConfigService,
    public router: Router
  ) {}

  ngOnInit() {
    this.storage.get('user_type').then((user_type) => {
      this.storage.get('user_id').then((user_id) => {
        this.userId = user_id;
        this.userType = user_type;

        this.getUsers();
      });
    });
  }

  getUsers() {
    this.dataLoaded = false;
    this.allusers = [];
    this.api.loading();
    const formData = new FormData();

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/user_ranking',
        formData
      )
      .subscribe((res) => {
        console.log(res.json());

        this.allusers = res.json().result;
        this.dataLoaded = true;
        this.api.dismissLoading();
      });
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
  notifications() {
    this.api.Navigate('notifications');
  }

  events() {
    if (this.userType == '1') {
      this.api.Navigate('creer-evenement');
    } else {
      this.api.Navigate('evenementcoachvue');
    }
  }

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  async filterFunc() {
    const modal = await this.modalCtrl.create({
      component: SearchfilterPage,
      cssClass: 'searchFilterPage',
      showBackdrop: false,
      componentProps: { usersArray: this.allusers },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data == 'noresult') {
      this.getUsers();
    } else {
      this.dataLoaded = false;
      this.api.loading();
      const formData = new FormData();

      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/fields/user_ranking',
          formData
        )
        .subscribe((res) => {
          console.log(res.json());

          var alluserAray = res.json().result;

          this.api.dismissLoading();
          if (data.isArea) {
            this.allusers = [];
            for (var i = 0; i < alluserAray.length; i++) {
              if (alluserAray[i].user_city == data.city) {
                this.allusers.push(alluserAray[i]);
              }
            }
            console.log(this.allusers);
            this.dataLoaded = true;
          } else if (data.isName) {
            this.allusers = [];
            for (var i = 0; i < alluserAray.length; i++) {
              if (alluserAray[i].user_f_name == data.first_name) {
                this.allusers.push(alluserAray[i]);
              }
            }
            console.log(this.allusers);
            this.dataLoaded = true;
          } else if (data.isSports) {
            this.allusers = [];
            for (var i = 0; i < alluserAray.length; i++) {
              if (alluserAray[i].spcat_name == data.sportsName) {
                this.allusers.push(alluserAray[i]);
              }
            }
            console.log(this.allusers);
            this.dataLoaded = true;
          }
        });
    }
  }

  manage() {
    this.api.Navigate('mes-evenements');
    if (this.userType === '1') {
      this.api.Navigate('mes-evenements');
    } else {
      this.api.Navigate('evenements-coach');
    }
  }

  viewProfile(user) {
    // if(this.userType=="0" && !this.subscribed){
    //   //present alert
    //   this.api.presentAlertSubscription(2);
    // }else{
    console.log('my event');
    if (this.userId === user.user_id) {
      if (this.userType == '1') {
        this.api.Navigate('mon-profil');
      } else {
        this.api.Navigate('coacheditprofile');
      }
    } else {
      console.log('others event');
      var vc = { user_id: user.user_id, distance: user.distance };
      let navigationExtras = {
        queryParams: {
          special: JSON.stringify(vc),
        },
      };
      this.router.navigate(['coachviewprofile'], navigationExtras);
    }
  }
}
