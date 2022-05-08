import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
import { UserInfoService } from '../shared/services/user-info.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[];

  constructor(private userInfoService: UserInfoService) { 
    this.items = [
      {label: "Home", routerLink: "/login"},
      {label: "Profile", routerLink: "/profile"},
    ]
    if(sessionStorage.getItem('role') === 'ADMIN') {
      this.prepareMenuForAdminRole();
    }
  }

  ngOnInit(): void {
  }

  public logout() {
    this.userInfoService.logout();
  }

  public isUserConnected(): boolean {
    return this.userInfoService.isUserConnected;
  }

  public prepareMenuForAdminRole() {
    this.items.push({ label: "Users", routerLink: "/users"})
  }

}
