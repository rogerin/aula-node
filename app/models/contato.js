module.exports = function (app) {
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;


	var contato = new Schema({
		nome: { type: String, default: ""}
	});

	return mongoose.model('Contato', contato);


}