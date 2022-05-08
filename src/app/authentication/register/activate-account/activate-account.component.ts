import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService,
    private router: Router
  ) { 
    const token = this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.registerService.activateAccount(params['token'])
        .subscribe(
          (res) => {
            this.router.navigate(["login"]);      
          },
          (err) => {
            console.log(err);
            
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
