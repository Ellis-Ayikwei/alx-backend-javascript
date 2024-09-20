const assert = require("assert").strict;
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

const expect = require("chai").expect;
const sinon = require("sinon");

describe("sendPaymentRequestToApi", function () {
	beforeEach(() => {
		sinon.restore();
	});

	describe("Using Sinon spy", () => {
		let spyCalc;

		beforeEach(() => {
			spyCalc = sinon.spy(Utils, "calculateNumber");
		});

		it("should call Utils.calculateNumber with 'SUM', 100, 20", () => {
			const result = sendPaymentRequestToApi(100, 20);

			expect(spyCalc.called).to.be.true;
			expect(spyCalc.calledWith("SUM", 100, 20)).to.be.true;
			expect(result).to.equal("The total is: 120");
			expect(spyCalc.returnValues[0]).to.equal(120);
		});
	});

	afterEach(() => {
		sinon.restore();
	});
});
