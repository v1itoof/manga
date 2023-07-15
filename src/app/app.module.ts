import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NgbDropdownModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
