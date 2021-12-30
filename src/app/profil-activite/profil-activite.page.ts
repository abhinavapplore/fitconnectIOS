import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { ApiService } from '../api.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/firestore';
import {
  NavController,
  ActionSheetController,
  ToastController,
  Platform,
  LoadingController,
  ModalController,
  AlertController,
} from '@ionic/angular';
import { TranslateConfigService } from '../translate-config.service';
import { FollowlistPage } from '../followlist/followlist.page';

@Component({
  selector: 'app-profil-activite',
  templateUrl: './profil-activite.page.html',
  styleUrls: ['./profil-activite.page.scss'],
})
export class ProfilActivitePage implements OnInit {
  host_id: any;
  totalEvents: any;
  practice: any;
  sportsPlayed: any;
  userDescription: any;
  gender: any;
  dob: any;
  age: any;
  Avatar: boolean = true;
  coachType: boolean = false;
  userType: boolean = false;
  imgUrl: any;
  followers: any;
  following: any;
  uid: any;
  followHost: boolean = false;
  sharableURI;
  name: any;
  empty: boolean = false;
  message: any;
  activeEvent = [];
  pastEvent = [];
  user_type: any;
  userFullname;
  confirmName;
  distance;
  lat;
  long;
  blockedHost: boolean;
  data: any = {};
  English: boolean;
  notificationPresent: boolean = false;
  notificationArray;
  userdiscription;
  userTitle;
  userLocation;
  userDate;

  msgValue: boolean;
  followerList: boolean;
  followingList: boolean;
  userRanking;
  total_review;
  userRating;
  userRank: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public api: ApiService,
    private socialSharing: SocialSharing,
    public screenshot: Screenshot,
    public actionSheetController: ActionSheetController,
    public http: Http,
    public httpClient: HttpClient,
    public storage: Storage,
    public translateSevice: TranslateConfigService,
    public alertController: AlertController,
    public geolocation: Geolocation,
    public modalCtrl: ModalController,
    public platform: Platform,
    public af: AngularFireAuth,
    public fs: AngularFirestore
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        var details = JSON.parse(params.special);

