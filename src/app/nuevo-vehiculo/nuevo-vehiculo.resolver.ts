import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";

@Injectable()
export class NuevoVehiculoResolver implements Resolve<any> {
  constructor(private firebaseService: FirebaseService) {
  }
  resolve() {
    return this.firebaseService.getVehiculos();
  }
  // resolve(route: ActivatedRouteSnapshot) {

  //   return new Promise((resolve, reject) => {
  //     let itemId = route.paramMap.get('id');
  //     this.firebaseService.getVehiculo(itemId)
  //     .then(data => {
  //       data.id = itemId;
  //       resolve(data);
  //     }, err => {
  //       reject(err);
  //     });
  //   });
  // }
}