import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import * as moment from 'moment';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { TranslateConfigService } from '../translate-config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.page.html',
  styleUrls: ['./chatpage.page.scss'],
})
export class ChatpagePage implements OnInit {
  eventGroups = [];
  recieverId: any;
  senderId: any;
  uid: any;
  chats: any;
  allUsers: any;
  openchats = [];
  showList: boolean = false;
  isSearch: boolean = false;
  searchTerm: any;
  search: any;
  userType: any;
  footerAction: boolean = true;
  emptydata: boolean = false;
  emptyCoach: boolean;
  topSearchPlaceHolder;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue: boolean;

  constructor(
    private router: Router,
    public af: AngularFireAuth,
    public http: HttpClient,
    public fs: AngularFirestore,
    private storage: Storage,
    private route: ActivatedRoute,
    public api: ApiService,
    private keyboard: Keyboard,
    public translateSevice: TranslateConfigService
  ) {
    this.storage.get('user_id').then((user_id) => {
      this.uid = user_id;
      this.storage.get('user_type').then((user_type) => {
        this.userType = user_type;
      });
    });
    this.keyboard.onKeyboardWillShow().subscribe((data) => {
      this.footerAction = false;
    });
    this.keyboard.onKeyboardWillHide().subscribe((data) => {
      this.footerAction = true;
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
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_type').then((user_type) => {
        this.uid = user_id;
        this.getEventGroups();
        if (user_type === '2') {
          this.storage.get('verifiedCoach').then((isSubscribed) => {
            if (isSubscribed) {
              this.getChats();
            } else {
              this.emptyCoach = true;
            }
          });
        } else {
          this.getChats();
        }
      });
    });
  }

  async getEventGroups() {
    // let res = await this.api.postapi('fields/event_groups', {
    //   user_id: this.uid,
    // });
    // console.log('EVENTS GROUPS', res);

    let formData = new FormData();
    formData.append('user_id', this.uid + '');

    this.http
      .post(
        this.api.rootUrl + 'fields/event_groups',
        formData
        // {
        // user_id: this.uid + '',
        // }
      )
      .subscribe(
        (data: any) => {
          console.log('EVENT GROUPS', data);
          this.eventGroups = data.result;

          // .collection('chats', (ref) => ref.orderBy('Timestamp', 'desc'))
          // .snapshotChanges();

          // This works:

          this.eventGroups.forEach((element) => {
            let fsGroups = this.fs
              .collection('events')
              .doc(element.event_id + '')
              .valueChanges()
              .subscribe((data: any) => {
                element.lastMsg = data.lastMsg;
                // console.log(data);
              });
          });
        },
        (err) => {
          console.log(alert('Error getting groups'));
        }
      );
  }

  ngOnInit() {
    this.storage.get('user_lang').then((lang) => {
      if (lang == 'English') {
        this.topSearchPlaceHolder = 'Search...';
      } else {
        this.topSearchPlaceHolder = 'Chercher...';
      }
    });
  }

  gotosubscription() {
    this.api.Navigate('abonnement');
  }

  getChats() {
    this.openchats = [];
    this.api.timerloading();
    this.allUsers = this.fs
      .collection('friends')
      .doc(this.uid)
      .collection('chats', (ref) => ref.orderBy('Timestamp', 'desc'))
      .snapshotChanges();

    // This works:
    console.log(this.allUsers);
    var todayDate = moment().format('DD-MM-YYYY');
    if (this.allUsers.length != 0) {
      this.allUsers.forEach((user) => {
        if (user.length == 0) {
          this.emptydata = true;
          this.api.dismissLoading();
        } else {
          this.emptydata = false;
          this.openchats = [];
          user.forEach((userData) => {
            let data = userData.payload.doc.data();
            let id = userData.payload.doc.id;
            let time = moment(userData.payload.doc.Timestamp).format("h:mm A'");
            // console.log(typeof userData.payload.doc.Timestamp);
            data.formatTime = time;
            this.openchats.push(data);
            console.log('this is openchat array');
            console.log(this.openchats);
            console.log('ID: ', id, ' Data: ', data);
            if (this.openchats.length != 0) {
              this.emptydata = false;

              for (var i = 0; i < this.openchats.length; i++) {
                // var msgDate=moment(this.openchats[i].msgDate);
                if (this.openchats[i].msgDate != todayDate) {
                  this.openchats[i].showTime = false;
                } else {
                  this.openchats[i].showTime = true;
                  // this.openchats[element].msgTime=this.openchats[element].msgDate;
                }
                if (this.openchats[i].msgRead == false) {
                  this.storage.set('msgUnread', true);
                  break;
                } else {
                  console.log('msgRead');
                  console.log(this.openchats[i]);
                  this.storage.set('msgUnread', false);
                }
              }
            } else {
              this.emptydata = true;
            }
          });
          this.api.dismissLoading();
        }
      });
    } else {
      this.api.dismissLoading();

      this.emptydata = true;
    }
  }
  gotochat(item) {
    let recId = item.recieverId;

    let vc = {
      recieverId: recId,
      senderId: this.uid,
      recieverName: item.recieverName,
      recieverImg: item.recieverImage,
    };
    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };
    this.router.navigate(['conversation'], navigationExtras);
  }
  gotoGroupChat(group) {
    // let recId = item.recieverId;

    let eventName = group.spcat_name || 'Event';
    eventName += ' : ' + group.event_date;
    let vc = {
      // eventId: group.event_id + '',
      recieverId: group.event_id + '',
      senderId: this.uid,
      recieverName: eventName,
      // recieverImg: 'item.recieverImage',
    };
    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };
    this.router.navigate(['groupconversation'], navigationExtras);
  }
  //  this.router.navigateByUrl("conversation");

  back() {
    this.router.navigateByUrl('profile');
  }

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  ionViewWillLeave() {
    this.searchTerm = '';
    this.showList = false;
  }

  searchPressed() {
    this.isSearch = true;
  }

  getUser(ev: any) {
    var arr = [];

    for (let i = 0; i < this.openchats.length; i++) {
      var input = this.openchats[i];
      arr.push(input);

      let val = ev.target.value;

      if (val && val.trim() != '') {
        this.search = arr.filter(function (item) {
          return (
            item.recieverName.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
        });

        // Show the results
        if (this.search.length !== 0) {
          this.showList = true;
        } else {
          this.showList = false;
        }
      } else {
        this.showList = false;
      }
    }
  }
  selectChat(item) {
    this.showList = false;
    this.searchTerm = '';
    this.isSearch = false;
    console.log(item.evn_id);
    console.log(item.evn_name);
    console.log(item);
    this.gotochat(item);
  }

  closeSearch() {
    this.showList = false;
    this.isSearch = false;
    this.searchTerm = '';
  }

  events() {
    if (this.userType === '1') {
      this.api.Navigate('creer-evenement');
    } else {
      this.api.Navigate('evenementcoachvue');
    }
  }
  manage() {
    if (this.userType === '1') {
      this.api.Navigate('mes-evenements');
    } else {
      this.api.Navigate('evenements-coach');
    }
  }
  notifications() {
    this.api.Navigate('notifications');
  }
}
