# Dia 5 :: MasterClass Cobertura de testes de APIs & Testes candidatos à automação


# Cobertura de testes


**Path Coverage (input)**

* Verifica a cobertura da suíte de testes de acordo com os endpoints que a API possui. Este critério
é importante, pois ao receber uma solicitação, o programa pode executar caminhos diferentes, então
precisamos garantir que os endpoints da API REST estão cobertos pelos testes.


* A análise é realizada pela quantidade de URI( URL + URN (Resource name)) que a API possui (se for a mesma
URI para métodos diferentes, considera-se apenas um).

O ideal é realizar ao menos uma requisição para verificar cada endpoint.


**Operator Coverage (input)**

- Confere a cobertura de testes de todos os métodos existentes na API REST (GET, POST, PUT, DELETE…).


**Parameter Coverage (input)**

- Verifica a cobertura de uma suíte de testes conforme os parâmetros existentes em cada método da API.

- Para atingir 100% de cobertura de testes é necessário testar todos os parâmetros de entrada de cada operação pelo
menos uma vez. Realizar a combinação de todos os parâmetros é desejável, mas não estritamente necessário para chegar a 100% de cobertura.

Status Code Coverage (Output)
Este critério verifica quais status codes existentes em cada endpoint estão cobertos pelos testes.
**Parameter Value Coverage (input)**

- Confere a cobertura da suíte de testes de parâmetros booleano e enum nas operações (se existirem).

**Para calcular a cobertura:**

- Quantidade total de valores diferentes enviados / quantidade total de valores que podem assumir.

- Para atingir 100% de cobertura cada parâmetro booleano e enum deve assumir todos os valores possíveis.

**Content-Type Coverage (input e output)**

- Verifica a cobertura de testes automatizados onde o content-type está sendo exibido em cada endpoint, ou seja, se for
demonstrado nas opções do content-type de envio application/json e um application/xml, então duas opções do parâmetros
de envio deveriam ser cobertas.

**Operation Flow (input)**

- Este critério mede um conjunto de testes de acordo com as sequências de operações que é executado.

**Por exemplo:**

- Fluxo1: Post-Get(id)

- Fluxo2: Post-Put

- Fluxo3: Post-Delete

- Fluxo4: Post-Get(Query)

Se todos os fluxos estiverem implementados no teste automatizado, então a API Rest está 100% coberta pela automação.

**Status Code Coverage (Output)**

- Este critério verifica quais status codes existentes em cada endpoint estão cobertos pelos testes.

# Testes candidatos à automação

_Não é todo teste que pode e deve ser automatizado_

Comunicação franca e direta com o cliente pra entender qual a necessidade do mesmo.


**O mapa mental**

- Esta organizado por arvores de funcionalidades

- Tem a parte priorizada e a parte não priorizada

**Criar fluxos para os exercícios anteriores**

- Existem diversos tipos de fluxo de compras
- Elaborar cada um de acordo com a demanda