        this.host_id = details.hostId;
        this.uid = details.userId;
        this.distance = details.distance;
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
    this.storage.get('user_type').then((user_type) => {
      this.storage.get('user_f_name').then((user_f_name) => {
        this.storage.get('user_l_name').then((user_l_name) => {
          this.geolocation.getCurrentPosition().then((resp) => {
            this.storage.get('user_lang').then((lang) => {
              if (lang == 'English') {
                this.English = true;
              } else {
                this.English = false;
              }
            });
            // resp.coords.latitude
            this.lat = resp.coords.latitude;
            // resp.coords.longitude
            this.long = resp.coords.longitude;
            this.user_type = user_type;
            console.log('below is user type');
            console.log(this.user_type);
            if (this.user_type == '2') {
              this.followHost = true;
            }
            console.log(typeof this.user_type);
            var lname = user_l_name.substring(0, 1);
            this.userFullname = user_f_name + ' ' + lname + '.';

            this.api.loading();
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

                    this.userRating = res.json().avg_rating;
                    this.total_review = res.json().total_review;
                    this.userRanking = res.json().userRanking;
                    this.practice =
                      res.json().result[0].user_question1_response;
                    this.sportsPlayed =
                      res.json().result[0].user_question2_response;
                    this.userDescription =
                      res.json().result[0].user_description1;
                    this.followers = res.json().result[0].followers;
                    this.following = res.json().result[0].following;
                    this.dob = res.json().result[0].user_dob;
                    var date = this.dob.split('T');
                    var follow_status = res.json().result[0].follow_status;
                    this.distance = res.json().result[0].follow_status;
                    if (this.user_type == '1') {
                      if (follow_status == '0') {
                        this.followHost = false;
                      } else if (follow_status == '1') {
                        this.followHost = true;
                      } else {
                        this.blockedHost = true;
                        console.log('this host is blocked by user');
                      }
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
                    this.userRating = res.json().avg_rating;
                    this.coachType = true;
                    var lastName = res.json().result[0].user_l_name;
                    var l_name = lastName.substring(0, 1);
                    this.name =
                      res.json().result[0].user_f_name + ' ' + l_name + '.';
                    this.imgUrl = res.json().result[0].user_img;
                    this.userRank = res.json().user_rank;

                    if (
                      this.imgUrl === '' ||
                      this.imgUrl === undefined ||
                      this.imgUrl === null
                    ) {
                      this.Avatar = false;
                    } else {
                      this.Avatar = true;
                    }

                    this.sportsPlayed = res.json().result[0].user_description2;
                    this.userDescription =
                      res.json().result[0].user_description1;
                    this.followers = res.json().result[0].followers;
                    this.following = res.json().result[0].following;
                    this.dob = res.json().result[0].user_dob;
                    var date = this.dob.split('T');
                    var follow_status = res.json().result[0].follow_status;
                    this.distance = res.json().result[0].follow_status;
                    if (this.user_type == '1') {
                      if (follow_status == '0') {
                        this.followHost = false;
                      } else if (follow_status == '1') {
                        this.followHost = true;
                      } else {
                        this.blockedHost = true;
                        console.log('this host is blocked by user');
                      }
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

                  const formData = new FormData();
                  formData.append('host_id', this.host_id);
                  formData.append('book_user_id', this.uid);

                  this.http
                    .post(
                      'http://fitconnected.prometteur.in/index.php/Api/fields/upcoming_event',
                      formData
                    )
                    .subscribe((res) => {
                      if (res.json().status == 1) {
                        console.log(res.json());
                        this.totalEvents = res.json().result.length;

                        this.empty = false;

                        var allEvent = [];

                        this.activeEvent = res.json().result;
                        //       var today= new Date();
                        //  var format = moment(today).format("YYYY-MM-DD");
                        //  if(this.userType){
                        //   for(var i=0;i<allEvent.length;i++){
                        //     if(format<allEvent[i].event_individuals_date){
                        //       console.log("not event");
                        //       this.activeEvent.push(allEvent[i]);
                        //     }else{
                        //       this.pastEvent.push(allEvent[i]);

                        //     }
                        //   }
                        //  }else if(this.coachType){
                        //   for(var i=0;i<allEvent.length;i++){
                        //     if(format<allEvent[i].event_coach_date){
                        //       console.log("not event");
                        //       this.activeEvent.push(allEvent[i]);
                        //     }else{
                        //       this.pastEvent.push(allEvent[i]);

                        //     }
                        //   }
                        //  }
                        this.api.dismissLoading();
                        console.log('hey');
                        console.log(this.activeEvent);
                      } else {
                        console.log(res.json());
                        this.message = res.json().msg;
                        this.empty = true;
                      }
                    });
                } else {
                  console.log(res.json());
                  this.api.dismissLoading();
                  if (this.English) {
                    this.api.toast('Try again in sometime.');
                  } else {
                    this.api.toast('Réessayez dans un certain temps');
                  }

                  console.log('Server Error');
                }
              });
          });
        });
      });
    });
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

  reviewPage() {
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
    this.router.navigate(['watchreview'], navigationExtras);
  }

  rankingDetails() {
    console.log('test');
    this.api.Navigate('ranking');
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
          senderId: this.uid,
          senderName: this.userFullname,
          Timestamp: firebase.Timestamp.fromDate(new Date()),
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
          recieverId: this.uid,
          recieverName: this.userFullname,
          Timestamp: firebase.Timestamp.fromDate(new Date()),
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

  takeScreenshot(item) {
    console.log(item);
    this.screenshot.URI(80).then((res) => {
      this.sharableURI = res.URI;
      this.share(item);
    });
  }

  async share(item) {
    console.log(item);
    if (item.event_type === '1') {
      // this.userTitle=item.event_individuals_title;
      this.userTitle = item.event_sport_cate;
      this.userLocation = item.event_individuals_address;
      this.userDate = item.event_individuals_date;
      this.userdiscription = item.event_individuals_discription;
      var msg =
        'Event Name: ' +
        this.userTitle +
        '\n' +
        'Location: ' +
        this.userLocation +
        '\n' +
        'Date of Event: ' +
        this.userDate +
        '\n' +
        'Description: ' +
        this.userdiscription;

      const actionSheet = await this.actionSheetController.create({
        header: 'Sélectionner une image source',
        cssClass: 'social-sharing',
        buttons: [
          {
            text: 'Instagram',
            icon: 'logo-instagram',
            handler: () => {
              this.socialSharing
                .shareViaInstagram(msg, this.sharableURI)
                .then((res) => {
                  // Success
                })
                .catch((e) => {
                  // Error!
                });
            },
          },

          {
            text: 'Facebook',
            icon: 'logo-facebook',
            handler: () => {
              this.socialSharing
                .shareViaFacebook(msg, this.sharableURI)
                .then((res) => {
                  // Success
                })
                .catch((e) => {
                  // Error!
                });
            },
          },

          {
            text: 'Whatsapp',
            icon: 'logo-whatsapp',
            handler: () => {
              this.socialSharing
                .shareViaWhatsApp(msg, this.sharableURI)
                .then(() => {
                  // Success!
                  var msg = 'Information Shared Successfullty!';
                  this.api.toast(msg);
                })
                .catch(() => {
                  // Error!
                });
            },
          },

          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
          },
        ],
      });
      await actionSheet.present();
    } else {
      // this.userTitle=item.event_coach_title;
      this.userTitle = item.event_sport_cate;
      this.userLocation = item.event_coach_address;
      this.userDate = item.event_coach_date;
      this.userdiscription = item.event_coach_discription;
      var msg =
        'Event Name: ' +
        this.userTitle +
        '\n' +
        'Location: ' +
        this.userLocation +
        '\n' +
        'Date of Event: ' +
        this.userDate +
        '\n' +
        'Description: ' +
        this.userdiscription;

      const actionSheet = await this.actionSheetController.create({
        header: 'Sélectionner une image source',
        cssClass: 'social-sharing',
        buttons: [
          {
            text: 'Instagram',
            icon: 'logo-instagram',
            handler: () => {
              this.socialSharing
                .shareViaInstagram(msg, this.sharableURI)
                .then((res) => {
                  // Success
                })
                .catch((e) => {
                  // Error!
                });
            },
          },

          {
            text: 'Facebook',
            icon: 'logo-facebook',
            handler: () => {
              this.socialSharing
                .shareViaFacebook(msg, this.sharableURI)
                .then((res) => {
                  // Success
                })
                .catch((e) => {
                  // Error!
                });
            },
          },

          {
            text: 'Whatsapp',
            icon: 'logo-whatsapp',
            handler: () => {
              this.socialSharing
                .shareViaWhatsApp(msg, this.sharableURI)
                .then(() => {
                  // Success!
                  var msg = 'Information Shared Successfullty!';
                  this.api.toast(msg);
                })
                .catch(() => {
                  // Error!
                });
            },
          },

          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
          },
        ],
      });
      await actionSheet.present();
    }
  }

  async presentAlertBooking(event) {
    console.log(event);
    if (event.event_type == '1') {
      var minParticipant = event.event_individuals_participants_min;
      var maxParticipant = event.event_individuals_participants_max;
    } else {
      var minParticipant = event.event_coach_participants_min;
      var maxParticipant = event.event_coach_participants_max;
    }
    if (minParticipant == maxParticipant) {
      if (this.English) {
        this.api.toast('Event is already full');
      } else {
        this.api.toast("L'événement est déjà complet");
      }
    } else {
      var lastName = event.user_l_name;
      var l_name = lastName.substring(0, 1);
      this.confirmName = event.user_f_name + ' ' + l_name + '.';

      if (this.English) {
        const alert = await this.alertController.create({
          cssClass: 'booking',
          message:
            'Are you sure you want to join ' +
            this.confirmName.bold() +
            ' ' +
            '. on this event?',
          buttons: [
            {
              text: 'YES',
              handler: () => {
                console.log('Confirm Okay');
                this.bookEvent(event);
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
          cssClass: 'booking',
          message:
            'Es-tu sûr(e) de vouloir rejoindre ' +
            this.confirmName.bold() +
            ' ' +
            '. sur cet événement ?',
          buttons: [
            {
              text: 'OUI',
              handler: () => {
                console.log('Confirm Okay');
                this.bookEvent(event);
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
  }

  bookEvent(event) {
    this.storage.get('user_f_name').then((user_f_name) => {
      this.storage.get('user_l_name').then((user_l_name) => {
        console.log(event);
        var today = new Date();
        var format = moment(today).format('YYYY-MM-DD');
        if (event.event_type === '1') {
          var address = event.event_individuals_address;
        } else if (event.event_type === '2') {
          var address = event.event_coach_address;
        }
        this.data.book_user_id = this.uid;
        this.data.book_host_id = this.host_id;
        this.data.book_user_f_name = user_f_name;
        this.data.book_user_l_name = user_l_name;
        this.data.book_event_id = event.event_id;
        this.data.book_event_date = format;
        this.data.book_event_address = address;
        this.storage.set('bookingrequest', this.data);

        const formData = new FormData();
        formData.append('book_user_id', this.uid);
        formData.append('book_host_id', this.host_id);
        formData.append('book_user_f_name', user_f_name);
        formData.append('book_user_l_name', user_l_name);
        formData.append('book_event_id', event.event_id);
        formData.append('book_event_date', format);
        formData.append('book_event_address', address);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/book',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              if (res.json().msg == "En attente d'approbation") {
                if (this.English) {
                  var msg = 'Your request has been sent.';
                } else {
                  var msg = 'Votre demande a bien été envoyée.';
                }

                this.loadData();
                this.api.toast(msg);
              } else if (res.json().msg == 'Awaiting Approval') {
                if (this.English) {
                  this.api.toast(res.json().msg);
                } else {
                  this.api.toast("En attente d'approbation");
                }
              } else if (res.json().msg == 'Already booked event') {
                if (this.English) {
                  this.api.toast(res.json().msg);
                } else {
                  this.api.toast('Événement déjà réservé.');
                }
              } else {
                console.log(res.json());

                this.api.toast(res.json().msg);
              }

              this.loadData();
            } else {
              console.log(res.json());
            }
          });
      });
    });
  }

  events() {
    if (this.user_type == '1') {
      this.api.Navigate('creer-evenement');
    } else {
      this.api.Navigate('evenementcoachvue');
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

  manage() {
    if (this.user_type == '1') {
      this.api.Navigate('mes-evenements');
    } else {
      this.api.Navigate('evenements-coach');
    }
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

  back() {
    this.profile();
  }

  loadData() {
    this.activeEvent = [];
    this.pastEvent = [];
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
            this.followers = res.json().result[0].followers;
            this.following = res.json().result[0].following;
            this.dob = res.json().result[0].user_dob;
            var date = this.dob.split('T');
            var follow_status = res.json().result[0].follow_status;
            this.distance = res.json().result[0].follow_status;
            if (this.user_type == '1') {
              if (follow_status == '0') {
                this.followHost = false;
              } else if (follow_status == '1') {
                this.followHost = true;
              } else {
                this.blockedHost = true;
                console.log('this host is blocked by user');
              }
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

            this.sportsPlayed = res.json().result[0].user_description2;
            this.userDescription = res.json().result[0].user_description1;
            this.followers = res.json().result[0].followers;
            this.following = res.json().result[0].following;
            this.dob = res.json().result[0].user_dob;
            var date = this.dob.split('T');
            var follow_status = res.json().result[0].follow_status;
            this.distance = res.json().result[0].follow_status;
            if (this.user_type == '1') {
              if (follow_status == '0') {
                this.followHost = false;
              } else if (follow_status == '1') {
                this.followHost = true;
              } else {
                this.blockedHost = true;
                console.log('this host is blocked by user');
              }
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

          const formData = new FormData();
          formData.append('user_id', this.host_id);

          this.http
            .post(
              'http://fitconnected.prometteur.in/index.php/Api/fields/event',
              formData
            )
            .subscribe((res) => {
              if (res.json().status == 1) {
                console.log(res.json());
                this.totalEvents = res.json().result.length;

                this.empty = false;

                var allEvent = [];

                allEvent = res.json().result;
                var today = new Date();
                var format = moment(today).format('YYYY-MM-DD');
                if (this.userType) {
                  for (var i = 0; i < allEvent.length; i++) {
                    if (format < allEvent[i].event_individuals_date) {
                      console.log('not event');
                      this.activeEvent.push(allEvent[i]);
                    } else {
                      this.pastEvent.push(allEvent[i]);
                    }
                  }
                } else if (this.coachType) {
                  for (var i = 0; i < allEvent.length; i++) {
                    if (format < allEvent[i].event_coach_date) {
                      console.log('not event');
                      this.activeEvent.push(allEvent[i]);
                    } else {
                      this.pastEvent.push(allEvent[i]);
                    }
                  }
                }
                this.api.dismissLoading();
                console.log('hey');
                console.log(this.activeEvent);
              } else {
                console.log(res.json());
                this.message = res.json().msg;
                this.empty = true;
              }
            });
        } else {
          console.log(res.json());
          this.api.dismissLoading();
          if (this.English) {
            this.api.toast('Try again in some time');
          } else {
            this.api.toast('Réessayez dans un moment');
          }

          console.log('Server Error');
        }
      });
  }

  async openListFollowing() {
    if (this.following == 0) {
      return;
    } else {
      this.followingList = true;
      const modal = await this.modalCtrl.create({
        component: FollowlistPage,
        cssClass: 'followPage',
        componentProps: { userId: this.uid, pageTitle: 'Following' },
      });
      await modal.present();

      const { data } = await modal.onWillDismiss();
      if (data) {
        this.followingList = false;
        this.viewProfile(data);
        // this.excludeTracks = data;
        // this.updateSchedule();
      } else {
        this.followingList = false;
        this.loadData();
      }

      // if(this.followerList===true){
      //   this.followerList=false;
      //   this.followingList=true;
      // }else if(this.followingList===true){
      //   this.followingList=false;
      // }else{
      //   this.followingList=true;
      // }
    }
  }

  viewProfile(user) {
    console.log('my event');
    if (this.uid === user.user_id) {
      this.api.Navigate('coacheditprofile');
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

  async openListFollowers() {
    if (this.followers == 0) {
      return;
    } else {
      this.followerList = true;
      const modal = await this.modalCtrl.create({
        component: FollowlistPage,
        cssClass: 'followPage',
        componentProps: { userId: this.uid, pageTitle: 'Followers' },
      });
      await modal.present();

      const { data } = await modal.onWillDismiss();
      if (data) {
        // this.excludeTracks = data;
        // this.updateSchedule();
        this.followerList = false;
        this.viewProfile(data);
      } else {
        this.followerList = false;
        this.loadData();
      }
      // if(this.followerList===true){
      //   this.followerList=false;

      // }else if(this.followingList===true){
      //   this.followingList=false;
      //   this.followerList=true;
      // }else{
      //   this.followerList=true;
      // }
    }
  }
}
