import { AppComponent } from './app.component';
import { DemoModule } from './demos/demo/demo.module';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DemoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
