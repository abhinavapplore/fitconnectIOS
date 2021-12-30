import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.page.html',
  styleUrls: ['./question2.page.scss'],
})
export class Question2Page implements OnInit {
  discription;
  English:boolean;
  constructor(public api:ApiService, public storage:Storage) { }

  ngOnInit() {
this.storage.get('user_lang').then((lang)=>{
  if(lang=="English"){
    this.English=true;
  }else{
    this.English=false;
  }
});
  }

  submit(){
    if(this.discription){
      var setdiscription = this.api.getStorage("questions");
      setdiscription.user_description1 = this.discription;
    this.api.setstorage("questions",setdiscription);
    this.api.Navigate("inscription-professionnel3")
    }
    else{
      if(this.English){
        this.api.toast("Please fill the Description.")
      }else{
        this.api.toast("Veuillez remplir la description.");
      }
    
    }

    

  }

}
