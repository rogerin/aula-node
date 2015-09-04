module.exports = function(app){

	var Contato = app.models.contato;

	var IndexController = {
		ping: function(req,res){

			res.status(200).send('pong');
								// Resposta.find(function(err, respostas){
								// 	if(err) {
								// 		console.log("Erro ao listar gavetas: " + err);
								// 	} else {
								// 		res.render('respostas/listar', 
								// 		{
								// 			respostas: respostas,
								// 			user: req.user,
								// 			menu: 'financeiro'
								// 		});
								// 	}
								// });
			
		},
		cadastrar: function(req, res){
			//res.status(200).send('pagina de cadastro, renderizo ou nao.');
			res.render('contatos/cadastrar', { title: 'Aula nodejs'})
		},

		contatos: function(req, res){
			Contato.find(function(err, contatos){
				if(err) {
					console.log("Erro ao listar contato: " + err);
				} else {
					res.render('contatos/listar', 
					{
						contatos: contatos
					});
				}
			});
		},

		add_contato: function(req, res) {

			var nome = req.body.nome;

			var contato = new Contato();

			contato.nome = nome;

			contato.save(function(err, contato){
				if(err) {
					console.log('Erro ao cadastrar contato')
				} else {
					res.redirect('/contatos')
				}
			});

			//res.status(200).json({page: 'pagina de cadastro', dados: nome});

		},
		pagina_de_edicao: function(req,res){
			console.log(req.params.id);
			Contato.findById( req.params.id,function(err, contato){
				if(err) {
					console.log("Erro ao listar contato: " + err);
				} else {
					console.log(contato);
					res.render('contatos/editar', 
					{
						contato: contato
					});
				}
			});
		}

	};
	return IndexController;
}

