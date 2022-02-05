import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {
  public plans = [
    {
      name: 'Plano básico',
      monthlyPayment: '14.90',
      advantages: ['more pizza', 'whatever',]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
