const cleanSet = (set, startString) => {
    if (typeof startString !== "string" || startString.length === 0 || !(set instanceof Set)) {
		return "";
	}
  const filteredItems = Array.from(set).filter(item => item.startsWith(startString))
    .map(item => item.slice(startString.length));

  return filteredItems.join("-");
};

export default cleanSet;
