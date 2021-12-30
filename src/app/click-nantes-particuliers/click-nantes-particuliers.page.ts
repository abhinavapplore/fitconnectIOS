import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ActivatedRoute, Router, RouteConfigLoadStart } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-click-nantes-particuliers',
  templateUrl: './click-nantes-particuliers.page.html',
  styleUrls: ['./click-nantes-particuliers.page.scss'],
})
export class ClickNantesParticuliersPage implements OnInit {
  userId: any;
  lat: any;
  long: any;
  nearbyUsers = [];
  nearbyCoaches = [];
  particulars: boolean = true;
  totalCoach: any;
  totalParticular: any;
  userType;
  userCity;
  user_type;
  subscribed: any;
  postalCode;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue: boolean;

  constructor(
    public api: ApiService,
    public storage: Storage,
    public changeRef: ChangeDetectorRef,
    public http: Http,
    public httpClient: HttpClient,
    private geolocation: Geolocation,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params && params.special) {
        this.nearbyUsers = [];
        this.nearbyCoaches = [];
        this.storage.get('user_id').then((user_id) => {
          this.userId = user_id;
          var details = JSON.parse(params.special);
          console.log(details);
          this.postalCode = details.postal_code;
          this.userCity = details.user_city;
        });
      }
    });
  }

  ngOnInit() {}

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
    this.storage.get('user_type').then((userType) => {
      this.storage.get('verifiedCoach').then((isSubscribed) => {
        console.log(isSubscribed);

        this.subscribed = isSubscribed;

        this.userType = userType;

        const formData = new FormData();
        formData.append('user_id', this.userId);
        formData.append('user_postal_code', this.postalCode);
        formData.append('user_city', this.userCity);

        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/fields/near_by_users',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log(res.json().result);
              var allUsers = [];
              allUsers = res.json().result;
              for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].user_type === '1') {
                  var lName = allUsers[i].user_l_name.substring(0, 1);
                  var name = allUsers[i].user_f_name + ' ' + lName + '.';
                  allUsers[i].nameFormatted = name;
                  this.nearbyUsers.push(allUsers[i]);
                } else if (allUsers[i].user_type === '2') {
                  var lName = allUsers[i].user_l_name.substring(0, 1);
                  var name = allUsers[i].user_f_name + ' ' + lName + '.';
                  allUsers[i].nameFormatted = name;
                  this.nearbyCoaches.push(allUsers[i]);
                } else {
                  console.log('this user cannot be added');
                }
              }
              this.totalParticular = this.nearbyUsers.length;
              this.totalCoach = this.nearbyCoaches.length;
            } else {
              this.api.toast('Unable to connect');
            }
          });
      });
    });
  }

  radio(event) {
    if (event.detail.value == 'particuliers') {
      this.particulars = true;
      this.changeRef.detectChanges();
    } else if (event.detail.value == 'coachs') {
      this.particulars = false;
      this.changeRef.detectChanges();
    }
  }

  viewProfile(user) {
    if (this.userType == '0' && !this.subscribed) {
      //present alert
      this.api.presentAlertSubscription(2);
    } else {
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

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  eventsTab() {
    if (this.userType === '1') {
      this.api.Navigate('creer-evenement');
    } else if (this.userType === '2') {
      this.api.Navigate('evenementcoachvue');
    }
  }

  eventdetails() {
    if (this.userType === '1') {
      this.api.Navigate('mes-evenements');
    } else if (this.userType === '2') {
      this.api.Navigate('evenements-coach');
    }
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
}
