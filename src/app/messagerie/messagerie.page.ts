import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from  '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.page.html',
  styleUrls: ['./messagerie.page.scss'],
})
export class MessageriePage implements OnInit {
  [x: string]: any;
  userType:any;
  constructor(public api:ApiService,public storage: Storage,
    public http:Http,public httpClient: HttpClient) { }

  ngOnInit() {
    this.storage.get('user_type').then((user_type) => {
      this.userType=user_type;
      this.platform.backButton.subscribe(() => {
        // do something here
      });
    });
  }

  events(){
    if(this.userType==="1"){
      this.api.Navigate("creer-evenement");
    }else{
      this.api.Navigate("evenementcoachvue");
    }
  }
  manage(){
    if(this.userType==="1"){
      this.api.Navigate("mes-evenements");
    }else{
      this.api.Navigate("evenements-coach");
    }
    
  }
  notifications(){
    this.api.Navigate("notifications")
  }
}
