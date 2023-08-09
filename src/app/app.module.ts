import { AgGridModule } from 'ag-grid-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ComponentArryy } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './service/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ComponentArryy,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,FormsModule, CommonModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,


  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
