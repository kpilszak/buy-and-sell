import { Component } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'environments/environment';
import { Auth, GoogleAuthProvider, getAuth, signInWithPopup } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-and-sell-frontend';

  constructor(
    private auth: Auth
  ) {
  }

  signInClicked(): void {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    signInWithPopup(this.auth, provider);
  }

  signOutClicked(): void {
    this.auth.signOut();
  }

  isLoggedIn(): boolean {
    var user = this.auth.currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

}
