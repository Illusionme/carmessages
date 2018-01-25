var carEmails = require('../models/carEmailsModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.get('/api/caremails', function(req, res) {
		carEmails.find({}, 
			function(err, caremails) {
				if (err) throw err;
				res.send(caremails);
			});
	});
}

