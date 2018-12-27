import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import {MyHttpService} from '../myhttpservice.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public Profit = 0;
  constructor(private _demoService: DemoService, private _myHttpService: MyHttpService) {}

  ngOnInit() {
    // this._demoService.PurchagePrice = 120;
    // this._demoService.SellingPrice = 200;
    // this.Profit = this._demoService.CalculateProfit();
    // this._myHttpService.cfBaseUrl = 'http://dummy.restapiexample.com/api/v1';
    // this._myHttpService.httpGet('employees').then((response) => {
    //   console.log(response);
    //   this._myHttpService.httpGet('employee', response[10].id).then((res) => {
    //     console.log(res);
    //   });
    // },
    // (error) => {
    //   console.log(error);
    // });
  }
}
