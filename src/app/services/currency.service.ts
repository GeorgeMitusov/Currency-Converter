import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  
  private usdUrl = 'https://api.exchangerate.host/latest?base=USD'
  private eurUrl = 'https://api.exchangerate.host/latest?base=EUR'
  private convertUrl = 'https://api.exchangerate.host/convert?'
  
  constructor( private httpClient: HttpClient) { }

  getUsdRate() {
    return this.httpClient.get(this.usdUrl);
  }

  getEurRate() {
    return this.httpClient.get(this.eurUrl);
  }

  getConvertedValue(from: string, to: string, ) {
    return this.httpClient.get(this.convertUrl + `from=${from}&to=${to}`)
  }

}