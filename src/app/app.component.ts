import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public email: string;

  public password: string;

  constructor(public authFA: AngularFireAuth, private snackBar: MatSnackBar) {
  }
  loginWithGoogle() {
    this.authFA.signInWithPopup(new auth.GoogleAuthProvider());
  }

  login(email: string, password: string) {
    this.authFA.signInWithEmailAndPassword(email, password).then(() => this.snackBar.open('Login realizado','OK!')).catch(e => alert(e));
  }

  logout() {
    this.authFA.signOut();
  }
}
