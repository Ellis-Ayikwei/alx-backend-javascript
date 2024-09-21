import Currency from './3-currency';

export default class Pricing {
  constructor(amount) {
    this._amount = amount;
    this._currency = Currency;
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

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}
