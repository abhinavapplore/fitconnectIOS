import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

import { ApiService } from '../api.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/firestore';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { RateuserPage } from '../rateuser/rateuser.page';
import {
  NavController,
  ActionSheetController,
  ToastController,
  Platform,
  LoadingController,
  ModalController,
} from '@ionic/angular';

@Component({
  selector: 'app-watchreview',
  templateUrl: './watchreview.page.html',
  styleUrls: ['./watchreview.page.scss'],
})
export class WatchreviewPage implements OnInit {
  host_id: any;
  name: any;
  practice: any;
  sportsPlayed: any;
  userDescription: any;
  gender: any;
  dob: any;
  dataLoaded: boolean = false;
  age: any;
  userBoolean: boolean = false;
  Avatar: boolean = true;
  coachType: boolean;
  userType: boolean;
  imgUrl: any;
  followers: any;
  following: any;
  uid: any;
  followHost: boolean;
  pricePerPerson: any;
  pricePerHour: any;
  userFullname: any;
  disponsibility = [];
  userImage: any;
  user_Type;
  distance;
  lat;
  long;
  blockedHost: boolean;
  English: boolean;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue;
  userReviews: any[] = [];
  review_ranking: any = {};
  total_review: any;
  userRanking;
  userRating;
  userRank: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public api: ApiService,
    public http: Http,
    public httpClient: HttpClient,
    public storage: Storage,
    public af: AngularFireAuth,
    public fs: AngularFirestore,
    private geolocation: Geolocation,
    public modalCtrl: ModalController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        var details = JSON.parse(params.special);

