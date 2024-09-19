const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
	describe("if the Type is Sum", () => {
		it("should return the 8 if a is 5 b is 3", () => {
			assert.strictEqual(calculateNumber("SUM", 5, 3), 8);
		});
	});

	describe("if the Type is MULTIPLY", () => {
		it("should return the 15 if a is 5 b is 3", () => {
			assert.strictEqual(calculateNumber("MULTIPLY", 5, 3), 15);
		});
	});

	describe("if the Type is DIVIDE", () => {
		it("should return the 5 if a is 15 b is 3", () => {
			assert.strictEqual(calculateNumber("DIVIDE", 15, 3), 5);
		});
	});

	describe("if the Type is SUBTRACT", () => {
		it("should return the 2 if a is 5 b is 3", () => {
			assert.strictEqual(calculateNumber("SUBTRACT", 5, 3), 2);
		});
	});
});
