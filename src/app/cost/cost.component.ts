import { Component, Input } from '@angular/core';
import { ECurrency, ICostItem } from '../interfaces';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss', '../costs/costs.component.scss']
})
export class CostComponent {
  @Input() public costItem: ICostItem | undefined;
  @Input() public baseRate: number = 1;
  @Input() public exchangeRate: number = 1;
  @Input() public currency: ECurrency = ECurrency.SGD;
  public isShown: boolean = false;

  public toggleShow(): void {
    this.isShown = ! this.isShown;
  }

  public convert(amount: number, toUSD: boolean = false): string {
    if (toUSD) {
      return (amount * this.baseRate).toFixed(2);
    } else {
      return (amount * this.exchangeRate).toFixed(2);
    }
  }
}
