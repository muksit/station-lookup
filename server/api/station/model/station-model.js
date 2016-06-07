"use strict";

const mongoose = require('mongoose');

const _stationSchema = {
	locationName: {
		type: String,
		required: true
	},
	latitude: {
		type: Number,
		required: true
	},
	longitude: {
		type: Number,
		required: true
	}
};

module.exports = mongoose.Schema(_stationSchema);
