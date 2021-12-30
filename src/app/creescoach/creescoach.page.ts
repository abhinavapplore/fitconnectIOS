import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

import { ParticipantsPage } from '../participants/participants.page';
import { AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creescoach',
  templateUrl: './creescoach.page.html',
  styleUrls: ['./creescoach.page.scss'],
})
export class CreescoachPage implements OnInit {
  empty: boolean = true;
  message: any;
  totalEvents: any;
  activeEvents = [];
  oldEvents = [];
  udk: any;
  individual: boolean = false;
  prevEvent: boolean = false;
  coach: boolean = false;
  userType;
  English;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue: boolean;

  constructor(
    public api: ApiService,
    public storage: Storage,
    public alertController: AlertController,
    public http: Http,
    public httpClient: HttpClient,
    public modalCtrl: ModalController,
    public router: Router
  ) {
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
  }

  participated() {
    this.api.Navigate('coach-participated-events');
  }

  ngOnInit() {
    this.storage.get('user_id').then((user_id) => {
      this.udk = user_id;
      this.storage.get('user_type').then((user_type) => {
        this.storage.get('user_lang').then((lang) => {
          if (lang == 'English') {
            this.English = true;
          } else {
            this.English = false;
          }
        });
        this.userType = user_type;
        if (user_type === '1') {
          this.individual = true;
        } else if (user_type === '2') {
          // this.storage.get('verifiedCoach').then((isSubscribed)=>{
          // this.coach=true;
          // if(isSubscribed){
          this.getEvents();
        } else {
          //open modal
          // this.api.presentAlertSubscription();
          if (this.English) {
            this.message = '0 Events Created';
          } else {
            this.message = '0 événements créés';
          }

          this.empty = true;
          // }
          // });
        }
      });
    });
    // http://fitconnected.prometteur.in/index.php/Api/fields/event
  }

  getEvents() {
    this.api.loading();
    this.activeEvents = [];
    const formData = new FormData();
    formData.append('user_id', this.udk);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/past_event',
        formData
      )
      .subscribe((res) => {
        // this.api.dismissLoading();
        if (res.json().status == 1) {
          console.log(res.json());
          this.totalEvents = res.json().result.length;

          this.empty = false;
          var allEvents = [];

          this.oldEvents = res.json().result;
          if (this.oldEvents.length === 0) {
            this.empty = true;
          } else {
            this.prevEvent = true;
          }

          this.api.dismissLoading();
        } else {
          this.totalEvents = res.json().result.length;
          console.log(res.json());
          this.message = res.json().msg;
          this.empty = true;
          this.api.dismissLoading();
        }
      });
  }

  coming() {
    console.log('clicked');

    this.api.Navigate('evenements-coach');
  }

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  deleteEvent(event) {
    this.api.loading();
    console.log(event);

    const formData = new FormData();
    formData.append('event_id', event.event_id);
    formData.append('event_type', event.event_type);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/del/event',
        formData
      )
      .subscribe((res) => {
        this.api.dismissLoading();
        if (res.json().msg == 'Records Deleted Successfully') {
          console.log(res);

          this.getEvents();
          if (this.English) {
            var msg = 'événement supprimé';
          } else {
            var msg = 'Deleted event';
          }

          this.api.toast(msg);
        } else {
          console.log(res);
        }
      });
  }

  async presentAlertConfirm(event) {
    if (this.English) {
      const alert = await this.alertController.create({
        cssClass: 'secondary',
        message: 'Are you sure you want to delete this event? ?',
        buttons: [
          {
            text: 'YES',
            handler: () => {
              console.log('Confirm Okay');
              this.deleteEvent(event);
            },
          },
          {
            text: 'NO',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
        ],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        cssClass: 'secondary',
        message: 'Es-tu sûr(e) de vouloir supprimer cet événement ?',
        buttons: [
          {
            text: 'OUI',
            handler: () => {
              console.log('Confirm Okay');
              this.deleteEvent(event);
            },
          },
          {
            text: 'NON',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
        ],
      });

      await alert.present();
    }
  }

  selectItem(item) {
    console.log(item);

    if (this.udk == item.user_id) {
      if (this.userType == '1') {
        this.api.Navigate('mon-profil');
      } else {
        this.api.Navigate('coacheditprofile');
      }
    } else {
      var vc = {
        user_id: item.user_id,
      };

      let navigationExtras = {
        queryParams: {
          special: JSON.stringify(vc),
        },
      };

      this.router.navigate(['coachviewprofile'], navigationExtras);
    }
  }

  async showParticipant(get) {
    if (get.event_type === '1') {
      if (get.event_individuals_participants_min === '0') {
        return;
      } else {
        var eventId = get.event_id;
        const modal = await this.modalCtrl.create({
          component: ParticipantsPage,
          cssClass: 'participantPage',
          componentProps: {
            eventId: eventId,
          },
        });
        await modal.present();

        const { data } = await modal.onWillDismiss();
        if (data) {
          // this.excludeTracks = data;
          // this.updateSchedule();
          this.selectItem(data);
        }
      }
    } else if (get.event_type === '2') {
      if (get.event_coach_participants_min === '0') {
        return;
      } else {
        var eventId = get.event_id;
        const modal = await this.modalCtrl.create({
          component: ParticipantsPage,
          cssClass: 'participantPage',
          componentProps: {
            eventId: eventId,
          },
        });
        await modal.present();

        const { data } = await modal.onWillDismiss();
        if (data) {
          // this.excludeTracks = data;
          // this.updateSchedule();
          this.selectItem(data);
        }
      }
    }
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
}
