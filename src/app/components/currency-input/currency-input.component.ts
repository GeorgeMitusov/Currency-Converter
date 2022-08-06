import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent implements OnInit {
  
  currencies = ["USD", "EUR", "UAH"];
  
  @Input() title:string = '';
  @Input() currency:string = '';
  @Input() amount:number = 0;
  @Input() currencyChange!: (e: string) => void;
  @Input() amountChange!: (e: number) => void;
  @Input() converting!: () => void;

  constructor() { }
  
  ngOnInit(): void {}
}
