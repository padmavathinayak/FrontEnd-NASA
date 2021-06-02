import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumeComponent } from './consume/consume.component';
import { ConsumedetailsComponent } from './consumedetails/consumedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumeComponent,
    ConsumedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
