const Utils = require("./utils");
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
	total = Utils.calculateNumber("SUM", totalAmount, totalShipping);
	Result = `The total is: ${total}`;
	console.log(Result);
	return Result;
};

module.exports = sendPaymentRequestToApi;
