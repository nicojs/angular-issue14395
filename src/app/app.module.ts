import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, ConnectionBackend, XHRBackend, Http } from '@angular/http';

import { AppComponent } from './app.component';

@Injectable()
export class HttpService extends Http {
  blaat() {
    alert('Injected backend:' + this._backend);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: Http, useClass: HttpService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
