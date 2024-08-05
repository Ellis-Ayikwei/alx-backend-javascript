const cleanSet = (inputSet, prefix) => {
  if (typeof prefix !== 'string' || prefix.length === 0 || !(inputSet instanceof Set)) {
    return '';
  }

  const filteredItems = Array.from(inputSet)
    .filter(item => item.startsWith(prefix))
    .map(item => item.slice(prefix.length));

  return filteredItems.join('-');
};

export default cleanSet;
