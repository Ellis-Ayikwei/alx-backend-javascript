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
		request.get("http://localhost:7865/5", (error, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(res.headers["content-type"]).to.be.equal(
				"text/plain; charset=utf-8"
			);
			expect(body).to.be.equal("Payment methods for cart 5");
			done();
		});
	});
	it("should return Not found", (done) => {
		request.get("http://localhost:7865/a", (error, res, body) => {
			expect(res.statusCode).to.be.equal(404);
			expect(res.headers["content-type"]).to.be.equal(
				"text/plain; charset=utf-8"
			);
			expect(body).to.be.equal("Not Found");
			done();
		});
	});
});
