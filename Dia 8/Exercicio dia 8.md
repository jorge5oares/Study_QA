# Resolução dos Exercícios do dia 8 NOSQL


1) Realizar uma consulta que conte o número de registros existentes.

		db.collection.count()

2) Realizar uma consulta para alterar o usuário com o nome "Teste Start" para "Teste Finish".

		db.collection.updateOne({nome: 'Teste Start' },{$set: {nome: 'Teste Finish'}})

3)  Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".

		db.collection.find({nome: "Bruce Wayne"})

4) Realizar uma consulta para encontrar o usuário com o e-mail

		db.collection.find({email: "ghost_silva@fantasma.com"})

5) Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".

		db.collection.deleteOne({email: "peterparker@marvel.com"})


## Após colar o Json de produtos, com base nos produtos listados, você deve:

1)  Realizar uma consulta que apresente produtos com descrição vazia;

		db.collection.find({descricao: ''})

2) Realizar uma consulta que apresente produtos com a categoria "games";

		db.collection.find({categoria: 'games'})

3) Realizar uma consulta que apresente produtos com preço "0";

		db.collection.find({preco: 0})

4) Realizar uma consulta que apresente produtos com o preço maior que "100.00"

		db.collection.find({preco: {$gt: 100}})

5) Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";

		db.collection.find({$and: [{preco: {$gt: 1000 }}, {preco: {$lt: 2000}}]})

6) Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo".

		db.collection.find({nome: /jogo/})


