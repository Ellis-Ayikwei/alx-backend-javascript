import Currency from './3-currency.js';

export class Pricing {
  constructor(amount, currency) {  // Changed 'new Currency' to 'currency'
    this._amount = amount;
    this._currency = currency instanceof Currency ? currency : new Currency(); // Ensure currency is a Currency instance
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
