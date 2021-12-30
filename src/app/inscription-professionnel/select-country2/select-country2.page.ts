import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

@Component({
  selector: 'app-select-country2',
  templateUrl: './select-country2.page.html',
  styleUrls: ['./select-country2.page.scss'],
})
export class SelectCountry2Page implements OnInit {
  query;
  constructor(public splashScreen:SplashScreen) { }

  ngOnInit() {
   
      this.splashScreen.show();

   
  }
  



 

}
