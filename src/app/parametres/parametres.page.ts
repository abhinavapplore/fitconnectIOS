import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {
  user_Type;
  userId;
  userArray = [];
  allNoti: boolean;
  followNoti: boolean;
  eventCreateNoti: boolean;
  Selected: boolean = false;
  lang: any;
  English: boolean;
  langNumber;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue: boolean;
  constructor(
    public api: ApiService,
    public storage: Storage,
    public router: Router,
    public http: HttpClient,
    public apiService: ApiService,
    public translateSevice: TranslateConfigService
  ) {}

  ngOnInit() {
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
        this.langNumber = '1';
        this.lang = 'English';
        this.English = false;
      } else {
        this.langNumber = '2';
        this.lang = 'French';
        this.English = true;
      }
      this.api.loading();
      this.storage.get('user_type').then((user_type) => {
        this.storage.get('user_id').then((user_id) => {
          this.user_Type = user_type;
          this.userId = user_id;
          const formData = new FormData();
          formData.append('user_id', this.userId);
          this.http
            .post<any>(
              'http://fitconnected.prometteur.in/index.php/Api/fields/user',
              formData
            )
            .subscribe((res) => {
              console.log(res);
              this.userArray = res.result;
              if (this.userArray[0].user_receive_all_notification == 0) {
                this.allNoti = false;
              } else {
                this.allNoti = true;
              }
              if (this.userArray[0].user_receive_new_event_notification == 0) {
                this.eventCreateNoti = false;
              } else {
                this.eventCreateNoti = true;
              }
              if (this.userArray[0].user_receive_follow_notification == 0) {
                this.followNoti = false;
              } else {
                this.followNoti = true;
              }
              this.api.dismissLoading();
            });
        });
      });
    });
  }

  select(lang) {
    console.log(lang);

    this.translateSevice.setLanguage(lang);
    this.Selected = false;
    if (lang === 'en') {
      this.English = false;
      this.lang = 'English';
      this.langNumber = '1';
    } else if (lang === 'fr') {
      this.English = true;
      this.lang = 'Français';
      this.langNumber = '2';
    }
    const formData = new FormData();
    formData.append('user_id', this.userId);
    formData.append('user_language', this.langNumber);
    this.http
      .post<any>(
        'http://fitconnected.prometteur.in/index.php/Api/mAdd/user',
        formData
      )
      .subscribe((res) => {
        if (res.status == '1') {
          console.log(res);
          this.api.toast(res.msg);
        } else {
          this.api.toast(res.msg);
        }
      });
  }

  unOption() {
    this.Selected = false;
  }

  openOption() {
    this.Selected = true;
  }

  allNotification($event) {
    console.log($event);
    if ($event.detail.checked) {
      var setting = '1';
    } else {
      var setting = '0';
    }
    const formData = new FormData();
    formData.append('user_id', this.userId);
    formData.append('user_receive_all_notification', setting);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/mAdd/notification_setting',
        formData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  eventCreateNotification($event) {
    console.log($event);
    if ($event.detail.checked) {
      var setting = '1';
    } else {
      var setting = '0';
    }
    const formData = new FormData();
    formData.append('user_id', this.userId);
    formData.append('user_receive_new_event_notification', setting);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/mAdd/notification_setting',
        formData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  followNotification($event) {
    console.log($event);
    if ($event.detail.checked) {
      var setting = '1';
    } else {
      var setting = '0';
    }
    const formData = new FormData();
    formData.append('user_id', this.userId);
    formData.append('user_receive_follow_notification', setting);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/mAdd/notification_setting',
        formData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  events() {
    if (this.user_Type === '1') {
      this.api.Navigate('creer-evenement');
    } else {
      this.api.Navigate('evenementcoachvue');
    }
  }
  manage() {
    if (this.user_Type === '1') {
      this.api.Navigate('mes-evenements');
    } else {
      this.api.Navigate('evenements-coach');
    }
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
