import { Injectable } from '@angular/core';
import {
  Auth,
  User,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  login(email: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        return true;
      },
      (error) => {
        console.log(error);
        return false;
      }
    );
  }

  getCurrentUser(): User {
    return getAuth().currentUser;
  }

  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    signOut(this.auth);
  }
}
