import { assert } from "chai";
import { describe } from "mocha";
import { addNumbers } from "./0-calcul.js";

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
