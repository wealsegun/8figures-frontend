import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from '../models/login.model';
import { AccountService } from '../services/account.service';
import { CurrentUserService } from '../services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model!: LoginModel;
  loading: boolean =  false;
  returnUrl: string = '';
  loginFormGroup!: FormGroup;

  constructor(private service: AccountService, private currentService: CurrentUserService,
    private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder  ) {
    this.loginFormGroup = fb.group({
      email: ['', Validators.pattern(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/)],
      password: ['', Validators.required]

    });
  }

  ngOnInit() {
    //this.returnUrl = this.router..queryParams['returnUrl'] || '/';
  }


  get email() {
    return this.loginFormGroup?.get('email');
  }
  get password() {
    return this.loginFormGroup?.get('password');
  }


  loginButton() {
    //const loginModel: LoginModel = {
    //  email: this.model.email,
    //  password: this.model.password
    //}

    this.model = <LoginModel>this.loginFormGroup.value;
    this.loading = true;
    console.log(this.model);

    this.service.login(this.model).subscribe(response => {
      console.log(response);

    })
  }

}
