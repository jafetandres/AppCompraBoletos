import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { AutoCompleteService } from 'ionic4-auto-complete';

import { Country } from '../models/country.model';
import { FirebaseService } from 'src/services/firebase.service'
import { Pais } from 'src/models/pais.model'

@Injectable()
export class SimpleService implements AutoCompleteService {
  labelAttribute = 'descripcion';
  
  

  private countries: Country[] = [];
  private paises: Pais[] = [];

  constructor(
    private http: HttpClient,
    private firebaseService: FirebaseService,
    public afs: AngularFirestore

  ) {

  }




  getResults(keyword?: string): Observable<any[]> {
    keyword = typeof keyword === 'string' ? keyword : '';
    let observable: Observable<any>;
    if (this.paises.length === 0) {
      observable = this.afs.collection('ciudad').valueChanges().pipe(
        map(
          (results: Pais[]) => {
            if (results) {
              
              this.paises = results;
              console.log("son los paises"+this.paises[0]);

            }

            return this.paises;
          }
        )
      );
    } else {
      observable = of(this.paises);
    }

    return observable.pipe(
      map(
        (result) => {
          return result.filter(
            (item) => {
              return item.descripcion.toLowerCase().startsWith(
                keyword.toLowerCase()
              );
           
            }
          );
        }
      )
    );


  }

  // getResults(keyword?: string): Observable<any[]> {
  //   keyword = typeof keyword === 'string' ? keyword : '';

  //   let observable: Observable<any>;

  //   if (this.countries.length === 0) {



  //     observable = this.http.get('https://restcountries.eu/rest/v2/all').pipe(
  //       map(
  //         (results: Country[]) => {
  //           if (results) {
  //             this.countries = results;
  //           }

  //           return this.countries;
  //         }
  //       )
  //     );
  //   } else {
  //     observable = of(this.countries);
  //   }

  //   return observable.pipe(
  //     map(
  //       (result) => {
  //         return result.filter(
  //           (item) => {
  //             return item.name.toLowerCase().startsWith(
  //               keyword.toLowerCase()
  //             );
  //           }
  //         );
  //       }
  //     )
  //   );
  // }
}
