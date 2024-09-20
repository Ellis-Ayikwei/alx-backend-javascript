const assert = require("assert").strict;
const { execPath } = require("process");
const calculateNumber = require("./2-calcul_chai");
const expect = require("chai").expect;
const sinon = require("sinon");

const user = {
	addUseer: (name) => {
		this.name = name;
	},
};

const indexPage = {
	getIndexpage: function (req, res) {
		res.send("Hey");
	},
};

describe("sendPaymentRequestToApi", function () {
	beforeEach(() => {
		sinon.restore();
	});

	let tested = sinon.spy(calculateNumber);

	describe("Utils.calculateNumber('SUM', 100, 20)", function () {
		it("testing the spy", function () {
			console.log(tested("SUM", 5, 8));
			expect(tested.calledOnce).to.be.true;
		});
		it("testing the spy1", function () {
			console.log(tested("SUM", 5, 8));
			expect(tested.calledOnce).to.be.false;
			expect(tested.firstCall.args[0]).to.equal("SUM");
		});

		it("should say hey", function () {
			let user = {
				isLoggedIn: function () {},
			};

			const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

			let req = {
				user: user,
			};
			let res = {
				send: sinon.spy(),
			};

			indexPage.getIndexpage(req, res);
			expect(res.send.calledOnce).to.be.true;
			expect(res.send.firstCall.args[0]).to.equal("Hey");
			expect(isLoggedInStub.returned(true)).to.be.true;
			expect(isLoggedInStub.calledOnce).to.be.false;
		});
	});

	afterEach(() => {
		sinon.restore();
	});
});
