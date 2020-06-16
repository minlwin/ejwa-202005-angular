import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiClientModule } from 'projects/api-client/src/public-api';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
