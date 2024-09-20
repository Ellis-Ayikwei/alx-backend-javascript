const assert = require("assert").strict;
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");

const expect = require("chai").expect;
const sinon = require("sinon");

describe("sendPaymentRequestToApi", function () {
	let stubCalc, consoleSpy;

	beforeEach(() => {
		// Restore Sinon to a clean state
		sinon.restore();
		// Stub Utils.calculateNumber and force it to return a specific value
		stubCalc = sinon.spy(Utils, "calculateNumber");
		// Spy on the console.log to capture the output
		consoleSpy = sinon.spy(console, "log");
	});

	it("should call Utils.calculateNumber with 'SUM', 100, 20 and log the correct output", () => {
		// Call the function
		sendPaymentRequestToApi(100, 20);

		// Ensure Utils.calculateNumber was called
		expect(stubCalc.called).to.be.true;
		expect(stubCalc.calledWith("SUM", 100, 20)).to.be.true;

		// Ensure console.log was called with the correct output
		expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
	});

	it("should call sendPaymentRequestToAPI with 10, and 10", () => {
		sendPaymentRequestToApi(10, 10);
		// Ensure Utils.calculateNumber was called
		expect(stubCalc.called).to.be.true;
		expect(stubCalc.calledWith("SUM", 10, 10)).to.be.true;

		// Ensure console.log was called with the correct output
		expect(consoleSpy.calledWith("The total is: 20")).to.be.true;
		expect(consoleSpy.calledOnce).to.be.true;
	});

	afterEach(() => {
		// Restore stubs and spies after each test
		sinon.restore();
	});
});
