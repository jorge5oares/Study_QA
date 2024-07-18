# Planejamento de Testes de Desempenho para API Serverest

## Objetivo
Assegurar a qualidade e robustez das funcionalidades da API Serverest por meio de testes sistemáticos e abrangentes, abrangendo diversos cenários de carga e desempenho.

## Estratégia de Testes
### Abordagem
- **Teste de Carga:** Avaliar a capacidade do sistema de lidar com níveis crescentes de carga.
- **Teste de Estresse:** Verificar a capacidade do sistema de suportar picos de carga que ultrapassem os limites previstos.
- **Teste de Escalabilidade:** Avaliar a capacidade do sistema de atender aos requisitos futuros de eficiência.
- **Teste de Pico:** Avaliar a capacidade do sistema de lidar com rajadas repentinas de carga máxima.
- **Teste de Resistência:** Verificar a estabilidade do sistema ao longo de um período prolongado.
- **Teste de Concorrência:** Avaliar o impacto de ações simultâneas no sistema.
- **Teste de Capacidade:** Determinar o número máximo de usuários e/ou transações que o sistema pode suportar.

# Matriz de Rastreabilidade para Testes de Desempenho na API Serverest

## Rota /usuarios

| ID do Caso de Teste | Descrição | Critério de Aceitação | Passos | Resultado Esperado | Tipo de Teste de Desempenho |
|---------------------|-----------|-----------------------|--------|---------------------|------------------------------|
| CT-001 | Teste de Carga para Registro de Usuário | Tempo de resposta deve ser inferior a 2 segundos para 3000 usuários simultâneos | 1. Simular 3000 usuários enviando requisições POST para /usuarios. | Todos os usuários são registrados com sucesso. | Teste de Carga |
| CT-002 | Teste de Estresse para Registro de Usuário | Sistema deve suportar 6000 usuários simultâneos sem falhas críticas | 1. Simular 6000 usuários enviando requisições POST para /usuarios. | Sistema permanece estável. | Teste de Estresse |
| CT-003 | Teste de Escalabilidade para Registro de Usuário | Sistema deve manter desempenho aceitável com aumento progressivo de carga | 1. Aumentar gradualmente o número de usuários enviando requisições POST para /usuarios até 3000 usuários. | Sistema mantém bom desempenho. | Teste de Escalabilidade |
| CT-004 | Teste de Pico para Registro de Usuário | Sistema deve lidar com rajadas súbitas de 4500 usuários em 2 minutos | 1. Simular 4500 usuários enviando requisições POST para /usuarios em 2 minutos. | Sistema permanece estável. | Teste de Pico |
| CT-005 | Teste de Resistência para Registro de Usuário | Sistema deve permanecer estável após 60 minutos de carga contínua | 1. Simular 3000 usuários enviando requisições POST para /usuarios continuamente por 60 minutos. | Sistema permanece estável. | Teste de Resistência |
| CT-006 | Teste de Concorrência para Registro de Usuário | Verificar impacto de registros simultâneos | 1. Simular 3000 usuários enviando requisições POST para /usuarios simultaneamente. | Todos os usuários são registrados com sucesso. | Teste de Concorrência |
| CT-007 | Teste de Capacidade para Registro de Usuário | Determinar o número máximo de usuários suportados mantendo performance aceitável | 1. Simular 500, 1000, 2000, 3000 e 5000 usuários enviando requisições POST para /usuarios. | Todos os usuários são registrados com sucesso. | Teste de Capacidade |

## Rota /login

