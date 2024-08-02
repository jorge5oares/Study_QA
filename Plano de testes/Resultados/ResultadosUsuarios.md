### Teste de performance /USUARIOS no verbo /get

### TP01 Teste de carga

- vus: 310
- duration: 7s
    
![carga usuario](../../evidencias%20testes/Usuarios/carga%20vus%20310%207s.png)


### TP02 Teste de escalabilidade

- duration: '10s', target: 50  
- duration: '15s', target: 80 
- duration: '20s', target: 0s

![escalabilidade usuario](../../evidencias%20testes/Usuarios/escalabilidade%2010s%2050%2015%2080%2020s%200.png)

### TP03 Teste de estresse

- duration:'20s', target:50
- duration:'20s', target:100
- duration:'20s', target:200

![estresse usuario](../../evidencias%20testes/Usuarios/estresse%2020s%2050%2010%20200.png)

### TP04 Teste de pico

- duration: '5s', target: 400
- duration: '2s', target: 0

(Esse deu algum erro que quebrou minha cabeça um pouco)

![pico usuario](../../evidencias%20testes/Usuarios/pico%20com%205s%20400%20vus%20target%202%200(nao%20deu%20muito%20certo).png
)

### TP05 Teste de Resistencia

- Vus 210
- Duration 5m

![resistencia usuario](../../evidencias%20testes/Usuarios/resistencia%20210%205m.png)

