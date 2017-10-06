const { check } = require('express-validator/check');
const constants = require('./constants.js');

const validations = [
	check('operationType').isIn(constants.operations),
	check('rooms').isInt(constants.rooms).optional(),
	check('propertyType').isIn(constants.propertyTypes).optional(),
	check('minSurface').isInt(constants.surface).optional(),
	check('maxSurface').isInt(constants.surface).optional()
];

module.exports = validations;