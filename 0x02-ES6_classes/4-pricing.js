import Currency from "./3-currency.js";

class Pricing {
	/**
	 * Creates an instance of Pricing.
	 * @param {Number} amount
	 * @param {Currency} currency
	 * @memberof Pricing
	 */
	constructor(amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	/**
	 * Gets the amount.
	 * @readonly
	 * @memberof Pricing
	 */
	get amount() {
		return this._amount;
	}

	/**
	 * Sets the amount.
	 * @param {Number} value
	 * @memberof Pricing
	 */
	set amount(value) {
		this._amount = value;
	}

	/**
	 * Gets the currency.
	 * @readonly
	 * @memberof Pricing
	 */
	get currency() {
		return this._currency;
	}

	/**
	 * Sets the currency.
	 * @param {Currency} value
	 * @memberof Pricing
	 */
	set currency(value) {
		this._currency = value;
	}

	/**
	 * Converts a price with a conversion rate.
	 * @static
	 * @param {Number} amount
	 * @param {Number} conversionRate
	 * @returns {Number}
	 * @memberof Pricing
	 */
	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}

	/**
	 * Displays the full price.
	 * @returns {String}
	 * @memberof Pricing
	 */
	displayFullPrice() {
		return `${this._amount} ${this._currency.displayFullCurrency()}`;
	}
}
