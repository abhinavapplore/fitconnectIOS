import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateConfigService } from '../translate-config.service';

declare const google;
@Component({
  selector: 'app-map-sportifs',
  templateUrl: './map-sportifs.page.html',
  styleUrls: ['./map-sportifs.page.scss'],
})
export class MapSportifsPage implements OnInit {
  total_coach_users = 0;
  map;
  features;
  userType: any;
  lat: any;
  long: any;
  userId: any;
  nearbyUsers = [];
  userCount;
  markerLong;
  markerLat;
  imgUrl;
  Avatar: boolean = true;
  subMenuList: boolean = false;
  isSubscribed: boolean = false;
  footerAction: boolean = true;
  searchTerm: any;
  search = [];
  showList: boolean = false;
  uid;
  cityLat;
  cityLong;
  topSearchPlaceHolder;
  notificationPresent: boolean = false;
  notificationArray;
  msgValue: boolean;

  constructor(
    public api: ApiService,
    public storage: Storage,
    public translateSevice: TranslateConfigService,
    public http: Http,
    public httpClient: HttpClient,
    private geolocation: Geolocation,
    public keyboard: Keyboard,
    public router: Router
  ) {
    this.features = [
      {
        icon: 'assets/images/location1.png',
        position: new google.maps.LatLng(-33.91721, 151.2263),
      },
      {
        icon: 'assets/images/location2.png',
        position: new google.maps.LatLng(-33.91539, 151.2282),
      },
      {
        icon: 'assets/images/location3.png',
        position: new google.maps.LatLng(-33.91747, 151.22912),
      },
      {
        icon: 'assets/images/location4.png',
        position: new google.maps.LatLng(-33.9191, 151.22907),
      },
      {
        icon: 'assets/images/location5.png',
        position: new google.maps.LatLng(-33.91711, 151.2305),
      },
    ];

    this.keyboard.onKeyboardWillShow().subscribe((data) => {
      this.footerAction = false;
    });
    this.keyboard.onKeyboardWillHide().subscribe((data) => {
      this.footerAction = true;
    });
  }

