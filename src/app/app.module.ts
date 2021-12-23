import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompoentsNewComponent } from './compoents-new/compoents-new.component';
import { ComponenntsSecondComponent } from './componennts-second/componennts-second.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { ValidarComponent } from './validar/validar.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompoentsNewComponent,
    ComponenntsSecondComponent,
    ValidarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
