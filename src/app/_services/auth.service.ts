import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.apiUrl}/auth/login`;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    console.log("ISLOGGEDIN",!!sessionStorage.getItem('currentUser'))
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
      this.router.navigate(['home']);
  }
}
