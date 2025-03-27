import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfiledetailsService } from './profileService/profiledetails.service';
import { Profile } from './profileService/profile';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'profilemanagement';
  public backColor = 'red';
  public users : any;// [{name: 'John', age: 25}, {name: 'Jane', age: 24}, {name: 'Jack', age: 26}];
  public  profileDetails : Profile[];


  constructor(private profiledetailsService:ProfiledetailsService) {
    this.backColor = 'green';
    debugger;
    // impo/ ini - Other serveris - api,data services from same app 
    }  

  ngOnInit(): void {
    this.users = [{name: 'John', age: 25}, {name: 'Jane', age: 24}, {name: 'Jack', age: 26}];
    this.showDetails();
  }

  public showDetails(){
    this.profileDetails = this.profiledetailsService.getProfileDetails();
    console.log(this.profileDetails);
  }

}
