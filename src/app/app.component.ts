import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  constructor() { }
  monthlyIncome: any = 150000;
  monthlyExpense: any = 50000;
  emi: any = 15000
  monthlyExp(value: any) {
    this.monthlyExpense = value;
    // console.log(value);
  }
  monthlyInc(value) {
    this.monthlyIncome = value;
    // console.log(value);
  }
}
