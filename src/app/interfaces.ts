// cost
interface IModel {
  id: number;
  name: string;
}

export interface ICostItemAlias {
  accountingCode: string;
}

export interface ICostItemCost {
  daStage: string;
  persona: string;
  type: string;
  amount: number;
}

export interface IComment {
  id: 503,
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: string;
  date: string;
}

export interface ICostItem extends IModel {
  costItemAlias: ICostItemAlias;
  annotation: IModel;
  costs: ICostItemCost[];
  comments: IComment[];
}

export interface ICost extends IModel {
  displayOrder: number;
  costItems: ICostItem[]
}

export enum ECurrency {
  AED = 'AED',
  AUD = 'AUD',
  CAD = 'CAD',
  CHF = 'CHF',
  DKK = 'DKK',
  EUR = 'EUR',
  GBP = 'GBP',
  INR = 'INR',
  JPY = 'JPY',
  MAD = 'MAD',
  NOK = 'NOK',
  NZD = 'NZD',
  SAR = 'SAR',
  SEK = 'SEK',
  SGD = 'SGD',
  THB = 'THB',
  TRY = 'TRY',
  USD = 'USD',
  ZAR = 'ZAR',
}

export interface ICurrency {
  currency: ECurrency;
}

export interface IBaseCurrency extends ICurrency {
  exchangeRate: number;
}

export interface ICostResponse {
  daCurrency: ICurrency;
  baseCurrency: IBaseCurrency;
  costs: ICost[]
}

export interface ITotal {
  type: "Quoted" | "Screened";
  amount: number;
}

// exchange rates
export interface IPaymentCurrencie {
  fromCurrency: ECurrency;
  toCurrency: ECurrency;
  exchangeRate: number;
}

export interface IExchangeRatesResponse {
  sourceCurrency: ECurrency;
  paymentCurrencies: IPaymentCurrencie[];
}
