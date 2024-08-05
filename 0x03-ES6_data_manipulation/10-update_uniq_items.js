const updateUniqueItems = (mapIts) => {
  if (!(mapIts instanceof Map)) throw Error('Cannot process');
  for (const [key, value] of mapIts) {
    if (value === 1) mapIts.set(key, 100);
  }
  return mapIts;
};
export default updateUniqueItems;
