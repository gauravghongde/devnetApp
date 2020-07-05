import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loader: boolean = false;

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  // emailDomainValidator(control: FormControl) { 
  //   let email = control.value;
  //   if (email && email.indexOf("@") != -1) { 
  //     let [_, domain] = email.split("@"); 
  //     if (domain !== "gmail.com") { 
  //       return {
  //         emailDomain: {
  //           parsedDomain: domain
  //         }
  //       }
  //     }
  //   }
  //   return null; 
  // }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.registerUser();
  }

  registerUser() {
    this.loader = true;
    this.authService.register(this.registerForm.value.email,
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.password,
      this.registerForm.value.username)
      .subscribe((registerResp: any) => {
        console.log(registerResp);
        this.loader = false;

        if (!isNullOrUndefined(registerResp) && !isNullOrUndefined(registerResp.username)) {
          this.router.navigate(['home']);
        }
      },
        (errorResp: any) => {
          this.loader = false;
          alert("Couldn't Register : " + errorResp);
        }
      );
  }
}
