# Planejamento de testes


## 1 Objetivo do Teste:

- Validar o funcionamento da funcionalidade de cadastro de vendedores no Marketplace ServeRest.

- Garantir que o sistema atenda aos requisitos da user story:
Os vendedores (usuários) deverão possuir os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR;

- Não deverá ser possível fazer ações e chamadas para usuários inexistentes;

- Não deve ser possível criar um usuário com e-mail já utilizado;

- Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado;

- Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT;

- Os testes executados deverão conter evidências;
Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail;

- Os e-mails devem seguir um padrão válido de e-mail para o cadastro;

- As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres;

- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## 2 Escopo do Teste:

 ### Módulo: Cadastro de Vendedores

**Funcionalidades:**

- Cadastrar novo vendedor
- Atualizar dados do vendedor
- Consultar vendedor por ID
- Listar todos os vendedores
- Remover vendedor

## 3 Casos de Testes:


| ID | Descrição                                                | Ação | Resultado Esperado|
|---|---|---|---|
| CT01 | Cadastrar novo vendedor | Preencher o formulário de cadastro com dados válidos|O sistema deve cadastrar o novo vendedor com sucesso e retornar um código de status 201 (criado)
| CT02 | Cadastrar novo vendedor com nome em branco| Preencher o formulário de cadastro com nome em branco e clicar em "Cadastrar"| O sistema deve exibir uma mensagem de erro informando que o campo nome é obrigatório
| CT03 |  Cadastrar novo vendedor com e-mail em branco| Preencher o formulário de cadastro com e-mail em branco e clicar em "Cadastrar"|O sistema deve exibir uma mensagem de erro informando que o campo e-mail é obrigatório
| CT04 | Cadastrar novo vendedor com senha em branco|Preencher o formulário de cadastro com senha em branco e clicar em "Cadastrar"|O sistema deve exibir uma mensagem de erro informando que o campo senha é obrigatório
| CT05 | Cadastrar novo vendedor com e-mail inválido|Preencher o formulário de cadastro com um e-mail inválido (ex: sem o símbolo @) e clicar em "Cadastrar"|O sistema deve exibir uma mensagem de erro informando que o e-mail é inválido
| CT06 | Cadastrar novo vendedor com senha menor que 5 caracteres|Preencher o formulário de cadastro com uma senha menor que 5 caracteres e clicar em "Cadastrar"|O sistema deve exibir uma mensagem de erro informando que a senha deve ter no mínimo 5 caracteres
| CT07 | Cadastrar novo vendedor com senha maior que 10 caracteres|Preencher o formulário de cadastro com uma senha maior que 10 caracteres e clicar em "Cadastrar"|O sistema deve exibir uma mensagem de erro informando que a senha deve ter no máximo 10 caracteres
| CT08 | Cadastrar novo vendedor com e-mail já utilizado|Preencher o formulário de cadastro com um e-mail já utilizado por outro vendedor e clicar em "Cadastrar"|O sistema deve exibir uma mensagem de erro informando que o e-mail já está em uso
| CT09 | Cadastrar novo vendedor com e-mail de provedor gmail ou hotmail|Preencher o formulário de cadastro com um e-mail de provedor gmail ou hotmail e clicar em "Cadastrar"|O sistema deve exibir uma mensagem de erro informando que o e
