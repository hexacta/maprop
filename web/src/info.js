import areas from "./areas.json";
import stats from "./stats.json";

export default areas.map(({ name, coords }) => {
  const { rent, price } = stats.find(s => s.name == name);
  return {
    name,
    rent,
    price,
    coords,
    ratio: price / rent
  };
});
