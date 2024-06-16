# Repsositório de atividades referente a sprint 3!

## Abaixo tamos o mapa mental solicitado para organização 

![Alt text](<MAPAMENTAL SPRINT3.png>)

## Seguido dos seguintes planejamento de testes:


## _/Login_

**Casos de Teste:**

| ID do Caso de Teste | Descrição | Pré-condição | Passos | Resultado Esperado |  |  |
|---|---|---|---|---|---|---|
| TC-001 | Login com usuário não cadastrado | O usuário não está cadastrado no sistema. | 1. Acessar a página de login do Marketplace da ServeRest. 2. Digitar um email e senha que não estejam cadastrados no sistema. 3. Clicar no botão "Entrar". | O sistema deve retornar um erro informando que o usuário não está cadastrado. | | |
| TC-002 | Login com senha inválida | O usuário está cadastrado no sistema, mas a senha digitada está incorreta. | 1. Acessar a página de login do Marketplace da ServeRest. 2. Digitar o email do usuário cadastrado e uma senha incorreta. 3. Clicar no botão "Entrar". | O sistema deve retornar um erro informando que a senha está incorreta. | | |
| TC-003 | Login com sucesso | O usuário está cadastrado no sistema e a senha digitada está correta. | 1. Acessar a página de login do Marketplace da ServeRest. 2. Digitar o email do usuário cadastrado e a senha correta. 3. Clicar no botão "Entrar". | O sistema deve autenticar o usuário e redirecioná-lo para a página principal do Marketplace. | | |
| TC-004 | Verificação do token Bearer | O usuário foi autenticado com sucesso. | 1. Verificar o cabeçalho da resposta HTTP. | O cabeçalho da resposta HTTP deve conter um campo "Authorization" com o valor "Bearer <token>". | | |
| TC-005 | Validade do token Bearer | O usuário foi autenticado com sucesso. | 1. Autenticar o usuário e obter o token Bearer. 2. Aguardar 10 minutos. 3. Tentar realizar uma nova requisição com o token Bearer. | A requisição deve ser rejeitada com um erro informando que o token Bearer expirou. | | |


## _/Produtos_

| ID | Descrição | Pré-condição | Passos | Resultado Esperado |  |  |
|---|---|---|---|---|---|---|
| CT001 | Testar autenticação de usuário | Usuário não autenticado | 1. Acessar a rota de Produtos; | Retornar status 401 (Unauthorized) | | |
| CT002 | Testar cadastro de produto | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Informar os dados do produto; 3. Clicar em "Cadastrar". | Retornar status 201 (Created) e o produto cadastrado | | |
| CT003 | Testar cadastro de produto com nome já utilizado | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Informar os dados do produto com um nome já utilizado; 3. Clicar em "Cadastrar". | Retornar status 400 (Bad Request) e a mensagem de erro "Nome de produto já utilizado". | | |
| CT004 | Testar edição de produto | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Selecionar o produto que deseja editar; 3. Informar os dados atualizados do produto; 4. Clicar em "Atualizar". | Retornar status 200 (OK) e o produto atualizado | | |
| CT005 | Testar atualização de produto inexistente | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Informar o ID de um produto inexistente; 3. Informar os dados atualizados do produto; 4. Clicar em "Atualizar". | Retornar status 404 (Not Found) e a mensagem de erro "Produto não encontrado". | | |
| CT006 | Testar exclusão de produto | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Selecionar o produto que deseja excluir; 3. Clicar em "Excluir". | Retornar status 204 (No Content) e o produto excluído | | |
| CT007 | Testar exclusão de produto que está dentro de um carrinho | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Selecionar o produto que está dentro de um carrinho; 3. Clicar em "Excluir". | Retornar status 400 (Bad Request) e a mensagem de erro "Produto não pode ser excluído pois está dentro de um carrinho". | | |
