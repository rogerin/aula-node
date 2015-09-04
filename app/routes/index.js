module.exports = function(app){
	var index = app.controllers.index;
		//autenticar = require('./../middleware/autenticador');

	// app.get('/ping', autenticar.loginSistema, resposta.index);
	app.get('/ping', index.ping);
	app.get('/contatos/cadastrar', index.cadastrar);

	app.post('/contatos', index.add_contato);
	app.get('/contatos', index.contatos);
	app.get('/contatos/:id', index.pagina_de_edicao);
	//app.put('/contatos/:id', index.eidtar);



}