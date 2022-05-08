import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginDTO } from './login.dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: "",
    password: ""
  });


  constructor(
    private formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public handleSubmitForm(): void {
    const loginDTO: LoginDTO = new LoginDTO(this.loginForm.value.username, this.loginForm.value.password)
    this.loginService.login(loginDTO)
      .subscribe(
        (res: { token: string }) => {
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("username", this.loginForm.value.username)
          this.router.navigate(['profile']);
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

}
