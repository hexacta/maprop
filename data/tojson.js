const fs = require("fs");
const { Transform } = require("stream");
const { parse } = require("csv");

const input = fs.createReadStream("barrios.csv");
const parser = parse({ from: 2 });

const transformer = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(record, encoding, next) {
    if (!record) {
      this.push(record);
    }
    const [polygon, name] = record;
    const coords = polygon
      .slice(10, -2)
      .split("),(")
      .map(path =>
        path
          .split(",")
          .map(longlat => longlat.split(" "))
          .map(longlat => ({ lng: +longlat[0], lat: +longlat[1] }))
      );

    this.push({ name, coords });
    next();
  }
});

const areas = [];
const reducer = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(area, encoding, next) {
    areas.push(area);
    next();
  }
});

input.pipe(parser).pipe(transformer).pipe(reducer).on("finish", () => {
  const data = JSON.stringify(areas, null, 2);
  fs.writeFile("areas.json", data);
});
