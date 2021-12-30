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

@Component({
  selector: 'app-mes-evenements-crees',
  templateUrl: './mes-evenements-crees.page.html',
  styleUrls: ['./mes-evenements-crees.page.scss'],
})
export class MesEvenementsCreesPage implements OnInit {
  empty: boolean = true;
  message: any;
  totalEvents: any;
  activeEvents = [];
  udk: any;
  individual: boolean = false;
  prevEvent: boolean = false;
  coach: boolean = false;
  oldEvents = [];
  userType;
  English: boolean;
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
    public translateSevice: TranslateConfigService,
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
          this.coach = true;
        }
        this.udk = user_id;
        const formData = new FormData();
        formData.append('user_id', this.udk);

        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/fields/event',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log(res.json());
              this.totalEvents = res.json().result.length;
              console.log(this.totalEvents + 'hey here');
              this.empty = false;

              var allEvents = [];

              allEvents = res.json().result;
              var today = new Date();
              var format = moment(today).format('YYYY-MM-DD');
              for (var i = 0; i < allEvents.length; i++) {
                if (format <= allEvents[i].event_individuals_date) {
                  var lastName = allEvents[i].user_l_name;
                  var l_name = lastName.substring(0, 1);
                  allEvents[i].last_name = l_name;
                  this.activeEvents.push(allEvents[i]);
                } else {
                  this.oldEvents.push(allEvents[i]);
                  console.log(this.oldEvents);
                  if (this.oldEvents.length === 0) {
                    this.prevEvent = false;
                  } else {
                    this.prevEvent = true;
                  }
                }
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
      });
    });
    // http://fitconnected.prometteur.in/index.php/Api/fields/event
  }

  coming() {
    console.log('clicked');
    this.api.Navigate('mes-evenements');
  }

  participants() {
    console.log('clicked');
    this.api.Navigate('mes-evenements-participes');
  }

  deleteEvent(event) {
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
        if (res.json().msg == 'Records Deleted Successfully') {
          console.log(res);
          if (this.English) {
            var msg = 'Event deleted';
          } else {
            var msg = 'événement supprimé';
          }

          this.api.toast(msg);
          this.loadData();
        } else {
          console.log(res + 'Error');
        }
      });
  }

  async presentAlertConfirm(event) {
    if (this.English) {
      const alert = await this.alertController.create({
        cssClass: 'secondary',
        message: 'Are you sure you want to delete this event?',
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

  loadData() {
    this.activeEvents = [];
    this.totalEvents = '';
    const formData = new FormData();
    formData.append('user_id', this.udk);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/event',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          console.log(res.json().result.length);
          this.totalEvents = res.json().result.length;
          this.activeEvents = res.json().result;
          this.empty = false;
        } else {
          this.totalEvents = res.json().result.length;
          console.log(res.json());
          this.message = res.json().msg;
          this.empty = true;
        }
      });
  }

  events() {
    this.api.Navigate('creer-evenement');
  }

  manage() {
    this.api.Navigate('mes-evenements');
  }

  rankingDetails() {
    this.api.Navigate('ranking');
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
          componentProps: { eventId: eventId },
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
          componentProps: { eventId: eventId },
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
}
