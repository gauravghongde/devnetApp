import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../utilities/constants/app.constants';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.apiUrl}/auth/login`;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
  }

  public get currentUser(): BehaviorSubject<User> {
    return this.currentUserSubject;
  }

  isLoggedIn(): boolean {
    console.log("ISLOGGEDIN", !!sessionStorage.getItem('currentUser'))
    return !!sessionStorage.getItem('currentUser');
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.loginUrl, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in session storage to keep user logged in between page refreshes
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('login');
  }
}
