import areas from "./areas.json"; //Comes from "../data/tojson.js"
import stats from "./stats.json"; //Comes from "../data/tosql.js"

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
