import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDNlHMNttExA6IIglXSdti6gO1CO9h-85E',
      authDomain: 'fir-angular-auth-84ce0.firebaseapp.com',
      projectId: 'fir-angular-auth-84ce0',
      storageBucket: 'fir-angular-auth-84ce0.appspot.com',
      messagingSenderId: '375315477215',
      appId: '1:375315477215:web:014bcec466a2a5acb2af6a',
      measurementId: 'G-NERX1G953L',
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
