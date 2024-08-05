const cleanSet = (inputSet, startString) => {
  if (
    typeof startString !== 'string' || startString.length === 0 || !(inputSet instanceof Set)
  ) {
    return '';
  }

  const filteredItems = Array.from(inputSet)
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return filteredItems.join('-');
};

export default cleanSet;
