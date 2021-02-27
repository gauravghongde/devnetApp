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

  private loginUrl = `${environment.authUrl}/auth/login`;
  private registerUrl = `${environment.authUrl}/auth/register`;
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));

  constructor(private http: HttpClient, private router: Router) { }

  public get currentUser(): BehaviorSubject<User> {
    return this.currentUserSubject;
  }

  public currentUser$: Observable<User> = this.currentUserSubject.asObservable();

  isLoggedIn(): boolean {
    console.log('ISLOGGEDIN', !!sessionStorage.getItem('currentUser'));
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

  register(email: string, firstName: string, lastName: string, password: string, username: string): Observable<any> {
    const registerBody = { email, firstName, lastName, password, username }
    return this.http.post<any>(this.registerUrl, registerBody);
  }

  logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('login');
  }
}
