import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { File, FileEntry } from '@ionic-native/file/ngx';
// import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import {
  NavController,
  ActionSheetController,
  AlertController,
  Platform,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import 'firebase/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.page.html',
  styleUrls: ['./mon-compte.page.scss'],
})
export class MonComptePage implements OnInit {
  uid: any;
  name: any;
  postalCode: any;
  emailEdit: boolean = false;
  passEdit: boolean = false;
  postalEdit: boolean = false;
  emailId: any;
  password: any;
  gender: any;
  dob: any;
  age: any;
  Avatar: boolean = true;
  imgUrl: any;
  userAvatarStr: string;
  uploadPercent: Observable<number>;
  uploaded1: boolean = false;
  lastImage: any;
  newEmail: any;
  newPassword: any;
  newPostal: any;
  userType;
  displayPostalError: boolean = false;
  displayPassError: boolean = false;
  English: boolean;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue: boolean;

  constructor(
    public api: ApiService,
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    private camera: Camera,
    public platform: Platform,
    //  private transfer: Transfer,
    private angularstorage: AngularFireStorage,
    private file: File,
    private filePath: FilePath,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public router: Router
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
      this.storage.get('user_img').then((user_img) => {
        this.storage.get('user_type').then((user_type) => {
          this.storage.get('user_lang').then((lang) => {
            console.log(lang);
            if (lang == 'English') {
              this.English = true;
            } else {
              this.English = false;
            }

            this.userType = user_type;
            if (
              user_img === undefined ||
              user_img === null ||
              user_img === ''
            ) {
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
                  this.postalCode = res.json().result[0].user_postal_code;
                  this.emailId = res.json().result[0].user_email;
                  this.password = res.json().result[0].user_password;
                  this.imgUrl = res.json().result[0].user_img;
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
                }
              });
          });
        });
      });
    });
  }

  editEmail() {
    if (this.emailEdit === true) {
      console.log(this.newEmail);
      const formData = new FormData();
      formData.append('user_id', this.uid);
      formData.append('user_email', this.newEmail);
      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/madd/user',
          formData
        )
        .subscribe((res) => {
          if (res.json().status == 1) {
            console.log('success');
            this.emailEdit = false;
            this.loadData();
          } else {
            console.log('successfalse check code');
          }
        });
    } else {
      this.emailEdit = true;
    }
  }

  editPass() {
    if (this.passEdit === true) {
      console.log(this.password);
      if (
        this.password == null ||
        this.password == undefined ||
        this.password == ''
      ) {
        this.displayPassError = true;
      } else {
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_password', this.password);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/user',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log('success');
              this.passEdit = false;
              this.loadData();
            } else {
              console.log('successfalse check code');
            }
          });
      }
    } else {
      this.passEdit = true;
    }
  }

  editPostal() {
    if (this.postalEdit === true) {
      console.log(this.postalCode);
      if (
        this.postalCode == null ||
        this.postalCode == undefined ||
        this.postalCode == ''
      ) {
        this.displayPostalError = true;
      } else {
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_postal_code', this.postalCode);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/user',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log('success');
              this.postalEdit = false;
              this.loadData();
            } else {
              console.log('successfalse check code');
            }
          });
      }
    } else {
      this.postalEdit = true;
    }
  }

  async presentActionSheet(i) {
    if (this.English) {
      const actionSheet = await this.actionSheetController.create({
        header: 'Select a source image',
        buttons: [
          {
            text: 'Import from library',
            handler: () => {
              this.takePicture1(this.camera.PictureSourceType.PHOTOLIBRARY, i);
            },
          },
          {
            text: 'to take a picture',
            handler: () => {
              this.takePicture1(this.camera.PictureSourceType.CAMERA, i);
            },
          },
          {
            text: 'Cancel ',
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
              this.takePicture1(this.camera.PictureSourceType.PHOTOLIBRARY, i);
            },
          },
          {
            text: 'prendre une photo',
            handler: () => {
              this.takePicture1(this.camera.PictureSourceType.CAMERA, i);
            },
          },
          {
            text: 'annuler ',
            role: 'cancel',
          },
        ],
      });
      await actionSheet.present();
    }
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
            this.api.dismissLoading();
            this.updateImage();
          })
        )
      )
      .subscribe();
  }

  upload2Firebase1(image) {
    this.api.loading();
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
    this.api.loading();
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
          if (this.English) {
            this.api.toast('Profile Picture Updated');
          } else {
            this.api.toast('Image de profil mise à jour');
          }

          this.loadData();
        } else {
          console.log('successfalse check code');
        }
      });
  }

  loadData() {
    this.api.loading();
    this.storage.get('user_img').then((user_img) => {
      if (user_img === undefined || user_img === null || user_img === '') {
        this.Avatar = false;
      } else {
        this.Avatar = true;
      }
    });
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
          this.postalCode = res.json().result[0].user_postal_code;
          this.emailId = res.json().result[0].user_email;
          this.imgUrl = res.json().result[0].user_img;
          this.storage.set('user_img', this.imgUrl);
          this.password = res.json().result[0].user_password;
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
        }
        this.api.dismissLoading();
      });
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

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  async presentAlertConfirm() {
    if (this.English) {
      const alert = await this.alertController.create({
        cssClass: 'secondary',
        message: 'Are you sure you want to delete your account?',

        buttons: [
          {
            text: 'YES',
            handler: () => {
              console.log('Confirm Okay');
              this.deleteAccount();
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
        cssClass: 'secondary',
        message: 'Voulez-vous vraiment supprimer votre compte?',

        buttons: [
          {
            text: 'OUI',
            handler: () => {
              console.log('Confirm Okay');
              this.deleteAccount();
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

  deleteAccount() {
    const formData = new FormData();
    formData.append('user_id', this.uid);

    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/del/user',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          if (this.English) {
            var msg = 'Your account has been deleted';
          } else {
            var msg = 'Votre compte a été supprimé';
          }

          this.api.toast(msg);

          this.storage.remove('user_id').then(() => {
            this.storage.remove('user_type');
            this.storage.remove('user_session');
            this.storage.remove('user_email');
            this.storage.remove('user_password');
            this.storage.remove('user_f_name');
            this.storage.remove('user_l_name');
            this.storage.remove('user_img');

            this.api.Navigate('connexion');
          });
        } else {
          console.log(res.json());
        }
      });
  }
}
