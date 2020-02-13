import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';

@Injectable()
export class NuevaProvinciaResolver implements Resolve<any> {
  

  constructor(private firebaseService: FirebaseService) {

    console.log("aqui es ");
  }
  resolve() {
    
    return this.firebaseService.getPaises();
  }
}