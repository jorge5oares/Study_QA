<p align="center">
<img src="https://miro.medium.com/v2/resize:fit:1400/1*vbT1NDY1DvTaPH_8eKyKmw.png" alt="Placeholder Image" width="500" />



## Sprint 7! 🚀🚀

### _Mais uma vez utilizando a ferramenta k6, aprofundamos nossos conhecimentos em teste de performances, visando a qualidade da API ServeRest._

### Aprendemos sobre: 📘📝

- Estrutura de projeto com K6
- Ciclo de vida dos testes
- Camada de Services (BaseService, BaseRest)
- Centralizando Checks
- Constantes com constants.js


## Interessante, não? Mas como podemos rodar em nossa máquina? 🤔

<p align="center">
<img src="https://maiconramos.com/wp-content/uploads/2023/03/performance.jpg" alt="Placeholder Image" width="500" />


### 🛠️ Aqui tem um breve tutorial de como adquirir a ferramenta e as cofingurações necessárias para a execução dos testes!


### ✅ Primeiro passo:

- instale uma IDE de sua preferencia (no meu caso eu usei o Vscode, voce pode baixai por aqui: https://code.visualstudio.com/download)

### ✅ Segundo passo:

- Faça a instalação da ferramenta K6 https://k6.io/docs/get-started/installation/, atravez do link ele mostra o passo a passo para a instalação em qualquer sistema operacional.

### ✅ Terceiro passo

- Apos a instalação do k6, é necessário rodar a API localmente como o _npx serverest@latest_ atravez do terminal. Lembarndo que é necessário estar com o node instalado para este procedimento https://nodejs.org/pt/download/package-manager


### ✅ Último passo

- Para fazer a execução dos teste basta ir na pasta de destino e com o terminal aberto digitar:
k6 run .\stressGetCarrinhos.js por exemplo para dar inicio ao teste.


### ✅✅✅ E pronto, com isso voce ja deve conseguir executar todos os testes normalmente.


## ⚠️ Os meus testes em questão focaram em: 

- Capacity
- Load
- Endurance
- Spike
- Stress

### Fui mais alem nesta sprint comparado com as outras, aumentando ainda mais as métricas dos testes, mas sempre com cautela para não acontecer isso:

<p align="center">
<img src="https://media1.tenor.com/m/CcCDRhgwP78AAAAC/overheat-computer.gif" alt="Placeholder Image" width="500" />

### [Por qui voce encontra o plano de teste](./Challenger/Plano%20de%20testes/plano%20de%20teste.md) 📝
### [E os resultado dos testes em questão](./Challenger/Resultado%20dos%20Testes/) 🛠️


### Agradecimento aos que contribuíram com este projeto:

- Letícia Ribeiro
- Daniel Pontes
- Enzo Rossi
- Mathias
- Oliver
- Davi
- Gabriel Just
- Edgar

_Cada ideia compartilhada contribuiu para o sucesso do nosso trabalho em equipe. Agradeço por estarem sempre dispostos a esclarecer dúvidas, resolver problemas e trabalhar juntos para atingir nossos objetivos.
Vocês são incríveis! Vamos continuar construindo coisas incríveis juntos._ 

<p align="center">
<img src="https://25.media.tumblr.com/tumblr_m4cksqQBmv1rszfv7o1_500.gif" alt="Placeholder Image" width="500" />