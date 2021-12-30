import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import 'firebase/storage';
import * as firebase from 'firebase/firestore';
import * as fireauth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseAuth } from '@firebase/auth-types';
@Component({
  selector: 'app-responce3',
  templateUrl: './responce3.page.html',
  styleUrls: ['./responce3.page.scss'],
})
export class Responce3Page implements OnInit {
  discription;
  udk: any;
  disponsibility: any;
  user_email;
  user_f_name;
  user_l_name;
  user_password;
  user_dob;
  user_postal_code;
  user_gender;
  user_img;
  user_country;
  user_city;
  user_fcm_key;
  useId;
  user_question3_response = [];
  lang;
  langNumber;
  sportsInstructed;
  otherSportsCategory;
  constructor(public api: ApiService, public storage: Storage,
    public fs: AngularFirestore, public afa: AngularFireAuth, private angularstorage: AngularFireStorage) { }

  ngOnInit() {
    this.storage.get('user_lang').then((lang) => {
      this.lang = lang;
      if (lang == "English") {
        this.langNumber = "1";
      } else {
        this.langNumber = "2";
      }
    });
    this.storage.get('user_f_name').then((user_f_name) => {
      this.storage.get('user_l_name').then((user_l_name) => {
        this.storage.get('user_email').then((user_email) => {
          this.storage.get('user_password').then((user_password) => {
            this.storage.get('user_dob').then((user_dob) => {
              this.storage.get('user_postal_code').then((user_postal_code) => {
                this.storage.get('user_gender').then((user_gender) => {
                  this.storage.get('user_img').then((user_img) => {
                    this.storage.get('user_country').then((user_country) => {
                      this.storage.get('user_city').then((user_city) => {
                        this.storage.get('user_fcm_key').then((user_fcm_key) => {
                          this.storage.get('user_id').then((user_id) => {
                            this.storage.get('user_sport_category').then((user_sport_category) => {
                              this.storage.get('user_other_sport_cate').then(user_other_sport_cate => {


                                this.udk = user_id;
                                this.user_l_name = user_l_name;
                                this.user_f_name = user_f_name;
                                this.user_email = user_email;
                                this.user_password = user_password;
                                this.user_dob = user_dob;
                                this.user_postal_code = user_postal_code;
                                this.user_gender = user_gender;
                                this.user_img = user_img;
                                this.user_country = user_country;
                                this.user_city = user_city;
                                this.user_fcm_key = user_fcm_key;
                                let selectedSports = '';
                                let selectSportsName = '';
                                for (var i = 0; i <  user_sport_category.length; i++) {
                                  selectSportsName+= `${ user_sport_category[i].spcat_name},`;
                                  selectedSports += `${ user_sport_category[i].spcat_id},`;
                                }
                                this.storage.set('user_sport_category',selectSportsName.substr(0, selectSportsName.length - 1) )
                                
                                this.sportsInstructed = selectedSports.substr(0, selectedSports.length - 1);

                                this.otherSportsCategory = user_other_sport_cate;


                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  async submit() {

    if (this.discription) {
      var setdiscription = this.api.getStorage("questions");
      setdiscription.user_description2 = this.discription;
      this.api.setstorage("questions", setdiscription);
      // var ques3= JSON.parse(setdiscription.user_question3_response);
      this.storage.get('item').then((newArray) => {
        this.disponsibility = newArray;
      });
      const formData = new FormData();

      // formData.append('user_id', this.udk);
      formData.append('user_description1', setdiscription.user_description2);
      formData.append('user_description2', this.discription);
      formData.append('user_question1_response', setdiscription.user_question1_response);
      formData.append('user_question2_response', setdiscription.user_description1);
      // formData.append('user_question3_response', JSON.stringify(this.user_question3_response));
      formData.append('user_l_name', this.user_l_name);
      formData.append('user_f_name', this.user_f_name);
      formData.append('user_email', this.user_email);
      formData.append('user_password', this.user_password);
      formData.append('user_dob', this.user_dob);
      formData.append('user_postal_code', this.user_postal_code);
      formData.append('user_gender', this.user_gender);
      formData.append('user_img', this.user_img);
      formData.append('user_type', "1");
      formData.append('user_country', this.user_country);
      formData.append('user_city', this.user_city);
      formData.append('user_fcm_key', this.user_fcm_key);
      formData.append('user_language', this.langNumber);
      formData.append('user_sport_category', this.sportsInstructed);
      formData.append('user_other_sport_cate', this.otherSportsCategory);
      let res = await this.api.postapi("madd/user", formData);
      if (res.status == 1) {

        this.useId = res.result.toString();
        
        fireauth.createUserWithEmailAndPassword(firea,this.user_email,'12345678').then(() => {
          fireauth.currentUser.updateProfile({

            displayName: this.user_f_name + this.user_l_name,
            photoURL: this.user_img

          }).catch(err => {

          });
        }).catch(err => {
          console.log("falied email" + err);

        });
        this.fs.collection('friends').doc(this.useId).set({
          userEmail: this.user_email,
          // userPhone: this.mobile,
          hubSportId: this.useId,
          Name: this.user_f_name + this.user_l_name,
          displayName: this.user_f_name + this.user_l_name,
          photoURL: this.user_img,
          UserID: this.useId,
          Timestamp: firebase.Timestamp.fromDate(new Date()),
        }, { merge: true });

        // if(this.lang=="English"){
        //   this.api.toast("Please login to continue.");
        // }else{
        //   this.api.toast("Veuillez vous connecter pour continuer.");
        // }

        this.storage.set('user_id', res.user_details[0].user_id);
        this.storage.set('user_type', res.user_details[0].user_type);
        this.storage.set('user_session', res.user_details[0].user_session);
        this.storage.set('user_email', res.user_details[0].user_email);
        this.storage.set('user_password', res.user_details[0].user_password);
        this.storage.set('user_f_name', res.user_details[0].user_f_name);
        this.storage.set('user_l_name', res.user_details[0].user_l_name);
        this.storage.set('user_img', res.user_details[0].user_img);
        this.storage.set('user_postal_code', res.user_details[0].user_postal_code);

        this.api.Navigate("creer-evenement")

      }
      else {
        if (this.lang == "English") {
          this.api.toast("Veuillez réessayer après quelque temps");
        } else {
          this.api.toast("Veuillez vous connecter pour continuer");
        }

      }





    } else {
      if (this.lang == "English") {
        this.api.toast("Please fill in the description.");
      } else {
        this.api.toast("Veuillez remplir la description.");
      }

    }
  }

}
