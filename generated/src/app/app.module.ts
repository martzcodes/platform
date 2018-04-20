import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddCommasPipe } from './shared/pipes/add-commas.pipe';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddCommasPipe,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
