import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Storage } from '@ionic/storage';

import { ActivatedRoute, Router } from '@angular/router';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
// '@angular/fire/compat/database';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

import * as moment from 'moment';

import {
  NavController,
  ActionSheetController,
  ToastController,
  Platform,
  LoadingController,
  ModalController,
  AlertController,
} from '@ionic/angular';
import { TranslateConfigService } from '../translate-config.service';
import { SelectorListContext } from '@angular/compiler';

declare const google;
@Component({
  selector: 'app-evenementcoachvue',
  templateUrl: './evenementcoachvue.page.html',
  styleUrls: ['./evenementcoachvue.page.scss'],
})
export class EvenementcoachvuePage implements OnInit {
  selectedEvent;
  sportsList = [];
  markersArray = [];
  map;
  lat: any;
  long: any;
  public geoCoder;
  subMenuList: boolean = false;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  height = 0;
  placeName: any;
  events = [];
  detailArray = [];
  imgUrl: any;
  EUserfName: any;
  userLname: any;
  userImg: any;
  spcat_name: any;
  userLocation: any;
  userDate: any;
  userTitle: any;
  userdiscription: any;
  participants_max: any;
  imgAvailable: boolean = false;
  userEventCardBoolean: boolean = false;
  Avatar: boolean = true;
  participants_min: any;
  host_id: any;
  uid: any;
  coachEventCardBoolean: any;
  evn_id: any;
  evn_type: any;
  coachPrice: any;
  userfName: any;
  userlName: any;
  userTime: any;
  userMin: any;
  uEmail: any;
  sharableURI: any;
  HourPrice: boolean = false;
  searchTerm: any;
  search = [];
  showList: boolean = false;
  footerAction: boolean = true;
  userType;
  data: any = {};
  subscribed: boolean;
  topSearchPlaceHolder;
  English: boolean;
  isVerified: boolean;
  isAvailable: boolean;
  isBooked: boolean;
  isFull: boolean;
  todayDate;
  todayTime;
  notificationPresent: boolean = false;
  notificationArray;
  // msgValue: boolean;
  pricePerPerson: any;

  constructor(
    public api: ApiService,
    public http: Http,
    public httpClient: HttpClient,
    private geolocation: Geolocation,
    public translateSevice: TranslateConfigService,
    private platform: Platform,
    public storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private socialSharing: SocialSharing,
    public actionSheetController: ActionSheetController,
    // public screenshot: Screenshot,
    public diagnostic: Diagnostic,
    private keyboard: Keyboard
  ) {
    this.keyboard.onKeyboardWillShow().subscribe((data) => {
      this.footerAction = false;
    });
    this.keyboard.onKeyboardWillHide().subscribe((data) => {
      this.footerAction = true;
    });
  }
  searchChange(event) {
    // alert('asdf');
    if (!this.searchTerm) {
      // alert('asdf');
      this.setMarkers();
    }
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

  cancelSearch(event) {
    this.footerAction = true;

    this.footerAction = true;

    this.setMarkers();
  }

  searchFocus(event) {
    // this.footerAction = false;
  }

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  ionViewDidEnter() {
    this.storage.get('user_lang').then(async (lang) => {
      this.storage.get('verifiedCoach').then((isSubscribed) => {
        this.isVerified = isSubscribed;
        console.log('language' + lang);
        if (lang == 'English') {
          this.English = true;
          this.topSearchPlaceHolder = 'Sports Category';
        } else {
          this.English = false;
          this.topSearchPlaceHolder = 'Catégorie de sport';
        }
      });
    });

    // this.diagnostic.isGpsLocationEnabled().then((isAvailable) =>
    // {
    // if(isAvailable===true){

    this.api.loading();
    this.storage.get('notificationArray').then((notificationArray) => {
      this.storage.get('msgUnread').then((value) => {
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
    });
    this.storage.get('user_id').then((user_id) => {
      this.api.checkNewNotificationUnread(user_id);
      this.api.updateToken(user_id);
      this.storage.get('user_img').then((user_img) => {
        this.geolocation
          .getCurrentPosition()
          .then((resp) => {
            // resp.coords.latitude
            this.imgUrl = user_img;
            if (
              user_img === undefined ||
              user_img === null ||
              user_img === ''
            ) {
              this.Avatar = false;
            } else {
              this.Avatar = true;
            }

            this.uid = user_id;
            var timeStamp = moment().unix();
            var latitude = resp.coords.latitude;
            // resp.coords.longitude
            this.lat = latitude.toFixed(6);
            this.long = resp.coords.longitude;
            //initialize map
            var longitude = resp.coords.longitude;
            this.long = longitude.toFixed(6);
            this.testmap();

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
                    console.log('madd/user', res);

                    if (res.json().status == 1) {
                      console.log(res.json());
                      this.api.dismissLoading();
                      if (res.json().user_details[0].user_subscription == 1) {
                        this.storage.set('verifiedCoach', true);
                        this.subscribed = true;
                        this.setMarkers();
                      } else {
                        this.storage.set('verifiedCoach', false);
                        this.subscribed = false;
                        this.setMarkers();
                      }
                    } else {
                      this.api.dismissLoading();
                      console.log('location not updated');
                    }
                  });
              });
          })
          .catch((error) => {
            console.log('Error getting location', error);
          });
      });
    });
    // }else{
    //   this.api.toast("Please Turn On Location to proceed");
    // }

