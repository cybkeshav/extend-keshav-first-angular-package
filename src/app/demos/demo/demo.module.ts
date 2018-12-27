import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { DemoComponent } from './demo.component';

import { DemoService } from '../demo.service';
import { MyHttpService } from '../myhttpservice.service';

@NgModule({
  declarations: [DemoComponent, HeaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DemoComponent, HeaderComponent],
  providers: [
    // no need to place providers if `providedIn` flag is added in service.
    DemoService,
    MyHttpService
  ]
})
export class DemoModule {}
