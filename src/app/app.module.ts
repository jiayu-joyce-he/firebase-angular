import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { environment } from '../environments/environment';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, EditorComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
