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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})
export class MonProfilPage implements OnInit {
  uid: any;
  name: any;
  practice: any;
  sportsPlayed: any;
  userDescription: any;
  gender: any;
  dob: any;
  age: any;
  sportsInterest: any;
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
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        var details = JSON.parse(params.special);
        if (
          details.pageRoute === 'editDisponsibility' ||
          details.pageRoute === 'question'
        ) {
          this.uid = details.userId;
          this.loadData();
        }
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
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_img').then((user_img) => {
        this.storage.get('user_lang').then((lang) => {
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
              this.api.profile = res.json().result[0];
              // alert(this.api.profile.spcat_name);
              var lastName = res.json().result[0].user_l_name;
              var l_name = lastName.substring(0, 1);
              this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
              this.followers = res.json().result[0].followers;
              this.following = res.json().result[0].following;
              this.practice = res.json().result[0].user_question1_response;
              this.sportsPlayed = res.json().result[0].user_question2_response;
              this.imgUrl = res.json().result[0].user_img;
              this.sportsInterest = res.json().result[0].spcat_name;
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
            } else {
              console.log(res.json());
            }
          });
      });
    });
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

  reviewPage() {
    this.api.Navigate('profilereview');
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

  closeDetailsBox() {
    if (this.followerList === true) {
      this.followerList = false;
    } else if (this.followingList === true) {
      this.followingList = false;
    }
  }

  sportsPractice() {
    var vc = {
      pageRoute: 'myProfile',
      userId: this.uid,
      selected: this.practice,
    };

    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };

    this.router.navigate(['question'], navigationExtras);
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
      this.storage.get('user_img').then((user_img) => {
        this.storage.get('user_lang').then((lang) => {
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
              this.api.profile = res.json().result[0];
              // alert(this.api.profile.spcat_name);
              var lastName = res.json().result[0].user_l_name;
              var l_name = lastName.substring(0, 1);
              this.name = res.json().result[0].user_f_name + ' ' + l_name + '.';
              this.followers = res.json().result[0].followers;
              this.following = res.json().result[0].following;
              this.practice = res.json().result[0].user_question1_response;
              this.sportsPlayed = res.json().result[0].user_question2_response;
              this.imgUrl = res.json().result[0].user_img;
              this.sportsInterest = res.json().result[0].spcat_name;
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
            } else {
              console.log(res.json());
            }
          });
      });
    });
  }
  sportsPlayedFunc() {
    this.api.Navigate('sports-practice');
  }
  sportsPlayedFunc1() {
    if (this.editPlayed === true) {
      if (
        this.editPlay == null ||
        this.editPlay == undefined ||
        this.editPlay == ''
      ) {
        this.displayEmptyPlayError = true;
      } else {
        console.log(this.editPlay);
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_question2_response', this.editPlay);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/user',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log(res);
              this.editPlayed = false;
              this.loadData();
            } else {
            }
          });
      }
    } else {
      this.editPlayed = true;
    }
  }

  description() {
    if (this.editDescription === true) {
      if (
        this.userDesc == null ||
        this.userDesc == undefined ||
        this.userDesc == ''
      ) {
        this.displayEmptyDescError = true;
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
            this.userAvatarStr = value;
          })
        )
      )
      .subscribe();
  }

  upload2Firebase1(image) {
    this.api.timerloading();
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
            this.uploaded1 = true;
            this.imgUrl = value;
            this.api.dismissLoading();
            this.updateImage();
          })
        )
      )
      .subscribe();
  }

  updateImage() {
    this.api.timerloading();
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
          this.api.dismissLoading();
          this.loadData();
        } else {
          this.api.dismissLoading();
          console.log('successfalse check code');
        }
      });
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
        } else {
          console.log(res.json());
          this.api.dismissLoading();
        }
      });
  }

  activity() {
    this.api.Navigate('mon-profil-activite');
  }

  editSchedule() {
    console.log('clicked');
    var vc = {
      pageRoute: 'mon-profil',
    };

    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };
    this.router.navigate(['question3'], navigationExtras);
  }

  events() {
    this.api.Navigate('creer-evenement');
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
    this.api.Navigate('mes-evenements');
  }

  rankingDetails() {
    this.api.Navigate('ranking');
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
}
