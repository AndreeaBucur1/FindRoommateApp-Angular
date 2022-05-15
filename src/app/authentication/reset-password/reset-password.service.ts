import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {


  constructor(
    private httpClient: HttpClient
  ) { }

  public sendEmailForPasswordReset(email: string): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/users/generate-reset-token', {email})
  } 

  public resetPassword(token: string, password: string): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/users/reset-password/' + token, {password});
  }
}
