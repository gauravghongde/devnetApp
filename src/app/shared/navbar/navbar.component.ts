import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { User } from 'src/app/utilities/constants/app.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currentUser: User;
  public status = false;
  public searchQuery: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.currentUser$.subscribe(
      (user: User) => {
        this.currentUser = user;
      }),
      (err: any) => {
        console.error(err);
      }
  }

  onSearch() {
    this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
  }

  logout() {
    this.authService.logout();
  }

}
