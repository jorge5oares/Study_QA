# Dia 7 :: MasterClass
## SQL

## Comandos primordias

* CRIANDO O BANCO DE DADOS:

CREATE DATABASE myecommerce;


* APAGANDO BANCO DE DADOS:

DROP DATABASE myecommerce;


* CRIANDO A TABELA DE PRODUTOS:
```
CREATE TABLE products (
	id int,
	name varchar(60),
	description varchar(150),
	category varchar(40),
	price numeric(10,2),
	in_stock boolean
);

```

## APAGANDO UMA TABELA DE PRODUTOS

DROP TABLE products;


INSERINDO REGISTROS

INSERT INTO nome_da_tabela(coluna1, coluna2)  VALUES(valor1, valor2);

* ATUALIZANDO REGISTROS:
```
UPDATE nome_da_tabela SET coluna1 = valor1, coluna2 = valor2...
WHERE condição;
```
* REMOVENDO REGISTROS:
```
DELETE FROM nome_da_tabela WHERE condição;
```
* SELECIONANDO REGISTROS
```
SELECT coluna1, coluna2, coluna3 FROM nome_da_tabela;
```

* COMANDO INSERT EXEMPLO
```
insert into products (id, name, description, category, price, in stock)

values (1, 'computador', 'computador 8 nucleos gamer', 'informática', 2600, 'true');

```
## CHAVE PRIMÁRIA(primary key)

- é um campo ou uma combinação de campos que define exclusivamente um registro;

- Nenhum dos campos que compõe a chave primária podem ser NULOS; 

- Uma tabela possui uma única chave primária;

```
CREATE TABLE products ( 
	PRIMARY KEY,
	name varchar(60),
	description varchar(150),
	category varchar(40),
	price numeric(10, 2),
	in_stock boolean
);
```

* CRIAR CHAVE PRIMÁRIA

ALTER TABLE products
ADD CONSTRAINT products_pk PRIMARY KEY(id);


* REMOVER CHAVE PRIMÁRIA
```
ALTER TABLE products
DROP CONSTRAINT products_pk;

```
- Surrogate key é um campo criado para representar a chave. Exemplo:
```
CRATE TABLE products (
	id int PRIMARY KEY,
	name varchar(60),
	description varchar(150),
	category varchar(40),
	price numeric(10, 2),
	in_stock boolean
);
```