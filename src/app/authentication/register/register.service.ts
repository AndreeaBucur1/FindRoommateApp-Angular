import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from 'src/app/shared/user.dto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public register(user: UserDTO): Observable<any> {
    return this.httpClient.post<UserDTO>('http://localhost:8080/users/register', user);
  }

public activateAccount(token: string): Observable<any> {
  return this.httpClient.post<string>('http://localhost:8080/users/activate-account', [token])
}

}
