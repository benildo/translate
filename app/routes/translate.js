const translate = require('../controllers/translate')

module.exports = function(server) {	
	server.post('/translate/:language?', translate.translate) 
}