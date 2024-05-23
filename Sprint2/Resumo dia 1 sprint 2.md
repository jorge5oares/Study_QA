# Dia 1 :: MasterClass Conceitos HTTP, API REST, JSON, User Stories & Issues


**Definition of Ready (DoR) – Mais qualidade no Product Backlog**

	_Definition of Ready (DoR), que traduzindo para o português significa a “Definição
	 de preparado”, é uma técnica de qualidade e gestão de risco que apoia a entrada de
	 uma história para o delivery. Basicamente são pré-requisitos de um backlog, para
	 que seja considerado apto para iniciar o desenvolvimento._ 


##Problemas o Definition of Ready poderia evitar

* Seu time tem bloqueios na etapa de desenvolvimento constantemente?

* Parece que nunca conseguem lançar nada em produção, pois sempre há um bloqueio ou algo novo que aparece?

* Time desmotivado, pois se sente culpado por não realizar as entregas no prazo estabelecido?


**O que é importante estar no DoR?**

* O que o devTeam precisa ter para iniciar o desenvolvimento?

* O que precisa estar pronto para iniciar o desenvolvimento?

* Quais acessos, ferramentas, documentação e ambientes precisamos possuir para iniciar o desenvolvimento?

* Quais permissões e aprovações precisam ser realizadas para iniciar o desenvolvimento?

* Quais práticas e técnicas precisam ser feitas para iniciar o desenvolvimento?


**Exemplos de Definition of Ready (DoR)**

Exemplo 1:  Equipe Front-End – História XYZ

* Protótipo de alta fidelidade pronto e validado com o usuário.

* Protótipo de alta fidelidade pronto e entregue para devs.

* Protótipo de acessibilidade pronto e entregue para devs.

* Todas histórias refinadas pelo time de desenvolvimento.

Exemplo 2: Produto Open Banking

* As histórias devem estar escritas utilizando o modelo INVEST.

* Todas histórias refinadas.

* Possuir massa para testes.

* APIs dos parceiros prontas e validadas, que iremos utilizar na jornada X.


**Caso algum critério não seja cumprido no DoR, posso iniciar o desenvolvimento?**

 Depois de todos os critérios serem descritos, é muito importante que todos
 sejam cumpridos, pois os itens que foram levantados são critérios importantes
 para se iniciar o desenvolvimento. Caso esses critérios não sejam cumpridos ou
 sejam deixados de lado, pode haver bloqueios e dificuldades na etapa do desenvolvimento.
 Dessa forma haverá retrabalho, prazos atrasados e estresse para todo time.

**Toda a equipe é resposnável pela definição do DoR**


**Quem é responsável por tornar um critério Ready?**

	A responsabilidade por tornar um critério ready é das lideranças do projeto, por exemplo,
	Team Lead, Scrum Master, Tech Lead e Product Owner.

* **Benefícios do DoR**

	Evitar bloqueios na etapa de desenvolvimento, cumprimento dos prazos estabelecidos, pois não
	teremos nenhuma surpresa, time motivado por enxergar seu código sendo entregue na data correta.

* **Desafios do DoR**

	Definition of Ready pode ser uma ferramenta muito útil, porém ela pode se tornar uma muleta para
	seu time e gerar uma burocracia desnecessária ao invés de agilidade.


## Conceitos HTTP, API REST & JSON

# MICROSSERVIÇOS vs MONOLITO:

**Principais vantagens: MONOLITO**

* Fácil de entender
* curva de aprendizado

**Desvantagens:**

* Escalabilidade
* Dependência entre componentes

**Principais vantagens: MICROSSERVIÇOS**

* Manutenção
* Escalabilidade

**Desvantagens**

* Complexidade adicional
* Entendimento da arquitetura

## O que é uma API?

A sigla API ou 'Interface de Programação de Aplicações' refere-se a serviços que são uma forma de integrar sistemas, possibilitando
benefícios como a segurança dos dados, facilidade no intercâmbio entre informações com diferentes linguagens de programação e a
monetização de acessos.

**Vantagens ao usar APIs**

- Redução de Custos

- Segurança

- Melhoria na comunicação

- Volume de dados

- Controle de acessos

## INTRODUÇÃO AO HTTP

HTTP ou Hyper Text Transfer Protocol, é um protocolo usado para obter recursos, como por exemplo documentos HTML que 
vemos e utilizamos diariamente na WEB e além disso servem também para intermediar a comunicação com APIs.

- Requests: São criadas pelo cliente (acesso a um Website, chamada para uma API)

- Responses: Retorno do servidor, acompanhadas de status code e informações solicitadas (json)

- HTTP e HTTPS: HTTP é um protocolo baseado em texto, HTTPS garante a segurança das informações através de chaves

## VERBOS HTTP E STATUS CODE

**VERBOS HTTP**

```

	---> GET
	<--- PUT
	<--- POST
	 X   DELETE 

```

**FAMÍLIAS STATUS CODES**

```
	1XX -> INFORMATIVA
	2XX -> SUCESSO
	3XX -> REDIRECIONAMENTO
	4XX -> ERRO DE CLIENTE
	5XX -> ERROS DE SERVIDOR

```


## INTRODUÇÃO A APIs


**{REST} vs {RESTful}**

* REST : (Representational State Transfer) é um estilo de arquitetura que define padrões que facilitam a comunicação entre sistemas via
Web, permite que o cliente e o servidor sejam implementados independentemente, sem a necessidade que um tenha conhecimento
da implementação do outro. Usa o protocolo HTTP e é baseado em contrato.


* RESTful : Possui os mesmos princípios de REST. A diferença é que a API implementada precisa estar de acordo com todas regras e
restrições definidas para a construção de APIs REST. Em resumo a API precisa ter um grau de maturidade alto para cumprir todos os
critérios de uma API REST definidos porRoy Fielding
