import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-followlist',
  templateUrl: './followlist.page.html',
  styleUrls: ['./followlist.page.scss'],
})
export class FollowlistPage implements AfterViewInit {
  followersArray = [];
  followingArray = [];
  followerList: boolean = false;
  followingList: boolean = false;
  followers: any;
  following: any;

  @Input('userId') userId;
  @Input('pageTitle') pageTitle;

  constructor(
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    public api: ApiService,
    public modalCtrl: ModalController
  ) {}

  ngAfterViewInit() {
    this.api.loading();
    const formData = new FormData();
    formData.append('user_id', this.userId);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/user_follow',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          var newARR = [];
          newARR = res.json().result.followers;
          for (var i = 0; i < newARR.length; i++) {
            var lName = newARR[i].user_l_name.substring(0, 1);
            var name = newARR[i].user_f_name + ' ' + lName + '.';
            newARR[i].nameFormatted = name;
            this.followersArray.push(newARR[i]);
          }
          var otherARR = [];
          otherARR = res.json().result.following;
          for (var i = 0; i < otherARR.length; i++) {
            var lName = otherARR[i].user_l_name.substring(0, 1);
            var name = otherARR[i].user_f_name + ' ' + lName + '.';
            otherARR[i].nameFormatted = name;
            this.followingArray.push(otherARR[i]);
          }
          if (this.pageTitle === 'Followers') {
            this.followerList = true;
            this.followers = this.followersArray.length;
          } else if (this.pageTitle === 'Following') {
            this.followingList = true;
            this.following = this.followingArray.length;
          }
          this.api.dismissLoading();
        } else {
          this.api.dismissLoading();
          console.log(res.json());
          this.api.toast(res.json().msg);
        }
      });
  }

  startFollow(detail) {
    const formData = new FormData();
    formData.append('fol_user_id', this.userId);
    formData.append('fol_host_id', detail.user_id);
    formData.append('fol_status', '1');
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/user_follow',
        formData
      )
      .subscribe((res) => {
        console.log(res.json());
        if (res.json().status == 1) {
          console.log(res.json());
          var msg = 'You started Following ' + detail.nameFormatted;
          this.loadData();
          this.api.toast(msg);
        } else {
          console.log(res.json());
        }
      });
  }

  startUnfollow(detail) {
    console.log('unfollow');
    const formData = new FormData();
    formData.append('fol_user_id', this.userId);
    formData.append('fol_host_id', detail.user_id);
    formData.append('fol_status', '0');
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/user_follow',
        formData
      )
      .subscribe((res) => {
        console.log(res.json());
        if (res.json().status == 1) {
          console.log(res.json());
          var msg = 'You Unfollowed ' + detail.nameFormatted;
          this.loadData();
          this.api.toast(msg);
        } else {
          console.log(res.json());
        }
      });
  }

  loadData() {
    this.followersArray = [];
    this.followingArray = [];
    this.api.loading();
    const formData = new FormData();
    formData.append('user_id', this.userId);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/user_follow',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          var newARR = [];
          newARR = res.json().result.followers;
          for (var i = 0; i < newARR.length; i++) {
            var lName = newARR[i].user_l_name.substring(0, 1);
            var name = newARR[i].user_f_name + ' ' + lName + '.';
            newARR[i].nameFormatted = name;
            this.followersArray.push(newARR[i]);
          }
          var otherARR = [];
          otherARR = res.json().result.following;
          for (var i = 0; i < otherARR.length; i++) {
            var lName = otherARR[i].user_l_name.substring(0, 1);
            var name = otherARR[i].user_f_name + ' ' + lName + '.';
            otherARR[i].nameFormatted = name;
            this.followingArray.push(otherARR[i]);
          }
          if (this.pageTitle === 'Followers') {
            this.followerList = true;
            this.followers = this.followersArray.length;
          } else if (this.pageTitle === 'Following') {
            this.followingList = true;
            this.following = this.followingArray.length;
          }
          this.api.dismissLoading();
        } else {
          this.api.dismissLoading();
          console.log(res.json());
          this.api.toast(res.json().msg);
        }
      });
  }

  dismiss(data?: any) {
    console.log('clicked');
    console.log(data);
    // data={

    // }
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
