import { Component, ViewChildren, QueryList } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

import { Platform, Config, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

import { Storage } from '@ionic/storage';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from './translate-config.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import {
//   IAPProduct,
//   InAppPurchase2,
// } from '@ionic-native/in-app-purchase-2/ngx';
// import { PurchaseService } from './services/purchase.service';

declare var store;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  backButtonSubscription;
  deviceKey;
  English: boolean;
  noti: boolean = false;
  allUsers;
  emptydata: boolean;
  public counter = 0;
  openchats: any = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    private platform: Platform,
    public storage: Storage,
    public fs: AngularFirestore,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private languageService: TranslateConfigService,
    private config: Config,
    private router: Router,
    public fcm: FCM,
    private navController: NavController,
    private toastController: ToastController,
    private translate: TranslateService,
    public api: ApiService,
    public httpClient: HttpClient,
    public http: Http,
    // public store: InAppPurchase2,
    // public purchaseService: PurchaseService
  ) {
    this.initializeApp();
  }
  checkAutoLogin() {
    this.storage.get('user_id').then((user_id) => {
      if (user_id != null || user_id != undefined) {
      } else {
      }
    });
  }

  // somethingAboutChat(user_id) {
  //   this.allUsers = this.fs
  //     .collection('friends')
  //     .doc(user_id)
  //     .collection('chats', (ref) => ref.orderBy('Timestamp', 'desc'))
  //     .snapshotChanges();
  //   if (this.allUsers.length != 0) {
  //     this.allUsers.forEach((user) => {
  //       console.log('USER', user);

  //       if (user.length == 0) {
  //         this.emptydata = true;
  //         this.api.dismissLoading();
  //       } else {
  //         // this.emptydata = false;
  //         this.openchats = [];
  //         user.forEach((userData) => {
  //           // let id = userData.payload.doc.id;

  //           this.openchats.push(userData.payload.doc.data());
  //           // console.log('this is openchat array in app component file');
  //           // console.log(this.openchats);

  //           // console.log('ID: ', id, ' Data: ', data);
  //           // if (this.openchats.length != 0) {
  //           //   this.emptydata = false;
  //           // } else {
  //           //   this.emptydata = true;
  //           // }
  //         });
  //         this.api.showMessageDot = false;
  //         for (var i = 0; i < this.openchats.length; i++) {
  //           if (this.openchats[i].msgRead == false) {
  //             this.api.showMessageDot = true;
  //             // break;
  //           }
  //         }
  //         this.api.dismissLoading();
  //       }
  //     });
  //   } else {
  //     this.api.dismissLoading();

  //     this.emptydata = true;
  //   }
  // }

  initializeApp() {
    console.log('step' + 1);
    // this.splashScreen.show();
    this.platform.ready().then(() => {
      this.storage
        .get('user_lang')
        .then((lang) => {
          if (lang == 'English') {
            this.English = true;
          } else {
            this.English = false;
          }
          console.log('got lang', lang);
        })
        .catch((err) => {
          console.log('error getting lang');
          this.English = true;
        });
      console.log('step' + 2);
      try {
        // this.store.verbosity = this.store.DEBUG;
        // this.purchaseService.registerProducts();
        // this.purchaseService.setupListeners();
      } catch (error) {}

      this.fcm
        .subscribeToTopic('/testtopic')
        .then((result) => {
          console.log('subscribing topic ', result);
        })
        .catch((err) => {
          console.log('subscribing topic err ', err);
        });

      this.languageService.getDefaultLanguage();
      console.log('step' + 3);
      this.storage.get('user_id').then((user_id) => {
        if (!user_id) {
          console.log('not loged in');

          this.storage.get('user_lang').then((lang) => {
            if (lang != null || lang != undefined) {
              this.navCtrl.navigateRoot(['/connexion']);
              // this.navCtrl.navigateRoot(['/inscription-professionnel3']);
            } else {
              this.navCtrl.navigateRoot(['/welcome']);
            }
          });

          return;
        } else {
          console.log('USER ID', user_id);

          this.storage.get('user_type').then((user_type) => {
            console.log('user_type', user_type);
            if (user_type === '1') {
              this.navCtrl.navigateRoot(['/creer-evenement']);
            } else {
              this.navCtrl.navigateRoot(['/evenementcoachvue']);
            }
          });
          this.api.updateToken(user_id);
          // this.api.checkNewNotificationUnread(user_id);
          this.api.somethingAboutChat(user_id);
        }
      });
      console.log('step' + 5);

      this.fcm.onTokenRefresh().subscribe((token) => {
        this.storage.get('user_id').then((user_id) => {
          //send to server
          this.deviceKey = token;
          this.storage.set('user_fcm_key', this.deviceKey);
          const formD = new FormData();
          formD.append('user_id', user_id);
          formD.append('user_fcm_key', this.deviceKey);
          this.http
            .post(
              'http://fitconnected.prometteur.in/index.php/Api/madd/user',
              formD
            )
            .subscribe((res) => {
              console.log(res);
            });
        });
      });
      // this.config.set('backButtonIcon', 'assets/images/back.svg');
      // this.statusBar.styleDefault();
      this.statusBar.styleLightContent();

      this.fcm.clearAllNotifications();

      this.fcm.onNotification().subscribe((data) => {
        console.log(data);
        if (data.noti_type == '8' || data.noti_type == 8) {
          this.showMessageToast();
        } else {
          this.api.toast(
            this.English
              ? 'You got new notification'
              : 'Vous avez une nouvelle notification'
          );
          this.api.showNotificationDot = true;
          this.updateNotiArray(data);
        }

        // this.api.Navigate('notifications');
      });

      //   } else {
      //     this.router.navigate(['/connexion']);
      //   }
      // });

      this.router.navigate(['/connexion']);
    });

    this.backButtonSubscription =
      this.platform.backButton.subscribeWithPriority(0, () => {
        this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
          if (
            this.router.url === '/creer-evenement' ||
            this.router.url === '/evenementcoachvue' ||
            this.router.url === '/connexion'
          ) {
            if (this.counter == 0) {
              this.counter++;
              this.presentToast();
              setTimeout(() => {
                this.counter = 0;
              }, 3000);
            } else {
              navigator['app'].exitApp();
            }
          } else if (outlet && outlet.canGoBack()) {
            outlet.pop();
          }
        });
      });
  }

  showMessageToast() {
    // console.log('activatedRoute', this.activatedRoute);
    console.log('activatedRoute', window.location);

    if (window.location.pathname.includes('conversation')) {
      return;
    }
    this.api.toast(
      this.English ? 'You got new message' : 'tu as un nouveau message'
    );
    // this.api.showMessageDot = true;
  }

  messageNotificationNavigation(data) {
    if (data.wasTapped) {
      console.log('Received in background');
      console.log(data);
      let vc = {
        senderId: data.senderId,
        recieverId: data.recieverId,
        recieverName: data.recieverName,
        recieverImg: data.recieverimg,
      };
      let navigationExtras = {
        queryParams: {
          special: JSON.stringify(vc),
        },
      };
      this.navCtrl.navigateRoot(['conversation'], navigationExtras);
    } else {
      console.log('Received in foreground');

      console.log(data);

      let vc = {
        senderId: data.senderId,
        recieverId: data.recieverId,
        recieverName: data.recieverName,
        recieverImg: data.recieverimg,
      };
      let navigationExtras = {
        queryParams: {
          special: JSON.stringify(vc),
        },
      };
      this.router.navigate(['conversation'], navigationExtras);
    }
  }

  updateNotiArray(data) {
    this.storage.get('notificationArray').then((notifications) => {
      if (notifications == undefined || notifications == null) {
        if (data.noti_type != '8') {
          var notiArray = [];
          var obj = { body: data.body };
          notiArray.push(obj);
        }

        this.storage.set('notificationArray', notiArray).then((noti) => {
          if (data.wasTapped) {
            console.log('Received in background');
            console.log(data);

            // this.navCtrl.navigateRoot('notifications');
            // this.api.pushNoti(data);
            this.noti = true;
            // if(data.noti_type=="8"||data.noti_type==8){

            //   let vc={

            //     senderId:data.senderId,
            //     recieverId:data.recieverId,
            //   recieverName:data.recieverName,
            //   recieverImg:data.recieverimg};
            //   let navigationExtras = {

            //   queryParams: {
            //     special: JSON.stringify(vc)
            //   }

            // };
            //   this.router.navigate(['conversation'], navigationExtras);
            // }else{
            // alert("laps")
            this.api.Navigateroot('notifications');
            // }
          } else {
            // if(data.noti_type=="8"||data.noti_type==8){

            //   let vc={
            //     senderId:data.senderId,
            //   recieverId:data.recieverId,
            //   recieverName:data.recieverName,
            //   recieverImg:data.recieverimg};
            //   let navigationExtras = {

            //   queryParams: {
            //     special: JSON.stringify(vc)
            //   }

            // };
            //   this.router.navigate(['conversation'], navigationExtras);
            // }else{
            // alert("laps")
            this.api.toast(
              this.English
                ? 'You got new notification'
                : 'Vous avez une nouvelle notification'
            );
            // this.api.Navigateroot('notifications');
            // }

            // this.api.pushNoti(data);

            console.log('Received in foreground');

            console.log(data);
          }
        });
      } else {
        console.log(data);

        if (data.noti_type != '8') {
          notifications.push(obj);
        }

        this.storage.set('notificationArray', notifications).then((noti) => {
          if (data.wasTapped) {
            console.log('Received in background');
            console.log(data);

            // this.navCtrl.navigateRoot('notifications');
            // this.api.pushNoti(data);
            this.noti = true;
            if (data.noti_type == '8' || data.noti_type == 8) {
              let vc = {
                senderId: data.senderId,
                recieverId: data.recieverId,
                recieverName: data.recieverName,
                recieverImg: data.recieverimg,
              };
              let navigationExtras = {
                queryParams: {
                  special: JSON.stringify(vc),
                },
              };
              // this.router.navigate(['conversation'], navigationExtras);
            } else {
              // alert("laps")
              // this.api.Navigateroot('notifications');
            }
            this.noti = true;
          } else {
            // this.api.pushNoti(data);

            if (data.noti_type == '8' || data.noti_type == 8) {
              let vc = {
                senderId: data.senderId,
                recieverId: data.recieverId,
                recieverName: data.recieverName,
                recieverImg: data.recieverimg,
              };
              let navigationExtras = {
                queryParams: {
                  special: JSON.stringify(vc),
                },
              };
              // this.router.navigate(['conversation'], navigationExtras);
            } else {
              // alert("laps")
              // this.api.Navigateroot('notifications');

              console.log(data);
            }
          }
        });
      }
    });
  }

  async presentToast() {
    // this.English = true;
    if (this.English) {
      const toast = await this.toastController.create({
        message: 'Press back again to exit.',
        duration: 2000,
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Appuyez à nouveau pour quitter.',
        duration: 2000,
      });
      toast.present();
    }
  }
}
