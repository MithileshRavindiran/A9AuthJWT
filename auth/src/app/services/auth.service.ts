import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(credentials) { 
   return this.httpClient.post('/api/authenticate', 
      JSON.stringify(credentials))
      .pipe(
       map(response => {
         let result = response;
         if (result && result['token']) {
          localStorage.setItem('token', result['token']);
          return true;
         }
         return  false;
       })
      );
  }

  logout() { 
    console.log('logout');
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    let tokenHelper  =  new JwtHelperService();
    return !tokenHelper.isTokenExpired(localStorage.getItem('token'));
  }

  get currentUser() {
    let  token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return new JwtHelperService().decodeToken(token);
  }
}
