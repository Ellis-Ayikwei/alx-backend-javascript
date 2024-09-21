import Currency from "./3-currency";

export default class Pricing {
	constructor(price, currency) {  // Changed Currency to currency for consistency
		this._price = price;
		this._currency = currency;
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
