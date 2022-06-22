import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrofeosComponent } from './components/trofeos/trofeos.component';
import { Trofeo2Component } from './trofeo2/trofeo2.component';

@NgModule({
  declarations: [
    AppComponent,
    TrofeosComponent,
    Trofeo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
