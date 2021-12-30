import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { RateuserPage } from '../rateuser/rateuser.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  userType: any;
  userId: any;
  newBookingRequest = [];
  acceptedBookingRequest = [];
  rejectedBookingRequest = [];
  cancelledEvent = [];
  allNotificationList = [];
  emptyData: boolean;
  English: boolean;
  // msgValue: boolean;
  actionBtn: boolean = false;
  constructor(
    public api: ApiService,
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    public router: Router,
    public modalCtrl: ModalController
  ) {}

  ionViewDidEnter() {
    this.api.showNotificationDot = false;
    this.storage.get('msgUnread').then((value) => {
      // console.log(this.msgValue);
      this.storage.remove('notificationArray');

      this.storage.get('user_type').then((user_type) => {
        this.userType = user_type;
        this.storage.get('user_id').then((user_id) => {
          const formData = new FormData();
          formData.append('user_id', user_id);
          this.http
            .post(
              'http://fitconnected.prometteur.in/index.php/Api/fields/notification',
              formData
            )
            .subscribe((res) => {
              console.log('NOTIFICATION RESPONSE', res);
              if (res.json().status == 1) {
                console.log('success');
              } else {
                console.log('fails');
              }
              this.storage.get('user_lang').then((lang) => {
                if (lang == 'English') {
                  this.English = true;
                } else {
                  this.English = false;
                }
              });
              this.userId = user_id;

              if (user_type == '2') {
                this.storage.get('verifiedCoach').then((isSubscribed) => {
                  if (isSubscribed) {
                    this.getNotifications();
                  } else {
                    this.emptyData = true;
                    //open Alert
                    // this.api.presentAlertSubscription();
                  }
                });
              } else {
                this.getNotifications();
              }
            });
        });
      });
    });
  }

  ngOnInit() {
    this.api.showNotificationDot = false;
  }

  async review(notification) {
    console.log('NOTIFICATION DATA IN REVIEW FNC', notification);

    const modal = await this.modalCtrl.create({
      component: RateuserPage,
      cssClass: 'ratePage',
      showBackdrop: false,
      componentProps: {
        data: notification,
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      // alert('asdf');
      this.getNotifications();
    } else {
      // this.followerList=false;
      // this.loadData();
    }
  }
  ngOnDestroy() {
    this.api.showNotificationDot = false;
  }

  getNotifications() {
    this.actionBtn = false;
    this.api.timerloading();

    this.allNotificationList = [];
    const formData = new FormData();
    formData.append('user_id', this.userId);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/notification',
        formData
      )
      .subscribe((res: any) => {
        // try {
        //   window.localStorage.setItem(
        //     'lastNotificationId',
        //     this.api.notifications[0].noti_id + ''
        //   );
        // } catch (error) {}
        if (res.json().status == 1) {
          console.log(res.json());
          var allNotification = [];
          var newARR = [];
          newARR = res.json().result;
          for (var i = 0; i < newARR.length; i++) {
            if (
              newARR[i].noti_type == 5 ||
              newARR[i].noti_type == 6 ||
              newARR[i].noti_type == 9 ||
              newARR[i].noti_type == 7
            ) {
              var lName = newARR[i].book_user_l_name.substring(0, 1);
              var name = newARR[i].book_user_f_name + ' ' + lName + '.';
              console.log(name);
              newARR[i].nameFormatted = name;
              var updateTime = moment(newARR[i].noti_create_date).format(
                'DD MMM HH:mm'
              );
              newARR[i].updateTime = updateTime;
            } else {
              var lName = newARR[i].book_user_l_name.substring(0, 1);
              var name = newARR[i].book_user_f_name + ' ' + lName + '.';
              if (!newARR[i].host_user_l_name) newARR[i].host_user_l_name = '';
              var lhostName = newARR[i].host_user_l_name.substring(0, 1);
              var hostname = newARR[i].host_user_f_name + ' ' + lhostName + '.';

              newARR[i].nameFormatted = name;
              newARR[i].hostName = hostname;
              var updateTime = moment(newARR[i].book_update_date).format(
                'DD MMM HH:mm'
              );
              newARR[i].updateTime = updateTime;
            }

            allNotification.push(newARR[i]);
          }
          this.allNotificationList = allNotification;

          if (this.allNotificationList.length !== 0) {
            this.emptyData = false;
          } else {
            this.emptyData = true;
          }

          this.api.dismissLoading();
        } else {
          this.emptyData = true;
          console.log(res.json());
          this.api.dismissLoading();
        }
      });
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
  manage() {
    this.api.Navigate('mes-evenements');
    if (this.userType === '1') {
      this.api.Navigate('mes-evenements');
    } else {
      this.api.Navigate('evenements-coach');
    }
  }

  viewOtherProfile(user) {
    console.log(user);
    console.log('my event');
    if (this.userId === user.book_user_id) {
      if (this.userType == '1') {
        this.api.Navigate('mon-profil');
      } else {
        this.api.Navigate('coacheditprofile');
      }
    } else {
      console.log('others event');
      var vc = { user_id: user.book_user_id, distance: user.distance };
      let navigationExtras = {
        queryParams: {
          special: JSON.stringify(vc),
        },
      };
      this.router.navigate(['coachviewprofile'], navigationExtras);
    }
  }

  viewProfile(user) {
    console.log(user);
    console.log('my event');
    if (this.userId === user.host_user_id) {
      if (this.userType == '1') {
        this.api.Navigate('mon-profil');
      } else {
        this.api.Navigate('coacheditprofile');
      }
    } else {
      console.log('others event');
      var vc = { user_id: user.host_user_id, distance: user.distance };
      let navigationExtras = {
        queryParams: {
          special: JSON.stringify(vc),
        },
      };
      this.router.navigate(['coachviewprofile'], navigationExtras);
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

  accept(x) {
    this.actionBtn = true;

    console.log(x);
    if (x.event_type == '1') {
      if (
        x.event_individuals_participants_min ===
        x.event_individuals_participants_max
      ) {
        if (this.English) {
          this.api.toast('Maximum limit of participant is already full.');
        } else {
          this.api.toast('La limite maximale de participants est déjà pleine.');
        }
      } else {
        this.api.loading();
        const formData = new FormData();
        formData.append('book_id', x.book_id);
        formData.append('book_status', '1');

        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/book',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              this.api.dismissLoading();
              console.log(res.json());
              this.getNotifications();
            } else {
              this.api.dismissLoading();
              this.api.toast(res.json().msg);
              console.log(res.json());
            }
          });
      }
    } else if (x.event_type == '2') {
      if (x.event_coach_participants_min === x.event_coach_participants_max) {
        this.api.toast('Maximum limit of participant is already full.');
      } else {
        this.api.loading();
        const formData = new FormData();
        formData.append('book_id', x.book_id);
        formData.append('book_status', '1');

        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/book',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              this.api.dismissLoading();
              console.log(res.json());
              this.getNotifications();
            } else {
              this.api.dismissLoading();
              this.api.toast(res.json().msg);
              console.log(res.json());
            }
          });
      }
    }
    this.api.dismissLoading();
  }
  reject(x) {
    this.api.loading();
    this.actionBtn = true;
    console.log(x);
    const formData = new FormData();
    formData.append('book_id', x.book_id);
    formData.append('book_status', '0');

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/book',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          this.api.dismissLoading();
          this.getNotifications();
        } else {
          this.api.dismissLoading();
          this.api.toast(res.json().msg);
          console.log(res.json());
        }
      });
  }
}
