import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, ConnectionBackend, XHRBackend, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

@Injectable()
export class HttpService extends Http {
  // un-comment these lines and it works
  // constructor(b: ConnectionBackend, r: RequestOptions) {
  //   super(b, r);
  // }

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
    { provide: ConnectionBackend, useClass: XHRBackend },
    { provide: Http, useClass: HttpService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
