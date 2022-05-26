import { Injectable } from '@angular/core';
import { UserDTO } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public isUserConnected: boolean = false;

  public token: string = '';

  public user?: UserDTO;

  public role: string = '';


  constructor() {}

  public saveInfo(token: string, role: string, user?: UserDTO) {
    this.isUserConnected = true;
    this.token = token;
    this.user = user;
    this.role = role;
  }

  public logout(): void {
    this.isUserConnected = false;
    this.token = '';
    this.user = undefined;
    this.role = '';
  }
}
