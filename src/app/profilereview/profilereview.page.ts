import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { File, FileEntry } from '@ionic-native/file/ngx';
// import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import {
  NavController,
  ActionSheetController,
  ToastController,
  Platform,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import 'firebase/storage';
import { FollowlistPage } from '../followlist/followlist.page';
import { RateuserPage } from '../rateuser/rateuser.page';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profilereview',
  templateUrl: './profilereview.page.html',
  styleUrls: ['./profilereview.page.scss'],
})
export class ProfilereviewPage implements OnInit {
  uid: any;
  userType;
  name: any;
  practice: any;
  sportsPlayed: any;
  userDescription: any;
  gender: any;
  dob: any;
  age: any;
  Avatar: boolean = true;
  imgUrl: any;
  userAvatarStr: string;
  uploadPercent: Observable<number>;
  uploaded1: boolean = false;
  editDescription: boolean = false;
  editPlayed: boolean = false;
  editPractice: boolean = false;
  editPract: any;
  editPlay: any;
  userDesc: any;
  followers: any;
  following: any;
  disponsibility = [];
  followingList: boolean = false;
  followerList: boolean = false;
  displayEmptyDescError: boolean = false;
  displayEmptyPlayError: boolean = false;
  English: boolean;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue: boolean;
  constructor(
    public api: ApiService,
    public storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
    public http: Http,
    public httpClient: HttpClient,
    public modalCtrl: ModalController,
    private camera: Camera,
    public platform: Platform,
    //  private transfer: Transfer,
    private angularstorage: AngularFireStorage,
    private file: File,
    private filePath: FilePath,
    public actionSheetController: ActionSheetController
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
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_type').then((user_type) => {
        this.storage.get('user_img').then((user_img) => {
          this.storage.get('user_lang').then((lang) => {
            this.userType = user_type;
            if (lang == 'English') {
              this.English = true;
            } else {
              this.English = false;
            }
          });
          // this.storage.get('item').then((newArray) => {
          //   this.disponsibility=newArray;
          // });
          if (user_img === undefined || user_img === null || user_img === '') {
            this.Avatar = false;
          } else {
            this.Avatar = true;
          }

          this.uid = user_id;
          console.log(this.uid);
          const formData = new FormData();
          formData.append('user_id', this.uid);
          this.http
            .post(
              'http://fitconnected.prometteur.in/index.php/Api/fields/user',
              formData
            )
            .subscribe((res) => {
              if (res.json().status == 1) {
                console.log(res.json());
                var lastName = res.json().result[0].user_l_name;
                var l_name = lastName.substring(0, 1);
                this.name =
                  res.json().result[0].user_f_name + ' ' + l_name + '.';
                this.followers = res.json().result[0].followers;
                this.following = res.json().result[0].following;
                this.practice = res.json().result[0].user_question1_response;
                this.sportsPlayed =
                  res.json().result[0].user_question2_response;
                this.imgUrl = res.json().result[0].user_img;
                //  const objOfObjs=res.json().result[0].user_question3_response;
                //  this.disponsibility =  Object.entries(objOfObjs).map((e) => ( { [e[0]]: e[1] } ));
                // this.disponsibility=JSON.parse(res.json().result[0].user_question3_response);
                // this.storage.set('user_question3_response',this.disponsibility);
                //  console.log(this.disponsibility);
                this.userDescription = res.json().result[0].user_description1;
                this.dob = res.json().result[0].user_dob;
                var date = this.dob.split('T');
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
                this.reiviewList();
              } else {
                console.log(res.json());
              }
            });
        });
      });
    });
  }

  reiviewList() {
    const formData = new FormData();
    formData.append('user_id', this.uid);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/user_rating',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
        }
      });
  }

  profile() {
    if (this.userType == '1') {
      this.api.Navigate('mon-profil');
    } else {
      this.api.Navigate('coacheditprofile');
    }
  }

  async openListFollowers() {
    if (this.followers.length === 0) {
      return;
    } else {
      this.followerList = true;
      const modal = await this.modalCtrl.create({
        component: FollowlistPage,
        cssClass: 'followPage',
        showBackdrop: false,
        componentProps: { userId: this.uid, pageTitle: 'Followers' },
      });
      await modal.present();

      const { data } = await modal.onWillDismiss();
      if (data) {
        this.followerList = false;
        // this.excludeTracks = data;
        this.viewProfile(data);
        // this.updateSchedule();
      } else {
        this.followerList = false;
        this.loadData();
      }
    }
  }

  async openListFollowing() {
    if (this.following.length === 0) {
      return;
    } else {
      this.followingList = true;
      const modal = await this.modalCtrl.create({
        component: FollowlistPage,
        showBackdrop: false,
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

  loadData() {
    this.api.timerloading();
    this.storage.get('user_img').then((user_img) => {
      if (user_img === undefined || user_img === null || user_img === '') {
        this.Avatar = false;
      } else {
        this.Avatar = true;
      }
    });
    console.log(this.uid);
    const formData = new FormData();
    formData.append('user_id', this.uid);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/user',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          var lastName = res.json().result[0].user_l_name;
          var l_name = lastName.substring(0, 1);
          this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
          this.disponsibility = JSON.parse(
            res.json().result[0].user_question3_response
          );
          this.practice = res.json().result[0].user_question1_response;
          this.sportsPlayed = res.json().result[0].user_question2_response;
          this.userDescription = res.json().result[0].user_description1;
          this.imgUrl = res.json().result[0].user_img;
          this.storage.set('user_img', this.imgUrl);
          this.dob = res.json().result[0].user_dob;
          var date = this.dob.split('T');
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
          this.reiviewList();
        } else {
          console.log(res.json());
          this.api.dismissLoading();
        }
      });
  }

  viewProfile(user) {
    console.log('my event');
    if (this.uid === user.user_id) {
      this.api.Navigate('mon-profil');
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

  async openRating() {
    const modal = await this.modalCtrl.create({
      component: RateuserPage,
      showBackdrop: false,
      cssClass: 'ratePage',
      componentProps: { userId: this.uid, pageTitle: 'Following' },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
  }

  activity() {
    this.api.Navigate('mon-profil-activite');
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
