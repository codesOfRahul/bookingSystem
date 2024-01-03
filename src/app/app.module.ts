import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FbookingComponent } from './fbooking/fbooking.component';
import { CbookingComponent } from './cbooking/cbooking.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { HbookingComponent } from './hbooking/hbooking.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { CustomeDirectiveComponent } from './custome-directive/custome-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FbookingComponent,
    CbookingComponent,
    BusbookingComponent,
    HbookingComponent,
    DisplayDetailsComponent,
    CustomeDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
