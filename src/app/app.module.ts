import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from "@angular/common/http";
import { FaqService } from './faq.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
