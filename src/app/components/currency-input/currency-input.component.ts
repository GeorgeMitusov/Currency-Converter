import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent implements OnInit {
  
  @Input() title : string = '';
  @Input() rates : any = [];
  @Input() currency : string = '';
  @Input() amount?: number;
  @Input() currencyChange!: (e: string) => void;
  @Input() amountChange!: (e: number) => void;
  @Input() converting!: () => void;

  constructor() { }
  
  ngOnInit(): void {}
}
