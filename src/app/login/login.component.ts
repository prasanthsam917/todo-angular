import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'm_sampras'
  password = ''
  errorMesage = 'Invalid Credentials'
  isValidAuth = false

  constructor(private router : Router,
              private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.isValidAuth = !true
    }else{
      this.isValidAuth = !false
    }
  }


  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.isValidAuth = !true  
      },
      error => {
        console.log(error)
        this.isValidAuth = !false  
      }
    )    
  }

  handleJwtAuthLogin(){
    this.basicAuthenticationService.executeJwtAuthenticationService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.isValidAuth = !true  
      },
      error => {
        console.log(error)
        this.isValidAuth = !false  
      }
    )    
  }
}
