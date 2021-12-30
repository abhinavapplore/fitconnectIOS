import { Component, OnInit, Input, ViewChild } from '@angular/core';

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
import { ApiService } from '../api.service';
import { FollowlistPage } from '../followlist/followlist.page';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-coacheditprofile',
  templateUrl: './coacheditprofile.page.html',
  styleUrls: ['./coacheditprofile.page.scss'],
})
export class CoacheditprofilePage implements OnInit {
  uid: any;
  name: any;
  hourly: any;
  person: any;
  userDescription: any;
  gender: any;
  dob: any;
  age: any;
  Avatar: boolean = true;
  editCourse: boolean = false;
  imgUrl: any;
  userAvatarStr: string;
  uploadPercent: Observable<number>;
  notificationPresent: boolean = false;
  editDescription: boolean = false;
  editHour: boolean = false;
  editPerson: boolean = false;
  editPract: any;
  editPlay: any;
  userDesc: any;
  followers: any;
  following: any;
  userDesc2: any;
  coachingOffered: any;
  personRate: any;
  hourRate: any;
  followingList: boolean = false;
  followerList: boolean = false;
  followersArray = [];
  followingArray = [];
  footerAction: boolean = true;
  displayPersonError: boolean = false;
  displayHourError: boolean = false;
  displayEmptyError: boolean = false;
  English: boolean;
  notificationArray;
  msgValue;
  user: any = {};

  @ViewChild('input', { static: false }) myInput;
  @ViewChild('input1', { static: false }) myInput1;
  @ViewChild('courseInput', { static: false }) myCourseInput;
  @ViewChild('descInput', { static: false }) myDescInput;
  userRank: any;

