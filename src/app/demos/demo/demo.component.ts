import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public Profit = 0;
  constructor(private _demoService: DemoService) {}

  ngOnInit() {
    this._demoService.PurchagePrice = 120;
    this._demoService.SellingPrice = 200;
    this.Profit = this._demoService.CalculateProfit();
  }
}
