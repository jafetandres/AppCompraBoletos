import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from 'src/services/firebase.service';

@Injectable()
export class PerfilResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService,) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
     
      this.firebaseService.getPerfil()
      .then(data => {
       
        resolve(data);
      }, err => {
        reject(err);
      })
    })
  }
}