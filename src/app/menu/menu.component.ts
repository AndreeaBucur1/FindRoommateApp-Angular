import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api'
import { UserInfoService } from '../shared/services/user-info.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  public isUserConnected: boolean = false;

  constructor(
    private userInfoService: UserInfoService,
    private router: Router
  ) {

    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {

        this.items = [
          { label: "Home", routerLink: "/login" },
          { label: "Profile", routerLink: "/profile" },
        ]
        if (sessionStorage.getItem('role') === 'ADMIN') {
          this.prepareMenuForAdminRole();
        }
      }
    });

    this.isUserConnected = userInfoService.isUserConnected;

  }

  ngOnInit(): void {
  }

  public logout() {
    this.userInfoService.logout();
    sessionStorage.clear();
  }

  public prepareMenuForAdminRole() {
    this.items.push({ label: "Users", routerLink: "/users" })
  }

}
