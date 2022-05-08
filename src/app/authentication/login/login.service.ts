import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from './login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(loginDTO: LoginDTO) {
    return this.httpClient.post<any>('http://localhost:8080/login', loginDTO);
  }

}