  ngOnInit() {
    this.storage.get('notificationArray').then((notificationArray) => {
      this.storage.get('msgUnread').then((value) => {
        this.msgValue = value;
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
    this.storage.get('user_lang').then(async (lang) => {
      console.log('language' + lang);
      if (lang == 'English') {
        this.topSearchPlaceHolder = 'City, Postal Code';
      } else {
        this.topSearchPlaceHolder = 'Ville, Code Postal';
      }
    });

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      this.lat = resp.coords.latitude;
      // resp.coords.longitude
      this.long = resp.coords.longitude;

      //initialize map

      this.storage.get('user_type').then((user_type) => {
        this.storage.get('user_img').then((user_img) => {
          this.storage.get('user_id').then((user_id) => {
            this.userType = user_type;
            this.uid = user_id;
            if (
              user_img === undefined ||
              user_img === null ||
              user_img === ''
            ) {
              this.Avatar = false;
            } else {
              this.Avatar = true;
              this.imgUrl = user_img;
            }
            this.testmap();
            if (user_type == '2') {
              this.setMarkers();
              this.storage.get('verifiedCoach').then((isSubscribed) => {
                console.log(isSubscribed);
                if (isSubscribed) {
                  this.isSubscribed = true;
                } else {
                  this.isSubscribed = false;
                  //open modal
                  // this.api.presentAlertSubscription();
                }
              });
            } else {
              this.setMarkers();
            }
          });
        });
      });
    });
  }

  ionViewWillLeave() {
    this.searchTerm = '';
  }

  searchFocus(event) {
    this.footerAction = false;
  }

  // ngOnInit() {

  // }

  searchEvent(ev: any) {
    var arr = [];
    for (let i = 0; i < this.nearbyUsers.length; i++) {
      //var input = {};
      //for(var k =0;k<input.length;k++)
      //this.input1.productId=ProductText;
      // var obj = {};
      // var input = {"id":productId,"name":ProductText,"productUrl":productUrl,"productsell":productsell};
      var input = this.nearbyUsers[i];
      arr.push(input);

      let val = ev.target.value;
      // alert(typeof(val));
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        // Filter the items
        this.search = arr.filter(function (item) {
          return (
            item.user_postal_code.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
        });

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
    var vc = {
      postal_code: item.user_postal_code,
      user_city: item.user_city,
      pageRoute: this.router.url,
    };
    console.log(vc);

    this.navigateToclick(vc);
  }

  cancelSearch(event) {
    this.footerAction = true;
  }

  //   selectItem(item)
  //   {  this.showList = false;
  //     this.searchTerm = "";
  //     console.log(item);
  //     console.log(this.searchTerm)

  //     if(this.uid==item.user_id){
  //       if(this.userType=="1"){
  // this.api.Navigate('mon-profil');
  //       }else{
  //         this.api.Navigate('coacheditprofile');
  //       }
  //     }else{
  //       var vc = {

  //         user_id:item.user_id

  //       }

  //       let navigationExtras = {
  //         queryParams: {
  //           special: JSON.stringify(vc)
  //         }
  //       };

  //       this.router.navigate(['coachviewprofile'], navigationExtras);
  //     }

  //   }

  subMenu() {
    this.showList = false;
    if (this.subMenuList === true) {
      this.subMenuList = false;
    } else {
      this.subMenuList = true;
    }
  }

  profile() {
    this.showList = false;
    this.subMenuList = false;
    if (this.userType == '1') {
      this.api.Navigate('mon-profil');
    } else {
      this.api.Navigate('coacheditprofile');
    }
  }

  myAcc() {
    this.subMenuList = false;
    this.showList = false;
    this.api.Navigate('mon-compte');
  }

  settings() {
    this.subMenuList = false;
    this.showList = false;
    this.api.Navigate('parametres');
  }

  abbonement() {
    this.showList = false;
    this.subMenuList = false;
    this.api.Navigate('abonnement');
  }

  logout() {
    this.showList = false;
    this.subMenuList = false;
    this.storage.remove('verifiedCoach');
    this.logoutuser();
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

  eventsTab() {
    this.showList = false;
    if (this.userType === '1') {
      this.subMenuList = false;
      this.api.Navigate('creer-evenement');
    } else if (this.userType === '2') {
      this.subMenuList = false;
      this.api.Navigate('evenementcoachvue');
    }
  }

  rankingDetails() {
    this.api.Navigate('ranking');
  }

  eventdetails() {
    this.showList = false;
    if (this.userType === '1') {
      this.subMenuList = false;
      this.api.Navigate('mes-evenements');
    } else if (this.userType === '2') {
      this.subMenuList = false;
      this.api.Navigate('evenements-coach');
    }
  }

  messages() {
    this.showList = false;
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
    this.subMenuList = false;
    this.api.Navigate('notifications');
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
    this.map = new google.maps.Map(document.getElementById('map2'), mapOptions);
  }

  setMarkers() {
    this.storage.get('user_id').then((user_id) => {
      this.storage.get('user_postal_code').then((user_postal_code) => {
        this.userId = user_id;
        const formData = new FormData();
        formData.append('user_id', this.userId);

        formData.append('user_postal_code', user_postal_code);
        this.http
          .post(
            'http://fitconnected.prometteur.in/index.php/Api/fields/get_users',
            formData
          )
          .subscribe((res) => {
            // TOTAL USERS
            // SHOW AT TOOLBAR USING EN.JSON

            if (res.json().status == 1) {
              console.log(res.json().result);
              this.total_coach_users = res.json().total_coach_users;
              // this.nearbyUsers=res.json().result;

              console.log(this.cityLat);
              console.log(this.cityLong);

              // for(var i=0;i<this.nearbyUsers.length;i++){

              var latitude = parseFloat(res.json().result[0].CityLat);
              var longitude = parseFloat(res.json().result[0].CityLong);
              var myLatlng = new google.maps.LatLng(latitude, longitude);
              // this.map.addListener('click', function(e) {
              var icon = {
                url: 'assets/images/icone-ville.png', // url
                scaledSize: new google.maps.Size(35, 50), // scaled size
                origin: new google.maps.Point(0, 0), // origin
              };
              var marker = new google.maps.Marker({
                position: myLatlng,
                icon: icon,
                index: res.json().result[0].user_postal_code,
                customInfo: res.json().result[0].user_city,
                label: {
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '600',
                  text: res.json().result[0].total_users,
                },
              });

              // To add the marker to the map, call setMap();

              marker.setMap(this.map);

              var self = this;
              // google.maps.event.addListener(map, 'click', function(event) {
              //   placeMarker(event.latLng);
              // });
              google.maps.event.addListener(
                marker,
                'click',
                (function (marker, i) {
                  return function () {
                    console.log(marker.index);
                    var vc = {
                      postal_code: marker.index,
                      user_city: marker.customInfo,
                      pageRoute: self.router.url,
                    };
                    console.log(vc);
                    let navigationExtras: NavigationExtras = {
                      queryParams: {
                        special: JSON.stringify(vc),
                      },
                    };
                    self.router.navigate(
                      ['click-nantes-particuliers'],
                      navigationExtras
                    );
                  };
                })(marker)
              );

              // }

              const formD = new FormData();
              formD.append('user_id', this.userId);

              this.http
                .post(
                  'http://fitconnected.prometteur.in/index.php/Api/fields/get_users',
                  formD
                )
                .subscribe((response) => {
                  if (response.json().status == 1) {
                    console.log(response.json().result);
                    this.nearbyUsers = response.json().result;

                    console.log(this.cityLat);
                    console.log(this.cityLong);

                    for (var i = 0; i < this.nearbyUsers.length; i++) {
                      var latitude = parseFloat(this.nearbyUsers[i].CityLat);
                      var longitude = parseFloat(this.nearbyUsers[i].CityLong);
                      var myLatlng = new google.maps.LatLng(
                        latitude,
                        longitude
                      );
                      // this.map.addListener('click', function(e) {
                      var icon = {
                        url: 'assets/images/icone-ville.png', // url
                        scaledSize: new google.maps.Size(50, 50), // scaled size
                        origin: new google.maps.Point(0, 0), // origin
                      };
                      var marker = new google.maps.Marker({
                        position: myLatlng,
                        icon: icon,
                        index: this.nearbyUsers[i].user_postal_code,
                        customInfo: this.nearbyUsers[i].user_city,
                        label: {
                          color: '#FFFFFF',
                          fontSize: '18px',
                          fontWeight: '600',
                          text: this.nearbyUsers[i].total_users,
                        },
                      });

                      // To add the marker to the map, call setMap();

                      marker.setMap(this.map);

                      var self = this;
                      // google.maps.event.addListener(map, 'click', function(event) {
                      //   placeMarker(event.latLng);
                      // });

                      google.maps.event.addListener(
                        marker,
                        'click',
                        (function (marker, i) {
                          return function () {
                            console.log(marker.index);
                            var vc = {
                              postal_code: marker.index,
                              user_city: marker.customInfo,
                              pageRoute: self.router.url,
                            };
                            console.log(vc);

                            self.navigateToclick(vc);
                          };
                        })(marker)
                      );
                    }
                    //other pincode markers
                  } else {
                    console.log('Error Fetching data');
                    //other pincode error
                  }
                });
            } else {
              console.log('Error Fetching data');
              this.api.dismissLoading();
            }
          });
      });
    });
  }

  navigateToclick(vc) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(vc),
      },
    };
    if (this.userType == '2') {
      // if(this.isSubscribed ){
      this.router.navigate(['click-nantes-particuliers'], navigationExtras);
      // }else{
      //   this.api.presentAlertSubscription(2);
      // }
    } else {
      this.router.navigate(['click-nantes-particuliers'], navigationExtras);
    }
  }
}
