import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { File, FileEntry } from '@ionic-native/file/ngx';
// import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import 'firebase/storage';
import { finalize } from 'rxjs/operators';
import {
  NavController,
  ActionSheetController,
  ToastController,
  Platform,
  LoadingController,
  ModalController,
  AlertController,
} from '@ionic/angular';

import 'firebase/storage';
import * as firebase from 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inscription-docs',
  templateUrl: './inscription-docs.page.html',
  styleUrls: ['./inscription-docs.page.scss'],
})
export class InscriptionDocsPage implements OnInit {
  alertShown = false;
  one;
  two;
  udk: any;
  uploadPercent: Observable<number>;
  lastImage: any;
  nextImage: any;
  annexure: any;
  uploadPercent1: Observable<number>;
  uploaded1: boolean = false;
  uploaded2: boolean = false;
  uploaded3: boolean = false;

  userfName;
  userlName;
  user_email;
  user_password;
  user_dob;
  user_postal_code;
  user_gender;
  user_img;
  user_country;
  user_city;
  user_fcm_key;
  useId;
  user_price_hour;
  user_price_per_person;
  user_desc;
  sportsInstructed;
  lang;
  langNumber;
  userUpdate: boolean = false;
  user: any = {};
  otherSportsCategory: string = '';
  constructor(
    public alertController: AlertController,
    public api: ApiService,
    public storage: Storage,
    private camera: Camera,
    //  private transfer: Transfer,
    private file: File,
    private filePath: FilePath,
    public platform: Platform,
    public actionSheetController: ActionSheetController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private router: Router,
    private af: AngularFireStorage,
    public fs: AngularFirestore,
    public afa: AngularFireAuth,
    public translateService: TranslateService
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params && params.special) {
        this.storage.get('user_id').then((user_id) => {
          this.user = JSON.parse(params.special);
          if (this.user.user_id_card != 'undefined') {
            this.uploaded1 = true;
          }
          if (this.user.user_diploma_card != 'undefined') {
            this.uploaded2 = true;
          }
          if (this.user.user_attachment != 'undefined') {
            this.uploaded3 = true;
          }
          this.userUpdate = true;
        });
      }
    });
  }

  ngOnInit() {
    this.storage.get('user_lang').then((lang) => {
      this.lang = lang;
      if (this.lang == 'English') {
        this.langNumber = '1';
      } else {
        this.langNumber = '2';
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
                        this.storage
                          .get('user_fcm_key')
                          .then((user_fcm_key) => {
                            this.storage.get('user_desc').then((user_desc) => {
                              this.storage
                                .get('user_sport_category')
                                .then((user_sport_category) => {
                                  this.storage
                                    .get('user_other_sport_cate')
                                    .then((user_other_sport_cate) => {
                                      this.userfName = user_f_name;
                                      this.userlName = user_l_name;
                                      this.user_email = user_email;
                                      this.user_password = user_password;
                                      this.user_dob = user_dob;
                                      this.user_postal_code = user_postal_code;
                                      this.user_gender = user_gender;
                                      this.user_img = user_img;
                                      this.user_country = user_country;
                                      this.user_city = user_city;
                                      this.user_fcm_key = user_fcm_key;

                                      this.user_desc = user_desc;
                                      this.sportsInstructed = user_sport_category;
                                      let selectedSports = '';
                                      let selectSportsName = '';
                                      for (
                                        var i = 0;
                                        i < user_sport_category.length;
                                        i++
                                      ) {
                                        selectSportsName += `${user_sport_category[i].spcat_name},`;
                                        selectedSports += `${user_sport_category[i].spcat_id},`;
                                      }
                                      this.storage.set(
                                        'user_sport_category',
                                        selectSportsName.substr(
                                          0,
                                          selectSportsName.length - 1
                                        )
                                      );

                                      this.sportsInstructed = selectedSports.substr(
                                        0,
                                        selectedSports.length - 1
                                      );

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
    if (!this.alertShown) {
      let heading = '';
      let body = '';
      this.translateService.get('WARNING.Text1').subscribe((data1) => {
        heading = data1;
        this.translateService.get('WARNING.Text2').subscribe(async (data2) => {
          body = data2;
          // alert(heading);
          // alert(body);

          const alert2 = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: heading,
            subHeader: '',
            message: body,
            buttons: ['OK'],
          });

          await alert2.present();
          this.alertShown = true;
        });
      });

      // this.alertShown=true
      return;
    }

    if (!this.userUpdate) {
      const formData = new FormData();
      formData.append('user_l_name', this.userlName);
      formData.append('user_f_name', this.userfName);
      formData.append('user_email', this.user_email);
      formData.append('user_password', this.user_password);
      formData.append('user_dob', this.user_dob);
      formData.append('user_postal_code', this.user_postal_code);
      formData.append('user_gender', this.user_gender);
      formData.append('user_img', this.user_img);
      formData.append('user_type', '2');
      formData.append('user_country', this.user_country);
      formData.append('user_city', this.user_city);
      formData.append('user_fcm_key', this.user_fcm_key);

      formData.append('user_description1', this.user_desc);
      formData.append('user_sport_category', this.sportsInstructed);
      formData.append('user_other_sport_cate', this.otherSportsCategory);

      formData.append('user_id_card', this.lastImage);
      formData.append('user_diploma_card', this.nextImage);
      formData.append('user_attachment', this.annexure);
      formData.append('user_language', this.langNumber);
      // new form data for the input

      let res = await this.api.postapi('madd/user', formData);
      if (res.status == 1) {
        this.useId = res.result.toString();
        // firebase
        //   .auth()
        //   .createUserWithEmailAndPassword(this.user_email, '12345678')
        //   .then(() => {
        //     this.afa.auth.currentUser
        //       .updateProfile({
        //         displayName: this.userfName + this.userlName,
        //         photoURL: this.lastImage,
        //       })
        //       .catch((err) => {});
        //   })
        //   .catch((err) => {
        //     console.log('falied email' + err);
        //   });
        this.fs
          .collection('friends')
          .doc(this.useId)
          .set(
            {
              userEmail: this.user_email,
              // userPhone: this.mobile,
              hubSportId: this.useId,
              Name: this.userfName + this.userlName,
              displayName: this.userfName + this.userlName,
              photoURL: this.user_img,
              UserID: this.useId,
              Timestamp: firebase.Timestamp.fromDate(new Date()),
            },
            { merge: true }
          );

        this.storage.set('verifiedCoach', false);
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
        this.storage.set(
          'user_postal_code',
          res.user_details[0].user_postal_code
        );
        if (res.user_details[0].user_subscription == '0') {
          this.storage.set('verifiedCoach', false);
        } else {
          this.storage.set('verifiedCoach', true);
        }
        this.api.Navigate('evenementcoachvue');
      } else {
        // this.creatform();
        this.api.toast(res.msg);
      }
    } else {
      const formData = new FormData();
      formData.append('user_id', this.user.user_id);
      formData.append('user_id_card', this.lastImage);
      formData.append('user_diploma_card', this.nextImage);
      formData.append('user_attachment', this.annexure);
      let res = await this.api.postapi('madd/user', formData);
      if (res.status == 1) {
        if (this.langNumber == '1') {
          this.api.toast(
            'Thank you for your submission. We will verify your account and send you confirmation.'
          );
          this.api.Navigateroot('evenementcoachvue');
        } else {
          this.api.toast(
            'Merci pour votre soumission. Nous vérifierons votre compte et vous enverrons une confirmation.'
          );
          this.api.Navigateroot('evenementcoachvue');
        }
      } else {
        this.api.toast(res.json().msg);
      }
    }
  }

  async presentActionSheet(i) {
    if (this.lang == 'English') {
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
            text: 'annuler',
            role: 'cancel',
          },
        ],
      });
      await actionSheet.present();
    }
  }

  takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.file
          .resolveLocalFilesystemUrl(imageData)
          .then((entry: FileEntry) => {
            entry.file((file) => {
              console.log('Hello there');
              console.log(file);
              if (this.uploaded1 === false) {
                this.upload2Firebase1(file);
              } else if (this.uploaded1 === true) {
                this.upload2Firebase2(file);
              }

              // this.readFile(file);
            });
          });
      },
      (err) => {
        // Handle error
      }
    );
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
      } else if (i === 2) {
        this.upload2Firebase2(imgBlob);
      } else {
        this.upload2Firebase3(imgBlob);
      }
    };
    reader.readAsArrayBuffer(file);
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

  upload2Firebase1(image) {
    this.api.loading();
    const file = image;
    const filePath = this.makeid(5);
    const fileRef = this.af.ref(filePath);
    //const newFile = new File(file);
    // let newFile= file.getURL().getFile();

    const task = this.af.upload(filePath, file);
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
            this.lastImage = value;
            this.api.dismissLoading();
            if (this.lang == 'English') {
              this.api.toast('ID uploaded');
            } else {
              this.api.toast('ID téléchargé');
            }
          })
        )
      )
      .subscribe();
  }
  upload2Firebase2(image) {
    this.api.loading();
    const file = image;
    console.log('hello' + typeof file);
    const filePath = this.makeid(5);
    const fileRef = this.af.ref(filePath);
    //  new File([file], , {type:file})

    const task = this.af.upload(filePath, file);
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
            this.uploaded2 = true;
            this.nextImage = value;
            this.api.dismissLoading();
            if (this.lang == 'English') {
              this.api.toast('Document Uploaded');
            } else {
              this.api.toast('Document téléchargé.');
            }
          })
        )
      )
      .subscribe();
  }

  upload2Firebase3(image) {
    this.api.loading();
    const file = image;
    console.log('hello' + typeof file);
    const filePath = this.makeid(5);
    const fileRef = this.af.ref(filePath);
    //  new File([file], , {type:file})

    const task = this.af.upload(filePath, file);
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
            this.uploaded3 = true;
            this.annexure = value;

            // this.api.toast("Annexes Uploaded");
            this.api.dismissLoading();
            if (this.lang == 'English') {
              this.api.toast('Press Submit to continue');
            } else {
              this.api.toast('Appuyez sur SUIVANT pour continuer');
            }
          })
        )
      )
      .subscribe();
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = this.makeid(5);
    const fileRef = this.af.ref(filePath);

    const task = this.af.upload(filePath, file);
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
            this.lastImage = value;
            this.uploaded1 = true;
          })
        )
      )
      .subscribe();
  }
  uploadFile1(event) {
    const file1 = event.target.files[0];
    const filePath1 = this.makeid(5);
    const fileRef1 = this.af.ref(filePath1);

    const task1 = this.af.upload(filePath1, file1);

    // observe percentage changes
    this.uploadPercent1 = task1.percentageChanges();
    // get notified when the download URL is available

    task1
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef1.getDownloadURL().subscribe((value) => {
            this.nextImage = value;
            this.uploaded2 = true;
          })
        )
      )
      .subscribe();
  }
}
