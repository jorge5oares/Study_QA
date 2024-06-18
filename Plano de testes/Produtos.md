## Plano de Teste - User Story US003: API Produtos

**Objetivo:**

Testar a funcionalidade de cadastro, edição, atualização e exclusão de produtos no Marketplace do ServeRest.

**Alcance:**

Este plano de teste abrange as seguintes funcionalidades:

* Autenticação de usuários;
* Cadastro de produtos;
* Edição de produtos;
* Atualização de produtos;
* Exclusão de produtos.

**Critérios de Aceitação:**

* Usuários não autenticados não devem conseguir realizar ações na rota de Produtos;
* Não deve ser possível realizar o cadastro de produtos com nomes já utilizados;
* Não deve ser possível excluir produtos que estão dentro de carrinhos (dependência API Carrinhos);
* Caso não exista produto com o ID informado na hora do UPDATE, um novo produto deverá ser criado;
* Produtos criados através do PUT não poderão ter nomes previamente cadastrados;

**Ambiente de Teste:**

* Ambiente de testes disponibilizado pela equipe de desenvolvimento.

**Dados de Teste:**

* Serão utilizados dados válidos e inválidos para testar as funcionalidades.
* Os dados de teste serão armazenados em um arquivo CSV.

**Metodologia de Teste:**

* Será utilizada a metodologia de teste de caixa preta.
* Os testes serão manuais.

**Casos de Teste:**

| ID | Descrição | Pré-condição | Passos | Resultado Esperado | Automatizar|  |
|---|---|---|---|---|---|---|
| CT001 | Testar autenticação de usuário | Usuário não autenticado | 1. Acessar a rota de Produtos; | Retornar status 401 (Unauthorized) | | |
| CT002 | Testar cadastro de produto | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Informar os dados do produto; 3. Clicar em "Cadastrar". | Retornar status 201 (Created) e o produto cadastrado | | |
| CT003 | Testar cadastro de produto com nome já utilizado | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Informar os dados do produto com um nome já utilizado; 3. Clicar em "Cadastrar". | Retornar status 400 (Bad Request) e a mensagem de erro "Nome de produto já utilizado". | | |
| CT004 | Testar edição de produto | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Selecionar o produto que deseja editar; 3. Informar os dados atualizados do produto; 4. Clicar em "Atualizar". | Retornar status 200 (OK) e o produto atualizado |✔ | |
| CT005 | Testar atualização de produto inexistente | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Informar o ID de um produto inexistente; 3. Informar os dados atualizados do produto; 4. Clicar em "Atualizar". | Retornar status 404 (Not Found) e a mensagem de erro "Produto não encontrado". | ✔| |
| CT006 | Testar exclusão de produto | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Selecionar o produto que deseja excluir; 3. Clicar em "Excluir". | Retornar status 204 (No Content) e o produto excluído | | |
| CT007 | Testar exclusão de produto que está dentro de um carrinho | Usuário autenticado | 1. Acessar a rota de Produtos; 2. Selecionar o produto que está dentro de um carrinho; 3. Clicar em "Excluir". | Retornar status 400 (Bad Request) e a mensagem de erro "Produto não pode ser excluído pois está dentro de um carrinho". | | |

**Ferramentas de Teste:**

* Postman

**Equipe de Teste:**

* Jorge Soares


**Cronograma:**

* Início dos testes: 2024-06-15
* Término dos testes: 2024-06-20

**Riscos:**

* A API ainda está em desenvolvimento e pode haver mudanças que não foram documentadas.
* Os dados de teste podem estar incorretos.
* A equipe de teste pode não ter tempo suficiente para concluir todos os testes.

**Mitigação de Riscos:**

* Manter contato constante com a equipe de desenvolvimento para acompanhar as mudanças na API.
* Utilizar dados de teste de alta qualidade.
* Priorizar os testes mais importantes