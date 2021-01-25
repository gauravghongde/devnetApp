import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { ResponseTypes } from 'src/app/utilities/constants/app.constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loader: boolean = false;
  public messageType: string;
  public message: string;
  public loginFormGroup: FormGroup;
  public submitted = false;

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

    this.loginFormGroup = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.loginFormGroup.invalid) {
      return;
    }
    this.loginUser();
  }

  private loginUser() {
    this.loader = true;
    this.authService.login(
      this.loginFormGroup.get('username').value,
      this.loginFormGroup.get('password').value).subscribe(
        (loginResp: any) => {
          console.log(loginResp);
          this.loader = false;
          if (loginResp != null && loginResp.username != null && loginResp.username != undefined) {
            this.router.navigate(['home']);
            this.messageType = ResponseTypes.SUCCESS;
            this.message = 'Logged in Successfully!!';
          } else {
            this.messageType = ResponseTypes.FAILED;
            this.message = 'Username or Password did not match';
          }
        },
        (errorResp: any) => {
          this.loader = false;
          console.log('Couldn\'t Login: ', errorResp);
          alert("Error while logging in! Please check your credentials & try again!");
        });
  }

  get f() { return this.loginFormGroup.controls; }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-bg');
  }
}
