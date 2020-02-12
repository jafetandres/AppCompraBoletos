import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMapsService } from 'src/services/google-maps.service';
import { Platform, NavController, MenuController } from '@ionic/angular'; 

declare var google; 
@Component({
  selector: 'app-location-select',
  templateUrl: './location-select.page.html',
  styleUrls: ['./location-select.page.scss'],
})
export class LocationSelectPage implements OnInit {



  @ViewChild('map', {static: false}) mapElement: ElementRef;
  @ViewChild('pleaseConnect', {static: false}) pleaseConnect: ElementRef;

  latitude: number;
  longitude: number;
  autocompleteService: any;
  placesService: any;
  query: string = '';
  places: any = [];
  searchDisabled: boolean;
  saveDisabled: boolean;
  location: any; 

  constructor( public zone: NgZone, public maps: GoogleMapsService, public platform: Platform, public geolocation: Geolocation) {
    this.searchDisabled = true;
    this.saveDisabled = true;
   }
   ionViewDidLoad(): void {
    console.log("entro a ionViewLoad 1");
    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
console.log("entro a ionViewLoad");
        this.autocompleteService = new google.maps.places.AutocompleteService();
        this.placesService = new google.maps.places.PlacesService(this.maps.map);
        this.searchDisabled = false;

    }); 

}
  ngOnInit() {
    //   this.ionViewDidLoad();
  }


  selectPlace(place){

    this.places = [];

    let location = {
        lat: null,
        lng: null,
        name: place.name
    };

    this.placesService.getDetails({placeId: place.place_id}, (details) => {

        this.zone.run(() => {

            location.name = details.name;
            location.lat = details.geometry.location.lat();
            location.lng = details.geometry.location.lng();
            this.saveDisabled = false;

            this.maps.map.setCenter({lat: location.lat, lng: location.lng}); 

            this.location = location;

        });

    });

}

searchPlace(){

    this.saveDisabled = true;

    if(this.query.length > 0 && !this.searchDisabled) {

        let config = {
            types: ['geocode'],
            input: this.query
        }

        this.autocompleteService.getPlacePredictions(config, (predictions, status) => {

            if(status == google.maps.places.PlacesServiceStatus.OK && predictions){

                this.places = [];

                predictions.forEach((prediction) => {
                    this.places.push(prediction);
                });
            }

        });

    } else {
        this.places = [];
    }

}

// save(){
//     this.viewCtrl.dismiss(this.location);
// }

// close(){
//     this.viewCtrl.dismiss();
// }   


}
