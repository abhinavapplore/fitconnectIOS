import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from  '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page implements OnInit {
  daytime;
  day;
  selectedday;
  newArray=[];
  disponsibility:any;
  nav:boolean=false;
  uid:any;

  constructor(public api:ApiService ,public storage:Storage,
    public router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if(params.special){
        var details= JSON.parse(params.special);
        console.log(details);
        if(details.pageRoute=="mon-profil"){
          this.nav=true;
        }
        
      }
    });
   
  }

  ngOnInit() {
    this.storage.get('user_id').then((user_id) => {
      this.uid=user_id;
      if(this.nav===true){
        this.storage.get('user_question3_response').then((user_question3_response) => {
        this.day=user_question3_response;
        console.log("this.day");
        console.log(this.day);
        });
      }else{
        var setdiscription = this.api.getStorage("questions");
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",setdiscription);
        this.day = [
            {
              "name":"Lundi",
              "select":false,
              "Midi":false,
              "Matin":false,
              "Soir":false
            },
            {
              "name":"Mardi",
              "select":false,
              "Midi":false,
              "Matin":false,
              "Soir":false
            },
            {
              "name":"Mercredi",
              "select":false,
              "Midi":false,
              "Matin":false,
              "Soir":false
            },
            {
              "name":"Jeudi",
              "select":false,
              "Midi":false,
              "Matin":false,
              "Soir":false
            },
            {
              "name":"Vendredi",
              "select":false,
              "Midi":false,
              "Matin":false,
              "Soir":false
            },
            {
              "name":"Samedi",
              "select":false,
              "Midi":false,
              "Matin":false,
              "Soir":false,
            },
            {
              "name":"Dimanche",
              "select":false,
              "Midi":false,
              "Matin":false,
              "Soir":false,
            }
          
        ]
      }
    });
  }

  checkSelect(x,d){
    console.log(x);
    console.log(d);
    var time=x.detail.value;
    if(x.detail.checked==true){
      for(var i=0;i<this.day.length;i++){
        if(this.day[i].name===d.name){
          this.day[i][time]=true;
        }
      }
    }else{
      for(var i=0;i<this.day.length;i++){
        if(this.day[i].name===d.name){
          this.day[i][time]=false;
        }
      }
    }
  }

 
 async submit(){

   console.log(this.day);
      
      
      if(this.nav===true){
        this.storage.set('user_question3_response',this.day);
        const formData = new FormData();
      
      formData.append('user_id', this.uid);
      formData.append('user_question3_response', JSON.stringify(this.day));
      var questions  = await this.api.postapi("madd/user",formData);
      if(questions.status == 1){
        var vc = {
          pageRoute:"editDisponsibility",
          userId:this.uid
        
        }
        
        
        let navigationExtras = {
          queryParams: {
            special: JSON.stringify(vc)
          }
        };
        
        this.router.navigate(['mon-profil'], navigationExtras);
      }
       
      }else{
        this.storage.set('user_question3_response',this.day);
            this.api.Navigate("responce3")
      }
    
     }
          
    
  

}
