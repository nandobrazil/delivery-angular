import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  rate: number

  constructor() { }

  ngOnInit() {
  }

  rated(event: any){
    this.rate = event
  }
}
