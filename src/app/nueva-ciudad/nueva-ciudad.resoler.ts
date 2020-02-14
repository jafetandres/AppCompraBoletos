import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';

@Injectable()
export class NuevaCiudadResolver implements Resolve<any> {

  constructor(private firebaseService: FirebaseService) {
  }
  resolve() {
    return this.firebaseService.getProvincias();
  }
}