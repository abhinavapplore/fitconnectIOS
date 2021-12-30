import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
  language: any;
  constructor(
    private translate: TranslateService,
    public storage: Storage,
    public navCtrl: NavController
  ) {}

  getDefaultLanguage() {
    this.storage.get('user_lang').then((userLang) => {
      console.log('userLang', userLang);
      // console.log("HEYYYYYY")
      if (userLang == undefined || userLang == null) {
        this.navCtrl.navigateRoot(['/welcome']);
        //   let language = this.translate.getBrowserLang();
        //   this.translate.setDefaultLang(language);
        //   console.log("bacha language"+language);
        //   if(language==="en"){
        //     this.language="English";
        //   }else if(language==="fr"){
        //     this.language="French";
        //   }
        //   this.storage.set('user_lang', this.language );
        //  // this.translate.use("fr");
        //   return language;
      } else {
        this.storage.set('user_lang', userLang);
        if (userLang == 'English' || userLang == 'en') {
          this.translate.setDefaultLang('en');
          return 'en';
        } else {
          this.translate.setDefaultLang('fr');
          return 'fr';
        }
      }
    });
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
    if (setLang === 'en') {
      this.language = 'English';
    } else if (setLang === 'fr') {
      this.language = 'French';
    }
    this.storage.set('user_lang', this.language);
  }
}
