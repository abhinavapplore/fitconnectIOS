import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from  '@ionic/storage';
import { TranslateConfigService } from '../translate-config.service';


@Component({
  selector: 'app-inscription-professionnel2',
  templateUrl: './inscription-professionnel2.page.html',
  styleUrls: ['./inscription-professionnel2.page.scss'],
})
export class InscriptionProfessionnel2Page implements OnInit {
  discription1;
  discription2;
  langSportPlaceHolder;
  
  English:boolean;
  
  items:any=[];
  language;

  otherSportsCat: string = '';
  constructor(public api:ApiService,public storage:Storage, public translateSevice:TranslateConfigService,
    ) { }

  ngOnInit() {
    this.storage.get('user_lang').then(async (lang)=>{
      console.log("language"+lang)
      this.language=lang;
       if(lang=="English"){
         this.English=true;
         this.langSportPlaceHolder="What do you propose ?";
         
         
       }else{
         this.English=false;
         this.langSportPlaceHolder="Que proposes-tu ?";
        
       }
      
       

      });
    
    
  }

 

 

  submit(){

       if(this.discription1){
        this.storage.set('user_desc', this.discription1);
        this.api.Navigate("inscription-professionnel3");
       }else{
        if(this.English){
          this.api.toast("Please add description.");
        }else{
          this.api.toast("Veuillez ajouter une description.");
        }
       }

  }
}
