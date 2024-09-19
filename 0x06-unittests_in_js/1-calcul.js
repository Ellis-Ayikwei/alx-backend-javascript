const calculateNumber = (type, a, b) => {
	const roundedNum1 = Math.round(a);
	const roundedNum2 = Math.round(b);
	let result;

	switch (type) {
		case "SUM":
			result = roundedNum1 + roundedNum2;
			break;
		case "SUBTRACT":
			result = roundedNum1 - roundedNum2;
			break;
		case "DIVIDE":
			if (roundedNum1 === 0) {
				return "Error";
			} else {
				result = roundedNum1 / roundedNum2;
				break;
			}
		case "MULTIPLY":
			result = roundedNum1 * roundedNum2;
			break;
	}
	return result;
};

module.exports = calculateNumber;
