var configVals = require('./config');

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configVals.uname + ':' + configVals.pass + '@ds113648.mlab.com:13648/carmessages';
	}
}