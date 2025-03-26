import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfiledetailsService {

  //api call
  // Read from file
  // Get if from some other server
  profileDetails : Profile[];
  constructor() {
    this.profileDetails = [{id: 1,address: "Kri", email: "Pra@gmail.com", name: "Gna", phone: 123},
      {id:2,address:"Ylg",email:"Mos@gmail.com",name:"Moses",phone:123}
    ];
   }

   public getProfileDetails(): Profile[] {
    return this.profileDetails;// api call
  }
}
