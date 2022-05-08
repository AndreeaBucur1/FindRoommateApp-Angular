import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/user.entity';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public register(user: User): Observable<any> {
    return this.httpClient.post<User>('http://localhost:8080/users/register', user);
  }

public activateAccount(token: string): Observable<any> {
  return this.httpClient.post<string>('http://localhost:8080/users/activate-account', [token])
}

}