    // }).catch((err)=>{
    //     console.log(err);
    //     if(this.English){
    //       this.api.toast("Please Turn On Gps");
    //     }else{
    //       this.api.toast("Veuillez activer le GPS");

    //     }

    //     this.storage.get('user_id').then((user_id) => {
    //       this.storage.get('user_img').then((user_img) => {
    //         this.geolocation.getCurrentPosition().then((resp) => {
    //           // resp.coords.latitude
    //           this.imgUrl=user_img;
    //           this.uid=user_id;

    //           var latitude=resp.coords.latitude
    //           // resp.coords.longitude
    //          this.lat= latitude.toFixed(6);
    //           this.long=resp.coords.longitude;
    //                    //initialize map
    //                    var longitude = resp.coords.longitude;
    //                    this.long = longitude.toFixed(6);
    //           this.testmap();
    //           const formData = new FormData();
    //           formData.append('user_id',this.uid);
    //           formData.append('user_lat',this.lat);
    //           formData.append('user_lon',this.long);
    //           this.http.post('http://fitconnected.prometteur.in/index.php/Api/madd/user', formData)
    //         .subscribe(res => {
    //           if(res.json().status == 1){
    //             console.log(res);
    //             this.api.dismissLoading();
    //               this.storage.get('verifiedCoach').then((isSubscribed)=>{
    //                 console.log(isSubscribed);

    //                   this.subscribed=isSubscribed;
    //                   this.setMarkers();

    //               });

    //           if(user_img===undefined||user_img===null||user_img===''){
    //             this.Avatar=false;
    //           }else{
    //             this.Avatar=true;
    //           }

    //           }else{
    //             this.api.dismissLoading();
    //             console.log("location not updated")
    //           }
    //         });

    //          }).catch((error) => {
    //            console.log('Error getting location', error);

    //          });

    //       });
    //     });

