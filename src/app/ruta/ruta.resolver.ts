import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';

@Injectable()
export class RutaResolver implements Resolve<any> {
  

  constructor(private firebaseService: FirebaseService) {


  }
  resolve() {
    
    return this.firebaseService.getRutas();
  }
}