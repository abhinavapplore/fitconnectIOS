import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscription-professionnel3',
  templateUrl: './inscription-professionnel3.page.html',
  styleUrls: ['./inscription-professionnel3.page.scss'],
})
export class InscriptionProfessionnel3Page implements OnInit {
  @ViewChild('content', { static: false }) content;

  rateone;
  ratetwo;
  udk: any;
  sportsListArray: any = [];
  English: boolean;
  checkedSports: any = [];
  otherSportsCat;
  searchplaceholder;
  showList: boolean = false;
  showLists = [false, false, false];

  searchTerm;
  //new var
  searchTerms = [undefined, undefined, undefined];
  //new var
  searchTermsDisabled = [false, true, true];
  search;

  //new var
  searches = [];
  isCheckboxDisabled: boolean = false;
  language;
  userType;
  user;
  updateDetail: boolean = false;
  sportsInstructed;
  constructor(
    public api: ApiService,
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params && params.special) {
        this.storage.get('user_id').then((user_id) => {
          this.user = JSON.parse(params.special);

          this.updateDetail = true;
        });
      }
    });
  }

  ngOnInit() {
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_lang').then((lang) => {
        this.storage.get('user_type').then((user_type) => {
          this.userType = user_type || '2';

          console.log(this.userType);

          this.language = lang;
          this.udk = user_id;
          if (lang == 'English') {
            this.English = true;
            this.searchplaceholder = 'Search Sports';
          } else {
            this.English = false;
            this.searchplaceholder = 'Rechercher des sports';
          }

          const formData = new FormData();

          this.http
            .post(
              'http://fitconnected.prometteur.in/index.php/Api/fields/sport_categories',
              formData
            )
            .subscribe((res) => {
              if (res.json().status == 1) {
                console.log(res.json());
                this.sportsListArray = res.json().result;
                for (var i = 0; i < this.sportsListArray.length; i++) {
                  this.sportsListArray[i].isChecked = false;
                }
                if (lang == 'English') {
                  this.api.toast(
                    'Please select main sports.',
                    this.userType == '1'
                  );
                } else {
                  this.api.toast(
                    'Veuillez sélectionner les sports principaux.',
                    this.userType == '1'
                  );
                }
              }
            });
        });
      });
    });
  }

  searchEvent(ev: any, index = undefined) {
    console.log('searchevent');

    var arr = [];
    for (let i = 0; i < this.sportsListArray.length; i++) {
      var input = this.sportsListArray[i];
      arr.push(input);

      let val = ev.target.value;
      // alert(typeof(val));
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        // Filter the items
        if (index != undefined) {
          this.searches[index] = arr
            .filter(function (item) {
              return (
                item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1
              );
            })
            .slice(0, 4);
        } else
          this.search = arr.filter(function (item) {
            return (
              item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1
            );
          });

        if (index != undefined) {
          if (this.searches[index].length !== 0) {
            this.showLists[index] = true;
          } else {
            this.showLists[index] = false;
          }
        } else {
          if (this.search.length !== 0) {
            this.showList = true;
          } else {
            this.showList = false;
          }
        }

        // Show the results
      } else {
        if (index != undefined) this.showLists[index] = false;
        // hide the results when the query is empty
        this.showList = false;
      }

      // console.log(arr);
    }
  }

  arr_diff(a1, a2) {
    var a = [],
      diff = [];

    for (var i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
        delete a[a2[i]];
      } else {
        a[a2[i]] = true;
      }
    }

    for (var k in a) {
      diff.push(k);
    }

    return diff;
  }
  selectItem(item, index = undefined) {
    if (index != undefined) {
      this.searchTerms[index] = item.spcat_name;
      this.searchTermsDisabled[index] = true;
      if (index < 3) this.searchTermsDisabled[index + 1] = false;
    } else this.searchTerm = '';
    console.log(item);
    console.log(this.searchTerm);
    if (index != undefined) this.showLists[index] = false;
    else this.showList = false;

    for (var i = 0; i < this.sportsListArray.length; i++) {
      if (this.sportsListArray[i].spcat_id == item.spcat_id) {
        this.sportsListArray[i].isChecked = true;
      }
      // this.sportsListArray[z].isChecked=true;
    }

    if (this.checkedSports.length == 3) {
      this.isCheckboxDisabled = true;
    }
  }

  reset() {
    this.searchTerms = [undefined, undefined, undefined];
    this.searchTermsDisabled = [false, true, true];
    this.checkedSports = [];
    for (var i = 0; i < this.sportsListArray.length; i++) {
      this.sportsListArray[i].isChecked = false;
    }
    this.isCheckboxDisabled = false;
  }

  checked($event, sports, index) {
    console.log($event);
    console.log(sports);
    console.log(index);

    if (this.checkedSports.length > 3 && this.userType == '2') {
      if (this.English) {
        this.api.toast(
          'You can select maximum 3 sports.',
          this.userType == '1'
        );
      } else {
        this.api.toast(
          'Vous pouvez sélectionner au maximum 3 sports.',
          this.userType == '1'
        );
      }
    } else {
      if ($event.detail.checked) {
        this.checkedSports.push(sports);
        if (this.checkedSports.length == 1) {
          if (this.language == 'English') {
            // alert(this.userType);
            this.api.toast(
              'Please select your secondary sports interest.',
              this.userType == '1'
            );
          } else {
            this.api.toast(
              'Veuillez sélectionner votre intérêt sportif secondaire.',
              this.userType == '1'
            );
          }
        } else if (this.checkedSports.length == 2) {
          if (this.language == 'English') {
            this.api.toast(
              'Please select your tertiary sports interest.',
              this.userType == '1'
            );
          } else {
            this.api.toast(
              'Veuillez sélectionner votre intérêt sportif tertiaire.',
              this.userType == '1'
            );
          }
        } else if (this.checkedSports.length == 3) {
          // this.scrollToBottomOnInit();
          if (this.language == 'English') {
            this.api.toastLong(
              'You can reset your selection to change your main sports. You will be ranked as per your main sports.',
              this.userType == '1'
            );
          } else {
            this.api.toastLong(
              'Vous pouvez réinitialiser votre sélection pour changer vos sports principaux. Vous serez classé selon vos sports principaux',
              this.userType == '1'
            );
          }
          this.isCheckboxDisabled = true;
        }
      } else {
        for (var i = 0; i < this.checkedSports.length; i++) {
          if (this.checkedSports[i].spcat_name == sports.spcat_name) {
            this.checkedSports.splice(i, 1);
            break;
          } else {
            //do nothing
          }
        }
      }
    }
  }

  scrollToBottomOnInit() {
    if (this.userType == '2') {
      setTimeout(() => {
        if (this.content.scrollToBottom) {
          this.content.scrollToBottom(400);
        }
      }, 500);
    }
  }

  async submit() {
    if (!this.updateDetail) {
      if (
        this.checkedSports.length != 0 &&
        (this.checkedSports.length <= 3 || this.userType == '1')
      ) {
        this.storage.set('user_sport_category', this.checkedSports);
        if (this.otherSportsCat) {
          this.storage.set('user_other_sport_cate', this.otherSportsCat);
        }

        if (this.userType == '1') {
          this.api.Navigate('responce3');
        } else {
          this.api.Navigate('inscription-docs');
        }
      } else {
        if (this.English) {
          this.api.toast(
            'Please Select Atleast one sports.',
            this.userType == '1'
          );
        } else {
          this.api.toast(
            'Veuillez sélectionner au moins un sport.',
            this.userType == '1'
          );
        }
      }
    } else {
      let selectedSports = '';
      let selectSportsName = '';
      for (var i = 0; i < this.checkedSports.length; i++) {
        selectSportsName += `${this.checkedSports[i].spcat_name},`;
        selectedSports += `${this.checkedSports[i].spcat_id},`;
      }
      this.storage.set(
        'user_sport_category',
        selectSportsName.substr(0, selectSportsName.length - 1)
      );

      this.sportsInstructed = selectedSports.substr(
        0,
        selectedSports.length - 1
      );
      const formData = new FormData();
      formData.append('user_id', this.user.user_id);
      formData.append('user_sport_category', this.sportsInstructed);
      formData.append('user_other_sport_cate', this.otherSportsCat);

      let res = await this.api.postapi('madd/user', formData);
      if (res.status == 1) {
        if (this.language == 'English') {
          this.api.toast('Sports Category Updated.');
          this.api.Navigateroot('evenementcoachvue');
        } else {
          this.api.toast('Catégorie sportive mise à jour.');
          this.api.Navigateroot('evenementcoachvue');
        }
      } else {
        this.api.toast(res.json().msg);
      }
    }
  }
}
