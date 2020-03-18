import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ResponseTypes } from 'src/app/utilities/constants/app.constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loader: boolean = false;
  username: string;
  password: string;
  messageType: string;
  message: string;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
    this.renderer.addClass(document.body, 'login-bg');
  }

  loginUser() {
    this.loader = true;
    this.authService.login(this.username, this.password).subscribe((loginResp: any) => {
      console.log(loginResp);
      this.loader = false;
      if (!isNullOrUndefined(loginResp) && !isNullOrUndefined(loginResp.username)) {
        this.router.navigate(['home']);
        this.messageType = ResponseTypes.SUCCESS;
        this.message = 'Logged in Successfully!!';
      } else {
        this.messageType = ResponseTypes.FAILED;
        this.message = 'Username or Password did not match';
      }
    },
    errorResp => {
      this.loader = false;
      alert("Couldn't Login : "+ errorResp);
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-bg');
  }
}
