import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-rateuser',
  templateUrl: './rateuser.page.html',
  styleUrls: ['./rateuser.page.scss'],
})
export class RateuserPage implements OnInit {
  uid;
  rate;
  review;
  language;
  // @Input('userId') userId;
  // @Input('host_user_id') hostId;
  // @Input('pageTitle') pageTitle;
  @Input('data') data;

  constructor(
    public modalcontroller: ModalController,
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    public api: ApiService
  ) {}

  ngOnInit() {
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_lang').then(async (lang) => {
        this.uid = user_id;
        this.language = lang;
      });
    });
    console.log('DATA ON RATE USER PAGE', this.data);
    // alert('hostId' + this.data.host_user_id);
  }

  dismiss() {
    this.modalcontroller.dismiss(true);
  }

  sendRating() {
    if (!this.rate) {
      if (this.language == 'English') {
        this.api.toast('Please add rating.');
      } else {
        this.api.toast('Veuillez ajouter une note.');
      }
    } else if (!this.review) {
      if (this.language == 'English') {
        this.api.toast('Please add review.');
      } else {
        this.api.toast('Veuillez ajouter un commentaire.');
      }
    } else {
      const formData = new FormData();

      formData.append('urate_create_by', this.uid);
      formData.append('urate_review', this.review);
      formData.append('urate_rating', this.rate);
      formData.append('urate_user_id', this.data.host_user_id);
      formData.append('urate_event_id', this.data.event_id);
      formData.append('urate_noti_id', this.data.noti_id);
      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/mAdd/user_rating',
          formData
        )
        .subscribe((res) => {
          if (res.json().status == 1) {
            this.api.toast(res.json().msg);
            this.dismiss();
          } else {
            this.api.toast(res.json().msg);
            this.dismiss();
          }
        });
    }
  }
}
