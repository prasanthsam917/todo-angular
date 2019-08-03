import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardCodedAuthService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  constructor(
    private hardCodedAuthService : HardcodedAuthenticationService,
    private router : Router
  ) { 
    
  }
}
