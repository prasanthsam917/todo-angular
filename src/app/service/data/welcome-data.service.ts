import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message : string){
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient : HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return (this.httpClient.get<HelloWorldBean>('${API_URL}/hello-world-bean'));
    //console.log("executeHelloWorldBeanService");
  }

  executeHelloWorldBeanServiceWithParam(username){
    // let basicAuthHeader = this.createBasicAuthHttp();

    // let headers = new HttpHeaders({Authorization : basicAuthHeader});
    return this.httpClient.get<HelloWorldBean>(
      `${API_URL}/hello-world/path-variable/${username}`,
    // {headers}
    );
    //console.log("executeHelloWorldBeanService");
  }

  // createBasicAuthHttp(){
  //   let username = 'm_sampras'
  //   let password = 'Jesusno@1'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username +':'+ password);
  //   return basicAuthHeaderString;
  // }
}
