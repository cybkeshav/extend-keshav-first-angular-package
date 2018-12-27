import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';

import { DemoService } from '../demo.service';
import { MyHttpService } from '../myhttpservice.service';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DemoComponent],
  providers: [
    // no need to place providers if `providedIn` flag is added in service.
    DemoService,
    MyHttpService
  ]
})
export class DemoModule {}
