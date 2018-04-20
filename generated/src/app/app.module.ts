import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { AddCommasPipe } from './shared/pipes/add-commas.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EllipsisPipe,
    AddCommasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
