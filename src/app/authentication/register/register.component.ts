import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
	public registerForm = this.formBuilder.group({
		firstName: ["", [Validators.required, Validators.minLength(3)]],
		lastName: ["", [Validators.required, Validators.minLength(3)]],
		email: ["", [
			Validators.required,
			Validators.email
		]],
    username: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", [Validators.required, Validators.minLength(10)]]
	});

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public handleSubmitForm(): void {
    this.registerService.register(this.registerForm.value)
      .subscribe(
        (res) => {
          this.router.navigate(["successfully-registered"]);
        }
      )
  }

}
