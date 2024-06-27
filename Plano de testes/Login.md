## Planejamento de Teste para User Story US 002: Login

**Objetivo:**

Verificar se a funcionalidade de login do Marketplace da ServeRest está funcionando de acordo com os requisitos da User Story US 002.

**Histórico:**

* A User Story US 002 define que os vendedores da loja devem ser capazes de se autenticar no Marketplace da ServeRest para cadastrar, editar, atualizar e excluir seus produtos.
* Os critérios de aceitação da User Story incluem:
    * Usuários não cadastrados não devem conseguir autenticar.
    * Usuários com senha inválida não devem conseguir autenticar.
    * No caso de não autenticação, deve ser retornado um status code 401 (Unauthorized).
    * Usuários existentes e com a senha correta devem ser autenticados.
    * A autenticação deve gerar um token Bearer.
    * A duração da validade do token deve ser de 10 minutos.
    * Os testes executados devem conter evidências.

**Escopo:**

Este planejamento de teste cobre a funcionalidade de login do Marketplace da ServeRest, incluindo os casos de teste para os critérios de aceitação da User Story US 002.

**Casos de Teste:**

| ID do Caso de Teste | Descrição | Pré-condição | Passos | Resultado Esperado | Automatizar | |
|---|---|---|---|---|---|---|
| TC-001 | Login com usuário não cadastrado | O usuário não está cadastrado no sistema. | 1. Acessar a página de login do Marketplace da ServeRest. 2. Digitar um email e senha que não estejam cadastrados no sistema. 3. Clicar no botão "Entrar". | O sistema deve retornar um erro informando que o usuário não está cadastrado. |  ✔ | |
| TC-002 | Login com senha inválida | O usuário está cadastrado no sistema, mas a senha digitada está incorreta. | 1. Acessar a página de login do Marketplace da ServeRest. 2. Digitar o email do usuário cadastrado e uma senha incorreta. 3. Clicar no botão "Entrar". | O sistema deve retornar um erro informando que a senha está incorreta. | | |
| TC-003 | Login com sucesso | O usuário está cadastrado no sistema e a senha digitada está correta. | 1. Acessar a página de login do Marketplace da ServeRest. 2. Digitar o email do usuário cadastrado e a senha correta. 3. Clicar no botão "Entrar". | O sistema deve autenticar o usuário e redirecioná-lo para a página principal do Marketplace. | | |
| TC-004 | Verificação do token Bearer | O usuário foi autenticado com sucesso. | 1. Verificar o cabeçalho da resposta HTTP. | O cabeçalho da resposta HTTP deve conter um campo "Authorization" com o valor "Bearer <token>". | ✔| |
| TC-005 | Validade do token Bearer | O usuário foi autenticado com sucesso. | 1. Autenticar o usuário e obter o token Bearer. 2. Aguardar 10 minutos. 3. Tentar realizar uma nova requisição com o token Bearer. | A requisição deve ser rejeitada com um erro informando que o token Bearer expirou. | | |

**Ambiente de Teste:**

* Sistema operacional: Windows 10
* Navegador web: Google Chrome
* Banco de dados: PostgreSQL

**Ferramentas de Teste:**

* Postman

**Cronograma:**

* Data de início: 14/06/2024
* Data de término: 15/06/2024

**Responsável:**

Jorge Soares de Carvalho

**Aprovação:**

[Nome do gerente]