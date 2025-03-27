import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NoutfoundComponent } from './noutfound/noutfound.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'moses', component: UserprofileComponent },
    {path: '**', component:NoutfoundComponent}
];
// expect const routes: Routes = [
//     {path: 'userprofilelink', component: UserprofileComponent},
// ];