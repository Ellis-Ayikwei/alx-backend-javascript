const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
	describe("if the Type is Sum", () => {
		it("should return the 8 if a is 5 b is 3", () => {
			assert.strictEqual(calculateNumber("SUM", 5, 3), 8);
		});

		it("should return 3, a = 1.6, b = 2.3", () => {
			assert.strictEqual(calculateNumber("SUM", 1.6, 2.3), 4);
		});
	});

	describe("if the Type is MULTIPLY", () => {
		it("should return the 15 if a is 5 b is 3", () => {
			assert.strictEqual(calculateNumber("MULTIPLY", 5, 3), 15);
		});

		it("should return 3, a = 1.6, b = 2.3", () => {
			assert.strictEqual(calculateNumber("MULTIPLY", 1.6, 2.3), 4);
		});
	});

	describe("if the Type is DIVIDE", () => {
		it("should return the 5 if a is 15 b is 3", () => {
			assert.strictEqual(calculateNumber("DIVIDE", 15, 3), 5);
		});

		it('should return the string "Error" a is 10, b is 0', () => {
			assert.strictEqual(calculateNumber("DIVIDE", 0, 0), "Error");
		});
	});

	describe("if the Type is SUBTRACT", () => {
		it("should return the 2 if a is 5 b is 3", () => {
			assert.strictEqual(calculateNumber("SUBTRACT", 5, 3), 2);
		});

		it("should return 3, a = 5.6, b = 2.3", () => {
			assert.strictEqual(calculateNumber("SUBTRACT", 5.6, 2.3), 4);
		});
	});
});
