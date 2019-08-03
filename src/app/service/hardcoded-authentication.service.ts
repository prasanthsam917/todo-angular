import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user,password){
    //console.log('authenticatedUser Before :' + this.isUserLoggedIn());
    if(user === 'm_sampras' && password === 'test'){
      sessionStorage.setItem('authenticatedUser',user);
      //console.log('authenticatedUser After :' + this.isUserLoggedIn());
      return true;      
    }
      return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
