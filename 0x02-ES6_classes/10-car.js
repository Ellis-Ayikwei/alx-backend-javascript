export default class Car {
	constructor(brand, model, color) {
		this.brand = brand;
		this.model = model;
		this.color = color;
	}

	get brand() {
		return this._brand;
	}

	set brand(value) {
		this._brand = value;
	}

	get model() {
		return this._model;
	}

	set model(value) {
		this._model = value;
	}

	get color() {
		return this._color;
	}

	set color(value) {
		this._color = value;
	}

	cloneCar() {
		return new this.constructor();
	}
}