  constructor(
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    private camera: Camera,
    public api: ApiService,
    //  private transfer: Transfer,
    private angularstorage: AngularFireStorage,
    private file: File,
    private filePath: FilePath,
    public actionSheetController: ActionSheetController,
    private keyboard: Keyboard,
    public router: Router,
    public modalCtrl: ModalController,
    public platform: Platform
  ) {
    this.keyboard.onKeyboardWillShow().subscribe((data) => {
      this.footerAction = false;
    });
    this.keyboard.onKeyboardWillHide().subscribe((data) => {
      this.footerAction = true;
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
      this.storage.get('user_img').then((user_img) => {
        this.storage.get('user_lang').then((lang) => {
          if (lang == 'English') {
            this.English = true;
          } else {
            this.English = false;
          }
        });

        if (user_img === undefined || user_img === null || user_img === '') {
          this.Avatar = false;
        } else {
          this.Avatar = true;
          this.imgUrl = user_img;
        }
      });

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
            this.user = res.json().result[0];
            this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
            this.followers = res.json().result[0].followers;
            this.following = res.json().result[0].following;
            this.hourly = res.json().result[0].user_price_hour;
            this.person = res.json().result[0].user_price_per_person;
            this.userRank = res.json().user_rank;

            this.userDescription = res.json().result[0].user_description1;
            this.coachingOffered = res.json().result[0].user_description2;
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
          } else {
            console.log(res.json());
            this.api.dismissLoading();
            this.api.toast(res.json().msg);
          }
        });
    });
  }

  updateDocs() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user),
      },
    };

    this.router.navigate(['inscription-docs'], navigationExtras);
  }

  activity() {
    this.api.Navigate('mon-profil-activite');
  }

  async openListFollowing() {
    if (this.following == 0) {
      return;
    } else {
      this.followingList = true;
      const modal = await this.modalCtrl.create({
        component: FollowlistPage,
        cssClass: 'followPage',
        showBackdrop: false,
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

  async openListFollowers() {
    if (this.followers == 0) {
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

  closeDetailsBox() {
    if (this.followerList === true) {
      this.followerList = false;
    } else if (this.followingList === true) {
      this.followingList = false;
    }
  }

  reviewPage() {
    this.api.Navigate('profilereview');
  }

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  description() {
    if (this.editDescription === true) {
      if (
        this.userDesc == null ||
        this.userDesc == undefined ||
        this.userDesc == ''
      ) {
        this.displayEmptyError = true;
      } else {
        console.log(this.userDesc);
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_description1', this.userDesc);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/user',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log(res);
              this.editDescription = false;
              this.loadData();
            } else {
            }
          });
      }
    } else {
      this.editDescription = true;

      setTimeout(() => {
        this.myDescInput.setFocus();
      }, 150);
    }
  }

  course() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user),
      },
    };

    this.router.navigate(['inscription-professionnel3'], navigationExtras);
  }

  perHour() {
    if (this.editHour === true) {
      if (
        this.hourRate == null ||
        this.hourRate == undefined ||
        this.hourRate == ''
      ) {
        this.displayHourError = true;
      } else {
        console.log(this.userDesc);
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_price_hour', this.hourRate);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/user',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log(res);
              this.storage.set('user_price_hour', this.hourRate);
              this.editHour = false;
              this.loadData();
            } else {
            }
          });
      }
    } else {
      this.editHour = true;
      setTimeout(() => {
        this.myInput.setFocus();
      }, 150);
    }
  }

  perPerson() {
    if (this.editPerson === true) {
      if (
        this.personRate == null ||
        this.personRate == undefined ||
        this.personRate == ''
      ) {
        this.displayPersonError = true;
      } else {
        console.log(this.userDesc);
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_price_per_person', this.personRate);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/user',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log(res);
              this.storage.set('user_price_per_person', this.personRate);
              this.editPerson = false;
              this.loadData();
            } else {
            }
          });
      }
    } else {
      this.editPerson = true;
      setTimeout(() => {
        this.myInput1.setFocus();
      }, 150);
    }
  }

  async presentActionSheet(i) {
    this.storage.get('user_lang').then(async (lang) => {
      console.log('language' + lang);
      if (lang == 'English') {
        const actionSheet = await this.actionSheetController.create({
          header: 'Select a source image',
          buttons: [
            {
              text: 'Import from library',
              handler: () => {
                this.takePicture1(
                  this.camera.PictureSourceType.PHOTOLIBRARY,
                  i
                );
              },
            },
            {
              text: 'Take a picture',
              handler: () => {
                this.takePicture1(this.camera.PictureSourceType.CAMERA, i);
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
            },
          ],
        });
        await actionSheet.present();
      } else {
        const actionSheet = await this.actionSheetController.create({
          header: 'Sélectionner une image source',
          buttons: [
            {
              text: 'Importer à partir de la bibliothèque',
              handler: () => {
                this.takePicture1(
                  this.camera.PictureSourceType.PHOTOLIBRARY,
                  i
                );
              },
            },
            {
              text: 'prendre une photo',
              handler: () => {
                this.takePicture1(this.camera.PictureSourceType.CAMERA, i);
              },
            },
            {
              text: 'annuler',
              role: 'cancel',
            },
          ],
        });
        await actionSheet.present();
      }
    });
  }

  async takePicture1(sourceType, i) {
    if (this.platform.is('ios')) {
      const options: CameraOptions = {
        quality: 100,
        targetWidth: 900,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: sourceType,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
      };

      const tempImage = await this.camera.getPicture(options);
      const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);

      // Now, the opposite. Extract the full path, minus filename.
      // Result example: file:///var/mobile/Containers/Data/Application
      // /E4A79B4A-E5CB-4E0C-A7D9-0603ECD48690/tmp/
      const tempBaseFilesystemPath = tempImage.substr(
        0,
        tempImage.lastIndexOf('/') + 1
      );

      // Get the Data directory on the device.
      // Result example: file:///var/mobile/Containers/Data/Application
      // /E4A79B4A-E5CB-4E0C-A7D9-0603ECD48690/Library/NoCloud/
      const newBaseFilesystemPath = this.file.dataDirectory;
      await this.file.copyFile(
        tempBaseFilesystemPath,
        tempFilename,
        newBaseFilesystemPath,
        tempFilename
      );

      // Result example: file:///var/mobile/Containers/Data/Application
      // /E4A79B4A-E5CB-4E0C-A7D9-0603ECD48690/Library/NoCloud/cdv_photo_003.jpg
      const storedPhoto = newBaseFilesystemPath + tempFilename;
      this.file
        .resolveLocalFilesystemUrl(storedPhoto)
        .then((entry) => {
          (<FileEntry>entry).file((file) => this.readFile(file, i));
        })
        .catch((err) => {
          console.log(err);
          // this.presentToast('Error while reading file.');
        });
    } else {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: sourceType,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
      };
      this.camera.getPicture(options).then(
        (imageData) => {
          this.file
            .resolveLocalFilesystemUrl(imageData)
            .then((entry: FileEntry) => {
              entry.file((file) => {
                console.log(file);
                this.readFile(file, i);
              });
            });
        },
        (err) => {
          // Handle error
        }
      );
    }
  }

  readFile(file: any, i) {
    const reader = new FileReader();
    reader.onload = () => {
      // const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type,
      });
      //  formData.append('file', imgBlob, file.name);
      // this.uploadImageData(formData);
      if (i === 1) {
        this.upload2Firebase1(imgBlob);
      } else {
        console.log('if second image');
      }
    };
    reader.readAsArrayBuffer(file);
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
    return newFileName;
  }

  makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = this.makeid(5);
    const fileRef = this.angularstorage.ref(filePath);

    const task = this.angularstorage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available

    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((value) => {
            this.imgUrl = value;
            this.updateImage();
          })
        )
      )
      .subscribe();
  }

  upload2Firebase1(image) {
    const file = image;
    const filePath = this.makeid(5);
    const fileRef = this.angularstorage.ref(filePath);
    //const newFile = new File(file);
    // let newFile= file.getURL().getFile();

    const task = this.angularstorage.upload(filePath, file);
    console.log(filePath);
    console.log(file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available

    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((value) => {
            this.imgUrl = value;
            this.updateImage();
          })
        )
      )
      .subscribe();
  }

  updateImage() {
    const formData = new FormData();
    formData.append('user_id', this.uid);
    formData.append('user_img', this.imgUrl);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/user',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log('success');
          this.storage.set('user_img', this.imgUrl);
          this.loadData();
        } else {
          console.log('successfalse check code');
        }
      });
  }

  startFollow(detail) {
    const formData = new FormData();
    formData.append('fol_user_id', this.uid);
    formData.append('fol_host_id', detail.user_id);
    formData.append('fol_status', '1');
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/user_follow',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          var msg = 'You started Following ' + this.name;
          this.loadData();

          this.api.toast(msg);
        } else {
          console.log(res.json());
        }
      });
  }

  startUnfollow(detail) {
    const formData = new FormData();
    formData.append('fol_user_id', this.uid);
    formData.append('fol_host_id', detail.user_id);
    formData.append('fol_status', '0');
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/user_follow',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          console.log(res.json());
          var msg = 'You Unfollowed ' + this.name;
          this.loadData();
          this.api.toast(msg);
        } else {
          console.log(res.json());
        }
      });
  }

  loadData() {
    this.api.loading();
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_img').then((user_img) => {
        if (user_img === undefined || user_img === null || user_img === '') {
          this.Avatar = false;
        } else {
          this.Avatar = true;
          this.imgUrl = user_img;
        }
      });

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
            this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
            this.followers = res.json().result[0].followers;
            this.following = res.json().result[0].following;
            this.hourly = res.json().result[0].user_price_hour;
            this.person = res.json().result[0].user_price_per_person;

            this.userDescription = res.json().result[0].user_description1;
            this.coachingOffered = res.json().result[0].user_description2;
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
          } else {
            console.log(res.json());
          }
          const formData = new FormData();
          formData.append('user_id', this.uid);
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
                this.api.dismissLoading();
              } else {
                console.log(res.json());
                this.api.dismissLoading();
              }
            });
        });
    });
  }

  events() {
    this.api.Navigate('evenementcoachvue');
  }

  manage() {
    this.api.Navigate('evenements-coach');
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
}
