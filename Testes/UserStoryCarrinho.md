## US 004: [API] Carrinho


Sendo cliente ja  com cadastro em uma  loja, gostaria de selecionar um produto e adiciona-lo ao carrinho
de compras para efutuar o pagamento e finalizar o pedido.

### **DoR**

Banco de dados e infraestrutura para desenvolvimento disponibilizados;
API de cadastro de usuários implementada;
Ambiente de testes disponibilizado.

### **Dod**

Testes cobrindo a rota Carrinhos
Matriz de rastreabilidade atualizada;
Automação de testes baseado na análise realizada;


### **Acceptance Criteria**

* Usuários não autenticados não devem conseguir realizar ações na rota de Carrinhos;
* Não deve ser possível cadastrar apenas 1 carrinho por usuário;
* Ao concluir uma compra o carrinho é excluído
* Não deverá ser feita a exclusão de um carrinho vazio
* Usuários sem token de administrador não deve ser possível alterar carrinho de terceiros
* Ao cancelar uma compra o carrinho é excluído e o estoque dos produtos desse carrinho é reabastecido;