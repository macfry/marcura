import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { ECurrency, IExchangeRatesResponse, IPaymentCurrencie } from '../interfaces';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent implements OnInit {
  @Output() selectCurrency = new EventEmitter();
  @Input()  public selected: ECurrency = ECurrency.USD;

  public options: IPaymentCurrencie[] = [];
  private dataUrl = 'assets/exchange-rates.json';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData<IExchangeRatesResponse>(this.dataUrl).subscribe(
      data => {
        this.options = data.paymentCurrencies;
      }
    );
    this.onOptionsSelected(this.selected);
  }

  onOptionsSelected(value: string): void {
    const selectedPayment = this.options.find(item => item.toCurrency === value);
    this.selectCurrency.emit(selectedPayment);
  }
}
