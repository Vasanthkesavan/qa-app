import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {

    }

    signupUser(firstName: string, lastName: string, email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(
              user => {
                  console.log('This is the user data', user);
                  const userDetails = {
                    firstName: firstName,
                    lastName: lastName
                  };
            }
          )
          .catch(
              error => console.log(error)
          );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/question-page']);
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.router.navigate(['']);
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
