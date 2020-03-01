import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authFA: AngularFireAuth) {
  }
  login() {
    this.authFA.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.authFA.signOut();
  }
}
