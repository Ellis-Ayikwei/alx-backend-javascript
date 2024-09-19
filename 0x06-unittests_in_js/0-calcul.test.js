const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
	it("should return 4 when passed 1 and 3", () => {
		const result = calculateNumber(1, 3);
		assert.strictEqual(result, 4);
	});

	it("should return 5 when passed 1 and 3.7", () => {
		const result = calculateNumber(1, 3.7);
		assert.strictEqual(result, 5);
	});

	it("should return 5 when passed 1.2 and 3.7", () => {
		const result = calculateNumber(1.2, 3.7);
		assert.strictEqual(result, 5);
	});

	it("should return 6 when passed 1.5 and 3.7", () => {
		const result = calculateNumber(1.5, 3.7);
		assert.strictEqual(result, 6);
	});

	it("should return 6 when passed 1.5 and 3.7", () => {
		const result = calculateNumber(1.5, 3.7);
		assert.strictEqual(result, 6);
	});

	after(() => {
		console.log("tests done");
	});
});
