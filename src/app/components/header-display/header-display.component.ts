import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header-display',
  templateUrl: './header-display.component.html',
  styleUrls: ['./header-display.component.css']
})
export class HeaderDisplayComponent implements OnInit {

  usd:any = { base: 'USD', rates: { UAH: " 36.597611" }}
  eur:any = { base: 'EUR', rates: { UAH: " 37.421251" }}

  constructor(private service:CurrencyService) { }

  ngOnInit(): void {
    this.service.getUsdRate()
    .subscribe((res : any) => {
      this.usd = res;
    })

    this.service.getEurRate()
    .subscribe((res : any) => {
      this.eur = res;
    })
  }

}
