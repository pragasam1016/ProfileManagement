import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserdetailsComponent } from "../userdetails/userdetails.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, UserdetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
public show = true;

public loggedInUserName = "Moses";

constructor() {
    // this.show = false;
    // this.loggedInUserName="";
  }
  ngOnInit(): void {
    
  }


}
