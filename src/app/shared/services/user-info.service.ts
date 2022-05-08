import { Injectable } from '@angular/core';
import { User } from '../user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public isUserConnected: boolean = false;

  public token: string = '';

  public user?: User;


  constructor() {}

  public saveInfo(token: string, user: User) {
    this.isUserConnected = true;
    this.token = token;
    this.user = user;
    
  }

  public logout(): void {
    this.isUserConnected = false;
    this.token = '';
    this.user = undefined;
  }
}
