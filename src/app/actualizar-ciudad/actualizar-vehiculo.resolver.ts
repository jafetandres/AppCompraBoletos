import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from 'src/services/firebase.service';

@Injectable()
export class CiudadActualizarResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService,) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      let itemId = route.paramMap.get('id');
      console.log("Lega correcto", itemId);
      this.firebaseService.getCiudad(itemId)
      .then(data => {
        data.id = itemId;
        resolve(data);
        if (data.provincia!=null) {
          console.log(data.provincia);
         this.firebaseService.getProvincias();
         console.log(this.firebaseService.getProvincias());
        }
        
      }, err => {
        reject(err);
      })
    });
    // return this.firebaseService.getProvincias();
  }
}