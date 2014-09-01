'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	prints = require('../../app/controllers/prints');

module.exports = function(app) {
	// print Routes
	app.route('/prints')
		.get(prints.list)
		.post(users.requiresLogin, prints.create);

	app.route('/prints/:printId')
		.get(prints.read)
		.put(users.requiresLogin, prints.hasAuthorization, prints.update)
		.delete(users.requiresLogin, prints.hasAuthorization, prints.delete);

	// Finish by binding the print middleware
	app.param('printId', prints.printByID);
};