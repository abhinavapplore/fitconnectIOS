import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { TranslateConfigService } from '../translate-config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evenementcoach',
  templateUrl: './evenementcoach.page.html',
  styleUrls: ['./evenementcoach.page.scss'],
})
export class EvenementcoachPage implements OnInit {
  eventId = undefined;
  editingMode = false;

  submitted;
  CreateEvent: FormGroup;
  lat: any;
  long: any;
  public geoCoder;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  height = 0;
  placeName: any;
  eventPrice: any;
  eventPricePerson: boolean = false;
  eventPriceHour: boolean = false;
  formFilled: boolean = false;
  timeInput: boolean = false;
  time: any;
  date: any;
  uid;
  userfName;
  userlName;
  userImg;
  todayDate;
  todayTime;
  topSearchPlaceHolder;
  langSportNamePlaceHolder;
  langAddressPlaceHolder;
  langDatePlaceHolder;
  langParticipantsMaxPlaceHolder;
  langParticipantsMinPlaceHolder;
  langDescPlaceHolder;
  langDateCancelPlaceHolder;
  langDateDonePlaceHolder;
  langMonthsPlaceHolder;
  langPricePlaceHolder;
  English: boolean = false;
  userSportCategory: string[];

  sportsList = [];

  // @ViewChild('dateTime',{static:true}) sTime;
  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;
  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    public storage: Storage,
    public http: Http,
    public httpClient: HttpClient,
    private geolocation: Geolocation,
    private mapsAPILoader: MapsAPILoader,
    public alertController: AlertController,
    private ngZone: NgZone,
    public translateSevice: TranslateConfigService,
    public route: ActivatedRoute
  ) {
    this.submitted = false;
    this.creatform();

    this.route.queryParams.subscribe((params) => {
      try {
        let queryParams = JSON.parse(params.special);
        console.log(queryParams);

        if (queryParams) this.editingMode = true;
        this.eventId = queryParams.event_id;

        this.latitude = queryParams.event_coach_lat;
        this.longitude = queryParams.event_coach_log;

        this.date = queryParams.event_coach_date;
        this.time = queryParams.event_time;
        this.CreateEvent.patchValue({
          event_coach_sport_name: queryParams.spcat_name,
          event_coach_address: queryParams.event_coach_address,
          event_coach_date:
            queryParams.event_coach_date + ' ' + queryParams.event_time,
          event_coach_participants_min:
            queryParams.event_coach_participants_min,
          event_coach_participants_max:
            queryParams.event_coach_participants_max,
          event_price: queryParams.event_coach_price_person,
          event_coach_discription: queryParams.event_coach_discription,

          // event_coach_date: ['', Validators.required],

          // event_coach_participants_min: ['', Validators.required],
          // event_coach_participants_max: ['', Validators.required],
          // event_price: ['', Validators.required],

          // event_coach_discription: ['', Validators.required],
          // event_coach_sport_name: ['', Validators.required],
        });
      } catch (error) {}
    });
  }

  get f() {
    return this.CreateEvent.controls;
  }

  creatform() {
    this.CreateEvent = this.formBuilder.group({
      // event_coach_title: ['', Validators.required],
      event_coach_title: [''],
      event_coach_address: ['', Validators.required],
      event_coach_date: ['', Validators.required],
      // event_end_time: ['', Validators.required],
      // event_type: ['2', Validators.required],
      event_coach_participants_min: ['', Validators.required],
      event_coach_participants_max: ['', Validators.required],
      event_price: ['', Validators.required],
      // event_coach_price_per_person: ['', Validators.required],
      event_coach_discription: ['', Validators.required],
      event_coach_sport_name: ['', Validators.required],
      // eventTime: ['', Validators.required],
    });
  }

  cost(i) {
    console.log(i);
    if (i === 'hour') {
      this.storage.get('user_price_hour').then((user_price_hour) => {
        this.eventPrice = user_price_hour;
        console.log(this.eventPrice);
        this.eventPriceHour = true;
        this.eventPricePerson = false;
      });
    } else {
      this.storage
        .get('user_price_per_person')
        .then((user_price_per_person) => {
          this.eventPrice = user_price_per_person;
          console.log(this.eventPrice);
          this.eventPricePerson = true;
          this.eventPriceHour = false;
        });
    }
  }

  onSubmit() {
    console.log('working');
    this.submitted = true;

    // stop here if form is invalid
    if (this.CreateEvent.invalid) {
      return;
    } else {
      this.createevent();
    }
  }

  textChange() {
    if (
      this.CreateEvent.value.event_coach_title === '' ||
      this.placeName === '' ||
      this.CreateEvent.value.event_coach_participants_min === '' ||
      this.CreateEvent.value.event_coach_participants_max === '' ||
      this.eventPrice === '' ||
      this.CreateEvent.value.event_coach_discription === ''
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
    this.time = moment(this.CreateEvent.value.event_coach_date).format('H:mm');
    this.date = moment(this.CreateEvent.value.event_coach_date).format(
      'YYYY-MM-DD'
    );
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
      this.CreateEvent.value.event_coach_date = '';
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

  createevent() {
    console.log(this.CreateEvent.value.event_coach_title);
    console.log(this.placeName);
    console.log(this.latitude);
    console.log(this.longitude);
    console.log(this.date);
    console.log(this.CreateEvent.value.event_coach_participants_min);

    console.log(this.CreateEvent.value.event_coach_participants_max);
    console.log(this.time);
    //  var event_time=moment(this.CreateEvent.value.eventTime).format("H:mm");
    console.log(this.CreateEvent.value.event_coach_discription);
    if (
      this.CreateEvent.value.event_coach_participants_min >
      this.CreateEvent.value.event_coach_participants_max
    ) {
      var msg = 'Min. Le participant doit être inférieur à Max. Participant';
      this.api.toast(msg);
    } else {
      this.api.loading();

      const formData = new FormData();

      if (this.eventId) formData.append('event_id', this.eventId + '');

      formData.append(
        'event_coach_title',
        this.CreateEvent.value.event_coach_title
      );
      formData.append('event_coach_address', this.placeName);
      formData.append('event_type', '2');
      formData.append('user_id', this.uid);
      formData.append('user_f_name', this.userfName);
      formData.append('user_l_name', this.userlName);
      formData.append('user_img', this.userImg);
      formData.append('event_coach_date', this.date);

      // formData.append(
      //   // 'event_coach_participants_min_required',
      //   'event_coach_participants_min',
      //   this.CreateEvent.value.event_coach_participants_min.toString()
      // );

      formData.append(
        'event_coach_participants_max',
        this.CreateEvent.value.event_coach_participants_max.toString()
      );
      if (!this.editingMode) {
        formData.append('event_coach_participants_min', '0');
        // formData.append(
        //   'event_coach_participants_max',
        //   this.CreateEvent.value.event_coach_participants_max.toString()
        // );
      }

      formData.append('event_time', this.time);
      formData.append(
        'event_coach_price_person',
        this.CreateEvent.value.event_price
      );
      formData.append(
        'event_coach_discription',
        this.CreateEvent.value.event_coach_discription
      );
      formData.append('event_coach_lat', this.latitude.toString());
      formData.append('event_coach_log', this.longitude.toString());
      // formData.append(
      //   'event_sport_cate',
      //   this.CreateEvent.value.event_coach_sport_name.toString()
      // );
      formData.append(
        // 'event_sport_id',
        'event_sport_cate',
        this.sportsNameToId(
          this.CreateEvent.value.event_coach_sport_name.toString()
        ) + ''
      );
      // alert(formData.get('event_sport_id'));

      // alert(this.CreateEvent.value.event_coach_sport_name.toString());
      // alert(
      //   this.sportsNameToId(
      //     this.CreateEvent.value.event_coach_sport_name.toString()
      //   )
      // );
      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/madd/event',
          formData
        )

        .subscribe((res: any) => {
          this.api.dismissLoading();
          if (res.json().status == 1) {
            console.log(res.json());
            this.submitted = false;
            this.creatform();
            this.api.Navigate('evenementcoachvue');

            // this.api.toast(res.msg);
          } else {
            let response = res.json();
            if (response.msg) this.api.toast(response.msg);

            // this.creatform();
            //  this.api.toast(res.msg)
          }
        });
    }
  }

  sportsNameToId(name) {
    let sportsId;
    this.sportsList.forEach((sportName) => {
      console.log(sportName);

      if (sportName.spcat_name == name) {
        sportsId = sportName.spcat_id;
        // break
      }
    });
    return sportsId;
  }

  ionViewWillEnter() {
    this.api.loading();
    this.sportsList = [];
    const formData = new FormData();

    this.httpClient
      .post<any>(
        'http://fitconnected.prometteur.in/index.php/Api/fields/sport_categories',
        formData
      )
      .subscribe((res) => {
        this.api.dismissLoading();
        console.log(res);
        this.sportsList = res.result;
        // alert(this.sportsNameToId('Football'));
      });
  }
  sportsValueSelected() {
    // alert('asdf');
    // alert(this.CreateEvent.value('event_coach_sport_name'));
  }

  ngOnInit() {
    this.storage.get('user_lang').then((lang) => {
      console.log('language' + lang);
      if (lang == 'English') {
        this.English = true;
        this.topSearchPlaceHolder = 'City, Postal Code';
        this.langSportNamePlaceHolder = 'What course do you offer?';
        this.langAddressPlaceHolder = 'Address';
        this.langDatePlaceHolder = 'Date / hour';
        this.langDateCancelPlaceHolder = 'Cancel';
        this.langDateDonePlaceHolder = 'Validate';
        this.langParticipantsMinPlaceHolder = 'Participants min.';
        this.langParticipantsMaxPlaceHolder = 'Participants max.';
        this.langDescPlaceHolder = 'Add a description';

        this.langMonthsPlaceHolder =
          'jan,feb,mar,apr,may,june,july,aug,sept,oct,nov,dec';
        this.langPricePlaceHolder = 'Price';
      } else {
        this.English = false;
        this.topSearchPlaceHolder = 'Ville, Code Postal';
        this.langSportNamePlaceHolder = 'Quel cours proposes-tu ?';
        this.langAddressPlaceHolder = 'Adresse';
        this.langDatePlaceHolder = 'Date / Heure';
        this.langDateCancelPlaceHolder = 'annuler';
        this.langDateDonePlaceHolder = 'Valider';
        this.langParticipantsMinPlaceHolder = 'Participants min.';
        this.langParticipantsMaxPlaceHolder = 'Participants max.';
        this.langDescPlaceHolder = 'Ajouter une description';
        this.langMonthsPlaceHolder =
          'jan,fév,mar,avr,mai,juin,juil,août,sept,oct,nov,déc';
        this.langPricePlaceHolder = 'Prix';
      }
    });
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_f_name').then((user_f_name) => {
        this.storage.get('user_l_name').then((user_l_name) => {
          this.storage.get('user_img').then((user_img) => {
            this.storage
              .get('user_sport_category')
              .then((user_sport_category: string) => {
                console.log('USER SPORT CATEGORY', user_sport_category);

                this.uid = user_id;
                this.userfName = user_f_name;
                this.userlName = user_l_name;
                this.userImg = user_img;
                if (user_sport_category) {
                  this.userSportCategory = user_sport_category.split(',');
                }
                this.geolocation
                  .getCurrentPosition()
                  .then((resp) => {
                    // resp.coords.latitude
                    this.lat = resp.coords.latitude;
                    // resp.coords.longitude
                    this.long = resp.coords.longitude;
                    this.mapsAPILoader.load().then(() => {
                      // this.geoCoder = new google.maps.Geocoder();
                      // setTimeout(() => {
                      //   let autocomplete = new google.maps.places.Autocomplete(
                      //     this.searchElementRef.nativeElement,
                      //     {
                      //       types: ['address'],
                      //       // types: ['(cities)'],
                      //     }
                      //   );
                      //   autocomplete.addListener('place_changed', () => {
                      //     this.ngZone.run(() => {
                      //       //get the place result
                      //       let place: google.maps.places.PlaceResult =
                      //         autocomplete.getPlace();

                      //       //verify result
                      //       if (
                      //         place.geometry === undefined ||
                      //         place.geometry === null
                      //       ) {
                      //         return;
                      //       }
                      //       this.placeName = place.formatted_address;
                      //       //set latitude, longitude and zoom
                      //       this.latitude = place.geometry.location.lat();
                      //       this.longitude = place.geometry.location.lng();

                      //       this.zoom = 16;
                      //     });
                      //   });
                      // });
                      this.getAddress(this.lat, this.long);
                      console.log(this.placeName);
                      console.log(this.latitude);
                      console.log(this.longitude);
                    });
                  })
                  .catch((error) => {
                    console.log('Error getting location', error);
                  });
              });
          });
        });
      });
    });
    this.todayDate = moment().format('YYYY-MM-DD');
    this.todayTime = moment().format('H:mm');
    console.log(this.todayDate);
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
}
