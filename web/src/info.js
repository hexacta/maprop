import areas from "./areas.json"; //Comes from "../data/tojson.js"
import stats from "./stats.json"; //Comes from "../data/tosql.js"

export default areas.map(({ name, coords }) => {
  const { rent, price, count } = stats.find(s => s.name == name);
  return {
    name,
    rent,
    price,
    coords,
    count,
    ratio: price / rent
  };
});
