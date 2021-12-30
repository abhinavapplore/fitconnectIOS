import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-searchfilter',
  templateUrl: './searchfilter.page.html',
  styleUrls: ['./searchfilter.page.scss'],
})
export class SearchfilterPage implements OnInit {
  sportsList = [];
  areaPlaceHolder;
  sportsActivityPlaceHolder;
  namePlaceholder;
  English: boolean;
  @Input('usersArray') usersArray;
  searchName;
  searchNameTerm = '';
  showNameList: boolean = false;
  searchAreaTerm = '';
  searchSportsTerm = '';
  showAreaList: boolean = false;
  showSportsList: boolean = false;
  searchSports;
  searchArea;

  constructor(
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    public api: ApiService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.storage.get('user_lang').then(async (lang) => {
      console.log('language' + lang);
      if (lang == 'English') {
        console.log('English');
        this.English = true;
        this.namePlaceholder = 'Name';
        this.sportsActivityPlaceHolder = 'Sports Activity';
        this.areaPlaceHolder = 'Location';
      } else {
        console.log('FRENCH');
        this.English = false;
        this.namePlaceholder = 'Nom';
        this.sportsActivityPlaceHolder = 'Activité sportive';
        this.areaPlaceHolder = 'Emplacement';
      }
      console.log(this.usersArray);
    });
  }
  ionViewWillEnter() {
    this.sportsList = [];
    const formData = new FormData();

    this.httpClient
      .post<any>(
        'http://fitconnected.prometteur.in/index.php/Api/fields/sport_categories',
        formData
      )
      .subscribe((res) => {
        console.log(res);
        this.sportsList = res.result;
      });
  }

  dismiss(data?: any) {
    console.log('clicked');
    console.log(data);
    if (data == 'check') {
      if (this.searchAreaTerm != '') {
        var obj = {
          isArea: true,
          city: this.searchAreaTerm,
        };
        this.modalCtrl.dismiss(obj);
      } else if (this.searchNameTerm != '') {
        var nameObj = {
          isName: true,
          first_name: this.searchNameTerm,
        };
        this.modalCtrl.dismiss(nameObj);
      } else if (this.searchSportsTerm != '') {
        var sportsObj = {
          isSports: true,
          sportsName: this.searchSportsTerm,
        };

        this.modalCtrl.dismiss(sportsObj);
      }
    } else if (data == 'noresult') {
      this.modalCtrl.dismiss(data);
    }
  }

  searchNameFunc(ev: any) {
    var arr = [];
    for (let i = 0; i < this.usersArray.length; i++) {
      var input = this.usersArray[i];
      arr.push(input);

      let val = ev.target.value;
      // alert(typeof(val));
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        // Filter the items
        this.searchName = arr.filter(function (item) {
          return (
            item.user_f_name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.user_l_name.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
        });

        // Show the results
        if (this.searchName.length !== 0) {
          this.showNameList = true;
        } else {
          this.showNameList = false;
        }
      } else {
        // hide the results when the query is empty
        this.showNameList = false;
      }

      // console.log(arr);
    }
  }
  selectNameItem(item) {
    console.log(item);

    this.searchNameTerm = item.user_f_name;
    console.log(this.searchNameTerm);
    this.showNameList = false;
    return;
  }

  remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    for (var key in obj) {
      ret_arr.push(key);
    }
    return ret_arr;
  }
  searchSportsFunc(ev: any) {
    var arr = [];
    for (let i = 0; i < this.usersArray.length; i++) {
      var input = this.usersArray[i];
      arr.push(input);

      let val = ev.target.value;
      // alert(typeof(val));
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        // Filter the items
        this.searchSports = arr.filter(function (item) {
          return item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });

        this.removeDuplicates(this.searchSports, this.sportCategoryCondition);
        // Show the results
        if (this.searchSports.length !== 0) {
          this.showSportsList = true;
        } else {
          this.showSportsList = false;
        }
      } else {
        // hide the results when the query is empty
        this.showSportsList = false;
      }

      // console.log(arr);
    }
  }

  selectSportsItem(item) {
    console.log(item);

    this.searchSportsTerm = item.spcat_name;
    console.log(this.searchSportsTerm);
    this.showSportsList = false;
    return;
  }

  searchAreaFunc(ev: any) {
    var arr = [];
    for (let i = 0; i < this.usersArray.length; i++) {
      var input = this.usersArray[i];
      arr.push(input);

      let val = ev.target.value;
      // alert(typeof(val));
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        // Filter the items
        this.searchArea = arr.filter(function (item) {
          return (
            item.user_city.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.user_country.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
        });

        // remove duplicates
        this.removeDuplicates(this.searchArea, this.areaCondition);

        // Show the results
        if (this.searchArea.length !== 0) {
          this.showAreaList = true;
        } else {
          this.showAreaList = false;
        }
      } else {
        // hide the results when the query is empty
        this.showAreaList = false;
      }

      // console.log(arr);
    }
  }

  sportCategoryCondition(thing1, thing2) {
    return thing1.spcat_name === thing2.spcat_name;
  }
  areaCondition(thing1, thing2) {
    return thing1.user_city === thing2.user_city;
  }
  removeDuplicates(arr, equals) {
    var originalArr = arr.slice(0);
    var i, len, val;
    arr.length = 0;

    for (i = 0, len = originalArr.length; i < len; ++i) {
      val = originalArr[i];
      if (
        !arr.some(function (item) {
          return equals(item, val);
        })
      ) {
        arr.push(val);
      }
    }
  }
  selectAreaItem(item) {
    console.log(item);

    this.searchAreaTerm = item.user_city;
    console.log(this.searchAreaTerm);
    this.showAreaList = false;
    return;
  }
}
