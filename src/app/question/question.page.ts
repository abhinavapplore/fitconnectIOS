import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  type;
  able;
  selectone;
  uid;
  AlreadyUser: boolean = false;
  English: boolean;

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        var details = JSON.parse(params.special);
        if (details.pageRoute === 'myProfile') {
          this.AlreadyUser = true;
          this.uid = details.userId;
          this.selectone = details.selected;
        }
      }
    });
  }

  ngOnInit() {
    this.storage.get('user_lang').then((lang) => {
      if (lang == 'English') {
        this.English = true;
        this.type = [
          {
            name: 'Occasional',
            select: false,
          },
          {
            name: 'Regular',
            select: false,
          },
          // {
          //   "name": "Trailer",
          //   "select": false
          // }
        ];
      } else {
        this.English = false;
        this.type = [
          {
            name: 'Occasionnel',
            select: false,
          },
          {
            name: 'Régulier',
            select: false,
          },
          // {
          //   "name": "Trailer",
          //   "select": false
          // }
        ];
      }

      for (let i = 0; i < this.type.length; i++) {
        if (this.selectone == this.type[i].name) {
          this.able = true;
          this.selectone = this.type[i].name;
          this.type[i].select = true;
        } else {
          this.type[i].select = false;
        }
      }
    });
  }

  selected(x) {
    for (let i = 0; i < this.type.length; i++) {
      if (i == x) {
        this.able = true;
        this.selectone = this.type[i].name;
        this.type[i].select = true;
      } else {
        this.type[i].select = false;
      }
    }
  }

  submit() {
    if (this.able == true) {
      if (this.AlreadyUser === true) {
        console.log(this.selectone);
        const formData = new FormData();
        formData.append('user_id', this.uid);
        formData.append('user_question1_response', this.selectone);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/madd/user',
            formData
          )
          .subscribe((res) => {
            if (res.json().status == 1) {
              console.log(res);
              var vc = {
                pageRoute: 'question',
                userId: this.uid,
              };

              let navigationExtras = {
                queryParams: {
                  special: JSON.stringify(vc),
                },
              };

              this.router.navigate(['mon-profil'], navigationExtras);
            }
          });
      } else {
        var questions = {
          user_question1_response: this.selectone,
        };
        this.api.setstorage('questions', questions);
        // this.api.Navigate("question2")
        this.api.Navigate('inscription-professionnel3');
      }
    } else {
      if (this.English) {
        this.api.toast('Please select the type of athlete.');
      } else {
        this.api.toast('Veuillez sélectionner le type de sportif.');
      }
    }
  }
}
