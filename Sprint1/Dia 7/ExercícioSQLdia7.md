# Respostas exercício SQL Dia 7

1) Realizar uma consulta que conte o número de registros na tabela.

		SELECT COUNT(*) FROM usuarios

2) Realizar uma consulta para encontrar o usuário com o id 10.

		SELECT * FROM usuarios WHERE id = 10

3) Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".

		SELECT * FROM usuarios WHERE nome = 'Bruce Wayne'

4) Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".

		SELECT * FROM usuarios WHERE email = 'ghost_silva@fantasma.com'

Com base na tabela de Produtos, você deve:

1) Realizar uma consulta que apresente produtos com descrição vazia;

		SELECT * FROM produtos WHERE descricao = ''

2) Realizar uma consulta que apresente produtos com a categoria "games";

		SELECT * FROM produtos WHERE categoria = 'games'

3) Realizar uma consulta que apresente produtos com preço "0";

		SELECT * FROM produtos WHERE preco = 0

4) Realizar uma consulta que apresente produtos com o preço maior que "100.00";

		SELECT * FROM produtos WHERE preco > 100

5) Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";

		SELECT * FROM produtos WHERE preco BETWEEN 1000 AND 2000

6) Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo";

		SELECT * FROM produtos WHERE nome LIKE '%jogo%'