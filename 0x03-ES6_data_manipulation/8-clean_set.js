const cleanSet = (set, prefix) => {
  const filteredSet = [];
  if (prefix) {
    set.forEach((item) => {
      if (item.startsWith(prefix)) {
        filteredSet.push(item.slice(prefix.length));
      }
    });
  }
  return filteredSet.join('-');
};

export default cleanSet;