        this.host_id = details.hostId;
        this.distance = details.distance;
        console.log(this.distance);
        console.log(details);
        console.log(this.host_id + 'hostid');
        this.storage.get('user_lang').then((lang) => {
          if (lang == 'English') {
            this.English = true;
          } else {
            this.English = false;
          }
        });
      }
    });
  }

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
      this.storage.get('user_f_name').then((user_f_name) => {
        this.storage.get('user_l_name').then((user_l_name) => {
          this.storage.get('user_img').then((user_img) => {
            this.storage.get('user_type').then((user_type) => {
              this.storage.get('user_lang').then((lang) => {
                if (lang == 'English') {
                  this.English = true;
                } else {
                  this.English = false;
                }
              });
              console.log(user_type);
              this.geolocation.getCurrentPosition().then((resp) => {
                // resp.coords.latitude
                this.lat = resp.coords.latitude;
                // resp.coords.longitude
                this.long = resp.coords.longitude;

                console.log(typeof user_type);
                this.userImage = user_img;
                this.user_Type = user_type;

                var lname = user_l_name.substring(0, 1);
                this.userFullname = user_f_name + ' ' + lname + '.';
                this.uid = user_id;
                const formData = new FormData();
                formData.append('user_id', this.uid);
                formData.append('user_host_id', this.host_id);
                formData.append('user_lat', this.lat);
                formData.append('user_long', this.long);
                this.http
                  .post(
                    'http://fitconnected.prometteur.in/index.php/Api/fields/user',
                    formData
                  )
                  .subscribe((res) => {
                    if (res.json().status == 1) {
                      console.log(res.json());
                      if (res.json().result[0].user_type === '1') {
                        this.userType = true;
                        this.userBoolean = res.json().result[0].booked_event;
                        this.userReviews = res.json().user_review_list;
                        this.review_ranking = res.json().review_ranking;
                        this.userRating = res.json().avg_rating;
                        this.total_review = res.json().total_review;
                        // var total1= this.review_ranking.one_star;
                        // var total5 = this.review_ranking.five_star*5

                        // var total4=this.review_ranking.four_star*4;
                        // var total3=this.review_ranking.three_star*3;
                        // var total2=this.review_ranking.two_star*2;
                        // var total =total5+total4+total3+total2+total1;

                        // this.userRating = total/5;

                        var lastName = res.json().result[0].user_l_name;
                        var l_name = lastName.substring(0, 1);
                        this.name =
                          res.json().result[0].user_f_name + ' ' + l_name + '.';

                        this.imgUrl = res.json().result[0].user_img;
                        if (
                          this.imgUrl === '' ||
                          this.imgUrl === undefined ||
                          this.imgUrl === null
                        ) {
                          this.Avatar = false;
                        } else {
                          this.Avatar = true;
                        }
                        this.practice =
                          res.json().result[0].user_question1_response;
                        this.sportsPlayed =
                          res.json().result[0].user_question2_response;
                        this.userDescription =
                          res.json().result[0].user_description1;
                        //  this.disponsibility=JSON.parse(res.json().result[0].user_question3_response);
                        this.followers = res.json().result[0].followers;
                        this.following = res.json().result[0].following;
                        this.dob = res.json().result[0].user_dob;
                        var date = this.dob.split('T');
                        this.distance = res.json().result[0].distance;
                        var follow_status = res.json().result[0].follow_status;
                        //  if(this.user_Type=="1"){
                        if (follow_status == '0') {
                          this.followHost = false;
                        } else if (follow_status == '1') {
                          this.followHost = true;
                        } else {
                          this.blockedHost = true;
                          console.log('this host is blocked by user');
                        }
                        //  }

                        var conv = moment(date[0], 'YYYY-MM-DD').fromNow();
                        // console.log(this.age)
                        var convert = conv.split('years');
                        this.age = convert[0];
                        var g = res.json().result[0].user_gender;
                        if (g == '1' && this.English) {
                          this.gender = 'Man';
                        } else if (g == '1' && !this.English) {
                          this.gender = 'Masculin';
                        } else if (g == '2' && this.English) {
                          this.gender = 'Women';
                        } else if (g == '2' && !this.English) {
                          this.gender = 'Féminin';
                        }
                        this.api.dismissLoading();
                      } else if (res.json().result[0].user_type === '2') {
                        this.coachType = true;
                        this.userBoolean = res.json().result[0].booked_event;
                        this.userReviews = res.json().user_review_list;
                        this.review_ranking = res.json().review_ranking;
                        this.userRating = res.json().avg_rating;
                        this.total_review = res.json().total_review;
                        this.userRanking = res.json().userRanking;
                        this.userRank = res.json().user_rank;

                        var lastName = res.json().result[0].user_l_name;
                        var l_name = lastName.substring(0, 1);
                        this.name =
                          res.json().result[0].user_f_name + ' ' + l_name + '.';
                        this.imgUrl = res.json().result[0].user_img;
                        if (
                          this.imgUrl === '' ||
                          this.imgUrl === undefined ||
                          this.imgUrl === null
                        ) {
                          this.Avatar = false;
                        } else {
                          this.Avatar = true;
                        }
                        this.pricePerHour =
                          res.json().result[0].user_price_hour;
                        this.pricePerPerson =
                          res.json().result[0].user_price_per_person;
                        console.log(this.pricePerHour);
                        console.log(this.pricePerPerson);
                        this.sportsPlayed =
                          res.json().result[0].user_description2;
                        this.userDescription =
                          res.json().result[0].user_description1;
                        this.followers = res.json().result[0].followers;
                        this.following = res.json().result[0].following;
                        this.dob = res.json().result[0].user_dob;
                        this.distance = res.json().result[0].distance;
                        var date = this.dob.split('T');
                        var follow_status = res.json().result[0].follow_status;
                        //  if(this.user_Type=="1"){
                        if (follow_status == '0') {
                          this.followHost = false;
                        } else if (follow_status == '1') {
                          this.followHost = true;
                        } else {
                          this.blockedHost = true;
                          console.log('this host is blocked by user');
                        }
                        //  }
                        var conv = moment(date[0], 'YYYY-MM-DD').fromNow();
                        // console.log(this.age)
                        var convert = conv.split('years');
                        this.age = convert[0];
                        var g = res.json().result[0].user_gender;
                        if (g == '1' && this.English) {
                          this.gender = 'Man';
                        } else if (g == '1' && !this.English) {
                          this.gender = 'Masculin';
                        } else if (g == '2' && this.English) {
                          this.gender = 'Women';
                        } else if (g == '2' && !this.English) {
                          this.gender = 'Féminin';
                        }
                        this.api.dismissLoading();
                      }
                      this.dataLoaded = true;
                    } else {
                      console.log(res.json());
                      this.api.dismissLoading();
                      this.api.toast('Try again in some time');
                      console.log('Server Error');
                    }
                  });
              });
            });
          });
        });
      });
    });
  }

  follow() {
    if (this.blockedHost === true) {
      this.unfollow('block');
    } else {
      const formData = new FormData();
      formData.append('fol_user_id', this.uid);
      formData.append('fol_host_id', this.host_id);
      formData.append('fol_status', '1');
      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/madd/user_follow',
          formData
        )
        .subscribe((res) => {
          if (res.json().status == 1) {
            console.log(res.json());
            if (this.English) {
              var msg = 'You started Following ' + this.name;
            } else {
              var msg = 'Vous avez commencé à suivre ' + this.name;
            }

            this.loadData();
            this.api.toast(msg);
          } else {
            console.log(res.json());
          }
        });
    }
  }

  unfollow(block?) {
    if (block == 'block') {
      if (this.English) {
        var premsg = 'You Unblocked';
      } else {
        var premsg = 'Vous avez débloqué';
      }
    } else {
      if (this.English) {
        var premsg = 'You Unfollowed';
      } else {
        var premsg = 'Vous êtes désabonné';
      }
    }
    this.blockedHost = false;
    const formData = new FormData();
    formData.append('fol_user_id', this.uid);
    formData.append('fol_host_id', this.host_id);
    formData.append('fol_status', '0');
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/user_follow',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          var msg = premsg + ' ' + this.name;
          this.loadData();
          this.api.toast(msg);
        } else {
          console.log(res.json());
        }
      });
  }

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  block() {
    this.followHost = false;
    const formData = new FormData();
    formData.append('fol_user_id', this.uid);
    formData.append('fol_host_id', this.host_id);
    formData.append('fol_status', '2');
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/user_follow',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          if (this.English) {
            var msg = 'You have blocked ' + this.name;
          } else {
            var msg = 'Vous avez bloqué ' + this.name;
          }

          this.loadData();
          this.api.toast(msg);
        } else {
          console.log(res.json());
        }
      });
  }

  loadData() {
    const formData = new FormData();
    formData.append('user_id', this.uid);
    formData.append('user_host_id', this.host_id);
    formData.append('user_lat', this.lat);
    formData.append('user_long', this.long);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/user',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          if (res.json().result[0].user_type === '1') {
            this.userType = true;
            var lastName = res.json().result[0].user_l_name;
            var l_name = lastName.substring(0, 1);
            this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';

            this.imgUrl = res.json().result[0].user_img;
            if (
              this.imgUrl === '' ||
              this.imgUrl === undefined ||
              this.imgUrl === null
            ) {
              this.Avatar = false;
            } else {
              this.Avatar = true;
            }
            this.practice = res.json().result[0].user_question1_response;
            this.sportsPlayed = res.json().result[0].user_question2_response;
            this.userDescription = res.json().result[0].user_description1;
            //  this.disponsibility=JSON.parse(res.json().result[0].user_question3_response);
            this.followers = res.json().result[0].followers;
            this.following = res.json().result[0].following;
            this.dob = res.json().result[0].user_dob;
            var date = this.dob.split('T');
            this.distance = res.json().result[0].distance;
            var follow_status = res.json().result[0].follow_status;

            if (follow_status == '0') {
              this.followHost = false;
            } else if (follow_status == '1') {
              this.followHost = true;
            } else {
              this.blockedHost = true;
              console.log('this host is blocked by user');
            }

            var conv = moment(date[0], 'YYYY-MM-DD').fromNow();
            // console.log(this.age)
            var convert = conv.split('years');
            this.age = convert[0];
            var g = res.json().result[0].user_gender;
            if (g == '1' && this.English) {
              this.gender = 'Man';
            } else if (g == '1' && !this.English) {
              this.gender = 'Masculin';
            } else if (g == '2' && this.English) {
              this.gender = 'Women';
            } else if (g == '2' && !this.English) {
              this.gender = 'Féminin';
            }
            this.api.dismissLoading();
          } else if (res.json().result[0].user_type === '2') {
            this.coachType = true;
            var lastName = res.json().result[0].user_l_name;
            var l_name = lastName.substring(0, 1);
            this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
            this.imgUrl = res.json().result[0].user_img;
            if (
              this.imgUrl === '' ||
              this.imgUrl === undefined ||
              this.imgUrl === null
            ) {
              this.Avatar = false;
            } else {
              this.Avatar = true;
            }
            this.pricePerHour = res.json().result[0].user_price_hour;
            this.pricePerPerson = res.json().result[0].user_price_per_person;
            console.log(this.pricePerHour);
            console.log(this.pricePerPerson);
            this.sportsPlayed = res.json().result[0].user_description2;
            this.userDescription = res.json().result[0].user_description1;
            this.followers = res.json().result[0].followers;
            this.following = res.json().result[0].following;
            this.dob = res.json().result[0].user_dob;
            this.distance = res.json().result[0].distance;
            var date = this.dob.split('T');
            var follow_status = res.json().result[0].follow_status;

            if (follow_status == '0') {
              this.followHost = false;
            } else if (follow_status == '1') {
              this.followHost = true;
            } else {
              this.blockedHost = true;
              console.log('this host is blocked by user');
            }

            var conv = moment(date[0], 'YYYY-MM-DD').fromNow();
            // console.log(this.age)
            var convert = conv.split('years');
            this.age = convert[0];
            var g = res.json().result[0].user_gender;
            if (g == '1' && this.English) {
              this.gender = 'Man';
            } else if (g == '1' && !this.English) {
              this.gender = 'Masculin';
            } else if (g == '2' && this.English) {
              this.gender = 'Women';
            } else if (g == '2' && !this.English) {
              this.gender = 'Féminin';
            }
            this.api.dismissLoading();
          }
        } else {
          console.log(res.json());
          this.api.dismissLoading();
          if (this.English) {
            this.api.toast('Try again in sometime');
          } else {
            this.api.toast('Réessayez dans un moment');
          }

          console.log('Server Error');
        }
      });
  }

  chat() {
    console.log('clicked');
    this.fs
      .collection('friends')
      .doc(this.uid)
      .collection('chats')
      .doc(this.host_id)
      .set(
        {
          recieverName: this.name,
          recieverId: this.host_id,
          recieverImage: this.imgUrl,
          senderId: this.uid,
          senderName: this.userFullname,
          senderImage: this.userImage,
          Timestamp: firebase.FieldValue,
        },
        { merge: true }
      );

    this.fs
      .collection('friends')
      .doc(this.host_id)
      .collection('chats')
      .doc(this.uid)
      .set(
        {
          senderName: this.name,
          senderId: this.host_id,
          senderImage: this.imgUrl,
          recieverId: this.uid,
          recieverName: this.userFullname,
          recieverImage: this.userImage,
          Timestamp: firebase.FieldValue,
        },
        { merge: true }
      );
    var vc = {
      recieverId: this.host_id,
      senderId: this.uid,
      recieverName: this.name,
      recieverImg: this.imgUrl,
    };

    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };
    this.router.navigate(['conversation'], navigationExtras);
  }

  activity() {
    var vc = {
      hostId: this.host_id,
      userId: this.uid,
      distance: this.distance,
    };

    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };
    this.router.navigate(['profil-activite'], navigationExtras);
  }

  profile() {
    var vc = {
      user_id: this.host_id,
    };

    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };

    this.router.navigate(['coachviewprofile'], navigationExtras);
  }

  async openRating() {
    const modal = await this.modalCtrl.create({
      component: RateuserPage,
      showBackdrop: false,
      cssClass: 'ratePage',
      componentProps: {
        userId: this.uid,
        hostId: this.host_id,
        pageTitle: 'Rate',
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
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

  back() {
    this.api.Navigate('map-sportifs');
  }

  getReviewPercentage(reviewRanking: number): number {
    if (reviewRanking !== 0) {
      console.log(reviewRanking / this.total_review);

      return reviewRanking / this.total_review;
    } else {
      return reviewRanking;
    }
  }
}
