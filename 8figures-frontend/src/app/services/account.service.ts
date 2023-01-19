import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  base!: string;
  constructor(private httpClient: HttpClient) {
  }

  login(model: LoginModel): Observable<any> {
    const url = `${environment.baseUrl}api/Account/login`;
    console.log(url);
    return this.httpClient.post<any>(url, model);
  }

  register() {

  }
}
