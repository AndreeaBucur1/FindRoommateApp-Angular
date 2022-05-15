import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private resetToken: string = '';

  public resetPasswordForm = this.formBuilder.group({
    password: "",
    confirmPassword: ""
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private resetPasswordService: ResetPasswordService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.resetToken = params['token'];
      }
    )
  }

  public handleSubmitForm(): void {
    if (this.resetPasswordForm.value.password === this.resetPasswordForm.value.confirmPassword) {
      this.resetPasswordService.resetPassword(this.resetToken, this.resetPasswordForm.value.password)
      .subscribe(
        (res) => {
          this.router.navigate(["login"]);
        },
        (err) => {
          console.log(err);  
        }
      )
    }
    else {
      console.log("Passwords do not match");
    }
  }

}
