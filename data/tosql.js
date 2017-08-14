const fs = require("fs");
const { Transform } = require("stream");
const { parse } = require("csv");

function getQuery(name, polygon) {
  return `
		SELECT 
			'${name}' as name, 
			AVG(CASE 
				WHEN operation_type = 'Venta' THEN null
				WHEN price_currency = 'USD' THEN price * 18
				ELSE price END) AS rent,
			AVG(CASE 
				WHEN operation_type = 'Alquiler' THEN null
				WHEN price_currency = 'USD' THEN price * 18
				ELSE price END) AS price,
			COUNT(1) count
		FROM inmobiliaria.propiedades_mapa 
		WHERE MBRWithin(Point(lon,lat), PolyFromText('${polygon}'))
	`;
}

const input = fs.createReadStream("barrios.csv");
const parser = parse({ from: 2 });
const queries = [];

const transformer = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(record, encoding, next) {
    if (!record) {
      this.push(record);
    }
    const [polygon, name] = record;

    const query = getQuery(name, polygon);
    queries.push(query);
    next();
  }
});

input.pipe(parser).pipe(transformer).on("finish", () => {
  const query = queries.join("UNION ALL");
  fs.writeFile("query.sql", query);
});
