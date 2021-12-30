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
  selector: 'app-evenements-coach',
  templateUrl: './evenements-coach.page.html',
  styleUrls: ['./evenements-coach.page.scss'],
})
export class EvenementsCoachPage implements OnInit {
  eventId = undefined;

  empty: boolean;
  udk: any;
  totalEvents: any;
  activeEvents = [];
  message: any;
  individual: boolean = false;
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
    public translateSevice: TranslateConfigService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  exitEvent(event) {
    let formData = new FormData();
    formData.append('book_id', event.book_id);
    formData.append('book_status', '2');
    this.api.loading();
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/mAdd/cancle_booked_event',
        formData
      )

      .subscribe((res) => {
        console.log('DELETE USER RESPONS', res);

        this.api.dismissLoading();
        this.getEvents();
        if (res.json().status == 1) {
        } else {
          // this.creatform();
          //  this.api.toast(res.msg)
        }
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
      } else {
        this.English = false;
      }
    });

    this.activeEvents = [];
    // this.api.loading();
    this.storage.get('user_id').then((user_id) => {
      this.udk = user_id;
      console.log('user_id', user_id);

      this.storage.get('user_type').then((user_type) => {
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
          this.empty = true;
          //   }
          // });
        }
      });
    });
  }

  ngOnInit() {}

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  getEvents() {
    this.api.loading();
    this.activeEvents = [];
    const formData = new FormData();
    formData.append('user_id', this.udk);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/upcoming_event',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          var allEvents = [];

          allEvents = res.json().result;
          var today = new Date();
          var format = moment(today).format('YYYY-MM-DD');
          this.activeEvents = res.json().result;
          this.totalEvents = this.activeEvents.length;

          // for(var i=0;i<allEvents.length;i++){
          //   if(format<=allEvents[i].event_coach_date){
          //     var lastName=allEvents[i].user_l_name;
          //     var l_name = lastName.substring(0, 1);
          //     allEvents[i].last_name=l_name;
          //     this.activeEvents.push(allEvents[i]);

          //   }else{
          //     console.log("not event");

          //   }
          //   console.log(this.activeEvents);
          //   this.totalEvents=this.activeEvents.length;
          // }
          this.empty = false;
          this.api.dismissLoading();
        } else {
          console.log(res.json());
          this.message = res.json().msg;

          this.empty = true;
          this.api.dismissLoading();
        }
      });
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

  home() {
    this.api.Navigate('evenementcoachvue');
  }
  created() {
    this.api.Navigate('creescoach');
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
  participated() {
    this.api.Navigate('coach-participated-events');
  }

  edit(event) {
    console.log(event);
    // this.
    //   this.api.Navigate('evenementcoach');
    // this.router.navigate(['coachviewprofile'], navigationExtras);

    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(event),
      },
    };
    this.router.navigate(['evenementcoach'], navigationExtras);
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
            var msg = 'Deleted event';
          } else {
            var msg = 'événement supprimé';
          }

          this.api.toast(msg);
        } else {
          console.log(res);
        }
      });
  }
}
