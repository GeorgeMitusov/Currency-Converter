import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = "Currency Swap"

  fromCur:string = "USD";
  toCur:string = "EUR";
  fromAmount:number = 0;
  toAmount:number = 0;

  rate:any = {}  

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
        this.toAmount = this.format(this.fromAmount * this.rate);
      })
  }
  
  ngOnInit() {}
}