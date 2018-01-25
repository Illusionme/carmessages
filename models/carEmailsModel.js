var mongoose = require('mongoose');

var schema = mongoose.Schema;

var carEmailSchema = new schema({
	from: String,
	to: String,
	message: String,
	emoji: String
});

var caremails = mongoose.model('caremails', carEmailSchema);

module.exports = caremails;

