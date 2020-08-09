import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { User } from 'src/app/utilities/constants/app.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUserSubj: BehaviorSubject<User>;
  currentUserObj: User;
  currentUser$: Observable<User>;
  status = false;
  searchQuery: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUserSubj = this.authService.currentUser;
    this.currentUserObj = this.currentUserSubj.value;
    this.currentUser$ = this.currentUserSubj.asObservable();
  }

  onSearch() {
    this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
  }

  logout() {
    this.authService.logout();
  }

}
