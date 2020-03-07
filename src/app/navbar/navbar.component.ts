import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../constants/app.constants';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUserSubj: BehaviorSubject<User>;
  currentUserObj: User;
  currentUser$: Observable<User>;
  status: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUserSubj = this.authService.currentUser;
    this.currentUserObj = this.currentUserSubj.value;
    this.currentUser$ = this.currentUserSubj.asObservable();
  }

  logout() {
    this.authService.logout();
  }

}
