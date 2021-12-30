import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { Storage } from '@ionic/storage';

import { ActivatedRoute, Router } from '@angular/router';
import {
  NavController,
  ActionSheetController,
  ToastController,
  Platform,
  LoadingController,
  ModalController,
  AlertController,
} from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import * as moment from 'moment';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';

import { Observable, of, from, Observer } from 'rxjs';

import { TranslateConfigService } from '../translate-config.service';

declare const google;
@Component({
  selector: 'app-creer-evenement',
  templateUrl: './creer-evenement.page.html',
  styleUrls: ['./creer-evenement.page.scss'],
})
export class CreerEvenementPage implements OnInit {
  selectedEvent;
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
  // msgValue: boolean;
  langPricePlaceHolder;

  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public http: Http,
    public httpClient: HttpClient,
    private geolocation: Geolocation,
    private mapsAPILoader: MapsAPILoader,
    public translateSevice: TranslateConfigService,
    private platform: Platform,
    public storage: Storage,
    private socialSharing: SocialSharing,
    public alertController: AlertController,
    private ngZone: NgZone,
    private keyboard: Keyboard,
    public actionSheetController: ActionSheetController,
    public screenshot: Screenshot,
    public diagnostic: Diagnostic
  ) {
    this.submitted = false;
    this.showbox = false;
    this.creatform();
    this.keyboard.onKeyboardWillShow().subscribe((data) => {
      this.footerAction = false;
    });
    this.keyboard.onKeyboardWillHide().subscribe((data) => {
      this.footerAction = true;
    });
  }

  get f() {
    return this.CreateEvent.controls;
  }

  ionViewDidEnter() {
    this.isEventApiCalled = false;
    this.storage.get('notificationArray').then((notificationArray) => {
      this.storage.get('msgUnread').then((value) => {
        // this.msgValue = value;

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
          // this.diagnostic.isGpsLocationEnabled().then((isAvailable) =>
          // {

          //   if(isAvailable===true){
          this.storage.get('user_id').then((user_id) => {
            this.api.checkNewNotificationUnread(user_id);
            this.api.updateToken(user_id);
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
                  .subscribe((data) => {
                    console.log(data.json());
                    var userTimezone = data.json().timeZoneId;
                    //initialize map
                    this.testmap();
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
                      .subscribe((res) => {
                        if (res.json().status == 1) {
                          console.log(res);
                        } else {
                          console.log('location not updated');
                        }
                      });
                  });
                //set marker
                this.setMarkers();
                //initialize autosearch
                this.mapsAPILoader.load().then(() => {
                  this.geoCoder = new google.maps.Geocoder();
                  setTimeout(() => {
                    if (
                      this.searchElementRef === undefined ||
                      this.searchElementRef === null
                    ) {
                      console.log('no action req.');
                      this.setMarkers();
                    } else {
                      let autocomplete = new google.maps.places.Autocomplete(
                        this.searchElementRef.nativeElement,
                        {
                          // types: ["(cities)"]
                        }
                      );
                      // autocomplete.addListener('place_changed', () => {
                      //   // alert('place-changesdfd2');
                      //   this.ngZone.run(() => {
                      //     //get the place result
                      //     let place: google.maps.places.PlaceResult =
                      //       autocomplete.getPlace();

                      //     //verify result
                      //     if (
                      //       place.geometry === undefined ||
                      //       place.geometry === null
                      //     ) {
                      //       return;
                      //     }
                      //     this.placeName = place.formatted_address;
                      //     //set latitude, longitude and zoom
                      //     this.latitude = place.geometry.location.lat();
                      //     this.longitude = place.geometry.location.lng();

                      //     this.zoom = 16;
                      //   });
                      // });

                      this.getAddress(this.lat, this.long);
                      console.log(this.placeName);
                      console.log(this.latitude);
                      console.log(this.longitude);
                    }
                  });
                });
              })
              .catch((error) => {
                console.log('Error getting location', error);
                this.api.toast('Please Check your gps');
              });
          });

          // }else{
          //   this.api.toast("Please Turn On Location to proceed");
          // }

          //   }).catch((err)=>{
          //     // alert(err);
          //     console.log(err);
          //     this.storage.get('user_id').then((user_id) => {
          //       this.uid=user_id;
          //       this.geolocation.getCurrentPosition().then((resp) => {

          //         // resp.coords.latitude
          //         var latitude=resp.coords.latitude
          //         // resp.coords.longitude
          //        this.lat= latitude.toFixed(6);
          //         this.long=resp.coords.longitude;
          //                  //initialize map
          //                  var longitude = resp.coords.longitude;
          //                  this.long = longitude.toFixed(6);
          //                  this.testmap();

          //                  const formData = new FormData();
          //                  formData.append('user_id',this.uid);
          //   formData.append('user_lat',this.lat);
          //   formData.append('user_lon',this.long);
          //   this.http.post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
          // .subscribe(res => {
          //   if(res.json().status == 1){
          //     console.log(res);
          //   }else{
          //     console.log("location not updated")
          //   }
          // });
          // //set marker
          // this.setMarkers();

          //                  //initialize autosearch
          //         this.mapsAPILoader.load().then(() => {
          //         this.geoCoder = new google.maps.Geocoder;
          //         setTimeout(() => {
          //           if(this.searchElementRef===undefined||this.searchElementRef===null){
          //             console.log("no action req.");
          //             this.setMarkers();
          //           }else{
          //             let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          //               // types: ["address"]
          //             });

          //             autocomplete.addListener("place_changed", () => {
          //               this.ngZone.run(() => {
          //                 //get the place result
          //                 let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //                 //verify result
          //                 if (place.geometry === undefined || place.geometry === null) {
          //                   return;
          //                 }
          //                 this.placeName=place.formatted_address;
          //                 //set latitude, longitude and zoom
          //                 this.latitude = place.geometry.location.lat();
          //                 this.longitude = place.geometry.location.lng();

          //                 this.zoom = 16;

          //               });
          //             });

          //             this.getAddress(this.lat,this.long);
          //             console.log(this.placeName)
          //                       console.log(this.latitude)
          //                       console.log(this.longitude)

          //           }

          //                 });
          //               });

          //        }).catch((error) => {
          //          console.log('Error getting location', error);
          //          if(this.English){
          //           this.api.toast("Please Turn On Gps");
          //         }else{
          //           this.api.toast("Veuillez activer le GPS");

          //         }

          //        });
          //       });

          //   })
        });
      });
    });
  }

  searchFocus(event) {
    // this.footerAction = false;
  }

  rankingDetails() {
    console.log('test');
    this.api.Navigate('ranking');
  }

  cancelSearch(event) {
    // alert('asdf');
    this.footerAction = true;
    this.isEventApiCalled = false;
    this.setMarkers();
  }

  ionViewWillLeave() {
    this.searchTerm = '';
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

  ngOnInit() {
    this.storage.get('user_f_name').then((user_f_name) => {
      this.storage.get('user_l_name').then((user_l_name) => {
        this.storage
          .get('user_sport_category')
          .then((user_sport_category: string) => {
            this.userfName = user_f_name;
            this.userlName = user_l_name;

            console.log(this.uid);
            // set all events
            this.todayDate = moment().format('YYYY-MM-DD');
            this.todayTime = moment().format('H:mm');
            console.log(this.todayDate);
            if (user_sport_category) {
              this.userSportCategory = user_sport_category.split(',');
            }
          });
      });
    });
  }

  viewProfile() {
    this.showList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    console.log('my event');
    if (this.uid === this.host_id) {
      this.api.Navigate('mon-profil');
    } else {
      console.log('others event');
      var vc = { user_id: this.host_id };
      let navigationExtras = {
        queryParams: {
          special: JSON.stringify(vc),
        },
      };
      this.router.navigate(['coachviewprofile'], navigationExtras);
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

  timeSelected() {
    this.time = this.CreateEvent.value.eventTime;
    console.log(this.time);
  }

  showboxmethod() {
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.showbox = !this.showbox;

    setTimeout(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {}
      );

      autocomplete.setOptions({
        // types: ['(cities)'],
        types: ['address'],
      });
      // autocomplete.addListener('place_changed', () => {
      //   // alert('asdf');
      //   this.ngZone.run(() => {
      //     //get the place result
      //     let place: google.maps.places.PlaceResult = autocomplete.getPlace();

      //     //verify result
      //     if (place.geometry === undefined || place.geometry === null) {
      //       return;
      //     }
      //     this.placeName = place.formatted_address;
      //     //set latitude, longitude and zoom
      //     this.latitude = place.geometry.location.lat();
      //     this.longitude = place.geometry.location.lng();

      //     this.zoom = 16;
      //   });
      // });
      // console.log(this.myCustomComp) // prints {object}
    });
  }

  closeboxmethod() {
    this.creatform();
    this.footerAction = true;
    this.showbox = false;
  }

  creatform() {
    this.CreateEvent = this.formBuilder.group({
      // event: ['', Validators.required],
      event: [''],
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

  readPage() {
    this.http.request('assets/images/coachIcon.png').subscribe((img) => {
      console.log('Hello' + img);
      return img;
    });
  }
  clearAllMarkers() {
    this.markersArray.forEach((element) => {
      try {
        element.setMap(null);
      } catch (error) {}
    });
    this.markersArray = [];
  }

  searchChange(event) {
    // alert('asdf');
    if (!this.searchTerm) {
      // alert('asdf');
      this.setMarkers();
    }
  }
  setMarkers(categoryName = undefined) {
    // alert('categoryName' + categoryName);
    setTimeout(() => {}, 10000);
    // this.api.loading();
    this.clearAllMarkers();

    const formData = new FormData();
    formData.append('book_user_id', this.uid);
    console.log(this.events.length);

    if (!this.isEventApiCalled) {
      // this.isEventApiCalled = true;
      this.http
        .post(
          'http://fitconnected.prometteur.in/index.php/Api/fields/event',
          formData
        )
        .subscribe((res) => {
          if (res.json().status == 1) {
            console.log(res.json());
            this.events = res.json().result;
            console.log(this.events);

            // CHECK IF event_type TYPE TO "1"
            // GET user_map_img

            if (
              res.json().notification_list == undefined ||
              res.json().notification_list == null ||
              res.json().notification_list.length == 0
            ) {
              this.notificationPresent = false;
            } else {
              this.storage.set(
                'notificationArray',
                res.json().notification_list
              );
              this.storage
                .get('notificationArray')
                .then((notificationArray) => {
                  console.log(notificationArray);
                  if (
                    notificationArray == null ||
                    notificationArray == undefined ||
                    notificationArray.length == 0
                  ) {
                    this.notificationPresent = false;
                  } else {
                    this.notificationArray = notificationArray.length;
                    this.notificationPresent = true;
                  }
                });
            }

            // console.log(this.events);
            // console.log("hey there");
            // this.api.dismissLoading();
            for (var i = 0; i < this.events.length; i++) {
              // console.log('event category', this.events[i].spcat_name);

              if (categoryName && this.events[i].spcat_name != categoryName)
                continue;

              // console.log('event', this.events[i]);

              if (this.events[i].event_type === '1') {
                if (
                  this.events[i].event_individuals_lat === undefined ||
                  this.events[i].event_individuals_log === null
                ) {
                } else {
                  var latitude = parseFloat(
                    this.events[i].event_individuals_lat
                  );
                  var longitude = parseFloat(
                    this.events[i].event_individuals_log
                  );
                  var myLatlng = new google.maps.LatLng(latitude, longitude);
                  if (!this.events[i].isFull) {
                    var icon = {
                      // url: 'assets/icone-eventblue.png', // url
                      url: this.events[i].user_map_img + '',
                      scaledSize: new google.maps.Size(35, 45), // scaled size
                      origin: new google.maps.Point(0, 0), // origin
                    };
                    this.events[i].isAvailable = true;
                  } else {
                    var icon = {
                      url: this.events[i].user_red_map_img + '', // url
                      scaledSize: new google.maps.Size(35, 45), // scaled size
                      origin: new google.maps.Point(0, 0), // origin
                    };
                    this.events[i].isAvailable = false;
                  }

                  // this.map.addListener('click', function(e) {
                  // console.log(this.events[i].user_id, this.uid);

                  // var marker = new google.maps.Marker({
                  this.markersArray[i] = new google.maps.Marker({
                    position: myLatlng,
                    icon: icon,
                    index: this.events[i].event_id,
                    // draggable: this.events[i].user_id == this.uid,
                    draggable: false,
                  });

                  // To add the marker to the map, call setMap();

                  this.markersArray[i].setMap(this.map);
                  const _this = this;
                  google.maps.event.addListener(
                    this.markersArray[i],
                    'dragend',
                    function (event) {
                      _this.updateEventDetails(
                        this.markersArray[i].index,
                        event.latLng.lat(),
                        event.latLng.lng()
                      );
                    }
                  );
                  // marker.addListener('dragend', function (event) {
                  //   console.log(event);
                  //   this.latitude = event.latLng.lat();
                  //   console.log(this.latitude);
                  //   this.longitude = event.latLng.lng();
                  //   console.log(this.longitude);
                  // });

                  //marker click event
                  var self = this;
                  google.maps.event.addListener(
                    this.markersArray[i],
                    'click',
                    (function (marker, i) {
                      return function () {
                        self.detailArray = [];

                        for (var j = 0; j < self.events.length; j++) {
                          if (marker.index === self.events[i].event_id) {
                            self.detailArray.push(self.events[i]);
                            self.EUserfName = self.events[i].user_f_name;
                            self.isAvailable = self.events[i].isAvailable;
                            self.userLname = self.events[
                              i
                            ].user_l_name.substring(0, 1);

                            if (
                              self.events[i].user_img === undefined ||
                              self.events[i].user_img === null ||
                              self.events[i].user_img === ''
                            ) {
                              self.imgAvailable = false;
                            } else {
                              self.imgAvailable = true;
                            }
                            self.userImg = self.events[i].user_img;
                            self.spcat_name = self.events[i].spcat_name;
                            self.userLocation =
                              self.events[i].event_individuals_address;
                            self.userDate =
                              self.events[i].event_individuals_date;
                            self.userTime = self.events[i].event_time;
                            self.isBooked = self.events[i].isBooked;
                            self.isFull = self.events[i].isFull;
                            self.userTitle =
                              self.events[i].event_individuals_title;
                            self.pricePerPerson =
                              self.events[i].event_individuals_price_per_person;
                            self.userVerified = self.events[i].user_verified;
                            self.host_id = self.events[i].user_id;
                            self.evn_id = self.events[i].event_id;
                            self.userdiscription =
                              self.events[i].event_individuals_discription;
                            self.participants_max =
                              self.events[i].event_individuals_participants_max;
                            self.participants_min =
                              self.events[i].event_individuals_participants_min;
                            self.evn_type = self.events[i].event_type;
                            self.userEventCardBoolean = true;

                            console.log('CHECK HERE 1', self.events[i]);
                            self.selectedEvent = self.events[i];
                            return;
                          } else {
                            console.log('Didnt match!');
                          }
                        }
                      };
                    })(this.markersArray[i], i)
                  );
                }
              } else if (
                this.events[i].event_type === '2' ||
                this.events[i].event_type === '3'
              ) {
                if (
                  this.events[i].event_coach_lat === undefined ||
                  this.events[i].event_coach_log === null
                ) {
                  console.log(this.events[0]);
                } else {
                  var latitude = parseFloat(this.events[i].event_coach_lat);
                  var longitude = parseFloat(this.events[i].event_coach_log);
                  var myLatlng = new google.maps.LatLng(latitude, longitude);

                  var url = '';
                  url = this.events[i].coach_user_marker;
                  if (this.events[i].event_coach_date > this.todayDate) {
                    this.events[i].isAvailable = true;
                  } else if (
                    this.events[i].event_coach_date == this.todayDate &&
                    this.events[i].event_time > this.todayTime
                  ) {
                    this.events[i].isAvailable = true;
                  } else {
                    this.events[i].isAvailable = false;
                  }

                  var icon = {
                    url: url, // url
                    scaledSize: new google.maps.Size(45, 45), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                  };

                  // console.log(this.events[i].event_id);
                  // var marker = new google.maps.Marker({
                  this.markersArray[i] = new google.maps.Marker({
                    position: myLatlng,
                    icon: icon,
                    index: this.events[i].event_id,
                  });

                  // To add the marker to the map, call setMap();
                  this.markersArray[i].setMap(this.map);
                  //marker click event
                  var self = this;
                  google.maps.event.addListener(
                    this.markersArray[i],
                    'click',
                    (function (marker, i) {
                      return function () {
                        console.log('marker.index', marker.index);
                        self.detailArray = [];

                        for (var j = 0; j < self.events.length; j++) {
                          if (marker.index === self.events[i].event_id) {
                            self.detailArray.push(self.events[i]);
                            self.EUserfName = self.events[i].user_f_name;

                            self.userLname = self.events[
                              i
                            ].user_l_name.substring(0, 1);
                            if (
                              self.events[i].user_img === undefined ||
                              self.events[i].user_img === null ||
                              self.events[i].user_img === ''
                            ) {
                              self.imgAvailable = false;
                            } else {
                              self.imgAvailable = true;
                            }
                            self.isAvailable = self.events[i].isAvailable;
                            self.isFull = self.events[i].isFull;
                            console.log(self.isAvailable);
                            console.log('CHECK HERE 2', self.events[i]);
                            self.selectedEvent = self.events[i];

                            self.spcat_name = self.events[i].spcat_name;
                            self.userImg = self.events[i].user_img;
                            self.userLocation =
                              self.events[i].event_coach_address;
                            self.userDate = self.events[i].event_coach_date;
                            self.userTime = self.events[i].event_time;
                            self.isBooked = self.events[i].isBooked;
                            self.userTitle = self.events[i].event_coach_title;
                            self.pricePerPerson =
                              self.events[i].event_individuals_price_per_person;
                            self.userVerified = self.events[i].user_verified;

                            self.host_id = self.events[i].user_id;
                            self.evn_id = self.events[i].event_id;
                            self.userdiscription =
                              self.events[i].event_coach_discription;
                            self.userMin =
                              self.events[
                                i
                              ].event_coach_participants_min_required;
                            self.participants_max =
                              self.events[i].event_coach_participants_max;
                            self.participants_min =
                              self.events[i].event_coach_participants_min;
                            if (self.events[i].event_coach_price_hour != '0') {
                              self.coachPrice =
                                self.events[i].event_coach_price_hour;
                              self.HourPrice = true;
                            } else if (
                              self.events[i].event_coach_price_person != '0'
                            ) {
                              self.coachPrice =
                                self.events[i].event_coach_price_person;
                              self.HourPrice = false;
                            }
                            self.evn_type = self.events[i].event_type;
                            self.coachEventCardBoolean = true;
                            return;
                          } else {
                            console.log('Didnt match!');
                          }
                        }
                      };
                    })(this.markersArray[i], i)
                  );

                  //   });

                  // });
                }
              }
            }
          } else {
          }
        });
    }
  }

  subMenu() {
    this.showList = false;
    if (this.subMenuList === true) {
      this.userEventCardBoolean = false;
      this.coachEventCardBoolean = false;
      this.subMenuList = false;
    } else {
      this.userEventCardBoolean = false;
      this.coachEventCardBoolean = false;
      this.subMenuList = true;
    }
  }

  closeDetailsBox() {
    this.showList = false;
    if (this.userEventCardBoolean === true) {
      this.userEventCardBoolean = false;
    } else if (this.coachEventCardBoolean === true) {
      this.coachEventCardBoolean = false;
      this.HourPrice = false;
    }
  }

  profile() {
    this.showList = false;
    this.subMenuList = false;
    this.api.Navigate('mon-profil');
  }

  myAcc() {
    this.showList = false;
    this.subMenuList = false;
    this.api.Navigate('mon-compte');
  }

  settings() {
    this.showList = false;
    this.subMenuList = false;
    this.api.Navigate('parametres');
  }

  sportsTab() {
    this.showList = false;
    if (this.subMenuList === true) {
      this.subMenuList = false;
      this.userEventCardBoolean = false;
      this.coachEventCardBoolean = false;
      this.api.Navigate('map-sportifs');
    } else {
      this.userEventCardBoolean = false;
      this.coachEventCardBoolean = false;
      this.api.Navigate('map-sportifs');
    }
  }

  logout() {
    this.showList = false;
    this.subMenuList = false;

    //api

    const formData = new FormData();
    formData.append('user_id', this.uid);

    this.http
      .post('http://fitconnected.prometteur.in/index.php/Api/mLogout', formData)
      .subscribe((res) => {
        if (res.json().status == '1') {
          this.logoutuser();
        } else {
          this.api.toast(res.json().msg);
        }
      });
  }

  logoutuser() {
    this.storage.remove('user_id').then(() => {
      this.storage.remove('user_type');

      this.storage.remove('user_email');
      this.storage.remove('user_password');

      this.storage.remove('user_img');
      this.storage.remove('user_postal_code');
      this.router.navigate(['/connexion']);
    });
  }

  hideFooter() {
    console.log('this works');
    this.footerAction = false;
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

  deleteEvent() {
    console.log(event);

    const formData = new FormData();
    formData.append('event_id', this.evn_id);
    formData.append('event_type', this.evn_type);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/del/event',
        formData
      )
      .subscribe((res) => {
        if (res.json().msg == 'Records Deleted Successfully') {
          console.log(res);
          if (this.English) {
            var msg = 'Event Deleted';
          } else {
            var msg = 'événement supprimé';
          }

          this.api.toast(msg);
          if ((this.userEventCardBoolean = true)) {
            this.userEventCardBoolean = false;
            this.loadData();
          } else if ((this.coachEventCardBoolean = true)) {
            this.coachEventCardBoolean = false;
            this.loadData();
          }
          // this.loadData();
        } else {
          console.log(res + 'Error');
        }
      });
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

  async createevent() {
    this.api.loading();
    console.log(this.CreateEvent.value.eventTime);
    //  var event_time=moment(this.CreateEvent.value.eventTime).format("H:mm");
    const formData = new FormData();
    formData.append('user_id', this.uid);
    formData.append('event_type', '1');
    formData.append('user_f_name', this.userfName);
    formData.append('user_l_name', this.userlName);
    formData.append('user_img', this.imgUrl);
    formData.append('event_individuals_date', this.date);
    formData.append(
      'event_individuals_price_per_person',
      this.CreateEvent.value.event_price
    );
    formData.append(
      'event_individuals_participants_max',
      this.CreateEvent.value.event_participants_max
    );
    formData.append('event_individuals_participants_min', '0');
    formData.append('event_individuals_title', this.CreateEvent.value.event);
    formData.append('event_individuals_address', this.placeName);
    formData.append('event_time', this.time);
    formData.append(
      'event_individuals_discription',
      this.CreateEvent.value.event_discription
    );
    formData.append('event_individuals_lat', this.latitude.toString());
    formData.append('event_individuals_log', this.longitude.toString());
    formData.append(
      // 'event_sport_id',
      'event_sport_cate',
      this.CreateEvent.value.event_sport_id.toString()
    );

    if (this.CreateEvent.value.event_sport_name) {
    }
    // formData.append(
    //   'event_sport_cate',
    //   this.CreateEvent.value.event_sport_name.toString()
    // );
    else {
      formData.append('event_sport_cate', '');
    }

    console.log(this.CreateEvent.value.event);
    console.log(this.CreateEvent.value.event_discription);
    console.log(this.CreateEvent.value.event_date);
    console.log(this.CreateEvent.value.event_participants_max);
    console.log(this.placeName);
    console.log(this.latitude);
    console.log(this.longitude);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/event',
        formData
      )

      .subscribe((res) => {
        this.api.dismissLoading();
        if (res.json().status == 1) {
          this.showbox = false;

          this.footerAction = true;
          this.submitted = false;
          // this.api.toast(res.msg);
          this.isEventApiCalled = false;
          this.setMarkers();
          this.creatform();
        } else {
          // this.creatform();
          //  this.api.toast(res.msg)
        }
      });
  }

  testmap() {
    var myLatlng = new google.maps.LatLng(this.lat, this.long);
    var mapOptions = {
      zoom: 12,
      center: myLatlng,
      mapTypeControl: false,
      scaleControl: false,
      zoomControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      //  styles: [{
      //   stylers: [{
      //     saturation: -100
      //   }]
      // }],
      styles: [
        {
          featureType: 'administrative',
          elementType: 'all',
          stylers: [{ visibility: 'on' }],
        },
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#444444' }],
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [{ color: '#f6f6f4' }, { visibility: 'on' }],
        },
        {
          featureType: 'landscape.natural',
          elementType: 'all',
          stylers: [{ visibility: 'off' }, { color: '#00f3ff' }],
        },
        {
          featureType: 'landscape.natural.landcover',
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'poi.attraction',
          elementType: 'all',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'poi.park',
          elementType: 'all',
          stylers: [{ visibility: 'simplified' }, { color: '#c8e4cd' }],
        },
        {
          featureType: 'poi.place_of_worship',
          elementType: 'all',
          stylers: [
            { visibility: 'off' },
            { saturation: '-65' },
            { hue: '#0028ff' },
          ],
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [
            { saturation: -100 },
            { lightness: 45 },
            { color: '#feffff' },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.text',
          stylers: [{ visibility: 'simplified' }, { color: '#454f63' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [{ visibility: 'simplified' }],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'transit.station.airport',
          elementType: 'all',
          stylers: [{ visibility: 'on' }],
        },
        {
          featureType: 'transit.station.bus',
          elementType: 'all',
          stylers: [{ visibility: 'on' }],
        },
        {
          featureType: 'transit.station.rail',
          elementType: 'all',
          stylers: [
            { visibility: 'simplified' },
            { hue: '#0039ff' },
            { saturation: '-100' },
            { lightness: '0' },
            { gamma: '0.00' },
            { weight: '1.94' },
          ],
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [{ color: '#bde1f1' }, { visibility: 'on' }],
        },
      ],
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var self = this;

    this.map.addListener('click', function () {
      if (self.subMenuList === true) {
        self.subMenuList = false;
      }
    });
  }

  eventdetails() {
    this.showList = false;
    this.subMenuList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.api.Navigate('mes-evenements');
  }

  addressInput() {
    document.getElementById('addInput').classList.remove('addressInput');
    document.getElementById('addInput').classList.add('AddressInput');
  }

  messages() {
    this.showList = false;
    this.subMenuList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;

    var vc = {
      pageRoute: 'conversation',
    };

    let navigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };

    this.router.navigate(['chatpage'], navigationExtras);
  }
  notifications() {
    this.showList = false;
    this.subMenuList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.api.Navigate('notifications');
  }

  bookEvent() {
    this.isBooked = true;
    var today = new Date();
    var format = moment(today).format('YYYY-MM-DD');
    this.data.book_user_id = this.uid;
    this.data.book_host_id = this.host_id;
    this.data.book_user_f_name = this.userfName;
    this.data.book_user_l_name = this.userlName;
    this.data.book_event_id = this.evn_id;
    this.data.book_event_date = format;
    this.data.book_event_address = this.userLocation;

    this.storage.set('bookingrequest', this.data);
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;

    const formData = new FormData();
    formData.append('book_user_id', this.uid);
    formData.append('book_host_id', this.host_id);
    formData.append('book_user_f_name', this.userfName);
    formData.append('book_user_l_name', this.userlName);
    formData.append('book_event_id', this.evn_id);
    formData.append('book_event_date', format);
    formData.append('book_event_address', this.userLocation);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/madd/book',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          if (res.json().msg == "En attente d'approbation") {
            if (this.English) {
              var msg = 'Your request has been sent.';
            } else {
              var msg = 'Votre demande a bien été envoyée.';
            }

            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.loadData();
            this.api.toast(msg);
          } else if (res.json().msg == 'Awaiting Approval') {
            if (this.English) {
              this.api.toast(res.json().msg);
            } else {
              this.api.toast("En attente d'approbation");
            }
          } else if (res.json().msg == 'Already booked event') {
            if (this.English) {
              this.api.toast(res.json().msg);
            } else {
              this.api.toast('Événement déjà réservé.');
            }
          } else {
            console.log(res.json());

            this.api.toast(res.json().msg);
          }
          this.userEventCardBoolean = false;
          this.coachEventCardBoolean = false;
          this.loadData();
        } else {
          console.log(res.json());
        }
      });
  }

  takeScreenshot() {
    this.screenshot.URI(80).then((res) => {
      this.sharableURI = res.URI;
      this.share();
    });
  }

  async share() {
    var msg =
      'Event Name: ' +
      this.userTitle +
      '\n' +
      'Location: ' +
      this.userLocation +
      '\n' +
      'Date of Event: ' +
      this.userDate +
      '\n' +
      'Description: ' +
      this.userdiscription;

    if (this.English) {
      const actionSheet = await this.actionSheetController.create({
        header: 'Select a source',
        cssClass: 'social-sharing',
        buttons: [
          {
            text: 'Instagram',
            icon: 'logo-instagram',
            handler: () => {
              this.socialSharing
                .shareViaInstagram(msg, this.sharableURI)
                .then((res) => {
                  // Success
                })
                .catch((e) => {
                  // Error!
                });
            },
          },

          {
            text: 'Facebook',
            icon: 'logo-facebook',
            handler: () => {
              this.socialSharing
                .shareViaFacebook(msg, this.sharableURI)
                .then((res) => {
                  // Success
                })
                .catch((e) => {
                  // Error!
                });
            },
          },

          {
            text: 'Whatsapp',
            icon: 'logo-whatsapp',
            handler: () => {
              this.socialSharing
                .shareViaWhatsApp(msg, this.sharableURI)
                .then(() => {
                  // Success!
                  var msg = 'Information Shared Successfullty!';
                  this.api.toast(msg);
                })
                .catch(() => {
                  // Error!
                });
            },
          },

          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
          },
        ],
      });
      await actionSheet.present();
    } else {
      const actionSheet = await this.actionSheetController.create({
        header: 'Sélectionner une source',
        cssClass: 'social-sharing',
        buttons: [
          {
            text: 'Instagram',
            icon: 'logo-instagram',
            handler: () => {
              this.socialSharing
                .shareViaInstagram(msg, this.sharableURI)
                .then((res) => {
                  // Success
                })
                .catch((e) => {
                  // Error!
                });
            },
          },

          {
            text: 'Facebook',
            icon: 'logo-facebook',
            handler: () => {
              this.socialSharing
                .shareViaFacebook(msg, this.sharableURI)
                .then((res) => {
                  // Success
                })
                .catch((e) => {
                  // Error!
                });
            },
          },

          {
            text: 'Whatsapp',
            icon: 'logo-whatsapp',
            handler: () => {
              this.socialSharing
                .shareViaWhatsApp(msg, this.sharableURI)
                .then(() => {
                  // Success!
                  var msg = 'Information partagée avec succès!';
                  this.api.toast(msg);
                })
                .catch(() => {
                  // Error!
                });
            },
          },
          {
            text: 'Email',
            icon: 'mail',
            handler: () => {
              this.socialSharing
                .canShareViaEmail()
                .then(() => {
                  // Sharing via email is possible
                  this.storage.get('user_email').then((user_email) => {
                    this.uEmail = user_email;
                  });
                })
                .catch((err) => {
                  // Sharing via email is not possible
                  alert(err);
                });

              // Share via email
              this.socialSharing
                .shareViaEmail(msg, 'hubtosport', [this.uEmail])
                .then(() => {
                  // Success!
                })
                .catch((err) => {
                  // Error!
                  alert(err);
                });
            },
          },
          {
            text: 'Annuler',
            icon: 'close',
            role: 'cancel',
          },
        ],
      });
      await actionSheet.present();
    }
  }

  async presentAlertConfirm() {
    if (this.English) {
      const alert = await this.alertController.create({
        cssClass: 'secondary',
        message: 'Are you sure you want to delete this event?',

        buttons: [
          {
            text: 'YES',
            handler: () => {
              console.log('Confirm Okay');
              this.deleteEvent();
            },
          },
          {
            text: 'NO',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
        ],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        cssClass: 'secondary',
        message: 'Es-tu sûr(e) de vouloir supprimer cet événement ?',

        buttons: [
          {
            text: 'OUI',
            handler: () => {
              console.log('Confirm Okay');
              this.deleteEvent();
            },
          },
          {
            text: 'NON',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
        ],
      });

      await alert.present();
    }
  }

  async presentAlertBooking() {
    if (this.participants_min == this.participants_max) {
      if (this.English) {
        this.api.toast('Event is already full');
      } else {
        this.api.toast("L'événement est déjà complet");
      }
    } else {
      if (this.English) {
        const alert = await this.alertController.create({
          cssClass: 'booking',
          message:
            'Are you sure you want to join ' +
            this.EUserfName.bold() +
            ' ' +
            this.userLname.bold() +
            '. on this event?',
          buttons: [
            {
              text: 'YES',
              handler: () => {
                console.log('Confirm Okay');
                this.bookEvent();
              },
            },
            {
              text: 'NO',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
          ],
        });

        await alert.present();
      } else {
        const alert = await this.alertController.create({
          cssClass: 'booking',
          message:
            'Es-tu sûr(e) de vouloir rejoindre ' +
            this.EUserfName.bold() +
            ' ' +
            this.userLname.bold() +
            '. sur cet événement ?',
          buttons: [
            {
              text: 'OUI',
              handler: () => {
                console.log('Confirm Okay');
                this.bookEvent();
              },
            },
            {
              text: 'NON',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
          ],
        });

        await alert.present();
      }
    }
  }

  loadData() {
    this.testmap();
    this.setMarkers();
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

  searchEvent(ev: any) {
    console.log('SPORTS LIST', this.sportsList);
    var arr = [];
    for (let i = 0; i < this.sportsList.length; i++) {
      var input = this.sportsList[i];

      arr.push(input);

      let val = ev.target.value;
      // alert(typeof(val));
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        // Filter the items
        this.search = arr.filter(function (item) {
          return (
            // item.event_coach_title.toLowerCase().indexOf(val.toLowerCase()) >
            //   -1 ||
            // item.event_individuals_title
            //   .toLowerCase()
            //   .indexOf(val.toLowerCase()) > -1 ||
            item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
        });

        // Show the results
        if (this.search.length !== 0) {
          this.showList = true;
        } else {
          this.showList = false;
        }
      } else {
        // hide the results when the query is empty
        this.showList = false;
      }

      // console.log(arr);
    }
  }
  selectItem(item) {
    console.log('select item');
    this.searchTerm = item.spcat_name;
    console.log(item);
    console.log(this.searchTerm);
    // console.log('events list', this.events);
    this.showList = false;
    //
    this.isEventApiCalled = false;
    this.setMarkers(this.searchTerm);

    // CLEAR MAP
    // item.spcat_name compare to this.event[].spcat_name

    if (item.event_type === '1') {
      this.EUserfName = item.user_f_name;

      this.userLname = item.user_l_name.substring(0, 1);

      if (
        item.user_img === undefined ||
        item.user_img === null ||
        item.user_img === ''
      ) {
        this.imgAvailable = false;
      } else {
        this.imgAvailable = true;
      }
      this.userImg = item.user_img;

      this.userLocation = item.event_individuals_address;
      this.userDate = item.event_individuals_date;
      this.userTime = item.event_time;
      // this.userTitle = item.event_individuals_title;
      this.userTitle = item.event_sport_cate;
      this.pricePerPerson = item.event_individuals_price_per_person;
      this.userVerified = item.user_verified;

      this.host_id = item.user_id;
      this.evn_id = item.event_id;
      this.userdiscription = item.event_individuals_discription;
      this.participants_max = item.event_individuals_participants_max;
      this.participants_min = item.event_individuals_participants_min;
      this.evn_type = item.event_type;
      this.userEventCardBoolean = true;
      return;
    } else if (item.event_type === '2') {
      this.EUserfName = item.user_f_name;

      this.userLname = item.user_l_name.substring(0, 1);
      if (
        item.user_img === undefined ||
        item.user_img === null ||
        item.user_img === ''
      ) {
        this.imgAvailable = false;
      } else {
        this.imgAvailable = true;
      }
      this.userImg = item.user_img;
      this.userLocation = item.event_coach_address;
      this.userDate = item.event_coach_date;
      this.userTime = item.event_time;
      // this.userTitle = item.event_coach_title;
      this.userTitle = item.event_sport_cate;
      this.host_id = item.user_id;
      this.evn_id = item.event_id;
      this.userdiscription = item.event_coach_discription;
      this.userMin = item.event_coach_participants_min_required;
      this.participants_max = item.event_coach_participants_max;
      this.participants_min = item.event_coach_participants_min;
      if (item.event_coach_price_hour != '0') {
        this.coachPrice = item.event_coach_price_hour;
        this.HourPrice = true;
      } else if (item.event_coach_price_person != '0') {
        this.coachPrice = item.event_coach_price_person;
        this.HourPrice = false;
      }
      this.evn_type = item.event_type;
      this.coachEventCardBoolean = true;
      return;
    }
  }
  updateEventDetails(eventId: string, lat: number, lng: number) {
    const geocoder = new google.maps.Geocoder();
    const latlng = {
      lat,
      lng,
    };
    geocoder.geocode({ location: latlng }, async (results, status) => {
      if (status === 'OK') {
        const eventAddress = results[0].formatted_address;

        if (this.English) {
          const alert = await this.alertController.create({
            cssClass: 'secondary',
            message: `Are you sure you want to update this event location to ${eventAddress}?`,

            buttons: [
              {
                text: 'YES',
                handler: () => {
                  console.log('Confirm Okay');
                  const formData = new FormData();
                  formData.append('event_id', eventId);
                  formData.append('event_individuals_address', eventAddress);
                  formData.append('event_individuals_lat', lat.toString());
                  formData.append(
                    'event_cevent_individuals_logoach_log',
                    lng.toString()
                  );
                  this.http
                    .post(
                      'http://fitconnected.prometteur.in/index.php/Api/mAdd/event',
                      formData
                    )
                    .subscribe((res) => {
                      if (res) {
                        const response = res.json();
                        if (response.status == 1) {
                          this.isEventApiCalled = false;
                          this.ionViewDidEnter();
                        }
                      }
                    });
                },
              },
              {
                text: 'NO',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  this.ionViewDidEnter();
                },
              },
            ],
          });

          await alert.present();
        } else {
          const alert = await this.alertController.create({
            cssClass: 'secondary',
            message: `
            Voulez-vous vraiment mettre à jour cet emplacement de l'événement en ${eventAddress} ?`,

            buttons: [
              {
                text: 'OUI',
                handler: () => {
                  console.log('Confirm Okay');
                  const formData = new FormData();
                  formData.append('event_id', eventId);
                  formData.append('event_individuals_address', eventAddress);
                  formData.append('event_individuals_lat', lat.toString());
                  formData.append(
                    'event_cevent_individuals_logoach_log',
                    lng.toString()
                  );
                  this.http
                    .post(
                      'http://fitconnected.prometteur.in/index.php/Api/mAdd/event',
                      formData
                    )
                    .subscribe((res) => {
                      if (res) {
                        const response = res.json();
                        if (response.status == 1) {
                          this.isEventApiCalled = false;
                          this.ionViewDidEnter();
                        }
                      }
                    });
                },
              },
              {
                text: 'NON',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  this.ionViewDidEnter();
                },
              },
            ],
          });

          await alert.present();
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }
}
