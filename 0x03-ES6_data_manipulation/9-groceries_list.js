const groceriesList = () => {
  const groceriesT = new Map();

  groceriesT.set('Apples', 10);
  groceriesT.set('Tomatoes', 10);
  groceriesT.set('Pasta', 1);
  groceriesT.set('Rice', 1);
  groceriesT.set('Banana', 5);

  return groceriesT;
};

export default groceriesList;
