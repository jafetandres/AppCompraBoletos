import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectivityService } from 'src/services/connectivity.service';
import { GoogleMapsService } from 'src/services/google-maps.service';
import { Network } from '@ionic-native/network/ngx/';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClientModule} from "@angular/common/http";
// import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    AutoCompleteModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule, // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireModule.initializeApp(environment.firebase),BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    AngularFireDatabase,
    ImagePicker,
    WebView,
    StatusBar,
    SplashScreen,
    ConnectivityService,
    GoogleMapsService,
    Network,
    Geolocation,
  
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
