import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";

@Injectable()
export class NuevoFormaPagoResolver implements Resolve<any> {
  constructor(private firebaseService: FirebaseService) {
  }
  resolve() {
    return this.firebaseService.getBoletos();
  }
}