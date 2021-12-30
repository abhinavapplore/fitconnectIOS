import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  RouteReuseStrategy,
  RouterModule,
} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import 'firebase/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { File } from '@ionic-native/file/ngx';
// import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path/ngx';

import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';

import { SelectCountry2PageModule } from './inscription-professionnel/select-country2/select-country2.module';
import { SelectCountryPageModule } from './inscription-particulier/select-country/select-country.module';
import { ParticipantsPageModule } from '../app/participants/participants.module';
import { SearchfilterPageModule } from '../app/searchfilter/searchfilter.module';
import { FollowlistPageModule } from '../app/followlist/followlist.module';
import { RateuserPageModule } from '../app/rateuser/rateuser.module';
import {
  DocumentViewer,
  DocumentViewerOptions,
} from '@awesome-cordova-plugins/document-viewer/ngx';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { Globalization } from '@ionic-native/globalization/ngx';
import { IonicRatingModule } from 'ionic4-rating';
// import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { PurchaseService } from './services/purchase.service';
import { CoachParticipatedEventsComponent } from './coach-participated-events/coach-participated-events.component';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
// }
export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

var config = {
  apiKey: 'AIzaSyDotnA5JC8ct9ILEwYzxKuQqwoBe5fYbUs',
  authDomain: 'fitnconnect-d126f.firebaseapp.com',
  projectId: 'fitnconnect-d126f',
  storageBucket: 'fitnconnect-d126f.appspot.com',
  messagingSenderId: '102646053757',
  appId: '1:102646053757:web:3946830ba41985fd04ea14',
  measurementId: 'G-G1579GY5NQ',
};

@NgModule({
  declarations: [AppComponent, CoachParticipatedEventsComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicRatingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: LanguageLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    HttpClientModule,
    HttpModule,
    AgmCoreModule,
    SelectCountry2PageModule,
    FollowlistPageModule,
    RateuserPageModule,
    ParticipantsPageModule,
    SearchfilterPageModule,
    SelectCountryPageModule,
    RouterModule,
  ],
  providers: [
    PurchaseService,
    StatusBar,
    Geolocation,
    FCM,
    File,
  
    // InAppPurchase2,

    Camera,
    SocialSharing,
    // Stripe,
    Diagnostic,
    // LocalNotifications,
    FilePath,
    Keyboard,
    Screenshot,
    DocumentViewer,
    SplashScreen,
    HttpClientModule,
    FileOpener,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
