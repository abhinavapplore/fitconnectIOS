import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import {
  ActionSheetController,
  AlertController,
  NavController,
  Platform,
} from '@ionic/angular';
import { ApiService } from '../api.service';
import { TranslateConfigService } from '../translate-config.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { Storage } from '@ionic/storage';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-particular-event',
  templateUrl: './edit-particular-event.page.html',
  styleUrls: ['./edit-particular-event.page.scss'],
})
export class EditParticularEventPage implements OnInit {
  
  eventId;
  sportsList = [];
  searchName;
  showContList = false;
  markersArray = [];
  map;
  time: any;
  lat: any;
  footerAction: boolean = true;
  long: any;
  userEventCardBoolean: boolean = false;
  subMenuList: boolean = false;
  showbox;
  submitted;
  CreateEvent: FormGroup;
  title: string = 'Event Location';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  public geoCoder;
  height = 0;
  placeName: any;
  userloc: any;
  events = [];
  spcat_name: any;
  uid: any;
  detailArray = [];
  userfName: any;
  userlName: any;
  imgUrl: any;
  EUserfName: any;
  host_id: any;
  userLname: any;
  userImg: any;
  userLocation: any;
  userDate: any;
  userTime: any;
  userTitle: any;
  userdiscription: any;
  participants_max: any;
  participants_min: any;
  imgAvailable: boolean = false;
  Avatar: boolean = true;
  evn_id: any;
  coachEventCardBoolean: boolean = false;
  evn_type: any;
  userMin: any;
  cardAvatar: boolean;
  date: any;
  sharableURI: any;
  uEmail: any;
  HourPrice: boolean = false;
  PersonPrice: boolean = false;
  formFilled: boolean = false;
  todayDate;
  todayTime;
  base64ProfileImage;
  searchTerm: any;
  search = [];
  showList: boolean = false;
  data: any = {};
  topSearchPlaceHolder;
  langSportNamePlaceHolder;
  langAddressPlaceHolder;
  langDatePlaceHolder;
  langParticipantsPlaceHolder;
  langDescPlaceHolder;
  langDateCancelPlaceHolder;
  langDateDonePlaceHolder;
  langMonthsPlaceHolder;
  English: boolean;
  isAvailable: boolean;
  isBooked: boolean;
  isFull: boolean;
  notificationArray;
  pricePerPerson: any;
  userVerified: boolean = false;
  isEventApiCalled: boolean = false;
  userSportCategory: string[] = [];
  eventType = '';
  
  

  // @ViewChild('dateTime',{static:false}) sTime;
  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;
  coachPrice: any;
  combinedimg: any;
  image: any;
  notificationPresent: boolean = false;
  msgValue: boolean;
  langPricePlaceHolder;
  queryParamsGlobal;
  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public storage: Storage,
    public api: ApiService,
    public http: HttpClient,

    public router: Router,

    public httpClient: HttpClient,
    public geolocation: Geolocation,

    public translateSevice: TranslateConfigService,
    public platform: Platform,

