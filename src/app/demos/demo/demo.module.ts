import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { DemoService } from '../demo.service';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule
  ],
  exports: [DemoComponent],
  providers: [
    // no need to place providers if `providedIn` flag is added in service.
    DemoService,
  ],
})
export class DemoModule { }
