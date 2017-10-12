const median = (array) => {
	if(array.length % 2){
		return array[Math.floor(array.length / 2)];
	}
	else{
		return Math.ceil((array[array.length / 2 - 1] + array[array.length / 2]) / 2);
	}
};

const nullSafeLimit = (operation, property, array) => {
	return Math[operation](...array.filter(x => x[property]).map(y => y[property]));
};

module.exports.median = median;
module.exports.nullSafeLimit = nullSafeLimit;