import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/login';
  constructor(private http: HttpClient) { }

  loginUser(user): any {
    this.http.post(this.loginUrl, user);

  }
}
