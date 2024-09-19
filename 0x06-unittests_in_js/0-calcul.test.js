const assert = require("chai").assert;
const describe = require("mocha").describe;
const { addNumbers } = require("./0-calcul");

const calculateNumber = addNumbers;

describe("calculateNumber", () => {
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
	after(() => {
		console.log("...");
	});
});
