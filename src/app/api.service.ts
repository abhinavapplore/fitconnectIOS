import { Injectable, EventEmitter, Output } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import * as moment from 'moment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TranslateConfigService } from './translate-config.service';
import { Storage } from '@ionic/storage';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  ///l---- for chat props
  uid: any;
  allUsers: any;
  openchats = [];
  emptydata: boolean = false;
  ///---
  fullName = '';
  userImage = '';
  showMessageDot = false;
  showNotificationDot = false;
  // notifications = [];
  @Output() devloperevent = new EventEmitter<any>();
  events = {
    refreshEvents: new EventEmitter(),
  };
  rootUrl;
  load: any;

  profile: any;

  constructor(
    public fcm: FCM,
    private http: HttpClient,
    public alertController: AlertController,
    // public localNotifications: LocalNotifications,
    private navCtrl: NavController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public translateSevice: TranslateConfigService,
    public storage: Storage,
    public fs: AngularFirestore
  ) {
    // this.rootUrl = 'http://fitconnected.prometteur.in/index.php/Api/';
    this.rootUrl = 'https://fitconnected.prometteur.in/index.php/Api/';
    this.getUserDataFromLS();
  }

  somethingAboutChat(user_id) {
    this.allUsers = this.fs
      .collection('friends')
      .doc(user_id)
      .collection('chats', (ref) => ref.orderBy('Timestamp', 'desc'))
      .snapshotChanges();
    if (this.allUsers.length != 0) {
      this.allUsers.forEach((user) => {
        console.log('USER', user);

        if (user.length == 0) {
          this.emptydata = true;
        } else {
          // this.emptydata = false;
          this.openchats = [];
          user.forEach((userData) => {
            // let id = userData.payload.doc.id;

            this.openchats.push(userData.payload.doc.data());
            // console.log('this is openchat array in app component file');
            // console.log(this.openchats);

            // console.log('ID: ', id, ' Data: ', data);
            // if (this.openchats.length != 0) {
            //   this.emptydata = false;
            // } else {
            //   this.emptydata = true;
            // }
          });
          this.showMessageDot = false;
          for (var i = 0; i < this.openchats.length; i++) {
            if (this.openchats[i].msgRead == false) {
              this.showMessageDot = true;
              // break;
            }
          }
        }
      });
    }
  }

  // pushNoti(x?){

  //   console.log(x);
  //   console.log("Notification Data check");
  //   this.localNotifications.schedule({
  //     id: 1,
  //     title: x.title,
  //     text: x.message,
  //     icon: '../../resources/icon.png',
  //     data: x
  //   });
  //   this.Navigateroot('notifications');

  // }

  Navigateroot(x) {
    var route = '/' + x;
    this.navCtrl.navigateRoot(route);
  }

  updateToken(user_id) {
    this.fcm.getToken().then((tokenDevice) => {
      console.log(tokenDevice);
      tokenDevice;
      this.storage.set('user_fcm_key', tokenDevice);
      const formD = new FormData();
      formD.append('user_id', user_id);
      formD.append('user_fcm_key', tokenDevice);
      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/madd/user',
          formD
        )
        .subscribe((res) => {
          console.log(res);
        });
    });
  }
  checkNewNotificationUnread(userId) {
    this.showNotificationDot = false;
    // this.notifications = [];
    const lastNotificationId =
      window.localStorage.getItem('lastNotificationId');
    if (!lastNotificationId) {
      window.localStorage.setItem('lastNotificationId', '0');
    }

    const formData = new FormData();
    formData.append('user_id', userId);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/unread_notification',
        formData
      )
      .subscribe((res: any) => {
        console.log('API NOTIFICATIONS UNREAD', res);
        try {
          // if (res.result[0].noti_id != lastNotificationId)
          if (res.unread_notification != 0) this.showNotificationDot = true;

          // this.notifications = res.result;
        } catch (error) {}
      });
  }

  getUserDataFromLS() {
    this.storage.get('user_f_name').then((user_f_name) => {
      this.storage.get('user_l_name').then((user_l_name) => {
        this.fullName = user_f_name + ' ' + user_l_name;
      });
    });
    this.storage.get('user_img').then((user_img) => {
      this.userImage = user_img;
    });
  }
  Navigate(x) {
    var route = '/' + x;
    this.navCtrl.navigateForward(route);
  }

  Navigateback(x) {
    var route = '/' + x;
    this.navCtrl.navigateBack(route);
  }

  async postapi(x, object) {
    this.loading();
    console.log(
      '%c ' + x + ' ' + 'mycode send',
      'background: #101e3d; color: #ffffff',
      object
    );
    var responce = await this.http
      .post<any>(this.rootUrl + x, object, {
        observe: 'response',
      })
      .pipe(
        map((res) => res),
        catchError((error: HttpErrorResponse) => {
          this.devloper(error);
          setTimeout(() => {
            this.dismissLoading();
          }, 100);
          console.log(
            '%c ' + x + ' ' + 'mycode error',
            'background: #f04141; color: #ffffff',
            error
          );
          return throwError(error);
        })
      )
      .toPromise();
    console.log(
      '%c ' + x + ' ' + 'mycode reponce',
      'background: #f3ba1d; color: #222428',
      responce
    );
    setTimeout(() => {
      this.dismissLoading();
    }, 100);
    if (responce.status == 200 || responce.status == 1) {
      return responce.body;
    } else {
      return null;
    }
  }

  async presentAlertSubscription(num) {
    this.storage.get('user_lang').then(async (lang) => {
      console.log('language' + lang);
      if (lang == 'English' && num == 1) {
        const alert = this.alertController.create({
          cssClass: 'subscriptionAlert',
          header: 'You must be a subscriber to create events!',

          buttons: [
            {
              text: 'I Subscribe',
              handler: () => {
                console.log('open subscribe page');
                this.openSubscriptionPage();
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',

              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
          ],
        });

        (await alert).present();
      } else if (lang != 'English' && num == 1) {
        const alert = await this.alertController.create({
          cssClass: 'subscriptionAlert',
          header: 'Vous devez être abonné(e) pour créer des événements !',

          buttons: [
            {
              text: 'Je m’abonne',
              handler: () => {
                console.log('open subscribe page');
                this.openSubscriptionPage();
              },
            },
            {
              text: 'Annuler',
              role: 'cancel',

              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
          ],
        });

        await alert.present();
      } else if (lang == 'English' && num == 2) {
        const alert = await this.alertController.create({
          cssClass: 'subscriptionAlert',
          header: 'You must be subscribed to see the profiles.',

          buttons: [
            {
              text: 'I Subscribe',
              handler: () => {
                console.log('open subscribe page');
                this.openSubscriptionPage();
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',

              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
          ],
        });

        await alert.present();
      } else if (lang != 'English' && num == 2) {
        const alert = await this.alertController.create({
          cssClass: 'subscriptionAlert',
          header: 'Vous devez être abonné(e) pour voir les profils.',

          buttons: [
            {
              text: 'Je m’abonne',
              handler: () => {
                console.log('open subscribe page');
                this.openSubscriptionPage();
              },
            },
            {
              text: 'Annuler',
              role: 'cancel',

              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
          ],
        });

        await alert.present();
      } else if (lang == 'English' && num == 3) {
        const alert = await this.alertController.create({
          cssClass: 'subscriptionAlert',
          header: 'You must be subscribed to see the events.',

          buttons: [
            {
              text: 'I Subscribe',
              handler: () => {
                console.log('open subscribe page');
                this.openSubscriptionPage();
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',

              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
          ],
        });

        await alert.present();
      } else if (lang != 'English' && num == 3) {
        const alert = await this.alertController.create({
          cssClass: 'subscriptionAlert',
          header: 'Vous devez être abonné pour voir les événements.',

          buttons: [
            {
              text: 'Je m’abonne',
              handler: () => {
                console.log('open subscribe page');
                this.openSubscriptionPage();
              },
            },
            {
              text: 'Annuler',
              role: 'cancel',

              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
          ],
        });

        await alert.present();
      }
    });
  }

  openSubscriptionPage() {
    this.Navigate('abonnement');
  }

  async getapi(x) {
    this.loading();
    console.log(
      '%c ' + x + ' ' + 'send',
      'background: #101e3d; color: #ffffff',
      x
    );
    var responce = await this.http
      .get<any>(this.rootUrl + x, {
        observe: 'response',
      })
      .pipe(
        map((res) => res),
        catchError((error: HttpErrorResponse) => {
          this.devloper(error);
          setTimeout(() => {
            this.dismissLoading();
          }, 100);
          console.log(
            '%c ' + x + ' ' + 'error',
            'background: #f04141; color: #ffffff',
            error
          );
          return throwError(error);
        })
      )
      .toPromise();
    console.log(
      '%c ' + x + ' ' + 'reponce',
      'background: #f3ba1d; color: #222428',
      responce
    );
    setTimeout(() => {
      this.dismissLoading();
    }, 100);
    if (responce.status == 200) {
      return responce.body;
    } else {
      return null;
    }
  }

  async toast(msg, dontShow = false, color = 'dark') {
    if (dontShow) return;
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color,
    });
    toast.present();
  }

  async toastLong(msg, dontShow = false) {
    if (dontShow) return;
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
    });
    toast.present();
  }

  // async loading() {
  //   this.load = await this.loadingController.create({
  //     message: 'Chargement...',
  //     spinner: 'dots',

  //   });
  //   this.load.present();
  // }

  // async dismissLoading() {
  //   this.load.dismiss();
  // }

  async timerloading() {
    this.storage.get('user_lang').then(async (lang) => {
      console.log('language' + lang);
      if (lang == 'English') {
        this.load = true;
        return await this.loadingController
          .create({
            message: 'Loading...',
            spinner: 'dots',
            duration: 3000,
          })
          .then((a) => {
            a.present().then(() => {
              console.log('presented');
              if (!this.load) {
                a.dismiss().then(() => console.log('abort presenting'));
              }
            });
          });
      } else {
        this.load = true;
        return await this.loadingController
          .create({
            message: 'Chargement...',
            spinner: 'dots',
            duration: 5000,
          })
          .then((a) => {
            a.present().then(() => {
              console.log('presented');
              if (!this.load) {
                a.dismiss().then(() => console.log('abort presenting'));
              }
            });
          });
      }
    });
  }

  async loading2() {}
  async loading() {
    this.storage.get('user_lang').then(async (lang) => {
      console.log('language' + lang);
      if (lang == 'English') {
        this.load = true;
        return await this.loadingController
          .create({
            message: 'Loading...',
            spinner: 'dots',
            // duration: 5000,
          })
          .then((a) => {
            a.present().then(() => {
              console.log('presented');
              if (!this.load) {
                a.dismiss().then(() => console.log('abort presenting'));
              }
            });
          });
      } else {
        this.load = true;
        return await this.loadingController
          .create({
            message: 'Chargement...',
            spinner: 'dots',
            // duration: 5000,
          })
          .then((a) => {
            a.present().then(() => {
              console.log('presented');
              if (!this.load) {
                a.dismiss().then(() => console.log('abort presenting'));
              }
            });
          });
      }
    });
  }

  async dismissLoading() {
    try {
      this.load = false;
      return await this.loadingController
        .dismiss()
        .then(() => console.log('dismissed'));
    } catch (error) {}
  }

  devloper(x) {
    this.devloperevent.emit(x);
  }

  setstorage(x, y) {
    localStorage.setItem(x, JSON.stringify(y));
  }

  getStorage(x) {
    return JSON.parse(localStorage.getItem(x));
  }

  clearStorage() {
    localStorage.clear();
    this.Navigate('/');
  }
}
