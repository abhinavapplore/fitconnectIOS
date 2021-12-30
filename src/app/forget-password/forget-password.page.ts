import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from  '@ionic/storage';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  uid:any;
  English:boolean;
  constructor(public api:ApiService,private storage: Storage,) { }

  ngOnInit() {
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_lang').then((lang)=>{
        if(lang=="English"){
          this.English=true;
        }else{
          this.English=false;
        }
      this.uid=user_id;
      console.log(this.uid);
    });
  });
  }
  email;
  async forgetpassword(){
    const formData = new FormData();
 formData.append('user_id',this.uid);
formData.append('user_email',this.email);
let res = await this.api.postapi("mForgot/user",formData);
if(res.status == 1){

if(this.English){

this.api.toast("Password has been sent on your email ID");
}else{
  this.api.toast("Le mot de passe a été envoyé sur votre e-mail ID");
}
 
  
  this.api.Navigate("connexion")
  }
  else{
    if(this.English){
      var msg = "Email Not exists."
    }else{
      var msg = "E-mail n'existe pas.";
    }
    this.api.toast(msg);
   
  }

  }

}
