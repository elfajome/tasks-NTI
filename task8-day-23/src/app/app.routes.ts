import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactusComponent} from "./contactus/contactus.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '**', component: HomeComponent } // redirect to home
];
