const assert = require("assert").strict;
const Utils = require("./utils");
const getPaymentTokenFromAPI = require("./6-payment_token");

const expect = require("chai").expect;
const sinon = require("sinon");

describe("getPaymentTokenFromAPI", function () {
    beforeEach(() => {
        // Restore Sinon to a clean state
        sinon.restore();
    });

    it("should return a resolved {data: 'Successful response from the API' }", function (done) {
        getPaymentTokenFromAPI(true).then((result) => {
            expect(result).to.deep.equal({
                data: "Successful response from the API",
            });
            done();
        }).catch(done);
    });

    afterEach(() => {
        sinon.restore();
    });
});
