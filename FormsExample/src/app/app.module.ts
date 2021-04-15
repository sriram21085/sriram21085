import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducteditComponent } from './product/productedit/productedit.component';
import { ProductlistComponent } from './product/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducteditComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
