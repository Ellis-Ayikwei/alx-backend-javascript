const request = require("request");

const expect = require("chai").expect;

describe("Index Page", () => {
	it("should return the correct message", (done) => {
		request.get("http://localhost:7865/", (error, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(res.headers["content-type"]).to.be.equal(
				"text/plain; charset=utf-8"
			);
			expect(body).to.be.equal("Welcome to the payment system");
			done();
		});
	});

	it("should return Payment methods for cart :id", (done) => {
		request.get("http://localhost:7865/cart/5", (error, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(res.headers["content-type"]).to.be.equal(
				"text/plain; charset=utf-8"
			);
			expect(body).to.be.equal("Payment methods for cart 5");
			done();
		});
	});
	it("should return Not found", (done) => {
		request.get("http://localhost:7865/cart/a", (error, res, body) => {
			expect(res.statusCode).to.be.equal(404);
			expect(res.headers["content-type"]).to.be.equal(
				"text/html; charset=utf-8"
			);
			done();
		});
	});
});

describe("testing the Login endpoint", () => {
	it("should return a welcome message for the user", (done) => {
		const requestBody = {
			userName: "Ellis",
		};

		request.post(
			{
				url: "http://localhost:7865/login",
				json: requestBody,
				ContentType: "application / json",
			},
			(error, res, body) => {
				expect(res.statusCode).to.be.equal(200);
				expect(res.headers["content-type"]).to.include(
					"text/plain; charset=utf-8"
				);
				expect(body).to.equal(`Welcome ${requestBody.userName}`);
				done();
			}
		);
	});
});
describe("testing the available_payments", () => {
	it("should return the payment methods", (done) => {
		request.get(
			{
				url: "http://localhost:7865/available_payments",
			},
			(error, res, body) => {
				expect(res.statusCode).to.be.equal(200);
				expect(res.headers["content-type"]).to.include("application/json");

				// Parse the body to JSON for deep equality comparison
				const expectedResponse = {
					payment_methods: {
						credit_cards: true,
						paypal: false,
					},
				};

				expect(JSON.parse(body)).to.deep.equal(expectedResponse);
				done();
			}
		);
	});
});
