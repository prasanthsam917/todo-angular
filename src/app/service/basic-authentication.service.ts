import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient : HttpClient) { }

  executeJwtAuthenticationService(username,password){    
    return this.httpClient.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem('token',`Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  executeAuthenticationService(user,password){    
    let basicAuthHeaderString = 'Basic ' + window.btoa(user +':'+ password);    
    let headers = new HttpHeaders({Authorization : basicAuthHeaderString});
    return this.httpClient.get<BasicAuthenticationBean>(
      `${API_URL}/basicauth`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser',user);
          sessionStorage.setItem('token',basicAuthHeaderString);
          return data;
        }
      )
    );
  }


  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem('token');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }

}

export class BasicAuthenticationBean{
  constructor(private message : string){

  }
}
