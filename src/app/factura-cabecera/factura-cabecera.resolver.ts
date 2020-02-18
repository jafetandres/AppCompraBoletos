import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";

@Injectable()
export class FacturaCabeceraResolver implements Resolve<any> {
  constructor(private firebaseService: FirebaseService) {
  }
  resolve() {
    return this.firebaseService.getVehiculos();
  }
}