const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
	describe(" the rounded parts", () => {
		it("...", () => {
			const result = calculateNumber(1, 3);
			assert.strictEqual(result, 4);
		});

		it("...", () => {
			const result = calculateNumber(1, 3.7);
			assert.strictEqual(result, 5);
		});

		it("...", () => {
			const result = calculateNumber(1.2, 3.7);
			assert.strictEqual(result, 5);
		});

		it("...", () => {
			const result = calculateNumber(1.5, 3.7);
			assert.strictEqual(result, 6);
		});

		it("...", () => {
			const result = calculateNumber(1.5, 3.7);
			assert.strictEqual(result, 6);
		});

		after(() => {
			console.log("...");
		});
	});
});
