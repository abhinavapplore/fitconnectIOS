import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Config, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-participants',
  templateUrl: './participants.page.html',
  styleUrls: ['./participants.page.scss'],
})
export class ParticipantsPage implements AfterViewInit {
  participantArray = [];
  userFullname: any;
  uid;
  user_type;

  @Input('eventId') eventId;
  constructor(
    public api: ApiService,
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    public modalCtrl: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    public af: AngularFireAuth,
    public fs: AngularFirestore
  ) {}

  ngAfterViewInit() {
    this.api.loading();
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_f_name').then((user_f_name) => {
        this.storage.get('user_l_name').then((user_l_name) => {
          this.storage.get('user_type').then((user_type) => {
            this.user_type = user_type;
            var lname = user_l_name.substring(0, 1);
            this.userFullname = user_f_name + ' ' + lname + '.';
            this.uid = user_id;
          });
        });
      });
      console.log(this.eventId);
      const formData = new FormData();
      formData.append('event_id', this.eventId);
      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/fields/event_participants',
          formData
        )
        .subscribe((res) => {
          if (res.json().status == 1) {
            console.log(res.json());
            var newARR = [];
            newARR = res.json().result;
            for (var i = 0; i < newARR.length; i++) {
              var lName = newARR[i].participant_l_name.substring(0, 1);
              var name = newARR[i].participant_f_name + ' ' + lName + '.';
              newARR[i].nameFormatted = name;
              this.participantArray.push(newARR[i]);
              this.api.dismissLoading();
            }
          } else {
            console.log(res.json());
            this.api.dismissLoading();
          }
        });
    });
  }

  remove(user) {
    console.log('got user to delete', user);

    let formData = new FormData();
    formData.append('book_id', user.book_id);
    formData.append('book_status', '4');
    this.api.loading();
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/mAdd/remove_participant',
        formData
      )

      .subscribe((res) => {
        console.log('DELETE USER RESPONS', res);

        this.api.dismissLoading();
        this.dismiss();

        this.api.events.refreshEvents.emit();

        if (res.json().status == 1) {
        } else {
          // this.creatform();
          //  this.api.toast(res.msg)
        }
      });
  }

  dismiss(data?: any) {
    // data={

    // }
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }

  chat(user) {
    console.log(user);
    // var l_name = user.participant_l_name.substring(0, 1);
    //       var formatname =user.participant_f_name +' ' + l_name+".";
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_img').then((user_img) => {
        //   this.fs.collection('friends').doc(user_id).collection('chats').doc(user.participant_id).set({
        //     recieverName: user.nameFormatted,
        //     recieverId: user.participant_id,
        //     recieverImage:user.participant_img,
        //     senderId: user_id,
        //     senderName:this.userFullname,
        //     senderImage:user_img,
        //     Timestamp: firebase.firestore.FieldValue.serverTimestamp()
        // }, { merge: true });

        //     this.fs.collection('friends').doc(user.participant_id).collection('chats').doc(user_id).set({
        //     senderName: user.nameFormatted,
        //     senderId: user.participant_id,
        //     senderImage:user.participant_img,
        //     recieverId: user_id,
        //     recieverName:this.userFullname,
        //     recieverImage:user_img,
        //     Timestamp: firebase.firestore.FieldValue.serverTimestamp()
        // }, { merge: true });

        console.log('clicked');
        var vc = {
          recieverId: user.participant_id,
          senderId: user_id,
          recieverName: user.nameFormatted,
          recieverImg: user.participant_img,
        };

        let navigationExtras = {
          queryParams: {
            special: JSON.stringify(vc),
          },
        };
        this.dismiss();
        this.router.navigate(['conversation'], navigationExtras);
      });
    });
  }

  viewProfile(user) {
    var vc = {
      user_id: user.participant_id,
    };
    console.log(user.participant_id);
    this.dismiss(vc);
  }
}