| ID do Caso de Teste | Descrição | Critério de Aceitação | Passos | Resultado Esperado | Tipo de Teste de Desempenho |
|---------------------|-----------|-----------------------|--------|---------------------|------------------------------|
| CT-008 | Teste de Carga para Login | Tempo de resposta deve ser inferior a 2 segundos para 3000 usuários simultâneos | 1. Simular 3000 usuários enviando requisições POST para /login. | Todos os usuários são autenticados com sucesso. | Teste de Carga |
| CT-009 | Teste de Estresse para Login | Sistema deve suportar 6000 usuários simultâneos sem falhas críticas | 1. Simular 6000 usuários enviando requisições POST para /login. | Sistema permanece estável. | Teste de Estresse |
| CT-010 | Teste de Escalabilidade para Login | Sistema deve manter desempenho aceitável com aumento progressivo de carga | 1. Aumentar gradualmente o número de usuários enviando requisições POST para /login até 3000 usuários. | Sistema mantém bom desempenho. | Teste de Escalabilidade |
| CT-011 | Teste de Pico para Login | Sistema deve lidar com rajadas súbitas de 4500 usuários em 2 minutos | 1. Simular 4500 usuários enviando requisições POST para /login em 2 minutos. | Sistema permanece estável. | Teste de Pico |
| CT-012 | Teste de Resistência para Login | Sistema deve permanecer estável após 60 minutos de carga contínua | 1. Simular 3000 usuários enviando requisições POST para /login continuamente por 60 minutos. | Sistema permanece estável. | Teste de Resistência |
| CT-013 | Teste de Concorrência para Login | Verificar impacto de logins simultâneos | 1. Simular 3000 usuários enviando requisições POST para /login simultaneamente. | Todos os usuários são autenticados com sucesso. | Teste de Concorrência |
| CT-014 | Teste de Capacidade para Login | Determinar o número máximo de usuários suportados mantendo performance aceitável | 1. Simular 500, 1000, 2000, 3000 e 5000 usuários enviando requisições POST para /login. | Todos os usuários são autenticados com sucesso. | Teste de Capacidade |

## Rota /produtos

| ID do Caso de Teste | Descrição | Critério de Aceitação | Passos | Resultado Esperado | Tipo de Teste de Desempenho |
|---------------------|-----------|-----------------------|--------|---------------------|------------------------------|
| CT-015 | Teste de Carga para Cadastro de Produto | Tempo de resposta deve ser inferior a 2 segundos para 3000 usuários simultâneos | 1. Simular 3000 usuários enviando requisições POST para /produtos. | Todos os produtos são cadastrados com sucesso. | Teste de Carga |
| CT-016 | Teste de Estresse para Cadastro de Produto | Sistema deve suportar 6000 usuários simultâneos sem falhas críticas | 1. Simular 6000 usuários enviando requisições POST para /produtos. | Sistema permanece estável. | Teste de Estresse |
| CT-017 | Teste de Escalabilidade para Cadastro de Produto | Sistema deve manter desempenho aceitável com aumento progressivo de carga | 1. Aumentar gradualmente o número de usuários enviando requisições POST para /produtos até 3000 usuários. | Sistema mantém bom desempenho. | Teste de Escalabilidade |
| CT-018 | Teste de Pico para Cadastro de Produto | Sistema deve lidar com rajadas súbitas de 4500 usuários em 2 minutos | 1. Simular 4500 usuários enviando requisições POST para /produtos em 2 minutos. | Sistema permanece estável. | Teste de Pico |
| CT-019 | Teste de Resistência para Cadastro de Produto | Sistema deve permanecer estável após 60 minutos de carga contínua | 1. Simular 3000 usuários enviando requisições POST para /produtos continuamente por 60 minutos. | Sistema permanece estável. | Teste de Resistência |
| CT-020 | Teste de Concorrência para Cadastro de Produto | Verificar impacto de cadastros simultâneos | 1. Simular 3000 usuários enviando requisições POST para /produtos simultaneamente. | Todos os produtos são cadastrados com sucesso. | Teste de Concorrência |
| CT-021 | Teste de Capacidade para Cadastro de Produto | Determinar o número máximo de usuários suportados mantendo performance aceitável | 1. Simular 500, 1000, 2000, 3000 e 5000 usuários enviando request