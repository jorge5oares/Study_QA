### Teste de performance /Produtos no verbo /post

### TP01 Teste de Carga

- vus: 500,
- duration: '15s'

![carga login](../../evidencias%20testes/login/carga%20login%20vus%20500%2015s.png)

### TP02 Teste de Escalabilidade

- duration: '10s', target: 50 , 
- duration: '15s', target: 80 , 
- duration: '20s', target: 0

![escalabilidade login](../../evidencias%20testes/login/escalabilidade%20login%20duration%2010s%20target%20500%20%2010s%20%2080%20%2020s%200.png)

### TP03 Teste de Estresse

- duration:'20s', target:50,
- duration:'20s', target:100,
- duration:'20s', target:200

![estresse login](../../evidencias%20testes/login/estresse%20%20duration%2020s%2050%20100%20200.png)

### TP04 Teste de Pico

- duration: '3s', target: 600 , 
- duration: '15s', target: 0

![pico login](../../evidencias%20testes/login/pico%203s%20target%20%20600%2015%20target%200.png)

### TP05 Teste de Resistencia

- vus: 300,
- duration: '5m',

![resistencia login](../../evidencias%20testes/login/resistencia%20300%205m.png)

