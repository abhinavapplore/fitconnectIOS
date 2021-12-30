import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SelectCountryPage } from '../inscription-particulier/select-country/select-country.page';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import { Storage } from '@ionic/storage';
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

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';


import {
  DocumentViewer,
  DocumentViewerOptions,
} from '@awesome-cordova-plugins/document-viewer/ngx';
import { HttpClient } from '@angular/common/http';
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-inscription-professionnel',
  templateUrl: './inscription-professionnel.page.html',
  styleUrls: ['./inscription-professionnel.page.scss'],
})
export class InscriptionProfessionnelPage implements OnInit {
  height = window.innerHeight;
  submitted;
  countryId;
  cityName;
  cityArray = [];
  showCitySuggestion: boolean = false;
  country = '';
  deviceKey: any;
  registerForm: FormGroup;
  userAvatar: Observable<string>;
  userAvatarStr: string;
  uploadPercent: Observable<number>;
  uploaded1: boolean = false;
  lastImage: any;
  useId: any;
  langMonthsPlaceHolder: any;
  doneText;
  cancelText;
  English: boolean;
  todayDate = moment().format('YYYY-MM-DD');
  countryListAllIsoData: any = [];
  searchName;
  showContList: boolean = false;

  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    private angularstorage: AngularFireStorage,
    private modalCtrl: ModalController,
    private fcm: FCM,
    private storage: Storage,
    private document: DocumentViewer,
    private camera: Camera,
    public fs: AngularFirestore,
    public afa: AngularFireAuth,
    public router: Router,
    private fileOpener: FileOpener,
    public httpClient: HttpClient,
    private file: File,
    private filePath: FilePath,
    public platform: Platform,
    public actionSheetController: ActionSheetController,
    public translateSevice: TranslateConfigService
  ) {
    this.submitted = false;
    this.creatform();
  }

  ngOnInit() {
    this.storage.get('user_lang').then(async (lang) => {
      console.log('language' + lang);
      if (lang == 'English') {
        this.English = true;
      } else {
        this.English = false;
      }
    });
    this.fcm.getToken().then((tokenDevice) => {
      console.log(tokenDevice);
      this.deviceKey = tokenDevice;
      this.storage.set('device_token', this.deviceKey);

      this.storage.set('user_type', '2');
    });
  }

  ionViewWillEnter() {
    this.countryListAllIsoData = [];
    const formData = new FormData();

    this.httpClient
      .post<any>(
        ' http://fitconnected.prometteur.in/index.php/Api/fields/country_list',
        formData
      )
      .subscribe((res) => {
        console.log(res);
        this.countryListAllIsoData = res.result;
      });
  }

  searchContFunc(ev: any) {
    var arr = [];
    for (let i = 0; i < this.countryListAllIsoData.length; i++) {
      var input = this.countryListAllIsoData[i];
      arr.push(input);

      let val = ev.target.value;
      // alert(typeof(val));
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        // Filter the items
        this.searchName = arr.filter(function (item) {
          return item.con_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });

        // Show the results
        if (this.searchName.length !== 0) {
          this.showContList = true;
        } else {
          this.showContList = false;
        }
      } else {
        // hide the results when the query is empty
        this.showContList = false;
      }

      // console.log(arr);
    }
  }
  selectContItem(item) {
    console.log(item);

    this.countryId = item.con_id;
    this.country = item.con_name;
    this.registerForm.patchValue({ country: this.country });
    this.showContList = false;

    return;
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
      try {
        await this.file.removeFile(newBaseFilesystemPath, tempFilename);
      } catch (error) {}
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

  conditionsPage() {
    //     let filePath = this.file.applicationDirectory + 'www/assets';
    //     if(this.platform.is('android')){
    //  let fakeName = Date.now();
    //  this.file.copyFile(filePath, 'register.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then((results)=>{
    //  this.fileOpener.open(results.nativeURL, 'application/pdf')
    //  })
    //     }else{
    //      const options: DocumentViewerOptions = {
    //        title: 'CGU'
    //      }

    //      this.document.viewDocument(`${filePath}/register.pdf`, 'application/pdf', options)
    //     }

    this.api.Navigate('conditions');
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
            this.lastImage = value;
            this.api.dismissLoading();
          })
        )
      )
      .subscribe();
  }

  creatform() {
    this.registerForm = this.formBuilder.group({
      lname: ['', Validators.required],
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      postalcode: ['', Validators.required],
      country: [this.country, Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      conditions: ['false', Validators.requiredTrue],
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log('working');
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.registerparticulier();
    }
  }

  async registerparticulier() {
    var dateOfBirth = moment(this.registerForm.value.dob).format('YYYY-MM-DD');
    if (dateOfBirth >= this.todayDate) {
      console.log(dateOfBirth);
      console.log(this.todayDate);
      if (this.English) {
        this.api.toast('DOB cannot be future date.');
      } else {
        this.api.toast('DOB ne peut pas être une date future.');
      }
    } else {
      console.log(dateOfBirth);
      if (
        this.lastImage === '' ||
        this.lastImage === null ||
        this.lastImage === undefined
      ) {
        if (this.English) {
          this.api.toast('Please upload display picture.');
        } else {
          this.api.toast("Veuillez télécharger l'image d'affichage");
        }
      } else {
        const formData = new FormData();
        formData.append('user_email', this.registerForm.value.email);

        let res = await this.api.postapi('fields/check_email_exists', formData);
        if (res.result == true) {
          if (this.English) {
            var msg = 'Email Exists.';
          } else {
            var msg = 'Le mail existe.';
          }
          this.api.toast(msg);
        } else {
          this.storage.set('user_type', '2');

          this.storage.set('user_email', this.registerForm.value.email);
          this.storage.set('user_password', this.registerForm.value.password);
          this.storage.set('user_fcm_key', this.deviceKey);
          this.storage.set('user_f_name', this.registerForm.value.fname);
          this.storage.set('user_l_name', this.registerForm.value.lname);
          this.storage.set('user_dob', dateOfBirth);
          this.storage.set('user_img', this.lastImage);
          this.storage.set(
            'user_postal_code',
            this.registerForm.value.postalcode
          );
          this.storage.set('user_gender', this.registerForm.value.gender);
          this.storage.set('user_country', this.registerForm.value.country);
          this.storage.set('user_city', this.registerForm.value.city);
          this.api.Navigate('inscription-professionnel2');
        }
      }
    }
  }

  async selectcountry() {
    const modal = await this.modalCtrl.create({
      component: SelectCountryPage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();

    this.countryId = data.componentProps.country.con_id;
    this.country = data.componentProps.country.con_name;
    this.registerForm.patchValue({ country: this.country });
    console.log('aaaaaaaaaaaaaaaaa', data.componentProps.country);
  }

  setconditions(x) {
    this.registerForm.patchValue({ conditions: x });
  }

  getSuggestion() {
    const formData = new FormData();
    formData.append('city_country_id', this.countryId);
    formData.append('city_name', this.registerForm.value.city);
    this.httpClient
      .post<any>(
        ' http://fitconnected.prometteur.in/index.php/Api/fields/city_list',
        formData
      )
      .subscribe((res) => {
        console.log(res);
        this.cityArray = res.result;
        this.showCitySuggestion = true;
      });
  }

  selectCity(x) {
    this.showCitySuggestion = false;
    this.cityName = x;

    this.registerForm.value.city = x;
  }
}
