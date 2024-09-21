import Currency from "./3-currency";
export default class Pricing {
	constructor(price, currency) {
		this._price = price;
		this._currency = Currency;
	}

	get price() {
		return this._price;
	}

	set price(value) {
		this._price = value;
	}

	get currency() {
		return this._currency;
	}

	set currency(value) {
		this._currency = value;
	}

	displayFullPrice() {
		return `${this._price} ${this._currency.displayFullCurrency()}`;
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}
