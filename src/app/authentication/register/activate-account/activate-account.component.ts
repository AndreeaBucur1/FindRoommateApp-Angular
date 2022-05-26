import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  private token: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService,
    private router: Router
  ) { 
    const token = this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.token = params['token'];
      }
    )
  }

  ngOnInit(): void {
    this.activateAccount();
  }

  public activateAccount(): void {
    this.registerService.activateAccount(this.token)
      .subscribe(
        (response) => {
        },
        (error) => {
          console.log(error);
          
        }
      )
  }

}
