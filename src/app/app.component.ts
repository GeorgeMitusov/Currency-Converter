import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { fadeInUpOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 150, translate: '50px' }),
  ]
})

export class AppComponent implements OnInit {
  
  title = "Currency Swap"

  fromCur : string = "USD";
  toCur : string = "USD";
  fromAmount: number = 0;
  toAmount : number = 0;

  rates : any = []

  rate : any = {}  

  format = (number:any) =>  {
    return number.toFixed(2)
  }

  public changeAmountFrom = (e:number) => {
    this.fromAmount = e;
  }
  
  public changeCurFrom = (e:string) => {
    this.fromCur = e;
  }

  public changeAmountTo = (e:number) => {
    this.toAmount = e;
  }

  public changeCurTo = (e:string) => {
    this.toCur = e;
  }

  constructor(private service:CurrencyService) { }

  public convertValue = () => {
    this.service.getConvertedValue(this.fromCur, this.toCur)
      .subscribe((res : any) => {
        this.rate = res.info.rate;
        this.toAmount = this.format(Number(this.fromAmount) * Number(this.rate));
      })
  }

  public convertSecondValue = () => {
    this.service.getConvertedValue(this.fromCur, this.toCur)
      .subscribe((res : any) => {
        this.rate = res.info.rate;
        this.fromAmount = this.format(Number(this.toAmount) / Number(this.rate));
      })
  }
  
  ngOnInit() {
    this.service.getUsdRate()
      .subscribe( (res:any) => {
        this.rates = res.rates;
      })
  }
}