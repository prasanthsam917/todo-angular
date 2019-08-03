import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : 'Prasanth Welcome'
  customizedWelcomeMessage : string
  userName : ''
  constructor(
    private route:ActivatedRoute,
    private helloWorldService : WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message);
    this.userName = this.route.snapshot.params['userName']
  }

  getWelcomeMessage(){
    console.log(this.helloWorldService.executeHelloWorldBeanService());
    this.helloWorldService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    )
  }
  
  getWelcomeMessageWithParam(){    
    this.helloWorldService.executeHelloWorldBeanServiceWithParam(this.userName).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    )
  }

  handleSuccessfulResponse(response){
    this.customizedWelcomeMessage = response.message
    //console.log(response.message)
  }


  handleErrorMessage(error){
    this.customizedWelcomeMessage = error.error.message
  }

}
