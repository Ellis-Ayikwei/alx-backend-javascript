export default class Car {
	constructor(brand, model, color) {
		this._brand = brand;
		this._model = model;
		this._color = color;
	}

	get brand() {
		return this._brand;
	}

	get model() {
		return this._model;
	}

	get color() {
		return this._color;
	}

	cloneCar() {
		const Species = super.constructor[Symbol.species];

		return new Species();
	}
}
