import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-groupconversation',
  templateUrl: './groupconversation.page.html',
  styleUrls: ['./groupconversation.page.scss'],
})
export class GroupconversationPage implements OnInit {
  // eventId;
  userType;
  text: string;
  chatRef: any;
  uid: string;
  senderId: any;
  // RECIEVER ID IS THE EVENT ID
  recieverId: any;
  displayName: any;
  userName: any;
  recieverName: any;
  showList: boolean = false;
  isSearch: boolean = false;
  searchTerm: any;
  search: any;
  chatUserName: boolean = false;
  title: any;
  recieverImg: any;
  userImage;
  footerAction: boolean = true;
  msgValue: boolean;
  notificationPresent: boolean = false;
  notificationArray;

  @ViewChild('content', { static: false }) content;
  subMenuList: boolean;
  userEventCardBoolean: boolean;
  coachEventCardBoolean: boolean;
  // api: any;
  constructor(
    public af: AngularFireAuth,
    public fs: AngularFirestore,
    private storage: Storage,
    public router: Router,
    private route: ActivatedRoute,
    public http: Http,
    public httpClient: HttpClient,
    public api: ApiService
  ) {
    this.storage.get('user_id').then((user_id) => {
      this.uid = user_id;
      this.storage.get('user_type').then((user_type) => {
        this.userType = user_type;
      });
    });
    //Enter user id here
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_img').then((user_img) => {
        console.log('user_id', user_id);
        this.userImage = user_img;

        this.route.queryParams.subscribe((params) => {
          console.log(params);

          if (params && params.special && params.pageRoute) {
            // alert('pageroute');
            this.chatUserName = false;

            this.title = 'Get Help';
          } else if (params && params.special) {
            var todayDate = moment().format('DD-MM-YYYY');
            var details = JSON.parse(params.special);

            // alert('else block');
            console.log('PARAMS', details);

            this.chatUserName = true;
            // this.eventId = details.eventId;
            this.recieverId = details.recieverId;
            this.senderId = details.senderId;
            this.recieverName = details.recieverName;
            this.recieverImg = details.recieverImg;

            // this.fs
            //   .collection('friends')
            //   .doc(this.senderId)
            //   .collection('chats')
            //   .doc(this.recieverId)
            //   .update({
            //     msgRead: true,
            //   });

            this.chatRef = this.fs
              // .collection('friends')
              .collection('events')
              // .doc(this.senderId)
              .doc(this.recieverId + '')
              // .collection('chats')
              // .doc(this.recieverId)
              .collection('messagetrail', (ref) => ref.orderBy('Timestamp'))
              .valueChanges();
            console.log('CHATS', this.chatRef);

            this.scrollToBottomOnInit();

            this.uid = user_id;
            console.log(
              'Reciever/sender' +
                this.recieverId +
                ' ' +
                this.senderId +
                '' +
                this.uid
            );
            // this.chatRef = this.fs.collection('chats', ref => ref.orderBy('Timestamp')).valueChanges();
            // tslint:disable-next-line: max-line-length

            //  this.fs.collection("friends").doc(this.senderId).collection('chats').doc(this.recieverId)
            //  .get().subscribe((doc)=>{
            //    if (doc.exists) {
            //      console.log("Document data:", doc.data());
            //      this.userName=doc.data().recieverName;
            //    } else {
            //      // doc.data() will be undefined in this case
            //      console.log("No such document!");
            //    }
            //  })
          }
        });
      });
    });
  }
  events() {
    if (this.userType === '1') {
      this.api.Navigate('creer-evenement');
    } else {
      this.api.Navigate('evenementcoachvue');
    }
  }
  ngOnInit() {
    this.scrollToBottomOnInit();
  }

  ionViewDidEnter() {
    this.scrollToBottomOnInit();
  }

  viewProfile() {
    console.log('my event');

    console.log('others event');
    var vc = { user_id: this.recieverId };
    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };
    this.router.navigate(['coachviewprofile'], navigationExtras);
  }

  scrollToBottomOnInit() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom(400);
      }
    }, 500);
  }

  send(text) {
    if (this.text != '') {
      var formattedTime = moment().format('HH:mm');
      var formattedDate = moment().format('DD-MM-YYYY');
      // this.fs.collection('chats').add({

      //   Name: "test user",
      //   Message: text,
      //   UserID: this.uid,
      //   Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // });
      // this.text = '';
      console.log('lola');
      console.log(this);
      // this.fs
      //   .collection('friends')
      //   .doc(this.senderId)
      //   .collection('chats')
      //   .doc(this.recieverId)
      //   .collection('messagetrail')
      //   .add({

      //     Message: text,
      //     UserID: this.uid,
      //     Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //     // recieverId: this.recieverId,
      //     senderId: this.senderId,
      //     msgTime: formattedTime,
      //     msgDate: formattedDate,
      //     msgSent: true,
      //     msgRead: false,
      //   });
      // this.fs
      //   .collection('friends')
      //   .doc(this.senderId)
      //   .collection('chats')
      //   .doc(this.recieverId)
      //   .update({
      //     lastMsg: this.text,
      //     msgTime: formattedTime,
      //     msgDate: formattedDate,
      //     Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //     msgRead: true,
      //   });

      // this.fs
      //   .collection('events')
      //   .doc(this.recieverId + '')

      //   .collection('messagetrail')
      //   .doc(this.senderId)
      //   .update({
      //     lastMsg: this.text,
      //     msgTime: formattedTime,
      //     msgDate: formattedDate,
      //     Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //     msgRead: true,
      //   });
      this.fs
        // .collection('friends')
        .collection('events')
        // .doc(this.recieverId)
        .doc(this.recieverId + '')
        // .collection('chats')
        // .doc(this.senderId)
        .collection('messagetrail')
        .add({
          Name: this.recieverName,
          Message: text,
          UserID: this.uid,
          // UserID: 123,
          Timestamp: firebase.Timestamp.fromDate(new Date()),
          recieverId: this.recieverId,
          // recieverId: 456,
          senderId: this.senderId,
          imgUrl: this.userImage,
          // senderId: 789,
          msgTime: formattedTime,
          msgDate: formattedDate,
          msgSent: true,
          msgRead: false,
        });

      this.fs.collection('events').doc(this.recieverId).set({ lastMsg: text });
      // this.fs
      //   .collection('friends')
      //   .doc(this.recieverId)
      //   .collection('chats')
      //   .doc(this.senderId)
      //   .update({
      //     lastMsg: this.text,
      //     msgTime: formattedTime,
      //     msgDate: formattedDate,
      //     Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //     msgRead: false,
      //   });

      this.scrollToBottomOnInit();

      const formData = new FormData();

      formData.append('noti_from_user_id', this.senderId);
      formData.append('noti_event_id', this.recieverId);
      formData.append('noti_message', this.text);

      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/madd/send_group_notification',
          formData
        )
        .subscribe((res) => {
          if (res.json().status == 1) {
          } else {
            console.log(res);
          }
        });
      this.text = '';
    }
  }
  back() {
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

  searchPressed() {
    this.isSearch = true;
  }

  eventdetails() {
    this.showList = false;
    this.subMenuList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.api.Navigate('mes-evenements');
  }
  rankingDetails() {
    this.api.Navigate('ranking');
  }
  messages() {
    this.showList = false;
    this.subMenuList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;

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
    this.showList = false;
    this.subMenuList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.api.Navigate('notifications');
  }

  getUser(ev: any) {
    var arr = [];
    var arr1 = [];
    this.fs
      .collection('friends')
      .doc(this.senderId)
      .collection('chats')
      .doc(this.recieverId)
      .collection('messagetrail')
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots

          arr1.push(doc.data());
          console.log(doc.id, ' => ', doc.data());
        });

        for (let i = 0; i < arr1.length; i++) {
          var input = arr1[i];
          arr.push(input);

          let val = ev.target.value;

          if (val && val.trim() != '') {
            this.search = arr.filter(function (item) {
              return item.Message.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });

            this.showList = true;
          } else {
            this.showList = false;
          }
        }
      });
  }
  selectChat(item) {
    this.showList = false;
    this.searchTerm = '';
    this.isSearch = false;
  }

  closeSearch() {
    this.showList = false;
    this.isSearch = false;
    this.searchTerm = '';
  }
}
