'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Print Schema
 */
var PrintSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	description: {
		type: String,
		default: '',
		trim: true,
		required: 'Description cannot be blank'
	},
	thumbnailLocation: {
		type: String,
		required: 'Thumbnail Location cannot be blank'
	},
	numAvailable: {
		type: Number
	},
	size: {
		type: String,
		trim: true,
		required: 'Size cannot be blank'
	},
	price: {
		type: Number,
		required: 'Price cannot be blank'
	}
});

mongoose.model('Print', PrintSchema);