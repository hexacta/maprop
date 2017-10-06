const median = (array) => {
	if(array.length % 2){
		return array[Math.floor(array.length / 2)];
	}
	else{
		return Math.ceil((array[array.length / 2 - 1] + array[array.length / 2]) / 2);
	}
};

module.exports.median = median;