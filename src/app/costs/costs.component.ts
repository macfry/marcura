import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ECurrency, ICostItem, ICostResponse, IPaymentCurrencie } from '../interfaces';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {
  public response: ICostResponse | undefined;
  public baseExchangeRate: number = 1;
  public currency: ECurrency = ECurrency.USD;
  public currencyExchangeRate: number = 1;
  private dataUrl = 'assets/costs.json';

  constructor(private apiService: ApiService) { }

  public total(costItems: ICostItem[], type: string, exchangeRate: number): string {
    const data = costItems.flatMap(item => item.costs);
    const sum = data.reduce((sum, item) => (item.type === type) ? sum + item.amount : sum, 0);
    return (sum * exchangeRate).toFixed(2);
  }

  public changeCurrencyExchangeRate(value: IPaymentCurrencie): void {
    if (!value) return;
    this.currency = value.toCurrency;
    this.currencyExchangeRate = value.exchangeRate;
  }

  public ngOnInit(): void {
    this.apiService.getData<ICostResponse>(this.dataUrl).subscribe(
      data => {
        this.response = data;
        this.baseExchangeRate = data?.baseCurrency?.exchangeRate || 1;
        this.currency = data.daCurrency.currency;
      }
    )
  }
}
