import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReversestringPipe } from './reversestring.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyaddPipe } from './myadd.pipe';
import { MymulPipe } from './mymul.pipe';
import { ParamcheckPipe } from './paramcheck.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReversestringPipe,
    MyaddPipe,
    MymulPipe,
    ParamcheckPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
