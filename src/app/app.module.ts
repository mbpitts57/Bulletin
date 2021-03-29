import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA43MzLevRUSAnyfTNgWg3JLG08BeLhsJc",
  authDomain: "project4-5cf39.firebaseapp.com",
  projectId: "project4-5cf39",
  storageBucket: "project4-5cf39.appspot.com",
  messagingSenderId: "640781590730",
  appId: "1:640781590730:web:a7e3fdae7f87853a379433",
  measurementId: "G-5EPQ55EPGC"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig), AngularFireModule, 
    AngularFirestoreModule, AngularFireDatabaseModule, AngularFireStorageModule, AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
