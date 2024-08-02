### Teste de performance /Produtos no verbo /get

### TP01 Teste de Carga

- Vus 110
- Duration 7s

![carga produtos](../../evidencias%20testes/produtos/carga%20com%20110%20vus%20em%207s.png)

### TP02 Teste de Escalabilidade

- duration: '10s', target: 50
- duration: '15s', target: 80
- duration: '20s', target: 0

![escalabilidade produtos](../../evidencias%20testes/produtos/escalabilidade%2010%2050%2015%2080%2020%200.png)

### TP03 Teste de Estresse

- duration:'20s', target:50,
- duration:'20s', target:100,
- duration:'20s', target:200,

![estresse produtos](../../evidencias%20testes/produtos/estresse%2020s%2050%20100%20%20200.png)

### TP04 Teste de Pico

- duration: '5s', target: 200
- duration: '2s', target: 0

![pico produtos](../../evidencias%20testes/produtos/pico%207s%20200.png)


### TP05 Teste de Resistencia

- vus: 110,
- duration: '5m'

![resistencia produtos](../../evidencias%20testes/produtos/resistencia%20110%20vus%205m.png)