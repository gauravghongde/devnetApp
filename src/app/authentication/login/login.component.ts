import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginUserData: any = {
    usename: string ,
    password: string;
  };
  constructor(private renderer: Renderer2, private auth: AuthService) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'login-bg');
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-bg');
  }
}
