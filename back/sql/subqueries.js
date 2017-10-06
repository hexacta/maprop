const operationType = (operationType, params) => {
	params.push(operationType === 'rent' ? 'Alquiler' : 'Venta');
	return 'AND operation_type = ?';
};

const polygons = (area, params) => {
	let polygon = 'POLYGON (';
	area.coords.forEach(subpolygon => {
		polygon += '('
		subpolygon.forEach(coords => {
			polygon += '? ?,';
			params.push(coords.lat);
			params.push(coords.lng);
		});
		polygon = polygon.substr(0, polygon.length - 1);
		polygon += ')';
	});
	polygon += '))';
	return `AND MBRWithin(Point(lat,lon), PolyFromText('${polygon}'))`;
};

const rooms = (rooms, params) => {
	let query = '';
	if(rooms){
		params.push(rooms);
		query = 'AND rooms = ?';
	}
	return query;
};

const propertyType = (propertyType, params) => {
	let query = '';
	if(propertyType){
		params.push(propertyType);
		query = 'AND property_type = ?';
	}
	return query;
};

const minSurface = (minSurface, params) => {
	let query = '';
	if(minSurface){
		params.push(minSurface);
		query = "AND CAST(TRIM(REPLACE(REPLACE(REPLACE(area_covered, 'm', ''), '²', ''),',','.')) AS UNSIGNED) >= ?";
	}
	return query;
};

const maxSurface = (maxSurface, params) => {
	let query = '';
	if(maxSurface){
		params.push(maxSurface);
		query = "AND CAST(TRIM(REPLACE(REPLACE(REPLACE(area_covered, 'm', ''), '²', ''),',','.')) AS UNSIGNED) <= ?";
	}
	return query;
};

module.exports.operationType = operationType;
module.exports.polygons = polygons;
module.exports.rooms = rooms;
module.exports.propertyType = propertyType;
module.exports.minSurface = minSurface;
module.exports.maxSurface = maxSurface;
