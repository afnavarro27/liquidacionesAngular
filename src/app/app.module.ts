import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TrabajadorService } from './services/trabajador/trabajador.service';

@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
