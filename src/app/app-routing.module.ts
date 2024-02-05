import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './models/components/navbar/navbar.component';
import { AboutComponent } from './models/components/pages/about/about.component';
import { ContactComponent } from './models/components/pages/contact/contact.component';
import { HomeComponent } from './models/components/pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent ,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