    //   })
  }

  ionViewWillLeave() {
    this.searchTerm = '';
  }

  addevent() {
    this.showList = false;
    this.subMenuList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    // if(this.subscribed){
    this.api.Navigate('evenementcoach');
    //       }else{
    // this.api.presentAlertSubscription(1);
    //       }
  }

  eventdetails() {
    this.showList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.subMenuList = false;
    this.api.Navigate('evenements-coach');
  }

  messages() {
    this.showList = false;
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.subMenuList = false;

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
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    this.subMenuList = false;
    this.api.Navigate('notifications');
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

  profile() {
    this.showList = false;
    this.subMenuList = false;

    this.api.Navigate('coacheditprofile');
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

  logout() {
    this.showList = false;
    this.subMenuList = false;
    this.storage.remove('verifiedCoach');
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

  ngOnInit() {
    this.storage.get('user_f_name').then((user_f_name) => {
      this.storage.get('user_l_name').then((user_l_name) => {
        this.userfName = user_f_name;
        this.userlName = user_l_name;
        this.todayDate = moment().format('YYYY-MM-DD');
        this.todayTime = moment().format('H:mm');
        console.log(this.todayDate);
      });
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

    this.map = new google.maps.Map(document.getElementById('map3'), mapOptions);
    //      var icon = {
    //       url: this.imgUrl, // url
    //       scaledSize: new google.maps.Size(30, 30), // scaled size
    //       origin: new google.maps.Point(0,0), // origin
    //       anchor: new google.maps.Point(0, 0) // anchor
    //   };
    //   var marker = new google.maps.Marker({
    //     position: myLatlng,

    //     icon: icon
    // });

    //  var marker = new google.maps.Marker({
    //      position: myLatlng,
    //      icon: "assets/images/mapicon.png"
    //  });

    // To add the marker to the map, call setMap();
    //  marker.setMap(this.map)
    var self = this;
    this.map.addListener('click', function () {
      if (self.subMenuList === true) {
        self.subMenuList = false;
      }
    });
  }
  setMarkers(categoryName = undefined) {
    this.clearAllMarkers();
    this.events = [];
    const formData = new FormData();
    formData.append('book_user_id', this.uid);
    this.http
      .post(
        'http://fitconnected.prometteur.in/index.php/Api/fields/event',
        formData
      )
      .subscribe((res) => {
        if (res.json().status == 1) {
          this.events = res.json().result;
          this.storage.set('notificationArray', res.json().notification_list);

          this.storage.get('notificationArray').then((notificationArray) => {
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
          console.log(this.events);
          console.log('hey there');
          for (var i = 0; i < this.events.length; i++) {
            if (categoryName && this.events[i].spcat_name != categoryName)
              continue;

            if (this.events[i].event_type === '1') {
              if (
                this.events[i].event_individuals_lat === undefined ||
                this.events[i].event_individuals_log === null
              ) {
                console.log(this.events[i]);
              } else {
                var latitude = parseFloat(this.events[i].event_individuals_lat);
                var longitude = parseFloat(
                  this.events[i].event_individuals_log
                );
                var myLatlng = new google.maps.LatLng(latitude, longitude);
                // this.map.addListener('click', function(e) {
                if (!this.events[i].isFull) {
                  // url: "assets/icone-eventblue.png", // url
                  var icon = {
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
                    // scaledSize: new google.maps.Size(45, 45), // scaled size
                    // origin: new google.maps.Point(0, 0), // origin
                  };
                  this.events[i].isAvailable = false;
                }

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
                      console.log(marker.index);
                      self.detailArray = [];
                      self.openEvents(marker, i);
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
                console.log(this.events[i]);
              } else {
                var latitude = parseFloat(this.events[i].event_coach_lat);
                var longitude = parseFloat(this.events[i].event_coach_log);
                var myLatlng = new google.maps.LatLng(latitude, longitude);
                var url = '';
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
                url = this.events[i].coach_user_marker;

                var icon = {
                  url: url, // url
                  scaledSize: new google.maps.Size(45, 45), // scaled size
                  origin: new google.maps.Point(0, 0), // origin
                };
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
                //marker click event
                var self = this;
                google.maps.event.addListener(
                  this.markersArray[i],
                  'click',
                  (function (marker, i) {
                    return function () {
                      console.log(marker.index);
                      self.detailArray = [];
                      self.openEvents(marker, i);
                    };
                  })(this.markersArray[i], i)
                );
              }
            }
          }
        } else {
        }
      });
  }

  openEvents(marker, i) {
    console.log('open events', this.events[i]);
    this.selectedEvent = this.events[i];
    // if(this.isVerified){
    if (this.events[i].event_type === '1') {
      for (var j = 0; j < this.events.length; j++) {
        if (marker.index === this.events[i].event_id) {
          this.detailArray.push(this.events[i]);
          this.EUserfName = this.events[i].user_f_name;
          this.userLname = this.events[i].user_l_name.substring(0, 1);
          if (
            this.events[i].user_img === undefined ||
            this.events[i].user_img === null ||
            this.events[i].user_img === ''
          ) {
            this.imgAvailable = false;
          } else {
            this.imgAvailable = true;
          }
          this.userImg = this.events[i].user_img;
          this.isAvailable = this.events[i].user_img;
          this.evn_id = this.events[i].event_id;
          this.evn_type = this.events[i].event_type;
          this.spcat_name = this.events[i].spcat_name;
          this.userLocation = this.events[i].event_individuals_address;
          this.userDate = this.events[i].event_individuals_date;
          this.userTime = this.events[i].event_time;
          this.host_id = this.events[i].user_id;
          // this.userTitle = this.events[i].event_individuals_title;
          // this.userTitle = this.events[i].event_sport_cate;
          this.spcat_name = this.events[i].spcat_name;
          this.pricePerPerson =
            this.events[i].event_individuals_price_per_person;
          this.userdiscription = this.events[i].event_individuals_discription;
          this.participants_max =
            this.events[i].event_individuals_participants_max;
          this.participants_min =
            this.events[i].event_individuals_participants_min;
          this.userEventCardBoolean = true;
          return;
        } else {
          console.log('Didnt match!');
        }
      }
    } else {
      for (var j = 0; j < this.events.length; j++) {
        if (marker.index === this.events[i].event_id) {
          this.detailArray.push(this.events[i]);
          this.EUserfName = this.events[i].user_f_name;
          this.userLname = this.events[i].user_l_name.substring(0, 1);
          if (
            this.events[i].user_img === undefined ||
            this.events[i].user_img === null ||
            this.events[i].user_img === ''
          ) {
            this.imgAvailable = false;
          } else {
            this.imgAvailable = true;
          }
          this.userImg = this.events[i].user_img;
          this.host_id = this.events[i].user_id;
          this.evn_id = this.events[i].event_id;
          this.evn_type = this.events[i].event_type;
          this.spcat_name = this.events[i].spcat_name;
          this.userLocation = this.events[i].event_coach_address;
          if (this.events[i].event_coach_price_hour != '0') {
            this.coachPrice = this.events[i].event_coach_price_hour;
            this.HourPrice = true;
          } else if (this.events[i].event_coach_price_person != '0') {
            this.coachPrice = this.events[i].event_coach_price_person;
            this.HourPrice = false;
          }
          this.isAvailable = this.events[i].user_img;
          this.userDate = this.events[i].event_coach_date;
          this.userMin = this.events[i].event_coach_participants_min_required;
          this.userTime = this.events[i].event_time;
          // this.userTitle = this.events[i].event_coach_title;
          // this.userTitle = this.events[i].event_sport_cate;
          this.spcat_name = this.events[i].spcat_name;
          this.pricePerPerson =
            this.events[i].event_individuals_price_per_person;
          this.userdiscription = this.events[i].event_coach_discription;
          this.participants_max = this.events[i].event_coach_participants_max;
          this.participants_min = this.events[i].event_coach_participants_min;
          this.coachEventCardBoolean = true;
        }
      }
    }
    // }else{
    //     this.api.presentAlertSubscription(3);
    //   }
  }

  closeDetailsBox() {
    console.log('clicked');
    if (this.userEventCardBoolean === true) {
      this.userEventCardBoolean = false;
    } else if (this.coachEventCardBoolean === true) {
      this.coachEventCardBoolean = false;
    }
  }

  abbonement() {
    this.subMenuList = false;
    this.api.Navigate('abonnement');
  }

  viewProfile() {
    this.userEventCardBoolean = false;
    this.coachEventCardBoolean = false;
    console.log('my event');
    if (this.uid == this.host_id) {
      if (this.userType == '1') {
        this.api.Navigate('mon-profil');
      } else {
        this.api.Navigate('coacheditprofile');
      }
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
          var msg = 'événement supprimé';
          this.api.toast(msg);
          this.userEventCardBoolean = false;
          this.coachEventCardBoolean = false;
          this.loadData();
        } else {
          console.log(res + 'Error');
        }
      });
  }

  // share(){
  //   this.socialSharing.shareViaWhatsApp("Event Name:"+this.userTitle+"Location: "+this.userLocation+"Date of Event: "+
  //   this.userDate+ "Description:"+this.userdiscription).then(() => {
  //     // Success!
  //     var msg="Information Shared Successfullty!"
  //     this.api.toast(msg);
  //   }).catch(() => {
  //     // Error!
  //   });
  // }

  takeScreenshot() {
    this.share();
    // this.screenshot.URI(80).then((res) => {
    //   this.sharableURI = res.URI;
  
    // });
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

    const actionSheet = await this.actionSheetController.create({
      header: 'Sélectionner une image source',
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
  }

  sportsTab() {
    if (this.subMenuList === true) {
      this.userEventCardBoolean = false;
      this.coachEventCardBoolean = false;
      this.subMenuList = false;
    } else {
      this.userEventCardBoolean = false;
      this.coachEventCardBoolean = false;
      this.api.Navigate('map-sportifs');
    }
  }

  bookEvent() {
    // if(this.subscribed==true){
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
          if (res.json().msg === 'success') {
            var msg = 'Votre demande a bien été envoyée';
            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.loadData();
            this.api.toast(msg);
          } else {
            console.log(res.json());
            this.userEventCardBoolean = false;
            this.coachEventCardBoolean = false;
            this.api.toast(res.json().msg);
            this.loadData();
          }
        } else {
          console.log(res.json());
        }
      });
    // }else{
    //   this.api.presentAlertSubscription(3);
    // }
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

            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
        ],
      });

      await alert.present();
    }
  }

  loadData() {
    this.testmap();
    this.setMarkers();
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
      } else {
        const alert = await this.alertController.create({
          cssClass: 'booking',
          message:
            'Es-tu sûr(e) de vouloir rejoindre ' +
            this.EUserfName.bold() +
            ' ' +
            this.userLname.bold() +
            '. on this event?',
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

  clearAllMarkers() {
    this.markersArray.forEach((element) => {
      try {
        element.setMap(null);
      } catch (error) {}
    });
    this.markersArray = [];
  }
  searchEvent(ev: any) {
    var arr = [];
    for (let i = 0; i < this.sportsList.length; i++) {
      //var input = {};
      //for(var k =0;k<input.length;k++)
      //this.input1.productId=ProductText;
      // var obj = {};
      // var input = {"id":productId,"name":ProductText,"productUrl":productUrl,"productsell":productsell};
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
            // item.event_sport_cate.toLowerCase().indexOf(val.toLowerCase()) > -1
            item.spcat_name.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
        });

        if (this.search.length !== 0) {
          this.showList = true;
        } else {
          this.showList = false;
        }

        // Show the results
      } else {
        // hide the results when the query is empty
        this.showList = false;
      }

      // console.log(arr);
    }
  }
  selectItem(item) {
    console.log('select item', item);

    this.searchTerm = item.spcat_name;
    console.log(item);
    console.log(this.searchTerm);
    this.showList = false;
    this.setMarkers(this.searchTerm);
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
      // this.userTitle = item.event_sport_cate;
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
      // this.userTitle = item.event_sport_cate;
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
                  formData.append('event_coach_address', eventAddress);
                  formData.append('event_coach_lat', lat.toString());
                  formData.append('event_coach_log', lng.toString());

                  this.http
                    .post(
                      'http://fitconnected.prometteur.in/index.php/Api/mAdd/event',
                      formData
                    )
                    .subscribe((res) => {
                      if (res) {
                        const response = res.json();
                        if (response.status == 1) {
                          this.ionViewDidEnter();
                        }
                      }
                    });
                },
              },
              {
                text: 'NO',
                role: 'cancel',

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
            message: `Voulez-vous vraiment mettre à jour cet emplacement de l'événement en ${eventAddress} ?`,
            buttons: [
              {
                text: 'OUI',

                handler: () => {
                  console.log('Confirm Okay');
                  const formData = new FormData();
                  formData.append('event_id', eventId);
                  formData.append('event_coach_address', eventAddress);
                  formData.append('event_coach_lat', lat.toString());
                  formData.append('event_coach_log', lng.toString());
                  this.http
                    .post(
                      'http://fitconnected.prometteur.in/index.php/Api/mAdd/event',
                      formData
                    )
                    .subscribe((res) => {
                      if (res) {
                        const response = res.json();
                        if (response.status == 1) {
                          this.ionViewDidEnter();
                        }
                      }
                    });
                },
              },
              {
                text: 'NON',
                role: 'cancel',

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
