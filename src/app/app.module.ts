import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './components/offer/offer.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { PricesComponent } from './components/prices/prices.component';
import { EventProxyService } from './event-proxy.service'

//MDB
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    IconsModule
  ],
  providers: [EventProxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
