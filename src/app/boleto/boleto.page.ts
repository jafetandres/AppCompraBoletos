import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';
import { AutoCompleteComponent, AutoCompleteOptions } from 'ionic4-auto-complete';
import { SimpleService } from 'src/services/simple-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { Ruta } from 'src/models/ruta.model';
import { map, catchError } from 'rxjs/operators';
export interface RutaId extends Ruta { id: string; }
@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.page.html',
  styleUrls: ['./boleto.page.scss'],
})
export class BoletoPage implements OnInit {
  @ViewChild('desdeSeacrhBar', { static: false })
  desdeSeacrhBar: AutoCompleteComponent;
  @ViewChild('hastaSeacrhBar', { static: false })
  hastaSeacrhBar: AutoCompleteComponent;
  public options: AutoCompleteOptions;
  public desde: string = '';
  public hasta: string = '';
  private shirtCollection: AngularFirestoreCollection<Ruta>;
  rutas: Observable<RutaId[]>;
   data: Array<Ruta>;

   ruta: Ruta[];
   rutaCompleta="";
   precio="";
 pre=0;

  private itemsCollection: AngularFirestoreCollection<Ruta>;



  constructor(

    public provider: SimpleService,
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    public afs: AngularFirestore,
    public db: AngularFireDatabase

  ) {
    this.shirtCollection = this.afs.collection<Ruta>('ruta');
    this.rutas = this.shirtCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Ruta;
        const id = a.payload.doc.id;
        const destinos=data.destino;
  
        return { id, ...data };
      }))
    );

    this.options = new AutoCompleteOptions();
    this.options.autocomplete = 'on';
    this.options.debounce = 750;
    this.options.placeholder = 'Search';
    this.options.type = 'add-friend.svg';

  }

  ngOnInit() {
    
  }

  buscarBoleto() {
  

    if(this.desdeSeacrhBar.getValue()=='CUENCA' && this.hastaSeacrhBar.getValue() == 'LOJA'){
      this.rutaCompleta=this.desdeSeacrhBar.getValue()+"-"+this.hastaSeacrhBar.getValue();
      this.precio="$ 13.00";
      this.pre=13.00;

    }else{

    }

    



  }

  comprar(){
    this.router.navigate(['/pagar', this.pre,this.rutaCompleta]);


  }

  on(itemSelected, event): void {






    console.log(this.desdeSeacrhBar.getValue());




    // console.log(event);
  }

  //   async getPaises(){
  //     var name;
  //     // const example = this.afs.collection('pais').valueChanges().pipe(map(({ descripcion }) => descripcion));

  //     const example =  this.afs.collection('pais').valueChanges().pipe(map(({ }) => name));

  //       let observable: Observable<any>;
  //       if (this.paises.length === 0) {
  //         console.log("entro a get paises");

  //        this.afs.collection('pais').valueChanges().pipe(

  //       )
  //       .subscribe(
  //           res => res.map(({ id }) => 
  //           this.pais.id=id
  //           ),
  //           res =>res.map(({ descripcion }) => 
  //           this.pais.descripcion=descripcion
  //           ),

  //       );









  //   }
  // }

  // buscarRuta() {

  //  // Create a reference to the cities collection
  // let citiesRe = this.afs.collection('cities');
  // let queryRe = citiesRe.where('state', '==', 'CA');

  // // Create a query against the collection
  // let queryRef = citiesRef.where('state', '==', 'CA');

  //     this.db.collection("users").where("userGgIds.12345", "==", true).get()
  //     let citiesRef = this.afs.collection('ruta', ref => ref.where('origen', '==', this.desdeSeacrhBar.getValue()));
  //     citiesRef.then(snapshot => {
  //       if (snapshot.empty) {
  //         console.log('No matching documents.');
  //         return;
  //       }

  //       snapshot.forEach(doc => {
  //         console.log(doc.id, '=>', doc.data());
  //       });
  //     })
  //     .catch(err => {
  //       console.log('Error getting documents', err);
  //     });
  //     }

  // async getData(){
  //         const loading = await this.loadingCtrl.create({
  //           message: 'Cargando'
  //         });
  //         this.presentLoading(loading);

  //         this.route.data.subscribe(routeData => {
  //           routeData['data'].subscribe(data => {
  //             loading.dismiss();
  //             this.items = data;
  //           })

  //         })
  //       }

  async presentLoading(loading) {
    return await loading.present();
  }

  logout() {
    this.authService.doLogout()
      .then(res => {
        this.router.navigate([""]);
      }, err => {
        console.log(err);
      })
  }

  eliminar(boleto) {
    console.log("Lega correcto", boleto);
    this.firebaseService.deleteBoleto(boleto);
  }

}