import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn: boolean = false;
  constructor(public firebaseAuth: AngularFireAuth) {}

  async signin(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  async loginWithGoogle() {
    await this.firebaseAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        this.isLoggedIn = true;
        console.log('Successfully login with Google');
      })
      .catch((error) => console.log(error));
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
