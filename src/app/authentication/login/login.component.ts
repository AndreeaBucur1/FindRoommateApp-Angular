import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared/services/user-info.service';
import Swal from 'sweetalert2';
import { ResetPasswordService } from '../reset-password/reset-password.service';
import { LoginDTO } from './login.dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isResetPasswordDialogOpen: boolean = false;

  public loginForm = this.formBuilder.group({
    username: "",
    password: ""
  });

  public email: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private router: Router,
    private userInfoService: UserInfoService,
    private readonly resetPasswordService: ResetPasswordService
  ) { }

  
  ngOnInit(): void {
    this.userInfoService.logout();
  }

  public handleSubmitForm(): void {
    const loginDTO: LoginDTO = new LoginDTO(this.loginForm.value.username, this.loginForm.value.password)
    this.loginService.login(loginDTO)
      .subscribe(
        (res: { token: string, role: string }) => {
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("username", this.loginForm.value.username);
          sessionStorage.setItem("role", res.role)
          this.userInfoService.saveInfo(res.token, res.role)
          this.router.navigate(['profile'])
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Wrong credentials'
          })

        }
      )
  }

  public openResetPasswordDialog(): void {
    this.isResetPasswordDialogOpen = true;
  }

  public sendEmailForPasswordReset(): void {
    this.resetPasswordService.sendEmailForPasswordReset(this.email)
    .subscribe(
      (res) => {},
      (err) => {console.log(err);
      }
    )
    this.isResetPasswordDialogOpen = false;
  }

}
