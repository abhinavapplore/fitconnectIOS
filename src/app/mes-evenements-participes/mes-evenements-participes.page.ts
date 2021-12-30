import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mes-evenements-participes',
  templateUrl: './mes-evenements-participes.page.html',
  styleUrls: ['./mes-evenements-participes.page.scss'],
})
export class MesEvenementsParticipesPage implements OnInit {
  individual: boolean = false;
  coach: boolean = false;
  uid: any;
  totalEvents: any;
  activeEvents = [];
  message;
  empty: boolean = false;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue: boolean;

  constructor(
    public api: ApiService,
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    public router: Router
  ) {}

  ngOnInit() {
    this.api.loading();
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
    this.storage.get('user_id').then((user_id) => {
      this.uid = user_id;
      const formData = new FormData();
      formData.append('user_id', this.uid);

      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/fields/past_event',
          formData
        )
        .subscribe((res) => {
          if (res.json().status == 1) {
            console.log(res.json());
            this.totalEvents = res.json().result.length;
            this.activeEvents = res.json().result;
            console.log(this.activeEvents);
            this.api.dismissLoading();
          } else {
            console.log(res.json());
            this.message = res.json().msg;
            this.empty = true;
            this.totalEvents = res.json().result.length;
            this.api.dismissLoading();
          }
        });
    });
  }

  coming() {
    console.log('clicked');
    this.api.Navigate('mes-evenements');
  }

  created() {
    console.log('clicked');
    this.api.Navigate('mes-evenements-crees');
  }

  events() {
    this.api.Navigate('creer-evenement');
  }

  manage() {
    this.api.Navigate('mes-evenements');
  }

  notifications() {
    this.api.Navigate('notifications');
  }

  rankingDetails() {
    this.api.Navigate('ranking');
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
}
