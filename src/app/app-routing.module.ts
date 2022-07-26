import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Screen2Component } from './screen2/screen2.component';
import {Screen1Component} from './screen1/screen1.component'
const routes: Routes = [
  {path:"",component: Screen1Component},
  {path:"header",component:HeaderComponent},
  {path:"footer",component: FooterComponent},
  {path:"screen2",component: Screen2Component },
  {path:"screen1",component: Screen1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