    public alertController: AlertController,
    public ngZone: NgZone,
    public keyboard: Keyboard,
    public actionSheetController: ActionSheetController,
    public screenshot: Screenshot
  ) {
    this.creatform();
    this.route.queryParams.subscribe((params) => {
      try {
        let queryParams = JSON.parse(params.special);
        console.log(queryParams);
        this.queryParamsGlobal = queryParams;

        this.eventId = queryParams.event_id;

        this.latitude =
          queryParams.event_coach_lat || queryParams.event_individuals_lat;
        this.longitude =
          queryParams.event_coach_log || queryParams.event_individuals_log;

        this.date = queryParams.event_individuals_date;
        this.time = queryParams.event_time;

        // alert(queryParams.event_individuals_address);

        this.CreateEvent.patchValue({
          event_id: queryParams.event_id,
          event_sport_id: queryParams.event_sport_cate,
          event_sport_name: queryParams.spcat_name,
          address: queryParams.event_individuals_address,
          event_date:
            queryParams.event_individuals_date + ' ' + queryParams.event_time,
          event_participants_max:
            queryParams.event_individuals_participants_max,
          event_price: queryParams.event_individuals_price_per_person,
          event_discription: queryParams.event_individuals_discription,
        });
      } catch (error) {}
    });
  }
  get f() {
    return this.CreateEvent.controls;
  }

  showboxmethod() {
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.showbox = !this.showbox;

    // setTimeout(() => {
    //   let autocomplete = new google.maps.places.Autocomplete(
    //     this.searchElementRef.nativeElement,
    //     {}
    //   );

    //   autocomplete.setOptions({
    //     types: ['(cities)'],
    //   });
    //   autocomplete.addListener('place_changed', () => {
    //     alert('place changed');
    //     // alert('asdf');
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
    //       this.placeName = place.formatted_address;
    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();

    //       console.log('latitude', this.latitude);
    //       console.log('longitude', this.longitude);

    //       this.zoom = 16;
    //     });
    //   });
    //   // console.log(this.myCustomComp) // prints {object}
    // });
  }
  textChange() {
    if (
      this.CreateEvent.value.event === '' ||
      this.placeName === '' ||
      this.CreateEvent.value.event_participants_max === '' ||
      this.CreateEvent.value.event_discription === '' ||
      this.date === '' ||
      this.time === ''
    ) {
      if (this.date === '' || this.time === '') {
        this.api.toast('Please Select Future Date');
      }

      this.formFilled = false;
    } else {
      this.formFilled = true;
    }
  }

  dateSelected() {
    // this.sTime.open();
    console.log(this.CreateEvent.value.event_date);
    this.time = moment(this.CreateEvent.value.event_date).format('H:mm');
    this.date = moment(this.CreateEvent.value.event_date).format('YYYY-MM-DD');
    console.log(this.time);
    console.log(this.date);
    if (this.date < this.todayDate) {
      if (this.English) {
        this.api.toast('Please Select Future Date');
      } else {
        this.api.toast('Veuillez sélectionner une date future');
      }

      this.date = '';
      this.time = '';
      this.CreateEvent.value.event_date = '';
    } else if (this.date == this.todayDate && this.time <= this.todayTime) {
      if (this.English) {
        this.api.toast('Please Select Future Time');
      } else {
        this.api.toast('Veuillez sélectionner Heure future');
      }

      this.date = '';
      this.time = '';
      this.CreateEvent.value.event_coach_date = '';
    }
  }

  ngOnInit() {
    // this.showboxmethod();
  }
  ionViewDidEnter() {
    this.isEventApiCalled = false;
    this.storage.get('notificationArray').then((notificationArray) => {
      this.storage.get('msgUnread').then((value) => {
        this.msgValue = value;
        this.storage.get('user_lang').then(async (lang) => {
          console.log('language' + lang);
          if (lang == 'English') {
            this.English = true;
            this.topSearchPlaceHolder = 'Sports Category';
            this.langSportNamePlaceHolder = 'Which sport?';
            this.langAddressPlaceHolder = 'Address';
            this.langDatePlaceHolder = 'Date / hour';
            this.langDateCancelPlaceHolder = 'Cancel';
            this.langDateDonePlaceHolder = 'Validate';
            this.langParticipantsPlaceHolder = 'Participants max.';
            this.langPricePlaceHolder = 'Cost';
            this.langDescPlaceHolder = 'Add a description';
            this.langMonthsPlaceHolder =
              'jan,feb,mar,apr,may,june,july,aug,sept,oct,nov,dec';
          } else {
            this.English = false;
            this.topSearchPlaceHolder = 'Catégorie de sport';
            this.langSportNamePlaceHolder = 'Quel sport?';
            this.langAddressPlaceHolder = 'Adresse';
            this.langDatePlaceHolder = 'Date / Heure';
            this.langDateCancelPlaceHolder = 'annuler';
            this.langDateDonePlaceHolder = 'Valider';
            this.langParticipantsPlaceHolder = 'Participants max.';
            this.langPricePlaceHolder = 'Cost';
            this.langDescPlaceHolder = 'Ajouter une description';
            this.langMonthsPlaceHolder =
              'jan,fév,mar,avr,mai,juin,juil,août,sept,oct,nov,déc';
          }
        });
        this.storage.get('user_img').then((user_img) => {
          if (user_img === undefined || user_img === null || user_img === '') {
            this.Avatar = false;
          } else {
            this.Avatar = true;
            this.imgUrl = user_img;
          }
        });
      });
    });
  }

  onSubmit() {
    console.log(this.CreateEvent.value);

    console.log('working');

    // stop here if form is invalid
    if (this.CreateEvent.invalid) {
      console.log('INVALID FORM');

      return;
    } else {
      this.createevent();
    }
  }

  selectSportCategory(item) {
    console.log(item);

    // this.countryId= item.con_id;
    // this.country = item.con_name;
    this.CreateEvent.patchValue({ event_sport_name: item.spcat_name });
    this.CreateEvent.patchValue({ event_sport_id: item.spcat_id });
    // alert(item.spcat_id);
    // this.registerForm.patchValue({country:this.country})
    this.showContList = false;

    return;
  }
  async createevent() {
    // this.api.loading();
    console.log(this.CreateEvent.value);
    const formData = new FormData();

    console.log('THIS DATE', this.date);
    console.log('THIS TIME', this.time);
    console.log('LAT', this.latitude.toString());
    console.log('LNG', this.longitude.toString());
    console.log('THIS placeName', this.placeName);

    formData.append('event_id', this.CreateEvent.value.event_id + '');
    formData.append('event_individuals_date', this.date);
    formData.append(
      'event_individuals_price_per_person',
      this.CreateEvent.value.event_price
    );
    formData.append(
      'event_individuals_participants_max',
      this.CreateEvent.value.event_participants_max
    );

    formData.append(
      'event_individuals_address',
      this.placeName || this.queryParamsGlobal.event_individuals_address
    );
    formData.append('event_time', this.time);
    formData.append(
      'event_individuals_discription',
      this.CreateEvent.value.event_discription
    );
    formData.append('event_individuals_lat', this.latitude.toString());
    formData.append('event_individuals_log', this.longitude.toString());
    formData.append(
      'event_sport_cate',
      this.CreateEvent.value.event_sport_id.toString()
    );
    this.api.loading();
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/event',
        formData
      )

      .subscribe((res: any) => {
        console.log('UPDATE EVENT RESPONSE', res);

        this.api.dismissLoading();
        this.navCtrl.back();

        if (res.json().status == 1) {
        } else {
          // this.creatform();
          //  this.api.toast(res.msg)
        }
      });
  }

  ionViewWillEnter() {
    this.sportsList = [];
    const formData = new FormData();

    this.http
      .post<any>(
        'http://fitconnected.prometteur.in/index.php/Api/fields/sport_categories',
        formData
      )
      .subscribe((res) => {
        console.log(res);
        this.sportsList = res.result;
      });

    this.storage.get('user_id').then((user_id) => {
      console.log(this.imgUrl);
      console.log('above is image');
      this.uid = user_id;
      this.geolocation
        .getCurrentPosition()
        .then((resp) => {
          var latitude = resp.coords.latitude;
          // resp.coords.longitude
          this.lat = latitude.toFixed(6);
          var timeStamp = moment().unix();
          console.log(timeStamp);
          // resp.coords.latitude
          var longitude = resp.coords.longitude;
          this.long = longitude.toFixed(6);
          this.http
            .get(
              'https://maps.googleapis.com/maps/api/timezone/json?location=' +
                this.lat +
                ',' +
                this.long +
                '&timestamp=' +
                timeStamp +
                '&key=AIzaSyApm82MFXMcROWrHaGTj-auUcyOYQwBwsE'
            )
            .subscribe((data: any) => {
              console.log(data.json());
              var userTimezone = data.json().timeZoneId;

              const formData = new FormData();
              formData.append('user_id', this.uid);
              formData.append('user_lat', this.lat);
              formData.append('user_lon', this.long);
              formData.append('user_timezone', userTimezone);
              this.http
                .post(
                  'http://fitconnected.prometteur.in/index.php/Api/madd/user',
                  formData
                )
                .subscribe((res: any) => {
                  if (res.json().status == 1) {
                    console.log(res);
                  } else {
                    console.log('location not updated');
                  }
                });
            });
          //set marker

          //initialize autosearch

          // this.geoCoder = new google.maps.Geocoder();
          // setTimeout(() => {
          //   if (
          //     this.searchElementRef === undefined ||
          //     this.searchElementRef === null
          //   ) {
          //     console.log('no action req.');
          //   } else {
              
          //     let autocomplete = new google.maps.places.Autocomplete(
          //       this.searchElementRef.nativeElement,
          //       {
          //         // types: ["(cities)"]
          //       }
          //     );
          //     autocomplete.addListener('place_changed', () => {
          //       // alert('place-changesdfd2');
          //       this.ngZone.run(() => {
          //         //get the place result
                  
          //         let place: google.maps.places.PlaceResult =
          //           autocomplete.getPlace();

          //         //verify result
          //         if (place.geometry === undefined || place.geometry === null) {
          //           return;
          //         }
          //         this.placeName = place.formatted_address;
          //         //set latitude, longitude and zoom
          //         this.latitude = place.geometry.location.lat();
          //         this.longitude = place.geometry.location.lng();

          //         this.zoom = 16;
          //       });
          //     });

          //     this.getAddress(this.lat, this.long);
          //     console.log(this.placeName);
          //     console.log(this.latitude);
          //     console.log(this.longitude);
          //   }
          // });
        })
        .catch((error) => {
          console.log('Error getting location', error);
          this.api.toast('Please Check your gps');
        });
    });
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results, status) => {
        console.log(results);
        console.log(status);
        this.placeName = results[0].formatted_address;

        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.placeName = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  }
  searchSportCategoryFunc(ev: any) {
    var arr = [];
    for (let i = 0; i < this.sportsList.length; i++) {
      var input = this.sportsList[i];
      arr.push(input);

      let val = ev.target.value;
      // alert(typeof(val));
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        // Filter the items
        this.searchName = arr.filter(function (item) {
          return item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
        this.searchName.slice(0, 10);

        // Show the results
        if (this.searchName.length !== 0) {
          this.showContList = true;
        } else {
          this.showContList = false;
        }
      } else {
        // hide the results when the query is empty
        this.showContList = false;
      }

      // console.log(arr);
    }
  }

  creatform() {
    this.CreateEvent = this.formBuilder.group({
      // event: ['', Validators.required],
      event_id: [''],
      // event: [''],
      address: ['', Validators.required],

      event_date: ['', Validators.required],

      event_participants_max: ['', Validators.required],
      event_price: ['', Validators.required],
      event_discription: ['', Validators.required],
      event_sport_name: ['', Validators.required],
      event_sport_id: [''],
      // eventTime: ['', Validators.required],
    });
  }
}
