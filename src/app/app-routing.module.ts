import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './models/components/navbar/navbar.component';
import { AboutComponent } from './models/components/pages/about/about.component';

const routes: Routes = [
  { path: '', 
  component: NavbarComponent 
}, 
  {
    path: 'home',
    component: NavbarComponent ,
  },
  {
    path: 'about',
    component: AboutComponent,
  },// Exemplu pentru ruta principala
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
