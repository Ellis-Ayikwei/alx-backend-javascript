const cleanSet = (set, startString) => {
	if (typeof startString !== "string" || startString.length === 0) {
		return "";
	}

	const filteredSet = [];
	set.forEach((item) => {
		if (item.startsWith(startString)) {
			filteredSet.push(item.slice(startString.length));
		}
	});

	return filteredSet.join("-");
};

export default cleanSet;
