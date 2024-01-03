import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { HbookingComponent } from './hbooking/hbooking.component';
import { CbookingComponent } from './cbooking/cbooking.component';
import { FbookingComponent } from './fbooking/fbooking.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { CustomeDirectiveComponent } from './custome-directive/custome-directive.component';

const routes: Routes = [
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "bbook",
    component:BusbookingComponent
  },
  {
    path: "cbook",
    component: CbookingComponent
  },
  {
    path: "hotel",
    component:HbookingComponent
  },
  {
    path: "flight",
    component:FbookingComponent
  },
  {
    path: "display",
    component:DisplayDetailsComponent
  },
  {
    path: "customdisplay",
    component: CustomeDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
