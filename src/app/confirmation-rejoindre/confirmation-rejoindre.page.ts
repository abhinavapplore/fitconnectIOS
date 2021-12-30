import { Component, OnInit } from '@angular/core';
declare const google;
@Component({
  selector: 'app-confirmation-rejoindre',
  templateUrl: './confirmation-rejoindre.page.html',
  styleUrls: ['./confirmation-rejoindre.page.scss'],
})
export class ConfirmationRejoindrePage implements OnInit {
  map;
  constructor() {

  }

  ionViewDidEnter(){
    this.testmap();
  }

  ngOnInit() {
  }

  testmap(){

    var myLatlng = new google.maps.LatLng(33.6396965, -84.4304574);
    var mapOptions = {
      zoom: 12,
       center: myLatlng,
       mapTypeControl: false,
       scaleControl: false,
       zoomControl: false,
       streetViewControl: false,
       rotateControl: false,
       fullscreenControl: false,
       styles: [{
        stylers: [{
          saturation: -100
        }]
      }]
     }
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      icon: "assets/images/mapicon.png"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(this.map)

  }
}
